import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Lock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a finance operations review | Rely',
  description:
    'Book a focused conversation about accounts payable, receivables, finance processes, reporting and operational priorities.',
};

export default function BookReviewPage() {
  return (
    <>
            <PageHero
        eyebrow="FREE 30-MINUTE REVIEW"
        title="Identify the next practical improvement in your finance operation"
        description="This focused conversation helps clarify the current pressure points, the business impact and whether Rely is the right fit to assist." align="center"
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Sensitive data warning per content doc */}
        <div className="mb-8 p-4 bg-warm-ivory border-l-4 border-advisory-gold rounded-xs flex items-start gap-3 text-xs text-charcoal">
          <AlertTriangle className="w-5 h-5 text-advisory-gold-dark shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-rely-navy block mb-0.5">Protect sensitive information:</strong>
            Do not submit bank details, tax file numbers, payroll files, passwords or confidential financial records through this form. Secure information-sharing arrangements will be established if an engagement proceeds.
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white border border-cloud-grey-border rounded-xs p-8 shadow-card">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Smith"
                  className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Services Pty Ltd"
                  className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com.au"
                  className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                  Telephone <span className="text-xs text-charcoal-muted font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="0400 000 000"
                  className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                  Number of Employees
                </label>
                <select className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none bg-white">
                  <option value="">Select range...</option>
                  <option value="1-10">1 – 10 employees</option>
                  <option value="11-50">11 – 50 employees</option>
                  <option value="51-200">51 – 200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                  Primary Accounting System
                </label>
                <select className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none bg-white">
                  <option value="">Select system...</option>
                  <option value="Xero">Xero</option>
                  <option value="MYOB">MYOB</option>
                  <option value="QuickBooks">QuickBooks Online</option>
                  <option value="Other">Other / Spreadsheets</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                Primary Area of Interest
              </label>
              <select className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none bg-white">
                <option value="ap">Accounts Payable Support</option>
                <option value="ar">Accounts Receivable & Cash Flow</option>
                <option value="process">Finance Process Improvement</option>
                <option value="reporting">Management Reporting & Dashboards</option>
                <option value="accountant">Accountant Practice Partnership</option>
                <option value="integrated">Full Finance Operations Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-rely-navy mb-2">
                Primary Challenge or Objective
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you are looking to streamline or improve..."
                className="w-full px-4 py-2.5 text-sm rounded-xs border border-cloud-grey-border focus:border-advisory-gold focus:ring-1 focus:ring-advisory-gold outline-none"
              />
            </div>

            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 rounded-xs text-rely-navy focus:ring-advisory-gold"
              />
              <label htmlFor="consent" className="text-xs text-charcoal-muted leading-relaxed">
                I understand that submitting this enquiry does not create a client relationship and confirm no confidential bank passwords, TFNs, or sensitive financial documents are attached.
              </label>
            </div>

            <Button type="button" variant="primary" size="lg" className="w-full justify-center">
              Book My Free Review
            </Button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}