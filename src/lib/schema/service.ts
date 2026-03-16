const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://wheylandelectric.com';
const ELECTRICIAN_ID = `${SITE_URL}/#electrician`;

export function serviceSchema(
  serviceName: string,
  serviceDescription: string,
  pageUrl: string,
  areaServedName?: string
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@type': 'Service',
    '@id': `${SITE_URL}${pageUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    url: `${SITE_URL}${pageUrl}`,
    provider: {
      '@id': ELECTRICIAN_ID,
    },
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
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
