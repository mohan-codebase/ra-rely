'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark' | 'ivory';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className={cn(
        'max-w-3xl mb-10 sm:mb-14',
        isCenter ? 'mx-auto text-center' : '',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeInUp}
          className={cn(
            'inline-flex items-center gap-2.5 font-heading text-xs uppercase tracking-[0.18em] font-semibold mb-3 text-advisory-gold',
            isCenter ? 'justify-center' : ''
          )}
        >
          <motion.span
            className="w-5 h-[1.5px] bg-advisory-gold inline-block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />
          <span>{eyebrow}</span>
          {isCenter && (
            <motion.span
              className="w-5 h-[1.5px] bg-advisory-gold inline-block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              style={{ transformOrigin: 'right' }}
            />
          )}
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-rely-navy'
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            isDark ? 'text-white/80' : 'text-charcoal-muted'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
