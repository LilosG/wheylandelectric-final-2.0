/**
 * Internal Link Validation Script
 * Run after build: npx ts-node scripts/validate-links.ts
 * Checks: orphan pages, link depth, outbound link counts
 */

import { getPublishedCities } from '../src/data/cities';
import { getPublishedPillars } from '../src/data/services';

const cities = getPublishedCities();
const pillars = getPublishedPillars();

// Build the complete URL map
const allPages: string[] = [
  '/',
  '/services/',
  '/service-areas/',
  '/about/',
  '/about/licenses/',
  '/about/faqs/',
  '/about/projects/',
  '/reviews/',
  '/who-we-work-with/',
  '/free-estimates/',
  '/contact-us/',
  '/blog/',
  '/thank-you/',
  // Blog posts
  '/blog/ev-charger-installation-guide-san-diego/',
  '/blog/signs-you-need-electrical-panel-upgrade/',
  '/blog/outdoor-lighting-ideas-coastal-homes/',
];

// Add city pages
for (const city of cities) {
  allPages.push(`/${city.slug}/`);
}

// Add service pillar pages
for (const pillar of pillars) {
  allPages.push(`/services/${pillar.slug}/`);
}

// Add money pages
for (const city of cities) {
  for (const pillar of pillars) {
    allPages.push(`/${city.slug}/${pillar.slug}/`);
  }
}

// Define link structure (what each page links to)
interface LinkEdge {
  from: string;
  to: string;
  anchor: string;
}

const edges: LinkEdge[] = [];

// Homepage links
for (const city of cities) {
  edges.push({ from: '/', to: `/${city.slug}/`, anchor: `${city.name}, CA` });
}
for (const pillar of pillars) {
  edges.push({ from: '/', to: `/services/${pillar.slug}/`, anchor: pillar.name });
}
edges.push({ from: '/', to: '/services/', anchor: 'View All Services' });
edges.push({ from: '/', to: '/service-areas/', anchor: 'All Service Areas' });
edges.push({ from: '/', to: '/free-estimates/', anchor: 'Free Estimate' });
edges.push({ from: '/', to: '/who-we-work-with/', anchor: 'Who We Work With' });

// City pages link to money pages + nearby cities
for (const city of cities) {
  const cityUrl = `/${city.slug}/`;
  for (const pillar of pillars) {
    edges.push({ from: cityUrl, to: `/${city.slug}/${pillar.slug}/`, anchor: `${pillar.name} in ${city.name}` });
  }
  for (const nearbySlug of city.nearbyCities) {
    const nearby = cities.find((c) => c.slug === nearbySlug);
    if (nearby) {
      edges.push({ from: cityUrl, to: `/${nearbySlug}/`, anchor: `${nearby.name}, CA` });
    }
  }
}

// Service pillar pages link to money pages + related services
for (const pillar of pillars) {
  const pillarUrl = `/services/${pillar.slug}/`;
  for (const city of cities) {
    edges.push({ from: pillarUrl, to: `/${city.slug}/${pillar.slug}/`, anchor: `${city.name}, CA` });
  }
  for (const relatedSlug of pillar.relatedServices) {
    edges.push({ from: pillarUrl, to: `/services/${relatedSlug}/`, anchor: 'Related service' });
  }
}

// Money pages link to parent city, parent service, related services, nearby cities
for (const city of cities) {
  for (const pillar of pillars) {
    const moneyUrl = `/${city.slug}/${pillar.slug}/`;
    edges.push({ from: moneyUrl, to: `/${city.slug}/`, anchor: `All services in ${city.name}` });
    edges.push({ from: moneyUrl, to: `/services/${pillar.slug}/`, anchor: `${pillar.name} across all areas` });
    for (const relatedSlug of pillar.relatedServices) {
      edges.push({ from: moneyUrl, to: `/${city.slug}/${relatedSlug}/`, anchor: 'Related service' });
    }
    for (const nearbySlug of city.nearbyCities) {
      edges.push({ from: moneyUrl, to: `/${nearbySlug}/${pillar.slug}/`, anchor: `${pillar.name} in nearby city` });
    }
  }
}

// BFS to compute depth from homepage
function computeDepth(): Map<string, number> {
  const depth = new Map<string, number>();
  const queue: string[] = ['/'];
  depth.set('/', 0);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const currentDepth = depth.get(current)!;
    const outbound = edges.filter((e) => e.from === current);

    for (const edge of outbound) {
      if (!depth.has(edge.to)) {
        depth.set(edge.to, currentDepth + 1);
        queue.push(edge.to);
      }
    }
  }
  return depth;
}

const depths = computeDepth();

// Check for orphans
const orphans = allPages.filter((page) => !depths.has(page));

// Check for depth > 3
const deepPages = allPages.filter((page) => {
  const d = depths.get(page);
  return d !== undefined && d > 3;
});

// Outbound link counts
const outboundCounts = new Map<string, number>();
for (const page of allPages) {
  outboundCounts.set(page, edges.filter((e) => e.from === page).length);
}

// Report
console.log('=== INTERNAL LINK VALIDATION REPORT ===\n');
console.log(`Total pages: ${allPages.length}`);
console.log(`Total link edges: ${edges.length}`);
console.log(`\nOrphan pages (unreachable from homepage): ${orphans.length}`);
if (orphans.length > 0) {
  orphans.forEach((p) => console.log(`  ORPHAN: ${p}`));
}

console.log(`\nPages with depth > 3: ${deepPages.length}`);
if (deepPages.length > 0) {
  deepPages.forEach((p) => console.log(`  DEEP: ${p} (depth: ${depths.get(p)})`));
}

console.log('\nMax depth from homepage:');
let maxDepth = 0;
for (const [page, d] of depths) {
  if (d > maxDepth) maxDepth = d;
}
console.log(`  ${maxDepth} clicks`);

console.log('\nOutbound link stats:');
const counts = Array.from(outboundCounts.values());
console.log(`  Min: ${Math.min(...counts)}`);
console.log(`  Max: ${Math.max(...counts)}`);
console.log(`  Avg: ${(counts.reduce((a, b) => a + b, 0) / counts.length).toFixed(1)}`);

console.log('\n=== VALIDATION RESULT ===');
const pass = orphans.length === 0 && deepPages.length === 0;
console.log(pass ? 'PASS — All checks passed' : 'FAIL — Issues found above');
