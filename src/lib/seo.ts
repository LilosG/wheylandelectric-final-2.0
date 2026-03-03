import type { PageMeta } from '../types';

export const SITE_NAME = 'Wheyland Electric';
export const SITE_URL = 'https://wheylandelectric.com';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
};

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function buildCanonical(path: string): string {
  const normalizedPath = normalizePath(path);
  return `${SITE_URL}${normalizedPath}`;
}

function decodeEntities(value: string): string {
  return value.replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (match) => ENTITY_MAP[match] || match);
}

function normalizeText(value: string): string {
  return decodeEntities(value).replace(/\s+/g, ' ').trim();
}

function stripTrailingSeparator(value: string): string {
  return value.replace(/\s*[|\-–—:]\s*$/, '').trim();
}

function composeTitle(pageTitle: string): string {
  const normalizedPageTitle = stripTrailingSeparator(normalizeText(pageTitle));
  const parts = [normalizedPageTitle];

  if (!normalizedPageTitle.toLowerCase().includes(SITE_NAME.toLowerCase())) {
    parts.push(SITE_NAME);
  }

  return parts.filter(Boolean).join(' | ');
}

export function generateMeta(input: MetaInput): PageMeta {
  return {
    title: composeTitle(input.title),
    description: normalizeText(input.description),
    canonical: buildCanonical(input.path),
    ogImage: input.ogImage,
  };
}

export function homePageMeta(): PageMeta {
  return generateMeta({
    title: 'Carlsbad Electrician | Residential & Commercial Electrical',
    description:
      'Need a licensed Carlsbad electrician? Wheyland Electric delivers safe, code-compliant panel upgrades, EV charger installs, lighting, and electrical repairs across San Diego County.',
    path: '/',
  });
}

export function servicesIndexMeta(): PageMeta {
  return generateMeta({
    title: 'Electrical Services in Carlsbad, CA',
    description:
      'Explore Wheyland Electric electrical services in Carlsbad, CA, including panel upgrades, EV chargers, lighting, troubleshooting, and code-compliant installations.',
    path: '/services/',
  });
}

export function cityPageMeta(cityName: string, citySlug: string): PageMeta {
  return generateMeta({
    title: `Electrician in ${cityName}, CA`,
    description: `Looking for a licensed electrician in ${cityName}, CA? Wheyland Electric provides trusted residential and commercial electrical services with free estimates.`,
    path: `/${citySlug}/`,
  });
}

export function servicePageMeta(serviceName: string, serviceSlug: string): PageMeta {
  return generateMeta({
    title: `${serviceName} in San Diego County`,
    description: `Professional ${serviceName.toLowerCase()} in San Diego County from Wheyland Electric. Licensed, bonded, and insured with code-compliant workmanship and free estimates.`,
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
    description: `Need ${serviceName.toLowerCase()} in ${cityName}, CA? Wheyland Electric provides licensed, code-compliant service for homes and businesses with a 1-year labor warranty.`,
    path: `/${citySlug}/${serviceSlug}/`,
  });
}

export function aboutPageMeta(): PageMeta {
  return generateMeta({
    title: 'About Wheyland Electric | Family-Owned Carlsbad Electrician',
    description:
      'Learn about Wheyland Electric, a family-owned Carlsbad electrician serving San Diego County since 2008 with licensed, bonded, and insured electrical services.',
    path: '/about/',
  });
}

export function contactPageMeta(): PageMeta {
  return generateMeta({
    title: 'Contact Wheyland Electric | Carlsbad Electrician',
    description:
      'Contact Wheyland Electric for electrical service in Carlsbad and San Diego County. Call (858) 663-5564 or request a free estimate online.',
    path: '/contact-us/',
  });
}

export function reviewsPageMeta(): PageMeta {
  return generateMeta({
    title: 'Wheyland Electric Reviews | San Diego County Electrician',
    description:
      'Read verified customer reviews for Wheyland Electric, a trusted licensed electrician serving homeowners and businesses across San Diego County.',
    path: '/reviews/',
  });
}

export function blogIndexMeta(): PageMeta {
  return generateMeta({
    title: 'Electrical Blog | Tips from San Diego County Electricians',
    description:
      'Read practical electrical tips, safety guides, and project insights from Wheyland Electric for homeowners and property managers in San Diego County.',
    path: '/blog/',
  });
}

export function blogPostMeta(title: string, description: string, slug: string): PageMeta {
  return generateMeta({
    title,
    description,
    path: `/blog/${slug}/`,
  });
}

