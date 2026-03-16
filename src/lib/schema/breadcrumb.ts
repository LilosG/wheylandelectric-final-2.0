import type { BreadcrumbItem } from '../../types';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://wheylandelectric.com';

export function breadcrumbSchemaNode(items: BreadcrumbItem[], pagePath: string): Record<string, unknown> {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${pagePath}#breadcrumb`,
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
