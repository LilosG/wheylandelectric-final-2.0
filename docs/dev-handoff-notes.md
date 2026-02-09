# Developer Handoff Notes -- Wheyland Electric

> How to expand the site via data only. No template changes required for adding cities, services, or content.

---

## 1. Architecture Overview

- **Framework:** Astro (static site generation)
- **Total pages:** 88 (Wave 1), pre-rendered at build time
- **All content** lives in `/src/data/` as TypeScript files
- **Styling:** Tailwind CSS v3 via `@astrojs/tailwind`
- **Client JS:** Minimal -- mobile nav toggle, FAQ accordion, form validation
- **Forms:** Formspree (endpoint configurable via `PUBLIC_FORMSPREE_ENDPOINT` env var)
- **Fonts:** Google Fonts (Inter + Plus Jakarta Sans)
- **Schema:** JSON-LD generators in `/src/lib/schema/`
- **SEO:** Meta utility in `/src/lib/seo.ts`
- **Hosting:** Vercel (static adapter)
- **Redirects:** `vercel.json`

---

## 2. Data Files

All site content is driven by these data files:

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Global config: business info, phone, address, flags (`publish_wave2`, `show_review_excerpts`, `reviews_verified`) |
| `src/data/cities.ts` | City definitions: name, slug, wave, `localIntroSeed`, neighborhoods, ZIPs, landmarks, `localCues`, neighbors |
| `src/data/services.ts` | Service definitions: name, slug, wave, `shortDesc`, `includedBullets`, `processSteps`, `pricingFactors`, `localizedIntroSeedByCity`, FAQs |
| `src/data/blog/` | Blog post content (Markdown or content collection) |

---

## 3. How to Add a City

1. Open `src/data/cities.ts`.
2. Add a new `City` object to the cities array:

```typescript
{
  name: "Vista",
  slug: "vista",
  wave: 2,      // or 1 if publishing immediately
  publish: true, // set to true when ready
  localIntroSeed: "Genuinely unique paragraph about Vista...",
  neighborhoods: ["Shadowridge", "Rancho Buena Vista", ...],
  zips: ["92081", "92083", "92084"],
  landmarks: ["Moonlight Amphitheatre", "Brengle Terrace Park"],
  localCues: { housingStock: "...", permitNotes: "..." },
  neighbors: ["oceanside", "san-marcos"]
}
```

3. In `src/data/services.ts`, add `localizedIntroSeedByCity` entries for the new city under each service:

```typescript
localizedIntroSeedByCity: {
  // ... existing cities ...
  "vista": "Unique paragraph about this service in Vista..."
}
```

4. Run `npm run build`. The build will automatically generate:
   - `/{city}/` landing page
   - `/{city}/{service}/` money pages for all published services
   - Updated service-areas hub
   - Updated XML sitemap

---

## 4. How to Add a Service

1. Open `src/data/services.ts`.
2. Add a new `ServicePillar` object:

```typescript
{
  name: "Dedicated Circuits",
  slug: "dedicated-circuits",
  wave: 2,
  publish: true,
  shortDesc: "Brief description...",
  includedBullets: ["Bullet 1", "Bullet 2", ...],
  processSteps: [
    { title: "Assessment", description: "..." },
    { title: "Installation", description: "..." },
    // ...
  ],
  pricingFactors: ["Factor 1", "Factor 2", ...],
  localizedIntroSeedByCity: {
    "carlsbad": "Unique intro for dedicated circuits in Carlsbad...",
    "encinitas": "Unique intro for dedicated circuits in Encinitas...",
    // ... all published cities
  },
  faqs: [
    { question: "...", answer: "..." },
    // min 6 FAQs
  ],
  relatedServices: ["electrical-panel-upgrades", "ev-charger-installation"]
}
```

3. Run `npm run build`. The build generates:
   - `/services/{slug}/` pillar page
   - `/{city}/{slug}/` money pages for all published cities
   - Updated services hub
   - Updated XML sitemap

---

## 5. How to Publish Wave 2

1. Open `src/data/site.ts`.
2. Set `publish_wave2: true`.
3. Ensure all Wave 2 data files have:
   - Genuine (non-placeholder) `localIntroSeed` for each new city
   - Genuine `localizedIntroSeedByCity` for every new city x service combination
   - At least 6 FAQs per new page
4. Run `npm run build`.
5. Verify all new pages render correctly.
6. Deploy to Vercel.
7. Submit updated sitemap to GSC.

### Wave 2 Data Readiness Checklist

- [ ] All Wave 2 city `localIntroSeed` values are real content (not `[PLACEHOLDER]`)
- [ ] All Wave 2 `localizedIntroSeedByCity` entries are written
- [ ] All Wave 2 service FAQs are complete
- [ ] All Wave 2 service `includedBullets` and `processSteps` are complete
- [ ] Neighbor city links updated for new cities

---

## 6. How to Enable Reviews

Reviews display is controlled by two flags in `src/data/site.ts`:

| Flag | Purpose | Default |
|------|---------|---------|
| `show_review_excerpts` | Show review text on pages | `false` |
| `reviews_verified` | Connect to verified data source (GBP API, etc.) | `false` |

To enable:
1. Set `show_review_excerpts: true` to show review excerpts.
2. Set `reviews_verified: true` **only** when connected to a verified data source. Do not set this to true with manually entered reviews -- it controls AggregateRating schema output.

---

## 7. How to Add a Blog Post

Blog posts use Astro's content collection:

1. Create a new Markdown file in the blog content directory.
2. Include frontmatter: `title`, `description`, `date`, `author`, `slug`.
3. Write the post body in Markdown.
4. Include 1-2 internal links to relevant service pages.
5. Run `npm run build`.

---

## 8. How to Add Redirects

1. Open `vercel.json` in the project root.
2. Add a redirect entry:

```json
{ "source": "/old-path/", "destination": "/new-path/", "permanent": true }
```

3. Deploy. Vercel applies redirects at the edge (no build required, but deploy triggers config update).

---

## 9. Build & Deploy

### Local Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build static site to /dist/
npm run preview      # Preview built site locally
```

### Production Deploy

Push to the connected Git branch. Vercel auto-deploys on push. Or deploy manually:

```bash
npx vercel --prod
```

### Environment Variables (Vercel)

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SITE_URL` | Canonical site URL (e.g., `https://wheylandelectric.com`) |
| `PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint ID |

---

## 10. Key File Paths

| Path | Purpose |
|------|---------|
| `src/data/site.ts` | Global config and feature flags |
| `src/data/cities.ts` | All city definitions |
| `src/data/services.ts` | All service definitions |
| `src/pages/[city]/index.astro` | City landing page template |
| `src/pages/[city]/[service].astro` | Money page template |
| `src/pages/services/[slug].astro` | Service pillar template |
| `src/pages/services/index.astro` | Services hub |
| `src/pages/service-areas/index.astro` | Service areas hub |
| `src/lib/schema/` | JSON-LD schema generators |
| `src/lib/seo.ts` | Meta tag utility |
| `src/components/` | Reusable Astro components |
| `src/layouts/` | Page layouts |
| `public/images/` | Static images |
| `vercel.json` | Redirects and Vercel config |

---

## 11. Important Notes

1. **No template changes needed** to add cities or services. The system is fully data-driven.
2. **Wave filtering** is automatic. Pages for wave > current max wave are simply not generated.
3. **Internal links** are generated automatically based on the data. New cities/services are linked from hubs, neighbor lists, and related-services lists.
4. **Sitemaps** regenerate on every build. No manual sitemap management needed.
5. **Schema markup** is auto-generated per page type. No manual JSON-LD authoring.
6. **Image paths** should use the `/public/images/` directory. Reference as `/images/{filename}` in data files.
