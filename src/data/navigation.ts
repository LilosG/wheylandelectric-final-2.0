import type { NavItem } from '../types';
import { getPublishedCities } from './cities';
import { getPublishedPillars } from './services';

export function buildNavigation(): NavItem[] {
  const publishedCities = getPublishedCities();
  const publishedPillars = getPublishedPillars();

  return [
    {
      label: 'Services',
      href: '/services/',
      children: publishedPillars.map((s) => ({
        label: s.name,
        href: `/services/${s.slug}/`,
      })),
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
      ],
    },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact-us/' },
  ];
}

export const ctaNav = {
  estimate: { label: 'Free Estimate', href: '/free-estimates/' },
  phone: { label: 'Call (858) 663-5564', href: 'tel:8586635564' },
};

export default buildNavigation;
