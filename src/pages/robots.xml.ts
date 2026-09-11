import type {APIRoute} from 'astro';
import metadataJson from '../data/metadata.json';
import type {Metadata} from '../data/types.ts';

const metadata: Metadata = metadataJson;

export const GET: APIRoute = () => {
  const body = `User-agent: *\nSitemap: ${metadata.base_url}sitemap.xml\n`;

  return new Response(body, {
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
};
