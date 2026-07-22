'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { featuredProperties, totalListings } from '@/lib/data/properties';
import type { PropertyCategory } from '@/lib/types';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const TABS: PropertyCategory[] = ['new', 'hot', 'investment'];

export function FeaturedListings() {
  const t = useTranslations('featured');
  const [active, setActive] = useState<PropertyCategory>('new');

  const tabLabels: Record<PropertyCategory, string> = {
    new: t('tabNew'),
    hot: t('tabHot'),
    investment: t('tabInvestment'),
  };

  const list = featuredProperties
    .filter((p) => p.category.includes(active))
    .slice(0, 6);

  return (
    <section id="featured" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t('eyebrow')}
            heading={t('heading')}
            subline={t('subline')}
          />

          {/* tabs */}
          <Reveal className="flex flex-wrap gap-2" delay={0.1}>
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={cn(
                  'rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-lux',
                  active === tab
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-white/12 text-cloud/70 hover:border-gold/50 hover:text-gold',
                )}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal
          key={active}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
          y={40}
        >
          {list.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/properties">
              {t('viewAll', { count: totalListings })}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
