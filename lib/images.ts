import { PHOTOS } from './photos';

/**
 * Image resolver. Precedence:
 *   1. ORIGINAL, the client's real photography from newlevel-group.com,
 *      mapped where it clearly fits (project renders, Alanya shots, the map).
 *   2. PHOTOS  , verified premium stock for sections the original didn't cover.
 *   3. deterministic placeholder, last resort.
 */
const ORIGINAL: Record<string, string> = {
  // Real official complex renders from newlevel-group.com
  'premium-hero': '/images/site/premium.webp',
  'panorama-hero': '/images/site/panorama.webp',
  'cleo1-hero': '/images/site/cleopatra1.webp',
  'cleo2-hero': '/images/site/cleopatra2.webp',
  'city-hero': '/images/site/city.webp',
  // Real blog thumbnails
  'blog-insight-1': '/images/site/blog-tapu.webp',
  'blog-insight-2': '/images/site/blog-aidat.webp',
  'blog-insight-3': '/images/site/blog-checklist.webp',
  // Alanya aerial for the map section
  'alanya-map': '/images/original/2-D3qltBdX.png',
};

export function img(seed: string, w = 1400, h = 900): string {
  return (
    ORIGINAL[seed] ??
    PHOTOS[seed] ??
    `https://picsum.photos/seed/nlg-${seed}/${w}/${h}`
  );
}
