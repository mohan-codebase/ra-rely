import React from 'react';
import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { Marquee } from '@/components/ui/Marquee';
import { TrustStrip } from '@/components/ui/TrustStrip';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProblemGrid } from '@/components/ui/ProblemGrid';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { BenefitsList } from '@/components/ui/BenefitsList';
import { StepFlow } from '@/components/ui/StepFlow';
import { WhyChooseUs } from '@/components/ui/WhyChooseUs';
import { CalloutBanner } from '@/components/ui/CalloutBanner';
import { CTASection } from '@/components/ui/CTASection';
import { Button } from '@/components/ui/Button';
import { HomeSolutionsGrid } from '@/components/home/HomeSolutionsGrid';
import { HomeProcessSection } from '@/components/home/HomeProcessSection';
import { HomeManifesto } from '@/components/home/HomeManifesto';
import { SectionTransition } from '@/components/ui/Reveal';
import {
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finance operations and advisory support | Rely Advisory Group',
  description:
    'Improve accounts payable, receivables, finance processes and reporting with practical support for growing Australian businesses.',
  alternates: {
    canonical: 'https://relyadvisory.com.au/',
  },
};

export default function HomePage() {
  // ProfessionalService JSON-LD schema for rich search results & SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rely Advisory Group',
    description:
      'Finance operations, accounts payable, accounts receivable, finance process improvement and management reporting for Australian businesses.',
    url: 'https://relyadvisory.com.au',
    logo: 'https://relyadvisory.com.au/logo.svg',
    telephone: '[approved business number]',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    serviceType: [
      'Accounts Payable Outsourcing',
      'Accounts Receivable Support',
      'Finance Process Improvement',
      'Management Reporting and Power BI Dashboards',
    ],
    knowsAbout: [
      'Finance Operations',
      'Debtor Management',
      'Cash Flow Visibility',
      'SME Accounting Workflow Optimization',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <HomeHero />

      {/* 1b. Service Marquee Ticker */}
      <Marquee
        items={[
          'Accounts Payable',
          'Accounts Receivable',
          'Process Improvement',
          'Management Reporting',
          'Power BI Dashboards',
          'Cash Flow Visibility',
          'Finance Operations',
          'Debtor Management',
        ]}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Problem Section */}
      <SectionTransition className="py-20 lg:py-28 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OPERATIONAL CHALLENGES"
            title="Is your finance function keeping pace with your business?"
            description="As transaction volumes and business complexity increase, informal finance processes quickly become costly bottlenecks."
            align="left"
          />

          <ProblemGrid />

          {/* Health check callout */}
          <div className="mt-12">
            <CalloutBanner
              title="Assess your operational readiness in 3 minutes"
              quote="Take our quick assessment to identify immediate process risks, capacity bottlenecks, and reporting gaps across your finance function."
              authorOrNote="Free diagnostic tool with instant scoring and recommendations."
              variant="ivory"
            />
          </div>
        </div>
      </SectionTransition>

      {/* 4. Solutions Overview */}
      <SectionTransition
        className="py-20 lg:py-28 bg-cloud-grey/50 border-t border-cloud-grey-border"
        aria-labelledby="solutions-heading"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
            <SectionHeading
              eyebrow="TAILORED SUPPORT"
              title="Practical finance support built around your business"
              description="Choose support for one specific process or build an integrated finance operations service tailored to your transaction volumes."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0 shrink-0">
              <Button href="/solutions" variant="secondary" size="md" className="group">
                View all solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <HomeSolutionsGrid />
        </div>
      </SectionTransition>

      {/* 4b. Editorial breather — word-by-word scroll reveal */}
      <HomeManifesto />

      {/* 5. Value Section */}
      <SectionTransition className="py-20 lg:py-28 bg-white" aria-labelledby="benefits-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="COMMERCIAL OUTCOMES"
            title="More than completed transactions"
            description="Our service goes beyond basic processing to deliver tangible operational control, disciplined cash flow, and executive clarity."
            align="center"
          />

          <BenefitsList />
        </div>
      </SectionTransition>

      {/* 6. How Rely Works */}
      <HomeProcessSection />

      {/* 7. Why Businesses Choose Rely */}
      <SectionTransition className="py-20 lg:py-28 bg-white" aria-labelledby="why-choose-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE RELY DIFFERENCE"
            title="Why businesses choose Rely"
            description="Dependable delivery, local Australian accountability, and reporting designed for management decisions."
            align="left"
          />

          <WhyChooseUs />
        </div>
      </SectionTransition>

      {/* 8. Closing CTA Block */}
      <CTASection
        title="Not sure where to begin?"
        description="A free Finance Operations Review identifies immediate pressure points, practical improvements and the most appropriate level of support."
        buttonText="Book your free review"
        buttonHref="/book-a-review"
        microcopy="No obligation. A focused 30-minute conversation about your current finance operations."
        showHealthCheckAlt={true}
      />
    </>
  );
}
