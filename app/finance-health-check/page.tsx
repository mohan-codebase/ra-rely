import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { CheckSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free finance operations health check | Rely',
  description:
    'Assess the strength of your accounts payable, receivables, finance processes and management reporting in a few minutes.',
};

const questions = [
  '1. Supplier invoices are captured in one controlled location.',
  '2. Invoice approvals follow a clear and timely process.',
  '3. Customer invoices are issued promptly after work or delivery.',
  '4. Overdue accounts are followed up consistently.',
  '5. Finance responsibilities are documented and understood.',
  '6. Key tasks can continue when a team member is absent.',
  '7. Monthly reports are delivered on time.',
  '8. Management can clearly see near-term cash requirements.',
  '9. Reports explain significant movements and expected actions.',
  '10. Systems and spreadsheets do not require excessive manual rework.',
];

export default function HealthCheckPage() {
  return (
    <>
            <PageHero
        eyebrow="THREE-MINUTE ASSESSMENT"
        title="How ready is your finance operation to support growth?"
        description="Answer ten practical questions and receive an indicative view of process resilience, control and management visibility." align="center"
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="bg-white border border-cloud-grey-border rounded-xs p-8 shadow-card space-y-8 my-8">
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <div key={idx} className="p-4 bg-cloud-grey/60 rounded-xs border border-cloud-grey-border/80">
                <p className="font-heading font-semibold text-sm sm:text-base text-rely-navy mb-3">
                  {q}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Always', 'Usually', 'Sometimes', 'Rarely', 'Not sure'].map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-cloud-grey-border rounded-xs cursor-pointer hover:border-advisory-gold">
                      <input type="radio" name={`q_${idx}`} className="text-rely-navy focus:ring-advisory-gold" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-cloud-grey flex justify-center">
            <Button variant="primary" size="lg">
              Receive My Result and Recommendations <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}