import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy policy | Rely Advisory Group',
  description:
    'Read how Rely Advisory Group collects, uses, stores and protects personal information provided through the website.',
};

export default function PrivacyPage() {
  return (
    <>
            <PageHero
        eyebrow="LEGAL DRAFT FOR REVIEW"
        title="Privacy Policy"
        description="Read how Rely Advisory Group handles personal information collected through the website."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">


        {/* Legal draft review banner */}
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Notice:</strong> Legal draft for review — must be reviewed against final business structure, systems, service model and applicable Australian law before publication.
          </div>
        </div>

        <div className="prose prose-sm text-charcoal max-w-none space-y-6">
          <div>
            <span className="font-mono text-xs bg-advisory-gold/20 text-rely-navy px-2 py-0.5 rounded">
              Last updated: [insert date]
            </span>
          </div>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy">1. Our commitment</h2>
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Rely Advisory Group respects privacy and is committed to handling personal information responsibly. This policy explains the information collected through the website and business interactions, how it may be used and the choices available to individuals.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy">2. Information we may collect</h2>
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Information may include names, business contact details, enquiry information, appointment details, website usage information and records provided during an authorised client engagement. The public website should not be used to send bank details, tax file numbers, passwords, payroll records or confidential financial files.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy">3. How information may be collected</h2>
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Information may be collected through website forms, booking tools, email, telephone, meetings, referrals, service delivery and standard website technologies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-rely-navy">4. Contact and complaints</h2>
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Privacy questions or complaints may be sent to{' '}
              <span className="font-mono bg-advisory-gold/20 text-rely-navy px-1.5 py-0.5 rounded text-xs">
                [privacy email]
              </span>
              . Rely will respond within a reasonable period and explain available escalation pathways where applicable.
            </p>
          </section>
        </div>
      </div>
    </section>
    </>
  );
}