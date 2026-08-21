import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Rely delivers outsourced finance support | Rely',
  description:
    'Understand Rely Advisory Group\'s structured onboarding, secure delivery model, service governance and continuous improvement approach.',
};

export default function HowWeWorkPage() {
  return (
    <>
            <PageHero
        eyebrow="STRUCTURED FROM THE START"
        title="A clear, controlled way to improve finance operations"
        description="Rely uses a staged approach so responsibilities, controls, communication and expected outcomes are agreed before ongoing delivery begins."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        {/* 4 Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          <div className="bg-white p-6 rounded-2xl border border-cloud-grey-border">
            <span className="text-advisory-gold font-mono font-bold text-sm block mb-1">STAGE 01</span>
            <h3 className="text-lg font-heading font-bold text-rely-navy mb-2">1. Discover</h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Understand systems, volumes, stakeholders, current pain points, and provider boundaries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-cloud-grey-border">
            <span className="text-advisory-gold font-mono font-bold text-sm block mb-1">STAGE 02</span>
            <h3 className="text-lg font-heading font-bold text-rely-navy mb-2">2. Design</h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Define service scope, timetable, workflows, approval thresholds, and security requirements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-cloud-grey-border">
            <span className="text-advisory-gold font-mono font-bold text-sm block mb-1">STAGE 03</span>
            <h3 className="text-lg font-heading font-bold text-rely-navy mb-2">3. Transition</h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Controlled knowledge transfer, system setup, and pilot testing to resolve gaps.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-cloud-grey-border">
            <span className="text-advisory-gold font-mono font-bold text-sm block mb-1">STAGE 04</span>
            <h3 className="text-lg font-heading font-bold text-rely-navy mb-2">4. Deliver & Improve</h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Documented execution, regular reporting, exception review, and continuous refinement.
            </p>
          </div>
        </div>
      </div>
      </section>

      <CTASection
        title="Start with a structured review"
        description="Let's review your systems, transaction volumes, and immediate priorities."
        buttonText="Start with a Finance Operations Review"
        buttonHref="/book-a-review"
      />
    </>
  );
}