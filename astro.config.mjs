// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://suzuki-2001.github.io',
  base: '/preview-8f3a9b',
  vite: {
    plugins: [tailwindcss()]
  }
});
