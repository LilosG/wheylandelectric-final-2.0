import type { City } from '../types';
import { flags } from './site';

export const cities: City[] = [
  // ========================
  // WAVE 1 — publish: true
  // ========================
  {
    slug: 'carlsbad',
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
      "Carlsbad's housing stock is one of the most diverse in North County San Diego, ranging from 1960s-era coastal cottages near the Village to brand-new construction in Robertson Ranch and the newer developments along Palomar Airport Road. Older neighborhoods often have outdated 100-amp panels, aluminum wiring, or undersized circuits that can't support today's electrical demands — including EV chargers, home offices, and smart home systems. Newer developments may need additions like dedicated EV charging circuits, outdoor living electrical, or whole-home surge protection. We serve all of it — residential, commercial, HOA communities, and EV charging installations across all Carlsbad ZIP codes: 92008, 92009, 92010, 92011, and 92013.",
    neighborhoodDescriptions: {
      'La Costa': 'One of Carlsbad\'s largest communities, spanning a mix of mid-century homes and newer construction with HOA-managed common areas and active landscape lighting needs.',
      'Bressi Ranch': 'A master-planned community with newer homes, HOA infrastructure, and strong demand for EV charging installations and smart home electrical upgrades.',
      'Aviara': 'Upscale development near the Aviara Golf Course featuring luxury homes with complex electrical systems and outdoor living areas that frequently require dedicated circuits.',
      'Calavera Hills': 'Established neighborhood with a mix of 1980s–2000s homes where panel upgrades and GFCI retrofits are common requests.',
      'The Village': 'Carlsbad\'s historic downtown core, home to a mix of older commercial buildings and residential properties along Carlsbad Boulevard with unique older-wiring considerations.',
      'Robertson Ranch': 'Newer Carlsbad master plan development with modern construction and growing demand for EV charger installations.',
      'Olde Carlsbad': 'One of the original Carlsbad neighborhoods, featuring older homes that frequently need panel upgrades, rewiring, and GFCI installations.',
    },
    localCues: ['Flower Fields', 'Carlsbad Village', 'LEGOLAND', 'Carlsbad Lagoon', 'Palomar Airport Road', 'Carlsbad State Beach'],
    nearbyCities: ['encinitas', 'oceanside', 'san-marcos'],
    serviceCategories: ['residential', 'commercial', 'hoa', 'ev'],
  },
  {
    slug: 'encinitas',
    name: 'Encinitas',
    state: 'CA',
    tier: 'wave1',
    publish: true,
    has_zip_pdf: true,
    zips: ['92007', '92023', '92024'],
    neighborhoods: ['Leucadia', 'Cardiff-by-the-Sea', 'Olivenhain', 'Old Encinitas', 'New Encinitas', 'Encinitas Ranch'],
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
      "San Marcos spans three ZIP codes — 92069, 92078, and 92096 — and nearly every era of residential construction. Older homes near Lake San Marcos often have 100-amp panels and outdated wiring that wasn't designed to support today's electrical loads. The University District around Cal State San Marcos brings commercial electrical demand from retail, restaurant, and office tenants. Growing communities in San Elijo Hills, Barham Ranch, and Discovery Hills are seeing strong demand for EV charger installations, outdoor living circuits, and smart home electrical. Wheyland Electric handles residential, commercial, and HOA work throughout San Marcos, fully licensed and permitted through the City of San Marcos building department.",
    neighborhoodDescriptions: {
      'San Elijo Hills': 'A large planned community on the hills south of San Marcos with newer homes and HOA infrastructure, active for EV charger installations and landscape lighting.',
      'Lake San Marcos': 'An established community centered around the lake, featuring older custom homes and a golf course. Panel upgrades and rewiring are common requests here.',
      'Twin Oaks Valley': 'A semi-rural corridor along Twin Oaks Valley Road with a mix of residential and agricultural properties, including nursery operations with commercial electrical needs.',
      'Discovery Hills': 'Newer construction along the San Marcos–Carlsbad border with growing demand for EV chargers and dedicated circuit additions.',
      'Barham Ranch': 'A newer residential development with HOA-managed common areas and an active new-construction electrical base.',
      'Rancho Dorado': 'An established San Marcos neighborhood with 1990s–2000s construction and growing demand for panel upgrades and GFCI installations.',
    },
    localCues: ['Cal State San Marcos', 'Lake San Marcos', 'Grand Avenue', 'Restaurant Row', 'Double Peak Park'],
    nearbyCities: ['carlsbad', 'oceanside', 'encinitas'],
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
    nearbyCities: ['carlsbad', 'san-marcos'],
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
    publish: false,
    has_zip_pdf: true,
    zips: ['92081', '92083', '92084', '92085'],
    neighborhoods: ['Shadowridge', 'Vista Village', 'Breeze Hill', 'Rancho Buena Vista'],
    localIntroSeed:
      'Wheyland Electric serves Vista with dependable electrical solutions for homes and businesses across Shadowridge, Vista Village, and the surrounding neighborhoods. [PLACEHOLDER — replace with unique local content]',
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
