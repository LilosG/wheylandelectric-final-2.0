import type { NavItem } from '../types';
import { getPublishedCities } from './cities';

// Primary Wave 1 city slugs for nav — sub-neighborhoods excluded intentionally
// Sub-neighborhood pages rank via internal links and sitemap, not nav
const NAV_CITY_SLUGS = [
  'carlsbad',
  'encinitas',
  'rancho-santa-fe',
  'san-marcos',
  'del-mar',
  'solana-beach',
  'oceanside',
  'vista',
];

// ── Residential service nav items (manual — controls dropdown order and grouping)
const residentialServices: NavItem[] = [
  { label: 'Residential Electrical Services', href: '/services/residential-electrical-services/' },
  { label: 'EV Charger Installation', href: '/services/ev-charger-installation/' },
  { label: 'Electrical Panel Upgrades', href: '/services/electrical-panel-upgrades/' },
  { label: 'Service Calls & Troubleshooting', href: '/services/service-calls-troubleshooting/' },
  { label: 'Recessed Lighting Installation', href: '/services/recessed-lighting-installation/' },
  { label: 'Light Fixture Installation', href: '/services/light-fixture-installation/' },
  { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation/' },
  { label: 'Spa, Jacuzzi & Sauna Electrical', href: '/services/spa-jacuzzi-sauna-electrical/' },
  { label: 'Outlet, Switch, Dimmer & GFCI', href: '/services/outlet-switch-dimmer-gfci-repairs/' },
  { label: 'Dedicated Circuits', href: '/services/dedicated-circuits/' },
  { label: 'Remodel & Rewiring (incl. ADU)', href: '/services/remodel-rewiring-adu/' },
  { label: 'Electrical Safety Inspections', href: '/services/electrical-safety-inspections/' },
];

// ── Commercial service nav items (manual)
const commercialServices: NavItem[] = [
  { label: 'All Commercial Services', href: '/services/commercial-electrical-services/' },
  { label: 'Commercial Tenant Improvement (TI)', href: '/services/commercial-tenant-improvement/' },
  { label: 'Commercial Electrical Maintenance', href: '/services/commercial-electrical-maintenance/' },
  { label: 'Commercial EV Charging', href: '/services/commercial-ev-charging/' },
  { label: 'Restaurant & Food Service Electrical', href: '/services/restaurant-electrical/' },
  { label: 'Commercial LED Lighting Retrofit', href: '/services/commercial-led-lighting/' },
  { label: 'HOA Electrical Services', href: '/services/hoa-electrical-services/' },
  { label: 'Light Industrial Electrical', href: '/services/light-industrial-electrical/' },
];

export function buildNavigation(): NavItem[] {
  const publishedCities = getPublishedCities();

  return [
    {
      label: 'Services',
      href: '/services/',
      // children split into residential/commercial groups — handled in Header.astro
      residentialChildren: residentialServices,
      commercialChildren: commercialServices,
      // flat children fallback for mobile nav
      children: [...residentialServices, ...commercialServices],
    },
    {
      label: 'Service Areas',
      href: '/service-areas/',
      children: [
        ...publishedCities
          .filter((c) => NAV_CITY_SLUGS.includes(c.slug))
          .map((c) => ({
            label: c.name,
            href: `/${c.slug}/`,
          })),
        { label: 'All Service Areas', href: '/service-areas/' },
      ],
    },
    {
      label: 'Who We Work With',
      href: '/who-we-work-with/',
      children: [
        { label: 'Homeowners', href: '/who-we-work-with/homeowners/' },
        { label: 'Property Managers', href: '/who-we-work-with/property-managers/' },
        { label: 'HOA Communities', href: '/who-we-work-with/hoa-communities/' },
        { label: 'Commercial & Business', href: '/who-we-work-with/commercial/' },
        { label: 'General Contractors', href: '/who-we-work-with/general-contractors/' },
      ],
    },
    {
      label: 'About',
      href: '/about/',
      children: [
        { label: 'About Wheyland Electric', href: '/about/' },
        { label: 'Licenses & Trust', href: '/about/licenses/' },
        { label: 'FAQs', href: '/about/faqs/' },
        { label: 'Projects', href: '/about/projects/' },
        { label: 'Blog', href: '/blog/' },
      ],
    },
    { label: 'Contact', href: '/contact-us/' },
  ];
}

export const ctaNav = {
  estimate: { label: 'Free Estimate', href: '/free-estimates/' },
  phone: { label: 'Call (858) 663-5564', href: 'tel:8586635564' },
};

export default buildNavigation;
