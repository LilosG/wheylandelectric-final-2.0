# Content System -- Wheyland Electric

> Defines page-type templates, section requirements, word counts, meta tag rules, FAQ requirements, and content quality standards for every page type on the site.

---

## 1. Page Type Inventory

| Page Type | Template | Count | Example |
|-----------|----------|-------|---------|
| Homepage | `homepage.astro` | 1 | `/` |
| Services Hub | `services-hub.astro` | 1 | `/services/` |
| Service Areas Hub | `areas-hub.astro` | 1 | `/service-areas/` |
| Service Pillar | `service-pillar.astro` | 8 | `/services/ev-charger-installation/` |
| City Landing | `city-landing.astro` | 7 | `/carlsbad/` |
| Money Page | `city-service.astro` | 56 | `/carlsbad/ev-charger-installation/` |
| About | `about.astro` | 1 | `/about/` |
| About Sub-Page | `about-sub.astro` | 3 | `/about/licenses/`, `/about/faqs/`, `/about/projects/` |
| Reviews | `reviews.astro` | 1 | `/reviews/` |
| Utility Page | `utility.astro` | 3 | `/contact-us/`, `/who-we-work-with/`, `/free-estimates/` |
| Blog Index | `blog-index.astro` | 1 | `/blog/` |
| Blog Post | `blog-post.astro` | 3 | `/blog/post-1/` |
| Thank You | `thank-you.astro` | 1 | `/thank-you/` |
| 404 | `404.astro` | 1 | `/404` |

---

## 2. Meta Tag Rules (All Pages)

### Title Tag

- **Format:** `{Primary Keyword} | Wheyland Electric`
- **Max length:** 60 characters (including brand)
- **Rules:**
  - Every title must be unique across all 88 pages.
  - Include the primary target keyword.
  - For money pages: `{Service} in {City}, CA | Wheyland Electric`
  - For city pages: `Electrician in {City}, CA | Wheyland Electric`
  - For service pillars: `{Service} | San Diego County | Wheyland Electric`
  - For hubs: `{Hub Name} | Wheyland Electric`

### Meta Description

- **Max length:** 155 characters
- **Rules:**
  - Every description must be unique.
  - Include the primary keyword naturally.
  - Include a call-to-action or value proposition.
  - End with phone number or CTA language.
  - For money pages: mention both the city and service.

### Canonical Tag

- Self-referencing on every page: `<link rel="canonical" href="https://wheylandelectric.com{path}" />`

### Open Graph

- `og:title` = title tag
- `og:description` = meta description
- `og:image` = page hero image or site default
- `og:type` = `website` (all pages) or `article` (blog posts)
- `og:url` = canonical URL

---

## 3. Page-Type Templates

### 3.1 Homepage

**Target word count:** 800-1,200 words (body content, excluding nav/footer)

| Section | Required | Content |
|---------|----------|---------|
| Hero | Yes | H1 "Licensed Electrician in Carlsbad & North County San Diego", subheading, primary CTA |
| Trust Bar | Yes | License #940291, est. 2008, review count/rating, "Licensed, Bonded & Insured" |
| Services Grid | Yes | All 8 service pillars as cards with icons, short descriptions, links |
| Service Areas Preview | Yes | All 7 cities as cards or map, links to city pages |
| About Preview | Yes | 2-3 sentences about Wheyland Electric, link to `/about/` |
| Social Proof | Yes | 2-3 featured reviews, link to `/reviews/` |
| CTA Section | Yes | "Get a Free Estimate" with form or link to `/free-estimates/` |
| FAQ Snippet | Optional | 2-3 top FAQs with schema markup |

### 3.2 Services Hub (`/services/`)

**Target word count:** 400-600 words

| Section | Required | Content |
|---------|----------|---------|
| Hero | Yes | H1 "Our Electrical Services", intro paragraph |
| Service Cards | Yes | All 8 services with icon, 2-3 sentence description, link |
| CTA | Yes | "Request a free estimate" |
| Breadcrumb | Yes | Home > Services |

### 3.3 Service Areas Hub (`/service-areas/`)

**Target word count:** 400-600 words

| Section | Required | Content |
|---------|----------|---------|
| Hero | Yes | H1 "Areas We Serve in North County San Diego", intro paragraph |
| City Cards | Yes | All 7 cities with thumbnail, city name, link |
| Map | Recommended | Embedded GBP map or static map showing service area |
| CTA | Yes | "Get a free estimate in your area" |
| Breadcrumb | Yes | Home > Service Areas |

### 3.4 Service Pillar Page (`/services/{slug}/`)

**Target word count:** 1,000-1,500 words

| Section | Required | Content |
|---------|----------|---------|
| Hero | Yes | H1 "{Service} in San Diego County", intro (2-3 sentences) |
| Breadcrumb | Yes | Home > Services > {Service} |
| Trust Bar | Yes | License, est. 2008, bonded, warranty |
| What's Included | Yes | Bullet list of what the service covers |
| Process Steps | Yes | Numbered steps: how Wheyland Electric performs this service |
| Pricing Factors | Yes | What affects cost (never actual prices), ends with CTA |
| City Grid | Yes | Links to all 7 city money pages for this service |
| Related Services | Yes | 3-4 related service pillar links |
| FAQ Section | Yes | Min 6 FAQs with schema markup |
| Testimonial Block | Conditional | Gated by `show_review_excerpts` flag, filtered by service tag |
| CTA Section | Yes | "Get a free estimate for {service}" |

**Schema:** Service + FAQPage + BreadcrumbList

### 3.5 City Landing Page (`/{city}/`)

**Target word count:** 1,000-1,500 words

| Section | Required | Content |
|---------|----------|---------|
| Hero | Yes | H1 "Electrician in {City}, CA", subtitle |
| Breadcrumb | Yes | Home > {City} |
| Trust Bar | Yes | License, est. 2008, bonded, warranty |
| City-Specific Intro | Yes | From `localIntroSeed` data field -- genuinely unique per city (150-250 words) |
| Service Category Badges | Yes | Residential, Commercial, HOA, EV |
| Services Grid | Yes | All 8 services as cards linking to money pages |
| HOA Offer Block | Yes | Required on every city page -- flat-rate maintenance pitch |
| City Details | Yes | Neighborhoods, ZIP codes, landmarks (from city data) |
| Testimonial Block | Conditional | Gated by flag |
| FAQ Section | Yes | Min 6 FAQs specific to this city |
| Nearby Cities | Yes | 2-4 adjacent city links |
| CTA Section | Yes | Phone + estimate CTA |
| GBP Map | Yes | Embedded map |

**Schema:** LocalBusiness + FAQPage + BreadcrumbList

### 3.6 Money Page (`/{city}/{service}/`)

**Target word count:** 800-1,500 words

| Section | Required | Content |
|---------|----------|---------|
| Breadcrumb | Yes | Home > {City} > {Service} |
| H1 + Localized Intro | Yes | From `localizedIntroSeedByCity` -- genuinely unique per city+service |
| Inline CTA | Yes | Above the fold -- phone + estimate button |
| Service Detail | Yes | Scoped to this service -- included bullets from service data |
| Process Steps | Yes | Numbered steps with local considerations |
| Pricing Factors | Yes | What affects cost in this city, ends with CTA |
| Trust Bar | Yes | Reinforcement of license, bonded, warranty |
| Related Services | Yes | 2-3 sibling money pages in same city |
| FAQ Section | Yes | Min 6 FAQs specific to this service in this city |
| CTA Section | Yes | Full CTA with phone + form link |
| Nearby City Links | Yes | Same service in 2-3 adjacent cities |
| Breadcrumb Links Back | Yes | Link to parent city page + parent service pillar |

**Schema:** Service (area-scoped) + FAQPage + BreadcrumbList

### 3.7 About Page (`/about/`)

**Target word count:** 600-900 words

| Section | Required | Content |
|---------|----------|---------|
| Hero | Yes | H1 "About Wheyland Electric" |
| Company Story | Yes | Founded 2008, owner Tim Wheyland, Carlsbad-based, mission |
| Team | Recommended | Owner bio, team photo |
| Sub-Page Links | Yes | Links to licenses, FAQs, projects |
| CTA | Yes | Contact link |

### 3.8 About Sub-Pages

**Target word count:** 400-800 words each

| Page | H1 | Content Focus |
|------|-----|---------------|
| `/about/licenses/` | "Licenses & Certifications" | CA License #940291, C-10 classification, bonding, insurance |
| `/about/faqs/` | "Frequently Asked Questions" | 10-20 FAQs covering general electrical topics |
| `/about/projects/` | "Past Projects" | Portfolio of completed work with photos and descriptions |

### 3.9 Blog Post (`/blog/{slug}/`)

**Target word count:** 800-1,500 words

| Section | Required | Content |
|---------|----------|---------|
| Breadcrumb | Yes | Home > Blog > {Post Title} |
| Post Header | Yes | Date, title, description, author |
| Body | Yes | Markdown-rendered, well-structured with H2/H3 |
| In-Body Links | Yes | 1-2 links to relevant service pages |
| CTA | Yes | "Contact us" or "Get a free estimate" |
| Related Posts | Recommended | Links to other blog posts |

**Schema:** Article

---

## 4. FAQ Requirements

### Schema Markup

All FAQ sections must use `FAQPage` structured data (JSON-LD).

### FAQ Count by Page Type

| Page Type | Min FAQs | Max FAQs |
|-----------|----------|----------|
| Service Pillar | 6 | 10 |
| City Landing | 6 | 10 |
| Money Page | 6 | 10 |
| About FAQs page | 10 | 20 |
| Homepage | 0 | 3 |
| Blog Post | 0 | 3 |

### FAQ Content Rules

1. **No duplicate questions across the site.** Each FAQ must be phrased uniquely.
2. **Answers: 40-150 words.** Long enough to be useful, short enough for SERP snippets.
3. **City-specific FAQs on money pages** must reference the city by name in both Q and A.
4. **Service-specific FAQs on pillar pages** must address the service specifically.
5. **FAQ answers may link** to other relevant pages.

### FAQ Patterns by Page Type

**Service Pillar:**
- "How much does {service} cost in San Diego County?"
- "Do I need a permit for {service}?"
- "How long does {service} take?"
- "Why hire a licensed electrician for {service}?"

**City Landing:**
- "What electrical services does Wheyland Electric offer in {City}?"
- "Is Wheyland Electric licensed to work in {City}?"
- "How do I get a free estimate for electrical work in {City}?"
- "Does Wheyland Electric serve HOA communities in {City}?"

**Money Page:**
- "How much does {service} cost in {City}?"
- "Are you licensed to perform {service} in {City}?"
- "How long does {service} take in a typical {City} home?"
- "What brands do you recommend for {service}?"

---

## 5. Structured Data Requirements

| Page Type | Schema Types |
|-----------|-------------|
| All pages | `Organization` (site-wide, in layout) |
| Homepage | `WebSite`, `LocalBusiness` |
| Service Pillar | `Service`, `FAQPage`, `BreadcrumbList` |
| City Landing | `LocalBusiness` (with `areaServed`), `FAQPage`, `BreadcrumbList` |
| Money Page | `Service` (with `areaServed`), `FAQPage`, `BreadcrumbList` |
| Reviews | `AggregateRating` (when verified data connected) |
| Blog Post | `Article`, `BreadcrumbList` |
| About / Licenses | `LocalBusiness`, `BreadcrumbList` |

Schema generators live in `/src/lib/schema/`. SEO meta utility in `/src/lib/seo.ts`.

---

## 6. Image Requirements

| Page Type | Hero Image | Inline Images | Alt Text Pattern |
|-----------|-----------|---------------|------------------|
| Homepage | Required | 0-2 | "{Service/City} -- Wheyland Electric" |
| Service Pillar | Required | 1-3 | "{Service} by Wheyland Electric" |
| City Landing | Required | 1-2 | "Electrician in {City}" |
| Money Page | Required | 1-2 | "{Service} in {City} -- Wheyland Electric" |
| Blog Post | Required | 1-3 | Descriptive per image |
| About | Required | 1-2 | "Wheyland Electric team" or similar |

### Image Optimization

- Format: WebP with JPEG fallback
- Max width: 1600px for hero, 800px for inline
- Lazy loading on all images below the fold
- Width/height attributes on all `<img>` tags (prevent CLS)

---

## 7. Word Count Summary

| Page Type | Target Range | Minimum |
|-----------|-------------|---------|
| Homepage | 800-1,200 | 600 |
| Services Hub | 400-600 | 300 |
| Service Areas Hub | 400-600 | 300 |
| Service Pillar | 1,000-1,500 | 500 |
| City Landing | 1,000-1,500 | 400 |
| Money Page | 800-1,500 | 600 |
| About | 600-900 | 400 |
| About Sub-Page | 400-800 | 300 |
| Blog Post | 800-1,500 | 500 |
| Reviews | 200-400 | 150 |
| Utility (contact, etc.) | 200-500 | 150 |
| Thank You | 100-200 | 80 |
| 404 | 100-200 | 80 |

**Total site word count target: ~55,000-85,000 words across all 88 pages.**

---

## 8. Uniqueness Injectors

Each page type uses specific data fields to ensure Google sees unique content:

- **City pages:** `localIntroSeed` + `neighborhoods` + `localCues` + `zips`
- **Service pillars:** `shortDesc` + `includedBullets` + `processSteps` + `pricingFactors`
- **Money pages:** `localizedIntroSeedByCity` + city-specific FAQ answers + city-scoped service descriptions

---

## 9. E-E-A-T Signals

Every page includes:

- Owner name (Tim Wheyland) in schema
- Business founding date (2008) in Trust Bar
- License number (CA #940291) prominently displayed
- "Licensed, Bonded & Insured" claim
- 1-year labor warranty statement
- Physical address (3536 Woodland Way, Carlsbad, CA 92008) in footer
- Phone number (858) 663-5564 in header and CTAs

---

## 10. Content Quality Checklist (Per Page)

- [ ] H1 is unique and contains the primary keyword
- [ ] Title tag is unique, under 60 characters, contains primary keyword
- [ ] Meta description is unique, under 155 characters, contains keyword + CTA
- [ ] Canonical tag is self-referencing
- [ ] FAQ schema markup is valid (test with Rich Results Test)
- [ ] All images have descriptive alt text
- [ ] No orphan links (every link destination exists)
- [ ] CTA is present and links to `/free-estimates/` or `/contact-us/`
- [ ] Breadcrumb is accurate and uses BreadcrumbList schema
- [ ] Word count meets minimum for page type
- [ ] No duplicate content blocks shared with another page (> 40%)
- [ ] Internal links follow the link plan
- [ ] Mobile-responsive layout confirmed
- [ ] Trust Bar present with license, bonded, warranty info
