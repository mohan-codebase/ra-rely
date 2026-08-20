import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' is for dark backgrounds (footer), 'dark' is for light backgrounds (header)
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';
  const navyColor = isLight ? '#FFFFFF' : '#0B1B4D';
  const goldColor = '#C4A35A';
  const subtitleColor = isLight ? '#D8BD7E' : '#263247';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold ${className}`}
      aria-label="Rely Advisory Group logo, Accounting. Strategy. Simplified."
    >
      {/* Monogram Mark */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        role="img"
        aria-hidden="true"
      >
        {/* Navy Monogram Frame */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="3"
          fill={isLight ? '#0F2360' : '#0B1B4D'}
          stroke={goldColor}
          strokeWidth="1.5"
        />
        {/* Modern Stylized 'R' with upward precision gold angle */}
        <path
          d="M15 14H24.5C28 14 30.5 16 30.5 19.5C30.5 22.5 28.5 24.5 25.5 25L32 34H26.5L20.8 25.5H19.5V34H15V14Z"
          fill={isLight ? '#FFFFFF' : '#FFFFFF'}
        />
        <path
          d="M19.5 18V21.8H24.2C25.8 21.8 26.8 21 26.8 19.9C26.8 18.8 25.8 18 24.2 18H19.5Z"
          fill={isLight ? '#0F2360' : '#0B1B4D'}
        />
        {/* Ascending Gold Angle / Arrow accentuating upward growth & precision */}
        <path
          d="M27 12L34 12L34 19L31.5 16.5L25.5 22.5L23.5 20.5L29.5 14.5L27 12Z"
          fill={goldColor}
        />
        {/* Fine gold baseline rule */}
        <line x1="14" y1="36" x2="34" y2="36" stroke={goldColor} strokeWidth="1" />
      </svg>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className="font-heading text-xl font-bold tracking-tight"
            style={{ color: navyColor }}
          >
            RELY
          </span>
          <span
            className="font-heading text-sm font-semibold tracking-widest uppercase"
            style={{ color: goldColor }}
          >
            ADVISORY GROUP
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className="text-[9.5px] uppercase tracking-[0.16em] font-medium"
              style={{ color: subtitleColor }}
            >
              Accounting
            </span>
            <span className="text-[9px]" style={{ color: goldColor }}>•</span>
            <span
              className="text-[9.5px] uppercase tracking-[0.16em] font-medium"
              style={{ color: subtitleColor }}
            >
              Strategy
            </span>
            <span className="text-[9px]" style={{ color: goldColor }}>•</span>
            <span
              className="text-[9.5px] uppercase tracking-[0.16em] font-medium"
              style={{ color: subtitleColor }}
            >
              Simplified
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
