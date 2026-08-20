'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StepFlow } from '@/components/ui/StepFlow';
import Link from 'next/link';
import { fadeInUp } from '@/lib/animations';

export const HomeProcessSection: React.FC = () => {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-ivory/80 via-warm-ivory/50 to-white" />
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      
      {/* Top and bottom gold border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-advisory-gold/40 to-transparent" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="STRUCTURED METHODOLOGY"
          title="How Rely works"
          description="A clear, controlled pathway from initial assessment to steady-state operational delivery and continuous improvement."
          align="center"
        />

        <StepFlow />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-rely-navy hover:text-advisory-gold-dark transition-colors underline-offset-4 hover:underline group"
          >
            Learn more about our governance, security, and onboarding process
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
