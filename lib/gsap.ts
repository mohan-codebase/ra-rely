'use client';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Central GSAP setup.
 *
 * GSAP plugins must only be registered in the browser, and only once.
 * Every client component that needs scroll animation imports `gsap` and
 * `ScrollTrigger` from here rather than registering the plugin itself.
 */
// Module scope runs once per bundle, so this guard is enough to keep the
// registration (and the global defaults below) from being applied repeatedly.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Sensible global defaults so every animation shares the same house style.
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.9,
  });

  ScrollTrigger.config({
    // Avoids ScrollTrigger fighting the browser's scroll restoration on refresh
    ignoreMobileResize: true,
  });
}

/** Signature easing used across the site — matches the Framer Motion curve. */
export const RELY_EASE = 'power3.out';

/** True when the visitor has asked the OS to reduce motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * `useLayoutEffect` warns when it runs during SSR (there is no DOM to measure).
 * Every component that reads layout for a GSAP animation needs the browser
 * version only, so this is defined once here instead of once per file.
 */
export const useIsoLayoutEffect: typeof useLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : () => {};

export { gsap, ScrollTrigger };
