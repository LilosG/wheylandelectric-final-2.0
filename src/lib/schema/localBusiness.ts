import { site } from '../../data/site';
import { getPublishedCities } from '../../data/cities';
import { getPublishedPillars } from '../../data/services';
import { WHEYLAND_REVIEWS } from '../../data/reviews';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://wheylandelectric.com';
const ELECTRICIAN_ID = `${SITE_URL}/#electrician`;

export function electricianSchemaNode(ratingOverride?: { value: number; count: number }): Record<string, unknown> {
  const rating = ratingOverride ?? site.rating;
  const publishedCities = getPublishedCities();
  const publishedServices = getPublishedPillars();

  return {
    '@type': 'Electrician',
    '@id': ELECTRICIAN_ID,
    name: site.nap.name,
    url: `${SITE_URL}/`,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '00:00',
        closes: '00:00',
      },
    ],
    license: site.license,
    foundingDate: String(site.established),
    description: `${site.nap.name} provides licensed, bonded and insured electrical services in San Diego County. ${site.tagline}`,
    image: `${SITE_URL}/images/logo/wheyland-electric-schema-logo.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo/wheyland-electric-schema-logo.png`,
      width: 512,
      height: 512,
    },
    priceRange: '$$',
    areaServed: [
      ...site.serviceRadiusCounties.map((county) => ({
        '@type': 'AdministrativeArea',
        name: county,
      })),
      ...publishedCities.map((c) => ({
        '@type': 'City',
        name: c.name,
        sameAs: `https://en.wikipedia.org/wiki/${c.name.replace(/ /g, '_')},_California`,
      })),
    ],
    hasMap: site.gbp.url,
    sameAs: [
      site.social.facebook,
      site.social.linkedin,
      site.social.twitter,
      'https://www.yelp.com/biz/wheyland-electric-carlsbad',
      'https://www.bbb.org/us/ca/carlsbad/profile/electrician/wheyland-electric-1126-171995150',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.nap.phone,
      email: site.nap.email,
      areaServed: 'San Diego County',
      availableLanguage: 'English',
    },
    serviceType: publishedServices.map((service) => service.name),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(rating.value),
      reviewCount: String(rating.count),
      bestRating: '5',
      worstRating: '1',
    },
    review: WHEYLAND_REVIEWS,
  };
}
