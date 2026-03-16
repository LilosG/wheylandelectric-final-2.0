import type { FAQ } from '../../types';
import { SITE_URL } from '../seo';

export function faqPageSchemaNode(faqs: FAQ[], pagePath: string): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${pagePath}#faq`,
    url: `${SITE_URL}${pagePath}`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#electrician` },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
