/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F2A3A',         // Deepest dark — footer, darkest backgrounds
          slate: '#1F4E63',        // Primary dark — headings, hero overlay, dark section bgs
          teal: '#2F7F7A',         // Accent — icons, links, borders, hover accents
          'teal-light': '#3A9994', // Lighter teal — for hover states on teal elements
          gold: '#C29A3A',         // Primary CTA — buttons, primary actions
          'gold-hover': '#9E7C2F', // CTA hover — also used for gold text on white (contrast)
          'gold-light': '#D4B15C', // Light gold — subtle gold accents, badges
        },
        surface: {
          DEFAULT: '#E8F0EE',     // Teal-tinted light — trust bar, icon containers
          subtle: '#F2F4F3',      // Barely tinted off-white — alternating section backgrounds
          warm: '#F5F0E6',        // Gold-tinted light — HOA section, warm accent backgrounds
          dark: '#0F2A3A',        // Alias for brand-navy — dark section backgrounds
        },
        text: {
          DEFAULT: '#1F4E63',     // Primary text — headings, nav
          muted: '#3D5A6E',       // Body copy, descriptions
          light: '#5A7A8A',       // Lighter muted — timestamps, captions, tertiary text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
