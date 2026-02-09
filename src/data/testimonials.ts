import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    author: 'Matt Schlumpberger',
    text: 'After getting ignored by another "family owned" Carlsbad electrician for 3 weeks, we called Wheyland to have a light fixture wired and installed in a nursery. They gave us a ballpark estimate over the phone... Tim showed up and was super friendly and extremely personable... He also pointed out that he could change our outlets to child resistant ones, which we hadn\'t even thought of!... Would highly recommend these guys for anything you need.',
    source: 'zip',
    serviceTag: 'light-fixture-installation',
    cityTag: 'carlsbad',
  },
  {
    author: 'C Littlestar',
    text: 'We had a fantastic experience with Wheyland Electric! Tim the owner, installed a beautiful overhead light above our dining table and also added an outlet for our new stove. He problem solved and thought outside the box... Tim and his wife Vanessa went above and beyond any electrical company we\'ve ever worked with.',
    source: 'zip',
    serviceTag: 'light-fixture-installation',
  },
  {
    author: 'John P.',
    text: 'We recently bought a condo in Carlsbad. We unfortunately had to fire our electrical contractor due to incompetence. Tim Wheyland and his crew took over the job and corrected all work that was shoddy, incomplete, and dangerous.',
    source: 'zip',
    serviceTag: 'service-calls-troubleshooting',
    cityTag: 'carlsbad',
  },
  {
    author: 'Simone A.',
    text: 'Tim installed a plug to charge our new Tesla. He knew exactly what to do and did a great job for a reasonable price.',
    source: 'zip',
    serviceTag: 'ev-charger-installation',
  },
  {
    author: 'Damien I.',
    text: 'Killed It. Made my project and car charger look fantastic. Will use again.',
    source: 'zip',
    serviceTag: 'ev-charger-installation',
    cityTag: 'oceanside',
  },
];

export const reviewStats = {
  rating: 5,
  count: 153,
};

export default testimonials;
