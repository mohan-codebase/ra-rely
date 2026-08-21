# Placeholders Log — Rely Advisory Group Website

This file catalogs every placeholder currently in the codebase that must be verified or replaced with real client details prior to public production launch.

---

## 1. Contact Details & Business Registration
- [ ] **Email Address:** `hello@[approved-domain].com.au` (Found in `Header.tsx`, `Footer.tsx`, `app/contact/page.tsx`, `app/page.tsx`)
- [ ] **Telephone Number:** `[approved business number]` (Found in `Footer.tsx`, `app/contact/page.tsx`, `app/page.tsx` schema)
- [ ] **Physical Address / Office:** Sydney, NSW (Confirm exact address or specify remote availability)
- [ ] **ABN / Legal Entity Name:** Confirm legal entity name and Australian Business Number (ABN). Rendered in the footer bottom bar as `ABN [ABN pending verification]`.

---

## 2. Founder Profile (`/about`)
- [ ] **Founder Biography:** Professional summary covering background in customer insights, data analysis, executive reporting, finance operations improvement, and Power BI.
- [ ] **Verified Qualifications & Memberships:** Add formal credentials only after verification.
- [ ] **Founder Headshot:** Replace placeholder avatar with a high-resolution, professional portrait.

---

## 3. Legal & Regulatory Documents
- [ ] **Privacy Policy (`/privacy`):**
  - Replace `[insert date]` with actual policy publication/revision date.
  - Replace `[privacy email]` with the designated privacy officer/inbox.
  - Confirm any offshore data hosting or overseas delivery arrangements.
- [ ] **Terms & Service Disclaimer (`/terms`):**
  - Replace `[insert Australian jurisdiction]` with the approved state/territory (e.g. New South Wales).
  - Verify registered tax/BAS practitioner disclaimers.

---

## 4. Footer — Social & Newsletter
- [ ] **LinkedIn Company URL:** `https://www.linkedin.com/company/[approved-linkedin-handle]` (Found in `Footer.tsx`). Currently labelled "(placeholder)" in the UI — remove that label once the real URL is in place, or delete the link entirely if there is no company page.
- [ ] **Newsletter Delivery Endpoint:** The "Finance Operations Notes" signup form in `Footer.tsx` currently prevents submit and stores nothing. Connect it to the approved email platform (or remove the form) before launch, and confirm the consent wording meets the Spam Act 2003 requirements.

---

## 5. Systems & Software Badges
- [ ] Verify software partnerships/badges before display (Xero Partner, MYOB Certified, QuickBooks Online ProAdvisor, Power BI).
