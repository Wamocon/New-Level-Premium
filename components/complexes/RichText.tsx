interface Block {
  type: 'h' | 'p' | 'ul';
  text?: string;
  items?: string[];
}

const clean = (s: string) => s.replace(/\s*[—–]\s*/g, ', ').trim();

/** Renders a multi-line description as headings, paragraphs and bullet lists, dash-free. */
export function RichText({ text }: { text: string }) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const blocks: Block[] = [];
  let bullets: string[] = [];
  const flush = () => {
    if (bullets.length) {
      blocks.push({ type: 'ul', items: bullets });
      bullets = [];
    }
  };

  for (const line of lines) {
    // explicit heading marker (used by longer article/blog headings)
    const hm = line.match(/^#{2,3}\s+(.+)$/);
    if (hm) {
      flush();
      blocks.push({ type: 'h', text: clean(hm[1]) });
      continue;
    }
    const m = line.match(/^[✔✅•▪◦●\-—–]\s*(.+)$/u);
    if (m) {
      bullets.push(clean(m[1]));
      continue;
    }
    flush();
    const c = clean(line);
    const isColonHeading = c.length < 60 && /[:：]$/.test(c);
    const isShortHeading =
      c.length < 72 && !/[.!?,]$/.test(c) && !c.includes(',') && !c.includes('.');
    if (isColonHeading) blocks.push({ type: 'h', text: c.replace(/[:：]\s*$/, '') });
    else if (isShortHeading) blocks.push({ type: 'h', text: c });
    else blocks.push({ type: 'p', text: c });
  }
  flush();

  return (
    <div className="space-y-4">
      {blocks.map((b, i) =>
        b.type === 'h' ? (
          <h3 key={i} className="pt-2 font-display text-lg font-semibold text-cloud">
            {b.text}
          </h3>
        ) : b.type === 'ul' ? (
          <ul key={i} className="space-y-2">
            {b.items!.map((it, j) => (
              <li key={j} className="flex items-start gap-2.5 text-cloud/70">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {it}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="leading-relaxed text-cloud/70">
            {b.text}
          </p>
        ),
      )}
    </div>
  );
}
