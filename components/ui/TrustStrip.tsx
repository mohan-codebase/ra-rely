'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sliders, Lock, LineChart } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const trustPillars = [
  {
    icon: ShieldCheck,
    title: 'Australian oversight',
    description: 'Local relationship lead & governance',
  },
  {
    icon: Sliders,
    title: 'Flexible support',
    description: 'Single process or integrated team',
  },
  {
    icon: Lock,
    title: 'Secure processes',
    description: 'Documented controls & least privilege',
  },
  {
    icon: LineChart,
    title: 'Actionable insights',
    description: 'Decision-focused management reporting',
  },
];

export const TrustStrip: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="w-full bg-warm-ivory border-y border-advisory-gold/25"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'lg:pl-6 lg:border-l border-advisory-gold/20' : ''
                }`}
              >
                <motion.div
                  className="w-11 h-11 rounded-lg bg-white border border-advisory-gold/30 flex items-center justify-center shrink-0 shadow-subtle text-rely-navy"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5 text-advisory-gold" />
                </motion.div>
                <div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-rely-navy tracking-tight">
                    {pillar.title}
                  </div>
                  <div className="text-xs text-charcoal-muted mt-0.5 leading-snug">
                    {pillar.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
