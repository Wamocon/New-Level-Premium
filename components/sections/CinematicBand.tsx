'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

/**
 * Full-bleed aerial film. The video plays only near the viewport, while GSAP
 * adds a shallow compositor-only parallax and a restrained editorial reveal.
 * The scroll position never controls video playback, avoiding frame stutter.
 */
export function CinematicBand() {
  const t = useTranslations('cinematic');
  const root = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    const film = video.current;
    if (!el || !film) return;

    const reducedMotion = prefersReducedMotion();
    let isNearViewport = false;

    const revealFilm = () => {
      film.style.opacity = '1';
    };

    if (film.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      revealFilm();
    } else {
      film.addEventListener('loadeddata', revealFilm, { once: true });
    }

    const syncPlayback = () => {
      if (isNearViewport && !document.hidden && !reducedMotion) {
        film.play().catch(() => {});
      } else {
        film.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry.isIntersecting;
        syncPlayback();
      },
      { rootMargin: '180px 0px', threshold: 0.01 },
    );
    observer.observe(el);
    document.addEventListener('visibilitychange', syncPlayback);

    if (reducedMotion) {
      return () => {
        observer.disconnect();
        film.removeEventListener('loadeddata', revealFilm);
        document.removeEventListener('visibilitychange', syncPlayback);
      };
    }

    registerGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          media.current,
          { yPercent: -4.5, scale: 1.07 },
          {
            yPercent: 4.5,
            scale: 1.025,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      mm.add('(max-width: 767px)', () => {
        gsap.set(media.current, { scale: 1.035 });
      });

      gsap
        .timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: el,
            start: 'top 72%',
            once: true,
          },
        })
        .from('[data-cin-line]', { scaleX: 0, duration: 0.7, transformOrigin: 'right center' })
        .from('[data-cin]', { y: 34, autoAlpha: 0, duration: 0.82, stagger: 0.085 }, '-=0.48');
    }, el);

    return () => {
      ctx.revert();
      observer.disconnect();
      film.removeEventListener('loadeddata', revealFilm);
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, []);

  return (
    <section
      ref={root}
      className="on-dark relative flex min-h-[440px] items-center overflow-hidden py-28 md:min-h-[78vh]"
    >
      <div
        ref={media}
        className="absolute inset-x-0 top-[-10%] h-[120%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/buildings/aerial-poster.jpg')" }}
      >
        <video
          ref={video}
          data-cinematic-video
          aria-hidden
          tabIndex={-1}
          className="size-full object-cover opacity-0 transition-opacity duration-700"
          poster="/buildings/aerial-poster.jpg"
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={(event) => {
            event.currentTarget.style.opacity = '1';
          }}
        >
          <source src="/buildings/aerial.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/35 to-obsidian/5"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-obsidian/55 via-transparent to-obsidian/20"
      />

      <div className="container-lux relative">
        <div className="max-w-xl">
          <span
            data-cin
            className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <span
              data-cin-line
              className="h-px w-8 bg-gradient-to-r from-transparent to-gold"
            />
            {t('eyebrow')}
          </span>
          <h2
            data-cin
            className="h2-display mt-4 font-display font-bold leading-[1.03] text-cloud"
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
