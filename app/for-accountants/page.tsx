import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/ui/CTASection';
import { CalloutBanner } from '@/components/ui/CalloutBanner';

export const metadata: Metadata = {
  title: 'Finance operations support for accounting firms | Rely',
  description:
    'Extend client support with reliable AP, AR, reporting and finance process services that complement your accounting practice.',
};

export default function ForAccountantsPage() {
  return (
    <>
            <PageHero
        eyebrow="FOR ACCOUNTANTS AND ADVISERS"
        title="Reliable finance operations support for your clients"
        description="Rely works alongside accounting firms to provide practical AP, AR, reporting and process support, allowing accountants to remain focused on tax, compliance and higher-value advisory work."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="my-8">
          <CalloutBanner
            title="We complement your services"
            quote="Rely does not seek to replace the client's accountant or compete for tax, audit or regulated compliance work."
            variant="ivory"
          />
        </div>
      </div>
      </section>

      <CTASection
        title="Explore an accounting partnership"
        description="Referral partner, delivery partner, or white-label support models tailored to your firm."
        buttonText="Discuss a Partnership"
        buttonHref="/book-a-review"
      />
    </>
  );
}