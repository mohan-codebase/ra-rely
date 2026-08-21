'use client';

import React, { useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';
import { cn } from '@/lib/utils';

interface HorizontalRailProps {
  children: React.ReactNode;
  className?: string;
  /** Extra scroll distance per card width, so the pin doesn't feel rushed. */
  speedFactor?: number;
}

/**
 * Pins the section and translates its track horizontally as the visitor
 * scrolls vertically — the classic "scroll down, cards move sideways" rail.
 * Only engages at desktop widths: pinning a horizontal scroll on a phone
 * fights the platform's own scroll gestures, so below the `lg` breakpoint
 * this renders as a plain horizontally-scrollable row instead.
 */
export const HorizontalRail: React.FC<HorizontalRailProps> = ({
  children,
  className,
  speedFactor = 1,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const ctx = gsap.context(() => {
        const scrollDistance = () =>
          Math.max(0, track.scrollWidth - section.clientWidth) * speedFactor;

        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - section.clientWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollDistance()}`,
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [speedFactor]);

  // A resize (e.g. rotating a tablet across the 1024px line) can leave pin
  // spacing stale; a refresh keeps the trigger's math honest.
  useIsoLayoutEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div ref={sectionRef} className={cn('relative overflow-hidden', className)}>
      <div
        ref={trackRef}
        className="flex gap-6 lg:will-change-transform overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none no-scrollbar px-4 sm:px-6 lg:px-0"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalRail;
