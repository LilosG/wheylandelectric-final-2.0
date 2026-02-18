export type RouteIntent = 'high' | 'mid' | 'existing-form' | 'supporting';
export type InlineFormPlacement = 'mid-page' | 'near-bottom' | 'n/a';
export type FormVariant = 'full' | 'compact' | 'none';

export interface RouteFormRolloutConfig {
  /** File path under src/pages used as the rollout key. */
  template: string;
  /** Route pattern shown to content editors/implementers. */
  routePattern: string;
  intent: RouteIntent;
  inlineFormRequired: boolean;
  placement: InlineFormPlacement;
  formVariant: FormVariant;
  primaryConversionAction: 'submit-form' | 'none';
  secondaryConversionAction: 'tap-to-call';
  notes?: string;
}

/**
 * Single source of truth for inline-form rollout by route template.
 *
 * Rules from growth planning:
 * - High intent routes receive a required inline form using the full form variant.
 * - Mid intent routes receive a required inline form using the compact variant.
 * - Existing form pages remain canonical destinations and should not receive duplicate inline forms.
 * - Supporting routes default to no inline form, but keep tap-to-call as the secondary conversion path.
 */
export const ROUTE_FORM_ROLLOUT_PLAN: RouteFormRolloutConfig[] = [
  {
    template: 'src/pages/[city]/[service].astro',
    routePattern: '/:city/:service',
    intent: 'high',
    inlineFormRequired: true,
    placement: 'mid-page',
    formVariant: 'full',
    primaryConversionAction: 'submit-form',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/services/[service].astro',
    routePattern: '/services/:service',
    intent: 'high',
    inlineFormRequired: true,
    placement: 'mid-page',
    formVariant: 'full',
    primaryConversionAction: 'submit-form',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/[city]/index.astro',
    routePattern: '/:city',
    intent: 'high',
    inlineFormRequired: true,
    placement: 'mid-page',
    formVariant: 'full',
    primaryConversionAction: 'submit-form',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/who-we-work-with.astro',
    routePattern: '/who-we-work-with',
    intent: 'mid',
    inlineFormRequired: true,
    placement: 'near-bottom',
    formVariant: 'compact',
    primaryConversionAction: 'submit-form',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/services/index.astro',
    routePattern: '/services',
    intent: 'mid',
    inlineFormRequired: true,
    placement: 'near-bottom',
    formVariant: 'compact',
    primaryConversionAction: 'submit-form',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/service-areas/index.astro',
    routePattern: '/service-areas',
    intent: 'mid',
    inlineFormRequired: true,
    placement: 'near-bottom',
    formVariant: 'compact',
    primaryConversionAction: 'submit-form',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/free-estimates.astro',
    routePattern: '/free-estimates',
    intent: 'existing-form',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
    notes: 'Canonical estimate form page; avoid adding duplicate inline forms during rollout.',
  },
  {
    template: 'src/pages/contact-us.astro',
    routePattern: '/contact-us',
    intent: 'existing-form',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
    notes: 'Canonical contact form page; avoid adding duplicate inline forms during rollout.',
  },
  {
    template: 'src/pages/index.astro',
    routePattern: '/',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/about/index.astro',
    routePattern: '/about',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/about/licenses.astro',
    routePattern: '/about/licenses',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/about/projects.astro',
    routePattern: '/about/projects',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/about/faqs.astro',
    routePattern: '/about/faqs',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/blog/index.astro',
    routePattern: '/blog',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/blog/[...slug].astro',
    routePattern: '/blog/*',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/reviews.astro',
    routePattern: '/reviews',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/thank-you.astro',
    routePattern: '/thank-you',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
  {
    template: 'src/pages/404.astro',
    routePattern: '/404',
    intent: 'supporting',
    inlineFormRequired: false,
    placement: 'n/a',
    formVariant: 'none',
    primaryConversionAction: 'none',
    secondaryConversionAction: 'tap-to-call',
  },
];

export const ROUTE_FORM_ROLLOUT_PLAN_BY_TEMPLATE = Object.fromEntries(
  ROUTE_FORM_ROLLOUT_PLAN.map((item) => [item.template, item]),
) as Record<string, RouteFormRolloutConfig>;
