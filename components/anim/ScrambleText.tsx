'use client';

import { useRef } from 'react';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  /** run again whenever it scrolls back into view */
  onScroll?: boolean;
}

/**
 * Decodes text into place: each letter flickers through random characters,
 * then locks to its real value left-to-right. GSAP ScrambleTextPlugin.
 * The real text is rendered up-front for SEO / no-JS.
 */
export function ScrambleText({
  text,
  className,
  duration = 1.6,
  delay = 0.1,
  onScroll = false,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { },
        {
          duration,
          delay,
          ease: 'none',
          scrambleText: {
            text,
            chars: 'upperAndLowerCase',
            revealDelay: 0.35,
            speed: 0.5,
          },
          ...(onScroll
            ? { scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
            : {}),
        },
      );
    }, el);

    return () => ctx.revert();
  }, [text, duration, delay, onScroll]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
