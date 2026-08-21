import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Frequently asked questions | Rely Advisory Group',
  description:
    'Answers about Rely\'s finance operations services, onboarding, systems, security, pricing and relationship with accountants.',
};

const faqs = [
  {
    q: 'Is Rely an accounting firm?',
    a: 'Rely is positioned as a finance operations, process improvement and reporting provider. Regulated tax or BAS services are delivered only where appropriately authorised or through the client\'s registered practitioner.',
  },
  {
    q: 'Can Rely work with our existing accountant?',
    a: 'Yes. The preferred model is collaborative. Rely can manage agreed operational activities while the accountant retains tax, compliance and advisory responsibilities.',
  },
  {
    q: 'Do we need to outsource our entire finance function?',
    a: 'No. Many engagements begin with one priority process, such as accounts receivable or management reporting.',
  },
  {
    q: 'Which systems can Rely support?',
    a: 'Initial platforms include Xero, MYOB, QuickBooks Online, Microsoft Excel, Microsoft 365, and Power BI.',
  },
  {
    q: 'Will Rely make payments from our bank account?',
    a: 'Rely may prepare payment information under the agreed process, but final approval and release always remain with authorised client personnel.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing reflects transaction volumes, number of entities, process complexity, service frequency, systems, turnaround requirements and reporting scope.',
  },
];

export default function FAQPage() {
  return (
    <>
            <PageHero
        eyebrow="COMMON QUESTIONS"
        title="What businesses ask before working with Rely"
        description="Everything you need to know about our service models, controls, security, and engagement pathways."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="space-y-6 max-w-3xl my-12">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white border border-cloud-grey-border p-6 rounded-2xl">
              <h3 className="font-heading font-bold text-base sm:text-lg text-rely-navy mb-2">
                {item.q}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>

      <CTASection
        title="Have a specific question not covered here?"
        description="We're happy to answer any questions about our delivery model or systems support."
        buttonText="Contact Our Team"
        buttonHref="/contact"
      />
    </>
  );
}