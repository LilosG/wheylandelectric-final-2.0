import { site } from '../data/site';

export interface GoogleRating {
  value: number;
  count: number;
}

// Module-level cache: one fetch per build process regardless of how many pages import this.
let cached: Promise<GoogleRating> | null = null;

async function fetchFromPlacesAPI(): Promise<GoogleRating> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { value: site.rating.value, count: site.rating.count };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Places API responded with ${res.status}`);
    const data = await res.json();
    const result = data?.result;
    if (!result?.rating || !result?.user_ratings_total) throw new Error('Unexpected Places API response shape');
    return { value: result.rating as number, count: result.user_ratings_total as number };
  } catch (err) {
    console.warn('[googlePlaces] Falling back to static rating:', err);
    return { value: site.rating.value, count: site.rating.count };
  }
}

export function getGoogleRating(): Promise<GoogleRating> {
  if (!cached) {
    cached = fetchFromPlacesAPI();
  }
  return cached;
}
