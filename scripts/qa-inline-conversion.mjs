#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const routes = [
  { label: 'city/service page', route: '/carlsbad/ev-charger-installation/' },
  { label: 'service page', route: '/services/ev-charger-installation/' },
  { label: 'city hub page', route: '/carlsbad/' },
];

const distRoot = path.resolve('dist');

function htmlPathForRoute(route) {
  const clean = route.replace(/^\//, '');
  return path.join(distRoot, clean, 'index.html');
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const target of routes) {
  const filePath = htmlPathForRoute(target.route);
  assert(fs.existsSync(filePath), `Missing built HTML for ${target.route} at ${filePath}`);

  const html = fs.readFileSync(filePath, 'utf8');

  // 1) Target templates include conversion marker/component.
  assert(
    html.includes('id="conversion-cta-section"') || html.includes('id="inline-conversion-block"'),
    `[${target.label}] ${target.route} missing conversion marker (expected #conversion-cta-section or #inline-conversion-block).`
  );

  // 2) Conversion surface has visible heading + submit action.
  const hasVisibleHeading =
    /<h1[^>]*>[^<]+<\/h1>/i.test(html) ||
    /<h2[^>]*>[^<]+<\/h2>/i.test(html) ||
    /<h3[^>]*>[^<]+<\/h3>/i.test(html);

  const hasSubmitAction =
    /Request Free Estimate/i.test(html) ||
    /Get a Free Estimate/i.test(html) ||
    /href="\/free-estimates\/"/i.test(html) ||
    /tel:/i.test(html);

  assert(
    hasVisibleHeading && hasSubmitAction,
    `[${target.label}] ${target.route} should expose heading text and conversion action.`
  );

  // 3) Mobile layout guardrail for conversion area: stacked flex rows on small screens.
  // This asserts the key CTA wrappers render with mobile-first column layout.
  const hasMobileStackPattern =
    html.includes('flex flex-col sm:flex-row') ||
    html.includes('flex-col sm:flex-row gap-4 justify-center');

  assert(
    hasMobileStackPattern,
    `[${target.label}] ${target.route} missing mobile-first stacked CTA layout pattern (flex-col sm:flex-row).`
  );
}

console.log('QA assertions passed for conversion markers, heading/actions, and mobile-first CTA layout patterns.');
