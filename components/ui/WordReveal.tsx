'use client';

import React, { useRef } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '@/lib/gsap';

interface WordRevealProps {
  text: string;
  className?: string;
  id?: string;
  /** ScrollTrigger start/end. Widen the range for large display statements. */
  start?: string;
  end?: string;
  as?: 'p' | 'span' | 'div' | 'h2';
  /** Colour of a word that has not been reached yet. */
  dim?: string;
  /** Colour a word lands on as the sweep passes it. */
  bright?: string;
  /** Gap between consecutive words lighting up. */
  stagger?: number;
}

/**
 * Sweeps a statement from dim to bright one word at a time as the reader
 * scrolls past it. The sweep is scrubbed to scroll position rather than played
 * once, so the highlight always sits exactly where the block is in the
 * viewport — scroll back up and it un-reveals.
 *
 * Colour (not opacity) is animated: at display sizes a partly-transparent word
 * picks up whatever is behind it, whereas a flat grey reads as deliberate
 * typography. The resting colour is also set inline so the server-rendered
 * markup already looks right and there is no flash before hydration.
 */
export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className,
  id,
  start = 'top 78%',
  end = 'bottom 62%',
  as: Tag = 'p',
  dim = 'rgba(11, 27, 77, 0.18)',
  bright = '#0b1b4d',
  stagger = 0.06,
}) => {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(' ');

  useIsoLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;

    const wordEls = container.querySelectorAll<HTMLElement>('[data-word]');
    if (!wordEls.length) return;

    if (prefersReducedMotion()) {
      gsap.set(wordEls, { color: bright });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordEls,
        { color: dim },
        {
          color: bright,
          stagger,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start,
            end,
            scrub: 0.5,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text, start, end, dim, bright, stagger]);

  return (
    <Tag ref={ref as never} id={id} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} data-word style={{ color: dim }}>
          {/* The trailing space lives inside the span rather than being faked
              with a margin — otherwise textContent runs the words together for
              screen readers and copy-paste, and lines cannot wrap naturally. */}
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default WordReveal;
