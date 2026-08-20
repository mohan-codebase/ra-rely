'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);

    // TODO: Re-enable for production — only show once per session
    // const hasSeenPreloader = sessionStorage.getItem('rely_preloader_seen');
    // if (hasSeenPreloader) {
    //   setIsVisible(false);
    //   return;
    // }

    const timer = setTimeout(() => {
      setIsVisible(false);
      // sessionStorage.setItem('rely_preloader_seen', 'true');
    }, shouldReduceMotion ? 800 : 2800);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  const relyLetters = ['R', 'E', 'L', 'Y'];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rely-navy overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0, transition: { duration: 0.4 } }
              : { y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }
          }
          aria-hidden="true"
        >
          {/* Subtle background grid */}
          <div className="absolute inset-0 grid-pattern-gold opacity-30" />

          <div className="relative flex flex-col items-center justify-center w-full max-w-sm px-6">
            {/* Monogram R Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3" y="3" width="42" height="42" rx="3"
                  fill="#0F2360"
                  stroke="#C4A35A"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 14H24.5C28 14 30.5 16 30.5 19.5C30.5 22.5 28.5 24.5 25.5 25L32 34H26.5L20.8 25.5H19.5V34H15V14Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M19.5 18V21.8H24.2C25.8 21.8 26.8 21 26.8 19.9C26.8 18.8 25.8 18 24.2 18H19.5Z"
                  fill="#0F2360"
                />
                <path
                  d="M27 12L34 12L34 19L31.5 16.5L25.5 22.5L23.5 20.5L29.5 14.5L27 12Z"
                  fill="#C4A35A"
                />
                <line x1="14" y1="36" x2="34" y2="36" stroke="#C4A35A" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* RELY — staggered letter entrance */}
            <div className="flex overflow-hidden mb-3">
              {relyLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-white font-heading font-bold text-5xl md:text-6xl tracking-[0.22em]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Gold line drawing from center */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-32 h-px bg-advisory-gold my-4 origin-center"
            />

            {/* ADVISORY GROUP — slides up */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.6,
                ease: 'easeOut',
              }}
            >
              <span className="text-advisory-gold font-heading text-sm md:text-base tracking-[0.35em] font-semibold uppercase">
                Advisory Group
              </span>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="flex gap-1.5 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-advisory-gold/60"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
