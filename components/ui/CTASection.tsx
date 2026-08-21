'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Calendar, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  microcopy?: string;
  showHealthCheckAlt?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Not sure where to begin?',
  description = 'A free Finance Operations Review identifies immediate pressure points, practical improvements and the most appropriate level of support.',
  buttonText = 'Book your free review',
  buttonHref = '/book-a-review',
  microcopy = 'No obligation. A focused 30-minute conversation about your current finance operations.',
  showHealthCheckAlt = true,
}) => {
  return (
    <section className="relative py-16 sm:py-24 bg-rely-navy text-white overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 grid-pattern-gold pointer-events-none" />
      
      {/* Floating orb accents */}
      <motion.div
        className="absolute top-10 right-[20%] w-64 h-64 rounded-full bg-advisory-gold/8 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-[15%] w-48 h-48 rounded-full bg-white/5 blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/8 border border-advisory-gold/30 text-advisory-gold text-xs uppercase tracking-widest font-heading font-semibold mb-7 backdrop-blur-sm"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Finance Operations Review
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white tracking-tight mb-5 text-balance"
        >
          {title}
        </motion.h2>

        {/* Gold line accent */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mb-6"
        >
          <motion.div
            className="w-20 h-px bg-advisory-gold mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5"
        >
          <Button
            href={buttonHref}
            variant="gold"
            size="lg"
            className="w-full sm:w-auto shadow-premium text-base font-bold hover:shadow-glow-gold transition-shadow duration-300"
          >
            <Calendar className="w-4 h-4" />
            {buttonText}
          </Button>

          {showHealthCheckAlt && (
            <Link
              href="/finance-health-check"
              className="inline-flex items-center justify-center text-sm font-semibold text-white/85 hover:text-advisory-gold px-7 py-3.5 border border-white/20 hover:border-advisory-gold rounded-full transition-all duration-300 w-full sm:w-auto group"
            >
              <HelpCircle className="w-4 h-4 mr-2 text-advisory-gold" />
              Take 3-Min Health Check First
            </Link>
          )}
        </motion.div>

        {/* Microcopy */}
        {microcopy && (
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-sm text-white/50 italic"
          >
            {microcopy}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};
