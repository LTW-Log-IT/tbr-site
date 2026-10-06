// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages custom subdomain: https://tbr.leadthewaylogistics.info
// `base` stays `/` so CSS and links resolve from the domain root
// (this is not a project-site subpath like /tbr-site/).
export default defineConfig({
  site: 'https://tbr.leadthewaylogistics.info',
  base: '/',
  output: 'static',
  outDir: 'dist',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
