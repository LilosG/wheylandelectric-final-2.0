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
    src: '/images/about/wheyland-electric-family-portrait-carlsbad.webp',
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
 * Uses varied, well-optimized service images for visual diversity while maintaining brand consistency
 */
export const cityHeroImages: HeroImageMap = {
  carlsbad: {
    src: '/images/about/wheyland-electric-family-portrait-carlsbad.webp',
    alt: 'Carlsbad electrician team serving homes and businesses in Carlsbad, CA',
  },
  encinitas: {
    src: '/images/services/lighting/wheyland-electric-kitchen-lighting-skylights.webp',
    alt: 'Encinitas electrician - Residential lighting and electrical services in Encinitas, CA',
  },
  'rancho-santa-fe': {
    src: '/images/services/panel/wheyland-electric-commercial-meter-stack-panel.webp',
    alt: 'Rancho Santa Fe electrician - Panel upgrades and electrical services for luxury estates in Rancho Santa Fe, CA',
  },
  'san-marcos': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'San Marcos electrician - Commercial electrical services in San Marcos, CA',
  },
  'del-mar': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-installation.webp',
    alt: 'Del Mar electrician - EV charger installation and electrical services in Del Mar, CA',
  },
  'solana-beach': {
    src: '/images/services/lighting/wheyland-electric-crystal-chandelier-foyer.webp',
    alt: 'Solana Beach electrician - Lighting installation and electrical services in Solana Beach, CA',
  },
  oceanside: {
    src: '/images/services/lighting/wheyland-electric-dining-room-pendant-sconces.webp',
    alt: 'Oceanside electrician - Lighting and electrical services in Oceanside, CA',
  },
  'vista': {
    src: '/images/services/panel/wheyland-electric-outdoor-service-disconnect.webp',
    alt: 'Vista electrician - Electrical panel and service upgrades in Vista, CA',
  },
  'escondido': {
    src: '/images/services/lighting/wheyland-electric-kitchen-pendant-lighting.webp',
    alt: 'Escondido electrician - Lighting and electrical services in Escondido, CA',
  },
  'poway': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-garage-setup.webp',
    alt: 'Poway electrician - EV charger installation and electrical services in Poway, CA',
  },
};

/**
 * "Who We Serve" Segment Images
 * Images for the who-we-work-with page customer segments
 */
export const whoWeServeImages: HeroImageMap = {
  homeowners: {
    src: '/images/services/lighting/wheyland-electric-kitchen-lighting-skylights.webp',
    alt: 'Homeowners - residential electrical services for families and home improvement',
  },
  'property-managers': {
    src: '/images/services/panel/wheyland-electric-service-entrance-wiring.webp',
    alt: 'Property managers - reliable electrical maintenance for managed properties',
  },
  'hoa-communities': {
    src: '/images/services/lighting/wheyland-electric-led-handrail-stair-lighting.webp',
    alt: 'HOA communities - monthly electrical maintenance and safety inspections',
  },
  commercial: {
    src: '/images/services/commercial/wheyland-electric-commercial-food-processing-electrical.webp',
    alt: 'Commercial and business - tenant improvements and commercial electrical services',
  },
  'ev-owners': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-level2-install.webp',
    alt: 'EV owners - Level 2 home charger installation for Tesla and all EV makes',
  },
};

/**
 * Static page hero images
 * Used for pages that are not city/service slug-driven.
 */
export const pageHeroImages: HeroImageMap = {
  services: {
    src: '/images/services/panel/wheyland-electric-outdoor-service-disconnect.webp',
    alt: 'Professional electrical services from Wheyland Electric',
  },
  'service-areas': {
    src: '/images/services/lighting/wheyland-electric-dining-room-pendant-sconces.webp',
    alt: 'Electrical services available across North County San Diego',
  },
  about: {
    src: '/images/about/wheyland-electric-family-portrait-carlsbad.webp',
    alt: 'Wheyland Electric family-owned team based in Carlsbad',
  },
  'who-we-work-with': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'Electrical services for homeowners, HOAs, and businesses',
  },
  blog: {
    src: '/images/services/lighting/wheyland-electric-kitchen-pendant-lighting.webp',
    alt: 'Electrical tips and insights from Wheyland Electric',
  },
  'blog-post': {
    src: '/images/services/lighting/wheyland-electric-home-theater-star-ceiling.webp',
    alt: 'In-depth electrical guidance and articles by Wheyland Electric',
  },
  'not-found': {
    src: '/images/services/panel/wheyland-electric-outdoor-meter-panel-new-construction.webp',
    alt: 'Wheyland Electric page not found fallback',
  },
  'thank-you': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-wall-mount-detail.webp',
    alt: 'Thank you for contacting Wheyland Electric',
  },
  reviews: {
    src: '/images/services/lighting/wheyland-electric-contemporary-chandelier-foyer.webp',
    alt: 'Customer-focused electrical work by Wheyland Electric in North County San Diego',
  },
  contact: {
    src: '/images/services/panel/wheyland-electric-outdoor-meter-panel-new-construction.webp',
    alt: 'Licensed electrician ready to help with electrical projects in San Diego County',
  },
  'free-estimates': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-home-installation-1.webp',
    alt: 'Free estimate for electrical services from Wheyland Electric',
  },
  faqs: {
    src: '/images/services/lighting/wheyland-electric-recessed-lighting-vaulted-ceiling.webp',
    alt: 'Frequently asked questions about electrical services and safety',
  },
  licenses: {
    src: '/images/services/panel/wheyland-electric-commercial-meter-stack-panel.webp',
    alt: 'Licensed, bonded, and insured electrical contractor credentials',
  },
  projects: {
    src: '/images/gallery/wheyland-electric-specialty-garage-shop-lights.webp',
    alt: 'Completed Wheyland Electric projects in homes and businesses',
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

/**
 * Helper function to get static page hero image
 */
export function getPageHeroImage(pageKey: string): HeroImage {
  return pageHeroImages[pageKey] || fallbackHeroImage;
}
