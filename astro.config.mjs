import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// SITE_URL is loaded from .env locally and from deployment environment variables in production.
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const site = env.SITE_URL || process.env.SITE_URL || 'https://your-domain.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' }
});