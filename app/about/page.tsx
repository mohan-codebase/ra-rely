import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Rely Advisory Group',
  description:
    'Learn how Rely combines reliable finance operations, process improvement and decision-focused reporting for Australian businesses.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="DEPENDABLE DELIVERY. PRACTICAL ADVICE."
        title="Finance support businesses can rely on"
        description="Rely Advisory Group was created to help growing businesses bring greater structure, visibility and commercial value to their day-to-day finance operations."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Values Grid */}
          <div className="mb-16">
            <h2 className="text-xl font-heading font-bold text-rely-navy mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Reliability',
                  desc: 'Do what has been agreed, communicate early and maintain consistent standards.',
                },
                {
                  name: 'Clarity',
                  desc: 'Simplify complex information and make responsibilities visible.',
                },
                {
                  name: 'Integrity',
                  desc: 'Protect client information, maintain scope boundaries and escalate concerns.',
                },
                {
                  name: 'Practicality',
                  desc: 'Recommend changes that fit the business, not theory alone.',
                },
                {
                  name: 'Improvement',
                  desc: 'Look for sustainable ways to reduce effort, risk and uncertainty.',
                },
              ].map((value) => (
                <div
                  key={value.name}
                  className="p-6 bg-white border border-cloud-grey-border rounded-xl hover:shadow-card hover:border-advisory-gold/30 transition-all duration-300"
                >
                  <h3 className="font-heading font-bold text-base text-rely-navy mb-2">
                    {value.name}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Bio Placeholder with distinct styling */}
          <div className="p-8 bg-warm-ivory border-2 border-dashed border-advisory-gold rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-rely-navy text-advisory-gold flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-rely-navy">Founder Profile</h3>
                <span className="text-xs font-mono bg-advisory-gold/20 text-rely-navy px-2 py-0.5 rounded">
                  [PLACEHOLDER — Replace with approved founder biography]
                </span>
              </div>
            </div>
            <p className="text-sm text-charcoal leading-relaxed">
              Experience in customer insights, data analysis, executive reporting, finance operations improvement, and Power BI. Verified formal qualifications, memberships, and a concise personal statement on why Rely was established will appear here before launch.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Meet with Rely"
        description="Let's discuss how structured finance operations can support your growth."
        buttonText="Book a Discovery Conversation"
        buttonHref="/book-a-review"
      />
    </>
  );
}
