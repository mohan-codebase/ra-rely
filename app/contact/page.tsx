import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Rely Advisory Group',
  description:
    'Contact Rely Advisory Group about finance operations support, reporting, process improvement or accountant partnerships.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT RELY"
        title="Let's discuss what is slowing your finance operation down"
        description="Tell us briefly what you are trying to improve. We will respond with the most appropriate next step."
      />

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-warm-ivory p-6 rounded-2xl border border-advisory-gold/40 space-y-4">
              <h3 className="font-heading font-bold text-lg text-rely-navy">Direct Contact</h3>
              
              <div className="space-y-3 text-sm text-charcoal">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-advisory-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-rely-navy">Email</div>
                    <span className="font-mono text-xs">hello@[approved-domain].com.au</span>
                    <span className="text-[10px] bg-advisory-gold/20 text-rely-navy px-1.5 py-0.5 rounded ml-2">Placeholder</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-advisory-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-rely-navy">Location</div>
                    <span>Sydney, NSW. Services available remotely across Australia.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-advisory-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-rely-navy">Business Hours</div>
                    <span>Monday to Friday, 9:00 AM – 5:00 PM AEST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cloud-grey rounded-2xl border border-cloud-grey-border text-xs text-charcoal-muted">
              <ShieldCheck className="w-4 h-4 text-rely-navy mb-1" />
              <strong>Confidentiality Notice:</strong> General enquiries do not require financial statements. We establish secure sharing links for active engagements.
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-cloud-grey-border shadow-subtle">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase text-rely-navy mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-2.5 text-sm rounded-full border border-cloud-grey-border focus:border-advisory-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase text-rely-navy mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-2.5 text-sm rounded-full border border-cloud-grey-border focus:border-advisory-gold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase text-rely-navy mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-2.5 text-sm rounded-full border border-cloud-grey-border focus:border-advisory-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase text-rely-navy mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-2.5 text-sm rounded-full border border-cloud-grey-border focus:border-advisory-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold uppercase text-rely-navy mb-1">
                  Enquiry Type
                </label>
                <select className="w-full px-5 py-2.5 text-sm rounded-full border border-cloud-grey-border focus:border-advisory-gold outline-none bg-white">
                  <option>General enquiry</option>
                  <option>Accounts Payable enquiry</option>
                  <option>Accounts Receivable enquiry</option>
                  <option>Process Improvement review</option>
                  <option>Reporting & Dashboards</option>
                  <option>Accountant partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold uppercase text-rely-navy mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you?"
                  className="w-full px-5 py-3.5 text-sm rounded-2xl border border-cloud-grey-border focus:border-advisory-gold outline-none resize-y"
                />
              </div>

              <Button type="button" variant="primary" size="md" className="w-full justify-center">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
