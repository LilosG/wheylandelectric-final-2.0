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
    zips: ['92008', '92009', '92010', '92011'],
    neighborhoods: ['Barrio', 'Olde Carlsbad', 'La Costa', 'Bressi Ranch', 'Aviara', 'Calavera Hills'],
    localIntroSeed:
      'As a Carlsbad-based electrician since 2008, Wheyland Electric is proud to serve the community we call home. From the flower fields along Palomar Airport Road to the village streets near the coast, our team knows this city inside and out. Whether you live in La Costa, Bressi Ranch, or Olde Carlsbad, our licensed electricians deliver reliable service backed by deep local roots and a commitment to doing the job right the first time.',
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
    zips: ['92023', '92024'],
    neighborhoods: ['Leucadia', 'Cardiff-by-the-Sea', 'Olivenhain', 'Old Encinitas', 'New Encinitas'],
    localIntroSeed:
      'Wheyland Electric proudly serves Encinitas homeowners and businesses across Leucadia, Cardiff-by-the-Sea, Olivenhain, and Old Encinitas. This vibrant coastal community deserves an electrician who respects both the character of older beach cottages and the standards of modern construction. Our team brings professional craftsmanship and transparent communication to every project — from panel upgrades in historic homes to EV charger installations in new developments along El Camino Real.',
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
    zips: ['92067'],
    neighborhoods: ['The Covenant', 'Fairbanks Ranch', 'Cielo', 'Morgan Run', 'The Bridges'],
    localIntroSeed:
      'Wheyland Electric serves the Rancho Santa Fe community with the same attention to detail this neighborhood is known for. From estate-scale electrical systems in The Covenant to landscape lighting for Fairbanks Ranch properties, our licensed team delivers meticulous workmanship and clear communication. We understand that Rancho Santa Fe homeowners expect nothing less than excellence — and we deliver exactly that, backed by our 1-year labor warranty.',
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
    neighborhoods: ['Lake San Marcos', 'San Elijo Hills', 'Twin Oaks Valley', 'Rancho Santa Fe Road corridor', 'Discovery Hills'],
    localIntroSeed:
      'Wheyland Electric brings trusted electrical services to San Marcos homes and businesses throughout Lake San Marcos, San Elijo Hills, Twin Oaks Valley, and the growing commercial districts along Grand Avenue and Rancheros Drive. Whether you need a panel upgrade to support modern appliances or a complete wiring solution for a remodel, our team provides the same honest, skilled service that has built our reputation across North County since 2008.',
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
    zips: ['92014'],
    neighborhoods: ['Del Mar Village', 'Del Mar Heights', 'Del Mar Mesa', 'Carmel Valley adjacent'],
    localIntroSeed:
      'Del Mar homeowners trust Wheyland Electric for electrical services that match the quality of this premier coastal community. From the village bluffs to Del Mar Heights, our licensed electricians handle everything from recessed lighting installations to electrical panel upgrades with precision and care. We are fully familiar with the unique building requirements and HOA standards throughout Del Mar and bring a professional approach to every project.',
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
    neighborhoods: ['Solana Beach Village', 'Eden Gardens', 'Lomas Santa Fe', 'Santa Helena'],
    localIntroSeed:
      'Wheyland Electric serves Solana Beach with the reliable, professional electrical services this tight-knit coastal community expects. From the Cedros Design District to Lomas Santa Fe and Eden Gardens, our team provides code-compliant electrical work for homes and businesses of every size. Our Carlsbad-based team is just minutes away and brings the same commitment to quality and integrity to every Solana Beach project we take on.',
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
    zips: ['92049', '92054', '92056', '92057', '92058'],
    neighborhoods: ['Downtown Oceanside', 'Fire Mountain', 'South Oceanside', 'Mira Costa', 'Rancho Del Oro', 'Arrowood'],
    localIntroSeed:
      'Wheyland Electric provides comprehensive electrical services throughout Oceanside, from the pier area and downtown to Fire Mountain, Rancho Del Oro, and the expanding neighborhoods east of I-5. As Oceanside continues to grow with new construction and revitalization projects, our team delivers the skilled electrical work this diverse community needs — residential, commercial, and HOA — with fair pricing and the personal accountability of a family-owned business.',
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
