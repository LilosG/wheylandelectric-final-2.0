export interface ServiceHeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const defaultServiceHeroImages: Record<string, ServiceHeroImage> = {
  'ev-charger-installation': {
    src: '/images/services/ev-charger/wheyland-electric-bmw-ev-charger-rancho-santa-fe.webp',
    alt: 'Level 2 EV charger installed by Wheyland Electric in San Diego County',
    width: 533,
    height: 711,
  },
  'electrical-panel-upgrades': {
    src: '/images/services/panel/wheyland-electric-commercial-meter-stack-panel.webp',
    alt: 'Commercial electrical meter stack and panel upgrade by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'recessed-lighting-installation': {
    src: '/images/services/lighting/wheyland-electric-kitchen-lighting-skylights.webp',
    alt: 'Recessed lighting and kitchen pendant lights installed by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'light-fixture-installation': {
    src: '/images/services/lighting/wheyland-electric-crystal-chandelier-foyer.webp',
    alt: 'Crystal chandelier installed in a two-story foyer by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'ceiling-fan-installation': {
    src: '/images/services/lighting/wheyland-electric-home-office-ceiling-fan-lighting.webp',
    alt: 'Ceiling fan and recessed lighting installation by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'spa-jacuzzi-sauna-electrical': {
    src: '/images/services/spa-sauna/wheyland-electric-barrel-sauna-exterior.webp',
    alt: 'Outdoor barrel sauna electrical installation by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'service-calls-troubleshooting': {
    src: '/images/services/panel/wheyland-electric-service-entrance-wiring.webp',
    alt: 'Electrical service wiring and troubleshooting by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'outlet-switch-dimmer-gfci-repairs': {
    src: '/images/services/lighting/wheyland-electric-wet-bar-sconce-lighting.webp',
    alt: 'Sconce lighting and outlet installation in a residential home by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'dedicated-circuits': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-installation.webp',
    alt: 'Dedicated 240V circuit for EV charging installed by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'commercial-tenant-improvement': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'Commercial electrical control panel installed by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'commercial-electrical-maintenance': {
    src: '/images/services/commercial/wheyland-electric-commercial-food-processing-electrical.webp',
    alt: 'Commercial food processing electrical maintenance by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'light-industrial-electrical': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'Industrial electrical panel and VFD installation by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'remodel-rewiring-adu': {
    src: '/images/services/lighting/wheyland-electric-cove-lighting-tray-ceiling.webp',
    alt: 'Residential remodel with cove lighting and chandelier by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'electrical-safety-inspections': {
    src: '/images/services/panel/wheyland-electric-outdoor-service-disconnect.webp',
    alt: 'Electrical safety inspection of outdoor service entrance by Wheyland Electric',
    width: 533,
    height: 711,
  },
};

const moneyPageServiceHeroImageOverrides: Partial<Record<string, ServiceHeroImage>> = {
  'outlet-switch-dimmer-gfci-repairs': {
    src: '/images/services/lighting/wheyland-electric-wet-bar-sconce-lighting.webp',
    alt: 'Sconce lighting and outlet installation by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'dedicated-circuits': {
    src: '/images/services/ev-charger/wheyland-electric-ev-charger-installation.webp',
    alt: 'Dedicated 240V circuit for EV charging by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'commercial-tenant-improvement': {
    src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
    alt: 'Commercial electrical control panel by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'commercial-electrical-maintenance': {
    src: '/images/services/commercial/wheyland-electric-commercial-food-processing-electrical.webp',
    alt: 'Commercial electrical maintenance by Wheyland Electric',
    width: 533,
    height: 711,
  },
  'remodel-rewiring-adu': {
    src: '/images/services/lighting/wheyland-electric-cove-lighting-tray-ceiling.webp',
    alt: 'Residential remodel with cove lighting by Wheyland Electric',
    width: 711,
    height: 533,
  },
  'electrical-safety-inspections': {
    src: '/images/services/panel/wheyland-electric-outdoor-service-disconnect.webp',
    alt: 'Electrical safety inspection by Wheyland Electric',
    width: 533,
    height: 711,
  },
};

const cityServiceHeroImageOverrides: Record<string, ServiceHeroImage> = {
  'rancho-santa-fe:ev-charger-installation': {
    src: '/images/services/ev-charger/wheyland-electric-bmw-ev-charger-rancho-santa-fe.webp',
    alt: 'BMW i Level 2 EV charger installed by Wheyland Electric in Rancho Santa Fe, CA',
    width: 533,
    height: 711,
  },
};

interface ServiceHeroImageGetterParams {
  serviceSlug: string;
  citySlug?: string;
  variant?: 'service' | 'money';
}

export function getServiceHeroImage({
  serviceSlug,
  citySlug,
  variant = 'service',
}: ServiceHeroImageGetterParams): ServiceHeroImage | undefined {
  const cityOverride = citySlug
    ? cityServiceHeroImageOverrides[`${citySlug}:${serviceSlug}`]
    : undefined;
  if (cityOverride) {
    return cityOverride;
  }

  if (variant === 'money') {
    return moneyPageServiceHeroImageOverrides[serviceSlug] ?? defaultServiceHeroImages[serviceSlug];
  }

  return defaultServiceHeroImages[serviceSlug];
}
