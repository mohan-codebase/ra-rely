'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, shouldReduceMotion ? 600 : 2200);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0, transition: { duration: 0.4 } }
              : {
                  y: '-100%',
                  transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
                }
          }
          aria-hidden="true"
        >
          {/* Subtle background ambient mesh & luxury glow */}
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
          <div className="absolute w-[540px] h-[540px] rounded-full bg-advisory-gold/15 blur-[130px] pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-rely-navy/5 blur-[90px] pointer-events-none" />

          {/* Main Logo Container */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-[380px] sm:max-w-[480px] md:max-w-[560px] px-6">
            {/* Official Brand Logo */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.92, y: 14 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{
                duration: 0.75,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-full flex items-center justify-center"
            >
              <img
                src="/assets/logos/logo.png"
                alt="Rely Advisory Group"
                className="w-full h-auto object-contain select-none"
                width={560}
                height={317}
              />
            </motion.div>

            {/* Gold animated hairline divider */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-28 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-advisory-gold to-transparent mt-7 sm:mt-8 origin-center"
            />

            {/* Pulsing luxury loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="flex items-center gap-2 mt-5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-advisory-gold"
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.85, 1.25, 0.85],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: 'easeInOut',
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
