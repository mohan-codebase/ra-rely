'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { staggerContainer } from '@/lib/animations';
import {
  CreditCard,
  Receipt,
  GitMerge,
  BarChart3,
} from 'lucide-react';

const solutionsData = [
  {
    icon: CreditCard,
    title: 'Accounts Payable',
    description:
      'Create a more controlled, visible and efficient supplier payment process.',
    href: '/solutions/accounts-payable',
    number: '01',
    highlights: [
      'Invoice capture & validation',
      'Approval workflow routing',
      'Payment run preparation',
      'Supplier statement reconciliation',
    ],
  },
  {
    icon: Receipt,
    title: 'Accounts Receivable',
    description:
      'Improve invoicing discipline, debtor follow-up and cash collection visibility.',
    href: '/solutions/accounts-receivable',
    number: '02',
    highlights: [
      'Billing schedule administration',
      'Structured debtor follow-up',
      'Receipt allocation & reconciliation',
      'Debtor aging & collection reporting',
    ],
  },
  {
    icon: GitMerge,
    title: 'Finance Process Improvement',
    description:
      'Remove bottlenecks, clarify controls and design processes that can scale.',
    href: '/solutions/process-improvement',
    number: '03',
    highlights: [
      'Current-state workflow mapping',
      'Control gap identification',
      'Standard operating procedures (SOPs)',
      'System & automation optimization',
    ],
  },
  {
    icon: BarChart3,
    title: 'Reporting & Business Insights',
    description:
      'Turn financial information into accessible dashboards, commentary and management action.',
    href: '/solutions/reporting-insights',
    number: '04',
    highlights: [
      'Monthly management packs',
      'Short-term cash flow forecasting',
      'Interactive Power BI dashboards',
      'Insight commentary & action plans',
    ],
  },
];

export const HomeSolutionsGrid: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {solutionsData.map((item) => (
        <ServiceCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          highlights={item.highlights}
          number={item.number}
        />
      ))}
    </motion.div>
  );
};
