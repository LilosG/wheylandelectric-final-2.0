# Event Tracking Rollout Plan

## Scope

Track the following events with consistent metadata:

- `form_start`
- `form_submit_success`
- `form_submit_fail`
- `tap_to_call_click`
- `cta_click_free_estimates`

Every event must include:

- `page_template` (e.g., `city-service`, `service-detail`, `city-hub`, `free-estimates`)
- `route_type` (`city-service`, `generic-service`, `city-hub`, `generic`)
- `route_path`
- `rollout_phase`

## Phased rollout

### Phase 1 (high intent templates)

Enable tracking first on:

- City + service pages (`/[city]/[service]/`)
- Generic service detail pages (`/services/[service]/`)
- City hub pages (`/[city]/`)
- Conversion pages (`/free-estimates/`, `/contact-us/`)

### Phase 2+

Expand to supporting templates after phase-1 acceptance thresholds are met.

## KPIs and acceptance thresholds

Measure each KPI using a 28-day pre/post window, segmented by `page_template` and `route_type`.

### KPI definitions

- **Conversion Rate (CR)**
  - Formula: `(form_submit_success + tap_to_call_click + cta_click_free_estimates) / sessions`
- **Form Completion Rate (FCR)**
  - Formula: `form_submit_success / form_start`
- **Bounce Rate (BR)**
  - Formula: `single-page sessions / sessions`

### Acceptance thresholds for phase progression

- **CR:** no decrease greater than 5% relative in any high-intent segment.
- **FCR:** no decrease greater than 3% relative on form-bearing templates.
- **BR:** no increase greater than 5% relative in any high-intent segment.
- **Data quality gate:**
  - At least 95% of tracked events include non-empty `page_template` and `route_type`.
  - Duplicate event rate stays below 2% (same event + path + timestamp bucket).

If any threshold is missed, iterate placement/copy only where metrics show statistically meaningful underperformance.

## Optimization rules

- Do not redesign globally based on aggregate results alone.
- Prioritize page-template segments with both:
  - meaningful traffic volume, and
  - performance below threshold.
- Validate each change with the same pre/post segment framework before wider rollout.
