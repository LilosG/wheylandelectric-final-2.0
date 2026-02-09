# Migration Plan & Legacy Redirects -- Wheyland Electric

> Covers redirect mapping from legacy URLs, DNS/hosting migration steps, and pre/post-launch checklists.

---

## 1. Legacy URL Redirect Map

All indexed legacy URLs must be 301-redirected to their new equivalents. Redirects are configured in `vercel.json`.

### Known Legacy Redirects

| Old URL | New URL | Status |
|---------|---------|--------|
| `/about-us-san-diego-county-electrician/` | `/about/` | Configured in vercel.json |
| `/index.html` | `/` | Add if legacy site used .html extensions |
| `/home` | `/` | Add if legacy alias existed |
| `/services.html` | `/services/` | Add if applicable |
| `/about-us` | `/about/` | Add if applicable |
| `/about-us.html` | `/about/` | Add if applicable |
| `/contact` | `/contact-us/` | Add if applicable |
| `/contact.html` | `/contact-us/` | Add if applicable |
| `/testimonials` | `/reviews/` | Add if applicable |
| `/reviews.html` | `/reviews/` | Add if applicable |
| `/estimate` | `/free-estimates/` | Add if applicable |
| `/quote` | `/free-estimates/` | Add if applicable |

### City Page Redirects (if legacy used different URL patterns)

| Legacy Pattern | New URL |
|---------------|---------|
| `/service-areas/carlsbad/` | `/carlsbad/` |
| `/service-areas/encinitas/` | `/encinitas/` |
| `/service-areas/rancho-santa-fe/` | `/rancho-santa-fe/` |
| `/service-areas/san-marcos/` | `/san-marcos/` |
| `/service-areas/del-mar/` | `/del-mar/` |
| `/service-areas/solana-beach/` | `/solana-beach/` |
| `/service-areas/oceanside/` | `/oceanside/` |
| `/locations/{city}/` | `/{city}/` |
| `/{city}-electrician/` | `/{city}/` |

### Implementation in vercel.json

```json
{
  "redirects": [
    { "source": "/about-us-san-diego-county-electrician/", "destination": "/about/", "permanent": true },
    { "source": "/about-us", "destination": "/about/", "permanent": true },
    { "source": "/contact", "destination": "/contact-us/", "permanent": true },
    { "source": "/testimonials", "destination": "/reviews/", "permanent": true },
    { "source": "/estimate", "destination": "/free-estimates/", "permanent": true },
    { "source": "/quote", "destination": "/free-estimates/", "permanent": true },
    { "source": "/service-areas/carlsbad/", "destination": "/carlsbad/", "permanent": true },
    { "source": "/service-areas/encinitas/", "destination": "/encinitas/", "permanent": true },
    { "source": "/service-areas/rancho-santa-fe/", "destination": "/rancho-santa-fe/", "permanent": true },
    { "source": "/service-areas/san-marcos/", "destination": "/san-marcos/", "permanent": true },
    { "source": "/service-areas/del-mar/", "destination": "/del-mar/", "permanent": true },
    { "source": "/service-areas/solana-beach/", "destination": "/solana-beach/", "permanent": true },
    { "source": "/service-areas/oceanside/", "destination": "/oceanside/", "permanent": true }
  ]
}
```

### Redirect Discovery Process

Additional legacy URLs should be identified by:
1. Crawling the old site before migration (Screaming Frog or similar)
2. Checking Google Search Console for indexed URLs
3. Reviewing Google Analytics for pages with traffic
4. Checking the Wayback Machine for historical URL patterns

Add discovered legacy URLs to `vercel.json` as they are found.

---

## 2. Pre-Launch Checklist

### DNS & Hosting

- [ ] Confirm domain registrar access (wheylandelectric.com)
- [ ] Configure DNS records for Vercel (A record or CNAME)
- [ ] Set `PUBLIC_SITE_URL` environment variable in Vercel
- [ ] Set `PUBLIC_FORMSPREE_ENDPOINT` environment variable in Vercel
- [ ] Verify SSL certificate (auto via Vercel)
- [ ] Verify HTTPS redirect
- [ ] Verify www vs. non-www canonical redirect

### Content & Assets

- [ ] Upload logo files to `/public/images/`
- [ ] Upload available project photos
- [ ] All 88 pages render correctly
- [ ] All title tags are unique and under 60 characters
- [ ] All meta descriptions are unique and under 155 characters
- [ ] All H1 tags are unique
- [ ] All canonical tags self-referencing
- [ ] Review all page content for factual accuracy

### SEO & Technical

- [ ] XML sitemap generates all 88 URLs correctly
- [ ] `robots.txt` allows crawling of all public pages
- [ ] Structured data validates (Rich Results Test on 5-10 pages)
- [ ] All images have alt text
- [ ] All images optimized (WebP, lazy loading)
- [ ] All internal links resolve (no 404s)
- [ ] BreadcrumbList schema accurate on all pages

### Forms & Functionality

- [ ] Test all forms with Formspree endpoint
- [ ] Form submissions redirect to `/thank-you/`
- [ ] Phone number `tel:` links work on mobile (click-to-call)
- [ ] GBP embed map loads correctly on city pages and contact page
- [ ] Mobile nav and sticky CTA bar function properly

### Performance

- [ ] Lighthouse score 90+ on all metrics (homepage, 1 city, 1 money page)
- [ ] Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### Tracking

- [ ] Google Analytics 4 (GA4) installed and firing on all pages
- [ ] Conversion events configured: form submissions, phone clicks
- [ ] Google Search Console property verified
- [ ] CallRail or call tracking configured (if using)

---

## 3. Launch Day Procedure

| Step | Action | Responsible | Verification |
|------|--------|-------------|--------------|
| 1 | Deploy to Vercel production | Dev | Site loads at production URL |
| 2 | Switch DNS if needed | Dev | DNS propagation check |
| 3 | Verify SSL | Dev | HTTPS padlock in browser |
| 4 | Test redirects | Dev/SEO | Spot-check 10 legacy URLs with `curl -I` |
| 5 | Test forms | Dev | Submit test form, verify email receipt |
| 6 | Test phone links | Dev | Click `tel:` link on mobile device |
| 7 | Submit sitemap to GSC | SEO | GSC shows sitemap submitted |
| 8 | Request indexing | SEO | GSC URL Inspection on homepage |
| 9 | Verify GBP website URL | SEO | GBP points to new site |
| 10 | Verify all pages indexed | SEO | `site:wheylandelectric.com` spot check |

---

## 4. Post-Launch: Week 1

- [ ] Monitor GSC for crawl errors daily
- [ ] Check GA4 for traffic (compare to pre-launch baseline)
- [ ] Verify forms are receiving real submissions
- [ ] Verify phone tracking recording calls
- [ ] Check for 404 errors in server logs
- [ ] Test site on multiple devices and browsers
- [ ] Verify all redirects still working
- [ ] Add additional legacy URL redirects as discovered

---

## 5. Post-Launch: Month 1

- [ ] Review GSC indexing coverage (target: all 88 pages indexed)
- [ ] Check page speed in GSC (field data takes 28 days)
- [ ] Monitor keyword rankings for primary queries (`electrician {city}`)
- [ ] Watch for cannibalization (two URLs ranking for same query)
- [ ] Review GA4 user behavior patterns
- [ ] Check bounce rates on key landing pages
- [ ] Monitor local pack rankings for all 7 cities
- [ ] Begin GBP post cadence (1-2/week)
- [ ] Respond to all new GBP reviews within 48 hours

---

## 6. Rollback Plan

If critical issues arise post-launch:

| Issue | Severity | Action |
|-------|----------|--------|
| Forms not submitting | CRITICAL | Fix Formspree endpoint immediately |
| Phone links broken | CRITICAL | Fix `tel:` href immediately |
| Homepage 500 error | CRITICAL | Redeploy previous build |
| Individual page 404 | HIGH | Fix redirect or regenerate page |
| Styling broken on mobile | MEDIUM | Fix in next deployment |
| Minor content error | LOW | Fix in next deployment |

### Quick Rollback

Vercel supports instant rollback to previous deployments via the dashboard. No DNS changes needed.
