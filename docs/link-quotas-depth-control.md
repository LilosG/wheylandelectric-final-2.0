# Link Quotas & Depth Control -- Wheyland Electric

> Ensures every page stays within 3 clicks of the homepage, maintains healthy link budgets, and prevents orphan pages.

---

## 1. Depth Proof

**Requirement:** No page may exceed click-depth 3 from the homepage.

### Depth Map

| Depth | Pages | How Reached |
|-------|-------|-------------|
| 0 | `/` (1 page) | -- |
| 1 | Hubs + static pages (12 pages) | Direct link from homepage nav/body |
| 2 | Service pillars + city pages + about sub-pages + blog posts (22 pages) | Linked from depth-1 hubs |
| 3 | Money pages (56 pages) | Linked from depth-2 city or service pages |

**Verification paths for deepest pages (depth 3):**

```
/  -->  /service-areas/  -->  /carlsbad/  -->  /carlsbad/ev-charger-installation/
       (depth 1)              (depth 2)        (depth 3)

/  -->  /services/  -->  /services/ev-charger-installation/  -->  /carlsbad/ev-charger-installation/
       (depth 1)         (depth 2)                                (depth 3)

/  -->  /carlsbad/  -->  /carlsbad/ev-charger-installation/
       (depth 1*)        (depth 2*)
```

*Note: City pages are also linked directly from the homepage body (service-area preview section), giving them an effective depth of 1 from the homepage, which makes money pages reachable at depth 2 via that path.*

### Depth Audit Checklist

- [ ] Every money page is reachable from at least one depth-2 parent.
- [ ] Every city page is linked from `/service-areas/` AND from the homepage.
- [ ] Every service pillar is linked from `/services/` AND from the homepage.
- [ ] Blog posts are linked from `/blog/` (depth 1).
- [ ] About sub-pages are linked from `/about/` (depth 1).
- [ ] No page exists at depth 4 or beyond.

---

## 2. Link Budget per Page Type

The link budget defines the target number of unique internal links per page, excluding global nav/footer links (which appear on every page).

| Page Type | Target Links (body) | Min | Max | Notes |
|-----------|-------------------|-----|-----|-------|
| Homepage | 20-25 | 18 | 30 | All services + all cities + key CTAs |
| Services Hub | 9-10 | 8 | 12 | 8 service cards + CTA |
| Service Areas Hub | 8-9 | 7 | 10 | 7 city cards + CTA |
| Service Pillar | 12-16 | 10 | 18 | 7 city money pages + 2-3 related services + CTAs + body links |
| City Landing | 14-18 | 12 | 20 | 8 service money pages + 2-3 neighbors + CTAs + body links |
| Money Page | 8-12 | 6 | 14 | Parent city + parent service + siblings + neighbors + CTAs |
| Blog Post | 4-6 | 3 | 8 | 1-2 service links + CTA + blog index |
| About / Static | 3-6 | 2 | 8 | Contextual links + CTA |
| Thank You | 3-4 | 2 | 5 | Homepage + services + contact |
| 404 | 4-5 | 3 | 6 | Homepage + services + service areas + contact |

### Global Nav/Footer Links (all pages)

Every page carries approximately 12 shared navigation links. These are **excluded** from the per-page body budget above but count toward total outgoing links.

**Total outgoing links per page = body links + ~12 nav/footer links.**

---

## 3. Orphan Prevention

An orphan page is any page not linked to by at least one other page (excluding its own global nav self-link).

### Orphan Prevention Rules

1. **Every page must receive at least 2 incoming internal links** (beyond global nav).
2. **Money pages** receive links from:
   - Their parent city page (guaranteed)
   - Their parent service pillar page (guaranteed)
   - 1-2 sibling money pages (via "related services in {city}" section)
3. **City pages** receive links from:
   - `/service-areas/` hub (guaranteed)
   - Homepage (guaranteed)
   - 2-3 neighbor city pages (guaranteed)
   - All 8 of their child money pages (breadcrumb back-links)
4. **Service pillars** receive links from:
   - `/services/` hub (guaranteed)
   - Homepage (guaranteed)
   - 2-3 related service pillars (cross-links)
   - All 7 of their child money pages (body links)
5. **Blog posts** receive links from:
   - `/blog/` index (guaranteed)

### Orphan Audit Query

Run this check after every build:

```bash
# Extract all internal hrefs from built HTML
# Compare against known route list
# Flag any route with 0 incoming links

grep -roh 'href="\/[^"]*"' dist/ | sort | uniq -c | sort -rn > link-incoming-count.txt
```

Any route from the sitemap that does not appear in the incoming-link list is orphaned and must be fixed before deploy.

---

## 4. Link Equity Distribution

### Priority Pages (receive the most internal links)

| Priority | Page | Approx Incoming Links |
|----------|------|----------------------|
| 1 | `/` | ~88 (every page via nav) + external |
| 2 | `/free-estimates/` | ~88 (nav) + ~50 (CTA on most pages) |
| 3 | `/services/` | ~88 (nav) + homepage |
| 4 | `/service-areas/` | ~88 (nav) + homepage |
| 5 | City landing pages (each) | ~12-15 (hub + homepage + neighbors + child money pages) |
| 6 | Service pillars (each) | ~12-15 (hub + homepage + related pillars + child money pages) |
| 7 | Money pages (each) | ~4-6 (parent city + parent service + siblings + neighbors) |

### Link Equity Principles

1. **Homepage acts as the primary equity distributor.** It links to every hub and every city/service directly.
2. **Hub pages act as secondary distributors.** They pass equity evenly to all children.
3. **Money pages are equity receivers.** They get links from multiple parents and pass equity back up via breadcrumbs.
4. **The free-estimates page is the top conversion target.** It receives a CTA link from nearly every content page.

---

## 5. Depth Control for Wave 2

When Wave 2 cities and services are enabled:

- New service pillars remain at depth 2 (linked from `/services/` hub).
- New city pages remain at depth 2 (linked from `/service-areas/` hub).
- New money pages remain at depth 3 (linked from their parent city and service pages).
- **No depth-4 pages are created.** The flat city/service architecture ensures this.

Wave 2 will not change the maximum depth of the site.
