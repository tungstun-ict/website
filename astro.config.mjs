import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  site: "https://www.tungstun.nl",
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});