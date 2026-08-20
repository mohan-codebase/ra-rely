'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Zap, RefreshCw } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const steps = [
  {
    step: '01',
    name: 'Understand',
    icon: Search,
    description: 'We review your systems, transaction volumes, workflows and priorities.',
  },
  {
    step: '02',
    name: 'Stabilise',
    icon: Shield,
    description: 'We clarify responsibilities, document processes and address immediate gaps.',
  },
  {
    step: '03',
    name: 'Improve',
    icon: Zap,
    description: 'We simplify workflows, strengthen controls and introduce suitable reporting or automation.',
  },
  {
    step: '04',
    name: 'Support',
    icon: RefreshCw,
    description: 'We deliver reliable ongoing support and regularly review performance and priorities.',
  },
];

export const StepFlow: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      className="relative"
    >
      {/* Animated horizontal connector line for desktop */}
      <motion.div
        className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-8 z-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ background: 'linear-gradient(90deg, transparent, #C4A35A, transparent)', transformOrigin: 'left' }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-cloud-grey-border p-6 sm:p-7 rounded-xl shadow-subtle hover:border-advisory-gold hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  className="w-13 h-13 rounded-lg bg-warm-ivory border border-advisory-gold/35 text-rely-navy flex items-center justify-center font-bold"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: '3.25rem', height: '3.25rem' }}
                >
                  <Icon className="w-5.5 h-5.5 text-advisory-gold-dark" />
                </motion.div>
                <motion.span
                  className="font-heading text-3xl font-bold text-advisory-gold/25"
                  whileHover={{ color: 'rgba(196, 163, 90, 0.6)' }}
                >
                  {item.step}
                </motion.span>
              </div>

              <h3 className="text-lg font-heading font-bold text-rely-navy mb-2">
                {item.name}
              </h3>

              <p className="text-charcoal-muted text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Step connector arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-4">
                  <motion.div
                    className="w-px h-6 bg-advisory-gold/30"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
