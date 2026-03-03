import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const PREFERRED_HOST = 'wheylandelectric.com';
const PREFERRED_PROTOCOL = 'https:';
const BRAND = 'Wheyland Electric';

function walkHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractAll(regex, input) {
  return [...input.matchAll(regex)].map((match) => match[1]?.trim() || '');
}

function decodeBasicEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

if (!fs.existsSync(DIST_DIR)) {
  console.error(`❌ Missing dist directory: ${DIST_DIR}`);
  process.exit(1);
}

const htmlFiles = walkHtmlFiles(DIST_DIR);
if (htmlFiles.length === 0) {
  console.error('❌ No HTML files found in dist/.');
  process.exit(1);
}

const errors = [];
const warnings = [];
const titleUsage = new Map();
const descriptionUsage = new Map();
let trailingPipeCount = 0;
let truncatedBrandCount = 0;

for (const file of htmlFiles) {
  const relPath = path.relative(process.cwd(), file);
  const html = fs.readFileSync(file, 'utf8');

  const titles = extractAll(/<title[^>]*>([\s\S]*?)<\/title>/gi, html).map(decodeBasicEntities);
  const descriptions = extractAll(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*>/gi, html).map(decodeBasicEntities);
  const h1s = extractAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, html).map((value) => decodeBasicEntities(value.replace(/<[^>]+>/g, '')));
  const canonicals = extractAll(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["'][^>]*>/gi, html);

  if (titles.length !== 1 || !titles[0]) {
    errors.push(`${relPath}: expected exactly one non-empty <title>, found ${titles.length}`);
  }

  if (descriptions.length !== 1 || !descriptions[0]) {
    errors.push(`${relPath}: expected exactly one non-empty meta description, found ${descriptions.length}`);
  }

  if (h1s.length !== 1 || !h1s[0]) {
    errors.push(`${relPath}: expected exactly one non-empty <h1>, found ${h1s.length}`);
  }

  if (canonicals.length !== 1) {
    errors.push(`${relPath}: expected exactly one canonical link, found ${canonicals.length}`);
  } else {
    try {
      const url = new URL(canonicals[0]);
      if (url.protocol !== PREFERRED_PROTOCOL || url.hostname !== PREFERRED_HOST) {
        errors.push(`${relPath}: canonical must use ${PREFERRED_PROTOCOL}//${PREFERRED_HOST}, got ${canonicals[0]}`);
      }
    } catch {
      errors.push(`${relPath}: canonical is not a valid absolute URL (${canonicals[0]})`);
    }
  }

  const title = titles[0] || '';
  if (title) {
    if (/\|\s*$/.test(title)) {
      trailingPipeCount += 1;
      errors.push(`${relPath}: title ends with trailing separator (${title})`);
    }

    if (title.includes('Wheyland') && !title.includes(BRAND)) {
      truncatedBrandCount += 1;
      errors.push(`${relPath}: title appears to contain truncated brand (${title})`);
    }

    if (title.length < 30 || title.length > 65) {
      warnings.push(`${relPath}: title length warning (${title.length} chars)`);
    }

    titleUsage.set(title, [...(titleUsage.get(title) || []), relPath]);
  }

  const description = descriptions[0] || '';
  if (description) {
    descriptionUsage.set(description, [...(descriptionUsage.get(description) || []), relPath]);
  }
}

for (const [title, locations] of titleUsage) {
  if (locations.length > 1) {
    errors.push(`Duplicate title used on ${locations.length} pages: "${title}" -> ${locations.join(', ')}`);
  }
}

for (const [description, locations] of descriptionUsage) {
  if (locations.length > 1) {
    errors.push(`Duplicate description used on ${locations.length} pages: "${description}" -> ${locations.join(', ')}`);
  }
}

console.log(`Scanned ${htmlFiles.length} HTML files in dist/.`);
console.log(`Trailing title separators found: ${trailingPipeCount}`);
console.log(`Truncated brand titles found: ${truncatedBrandCount}`);

if (warnings.length > 0) {
  console.log('\nWarnings:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length > 0) {
  console.error('\nErrors:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('\n✅ SEO audit passed (no trailing separators, no truncated brand titles, required tags present).');
