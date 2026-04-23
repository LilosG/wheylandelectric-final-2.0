import type { City } from '../types';
import { flags } from './site';

const baseCities: City[] = [
  // ========================
  // WAVE 1 — publish: true
  // ========================
  {
    slug: 'carlsbad',
    nearbyCities: ['encinitas', 'san-marcos', 'oceanside', 'vista'],
    name: 'Carlsbad',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92008', '92009', '92010', '92011', '92013'],
    neighborhoods: ['Barrio', 'Olde Carlsbad', 'La Costa', 'Bressi Ranch', 'Aviara', 'Calavera Hills', 'Robertson Ranch', 'Gateway Hills', 'The Village'],
    localIntroSeed:
      'As a Carlsbad-based electrician since 2008, Wheyland Electric is proud to serve the community we call home. From the flower fields along Palomar Airport Road to the village streets near the coast, our licensed electricians deliver reliable work backed by deep local roots. Whether you live in La Costa, Bressi Ranch, Aviara, or Olde Carlsbad, we know this city inside and out — and we bring that local knowledge to every project.',
    localIntroExtended:
      "Carlsbad's housing stock is one of the most diverse in North County San Diego, ranging from 1960s-era coastal cottages near the Village to brand-new construction in Robertson Ranch and the newer developments along Palomar Airport Road. Older neighborhoods often have outdated 100-amp panels, aluminum wiring, or undersized circuits that can't support today\'s electrical demands — including EV chargers, home offices, and smart home systems. Newer developments may need additions like dedicated EV charging circuits, outdoor living electrical, or whole-home surge protection. We serve all of it — residential, commercial, HOA communities, and EV charging installations across all Carlsbad ZIP codes: 92008, 92009, 92010, 92011, and 92013.",
    neighborhoodDescriptions: {
      'La Costa': 'One of Carlsbad\'s largest communities, spanning a mix of mid-century homes and newer construction with HOA-managed common areas and active landscape lighting needs.',
      'Bressi Ranch': 'A master-planned community with newer homes, HOA infrastructure, and strong demand for EV charging installations and smart home electrical upgrades.',
      'Aviara': 'Upscale development near the Aviara Golf Course featuring luxury homes with complex electrical systems and outdoor living areas that frequently require dedicated circuits.',
      'Calavera Hills': 'Established neighborhood with a mix of 1980s–2000s homes where panel upgrades and GFCI retrofits are common requests.',
      'The Village': 'Carlsbad\'s historic downtown core, home to a mix of older commercial buildings and residential properties along Carlsbad Boulevard with unique older-wiring considerations.',
      'Robertson Ranch': 'Newer Carlsbad master plan development with modern construction and growing demand for EV charger installations.',
      'Olde Carlsbad': 'One of the original Carlsbad neighborhoods, featuring older homes that frequently need panel upgrades, rewiring, and GFCI installations.',
    },
    localCues: ['Coastal corrosion on exterior fixtures and disconnects', 'Frequent EV charger additions in newer subdivisions', 'Panel capacity constraints in older Village-area homes', 'Outdoor lighting wear from marine moisture', 'Landscape and pool equipment load balancing needs', 'GFCI/AFCI retrofit demand in pre-2000 homes'],
    nearbyCities: ['encinitas', 'oceanside', 'san-marcos'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  // ========================
  // SUB-NEIGHBORHOOD CITIES — Carlsbad sub-areas
  // ========================

  {
    slug: 'la-costa',
    isSubNeighborhood: true,
    name: 'La Costa',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92009'],
    neighborhoods: ['La Costa Valley', 'La Costa Oaks', 'La Costa Greens', 'La Costa Ridge', 'La Costa Villas', 'Rancho Carrillo'],
    localIntroSeed:
      'La Costa is one of the largest and most established communities in Carlsbad, spanning a mix of 1970s-era homes near the original La Costa Resort and master-planned developments built through the 2000s. Wheyland Electric serves La Costa homeowners with the full range of residential electrical services — panel upgrades, EV charger installation, recessed lighting, and service calls — from our Carlsbad office just minutes away.',
    localIntroExtended:
      "La Costa covers ZIP code 92009 and spans everything from older single-family homes in the original La Costa corridors to newer HOA-managed communities in La Costa Oaks, La Costa Greens, and Rancho Carrillo. Older homes in the 92009 ZIP frequently have 100-amp panels that can't support today\'s electrical loads — EV chargers, home offices, and modern appliances routinely push these systems past capacity. Newer master-planned communities have modern panels but are seeing strong demand for Level 2 EV charging circuits and smart home electrical upgrades. HOA communities throughout La Costa have ongoing common area lighting and electrical maintenance needs. Wheyland Electric handles all of it — residential, commercial, and HOA — across La Costa with permits coordinated through the City of Carlsbad building department.",
    neighborhoodDescriptions: {
      'La Costa Valley': 'A large master-planned HOA community with newer construction and active demand for EV charger installations and smart home electrical.',
      'La Costa Oaks': 'Upscale hillside development with luxury homes featuring complex electrical systems and outdoor living areas requiring dedicated circuits.',
      'La Costa Greens': 'Master-planned community with newer homes and HOA infrastructure — EV charging and panel capacity planning are common requests.',
      'La Costa Ridge': 'Hillside community with a mix of custom and tract homes, frequently requesting panel evaluations and EV charger installations.',
      'La Costa Villas': 'Established neighborhood with a mix of 1980s–1990s construction where panel upgrades and GFCI retrofits are frequent priorities.',
      'Rancho Carrillo': 'Newer master-planned development with modern construction and growing demand for EV charging and dedicated circuit additions.',
    },
    localProofPoints: [
      'Carlsbad-based operations with fast routing throughout La Costa communities.',
      'Permit coordination experience with City of Carlsbad building department.',
      'Strong EV readiness planning for two-vehicle households and future expansion.',
      'Frequent panel capacity upgrades for legacy La Costa housing stock.',
      'HOA common area lighting and electrical maintenance support.',
      'Clean finish standards for visible conduit, fixtures, and exterior equipment.',
      'Documented final testing with homeowner walkthrough before closeout.',
      '1-year labor warranty backing all workmanship.',
    ],
    localCues: ['La Costa Resort & Spa', 'La Costa Town Square', 'Alga Norte Community Park', 'El Camino Real corridor', 'Rancho Carrillo trails'],
    nearbyCities: ['carlsbad', 'encinitas', 'san-marcos'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },

  {
    slug: 'olde-carlsbad',
    isSubNeighborhood: true,
    name: 'Olde Carlsbad',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92008'],
    neighborhoods: ['Barrio Carlsbad', 'Jefferson Elementary area', 'Carlsbad Village adjacent', 'Tamarack area', 'Pine Avenue corridor'],
    localIntroSeed:
      'Olde Carlsbad is one of the original residential neighborhoods in the city, with housing stock dating from the 1950s through the 1980s. These older homes frequently have outdated electrical systems — 100-amp panels, aluminum branch wiring, two-prong ungrounded outlets, and circuits that were never designed for modern electrical demands. Wheyland Electric specializes in bringing these homes up to current standards safely and efficiently.',
    localIntroExtended:
      "Olde Carlsbad sits primarily in the 92008 ZIP code west of El Camino Real, between the Village and the inland neighborhoods. Homes here were largely built before 1980, and many still have their original electrical panels — some still with Federal Pacific or Zinsco equipment that represents a genuine safety concern. Aluminum branch wiring from the 1960s and 1970s is common and requires COPALUM or AlumiConn remediation when outlets and switches are updated. Salt air from the nearby coast accelerates corrosion on exterior electrical components, making outdoor fixture and service entrance maintenance important for these properties. Panel upgrades from 100-amp to 200-amp service are one of our most common projects in this neighborhood, frequently combined with GFCI modernization and EV charger circuit additions. Wheyland Electric has deep experience working in these older homes and understands how to improve them without unnecessary overbuilding.",
    neighborhoodDescriptions: {
      'Barrio Carlsbad': 'Historic neighborhood with some of the oldest housing stock in Carlsbad — aluminum wiring, 60-amp and 100-amp panels, and two-prong outlets are common.',
      'Jefferson Elementary area': 'Established residential area with 1960s–1970s construction frequently needing panel upgrades and grounding modernization.',
      'Carlsbad Village adjacent': 'Properties near the Village core with a mix of residential and mixed-use buildings, many requiring careful rewiring work.',
      'Tamarack area': 'Older residential corridor with consistent demand for panel upgrades, GFCI retrofits, and EV charger circuit additions.',
      'Pine Avenue corridor': 'Mix of original Carlsbad bungalows and some newer infill construction — electrical ages vary widely by property.',
    },
    localProofPoints: [
      'Extensive experience with pre-1980 homes in the 92008 ZIP code.',
      'Aluminum wiring remediation using COPALUM and AlumiConn methods.',
      'Federal Pacific and Zinsco panel replacement expertise.',
      'Salt-air-appropriate hardware for all exterior electrical work.',
      'Panel upgrade specialists — 100-amp to 200-amp conversions done in one day.',
      'Permit coordination with City of Carlsbad for all required scopes.',
      'Honest assessments — we recommend what the home needs, not what maximizes the bill.',
      '1-year labor warranty on all workmanship.',
    ],
    localCues: ['Carlsbad Village proximity', 'Tamarack State Beach', 'older coastal housing stock', 'salt air corrosion on exterior components', 'pre-1980 construction throughout'],
    nearbyCities: ['carlsbad', 'encinitas', 'oceanside'],
    serviceCategories: ['residential', 'ev'],
  },

  {
    slug: 'olivenhain',
    isSubNeighborhood: true,
    name: 'Olivenhain',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92024'],
    neighborhoods: ['Olivenhain proper', 'The Ranch', 'Wildflower', 'El Camino Olivenhain area', 'Rancho Cielo adjacent'],
    localIntroSeed:
      'Olivenhain is a semi-rural unincorporated community within the City of Encinitas, known for its horse properties, larger lots, and distinctive character. Electrical work here is genuinely different from standard residential service — longer circuit runs, outbuildings, well pumps, barn electrical, and rural lot configurations require an electrician with the right experience. Wheyland Electric serves Olivenhain properties with the expertise these unique installations demand.',
    localIntroExtended:
      "Olivenhain sits in the 92024 ZIP code in the hills east of Encinitas, administered by the City of Encinitas building department. Properties here range from half-acre lots to multi-acre equestrian estates with detached garages, barns, guest casitas, and agricultural outbuildings — all of which may need their own electrical service or sub-panel. Well pump circuits, irrigation system electrical, arena lighting, and barn wiring are common requests that most residential electricians aren't equipped to handle efficiently. Homes in Olivenhain span several decades of construction, from 1970s ranch properties to newer custom builds — electrical systems vary widely. EV charging is increasingly requested, and the longer driveway runs and detached garage locations common in Olivenhain require careful circuit planning. Wheyland Electric has the experience and equipment to work on these larger, more complex properties.",
    neighborhoodDescriptions: {
      'Olivenhain proper': 'The original Olivenhain community with rural character, horse properties, and older homes frequently needing panel evaluations and circuit additions for modern loads.',
      'The Ranch': 'Custom home development with newer construction and larger lots — EV charging and outdoor living electrical are common requests.',
      'Wildflower': 'Established neighborhood with a mix of property ages and active demand for panel upgrades and dedicated circuit work.',
      'El Camino Olivenhain area': 'Properties along the main Olivenhain corridor with varied construction ages and frequent requests for service upgrades.',
      'Rancho Cielo adjacent': 'Larger lot properties with outbuildings and rural electrical needs including sub-panels and extended circuit runs.',
    },
    localProofPoints: [
      'Experience with rural property electrical including outbuildings and sub-panels.',
      'Well pump circuit installation and troubleshooting capability.',
      'Barn and agricultural electrical familiar with Olivenhain property profiles.',
      'Long circuit run expertise with proper voltage drop calculations.',
      'Permit coordination with City of Encinitas building department.',
      'EV charger planning for detached garages and long driveway runs.',
      'Honest load assessments for properties with high electrical demand.',
      '1-year labor warranty on all workmanship.',
    ],
    localCues: ['equestrian properties and horse trails', 'rural lot sizes with outbuildings', 'well pumps and agricultural electrical', 'Olivenhain Road corridor', 'City of Encinitas jurisdiction'],
    nearbyCities: ['encinitas', 'carlsbad', 'rancho-santa-fe'],
    serviceCategories: ['residential', 'ev'],
  },

  {
    slug: 'bressi-ranch',
    isSubNeighborhood: true,
    name: 'Bressi Ranch',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92010'],
    neighborhoods: ['Bressi Ranch Village', 'Bressi Ranch North', 'Bressi Ranch South', 'Paseo Del Norte corridor'],
    localIntroSeed:
      'Bressi Ranch is one of Carlsbad\'s premier master-planned communities, built primarily between 2002 and 2012. Homes here are newer, well-constructed, and increasingly in demand for EV charger installations, smart home electrical upgrades, and panel capacity expansions to support modern lifestyles. Wheyland Electric serves Bressi Ranch homeowners from our Carlsbad base with prompt scheduling and professional work.',
    localIntroExtended:
      "Bressi Ranch sits in the 92010 ZIP code in eastern Carlsbad, a master-planned community that was developed by Shea Homes and other builders in the early 2000s. Homes range from attached townhomes to larger single-family residences, most with HOA-managed common areas and architectural review requirements for exterior modifications. The housing stock is now 15-20 years old — which means original builder-grade electrical panels are approaching the age where EV charger additions and modern appliance loads expose capacity constraints. Level 2 EV charger installation is our most common request from Bressi Ranch homeowners, often requiring a load evaluation and sometimes a sub-panel addition. Smart switch and dimmer installations, recessed lighting retrofits, and outdoor living electrical are also frequently requested. HOA permit requirements in Bressi Ranch require coordination with both the City of Carlsbad and the community's architectural review process.",
    neighborhoodDescriptions: {
      'Bressi Ranch Village': 'The commercial and retail core of Bressi Ranch, with restaurants, shops, and services — commercial electrical maintenance and tenant improvement work applies here.',
      'Bressi Ranch North': 'Single-family residential section with consistent demand for EV charger installations and panel capacity evaluations.',
      'Bressi Ranch South': 'Mix of attached and detached homes with active demand for EV charging, smart home electrical, and lighting upgrades.',
      'Paseo Del Norte corridor': 'Properties along the main Bressi Ranch arterial with good access and consistent residential electrical service demand.',
    },
    localProofPoints: [
      'Familiar with Bressi Ranch HOA permit and architectural review requirements.',
      'EV charger installation specialists for 2000s-era master-planned home electrical systems.',
      'Panel capacity evaluation and load management for modern electrical demands.',
      'Smart home electrical including Lutron Caseta and other systems.',
      'Permit coordination with City of Carlsbad building department.',
      'Clean exterior work that meets HOA appearance standards.',
      'Prompt scheduling from our nearby Carlsbad office.',
      '1-year labor warranty on all workmanship.',
    ],
    localCues: ['Bressi Ranch Village Center', 'Alga Norte Community Park', 'master-planned HOA community', 'newer 2000s construction', 'EV adoption among younger families'],
    nearbyCities: ['carlsbad', 'san-marcos', 'la-costa'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },

  {
    slug: 'aviara',
    isSubNeighborhood: true,
    name: 'Aviara',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92011'],
    neighborhoods: ['Aviara proper', 'Four Seasons Aviara area', 'Park Drive corridor', 'Batiquitos Lagoon adjacent', 'Ambrosia area'],
    localIntroSeed:
      'Aviara is one of Carlsbad\'s most prestigious communities, built around the Aviara Golf Course and Park Hyatt Aviara resort. Luxury custom homes here have complex electrical systems — multiple sub-panels, extensive landscape and pool lighting, EV charging for multi-car garages, and outdoor living areas with high electrical demands. Wheyland Electric provides the caliber of service Aviara homeowners expect.',
    localIntroExtended:
      "Aviara sits in the 92011 ZIP code in southern Carlsbad near Batiquitos Lagoon. The community features luxury single-family homes and estate properties developed primarily in the 1990s and 2000s, with many homes having undergone significant renovations since original construction. Electrical systems in Aviara frequently include 200-amp or 400-amp main service, multiple sub-panels for pool and landscape equipment, dedicated circuits for professional-grade appliances, and complex outdoor lighting systems. EV charger installation is increasingly requested for multi-car garages, often requiring load management or sub-panel additions to avoid main service upgrades. Landscape lighting systems — timers, transformers, and low-voltage runs — frequently need maintenance or expansion. HOA architectural standards in Aviara require careful coordination for exterior electrical modifications.",
    neighborhoodDescriptions: {
      'Aviara proper': 'Core luxury residential development with larger custom homes and complex electrical systems including pool, landscape, and outdoor living circuits.',
      'Four Seasons Aviara area': 'Premium properties adjacent to the resort with high-end finishes and sophisticated electrical requirements.',
      'Park Drive corridor': 'Well-established Aviara residential area with mature landscaping and active demand for landscape lighting upgrades.',
      'Batiquitos Lagoon adjacent': 'Properties with lagoon views and premium outdoor living areas requiring weatherproof outdoor electrical.',
      'Ambrosia area': 'Established Aviara neighborhood with a mix of property ages and consistent demand for panel evaluations and EV charging.',
    },
    localProofPoints: [
      'Experience with complex luxury home electrical systems in Aviara.',
      'Multi-sub-panel evaluation and upgrade expertise.',
      'Pool, spa, and landscape lighting electrical specialists.',
      'EV charger load management for multi-car luxury garages.',
      'HOA architectural review coordination for exterior electrical work.',
      'Clean, detail-oriented work that meets Aviara property standards.',
      'Discreet scheduling that respects homeowner privacy and landscaping.',
      '1-year labor warranty on all workmanship.',
    ],
    localCues: ['Aviara Golf Course', 'Park Hyatt Aviara', 'Batiquitos Lagoon', 'luxury estate properties', 'complex landscape and pool lighting systems'],
    nearbyCities: ['carlsbad', 'encinitas', 'la-costa'],
    serviceCategories: ['residential', 'hoa', 'ev'],
  },

  {
    slug: 'calavera-hills',
    isSubNeighborhood: true,
    name: 'Calavera Hills',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92010'],
    neighborhoods: ['Calavera Hills Village', 'Calavera Hills North', 'Calavera Hills South', 'Lake Calavera area', 'College Boulevard corridor'],
    localIntroSeed:
      'Calavera Hills is an established Carlsbad community with a mix of homes built from the late 1970s through the 1990s. This housing era means electrical systems that were adequate for their time but frequently need updating — panel upgrades, GFCI and AFCI protection additions, and circuit capacity expansions for modern loads including EV chargers and home offices. Wheyland Electric serves Calavera Hills homeowners with honest assessments and reliable electrical work.',
    localIntroExtended:
      "Calavera Hills sits in the 92010 ZIP code in northeastern Carlsbad, developed primarily between 1978 and 1998. Homes range from smaller single-family residences to larger hillside properties with views. The 1980s and 1990s construction era means 100-amp and 150-amp panels are still common — adequate for the time but increasingly insufficient as families add EV chargers, home offices, and modern kitchen appliances. GFCI protection is frequently missing from bathrooms and kitchens in homes of this age, and AFCI protection is a common code upgrade recommendation. EV charger installation is one of our most common requests from Calavera Hills homeowners, often pairing with a panel evaluation to confirm capacity. Lake Calavera and the adjacent open space give the neighborhood a semi-natural character — outdoor lighting reliability and weatherproofing are priorities for homes backing to open space.",
    neighborhoodDescriptions: {
      'Calavera Hills Village': 'The commercial core of Calavera Hills with retail and services — commercial electrical maintenance applies for the business tenants here.',
      'Calavera Hills North': 'Established 1980s-1990s residential with consistent panel upgrade and GFCI retrofit demand.',
      'Calavera Hills South': 'Similar construction era with active demand for EV charger installations and circuit capacity additions.',
      'Lake Calavera area': 'Properties adjacent to the lake preserve with outdoor lighting reliability concerns and weatherproof electrical priorities.',
      'College Boulevard corridor': 'Higher-traffic residential areas with mixed construction ages and consistent electrical service demand.',
    },
    localProofPoints: [
      'Experience with 1978-1998 era electrical systems common in Calavera Hills.',
      'Panel upgrade specialists — 100-amp to 200-amp in one day.',
      'GFCI and AFCI retrofit expertise for pre-2000 homes.',
      'EV charger installation with panel capacity evaluation.',
      'Outdoor electrical weatherproofing for open-space-adjacent properties.',
      'Permit coordination with City of Carlsbad building department.',
      'Honest capacity assessments — recommend what is needed, not what maximizes the invoice.',
      '1-year labor warranty on all workmanship.',
    ],
    localCues: ['Lake Calavera preserve', 'College Boulevard', '1980s-1990s construction throughout', 'hillside properties with views', 'established community with mature trees'],
    nearbyCities: ['carlsbad', 'san-marcos', 'bressi-ranch'],
    serviceCategories: ['residential', 'hoa', 'ev'],
  },

  {
    slug: 'encinitas',
    nearbyCities: ['carlsbad', 'solana-beach', 'san-marcos', 'del-mar'],
    name: 'Encinitas',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92007', '92023', '92024'],
    neighborhoods: ['Leucadia', 'Cardiff-by-the-Sea', 'Olivenhain', 'Old Encinitas', 'New Encinitas', 'Encinitas Ranch', 'Village Park', 'Fox Point', 'Quail Gardens'],
    localIntroSeed:
      'Wheyland Electric serves Encinitas homeowners and businesses across Leucadia, Cardiff-by-the-Sea, Old Encinitas, New Encinitas, Olivenhain, and Encinitas Ranch. This diverse coastal community spans everything from 1940s beach cottages along Highway 101 to modern estate homes in Olivenhain — and each requires an electrician who understands the unique demands of both. Our licensed team brings professional craftsmanship and honest communication to every project.',
    localIntroExtended:
      "Encinitas has a wide range of electrical needs tied directly to its varied housing stock. Older homes in Leucadia and Old Encinitas frequently have 100-amp panels, ungrounded outlets, and wiring that predates modern code — creating real demand for panel upgrades, GFCI retrofits, and rewiring. Coastal salt air also accelerates corrosion on outdoor fixtures, wiring connections, and service entrance components, making periodic inspection and maintenance important. Newer developments in New Encinitas, Encinitas Ranch, and along El Camino Real are driving demand for EV charger installations, dedicated circuits, and smart home electrical. Wheyland Electric handles all of it — fully licensed, permitted, and backed by a 1-year labor warranty — across Encinitas ZIP codes 92007, 92023, and 92024.",
    neighborhoodDescriptions: {
      'Leucadia': 'The most bohemian stretch of Encinitas, known for its older bungalows along Highway 101. Panels and wiring here often predate 1980s code and are a frequent target for upgrades.',
      'Cardiff-by-the-Sea': 'A small coastal community at the south end of Encinitas with a mix of vintage beach homes and newer construction, including active demand for EV charger installations.',
      'Old Encinitas': 'The historic commercial and residential core, where 1960s–1970s homes frequently need panel upgrades and rewiring work.',
      'New Encinitas': 'Inland residential developments along El Camino Real featuring newer construction with growing demand for EV charging, smart home electrical, and outdoor living circuits.',
      'Olivenhain': 'Rural-feeling semi-custom homes and equestrian properties east of the freeway, often with high electrical loads and extended circuit runs.',
      'Encinitas Ranch': 'A planned community near the golf course with newer homes and active HOA infrastructure, including street lighting and common-area electrical maintenance.',
    },
    localCues: ['Swamis Beach', 'Moonlight Beach', 'San Diego Botanic Garden', 'Highway 101', 'Self Realization Fellowship'],
    nearbyCities: ['carlsbad', 'solana-beach', 'del-mar', 'rancho-santa-fe'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'rancho-santa-fe',
    nearbyCities: ['del-mar', 'encinitas', 'san-marcos', 'solana-beach'],
    name: 'Rancho Santa Fe',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: false,
    zips: ['92067', '92091'],
    neighborhoods: ['The Covenant', 'Fairbanks Ranch', 'Cielo', 'Morgan Run', 'The Bridges', 'Rancho Diegueno'],
    localIntroSeed:
      "Rancho Santa Fe's luxury estates, equestrian properties, and custom homes have electrical systems that demand experienced, detail-oriented electricians. From the gated communities of The Covenant and Fairbanks Ranch to the hillside properties in Cielo and The Bridges, Wheyland Electric provides the caliber of service Rancho Santa Fe homeowners expect — meticulous workmanship, clean job sites, and direct communication from our team.",
    localIntroExtended:
      "Many Rancho Santa Fe homes feature complex electrical systems that go well beyond a standard residential panel: multiple sub-panels, extensive landscape and pool lighting, gate and security system circuits, wine cellar cooling equipment, dedicated circuits for high-end appliances, and EV charging stations for multi-car garages. Equestrian properties in Rancho Diegueno and surrounding areas often have barn electrical, arena lighting, and pump systems that require careful load management. Wheyland Electric has the experience to evaluate these systems accurately, recommend the right solutions, and execute the work with the precision this community demands — all fully permitted and backed by our 1-year labor warranty. We serve ZIP codes 92067 and 92091.",
    neighborhoodDescriptions: {
      'The Covenant': 'The original Rancho Santa Fe community featuring large estate homes, equestrian trails, and an architectural review board that requires careful coordination on any exterior electrical work.',
      'Fairbanks Ranch': 'A gated community with custom estate homes, extensive outdoor living areas, and sophisticated landscape lighting systems.',
      'Cielo': 'An elevated community in the hills above RSF with panoramic views, large custom homes, and high electrical load demands.',
      'The Bridges': 'A private gated community centered around a golf course, featuring large custom homes with complex multi-panel electrical systems.',
      'Morgan Run': 'A golf and tennis club community with a mix of custom homes and golf-course-facing properties.',
      'Rancho Diegueno': 'The semi-rural eastern portion of Rancho Santa Fe known for equestrian properties, horse paddocks, and rural electrical needs including barn wiring and pump systems.',
    },
    localCues: ['Rancho Santa Fe Golf Club', 'The Inn at Rancho Santa Fe', 'Covenant properties', 'Fairbanks Ranch Country Club'],
    nearbyCities: ['encinitas', 'del-mar', 'solana-beach'],
    serviceCategories: ['residential', 'commercial', 'ev'],
  },
  {
    slug: 'san-marcos',
    name: 'San Marcos',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92069', '92078', '92096'],
    neighborhoods: ['Lake San Marcos', 'San Elijo Hills', 'Twin Oaks Valley', 'Discovery Hills', 'Barham Ranch', 'Rancho Dorado'],
    localIntroSeed:
      'Wheyland Electric serves San Marcos homes and businesses throughout Lake San Marcos, San Elijo Hills, Twin Oaks Valley, Discovery Hills, and the growing commercial areas along Grand Avenue and Rancheros Drive. San Marcos is one of the fastest-growing cities in North County, with a wide mix of housing — from 1970s-era homes near the lake to newer master-planned communities — and our team knows how to work in all of it.',
    localIntroExtended:
      "San Marcos spans three ZIP codes — 92069, 92078, and 92096 — and nearly every era of residential construction. Older homes near Lake San Marcos often have 100-amp panels and outdated wiring that wasn't designed to support today\'s electrical loads. The University District around Cal State San Marcos brings commercial electrical demand from retail, restaurant, and office tenants. Growing communities in San Elijo Hills, Barham Ranch, and Discovery Hills are seeing strong demand for EV charger installations, outdoor living circuits, and smart home electrical. Wheyland Electric handles residential, commercial, and HOA work throughout San Marcos, fully licensed and permitted through the City of San Marcos building department.",
    neighborhoodDescriptions: {
      'San Elijo Hills': 'A large planned community on the hills south of San Marcos with newer homes and HOA infrastructure, active for EV charger installations and landscape lighting.',
      'Lake San Marcos': 'An established community centered around the lake, featuring older custom homes and a golf course. Panel upgrades and rewiring are common requests here.',
      'Twin Oaks Valley': 'A semi-rural corridor along Twin Oaks Valley Road with a mix of residential and agricultural properties, including nursery operations with commercial electrical needs.',
      'Discovery Hills': 'Newer construction along the San Marcos–Carlsbad border with growing demand for EV chargers and dedicated circuit additions.',
      'Barham Ranch': 'A newer residential development with HOA-managed common areas and an active new-construction electrical base.',
      'Rancho Dorado': 'An established San Marcos neighborhood with 1990s–2000s construction and growing demand for panel upgrades and GFCI installations.',
    },
    localCues: ['Cal State San Marcos', 'Lake San Marcos', 'Grand Avenue', 'Restaurant Row', 'Double Peak Park'],
    nearbyCities: ['carlsbad', 'encinitas', 'vista', 'oceanside'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'del-mar',
    name: 'Del Mar',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92014', '92130'],
    neighborhoods: ['Del Mar Village', 'Del Mar Heights', 'Del Mar Mesa', 'Torrey Hills', 'Carmel Valley'],
    localIntroSeed:
      'Del Mar homeowners trust Wheyland Electric for electrical services that match the quality of this premier coastal community. From the village bluffs to Del Mar Heights and Torrey Hills, our licensed electricians handle everything from recessed lighting installations to panel upgrades with precision and care. We are fully familiar with Del Mar building permit requirements, HOA standards, and the unique electrical considerations of coastal properties.',
    localIntroExtended:
      "Del Mar spans ZIP codes 92014 and 92130, and its properties range from mid-century beach cottages and hillside Craftsmans to contemporary custom homes and luxury condos. Salt air corrosion is a real factor here — outdoor fixtures, service entrance components, and wiring connections on Del Mar properties face accelerated degradation from the coastal environment. High-end remodels and kitchen renovations in Del Mar Heights frequently require panel upgrades, dedicated circuits for professional appliances, and recessed lighting redesigns. Vacation and investment rental properties benefit from GFCI and AFCI protection upgrades. Carmel Valley's newer construction drives EV charger demand. Wheyland Electric works within Del Mar's strict building permit process and brings the level of professionalism this community expects — no shortcuts, clean job sites, and direct communication throughout.",
    neighborhoodDescriptions: {
      'Del Mar Village': 'The original Del Mar community along Camino Del Mar, featuring a mix of historic cottages, small commercial buildings, and beachside properties with unique older-wiring considerations.',
      'Del Mar Heights': 'Hillside residential neighborhood with a mix of 1970s–1990s homes and newer construction, active for panel upgrades and high-end remodel electrical work.',
      'Del Mar Mesa': 'Inland mesa properties with larger lot custom homes, frequently requiring extended circuit runs and outdoor living electrical.',
      'Torrey Hills': 'A newer planned community near Torrey Pines with HOA infrastructure and strong EV charger installation demand.',
      'Carmel Valley': 'A large master-planned community with newer construction, active HOA electrical maintenance needs, and among the highest EV charger installation demand in the Del Mar area.',
    },
    localCues: ['Del Mar Racetrack', 'Torrey Pines State Beach', 'Del Mar Fairgrounds', 'Camino Del Mar', '15th Street'],
    nearbyCities: ['solana-beach', 'encinitas', 'rancho-santa-fe'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'solana-beach',
    name: 'Solana Beach',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92075'],
    neighborhoods: ['Solana Beach Village', 'Eden Gardens', 'Lomas Santa Fe', 'Skyline', 'San Elijo', 'Fletcher Cove area'],
    localIntroSeed:
      'Solana Beach is one of the smallest cities in North County San Diego — but it packs a lot of character into its one ZIP code. From the Cedros Design District and Fletcher Cove to the residential neighborhoods of Lomas Santa Fe and Eden Gardens, Wheyland Electric provides licensed, code-compliant electrical services for homes and businesses throughout this tight-knit coastal community. Our Carlsbad office is just a few miles up the coast.',
    localIntroExtended:
      "Solana Beach homes were largely built between the 1960s and 1990s, and many still have their original 100-amp panels, two-prong outlets, and aging wiring that was never designed for modern electrical demands. EV charger installations, kitchen remodels, and home office setups frequently expose the limits of these older systems — which is why panel evaluations are a common first step we recommend for Solana Beach homeowners. Salt air from the coast also accelerates corrosion on outdoor electrical components, making periodic inspection valuable. The Cedros Design District adds a commercial dimension to Solana Beach, with retail and restaurant tenants that have varied electrical service needs. Wheyland Electric handles all of it — residential, commercial, and HOA — across Solana Beach's 92075 ZIP code, fully permitted through the City of Solana Beach.",
    neighborhoodDescriptions: {
      'Lomas Santa Fe': 'An established hillside community with 1970s–1980s construction and active demand for panel upgrades and EV charger installations.',
      'Eden Gardens': 'A charming, walkable neighborhood near Fletcher Cove with older homes and strong demand for GFCI upgrades and electrical modernization.',
      'Solana Beach Village': 'The commercial and residential core along Cedros Avenue, featuring the Cedros Design District and a mix of retail, restaurant, and residential electrical needs.',
      'Skyline': 'A hillside residential neighborhood with views and a mix of older and remodeled homes.',
      'San Elijo': 'Residential area in the northern end of Solana Beach near the lagoon, with a mix of 1960s–1990s homes.',
      'Fletcher Cove area': 'Beach-adjacent neighborhood featuring older coastal cottages and some newer infill construction, often requiring weatherproof outdoor electrical.',
    },
    localCues: ['Cedros Design District', 'Fletcher Cove', 'Lomas Santa Fe Drive', 'Solana Beach train station', 'Belly Up Tavern'],
    nearbyCities: ['del-mar', 'encinitas', 'rancho-santa-fe'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'oceanside',
    name: 'Oceanside',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92054', '92056', '92057', '92058'],
    neighborhoods: ['Downtown Oceanside', 'Fire Mountain', 'South Oceanside', 'Morro Hills', 'Rancho Del Oro', 'Arrowood', 'Ocean Hills'],
    localIntroSeed:
      'Oceanside is the largest Wave 1 city Wheyland Electric serves, and we bring the same local commitment to every corner of it — from the beach neighborhoods near the pier and harbor to the inland communities of Rancho Del Oro, Arrowood, and Morro Hills. As Oceanside continues to grow and revitalize, our licensed electricians deliver reliable residential, commercial, and HOA electrical work backed by transparent pricing and a 1-year labor warranty.',
    localIntroExtended:
      "Oceanside's housing stock is among the most diverse in North County San Diego — 1950s-era beach cottages near the shore, mid-century homes throughout Fire Mountain and South Oceanside, military-adjacent housing, and brand-new construction in eastern neighborhoods like Arrowood and Rancho Del Oro. This means electrical needs vary widely: older homes in the 92054 ZIP code frequently need panel upgrades, GFCI retrofits, and rewiring, while newer construction in 92057 and 92058 ZIP codes drives demand for EV charger installations, dedicated circuits, and smart home electrical. Oceanside's growing downtown commercial district and active HOA communities add commercial and maintenance electrical work to the mix. Wheyland Electric handles all of it across Oceanside ZIP codes 92054, 92056, 92057, and 92058.",
    neighborhoodDescriptions: {
      'Downtown Oceanside': 'A revitalizing coastal urban core near the pier and harbor, featuring older commercial buildings and a growing restaurant and retail scene with varied electrical service needs.',
      'Fire Mountain': 'An established hillside neighborhood between downtown and Carlsbad with a mix of 1960s–1980s homes, often needing panel upgrades and GFCI modernization.',
      'South Oceanside': 'Beach-adjacent neighborhood south of the pier with a mix of older cottages and newer infill construction, including strong demand for EV charger installations.',
      'Rancho Del Oro': 'A large planned community in inland Oceanside featuring newer homes, HOA infrastructure, and active demand for EV chargers and smart home electrical.',
      'Arrowood': 'One of Oceanside\'s newer master-planned communities with contemporary construction and growing demand for dedicated EV charging circuits.',
      'Ocean Hills': 'An active adult community with HOA electrical maintenance needs and growing EV charger installation demand.',
      'Morro Hills': 'A semi-rural eastern neighborhood with larger lot properties and unique electrical needs including extended circuit runs and agricultural applications.',
    },
    localCues: ['Oceanside Pier', 'Oceanside Harbor', 'Camp Pendleton adjacent', 'Mission San Luis Rey', 'The Strand'],
    nearbyCities: ['carlsbad', 'vista', 'san-marcos'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },

  // ========================
  // WAVE 2 — publish: false (gates by publish_wave2 flag)
  // ========================
  {
    slug: 'vista',
    name: 'Vista',
    state: 'CA',
    tier: 'wave2',
    publish: true,
    has_zip_pdf: true,
    zips: ['92081', '92083', '92084', '92085'],
    neighborhoods: ['Shadowridge', 'Vista Village', 'Breeze Hill', 'Rancho Buena Vista'],
    localIntroSeed:
      'Wheyland Electric serves Vista with licensed, code-compliant electrical services for homes, businesses, and HOA communities across Shadowridge, Vista Village, and surrounding neighborhoods. We focus on practical upgrades, clean installations, and clear communication from estimate through final walkthrough.',
    localIntroExtended:
      'Vista includes a broad mix of housing ages and property types—from established neighborhoods with legacy panels to newer developments adding EV charging, dedicated circuits, and modern lighting controls. Our team supports service calls, panel-capacity planning, and long-term reliability improvements throughout Vista ZIP codes 92081, 92083, 92084, and 92085.',
    neighborhoodDescriptions: {
      'Shadowridge': 'A large residential area with steady demand for EV charger installation, dedicated circuits, and panel capacity planning.',
      'Vista Village': 'Mixed-use core where homes and small businesses often need troubleshooting, lighting upgrades, and service-panel organization.',
      'Breeze Hill': 'Established neighborhoods where targeted modernization and protective-device upgrades are common priorities.',
      'Rancho Buena Vista': 'Blend of residential and commercial properties with frequent requests for code-focused upgrades and equipment reliability improvements.',
    },
    localCues: ['Moonlight Amphitheatre', 'Brengle Terrace Park', 'Rancho Buena Vista Adobe'],
    nearbyCities: ['oceanside', 'san-marcos', 'carlsbad'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'escondido',
    name: 'Escondido',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92025', '92026', '92027', '92029', '92046'],
    neighborhoods: ['Downtown Escondido', 'Westside', 'East Valley', 'Hidden Meadows'],
    localIntroSeed:
      'Wheyland Electric brings professional electrical services to Escondido — from downtown revitalization projects to residential neighborhoods throughout the valley. [PLACEHOLDER — replace with unique local content]',
    localCues: ['San Diego Zoo Safari Park', 'Grape Day Park', 'California Center for the Arts', 'Grand Avenue'],
    nearbyCities: ['san-marcos', 'rancho-santa-fe'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'poway',
    name: 'Poway',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92064'],
    neighborhoods: ['Old Poway', 'Garden Road', 'Poway Business Park'],
    localIntroSeed:
      'Wheyland Electric provides Poway homes and businesses with reliable electrical services. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Lake Poway', 'Old Poway Park', 'Iron Mountain Trail'],
    nearbyCities: ['rancho-santa-fe', 'escondido'],
    serviceCategories: ['residential', 'commercial', 'ev'],
  },
  {
    slug: 'ramona',
    name: 'Ramona',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92065'],
    neighborhoods: ['Downtown Ramona', 'San Diego Country Estates'],
    localIntroSeed:
      'Wheyland Electric serves the Ramona community with professional electrical work for rural and suburban properties alike. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Guy B. Woodward Museum', 'Ramona Grasslands', 'Main Street'],
    nearbyCities: ['escondido', 'poway'],
    serviceCategories: ['residential', 'commercial', 'ev'],
  },
  {
    slug: 'valley-center',
    name: 'Valley Center',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92082'],
    neighborhoods: ['Valley Center proper', 'Woods Valley', 'Lake Wohlford area'],
    localIntroSeed:
      'Wheyland Electric serves Valley Center with skilled electrical services for homes and agricultural properties throughout this North County community. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Bates Nut Farm', 'Lake Wohlford', 'Valley Center Community Hall'],
    nearbyCities: ['escondido', 'san-marcos'],
    serviceCategories: ['residential', 'commercial', 'ev'],
  },
  {
    slug: 'rancho-bernardo',
    name: 'Rancho Bernardo',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92127', '92128'],
    neighborhoods: ['Rancho Bernardo Town Center', 'Westwood', 'Bernardo Heights'],
    localIntroSeed:
      'Wheyland Electric provides professional electrical services to the Rancho Bernardo community, including the Town Center, Bernardo Heights, and surrounding neighborhoods. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Rancho Bernardo Inn', 'Bernardo Winery', 'Webb Park'],
    nearbyCities: ['poway', 'escondido'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'rancho-penasquitos',
    name: 'Rancho Peñasquitos',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92129'],
    neighborhoods: ['Rancho Peñasquitos', 'Black Mountain Ranch', 'Torrey Highlands'],
    localIntroSeed:
      'Wheyland Electric serves Rancho Peñasquitos families and businesses with the dependable electrical services this growing community needs. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Black Mountain Open Space Park', 'Peñasquitos Canyon Preserve', 'Calle Cristobal corridor'],
    nearbyCities: ['rancho-bernardo', 'poway'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'san-diego',
    name: 'San Diego',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: true,
    zips: ['92101', '92102', '92103', '92104', '92105'],
    neighborhoods: ['Downtown', 'Hillcrest', 'North Park', 'Mission Hills', 'La Jolla'],
    localIntroSeed:
      'Wheyland Electric brings North County professionalism to greater San Diego, serving homes and businesses throughout the city with licensed, bonded, and insured electrical services. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Balboa Park', 'Gaslamp Quarter', 'Mission Bay', 'La Jolla Cove'],
    nearbyCities: ['del-mar', 'solana-beach'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'fallbrook',
    name: 'Fallbrook',
    state: 'CA',
    tier: 'wave2',
    publish: false,
    has_zip_pdf: false,
    zips: ['92028'],
    neighborhoods: ['Downtown Fallbrook', 'De Luz', 'Live Oak Park area'],
    localIntroSeed:
      'Wheyland Electric extends our trusted electrical services to the Fallbrook community, serving homes and agricultural properties throughout this unique North County town. [PLACEHOLDER — replace with unique local content]',
    localCues: ['Fallbrook Avocado Festival', 'Live Oak Park', 'Main Avenue'],
    nearbyCities: ['oceanside', 'vista'],
    serviceCategories: ['residential', 'commercial', 'ev'],
  },
];


const buildNeighborhoodSpotlights = (city: City): Array<{ name: string; blurb: string }> => {
  const fromDescriptions = (city.neighborhoodDescriptions
    ? Object.entries(city.neighborhoodDescriptions).map(([name, blurb]) => ({ name, blurb }))
    : []);

  const merged = [
    ...fromDescriptions,
    ...city.neighborhoods
      .filter((name) => !fromDescriptions.some((entry) => entry.name === name))
      .map((name) => ({
        name,
        blurb: `${name} homes often need practical upgrades like code-safe device replacements, lighting improvements, and capacity planning.`,
      })),
  ];

  return merged.slice(0, 16);
};

const defaultLocalProofPoints = (city: City): string[] => [
  `Licensed, bonded, and insured electricians serving ${city.name} year-round.`,
  `Permit coordination handled directly with the ${city.name} building authority when required.`,
  'Code-first installation standards with clean labeling and documentation.',
  'Detailed scope reviews before work starts so expectations stay clear.',
  'Final testing and walkthrough before closeout.',
  '1-year labor warranty backing workmanship quality.',
];

const defaultCityFaqs = (city: City, nearbyCities: string): City['cityFAQs'] => [
  { question: `What electrical services are most requested in ${city.name}?`, answer: `Common requests include panel upgrades, EV charger installation, troubleshooting, lighting upgrades, and dedicated circuits for new equipment in ${city.name}.` },
  { question: `Do you handle permitting in ${city.name}?`, answer: `Yes. We handle permit and inspection coordination whenever project scope requires it in ${city.name}.` },
  { question: `Can you troubleshoot intermittent electrical issues?`, answer: 'Yes. We isolate root causes methodically and recommend focused repairs instead of guesswork replacements.' },
  { question: `Do you work on both older and newer homes?`, answer: `Yes. We regularly service both legacy wiring systems and newer builds throughout ${city.name}.` },
  { question: 'Are EV charger installs part of your local service?', answer: `Yes. We provide load planning, dedicated circuit installation, and charger commissioning for homes in ${city.name}.` },
  { question: 'Can projects be phased when scope is large?', answer: 'Yes. We can sequence upgrades in practical phases while preserving safety and code compliance.' },
  { question: `Do you provide written scope and next steps?`, answer: `Yes. Every project in ${city.name} includes clear scope notes and recommended next actions.` },
  { question: 'Do you support HOA and property-management electrical work?', answer: 'Yes. We support common-area lighting, troubleshooting, and scheduled maintenance needs.' },
  { question: `What nearby areas do you cover besides ${city.name}?`, answer: `We also support nearby areas including ${nearbyCities}.` },
  { question: 'How do I request service or an estimate?', answer: 'Call our team or submit the online form and we will schedule the best next step for your project.' },
];

const CITY_CONTENT_OVERRIDES: Partial<Record<string, Partial<City>>> = {
  carlsbad: {
    localProofPoints: [
      'Carlsbad-based operations with fast routing across major village and inland neighborhoods.',
      'Permit coordination experience across common Carlsbad residential and mixed-use scopes.',
      'Strong EV readiness planning for two-vehicle households and future charger expansion.',
      'Frequent panel-capacity upgrades for legacy coastal housing stock.',
      'Clean finish standards for visible conduit, fixtures, and exterior equipment.',
      'Documented final testing with homeowner walkthrough before closeout.',
      'Support for HOA common-area lighting and recurring electrical maintenance.',
    ],
    neighborhoodSpotlights: [
      { name: 'Olde Carlsbad', blurb: 'Older service equipment and branch circuits are common; panel upgrades and grounding corrections are frequent priorities.' },
      { name: 'The Village', blurb: 'Tighter lots and mixed-use proximity often require careful routing and clean exterior finish work.' },
      { name: 'La Costa', blurb: 'Larger homes often need EV charging strategy, dedicated circuits, and load balancing for added appliances.' },
      { name: 'Aviara', blurb: 'Luxury properties often include pool, landscape, and specialty lighting systems that benefit from circuit segmentation.' },
      { name: 'Bressi Ranch', blurb: 'Newer homes commonly request EV chargers, garage power planning, and smart-switch conversions.' },
      { name: 'Calavera Hills', blurb: 'Homes from multiple build eras often need targeted code updates and protective device upgrades.' },
      { name: 'Robertson Ranch', blurb: 'Expansion-ready electrical planning helps accommodate future equipment and second-EV charging.' },
      { name: 'Barrio', blurb: 'Historic housing blocks often need measured troubleshooting and safe modernization without overbuilding.' },
      { name: 'Gateway Hills', blurb: 'Frequent requests include outdoor lighting reliability and panel organization for remodel-ready capacity.' },
    ],
    cityFAQs: [
      { question: 'What Carlsbad projects most often require permits?', answer: 'Panel upgrades, service changes, EV charger circuits, and many new branch-circuit installs typically require permits; we coordinate the process.' },
      { question: 'Can you upgrade a 100A panel in an older Carlsbad home?', answer: 'Yes. We evaluate load, confirm service constraints, and provide a clear upgrade path aligned to current electrical demand.' },
      { question: 'Do you install EV chargers in both old and new Carlsbad neighborhoods?', answer: 'Yes. We adapt routing and equipment strategy to each property layout and panel condition.' },
      { question: 'How do you handle coastal corrosion concerns?', answer: 'We prioritize weather-appropriate hardware, sealed fittings, and durable installation practices for exterior components.' },
      { question: 'Can you improve reliability for outdoor lighting systems?', answer: 'Yes. We troubleshoot voltage drop, failing devices, and control issues, then implement durable corrective work.' },
      { question: 'Do you support HOA electrical maintenance in Carlsbad?', answer: 'Yes. We handle common-area troubleshooting, lighting maintenance, and scope planning with clear reporting.' },
      { question: 'Can you add circuits for home office and garage upgrades?', answer: 'Yes. We design dedicated circuits around actual load profiles to avoid nuisance trips and future constraints.' },
      { question: 'Do you provide a final walkthrough after work is complete?', answer: 'Yes. We verify operation, explain changes, and document next-step recommendations when useful.' },
      { question: 'Are code updates available without a full-home rewire?', answer: 'Yes. Many homes can be improved through targeted panel, device, and protection upgrades.' },
      { question: 'How quickly can a Carlsbad service visit be scheduled?', answer: 'Scheduling depends on scope, but we prioritize practical turnaround and clear communication on timing.' },
    ],
  },
  encinitas: {
    localProofPoints: [
      'Consistent service coverage from coastal corridors to inland Encinitas neighborhoods.',
      'Practical modernization strategies for older beach-area electrical systems.',
      'Strong EV installation workflow for driveways, garages, and side-yard equipment locations.',
      'Panel-capacity planning for remodel and accessory-load growth.',
      'Code-focused retrofit approach for GFCI/AFCI and grounding improvements.',
      'Permit and inspection coordination handled when project scope requires it.',
      'Clear post-install testing and handoff notes for homeowners.',
    ],
    neighborhoodSpotlights: [
      { name: 'Leucadia', blurb: 'Older cottages often need branch-circuit updates, grounding improvements, and panel modernization.' },
      { name: 'Cardiff-by-the-Sea', blurb: 'Salt-air conditions make weather-rated exterior equipment and fixture reliability a high priority.' },
      { name: 'Old Encinitas', blurb: 'Frequent requests include targeted rewiring, outlet upgrades, and service-panel reorganization.' },
      { name: 'New Encinitas', blurb: 'Modern homes commonly add EV charging, dedicated appliance circuits, and outdoor power.' },
      { name: 'Olivenhain', blurb: 'Larger lots often require longer circuit runs and careful voltage-drop planning.' },
      { name: 'Encinitas Ranch', blurb: 'Many projects center on EV readiness, smart controls, and cleaner panel capacity planning.' },
      { name: 'Village Park', blurb: 'Mid-era homes benefit from selective code updates and lighting-system refreshes.' },
      { name: 'Fox Point', blurb: 'Garage and exterior-power upgrades are common as households add electric mobility loads.' },
      { name: 'Quail Gardens', blurb: 'Remodel-driven electrical updates often pair device replacement with circuit reliability improvements.' },
    ],
    cityFAQs: [
      { question: 'What Encinitas electrical upgrades are most requested right now?', answer: 'EV charger circuits, panel-capacity updates, troubleshooting, and lighting modernization are among the most common requests.' },
      { question: 'Do older Encinitas homes usually need panel work before EV charging?', answer: 'Many do. We perform load planning first, then recommend either direct circuit additions or panel upgrades as needed.' },
      { question: 'Can you improve reliability of exterior electrical equipment near the coast?', answer: 'Yes. We use weather-appropriate materials and installation practices that improve long-term durability.' },
      { question: 'Do you coordinate permit requirements in Encinitas?', answer: 'Yes. We handle permit and inspection workflow when required by project scope.' },
      { question: 'Can you update outlets and protection devices without full rewiring?', answer: 'Yes. Many homes benefit from targeted upgrades that materially improve safety and usability.' },
      { question: 'Do you service both inland and coastal Encinitas neighborhoods?', answer: 'Yes. We provide the same code-focused process across Leucadia, Cardiff, Old Encinitas, and inland communities.' },
      { question: 'Can projects be planned for future electrical growth?', answer: 'Yes. We can design scope to support likely next-step loads such as second EV charging or added appliances.' },
      { question: 'Do you provide troubleshooting for intermittent breaker or lighting issues?', answer: 'Yes. We isolate root causes and fix the underlying issue rather than only replacing visible parts.' },
      { question: 'Will you document what was changed during service?', answer: 'Yes. We provide clear handoff notes and explain what was completed and why.' },
      { question: 'How do I schedule electrical service in Encinitas?', answer: 'Call our team or submit the estimate form and we will confirm scope and next available scheduling options.' },
    ],
  },
  'la-costa': {
    localProofPoints: [
      'Carlsbad-based operations with fast routing throughout all La Costa communities.',
      'Familiar with La Costa HOA permit and documentation requirements across all sub-communities.',
      'Panel capacity upgrades for legacy La Costa housing stock from the 1970s and 1980s.',
      'Strong EV readiness planning — the most common La Costa request from all construction eras.',
      'Clean finish standards for visible conduit and exterior equipment in HOA communities.',
      'Documented final testing with homeowner walkthrough before closeout.',
      'One-year labor warranty on all residential electrical workmanship.',
    ],
    neighborhoodSpotlights: [
      { name: 'La Costa Valley', blurb: 'Master-planned HOA community with newer construction and active demand for EV charger installations and load management planning.' },
      { name: 'La Costa Oaks', blurb: 'Upscale hillside development with larger homes and complex electrical systems including outdoor living and pool circuits.' },
      { name: 'La Costa Greens', blurb: 'Master-planned community with modern panels and growing demand for EV charging circuits and smart home electrical.' },
      { name: 'La Costa Ridge', blurb: 'Hillside community with mix of custom and tract homes — panel evaluations and EV charger installations are frequent projects.' },
      { name: 'La Costa Villas', blurb: 'Established 1980s-1990s neighborhood with consistent demand for panel upgrades, GFCI retrofits, and EV charging circuits.' },
      { name: 'Rancho Carrillo', blurb: 'Newer master-planned development with modern construction and growing demand for EV charging and dedicated circuit additions.' },
    ],
    cityFAQs: [
      { question: 'What electrical services does Wheyland Electric provide in La Costa?', answer: 'We handle the full range of residential electrical work in La Costa — panel upgrades, EV charger installation, recessed lighting, light fixture and ceiling fan installation, outlet and GFCI upgrades, spa and hot tub wiring, service calls, dedicated circuits, and more.' },
      { question: 'Do you handle permits for electrical work in La Costa?', answer: 'Yes. La Costa falls within City of Carlsbad jurisdiction. We handle all permit applications, coordinate with the Building Division, and attend required inspections on every permitted scope.' },
      { question: 'My La Costa home is in an HOA community. Do you handle the documentation?', answer: 'Yes. We regularly work in La Costa HOA communities and can provide the documentation your community requires for architectural review, including for EV charger installations and exterior electrical modifications.' },
      { question: 'My La Costa home was built in the 1980s. Do I need a panel upgrade?', answer: 'Many 1980s La Costa homes have panels that are approaching capacity, especially if you are adding an EV charger, heat pump, or other large loads. We perform a free load calculation to give you a definitive answer.' },
      { question: 'How quickly can you schedule electrical work in La Costa?', answer: 'We are Carlsbad-based and route quickly throughout La Costa. Most service calls and smaller projects are scheduled within 1-2 business days.' },
      { question: 'Do you provide a warranty on electrical work in La Costa?', answer: 'Yes. All Wheyland Electric work in La Costa is backed by a one-year labor warranty on all workmanship.' },
    ],
  },

  'olde-carlsbad': {
    localProofPoints: [
      'Extensive experience with pre-1980 homes in the 92008 ZIP code west of El Camino Real.',
      'Federal Pacific and Zinsco panel replacement expertise — documented safety hazards handled correctly.',
      'Aluminum wiring remediation using COPALUM and AlumiConn methods at outlets and switches.',
      'Salt-air-appropriate hardware and sealed fittings for all exterior electrical work in this coastal neighborhood.',
      'Honest assessments — we recommend what the home actually needs, not what maximizes the invoice.',
      'City of Carlsbad permit coordination handled end-to-end on all required scopes.',
      'One-year labor warranty on all residential electrical workmanship.',
    ],
    neighborhoodSpotlights: [
      { name: 'Barrio Carlsbad', blurb: 'Some of the oldest housing stock in Carlsbad — aluminum wiring, 60-amp and 100-amp panels, and two-prong outlets are common findings.' },
      { name: 'Jefferson Elementary area', blurb: '1960s-1970s construction with consistent demand for panel upgrades and grounding modernization.' },
      { name: 'Carlsbad Village adjacent', blurb: 'Mix of residential and mixed-use buildings with varied construction ages and electrical systems requiring careful evaluation.' },
      { name: 'Tamarack area', blurb: 'Older residential corridor with active demand for panel upgrades, GFCI retrofits, and EV charger circuit additions.' },
      { name: 'Pine Avenue corridor', blurb: 'Mix of original Carlsbad bungalows and newer infill construction — electrical ages vary widely by property.' },
    ],
    cityFAQs: [
      { question: 'What electrical work is most common in Olde Carlsbad homes?', answer: 'The most common projects in Olde Carlsbad are panel upgrades from 100-amp to 200-amp service, Federal Pacific and Zinsco panel replacements, EV charger circuit additions, GFCI and outlet modernization, and service call diagnostics on aging wiring.' },
      { question: 'My Olde Carlsbad home has a Federal Pacific panel. What should I do?', answer: 'Federal Pacific Stab-Lok panels have a documented history of breakers that fail to trip during overloads — a genuine fire risk. We recommend scheduling an evaluation. In most cases, replacement is the right course of action.' },
      { question: 'My Olde Carlsbad home has aluminum wiring. Is that a problem?', answer: 'Aluminum branch wiring from the 1960s and 1970s is common in Olde Carlsbad. It is not inherently dangerous, but connections at outlets and switches can loosen over time. We inspect and remediate aluminum wiring connection issues using COPALUM or AlumiConn methods.' },
      { question: 'Does salt air affect electrical systems in Olde Carlsbad?', answer: 'Yes. Salt air accelerates corrosion on exterior electrical components including service entrance equipment, outdoor outlets, and fixtures. We use marine-grade materials and weatherproof enclosures for all exterior work in the 92008 ZIP.' },
      { question: 'Can I get an EV charger in my older Olde Carlsbad home?', answer: 'In many cases yes. We perform a load calculation to determine whether your existing panel has capacity for an EV charger circuit. Many older Olde Carlsbad homes with modest electrical loads can support a charger without a full panel upgrade.' },
      { question: 'Do you provide a warranty on electrical work in Olde Carlsbad?', answer: 'Yes. All Wheyland Electric work in Olde Carlsbad is backed by a one-year labor warranty on all workmanship.' },
    ],
  },

  'olivenhain': {
    localProofPoints: [
      'Experience with rural and semi-rural property electrical — outbuildings, sub-panels, well pumps, and long circuit runs.',
      'Proper voltage drop calculations for extended circuit runs common on Olivenhain properties.',
      'Barn, arena, and agricultural electrical handled by the same licensed electricians as the main residence.',
      'City of Encinitas permit coordination on all permitted scopes in the 92024 ZIP code.',
      'Honest load assessments for properties with well pumps, irrigation systems, and agricultural equipment.',
      'Underground conduit and trenching capability for properties requiring inter-building circuit runs.',
      'One-year labor warranty on all electrical workmanship.',
    ],
    neighborhoodSpotlights: [
      { name: 'Olivenhain proper', blurb: 'The original Olivenhain community with rural character, horse properties, and older homes frequently needing panel evaluations and circuit additions for modern loads.' },
      { name: 'The Ranch', blurb: 'Custom home development with newer construction and larger lots — EV charging and outdoor living electrical are common requests.' },
      { name: 'Wildflower', blurb: 'Established neighborhood with varied property ages and active demand for panel upgrades and dedicated circuit work.' },
      { name: 'El Camino Olivenhain area', blurb: 'Properties along the main Olivenhain corridor with varied construction ages and frequent requests for service upgrades.' },
      { name: 'Rancho Cielo adjacent', blurb: 'Larger lot properties with outbuildings and rural electrical needs including sub-panels and extended circuit runs.' },
    ],
    cityFAQs: [
      { question: 'What electrical services does Wheyland Electric provide in Olivenhain?', answer: 'We handle the full range of residential and rural property electrical work in Olivenhain — panel upgrades, sub-panel additions for outbuildings, EV charger installation, well pump circuit work, barn and agricultural electrical, service calls, lighting, and outlet upgrades.' },
      { question: 'Do you handle electrical work for horse properties and barns in Olivenhain?', answer: 'Yes. Barn electrical, arena lighting, tack room circuits, and well pump wiring are regular project types for us in Olivenhain. We understand the specific requirements of equestrian properties.' },
      { question: 'My Olivenhain garage is detached and far from the main panel. Can I still get an EV charger?', answer: 'Yes. We plan the circuit routing, calculate voltage drop for the specific run length, and size the wire appropriately. For very long runs, we can also feed from an existing sub-panel closer to the charging location.' },
      { question: 'Does City of Encinitas require permits for electrical work in Olivenhain?', answer: 'Yes. Olivenhain is within City of Encinitas jurisdiction. We handle all permits and required inspections for electrical work in the 92024 ZIP code.' },
      { question: 'My Olivenhain property has a well pump. How does that affect electrical work?', answer: 'Well pumps draw significant electrical load when running. We include all existing loads in our calculations before adding any new circuits to ensure the panel has adequate capacity.' },
      { question: 'Do you provide a warranty on electrical work in Olivenhain?', answer: 'Yes. All Wheyland Electric work in Olivenhain is backed by a one-year labor warranty.' },
    ],
  },

  'bressi-ranch': {
    localProofPoints: [
      'Familiar with Bressi Ranch HOA permit, documentation, and architectural review requirements.',
      'EV charger installation specialists for 2000s-era master-planned home electrical systems.',
      'Panel capacity evaluation and load management for modern two-EV households.',
      'Smart home electrical including Lutron Caseta and other popular systems in this community.',
      'Clean exterior work that meets Bressi Ranch HOA appearance standards consistently.',
      'City of Carlsbad permit coordination handled end-to-end on all required scopes.',
      'One-year labor warranty on all residential electrical workmanship.',
    ],
    neighborhoodSpotlights: [
      { name: 'Bressi Ranch Village', blurb: 'Commercial and retail core with restaurants and services — commercial electrical maintenance and tenant improvement work for Village businesses.' },
      { name: 'Bressi Ranch North', blurb: 'Single-family residential with consistent demand for EV charger installations and panel capacity evaluations.' },
      { name: 'Bressi Ranch South', blurb: 'Mix of attached and detached homes with active demand for EV charging, smart home electrical, and lighting upgrades.' },
      { name: 'Paseo Del Norte corridor', blurb: 'Well-connected residential area with good access and consistent residential electrical service demand.' },
    ],
    cityFAQs: [
      { question: 'What electrical work is most common in Bressi Ranch homes?', answer: 'The most common Bressi Ranch projects are EV charger installations, panel capacity evaluations for two-EV households, smart home electrical upgrades, outdoor living circuits, and recessed lighting retrofits.' },
      { question: 'Does my Bressi Ranch HOA need to approve electrical work?', answer: 'For exterior electrical modifications including EV chargers, your Bressi Ranch HOA requires architectural review approval. California law requires HOAs to approve EV charger requests within 60 days. We provide the documentation your HOA needs.' },
      { question: 'My Bressi Ranch home was built around 2005. Do I need a panel upgrade for an EV charger?', answer: 'Most 2000s-era Bressi Ranch homes have 200-amp panels with adequate capacity for an EV charger circuit. We confirm this with a load calculation during the site assessment.' },
      { question: 'I have two EVs in my Bressi Ranch garage. How do you handle the electrical planning?', answer: 'We perform a load calculation and plan the two charger circuits with a load management device that dynamically shares available capacity. This typically avoids the need for a service upgrade.' },
      { question: 'Does City of Carlsbad require permits for electrical work in Bressi Ranch?', answer: 'Yes. All dedicated circuit installations, panel upgrades, and other permitted scopes require a City of Carlsbad electrical permit. We handle the full process.' },
      { question: 'Do you provide a warranty on electrical work in Bressi Ranch?', answer: 'Yes. All Wheyland Electric work in Bressi Ranch is backed by a one-year labor warranty.' },
    ],
  },

  'aviara': {
    localProofPoints: [
      'Experience with complex luxury home electrical systems including multi-panel configurations in Aviara.',
      'Pool, spa, and landscape lighting circuit expertise for Aviara estate-style properties.',
      'EV charger load management planning for multi-car luxury garages.',
      'HOA architectural review coordination for all exterior electrical modifications.',
      'Discreet, professional scheduling that respects Aviara homeowner privacy and property standards.',
      'City of Carlsbad permit coordination handled end-to-end on all required scopes.',
      'One-year labor warranty on all residential electrical workmanship.',
    ],
    neighborhoodSpotlights: [
      { name: 'Aviara proper', blurb: 'Core luxury residential development with larger custom homes and complex electrical systems including pool, landscape, and outdoor living circuits.' },
      { name: 'Four Seasons Aviara area', blurb: 'Premium properties adjacent to the resort with high-end finishes and sophisticated electrical requirements.' },
      { name: 'Park Drive corridor', blurb: 'Well-established Aviara residential area with mature landscaping and active demand for landscape lighting upgrades.' },
      { name: 'Batiquitos Lagoon adjacent', blurb: 'Properties with lagoon views and premium outdoor living areas requiring weatherproof outdoor electrical.' },
      { name: 'Ambrosia area', blurb: 'Established Aviara neighborhood with consistent demand for panel evaluations and EV charging circuit planning.' },
    ],
    cityFAQs: [
      { question: 'What electrical services does Wheyland Electric provide in Aviara?', answer: 'We handle the full range of residential electrical work in Aviara — panel and service upgrades, EV charger installation and load management, pool and spa circuit maintenance, landscape lighting electrical, smart home electrical, recessed lighting, ceiling fans, outlet upgrades, and service calls.' },
      { question: 'My Aviara home has a pool and multiple sub-panels. Can you work on the full system?', answer: 'Yes. We evaluate and work on complex multi-panel systems including pool sub-panels, landscape lighting transformers, and all associated circuits. We document the full system as part of every project.' },
      { question: 'I have a three-car garage in Aviara with two EVs. How do you handle this?', answer: 'We plan two charger circuits with a load management device to share available capacity dynamically. This typically avoids the need for a service upgrade and allows for a future third charger if needed.' },
      { question: 'Does the Aviara HOA need to approve electrical work?', answer: 'Yes for exterior modifications. We coordinate with the Aviara HOA and provide required documentation for architectural review. We are familiar with the process and can help move approvals along.' },
      { question: 'How do you handle electrical work in Aviara to minimize disruption?', answer: 'We schedule around your availability, work efficiently, protect your property, and maintain a clean job site throughout. Aviara projects receive the same attention to finish quality as the properties themselves.' },
      { question: 'Do you provide a warranty on electrical work in Aviara?', answer: 'Yes. All Wheyland Electric work in Aviara is backed by a one-year labor warranty.' },
    ],
  },

  'calavera-hills': {
    localProofPoints: [
      'Extensive experience with 1978-1998 era electrical systems throughout the Calavera Hills community.',
      'Panel upgrade specialists — 100-amp to 200-amp service in one day is the most common Calavera Hills project.',
      'GFCI and AFCI retrofit expertise for pre-2000 homes lacking modern protective devices.',
      'EV charger installation with honest panel capacity evaluation before quoting circuit work.',
      'Outdoor electrical weatherproofing for open-space-adjacent properties near Lake Calavera.',
      'City of Carlsbad permit coordination handled end-to-end on all required scopes.',
      'One-year labor warranty on all residential electrical workmanship.',
    ],
    neighborhoodSpotlights: [
      { name: 'Calavera Hills Village', blurb: 'Commercial core with retail and services — commercial electrical maintenance for Village business tenants.' },
      { name: 'Calavera Hills North', blurb: 'Established 1980s-1990s residential with consistent panel upgrade and GFCI retrofit demand.' },
      { name: 'Calavera Hills South', blurb: 'Similar construction era with active demand for EV charger installations and circuit capacity additions.' },
      { name: 'Lake Calavera area', blurb: 'Properties adjacent to the lake preserve with outdoor lighting reliability concerns and weatherproof electrical priorities.' },
      { name: 'College Boulevard corridor', blurb: 'Mixed construction ages with consistent electrical service demand across all residential project types.' },
    ],
    cityFAQs: [
      { question: 'What electrical work is most common in Calavera Hills homes?', answer: 'The most common Calavera Hills projects are panel upgrades from 100-amp to 200-amp service, EV charger circuit installations, GFCI modernization in bathrooms and kitchens, service call diagnostics on aging 1980s-1990s systems, and dedicated circuits for home offices and appliances.' },
      { question: 'My Calavera Hills home has a 100-amp panel from the 1980s. Should I upgrade it?', answer: 'A 100-amp panel in an 1980s Calavera Hills home is almost certainly undersized by today\'s standards. If you plan to add an EV charger, upgrade HVAC to a heat pump, or run a home office, a 200-amp upgrade is the right move. We perform a free load calculation to confirm.' },
      { question: 'Do I need GFCI outlets in my older Calavera Hills home?', answer: 'GFCI protection is required in bathrooms, kitchens, garages, and outdoor areas. Older Calavera Hills homes frequently lack this protection in some or all of these locations. Installation is straightforward and significantly improves safety.' },
      { question: 'Can I get an EV charger without upgrading my Calavera Hills panel?', answer: 'Sometimes. It depends on your current electrical load. We perform a load calculation during the assessment to give you a definitive answer. Many Calavera Hills homes with modest existing loads can support an EV charger on the current panel.' },
      { question: 'Does City of Carlsbad require permits for electrical work in Calavera Hills?', answer: 'Yes. Panel upgrades, new circuits, EV chargers, and other permitted scopes require a City of Carlsbad electrical permit. We handle the full process.' },
      { question: 'Do you provide a warranty on electrical work in Calavera Hills?', answer: 'Yes. All Wheyland Electric work in Calavera Hills is backed by a one-year labor warranty.' },
    ],
  },

};

const normalizeCity = (city: City): City => {
  const override = CITY_CONTENT_OVERRIDES[city.slug] || {};
  const nearbyNames = city.nearbyCities.join(', ');

  const neighborhoodSpotlights = ((override.neighborhoodSpotlights as City['neighborhoodSpotlights']) || city.neighborhoodSpotlights || buildNeighborhoodSpotlights(city)).slice(0, 16);
  const localProofPoints = ((override.localProofPoints as string[]) || city.localProofPoints || defaultLocalProofPoints(city)).slice(0, 10);
  const localCues = ((override.localCues as string[]) || city.localCues).slice(0, 8);
  const cityFAQs = (((override.cityFAQs as City['cityFAQs']) || city.cityFAQs || defaultCityFaqs(city, nearbyNames) || []) as NonNullable<City['cityFAQs']>).slice(0, 14);

  return {
    ...city,
    ...override,
    neighborhoods: neighborhoodSpotlights.map((item) => item.name).slice(0, 16),
    neighborhoodSpotlights,
    localProofPoints,
    localCues,
    cityFAQs,
  };
  };

export const cities: City[] = baseCities.map(normalizeCity);

/** Get published cities (respects Wave 2 flag) */
export function getPublishedCities(): City[] {
  return cities.filter(
    (c) => c.publish || (c.tier === 'wave2' && flags.publish_wave2)
  );
}

/** Get a single city by slug */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Get Wave 1 cities only */
export function getWave1Cities(): City[] {
  return cities.filter((c) => c.tier === 'wave1');
}

export default cities;
