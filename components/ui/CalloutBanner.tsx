'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface CalloutBannerProps {
  title?: string;
  quote: string;
  authorOrNote?: string;
  variant?: 'ivory' | 'navy' | 'gold';
  className?: string;
}

export const CalloutBanner: React.FC<CalloutBannerProps> = ({
  title,
  quote,
  authorOrNote,
  variant = 'ivory',
  className = '',
}) => {
  const variantStyles = {
    ivory: 'bg-warm-ivory border-advisory-gold/40 text-charcoal',
    navy: 'bg-rely-navy border-advisory-gold text-white',
    gold: 'bg-advisory-gold/15 border-advisory-gold text-rely-navy',
  };

  const isNavy = variant === 'navy';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className={cn(
        'relative p-7 sm:p-9 rounded-xl border-l-4 shadow-subtle hover:shadow-card transition-shadow duration-300',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-1">
          <motion.div
            className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center',
              isNavy ? 'bg-white/10 text-advisory-gold' : 'bg-advisory-gold/20 text-rely-navy'
            )}
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-4.5 h-4.5" />
          </motion.div>
        </div>

        <div className="space-y-2">
          {title && (
            <div
              className={cn(
                'font-heading font-bold text-base sm:text-lg',
                isNavy ? 'text-advisory-gold' : 'text-rely-navy'
              )}
            >
              {title}
            </div>
          )}

          <p
            className={cn(
              'text-base sm:text-lg leading-relaxed font-medium',
              isNavy ? 'text-white' : 'text-charcoal'
            )}
          >
            {quote}
          </p>

          {authorOrNote && (
            <p
              className={cn(
                'text-xs sm:text-sm font-normal pt-1',
                isNavy ? 'text-white/70' : 'text-charcoal-muted'
              )}
            >
              {authorOrNote}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
