import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://intentional.ae',
  integrations: [sitemap()],
  output: 'static',
  // The event page was the placeholder until the microsite launched. Old links,
  // QR codes and search results land here; send them on. Static output makes
  // this a meta-refresh page, which is all GitHub Pages can do.
  redirects: {
    '/events/inclusion-celebration/': 'https://tiic.intentional.ae/',
  },
  // Pin HTML-aware compression. Astro 7 changed the default to JSX whitespace
  // rules, which delete the newline between text and an inline tag
  // ("living with<strong>mental health"). true = the Astro 6 behaviour.
  compressHTML: true,
});
