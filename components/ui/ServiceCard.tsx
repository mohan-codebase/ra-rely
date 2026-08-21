'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/lib/animations';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  highlights?: string[];
  number?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  highlights,
  number,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      data-cursor-text="EXPLORE"
      className={cn(
        'group relative bg-white border border-cloud-grey-border rounded-xl p-7 sm:p-8 flex flex-col justify-between hover:border-advisory-gold/60 hover:shadow-float transition-all duration-400',
        className
      )}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-bg pointer-events-none" />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <motion.div
            className="w-13 h-13 rounded-lg bg-rely-navy text-white flex items-center justify-center group-hover:bg-advisory-gold group-hover:text-rely-navy transition-all duration-300 shadow-subtle"
            whileHover={{ scale: 1.08 }}
            style={{ width: '3.25rem', height: '3.25rem' }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          {number && (
            <span className="font-mono text-xs font-semibold text-advisory-gold/50 tracking-wider group-hover:text-advisory-gold transition-colors">
              {number}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-heading font-bold text-rely-navy group-hover:text-rely-navy mb-3 transition-colors">
          {title}
        </h3>

        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-2.5 mb-6 pt-4 border-t border-cloud-grey">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal font-medium">
                <CheckCircle2 className="w-4 h-4 text-advisory-gold shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative pt-4 border-t border-cloud-grey-border/60">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-rely-navy group-hover:text-advisory-gold-dark transition-colors"
        >
          Explore Solution
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};
