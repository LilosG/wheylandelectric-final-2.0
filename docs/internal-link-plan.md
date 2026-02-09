# Internal Link Plan -- Wheyland Electric

> Defines every intentional internal-link edge, anchor-text variants, and placement rules.

---

## 1. Global Navigation Links (present on every page)

These links appear in the site header and/or footer on all 88 pages.

| Source | Target | Anchor Text |
|--------|--------|-------------|
| Global nav | `/` | Wheyland Electric (logo) |
| Global nav | `/services/` | Services |
| Global nav | `/service-areas/` | Service Areas |
| Global nav | `/about/` | About |
| Global nav | `/reviews/` | Reviews |
| Global nav | `/contact-us/` | Contact Us |
| Global nav | `/free-estimates/` | Free Estimate |
| Footer | `/about/licenses/` | Licenses & Certifications |
| Footer | `/about/faqs/` | FAQs |
| Footer | `/about/projects/` | Our Projects |
| Footer | `/blog/` | Blog |
| Footer | `/who-we-work-with/` | Who We Work With |

---

## 2. Homepage Edges

| Source | Target | Anchor Text Variants | Placement |
|--------|--------|---------------------|-----------|
| `/` | `/services/ev-charger-installation/` | "EV Charger Installation", "Install an EV charger" | Services grid |
| `/` | `/services/electrical-panel-upgrades/` | "Electrical Panel Upgrades", "Upgrade your panel" | Services grid |
| `/` | `/services/service-calls-troubleshooting/` | "Service Calls & Troubleshooting" | Services grid |
| `/` | `/services/recessed-lighting-installation/` | "Recessed Lighting Installation" | Services grid |
| `/` | `/services/light-fixture-installation/` | "Light Fixture Installation" | Services grid |
| `/` | `/services/ceiling-fan-installation/` | "Ceiling Fan Installation" | Services grid |
| `/` | `/services/spa-jacuzzi-sauna-electrical/` | "Spa & Jacuzzi Electrical" | Services grid |
| `/` | `/services/outlet-switch-dimmer-gfci-repairs/` | "Outlet & Switch Repairs" | Services grid |
| `/` | `/carlsbad/` | "Carlsbad electrician", "Serving Carlsbad" | Service area preview |
| `/` | `/encinitas/` | "Encinitas electrician" | Service area preview |
| `/` | `/rancho-santa-fe/` | "Rancho Santa Fe electrician" | Service area preview |
| `/` | `/san-marcos/` | "San Marcos electrician" | Service area preview |
| `/` | `/del-mar/` | "Del Mar electrician" | Service area preview |
| `/` | `/solana-beach/` | "Solana Beach electrician" | Service area preview |
| `/` | `/oceanside/` | "Oceanside electrician" | Service area preview |
| `/` | `/reviews/` | "Read our reviews", "See what customers say" | Social proof section |
| `/` | `/free-estimates/` | "Get a free estimate", "Request your free quote" | CTA button |

---

## 3. Services Hub (`/services/`) Edges

| Source | Target | Anchor Text | Placement |
|--------|--------|-------------|-----------|
| `/services/` | `/services/ev-charger-installation/` | "EV Charger Installation" | Service card |
| `/services/` | `/services/electrical-panel-upgrades/` | "Electrical Panel Upgrades" | Service card |
| `/services/` | `/services/service-calls-troubleshooting/` | "Service Calls & Troubleshooting" | Service card |
| `/services/` | `/services/recessed-lighting-installation/` | "Recessed Lighting Installation" | Service card |
| `/services/` | `/services/light-fixture-installation/` | "Light Fixture Installation" | Service card |
| `/services/` | `/services/ceiling-fan-installation/` | "Ceiling Fan Installation" | Service card |
| `/services/` | `/services/spa-jacuzzi-sauna-electrical/` | "Spa / Jacuzzi / Sauna Electrical" | Service card |
| `/services/` | `/services/outlet-switch-dimmer-gfci-repairs/` | "Outlet / Switch / Dimmer / GFCI Repairs" | Service card |
| `/services/` | `/free-estimates/` | "Get a free estimate" | CTA |

---

## 4. Service Areas Hub (`/service-areas/`) Edges

| Source | Target | Anchor Text | Placement |
|--------|--------|-------------|-----------|
| `/service-areas/` | `/carlsbad/` | "Carlsbad" | City card |
| `/service-areas/` | `/encinitas/` | "Encinitas" | City card |
| `/service-areas/` | `/rancho-santa-fe/` | "Rancho Santa Fe" | City card |
| `/service-areas/` | `/san-marcos/` | "San Marcos" | City card |
| `/service-areas/` | `/del-mar/` | "Del Mar" | City card |
| `/service-areas/` | `/solana-beach/` | "Solana Beach" | City card |
| `/service-areas/` | `/oceanside/` | "Oceanside" | City card |

---

## 5. Service Pillar Page Edges (each `/services/{slug}/`)

Every service pillar page links to:

| Target Pattern | Anchor Text Pattern | Placement |
|---------------|---------------------|-----------|
| `/{city}/{this-service}/` (all 7 cities) | "{Service} in {City}" | "Available in these areas" grid |
| `/services/` | "View all services" | Breadcrumb + body |
| `/free-estimates/` | "Get a free estimate for {service}" | CTA section |
| Other service pillars (2-3 related) | "{Related Service Name}" | "Related Services" sidebar/section |

**Cross-linking rules for service pillars:**

| Service | Related Services Linked |
|---------|------------------------|
| EV Charger Installation | Electrical Panel Upgrades, Dedicated Circuits (Wave 2) |
| Electrical Panel Upgrades | EV Charger Installation, Service Calls & Troubleshooting |
| Service Calls & Troubleshooting | Electrical Panel Upgrades, Outlet/Switch/Dimmer/GFCI Repairs |
| Recessed Lighting Installation | Light Fixture Installation, Ceiling Fan Installation |
| Light Fixture Installation | Recessed Lighting Installation, Ceiling Fan Installation |
| Ceiling Fan Installation | Light Fixture Installation, Recessed Lighting Installation |
| Spa/Jacuzzi/Sauna Electrical | Electrical Panel Upgrades, Service Calls & Troubleshooting |
| Outlet/Switch/Dimmer/GFCI Repairs | Service Calls & Troubleshooting, Recessed Lighting Installation |

---

## 6. City Landing Page Edges (each `/{city}/`)

Every city landing page links to:

| Target Pattern | Anchor Text Pattern | Placement |
|---------------|---------------------|-----------|
| `/{this-city}/{service}/` (all 8 services) | "{Service} in {City}" | Services-in-this-city grid |
| `/service-areas/` | "All service areas" | Breadcrumb |
| `/reviews/` | "Read Wheyland Electric reviews" | Social proof |
| `/free-estimates/` | "Get a free estimate in {City}" | CTA |
| Neighboring city pages (2-3) | "Also serving {Neighbor City}" | Nearby areas section |

**Neighbor-city linking map:**

| City | Links to Neighbors |
|------|-------------------|
| Carlsbad | Encinitas, Oceanside, San Marcos |
| Encinitas | Carlsbad, Del Mar, Solana Beach |
| Rancho Santa Fe | Del Mar, Encinitas, San Marcos |
| San Marcos | Carlsbad, Oceanside, Rancho Santa Fe |
| Del Mar | Solana Beach, Encinitas, Rancho Santa Fe |
| Solana Beach | Del Mar, Encinitas, Carlsbad |
| Oceanside | Carlsbad, San Marcos |

---

## 7. Money Page Edges (each `/{city}/{service}/`)

Every money page links to:

| Target | Anchor Text | Placement |
|--------|-------------|-----------|
| `/{city}/` | "Back to {City} services" | Breadcrumb |
| `/services/{service}/` | "Learn more about {Service}" | Body link |
| `/free-estimates/` | "Request a free estimate" | CTA |
| `/reviews/` | "See our reviews" | Trust section |
| 2-3 sibling money pages in same city | "{Other Service} in {City}" | Related services section |
| Same service in 2 neighboring cities | "{Service} in {Neighbor}" | Nearby areas section |

---

## 8. Blog Post Edges

| Source | Target | Anchor Text | Placement |
|--------|--------|-------------|-----------|
| `/blog/` | Each blog post | Post title | Post card |
| Blog posts | `/services/{relevant-service}/` | Contextual anchor | In-body link |
| Blog posts | `/free-estimates/` | "Contact us for a free estimate" | CTA |
| Blog posts | `/blog/` | "More articles" | Post footer |

---

## 9. Anchor Text Variation Rules

1. **Never use the same exact anchor text for two different target URLs.** Each URL gets its own anchor phrasing.
2. **Primary anchors** use the target page's H1 or a close variant.
3. **Secondary anchors** use contextual phrasing (e.g., "our Carlsbad team", "panel upgrade services").
4. **CTA anchors** always include an action verb: "Get", "Request", "Schedule", "View".
5. **Avoid generic anchors** like "click here" or "learn more" standing alone. If used, prepend with context: "Learn more about EV charger installation".

---

## 10. Link Injection Points by Template

| Template | In-Body Links | Sidebar/Grid Links | CTA Links | Breadcrumb Links |
|----------|--------------|--------------------|-----------|--------------------|
| Homepage | 2-3 | 15 (services + cities) | 2 | 0 |
| Services Hub | 0 | 8 | 1 | 1 |
| Service Areas Hub | 0 | 7 | 1 | 1 |
| Service Pillar | 3-4 | 7-9 (cities + related) | 2 | 2 |
| City Landing | 3-4 | 8-11 (services + neighbors) | 2 | 2 |
| Money Page | 3-5 | 4-6 (siblings + neighbors) | 2 | 3 |
| Blog Post | 2-3 | 0 | 1 | 2 |
| Static (about, reviews, etc.) | 1-3 | 0-2 | 1 | 1-2 |
