import { normalizeProse, slugify } from '@/lib/utils';

export type Block =
  | { kind: 'h2' | 'h3'; text: string; id: string }
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] };

export interface ParsedArticle {
  lead: string;
  blocks: Block[];
  headings: { id: string; text: string }[];
}

const BULLET = /^[✔✅•▪◦●▸■◆•\-–—]\s+(.+)$/u;
const HEADING_MARK = /^(#{2,3})\s+(.+)$/;

/**
 * Turn a plain-text article (one paragraph/heading per line) into structured,
 * tidy blocks with anchor ids. When the excerpt is missing, the opening line is
 * split off as the lead (this also repairs intro/first-sentence run-ons that
 * came from the source extraction, e.g. "...registrationWhen purchasing...").
 */
export function parseArticle(rawBody: string, rawExcerpt?: string): ParsedArticle {
  let body = rawBody ?? '';
  let lead = (rawExcerpt ?? '').trim();

  if (!lead && body) {
    const firstLine = body.split('\n')[0];
    const seam = firstLine.match(/^(.*?[a-zçğıöşü0-9)])([A-ZÇĞİÖŞÜ].*)$/);
    if (seam && seam[1].length > 24) {
      lead = seam[1].trim();
      body = seam[2] + body.slice(firstLine.length);
    } else {
      lead = firstLine.trim();
      body = body.slice(firstLine.length);
    }
  }
  lead = normalizeProse(lead);

  const lines = body
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const blocks: Block[] = [];
  const headings: { id: string; text: string }[] = [];
  const usedIds = new Set<string>();
  let bullets: string[] = [];

  const flush = () => {
    if (bullets.length) {
      blocks.push({ kind: 'ul', items: bullets });
      bullets = [];
    }
  };
  const idFor = (text: string) => {
    let base = slugify(text) || 'section';
    let id = base;
    let n = 2;
    while (usedIds.has(id)) id = `${base}-${n++}`;
    usedIds.add(id);
    return id;
  };
  const pushHeading = (level: 'h2' | 'h3', text: string) => {
    const clean = normalizeProse(text);
    const id = idFor(clean);
    blocks.push({ kind: level, text: clean, id });
    if (level === 'h2') headings.push({ id, text: clean });
  };

  const STEP = /^(step|шаг|adım|adim)\s*\d/i;

  // The source marks real headings with ## / ###, so we trust those rather than
  // guessing. Numbered "Step N" headings drop to sub-level to keep the TOC tight;
  // colon-ended list lead-ins ("DAB is mandatory for:") stay as prose.
  for (const line of lines) {
    const hm = line.match(HEADING_MARK);
    if (hm) {
      flush();
      const text = hm[2];
      const level = hm[1].length === 3 || STEP.test(text) ? 'h3' : 'h2';
      pushHeading(level, text);
      continue;
    }
    const bm = line.match(BULLET);
    if (bm) {
      bullets.push(normalizeProse(bm[1]));
      continue;
    }
    flush();
    blocks.push({ kind: 'p', text: normalizeProse(line) });
  }
  flush();

  return { lead, blocks, headings };
}
