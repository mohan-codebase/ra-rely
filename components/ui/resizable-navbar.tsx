"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as IconMenu2, X as IconX } from "lucide-react";

interface NavbarContextType {
  visible: boolean;
  isScrolled: boolean;
}

const NavbarContext = createContext<NavbarContextType>({
  visible: false,
  isScrolled: false,
});

export const useNavbar = () => useContext(NavbarContext);

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      // Hysteresis threshold to prevent jitter when scrolling near top boundary
      if (scrollY > 45) {
        setVisible(true);
      } else if (scrollY < 15) {
        setVisible(false);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContext.Provider value={{ visible, isScrolled: visible }}>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex w-full justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300",
          className
        )}
      >
        <div className="w-full flex justify-center">{children}</div>
      </header>
    </NavbarContext.Provider>
  );
};

export const NavBody = ({
  children,
  className,
  visible: propVisible,
}: NavBodyProps) => {
  const context = useNavbar();
  const visible = propVisible !== undefined ? propVisible : context.visible;

  return (
    <nav
      aria-label="Desktop Navigation"
      className={cn(
        "relative z-[60] mx-auto hidden lg:flex flex-row items-center justify-between pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full",
        visible
          ? "mt-2.5 w-auto max-w-[calc(100vw-2rem)] py-1.5 px-4 lg:px-5 bg-white/95 backdrop-blur-2xl border border-cloud-grey-border/80 shadow-float-lg gap-4 lg:gap-6"
          : "mt-4 w-full max-w-[1280px] py-2.5 px-6 lg:px-8 bg-white/90 backdrop-blur-xl border border-white/60 shadow-card gap-6 lg:gap-8",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-charcoal lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3.5 py-1.5 text-charcoal hover:text-rely-navy transition-colors duration-200"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-cloud-grey/80 -z-10"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-20 text-[13px] font-medium">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible: propVisible,
}: MobileNavProps) => {
  const context = useNavbar();
  const visible = propVisible !== undefined ? propVisible : context.visible;

  return (
    <nav
      aria-label="Mobile Navigation"
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center justify-between rounded-full lg:hidden pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
        visible
          ? "mt-2.5 py-1.5 px-3.5 bg-white/95 backdrop-blur-2xl border border-cloud-grey-border/80 shadow-float-lg"
          : "mt-3.5 py-2 px-4 bg-white/90 backdrop-blur-xl border border-white/60 shadow-card",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "fixed inset-x-3 sm:inset-x-6 top-20 z-[70] max-h-[85vh] overflow-y-auto rounded-3xl bg-white/98 backdrop-blur-3xl p-6 sm:p-8 shadow-float-lg border border-cloud-grey-border",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="p-2 text-rely-navy hover:bg-cloud-grey rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold"
    >
      {isOpen ? (
        <IconX className="w-5 h-5" />
      ) : (
        <IconMenu2 className="w-5 h-5" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center p-1.5"
    >
      <img
        src="/assets/logos/nav-logo.svg"
        alt="Rely Advisory Group logo"
        className="h-7 w-auto object-contain"
      />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
