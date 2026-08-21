"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import {
  Shield,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  Clock,
  Phone,
  Linkedin,
  Send,
  Lock,
  FileCheck2,
  BarChart3,
  Users,
  CalendarCheck,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { WordReveal } from "@/components/ui/WordReveal";

const footerSolutions = [
  { name: "Accounts Payable", href: "/solutions/accounts-payable" },
  { name: "Accounts Receivable", href: "/solutions/accounts-receivable" },
  { name: "Process Improvement", href: "/solutions/process-improvement" },
  { name: "Reporting & Insights", href: "/solutions/reporting-insights" },
  { name: "All Solutions", href: "/solutions" },
];

const footerCompany = [
  { name: "How We Work", href: "/how-we-work" },
  { name: "About Rely", href: "/about" },
  { name: "Industries Served", href: "/industries" },
  { name: "For Accountants", href: "/for-accountants" },
];

const footerResources = [
  { name: "Insights & Articles", href: "/insights" },
  { name: "Frequently Asked Questions", href: "/faq" },
  { name: "Finance Health Check", href: "/finance-health-check" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Disclaimer", href: "/terms" },
];

const footerGetStarted = [
  { name: "Book a Review (30 min)", href: "/book-a-review" },
  { name: "Finance Health Check (3 min)", href: "/finance-health-check" },
  { name: "Contact Us", href: "/contact" },
];

// What clients actually get — kept factual and process-based rather than
// claiming credentials that have not been verified yet.
const assurances = [
  {
    icon: Users,
    title: "Named Australian lead",
    detail: "One accountable point of contact for every engagement.",
  },
  {
    icon: FileCheck2,
    title: "Documented SOPs",
    detail: "Every process written down, versioned and handed over.",
  },
  {
    icon: Lock,
    title: "Least-privilege access",
    detail: "Scoped system access with segregation of duties.",
  },
  {
    icon: BarChart3,
    title: "Reporting on a schedule",
    detail: "Management packs delivered by the 5th business day.",
  },
];

const serviceAreas = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Regional NSW",
  "Remote Australia-wide",
];

/** Shared pill styling for the small link chips in the bottom bar. */
const chipClass =
  "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 transition-colors hover:border-advisory-gold/50 hover:bg-white/10 hover:text-white";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 2.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative bg-rely-navy text-white overflow-hidden border-t border-advisory-gold/20"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Top gold gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-advisory-gold to-transparent" />

      {/* Architectural grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern-gold pointer-events-none" />

      {/* Ambient gold glow anchoring the top-right corner */}
      <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.10)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {/* ---- 1. The Rely Promise + booking CTA ---- */}
          <motion.div
            variants={fadeInUp}
            className="bg-rely-navy-dark/60 border border-advisory-gold/20 p-6 sm:p-8 rounded-3xl mb-10 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-advisory-gold/30 bg-advisory-gold/10 px-4 py-1.5 text-advisory-gold font-heading text-[11px] uppercase tracking-widest font-semibold mb-3">
                  <Shield className="w-3.5 h-3.5" />
                  The Rely Promise
                </div>
                <WordReveal
                  text="Australian relationship management. Structured finance operations. Secure delivery. Actionable business insight."
                  dim="rgba(255, 255, 255, 0.28)"
                  bright="#ffffff"
                  className="text-white text-base sm:text-lg font-medium leading-snug"
                />
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-a-review"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-advisory-gold text-rely-navy hover:bg-advisory-gold-light font-heading font-semibold text-sm rounded-full transition-all duration-300 shadow-subtle hover:shadow-glow-gold hover:-translate-y-0.5 group"
                >
                  Book a Free Review
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/finance-health-check"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/25 text-white/85 hover:text-rely-navy hover:bg-white hover:border-white font-heading font-semibold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5"
                >
                  3-Min Health Check
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ---- 2. Assurance strip ---- */}
          <motion.ul
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12"
          >
            {assurances.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-advisory-gold/30 hover:bg-white/[0.07]"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-advisory-gold/15 text-advisory-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-white">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-white/55">
                      {item.detail}
                    </span>
                  </span>
                </li>
              );
            })}
          </motion.ul>

          {/* ---- 3. Main footer grid ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
            {/* Brand, contact & newsletter */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-5">
              <Logo variant="light" />
              <p className="text-white/65 text-sm max-w-sm leading-relaxed">
                Better finance operations. Clearer business decisions. Practical
                operational support, process improvement, and decision-focused
                reporting for Australian SMEs.
              </p>

              {/* Contact details */}
              <ul className="space-y-3 text-xs text-white/60">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-advisory-gold shrink-0 mt-0.5" />
                  <span>Sydney, NSW — delivered remotely across Australia</span>
                </li>
                <li className="flex items-center gap-2.5 flex-wrap">
                  <Mail className="w-3.5 h-3.5 text-advisory-gold shrink-0" />
                  <span className="font-mono text-white/75">
                    hello@[approved-domain].com.au
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-advisory-gold-light border border-white/10">
                    Placeholder
                  </span>
                </li>
                <li className="flex items-center gap-2.5 flex-wrap">
                  <Phone className="w-3.5 h-3.5 text-advisory-gold shrink-0" />
                  <span className="font-mono text-white/75">
                    [approved business number]
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-advisory-gold-light border border-white/10">
                    Placeholder
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-advisory-gold shrink-0 mt-0.5" />
                  <span>Monday to Friday, 9:00 AM – 5:00 PM AEST</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CalendarCheck className="w-3.5 h-3.5 text-advisory-gold shrink-0 mt-0.5" />
                  <span>Enquiries answered within one business day</span>
                </li>
              </ul>

              {/* Newsletter — pill input + pill submit */}
              <div className="pt-2">
                <label
                  htmlFor="footer-newsletter"
                  className="block font-heading text-[11px] uppercase tracking-widest font-semibold text-advisory-gold mb-2.5"
                >
                  Finance Operations Notes
                </label>
                <form
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 focus-within:border-advisory-gold/60 transition-colors"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    id="footer-newsletter"
                    type="email"
                    required
                    placeholder="you@company.com.au"
                    className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/35 outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-advisory-gold px-4 py-2 font-heading text-xs font-semibold text-rely-navy transition-colors hover:bg-advisory-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Join
                  </button>
                </form>
                <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                  Occasional practical notes on AP, receivables and reporting.
                  No sales sequences. Delivery endpoint pending connection.
                </p>
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
                      className="text-white/70 hover:text-advisory-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-advisory-gold" />
                    </Link>
                  </li>
                ))}
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
                      className="text-white/70 hover:text-advisory-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-advisory-gold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-advisory-gold font-heading text-xs uppercase tracking-widest font-semibold mb-5">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                {footerResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-advisory-gold transition-colors duration-200 inline-flex items-center gap-1 group"
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
                      className="text-white/70 hover:text-advisory-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-advisory-gold" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/65">
                <span className="mb-1 block font-semibold text-advisory-gold">
                  Collaborative Approach
                </span>
                We complement your existing accountant and internal team without
                replacing them.
              </div>
            </motion.div>
          </div>

          {/* ---- 4. Service coverage pills ---- */}
          <motion.div
            variants={fadeInUp}
            className="py-8 border-b border-white/10"
          >
            <h3 className="text-advisory-gold font-heading text-xs uppercase tracking-widest font-semibold mb-4">
              Where we work
            </h3>
            <ul className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs text-white/60"
                >
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---- 5. Disclaimer, legal & copyright ---- */}
          <motion.div
            variants={fadeInUp}
            className="pt-8 space-y-6 text-xs text-white/45"
          >
            <p className="leading-relaxed">
              <strong className="font-semibold text-white/65">
                General information only:
              </strong>{" "}
              Rely Advisory Group provides finance operations, process
              improvement and reporting support services. Regulated tax, BAS,
              audit or financial advice services are provided only where
              appropriately authorised or in collaboration with the
              client&apos;s registered practitioner.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Link href="/privacy" className={chipClass}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={chipClass}>
                Website Terms &amp; Disclaimer
              </Link>
              <Link href="/contact" className={chipClass}>
                <Mail className="h-3 w-3 text-advisory-gold" />
                Contact
              </Link>
              <a
                href="https://www.linkedin.com/company/[approved-linkedin-handle]"
                target="_blank"
                rel="noopener noreferrer"
                className={chipClass}
              >
                <Linkedin className="h-3 w-3 text-advisory-gold" />
                LinkedIn
                <span className="text-[10px] text-advisory-gold-light">
                  (placeholder)
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-white/55 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p>
                  © {new Date().getFullYear()} Rely Advisory Group. All rights
                  reserved.
                </p>
                <p className="text-white/35">
                  ABN [ABN pending verification] · Registered in Australia
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-heading text-xs font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-advisory-gold hover:bg-advisory-gold hover:text-rely-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-advisory-gold"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Back to top
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
