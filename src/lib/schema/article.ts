import { site } from '../../data/site';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://www.wheylandelectric.com';

export function articleSchema(
  title: string,
  description: string,
  datePublished: string,
  author: string,
  slug: string,
  image?: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: site.nap.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${slug}/`,
    image: image || `${SITE_URL}/images/logo-wheyland-electric.png`,
  };
}
