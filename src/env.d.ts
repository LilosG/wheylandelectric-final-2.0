/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  // Build-time only — never exposed to the browser
  readonly GOOGLE_PLACES_API_KEY: string;
  readonly GOOGLE_PLACE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
