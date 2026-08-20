'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  separator = '◆',
  speed = 35,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Build the content string with separators
  const content = items.map((item) => (
    <span key={item} className="flex items-center gap-6 sm:gap-8">
      <span className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-rely-navy/80 whitespace-nowrap">
        {item}
      </span>
      <span className="text-advisory-gold text-[10px] sm:text-xs" aria-hidden="true">
        {separator}
      </span>
    </span>
  ));

  // Duration based on number of items and speed
  const duration = items.length * speed;

  if (shouldReduceMotion) {
    // Static display for reduced-motion preference
    return (
      <div
        className={`w-full overflow-hidden border-y border-advisory-gold/20 bg-gradient-to-r from-warm-ivory via-white to-warm-ivory py-4 sm:py-5 ${className}`}
        role="marquee"
        aria-label="Our services"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden border-y border-advisory-gold/20 bg-gradient-to-r from-warm-ivory via-white to-warm-ivory py-4 sm:py-5 ${className}`}
      role="marquee"
      aria-label="Our services"
    >
      <div className="relative flex">
        {/* Two copies for seamless infinite scroll */}
        {[0, 1].map((copy) => (
          <motion.div
            key={copy}
            className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration,
                ease: 'linear',
              },
            }}
          >
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
