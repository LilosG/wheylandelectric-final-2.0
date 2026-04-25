import type { ServicePillar, ExtendedService } from '../types';
import { flags } from './site';

// ============================================================
// Wheyland Electric — Service Pillars
// ============================================================

const baseServicePillars: ServicePillar[] = [
  // ========================
  // WAVE 1 — publish: true
  // ========================

  // 1. EV Charger Installation
  {
    slug: 'ev-charger-installation',
    category: 'residential',
    name: 'EV Charger Installation',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'EV charger installation',
    secondaryKeywords: [
      'Level 2 EV charger installation',
      'Tesla Wall Connector installer',
      'home EV charging station',
      'electric vehicle charger electrician',
      'NEMA 14-50 outlet for EV',
      'ChargePoint home installer',
    ],
    shortDesc:
      'Professional Level 2 EV charger installation for homes and businesses across North County San Diego. Licensed, permitted, and backed by our 1-year labor warranty.',
    includedBullets: [
      'Site assessment and electrical load evaluation',
      'Panel capacity review and upgrade recommendation if needed',
      'Dedicated 240V circuit installation (40A or 50A)',
      'Charger mounting and wiring to manufacturer specifications',
      'City permit procurement and final inspection coordination',
      'Post-install walkthrough and charger operation demo',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Load Assessment',
        description:
          'We evaluate your existing electrical panel, discuss your vehicle and charging goals, and determine the optimal charger location and circuit requirements.',
      },
      {
        step: 2,
        title: 'Proposal & Permitting',
        description:
          'You receive a transparent, itemized quote. Once approved, we pull the required city electrical permit before any work begins.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Our licensed electricians install the dedicated circuit, mount the charger, and complete all wiring to NEC and manufacturer specifications.',
      },
      {
        step: 4,
        title: 'Inspection & Activation',
        description:
          'We schedule the city inspection, verify the installation passes, and walk you through charger operation, app setup, and charging best practices.',
      },
    ],
    pricingFactors: [
      'Distance from electrical panel to charger location',
      'Panel capacity and whether an upgrade is required',
      'Charger brand and amperage (40A vs. 50A circuits)',
      'Conduit routing complexity (attic, crawl space, exterior)',
      'Permit and inspection fees (vary by city)',
    ],
    faqs: [
      {
        question: 'How long does an EV charger installation take?',
        answer:
          'Most residential Level 2 installations are completed in 4 to 6 hours. If a panel upgrade is also required, the project may extend to a full day or require a second visit after inspection.',
      },
      {
        question: 'Do I need a panel upgrade for an EV charger?',
        answer:
          'It depends on your current panel capacity and existing electrical load. Many homes with 200-amp panels have room for a dedicated 40A or 50A EV circuit. Homes with 100-amp or heavily loaded panels often need an upgrade. We perform a load calculation during the initial assessment to give you a definitive answer.',
      },
      {
        question: 'What is the difference between Level 1 and Level 2 charging?',
        answer:
          'Level 1 uses a standard 120V household outlet and adds roughly 3 to 5 miles of range per hour. Level 2 uses a dedicated 240V circuit and delivers 25 to 40 miles of range per hour, making it the preferred option for daily home charging.',
      },
      {
        question: 'Can you install a Tesla Wall Connector or other brand-specific charger?',
        answer:
          'Yes. We install all major brands including Tesla Wall Connector, ChargePoint Home Flex, Grizzl-E, JuiceBox, Emporia, and Wallbox Pulsar. We can also install NEMA 14-50 outlets for portable charger use.',
      },
      {
        question: 'Do I need a permit for EV charger installation?',
        answer:
          'Yes. California requires an electrical permit for dedicated circuit installations. We handle the entire permitting process and coordinate the final inspection so you do not have to.',
      },
      {
        question: 'Are there rebates available for EV charger installation in San Diego?',
        answer:
          'SDG&E and some manufacturers offer rebates and incentive programs that can offset installation costs. Availability changes periodically. We can point you toward current programs during your consultation.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'service-calls-troubleshooting',
      'outlet-switch-dimmer-gfci-repairs',
    ],
    subtopics: [
      'Tesla Wall Connector installation',
      'ChargePoint Home Flex installation',
      'NEMA 14-50 outlet for EV charging',
      'Commercial EV charging stations',
      'Multi-unit EV charging solutions',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area has embraced electric vehicles faster than nearly any community in North County — and Wheyland Electric has been right here installing chargers since the early days. Whether your home is in La Costa, Aviara, or one of the newer Bressi Ranch developments, we handle the full installation from panel evaluation through city inspection. Our office on Woodland Way means we are local to your area and respond quickly.',
      ['enc' + 'initas']:
        'your area homeowners along the 101 corridor and throughout Olivenhain are adding EV chargers at a rapid pace. Wheyland Electric understands the unique wiring considerations of older Leucadia cottages as well as the modern construction in New your area. We pull your area permits, coordinate inspections, and make sure your charger is installed to code and optimized for your driving habits.',
      'rancho-santa-fe':
        'your area properties often feature longer driveway runs and detached garages that require careful circuit planning for EV charger placement. Wheyland Electric has extensive experience running conduit across estate-scale properties in The Covenant, Fairbanks Ranch, and Cielo. We work discreetly, respect your landscaping, and ensure every installation meets the high standards this community expects.',
      'san-marcos':
        'your area residents in San Elijo Hills, Lake your area, and the newer developments near Twin Oaks Valley are adding Level 2 chargers to keep pace with California EV adoption. Wheyland Electric provides straightforward pricing and handles the City of your area permitting process from start to finish. We evaluate your panel, install the dedicated circuit, and make sure everything passes inspection.',
      'del-mar':
        'your area homeowners expect precision and professionalism, and Wheyland Electric delivers both when installing EV chargers in this coastal community. From your area Heights garages to the village properties with tighter access, we plan each installation around your home layout and electrical capacity. Our team handles city permits and coordinates with your area HOA requirements where applicable.',
      'solana-beach':
        'your area is a compact, walkable community — but most residents still rely on a car for commuting. Adding a Level 2 EV charger at home makes daily charging effortless. Wheyland Electric serves your area from just up the road in your area. We know the local building department, pull the right permits, and complete installations efficiently so you can start charging the same day.',
      ['ocean' + 'side']:
        'your area is one of the largest and fastest-growing cities in North County, and EV adoption is rising across every neighborhood from downtown to Rancho Del Oro and Arrowood. Wheyland Electric provides EV charger installation for single-family homes, townhomes, and multi-unit properties throughout your area. We handle the City of your area permit process and ensure your installation meets all current code requirements.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'EV Charger Installation in your area — Permitted, Local, Same-Day Scheduling',
      ['enc' + 'initas']: 'EV Charger Installation in your area — From Leucadia to Olivenhain',
      'rancho-santa-fe': 'EV Charger Installation in your area — Estate-Scale Circuit Work',
      'san-marcos': 'EV Charger Installation in your area — San Elijo Hills to Twin Oaks Valley',
      'del-mar': 'EV Charger Installation in your area — Coastal Precision, Full Permit Handling',
      'solana-beach': 'EV Charger Installation in your area — Fast Scheduling From your area',
      ['ocean' + 'side']:
        'EV Charger Installation in your area — Serving All Neighborhoods, All ZIP Codes',
    },
    whenToCallSigns: [
      'You purchased or leased an electric vehicle and rely on slow Level 1 outlet charging',
      'Your daily commute distance exceeds what Level 1 charging restores overnight',
      'You want to take advantage of SDG&E off-peak electricity rates for overnight charging',
      'You are buying a home and want EV charging ready at move-in',
      'Your workplace does not offer EV charging and you need a reliable home solution',
      'You are adding a second EV to your household',
      'Your HOA or property manager is planning community EV charger infrastructure',
      'You want a dedicated 240V circuit instead of sharing outlets with other appliances',
    ],
  },

  // 2. Electrical Panel Upgrades
  {
    slug: 'electrical-panel-upgrades',
    category: 'residential',
    name: 'Electrical Panel Upgrades',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'electrical panel upgrade',
    secondaryKeywords: [
      'breaker panel replacement',
      '200 amp panel upgrade',
      'main electrical panel replacement',
      'sub-panel installation',
      'electrical panel upgrade cost',
      'fuse box replacement',
    ],
    shortDesc:
      'Electrical panel upgrades and replacements for homes and businesses in North County San Diego. From 100-amp to 200-amp conversions to sub-panel installations, we handle permitting through final inspection.',
    includedBullets: [
      'Comprehensive electrical load calculation',
      'Panel sizing recommendation (100A, 200A, 320A, or 400A)',
      'Permit procurement and utility coordination',
      'Panel installation with code-compliant breakers',
      'Labeling of all circuits per NEC requirements',
      'City inspection scheduling and attendance',
      'Whole-home surge protection recommendation',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Evaluation & Load Calculation',
        description:
          'We inspect your current panel, perform a load calculation, and identify the right panel size for your current and future electrical needs.',
      },
      {
        step: 2,
        title: 'Proposal & Coordination',
        description:
          'You receive a detailed written quote. After approval, we pull permits and coordinate the temporary power shutoff with SDG&E.',
      },
      {
        step: 3,
        title: 'Panel Installation',
        description:
          'Our electricians remove the old panel, install the new one, transfer and label all circuits, and restore power. Most upgrades are completed in one day.',
      },
      {
        step: 4,
        title: 'Inspection & Closeout',
        description:
          'We schedule the city inspection, verify everything passes, and provide you with a clean panel schedule and documentation for your records.',
      },
    ],
    pricingFactors: [
      'Current panel amperage and condition',
      'Target panel size (200A, 320A, 400A)',
      'Whether SDG&E meter/riser work is required',
      'Number of circuits to transfer or add',
      'Sub-panel installation if applicable',
      'Permit and inspection fees by jurisdiction',
    ],
    faqs: [
      {
        question: 'How do I know if I need a panel upgrade?',
        answer:
          'Common signs include frequently tripping breakers, a panel that still uses fuses instead of breakers, a 100-amp panel in a home with modern appliances, or plans to add an EV charger, spa, or ADU. If your panel is more than 30 years old, an evaluation is a good idea.',
      },
      {
        question: 'How long does a panel upgrade take?',
        answer:
          'Most residential panel upgrades — including a 100-amp to 200-amp conversion — are completed in a single day, typically 6 to 8 hours. Larger commercial panels or situations requiring SDG&E coordination may take longer.',
      },
      {
        question: 'Will I lose power during the panel upgrade?',
        answer:
          'Yes, power will be off for a portion of the day while we swap the panel. We coordinate the outage to minimize inconvenience and restore power as quickly as possible, typically within a few hours.',
      },
      {
        question: 'What size panel do I need?',
        answer:
          'Most modern single-family homes in San Diego County are well served by a 200-amp panel. Larger homes with pools, spas, EV chargers, and ADUs may benefit from 320-amp or 400-amp service. We perform a load calculation to give you a precise recommendation.',
      },
      {
        question: 'Do you replace Federal Pacific or Zinsco panels?',
        answer:
          'Absolutely. Federal Pacific Stab-Lok and Zinsco panels are widely considered safety hazards due to breakers that may fail to trip during an overload. We strongly recommend replacing these panels and can provide a detailed assessment.',
      },
      {
        question: 'Is a permit required for a panel upgrade?',
        answer:
          'Yes. Panel upgrades require an electrical permit in all San Diego County jurisdictions. We handle the permit application, schedule the inspection, and ensure the work passes on the first visit.',
      },
    ],
    relatedServices: [
      'ev-charger-installation',
      'service-calls-troubleshooting',
      'recessed-lighting-installation',
    ],
    subtopics: [
      '200-amp panel upgrade',
      'Sub-panel installation',
      'Federal Pacific panel replacement',
      'Zinsco panel replacement',
      'Meter and riser upgrades',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Many your area homes built in the 1970s through 1990s still operate on 100-amp panels that struggle to keep up with modern electrical demands. Wheyland Electric has upgraded hundreds of panels across your area neighborhoods including La Costa, Calavera Hills, and the Village area. We coordinate directly with the City of your area building department and SDG&E to make the process seamless.',
      ['enc' + 'initas']:
        'Older homes in Leucadia, Cardiff-by-the-Sea, and Old your area frequently have undersized or aging panels that need upgrading — especially when homeowners add EV chargers, mini-split systems, or ADUs. Wheyland Electric navigates the City of your area permitting process and handles SDG&E coordination so you get a safe, code-compliant panel with minimal disruption.',
      'rancho-santa-fe':
        'your area estates often have complex electrical systems with multiple sub-panels, pool equipment, landscape lighting transformers, and high-demand appliances. Wheyland Electric specializes in panel upgrades that accommodate these extensive loads. We perform thorough load calculations and work with your area Association requirements to ensure every detail is addressed.',
      'san-marcos':
        'your area homes across Lake your area, San Elijo Hills, and Twin Oaks Valley span several decades of construction standards. Whether your home has a 100-amp panel from the 1980s or a builder-grade panel from a 2005 tract development, Wheyland Electric can evaluate your capacity and upgrade to meet today and tomorrow requirements — EV chargers, home offices, and more.',
      'del-mar':
        'your area properties range from mid-century beach homes to contemporary custom builds, and each has distinct panel requirements. Wheyland Electric has upgraded panels throughout your area Heights and the village, working within the city tight permitting timelines and coordinating with SDG&E for meter and riser work when needed.',
      'solana-beach':
        'Many your area homes in the Lomas Santa Fe and Eden Gardens neighborhoods were built with 100-amp panels that cannot support today electrical loads. Adding an EV charger, spa, or even a modern kitchen remodel often requires a panel upgrade first. Wheyland Electric handles the entire process from load calculation through city inspection.',
      ['ocean' + 'side']:
        'your area diverse housing stock — from 1950s-era homes near the coast to new construction in Arrowood — means panel needs vary widely. Wheyland Electric performs panel upgrades across your area, from straightforward 200-amp replacements to complex multi-meter commercial setups. We work with the City of your area permitting office and keep the process on schedule.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Electrical Panel Upgrades in your area — Serving La Costa to the Village Since 2008',
      ['enc' + 'initas']:
        'Electrical Panel Upgrades in your area — Leucadia, Cardiff, Olivenhain & Beyond',
      'rancho-santa-fe':
        'Electrical Panel Upgrades in your area — Estate-Grade Panel Work, Permitted',
      'san-marcos': 'Electrical Panel Upgrades in your area — 100A to 200A, Same-Day Assessment',
      'del-mar':
        'Electrical Panel Upgrades in your area — Code-Compliant Work for Coastal Properties',
      'solana-beach': 'Electrical Panel Upgrades in your area — Licensed, SDG&E Coordinated',
      ['ocean' + 'side']:
        'Electrical Panel Upgrades in your area — From Vintage Beach Homes to New Construction',
    },
    whenToCallSigns: [
      'Your circuit breakers trip frequently under normal household use',
      'You are adding a major appliance such as an EV charger, hot tub, or HVAC system',
      'Your home was built before 1990 and still has the original 100-amp panel',
      'You have a Federal Pacific, Zinsco, or Pushmatic panel identified as a fire risk',
      'Your homeowner insurance is flagging your panel during renewal or a home sale',
      'You are planning a kitchen remodel, ADU, or room addition that requires more electrical capacity',
      'You hear buzzing or smell something burning near the electrical panel',
      'You are running extension cords because you do not have enough outlets',
      'Your lights dim noticeably when large appliances start up',
    ],
  },

  // 3. Service Calls & Troubleshooting
  {
    slug: 'service-calls-troubleshooting',
    category: 'residential',
    name: 'Service Calls & Troubleshooting',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'electrical service call',
    secondaryKeywords: [
      'electrical troubleshooting',
      'emergency electrician near me',
      'circuit breaker tripping',
      'electrical repair service',
      'power outage electrician',
      'flickering lights repair',
    ],
    shortDesc:
      'Fast, reliable electrical service calls and troubleshooting for homes and businesses in North County San Diego. We diagnose the root cause, explain your options clearly, and fix the problem right.',
    includedBullets: [
      'Thorough diagnostic evaluation of the reported issue',
      'Circuit testing with professional-grade meters',
      'Clear explanation of findings before any repair work',
      'Code-compliant repair using quality materials',
      'Testing and verification after repair completion',
      'Written summary of work performed',
      'One-year labor warranty on all repairs',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Schedule & Arrival',
        description:
          'Call us to describe the issue. We schedule a service window, confirm ahead of arrival, and show up on time in a marked company vehicle.',
      },
      {
        step: 2,
        title: 'Diagnose',
        description:
          'Our electrician performs a systematic diagnosis — testing circuits, connections, and components — to identify the root cause rather than just the symptom.',
      },
      {
        step: 3,
        title: 'Explain & Approve',
        description:
          'We explain what we found, present your repair options with transparent pricing, and get your approval before proceeding with any work.',
      },
      {
        step: 4,
        title: 'Repair & Verify',
        description:
          'We complete the repair, test the system to confirm the issue is resolved, and clean up the work area before leaving.',
      },
    ],
    pricingFactors: [
      'Complexity of the diagnostic (single circuit vs. whole-house)',
      'Parts and materials required for the repair',
      'Accessibility of the affected wiring or components',
      'Time of service (standard business hours vs. after-hours)',
      'Whether permit or inspection is required for the repair',
    ],
    faqs: [
      {
        question: 'How quickly can you respond to an electrical service call?',
        answer:
          'We schedule most service calls within 1 to 2 business days. For urgent situations — such as a total loss of power, burning smell, or sparking — we prioritize same-day or next-day response.',
      },
      {
        question: 'How much does an electrical service call cost?',
        answer:
          'We charge a diagnostic fee to come out, evaluate the issue, and provide a repair quote. If you approve the repair, the diagnostic fee is typically applied toward the total cost. We always explain pricing before starting any work.',
      },
      {
        question: 'Why do my circuit breakers keep tripping?',
        answer:
          'Repeated tripping usually indicates an overloaded circuit, a short circuit, a ground fault, or a failing breaker. Our diagnostic process identifies the specific cause so we can recommend the right fix — whether that is redistributing loads, replacing a breaker, or repairing faulty wiring.',
      },
      {
        question: 'What should I do if I smell burning near an outlet or panel?',
        answer:
          'Turn off the breaker for that circuit immediately. If you cannot identify the circuit, turn off the main breaker. Do not use the outlet or panel until a licensed electrician has inspected and cleared it. Call us for a priority service call.',
      },
      {
        question: 'Can you troubleshoot issues in older homes?',
        answer:
          'Yes. We regularly work in homes with older wiring systems, including knob-and-tube, cloth-wrapped wiring, and aluminum branch circuits. We diagnose the issue and recommend the safest, most cost-effective repair approach.',
      },
      {
        question: 'Do you offer after-hours or weekend service calls?',
        answer:
          'We primarily operate Monday through Friday, 8 AM to 7 PM. For genuine electrical emergencies, we do our best to accommodate urgent requests outside normal hours. Call our office and we will advise you on next steps.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'outlet-switch-dimmer-gfci-repairs',
      'recessed-lighting-installation',
    ],
    subtopics: [
      'Circuit breaker troubleshooting',
      'Flickering lights diagnosis',
      'Partial power loss repair',
      'Aluminum wiring evaluation',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'When something goes wrong with the electrical system in your your area home, you want an electrician who shows up on time, finds the real problem, and fixes it right. Wheyland Electric is based right here in your area and responds quickly to service calls across every neighborhood — from Barrio to Aviara. We carry the parts and experience to handle most common issues in a single visit.',
      ['enc' + 'initas']:
        'your area homes range from vintage beach bungalows in Leucadia to modern builds in New your area, and each presents different electrical troubleshooting challenges. Wheyland Electric has the diagnostic experience to trace problems through older wiring systems and newer smart-panel setups alike. We serve your area homeowners with honest assessments and reliable repairs.',
      'rancho-santa-fe':
        'Electrical issues in your area properties can be particularly complex due to the scale of these homes — multiple sub-panels, extensive landscape lighting circuits, and dedicated equipment feeds. Wheyland Electric brings the diagnostic expertise to trace problems methodically and resolve them completely, maintaining the reliability your property demands.',
      'san-marcos':
        'your area homeowners call Wheyland Electric when they need a dependable electrician who will actually diagnose the problem instead of guessing. From flickering lights in Lake your area homes to tripping breakers in San Elijo Hills, we arrive prepared, explain what we find, and fix it at a fair price.',
      'del-mar':
        'Salt air and coastal humidity can accelerate electrical issues in your area homes, from corroded connections to degraded outdoor wiring. Wheyland Electric understands the environmental factors that affect electrical systems in this coastal community and brings targeted diagnostic skills to every service call.',
      'solana-beach':
        'your area residents count on Wheyland Electric for prompt, professional electrical troubleshooting. Whether your home is near the Cedros Design District or up in Lomas Santa Fe, our team arrives with the tools and knowledge to identify the problem, explain your options, and get your electrical system back to normal.',
      ['ocean' + 'side']:
        'your area covers a lot of ground and a wide range of home styles, from the older pier-area houses to brand-new construction in the eastern neighborhoods. Wheyland Electric provides electrical service calls throughout your area with the same thorough diagnostic approach and transparent communication no matter where you are in the city.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']: 'Electrical Service Calls in your area — Prompt Diagnosis, Honest Answers',
      ['enc' + 'initas']:
        'Electrical Troubleshooting in your area — Same-Day Service, Root-Cause Diagnosis',
      'rancho-santa-fe': 'Electrical Service Calls in your area — Discreet, Professional, Thorough',
      'san-marcos': 'Electrical Troubleshooting in your area — Honest Diagnosis, No Upselling',
      'del-mar': 'Electrical Service Calls in your area — Coastal Home Specialists, Licensed',
      'solana-beach':
        'Electrical Service Calls in your area — Fast Response From Local your area Crew',
      ['ocean' + 'side']:
        'Electrical Troubleshooting in your area — Serving All ZIP Codes, Prompt Response',
    },
    whenToCallSigns: [
      'Outlets or switches feel warm to the touch when nothing is plugged in',
      'You see sparks when plugging in a device',
      'Circuit breakers trip repeatedly even after being reset',
      'Lights flicker or dim without any apparent reason',
      'You smell burning plastic or see discolored outlet covers',
      'Part of your home has lost power unexpectedly',
      'Your GFCI outlets in the kitchen or bathroom will not reset',
      'You hear buzzing or humming from walls, panels, or fixtures',
      'A storm, flooding, or water intrusion event may have affected your wiring',
    ],
  },

  // 4. Recessed Lighting Installation
  {
    slug: 'recessed-lighting-installation',
    category: 'residential',
    name: 'Recessed Lighting Installation',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'recessed lighting installation',
    secondaryKeywords: [
      'can light installation',
      'LED recessed light install',
      'recessed lighting electrician',
      'wafer light installation',
      'recessed lighting layout design',
      'retrofit recessed lighting',
    ],
    shortDesc:
      'Expert recessed lighting installation for homes and businesses in North County San Diego. We help you plan the layout, select the right fixtures, and install everything to code.',
    includedBullets: [
      'Lighting layout consultation and design',
      'Fixture selection guidance (trim style, color temperature, IC rating)',
      'New-construction or retrofit installation',
      'Dimmer switch installation and programming',
      'Attic access and insulation-safe installation',
      'Post-install cleanup and fixture adjustment',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Layout Consultation',
        description:
          'We walk the space with you, discuss your lighting goals, and plan the optimal fixture count, spacing, and placement for even, functional illumination.',
      },
      {
        step: 2,
        title: 'Fixture & Dimmer Selection',
        description:
          'We recommend fixture types (IC-rated, wafer, standard can), trim styles, and color temperatures based on the room function and your aesthetic preferences.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Our electricians cut openings, run wiring from the switch to each fixture location, install the housing and trim, and connect dimmers as specified.',
      },
      {
        step: 4,
        title: 'Testing & Adjustment',
        description:
          'We test every fixture, verify dimmer operation, adjust any directional trims, and clean up all work areas including attic insulation displacement.',
      },
    ],
    pricingFactors: [
      'Number of fixtures to install',
      'New construction vs. retrofit (existing ceiling)',
      'Attic accessibility and insulation conditions',
      'Wiring distance from switch to fixture locations',
      'Dimmer switch type (basic, smart, multi-zone)',
      'Fixture quality and trim selection',
    ],
    faqs: [
      {
        question: 'How many recessed lights do I need in a room?',
        answer:
          'As a general guideline, we space recessed lights at half the ceiling height — so an 8-foot ceiling would have fixtures roughly 4 feet apart. The exact number depends on room size, layout, ceiling height, and how you use the space. We plan this during the consultation.',
      },
      {
        question: 'What is the difference between can lights and wafer lights?',
        answer:
          'Traditional can lights use a metal housing recessed into the ceiling cavity. Wafer (or slim-profile) lights are ultra-thin LED discs that mount flush to the ceiling with a small junction box above. Wafers are ideal for spaces with limited clearance or no attic access.',
      },
      {
        question: 'Can you install recessed lights without attic access?',
        answer:
          'Yes. We use retrofit or wafer-style fixtures that can be installed from below the ceiling. These are specifically designed for existing ceilings where attic access is limited or unavailable.',
      },
      {
        question: 'What color temperature should I choose?',
        answer:
          'For most residential applications, 2700K (warm white) creates a comfortable ambiance in living areas and bedrooms. 3000K (soft white) works well in kitchens and bathrooms. 4000K (neutral white) is popular in garages, laundry rooms, and commercial spaces. We can discuss options during the consultation.',
      },
      {
        question: 'Do recessed lights need to be on a dimmer?',
        answer:
          'They do not have to be, but we strongly recommend it. Dimmers extend LED life, reduce energy usage, and give you control over ambiance. Make sure to use an LED-compatible dimmer to avoid flickering.',
      },
      {
        question: 'Can you add recessed lights to a room that already has a ceiling fixture?',
        answer:
          'Absolutely. We can replace a central fixture with recessed lights, or add recessed lighting around an existing chandelier or fan. We rewire the switching as needed to control each zone independently.',
      },
    ],
    relatedServices: [
      'light-fixture-installation',
      'ceiling-fan-installation',
      'service-calls-troubleshooting',
    ],
    subtopics: [
      'Kitchen recessed lighting',
      'Living room recessed lighting layout',
      'Wafer light vs. can light installation',
      'Retrofit recessed lighting in existing homes',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Recessed lighting is one of the most popular upgrades in your area homes, and Wheyland Electric has installed thousands of fixtures across neighborhoods from La Costa to the Village. We design layouts that complement the natural light San Diego is known for while providing even illumination after sunset. Our team works cleanly, respects your home, and makes sure every fixture is perfectly aligned.',
      ['enc' + 'initas']:
        'Whether you are updating a Leucadia bungalow with modern wafer lights or adding a complete recessed layout to a New your area kitchen remodel, Wheyland Electric brings the design eye and technical skill to get it right. We work with your contractor or directly with you to plan spacing, select color temperatures, and install everything with clean, professional results.',
      'rancho-santa-fe':
        'your area homes often feature vaulted ceilings, custom millwork, and architectural details that require thoughtful lighting design. Wheyland Electric plans recessed lighting layouts that enhance these features without overpowering them — placing fixtures for even wash, accent, and task illumination throughout the home.',
      'san-marcos':
        'your area homeowners frequently add recessed lighting during kitchen and living room renovations. Wheyland Electric provides the complete service — layout planning, fixture selection, installation, and dimmer setup — for homes throughout Lake your area, San Elijo Hills, and Discovery Hills. We keep the process straightforward and the results outstanding.',
      'del-mar':
        'Recessed lighting installations in your area homes need to account for ocean-view sight lines and architectural character. Wheyland Electric takes care to position fixtures so they light the room evenly without creating glare against windows or competing with the coastal views that make your area properties special.',
      'solana-beach':
        'your area homeowners looking to brighten up their kitchens, living rooms, and outdoor entertaining areas turn to Wheyland Electric for clean, professional recessed lighting installations. We handle everything from layout design through dimmer programming and leave your home looking better than we found it.',
      ['ocean' + 'side']:
        'Recessed lighting transforms a room, and your area homeowners across Fire Mountain, South O, and Rancho Del Oro are upgrading in record numbers. Wheyland Electric installs both new-construction and retrofit recessed lighting throughout your area, helping each homeowner choose the right fixture count, spacing, and color temperature for their space.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Recessed Lighting Installation in your area — LED Layouts From La Costa to the Village',
      ['enc' + 'initas']:
        'Recessed Lighting Installation in your area — Modern Fixtures for Coastal Homes',
      'rancho-santa-fe':
        'Recessed Lighting Installation in your area — Estate Lighting, Precision Install',
      'san-marcos':
        'Recessed Lighting Installation in your area — Clean, Even Light, Licensed Electricians',
      'del-mar':
        'Recessed Lighting Installation in your area — Trim Selection, Layout Design, Full Install',
      'solana-beach': 'Recessed Lighting Installation in your area — LED Retrofits & New Installs',
      ['ocean' + 'side']:
        'Recessed Lighting Installation in your area — From Beach Cottages to New Construction',
    },
    whenToCallSigns: [
      'Your rooms feel dark even with ceiling fixtures on',
      'You want clean, modern lighting without visible fixture bodies or dangling pendants',
      'You are remodeling a kitchen, bathroom, hallway, or living area',
      'Your current can lights are old, inefficient incandescents or non-LED fixtures',
      'You want adjustable task lighting over counters, desks, or reading areas',
      'Your ceilings are low and pendant or chandelier fixtures hang too close',
      'You are setting up a home office and need even, glare-free illumination',
    ],
  },

  // 5. Light Fixture Installation
  {
    slug: 'light-fixture-installation',
    category: 'residential',
    name: 'Light Fixture Installation',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'light fixture installation',
    secondaryKeywords: [
      'chandelier installation electrician',
      'pendant light installation',
      'LED light fixture install',
      'outdoor light installation',
      'commercial lighting installation',
      'landscape lighting electrician',
    ],
    shortDesc:
      'Professional light fixture installation for every application — chandeliers, pendants, sconces, outdoor lighting, and commercial fixtures. Serving North County San Diego homes and businesses.',
    includedBullets: [
      'Safe removal and disposal of existing fixtures',
      'Junction box inspection and upgrade if needed',
      'Fixture assembly and secure mounting',
      'Wiring connections to NEC standards',
      'Switch and dimmer compatibility verification',
      'Post-install testing and alignment',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Review & Preparation',
        description:
          'We review the fixture, confirm the junction box and wiring can support it, and assess whether any structural reinforcement or electrical updates are needed.',
      },
      {
        step: 2,
        title: 'Removal of Existing Fixture',
        description:
          'We safely disconnect and remove the old fixture, inspect the wiring and box, and make any necessary upgrades before mounting the new one.',
      },
      {
        step: 3,
        title: 'Installation & Wiring',
        description:
          'We assemble, mount, and wire the new fixture according to manufacturer instructions and NEC requirements. Heavy fixtures get rated support brackets.',
      },
      {
        step: 4,
        title: 'Testing & Cleanup',
        description:
          'We test the fixture on all switch and dimmer settings, verify secure mounting, and clean up all packaging and debris.',
      },
    ],
    pricingFactors: [
      'Number of fixtures to install',
      'Fixture type and complexity (chandelier vs. sconce vs. pendant)',
      'Ceiling height and accessibility',
      'Whether new wiring or a junction box upgrade is needed',
      'Outdoor vs. indoor installation requirements',
    ],
    faqs: [
      {
        question: 'Can I buy my own fixtures and have you install them?',
        answer:
          'Absolutely. Most of our customers purchase their own fixtures from retailers or online. We install customer-supplied fixtures every day. Just make sure the fixture is rated for the intended location (e.g., damp-rated for outdoor use).',
      },
      {
        question: 'Do I need an electrician to install a light fixture?',
        answer:
          'While simple fixture swaps may seem straightforward, a licensed electrician ensures the junction box can support the weight, the wiring is safe and code-compliant, and the fixture is properly grounded. This is especially important for heavier fixtures like chandeliers and ceiling fans.',
      },
      {
        question: 'How much does it cost to install a light fixture?',
        answer:
          'Costs vary depending on the fixture type, ceiling height, and whether new wiring is needed. A straightforward swap of a standard fixture is the most affordable option. Chandeliers, high-ceiling installations, and new-wire runs cost more. We provide a clear quote before starting.',
      },
      {
        question: 'Can you install a fixture where there is no existing wiring?',
        answer:
          'Yes. We can run new wiring to add a fixture in a location that does not currently have one. This involves routing wire through the attic or wall cavity and installing a new junction box and switch.',
      },
      {
        question: 'Do you install outdoor and landscape lighting?',
        answer:
          'Yes. We install exterior wall sconces, post lights, pathway lighting, and security lighting. Outdoor fixtures must be rated for wet or damp locations, and we ensure all outdoor wiring is properly protected and grounded.',
      },
      {
        question: 'Can you hang a heavy chandelier from my ceiling?',
        answer:
          'Yes. Heavy chandeliers require a fan-rated or appropriately rated junction box with structural support. If your existing box is not rated for the weight, we install a brace and rated box before mounting the fixture.',
      },
    ],
    relatedServices: [
      'recessed-lighting-installation',
      'ceiling-fan-installation',
      'service-calls-troubleshooting',
    ],
    subtopics: [
      'Chandelier and pendant installation',
      'Outdoor and security lighting',
      'LED retrofit and conversion',
      'Commercial fixture installation',
      'Smart lighting control systems',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'From the craftsman homes of Olde your area to the contemporary builds in Bressi Ranch, Wheyland Electric installs light fixtures that complement every style. Whether you have ordered a statement chandelier for your foyer or need outdoor sconces along a walkway, our team handles the installation with care and precision. We are based in your area and treat every home like our neighbor — because many of them are.',
      ['enc' + 'initas']:
        'your area homeowners have a flair for distinctive design, and the right light fixture makes all the difference. Wheyland Electric installs everything from hand-blown glass pendants in Olivenhain kitchens to salt-air-resistant outdoor fixtures along the 101 corridor. We make sure your fixtures are secure, wired correctly, and looking exactly how you envisioned.',
      'rancho-santa-fe':
        'Fixture installations in your area often involve designer chandeliers, multi-arm pendants, and custom sconces selected by interior designers. Wheyland Electric works seamlessly with your design team or directly with you to install fixtures of any size and complexity. We bring the right equipment for high ceilings and oversized fixtures and treat your home with the respect it deserves.',
      'san-marcos':
        'Whether you are refreshing the lighting throughout your your area home or installing new fixtures as part of a kitchen or bathroom remodel, Wheyland Electric makes the process simple. We install all types of fixtures — flush mounts, pendants, vanity lights, and outdoor sconces — across Lake your area, San Elijo Hills, and every your area neighborhood.',
      'del-mar':
        'Light fixture upgrades are one of the fastest ways to elevate a your area home interior. Wheyland Electric installs fixtures of every type and size, from sleek modern pendants in your area Heights kitchens to statement chandeliers in village-area dining rooms. Our electricians handle high ceilings, heavy fixtures, and complex wiring with equal confidence.',
      'solana-beach':
        'your area homes deserve lighting that reflects the character of this creative coastal community. Wheyland Electric installs fixtures sourced from the Cedros Design District shops and from anywhere else you choose — online retailers, showrooms, or your designer. We bring the electrical expertise to mount, wire, and test every fixture safely.',
      ['ocean' + 'side']:
        'Across your area — from the renovated downtown lofts to the family homes in Rancho Del Oro — Wheyland Electric provides professional light fixture installation services. We install everything from simple flush mounts and bathroom vanity lights to large outdoor fixtures and commercial lighting. Every installation includes junction box verification and a clean, code-compliant result.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Light Fixture Installation in your area — Chandeliers, Pendants & Outdoor Fixtures',
      ['enc' + 'initas']:
        'Light Fixture Installation in your area — Coastal Style, Code-Compliant Wiring',
      'rancho-santa-fe':
        'Light Fixture Installation in your area — Statement Fixtures, Flawless Execution',
      'san-marcos':
        'Light Fixture Installation in your area — Any Fixture, Any Room, Licensed Install',
      'del-mar':
        'Light Fixture Installation in your area — Luxury Fixtures, Coastal-Grade Connections',
      'solana-beach':
        'Light Fixture Installation in your area — Pendants, Sconces & Outdoor Lights',
      ['ocean' + 'side']:
        'Light Fixture Installation in your area — Fast, Clean, Code-Compliant Installs',
    },
    whenToCallSigns: [
      'You are hanging a heavy chandelier (30 lbs or more requires a fan-rated or fixture support box)',
      'The wiring on your new fixture does not match what is in your ceiling junction box',
      'You need a new or upgraded electrical box to support the fixture weight or style',
      'You are installing outdoor fixtures that require weatherproof connections and boxes',
      'You are converting a room from a switch-controlled outlet to a ceiling fixture with a dimmer',
      'You want multiple fixtures on a new circuit rather than using the existing switch',
      'Your existing fixtures are flickering, buzzing, or burning out bulbs prematurely',
    ],
  },

  // 6. Ceiling Fan Installation
  {
    slug: 'ceiling-fan-installation',
    category: 'residential',
    name: 'Ceiling Fan Installation',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'ceiling fan installation',
    secondaryKeywords: [
      'ceiling fan electrician',
      'ceiling fan replacement',
      'outdoor ceiling fan installation',
      'ceiling fan with light install',
      'fan-rated box installation',
      'ceiling fan remote setup',
    ],
    shortDesc:
      'Ceiling fan installation and replacement by licensed electricians serving North County San Diego. We ensure proper support, wiring, and balancing for safe, reliable operation.',
    includedBullets: [
      'Fan-rated junction box installation or verification',
      'Old fixture removal and disposal',
      'Fan assembly and secure ceiling mounting',
      'Wiring for fan, light kit, and remote receiver',
      'Blade balancing and wobble check',
      'Remote or wall control programming',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Assessment',
        description:
          'We verify ceiling structure, junction box rating, and wiring to confirm the location can support a fan. If upgrades are needed, we identify them before starting.',
      },
      {
        step: 2,
        title: 'Box & Bracket Upgrade',
        description:
          'If the existing junction box is not fan-rated, we install a fan-rated brace and box to safely support the weight and vibration of a ceiling fan.',
      },
      {
        step: 3,
        title: 'Fan Installation',
        description:
          'We assemble the fan, mount it to the bracket, wire the motor, light kit, and remote receiver, and attach the blades per manufacturer specifications.',
      },
      {
        step: 4,
        title: 'Testing & Balancing',
        description:
          'We test all speeds, light functions, and remote operation. We check for wobble and balance the blades if needed, then clean up all packaging.',
      },
    ],
    pricingFactors: [
      'Whether a fan-rated junction box needs to be installed',
      'Ceiling height and type (flat, sloped, vaulted)',
      'Whether new wiring is required for the location',
      'Fan complexity (remote, light kit, smart controls)',
      'Outdoor vs. indoor installation (damp rating)',
    ],
    faqs: [
      {
        question: 'Can I install a ceiling fan where I currently have a light fixture?',
        answer:
          'In most cases, yes. However, the existing junction box must be fan-rated to support the weight and vibration of a ceiling fan. If it is not, we install a fan-rated brace and box as part of the installation.',
      },
      {
        question: 'Can you install a fan on a vaulted or sloped ceiling?',
        answer:
          'Yes. Most ceiling fans come with an angled mounting adapter for sloped ceilings. We ensure the fan hangs correctly and operates smoothly regardless of ceiling pitch.',
      },
      {
        question: 'How long does a ceiling fan installation take?',
        answer:
          'A straightforward replacement takes about 1 to 2 hours. If we need to install a fan-rated box, run new wiring, or work with a high or vaulted ceiling, it may take 2 to 3 hours.',
      },
      {
        question: 'Do you install outdoor ceiling fans?',
        answer:
          'Yes. We install damp-rated and wet-rated fans on covered patios, pergolas, and outdoor living areas. These fans are designed to withstand moisture and are ideal for San Diego outdoor entertaining spaces.',
      },
      {
        question: 'Why does my ceiling fan wobble?',
        answer:
          'Fan wobble is usually caused by unbalanced blades, a loose mounting bracket, or an improper junction box. We check and correct all three during installation. If your existing fan wobbles, we can diagnose and fix it during a service call.',
      },
      {
        question: 'Can I supply my own fan for installation?',
        answer:
          'Absolutely. Most of our ceiling fan installations use customer-purchased fans. We install all major brands. Just make sure the fan is rated for the intended location if you plan to install it outdoors.',
      },
    ],
    relatedServices: [
      'light-fixture-installation',
      'recessed-lighting-installation',
      'service-calls-troubleshooting',
    ],
    subtopics: [
      'Outdoor ceiling fan installation',
      'Ceiling fan with light kit wiring',
      'Fan-rated junction box upgrade',
      'Smart ceiling fan control setup',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Ceiling fans are a natural fit for your area living, especially on covered patios and in bedrooms where a breeze supplements the mild coastal climate. Wheyland Electric installs fans throughout your area, ensuring every installation starts with a fan-rated box and ends with balanced blades and properly configured controls.',
      ['enc' + 'initas']:
        'From Olivenhain great rooms with soaring ceilings to cozy Leucadia bedrooms, Wheyland Electric provides professional ceiling fan installation across your area. We handle sloped ceilings, high-reach mounting, and outdoor-rated fans for your patio or pergola. Every fan we install is secure, balanced, and wired correctly.',
      'rancho-santa-fe':
        'your area homes often feature high ceilings and expansive covered outdoor areas that benefit from quality ceiling fans. Wheyland Electric installs fans in these challenging locations safely, using proper scaffolding and fan-rated hardware. We work with your designer preferences on placement and controls.',
      'san-marcos':
        'Inland your area temperatures can climb during summer, making ceiling fans a smart addition to any home. Wheyland Electric installs fans in bedrooms, living rooms, and outdoor patios across Lake your area, San Elijo Hills, and surrounding neighborhoods. We make sure the mounting is solid and the fan runs quietly.',
      'del-mar':
        'A well-placed ceiling fan in a your area home can extend the comfort of an ocean breeze and reduce reliance on air conditioning. Wheyland Electric installs indoor and outdoor fans across your area with the attention to detail this community expects — from fan-rated box verification to blade balancing and remote programming.',
      'solana-beach':
        'your area homeowners appreciate the energy savings and comfort that a quality ceiling fan provides. Wheyland Electric handles the full installation — checking the junction box, mounting the fan securely, wiring the remote and light kit, and testing every speed. We serve your area from our nearby your area shop.',
      ['ocean' + 'side']:
        'Ceiling fan installations are one of our most common requests from your area homeowners looking to improve comfort and reduce cooling costs. Whether you are in a downtown condo, a Fire Mountain cottage, or a newer Arrowood home, Wheyland Electric installs your fan safely with a fan-rated box, balanced blades, and professional wiring.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Ceiling Fan Installation in your area — New Install or Replacement, Same-Day Scheduling',
      ['enc' + 'initas']:
        'Ceiling Fan Installation in your area — Indoor & Covered Patio Fan Installs',
      'rancho-santa-fe': 'Ceiling Fan Installation in your area — Statement Fans for Large Spaces',
      'san-marcos':
        'Ceiling Fan Installation in your area — Efficient Fans, Energy Savings, Clean Install',
      'del-mar':
        'Ceiling Fan Installation in your area — Coastal-Rated Fans for Salt-Air Environments',
      'solana-beach':
        'Ceiling Fan Installation in your area — Fast Installs, Outdoor-Rated Options',
      ['ocean' + 'side']:
        'Ceiling Fan Installation in your area — From Harbor Homes to Inland New Construction',
    },
    whenToCallSigns: [
      'Your rooms are stuffy and uncomfortable even when the air conditioner is running',
      'Your energy bills are higher than expected and you want to reduce AC runtime',
      'You want to add a fan where only a ceiling light fixture currently exists',
      'Your current fan wobbles, makes noise, runs slowly on all speeds, or has stopped working',
      'You are finishing a covered patio or pergola and want outdoor-rated airflow',
      'You are converting a spare room and want both a light and a fan on the same switch',
    ],
  },

  // 7. Spa, Jacuzzi & Sauna Electrical
  {
    slug: 'spa-jacuzzi-sauna-electrical',
    category: 'residential',
    name: 'Spa, Jacuzzi & Sauna Electrical',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'spa electrical installation',
    secondaryKeywords: [
      'hot tub electrician',
      'jacuzzi wiring installation',
      'sauna electrical hookup',
      'spa disconnect installation',
      'GFCI spa circuit',
      'pool and spa wiring',
    ],
    shortDesc:
      'Licensed spa, jacuzzi, and sauna electrical installation for North County San Diego homes. Dedicated circuits, GFCI protection, and code-compliant wiring for safe, reliable operation.',
    includedBullets: [
      'Electrical load assessment for spa or sauna equipment',
      'Dedicated 240V circuit installation (40A or 50A)',
      'GFCI breaker installation per NEC requirements',
      'Outdoor disconnect switch within line-of-sight',
      'Conduit and wiring run from panel to equipment',
      'Final connection to manufacturer terminal block',
      'City permit and inspection coordination',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Site Evaluation',
        description:
          'We review the equipment specifications, planned placement, and your electrical panel capacity to determine circuit requirements and conduit routing.',
      },
      {
        step: 2,
        title: 'Permitting & Scheduling',
        description:
          'We pull the electrical permit, coordinate with your spa installer or contractor on timing, and schedule the rough-in and final connection.',
      },
      {
        step: 3,
        title: 'Circuit & Disconnect Installation',
        description:
          'Our electricians install the dedicated GFCI-protected circuit, run conduit to the equipment location, and mount the required disconnect switch.',
      },
      {
        step: 4,
        title: 'Final Connection & Inspection',
        description:
          'Once the spa or sauna is in place, we make the final wiring connection, test the circuit, and schedule the city inspection.',
      },
      {
        step: 5,
        title: 'Verification & Walkthrough',
        description:
          'After passing inspection, we verify equipment operation with you and review the disconnect switch location and GFCI test procedure.',
      },
    ],
    pricingFactors: [
      'Equipment voltage and amperage requirements (40A vs. 50A vs. 60A)',
      'Distance from electrical panel to equipment location',
      'Whether a panel upgrade is needed to support the new load',
      'Conduit routing complexity (trenching, concrete, exterior walls)',
      'Type of equipment (hot tub, swim spa, sauna, cold plunge)',
      'Permit and inspection fees',
    ],
    faqs: [
      {
        question: 'Do I need a dedicated circuit for a hot tub?',
        answer:
          'Yes. Most hot tubs and spas require a dedicated 240V circuit with a GFCI breaker and a disconnect switch within line-of-sight of the equipment. This is a code requirement, not optional.',
      },
      {
        question: 'How far can the electrical panel be from the spa?',
        answer:
          'There is no maximum distance, but longer runs require larger wire gauge to prevent voltage drop. The disconnect switch must be within line-of-sight and between 5 and 50 feet of the spa. We plan the routing to be efficient and code-compliant.',
      },
      {
        question: 'What size breaker does a spa need?',
        answer:
          'Most residential hot tubs require either a 40-amp or 50-amp 240V GFCI breaker. Larger swim spas may require 60 amps. The exact requirement is listed on the equipment nameplate or in the installation manual. We verify this before starting.',
      },
      {
        question: 'Can you wire a sauna?',
        answer:
          'Yes. We install dedicated circuits for both electric and infrared saunas. Electric saunas with heaters typically require 240V circuits ranging from 30A to 60A depending on the heater size. We handle the full installation from panel to heater terminal.',
      },
      {
        question: 'Do I need a permit for spa electrical work?',
        answer:
          'Yes. A new dedicated circuit installation requires an electrical permit in all San Diego County jurisdictions. We handle the permit application and inspection scheduling.',
      },
      {
        question: 'Can my existing panel handle a spa circuit?',
        answer:
          'It depends on your panel capacity and current electrical load. We perform a load calculation during the site evaluation to determine whether your panel can support the additional draw. If not, we can recommend a panel upgrade or sub-panel as part of the project.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'service-calls-troubleshooting',
      'outlet-switch-dimmer-gfci-repairs',
    ],
    subtopics: [
      'Hot tub electrical hookup',
      'Swim spa wiring installation',
      'Sauna heater circuit',
      'Cold plunge electrical requirements',
      'Outdoor living electrical',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area backyards are made for outdoor living, and adding a spa, jacuzzi, or sauna requires proper electrical work from a licensed professional. Wheyland Electric installs dedicated circuits for hot tubs and saunas across your area — from Aviara estates with pool-and-spa combos to La Costa homes adding their first hot tub. We handle the permit and make sure the installation is safe and inspected.',
      ['enc' + 'initas']:
        'your area homeowners are increasingly adding spas, saunas, and cold plunges to their wellness routines. Wheyland Electric provides the electrical infrastructure these installations require — dedicated GFCI circuits, disconnect switches, and code-compliant wiring. We work throughout your area from Cardiff to Olivenhain and coordinate with your spa contractor for a smooth installation.',
      'rancho-santa-fe':
        'your area properties frequently feature elaborate outdoor living spaces with spas, swim spas, saunas, and heated pools. Wheyland Electric has the experience to handle the higher-amperage circuits and longer conduit runs these estates require. We work with your general contractor or pool builder to deliver electrical that is timed correctly and built to last.',
      'san-marcos':
        'Hot tub and spa installations are popular among your area homeowners, especially in neighborhoods like San Elijo Hills and Lake your area where outdoor entertaining is a way of life. Wheyland Electric provides the dedicated circuit, disconnect, and wiring you need — all permitted and inspected through the City of your area.',
      'del-mar':
        'Adding a spa to a your area home is a natural extension of the relaxed coastal lifestyle. Wheyland Electric ensures the electrical side of the installation is handled professionally — dedicated circuit, GFCI protection, line-of-sight disconnect, and a city inspection to confirm everything is safe and to code.',
      'solana-beach':
        'your area homeowners adding a hot tub, sauna, or outdoor spa rely on Wheyland Electric for the electrical hookup. We install the dedicated 240V circuit, GFCI breaker, and exterior disconnect required by code, and we coordinate with the City of your area for permitting and inspection.',
      ['ocean' + 'side']:
        'Whether you are installing a hot tub behind your your area home or wiring a sauna for your garage gym, Wheyland Electric provides professional spa electrical services throughout the city. We handle everything from the panel to the equipment — dedicated circuit, disconnect switch, conduit run, and city inspection.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Hot Tub & Spa Electrical in your area — 240V Circuits, Permitted, Same-Week Scheduling',
      ['enc' + 'initas']:
        'Spa & Hot Tub Electrical in your area — From Cardiff to Olivenhain, Fully Permitted',
      'rancho-santa-fe': 'Spa & Sauna Electrical in your area — Estate-Grade Outdoor Electrical',
      'san-marcos': 'Hot Tub Electrical in your area — Dedicated 240V Circuit, Permit Included',
      'del-mar':
        'Spa & Hot Tub Electrical in your area — Code-Compliant Circuits for Coastal Luxury',
      'solana-beach': 'Hot Tub & Spa Electrical in your area — Fast Permitting, Local Crew',
      ['ocean' + 'side']:
        'Spa & Hot Tub Electrical in your area — All Neighborhoods, Licensed & Permitted',
    },
    whenToCallSigns: [
      'You are purchasing a hot tub and need a dedicated 240V, 50-amp GFCI-protected circuit installed',
      'Your existing spa circuit is undersized or tripping the breaker under normal load',
      'You are adding a sauna that requires its own dedicated electrical service',
      'You want outdoor lighting, heaters, or audio wired for your spa or patio area',
      'Your pergola or outdoor living structure needs electrical for a planned hot tub setup',
      'You are installing an ice bath, cold plunge, or other spa equipment with electrical requirements',
    ],
  },

  // 8. Outlet, Switch, Dimmer & GFCI Repairs
  {
    slug: 'outlet-switch-dimmer-gfci-repairs',
    category: 'residential',
    name: 'Outlet, Switch, Dimmer & GFCI Repairs',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'outlet and switch repair',
    secondaryKeywords: [
      'GFCI outlet installation',
      'dimmer switch installation',
      'electrical outlet repair',
      'light switch replacement',
      'USB outlet installation',
      'smart switch electrician',
    ],
    shortDesc:
      'Professional outlet, switch, dimmer, and GFCI installation and repair for North County San Diego homes and businesses. Fast, code-compliant work by licensed electricians.',
    includedBullets: [
      'Outlet, switch, or dimmer replacement or new installation',
      'GFCI and AFCI outlet installation where required by code',
      'USB outlet upgrades',
      'Smart switch and dimmer setup and programming',
      'Cover plate replacement and alignment',
      'Circuit testing to confirm proper wiring and grounding',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Identify the Need',
        description:
          'You let us know what outlets, switches, or dimmers need attention. We can also do a walkthrough to identify code deficiencies or recommended upgrades.',
      },
      {
        step: 2,
        title: 'Provide a Quote',
        description:
          'We give you clear pricing for the work before starting — no surprises. For larger projects, we provide a written quote in advance.',
      },
      {
        step: 3,
        title: 'Install or Repair',
        description:
          'Our electricians complete the work efficiently, using commercial-grade devices and ensuring all connections are tight, grounded, and code-compliant.',
      },
      {
        step: 4,
        title: 'Test & Confirm',
        description:
          'We test every device after installation, verify GFCI trip function, confirm dimmer compatibility with your lighting, and leave the work area clean.',
      },
    ],
    pricingFactors: [
      'Number of outlets, switches, or dimmers to install or replace',
      'Device type (standard, GFCI, AFCI, smart, USB)',
      'Whether new wiring or a new box is required',
      'Accessibility of the wiring (open wall vs. finished wall)',
      'Commercial vs. residential specifications',
    ],
    faqs: [
      {
        question: 'Where are GFCI outlets required by code?',
        answer:
          'Current NEC code requires GFCI protection in bathrooms, kitchens (countertop outlets), garages, outdoors, laundry areas, basements, crawl spaces, and within 6 feet of any sink. Older homes may not have GFCI outlets in all required locations.',
      },
      {
        question: 'What is the difference between GFCI and AFCI?',
        answer:
          'GFCI (Ground Fault Circuit Interrupter) protects against electrical shock from ground faults, typically near water. AFCI (Arc Fault Circuit Interrupter) protects against electrical fires caused by arcing in damaged or deteriorated wiring. Both are required in specific locations by current code.',
      },
      {
        question: 'Can you install smart switches and dimmers in my home?',
        answer:
          'Yes. We install and program all major smart switch brands including Lutron Caseta, Leviton Decora Smart, and TP-Link Kasa. We verify that your switch box has a neutral wire (required by most smart switches) and configure the devices with your preferred app or home automation platform.',
      },
      {
        question: 'Why do my outlets feel warm or show discoloration?',
        answer:
          'Warm outlets or discolored cover plates indicate a potentially dangerous issue — loose connections, an overloaded circuit, or failing device. Stop using the outlet immediately and call us for a service call. This should not be ignored.',
      },
      {
        question: 'Can you add an outlet where there is not one currently?',
        answer:
          'Yes. We run new wiring from an existing circuit or the panel to install outlets in new locations. This is common in kitchens, home offices, garages, and outdoor areas where additional outlets are needed.',
      },
      {
        question: 'How often should outlets and switches be replaced?',
        answer:
          'Quality outlets and switches last 15 to 25 years under normal use. If a device feels loose, does not hold a plug securely, sparks, makes noise, or shows scorch marks, it should be replaced promptly. GFCI outlets should be tested monthly.',
      },
    ],
    relatedServices: [
      'service-calls-troubleshooting',
      'electrical-panel-upgrades',
      'recessed-lighting-installation',
    ],
    subtopics: [
      'GFCI outlet installation and testing',
      'Smart switch and dimmer installation',
      'USB outlet upgrades',
      'Outdoor outlet installation',
      'AFCI protection upgrades',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Outlets and switches are the electrical components you interact with every day, and they need to work safely and reliably. Wheyland Electric handles outlet repairs, GFCI installations, dimmer upgrades, and smart switch setups across your area. Whether you need one GFCI outlet in a bathroom or a whole-house switch upgrade, we provide fast, professional service from right here in town.',
      ['enc' + 'initas']:
        'Many older your area homes — particularly in Leucadia and Cardiff — have outdated two-prong outlets, missing GFCI protection, and worn-out switches that should be replaced. Wheyland Electric upgrades these homes to current safety standards with new grounded outlets, GFCI protection in wet areas, and modern dimmer and smart switch options.',
      'rancho-santa-fe':
        'your area homeowners expect electrical devices that work flawlessly and look refined. Wheyland Electric installs premium-grade outlets, decorator-style switches, and whole-house dimming systems from Lutron and Leviton. We work with your designer on finish selections and ensure every device is perfectly aligned and fully functional.',
      'san-marcos':
        'Whether you need a few GFCI outlets added in your your area kitchen, a dimmer switch in the dining room, or USB outlets throughout the house, Wheyland Electric gets it done quickly and correctly. We serve your area homes with the same detail-oriented approach we bring to every job — clean work, tested results, and fair pricing.',
      'del-mar':
        'your area homes benefit from updated outlets and switches that improve both safety and convenience. Wheyland Electric installs GFCI outlets in kitchens and bathrooms, smart dimmers for living areas, and weather-rated outdoor outlets for patios and decks — all with the clean, professional results your area homeowners expect.',
      'solana-beach':
        'your area homeowners looking to modernize their electrical devices trust Wheyland Electric for outlet, switch, and dimmer work. We install GFCI protection where code requires it, upgrade to tamper-resistant outlets for child safety, and add smart switches for convenience and energy savings.',
      ['ocean' + 'side']:
        'From downtown your area condos to Fire Mountain family homes, Wheyland Electric provides outlet and switch services that keep your electrical system safe and up to date. We install GFCI outlets, replace worn switches, add dimmers, and upgrade to USB outlets — fast, affordable, and done right by a licensed electrician.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Outlet & Switch Repairs in your area — GFCI, Dimmers & More, Same-Day Available',
      ['enc' + 'initas']:
        'Outlet & GFCI Repairs in your area — Fast, Honest Service for Coastal Homes',
      'rancho-santa-fe': 'Outlet & Switch Repairs in your area — Precision Work for High-End Homes',
      'san-marcos': 'Outlet, Switch & GFCI Repairs in your area — No Job Too Small',
      'del-mar': 'GFCI & Outlet Repairs in your area — Coastal-Grade Repairs, Properly Permitted',
      'solana-beach':
        'Outlet & Switch Repairs in your area — Fast Response From Local your area Team',
      ['ocean' + 'side']: 'Outlet, Dimmer & GFCI Repairs in your area — Serving All Neighborhoods',
    },
    whenToCallSigns: [
      'Outlets are loose, cracked, discolored, or will not hold plugs securely',
      'You have ungrounded two-prong outlets in older rooms that need updating',
      'Your GFCI outlets in the kitchen, bathroom, garage, or exterior will not test or reset',
      'Switches feel warm to the touch, spark when toggled, or make buzzing or clicking noises',
      'You want dimmer switches installed for living rooms, bedrooms, or dining areas',
      'You need outlets relocated or added for a furniture rearrangement or remodel',
      'Your smoke or carbon monoxide detectors are older than 10 years or chirping constantly',
      'Your outdoor outlets lack GFCI protection as required by current code',
    ],
  },

  // ========================
  // RESIDENTIAL HUB — publish: true
  // ========================

  // 9. Residential Electrical Services (Hub)
  {
    slug: 'residential-electrical-services',
    category: 'residential',
    name: 'Residential Electrical Services',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'residential electrician Carlsbad CA',
    secondaryKeywords: [
      'residential electrical services Carlsbad',
      'home electrician North County San Diego',
      'licensed residential electrician Carlsbad',
      'residential electrical contractor San Diego',
      'home electrical services Carlsbad CA',
      'residential electrician near me Carlsbad',
    ],
    shortDesc:
      'Licensed residential electrician serving Carlsbad and North County San Diego. Panel upgrades, EV charger installation, recessed lighting, troubleshooting, and more — permitted, inspected, and backed by a 1-year labor warranty.',
    includedBullets: [
      'Electrical panel upgrades and replacements (100A to 200A+)',
      'Level 2 EV charger installation with dedicated 240V circuit',
      'Recessed lighting layout, installation, and dimmer setup',
      'Light fixture, chandelier, and ceiling fan installation',
      'Outlet, switch, GFCI, and AFCI installation and repair',
      'Spa, hot tub, and sauna dedicated circuit installation',
      'Service calls, troubleshooting, and electrical diagnostics',
      'Dedicated circuits for appliances, home offices, and workshops',
      'Whole-home surge protection',
      'Permit procurement and city inspection coordination',
      'One-year labor warranty on all workmanship',
    ],
    overviewBullets: [
      'Carlsbad-based residential electricians serving North County since 2008.',
      'Licensed, bonded, and insured — CA License #940291.',
      'Full-range residential work: panels, EV chargers, lighting, outlets, troubleshooting.',
      'Permit coordination and inspection handled by our team, not outsourced.',
      'Upfront pricing with no hidden fees — you approve scope before work starts.',
      'Clean job sites, professional communication, and a 1-year labor warranty.',
      'Familiar with every Carlsbad neighborhood from Olde Carlsbad to La Costa to Bressi Ranch.',
      'Same licensed electricians on every job — no rotating subcontractors.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Schedule & Consult',
        description:
          'Call or submit our online form. We discuss your project, confirm scope, and schedule a visit. Most service calls and smaller projects are booked within 1–2 business days.',
      },
      {
        step: 2,
        title: 'On-Site Evaluation',
        description:
          'Our licensed electrician evaluates your electrical system, identifies the right solution, and provides transparent pricing before any work begins.',
      },
      {
        step: 3,
        title: 'Permitting (When Required)',
        description:
          'For panel upgrades, new circuits, EV chargers, and larger residential projects, we handle the permit application and coordinate with the city building department.',
      },
      {
        step: 4,
        title: 'Professional Installation',
        description:
          'Our electricians complete all work to current NEC and California Electrical Code standards. We protect your home, work cleanly, and keep you informed throughout.',
      },
      {
        step: 5,
        title: 'Testing, Inspection & Walkthrough',
        description:
          'We test all work before closeout, coordinate city inspections when required, and walk you through the completed installation. Every project is backed by our 1-year labor warranty.',
      },
    ],
    pricingFactors: [
      'Type and scope of service (single repair vs. full panel upgrade vs. multi-service project)',
      'Age and condition of existing electrical system',
      'Panel capacity and whether an upgrade is required',
      'Distance and routing complexity for new circuits or wiring runs',
      'Permit and inspection fees (vary by city and project scope)',
      'Fixture type, fixture count, or charger brand (for installation projects)',
      'Accessibility of wiring (finished walls, attic access, crawl space)',
    ],
    faqs: [
      {
        question: 'What residential electrical services does Wheyland Electric provide?',
        answer:
          'We handle the full range of residential electrical work — panel upgrades and replacements, EV charger installation, recessed lighting, light fixture and ceiling fan installation, outlet and switch repair, GFCI and AFCI upgrades, spa and hot tub wiring, service calls, troubleshooting, and dedicated circuits. If it involves the electrical system in your home, we can help.',
      },
      {
        question: 'Are you a licensed residential electrician in Carlsbad?',
        answer:
          'Yes. Wheyland Electric holds California Electrical Contractor License #940291. All work is performed by our licensed electricians — not subcontractors. We have been serving Carlsbad and North County San Diego since 2008.',
      },
      {
        question: 'Do you handle permits for residential electrical work?',
        answer:
          'Yes. We manage the permit application and coordinate city inspections for all work that requires it — panel upgrades, new circuits, EV chargers, and other permitted scopes. You do not need to deal with the building department. We handle it.',
      },
      {
        question: 'How do I know if my home needs an electrical panel upgrade?',
        answer:
          'Common signs include frequently tripping breakers, a 100-amp panel in a home with modern appliances, plans to add an EV charger or ADU, a Federal Pacific or Zinsco panel, or a panel more than 30 years old. We perform a load calculation to give you a definitive recommendation.',
      },
      {
        question: 'How quickly can you schedule a residential service call?',
        answer:
          'Most service calls and smaller projects are scheduled within 1–2 business days. For urgent issues such as burning smells, sparking, or loss of power, we prioritize same-day or next-day response.',
      },
      {
        question: 'What neighborhoods in Carlsbad do you serve?',
        answer:
          'We serve every Carlsbad neighborhood — La Costa, Olde Carlsbad, Bressi Ranch, Aviara, Calavera Hills, The Village, Robertson Ranch, and all surrounding areas. We are based in Carlsbad at 3536 Woodland Way and respond quickly throughout the city.',
      },
      {
        question: 'Do you work in older homes with outdated wiring?',
        answer:
          'Yes. We regularly work in Carlsbad homes from the 1960s through 1990s — including homes with aluminum wiring, two-prong ungrounded outlets, and original 100-amp panels. We evaluate the system honestly and recommend targeted upgrades that improve safety and capacity without unnecessary overbuilding.',
      },
      {
        question: 'Do you offer a warranty on residential electrical work?',
        answer:
          'Yes. All Wheyland Electric residential work is backed by a one-year labor warranty. If a problem occurs due to our installation or workmanship, we return and correct it at no additional labor cost.',
      },
      {
        question: 'Can you bundle multiple residential electrical services into one visit?',
        answer:
          'Absolutely. Many homeowners combine a panel evaluation with an EV charger installation, or add outlet upgrades during a lighting project. Bundling reduces total trip time and often improves efficiency. We scope and price combined projects clearly.',
      },
      {
        question: 'What cities do you serve besides Carlsbad?',
        answer:
          'We serve Carlsbad, Encinitas, Rancho Santa Fe, San Marcos, Del Mar, Solana Beach, Oceanside, and surrounding North County San Diego communities. Carlsbad is our home base and our primary service area.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'ev-charger-installation',
      'recessed-lighting-installation',
      'outlet-switch-dimmer-gfci-repairs',
    ],
    relatedServiceSlugs: [
      'electrical-panel-upgrades',
      'ev-charger-installation',
      'recessed-lighting-installation',
      'outlet-switch-dimmer-gfci-repairs',
    ],
    subtopics: [
      'Residential panel upgrades Carlsbad',
      'Home EV charger installation North County',
      'Residential lighting electrician Carlsbad',
      'Home electrical troubleshooting San Diego',
      'Licensed home electrician Carlsbad CA',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        "Wheyland Electric is Carlsbad's residential electrician — based at 3536 Woodland Way and serving every neighborhood in the city since 2008. From panel upgrades in the older homes of Olde Carlsbad to EV charger installations in the newer developments of Bressi Ranch and La Costa, we handle the full range of residential electrical work. Licensed, permitted, and backed by a 1-year labor warranty.",
      ['enc' + 'initas']:
        'Wheyland Electric provides licensed residential electrical services throughout Encinitas — from the older coastal homes of Leucadia and Cardiff to the newer builds in New Encinitas and Encinitas Ranch. Whether you need a panel upgrade, an EV charger, or a full lighting renovation, our team handles every residential electrical project with professional craftsmanship and honest communication.',
      'rancho-santa-fe':
        'Rancho Santa Fe homes demand electricians who match the quality of the properties they work in. Wheyland Electric provides residential electrical services for estates throughout The Covenant, Fairbanks Ranch, Cielo, and surrounding communities — from complex multi-panel evaluations and upgrades to custom lighting installations and EV charger circuits sized for multi-car garages.',
      'san-marcos':
        'Wheyland Electric serves San Marcos homeowners throughout Lake San Marcos, San Elijo Hills, Discovery Hills, and every neighborhood in between. We handle the full range of residential electrical work — panel upgrades, EV charger installation, lighting, troubleshooting, and more — with the same licensed, permitted, and warranty-backed approach on every project.',
      'del-mar':
        'Del Mar homeowners trust Wheyland Electric for residential electrical work that matches the quality of this premier coastal community. We handle panel upgrades, EV charger installations, recessed lighting, and service calls throughout Del Mar Heights, the Village, Torrey Hills, and Carmel Valley — fully permitted and professionally executed.',
      'solana-beach':
        'Wheyland Electric provides residential electrical services throughout Solana Beach — from Lomas Santa Fe and Eden Gardens to the Fletcher Cove area. We handle panel upgrades, EV charger circuits, outlet and GFCI modernization, and lighting upgrades with the same licensed, permitted approach we bring to every project across North County.',
      ['ocean' + 'side']:
        'Wheyland Electric serves Oceanside homeowners across every neighborhood — from the historic beach homes near the pier to the newer construction in Rancho Del Oro and Arrowood. We provide the full range of residential electrical services, from panel upgrades and EV charger installation to troubleshooting, lighting, and outlet upgrades — all licensed, permitted, and warranty-backed.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Residential Electrician in Carlsbad, CA — Licensed, Local, Backed by Warranty',
      ['enc' + 'initas']: 'Residential Electrician in Encinitas, CA — Full-Service Home Electrical',
      'rancho-santa-fe':
        'Residential Electrician in Rancho Santa Fe — Estate-Grade Home Electrical',
      'san-marcos': 'Residential Electrician in San Marcos, CA — Licensed, Permitted, Warranted',
      'del-mar': 'Residential Electrician in Del Mar, CA — Coastal Homes, Professional Work',
      'solana-beach': 'Residential Electrician in Solana Beach, CA — Local Team, Full-Service',
      ['ocean' + 'side']:
        'Residential Electrician in Oceanside, CA — All Neighborhoods, All Scopes',
    },
    whenToCallSigns: [
      'Your home is more than 25 years old and has never had an electrical inspection or panel evaluation',
      'You are adding an EV charger, hot tub, ADU, or major appliance that requires a dedicated circuit',
      'Your circuit breakers trip frequently or your lights dim when large appliances start',
      'You have a Federal Pacific, Zinsco, or fuse-based panel that needs replacement',
      'You are remodeling a kitchen, bathroom, or living area and need updated electrical',
      'You have two-prong ungrounded outlets in a home built before 1970',
      'You smell burning near outlets, panels, or switches',
      'You want to upgrade lighting with recessed fixtures and dimmers throughout your home',
      'You are buying or selling a home and want a professional electrical evaluation',
      'You need a licensed electrician who handles permits and city inspections, not just the work itself',
    ],
    serviceProofPoints: [
      'Carlsbad-based since 2008 — CA License #940291.',
      'Every project performed by our licensed electricians, not subcontractors.',
      'Permit and inspection coordination handled end-to-end.',
      'Transparent pricing — scope and cost approved before work starts.',
      'One-year labor warranty on all residential workmanship.',
    ],
  },

  // Commercial Electrical Services Hub
  {
    slug: 'commercial-electrical-services',
    category: 'commercial',
    name: 'Commercial Electrical Services',
    publish: true,
    tier: 'wave1',
    primaryKeyword: 'commercial electrician Carlsbad CA',
    secondaryKeywords: [
      'commercial electrical services North County San Diego',
      'commercial electrical contractor Carlsbad',
      'commercial electrician North County',
      'business electrician Carlsbad CA',
      'commercial electrical services San Diego',
      'licensed commercial electrician Carlsbad',
    ],
    shortDesc:
      'Licensed commercial electrician serving Carlsbad and North County San Diego. Tenant improvements, maintenance programs, EV charging, restaurant electrical, LED retrofits, HOA services, and light industrial — permitted, inspected, and backed by a 1-year labor warranty.',
    includedBullets: [
      'Commercial tenant improvement electrical — offices, retail, restaurant, medical',
      'Ongoing commercial electrical maintenance programs',
      'Commercial EV charging station installation with load management',
      'Restaurant and food service electrical hookups and buildouts',
      'Commercial LED lighting retrofits with utility rebate documentation',
      'HOA and property management electrical maintenance',
      'Light industrial electrical — 3-phase, equipment hookups, warehouse lighting',
      'Permit procurement and AHJ coordination handled end-to-end',
      'Title 24 energy compliance for all applicable commercial scopes',
      'One-year labor warranty on all commercial workmanship',
    ],
    overviewBullets: [
      'Carlsbad-based commercial electricians serving North County since 2008.',
      'Licensed, bonded, and insured — CA License #940291.',
      'Full-range commercial work: TI, maintenance, EV charging, restaurant, LED, HOA, industrial.',
      'Permit and AHJ coordination handled by our team on every permitted scope.',
      'Upfront pricing with no hidden fees — scope approved before work starts.',
      'Title 24 compliance expertise for California commercial requirements.',
      'Minimal business disruption — we schedule around your operating hours.',
      'Same licensed electricians on every job — no rotating subcontractors.',
      'Familiar with Carlsbad Research Center, Palomar Airport Road, and North County business parks.',
      'One-year labor warranty on all commercial electrical workmanship.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Scope Review',
        description:
          'We discuss your project, review plans or conduct a site walk, and identify the full electrical scope. Commercial projects receive a written proposal with clear line-item pricing before work begins.',
      },
      {
        step: 2,
        title: 'Permitting & Coordination',
        description:
          'We pull all required permits, coordinate with the AHJ and building department, and align scheduling with your general contractor or property manager.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Our licensed electricians complete all work to NEC and California Electrical Code standards. We minimize disruption to your business operations and coordinate with other trades on TI and construction projects.',
      },
      {
        step: 4,
        title: 'Inspection & Commissioning',
        description:
          'We schedule and attend all required inspections, commission all systems, and verify code compliance before closeout.',
      },
      {
        step: 5,
        title: 'Documentation & Handoff',
        description:
          'You receive as-built documentation, panel directories, warranty information, and any utility rebate paperwork. Ongoing maintenance clients receive scheduled visit reports.',
      },
    ],
    pricingFactors: [
      'Type and scope of commercial service (TI, maintenance, EV charging, LED retrofit)',
      'Square footage and system complexity',
      'Panel and service upgrade requirements',
      'Title 24 compliance scope',
      'Permit and inspection fees by jurisdiction',
      'Project timeline and phasing requirements',
      'Whether 3-phase power is required',
    ],
    faqs: [
      {
        question: 'What commercial electrical services does Wheyland Electric provide?',
        answer:
          'We handle the full range of commercial electrical work — tenant improvements, ongoing maintenance programs, commercial EV charging, restaurant and food service electrical, LED lighting retrofits, HOA electrical services, and light industrial work. If it involves commercial electrical in North County San Diego, we can help.',
      },
      {
        question: 'Are you a licensed commercial electrician in Carlsbad?',
        answer:
          'Yes. Wheyland Electric holds California Electrical Contractor License #940291. All commercial work is performed by our licensed electricians. We have been serving Carlsbad and North County San Diego commercial properties since 2008.',
      },
      {
        question: 'Do you handle permits for commercial electrical work?',
        answer:
          'Yes. We manage the full permit process for all commercial work that requires it — TI buildouts, new circuits, EV charging, LED retrofits, and other permitted scopes. We coordinate with the AHJ and building department so you do not have to.',
      },
      {
        question: 'Do you work with general contractors on tenant improvements?',
        answer:
          'Yes. We work with general contractors daily on commercial TI projects throughout North County San Diego. We coordinate scheduling, meet construction milestones, and communicate directly with your GC to keep projects on track.',
      },
      {
        question: 'Can you handle ongoing electrical maintenance for our commercial property?',
        answer:
          'Yes. We offer scheduled maintenance programs for commercial properties, HOA communities, and multi-family buildings. Programs include regular inspections, lighting maintenance, panel testing, and priority emergency response — with detailed documentation after every visit.',
      },
      {
        question: 'Do you install commercial EV charging stations?',
        answer:
          'Yes. We design and install commercial EV charging infrastructure for office parks, retail centers, restaurants, and multi-tenant properties. We handle load management planning, permit coordination, and utility coordination for service upgrades when required.',
      },
      {
        question: 'What North County business parks and commercial areas do you serve?',
        answer:
          'We serve commercial properties throughout the Carlsbad Research Center, Palomar Airport Road corridor, Loker Avenue business parks, Bressi Ranch Village Center, Encinitas Boulevard commercial areas, Grand Avenue in San Marcos, and throughout North County San Diego.',
      },
      {
        question: 'Do you handle Title 24 compliance for commercial spaces?',
        answer:
          'Yes. We ensure all commercial lighting and electrical controls meet California Title 24 energy requirements, including occupancy sensors, daylight harvesting, and lighting power density calculations.',
      },
      {
        question: 'How quickly can you schedule a commercial service call?',
        answer:
          'Most commercial service calls and smaller projects are scheduled within 1-2 business days. For urgent issues affecting business operations, we prioritize same-day or next-day response.',
      },
      {
        question: 'Do you offer a warranty on commercial electrical work?',
        answer:
          'Yes. All Wheyland Electric commercial work is backed by a one-year labor warranty. If a problem occurs due to our installation or workmanship, we return and correct it at no additional labor cost.',
      },
    ],
    relatedServices: [
      'commercial-tenant-improvement',
      'commercial-electrical-maintenance',
      'commercial-ev-charging',
      'restaurant-electrical',
    ],
    relatedServiceSlugs: [
      'commercial-tenant-improvement',
      'commercial-electrical-maintenance',
      'commercial-ev-charging',
      'restaurant-electrical',
    ],
    subtopics: [
      'Commercial electrician Carlsbad CA',
      'Commercial tenant improvement electrician North County',
      'Business electrician Carlsbad',
      'Commercial electrical contractor San Diego',
      'North County commercial electrician',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        "Wheyland Electric is Carlsbad's commercial electrician — serving business parks, retail centers, restaurants, and HOA communities from our base at 3536 Woodland Way since 2008. From the Carlsbad Research Center and Palomar Airport Road corridor to the Bressi Ranch Village Center and Carlsbad Village commercial district, we handle the full range of commercial electrical work. Licensed, permitted, and backed by a 1-year labor warranty.",
      ['enc' + 'initas']:
        'Wheyland Electric provides licensed commercial electrical services throughout Encinitas — from the Highway 101 retail corridor and Cedros Design District to the business parks along Encinitas Boulevard and El Camino Real. Tenant improvements, maintenance programs, restaurant electrical, and commercial EV charging — all permitted and professionally executed.',
      'rancho-santa-fe':
        'Rancho Santa Fe commercial and equestrian properties require commercial electrical work that matches the standards of this premier community. Wheyland Electric provides commercial electrical services for the limited but high-quality commercial properties and estate operations in Rancho Santa Fe.',
      'san-marcos':
        'Wheyland Electric serves San Marcos commercial properties throughout the Grand Avenue restaurant corridor, Rancheros Drive business parks, and the growing commercial development near Cal State San Marcos. Full-service commercial electrical from TI buildouts through ongoing maintenance.',
      'del-mar':
        'Del Mar commercial properties — from Flower Hill Promenade and Del Mar Highlands to the offices along Camino Del Mar — require commercial electrical work that meets the standards of this premier coastal community. Wheyland Electric provides licensed commercial electrical services throughout Del Mar.',
      'solana-beach':
        'Wheyland Electric provides commercial electrical services for Solana Beach businesses including the Cedros Design District, Lomas Santa Fe commercial corridor, and the retail and restaurant properties throughout this compact coastal community.',
      ['ocean' + 'side']:
        'Wheyland Electric serves Oceanside commercial properties across the revitalized downtown district, Mission Avenue business parks, College Boulevard corridor, and the inland industrial zones. Full-range commercial electrical from restaurant buildouts to industrial equipment hookups.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Commercial Electrician in Carlsbad, CA — Licensed, Local, Backed by Warranty',
      ['enc' + 'initas']:
        'Commercial Electrician in Encinitas, CA — Full-Service Business Electrical',
      'rancho-santa-fe':
        'Commercial Electrician in Rancho Santa Fe — Professional Commercial Electrical',
      'san-marcos': 'Commercial Electrician in San Marcos, CA — Licensed, Permitted, Warranted',
      'del-mar': 'Commercial Electrician in Del Mar, CA — Coastal Business Electrical Services',
      'solana-beach': 'Commercial Electrician in Solana Beach, CA — Local Team, Full-Service',
      ['ocean' + 'side']: 'Commercial Electrician in Oceanside, CA — All Neighborhoods, All Scopes',
    },
    whenToCallSigns: [
      'You need a licensed commercial electrician for a tenant improvement or buildout',
      'Your commercial property needs ongoing electrical maintenance with documented reporting',
      'You are adding commercial EV charging for employees, customers, or fleet vehicles',
      'Your restaurant or food service business needs kitchen electrical hookups or upgrades',
      'Your commercial lighting is outdated and you want an LED retrofit with utility rebates',
      'Your HOA community needs scheduled electrical maintenance and emergency response',
      'You need 3-phase power or industrial electrical for manufacturing or warehouse operations',
      'Your commercial property has code violations or Title 24 compliance issues',
      'You need a reliable commercial electrician who handles permits and inspections end-to-end',
    ],
    serviceProofPoints: [
      'Carlsbad-based since 2008 — CA License #940291.',
      'Every project performed by our licensed electricians, not subcontractors.',
      'Permit and AHJ coordination handled end-to-end on every permitted scope.',
      'Title 24 compliance expertise for California commercial requirements.',
      'Transparent pricing — scope and cost approved before work starts.',
      'One-year labor warranty on all commercial workmanship.',
    ],
  },

  // ========================
  // WAVE 2 — publish: false
  // ========================

  // 9. Dedicated Circuits
  {
    slug: 'dedicated-circuits',
    category: 'residential',
    name: 'Dedicated Circuits',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'dedicated circuit installation',
    secondaryKeywords: [
      'dedicated electrical circuit',
      'appliance circuit installation',
      'home office dedicated circuit',
      '20-amp dedicated circuit',
      'kitchen appliance circuit',
      'whole house fan circuit',
    ],
    shortDesc:
      'Dedicated circuit installation for appliances, home offices, workshops, and specialty equipment. Licensed electricians serving North County San Diego with permitted, inspected work.',
    includedBullets: [
      'Load assessment to determine circuit amperage and wire gauge',
      'Circuit run from panel to equipment location',
      'Breaker installation and panel labeling',
      'Outlet or hardwired connection at equipment end',
      'Permit and inspection coordination',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Equipment Review',
        description:
          'We review the equipment nameplate or specifications to determine voltage, amperage, and circuit type required for safe, dedicated operation.',
      },
      {
        step: 2,
        title: 'Routing & Quote',
        description:
          'We plan the wire routing from panel to equipment location, assess panel capacity, and provide a transparent quote.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Our electricians install the breaker, run the wiring, and terminate at the outlet or equipment connection point per code.',
      },
      {
        step: 4,
        title: 'Testing & Labeling',
        description:
          'We test the circuit under load, label the breaker in the panel directory, and ensure the installation is ready for inspection.',
      },
    ],
    pricingFactors: [
      'Circuit amperage (15A, 20A, 30A, 40A, 50A)',
      'Wire run distance from panel to equipment',
      'Conduit vs. Romex routing options',
      'Number of dedicated circuits needed',
      'Panel capacity and available breaker slots',
    ],
    faqs: [
      {
        question: 'What appliances need a dedicated circuit?',
        answer:
          'Refrigerators, dishwashers, microwaves, garbage disposals, washing machines, dryers, electric ranges, HVAC equipment, and hot tubs typically require dedicated circuits. Home offices with multiple devices and workshops with power tools also benefit from dedicated circuits.',
      },
      {
        question: 'How do I know if I need a dedicated circuit?',
        answer:
          'If an appliance trips a breaker when it cycles on, or if your lights dim when equipment starts, the device likely needs its own circuit. We can evaluate your electrical load and recommend which circuits should be dedicated.',
      },
      {
        question: 'Can you add a dedicated circuit without upgrading my panel?',
        answer:
          'It depends on whether your panel has available breaker slots and sufficient amperage capacity. Many panels can accommodate additional circuits. If not, we may recommend a sub-panel or panel upgrade.',
      },
      {
        question: 'How much does a dedicated circuit cost?',
        answer:
          'Cost depends on the circuit amperage, wire run length, and routing complexity. A simple 20-amp circuit to a nearby location is the most affordable option. Longer runs or higher-amperage circuits for equipment like ranges or spas cost more.',
      },
      {
        question: 'Do dedicated circuits require a permit?',
        answer:
          'New circuit installations typically require an electrical permit. We handle permitting and inspection coordination for all dedicated circuit projects.',
      },
      {
        question: 'Can you install a circuit for a whole-house fan or generator transfer switch?',
        answer:
          'Yes. We install dedicated circuits for whole-house fans, generator interlock kits, transfer switches, and other specialty equipment. Each installation is sized and wired to the equipment specifications.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'ev-charger-installation',
      'spa-jacuzzi-sauna-electrical',
    ],
    subtopics: [
      'Kitchen appliance circuits',
      'Home office power circuits',
      'Workshop and garage circuits',
      'Generator transfer switch circuits',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area homes built over the past several decades often need additional dedicated circuits as families add modern kitchen appliances, home office setups, and workshop equipment. Wheyland Electric installs dedicated circuits throughout your area with proper permitting and clean, professional wiring that keeps your panel organized and up to code.',
      ['enc' + 'initas']:
        'From kitchen remodels in New your area to home offices in Olivenhain, dedicated circuits are one of the most common upgrades we perform for your area homeowners. Wheyland Electric ensures each circuit is properly sized, safely routed, and labeled in your panel for easy identification.',
      'rancho-santa-fe':
        'your area properties often require dedicated circuits for specialty equipment — commercial-grade kitchen appliances, wine storage systems, home theaters, and workshop tools. Wheyland Electric provides the correctly sized circuits these high-demand installations require.',
      'san-marcos':
        'your area homeowners adding EV chargers, hot tubs, workshop tools, or home office equipment frequently need one or more dedicated circuits. Wheyland Electric provides dedicated circuit installation throughout your area, handling the permit and making sure your panel can support the new load.',
      'del-mar':
        'your area homes with gourmet kitchens, home offices, and entertainment systems often need additional dedicated circuits to operate reliably. Wheyland Electric installs the circuits these premium appliances and systems require, keeping your electrical system safe and properly loaded.',
      'solana-beach':
        'your area homeowners upgrading their kitchens, adding home office equipment, or installing workshop tools benefit from properly installed dedicated circuits. Wheyland Electric provides this service with the same quality and professionalism we bring to every project.',
      ['ocean' + 'side']:
        'Across your area, homeowners and small businesses need dedicated circuits for new equipment, appliances, and technology. Wheyland Electric installs dedicated circuits for any application — from a single 20-amp home office circuit to multiple high-amperage feeds for commercial kitchen equipment.',
    },
  },

  // 10. Remodel & Rewiring (incl. ADU)
  {
    slug: 'remodel-rewiring-adu',
    category: 'residential',
    name: 'Remodel & Rewiring (incl. ADU)',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'electrical remodel rewiring',
    secondaryKeywords: [
      'whole house rewiring',
      'ADU electrical wiring',
      'kitchen remodel electrician',
      'bathroom remodel wiring',
      'home addition electrical',
      'accessory dwelling unit electrical',
    ],
    shortDesc:
      'Electrical wiring for home remodels, whole-house rewiring, and ADU construction in North County San Diego. From kitchen renovations to complete accessory dwelling units, we handle design through final inspection.',
    includedBullets: [
      'Electrical plan review and code compliance consultation',
      'Complete rough-in wiring for new construction or remodel',
      'Panel and sub-panel sizing for additional loads',
      'Outlet, switch, and fixture placement per plan',
      'Low-voltage pre-wire (data, audio, security)',
      'Permit procurement and inspection coordination',
      'Trim-out and device installation after drywall',
      'One-year labor warranty on all workmanship',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Plan Review & Consultation',
        description:
          'We review architectural plans, discuss your electrical needs, and recommend outlet placement, circuit layout, and panel requirements.',
      },
      {
        step: 2,
        title: 'Permitting',
        description:
          'We prepare the electrical permit application, coordinate with the building department, and ensure the plans meet current code requirements.',
      },
      {
        step: 3,
        title: 'Rough-In',
        description:
          'With walls open, we run all wiring, install boxes, and prepare for the rough-in inspection. We coordinate timing with your general contractor.',
      },
      {
        step: 4,
        title: 'Trim-Out & Final',
        description:
          'After drywall, we install all devices, fixtures, and cover plates. We test every circuit and schedule the final electrical inspection.',
      },
      {
        step: 5,
        title: 'Final Inspection & Handoff',
        description:
          'We attend the final inspection, confirm it passes, and walk you through the completed electrical system including panel directory and any smart controls.',
      },
    ],
    pricingFactors: [
      'Scope of the remodel (single room vs. whole house vs. ADU)',
      'Number of circuits, outlets, and fixtures',
      'Panel or sub-panel requirements',
      'Low-voltage and smart home pre-wiring',
      'Whether a new service entrance is required (ADUs)',
      'Permit and inspection fees',
    ],
    faqs: [
      {
        question: 'How much does it cost to rewire a house?',
        answer:
          'Whole-house rewiring costs vary significantly based on home size, number of circuits, accessibility of walls and attic, and panel requirements. We provide a detailed written quote after reviewing your home and discussing your needs.',
      },
      {
        question: 'Do ADUs need a separate electrical panel?',
        answer:
          'In most cases, yes. California building code typically requires a separate sub-panel for an ADU. Depending on the ADU size and your main panel capacity, you may also need a main panel upgrade or a separate meter.',
      },
      {
        question: 'Can you work with my general contractor on a remodel?',
        answer:
          'Absolutely. We coordinate with general contractors daily on remodel projects. We schedule our rough-in and trim-out phases to align with the construction timeline and communicate directly with your GC to keep things on track.',
      },
      {
        question: 'How long does electrical rough-in take for a remodel?',
        answer:
          'A kitchen or bathroom remodel rough-in typically takes 1 to 2 days. A whole-house rewire or ADU rough-in may take 3 to 5 days depending on scope. We provide a timeline estimate with every proposal.',
      },
      {
        question: 'Do I need to rewire my entire house or just the remodeled area?',
        answer:
          'If you are remodeling a single room, you only need to wire that area to current code. However, if your home has knob-and-tube or deteriorated wiring, a whole-house rewire may be a smarter long-term investment.',
      },
      {
        question: 'What code requirements apply to ADU electrical work?',
        answer:
          'ADUs must meet current California Electrical Code requirements including AFCI protection in living areas, GFCI in wet areas, tamper-resistant outlets, and Title 24 energy compliance. Wheyland Electric ensures your ADU electrical meets all of these standards.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'dedicated-circuits',
      'recessed-lighting-installation',
      'electrical-safety-inspections',
    ],
    subtopics: [
      'Kitchen remodel electrical',
      'Bathroom remodel wiring',
      'ADU electrical requirements',
      'Whole-house rewiring',
      'New construction electrical',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area homeowners are actively remodeling kitchens, adding ADUs, and updating aging wiring to support modern lifestyles. Wheyland Electric provides complete electrical services for remodels and new construction across your area, working alongside general contractors and homeowners from plan review through final inspection.',
      ['enc' + 'initas']:
        'The mix of older homes in Leucadia and Cardiff alongside newer construction in New your area keeps Wheyland Electric busy with remodel wiring and ADU electrical projects. We understand the unique challenges of working in older structures and know how to bring them up to current code safely and efficiently.',
      'rancho-santa-fe':
        'Remodels in your area often involve high-end finishes, custom cabinetry, and sophisticated electrical requirements. Wheyland Electric delivers the precision wiring these projects demand — from concealed outlet placement in kitchen islands to integrated whole-house lighting control systems.',
      'san-marcos':
        'your area is experiencing a wave of ADU construction and home remodeling, and Wheyland Electric is here to provide the electrical work. We handle everything from sub-panel installation and rough-in wiring to final trim-out and inspection, working within City of your area permitting requirements.',
      'del-mar':
        'Remodeling a your area home requires an electrician who understands premium construction standards and tight project timelines. Wheyland Electric provides the electrical expertise for kitchen renovations, whole-house upgrades, and ADU additions throughout your area, coordinating seamlessly with your contractor and design team.',
      'solana-beach':
        'your area homeowners renovating kitchens, bathrooms, and living spaces need an electrician who shows up on time, coordinates with the general contractor, and delivers code-compliant wiring. Wheyland Electric provides remodel electrical services throughout your area with clear communication and reliable workmanship.',
      ['ocean' + 'side']:
        'your area remodeling and ADU activity is booming, and Wheyland Electric provides the electrical infrastructure these projects require. From downtown renovation projects to new ADU construction in the eastern neighborhoods, we handle permitting, rough-in, and trim-out with professional efficiency.',
    },
  },

  // 11. Commercial Tenant Improvement (TI)
  {
    slug: 'commercial-tenant-improvement',
    category: 'commercial',
    name: 'Commercial Tenant Improvement (TI)',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'commercial tenant improvement electrician',
    secondaryKeywords: [
      'TI electrical contractor',
      'commercial buildout electrical',
      'office electrical remodel',
      'retail electrical installation',
      'restaurant electrical wiring',
      'commercial electrical contractor San Diego',
    ],
    shortDesc:
      'Electrical services for commercial tenant improvements, buildouts, and renovations across North County San Diego. Office, retail, restaurant, and medical — permitted and inspected to code.',
    includedBullets: [
      'Electrical plan review and value engineering',
      'Permit application and building department coordination',
      'Power distribution and panel installation',
      'Lighting layout and fixture installation',
      'Dedicated circuits for commercial equipment',
      'Low-voltage rough-in (data, phone, security)',
      'Title 24 compliance verification',
      'Final inspection and closeout documentation',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Plan Review & Bid',
        description:
          'We review architectural and electrical plans, identify scope, and provide a competitive bid with clear line-item pricing.',
      },
      {
        step: 2,
        title: 'Permitting & Coordination',
        description:
          'We pull the electrical permit, coordinate with the general contractor and other trades, and establish the project schedule.',
      },
      {
        step: 3,
        title: 'Rough-In',
        description:
          'We install conduit, wire, panels, and boxes according to plan. We pass the rough-in inspection before walls are closed.',
      },
      {
        step: 4,
        title: 'Trim & Finish',
        description:
          'After drywall and paint, we install all fixtures, devices, and equipment connections. We test every circuit and prepare for final inspection.',
      },
      {
        step: 5,
        title: 'Final Inspection & Handoff',
        description:
          'We coordinate the final electrical inspection, provide as-built documentation, and ensure the space is ready for occupancy.',
      },
    ],
    pricingFactors: [
      'Square footage and complexity of the buildout',
      'Number of circuits, fixtures, and devices',
      'Equipment power requirements (3-phase, high-amperage)',
      'Title 24 compliance scope',
      'Low-voltage and data cabling requirements',
      'Project timeline and phasing',
    ],
    faqs: [
      {
        question: 'Can you handle the electrical for our entire tenant improvement?',
        answer:
          'Yes. We provide complete TI electrical services from plan review and permitting through rough-in, trim-out, and final inspection. We work with general contractors, architects, and directly with tenants and landlords.',
      },
      {
        question: 'Do you work with 3-phase commercial power?',
        answer:
          'Yes. We install and maintain 3-phase systems for commercial kitchens, HVAC equipment, manufacturing, and other applications requiring 3-phase service.',
      },
      {
        question: 'Can you meet tight construction timelines?',
        answer:
          'We understand that TI timelines are often driven by lease start dates and business opening schedules. We staff projects appropriately and coordinate closely with the GC to meet milestones.',
      },
      {
        question: 'Do you handle Title 24 compliance for commercial spaces?',
        answer:
          'Yes. We ensure all lighting and electrical controls meet California Title 24 energy requirements, including occupancy sensors, daylight harvesting, and lighting power density calculations.',
      },
      {
        question: 'What types of commercial spaces do you work in?',
        answer:
          'We handle TI electrical for offices, retail stores, restaurants, medical and dental offices, salons, fitness studios, and other commercial spaces across North County San Diego.',
      },
      {
        question: 'Can you provide a bid from plans before we start construction?',
        answer:
          'Absolutely. We review architectural and electrical drawings, provide a detailed line-item bid, and can also offer value engineering suggestions to optimize costs without sacrificing quality or code compliance.',
      },
    ],
    relatedServices: [
      'commercial-electrical-maintenance',
      'electrical-panel-upgrades',
      'light-fixture-installation',
      'dedicated-circuits',
    ],
    subtopics: [
      'Office buildout electrical',
      'Restaurant and kitchen electrical',
      'Retail space wiring',
      'Medical office electrical requirements',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area commercial spaces along Palomar Airport Road, in the Village, and throughout the business parks require professional electrical work for tenant improvements. Wheyland Electric provides TI electrical services for offices, restaurants, retail, and medical spaces throughout your area with competitive pricing and reliable project execution.',
      ['enc' + 'initas']:
        'your area commercial properties — from Highway 101 retail spaces to the business parks along your area Boulevard — need licensed electrical contractors for tenant buildouts and renovations. Wheyland Electric delivers the permitting, installation, and inspection coordination commercial tenants require.',
      'rancho-santa-fe':
        'The limited commercial space in your area demands electrical work that reflects the area high standards. Wheyland Electric provides tenant improvement electrical services for the boutique retail, office, and restaurant spaces that serve this community.',
      'san-marcos':
        'your area has a growing commercial sector with business parks, restaurant corridors, and retail centers that frequently undergo tenant improvements. Wheyland Electric provides TI electrical services throughout your area, working with commercial landlords, property managers, and general contractors.',
      'del-mar':
        'your area commercial properties — from the Flower Hill and your area Highlands centers to the offices along Camino your area — require skilled electrical work for tenant improvements. Wheyland Electric provides the professional TI electrical services these premium commercial spaces demand.',
      'solana-beach':
        'The Cedros Design District and other your area commercial areas feature unique retail and office spaces that need thoughtful electrical work during buildouts and renovations. Wheyland Electric provides TI electrical services tailored to the character of these distinctive spaces.',
      ['ocean' + 'side']:
        'your area growing commercial landscape — from the revitalized downtown to the business parks along Mission Avenue and College Boulevard — generates steady demand for tenant improvement electrical work. Wheyland Electric serves your area commercial tenants with professional electrical buildout services from permitting through final inspection.',
    },
  },

  // 12. Commercial Electrical Maintenance
  {
    slug: 'commercial-electrical-maintenance',
    category: 'commercial',
    name: 'Commercial Electrical Maintenance',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'commercial electrical maintenance',
    secondaryKeywords: [
      'commercial electrician maintenance',
      'property management electrician',
      'HOA electrical maintenance',
      'commercial lighting maintenance',
      'preventative electrical maintenance',
      'multi-family electrical services',
    ],
    shortDesc:
      'Ongoing commercial and multi-family electrical maintenance for property managers, HOAs, and business owners in North County San Diego. Scheduled service, emergency response, and transparent documentation.',
    includedBullets: [
      'Scheduled electrical inspections and maintenance visits',
      'Lighting maintenance and lamp replacement',
      'Parking lot and common area lighting repairs',
      'Emergency electrical response for commercial properties',
      'Electrical system documentation and reporting',
      'Code compliance monitoring',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Property Assessment',
        description:
          'We walk the property with you to document all electrical systems, identify maintenance needs, and establish a service baseline.',
      },
      {
        step: 2,
        title: 'Service Plan Development',
        description:
          'We create a maintenance schedule tailored to your property — monthly, quarterly, or as-needed — with transparent pricing and clear scope.',
      },
      {
        step: 3,
        title: 'Scheduled Maintenance',
        description:
          'Our electricians perform scheduled visits covering lighting, panels, common-area devices, and any tenant-reported issues. We document everything.',
      },
      {
        step: 4,
        title: 'Reporting & Recommendations',
        description:
          'After each visit, you receive a maintenance report detailing work completed, issues found, and recommended future actions.',
      },
    ],
    pricingFactors: [
      'Property size and number of units or suites',
      'Frequency of scheduled visits (monthly, quarterly, annual)',
      'Scope of systems covered (lighting, panels, common areas)',
      'Emergency response inclusion',
      'Age and condition of existing electrical systems',
    ],
    faqs: [
      {
        question: 'Do you offer ongoing maintenance contracts?',
        answer:
          'Yes. We provide monthly and quarterly maintenance agreements for commercial properties, HOA communities, and multi-family buildings. Each plan is customized to the property needs and budget.',
      },
      {
        question: 'What does a commercial electrical maintenance visit include?',
        answer:
          'A typical visit includes inspection of panels and breakers, testing of GFCI outlets in common areas, lighting maintenance, emergency lighting verification, and resolution of any reported issues. We document everything and provide a written report.',
      },
      {
        question: 'Can you handle emergency calls for our property?',
        answer:
          'Yes. Maintenance clients receive priority scheduling for emergency electrical issues. We respond promptly to power outages, safety hazards, and critical system failures.',
      },
      {
        question: 'Do you service HOA common areas?',
        answer:
          'Absolutely. We maintain common area lighting, parking garage electrical systems, pool and spa equipment circuits, gate and access control power, and other shared electrical infrastructure for HOA communities.',
      },
      {
        question: 'Can you provide documentation for our property management records?',
        answer:
          'Yes. Every maintenance visit includes a detailed report suitable for property management files, board meetings, and compliance records. We track recurring issues and provide capital improvement recommendations.',
      },
      {
        question: 'Do you work with property management companies?',
        answer:
          'Yes. We partner with property management companies throughout North County to provide reliable electrical maintenance for their portfolio of properties. We work within your approval processes and communicate through your preferred channels.',
      },
    ],
    relatedServices: [
      'commercial-tenant-improvement',
      'electrical-safety-inspections',
      'light-fixture-installation',
    ],
    subtopics: [
      'HOA lighting maintenance',
      'Parking lot lighting repair',
      'Multi-family electrical service',
      'Property management electrical support',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area commercial properties, HOA communities, and multi-family buildings need dependable electrical maintenance to keep common areas safe and well-lit. Wheyland Electric provides scheduled maintenance services throughout your area, from the business parks near Palomar Airport to the coastal HOA communities.',
      ['enc' + 'initas']:
        'your area property managers and HOA boards rely on Wheyland Electric for ongoing electrical maintenance that keeps common areas functional and compliant. We provide scheduled service, emergency response, and detailed documentation for properties throughout your area.',
      'rancho-santa-fe':
        'your area HOA communities and estate properties require meticulous electrical maintenance to preserve property values and ensure safety. Wheyland Electric provides scheduled inspections, lighting maintenance, and prompt repairs for properties throughout the area.',
      'san-marcos':
        'your area commercial properties and HOA communities benefit from Wheyland Electric scheduled maintenance programs. We keep common area lighting operational, address electrical issues proactively, and provide the documentation property managers need for budgeting and compliance.',
      'del-mar':
        'your area condominium associations, commercial properties, and residential HOAs trust Wheyland Electric for professional electrical maintenance. We maintain lighting, panel systems, and common area electrical with the reliability and attention to detail this community demands.',
      'solana-beach':
        'your area property managers and HOA boards choose Wheyland Electric for commercial electrical maintenance because we show up on schedule, communicate clearly, and document our work thoroughly. We help keep your area properties safe, well-lit, and code-compliant.',
      ['ocean' + 'side']:
        'your area large inventory of commercial properties, multi-family buildings, and HOA communities creates significant demand for professional electrical maintenance. Wheyland Electric provides tailored maintenance programs for your area property managers with consistent service and transparent reporting.',
    },
  },

  // 13. Light Industrial Electrical
  {
    slug: 'light-industrial-electrical',
    category: 'commercial',
    name: 'Light Industrial Electrical',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'light industrial electrician',
    secondaryKeywords: [
      'industrial electrical contractor',
      'warehouse electrical services',
      'manufacturing electrical installation',
      '3-phase power installation',
      'industrial lighting installation',
      'machinery electrical hookup',
    ],
    shortDesc:
      'Light industrial electrical services for warehouses, manufacturing facilities, and industrial parks in North County San Diego. 3-phase power, equipment hookups, lighting, and maintenance.',
    includedBullets: [
      '3-phase power distribution and panel installation',
      'Machinery and equipment electrical hookups',
      'Industrial lighting installation and retrofit',
      'Motor control and starter installations',
      'Conduit and raceway systems',
      'Emergency and exit lighting compliance',
      'Code compliance and inspection coordination',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Facility Assessment',
        description:
          'We evaluate your facility electrical infrastructure, equipment requirements, and code compliance status to identify the scope of work.',
      },
      {
        step: 2,
        title: 'Engineering & Proposal',
        description:
          'We develop the electrical plan, size the distribution system, and provide a detailed proposal with timeline and pricing.',
      },
      {
        step: 3,
        title: 'Installation',
        description:
          'Our team installs power distribution, equipment feeds, lighting, and controls. We coordinate with your operations to minimize downtime.',
      },
      {
        step: 4,
        title: 'Testing & Commissioning',
        description:
          'We test all systems, verify equipment operation, and schedule inspections. We provide documentation for your facility records.',
      },
    ],
    pricingFactors: [
      'Facility size and power distribution requirements',
      'Number and type of equipment connections',
      'Voltage and amperage requirements (single-phase, 3-phase)',
      'Conduit and raceway scope',
      'Lighting fixture count and type',
      'Project timeline and operational constraints',
    ],
    faqs: [
      {
        question: 'Do you install 3-phase power systems?',
        answer:
          'Yes. We install and maintain 3-phase power distribution systems for manufacturing equipment, commercial HVAC, compressors, and other industrial applications.',
      },
      {
        question: 'Can you hook up industrial machinery?',
        answer:
          'Yes. We provide electrical hookups for CNC machines, compressors, welding equipment, packaging lines, and other industrial equipment. We verify the electrical supply matches manufacturer specifications before making connections.',
      },
      {
        question: 'Do you work in occupied facilities?',
        answer:
          'Yes. We coordinate with facility managers to schedule work during off-hours or in phases that minimize disruption to operations.',
      },
      {
        question: 'Can you upgrade warehouse lighting to LED?',
        answer:
          'Absolutely. LED retrofits for warehouses and industrial spaces reduce energy costs significantly and improve visibility. We handle fixture replacement, controls installation, and utility rebate paperwork.',
      },
      {
        question: 'Do you provide temporary power for construction or events?',
        answer:
          'Yes. We install temporary power panels and distribution for construction sites, events, and seasonal operations.',
      },
      {
        question: 'What industrial parks do you serve?',
        answer:
          'We serve industrial and business parks throughout North County San Diego, including facilities in your area, your area, Vista, your area, and Escondido.',
      },
    ],
    relatedServices: [
      'commercial-tenant-improvement',
      'electrical-panel-upgrades',
      'commercial-electrical-maintenance',
    ],
    subtopics: [
      'Warehouse electrical services',
      '3-phase power installation',
      'Industrial LED lighting retrofit',
      'Manufacturing equipment hookups',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area light industrial parks along Loker Avenue, Faraday Avenue, and the airport corridor house manufacturing, biotech, and distribution businesses that rely on professional electrical services. Wheyland Electric provides 3-phase power, equipment hookups, and industrial lighting for facilities throughout the your area industrial zone.',
      ['enc' + 'initas']:
        'While primarily residential and retail, your area has commercial and light industrial spaces along your area Boulevard that require professional electrical services. Wheyland Electric serves these businesses with the same quality and reliability we bring to larger industrial projects.',
      'rancho-santa-fe':
        'Though your area is predominantly residential, nearby commercial and agricultural operations sometimes require light industrial electrical services. Wheyland Electric provides equipment hookups, agricultural lighting, and power distribution for these unique applications.',
      'san-marcos':
        'your area has a thriving light industrial sector centered around Rancheros Drive, Grand Avenue, and the business parks east of the 78 freeway. Wheyland Electric serves these facilities with 3-phase power installation, machinery hookups, LED lighting retrofits, and ongoing maintenance.',
      'del-mar':
        'your area limited industrial footprint means most light industrial electrical needs in the area are served through the adjacent Sorrento Valley and Carmel Valley business parks. Wheyland Electric provides industrial electrical services to facilities in the greater your area area.',
      'solana-beach':
        'your area commercial and light industrial spaces — including businesses in the Cedros area and along Lomas Santa Fe Drive — benefit from Wheyland Electric professional electrical services for equipment power, lighting upgrades, and code compliance.',
      ['ocean' + 'side']:
        'your area industrial zones along your area Boulevard, Mission Avenue, and in the inland business parks house a wide range of manufacturing and distribution operations. Wheyland Electric provides the industrial electrical services these businesses need — from 3-phase equipment hookups to LED warehouse lighting and panel distribution.',
    },
  },

  // 14. Electrical Safety Inspections
  {
    slug: 'electrical-safety-inspections',
    category: 'residential',
    name: 'Electrical Safety Inspections',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'electrical safety inspection',
    secondaryKeywords: [
      'home electrical inspection',
      'electrical code compliance audit',
      'pre-sale electrical inspection',
      'electrical system evaluation',
      'Title 24 energy compliance',
      'electrical permit inspection',
    ],
    shortDesc:
      'Comprehensive electrical safety inspections for homes, commercial properties, and real estate transactions in North County San Diego. We identify hazards, code deficiencies, and recommended upgrades.',
    includedBullets: [
      'Full panel inspection including breaker testing',
      'Outlet and switch testing throughout the property',
      'GFCI and AFCI function verification',
      'Grounding system evaluation',
      'Smoke and carbon monoxide detector verification',
      'Written report with findings and recommendations',
      'Priority scheduling for real estate transactions',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Schedule the Inspection',
        description:
          'We schedule a time that works for you and confirm the scope — whole-house, specific areas, or a pre-sale evaluation.',
      },
      {
        step: 2,
        title: 'On-Site Inspection',
        description:
          'Our electrician systematically inspects the panel, circuits, outlets, switches, grounding, and safety devices throughout the property.',
      },
      {
        step: 3,
        title: 'Written Report',
        description:
          'We provide a detailed written report documenting our findings, including safety hazards, code deficiencies, and recommended upgrades prioritized by urgency.',
      },
      {
        step: 4,
        title: 'Review & Next Steps',
        description:
          'We review the report with you, answer questions, and provide quotes for any recommended repairs or upgrades if you would like to proceed.',
      },
    ],
    pricingFactors: [
      'Property size and number of circuits',
      'Scope of the inspection (full house vs. specific systems)',
      'Purpose (general safety, pre-sale, insurance, code compliance)',
      'Age of the electrical system',
      'Turnaround time for the report',
    ],
    faqs: [
      {
        question: 'When should I get an electrical safety inspection?',
        answer:
          'We recommend an inspection when buying or selling a home, after purchasing an older home, if your system is more than 25 years old, after storm damage, or if you notice signs of electrical problems such as flickering lights, warm outlets, or frequent breaker trips.',
      },
      {
        question: 'What does an electrical inspection cover?',
        answer:
          'Our inspection covers the main panel and sub-panels, breaker condition, wiring type and condition, outlet and switch function, GFCI and AFCI protection, grounding, smoke and CO detectors, and overall code compliance.',
      },
      {
        question: 'Is this the same as a city building inspection?',
        answer:
          'No. Our inspection is a professional evaluation performed by a licensed electrician. City inspections are performed by building officials and are typically required when permitted work is completed. Our inspection is more comprehensive and includes written recommendations.',
      },
      {
        question: 'How long does an inspection take?',
        answer:
          'A typical residential inspection takes 1 to 2 hours depending on the size of the home and the number of circuits. Commercial properties take longer. We schedule enough time to be thorough.',
      },
      {
        question: 'Can you inspect for a real estate transaction?',
        answer:
          'Yes. We provide pre-sale and pre-purchase electrical inspections with fast turnaround on written reports. Agents and buyers appreciate our clear, professional documentation.',
      },
      {
        question: 'Do you perform Title 24 energy compliance evaluations?',
        answer:
          'Yes. We can evaluate your property lighting and electrical controls for Title 24 compliance and recommend upgrades to meet current California energy standards.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'service-calls-troubleshooting',
      'outlet-switch-dimmer-gfci-repairs',
    ],
    subtopics: [
      'Pre-sale electrical inspection',
      'Whole-house electrical safety audit',
      'Code compliance evaluation',
      'Title 24 energy inspection',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'your area homeowners, buyers, and real estate agents rely on Wheyland Electric for thorough electrical safety inspections. Whether you are preparing to sell your La Costa home, purchasing a fixer in Olde your area, or simply want peace of mind about your electrical system, we provide a comprehensive written evaluation with clear recommendations.',
      ['enc' + 'initas']:
        'Older homes in Leucadia and Cardiff-by-the-Sea particularly benefit from electrical safety inspections, as many were built before modern code requirements for GFCI, AFCI, and grounding. Wheyland Electric provides honest evaluations that help your area homeowners understand their system condition and prioritize upgrades.',
      'rancho-santa-fe':
        'your area real estate transactions often involve properties with complex electrical systems that warrant professional inspection. Wheyland Electric provides detailed safety evaluations for buyers, sellers, and estate managers, documenting every finding in a clear written report.',
      'san-marcos':
        'your area homeowners and real estate professionals count on Wheyland Electric for reliable electrical inspections. We evaluate panels, outlets, grounding, and safety devices throughout the home and deliver a written report that helps buyers and sellers make informed decisions.',
      'del-mar':
        'your area real estate moves quickly, and a professional electrical inspection helps buyers understand what they are purchasing and sellers present their property with confidence. Wheyland Electric provides fast-turnaround inspections with the detailed documentation your area transactions demand.',
      'solana-beach':
        'your area homeowners considering upgrades or preparing for a sale benefit from a professional electrical inspection. Wheyland Electric evaluates the entire system, identifies any safety concerns or code deficiencies, and provides a clear report with prioritized recommendations.',
      ['ocean' + 'side']:
        'your area diverse housing stock means electrical system quality varies considerably from property to property. Wheyland Electric provides electrical safety inspections for homeowners, buyers, investors, and property managers across your area, delivering honest assessments and actionable recommendations.',
    },
  },

  // 15. Commercial EV Charging
  {
    slug: 'commercial-ev-charging',
    category: 'commercial',
    name: 'Commercial EV Charging',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'commercial EV charging installation',
    secondaryKeywords: [
      'commercial EV charger electrician Carlsbad',
      'business EV charging station installation',
      'workplace EV charging San Diego',
      'fleet EV charging electrician',
      'Level 2 commercial EV charger installation',
      'parking lot EV charging station',
    ],
    shortDesc:
      'Commercial EV charging station installation for office parks, retail centers, restaurants, and multi-tenant properties across North County San Diego. Load management, permitting, and utility coordination handled end-to-end.',
    includedBullets: [
      'Site assessment and electrical infrastructure review',
      'Load management planning for multi-station installations',
      'Dedicated circuit installation for each charging station',
      'Charger mounting, wiring, and commissioning',
      'Permit procurement and AHJ inspection coordination',
      'Utility coordination for service upgrades when required',
      'Network-enabled charger setup and connectivity verification',
      'One-year labor warranty on all workmanship',
    ],
    overviewBullets: [
      'Carlsbad-based commercial electricians serving North County business parks and retail centers.',
      'Full-service commercial EV charging from load planning through permit inspection.',
      'Experience with office parks, restaurants, retail centers, and multi-tenant properties.',
      'Network-enabled charger setup for fleet management and billing.',
      'Utility coordination and service upgrade management when required.',
      'Code-compliant installations meeting California Title 24 and NEC standards.',
      'Minimal business disruption — we work around your operating hours.',
      'One-year labor warranty on all commercial EV charging work.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Site Assessment & Load Planning',
        description:
          'We evaluate your property electrical infrastructure, parking layout, anticipated charging demand, and utility service capacity to design the right system.',
      },
      {
        step: 2,
        title: 'System Design & Proposal',
        description:
          'You receive a detailed scope covering number of stations, load management strategy, conduit routing, permit path, and transparent pricing.',
      },
      {
        step: 3,
        title: 'Permitting & Utility Coordination',
        description:
          'We pull the electrical permit, coordinate with the AHJ, and handle any required utility service upgrade applications.',
      },
      {
        step: 4,
        title: 'Installation',
        description:
          'Our licensed electricians install all conduit, wiring, panels, and charger equipment. We work around your business schedule to minimize disruption.',
      },
      {
        step: 5,
        title: 'Commissioning & Handoff',
        description:
          'We commission each station, verify network connectivity, pass final inspection, and provide documentation for your records and any incentive applications.',
      },
    ],
    pricingFactors: [
      'Number of charging stations and circuit requirements',
      'Distance from electrical service to charging locations',
      'Whether a panel upgrade or sub-panel is required',
      'Load management hardware requirements',
      'Conduit routing complexity (trenching, concrete, parking structures)',
      'Charger brand and network requirements',
      'Permit and inspection fees by jurisdiction',
      'Utility coordination scope',
    ],
    faqs: [
      {
        question: 'What types of commercial properties do you install EV chargers for?',
        answer:
          'We install commercial EV charging for office parks, retail centers, restaurants, medical offices, multi-tenant commercial buildings, HOA communities, and parking structures throughout North County San Diego.',
      },
      {
        question: 'How many EV chargers can my property support?',
        answer:
          'It depends on your existing electrical service capacity and load. We perform a load assessment to determine how many stations your current infrastructure supports and what upgrades are needed for additional capacity.',
      },
      {
        question: 'Do commercial EV chargers require a permit?',
        answer:
          'Yes. Commercial EV charger installations require an electrical permit in all San Diego County jurisdictions. We handle the permit application, coordination with the AHJ, and final inspection.',
      },
      {
        question: 'What is load management and do I need it?',
        answer:
          'Load management systems dynamically distribute available electrical capacity across multiple chargers, allowing more stations without upgrading your service. For properties installing 3 or more chargers, load management often eliminates the need for a costly service upgrade.',
      },
      {
        question: 'Can you install network-enabled chargers for billing and fleet management?',
        answer:
          'Yes. We install and commission network-enabled chargers from ChargePoint, Blink, EvoCharge, and other platforms that support usage tracking, employee billing, and fleet management.',
      },
      {
        question: 'Are there incentives available for commercial EV charging installations?',
        answer:
          'Yes. SDG&E, CALSTART, and other programs offer incentives for commercial EV charging installations. We can point you toward current programs and provide the documentation needed for applications.',
      },
      {
        question: 'How long does a commercial EV charging installation take?',
        answer:
          'Timeline varies by scope. A single-station installation at an existing commercial property typically takes one to two days. Multi-station installations with service upgrades may take several days and require utility coordination.',
      },
      {
        question: 'Do you work with property managers and commercial landlords?',
        answer:
          'Yes. We work directly with property managers, commercial landlords, and tenant representatives on EV charging installations. We coordinate access, scheduling, and documentation to meet your property management requirements.',
      },
    ],
    relatedServices: [
      'commercial-tenant-improvement',
      'commercial-electrical-maintenance',
      'electrical-panel-upgrades',
    ],
    relatedServiceSlugs: [
      'commercial-tenant-improvement',
      'commercial-electrical-maintenance',
      'electrical-panel-upgrades',
    ],
    subtopics: [
      'Office park EV charging installation',
      'Retail EV charging station electrician',
      'Multi-tenant commercial EV charging',
      'Fleet charging infrastructure',
      'HOA EV charging installation',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Carlsbad business parks along Palomar Airport Road, Loker Avenue, and Faraday Avenue are seeing rapid EV adoption among employees and customers. Wheyland Electric designs and installs commercial EV charging infrastructure for office parks, retail centers, and multi-tenant properties throughout Carlsbad — from single-station installations to multi-port systems with load management. We handle the permit, utility coordination, and commissioning.',
      ['enc' + 'initas']:
        'Encinitas commercial properties along El Camino Real and Encinitas Boulevard are increasingly adding EV charging as a tenant amenity and employee benefit. Wheyland Electric provides commercial EV charging installation throughout Encinitas — fully permitted, load-managed, and ready for network connectivity.',
      'rancho-santa-fe':
        'Rancho Santa Fe commercial and equestrian properties require EV charging solutions scaled to their unique infrastructure. Wheyland Electric designs commercial charging systems for the limited commercial and estate-scale properties in this community with the same attention to detail we bring to every project.',
      'san-marcos':
        'San Marcos business parks, retail corridors, and restaurant properties along Grand Avenue and Rancheros Drive are prime candidates for commercial EV charging. Wheyland Electric installs commercial charging stations throughout San Marcos with full permit and utility coordination.',
      'del-mar':
        'Del Mar commercial properties and parking facilities benefit from EV charging as an amenity for customers and employees. Wheyland Electric provides commercial EV charging installation for Del Mar retail, office, and mixed-use properties.',
      'solana-beach':
        'Solana Beach commercial properties including the Cedros Design District benefit from EV charging as a customer amenity. Wheyland Electric installs commercial charging stations throughout Solana Beach with minimal disruption to business operations.',
      ['ocean' + 'side']:
        'Oceanside commercial properties across the downtown corridor, Mission Avenue business parks, and eastern industrial zones are adding EV charging infrastructure. Wheyland Electric provides commercial EV charging installation throughout Oceanside for retail, office, restaurant, and industrial properties.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Commercial EV Charging Installation in Carlsbad — Office Parks, Retail & Multi-Tenant',
      ['enc' + 'initas']:
        'Commercial EV Charging in Encinitas — Permitted, Load-Managed, Network-Ready',
      'rancho-santa-fe': 'Commercial EV Charging in Rancho Santa Fe — Estate & Commercial Scale',
      'san-marcos': 'Commercial EV Charging in San Marcos — Business Parks & Retail Centers',
      'del-mar': 'Commercial EV Charging in Del Mar — Customer & Employee Charging Solutions',
      'solana-beach': 'Commercial EV Charging in Solana Beach — Retail & Office Charging Installs',
      ['ocean' + 'side']: 'Commercial EV Charging in Oceanside — All Commercial Property Types',
    },
    whenToCallSigns: [
      'Your office park or retail center is receiving tenant requests for EV charging',
      'You want to attract and retain employees by offering workplace charging',
      'Your property is near a major employer or retail corridor with high EV adoption',
      'You are building out a new commercial space and want EV charging infrastructure roughed in',
      'Your HOA community is planning to add EV charging to common area parking',
      'You operate a fleet and need dedicated charging infrastructure at your facility',
      'You want to qualify for SDG&E or CALSTART commercial EV charging incentives',
    ],
  },

  // 16. Restaurant & Food Service Electrical
  {
    slug: 'restaurant-electrical',
    category: 'commercial',
    name: 'Restaurant & Food Service Electrical',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'restaurant electrician Carlsbad',
    secondaryKeywords: [
      'restaurant electrical contractor San Diego',
      'commercial kitchen electrician North County',
      'food service electrical installation',
      'restaurant tenant improvement electrician',
      'commercial kitchen hood electrical',
      'restaurant lighting electrician',
    ],
    shortDesc:
      'Electrical services for restaurants, cafes, and food service businesses across North County San Diego. Kitchen equipment hookups, hood systems, lighting, and tenant improvements — code-compliant and inspected.',
    includedBullets: [
      'Commercial kitchen equipment electrical hookups',
      'Hood and ventilation system electrical connections',
      'Dedicated circuits for high-draw equipment',
      'Restaurant lighting design and installation',
      'Tenant improvement electrical for new restaurant buildouts',
      'Title 24 energy compliance for lighting controls',
      '3-phase power for commercial cooking equipment',
      'Permit procurement and health department coordination',
      'One-year labor warranty on all workmanship',
    ],
    overviewBullets: [
      'Licensed commercial electricians with restaurant and food service experience.',
      'Kitchen equipment hookups sized to manufacturer specifications.',
      'Hood and ventilation system electrical connections to code.',
      'Title 24 lighting controls compliance for California restaurant requirements.',
      'Tenant improvement electrical from plan review through final inspection.',
      'Permit coordination with AHJ and health department documentation.',
      'Minimal downtime scheduling — we work around your kitchen hours.',
      'One-year labor warranty on all restaurant electrical work.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Plan Review & Kitchen Layout Assessment',
        description:
          'We review your equipment schedule, kitchen layout, and architectural plans to identify all electrical requirements and size circuits correctly.',
      },
      {
        step: 2,
        title: 'Proposal & Permitting',
        description:
          'You receive a detailed scope and pricing. We pull the electrical permit and coordinate with the building department and health department as required.',
      },
      {
        step: 3,
        title: 'Rough-In',
        description:
          'We install all conduit, wiring, and boxes for kitchen equipment, hood systems, lighting, and service panels. We pass the rough-in inspection before walls close.',
      },
      {
        step: 4,
        title: 'Equipment Hookup & Trim-Out',
        description:
          'Once equipment is delivered and positioned, we make final electrical connections, install lighting fixtures, and complete all device trim-out.',
      },
      {
        step: 5,
        title: 'Final Inspection & Commissioning',
        description:
          'We pass final electrical inspection, verify all equipment operates correctly, and provide documentation for your health department and certificate of occupancy.',
      },
    ],
    pricingFactors: [
      'Kitchen size and equipment count',
      'Equipment voltage and amperage requirements (single vs. 3-phase)',
      'Hood and ventilation system electrical scope',
      'Lighting fixture count and Title 24 control requirements',
      'Whether a panel upgrade or sub-panel is required',
      'New buildout vs. renovation of existing kitchen',
      'Permit and inspection fees',
    ],
    faqs: [
      {
        question: 'What electrical work does a restaurant buildout typically require?',
        answer:
          'A typical restaurant buildout requires a sub-panel or service upgrade, dedicated circuits for each major piece of kitchen equipment, hood and ventilation electrical connections, lighting throughout the dining and kitchen areas with Title 24 controls, and GFCI protection in wet areas.',
      },
      {
        question: 'Do you handle 3-phase electrical for commercial kitchen equipment?',
        answer:
          'Yes. Many commercial ovens, fryers, and dishwashers require 3-phase power. We install 3-phase panels and circuits for restaurants and food service operations throughout North County San Diego.',
      },
      {
        question: 'What is Title 24 and how does it affect restaurant lighting?',
        answer:
          'California Title 24 energy standards require restaurants to install lighting controls including occupancy sensors, daylight harvesting, and dimming in applicable areas. We ensure your restaurant lighting meets these requirements and passes inspection.',
      },
      {
        question: 'Can you work with my general contractor on a restaurant buildout?',
        answer:
          'Yes. We coordinate with general contractors, kitchen equipment vendors, and health department inspectors on restaurant buildouts. We sequence our work to meet construction milestones and keep your project on schedule.',
      },
      {
        question: 'Do you install hood and ventilation system electrical connections?',
        answer:
          'Yes. We make all electrical connections for commercial hood systems including exhaust fans, make-up air units, and fire suppression system interlocks. We coordinate with your hood vendor on specifications.',
      },
      {
        question: 'How do you minimize downtime for restaurant renovations?',
        answer:
          'For renovations to operating restaurants, we schedule electrical work during off-hours or in phases that maintain kitchen function. We communicate clearly with your management team on timing and any required shutdowns.',
      },
    ],
    relatedServices: [
      'commercial-tenant-improvement',
      'commercial-electrical-maintenance',
      'light-industrial-electrical',
    ],
    relatedServiceSlugs: [
      'commercial-tenant-improvement',
      'commercial-electrical-maintenance',
      'light-industrial-electrical',
    ],
    subtopics: [
      'Restaurant kitchen electrical hookups',
      'Commercial hood system electrical',
      'Restaurant tenant improvement electrician',
      'Food service Title 24 compliance',
      'Restaurant lighting installation',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Carlsbad has a dense restaurant corridor along Carlsbad Village Drive, Palomar Airport Road, and the Bressi Ranch Village Center. Wheyland Electric provides restaurant and food service electrical for new buildouts, renovations, and equipment upgrades throughout Carlsbad — from the permitting through the health department sign-off.',
      ['enc' + 'initas']:
        'Encinitas has a vibrant dining scene along Highway 101 and El Camino Real. Wheyland Electric handles restaurant electrical for new buildouts, kitchen renovations, and equipment additions throughout Encinitas — fully permitted and coordinated with the City of Encinitas building department.',
      'rancho-santa-fe':
        'Rancho Santa Fe dining establishments require electrical work that matches the caliber of this community. Wheyland Electric provides restaurant and food service electrical services with the precision and professionalism this market demands.',
      'san-marcos':
        'San Marcos has an active restaurant row along Grand Avenue and growing food service development near Cal State San Marcos. Wheyland Electric provides restaurant electrical for new buildouts and renovations throughout San Marcos.',
      'del-mar':
        'Del Mar restaurants along Camino Del Mar and in the retail centers require precise electrical work to meet health department and building code requirements. Wheyland Electric handles restaurant electrical in Del Mar with full permit and inspection management.',
      'solana-beach':
        'Solana Beach restaurants in the Cedros Design District and along Lomas Santa Fe Drive rely on Wheyland Electric for food service electrical that passes inspection the first time. We coordinate with the City of Solana Beach and health department on all restaurant electrical projects.',
      ['ocean' + 'side']:
        'Oceanside has a growing restaurant scene downtown and throughout the city. Wheyland Electric provides restaurant and food service electrical throughout Oceanside — from single-location buildouts to multi-unit food hall installations.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Restaurant Electrician in Carlsbad — Kitchen Hookups, Hood Systems & TI Work',
      ['enc' + 'initas']:
        'Restaurant Electrician in Encinitas — Food Service Electrical, Fully Permitted',
      'rancho-santa-fe':
        'Restaurant Electrician in Rancho Santa Fe — Precision Food Service Electrical',
      'san-marcos': 'Restaurant Electrician in San Marcos — Commercial Kitchen & Dining Electrical',
      'del-mar': 'Restaurant Electrician in Del Mar — Kitchen Equipment & Dining Room Electrical',
      'solana-beach':
        'Restaurant Electrician in Solana Beach — Food Service Electrical, Code-Compliant',
      ['ocean' + 'side']:
        'Restaurant Electrician in Oceanside — Full-Service Food Service Electrical',
    },
    whenToCallSigns: [
      'You are opening a new restaurant and need a licensed electrician for the buildout',
      'You are adding or replacing major kitchen equipment that requires dedicated circuits',
      'Your hood and ventilation system needs electrical connections or upgrades',
      'Your restaurant lighting does not meet Title 24 requirements',
      'You are renovating your dining room or bar and need updated lighting and circuits',
      'Your kitchen breakers trip under normal operating load',
      'You need 3-phase power for commercial cooking equipment',
      'You want to add EV charging for staff or customers at your restaurant location',
    ],
  },

  // 17. Commercial LED Lighting Retrofit
  {
    slug: 'commercial-led-lighting',
    category: 'commercial',
    name: 'Commercial LED Lighting Retrofit',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'commercial LED lighting retrofit San Diego',
    secondaryKeywords: [
      'commercial lighting upgrade Carlsbad',
      'warehouse LED lighting installation',
      'office LED retrofit electrician',
      'commercial lighting electrician North County',
      'LED lighting upgrade San Diego',
      'Title 24 lighting compliance electrician',
    ],
    shortDesc:
      'Commercial LED lighting retrofits and upgrades for offices, warehouses, retail spaces, and parking lots across North County San Diego. Energy savings, Title 24 compliance, and utility rebate assistance.',
    includedBullets: [
      'Existing lighting audit and energy savings analysis',
      'LED fixture selection and specification',
      'Fixture removal and LED installation',
      'Lighting control installation (occupancy sensors, dimmers, daylight harvesting)',
      'Title 24 energy compliance verification',
      'Utility rebate documentation assistance',
      'Parking lot and exterior lighting upgrades',
      'One-year labor warranty on all workmanship',
    ],
    overviewBullets: [
      'Commercial LED retrofits that reduce energy costs 40-70% versus older fixtures.',
      'Full lighting audit before any work — you know exactly what you are getting.',
      'Title 24 compliance handled as part of every commercial lighting project.',
      'Utility rebate documentation prepared to maximize your incentives.',
      'Minimal business disruption — phased installation available.',
      'Parking lot, exterior, and interior lighting all handled by one contractor.',
      'Licensed electricians, not lighting-only crews — full electrical scope capability.',
      'One-year labor warranty on all commercial lighting work.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Lighting Audit',
        description:
          'We inventory your existing fixtures, measure light levels, calculate energy consumption, and project savings from LED conversion.',
      },
      {
        step: 2,
        title: 'Specification & Proposal',
        description:
          'You receive a fixture specification, layout plan, control strategy, and itemized pricing — including estimated utility rebates.',
      },
      {
        step: 3,
        title: 'Permit & Rebate Applications',
        description:
          'We pull the required permit and prepare your SDG&E or utility rebate application documentation before work begins.',
      },
      {
        step: 4,
        title: 'Installation',
        description:
          'Our electricians complete the retrofit in phases that minimize disruption to your operations. We remove old fixtures, install LED replacements, and wire all controls.',
      },
      {
        step: 5,
        title: 'Commissioning & Documentation',
        description:
          'We commission all controls, verify light levels meet your requirements, pass final inspection, and finalize rebate paperwork.',
      },
    ],
    pricingFactors: [
      'Number and type of existing fixtures to replace',
      'Interior vs. exterior and parking lot scope',
      'Lighting control requirements (occupancy sensors, dimmers, BAS integration)',
      'Title 24 compliance scope',
      'Fixture quality and specification level',
      'Phasing requirements for occupied spaces',
      'Permit and inspection fees',
    ],
    faqs: [
      {
        question: 'How much can I save by switching to LED lighting?',
        answer:
          'Most commercial LED retrofits reduce lighting energy costs 40 to 70 percent compared to fluorescent or HID fixtures. The exact savings depend on your current fixture types, operating hours, and utility rates. We provide a specific savings projection during the audit.',
      },
      {
        question: 'Are there utility rebates available for commercial LED retrofits in San Diego?',
        answer:
          'Yes. SDG&E offers rebates for commercial LED lighting upgrades through their Business Energy Solutions program. Rebate amounts vary by fixture type and project scope. We prepare the documentation needed to maximize your rebate.',
      },
      {
        question: 'Does commercial LED lighting require a permit?',
        answer:
          'Lighting retrofits that modify the electrical system or require Title 24 compliance documentation typically require a permit. We handle the permit application and inspection coordination.',
      },
      {
        question: 'What is Title 24 and does my commercial space need to comply?',
        answer:
          'California Title 24 energy standards require commercial spaces to meet specific lighting power density limits and install controls such as occupancy sensors and daylight harvesting. Any lighting project that requires a permit triggers Title 24 compliance.',
      },
      {
        question: 'Can you retrofit warehouse high-bay lighting?',
        answer:
          'Yes. We replace metal halide and T5HO high-bay fixtures with LED high-bays in warehouses, manufacturing facilities, and industrial spaces. LED high-bays deliver better light quality at significantly lower energy consumption.',
      },
      {
        question: 'Can you handle parking lot lighting upgrades?',
        answer:
          'Yes. We replace parking lot pole fixtures, wall packs, and canopy lights with LED alternatives. We handle all electrical work including underground conduit, pole bases, and photocell controls.',
      },
    ],
    relatedServices: [
      'commercial-electrical-maintenance',
      'commercial-tenant-improvement',
      'light-fixture-installation',
    ],
    relatedServiceSlugs: [
      'commercial-electrical-maintenance',
      'commercial-tenant-improvement',
      'light-fixture-installation',
    ],
    subtopics: [
      'Warehouse LED lighting retrofit',
      'Office LED lighting upgrade',
      'Parking lot LED lighting',
      'Title 24 lighting compliance',
      'SDG&E commercial lighting rebates',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Carlsbad business parks along Palomar Airport Road and Loker Avenue house hundreds of office, warehouse, and light industrial tenants — most of which are still running fluorescent or HID fixtures that cost significantly more to operate than modern LED alternatives. Wheyland Electric provides commercial LED retrofits throughout Carlsbad with utility rebate documentation and Title 24 compliance.',
      ['enc' + 'initas']:
        'Encinitas commercial properties along El Camino Real and in the Highway 101 corridor benefit from LED retrofits that reduce operating costs and improve the appearance of retail and restaurant spaces. Wheyland Electric handles commercial lighting upgrades throughout Encinitas.',
      'rancho-santa-fe':
        'Rancho Santa Fe commercial and equestrian properties benefit from LED lighting upgrades that reduce energy costs while maintaining the aesthetic quality this community expects. Wheyland Electric provides lighting retrofits scaled to each property.',
      'san-marcos':
        'San Marcos has a large inventory of light industrial and warehouse space along Rancheros Drive and Grand Avenue. Wheyland Electric provides LED high-bay retrofits, office lighting upgrades, and parking lot lighting replacements throughout San Marcos.',
      'del-mar':
        'Del Mar retail and office properties benefit from LED upgrades that reduce energy costs and improve the quality of light in customer-facing spaces. Wheyland Electric handles commercial lighting retrofits throughout Del Mar.',
      'solana-beach':
        'Solana Beach commercial properties including the Cedros Design District benefit from LED lighting upgrades that reduce energy costs and enhance the retail experience. Wheyland Electric provides lighting retrofits with utility rebate documentation.',
      ['ocean' + 'side']:
        'Oceanside has a large and growing commercial inventory from downtown retail to inland industrial parks. Wheyland Electric provides commercial LED lighting retrofits throughout Oceanside — warehouse high-bays, office fixtures, parking lots, and exterior lighting.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'Commercial LED Lighting in Carlsbad — Retrofit, Rebates & Title 24 Compliance',
      ['enc' + 'initas']:
        'Commercial LED Lighting in Encinitas — Energy Savings, Full Permit Handling',
      'rancho-santa-fe':
        'Commercial LED Lighting in Rancho Santa Fe — Quality Fixtures, Energy Savings',
      'san-marcos': 'Commercial LED Lighting in San Marcos — Warehouse & Office LED Retrofits',
      'del-mar': 'Commercial LED Lighting in Del Mar — Retail & Office Lighting Upgrades',
      'solana-beach': 'Commercial LED Lighting in Solana Beach — LED Retrofit, SDG&E Rebates',
      ['ocean' + 'side']:
        'Commercial LED Lighting in Oceanside — Industrial, Retail & Parking Lot LED',
    },
    whenToCallSigns: [
      'Your commercial space still has fluorescent tubes or metal halide fixtures',
      'Your energy bills are higher than expected and lighting is a major contributor',
      'You are renovating a commercial space and want to upgrade lighting as part of the project',
      'Your parking lot or exterior lighting fixtures are failing or need replacement',
      'You need to meet Title 24 energy compliance for a permit or tenant improvement',
      'You want to apply for SDG&E commercial lighting rebates',
      'Your warehouse or industrial space has poor light levels affecting productivity',
    ],
  },

  // 18. HOA Electrical Services
  {
    slug: 'hoa-electrical-services',
    category: 'commercial',
    name: 'HOA Electrical Services',
    publish: true,
    tier: 'wave2',
    primaryKeyword: 'HOA electrician Carlsbad',
    secondaryKeywords: [
      'HOA electrical maintenance San Diego',
      'HOA common area lighting electrician',
      'homeowners association electrician North County',
      'property management electrician Carlsbad',
      'community electrical maintenance San Diego',
      'HOA parking lot lighting electrician',
    ],
    shortDesc:
      'Electrical maintenance and repair for HOA communities, property managers, and multi-family properties across North County San Diego. Scheduled service, transparent reporting, and reliable response.',
    includedBullets: [
      'Common area lighting maintenance and repair',
      'Parking lot and pathway lighting upgrades',
      'Panel inspections and maintenance for common area electrical',
      'Gate, access control, and security lighting electrical',
      'Pool and spa electrical maintenance and compliance',
      'Emergency response for HOA electrical issues',
      'Scheduled maintenance programs with flat-rate pricing',
      'Detailed service reports for board and property manager records',
    ],
    overviewBullets: [
      'Experienced HOA electrician serving North County master-planned communities.',
      'Scheduled maintenance programs reduce emergency calls and board liability.',
      'Transparent reporting after every visit — documentation boards can rely on.',
      'Common area lighting, gate electrical, pool circuits, and parking lot fixtures all covered.',
      'Priority response for HOA electrical emergencies.',
      'Flat-rate maintenance pricing makes budgeting predictable.',
      'Familiar with Bressi Ranch, Aviara, Robertson Ranch, and North County HOA infrastructure.',
      'One-year labor warranty on all HOA electrical work.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Property Walk & Assessment',
        description:
          'We walk the community with your property manager or board representative to document all electrical systems, identify maintenance needs, and establish a service baseline.',
      },
      {
        step: 2,
        title: 'Service Plan Proposal',
        description:
          'You receive a maintenance plan covering scope, frequency, pricing, and emergency response terms — designed to fit your HOA budget and maintenance cycle.',
      },
      {
        step: 3,
        title: 'Scheduled Maintenance Visits',
        description:
          'Our electricians perform scheduled visits covering common area lighting, panel inspections, GFCI testing, and any reported issues. We document everything.',
      },
      {
        step: 4,
        title: 'Reporting & Recommendations',
        description:
          'After each visit, your property manager receives a service report detailing work completed, issues identified, and recommended capital improvements.',
      },
    ],
    pricingFactors: [
      'Community size and number of common area electrical systems',
      'Frequency of scheduled service visits',
      'Scope of systems covered (lighting, panels, gate, pool, parking)',
      'Emergency response inclusion and response time requirements',
      'Age and condition of existing electrical infrastructure',
      'Capital improvement planning scope',
    ],
    faqs: [
      {
        question: 'What HOA communities do you serve in North County San Diego?',
        answer:
          'We serve HOA communities throughout Carlsbad, Encinitas, San Marcos, Oceanside, Del Mar, and Solana Beach — including master-planned communities like Bressi Ranch, Aviara, Robertson Ranch, San Elijo Hills, and Rancho Del Oro.',
      },
      {
        question: 'Do you offer scheduled maintenance contracts for HOAs?',
        answer:
          'Yes. We provide monthly and quarterly maintenance agreements customized to your community size, infrastructure, and budget. Each program includes scheduled visits, documentation, and priority emergency response.',
      },
      {
        question: 'What common area electrical systems do you maintain?',
        answer:
          'We maintain common area lighting, parking lot and pathway fixtures, gate and access control electrical, pool and spa circuits, irrigation pump electrical, mailbox kiosk lighting, and community signage electrical.',
      },
      {
        question: 'How do you document your work for HOA boards?',
        answer:
          'After every visit, we provide a written service report suitable for board meeting records, reserve study documentation, and property management files. We track recurring issues and flag capital improvement needs.',
      },
      {
        question: 'Can you respond to HOA electrical emergencies?',
        answer:
          'Yes. Maintenance contract clients receive priority emergency response. We respond promptly to power outages, safety hazards, and lighting failures in common areas.',
      },
      {
        question: 'Do you work with property management companies?',
        answer:
          'Yes. We partner with property management companies managing North County HOA portfolios. We integrate with your work order and approval processes and provide the documentation your management platform requires.',
      },
    ],
    relatedServices: [
      'commercial-electrical-maintenance',
      'commercial-led-lighting',
      'electrical-safety-inspections',
    ],
    relatedServiceSlugs: [
      'commercial-electrical-maintenance',
      'commercial-led-lighting',
      'electrical-safety-inspections',
    ],
    subtopics: [
      'HOA common area lighting maintenance',
      'HOA parking lot lighting repair',
      'Property management electrical services',
      'Master-planned community electrician',
      'HOA electrical maintenance contract',
    ],
    localizedIntroSeedByCity: {
      ['car' + 'lsbad']:
        'Carlsbad has more master-planned HOA communities than almost any city in North County — Bressi Ranch, Aviara, Robertson Ranch, Calavera Hills, and more. Wheyland Electric provides HOA electrical maintenance and repair for these communities with scheduled service programs, detailed reporting, and priority emergency response.',
      ['enc' + 'initas']:
        'Encinitas HOA communities including Encinitas Ranch, San Elijo Hills adjacent properties, and the coastal condominium complexes rely on consistent electrical maintenance to protect property values and resident safety. Wheyland Electric serves Encinitas HOAs with professional maintenance programs and prompt response.',
      'rancho-santa-fe':
        'Rancho Santa Fe HOA communities including The Covenant, Fairbanks Ranch, and Cielo require electrical maintenance that reflects the standards of these premier communities. Wheyland Electric provides HOA electrical services with the discretion and quality this market demands.',
      'san-marcos':
        'San Marcos HOA communities including San Elijo Hills, Rancho Dorado, and Barham Ranch benefit from scheduled electrical maintenance that prevents emergency failures and protects common area infrastructure. Wheyland Electric serves San Marcos HOAs with reliable maintenance programs.',
      'del-mar':
        'Del Mar HOA communities and condominium associations trust Wheyland Electric for electrical maintenance that protects their common area infrastructure and meets the standards of this premier coastal community.',
      'solana-beach':
        'Solana Beach HOA communities and multi-family properties benefit from Wheyland Electric scheduled electrical maintenance — consistent service, transparent documentation, and prompt response to resident-reported issues.',
      ['ocean' + 'side']:
        'Oceanside has a large inventory of HOA communities from Ocean Hills and Rancho Del Oro to the newer master-planned developments in the eastern neighborhoods. Wheyland Electric provides HOA electrical maintenance throughout Oceanside with scheduled service and detailed reporting.',
    },
    h1TaglineByCity: {
      ['car' + 'lsbad']:
        'HOA Electrician in Carlsbad — Bressi Ranch, Aviara & North County Communities',
      ['enc' + 'initas']:
        'HOA Electrician in Encinitas — Common Area Lighting & Scheduled Maintenance',
      'rancho-santa-fe':
        'HOA Electrician in Rancho Santa Fe — Premier Community Electrical Services',
      'san-marcos': 'HOA Electrician in San Marcos — Scheduled Maintenance & Emergency Response',
      'del-mar': 'HOA Electrician in Del Mar — Common Area Electrical, Documented & Reliable',
      'solana-beach':
        'HOA Electrician in Solana Beach — HOA Maintenance Programs, Transparent Reporting',
      ['ocean' + 'side']:
        'HOA Electrician in Oceanside — Serving Master-Planned Communities Citywide',
    },
    whenToCallSigns: [
      'Your HOA common area lighting has persistent failures that are not being resolved',
      'Your property management company needs a reliable licensed electrician for the portfolio',
      'Your HOA board wants scheduled maintenance to reduce emergency calls and liability',
      'Your community gate, access control, or security lighting needs electrical work',
      'Your parking lot or pathway lighting is failing or needs upgrading to LED',
      'You need detailed electrical maintenance documentation for board records or reserve studies',
      'Your pool or spa equipment electrical needs inspection or repair',
    ],
  },
];
const DEFAULT_FAQ_ENTRIES = (serviceName: string) => [
  {
    question: `Do you handle permits for ${serviceName.toLowerCase()} work?`,
    answer: 'Yes. We handle permitting and inspection coordination whenever the scope requires it.',
  },
  {
    question: `How should I prepare before ${serviceName.toLowerCase()} service day?`,
    answer:
      'We share a short prep checklist in advance so access, shutoffs, and scheduling are straightforward.',
  },
  {
    question: `Will you explain options before starting work?`,
    answer:
      'Yes. We review practical options, tradeoffs, and scope so you can approve the right plan.',
  },
  {
    question: `Is the work performed by licensed electricians?`,
    answer:
      'Yes. All work is completed by licensed electricians using current California and NEC standards.',
  },
  {
    question: `Do you test and verify performance after installation?`,
    answer:
      'Yes. We perform functional and safety testing before closeout and walk you through final operation.',
  },
  {
    question: `Can this service be bundled with related electrical upgrades?`,
    answer: `Absolutely. We can bundle ${serviceName.toLowerCase()} with related upgrades when that improves safety or efficiency.`,
  },
];

const SERVICE_CONTENT_OVERRIDES: Partial<Record<string, Partial<ServicePillar>>> = {
  'ev-charger-installation': {
    overviewBullets: [
      'Right-size charger strategy based on commute, battery size, and parking routine.',
      'Dedicated 240V branch circuit planning for stable overnight charging.',
      'Panel load review to protect breaker capacity and future expansion.',
      'Wall Connector or hardwired station placement for cord management and usability.',
      'Conduit routing options that balance aesthetics and serviceability.',
      'Permit-ready documentation and clear inspection path.',
      'Breaker, wire, and overcurrent protection matched to charger requirements.',
      'Final activation, app pairing, and charging-rate verification.',
      'Future-ready planning for second EV or added electrical loads.',
      'Homeowner handoff with usage and maintenance best practices.',
    ],
    includedItems: [
      'On-site charger location review with code-clearance checks.',
      'Load calculation and panel capacity validation.',
      'Dedicated 240V circuit design with proper conductor sizing.',
      'Breaker selection aligned to charger and branch-circuit specs.',
      'Charger mounting and torque-verified terminations.',
      'Conduit/fitting installation for indoor or exterior runs.',
      'Grounding and bonding verification at new equipment.',
      'Labeling and disconnect identification where required.',
      'Permit application package and inspection scheduling support.',
      'Startup validation and fault-code check.',
      'Mobile app onboarding and charging schedule setup.',
      'Final walkthrough with safety and usage guidance.',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Load Planning',
        description:
          'We confirm your vehicle, charging goals, and daily mileage, then complete a load review to size the circuit correctly.',
      },
      {
        step: 2,
        title: 'Design & Scope Approval',
        description:
          'You receive a clear scope covering charger location, routing approach, protection method, and permit path.',
      },
      {
        step: 3,
        title: 'Installation Day',
        description:
          'Our electricians install the branch circuit, mount the charger, and complete all terminations to manufacturer torque and code standards.',
      },
      {
        step: 4,
        title: 'Inspection & Commissioning',
        description:
          'We support permit inspection as required, then commission the charger and verify expected charging behavior.',
      },
      {
        step: 5,
        title: 'Handoff & Optimization',
        description:
          'We walk through app controls, charging schedules, and off-peak setup so your system is efficient from day one.',
      },
    ],
    pricingFactors: [
      'Panel headroom and available breaker space',
      'Distance from panel to charger mounting point',
      'Routing conditions (attic, crawlspace, finished walls, exterior runs)',
      'Charger power level and circuit amperage requirements',
      'Need for panel upgrade, subpanel, or load-management hardware',
      'Surface-mount vs concealed conduit requirements',
      'Permit scope and inspection complexity',
      'Site access constraints and installation logistics',
      'Single-charger vs multi-charger future-ready planning',
    ],
    faqs: [
      {
        question: 'What charger size should I install at home?',
        answer:
          'Most homes benefit from a Level 2 charger sized to your vehicle acceptance rate and daily mileage. We recommend the circuit and breaker to match real usage, not just the maximum published charger rating.',
      },
      {
        question: 'Can you install both Tesla and non-Tesla chargers?',
        answer:
          'Yes. We install Tesla Wall Connector and major J1772/NACS-compatible chargers, and we verify connector compatibility before scheduling.',
      },
      {
        question: 'Do I need a hardwired charger or a receptacle setup?',
        answer:
          'Hardwired installations are often preferred for durability and weather resistance. Receptacle-based setups can be appropriate in specific scenarios, and we will explain tradeoffs.',
      },
      {
        question: 'Will my existing panel support a new EV charger?',
        answer:
          'We perform a formal load review to determine if your panel has sufficient capacity. If not, we provide practical options such as panel upgrades or managed charging solutions.',
      },
      {
        question: 'How long does a typical EV charger install take?',
        answer:
          'Many straightforward installations are completed in a single visit. Complex routing, service changes, or permit sequencing can extend the schedule.',
      },
      {
        question: 'Do you handle permit and inspection steps?',
        answer:
          'Yes. We manage permit-related requirements and coordinate inspection steps so the installation is code-compliant and documented.',
      },
      {
        question: 'Can I set the charger to run during off-peak utility hours?',
        answer:
          'Yes. We help configure charger scheduling so you can align charging windows with utility time-of-use plans.',
      },
      {
        question: 'Can you prepare my home for a second EV later?',
        answer:
          'Yes. We can plan conduit paths, panel strategy, and equipment sizing to reduce future upgrade friction.',
      },
      {
        question: 'What affects charger reliability over time?',
        answer:
          'Proper conductor sizing, torque-verified terminations, weather-rated hardware, and clean commissioning all materially improve long-term reliability.',
      },
      {
        question: 'Do you test charging performance after installation?',
        answer:
          'Yes. We verify energization, fault behavior, and charging operation before handoff.',
      },
      {
        question: 'Will the installation include labeling and safety checks?',
        answer:
          'Yes. We include circuit labeling and required safety checks so future service and inspection are straightforward.',
      },
      {
        question: 'Can charger placement be optimized for daily convenience?',
        answer:
          'Absolutely. We evaluate parking position, cable reach, and mounting height to make everyday charging simple.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-panel-upgrades',
      'dedicated-circuits',
      'outlet-switch-dimmer-gfci-repairs',
    ],
    serviceProofPoints: [
      'Permit workflow managed end-to-end when required by scope.',
      'Load calculations aligned with panel capacity and EV demand.',
      'Compatibility planning for Tesla, NACS, and J1772 ecosystems.',
      'NEC and California code-compliant branch-circuit installation.',
      'Activation, functional testing, and customer onboarding at handoff.',
    ],
  },
  'commercial-ev-charging': {
    overviewBullets: [
      'Licensed North County commercial electricians with office park, retail, and multi-tenant EV charging experience.',
      'Load management strategy from the start — multi-station layouts sized to your service capacity and future growth.',
      'Network-enabled charger setup for fleet billing, usage reporting, and remote access control.',
      'Utility coordination and service upgrade management handled as part of your project scope.',
      'Permit procurement and AHJ inspection coordination through every phase.',
      'California Title 24 and NEC-compliant installations on every project.',
      'Dedicated circuits for each station — no shared-circuit compromises.',
      'Charger brand agnostic: ChargePoint, Blink, Tesla Wall Connector, Enel X, and J1772/NACS-compatible hardware.',
      'Phased deployment planning for properties adding stations in stages.',
      'One-year labor warranty on all workmanship.',
    ],
    includedItems: [
      'Site walk and existing electrical infrastructure assessment.',
      'Load calculation and service capacity review for single and multi-station layouts.',
      'Dedicated circuit design with conductor sizing matched to charger specifications.',
      'Breaker and overcurrent protection selection per NEC and charger requirements.',
      'Charger mounting, conduit routing, and torque-verified terminations.',
      'Trenching and underground conduit for parking lot and exterior runs.',
      'Network-enabled charger commissioning and connectivity verification.',
      'Fleet management platform onboarding and billing configuration.',
      'Utility upgrade coordination and service entrance work when required.',
      'Permit application package preparation and AHJ submittal.',
      'Inspection scheduling and job-site support through final sign-off.',
      'Labeling, disconnect identification, and code-required signage.',
      'Post-installation documentation for property records.',
      'One-year labor warranty on all installed work.',
    ],
    processSteps: [
      { step: 1, title: 'Site Assessment & Load Review', description: 'We walk the property, review your existing service capacity, and map station locations against electrical infrastructure — before any design work begins.' },
      { step: 2, title: 'System Design & Scope Approval', description: 'You receive a complete design covering station placement, load management approach, conduit routing, and permit path — with clear pricing before we schedule work.' },
      { step: 3, title: 'Permit Procurement', description: 'We prepare and submit permit documentation to the AHJ, coordinate utility notifications, and track approval status so your project stays on schedule.' },
      { step: 4, title: 'Installation', description: 'Our crew installs branch circuits, mounts stations, routes conduit, and completes all terminations to manufacturer torque specifications and code standards.' },
      { step: 5, title: 'Commissioning & Inspection', description: 'We commission each charger, verify network connectivity and billing configuration, and support permit inspection through final sign-off.' },
      { step: 6, title: 'Handoff & Documentation', description: 'Property manager or facilities team receives a full handoff: station operation, fleet platform access, and post-installation records for your files.' },
    ],
    pricingFactors: [
      'Number of charging stations and circuit runs required',
      'Distance from main service panel or subpanel to station locations',
      'Parking lot trenching and underground conduit requirements',
      'Service capacity and need for utility upgrade or new subpanel',
      'Load management hardware requirements for multi-station deployments',
      'Network-enabled vs non-networked charger hardware',
      'Permit scope and AHJ inspection complexity',
      'Phased deployment vs single-mobilization full build-out',
      'Property access and coordination requirements',
    ],
    faqs: [
      { question: 'How many EV charging stations can my existing electrical service support?', answer: 'That depends on your current service size, existing load, and whether load management hardware is used. We complete a formal load review on every commercial project before recommending a station count.' },
      { question: 'What is load management and do we need it?', answer: 'Load management systems dynamically distribute available power across multiple stations, allowing more chargers on a given service capacity. For properties with multiple stations or constrained service, it is often the most cost-effective path.' },
      { question: 'Which charger brands do you install?', answer: 'We are hardware agnostic. We install ChargePoint, Blink, Tesla Wall Connector, Enel X, and other J1772 and NACS-compatible commercial chargers. We will advise on hardware that fits your use case and budget.' },
      { question: 'Do you handle the permit and utility coordination?', answer: 'Yes. We prepare permit documentation, submit to the AHJ, coordinate with the utility on any service upgrade requirements, and support inspection through final sign-off.' },
      { question: 'Can you install stations in phases as demand grows?', answer: 'Yes. We design conduit infrastructure for future expansion during initial installation, which significantly reduces cost when you add stations later.' },
      { question: 'What is the typical timeline for a commercial EV charging project?', answer: 'Simple installations with existing service capacity can be completed in days once permitted. Multi-station projects with service upgrades or utility coordination typically run four to eight weeks depending on permit and utility timelines.' },
      { question: 'Is there financial assistance available for commercial EV charging?', answer: 'SDG&E and California programs periodically offer incentives for commercial EV charging infrastructure. We can identify current programs available for your property type during scoping.' },
      { question: 'Do you service and maintain commercial chargers after installation?', answer: 'Yes. We offer ongoing maintenance and priority service response for commercial EV charging infrastructure we install.' },
    ],
  },
  'restaurant-electrical': {
    overviewBullets: [
      'Licensed commercial electricians with hands-on restaurant and food service build-out experience.',
      'Kitchen equipment hookups sized precisely to manufacturer specifications — no undersized circuits.',
      'Hood and ventilation system electrical connections coordinated with mechanical and health department requirements.',
      'Title 24 lighting controls compliance handled as part of every California restaurant project.',
      'Tenant improvement electrical from plan review through final inspection and health department sign-off.',
      '3-phase power distribution for commercial cooking equipment, walk-in refrigeration, and dishwashers.',
      'Permit coordination with AHJ and documentation support for health department inspections.',
      'Minimal downtime scheduling — phased work and off-hours installation available.',
      'Emergency response for restaurant electrical failures that cannot wait.',
      'One-year labor warranty on all workmanship.',
    ],
    includedItems: [
      'Commercial kitchen equipment circuit design and hookup.',
      'Hood and ventilation system electrical connections per mechanical specifications.',
      'Dedicated circuits for ranges, fryers, convection ovens, steamers, and high-draw equipment.',
      '3-phase power distribution panels and branch circuits for commercial cooking loads.',
      'Walk-in cooler and freezer electrical connections and dedicated circuits.',
      'Dishwasher, warewasher, and booster heater electrical hookups.',
      'Restaurant dining and bar lighting design, installation, and dimmer controls.',
      'Title 24 energy compliance verification for lighting controls.',
      'POS system power and low-voltage rough-in coordination.',
      'Tenant improvement electrical rough-in and trim for new buildouts.',
      'Permit procurement and AHJ submittal for all permitted work.',
      'Health department inspection coordination and documentation.',
      'Labeling, panel directory updates, and as-built documentation.',
      'One-year labor warranty on all installed work.',
    ],
    processSteps: [
      { step: 1, title: 'Equipment & Load Review', description: 'We review your equipment schedule, manufacturer spec sheets, and utility service to design circuits that match real equipment loads — not generic estimates.' },
      { step: 2, title: 'Design & Permit Coordination', description: 'We prepare electrical design documentation, coordinate with your general contractor and mechanical sub, and submit permits to the AHJ and health department as required.' },
      { step: 3, title: 'Rough-In', description: 'Our crew completes conduit, wire, and panel rough-in work coordinated with your project schedule — timed to avoid conflicts with other trades.' },
      { step: 4, title: 'Equipment Hookups & Trim', description: 'We connect kitchen equipment, hood systems, lighting, and controls to manufacturer specifications with torque-verified terminations on every connection.' },
      { step: 5, title: 'Inspection & Commissioning', description: 'We support AHJ and health department inspections, commission all circuits, verify equipment operation, and resolve any punch items before handoff.' },
      { step: 6, title: 'Handoff & Documentation', description: 'Owner or manager receives panel directory, circuit labeling, and as-built documentation — everything needed for future service and health department records.' },
    ],
    pricingFactors: [
      'Size and complexity of kitchen equipment schedule',
      'Number of dedicated high-draw circuits required',
      '3-phase vs single-phase service requirements',
      'Hood system electrical complexity and interlock requirements',
      'Lighting scope and Title 24 controls requirements',
      'Tenant improvement build-out extent vs targeted equipment work',
      'Permit scope and AHJ or health department inspection requirements',
      'Phased opening schedule and coordination with other trades',
      'Emergency or off-hours work requirements',
    ],
    faqs: [
      { question: 'Do you work with our general contractor on restaurant build-outs?', answer: 'Yes. We coordinate directly with your GC, mechanical sub, and equipment vendors. Clear communication between trades is how restaurant projects stay on schedule.' },
      { question: 'Can you size circuits directly from equipment spec sheets?', answer: 'Yes. We pull manufacturer data sheets for every piece of equipment and design circuits to match actual nameplate requirements — not generic estimates.' },
      { question: 'Do you handle health department electrical documentation?', answer: 'Yes. We prepare and coordinate electrical documentation required for health department inspections as part of our standard scope on restaurant projects.' },
      { question: 'What is Title 24 and why does it apply to our restaurant?', answer: 'Title 24 is California energy code that mandates specific lighting controls in commercial spaces including restaurants. We handle compliance as part of every California restaurant lighting project.' },
      { question: 'Can you work around our operating hours to minimize downtime?', answer: 'Yes. We schedule phased work, off-hours installation, and equipment hookup sequencing to minimize impact on your operations and opening timeline.' },
      { question: 'Do you install 3-phase power for commercial cooking equipment?', answer: 'Yes. We install and service 3-phase distribution panels and branch circuits for commercial ranges, convection ovens, steamers, and other high-draw kitchen equipment.' },
      { question: 'What happens if we need to add equipment after opening?', answer: 'We document panel capacity and available circuits at handoff so future equipment additions are straightforward. Adding circuits to an existing restaurant is a standard service call for us.' },
      { question: 'Do you handle emergency electrical failures during service?', answer: 'Yes. We offer priority emergency response for restaurant electrical failures. A kitchen down during service is not something that can wait for a scheduled appointment.' },
    ],
  },
  'commercial-led-lighting': {
    overviewBullets: [
      'Commercial LED retrofits that reduce lighting energy costs 40–70% versus fluorescent and HID fixtures.',
      'Full lighting audit before any work — fixture counts, wattage, hours of operation, and calculated payback period.',
      'Title 24 California energy code compliance handled as part of every commercial lighting project.',
      'Utility rebate documentation prepared to maximize SDG&E and California incentive programs.',
      'Offices, warehouses, retail spaces, parking lots, and exterior — all handled by one licensed electrical contractor.',
      'Lighting controls included where they improve performance: occupancy sensors, daylight harvesting, dimmers.',
      'Phased installation available to minimize business disruption during operating hours.',
      'Licensed electricians perform all work — not lighting-only crews without electrical licensing.',
      'Fixture specification assistance for color temperature, CRI, and lumen output matched to your space.',
      'One-year labor warranty on all workmanship.',
    ],
    includedItems: [
      'Existing lighting audit: fixture inventory, wattage, hours of operation, and energy cost baseline.',
      'LED fixture specification and product selection matched to space requirements.',
      'Energy savings and payback period calculation prior to project approval.',
      'Utility rebate program identification and documentation preparation.',
      'Existing fixture removal and disposal.',
      'LED fixture installation with proper mounting, wiring, and torque-verified terminations.',
      'Occupancy sensor installation and commissioning.',
      'Daylight harvesting control installation where applicable.',
      'Dimmer and lighting control panel installation.',
      'Title 24 energy compliance verification and documentation.',
      'Parking lot pole light and exterior fixture replacement.',
      'Emergency egress lighting testing and compliance verification.',
      'Labeling and panel directory updates for new circuits or loads.',
      'One-year labor warranty on all installed work.',
    ],
    processSteps: [
      { step: 1, title: 'Lighting Audit', description: 'We inventory every fixture, measure current wattage and lumen output, review hours of operation, and calculate your current lighting energy cost — giving you a clear baseline before any commitment.' },
      { step: 2, title: 'Fixture Specification & Savings Analysis', description: 'We specify replacement fixtures matched to your space requirements and produce a detailed energy savings and payback analysis, including available utility rebates.' },
      { step: 3, title: 'Proposal & Scheduling', description: 'You receive a complete scope with fixture specifications, savings projections, rebate documentation plan, and phased installation schedule if required.' },
      { step: 4, title: 'Installation', description: 'Our licensed electricians remove existing fixtures and install LED replacements with proper mounting, wiring, and commissioning — phased to minimize business disruption.' },
      { step: 5, title: 'Controls Commissioning', description: 'Occupancy sensors, daylight harvesting controls, and dimmers are commissioned and tested to verify correct operation and maximum energy performance.' },
      { step: 6, title: 'Title 24 Verification & Rebate Submission', description: 'We complete Title 24 compliance documentation and prepare your utility rebate submission package so you capture every available incentive.' },
    ],
    pricingFactors: [
      'Number of fixtures and square footage of space',
      'Fixture type complexity (troffer, high-bay, exterior, parking lot poles)',
      'Lighting controls scope (occupancy sensors, daylight harvesting, dimming)',
      'Title 24 compliance documentation requirements',
      'Phased vs single-mobilization installation scheduling',
      'Disposal requirements for existing fixtures',
      'Emergency egress lighting compliance scope',
      'Utility rebate program requirements that affect fixture specification',
      'Ceiling height and access requirements for high-bay installations',
    ],
    faqs: [
      { question: 'How much will we actually save after switching to LED?', answer: 'Most commercial facilities see 40–70% reduction in lighting energy costs. We calculate your specific baseline from the audit and provide a projected payback period before you approve any work.' },
      { question: 'What utility rebates are available for commercial LED upgrades in San Diego?', answer: 'SDG&E and California programs offer rebates for qualifying commercial LED projects. Rebate availability and amounts change periodically. We identify current programs during the audit phase and prepare required documentation.' },
      { question: 'What is Title 24 and does our project require it?', answer: 'Title 24 is California energy code. Most commercial lighting projects in California require Title 24 compliance, which mandates specific lighting controls. We handle compliance documentation as part of every commercial lighting project.' },
      { question: 'Can you install lighting controls as part of the retrofit?', answer: 'Yes. Occupancy sensors, daylight harvesting controls, and dimmers are included in our scope where they improve energy performance and Title 24 compliance.' },
      { question: 'Do you handle parking lot and exterior lighting?', answer: 'Yes. Parking lot pole lights, wall packs, canopy fixtures, and other exterior lighting are part of our commercial LED scope.' },
      { question: 'Can installation be phased to avoid closing our business?', answer: 'Yes. We schedule phased installation and can work off-hours for spaces that cannot be taken offline during business hours.' },
      { question: 'Who specifies the replacement fixtures?', answer: 'We specify fixtures based on your space requirements: color temperature, CRI, lumen output, and mounting type. You approve the specification before any product is ordered.' },
      { question: 'Are you licensed electricians or a lighting-only contractor?', answer: 'We are licensed California electrical contractors. All work is performed and warranted by licensed electricians — not lighting-only installation crews.' },
      { question: 'How long does a typical commercial LED retrofit take?', answer: 'Small office retrofits can be completed in a day or two. Larger facilities, phased projects, or projects requiring controls commissioning typically run one to two weeks depending on scope and scheduling.' },
    ],
  },
  'hoa-electrical-services': {
    overviewBullets: [
      'Experienced HOA electrician serving North County master-planned communities including Bressi Ranch, Aviara, Calavera Hills, and La Costa.',
      'Scheduled maintenance programs that reduce emergency calls, extend equipment life, and protect board liability.',
      'Transparent post-service reporting after every visit — documentation boards and property managers can rely on for records and vendor accountability.',
      'Common area lighting, gate and access control electrical, pool and spa circuits, and parking lot fixtures all handled under one contract.',
      'Priority emergency response for HOA electrical failures that affect resident safety or community operations.',
      'Flat-rate maintenance pricing for predictable budgeting and reserve planning.',
      'Pool and spa electrical compliance — bonding, GFCI protection, and safety inspection to NEC and California code.',
      'Parking lot and pathway lighting upgrades that improve resident safety and reduce long-term maintenance costs.',
      'Panel inspections and load reviews for common area electrical infrastructure.',
      'One-year labor warranty on all workmanship.',
    ],
    includedItems: [
      'Common area lighting inspection, maintenance, and repair.',
      'Parking lot pole light and pathway lighting maintenance and replacement.',
      'LED lighting upgrades for common area and exterior fixtures.',
      'Gate, access control, and entry system electrical maintenance.',
      'Security lighting inspection and repair.',
      'Pool and spa electrical maintenance: bonding verification, GFCI testing, equipment circuits.',
      'Pool and spa electrical compliance inspections per NEC 680 and California code.',
      'Panel inspections and load reviews for common area electrical panels.',
      'Circuit breaker testing and replacement for common area panels.',
      'Emergency electrical response for HOA common area failures.',
      'Scheduled maintenance visits with flat-rate pricing.',
      'Detailed service reports after every visit for board and property manager records.',
      'Vendor documentation and certificate of insurance on file for board requirements.',
      'One-year labor warranty on all installed work.',
    ],
    processSteps: [
      { step: 1, title: 'Community Assessment', description: 'We walk your common areas, document existing electrical infrastructure, identify deferred maintenance items, and provide a prioritized scope for immediate repairs and long-term planning.' },
      { step: 2, title: 'Maintenance Program Setup', description: 'We establish a scheduled maintenance program with visit frequency, scope of each visit, flat-rate pricing, and reporting format — approved by the board before any work begins.' },
      { step: 3, title: 'Scheduled Maintenance Visits', description: 'Our crew performs inspections, preventive maintenance, and minor repairs on each scheduled visit, documenting findings and completed work for board records.' },
      { step: 4, title: 'Repair & Upgrade Work', description: 'Identified repairs and upgrades are scoped, priced, and approved before work begins. No surprise invoices — every item is authorized by the board or property manager.' },
      { step: 5, title: 'Emergency Response', description: 'Priority response for electrical failures affecting resident safety or community operations. We carry adequate stock of common HOA electrical materials to resolve most issues on first response.' },
      { step: 6, title: 'Reporting & Documentation', description: 'After every visit you receive a detailed service report: work completed, findings, photos, and recommendations — formatted for board meeting records and reserve study documentation.' },
    ],
    pricingFactors: [
      'Size of community and number of common area electrical assets',
      'Current condition of electrical infrastructure and deferred maintenance backlog',
      'Scope of scheduled maintenance visits',
      'Pool and spa electrical compliance requirements',
      'Parking lot lighting scope and fixture count',
      'Gate and access control electrical complexity',
      'Emergency response priority level and response time requirements',
      'LED upgrade scope included in maintenance program',
      'Reporting and documentation requirements',
    ],
    faqs: [
      { question: 'What does a typical HOA electrical maintenance program include?', answer: 'Scheduled visits covering common area lighting inspection and repair, parking lot fixtures, gate and access control electrical, pool and spa circuit testing, panel inspections, and detailed reporting after every visit.' },
      { question: 'How does flat-rate maintenance pricing work?', answer: 'We agree on a fixed price per scheduled visit based on your community size and scope. This covers labor for all routine maintenance items in the agreed scope — no hourly billing surprises for standard maintenance work.' },
      { question: 'Do you handle pool and spa electrical compliance?', answer: 'Yes. Pool and spa electrical work requires specific compliance with NEC Article 680 and California code covering bonding, GFCI protection, and equipment circuits. We perform compliance inspections and all required maintenance and repair.' },
      { question: 'Can you provide documentation for our reserve study?', answer: 'Yes. Our service reports document the condition of electrical assets, completed maintenance, and recommended capital repairs — formatted to support reserve study documentation.' },
      { question: 'What is your emergency response time for HOA calls?', answer: 'We offer priority response for HOA electrical emergencies. Response time depends on the nature of the emergency and current call volume, but HOA common area failures affecting resident safety are treated as high priority.' },
      { question: 'Do you carry insurance and licensing documentation for board files?', answer: 'Yes. We provide current certificate of insurance, contractor license verification, and any other vendor documentation required by your board or management company.' },
      { question: 'Can you upgrade our parking lot lighting to LED as part of the maintenance program?', answer: 'Yes. LED upgrades for parking lot and common area lighting are a common scope addition to maintenance programs — improving reliability, reducing energy costs, and lowering long-term maintenance frequency.' },
      { question: 'Do you work with property management companies directly?', answer: 'Yes. We work directly with property managers for day-to-day work authorization, reporting, and invoicing, while keeping board-level communication available when required.' },
    ],
  },
};

const ensureCount = (items: string[], minimum: number, filler: string[]): string[] => {
  const next = [...new Set(items.filter(Boolean))];
  for (const candidate of filler) {
    if (next.length >= minimum) break;
    if (!next.includes(candidate)) next.push(candidate);
  }
  return next;
};

const normalizePillarContent = (pillar: ServicePillar): ServicePillar => {
  const override = SERVICE_CONTENT_OVERRIDES[pillar.slug] || {};

  const overviewBullets = ensureCount(
    (override.overviewBullets as string[]) ||
      pillar.overviewBullets ||
      pillar.whenToCallSigns ||
      pillar.includedBullets,
    8,
    [
      `Clear project scoping for ${pillar.name.toLowerCase()} with safety-first recommendations.`,
      'Code-compliant planning before installation begins.',
      'Professional execution with clean finish quality.',
      'Final testing and homeowner handoff.',
    ]
  ).slice(0, 12);

  const includedItems = ensureCount(
    (override.includedItems as string[]) || pillar.includedItems || pillar.includedBullets,
    10,
    [
      'Site preparation and protection of nearby finishes.',
      'Material verification before energizing equipment.',
      'Final functionality check and cleanup.',
    ]
  ).slice(0, 16);

  const processSteps = (
    (override.processSteps as ServicePillar['processSteps']) || pillar.processSteps
  ).slice(0, 5);

  const pricingFactors = ensureCount(
    (override.pricingFactors as string[]) || pillar.pricingFactors,
    7,
    ['Existing system condition', 'Scope complexity and access', 'Required permit path']
  ).slice(0, 10);

  const faqSeed = [
    ...((override.faqs as ServicePillar['faqs']) || pillar.faqs || []),
    ...DEFAULT_FAQ_ENTRIES(pillar.name),
  ];
  const faqs = faqSeed
    .filter(
      (faq, i, arr) => faq?.question && arr.findIndex((f) => f.question === faq.question) === i
    )
    .slice(0, 14);

  const relatedServiceSlugs = (
    (override.relatedServiceSlugs as string[]) ||
    pillar.relatedServiceSlugs ||
    pillar.relatedServices
  )
    .filter(Boolean)
    .slice(0, 4);

  const normalized: ServicePillar = {
    ...pillar,
    ...override,
    overviewBullets,
    includedItems,
    processSteps: processSteps.length >= 4 ? processSteps : pillar.processSteps,
    pricingFactors,
    faqs: faqs.length >= 10 ? faqs : [...faqs, ...DEFAULT_FAQ_ENTRIES(pillar.name)].slice(0, 10),
    relatedServiceSlugs:
      relatedServiceSlugs.length >= 2 ? relatedServiceSlugs : pillar.relatedServices.slice(0, 2),
    relatedServices: relatedServiceSlugs.length >= 2 ? relatedServiceSlugs : pillar.relatedServices,
  };

  return normalized;
};

export const servicePillars: ServicePillar[] = baseServicePillars.map(normalizePillarContent);

// ============================================================
// Extended Service Catalog (~90 services)
// ============================================================

export const extendedServices: ExtendedService[] = [
  // --- Service Calls & Troubleshooting ---
  {
    name: 'Emergency electrical services',
    category: 'residential',
    relatedPillarSlug: 'service-calls-troubleshooting',
  },
  {
    name: 'Electrical troubleshooting and repairs',
    category: 'residential',
    relatedPillarSlug: 'service-calls-troubleshooting',
  },
  {
    name: 'Power outage restoration',
    category: 'residential',
    relatedPillarSlug: 'service-calls-troubleshooting',
  },
  {
    name: 'Residential electrical installations',
    category: 'residential',
    relatedPillarSlug: 'service-calls-troubleshooting',
  },
  {
    name: 'Residential electrical services',
    category: 'residential',
    relatedPillarSlug: 'service-calls-troubleshooting',
  },
  {
    name: 'Emergency electrical response services',
    category: 'residential',
    relatedPillarSlug: 'service-calls-troubleshooting',
  },

  // --- Electrical Panel Upgrades ---
  {
    name: 'Main electrical panel upgrades',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Main electrical panel replacements',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Sub-panel installations',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Sub-panel replacements',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Main service switchgear planning',
    category: 'commercial',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Multi-unit meter planning and design',
    category: 'commercial',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Electrical systems infrastructure upgrades',
    category: 'commercial',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Circuit breaker installations',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Circuit breaker replacements',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Whole-home surge protection installations',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Electrical grounding system installations',
    category: 'residential',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },
  {
    name: 'Electrical load calculations',
    category: 'compliance',
    relatedPillarSlug: 'electrical-panel-upgrades',
  },

  // --- EV Charger Installation ---
  {
    name: 'Electric vehicle (EV) charger installations',
    category: 'ev',
    relatedPillarSlug: 'ev-charger-installation',
  },

  // --- Recessed Lighting Installation ---
  {
    name: 'Recessed lighting installations',
    category: 'residential',
    relatedPillarSlug: 'recessed-lighting-installation',
  },
  {
    name: 'Under-cabinet lighting installations',
    category: 'residential',
    relatedPillarSlug: 'recessed-lighting-installation',
  },
  {
    name: 'Accent lighting installations',
    category: 'residential',
    relatedPillarSlug: 'recessed-lighting-installation',
  },

  // --- Light Fixture Installation ---
  {
    name: 'Electrical fixture installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Lighting system design and installation',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'LED lighting installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'LED lighting retrofits',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Commercial lighting installations',
    category: 'commercial',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Parking lot lighting installations',
    category: 'commercial',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Chandelier installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Decorative lighting installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Track lighting installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Security lighting installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Low-voltage lighting installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'High-reach lighting installations',
    category: 'commercial',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Mood lighting installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Smart lighting control installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Energy-efficient lighting upgrades',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Lighting fixture replacements',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },
  {
    name: 'Home automation system installations',
    category: 'residential',
    relatedPillarSlug: 'light-fixture-installation',
  },

  // --- Ceiling Fan Installation ---
  {
    name: 'Ceiling fan installations',
    category: 'residential',
    relatedPillarSlug: 'ceiling-fan-installation',
  },
  {
    name: 'Ceiling fan lighting installations',
    category: 'residential',
    relatedPillarSlug: 'ceiling-fan-installation',
  },
  {
    name: 'Exhaust fan installations',
    category: 'residential',
    relatedPillarSlug: 'ceiling-fan-installation',
  },
  {
    name: 'Attic fan installations',
    category: 'residential',
    relatedPillarSlug: 'ceiling-fan-installation',
  },
  {
    name: 'Whole house fan installations',
    category: 'residential',
    relatedPillarSlug: 'ceiling-fan-installation',
  },

  // --- Spa, Jacuzzi & Sauna Electrical ---
  {
    name: 'Hot tub electrical installations',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },
  {
    name: 'Sauna electrical installations',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },
  {
    name: 'Ice bath electrical installations',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },
  {
    name: 'Pool and spa electrical wiring',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },
  {
    name: 'Outdoor living space electrical installations',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },
  {
    name: 'Infratech heater installations',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },
  {
    name: 'Pergola electrical wiring',
    category: 'residential',
    relatedPillarSlug: 'spa-jacuzzi-sauna-electrical',
  },

  // --- Outlet, Switch, Dimmer & GFCI Repairs ---
  {
    name: 'Electrical outlet installations',
    category: 'residential',
    relatedPillarSlug: 'outlet-switch-dimmer-gfci-repairs',
  },
  {
    name: 'GFCI outlet installations',
    category: 'residential',
    relatedPillarSlug: 'outlet-switch-dimmer-gfci-repairs',
  },
  {
    name: 'AFCI outlet installations',
    category: 'residential',
    relatedPillarSlug: 'outlet-switch-dimmer-gfci-repairs',
  },
  {
    name: 'Bathroom electrical upgrades',
    category: 'residential',
    relatedPillarSlug: 'outlet-switch-dimmer-gfci-repairs',
  },
  {
    name: 'Electrical outlet relocation',
    category: 'residential',
    relatedPillarSlug: 'outlet-switch-dimmer-gfci-repairs',
  },

  // --- Dedicated Circuits ---
  {
    name: 'Generator installations',
    category: 'residential',
    relatedPillarSlug: 'dedicated-circuits',
  },
  {
    name: 'Home theater electrical installations',
    category: 'residential',
    relatedPillarSlug: 'dedicated-circuits',
  },
  {
    name: 'Kitchen appliance electrical installations',
    category: 'residential',
    relatedPillarSlug: 'dedicated-circuits',
  },
  {
    name: 'Commercial kitchen hood system installations',
    category: 'commercial',
    relatedPillarSlug: 'dedicated-circuits',
  },
  {
    name: 'Voice and data cabling installations',
    category: 'commercial',
    relatedPillarSlug: 'dedicated-circuits',
  },

  // --- Remodel & Rewiring (incl. ADU) ---
  {
    name: 'New electrical wiring installations',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'Electrical rewiring',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'Complete electrical wiring for new constructions',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'Electrical rewiring for existing structures',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'Electrical engineering and design',
    category: 'commercial',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'Electrical remodeling services',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'New construction electrical services',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },
  {
    name: 'Accessory Dwelling Unit (ADU) electrical services',
    category: 'residential',
    relatedPillarSlug: 'remodel-rewiring-adu',
  },

  // --- Commercial Tenant Improvement ---
  {
    name: 'Tenant improvement electrical services',
    category: 'commercial',
    relatedPillarSlug: 'commercial-tenant-improvement',
  },
  {
    name: '3-phase commercial equipment electrical hookups',
    category: 'commercial',
    relatedPillarSlug: 'commercial-tenant-improvement',
  },
  {
    name: 'Commercial electrical services',
    category: 'commercial',
    relatedPillarSlug: 'commercial-tenant-improvement',
  },

  // --- Commercial Electrical Maintenance ---
  {
    name: 'Preventative electrical maintenance programs',
    category: 'commercial',
    relatedPillarSlug: 'commercial-electrical-maintenance',
  },
  {
    name: 'Multi-family property electrical maintenance',
    category: 'hoa',
    relatedPillarSlug: 'commercial-electrical-maintenance',
  },
  {
    name: 'Property management electrical services',
    category: 'hoa',
    relatedPillarSlug: 'commercial-electrical-maintenance',
  },
  {
    name: 'Energy efficiency optimization services',
    category: 'compliance',
    relatedPillarSlug: 'commercial-electrical-maintenance',
  },

  // --- Light Industrial Electrical ---
  {
    name: 'Electrical control system installations',
    category: 'industrial',
    relatedPillarSlug: 'light-industrial-electrical',
  },
  {
    name: 'Specialty electrical projects',
    category: 'industrial',
    relatedPillarSlug: 'light-industrial-electrical',
  },
  {
    name: 'Industrial electrical services',
    category: 'industrial',
    relatedPillarSlug: 'light-industrial-electrical',
  },
  {
    name: 'Temporary power installations',
    category: 'industrial',
    relatedPillarSlug: 'light-industrial-electrical',
  },

  // --- Electrical Safety Inspections ---
  {
    name: 'Electrical permitting and inspections',
    category: 'compliance',
    relatedPillarSlug: 'electrical-safety-inspections',
  },
  {
    name: 'Title 24 energy compliance controls',
    category: 'compliance',
    relatedPillarSlug: 'electrical-safety-inspections',
  },
  {
    name: 'Electrical code compliance audits',
    category: 'compliance',
    relatedPillarSlug: 'electrical-safety-inspections',
  },
  {
    name: 'Electrical safety inspections',
    category: 'compliance',
    relatedPillarSlug: 'electrical-safety-inspections',
  },
  {
    name: 'Smoke detector installations',
    category: 'residential',
    relatedPillarSlug: 'electrical-safety-inspections',
  },
  {
    name: 'Carbon monoxide detector installations',
    category: 'residential',
    relatedPillarSlug: 'electrical-safety-inspections',
  },
];

// ============================================================
// Helper Functions
// ============================================================

/** Get published pillars (respects Wave 2 flag) */
export function getPublishedPillars(): ServicePillar[] {
  return servicePillars.filter((p) => p.publish || (p.tier === 'wave2' && flags.publish_wave2));
}

/** Get the residential priority pillars for sub-neighborhood city pages.
 * Sub-neighborhoods show 8 residential pillars — no commercial services.
 * Order matches search demand priority for these communities.
 */
export function getNeighborhoodPillars(): ServicePillar[] {
  const priority = [
    'ev-charger-installation',
    'electrical-panel-upgrades',
    'service-calls-troubleshooting',
    'recessed-lighting-installation',
    'light-fixture-installation',
    'ceiling-fan-installation',
    'outlet-switch-dimmer-gfci-repairs',
    'residential-electrical-services',
  ];
  const all = getPublishedPillars();
  return priority
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is ServicePillar => p !== undefined);
}

/** Get a single pillar by slug */
export function getPillarBySlug(slug: string): ServicePillar | undefined {
  return servicePillars.find((p) => p.slug === slug);
}

/** Get Wave 1 pillars only */
export function getWave1Pillars(): ServicePillar[] {
  return servicePillars.filter((p) => p.tier === 'wave1');
}

export default servicePillars;
