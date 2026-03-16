import { DEFAULT_LOGO_PATH } from '../../data/brand';
import { SITE_URL } from '../seo';

export function blogPostingSchema(
  title: string,
  description: string,
  datePublished: string,
  author: string,
  slug: string,
  image?: string
): Record<string, unknown> {
  const canonical = `${SITE_URL}/blog/${slug}/`;

  return {
    '@type': 'BlogPosting',
    '@id': `${canonical}#blogposting`,
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@id': `${SITE_URL}/#electrician`,
    },
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    mainEntityOfPage: {
      '@id': `${canonical}#webpage`,
    },
    url: canonical,
    image: image || `${SITE_URL}${DEFAULT_LOGO_PATH}`,
  };
}
