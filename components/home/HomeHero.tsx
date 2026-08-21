'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  TrendingUp,
  Check,
  BarChart3,
  Clock,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';
import { StatCounter } from '@/components/ui/StatCounter';

const trustBadges = [
  'Australian point of contact',
  'Documented SOPs',
  'Seamless accounting collaboration',
];

// Headline proof points, shown as a flat rule beneath the banner. Each counts
// up to `value` once scrolled into view; `prefix`/`suffix` frame the number.
const heroStats = [
  { value: 14, suffix: ' days', label: 'Faster average collection' },
  { value: 5, suffix: 'th day', label: 'Management pack delivery' },
  { value: 100, suffix: '%', label: 'Invoices matched & verified' },
  { value: 1, suffix: ' lead', label: 'Australian point of contact' },
];

// The two headline metrics carried at the top of the control panel.
const panelMetrics = [
  {
    icon: TrendingUp,
    label: 'Receivables cycle',
    value: '22 days',
    note: '14 days collected sooner',
  },
  {
    icon: Clock,
    label: 'AP processing',
    value: '100%',
    note: 'Matched, verified, no duplicates',
  },
];

const panelControls: [string, string][] = [
  ['Approval workflow segregation', 'Active'],
  ['Debtor statement automation', 'Weekly cycle'],
  ['Management pack delivery', '5th business day'],
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

// Control panel rises in from the right
const panelVariant = {
  hidden: { opacity: 0, x: 48, y: 24 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
  },
};

export const HomeHero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // If reduced motion, use simpler fade variants
  const getVariant = <T extends Record<string, unknown>>(variant: T): T =>
    shouldReduceMotion
      ? ({
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4 } },
        } as unknown as T)
      : variant;

  /**
   * Scroll-linked depth. Each banner layer leaves at its own rate, so the hero
   * dissolves into the section below instead of scrolling away as one flat
   * slab. Everything is scrubbed, so it tracks the Lenis easing exactly.
   */
  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      };

      // Background washes drift slowest — they read as the far distance.
      gsap.to('[data-hero-bg]', { y: 120, ease: 'none', scrollTrigger });

      // The copy column lifts away and fades as it exits.
      gsap.to('[data-hero-copy]', {
        y: -70,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger,
      });

      // The panel sits nearer the viewer, so it travels furthest.
      gsap.to('[data-hero-panel]', { y: -130, ease: 'none', scrollTrigger });

      // Stat rail trails just behind the copy.
      gsap.to('[data-hero-stats]', {
        y: -40,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      {/* ---- Layered banner background ---- */}
      <div data-hero-bg className="absolute inset-0 -z-10 pointer-events-none">
        {/* Base wash: warm ivory in the top-left, clearing to white at the fold */}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#FAF8F3_0%,#FFFFFF_45%,#F4F6F9_100%)]" />

        {/* Broad gold field behind the control panel, anchoring the right side */}
        <div className="absolute -top-32 right-[-18%] w-[54rem] h-[54rem] rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.18)_0%,rgba(196,163,90,0.05)_45%,transparent_70%)]" />

        {/* Cool navy counterweight low on the left */}
        <div className="absolute bottom-[-18rem] -left-40 w-[46rem] h-[46rem] rounded-full bg-[radial-gradient(circle,rgba(11,27,77,0.08)_0%,transparent_65%)]" />

        {/* Architectural grid, faded towards the bottom so the next section
            never meets a hard edge */}
        <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(to_bottom,black_5%,transparent_88%)]" />

        {/* Fine gold hairline suggesting a ledger rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/40 to-transparent" />

        {/* Soft white feather into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 xl:gap-16 items-center"
        >
          {/* ---------- Left: the proposition ---------- */}
          <div
            data-hero-copy
            className="lg:col-span-7 will-change-transform"
          >
            {/* Eyebrow — a rule and a mark, not another bordered chip */}
            <motion.div
              variants={getVariant(eyebrowVariant)}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                {!shouldReduceMotion && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-advisory-gold"
                    animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <span className="relative h-2 w-2 rounded-full bg-advisory-gold" />
              </span>
              <span className="font-heading text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-muted">
                Australian finance operations
                <span className="text-advisory-gold-dark"> &amp; business insight</span>
              </span>
            </motion.div>

            {/* Main headline — one controlled break, gold on the second line */}
            <motion.h1
              variants={getVariant(titleVariant)}
              className="mt-7 border-l-2 border-advisory-gold pl-6 sm:pl-7 font-heading font-bold text-rely-navy tracking-tight leading-[1.06] text-[2.15rem] sm:text-5xl lg:text-[2.6rem] xl:text-[3.75rem]"
            >
              <span className="block">Better finance operations.</span>
              <span className="block text-advisory-gold-dark">
                Clearer business decisions.
              </span>
            </motion.h1>

            {/* Lead paragraph */}
            <motion.p
              variants={getVariant(subtitleVariant)}
              className="mt-7 pl-6 sm:pl-7 text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-xl"
            >
              Rely Advisory Group helps growing Australian businesses improve accounts payable,
              strengthen receivables, streamline finance processes and gain clearer visibility of
              performance, without the cost of building a large internal finance team.
            </motion.p>

            {/* Calls to action */}
            <motion.div
              variants={getVariant(ctaVariant)}
              className="mt-9 pl-6 sm:pl-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4"
            >
              <Button
                href="/book-a-review"
                variant="primary"
                size="lg"
                className="shadow-card hover:shadow-glow-gold"
              >
                <Sparkles className="w-4 h-4 text-advisory-gold" />
                Book a Free Operations Review
              </Button>
              <Button href="/solutions" variant="secondary" size="lg" className="group">
                Explore our solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Trust line — plain text with gold ticks, no chrome */}
            <motion.ul
              variants={getVariant(subtitleVariant)}
              className="mt-9 pl-6 sm:pl-7 flex flex-wrap items-center gap-x-5 gap-y-2.5"
            >
              {trustBadges.map((badge, i) => (
                <motion.li
                  key={badge}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.12, duration: 0.4 }}
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-charcoal-muted"
                >
                  <Check className="w-3.5 h-3.5 text-advisory-gold shrink-0" strokeWidth={3} />
                  {badge}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* ---------- Right: the control panel ---------- */}
          {/* The GSAP parallax and the Framer entrance both write `transform`,
              so they get one element each — sharing one leaves the panel stuck
              at whichever offset lost the race. */}
          <div data-hero-panel className="lg:col-span-5 relative will-change-transform">
            {/* Warm halo lifting the panel off the page */}
            <div className="absolute -inset-6 rounded-[2rem] bg-advisory-gold/10 blur-2xl" />

            {/* The plain wrapper above breaks Framer's variant propagation, so
                this panel drives its own entrance rather than inheriting one. */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={getVariant(panelVariant)}
              className="relative"
            >

            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(155deg,#132766_0%,#0B1B4D_55%,#071233_100%)] shadow-float-lg"
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.35 } }}
            >
              {/* Faint gold grid + top hairline give the panel its ledger feel */}
              <div className="absolute inset-0 grid-pattern-gold opacity-70 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/70 to-transparent" />

              <div className="relative">
                {/* Panel header */}
                <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-6 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full border border-advisory-gold/50 bg-white/5 flex items-center justify-center font-heading font-bold text-advisory-gold">
                      R
                    </div>
                    <div>
                      <div className="font-heading text-[13px] font-semibold tracking-wide text-white">
                        Finance operations, under control
                      </div>
                      <div className="text-[11px] text-white/60 mt-0.5">
                        Rely Advisory Group • live overview
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-advisory-gold/25 bg-advisory-gold/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-advisory-gold-light">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-advisory-gold"
                      animate={shouldReduceMotion ? {} : { opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    Active
                  </span>
                </div>

                {/* Headline metrics — separated by hairlines, not nested cards */}
                <div className="grid grid-cols-2 border-b border-white/10">
                  {panelMetrics.map((metric, i) => (
                    <div
                      key={metric.label}
                      className={`px-6 sm:px-8 py-7 ${
                        i > 0 ? 'border-l border-white/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                        <metric.icon className="w-3.5 h-3.5 text-advisory-gold" />
                        {metric.label}
                      </div>
                      <div className="mt-2.5 font-heading font-bold text-3xl sm:text-[2.15rem] leading-none text-white">
                        {metric.value}
                      </div>
                      <div className="mt-2 text-[11px] leading-snug text-advisory-gold-light/80">
                        {metric.note}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Operating controls */}
                <div className="px-6 sm:px-8 py-7">
                  <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                    Standard operating controls
                  </div>
                  <ul className="mt-4 space-y-3.5">
                    {panelControls.map(([label, status]) => (
                      <li
                        key={label}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="flex items-center gap-2.5 text-white/80">
                          <Check
                            className="w-3.5 h-3.5 text-advisory-gold shrink-0"
                            strokeWidth={3}
                          />
                          {label}
                        </span>
                        <span className="shrink-0 text-xs font-medium text-advisory-gold-light">
                          {status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reporting strip */}
                <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-5 border-t border-white/10 bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-advisory-gold/15 border border-advisory-gold/25 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4 text-advisory-gold" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white">
                        Decision-focused reporting
                      </div>
                      <div className="text-[11px] text-white/60">
                        Data → insight → recommendation
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/solutions/reporting-insights"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-semibold text-white/85 transition-colors hover:bg-advisory-gold hover:border-advisory-gold hover:text-rely-navy"
                  >
                    Sample
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ---- Proof rail: a flat ledger rule bridging into the page ---- */}
        <div
          data-hero-stats
          className="mt-16 lg:mt-24 pt-9 border-t border-cloud-grey-border will-change-transform"
        >
          <motion.dl
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-1 sm:px-6 ${
                  i > 0 ? 'lg:border-l lg:border-cloud-grey-border' : ''
                } ${i % 2 === 1 ? 'border-l border-cloud-grey-border pl-5 lg:pl-6' : ''}`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading font-bold text-2xl sm:text-3xl text-rely-navy tabular-nums">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <span className="block text-xs sm:text-[13px] text-charcoal-muted mt-1.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};
