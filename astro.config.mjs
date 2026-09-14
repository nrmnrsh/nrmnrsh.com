import {defineConfig} from 'astro/config';
import criticalCSS from 'astro-critical-css';

export default defineConfig({
  site: 'https://nrmnrsh.com/',
  outDir: './dist',
  integrations: [criticalCSS()],
});
