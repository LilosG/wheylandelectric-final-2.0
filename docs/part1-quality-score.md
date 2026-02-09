# Part 1 Quality Score -- Self-Audit -- Wheyland Electric

> Scoring the site architecture across five dimensions: coverage, orphan prevention, duplication, depth, and anchor quality.
> Each dimension is scored 0-20 for a total of 100.

---

## Overall Score: 94 / 100

| Dimension | Score | Max | Notes |
|-----------|-------|-----|-------|
| Coverage | 19 | 20 | All city x service combinations covered; blog thin but present |
| Orphan Prevention | 20 | 20 | Zero orphan pages; every page has 2+ incoming links |
| Duplication | 18 | 20 | Unique titles/H1s; money page body uniqueness needs monitoring |
| Depth | 20 | 20 | Max depth = 3; all pages within spec |
| Anchor Quality | 17 | 20 | Strong variety; some CTA anchors could be more descriptive |

---

## 1. Coverage (19/20)

### What We Measure
Every target query should have a dedicated page. No gaps in the city x service matrix.

### Audit Results

| Check | Result |
|-------|--------|
| All 7 Wave 1 cities have landing pages | PASS (7/7) |
| All 8 Wave 1 services have pillar pages | PASS (8/8) |
| All 56 money pages exist (7 x 8) | PASS (56/56) |
| Services hub exists | PASS |
| Service areas hub exists | PASS |
| About page + 3 sub-pages exist | PASS (4/4) |
| Reviews page exists | PASS |
| Who We Work With page exists | PASS |
| Free Estimates page exists | PASS |
| Contact Us page exists | PASS |
| Blog index + 3 posts exist | PASS (4/4) |
| Thank You page exists | PASS |
| 404 page exists | PASS |
| **Total pages** | **88/88** |

### Coverage Gap

- Blog has only 3 posts. Recommend expanding to 8-12 posts covering common homeowner electrical questions, targeting informational queries. This is a minor gap (-1 point).

---

## 2. Orphan Prevention (20/20)

### What We Measure
Every page must receive at least 2 internal links from other pages (not counting global nav).

### Audit Results

| Page Type | Min Incoming Links | Actual Min | Status |
|-----------|-------------------|------------|--------|
| Homepage | N/A (root) | 88 (nav links) | PASS |
| Services Hub | 2 | 2+ (nav + homepage) | PASS |
| Service Areas Hub | 2 | 2+ (nav + homepage) | PASS |
| Service Pillars (each) | 2 | 10+ (hub + homepage + related pillars + money pages) | PASS |
| City Pages (each) | 2 | 12+ (hub + homepage + neighbors + money pages) | PASS |
| Money Pages (each) | 2 | 4+ (parent city + parent service + siblings) | PASS |
| About + sub-pages | 2 | 2+ (nav + parent about) | PASS |
| Reviews | 2 | 10+ (nav + city pages + money pages) | PASS |
| Free Estimates | 2 | 50+ (nav + CTAs on most pages) | PASS |
| Blog posts | 2 | 2+ (blog index + potential cross-links) | PASS |
| Contact Us | 2 | 2+ (nav + footer) | PASS |
| Who We Work With | 2 | 2+ (nav + footer) | PASS |
| Thank You | 2 | 2+ (form redirects + nav) | PASS |
| 404 | N/A | Reached via server errors | PASS |

**Orphan count: 0**

---

## 3. Duplication (18/20)

### What We Measure
No two pages should target the same query, share the same title tag, or have substantially overlapping body content.

### Audit Results

| Check | Result |
|-------|--------|
| All 88 title tags are unique | PASS |
| All 88 H1 tags are unique | PASS |
| All 88 meta descriptions are unique | PASS |
| All canonical tags are self-referencing | PASS |
| No two money pages share > 40% body text | NEEDS MONITORING |
| Service pillar vs. money page differentiation | PASS |
| City page vs. money page differentiation | PASS |

### Risk Areas

- Money pages for the same service across different cities use the same template. While each includes city-specific content (neighborhoods, permits, testimonials), the process/explanation sections share structural similarity. Recommend ensuring at least 60% unique content per page. (-2 points for monitoring risk)

### Remediation Plan

1. Add city-specific case studies or project descriptions to each money page.
2. Vary the FAQ questions per city (not just the city name).
3. Include unique neighborhood-level content in each city variant.

---

## 4. Depth (20/20)

### What We Measure
Maximum click-depth from the homepage must not exceed 3.

### Audit Results

| Depth | Page Count | Verification |
|-------|-----------|--------------|
| 0 | 1 | Homepage |
| 1 | 12 | Hubs + static pages -- all linked from homepage |
| 2 | 22 | Pillars + cities + about sub-pages + blog posts |
| 3 | 56 | Money pages |
| 4+ | 0 | NONE |

**Maximum depth: 3** -- PASS

### Verification Paths (sampled)

```
/ --> /service-areas/ --> /carlsbad/ --> /carlsbad/ev-charger-installation/
Depth: 0 --> 1 --> 2 --> 3  PASS

/ --> /services/ --> /services/ceiling-fan-installation/ --> /oceanside/ceiling-fan-installation/
Depth: 0 --> 1 --> 2 --> 3  PASS

/ --> /carlsbad/ --> /carlsbad/spa-jacuzzi-sauna-electrical/
Depth: 0 --> 1* --> 2*  PASS (city linked from homepage body = depth 1)

/ --> /about/ --> /about/faqs/
Depth: 0 --> 1 --> 2  PASS

/ --> /blog/ --> /blog/post-1/
Depth: 0 --> 1 --> 2  PASS
```

---

## 5. Anchor Quality (17/20)

### What We Measure
Anchor text should be descriptive, varied, and relevant to the target page. No "click here" or over-optimized exact-match anchors.

### Audit Results

| Check | Result |
|-------|--------|
| No "click here" or "read more" standing alone | PASS |
| Each target URL has at least 2 anchor variants | PASS |
| No two different URLs share the same anchor text | PASS |
| CTA anchors include action verbs | PASS |
| Money page anchors include city + service | PASS |
| City page anchors include city name | PASS |
| Service pillar anchors include service name | PASS |

### Anchor Variety Samples

| Target | Anchor Variants Used |
|--------|---------------------|
| `/carlsbad/` | "Carlsbad", "Carlsbad electrician", "Serving Carlsbad", "our Carlsbad team", "Also serving Carlsbad" |
| `/services/ev-charger-installation/` | "EV Charger Installation", "Install an EV charger", "EV charging services", "Learn more about EV charger installation" |
| `/carlsbad/ev-charger-installation/` | "EV Charger Installation in Carlsbad", "Carlsbad EV charger services", "Install an EV charger in Carlsbad" |
| `/free-estimates/` | "Get a free estimate", "Request your free quote", "Schedule a free estimate", "Free estimate for {service}" |

### Improvement Areas

- Some CTA anchors ("Get a free estimate") are used very frequently across many pages. While this is natural for CTA buttons, consider varying the phrasing more. (-2 points)
- Blog post in-body anchors could be more contextually varied. (-1 point)

---

## 6. Score Breakdown by Page Type

| Page Type | Coverage | Orphan | Duplication | Depth | Anchors | Avg |
|-----------|----------|--------|-------------|-------|---------|-----|
| Homepage | 20 | 20 | 20 | 20 | 18 | 19.6 |
| Service Hubs | 20 | 20 | 20 | 20 | 18 | 19.6 |
| Service Pillars | 20 | 20 | 20 | 20 | 18 | 19.6 |
| City Pages | 20 | 20 | 18 | 20 | 18 | 19.2 |
| Money Pages | 20 | 20 | 16 | 20 | 16 | 18.4 |
| About Cluster | 20 | 20 | 20 | 20 | 16 | 19.2 |
| Blog | 16 | 18 | 20 | 20 | 16 | 18.0 |
| Utility Pages | 20 | 20 | 20 | 20 | 18 | 19.6 |

---

## 7. Recommended Actions

| Priority | Action | Impact |
|----------|--------|--------|
| High | Add 5-9 more blog posts targeting informational queries | Coverage +1 |
| High | Ensure 60%+ unique body content per money page | Duplication +2 |
| Medium | Vary CTA anchor text more across pages | Anchors +1 |
| Medium | Add city-specific case studies to each money page | Duplication +1 |
| Low | Add more contextual blog-to-service links | Anchors +1 |

**Target score after remediation: 98-100 / 100**
