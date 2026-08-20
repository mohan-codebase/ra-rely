import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { CreditCard, Receipt, GitMerge, BarChart3, ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Outsourced finance solutions for Australian SMEs | Rely',
  description:
    'Flexible accounts payable, receivables, process improvement and business reporting support designed for growing businesses.',
};

const solutions = [
  {
    title: 'Accounts Payable Support',
    description:
      'Improve supplier invoice processing, approvals, payment preparation and payable visibility.',
    href: '/solutions/accounts-payable',
    icon: CreditCard,
  },
  {
    title: 'Accounts Receivable Support',
    description:
      'Improve billing administration, debtor follow-up, receipt allocation and collection reporting.',
    href: '/solutions/accounts-receivable',
    icon: Receipt,
  },
  {
    title: 'Finance Process Improvement',
    description:
      'Map current workflows, remove duplication, clarify controls and reduce spreadsheet dependence.',
    href: '/solutions/process-improvement',
    icon: GitMerge,
  },
  {
    title: 'Reporting and Business Insights',
    description:
      'Develop meaningful management reports, KPI dashboards and cash-flow visibility.',
    href: '/solutions/reporting-insights',
    icon: BarChart3,
  },
];

export default function SolutionsPage() {
  return (
    <>
            <PageHero
        eyebrow="FLEXIBLE SUPPORT. PRACTICAL OUTCOMES."
        title="Finance solutions that grow with your business"
        description="Choose support for one process or build an integrated finance operations service. Every engagement is designed around your systems, transaction volumes, internal capability and business priorities."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-cloud-grey-border p-8 rounded-xs hover:border-advisory-gold hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xs bg-rely-navy text-white flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-heading font-bold text-rely-navy mb-3">
                  {item.title}
                </h2>
                <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <Button href={item.href} variant="secondary" size="sm">
                  View Service Details <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      </section>

      <CTASection
        title="Start with one function. Expand when the value is clear."
        description="Rely can support a defined operational process, provide temporary capacity during a period of change, or become an ongoing finance operations partner."
        buttonText="Book a Finance Operations Review"
        buttonHref="/book-a-review"
      />
    </>
  );
}