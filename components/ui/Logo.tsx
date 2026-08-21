import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark"; // 'light' is for dark backgrounds (footer), 'dark' is for light backgrounds (header/navbar)
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  showTagline = true,
  className = "",
}) => {
  const isLight = variant === "light";
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  // Sizing for footer (light variant on dark bg)
  const lightHeightClass = isSmall
    ? "h-9 sm:h-10"
    : isLarge
      ? "h-16 sm:h-20"
      : "h-12 sm:h-15";

  // Sizing for navbar (dark variant on light bg)
  const darkHeightClass = isSmall
    ? "h-6 sm:h-7"
    : isLarge
      ? "h-9 sm:h-10"
      : "h-7 sm:h-8";

  const logoSrc = isLight
    ? "/assets/logos/logo.png"
    : "/assets/logos/nav-logo.svg";

  if (isLight) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center justify-center rounded-2xl bg-white/95 p-3 sm:p-3.5 shadow-subtle border border-white/20 hover:bg-white hover:shadow-glow-gold transition-all duration-300 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold ${className}`}
        aria-label="Rely Advisory Group - Accounting. Strategy. Simplified."
      >
        <img
          src="/assets/logos/logo.png"
          alt="Rely Advisory Group"
          className={`${lightHeightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center py-1 px-1.5 sm:px-2 rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Rely Advisory Group - Accounting. Strategy. Simplified."
    >
      <img
        src={logoSrc}
        alt="Rely Advisory Group"
        className={`${darkHeightClass} w-auto object-contain transition-all duration-300 group-hover:scale-105`}
      />
    </Link>
  );
};
