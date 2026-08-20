'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Solutions',
    href: '/solutions',
    submenu: [
      { name: 'All Solutions', href: '/solutions', desc: 'Custom finance operational support designed to scale.' },
      { name: 'Accounts Payable', href: '/solutions/accounts-payable', desc: 'Controlled supplier invoice processing and approvals.' },
      { name: 'Accounts Receivable', href: '/solutions/accounts-receivable', desc: 'Disciplined billing, debtor follow-up, and cash visibility.' },
      { name: 'Process Improvement', href: '/solutions/process-improvement', desc: 'Workflow documentation, bottleneck removal, and controls.' },
      { name: 'Reporting & Insights', href: '/solutions/reporting-insights', desc: 'Management packs, KPI dashboards, and Power BI reporting.' },
    ],
  },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        aria-label="Main Navigation"
        className={cn(
          'w-full max-w-[1320px] flex items-center justify-between rounded-2xl border transition-all duration-500 pointer-events-auto',
          isScrolled
            ? 'mt-3 bg-white/97 backdrop-blur-2xl shadow-float border-cloud-grey-border/80 py-3 px-5 lg:px-7'
            : 'mt-4 lg:mt-5 bg-white/90 backdrop-blur-xl shadow-card border-white/30 py-3.5 px-5 lg:px-8'
        )}
      >
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Logo showTagline={!isScrolled} />
        </div>

        {/* Desktop Navigation — centered */}
        <div className="hidden xl:flex items-center justify-center gap-0.5">
          {navLinks.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || (item.submenu && pathname.startsWith(item.href));
            const hasSubmenu = !!item.submenu;

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => hasSubmenu && setActiveDropdown(item.name)}
                onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors relative rounded-xs',
                    isActive
                      ? 'text-rely-navy font-semibold'
                      : 'text-charcoal hover:text-rely-navy'
                  )}
                >
                  {item.name}
                  {hasSubmenu && (
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        activeDropdown === item.name ? 'rotate-180' : ''
                      )}
                    />
                  )}

                  {/* Active gold dot indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-advisory-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Solutions Dropdown */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-0 pt-3 w-[360px]"
                      >
                        <div className="bg-white/98 backdrop-blur-2xl rounded-xl shadow-float-lg border border-cloud-grey-border overflow-hidden p-2">
                          <div className="grid gap-0.5">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  'block p-3 rounded-lg transition-colors group/sub',
                                  pathname === subItem.href
                                    ? 'bg-warm-ivory/60'
                                    : 'hover:bg-cloud-grey/80'
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

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Button
            href="/book-a-review"
            variant="primary"
            size="md"
            className="shadow-subtle"
          >
            Book a Review
          </Button>
        </div>

        {/* Mobile buttons */}
        <div className="flex xl:hidden items-center gap-2">
          <Button
            href="/book-a-review"
            variant="primary"
            size="sm"
            className="text-xs px-3 py-1.5"
          >
            Book Review
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-rely-navy hover:bg-cloud-grey rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold"
            aria-label="Open Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[60] bg-rely-navy flex flex-col pointer-events-auto"
          >
            {/* Close button */}
            <div className="flex justify-end p-5 sm:p-8">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold"
                aria-label="Close Navigation Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav links */}
            <div className="px-8 overflow-y-auto flex-1 pb-12 flex flex-col gap-2">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
                  className="flex flex-col"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-2xl sm:text-3xl font-heading font-semibold py-2 transition-colors',
                      pathname === item.href ? 'text-advisory-gold' : 'text-white hover:text-advisory-gold-light'
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-advisory-gold/30 mt-1 mb-3">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base text-white/70 hover:text-advisory-gold transition-colors font-body py-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Bottom CTA in mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="pt-8 mt-auto border-t border-white/15 space-y-3"
              >
                <Button
                  href="/book-a-review"
                  variant="gold"
                  size="lg"
                  className="w-full justify-center"
                >
                  Book a Free Finance Review
                </Button>
                <Button
                  href="/finance-health-check"
                  variant="outline-white"
                  size="md"
                  className="w-full justify-center"
                >
                  Take 3-Minute Health Check
                </Button>
                <div className="text-center pt-2 text-xs text-white/50">
                  Australian oversight • Confidential & Secure
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
