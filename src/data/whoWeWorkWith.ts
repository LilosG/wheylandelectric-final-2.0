/**
 * Who We Work With — segment data
 * Centralized data file for /who-we-work-with/ hub and all segment pages.
 * Each segment key matches whoWeServeImages in heroImages.ts.
 */

import type { FAQ } from '../types';

export interface WhoWeWorkWithSegment {
  key: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: { src: string; alt: string };
  description: string;
  overviewBullets: string[];
  whyChoose: string[];
  processSteps: { step: number; title: string; description: string }[];
  faqs: FAQ[];
  services: { label: string; href: string }[];
  relatedSegments: { label: string; href: string }[];
  cta: { label: string; href: string };
}

export const segments: WhoWeWorkWithSegment[] = [
  {
    key: 'homeowners',
    slug: 'homeowners',
    title: 'Homeowners',
    metaTitle: 'Residential Electrician for Carlsbad Homeowners | Wheyland Electric',
    metaDescription: 'Wheyland Electric provides licensed residential electrical services for homeowners throughout Carlsbad and North County San Diego. Panel upgrades, EV chargers, lighting, and service calls — permitted, inspected, and warranted.',
    heroImage: {
      src: '/images/services/ev-charger/wheyland-electric-ev-charger-home-installation-1.webp',
      alt: 'Wheyland Electric residential electrician serving Carlsbad homeowners',
    },
    description: 'From panel upgrades and EV charger installations to recessed lighting retrofits and service call diagnostics, we handle the full range of residential electrical work for Carlsbad and North County homeowners. Every project is permitted where required, performed by our licensed electricians, and backed by a one-year labor warranty.',
    overviewBullets: [
      'Panel upgrades from 100-amp to 200-amp or 400-amp service — permitted and inspected',
      'Level 2 EV charger installation with dedicated circuit and City of Carlsbad permit coordination',
      'Recessed lighting retrofits, dimmer installations, and whole-room lighting redesigns',
      'Service call diagnostics — systematic root-cause identification, not guesswork',
      'Outlet, switch, GFCI, and AFCI upgrades including aluminum wiring remediation',
      'Spa, hot tub, and sauna dedicated circuit installation to code',
    ],
    whyChoose: [
      'Carlsbad-based since 2008 — we are local to every neighborhood we serve',
      'CA License #940291 — licensed, bonded, and insured on every project',
      'Every project performed by our licensed electricians, not subcontractors',
      'Permit and inspection coordination handled end-to-end — you do not manage the building department',
      'Upfront written pricing — scope and cost approved before work begins',
      'One-year labor warranty on all residential electrical workmanship',
    ],
    processSteps: [
      { step: 1, title: 'Free Assessment', description: 'We visit your home, evaluate the electrical system, and discuss your project. No cost, no obligation — you get an honest recommendation before any commitment.' },
      { step: 2, title: 'Written Proposal', description: 'You receive an itemized written proposal with clear scope and pricing. No surprise add-ons. You approve the scope before we schedule.' },
      { step: 3, title: 'Permit Coordination', description: 'For permitted work — panel upgrades, EV chargers, new circuits — we file with the City of Carlsbad Building Division and coordinate the inspection. You do not deal with the building department.' },
      { step: 4, title: 'Professional Installation', description: 'Our licensed electricians complete all work to current NEC and California Electrical Code standards with clean, professional workmanship.' },
      { step: 5, title: 'Testing and Handoff', description: 'We test all work before closeout, coordinate city inspections where required, and walk you through the completed installation. One-year labor warranty applies to all workmanship.' },
    ],
    faqs: [
      { question: 'What residential electrical services does Wheyland Electric provide?', answer: 'We handle the full range of residential electrical work — panel upgrades, EV charger installation, recessed lighting, light fixture and ceiling fan installation, outlet and switch repair, GFCI and AFCI upgrades, spa and hot tub wiring, service calls, troubleshooting, and dedicated circuits.' },
      { question: 'Do you handle permits for residential electrical work?', answer: 'Yes. We manage the permit application and coordinate city inspections for all work that requires it — panel upgrades, new circuits, EV chargers, and other permitted scopes. You do not need to deal with the building department.' },
      { question: 'Are you licensed to do residential electrical work in Carlsbad?', answer: 'Yes. Wheyland Electric holds California Electrical Contractor License #940291. All work is performed by our licensed electricians — not subcontractors.' },
      { question: 'How quickly can you schedule residential electrical work?', answer: 'Most service calls and smaller projects are scheduled within 1 to 2 business days. Panel upgrades and EV charger installations are typically scheduled within the same week.' },
      { question: 'Do you provide a warranty on residential electrical work?', answer: 'Yes. All Wheyland Electric residential work is backed by a one-year labor warranty on all workmanship.' },
      { question: 'What neighborhoods in Carlsbad do you serve?', answer: 'We serve every Carlsbad neighborhood — La Costa, Olde Carlsbad, Bressi Ranch, Aviara, Calavera Hills, The Village, Robertson Ranch, and all surrounding areas. We are based in Carlsbad and respond quickly throughout the city.' },
    ],
    services: [
      { label: 'Electrical Panel Upgrades', href: '/services/electrical-panel-upgrades/' },
      { label: 'EV Charger Installation', href: '/services/ev-charger-installation/' },
      { label: 'Recessed Lighting Installation', href: '/services/recessed-lighting-installation/' },
      { label: 'Outlet, Switch & GFCI Repairs', href: '/services/outlet-switch-dimmer-gfci-repairs/' },
      { label: 'Service Calls & Troubleshooting', href: '/services/service-calls-troubleshooting/' },
      { label: 'Ceiling Fan & Light Fixture Installation', href: '/services/ceiling-fan-installation/' },
      { label: 'Spa, Jacuzzi & Sauna Electrical', href: '/services/spa-jacuzzi-sauna-electrical/' },
      { label: 'Dedicated Circuits', href: '/services/dedicated-circuits/' },
    ],
    relatedSegments: [
      { label: 'HOA Communities', href: '/who-we-work-with/hoa-communities/' },
      { label: 'Property Managers', href: '/who-we-work-with/property-managers/' },
    ],
    cta: { label: 'All Residential Services', href: '/services/residential-electrical-services/' },
  },
  {
    key: 'property-managers',
    slug: 'property-managers',
    title: 'Property Managers',
    metaTitle: 'Electrician for Property Managers | North County San Diego | Wheyland Electric',
    metaDescription: 'Wheyland Electric provides reliable electrical service for property managers throughout North County San Diego. Fast response, transparent documentation, and consistent scheduling across your portfolio.',
    heroImage: {
      src: '/images/services/panel/wheyland-electric-service-entrance-wiring.webp',
      alt: 'Wheyland Electric electrical services for property managers in North County San Diego',
    },
    description: 'Reliable, responsive electrical service for managed residential and commercial properties throughout North County San Diego. We understand the urgency of tenant issues, the importance of documentation for your records, and the need for consistent scheduling across a portfolio. We work directly with your maintenance coordinator and provide written service reports after every visit.',
    overviewBullets: [
      'Priority response for tenant-reported electrical issues — same-day and next-day availability',
      'Written service reports after every visit suitable for property management records',
      'Direct coordination with your maintenance team — no communication gaps',
      'Scheduled maintenance programs with flat-rate pricing for predictable budgeting',
      'Licensed, bonded, and insured — all required documentation provided on request',
      'Consistent scheduling and follow-through across multi-property portfolios',
    ],
    whyChoose: [
      'North County-based with fast response across Carlsbad, Encinitas, San Marcos, and Oceanside',
      'Direct communication with your maintenance coordinator — no middlemen',
      'Written service reports provided after every visit for your property records',
      'Flat-rate maintenance programs available for predictable cost management',
      'CA License #940291 — licensed, bonded, and insured with all required documentation',
      'One-year labor warranty on all electrical workmanship',
    ],
    processSteps: [
      { step: 1, title: 'Initial Portfolio Assessment', description: 'We walk your properties with your maintenance team to document electrical systems, identify deferred maintenance, and establish a service baseline.' },
      { step: 2, title: 'Service Agreement', description: 'For ongoing portfolios, we establish a service agreement covering response times, documentation standards, and pricing structure.' },
      { step: 3, title: 'Responsive Service Calls', description: 'Tenant-reported electrical issues receive same-day or next-day response. We communicate directly with your maintenance coordinator on scheduling and access.' },
      { step: 4, title: 'Documented Service Reports', description: 'After every visit, your team receives a written service report detailing work completed, issues identified, and recommendations for future maintenance.' },
      { step: 5, title: 'Ongoing Maintenance', description: 'Scheduled maintenance visits keep electrical systems in compliance, reduce emergency calls, and provide the documentation your property records require.' },
    ],
    faqs: [
      { question: 'Do you work with property management companies managing multiple properties?', answer: 'Yes. We work with property managers overseeing residential and commercial portfolios throughout North County San Diego. We coordinate directly with your maintenance team and adapt to your work order and approval processes.' },
      { question: 'How quickly do you respond to tenant-reported electrical issues?', answer: 'We offer same-day and next-day scheduling for most service calls. For urgent safety issues — burning smells, sparking, or loss of power — we prioritize immediate response.' },
      { question: 'Do you provide documentation for property management records?', answer: 'Yes. We provide written service reports after every visit detailing work completed, findings, and recommendations. Documentation is formatted for property management records and can be tailored to your management platform requirements.' },
      { question: 'Can you handle both residential and commercial properties in a portfolio?', answer: 'Yes. We service both residential rental properties and commercial managed properties. The same team handles both, which simplifies your vendor management.' },
      { question: 'Do you offer maintenance contracts for managed properties?', answer: 'Yes. We offer scheduled maintenance programs with flat-rate pricing for property managers. Programs cover regular inspections, lighting maintenance, and priority emergency response.' },
    ],
    services: [
      { label: 'Service Calls & Troubleshooting', href: '/services/service-calls-troubleshooting/' },
      { label: 'Commercial Electrical Maintenance', href: '/services/commercial-electrical-maintenance/' },
      { label: 'Electrical Panel Upgrades', href: '/services/electrical-panel-upgrades/' },
      { label: 'Electrical Safety Inspections', href: '/services/electrical-safety-inspections/' },
      { label: 'HOA Electrical Services', href: '/services/hoa-electrical-services/' },
      { label: 'Light Fixture & Lighting Maintenance', href: '/services/light-fixture-installation/' },
    ],
    relatedSegments: [
      { label: 'HOA Communities', href: '/who-we-work-with/hoa-communities/' },
      { label: 'Commercial & Business', href: '/who-we-work-with/commercial/' },
    ],
    cta: { label: 'Commercial Electrical Maintenance', href: '/services/commercial-electrical-maintenance/' },
  },
  {
    key: 'hoa-communities',
    slug: 'hoa-communities',
    title: 'HOA Communities',
    metaTitle: 'HOA Electrician Carlsbad — Common Area Electrical Maintenance | Wheyland Electric',
    metaDescription: 'Wheyland Electric provides scheduled electrical maintenance for HOA communities throughout Carlsbad and North County San Diego. Flat-rate pricing, transparent reporting, and priority emergency response.',
    heroImage: {
      src: '/images/services/lighting/wheyland-electric-led-handrail-stair-lighting.webp',
      alt: 'HOA common area lighting maintenance by Wheyland Electric in Carlsbad',
    },
    description: 'Predictable monthly maintenance with flat-rate pricing, scheduled inspections, and transparent documentation for HOA boards and community managers. We serve master-planned communities throughout Carlsbad — including Bressi Ranch, Aviara, Robertson Ranch, La Costa, and Calavera Hills — with the reliability and reporting standards HOA boards require to manage community infrastructure responsibly.',
    overviewBullets: [
      'Scheduled maintenance programs with flat-rate monthly pricing for predictable HOA budgets',
      'Common area lighting inspection, maintenance, and LED upgrade coordination',
      'Parking lot, pathway, and exterior fixture maintenance and repair',
      'Gate, access control, and security lighting electrical maintenance',
      'Pool and spa circuit maintenance, testing, and compliance',
      'Detailed service reports after every visit for board meeting records and reserve studies',
    ],
    whyChoose: [
      'Carlsbad-based with fast routing throughout all North County master-planned communities',
      'Familiar with Bressi Ranch, Aviara, Robertson Ranch, La Costa, and Calavera Hills HOA infrastructure',
      'Flat-rate maintenance pricing makes HOA electrical budgeting predictable and defensible',
      'Written service reports formatted for board records, reserve studies, and property management files',
      'Priority emergency response for HOA common area electrical failures',
      'CA License #940291 — licensed, bonded, and insured with all required documentation',
    ],
    processSteps: [
      { step: 1, title: 'Community Walk and Assessment', description: 'We walk the community with your property manager or board representative to document all electrical systems, identify deferred maintenance, and establish a service baseline.' },
      { step: 2, title: 'Maintenance Program Proposal', description: 'You receive a maintenance plan covering scope, frequency, pricing, and emergency response terms — designed to fit your HOA budget and maintenance cycle.' },
      { step: 3, title: 'Scheduled Maintenance Visits', description: 'Our electricians perform scheduled visits covering common area lighting, panel inspections, GFCI testing, and any reported issues. Every visit is documented.' },
      { step: 4, title: 'Service Reports and Recommendations', description: 'After each visit, your property manager receives a service report detailing work completed, issues identified, and recommended capital improvements.' },
      { step: 5, title: 'Emergency Response', description: 'Maintenance contract clients receive priority response for common area electrical emergencies. We respond promptly and document all emergency work for your records.' },
    ],
    faqs: [
      { question: 'What HOA communities do you serve in North County San Diego?', answer: 'We serve HOA communities throughout Carlsbad, Encinitas, San Marcos, Oceanside, Del Mar, and Solana Beach — including Bressi Ranch, Aviara, Robertson Ranch, La Costa Valley, Calavera Hills, San Elijo Hills, and Rancho Del Oro.' },
      { question: 'Do you offer scheduled maintenance contracts for HOAs?', answer: 'Yes. We provide monthly and quarterly maintenance agreements customized to your community size, infrastructure, and budget. Each program includes scheduled visits, documentation, and priority emergency response.' },
      { question: 'How do you document your work for HOA boards?', answer: 'After every visit, we provide a written service report suitable for board meeting records, reserve study documentation, and property management files. We track recurring issues and flag capital improvement needs.' },
      { question: 'Can you handle LED lighting upgrades for HOA common areas?', answer: 'Yes. We handle LED retrofits for parking lot fixtures, pathway lighting, common area interior lighting, and exterior wall packs — including utility rebate documentation for SDG&E programs where applicable.' },
      { question: 'Do you work with property management companies on HOA portfolios?', answer: 'Yes. We integrate with your work order and approval processes and provide the documentation your management platform requires. We work directly with your assigned manager on scheduling and reporting.' },
    ],
    services: [
      { label: 'HOA Electrical Services', href: '/services/hoa-electrical-services/' },
      { label: 'Commercial LED Lighting Retrofit', href: '/services/commercial-led-lighting/' },
      { label: 'Commercial Electrical Maintenance', href: '/services/commercial-electrical-maintenance/' },
      { label: 'Electrical Safety Inspections', href: '/services/electrical-safety-inspections/' },
      { label: 'Service Calls & Troubleshooting', href: '/services/service-calls-troubleshooting/' },
      { label: 'Light Fixture Installation', href: '/services/light-fixture-installation/' },
    ],
    relatedSegments: [
      { label: 'Property Managers', href: '/who-we-work-with/property-managers/' },
      { label: 'Commercial & Business', href: '/who-we-work-with/commercial/' },
    ],
    cta: { label: 'HOA Electrical Services', href: '/services/hoa-electrical-services/' },
  },
  {
    key: 'commercial',
    slug: 'commercial',
    title: 'Commercial & Business',
    metaTitle: 'Commercial Electrician Carlsbad — Business & Tenant Improvement | Wheyland Electric',
    metaDescription: 'Wheyland Electric provides licensed commercial electrical services for businesses throughout Carlsbad and North County San Diego. Tenant improvements, EV charging, restaurant electrical, LED retrofits, and maintenance programs.',
    heroImage: {
      src: '/images/services/commercial/wheyland-electric-commercial-control-panel-vfd.webp',
      alt: 'Commercial electrical services by Wheyland Electric for North County San Diego businesses',
    },
    description: 'Tenant improvements, commercial EV charging, restaurant and food service electrical, LED lighting retrofits, and ongoing maintenance programs for businesses and commercial properties throughout North County San Diego. We bring the same licensed, permitted, warranty-backed approach to every commercial project — from a single-suite TI to a multi-station EV charging installation at an office park.',
    overviewBullets: [
      'Commercial tenant improvement electrical — offices, retail, restaurant, medical, and industrial',
      'Commercial EV charging station installation with load management for office parks and retail centers',
      'Restaurant and food service electrical — kitchen hookups, hood systems, Title 24 compliance',
      'Commercial LED lighting retrofits with SDG&E utility rebate documentation',
      'Ongoing commercial electrical maintenance programs with documented reporting',
      'Light industrial electrical — 3-phase, equipment hookups, warehouse and manufacturing',
    ],
    whyChoose: [
      'Carlsbad-based since 2008 — familiar with Palomar Airport Road, Carlsbad Research Center, and North County business parks',
      'Full commercial scope: TI, EV charging, restaurant, LED, HOA, industrial — one contractor',
      'Permit and AHJ coordination handled by our team on every permitted commercial scope',
      'Title 24 energy compliance expertise for all applicable California commercial requirements',
      'Minimal business disruption — we schedule around your operating hours',
      'One-year labor warranty on all commercial electrical workmanship',
    ],
    processSteps: [
      { step: 1, title: 'Site Walk and Scope Review', description: 'We visit your property, review plans if applicable, and identify the full electrical scope. Commercial projects receive a written proposal with clear line-item pricing.' },
      { step: 2, title: 'Permitting and AHJ Coordination', description: 'We pull all required permits, coordinate with the AHJ and building department, and align scheduling with your general contractor or property manager.' },
      { step: 3, title: 'Installation', description: 'Our licensed electricians complete all work to NEC and California Electrical Code standards. We minimize disruption to business operations and coordinate with other trades on TI and construction projects.' },
      { step: 4, title: 'Inspection and Commissioning', description: 'We schedule and attend all required inspections, commission all systems, and verify code compliance before closeout.' },
      { step: 5, title: 'Documentation and Handoff', description: 'You receive as-built documentation, panel directories, warranty information, and any utility rebate paperwork. Ongoing maintenance clients receive scheduled visit reports.' },
    ],
    faqs: [
      { question: 'What commercial electrical services does Wheyland Electric provide?', answer: 'We handle the full range of commercial electrical work — tenant improvements, ongoing maintenance programs, commercial EV charging, restaurant and food service electrical, LED lighting retrofits, HOA electrical services, and light industrial work.' },
      { question: 'Do you work with general contractors on commercial TI projects?', answer: 'Yes. We work with general contractors daily on commercial TI projects throughout North County San Diego. We coordinate scheduling, meet construction milestones, and communicate directly with your GC to keep projects on track.' },
      { question: 'Do you handle Title 24 compliance for commercial spaces?', answer: 'Yes. We ensure all commercial lighting and electrical controls meet California Title 24 energy requirements, including occupancy sensors, daylight harvesting, and lighting power density calculations.' },
      { question: 'Do you install commercial EV charging stations?', answer: 'Yes. We design and install commercial EV charging infrastructure for office parks, retail centers, restaurants, and multi-tenant properties. We handle load management planning, permit coordination, and utility coordination.' },
      { question: 'What North County commercial areas do you serve?', answer: 'We serve commercial properties throughout the Carlsbad Research Center, Palomar Airport Road corridor, Loker Avenue business parks, Bressi Ranch Village Center, Encinitas Boulevard commercial areas, Grand Avenue in San Marcos, and throughout North County San Diego.' },
    ],
    services: [
      { label: 'Commercial Tenant Improvement (TI)', href: '/services/commercial-tenant-improvement/' },
      { label: 'Commercial EV Charging', href: '/services/commercial-ev-charging/' },
      { label: 'Restaurant & Food Service Electrical', href: '/services/restaurant-electrical/' },
      { label: 'Commercial LED Lighting Retrofit', href: '/services/commercial-led-lighting/' },
      { label: 'Commercial Electrical Maintenance', href: '/services/commercial-electrical-maintenance/' },
      { label: 'Light Industrial Electrical', href: '/services/light-industrial-electrical/' },
    ],
    relatedSegments: [
      { label: 'HOA Communities', href: '/who-we-work-with/hoa-communities/' },
      { label: 'General Contractors', href: '/who-we-work-with/general-contractors/' },
    ],
    cta: { label: 'All Commercial Services', href: '/services/commercial-electrical-services/' },
  },
  {
    key: 'general-contractors',
    slug: 'general-contractors',
    title: 'General Contractors',
    metaTitle: 'Subcontract Electrician for General Contractors | North County San Diego | Wheyland Electric',
    metaDescription: 'Wheyland Electric provides reliable subcontract electrical work for general contractors on remodel, new construction, and tenant improvement projects throughout North County San Diego.',
    heroImage: {
      src: '/images/services/commercial/wheyland-electric-commercial-food-processing-electrical.webp',
      alt: 'Wheyland Electric subcontract electrical work for general contractors in North County San Diego',
    },
    description: 'Licensed contractors trust Wheyland Electric for subcontract electrical work on remodel and new construction projects throughout North County San Diego. We show up on schedule, sequence our work to keep your project moving, communicate directly with your site supervisor, and deliver permitted work that passes inspection the first time.',
    overviewBullets: [
      'Residential remodel rough-in and trim-out — kitchens, bathrooms, additions, and whole-home remodels',
      'New construction electrical from rough-in through final inspection',
      'Commercial tenant improvement electrical — all use types, permitted and inspected',
      'Panel upgrades and sub-panel additions as part of remodel scope',
      'ADU electrical from sub-panel to final fixtures',
      'Permit coordination and inspection attendance — no delays from paperwork',
    ],
    whyChoose: [
      'We show up on schedule — reliable scheduling is non-negotiable for subcontract work',
      'Direct communication with your site supervisor — no gaps, no surprises',
      'Permitted work that passes inspection the first time — no re-inspection delays',
      'Clean job sites — we protect your work and leave areas ready for the next trade',
      'CA License #940291 — licensed, bonded, and insured with certificates of insurance on request',
      'Residential and commercial scope capability — one electrical sub for your full project portfolio',
    ],
    processSteps: [
      { step: 1, title: 'Plan Review and Bid', description: 'We review your plans or scope documents and provide a written bid with itemized electrical scope. For design-build projects, we can provide preliminary estimates based on square footage and use type.' },
      { step: 2, title: 'Permit Coordination', description: 'We pull all required electrical permits and coordinate with the AHJ. For TI projects, we work with your permit runner or coordinate directly with the building department.' },
      { step: 3, title: 'Rough-In', description: 'We sequence rough-in to meet your framing and inspection milestones. We communicate directly with your site supervisor on any conflicts or changes that affect the schedule.' },
      { step: 4, title: 'Rough-In Inspection', description: 'We schedule and attend the rough-in inspection. If corrections are needed, we address them immediately to avoid delaying your next phase.' },
      { step: 5, title: 'Trim-Out and Final', description: 'We complete trim-out and final connections on your schedule, attend the final electrical inspection, and provide all documentation for the certificate of occupancy package.' },
    ],
    faqs: [
      { question: 'Do you provide certificates of insurance for subcontract work?', answer: 'Yes. We provide certificates of insurance naming your company and the project owner as additional insureds. Standard COIs are provided within one business day of request.' },
      { question: 'How do you handle scheduling and communication on active job sites?', answer: 'We establish a direct line of communication with your site supervisor before mobilizing. We confirm scheduling 24 to 48 hours in advance, communicate any conflicts immediately, and are reachable throughout the project.' },
      { question: 'Do you handle permits for subcontract electrical work?', answer: 'Yes. We pull all required electrical permits under our C-10 license. We coordinate the permit application, attend inspections, and provide permit documentation for the project closeout package.' },
      { question: 'What types of projects do you subcontract for?', answer: 'We subcontract residential remodels, new construction, ADU builds, commercial tenant improvements, and commercial new construction throughout North County San Diego.' },
      { question: 'Can you provide preliminary budget numbers for projects in early planning?', answer: 'Yes. For projects in early planning stages, we can provide preliminary electrical budget ranges based on square footage, use type, and scope description. These are not binding bids but give your team a planning figure to work with.' },
    ],
    services: [
      { label: 'Remodel & Rewiring (incl. ADU)', href: '/services/remodel-rewiring-adu/' },
      { label: 'Electrical Panel Upgrades', href: '/services/electrical-panel-upgrades/' },
      { label: 'Dedicated Circuits', href: '/services/dedicated-circuits/' },
      { label: 'Commercial Tenant Improvement', href: '/services/commercial-tenant-improvement/' },
      { label: 'Electrical Safety Inspections', href: '/services/electrical-safety-inspections/' },
      { label: 'Light Industrial Electrical', href: '/services/light-industrial-electrical/' },
    ],
    relatedSegments: [
      { label: 'Commercial & Business', href: '/who-we-work-with/commercial/' },
      { label: 'Property Managers', href: '/who-we-work-with/property-managers/' },
    ],
    cta: { label: 'Request a Subcontract Estimate', href: '/free-estimates/' },
  },
];

export function getSegmentBySlug(slug: string): WhoWeWorkWithSegment | undefined {
  return segments.find((s) => s.slug === slug);
}
