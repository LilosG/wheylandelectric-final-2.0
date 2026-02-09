# Monthly Reporting KPIs -- Wheyland Electric

> Defines the key performance indicators to track, data sources, targets, and reporting cadence for the Wheyland Electric website.

---

## 1. Lead Generation KPIs

| KPI | Source | Measurement | Monthly Target |
|-----|--------|-------------|----------------|
| Phone calls (total) | Call tracking / GBP | Monthly volume + trend | Establish baseline Month 1 |
| Phone calls from website | CallRail or GA4 event | `tel:` click events | Track growth |
| Form submissions (total) | Formspree dashboard | Monthly volume | Establish baseline Month 1 |
| Free estimate requests | Formspree (form type field) | Monthly volume | Primary conversion metric |
| HOA inquiries | Formspree (service field) | Monthly volume | Secondary metric |
| Contact form submissions | Formspree | Monthly volume | Secondary metric |
| Cost per lead | Ad spend / total leads | If running ads | Track if applicable |

### Lead Quality Tracking

| Metric | How to Track |
|--------|-------------|
| Lead-to-appointment rate | CRM or manual tracking |
| Lead-to-close rate | CRM or manual tracking |
| Average job value from web leads | Invoice data |
| Top services requested | Form field analysis |
| Top cities for leads | Form field or call tracking |

---

## 2. Google Search Console KPIs

| KPI | Measurement | Target |
|-----|-------------|--------|
| Total impressions | Monthly trend | Growing month-over-month |
| Total clicks | Monthly trend | Growing month-over-month |
| Average CTR | Monthly percentage | > 3% site-wide |
| Average position | By page type | < 10 for money pages, < 5 for city pages |
| Indexed pages | Should match ~88 (Wave 1) | 88 indexed, 0 excluded |
| Crawl errors | Should be 0 | 0 errors |
| Core Web Vitals | Pass/Fail by page type | All passing |
| Manual actions | Should be 0 | 0 |

### GSC Breakdowns to Report

| Dimension | What to Report |
|-----------|---------------|
| By page type | Impressions + clicks for city pages vs. money pages vs. pillars vs. blog |
| By query cluster | "electrician {city}" vs. "{service} {city}" vs. branded |
| By device | Mobile vs. desktop (mobile typically 60-70% for local) |
| Top improving pages | Which pages gained the most impressions/clicks |
| Top declining pages | Which pages lost visibility (investigate) |

### Key Query Clusters to Monitor

| Query Cluster | Target Page(s) | Position Goal |
|--------------|----------------|---------------|
| electrician carlsbad | `/carlsbad/` | Top 5 |
| electrician encinitas | `/encinitas/` | Top 5 |
| electrician rancho santa fe | `/rancho-santa-fe/` | Top 3 |
| electrician san marcos | `/san-marcos/` | Top 5 |
| electrician del mar | `/del-mar/` | Top 3 |
| electrician solana beach | `/solana-beach/` | Top 3 |
| electrician oceanside | `/oceanside/` | Top 7 |
| ev charger installation {city} | Money pages | Top 5 |
| electrical panel upgrade {city} | Money pages | Top 5 |
| recessed lighting {city} | Money pages | Top 5 |

---

## 3. Google Business Profile KPIs

| KPI | Source | Measurement |
|-----|--------|-------------|
| GBP views (search + maps) | GBP Insights | Monthly trend |
| Website clicks from GBP | GBP Insights | Monthly volume |
| Direction requests | GBP Insights | Monthly volume |
| Phone calls from GBP | GBP Insights | Monthly volume |
| Photo views | GBP Insights | Monthly trend |
| Review count | GBP | Monthly snapshot (currently 153) |
| Average rating | GBP | Maintain 5.0 (minimum 4.8) |
| Reviews responded to | Manual count | 100% response rate |
| GBP posts published | Manual count | Target: 4-8/month |

### GBP Search Queries

Track the top queries that trigger the GBP listing:
- "electrician carlsbad"
- "electrician near me" (from Carlsbad area)
- "ev charger installation carlsbad"
- "electrical panel upgrade carlsbad"

---

## 4. Website Analytics KPIs (GA4)

| KPI | Measurement | Target |
|-----|-------------|--------|
| Total sessions | Monthly | Growing month-over-month |
| Organic sessions | Monthly | Primary growth channel |
| Direct sessions | Monthly | Brand awareness indicator |
| Referral sessions | Monthly | GBP, directories, etc. |
| Pages per session | Average | > 2.0 |
| Average session duration | Average | > 1:30 |
| Bounce rate | By page type | < 60% for landing pages |
| Top landing pages | Ranked by sessions | Which pages drive traffic |
| Conversion rate | Forms + calls / sessions | Establish baseline, optimize |

### GA4 Events to Track

| Event | Trigger |
|-------|---------|
| `form_submit` | Free estimate form submission |
| `phone_click` | Click on `tel:` link |
| `cta_click` | Click on CTA button |
| `service_card_click` | Click on service card from city page |
| `city_card_click` | Click on city card from service page |

---

## 5. Technical Health KPIs

| KPI | Tool | Target | Frequency |
|-----|------|--------|-----------|
| Lighthouse Performance | Lighthouse | 90+ | Monthly |
| Lighthouse Accessibility | Lighthouse | 90+ | Monthly |
| Lighthouse Best Practices | Lighthouse | 90+ | Monthly |
| Lighthouse SEO | Lighthouse | 95+ | Monthly |
| Core Web Vitals (LCP) | GSC / PageSpeed | < 2.5s | Monthly |
| Core Web Vitals (INP) | GSC / PageSpeed | < 200ms | Monthly |
| Core Web Vitals (CLS) | GSC / PageSpeed | < 0.1 | Monthly |
| Broken links | Screaming Frog or similar | 0 | Monthly |
| 404 errors | GSC + server logs | 0 | Weekly |
| Redirect chains | Screaming Frog | 0 | Monthly |
| SSL certificate | Automated | Valid | Continuous |

---

## 6. Reporting Cadence

### Weekly Report (Internal)

| Item | Content |
|------|---------|
| Form submissions this week | Count + service breakdown |
| Phone calls this week | Count (if tracking) |
| GSC errors or alerts | Any new issues |
| GBP reviews received | New reviews + responses |

### Monthly Report (Client-Facing)

| Section | Content |
|---------|---------|
| Executive Summary | 3-5 bullet points on performance |
| Lead Volume | Calls + forms + month-over-month change |
| Search Visibility | GSC impressions, clicks, CTR, avg position |
| GBP Performance | Views, clicks, calls, directions, reviews |
| Top Performing Pages | Which pages drove the most traffic/leads |
| Rankings Snapshot | Position tracking for top 20 queries |
| Technical Health | Core Web Vitals, errors, indexing |
| Recommendations | 2-3 actions for next month |

### Quarterly Strategy Review

| Topic | Content |
|-------|---------|
| Performance vs. goals | Are we on track? |
| Wave 2 readiness | Should we launch Wave 2 cities/services? |
| Content priorities | New blog posts, updated pages, new services |
| Competitive changes | New competitors, SERP changes |
| Budget/resource needs | Photo shoots, content production, ad spend |

---

## 7. Reporting Template

### Monthly Scorecard

```
WHEYLAND ELECTRIC -- MONTHLY REPORT -- {Month} {Year}

LEADS
  Form submissions:    ___  (vs. ___ last month)
  Phone calls:         ___  (vs. ___ last month)
  Total leads:         ___  (vs. ___ last month)

SEARCH VISIBILITY (GSC)
  Impressions:         ___  (vs. ___ last month)
  Clicks:              ___  (vs. ___ last month)
  CTR:                 ___%
  Avg Position:        ___

GBP
  Views:               ___
  Website clicks:      ___
  Phone calls:         ___
  Reviews (total):     ___  (rating: ___)

WEBSITE (GA4)
  Sessions:            ___
  Organic sessions:    ___
  Pages/session:       ___
  Conversion rate:     ___%

INDEXING
  Pages indexed:       ___ / 88
  Errors:              ___

ACTIONS FOR NEXT MONTH
  1. ___
  2. ___
  3. ___
```

---

## 8. Baseline Establishment

For the first 90 days after launch, the primary goal is establishing baselines. During this period:

1. **Do not panic over low numbers.** New sites take 4-12 weeks to gain meaningful organic visibility.
2. **Track week-over-week trends** rather than absolute numbers.
3. **Focus on indexing.** Ensure all 88 pages get indexed within the first 30 days.
4. **Monitor for technical issues** more closely (daily GSC checks).
5. **Set formal targets at the 90-day mark** once baselines are established.
