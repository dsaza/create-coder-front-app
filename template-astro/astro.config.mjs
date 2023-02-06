import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import critters from 'astro-critters';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), critters(), prefetch(), react()]
});