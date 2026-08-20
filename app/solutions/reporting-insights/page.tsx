import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';
import { CalloutBanner } from '@/components/ui/CalloutBanner';

export const metadata: Metadata = {
  title: 'Management reporting and Power BI dashboards | Rely',
  description:
    'Turn financial and operational data into clear management reporting, practical dashboards and decision-focused business insight.',
};

export default function ReportingInsightsPage() {
  return (
    <>
            <PageHero
        eyebrow="REPORTING AND BUSINESS INSIGHTS"
        title="Move from financial information to business action"
        description="Rely converts operational and financial data into reporting that helps management understand what changed, why it matters and what should happen next."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="my-10">
          <CalloutBanner
            title="The Rely reporting principle"
            quote="Data → Insight → Recommendation. A useful report should not simply show what happened. It should help leaders decide what to do next."
            variant="ivory"
          />
        </div>
      </div>
      </section>

      <CTASection
        title="Ready for actionable financial clarity?"
        description="Transform monthly numbers into interactive Power BI dashboards, cash flow forecasts, and executive packs."
        buttonText="Request a Reporting Review"
        buttonHref="/book-a-review"
      />
    </>
  );
}