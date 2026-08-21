'use client';

import React from 'react';
import { Briefcase, HardHat, HeartPulse, ShoppingCart } from 'lucide-react';
import { HorizontalRail } from '@/components/ui/HorizontalRail';

const industries = [
  {
    icon: Briefcase,
    number: '01',
    title: 'Professional Services',
    description:
      'Consulting, legal, recruitment, engineering, and education firms needing stronger billing discipline and WIP visibility.',
  },
  {
    icon: HardHat,
    number: '02',
    title: 'Trades, Construction & Field Services',
    description:
      'Subcontractor and supplier administration, customer billing, overdue accounts and practical cash-flow visibility.',
  },
  {
    icon: HeartPulse,
    number: '03',
    title: 'Healthcare & Allied Services',
    description:
      'Structured finance administration and reporting for practices with clear governance.',
  },
  {
    icon: ShoppingCart,
    number: '04',
    title: 'Retail, Wholesale & E-Commerce',
    description:
      'High transaction volumes, supplier payments, receipt allocation, reconciliations, and margin visibility.',
  },
];

/**
 * On desktop the section pins and the row scrolls sideways as the visitor
 * scrolls down; below `lg` it falls back to an ordinary swipeable row (see
 * HorizontalRail) so it never fights the phone's native scroll gestures.
 */
export const IndustriesRail: React.FC = () => {
  return (
    <HorizontalRail className="lg:min-h-[560px] lg:flex lg:items-center">
      {industries.map((industry) => {
        const Icon = industry.icon;
        return (
          <article
            key={industry.title}
            data-cursor-text="DISCOVER"
            className="shrink-0 w-[82vw] sm:w-[420px] lg:w-[440px] snap-center bg-white border border-cloud-grey-border rounded-3xl p-8 sm:p-9 shadow-subtle hover:shadow-card-hover hover:border-advisory-gold/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-warm-ivory border border-advisory-gold/25 flex items-center justify-center text-advisory-gold-dark">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-advisory-gold-dark/70 pt-1">
                {industry.number}
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl text-rely-navy mb-3 leading-snug">
              {industry.title}
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {industry.description}
            </p>
          </article>
        );
      })}
    </HorizontalRail>
  );
};

export default IndustriesRail;
