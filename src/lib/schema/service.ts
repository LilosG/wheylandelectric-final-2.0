import { site } from '../../data/site';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://www.wheylandelectric.com';
const BUSINESS_ID = `${SITE_URL}#localbusiness`;

export function serviceSchema(
  serviceName: string,
  serviceDescription: string,
  pageUrl: string,
  areaServedName?: string
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${pageUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    url: `${SITE_URL}${pageUrl}`,
    provider: {
      '@type': 'Electrician',
      '@id': BUSINESS_ID,
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

  schema.areaServed = areaServedName
    ? {
        '@type': 'City',
        name: areaServedName,
      }
    : {
        '@type': 'AdministrativeArea',
        name: 'San Diego County, CA',
      };

  return schema;
}
