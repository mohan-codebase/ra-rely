import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading font-semibold text-center rounded-full tracking-wide overflow-hidden transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5';

  // Pills need more horizontal room than square buttons to look balanced.
  const sizeStyles = {
    sm: 'text-xs px-5 py-2',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5',
  };

  const variantStyles = {
    // Design system: navy background, white text, gold hover.
    primary:
      'bg-rely-navy text-white border border-rely-navy hover:bg-advisory-gold hover:text-rely-navy hover:border-advisory-gold shadow-subtle hover:shadow-glow-gold focus-visible:ring-advisory-gold',
    // Design system: the outline treatment.
    secondary:
      'bg-transparent text-rely-navy border border-rely-navy hover:bg-rely-navy hover:text-white shadow-subtle hover:shadow-card focus-visible:ring-rely-navy',
    gold:
      'bg-advisory-gold text-rely-navy border border-advisory-gold hover:bg-advisory-gold-light hover:border-advisory-gold-light shadow-subtle hover:shadow-glow-gold focus-visible:ring-rely-navy',
    ghost:
      'bg-transparent text-rely-navy border border-transparent hover:bg-cloud-grey hover:border-cloud-grey-border focus-visible:ring-rely-navy',
    'outline-white':
      'bg-white/5 backdrop-blur-sm text-white border border-white/50 hover:bg-white hover:text-rely-navy hover:border-white focus-visible:ring-white',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  // A gold sheen that sweeps across the pill on hover — the one shared flourish
  // that ties every button on the site together.
  const sheen = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
    />
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {sheen}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {sheen}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
};
