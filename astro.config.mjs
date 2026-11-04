// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ivanleonc.github.io',
  base: '/cv',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/404') && page !== 'https://ivanleonc.github.io/cv',
    }),
  ],
});
