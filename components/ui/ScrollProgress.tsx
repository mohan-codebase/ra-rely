'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';

/**
 * A hairline gold progress bar pinned under the header, plus a back-to-top
 * pill that appears once the visitor is a screen deep. Both read straight from
 * ScrollTrigger so they move with the same eased position as everything else.
 */
export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useIsoLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The footer carries its own "Back to top" control. Once it is on screen the
  // floating pill would sit directly on top of it, so stand down.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 2.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[55] h-[3px] pointer-events-none"
      >
        <div
          ref={barRef}
          className="h-full origin-left bg-gradient-to-r from-advisory-gold-dark via-advisory-gold to-advisory-gold-light"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-rely-navy text-white pl-4 pr-5 py-3 shadow-float-lg border border-advisory-gold/30 font-heading text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-advisory-gold hover:text-rely-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold focus-visible:ring-offset-2 ${
          showTop && !footerVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
        Top
      </button>
    </>
  );
};
