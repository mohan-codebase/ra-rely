import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';
import { IndustriesRail } from '@/components/industries/IndustriesRail';

export const metadata: Metadata = {
  title: 'Finance operations support by industry | Rely',
  description:
    'Practical finance operations and reporting support for professional services, trades, healthcare and growing product businesses.',
};

export default function IndustriesPage() {
  return (
    <>
            <PageHero
        eyebrow="INDUSTRY-FOCUSED SUPPORT"
        title="Built around the way your business operates"
        description="Every industry has different billing cycles, supplier pressures and performance measures. Rely adapts the operating model and reporting to the realities of the client's business."
      />

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="industries-heading">
        <h2 id="industries-heading" className="sr-only">
          Industries we support
        </h2>
        <IndustriesRail />
      </section>

      <CTASection
        title="Discuss your industry requirements"
        description="We tailor finance operations to your job management and accounting stack."
        buttonText="Discuss Your Industry Challenges"
        buttonHref="/book-a-review"
      />
    </>
  );
}