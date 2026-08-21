import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website terms and disclaimer | Rely Advisory Group',
  description:
    'Terms governing use of the Rely Advisory Group website and important limitations relating to general information and regulated services.',
};

export default function TermsPage() {
  return (
    <>
            <PageHero
        eyebrow="LEGAL DRAFT FOR REVIEW"
        title="Website Terms & Service Disclaimer"
        description="Terms governing use of the Rely Advisory Group website."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">


        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Notice:</strong> Legal draft for review — must be reviewed by legal counsel before publication.
          </div>
        </div>

        <div className="space-y-6 text-sm text-charcoal leading-relaxed">
          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy mb-2">General information only</h2>
            <p className="text-charcoal-muted">
              Website content is general information and does not take account of a visitor&apos;s specific objectives, financial position or circumstances. It is not legal, tax, investment or financial product advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy mb-2">Regulated services</h2>
            <p className="text-charcoal-muted">
              Rely provides finance operations, administrative support, reporting and process improvement services. Tax advice, BAS services and other regulated services are provided only where appropriately authorised or in collaboration with the client&apos;s registered practitioner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy mb-2">No client relationship</h2>
            <p className="text-charcoal-muted">
              Using the website, submitting an enquiry or attending an initial discussion does not create a client relationship. A relationship begins only when written engagement terms are agreed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy mb-2">Governing law</h2>
            <p className="text-charcoal-muted">
              These terms are governed by the laws of{' '}
              <span className="font-mono bg-advisory-gold/20 text-rely-navy px-1.5 py-0.5 rounded text-xs">
                [insert Australian jurisdiction]
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
    </>
  );
}