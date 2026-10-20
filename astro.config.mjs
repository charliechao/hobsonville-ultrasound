import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unavailableSlugs from './src/data/unavailable-services.json' with { type: 'json' };

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: githubPages ? 'https://charliechao.github.io' : 'https://hobus.co.nz',
  base: githubPages ? '/hobsonville-ultrasound' : undefined,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/404/') &&
        !page.includes('/services/small-parts/') &&
        !page.endsWith('/services/general/abdomen-and-inguinal/') &&
        !unavailableSlugs.some((slug) =>
          page.endsWith('/services/pregnancy/' + slug + '/'),
        ),
    }),
  ],
});
