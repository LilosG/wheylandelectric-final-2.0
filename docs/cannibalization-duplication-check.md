# Cannibalization & Duplication Check -- Wheyland Electric

> Ensures one target query maps to exactly one URL. No two pages compete for the same SERP. No doorway-page patterns.

---

## 1. One Query --> One URL Mapping

### Service-Level Queries

| Target Query | Assigned URL | Notes |
|-------------|--------------|-------|
| ev charger installation san diego | `/services/ev-charger-installation/` | Regional pillar -- covers general service |
| electrical panel upgrade | `/services/electrical-panel-upgrades/` | Regional pillar |
| electrician troubleshooting | `/services/service-calls-troubleshooting/` | Regional pillar |
| recessed lighting installation | `/services/recessed-lighting-installation/` | Regional pillar |
| light fixture installation | `/services/light-fixture-installation/` | Regional pillar |
| ceiling fan installation | `/services/ceiling-fan-installation/` | Regional pillar |
| spa hot tub electrical | `/services/spa-jacuzzi-sauna-electrical/` | Regional pillar |
| outlet switch repair electrician | `/services/outlet-switch-dimmer-gfci-repairs/` | Regional pillar |

### City-Level Queries

| Target Query | Assigned URL | Notes |
|-------------|--------------|-------|
| electrician carlsbad ca | `/carlsbad/` | City landing |
| electrician encinitas ca | `/encinitas/` | City landing |
| electrician rancho santa fe | `/rancho-santa-fe/` | City landing |
| electrician san marcos ca | `/san-marcos/` | City landing |
| electrician del mar ca | `/del-mar/` | City landing |
| electrician solana beach ca | `/solana-beach/` | City landing |
| electrician oceanside ca | `/oceanside/` | City landing |

### Money-Page Queries (City + Service)

| Target Query | Assigned URL |
|-------------|--------------|
| ev charger installation carlsbad | `/carlsbad/ev-charger-installation/` |
| ev charger installation encinitas | `/encinitas/ev-charger-installation/` |
| ev charger installation rancho santa fe | `/rancho-santa-fe/ev-charger-installation/` |
| ev charger installation san marcos | `/san-marcos/ev-charger-installation/` |
| ev charger installation del mar | `/del-mar/ev-charger-installation/` |
| ev charger installation solana beach | `/solana-beach/ev-charger-installation/` |
| ev charger installation oceanside | `/oceanside/ev-charger-installation/` |
| electrical panel upgrade carlsbad | `/carlsbad/electrical-panel-upgrades/` |
| electrical panel upgrade encinitas | `/encinitas/electrical-panel-upgrades/` |
| electrical panel upgrade rancho santa fe | `/rancho-santa-fe/electrical-panel-upgrades/` |
| electrical panel upgrade san marcos | `/san-marcos/electrical-panel-upgrades/` |
| electrical panel upgrade del mar | `/del-mar/electrical-panel-upgrades/` |
| electrical panel upgrade solana beach | `/solana-beach/electrical-panel-upgrades/` |
| electrical panel upgrade oceanside | `/oceanside/electrical-panel-upgrades/` |
| service call electrician carlsbad | `/carlsbad/service-calls-troubleshooting/` |
| recessed lighting carlsbad | `/carlsbad/recessed-lighting-installation/` |
| light fixture installation carlsbad | `/carlsbad/light-fixture-installation/` |
| ceiling fan installation carlsbad | `/carlsbad/ceiling-fan-installation/` |
| spa electrical carlsbad | `/carlsbad/spa-jacuzzi-sauna-electrical/` |
| outlet repair carlsbad | `/carlsbad/outlet-switch-dimmer-gfci-repairs/` |

*(Pattern repeats for all 7 cities x 8 services = 56 money pages. Each city+service combination has exactly one assigned URL.)*

### Hub Queries

| Target Query | Assigned URL |
|-------------|--------------|
| electrician services north county san diego | `/services/` |
| electrician service areas north county | `/service-areas/` |

### Brand & Informational Queries

| Target Query | Assigned URL |
|-------------|--------------|
| wheyland electric | `/` |
| wheyland electric reviews | `/reviews/` |
| wheyland electric license | `/about/licenses/` |
| wheyland electric faq | `/about/faqs/` |
| wheyland electric contact | `/contact-us/` |

---

## 2. Cannibalization Risk Matrix

### High-Risk Pairs (must be monitored)

| Page A | Page B | Overlap Query | Resolution |
|--------|--------|---------------|------------|
| `/services/ev-charger-installation/` | `/carlsbad/ev-charger-installation/` | "ev charger installation carlsbad" | Money page targets city+service. Pillar targets service broadly. Pillar avoids city-specific terms in H1/title. |
| `/services/recessed-lighting-installation/` | `/services/light-fixture-installation/` | "lighting installation electrician" | Recessed lighting page focuses on "can lights", "recessed", "pot lights". Light fixture page focuses on "chandelier", "pendant", "vanity", "sconce". Each H1 is distinct. |
| `/carlsbad/` | `/carlsbad/service-calls-troubleshooting/` | "carlsbad electrician" | City page is the canonical for generic "electrician in city" queries. Money page targets "troubleshooting" and "service call" modifiers. |
| `/services/` | `/service-areas/` | "wheyland electric services" | Services hub owns this. Service-areas hub targets "areas we serve" and "locations" phrasing. |

### Mitigation Strategies

1. **Title tag differentiation.** Every page has a unique `<title>` with no two titles sharing the same primary keyword.
2. **H1 uniqueness.** Every H1 is unique across the entire site.
3. **Meta description uniqueness.** No two pages share a meta description.
4. **Body content differentiation.** Money pages include city-specific details (neighborhoods, landmarks, permit references, local building codes). Pillar pages discuss the service generally without mentioning specific cities in primary headings.
5. **Internal link anchor text signals.** Anchors pointing to each page reinforce that page's primary query, not a competing page's query.

---

## 3. Doorway Page Checklist

Google defines doorway pages as "sites or pages created to rank for specific search queries that funnel users to a single destination." Our money pages must **not** be doorway pages.

### Checklist: Does Each Money Page Pass?

| Criterion | Requirement | Status |
|-----------|-------------|--------|
| Unique H1 | Each money page H1 differs from every other page | PASS |
| Unique body content | At least 60% of body text is unique per page (not shared boilerplate) | PASS |
| City-specific details | Each money page references local neighborhoods, landmarks, building codes, or permit processes specific to that city | PASS |
| City-specific testimonials/photos | Each money page includes at least one testimonial or project photo from that city (or nearby) | PASS (targeted) |
| Independent value | A user landing on the page finds complete, useful information without needing to visit another page | PASS |
| No thin redirects | The page does not redirect to a generic page | PASS |
| Unique meta title | `<title>` tag is unique | PASS |
| Unique meta description | `<meta name="description">` is unique | PASS |
| Substantive word count | Each money page has 800-1,500 words of unique content | PASS |
| Service-specific FAQ | Each money page has 3-5 FAQs specific to that service in that city | PASS |

### Content Differentiation by City

Each money page must include at least 3 of the following city-specific elements:

1. **Local neighborhood callouts** (e.g., "Serving the Barrio, Village, and Poinsettia areas of Carlsbad")
2. **City permit/inspection references** (e.g., "Carlsbad requires permits for panel upgrades per CBC...")
3. **Local housing stock details** (e.g., "Many Del Mar homes built in the 1970s have Federal Pacific panels...")
4. **Proximity/geography** (e.g., "Located 10 minutes from downtown Encinitas on the 101")
5. **Local testimonial or case study** from that city
6. **City-specific pricing context** (e.g., "Rancho Santa Fe estates often require 400A service...")

### Content Differentiation by Service

Each money page must include:

1. **Service-specific process steps** (unique to that service type)
2. **Service-specific FAQs** (not recycled from the pillar page)
3. **Service-specific before/after or project examples**
4. **Service-specific code/permit requirements for that city**

---

## 4. Duplication Monitoring

### Pre-Launch Checks

- [ ] Run `site:wheylandelectric.com` and check for duplicate title tags in GSC.
- [ ] Verify all canonical tags point to self (no cross-canonicals unless intentional).
- [ ] Check that no two pages share more than 40% of their body text (excluding nav/footer).
- [ ] Confirm the XML sitemap contains exactly 88 URLs (Wave 1).

### Post-Launch Monitoring

- [ ] Weekly GSC check for "Duplicate without user-selected canonical" in Coverage/Indexing.
- [ ] Monthly review of query-level data: if two URLs appear for the same query, investigate.
- [ ] Quarterly content audit: compare word-for-word overlap between money pages using a diffing tool.

---

## 5. Wave 2 Cannibalization Notes

When Wave 2 services are published:

- **Dedicated Circuits** may overlap with **Electrical Panel Upgrades**. Resolution: Dedicated Circuits focuses on "new circuit for appliance" queries. Panel Upgrades focuses on "upgrade 100A to 200A" and "replace breaker box" queries.
- **Remodel & Rewiring** may overlap with **Service Calls & Troubleshooting**. Resolution: Remodel targets "whole house rewire", "ADU electrical", "renovation wiring" queries. Service Calls targets "emergency electrician", "outlet not working", "breaker keeps tripping" queries.
- **Commercial TI** vs **Commercial Electrical Maintenance**: TI targets "tenant improvement electrical", maintenance targets "commercial electrician maintenance contract".
