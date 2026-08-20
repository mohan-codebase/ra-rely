'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, FileCheck, TrendingUp, BarChart3, Users } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const reasons = [
  {
    icon: UserCheck,
    title: 'Australian point of contact',
    description:
      'A consistent Australian relationship lead who understands your business and local operating environment.',
  },
  {
    icon: FileCheck,
    title: 'Disciplined delivery',
    description:
      'Supported by documented standard operating procedures and agreed division of responsibilities.',
  },
  {
    icon: TrendingUp,
    title: 'Flexible and scalable',
    description:
      'Flexible services designed to expand or adapt smoothly as your transaction volumes and complexity increase.',
  },
  {
    icon: BarChart3,
    title: 'Action-focused reporting',
    description:
      'Reporting presented as insights, actions and strategic implications, not simply raw accounting outputs.',
  },
  {
    icon: Users,
    title: 'Collaborative partnership',
    description:
      'A collaborative approach that directly complements your external accountant and existing in-house team.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {reasons.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === reasons.length - 1;
        return (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className={`bg-white border border-cloud-grey-border p-7 rounded-xl shadow-subtle hover:border-advisory-gold/50 hover:shadow-card-hover transition-all duration-300 ${
              isLast ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="w-12 h-12 rounded-lg bg-warm-ivory border border-advisory-gold/25 flex items-center justify-center shrink-0 text-rely-navy"
                whileHover={{ scale: 1.08, rotate: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-5 h-5 text-advisory-gold-dark" />
              </motion.div>
              <div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-rely-navy mb-1.5">
                  {item.title}
                </h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">
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
