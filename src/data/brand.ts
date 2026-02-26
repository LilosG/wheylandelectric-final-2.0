import type { BrandTokens } from '../types';

export const DEFAULT_LOGO_PATH = '/images/logo/wheyland-electric-logo.png';

export const brand: BrandTokens = {
  colors: {
    mint: '#F5F0E6',
    moonstone: '#2F7F7A',
    indigo: '#1F4E63',
    columbia: '#E8F0EE',
    picton: '#3A9994',
    cta: '#C29A3A',
    ctaHover: '#9E7C2F',
    surfaceSubtle: '#F2F4F3',
    textMuted: '#3D5A6E',
    white: '#FFFFFF',
  },
  logoPaths: {
    primary: DEFAULT_LOGO_PATH,
    dark: '/images/logo/wheyland-electric-logo-footer.webp',
    favicon: '/favicon.svg',
  },
  tagline: 'Bright Ideas For Your Electrical Needs',
  fonts: {
    heading: 'Plus Jakarta Sans',
    body: 'Inter',
  },
};

export default brand;
