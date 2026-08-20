import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Finance process improvement for SMEs | Rely',
  description:
    'Simplify finance workflows, strengthen controls and reduce manual administration with practical process improvement support.',
};

export default function ProcessImprovementPage() {
  return (
    <>
            <PageHero
        eyebrow="FINANCE PROCESS IMPROVEMENT"
        title="Remove bottlenecks before they become business risks"
        description="Rely reviews how work actually moves through your finance function, then redesigns the process to be clearer, more controlled and easier to scale."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

      </div>
      </section>

      <CTASection
        title="Ready to streamline your finance processes?"
        description="Identify control gaps, eliminate duplicate data entry, and establish standard operating procedures."
        buttonText="Discuss a Finance Process Review"
        buttonHref="/book-a-review"
      />
    </>
  );
}