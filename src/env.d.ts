/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_FORMSPREE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    WheylandTracking?: {
      track: (eventName: string, details?: Record<string, unknown>) => void;
    };
  }
}

export {};
