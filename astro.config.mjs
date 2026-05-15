import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zontasticality.github.io',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
