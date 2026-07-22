import { PHOTOS } from './photos';

/**
 * Image resolver. Precedence:
 *   1. ORIGINAL — the client's real photography from newlevel-group.com,
 *      mapped where it clearly fits (project renders, Alanya shots, the map).
 *   2. PHOTOS   — verified premium stock for sections the original didn't cover.
 *   3. deterministic placeholder — last resort.
 */
const ORIGINAL: Record<string, string> = {
  'premium-hero': '/images/original/1-H0_ctfKN.png', // New Level Premium — real render
  'city-hero': '/images/original/5-DKTvB5z_.jpg', // City — real complex shot
  'alanya-map': '/images/original/2-D3qltBdX.png', // Alanya aerial — map backdrop
  'blog-insight-1': '/images/original/3-CzByt5mS.png', // Alanya bay terrace view
  'blog-insight-3': '/images/original/4-Bli5dtw9.png', // Alanya hillside + sea (districts)
};

export function img(seed: string, w = 1400, h = 900): string {
  return (
    ORIGINAL[seed] ??
    PHOTOS[seed] ??
    `https://picsum.photos/seed/nlg-${seed}/${w}/${h}`
  );
}
