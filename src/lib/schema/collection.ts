import { SITE_URL } from '../seo';

interface ItemListEntry {
  name: string;
  url: string;
}

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

export function collectionPageSchema(
  path: string,
  name: string,
  description: string,
  items: ItemListEntry[]
): Record<string, unknown> {
  const normalizedPath = normalizePath(path);
  const pageId = `${SITE_URL}${normalizedPath}#webpage`;
  const listId = `${SITE_URL}${normalizedPath}#itemlist`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': pageId,
        url: `${SITE_URL}${normalizedPath}`,
        name,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#electrician` },
        mainEntity: { '@id': listId },
      },
      {
        '@type': 'ItemList',
        '@id': listId,
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: `${SITE_URL}${normalizePath(item.url)}`,
        })),
      },
    ],
  };
}
