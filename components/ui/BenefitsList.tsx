'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const benefits = [
  {
    title: 'Improve cash flow',
    description: 'Structured invoicing, systematic follow-up, and real-time debtor visibility.',
  },
  {
    title: 'Reduce finance administration',
    description: 'Free business owners and internal teams to focus on customer service and commercial growth.',
  },
  {
    title: 'Strengthen financial controls',
    description: 'Clear responsibilities, documented workflows, and appropriate authorization reviews.',
  },
  {
    title: 'Gain better visibility',
    description: 'Practical management dashboards and insightful performance reporting.',
  },
  {
    title: 'Scale support flexibly',
    description: 'Adapt support effortlessly as transaction volumes and organizational complexity increase.',
  },
];

export const BenefitsList: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      className="bg-cloud-grey/80 border border-cloud-grey-border p-8 sm:p-10 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-start gap-3.5 bg-white p-5 rounded-lg border border-cloud-grey-border/80 shadow-subtle hover:shadow-card hover:border-advisory-gold/30 transition-all duration-300"
          >
            <motion.div
              className="w-7 h-7 rounded-lg bg-rely-navy text-advisory-gold flex items-center justify-center shrink-0 mt-0.5"
              whileHover={{ scale: 1.1 }}
            >
              <Check className="w-4 h-4 stroke-[3]" />
            </motion.div>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-rely-navy mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* CTA card */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="flex flex-col justify-between bg-rely-navy text-white p-5 rounded-lg border border-advisory-gold/30 shadow-subtle hover:shadow-card transition-all duration-300"
        >
          <div>
            <span className="text-xs font-mono font-semibold text-advisory-gold uppercase tracking-wider block mb-1">
              Ready to begin?
            </span>
            <div className="font-heading font-bold text-sm sm:text-base text-white">
              Tailored to your systems
            </div>
            <p className="text-xs text-white/65 mt-1 leading-relaxed">
              Xero, MYOB, QuickBooks, or Power BI.
            </p>
          </div>
          <div className="pt-3">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-advisory-gold hover:text-white transition-colors group"
            >
              Explore all solutions
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
