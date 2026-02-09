import type { PageMeta } from '../types';

const SITE_NAME = 'Wheyland Electric';
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://www.wheylandelectric.com';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generateMeta(input: MetaInput): PageMeta {
  const fullTitle = input.title.includes(SITE_NAME)
    ? input.title
    : `${input.title} | ${SITE_NAME}`;

  return {
    title: fullTitle.slice(0, 60),
    description: input.description.slice(0, 160),
    canonical: `${SITE_URL}${input.path}`,
    ogImage: input.ogImage,
  };
}

export function homePageMeta(): PageMeta {
  return generateMeta({
    title: 'Carlsbad Electrician | Licensed Electrical Services',
    description:
      'Wheyland Electric provides licensed, bonded & insured electrical services in San Diego County. EV chargers, panel upgrades, lighting & more. Call (858) 663-5564.',
    path: '/',
  });
}

export function cityPageMeta(cityName: string, citySlug: string): PageMeta {
  return generateMeta({
    title: `Electrician in ${cityName}, CA`,
    description: `Licensed electrician serving ${cityName}, CA. Wheyland Electric offers residential & commercial electrical services. Call (858) 663-5564 for a free estimate.`,
    path: `/${citySlug}/`,
  });
}

export function servicePageMeta(serviceName: string, serviceSlug: string): PageMeta {
  return generateMeta({
    title: `${serviceName} | San Diego County`,
    description: `Professional ${serviceName.toLowerCase()} in San Diego County by Wheyland Electric. Licensed, bonded & insured. Call (858) 663-5564 for your free estimate.`,
    path: `/services/${serviceSlug}/`,
  });
}

export function moneyPageMeta(
  serviceName: string,
  cityName: string,
  citySlug: string,
  serviceSlug: string
): PageMeta {
  return generateMeta({
    title: `${serviceName} in ${cityName}, CA`,
    description: `Need ${serviceName.toLowerCase()} in ${cityName}? Wheyland Electric is licensed, bonded & insured with a 1-year labor warranty. Call (858) 663-5564.`,
    path: `/${citySlug}/${serviceSlug}/`,
  });
}

export function blogPostMeta(title: string, description: string, slug: string): PageMeta {
  return generateMeta({
    title,
    description,
    path: `/blog/${slug}/`,
  });
}

export { SITE_NAME, SITE_URL };
