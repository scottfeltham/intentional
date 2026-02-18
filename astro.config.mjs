import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://intentional.ae',
  integrations: [sitemap()],
  output: 'static',
});
