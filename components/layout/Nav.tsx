"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "/solutions",
    submenu: [
      {
        name: "All Solutions",
        href: "/solutions",
        desc: "Custom finance operational support designed to scale.",
      },
      {
        name: "Accounts Payable",
        href: "/solutions/accounts-payable",
        desc: "Controlled supplier invoice processing and approvals.",
      },
      {
        name: "Accounts Receivable",
        href: "/solutions/accounts-receivable",
        desc: "Disciplined billing, debtor follow-up, and cash visibility.",
      },
      {
        name: "Process Improvement",
        href: "/solutions/process-improvement",
        desc: "Workflow documentation, bottleneck removal, and controls.",
      },
      {
        name: "Reporting & Insights",
        href: "/solutions/reporting-insights",
        desc: "Management packs, KPI dashboards, and Power BI reporting.",
      },
    ],
  },
  { name: "How We Work", href: "/how-we-work" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const Nav: React.FC<{ visible?: boolean }> = ({ visible = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className="gap-4 lg:gap-8">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Logo size={visible ? "sm" : "md"} showTagline={!visible} />
        </div>

        {/* Navigation Links */}
        <div
          onMouseLeave={() => {
            setHoveredIndex(null);
            setActiveDropdown(null);
          }}
          className="flex items-center justify-center gap-0.5 sm:gap-1"
        >
          {navLinks.map((item, idx) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  (item.submenu && pathname.startsWith(item.href));
            const hasSubmenu = !!item.submenu;

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                  if (hasSubmenu) setActiveDropdown(item.name);
                  else setActiveDropdown(null);
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 whitespace-nowrap",
                    isActive
                      ? "text-rely-navy font-semibold"
                      : "text-charcoal/85 hover:text-rely-navy",
                  )}
                >
                  {/* Subtle hovered pill */}
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-cloud-grey/80 -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span>{item.name}</span>
                  {hasSubmenu && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200 opacity-60",
                        activeDropdown === item.name
                          ? "rotate-180 opacity-100"
                          : "",
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[360px] z-50"
                      >
                        <div className="bg-white/98 backdrop-blur-2xl rounded-2xl shadow-float-lg border border-cloud-grey-border overflow-hidden p-2">
                          <div className="grid gap-0.5">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "block p-3 rounded-xl transition-colors group/sub",
                                  pathname === subItem.href
                                    ? "bg-warm-ivory/60"
                                    : "hover:bg-cloud-grey/80",
                                )}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-heading font-semibold text-rely-navy group-hover/sub:text-advisory-gold-dark transition-colors">
                                    {subItem.name}
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-advisory-gold opacity-0 group-hover/sub:opacity-100 -translate-x-1 group-hover/sub:translate-x-0 transition-all" />
                                </div>
                                <div className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                                  {subItem.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center shrink-0">
          <Button
            href="/book-a-review"
            variant="primary"
            size="sm"
            className={cn(
              "rounded-full font-heading font-semibold tracking-wider uppercase transition-all duration-300 shadow-subtle hover:shadow-glow-gold whitespace-nowrap",
              visible ? "text-[11px] px-4 py-2" : "text-xs px-5 py-2.5",
            )}
          >
            Book a Review
          </Button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <div className="flex items-center">
            <Logo size="sm" showTagline={false} />
          </div>
          <div className="flex items-center gap-2">
            <Button
              href="/book-a-review"
              variant="primary"
              size="sm"
              className="text-[11px] px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              Book Review
            </Button>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-2 w-full">
            {navLinks.map((item) => (
              <div key={item.name} className="flex flex-col">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-heading font-semibold py-1.5 transition-colors",
                    pathname === item.href
                      ? "text-advisory-gold-dark"
                      : "text-rely-navy hover:text-advisory-gold-dark",
                  )}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="flex flex-col gap-1.5 pl-3 border-l border-cloud-grey-border ml-1 my-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs text-charcoal/75 hover:text-rely-navy py-0.5 font-body"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-cloud-grey-border mt-2 space-y-2">
              <Button
                href="/book-a-review"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Review
              </Button>
              <Button
                href="/finance-health-check"
                variant="secondary"
                size="md"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Finance Health Check
              </Button>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
