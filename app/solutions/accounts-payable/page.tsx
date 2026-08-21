import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Outsourced accounts payable support Australia | Rely',
  description:
    'Create a controlled, visible supplier invoice and payment process with flexible accounts payable support.',
};

export default function AccountsPayablePage() {
  return (
    <>
            <PageHero
        eyebrow="ACCOUNTS PAYABLE"
        title="A more controlled way to manage supplier payments"
        description="Rely helps businesses improve the flow of supplier invoices from receipt and validation through approval, payment preparation and reporting."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="bg-cloud-grey p-8 rounded-2xl border border-cloud-grey-border mb-12">
          <h2 className="text-lg font-heading font-bold text-rely-navy mb-4">
            Controls built into delivery
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-charcoal">
            <li className="p-3 bg-white rounded-2xl border border-cloud-grey-border">✓ Documented approval authorities</li>
            <li className="p-3 bg-white rounded-2xl border border-cloud-grey-border">✓ Separation between preparation and client authorisation</li>
            <li className="p-3 bg-white rounded-2xl border border-cloud-grey-border">✓ Clear audit trail and supporting documentation</li>
            <li className="p-3 bg-white rounded-2xl border border-cloud-grey-border">✓ Exception and duplicate checks</li>
            <li className="p-3 bg-white rounded-2xl border border-cloud-grey-border">✓ Defined escalation points</li>
            <li className="p-3 bg-white rounded-2xl border border-cloud-grey-border">✓ Regular reconciliation and service review</li>
          </ul>
        </div>
      </div>
      </section>

      <CTASection
        title="Improved visibility. Fewer surprises."
        description="A disciplined accounts payable process helps the business understand upcoming commitments, reduce avoidable delays and maintain stronger supplier relationships."
        buttonText="Book an Accounts Payable Review"
        buttonHref="/book-a-review"
      />
    </>
  );
}