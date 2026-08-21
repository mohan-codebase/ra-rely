'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

/**
 * Global smooth-scroll engine.
 *
 * Lenis takes over the wheel/touch input and eases the real window scroll
 * position, which makes the travel between two sections glide instead of
 * jumping. GSAP's ticker drives Lenis so both share a single RAF loop, and
 * ScrollTrigger is updated from Lenis so every scroll animation stays
 * perfectly in sync with the eased position.
 *
 * Entirely disabled when the visitor prefers reduced motion — native scrolling
 * is used instead and ScrollTrigger falls back to its own listeners.
 */
export function SmoothScrollProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      // Longer duration + a gradual ease-out (rather than the earlier sharp
      // expo curve) is what gives a slow, weighted glide instead of a quick
      // snap that only coasts at the very end.
      duration: 1.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.3,
      infinite: false,
    });

    // Expose for in-page anchor handling and the back-to-top control.
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Anchor links (#section) should ride the same easing curve.
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      const element = target as HTMLElement;
      lenis.scrollTo(element, { offset: -96, duration: 1.4 });

      // preventDefault() cancels the browser's fragment navigation, which also
      // cancels the focus move screen-reader and keyboard users depend on
      // (the "skip to content" link above all). Restore it by hand.
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '-1');
      }
      element.focus({ preventScroll: true });
    };

    document.addEventListener('click', handleAnchorClick);

    // Images and fonts settling can shift layout — recalculate trigger points.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('load', refresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Every route change starts at the top with fresh trigger measurements.
  // The very first render is skipped: a deep link like /about#pricing has
  // already been scrolled into place by the browser, and resetting to 0 here
  // would throw the visitor back to the top of the page.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      ScrollTrigger.refresh();
      return;
    }

    window.__lenis?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}
