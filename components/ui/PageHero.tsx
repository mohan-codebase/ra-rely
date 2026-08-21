'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';

export interface Crumb {
  name: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
  /** Optional trail shown as pills above the title. */
  breadcrumbs?: Crumb[];
  /** Short supporting facts, rendered as pills under the copy. */
  highlights?: string[];
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
  breadcrumbs,
  highlights,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isCenter = align === 'center';

  // Same layered exit as the home banner, so every page departs identically.
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

      gsap.to('[data-pagehero-bg]', { y: 90, ease: 'none', scrollTrigger });
      gsap.to('[data-pagehero-copy]', {
        y: -55,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section
      ref={sectionRef}
      className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      {/* ---- Layered banner background ---- */}
      <div data-pagehero-bg className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cloud-grey/70 via-white to-warm-ivory-light/50" />

        {/* Navy aurora, top-left */}
        <div className="absolute -top-48 -left-40 w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(11,27,77,0.09)_0%,transparent_65%)]" />

        {/* Gold aurora, right */}
        <div className="absolute -top-28 right-[-12%] w-[38rem] h-[38rem] rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.15)_0%,transparent_62%)]" />

        {/* Grid, masked away at the bottom edge */}
        <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(to_bottom,black_5%,transparent_90%)]" />

        {/* Hairline rules top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/30 to-transparent" />

        {/* Feather into whatever follows */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Floating decorative orb */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-advisory-gold/5 blur-3xl pointer-events-none"
        animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          data-pagehero-copy
          initial="hidden"
          animate="visible"
          variants={stagger}
          className={cn(
            'max-w-3xl will-change-transform',
            isCenter ? 'mx-auto text-center' : ''
          )}
        >
          {/* Breadcrumb pills */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              variants={slideLeft}
              aria-label="Breadcrumb"
              className={cn(
                'mb-6 flex flex-wrap items-center gap-1.5 text-xs',
                isCenter ? 'justify-center' : ''
              )}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-cloud-grey-border px-3 py-1.5 text-charcoal-muted hover:text-rely-navy hover:border-advisory-gold/50 transition-colors"
              >
                <Home className="w-3 h-3" />
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.name}>
                  <ChevronRight className="w-3 h-3 text-charcoal-light shrink-0" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="rounded-full bg-white/70 backdrop-blur-sm border border-cloud-grey-border px-3 py-1.5 text-charcoal-muted hover:text-rely-navy hover:border-advisory-gold/50 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="rounded-full bg-rely-navy px-3 py-1.5 font-medium text-white"
                    >
                      {crumb.name}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Eyebrow pill */}
          <motion.div
            variants={slideLeft}
            className={cn(
              'inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-md border border-advisory-gold/35 px-5 py-2 font-heading text-xs uppercase tracking-[0.16em] font-semibold mb-5 text-advisory-gold-dark shadow-subtle',
              isCenter ? 'justify-center' : ''
            )}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-advisory-gold inline-block"
              animate={
                shouldReduceMotion
                  ? {}
                  : { scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }
              }
              transition={{ duration: 2, repeat: Infinity }}
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
              className={cn(
                'text-base sm:text-lg lg:text-xl text-charcoal/80 leading-relaxed max-w-2xl font-normal',
                isCenter ? 'mx-auto' : ''
              )}
            >
              {description}
            </motion.p>
          )}

          {/* Highlight pills */}
          {highlights && highlights.length > 0 && (
            <motion.ul
              variants={fadeUp}
              className={cn(
                'mt-7 flex flex-wrap gap-2.5',
                isCenter ? 'justify-center' : ''
              )}
            >
              {highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm border border-cloud-grey-border px-4 py-2 text-xs font-medium text-charcoal-muted shadow-subtle"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-advisory-gold shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          )}

          {/* Optional extra content (e.g. CTAs, badges) */}
          {children && (
            <motion.div variants={fadeUp} className="mt-7">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
