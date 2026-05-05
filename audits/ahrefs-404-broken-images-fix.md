# Ahrefs 404 + Broken Blog Images Fix Audit

Date: 2026-05-05

## 1) Root causes found

1. **Broken internal target from blog related service links**
   - The post `outdoor-lighting-ideas-coastal-homes.md` used `relatedServices: ["outdoor-lighting-installation"]`.
   - The blog template automatically generates money-page links as `/carlsbad/${slug}/` and service links as `/services/${slug}/` from `relatedServices` slugs.
   - There is no published service pillar slug `outdoor-lighting-installation`, so the generated `/carlsbad/outdoor-lighting-installation/` URL 404s.

2. **Broken blog image URLs caused by missing `/public/images/blog/*.jpg` assets**
   - Multiple blog posts referenced JPEG files under `/images/blog/` that do not exist in `public/`.
   - Blog index and blog post templates read `post.data.image` directly, so missing frontmatter image paths propagate into rendered HTML and schema.

## 2) Files changed

- `src/content/blog/outdoor-lighting-ideas-coastal-homes.md`
- `src/content/blog/ev-charger-installation-la-costa.md`
- `src/content/blog/olde-carlsbad-electrical-safety-inspection.md`
- `src/content/blog/adu-electrical-la-costa.md`
- `src/content/blog/commercial-led-lighting-retrofit-carlsbad.md`
- `src/content/blog/restaurant-electrical-carlsbad.md`
- `src/content/blog/hoa-electrical-maintenance-bressi-ranch-aviara.md`
- `src/content/blog/olivenhain-electrical-rural-equestrian.md`
- `src/content/blog/bressi-ranch-electrical-common-issues.md`
- `src/content/blog/electrical-panel-upgrade-calavera-hills.md`
- `src/content/blog/electrician-aviara-carlsbad.md`
- `audits/ahrefs-404-broken-images-fix.md`

## 3) Exact broken URLs from Ahrefs

### 404 page
- `https://wheylandelectric.com/carlsbad/outdoor-lighting-installation/`

### Broken image URLs
- `https://wheylandelectric.com/images/blog/ev-charger-installation-la-costa.jpg`
- `https://wheylandelectric.com/images/blog/olde-carlsbad-electrical-safety-inspection.jpg`
- `https://wheylandelectric.com/images/blog/adu-electrical-la-costa.jpg`
- `https://wheylandelectric.com/images/blog/commercial-led-lighting-retrofit-carlsbad.jpg`
- `https://wheylandelectric.com/images/blog/restaurant-electrical-carlsbad.jpg`
- `https://wheylandelectric.com/images/blog/hoa-electrical-maintenance-bressi-ranch-aviara.jpg`
- `https://wheylandelectric.com/images/blog/olivenhain-electrical-rural-equestrian.jpg`
- `https://wheylandelectric.com/images/blog/bressi-ranch-electrical-common-issues.jpg`
- `https://wheylandelectric.com/images/blog/electrical-panel-upgrade-calavera-hills.jpg`
- `https://wheylandelectric.com/images/blog/electrician-aviara-carlsbad.jpg`

## 4) Final resolution for each broken URL

### 404 URL resolution
- `https://wheylandelectric.com/carlsbad/outdoor-lighting-installation/`
  - **Fix type:** corrected internal link source pattern (via related service slugs)
  - **Resolution:** changed post `relatedServices` to canonical existing service slugs:
    - `light-fixture-installation`
    - `recessed-lighting-installation`
  - This makes generated links point to valid URLs:
    - `/carlsbad/light-fixture-installation/`
    - `/carlsbad/recessed-lighting-installation/`

### Broken image URL resolutions
All broken `/images/blog/*.jpg` references were replaced in blog frontmatter with existing canonical service/commercial images under `/images/services/.../*.webp`.

- `.../ev-charger-installation-la-costa.jpg` → `/images/services/ev-charger/wheyland-electric-ev-charger-installation.webp`
- `.../olde-carlsbad-electrical-safety-inspection.jpg` → `/images/services/panel/wheyland-electric-service-entrance-wiring.webp`
- `.../adu-electrical-la-costa.jpg` → `/images/services/panel/wheyland-electric-outdoor-meter-panel-new-construction.webp`
- `.../commercial-led-lighting-retrofit-carlsbad.jpg` → `/images/services/lighting/wheyland-electric-commercial-pendant-light-installation.webp`
- `.../restaurant-electrical-carlsbad.jpg` → `/images/services/commercial/wheyland-electric-commercial-food-processing-electrical.webp`
- `.../hoa-electrical-maintenance-bressi-ranch-aviara.jpg` → `/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp`
- `.../olivenhain-electrical-rural-equestrian.jpg` → `/images/services/ev-charger/wheyland-electric-ev-charger-dedicated-circuit.webp`
- `.../bressi-ranch-electrical-common-issues.jpg` → `/images/services/panel/wheyland-electric-outdoor-service-disconnect.webp`
- `.../electrical-panel-upgrade-calavera-hills.jpg` → `/images/services/panel/wheyland-electric-commercial-meter-stack-panel.webp`
- `.../electrician-aviara-carlsbad.jpg` → `/images/services/lighting/wheyland-electric-led-handrail-stair-lighting.webp`

## 5) Fix classification

- Corrected internal link: ✅
- Corrected image path: ✅
- Added legitimate missing asset: ❌ (not required)
- Added legitimate new page: ❌ (not required)
- Other: N/A

## 6) Build command run and result

- `npm run build` → **Pass** (Astro build completed, sitemap generated)

## 7) Validation commands run

- Searched repo for root-cause URL patterns and blog image references.
- Searched `dist`, `src`, and `public` for known broken URLs after fixes.
- Ran preview server and checked representative blog URLs and referenced image URLs with `curl -I`.

## 8) Unresolved items

- None found in scope of provided Ahrefs issues.
