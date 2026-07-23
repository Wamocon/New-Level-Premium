import type { Block } from '@/lib/blog/parseArticle';

/** Renders parsed article blocks with a premium, readable type hierarchy. */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.kind === 'h2') {
          return (
            <h2
              key={i}
              id={b.id}
              className="scroll-mt-28 border-l-2 border-gold/70 pl-4 pt-6 font-display text-[1.55rem] font-bold leading-snug tracking-tight text-cloud md:text-[1.7rem]"
            >
              {b.text}
            </h2>
          );
        }
        if (b.kind === 'h3') {
          return (
            <h3
              key={i}
              id={b.id}
              className="scroll-mt-28 pt-3 font-display text-xl font-semibold text-cloud"
            >
              {b.text}
            </h3>
          );
        }
        if (b.kind === 'ul') {
          return (
            <ul key={i} className="space-y-2.5 pt-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-cloud/75">
                  <span className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[1.02rem] leading-[1.85] text-cloud/75">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
