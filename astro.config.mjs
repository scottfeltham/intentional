import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://intentional.ae',
  integrations: [sitemap()],
  output: 'static',
  // Pin HTML-aware compression. Astro 7 changed the default to JSX whitespace
  // rules, which delete the newline between text and an inline tag
  // ("living with<strong>mental health"). true = the Astro 6 behaviour.
  compressHTML: true,
});
