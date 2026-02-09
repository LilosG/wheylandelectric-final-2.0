/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: '#BEE9E8',
          moonstone: '#62B6CB',
          indigo: '#1B4965',
          columbia: '#CAE9FF',
          picton: '#5FA8D3',
          cta: '#D97706',
          'cta-hover': '#B45309',
        },
        surface: {
          DEFAULT: '#CAE9FF',
          subtle: '#F0F9FF',
        },
        text: {
          DEFAULT: '#1B4965',
          muted: '#3D6B85',
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
