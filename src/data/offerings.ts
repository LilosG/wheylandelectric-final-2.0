import type { Offering } from '../types';

export const offerings: Offering[] = [
  {
    slug: 'hoa-monthly-electrical-maintenance',
    title: 'HOA Lighting & Electrical Maintenance',
    headline: 'Predictable Monthly Service. No Surprises.',
    description:
      'Flat-rate monthly lighting and electrical maintenance services for HOA communities. Scheduled inspections, documentation, and transparent pricing help reduce emergencies and support consistent maintenance planning.',
    bullets: [
      'Scheduled lighting inspections',
      'Electrical maintenance documentation',
      'Transparent flat-rate pricing',
      'Reduced emergency calls',
      'Consistent maintenance planning',
    ],
    publish: true,
  },
];

export function getPublishedOfferings(): Offering[] {
  return offerings.filter((o) => o.publish);
}

export function getOfferingBySlug(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export default offerings;
