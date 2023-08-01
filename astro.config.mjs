import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});
