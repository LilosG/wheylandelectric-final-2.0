import { cities } from '../data/cities';
import { servicePillars } from '../data/services';

export type RouteType = 'city-service' | 'generic-service' | 'city-hub' | 'generic';

interface TrackingContext {
  pageTemplate: string;
  routeType: RouteType;
  phase: 'phase-1' | 'future';
}

const citySlugs = new Set(cities.map((city) => city.slug));
const serviceSlugs = new Set(servicePillars.map((service) => service.slug));

const HIGH_INTENT_TEMPLATES = new Set([
  'city-service',
  'service-detail',
  'city-hub',
  'free-estimates',
  'contact',
]);

export function getTrackingContext(pathname: string): TrackingContext {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const segments = normalizedPath.split('/').filter(Boolean);

  const [first = '', second = ''] = segments;

  const isCityService = segments.length === 2 && citySlugs.has(first) && serviceSlugs.has(second);
  const isGenericService =
    segments.length === 2 && first === 'services' && serviceSlugs.has(second);
  const isCityHub = segments.length === 1 && citySlugs.has(first);

  let pageTemplate = 'generic-page';
  let routeType: RouteType = 'generic';

  if (isCityService) {
    pageTemplate = 'city-service';
    routeType = 'city-service';
  } else if (isGenericService) {
    pageTemplate = 'service-detail';
    routeType = 'generic-service';
  } else if (isCityHub) {
    pageTemplate = 'city-hub';
    routeType = 'city-hub';
  } else if (normalizedPath === '/free-estimates/') {
    pageTemplate = 'free-estimates';
  } else if (normalizedPath === '/contact-us/') {
    pageTemplate = 'contact';
  } else if (normalizedPath === '/services/') {
    pageTemplate = 'services-index';
  }

  return {
    pageTemplate,
    routeType,
    phase: HIGH_INTENT_TEMPLATES.has(pageTemplate) ? 'phase-1' : 'future',
  };
}
