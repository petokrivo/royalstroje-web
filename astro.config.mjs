import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Použiť Tailwind config
      configFile: './tailwind.config.cjs',
      // Aplikovať base styles
      applyBaseStyles: true
    })
  ],
  output: 'static',
  server: {
    port: 4321,
    host: true
  }
});