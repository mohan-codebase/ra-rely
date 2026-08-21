'use client';

import React from 'react';
import { WordReveal } from '@/components/ui/WordReveal';

/**
 * The editorial breather between two dense card sections: one large statement
 * that sweeps into focus word by word as the reader scrolls through it.
 *
 * Deliberately not wrapped in SectionTransition — that wrapper scrubs the whole
 * block's opacity, which would wash out the word colours it is fighting for.
 */
export const HomeManifesto: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-warm-ivory py-28 sm:py-36 lg:py-48"
      aria-labelledby="manifesto-heading"
    >
      {/* Hairline rules top and bottom, matching the banner treatment */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/30 to-transparent" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow with leading gold rule */}
        <div className="flex items-center gap-4 mb-10 sm:mb-14">
          <span className="h-px w-10 sm:w-14 bg-advisory-gold" />
          <span className="font-heading text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-advisory-gold-dark">
            The Rely Principle
          </span>
        </div>

        <WordReveal
          as="h2"
          id="manifesto-heading"
          text="A useful report should not simply show what happened. It should help leaders decide what to do next."
          start="top 80%"
          end="bottom 68%"
          dim="rgba(11, 27, 77, 0.16)"
          bright="#0b1b4d"
          className="max-w-5xl font-heading font-medium tracking-tight text-[clamp(1.75rem,5.2vw,4rem)] leading-[1.22]"
        />

        {/* Quiet caption closing the thought */}
        <p className="mt-10 sm:mt-14 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-muted">
          Data <span className="text-advisory-gold">→</span> Insight{' '}
          <span className="text-advisory-gold">→</span> Recommendation
        </p>
      </div>
    </section>
  );
};

export default HomeManifesto;
