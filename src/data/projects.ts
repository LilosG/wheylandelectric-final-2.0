import type { Project } from '../types';

/**
 * Projects gallery — empty-safe by design.
 * Add projects as they become available; components render
 * a placeholder state when this array is empty.
 */
export const projects: Project[] = [];

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
