/**
 * Hero Image Mapping for Services and Cities
 * Centralized source of truth for all hero section images
 */

export interface HeroImage {
  src: string;
  alt: string;
  credit?: string;
}

export interface HeroImageMap {
  [key: string]: HeroImage;
}

/**
 * Service Hero Images
 * Map service slugs to their hero background images
 */
export const serviceHeroImages: HeroImageMap = {
  'ev-charger-installation': {
    src: '/images/services/ev-charger/wheyland-electric-bmw-ev-charger-rancho-santa-fe.webp',
    alt: 'Level 2 EV charger installed by Wheyland Electric in San Diego County - home charging solution',
  },
  'electrical-panel-upgrades': {
    src: '/images/services/panel/wheyland-electric-commercial-meter-stack-panel.webp',
    alt: 'Commercial electrical meter stack and panel upgrade by Wheyland Electric - modern electrical panel',
  },
  'recessed-lighting-installation': {
    src: '/images/services/lighting/wheyland-electric-kitchen-lighting-skylights.webp',
    alt: 'Recessed lighting and kitchen pendant lights installed by Wheyland Electric - modern kitchen lighting',
  },
  'light-fixture-installation': {
    src: '/images/services/lighting/wheyland-electric-crystal-chandelier-foyer.webp',
    alt: 'Crystal chandelier installed in a two-story foyer by Wheyland Electric - elegant home lighting',
  },
  'ceiling-fan-installation': {
    src: '/images/services/lighting/wheyland-electric-home-office-ceiling-fan-lighting.webp',
    alt: 'Ceiling fan and recessed lighting installation by Wheyland Electric - home improvement',
  },
  'spa-jacuzzi-sauna-electrical': {
    src: '/images/services/spa-sauna/wheyland-electric-barrel-sauna-exterior.webp',
    alt: 'Outdoor barrel sauna electrical installation by Wheyland Electric - spa electrical services',
  },
  'service-calls-troubleshooting': {
    src: '/images/services/panel/wheyland-electric-service-entrance-wiring.webp',
    alt: 'Electrical service wiring and troubleshooting by Wheyland Electric - licensed electrician',
  },
  'outlet-switch-dimmer-gfci-repairs': {
    src: '/images/services/lighting/wheyland-electric-wet-bar-sconce-lighting.webp',
    alt: 'Sconce lighting and outlet installation in a residential home by Wheyland Electric - home electrical work',
  },
  'dedicated-circuits': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-installation.webp',
    alt: 'Dedicated 240V circuit for EV charging installed by Wheyland Electric - electrical service upgrade',
  },
  'commercial-tenant-improvement': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'Commercial electrical control panel installed by Wheyland Electric - commercial electrical services',
  },
  'commercial-electrical-maintenance': {
    src: '/images/services/commercial/wheyland-electric-commercial-food-processing-electrical.webp',
    alt: 'Commercial food processing electrical maintenance by Wheyland Electric - commercial services',
  },
  'light-industrial-electrical': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'Industrial electrical panel and VFD installation by Wheyland Electric - industrial services',
  },
  'remodel-rewiring-adu': {
    src: '/images/services/lighting/wheyland-electric-cove-lighting-tray-ceiling.webp',
    alt: 'Residential remodel with cove lighting and chandelier by Wheyland Electric - home remodeling',
  },
  'electrical-safety-inspections': {
    src: '/images/services/panel/wheyland-electric-outdoor-service-disconnect.webp',
    alt: 'Electrical safety inspection of outdoor service entrance by Wheyland Electric - safety inspections',
  },
};

/**
 * City Hero Images
 * Map city slugs to their hero background images
 */
export const cityHeroImages: HeroImageMap = {
  carlsbad: {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Carlsbad electrician - Wheyland Electric serving Carlsbad, CA and surrounding areas',
  },
  encinitas: {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Encinitas electrician - Wheyland Electric serving Encinitas, CA with professional electrical services',
  },
  'rancho-santa-fe': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Rancho Santa Fe electrician - Wheyland Electric serving luxury estates in Rancho Santa Fe, CA',
  },
  'san-marcos': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'San Marcos electrician - Wheyland Electric serving San Marcos, CA with professional electrical services',
  },
  'del-mar': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Del Mar electrician - Wheyland Electric serving Del Mar, CA with professional electrical services',
  },
  'solana-beach': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Solana Beach electrician - Wheyland Electric serving Solana Beach, CA with professional electrical services',
  },
  oceanside: {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Oceanside electrician - Wheyland Electric serving Oceanside, CA with professional electrical services',
  },
  'vista': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Vista electrician - Wheyland Electric serving Vista, CA with professional electrical services',
  },
  'escondido': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Escondido electrician - Wheyland Electric serving Escondido, CA with professional electrical services',
  },
  'poway': {
    src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
    alt: 'Poway electrician - Wheyland Electric serving Poway, CA with professional electrical services',
  },
};

/**
 * "Who We Serve" Segment Images
 * Images for the who-we-work-with page customer segments
 */
export const whoWeServeImages: HeroImageMap = {
  homeowners: {
    src: '/images/who-we-serve/homeowners.jpg',
    alt: 'Homeowners - residential electrical services for families and home improvement',
  },
  'property-managers': {
    src: '/images/who-we-serve/property-managers.jpg',
    alt: 'Property managers - reliable electrical maintenance for managed properties',
  },
  'hoa-communities': {
    src: '/images/who-we-serve/hoa-communities.jpg',
    alt: 'HOA communities - monthly electrical maintenance and safety inspections',
  },
  commercial: {
    src: '/images/who-we-serve/commercial.jpg',
    alt: 'Commercial and business - tenant improvements and commercial electrical services',
  },
  'ev-owners': {
    src: '/images/who-we-serve/ev-owners.jpg',
    alt: 'EV owners - Level 2 home charger installation for Tesla and all EV makes',
  },
};

/**
 * Fallback Hero Image
 * Used when a specific service or city image is not available
 */
export const fallbackHeroImage: HeroImage = {
  src: '/images/hero/wheyland-electric-edison-bulb-lighting-carlsbad.webp',
  alt: 'Wheyland Electric - Professional electrician services in San Diego County',
};

/**
 * Helper function to get service hero image
 */
export function getServiceHeroImage(serviceSlug: string): HeroImage {
  return serviceHeroImages[serviceSlug] || fallbackHeroImage;
}

/**
 * Helper function to get city hero image
 */
export function getCityHeroImage(citySlug: string): HeroImage {
  return cityHeroImages[citySlug] || fallbackHeroImage;
}

/**
 * Helper function to get who-we-serve image
 */
export function getWhoWeServeImage(segmentKey: string): HeroImage {
  return whoWeServeImages[segmentKey] || fallbackHeroImage;
}
