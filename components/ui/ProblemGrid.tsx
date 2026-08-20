'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileStack, EyeOff, UserCheck } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const problems = [
  {
    icon: Clock,
    title: 'Slow customer payments',
    description:
      'Overdue invoices and inconsistent follow-up are putting unnecessary pressure on cash flow.',
  },
  {
    icon: FileStack,
    title: 'Time-consuming supplier administration',
    description:
      'Invoice processing, approvals and payment preparation consume valuable internal time.',
  },
  {
    icon: EyeOff,
    title: 'Limited financial visibility',
    description:
      'Reports arrive late, rely on manual spreadsheets or do not explain what action management should take.',
  },
  {
    icon: UserCheck,
    title: 'Processes that depend on individuals',
    description:
      'Critical activities sit in inboxes, spreadsheets and undocumented knowledge, creating avoidable business risk.',
  },
];

export const ProblemGrid: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
    >
      {problems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative bg-white p-7 sm:p-8 rounded-xl border border-cloud-grey-border shadow-subtle hover:border-advisory-gold hover:shadow-card-hover transition-all duration-300"
          >
            {/* Gold top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-advisory-gold group-hover:via-advisory-gold-light group-hover:to-transparent transition-colors rounded-t-xl" />

            <div className="flex items-start gap-4">
              <motion.div
                className="w-12 h-12 rounded-lg bg-cloud-grey group-hover:bg-warm-ivory border border-cloud-grey-border group-hover:border-advisory-gold/40 flex items-center justify-center shrink-0 transition-all duration-300"
                whileHover={{ rotate: -5 }}
              >
                <Icon className="w-6 h-6 text-rely-navy group-hover:text-advisory-gold-dark transition-colors duration-300" />
              </motion.div>

              <div>
                <span className="text-xs font-mono font-semibold text-advisory-gold tracking-wider uppercase block mb-1.5">
                  Challenge 0{index + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-rely-navy mb-2.5">
                  {item.title}
                </h3>
                <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
