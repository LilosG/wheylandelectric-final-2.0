# Wheyland Electric -- Human-Readable Sitemap & Information Architecture

> Generated for the Astro static-site build.
> **Total pages (Wave 1):** 88 | **Max click-depth:** 3

---

## Depth Legend

| Depth | Meaning |
|-------|---------|
| 0 | Homepage -- root of the site |
| 1 | Hub pages & top-level static pages (reachable in 1 click from home) |
| 2 | Pillar service pages, individual city pages, blog posts |
| 3 | Money pages (city + service intersections) |

---

## Full Route Tree

```
DEPTH 0
/                                          Homepage

DEPTH 1  --  Hub & Static Pages
/services/                                 Services Hub
/service-areas/                            Service Areas Hub
/about/                                    About Wheyland Electric
/reviews/                                  Customer Reviews
/who-we-work-with/                         Who We Work With
/free-estimates/                           Free Estimates (lead form)
/contact-us/                               Contact Us
/blog/                                     Blog Index
/thank-you/                                Form Thank-You Page
/404                                       Custom 404

DEPTH 2  --  Service Pillar Pages
/services/ev-charger-installation/                    EV Charger Installation
/services/electrical-panel-upgrades/                  Electrical Panel Upgrades
/services/service-calls-troubleshooting/              Service Calls & Troubleshooting
/services/recessed-lighting-installation/             Recessed Lighting Installation
/services/light-fixture-installation/                 Light Fixture Installation
/services/ceiling-fan-installation/                   Ceiling Fan Installation
/services/spa-jacuzzi-sauna-electrical/               Spa / Jacuzzi / Sauna Electrical
/services/outlet-switch-dimmer-gfci-repairs/          Outlet / Switch / Dimmer / GFCI Repairs

DEPTH 2  --  City Landing Pages
/carlsbad/                                 Electrician in Carlsbad
/encinitas/                                Electrician in Encinitas
/rancho-santa-fe/                          Electrician in Rancho Santa Fe
/san-marcos/                               Electrician in San Marcos
/del-mar/                                  Electrician in Del Mar
/solana-beach/                             Electrician in Solana Beach
/oceanside/                                Electrician in Oceanside

DEPTH 2  --  About Sub-Pages
/about/licenses/                           Licenses & Certifications
/about/faqs/                               Frequently Asked Questions
/about/projects/                           Past Projects

DEPTH 2  --  Blog Posts
/blog/post-1/                              Blog Post 1
/blog/post-2/                              Blog Post 2
/blog/post-3/                              Blog Post 3

DEPTH 3  --  Money Pages (City x Service)
/carlsbad/ev-charger-installation/
/carlsbad/electrical-panel-upgrades/
/carlsbad/service-calls-troubleshooting/
/carlsbad/recessed-lighting-installation/
/carlsbad/light-fixture-installation/
/carlsbad/ceiling-fan-installation/
/carlsbad/spa-jacuzzi-sauna-electrical/
/carlsbad/outlet-switch-dimmer-gfci-repairs/

/encinitas/ev-charger-installation/
/encinitas/electrical-panel-upgrades/
/encinitas/service-calls-troubleshooting/
/encinitas/recessed-lighting-installation/
/encinitas/light-fixture-installation/
/encinitas/ceiling-fan-installation/
/encinitas/spa-jacuzzi-sauna-electrical/
/encinitas/outlet-switch-dimmer-gfci-repairs/

/rancho-santa-fe/ev-charger-installation/
/rancho-santa-fe/electrical-panel-upgrades/
/rancho-santa-fe/service-calls-troubleshooting/
/rancho-santa-fe/recessed-lighting-installation/
/rancho-santa-fe/light-fixture-installation/
/rancho-santa-fe/ceiling-fan-installation/
/rancho-santa-fe/spa-jacuzzi-sauna-electrical/
/rancho-santa-fe/outlet-switch-dimmer-gfci-repairs/

/san-marcos/ev-charger-installation/
/san-marcos/electrical-panel-upgrades/
/san-marcos/service-calls-troubleshooting/
/san-marcos/recessed-lighting-installation/
/san-marcos/light-fixture-installation/
/san-marcos/ceiling-fan-installation/
/san-marcos/spa-jacuzzi-sauna-electrical/
/san-marcos/outlet-switch-dimmer-gfci-repairs/

/del-mar/ev-charger-installation/
/del-mar/electrical-panel-upgrades/
/del-mar/service-calls-troubleshooting/
/del-mar/recessed-lighting-installation/
/del-mar/light-fixture-installation/
/del-mar/ceiling-fan-installation/
/del-mar/spa-jacuzzi-sauna-electrical/
/del-mar/outlet-switch-dimmer-gfci-repairs/

/solana-beach/ev-charger-installation/
/solana-beach/electrical-panel-upgrades/
/solana-beach/service-calls-troubleshooting/
/solana-beach/recessed-lighting-installation/
/solana-beach/light-fixture-installation/
/solana-beach/ceiling-fan-installation/
/solana-beach/spa-jacuzzi-sauna-electrical/
/solana-beach/outlet-switch-dimmer-gfci-repairs/

/oceanside/ev-charger-installation/
/oceanside/electrical-panel-upgrades/
/oceanside/service-calls-troubleshooting/
/oceanside/recessed-lighting-installation/
/oceanside/light-fixture-installation/
/oceanside/ceiling-fan-installation/
/oceanside/spa-jacuzzi-sauna-electrical/
/oceanside/outlet-switch-dimmer-gfci-repairs/
```

---

## Page Count Summary

| Category | Count |
|----------|-------|
| Homepage | 1 |
| Hub pages (services, service-areas) | 2 |
| Service pillar pages | 8 |
| City landing pages | 7 |
| Money pages (7 cities x 8 services) | 56 |
| About cluster (about + 3 sub-pages) | 4 |
| Utility (reviews, who-we-work-with, free-estimates, contact-us) | 4 |
| Blog (index + 3 posts) | 4 |
| System (thank-you, 404) | 2 |
| **Total** | **88** |

---

## Wave 2 Expansion (data-ready, not published)

When `publish_wave2` is set to `true`:

### Additional Service Pillars (+6)
- `/services/dedicated-circuits/`
- `/services/remodel-rewiring/`
- `/services/commercial-ti/`
- `/services/commercial-electrical-maintenance/`
- `/services/light-industrial-electrical/`
- `/services/electrical-safety-inspections/`

### Additional Cities (+9)
Nine additional North County San Diego cities (slugs defined in data, not yet published).

### Additional Money Pages
Each new city x each new service generates intersection pages, scaling the money-page matrix accordingly.

---

## Notes

- All city pages sit at depth 2 under the root (`/{city}/`), **not** under `/service-areas/`. The `/service-areas/` hub links to each city page.
- Money pages are the deepest content at depth 3 (`/{city}/{service}/`).
- Every page is reachable within 3 clicks from the homepage via the hub structure.
- The XML sitemap at `/sitemap-index.xml` mirrors this hierarchy.
