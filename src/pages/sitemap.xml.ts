import type {APIRoute} from 'astro';
import metadataJson from '../data/metadata.json';
import type {Metadata} from '../data/types.ts';

const metadata: Metadata = metadataJson;

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${metadata.base_url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
</urlset>
`;

  return new Response(body, {
    headers: {'Content-Type': 'application/xml; charset=utf-8'},
  });
};
