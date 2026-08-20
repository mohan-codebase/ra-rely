import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Accounts receivable support Australia | Rely',
  description:
    'Improve invoicing administration, overdue account follow-up and cash collection visibility with structured receivables support.',
};

export default function AccountsReceivablePage() {
  return (
    <>
            <PageHero
        eyebrow="ACCOUNTS RECEIVABLE"
        title="Turn completed work into collected revenue sooner"
        description="Rely introduces consistent invoicing, professional follow-up and practical debtor reporting so more revenue moves from the ledger into the bank."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="p-8 bg-warm-ivory border border-advisory-gold/30 rounded-xs mb-12">
          <h2 className="text-lg font-heading font-bold text-rely-navy mb-2">A professional approach to collection</h2>
          <p className="text-sm text-charcoal leading-relaxed">
            Rely is not positioned as a debt collection agency. Communications are courteous, consistent and aligned with the client&apos;s customer relationships. Formal debt recovery and legal escalation remain with appropriately qualified providers.
          </p>
        </div>
      </div>
      </section>

      <CTASection
        title="Better cash-flow discipline"
        description="Consistent billing and follow-up improve visibility, reduce avoidable delays and give management a clearer view of collection risk."
        buttonText="Book an Accounts Receivable Review"
        buttonHref="/book-a-review"
      />
    </>
  );
}