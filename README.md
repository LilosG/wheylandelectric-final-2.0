# Wheyland Electric — Local SEO Website

Production-ready Astro + Tailwind CSS + TypeScript local SEO website for Wheyland Electric, a licensed electrician serving San Diego County from Carlsbad, CA.

## Quick Start

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build (88 pages)
npm run preview  # Preview production build
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PUBLIC_SITE_URL` | Production site URL | `https://www.wheylandelectric.com` |
| `PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint | `https://formspree.io/f/xxxxxxxx` |

## Architecture

### Data-Driven Pages

All content is sourced from centralized TypeScript data files in `/src/data/`. No content is hardcoded in page templates.

| Data File | Purpose |
|-----------|---------|
| `site.ts` | NAP, hours, license, warranty, owner bio, flags |
| `brand.ts` | Color tokens, logo paths, fonts |
| `cities.ts` | All city data (Wave 1 + Wave 2) |
| `services.ts` | Service pillars + extended catalog |
| `offerings.ts` | HOA maintenance offering |
| `testimonials.ts` | Review excerpts (gated by flag) |
| `projects.ts` | Project gallery (empty-safe) |
| `navigation.ts` | Auto-generated from cities/services |
| `redirects.ts` | Legacy URL mappings |

### Page Types

| Type | Route | Count | Source |
|------|-------|-------|--------|
| Homepage | `/` | 1 | Static |
| City Landing | `/{city}/` | 7 | `cities.ts` |
| Service Pillar | `/services/{service}/` | 8 | `services.ts` |
| Service-in-City | `/{city}/{service}/` | 56 | cities x services |
| About Section | `/about/*` | 4 | Static |
| Blog | `/blog/*` | 4 | Content collection |
| Other | Various | 8 | Static |

**Total: 88 pages**

## How to Add a New City

1. Open `src/data/cities.ts`
2. Add a new `City` object to the array with `publish: true`
3. Include unique `localIntroSeed` content (not template-swapped)
4. Add `localizedIntroSeedByCity` entries in `src/data/services.ts` for the new city
5. Run `npm run build` — the city page and all 8 service-in-city pages generate automatically

## How to Add a New Service

1. Open `src/data/services.ts`
2. Add a new `ServicePillar` object with `publish: true`
3. Include FAQs (min 6), process steps, pricing factors
4. Add `localizedIntroSeedByCity` for all published cities
5. Run `npm run build` — the service pillar page and all city-specific money pages generate automatically

## How to Publish Wave 2

1. Open `src/data/site.ts`
2. Change `publish_wave2: false` to `publish_wave2: true`
3. Run `npm run build`
4. All Wave 2 cities and services generate automatically

## How to Enable Review Excerpts

1. Open `src/data/site.ts`
2. Change `show_review_excerpts: false` to `show_review_excerpts: true`
3. Review excerpts will render on all pages with the `TestimonialBlock` component

**Important:** Do NOT set `reviews_verified: true` until review data is connected to a verified source (e.g., Google API). This flag controls the `AggregateRating` schema output.

## Tech Stack

- **Framework:** Astro 4.x (static output)
- **Styling:** Tailwind CSS v3 via `@astrojs/tailwind`
- **TypeScript:** Strict mode
- **Hosting:** Vercel-ready (includes `vercel.json`)
- **SEO:** Auto-generated sitemap, JSON-LD schema, unique meta per page

## Build

```bash
npm run build
```

Generates 88 static HTML pages with:
- Zero TypeScript errors
- Unique title/description per page
- JSON-LD schema (LocalBusiness, Service, FAQ, Breadcrumb, Article)
- Sitemap with all published pages
- Robots.txt
