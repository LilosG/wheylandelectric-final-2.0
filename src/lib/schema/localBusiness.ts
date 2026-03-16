import { DEFAULT_LOGO_PATH } from '../../data/brand';
import { site } from '../../data/site';
import { getPublishedCities } from '../../data/cities';
import { getPublishedPillars } from '../../data/services';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://wheylandelectric.com';
const ELECTRICIAN_ID = `${SITE_URL}/#electrician`;

export function electricianSchemaNode(): Record<string, unknown> {
  const publishedCities = getPublishedCities();
  const publishedServices = getPublishedPillars();

  return {
    '@type': 'Electrician',
    '@id': ELECTRICIAN_ID,
    name: site.nap.name,
    url: SITE_URL,
    telephone: site.nap.phone,
    email: site.nap.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.nap.address.street,
      addressLocality: site.nap.address.city,
      addressRegion: site.nap.address.state,
      postalCode: site.nap.address.zip,
      addressCountry: 'US',
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    license: site.license,
    foundingDate: String(site.established),
    description: `${site.nap.name} provides licensed, bonded and insured electrical services in San Diego County. ${site.tagline}`,
    areaServed: [
      ...site.serviceRadiusCounties.map((county) => ({
        '@type': 'AdministrativeArea',
        name: county,
      })),
      ...publishedCities.map((c) => ({
        '@type': 'City',
        name: `${c.name}, ${c.state}`,
      })),
    ],
    hasMap: site.gbp.url,
    sameAs: [site.social.facebook, site.social.linkedin, site.social.twitter],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.nap.phone,
      areaServed: 'San Diego County',
      availableLanguage: 'English',
    },
    serviceType: publishedServices.map((service) => service.name),
    image: `${SITE_URL}${DEFAULT_LOGO_PATH}`,
    priceRange: '$$',
  };
}
