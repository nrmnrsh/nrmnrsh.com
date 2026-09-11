import type {APIRoute} from 'astro';
import metadataJson from '../data/metadata.json';
import type {Metadata} from '../data/types.ts';

const metadata: Metadata = metadataJson;

const ICON_SIZES = [36, 48, 72, 96, 128, 144, 168, 192, 256, 384, 512];

export const GET: APIRoute = () => {
  // Web App Manifest spec mandates these snake_case keys.
  const snakeCaseEntries: Array<[string, unknown]> = [
    ['short_name', metadata.app_short_title],
    ['start_url', `${metadata.app_url}?utm_source=web_app_manifest`],
    ['background_color', metadata.app_color],
    ['theme_color', metadata.app_color],
    ['related_applications', []],
  ];
  const snakeCaseFields = Object.fromEntries(snakeCaseEntries);

  const manifest = {
    name: metadata.app_title,
    description: metadata.app_description,
    scope: metadata.app_url,
    display: 'standalone',
    icons: ICON_SIZES.map(size => ({
      src: `/img/meta/appicon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
    })),
    ...snakeCaseFields,
  };

  return new Response(JSON.stringify(manifest, null, '\t'), {
    headers: {'Content-Type': 'application/manifest+json; charset=utf-8'},
  });
};
