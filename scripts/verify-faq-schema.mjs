import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

const REPRESENTATIVE_URLS = [
  '/',
  '/about/faqs/',
  '/carlsbad/',
  '/carlsbad/ev-charger-installation/',
  '/encinitas/electrical-panel-upgrades/',
  '/san-marcos/recessed-lighting-installation/',
  '/vista/outlet-switch-dimmer-gfci-repairs/',
];

function normalizeWhitespace(value) {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function urlToDistPath(urlPath) {
  const clean = urlPath.replace(/^\/+|\/+$/g, '');
  return clean.length === 0
    ? path.join(DIST_DIR, 'index.html')
    : path.join(DIST_DIR, clean, 'index.html');
}

function getVisibleFaqs(html) {
  const questionByIndex = new Map();
  const answerByIndex = new Map();

  const questionRegex =
    /<button[^>]*data-faq-toggle=["'](\d+)["'][^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/gi;
  const answerRegex =
    /<div[^>]*data-faq-content=["'](\d+)["'][^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;

  for (const match of html.matchAll(questionRegex)) {
    const index = Number.parseInt(match[1] ?? '', 10);
    const question = normalizeWhitespace(match[2] ?? '');
    if (Number.isInteger(index) && question) {
      questionByIndex.set(index, question);
    }
  }

  for (const match of html.matchAll(answerRegex)) {
    const index = Number.parseInt(match[1] ?? '', 10);
    const answer = normalizeWhitespace(match[2] ?? '');
    if (Number.isInteger(index) && answer) {
      answerByIndex.set(index, answer);
    }
  }

  return [...questionByIndex.keys()]
    .sort((a, b) => a - b)
    .map((index) => {
      const question = questionByIndex.get(index) ?? '';
      const answer = answerByIndex.get(index) ?? '';
      return { question, answer };
    })
    .filter((faq) => faq.question && faq.answer);
}

function flattenJsonLd(input) {
  if (!input || typeof input !== 'object') {
    return [];
  }

  if (Array.isArray(input)) {
    return input.flatMap(flattenJsonLd);
  }

  if (Array.isArray(input['@graph'])) {
    return flattenJsonLd(input['@graph']);
  }

  return [input];
}

function getFaqPageNode(html, relPath, errors) {
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const scripts = [...html.matchAll(jsonLdRegex)];

  if (scripts.length === 0) {
    errors.push(`${relPath}: missing JSON-LD script tag`);
    return null;
  }

  const faqNodes = [];

  for (const scriptMatch of scripts) {
    const rawJson = (scriptMatch[1] || '').trim();

    if (!rawJson) {
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(rawJson);
    } catch (error) {
      errors.push(`${relPath}: JSON-LD failed to parse (${error.message})`);
      continue;
    }

    for (const node of flattenJsonLd(parsed)) {
      if (node?.['@type'] === 'FAQPage') {
        faqNodes.push(node);
      }
    }
  }

  if (faqNodes.length === 0) {
    errors.push(`${relPath}: JSON-LD present but no FAQPage node found`);
    return null;
  }

  return faqNodes[0];
}

function normalizeFaqList(faqs) {
  return faqs.map((faq) => ({
    question: normalizeWhitespace(faq.question ?? ''),
    answer: normalizeWhitespace(faq.answer ?? ''),
  }));
}

function extractSchemaFaqs(faqPageNode) {
  const mainEntity = Array.isArray(faqPageNode?.mainEntity) ? faqPageNode.mainEntity : [];

  return mainEntity
    .map((entity) => {
      if (!entity || entity['@type'] !== 'Question') {
        return null;
      }

      const question = normalizeWhitespace(entity.name ?? '');
      const answer = normalizeWhitespace(entity.acceptedAnswer?.text ?? '');

      if (!question || !answer) {
        return null;
      }

      return { question, answer };
    })
    .filter(Boolean);
}

function faqListsAlign(pageFaqs, schemaFaqs) {
  if (pageFaqs.length !== schemaFaqs.length) {
    return false;
  }

  return pageFaqs.every((faq, index) => {
    const schemaFaq = schemaFaqs[index];
    return faq.question === schemaFaq.question && faq.answer === schemaFaq.answer;
  });
}

if (!fs.existsSync(DIST_DIR)) {
  console.error(`❌ Missing dist directory: ${DIST_DIR}. Run \"npm run build\" first.`);
  process.exit(1);
}

const errors = [];
let checkedPages = 0;

for (const urlPath of REPRESENTATIVE_URLS) {
  const htmlPath = urlToDistPath(urlPath);
  const relPath = path.relative(process.cwd(), htmlPath);

  if (!fs.existsSync(htmlPath)) {
    errors.push(`${urlPath}: representative URL not found at ${relPath}`);
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const pageFaqs = normalizeFaqList(getVisibleFaqs(html));

  if (pageFaqs.length === 0) {
    continue;
  }

  checkedPages += 1;

  const faqPageNode = getFaqPageNode(html, relPath, errors);
  if (!faqPageNode) {
    continue;
  }

  if (faqPageNode['@type'] !== 'FAQPage') {
    errors.push(`${relPath}: FAQ node @type is not FAQPage`);
    continue;
  }

  const schemaFaqs = extractSchemaFaqs(faqPageNode);

  if (schemaFaqs.length === 0) {
    errors.push(`${relPath}: FAQPage mainEntity must contain non-empty Question/Answer entries`);
    continue;
  }

  if (!faqListsAlign(pageFaqs, schemaFaqs)) {
    errors.push(
      `${relPath}: visible FAQ content and FAQPage.mainEntity are misaligned (page=${pageFaqs.length}, schema=${schemaFaqs.length})`,
    );
  }
}

if (errors.length > 0) {
  console.error('❌ FAQ schema verification failed.');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `✅ FAQ schema verification passed for ${REPRESENTATIVE_URLS.length} representative URLs (${checkedPages} URLs included visible FAQs).`,
);
