import type { NavItem } from '../types';
import { getPublishedCities } from './cities';

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
  { label: 'Commercial Tenant Improvement (TI)', href: '/services/commercial-tenant-improvement/' },
  { label: 'Commercial Electrical Maintenance', href: '/services/commercial-electrical-maintenance/' },
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
        ...publishedCities.map((c) => ({
          label: c.name,
          href: `/${c.slug}/`,
        })),
        { label: 'All Service Areas', href: '/service-areas/' },
      ],
    },
    { label: 'Who We Work With', href: '/who-we-work-with/' },
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
