import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';

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

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-6 bg-white border border-cloud-grey-border rounded-xs">
            <h3 className="font-heading font-bold text-lg text-rely-navy mb-2">Professional Services</h3>
            <p className="text-sm text-charcoal-muted">Consulting, legal, recruitment, engineering, and education firms needing stronger billing discipline and WIP visibility.</p>
          </div>
          <div className="p-6 bg-white border border-cloud-grey-border rounded-xs">
            <h3 className="font-heading font-bold text-lg text-rely-navy mb-2">Trades, Construction & Field Services</h3>
            <p className="text-sm text-charcoal-muted">Subcontractor and supplier administration, customer billing, overdue accounts and practical cash-flow visibility.</p>
          </div>
          <div className="p-6 bg-white border border-cloud-grey-border rounded-xs">
            <h3 className="font-heading font-bold text-lg text-rely-navy mb-2">Healthcare & Allied Services</h3>
            <p className="text-sm text-charcoal-muted">Structured finance administration and reporting for practices with clear governance.</p>
          </div>
          <div className="p-6 bg-white border border-cloud-grey-border rounded-xs">
            <h3 className="font-heading font-bold text-lg text-rely-navy mb-2">Retail, Wholesale & E-Commerce</h3>
            <p className="text-sm text-charcoal-muted">High transaction volumes, supplier payments, receipt allocation, reconciliations, and margin visibility.</p>
          </div>
        </div>
      </div>
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