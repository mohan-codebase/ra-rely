import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/ui/CTASection';
import { BookOpen, FileCheck2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Finance operations insights for Australian SMEs | Rely',
  description:
    'Practical articles, guides and tools for improving cash flow, finance processes, reporting and business visibility.',
};

const articles = [
  'When should a growing business outsource accounts payable?',
  'Seven signs your receivables process is weakening cash flow',
  'Bookkeeper, accountant or finance operations partner: what does your business need?',
  'How to reduce spreadsheet dependence in finance operations',
  'What should be included in a monthly management report?',
  'How accounting firms can extend operational support without expanding headcount',
];

export default function InsightsPage() {
  return (
    <>
            <PageHero
        eyebrow="PRACTICAL KNOWLEDGE FOR GROWING BUSINESSES"
        title="Finance operations made clearer"
        description="Plain-English guidance for business owners, finance teams and accounting partners who want stronger processes, clearer reporting and better commercial decisions."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="my-12">
          <h2 className="text-xl font-heading font-bold text-rely-navy mb-6">Featured Articles & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((art, idx) => (
              <Reveal
                key={idx}
                delay={(idx % 3) * 0.1}
                distance={28}
                scale
                blur
                start="top 90%"
                className="bg-white border border-cloud-grey-border p-6 rounded-2xl hover:border-advisory-gold hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-advisory-gold uppercase mb-2 block">Article 0{idx + 1}</span>
                  <h3 className="font-heading font-bold text-base text-rely-navy mb-4">{art}</h3>
                </div>
                <div className="pt-4 border-t border-cloud-grey">
                  <span className="text-xs font-semibold text-rely-navy inline-flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5 text-advisory-gold" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      </section>

      <CTASection
        title="Check your finance operations resilience"
        description="Complete the 3-minute diagnostic assessment to identify your key operational pressure points."
        buttonText="Complete the Finance Health Check"
        buttonHref="/finance-health-check"
      />
    </>
  );
}