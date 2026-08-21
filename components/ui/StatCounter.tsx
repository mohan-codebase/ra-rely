'use client';

import React, { useRef } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';

interface StatCounterProps {
  /** The number the counter lands on. */
  value: number;
  /** Shown before the number, e.g. "$". */
  prefix?: string;
  /** Shown after the number, e.g. "%", " days", "th day". */
  suffix?: string;
  /** Decimal places to hold during the count (0 for whole numbers). */
  decimals?: number;
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to `value` once the element scrolls into view. Purely
 * decorative — the resting value is rendered directly for anyone who never
 * triggers the animation (no-JS, or the ScrollTrigger callback firing after
 * the reader has already scrolled past).
 */
export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = `${prefix}${counter.n.toFixed(decimals)}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default StatCounter;
