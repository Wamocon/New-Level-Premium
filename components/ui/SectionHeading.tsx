import { cn } from '@/lib/utils';
import { Reveal } from '@/components/anim/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subline?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subline,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.05] tracking-tight text-cloud">
        {heading}
      </h2>
      {subline && (
        <p className="max-w-xl text-base leading-relaxed text-cloud/55">{subline}</p>
      )}
    </Reveal>
  );
}
