import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/serverless';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  site: "https://www.tungstun.nl",
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});