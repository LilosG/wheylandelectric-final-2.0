// ============================================================
// Wheyland Electric — Core Type Definitions
// ============================================================

// --- NAP & Business ---
export interface NAP {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  phoneTel: string;
  email: string;
}

export interface BusinessHours {
  weekday: string;
  weekend: string;
  formatted: string;
}

export interface Owner {
  name: string;
  bio: string[];
  generation: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface SiteFlags {
  reviews_verified: boolean;
  show_review_excerpts: boolean;
  publish_wave2: boolean;
}

export interface SiteData {
  nap: NAP;
  hours: BusinessHours;
  license: string;
  established: number;
  claims: {
    licensedBondedInsured: boolean;
    satisfactionGuaranteed: boolean;
  };
  warranty: string;
  tagline: string;
  businessModelLine: string;
  pledge: string[];
  owner: Owner;
  team: TeamMember[];
  serviceRadiusCounties: string[];
  gbp: {
    url: string;
    embedSrc: string;
  };
  social: {
    twitter: string;
    facebook: string;
    linkedin: string;
  };
  flags: SiteFlags;
}

// --- Brand ---
export interface BrandTokens {
  colors: Record<string, string>;
  logoPaths: {
    primary: string;
    dark: string;
    favicon: string;
  };
  tagline: string;
  fonts: {
    heading: string;
    body: string;
  };
}

// --- Cities ---
export type CityTier = 'wave1' | 'wave2';

export interface City {
  slug: string;
  name: string;
  state: 'CA';
  tier: CityTier;
  publish: boolean;
  has_zip_pdf: boolean;
  zips: string[];
  neighborhoods: string[];
  localIntroSeed: string;
  localCues: string[];
  nearbyCities: string[];
  serviceCategories: string[];
}

// --- Services ---
export type ServiceTier = 'wave1' | 'wave2';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePillar {
  slug: string;
  name: string;
  publish: boolean;
  tier: ServiceTier;
  primaryKeyword: string;
  secondaryKeywords: string[];
  shortDesc: string;
  includedBullets: string[];
  processSteps: ProcessStep[];
  pricingFactors: string[];
  faqs: FAQ[];
  relatedServices: string[];
  subtopics: string[];
  localizedIntroSeedByCity: Record<string, string>;
}

export type ExtendedServiceCategory = 'residential' | 'commercial' | 'industrial' | 'hoa' | 'ev' | 'compliance';

export interface ExtendedService {
  name: string;
  category: ExtendedServiceCategory;
  relatedPillarSlug: string;
}

// --- Offerings ---
export interface Offering {
  slug: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  publish: boolean;
}

// --- Testimonials ---
export interface Testimonial {
  author: string;
  text: string;
  source: string;
  serviceTag?: string;
  cityTag?: string;
}

// --- Projects ---
export interface Project {
  slug: string;
  title: string;
  description: string;
  citySlug?: string;
  serviceSlug?: string;
  images: string[];
  publish: boolean;
}

// --- Navigation ---
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// --- Redirects ---
export interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

// --- SEO ---
export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// --- Schema ---
export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  telephone: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours: string;
  license: string;
  foundingDate: string;
  url: string;
  areaServed?: unknown[];
  aggregateRating?: unknown;
}
