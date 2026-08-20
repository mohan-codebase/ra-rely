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
    'inline-flex items-center justify-center font-heading font-semibold text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xs tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
  };

  const variantStyles = {
    primary:
      'bg-rely-navy text-white hover:bg-advisory-gold hover:text-rely-navy border border-rely-navy hover:border-advisory-gold shadow-subtle focus-visible:ring-advisory-gold',
    secondary:
      'bg-transparent text-rely-navy border border-rely-navy hover:bg-rely-navy hover:text-white focus-visible:ring-rely-navy',
    gold:
      'bg-advisory-gold text-rely-navy hover:bg-[#b08e45] border border-advisory-gold shadow-subtle focus-visible:ring-rely-navy',
    ghost:
      'bg-transparent text-rely-navy hover:bg-cloud-grey focus-visible:ring-rely-navy',
    'outline-white':
      'bg-transparent text-white border border-white/60 hover:bg-white hover:text-rely-navy focus-visible:ring-white',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
