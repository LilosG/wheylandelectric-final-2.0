import { SITE_URL } from '../seo';

export const SCHEMA_IDS = {
  website: `${SITE_URL}/#website`,
  electrician: `${SITE_URL}/#electrician`,
};

interface PageNodeInput {
  type: string;
  path: string;
  name: string;
  description?: string;
  mainEntityId?: string;
}

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

export function pageNodeId(path: string): string {
  return `${SITE_URL}${normalizePath(path)}#webpage`;
}

export function websiteSchemaNode(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': SCHEMA_IDS.website,
    url: SITE_URL,
    name: 'Wheyland Electric',
    about: { '@id': SCHEMA_IDS.electrician },
  };
}

export function webPageSchemaNode(input: PageNodeInput): Record<string, unknown> {
  const normalizedPath = normalizePath(input.path);
  const node: Record<string, unknown> = {
    '@type': input.type,
    '@id': `${SITE_URL}${normalizedPath}#webpage`,
    url: `${SITE_URL}${normalizedPath}`,
    name: input.name,
    isPartOf: { '@id': SCHEMA_IDS.website },
    about: { '@id': SCHEMA_IDS.electrician },
  };

  if (input.description) {
    node.description = input.description;
  }

  if (input.mainEntityId) {
    node.mainEntity = { '@id': input.mainEntityId };
  }

  return node;
}

export function graphSchema(nodes: Record<string, unknown>[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
