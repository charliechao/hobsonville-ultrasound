import type { APIRoute } from 'astro';
export const GET: APIRoute = () =>
  new Response(
    import.meta.env.PUBLIC_SITE_INDEXABLE === 'true'
      ? 'User-agent: *\nAllow: /\nSitemap: https://hobus.co.nz/sitemap-index.xml\n'
      : 'User-agent: *\nDisallow: /\n',
    { headers: { 'Content-Type': 'text/plain' } },
  );
