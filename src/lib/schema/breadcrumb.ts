import type { BreadcrumbItem } from '../../types';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://wheylandelectric.com';

export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
