import type { Project } from '../types';

/**
 * Projects gallery entries.
 * Uses optimized local assets in /public/images.
 */
export const projects: Project[] = [
  {
    slug: 'carlsbad-custom-lighting-upgrade',
    title: 'Custom Residential Lighting Upgrade',
    description: 'Layered recessed, pendant, and accent lighting for an open-concept Carlsbad kitchen remodel.',
    citySlug: 'carlsbad',
    serviceSlug: 'recessed-lighting-installation',
    images: ['/images/gallery/wheyland-electric-foyer-pendant-lights-staircase.webp'],
    publish: true,
  },
  {
    slug: 'rancho-santa-fe-ev-charger-install',
    title: 'Level 2 EV Charger Installation',
    description: 'Dedicated 240V circuit, charger wall mount, and clean conduit routing for a Rancho Santa Fe garage.',
    citySlug: 'rancho-santa-fe',
    serviceSlug: 'ev-charger-installation',
    images: ['/images/services/ev-charger/wheyland-electric-bmw-ev-charger-rancho-santa-fe.webp'],
    publish: true,
  },
  {
    slug: 'north-county-service-panel-modernization',
    title: 'Service Panel Modernization',
    description: 'Panel and service equipment refresh to support modern home loads, safety devices, and future expansion.',
    citySlug: 'san-marcos',
    serviceSlug: 'electrical-panel-upgrades',
    images: ['/images/services/panel/wheyland-electric-commercial-meter-stack-panel.webp'],
    publish: true,
  },
];

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.publish);
}

export function getProjectsByCity(citySlug: string): Project[] {
  return getPublishedProjects().filter((p) => p.citySlug === citySlug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return getPublishedProjects().filter((p) => p.serviceSlug === serviceSlug);
}

export default projects;
