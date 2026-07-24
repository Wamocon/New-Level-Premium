'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

/**
 * Full-bleed cinematic video band (aerial of the real complex). The footage
 * parallaxes on scroll via GSAP ScrollTrigger and the headline reveals as it
 * enters. Plays muted only while in view; static poster under reduced motion.
 */
export function CinematicBand() {
  const t = useTranslations('cinematic');
  const root = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    const v = video.current;
    if (!el) return;

    let io: IntersectionObserver | undefined;
    if (v && !prefersReducedMotion()) {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) v.play?.().catch(() => {});
          else v.pause?.();
        },
        { threshold: 0.15 },
      );
      io.observe(v);
    }

    if (prefersReducedMotion()) {
      return () => io?.disconnect();
    }

    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        media.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
      gsap.from('[data-cin]', {
        y: 42,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 72%' },
      });
    }, el);

    return () => {
      ctx.revert();
      io?.disconnect();
    };
  }, []);

  return (
    <section
      ref={root}
      className="on-dark relative flex min-h-[440px] items-center overflow-hidden py-28 md:min-h-[78vh]"
    >
      <div ref={media} className="absolute inset-x-0 top-[-14%] h-[128%] will-change-transform">
        <video
          ref={video}
          className="grade-warm size-full object-cover"
          poster="/buildings/aerial-poster.jpg"
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/buildings/aerial.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-obsidian/88 via-obsidian/45 to-obsidian/15"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-obsidian/35"
      />

      <div className="container-lux relative">
        <div className="max-w-xl">
          <span
            data-cin
            className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
            {t('eyebrow')}
          </span>
          <h2
            data-cin
            className="mt-4 font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.03] tracking-tight text-cloud"
          >
            {t('heading')}
          </h2>
          <p data-cin className="mt-5 max-w-lg text-lg leading-relaxed text-cloud/75">
            {t('subline')}
          </p>
          <div data-cin className="mt-8">
            <Button asChild variant="metal" size="lg">
              <Link href="/complexes">
                {t('cta')}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
