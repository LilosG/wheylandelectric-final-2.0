import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://wheylandelectric.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind(), react(), sitemap(), mdx()],
});
