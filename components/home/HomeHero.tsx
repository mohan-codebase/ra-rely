'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

const trustBadges = [
  { icon: CheckCircle2, text: 'Australian Point of Contact' },
  { icon: CheckCircle2, text: 'Documented SOPs' },
  { icon: CheckCircle2, text: 'Seamless Accounting Collaboration' },
];

// Custom stagger container with slower, more cinematic feel
const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Eyebrow slides from left
const eyebrowVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Title lines — masked stagger reveal (slide up from below)
const titleVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Subtitle fades up
const subtitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// CTA slides up with slight scale
const ctaVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Dashboard panel slides in from right
const dashboardVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 },
  },
};

export const HomeHero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion, use simpler fade variants
  const getVariant = <T extends Record<string, unknown>>(variant: T): T =>
    shouldReduceMotion
      ? ({
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4 } },
        } as unknown as T)
      : variant;

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cloud-grey/60 via-white to-warm-ivory-light/30" />

      {/* Architectural grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-32 right-[15%] w-72 h-72 rounded-full bg-advisory-gold/5 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : { y: [0, -15, 0], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-rely-navy/5 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : { y: [0, 12, 0], scale: [1, 0.95, 1] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow badge — slides from left */}
            <motion.div
              variants={getVariant(eyebrowVariant)}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-warm-ivory/80 backdrop-blur-sm border border-advisory-gold/30 text-rely-navy text-xs font-heading font-semibold uppercase tracking-[0.18em] shadow-subtle"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-advisory-gold"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
              Finance Operations & Business Insight
            </motion.div>

            {/* Gold decorative rule between eyebrow and title */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-20 h-[2px] bg-gradient-to-r from-advisory-gold to-advisory-gold-light rounded-full origin-left"
            />

            {/* Main Headline — cinematic reveal */}
            <motion.h1
              variants={getVariant(titleVariant)}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-bold text-rely-navy tracking-tight leading-[1.12] text-balance"
            >
              Better finance operations.{' '}
              <span className="relative inline-block">
                <span className="text-gradient-gold">
                  Clearer business decisions.
                </span>
                {/* Animated underline accent */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-advisory-gold to-advisory-gold-light rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </span>
            </motion.h1>

            {/* Lead Paragraph */}
            <motion.p
              variants={getVariant(subtitleVariant)}
              className="text-base sm:text-lg lg:text-xl text-charcoal/85 leading-relaxed max-w-2xl font-normal"
            >
              Rely Advisory Group helps growing Australian businesses improve accounts payable,
              strengthen receivables, streamline finance processes and gain clearer visibility of
              performance, without the cost of building a large internal finance team.
            </motion.p>

            {/* CTAs — with gold glow on hover */}
            <motion.div
              variants={getVariant(ctaVariant)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                href="/book-a-review"
                variant="primary"
                size="lg"
                className="shadow-card hover:shadow-glow-gold transition-shadow duration-300"
              >
                Book a Free Finance Operations Review
              </Button>
              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
                className="group"
              >
                Explore our solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Trust highlights — staggered cascade */}
            <motion.div
              variants={getVariant(subtitleVariant)}
              className="pt-6 border-t border-cloud-grey-border flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-charcoal-muted"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + i * 0.15, duration: 0.4 }}
                  className="flex items-center gap-1.5 font-medium"
                >
                  <badge.icon className="w-4 h-4 text-advisory-gold shrink-0" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Finance Dashboard Visual */}
          <motion.div
            variants={getVariant(dashboardVariant)}
            className="lg:col-span-5 relative"
          >
            {/* Floating background accents */}
            <div className="absolute -inset-4 bg-gradient-to-br from-advisory-gold/5 to-rely-navy/5 rounded-2xl blur-xl" />

            <motion.div
              className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-xl border border-cloud-grey-border/80 p-6 sm:p-7 shadow-float space-y-5"
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-4 border-b border-cloud-grey-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rely-navy flex items-center justify-center text-advisory-gold font-bold text-xs shadow-subtle">
                    R
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs uppercase tracking-wider text-rely-navy">
                      Finance Operations Dashboard
                    </div>
                    <div className="text-[11px] text-charcoal-muted">
                      Rely Advisory Group • Live Overview
                    </div>
                  </div>
                </div>
                <motion.span
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-lg bg-green-50 text-green-700 border border-green-200"
                  animate={shouldReduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Active Control
                </motion.span>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  className="p-4 bg-cloud-grey/80 rounded-lg border border-cloud-grey-border/60"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[11px] font-medium text-charcoal-muted flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-advisory-gold" /> Receivables Cycle
                  </div>
                  <div className="font-heading font-bold text-2xl text-rely-navy mt-1.5">
                    22 Days
                  </div>
                  <div className="text-[10px] text-green-600 font-semibold mt-1">
                    ↓ 14 days collected sooner
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 bg-cloud-grey/80 rounded-lg border border-cloud-grey-border/60"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[11px] font-medium text-charcoal-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-advisory-gold" /> AP Processing
                  </div>
                  <div className="font-heading font-bold text-2xl text-rely-navy mt-1.5">
                    100% Verified
                  </div>
                  <div className="text-[10px] text-charcoal-muted font-medium mt-1">
                    No duplicate payments
                  </div>
                </motion.div>
              </div>

              {/* Control Health Panel */}
              <motion.div
                className="p-4 bg-warm-ivory/80 rounded-lg border border-advisory-gold/30 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between text-xs font-heading font-bold text-rely-navy">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-advisory-gold" />
                    Standard Operating Controls
                  </span>
                  <span className="text-advisory-gold-dark font-mono text-[11px]">Disciplined</span>
                </div>
                <div className="space-y-2 text-xs text-charcoal">
                  {[
                    ['Approval Workflow Segregation', 'Active'],
                    ['Debtor Statement Automation', 'Weekly Cycle'],
                    ['Management Pack Delivery', '5th Business Day'],
                  ].map(([label, status]) => (
                    <div key={label} className="flex justify-between items-center py-1 border-b border-advisory-gold/15 last:border-b-0">
                      <span>{label}</span>
                      <span className="text-xs font-semibold text-rely-navy">{status}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Power BI Link */}
              <div className="p-3.5 bg-white rounded-lg border border-cloud-grey-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rely-navy text-white flex items-center justify-center shrink-0 shadow-subtle">
                    <BarChart3 className="w-4 h-4 text-advisory-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-rely-navy text-xs">
                      Decision-Focused Reporting
                    </div>
                    <div className="text-[10px] text-charcoal-muted">
                      Data → Insight → Recommendation
                    </div>
                  </div>
                </div>
                <Link
                  href="/solutions/reporting-insights"
                  className="text-xs font-semibold text-advisory-gold-dark hover:text-rely-navy transition-colors"
                >
                  View Sample →
                </Link>
              </div>

              {/* Trust note */}
              <div className="text-center pt-1 text-[11px] text-charcoal-muted">
                Australian relationship management • Secure delivery
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
