import { site } from '../../data/site';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://www.wheylandelectric.com';

export function serviceSchema(
  serviceName: string,
  serviceDescription: string,
  pageUrl: string,
  areaServedName?: string
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: `${SITE_URL}${pageUrl}`,
    provider: {
      '@type': 'Electrician',
      name: site.nap.name,
      telephone: site.nap.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.nap.address.street,
        addressLocality: site.nap.address.city,
        addressRegion: site.nap.address.state,
        postalCode: site.nap.address.zip,
        addressCountry: 'US',
      },
    },
  };

  if (areaServedName) {
    schema.areaServed = {
      '@type': 'City',
      name: areaServedName,
    };
  }

  return schema;
}
