'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { Shield, ArrowUpRight, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const footerSolutions = [
  { name: 'Accounts Payable', href: '/solutions/accounts-payable' },
  { name: 'Accounts Receivable', href: '/solutions/accounts-receivable' },
  { name: 'Process Improvement', href: '/solutions/process-improvement' },
  { name: 'Reporting & Insights', href: '/solutions/reporting-insights' },
];

const footerCompany = [
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'For Accountants', href: '/for-accountants' },
  { name: 'Industries Served', href: '/industries' },
  { name: 'Insights & Articles', href: '/insights' },
  { name: 'About Rely', href: '/about' },
  { name: 'Frequently Asked Questions', href: '/faq' },
];

const footerGetStarted = [
  { name: 'Book a Review (30 min)', href: '/book-a-review' },
  { name: 'Finance Health Check (3 min)', href: '/finance-health-check' },
  { name: 'Contact Us', href: '/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer aria-labelledby="footer-heading" className="relative">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Outer wrapper with warm background to create the "floating" illusion */}
      <div className="bg-gradient-to-b from-white via-warm-ivory-light to-warm-ivory pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-[1320px] mx-auto"
        >
          {/* Floating footer container */}
          <motion.div
            variants={fadeInUp}
            className="relative bg-rely-navy rounded-2xl overflow-hidden shadow-float-lg border border-rely-navy-light/50"
          >
            {/* Top gold gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-advisory-gold to-transparent" />

            {/* Architectural grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern-gold pointer-events-none" />

            <div className="relative px-6 sm:px-10 lg:px-14 pt-12 pb-10">
              {/* Rely Promise Banner */}
              <motion.div
                variants={fadeInUp}
                className="bg-rely-navy-dark/60 border border-advisory-gold/20 p-6 sm:p-8 rounded-xl mb-12 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-advisory-gold font-heading text-xs uppercase tracking-widest font-semibold mb-2">
                      <Shield className="w-4 h-4 text-advisory-gold" />
                      The Rely Promise
                    </div>
                    <p className="text-white text-base sm:text-lg font-medium leading-snug">
                      Australian relationship management. Structured finance operations. Secure delivery. Actionable business insight.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/book-a-review"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-advisory-gold text-rely-navy hover:bg-advisory-gold-light font-heading font-semibold text-sm rounded-lg transition-all duration-300 shadow-subtle hover:shadow-glow-gold group"
                    >
                      Book a Free Review
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Main Footer Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
                {/* Brand & Contact */}
                <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4">
                  <Logo variant="light" />
                  <p className="text-white/65 text-sm max-w-sm leading-relaxed mt-3">
                    Better finance operations. Clearer business decisions. Practical operational support, process improvement, and decision-focused reporting for Australian SMEs.
                  </p>

                  <div className="pt-2 space-y-2.5 text-xs text-white/55">
                    <div className="flex items-center gap-2.5 group">
                      <MapPin className="w-3.5 h-3.5 text-advisory-gold shrink-0" />
                      <span className="group-hover:text-white/80 transition-colors">Sydney, NSW — Services available remotely across Australia</span>
                    </div>
                    <div className="flex items-center gap-2.5 group">
                      <Mail className="w-3.5 h-3.5 text-advisory-gold shrink-0" />
                      <span className="font-mono text-white/75 group-hover:text-white transition-colors">hello@[approved-domain].com.au</span>
                      <span className="text-[10px] bg-white/8 px-1.5 py-0.5 rounded text-advisory-gold-light border border-white/10">Placeholder</span>
                    </div>
                    <div className="flex items-center gap-2.5 group">
                      <Clock className="w-3.5 h-3.5 text-advisory-gold shrink-0" />
                      <span className="group-hover:text-white/80 transition-colors">Monday to Friday, 9:00 AM – 5:00 PM AEST</span>
                    </div>
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-advisory-gold font-heading text-xs uppercase tracking-widest font-semibold mb-5">
                    Solutions
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {footerSolutions.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-advisory-gold hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1 group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-advisory-gold" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/solutions"
                        className="text-advisory-gold-light hover:text-white font-medium inline-flex items-center gap-1 text-sm transition-colors"
                      >
                        All Solutions →
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-advisory-gold font-heading text-xs uppercase tracking-widest font-semibold mb-5">
                    Company
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {footerCompany.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-advisory-gold hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1 group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-advisory-gold" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Get Started */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-advisory-gold font-heading text-xs uppercase tracking-widest font-semibold mb-5">
                    Get Started
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {footerGetStarted.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-advisory-gold hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1 group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-advisory-gold" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg text-xs text-white/65">
                    <span className="text-advisory-gold font-semibold block mb-1">Collaborative Approach</span>
                    We complement your existing accountant and internal team without replacing them.
                  </div>
                </motion.div>
              </div>

              {/* Disclaimer & Copyright */}
              <motion.div variants={fadeInUp} className="pt-8 text-xs text-white/45 space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-white/65 font-semibold">General information only:</strong> Rely Advisory Group provides finance operations, process improvement and reporting support services. Regulated tax, BAS, audit or financial advice services are provided only where appropriately authorised or in collaboration with the client&apos;s registered practitioner.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/8 text-white/55">
                  <p>
                    © {new Date().getFullYear()} Rely Advisory Group. All rights reserved.
                  </p>
                  <div className="flex items-center gap-6 text-xs">
                    <Link href="/privacy" className="hover:text-advisory-gold transition-colors underline-offset-4 hover:underline">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-advisory-gold transition-colors underline-offset-4 hover:underline">
                      Website Terms & Disclaimer
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
