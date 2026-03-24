import type { SiteData, SiteFlags } from '../types';

export const flags: SiteFlags = {
  reviews_verified: false,
  show_review_excerpts: false,
  publish_wave2: false,
} as const;

export const site: SiteData = {
  nap: {
    name: 'Wheyland Electric',
    address: {
      street: '3536 Woodland Way',
      city: 'Carlsbad',
      state: 'CA',
      zip: '92008',
      full: '3536 Woodland Way, Carlsbad, CA 92008',
    },
    phone: '(858) 663-5564',
    phoneTel: '8586635564',
    email: 'info@wheylandelectric.com',
  },
  hours: {
    weekday: 'Mon–Fri 8:00 AM – 7:00 PM',
    weekend: 'Sat–Sun Closed',
    formatted: 'Mon–Fri 8:00 AM – 7:00 PM | Sat–Sun Closed',
  },
  license: 'CA License #940291',
  established: 2008,
  claims: {
    licensedBondedInsured: true,
    satisfactionGuaranteed: true,
  },
  warranty:
    'All electrical services performed by Wheyland Electric are backed by a one (1) year labor warranty on workmanship from the date of service or project completion. If a problem occurs due to our installation or electrical workmanship, we will correct it at no additional labor cost.',
  tagline: 'Bright Ideas For Your Electrical Needs',
  businessModelLine:
    'Build our business with the same standards of care and ethics we strive to build our family.',
  pledge: [
    'It is our pledge to you that we deliver on what is agreed.',
    'If there is a problem that needs to be addressed or corrected we are here to resolve it satisfactorily face to face.',
    'We answer our telephones here – not back east or overseas.',
    'We welcome the opportunity to provide you the service and experience you expect from a professional electrician.',
  ],
  owner: {
    name: 'Tim Wheyland',
    bio: [
      'Tim Wheyland is a fourth generation San Diego County resident (fifth in California). He grew up in North County aware of the gradual changes from local to regional, national, and internationally owned business.',
      'He understands the benefits of being local, buying local and knowing first hand with whom you are dealing.',
      'We are the same ones whose kids are attending local schools, participating in youth sports, school dance teams skate boarding or playing music. The family is a part of the treasure that is Southern California, its history, diversity and future.',
    ],
    generation:
      'fourth generation San Diego County resident (fifth in California)',
  },
  team: [{ name: 'Vanessa', role: 'Operations' }],
  serviceRadiusCounties: [
    'San Diego County',
    'Orange County',
    'Western Riverside County',
  ],
  geo: {
    latitude: 33.1283,
    longitude: -117.3213,
  },
  rating: {
    value: 5.0,
    count: 77,
  },
  gbp: {
    url: 'https://www.google.com/maps/search/?api=1&query=Wheyland%20Electric%2C%203536%20Woodland%20Way%2C%20Carlsbad%2C%20CA%2092008',
    embedSrc:
      'https://www.google.com/maps?q=Wheyland+Electric,+3536+Woodland+Way,+Carlsbad,+CA+92008&output=embed',
  },
  social: {
    twitter: 'https://twitter.com/wheylandelectric',
    facebook: 'https://facebook.com/wheylandelectric',
    linkedin: 'https://linkedin.com/company/wheylandelectric',
  },
  flags,
};

export default site;
