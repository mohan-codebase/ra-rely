'use client';

import React, { useRef } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Which way the element travels in from. */
  direction?: RevealDirection;
  /** Travel distance in pixels. */
  distance?: number;
  delay?: number;
  duration?: number;
  /** Adds a soft scale-up alongside the move. */
  scale?: boolean;
  /** Adds a blur-to-sharp focus pull — use sparingly, on headlines. */
  blur?: boolean;
  /** ScrollTrigger start position. */
  start?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'article' | 'header' | 'footer';
}

const offsetFor = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Scroll-triggered entrance for a single element.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = 'up',
  distance = 44,
  delay = 0,
  duration = 1,
  scale = false,
  blur = false,
  start = 'top 88%',
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, clearProps: 'transform,filter' });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          ...offsetFor(direction, distance),
          ...(scale ? { scale: 0.94 } : {}),
          ...(blur ? { filter: 'blur(10px)' } : {}),
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, distance, delay, duration, scale, blur, start]);

  return (
    <Tag ref={ref as never} className={cn('will-change-transform', className)}>
      {children}
    </Tag>
  );
};

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  /** CSS selector for the children to stagger. Defaults to direct children. */
  selector?: string;
  stagger?: number;
  distance?: number;
  delay?: number;
  start?: string;
}

/**
 * Staggered scroll entrance for a list or grid of children.
 */
export const RevealGroup: React.FC<RevealGroupProps> = ({
  children,
  className,
  selector,
  stagger = 0.09,
  distance = 36,
  delay = 0,
  start = 'top 85%',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = selector
      ? Array.from(element.querySelectorAll<HTMLElement>(selector))
      : (Array.from(element.children) as HTMLElement[]);

    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, clearProps: 'transform' });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [selector, stagger, distance, delay, start]);

  return <div ref={ref} className={className}>{children}</div>;
};

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Positive values drift down as you scroll (slower than the page),
   * negative values drift up (faster than the page).
   */
  speed?: number;
  /** Scrubbed scale change across the scroll range. */
  scaleTo?: number;
}

/**
 * Scrubbed parallax layer — tied directly to scroll position, so it feels
 * physically connected to the Lenis easing rather than animating on its own.
 */
export const Parallax: React.FC<ParallaxProps> = ({
  children,
  className,
  speed = 60,
  scaleTo,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: speed,
        ...(scaleTo ? { scale: scaleTo } : {}),
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed, scaleTo]);

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
};

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
  /** Lifts the section over the previous one as it arrives. */
  lift?: boolean;
}

/**
 * Wraps a full page section so the handoff between two sections reads as one
 * continuous movement: the incoming section rises and sharpens into place while
 * the outgoing one settles back and softens. Both halves are scrubbed against
 * scroll position, so they track the Lenis glide exactly.
 *
 * Arrival and departure animate two nested elements rather than one, so the two
 * scrubbed timelines can never fight over the same properties.
 */
export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className,
  id,
  lift = true,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const arrive = element.querySelector<HTMLElement>('[data-section-arrive]');
      const depart = element.querySelector<HTMLElement>('[data-section-depart]');
      if (!arrive || !depart) return;

      // Arrival: rise and sharpen as the section comes up the viewport.
      gsap.fromTo(
        arrive,
        { y: lift ? 72 : 0, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'top 55%',
            scrub: 0.8,
          },
        }
      );

      // Departure: only for sections tall enough that it cannot overlap the
      // arrival above — otherwise a short section would fade in and out at once.
      if (element.offsetHeight > window.innerHeight * 0.7) {
        gsap.fromTo(
          depart,
          { y: 0, opacity: 1 },
          {
            y: lift ? -48 : 0,
            opacity: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'bottom 75%',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [lift]);

  return (
    <section ref={ref} id={id} className={className} {...rest}>
      <div data-section-arrive className="will-change-transform">
        <div data-section-depart className="will-change-transform">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Reveal;
