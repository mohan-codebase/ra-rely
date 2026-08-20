'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  children,
  align = 'left',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isCenter = align === 'center';

  const fadeUp = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
      };

  const slideLeft = shouldReduceMotion
    ? fadeUp
    : {
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      };

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cloud-grey/60 via-white to-warm-ivory-light/40" />

      {/* Architectural grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Floating decorative orb */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-advisory-gold/4 blur-3xl"
        animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/30 to-transparent" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className={cn(
            'max-w-3xl',
            isCenter ? 'mx-auto text-center' : ''
          )}
        >
          {/* Eyebrow */}
          <motion.div
            variants={slideLeft}
            className={cn(
              'inline-flex items-center gap-2.5 font-heading text-xs uppercase tracking-[0.18em] font-semibold mb-4 text-advisory-gold',
              isCenter ? 'justify-center' : ''
            )}
          >
            <motion.span
              className="w-6 h-[2px] bg-advisory-gold inline-block rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
            <span>{eyebrow}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-rely-navy text-balance"
          >
            {title}
          </motion.h1>

          {/* Gold decorative rule */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              'w-16 h-[2px] bg-gradient-to-r from-advisory-gold to-advisory-gold-light rounded-full my-5',
              isCenter ? 'mx-auto origin-center' : 'origin-left'
            )}
          />

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed max-w-2xl font-normal"
            >
              {description}
            </motion.p>
          )}

          {/* Optional extra content (e.g. CTAs, badges) */}
          {children && (
            <motion.div variants={fadeUp} className="mt-6">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
