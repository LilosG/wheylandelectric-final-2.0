/**
 * Centralized high-priority internal links for lead-driving city × service pages.
 *
 * Keep this file focused on existing generated routes only. These links are reused by
 * homepage, services index, city landing pages, and future blog/audience modules so
 * priority money-page linking stays consistent without one-off hardcoded blocks.
 */

export type PriorityServiceGroup =
  | 'ev-charger-installation'
  | 'electrical-panel-upgrades'
  | 'service-calls-troubleshooting'
  | 'commercial-electrical';

export interface PriorityCityServiceLink {
  citySlug: string;
  cityName: string;
  serviceSlug: string;
  serviceName: string;
  label: string;
  href: string;
  group: PriorityServiceGroup;
}

const makeCityServiceLink = ({
  citySlug,
  cityName,
  serviceSlug,
  serviceName,
  group,
}: Omit<PriorityCityServiceLink, 'href' | 'label'>): PriorityCityServiceLink => ({
  citySlug,
  cityName,
  serviceSlug,
  serviceName,
  group,
  href: `/${citySlug}/${serviceSlug}/`,
  label: `${serviceName} in ${cityName}`,
});

export const priorityCityServiceLinks: PriorityCityServiceLink[] = [
  makeCityServiceLink({
    citySlug: 'carlsbad',
    cityName: 'Carlsbad',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    group: 'ev-charger-installation',
  }),
  makeCityServiceLink({
    citySlug: 'carlsbad',
    cityName: 'Carlsbad',
    serviceSlug: 'electrical-panel-upgrades',
    serviceName: 'Electrical Panel Upgrades',
    group: 'electrical-panel-upgrades',
  }),
  makeCityServiceLink({
    citySlug: 'encinitas',
    cityName: 'Encinitas',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    group: 'ev-charger-installation',
  }),
  makeCityServiceLink({
    citySlug: 'oceanside',
    cityName: 'Oceanside',
    serviceSlug: 'service-calls-troubleshooting',
    serviceName: 'Service Calls & Troubleshooting',
    group: 'service-calls-troubleshooting',
  }),
  makeCityServiceLink({
    citySlug: 'san-marcos',
    cityName: 'San Marcos',
    serviceSlug: 'electrical-panel-upgrades',
    serviceName: 'Electrical Panel Upgrades',
    group: 'electrical-panel-upgrades',
  }),
  makeCityServiceLink({
    citySlug: 'vista',
    cityName: 'Vista',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    group: 'ev-charger-installation',
  }),
  makeCityServiceLink({
    citySlug: 'la-costa',
    cityName: 'La Costa',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    group: 'ev-charger-installation',
  }),
  makeCityServiceLink({
    citySlug: 'carlsbad',
    cityName: 'Carlsbad',
    serviceSlug: 'restaurant-electrical',
    serviceName: 'Restaurant Electrical',
    group: 'commercial-electrical',
  }),
  makeCityServiceLink({
    citySlug: 'carlsbad',
    cityName: 'Carlsbad',
    serviceSlug: 'commercial-tenant-improvement',
    serviceName: 'Commercial Tenant Improvement',
    group: 'commercial-electrical',
  }),
  makeCityServiceLink({
    citySlug: 'san-marcos',
    cityName: 'San Marcos',
    serviceSlug: 'commercial-electrical-services',
    serviceName: 'Commercial Electrical Services',
    group: 'commercial-electrical',
  }),
];

export const localServiceLinkGroups: Array<{
  key: PriorityServiceGroup;
  title: string;
  links: PriorityCityServiceLink[];
}> = [
  {
    key: 'ev-charger-installation',
    title: 'EV charger installation',
    links: priorityCityServiceLinks.filter((link) => link.group === 'ev-charger-installation'),
  },
  {
    key: 'electrical-panel-upgrades',
    title: 'Electrical panel upgrades',
    links: priorityCityServiceLinks.filter((link) => link.group === 'electrical-panel-upgrades'),
  },
  {
    key: 'service-calls-troubleshooting',
    title: 'Service calls / troubleshooting',
    links: priorityCityServiceLinks.filter((link) => link.group === 'service-calls-troubleshooting'),
  },
  {
    key: 'commercial-electrical',
    title: 'Commercial electrical',
    links: priorityCityServiceLinks.filter((link) => link.group === 'commercial-electrical'),
  },
];

export const residentialPriorityServiceSlugs = [
  'ev-charger-installation',
  'electrical-panel-upgrades',
  'service-calls-troubleshooting',
  'recessed-lighting-installation',
  'light-fixture-installation',
  'ceiling-fan-installation',
  'outlet-switch-dimmer-gfci-repairs',
  'residential-electrical-services',
];

const regionalCommercialPriorityServiceSlugs = [
  'commercial-electrical-services',
  'commercial-tenant-improvement',
  'restaurant-electrical',
];

const laCostaCommercialPriorityServiceSlugs = [
  'commercial-electrical-services',
  'commercial-tenant-improvement',
];

const regionalCommercialCities = new Set(['encinitas', 'oceanside', 'san-marcos', 'vista']);

export function getCityLandingServiceSlugs(citySlug: string): 'all' | string[] {
  if (citySlug === 'carlsbad') {
    return 'all';
  }

  if (citySlug === 'la-costa') {
    return [...residentialPriorityServiceSlugs, ...laCostaCommercialPriorityServiceSlugs];
  }

  if (regionalCommercialCities.has(citySlug)) {
    return [...residentialPriorityServiceSlugs, ...regionalCommercialPriorityServiceSlugs];
  }

  return residentialPriorityServiceSlugs;
}
