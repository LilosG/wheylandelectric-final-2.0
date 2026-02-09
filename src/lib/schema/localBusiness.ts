import { site, flags } from '../../data/site';
import { getPublishedCities } from '../../data/cities';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://www.wheylandelectric.com';

export function localBusinessSchema(): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
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
    areaServed: getPublishedCities().map((c) => ({
      '@type': 'City',
      name: `${c.name}, ${c.state}`,
    })),
    image: `${SITE_URL}/images/logo-wheyland-electric.png`,
    priceRange: '$$',
  };

  // GATED: Only include aggregateRating if reviews are verified
  if (flags.reviews_verified) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '153',
    };
  }

  return schema;
}
