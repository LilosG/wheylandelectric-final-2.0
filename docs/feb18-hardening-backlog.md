# Feb 18 Hardening Backlog

## Priority Tiers
- **P0 — Parity blockers:** Required to preserve parity with the `e222ee2` baseline before launch hardening can proceed.
- **P1 — Launch-critical:** Must be completed for a reliable production launch with consistent SEO, conversion UX, and accessibility.
- **P2 — Optimization:** High-leverage enhancements that improve conversion quality and content depth after launch-critical work is stable.

---

## P0 — Parity Blockers

### P0-1: Integrate commit `e222ee2` baseline parity
- **Owner:** Engineering (Web Platform)
- **Affected paths:**
  - `src/**` (all route, layout, and component surfaces touched by `e222ee2`)
  - `docs/**` (if implementation notes or migration documentation changed in `e222ee2`)
  - `package.json` / lockfile (if dependency parity is required)
- **Acceptance criteria:**
  - All code and configuration deltas required for parity with `e222ee2` are merged or explicitly superseded with documented rationale.
  - No regressions in page rendering, routing, metadata output, lead-capture flow, or build behavior versus `e222ee2` expectations.
  - Any intentional deviations from `e222ee2` are logged in this backlog or an implementation note with approver sign-off.
- **Verification method:**
  - Diff current branch against `e222ee2` and confirm parity scope closure.
  - Run full build and smoke checks across key city + service pages.
  - Capture reviewer checklist sign-off for parity completion.

---

## P1 — Launch-Critical

### P1-1: Enforce metadata + schema consistency for high-intent pages
- **Owner:** Engineering (SEO/Content Platform)
- **Affected paths:**
  - `src/layouts/PageLayout.astro`
  - `src/components/seo/SEOHead.astro`
  - `src/pages/**` (high-intent route pages)
  - `src/templates/**` (if page metadata/schema is composed in templates)
- **Acceptance criteria:**
  - Every high-intent page emits complete and non-conflicting title, description, canonical URL, OG/Twitter metadata, and applicable structured data.
  - Metadata defaults and overrides are deterministic between `PageLayout` and `SEOHead` (no duplicate or contradictory tags).
  - Required schema fields remain valid for each page type (e.g., LocalBusiness/Service/FAQ where applicable).
- **Verification method:**
  - Add/execute metadata audit checklist for representative high-intent routes.
  - Validate structured data with schema testing tools and confirm zero critical errors.
  - Spot-check rendered `<head>` output in built pages for duplicate/conflicting tags.

### P1-2: Normalize conversion funnel behavior across CTAs and forms
- **Owner:** Engineering (Growth + Frontend)
- **Affected paths:**
  - `src/components/forms/**`
  - `src/components/**` (CTA components, lead-capture sections)
  - `src/templates/**` (shared sections that compose CTAs/forms)
  - `src/pages/**` (entry points into quote/contact flows)
- **Acceptance criteria:**
  - CTA labels, destinations, and intent are consistent for equivalent funnel stages.
  - Form validation, required fields, success/error messaging, and submission handling are consistent across reusable form variants.
  - Lead-capture modules share consistent trust/support elements (service area, response-time promise, contact alternatives) where intended.
- **Verification method:**
  - Build a funnel matrix mapping each CTA entry point to expected form destination and outcome.
  - Execute manual end-to-end walkthrough for top conversion routes (home, city pages, service pages, contact).
  - Confirm analytics/event hooks (if present) fire consistently at click, submit, success, and error states.

### P1-3: Resolve accessibility fundamentals for nav, forms, and interactive controls
- **Owner:** Engineering (Frontend) + QA (Accessibility)
- **Affected paths:**
  - `src/components/**` (navigation, buttons, accordions, modals, form controls)
  - `src/layouts/**` (global landmarks and skip links)
  - `src/pages/**` / `src/templates/**` (page-specific interactive compositions)
- **Acceptance criteria:**
  - Keyboard navigation supports all primary interactions with visible focus indicators.
  - Form controls have proper labels, error association, and assistive text semantics.
  - Interactive elements meet baseline semantics/ARIA usage and color-contrast requirements.
- **Verification method:**
  - Run automated checks (e.g., axe/lighthouse) on key templates and top-traffic pages.
  - Perform keyboard-only and screen-reader spot checks for nav + primary forms.
  - Document and close all critical/high accessibility findings before launch freeze.

---

## P2 — Optimization

### P2-1: Conversion polish for city/service journeys
- **Owner:** Growth (CRO) + Engineering (Frontend)
- **Affected paths:**
  - `src/pages/**` (city and service landing pages)
  - `src/templates/**` (hero, CTA bands, social proof, FAQ, contact modules)
  - `src/components/**` (testimonial, badge, urgency, and trust components)
- **Acceptance criteria:**
  - City/service pages include context-specific CTAs and trust messaging aligned to journey stage.
  - Above-the-fold sections clearly communicate service fit, response expectation, and primary action.
  - Friction points identified in P1 funnel review are addressed with prioritized UX/content tweaks.
- **Verification method:**
  - Compare baseline vs. revised user journey maps for major city/service flows.
  - Track pre/post CTR and lead-submit rate for touched pages.
  - Run qualitative QA review for clarity, hierarchy, and CTA prominence.

### P2-2: Deepen localized/service content breadth and supporting intent signals
- **Owner:** Content Strategy + SEO
- **Affected paths:**
  - `src/pages/**` (city and service content)
  - `src/data/**` or content collections (if localized/service data is centralized)
  - `src/components/seo/**` (internal linking and schema enhancements as needed)
- **Acceptance criteria:**
  - Each priority city/service path includes richer FAQs, proof points, and scenario-specific copy.
  - Internal links reinforce next-step navigation across related services and nearby city pages.
  - Content additions maintain consistent metadata/schema coverage with no quality regressions.
- **Verification method:**
  - Use a content coverage checklist per priority city/service pair.
  - Validate internal linking paths and crawl discoverability in a staging crawl.
  - Re-run metadata/schema quality checks on newly expanded pages.

### P2-3: Experiment-ready instrumentation for ongoing funnel improvements
- **Owner:** Growth Analytics + Engineering
- **Affected paths:**
  - `src/components/forms/**`
  - `src/components/**` (CTA and lead-capture interactions)
  - `src/layouts/**` / analytics integration points
- **Acceptance criteria:**
  - Core funnel events are standardized with shared naming and payload shape.
  - Priority experiments (CTA wording/order, trust-module placement, form-step sequencing) are technically measurable.
  - Analytics QA confirms event reliability across desktop/mobile breakpoints.
- **Verification method:**
  - Produce an event taxonomy and implementation mapping by component.
  - Run debug-session validation in staging for all required events.
  - Confirm dashboard/report consumers can segment results by city, service, and page type.
