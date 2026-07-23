'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { buildingShots } from '@/lib/data/buildings';

// aerial drone video first, then strong stills that cross-fade behind the hero
const STILLS = [buildingShots[3], buildingShots[0], buildingShots[1]];

/**
 * Cinematic hero backdrop: the real aerial clip and building photos cross-fade
 * with a slow Ken Burns drift (GSAP). Replaces the abstract WebGL gold bars.
 */
export default function HeroMedia() {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    const v = video.current;
    if (v && !reduced) v.play?.().catch(() => {});
    if (reduced) return;

    registerGsap();
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>('[data-slide]');
      gsap.set(slides, { autoAlpha: 0 });
      gsap.set(slides[0], { autoAlpha: 1 });

      const FADE = 1.4;
      const HOLD_V = 6.5;
      const HOLD_I = 4.5;
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power1.inOut' } });
      let at = HOLD_V;

      for (let i = 1; i < slides.length; i++) {
        tl.to(slides[i - 1], { autoAlpha: 0, duration: FADE }, at);
        tl.to(slides[i], { autoAlpha: 1, duration: FADE }, at);
        const kb = slides[i].querySelector('[data-kb]');
        if (kb) {
          tl.fromTo(
            kb,
            { scale: 1.05, xPercent: -1.5 },
            { scale: 1.17, xPercent: 1.5, duration: FADE + HOLD_I, ease: 'none' },
            at,
          );
        }
        at += FADE + HOLD_I;
      }
      // fade the last still back to the video and loop
      tl.to(slides[slides.length - 1], { autoAlpha: 0, duration: FADE }, at);
      tl.to(slides[0], { autoAlpha: 1, duration: FADE }, at);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="absolute inset-0">
      <div data-slide className="absolute inset-0">
        <video
          ref={video}
          className="size-full object-cover"
          poster="/buildings/aerial-poster.jpg"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/buildings/aerial.mp4" type="video/mp4" />
        </video>
      </div>

      {STILLS.map((s) => (
        <div key={s.src} data-slide className="absolute inset-0 overflow-hidden">
          <div data-kb className="absolute inset-0 will-change-transform">
            <Image
              src={s.src}
              alt=""
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={s.blur}
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* readability scrim (headline sits on the left) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-obsidian/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/35"
      />
    </div>
  );
}
