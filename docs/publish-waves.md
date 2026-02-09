# Publish Waves -- Wheyland Electric

> Controls which content is live (Wave 1) vs. data-ready but unpublished (Wave 2).
> A single boolean flag `publish_wave2` governs the transition.

---

## Wave 1 (Current -- Live)

### Wave 1 Cities (7)

| City | Slug | Status |
|------|------|--------|
| Carlsbad | `carlsbad` | LIVE |
| Encinitas | `encinitas` | LIVE |
| Rancho Santa Fe | `rancho-santa-fe` | LIVE |
| San Marcos | `san-marcos` | LIVE |
| Del Mar | `del-mar` | LIVE |
| Solana Beach | `solana-beach` | LIVE |
| Oceanside | `oceanside` | LIVE |

### Wave 1 Service Pillars (8)

| Service | Slug | Status |
|---------|------|--------|
| EV Charger Installation | `ev-charger-installation` | LIVE |
| Electrical Panel Upgrades | `electrical-panel-upgrades` | LIVE |
| Service Calls & Troubleshooting | `service-calls-troubleshooting` | LIVE |
| Recessed Lighting Installation | `recessed-lighting-installation` | LIVE |
| Light Fixture Installation | `light-fixture-installation` | LIVE |
| Ceiling Fan Installation | `ceiling-fan-installation` | LIVE |
| Spa / Jacuzzi / Sauna Electrical | `spa-jacuzzi-sauna-electrical` | LIVE |
| Outlet / Switch / Dimmer / GFCI Repairs | `outlet-switch-dimmer-gfci-repairs` | LIVE |

### Wave 1 Page Count

| Type | Count |
|------|-------|
| Homepage | 1 |
| Hubs (services, service-areas) | 2 |
| Service pillars | 8 |
| City landing pages | 7 |
| Money pages (7 x 8) | 56 |
| About cluster | 4 |
| Utility pages | 4 |
| Blog (index + 3 posts) | 4 |
| System pages | 2 |
| **Total** | **88** |

---

## Wave 2 (Data-Ready -- Not Published)

### Wave 2 Service Pillars (6)

| Service | Slug | Data File | Status |
|---------|------|-----------|--------|
| Dedicated Circuits | `dedicated-circuits` | `src/data/services/dedicated-circuits.json` | DATA READY |
| Remodel & Rewiring (incl. ADU) | `remodel-rewiring` | `src/data/services/remodel-rewiring.json` | DATA READY |
| Commercial Tenant Improvement | `commercial-ti` | `src/data/services/commercial-ti.json` | DATA READY |
| Commercial Electrical Maintenance | `commercial-electrical-maintenance` | `src/data/services/commercial-electrical-maintenance.json` | DATA READY |
| Light Industrial Electrical | `light-industrial-electrical` | `src/data/services/light-industrial-electrical.json` | DATA READY |
| Electrical Safety Inspections | `electrical-safety-inspections` | `src/data/services/electrical-safety-inspections.json` | DATA READY |

### Wave 2 Cities (9)

Nine additional North County / coastal San Diego cities. Data files are prepared in `src/data/cities/` with the same schema as Wave 1 cities. Exact city list is defined in the data layer.

### Wave 2 Page Impact

When Wave 2 is enabled, the following pages are generated:

| Type | Count |
|------|-------|
| New service pillar pages | +6 |
| New city landing pages | +9 |
| New money pages (new cities x all services) | +9 x 14 = 126 |
| New money pages (existing cities x new services) | +7 x 6 = 42 |
| Updated hubs (services hub, service-areas hub) | 2 (updated, not new) |
| **Net new pages** | **~183** |

---

## How to Enable Wave 2

### Step 1: Locate the Config Flag

The publish wave is controlled by a single flag in the site configuration:

```
File: src/data/siteConfig.json
```

```json
{
  "publish_wave2": false
}
```

### Step 2: Flip the Flag

Change `publish_wave2` from `false` to `true`:

```json
{
  "publish_wave2": true
}
```

### Step 3: Rebuild

```bash
npm run build
```

The Astro build will:

1. Read the `publish_wave2` flag.
2. If `true`, include Wave 2 cities and services in the data pipeline.
3. Generate all Wave 2 pages using the same templates as Wave 1.
4. Update the services hub and service-areas hub to include Wave 2 entries.
5. Update the XML sitemap to include all new URLs.
6. Update internal links on existing pages to reference new Wave 2 content where appropriate.

### Step 4: Verify

After building with Wave 2 enabled:

- [ ] Check that all new service pillar pages render correctly.
- [ ] Check that all new city landing pages render correctly.
- [ ] Check that all new money pages render correctly.
- [ ] Verify the XML sitemap includes all new URLs.
- [ ] Verify the services hub lists all 14 services.
- [ ] Verify the service-areas hub lists all 16 cities.
- [ ] Run a link check to confirm no broken internal links.
- [ ] Verify no existing Wave 1 URLs have changed.

### Step 5: Post-Launch for Wave 2

- Submit the updated sitemap to Google Search Console.
- Monitor indexing of new pages over 2-4 weeks.
- Watch for cannibalization between Wave 1 and Wave 2 service pages (see `cannibalization-duplication-check.md`).

---

## Architecture: How Waves Work in Code

### Data Layer

Each city and service data file includes a `wave` property:

```json
{
  "name": "Dedicated Circuits",
  "slug": "dedicated-circuits",
  "wave": 2
}
```

### Page Generation

The dynamic route files (e.g., `src/pages/[city]/[service].astro`) filter data based on the config:

```javascript
// Pseudocode in getStaticPaths()
const config = await import('../data/siteConfig.json');
const maxWave = config.publish_wave2 ? 2 : 1;

const cities = allCities.filter(c => c.wave <= maxWave);
const services = allServices.filter(s => s.wave <= maxWave);
```

### Hub Pages

Hub pages dynamically list only published-wave content:

```javascript
// In /services/ hub
const services = allServices.filter(s => s.wave <= maxWave);
// Renders only Wave 1 services when publish_wave2 is false
```

### Internal Links

The link-generation helpers also respect the wave filter, so Wave 1 pages never link to unpublished Wave 2 pages.

---

## Rollback

To revert to Wave 1 only:

1. Set `publish_wave2` back to `false`.
2. Rebuild: `npm run build`.
3. Redeploy.
4. Wave 2 pages will no longer be generated. If they were previously indexed, set up 410 (Gone) responses or redirects as appropriate.

---

## Timeline Recommendation

| Phase | Action | Timing |
|-------|--------|--------|
| Wave 1 Launch | Publish 88 pages | Now |
| Monitor | Track indexing, rankings, leads for Wave 1 | Weeks 1-8 |
| Wave 2 Content QA | Review and polish Wave 2 data files | Weeks 4-6 |
| Wave 2 Launch | Flip `publish_wave2` to `true` and rebuild | Week 8-12 |
| Wave 2 Monitor | Track new page indexing and cannibalization | Weeks 12-20 |
