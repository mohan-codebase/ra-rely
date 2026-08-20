# AI Build Prompt — Rely Advisory Group Website (Production-Grade)

Use this as a single system/task prompt for an AI coding tool (Claude Code, Cursor, v0, Lovable, etc.) to build the full production website. Paste it as-is, then attach `Rely_Advisory_Group_Website_Content.md` as the content source.

---

## ROLE

You are a senior frontend engineer and UI designer building a **production-grade marketing website** for **Rely Advisory Group**, an Australian finance-operations outsourcing firm. The client is premium, trustworthy, and B2B — think "boutique advisory firm," not "generic SaaS." Every visual and interaction decision should reinforce **restraint, precision, and dependability**. Nothing templated, nothing generic, no stock-SaaS gradients-and-blobs aesthetic.

---

## TECH STACK

- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS with a custom design-token config (no default Tailwind palette in production UI)
- **Animation:** Framer Motion — subtle only (fades, slide-ups on scroll, no bounce/elastic easing)
- **Forms:** React Hook Form + Zod validation; wire submit handlers to a placeholder API route (`/api/contact`, `/api/book-review`, `/api/health-check`) that can later be swapped for a real CRM/email integration
- **Icons:** Lucide React only — no emoji, no mismatched icon sets
- **Fonts:** Load via `next/font` — heading font: Montserrat (or a comparable geometric sans if the client's actual brand font isn't licensed); body font: Inter
- **Images:** `next/image`, lazy-loaded, with meaningful `alt` text per the content doc
- **Deployment target:** Vercel-compatible, fully static where possible (SSG for content pages, no unnecessary client components)
- **Accessibility:** WCAG 2.1 AA minimum — this is a non-negotiable requirement, not a nice-to-have

---

## DESIGN SYSTEM (from brand brief — implement as Tailwind theme tokens)

```
colors:
  rely-navy:    #0B1B4D   // headings, nav, buttons, footer
  advisory-gold:#C4A35A   // highlights, rules, icons, accent headings
  warm-ivory:   #F5F2EA   // section backgrounds, premium callouts
  cloud-grey:   #F4F6F9   // cards, forms, supporting sections
  charcoal:     #263247   // body copy

fonts:
  heading: Montserrat (geometric sans, semi-bold/bold weights only)
  body: Inter (400/500)

buttons:
  primary:   bg-rely-navy text-white, hover → gold outline or gold background w/ navy text (pick one, be consistent)
  secondary: outline navy, hover → filled navy
  radius:    small/sharp (2–4px) — NOT pill-shaped. Pill buttons read as generic SaaS; this brand is architectural and restrained.

spacing/layout:
  - Generous white space; section vertical padding 96–140px desktop, 56–72px mobile
  - Max content width ~1200–1280px, centered
  - Short content blocks, not walls of text
  - Fine 1px gold rules used sparingly as section dividers or under eyebrow labels — do not overuse
```

**Explicitly avoid:** rounded pill buttons, purple/blue SaaS gradients, emoji icons, stock "handshake/calculator/piggy bank" imagery, glassmorphism, neumorphism, generic Bootstrap-card shadows. This is a **navy + gold + ivory, editorial, private-bank-adjacent** aesthetic — closer to a boutique law/advisory firm than a tech startup.

**Photography direction:** real Australian business environments, professional workspaces, finance discussions, dashboard use on screens. If using placeholder imagery, use neutral abstract/geometric placeholders (e.g., subtle navy/gold line-art or a solid-color block with a label) rather than generic stock-photo placeholders — flag clearly as `[PLACEHOLDER IMAGE — replace with licensed photography]`.

---

## SOURCE OF TRUTH

All page copy, SEO metadata, CTAs, form fields, and content structure must be pulled **verbatim** from `Rely_Advisory_Group_Website_Content.md`. Do not invent, embellish, or omit copy. Where the content doc marks something as a placeholder (founder bio, contact details, legal clauses), render it as a clearly marked placeholder in code — do not fabricate real-sounding business details (ABN, phone numbers, addresses, staff names, testimonials, client logos).

---

## SITE STRUCTURE (build in this order — minimum viable launch first)

1. **Global layout** — header (logo + nav + CTA button), footer (nav repeat, trust statement, legal links, contact placeholder), consistent section container components
2. `/` — Home
3. `/solutions` — Solutions hub
4. `/solutions/accounts-payable`
5. `/solutions/accounts-receivable`
6. `/solutions/process-improvement`
7. `/solutions/reporting-insights`
8. `/how-we-work`
9. `/for-accountants`
10. `/about`
11. `/book-a-review`
12. `/contact`
13. `/privacy`
14. `/terms`
15. `/faq`

**Phase 2 (build scaffolding but stub content):**
16. `/industries`
17. `/insights` (hub) + one sample article template page
18. `/finance-health-check` (interactive assessment)

---

## COMPONENT LIBRARY TO BUILD

Build these as **reusable components**, not one-off page markup:

- `<Header />` — sticky, transparent-to-solid on scroll, mobile hamburger with full-screen nav overlay
- `<Footer />`
- `<Hero />` — eyebrow label + headline + subhead + primary/secondary CTA, variant for image vs. no-image
- `<TrustStrip />` — the "Australian oversight | Flexible support | Secure processes | Actionable insights" divider bar
- `<ProblemGrid />` — 2x2 (or 4-across responsive) card grid for pain-point sections
- `<ServiceCard />` — icon/title/description card used across Solutions, AP, AR, Process, Reporting pages
- `<StepFlow />` — numbered process steps (Understand → Stabilise → Improve → Support; Discover → Design → Transition → Deliver)
- `<CalloutBanner />` — the gold-accented pull-quote blocks ("The promise," "Not sure where to begin?", "Data → Insight → Recommendation," etc.)
- `<CTASection />` — full-width closing CTA with button + supporting microcopy
- `<ComparisonTable />` — for partnership models / engagement options (2–3 column card comparison, not a dense data table)
- `<AccordionFAQ />` — accessible (keyboard nav, `aria-expanded`) accordion for the FAQ page
- `<LeadForm />` — configurable form component driving both Book-a-Review and Contact forms, field set passed as props per the content doc's field tables
- `<HealthCheckQuiz />` — client component: 10-question single-select flow with progress indicator, ending in one of the three result bands
- `<Breadcrumbs />` — for solution sub-pages

---

## SEO / METADATA REQUIREMENTS

- Use Next.js `generateMetadata` per page with the **exact** SEO title and meta description from the content doc — do not paraphrase
- Add canonical URLs matching the "Suggested URL" column
- Implement Open Graph + Twitter card tags (title/description from same source, image placeholder)
- Add `JSON-LD` structured data: `ProfessionalService` schema on the homepage, `FAQPage` schema on `/faq`, `BreadcrumbList` on solution sub-pages
- Generate `sitemap.xml` and `robots.txt` (exclude the internal-only "Design system" and "Website Launch and Content Governance" pages from the sitemap — these are not public routes)
- Semantic HTML: one `<h1>` per page matching the page headline, proper heading hierarchy, `<nav>`, `<main>`, `<footer>` landmarks

---

## FORMS — FUNCTIONAL SPEC

Build three forms exactly matching the field tables in the content doc:

1. **Book a Review** (`/book-a-review`) — Full name, Business name, Work email, Telephone (optional), Number of employees (dropdown), Accounting system (Xero/MYOB/QuickBooks/Other), Area of interest (AP/AR/Process/Reporting/Accountant partnership), Primary challenge (textarea), Privacy consent (required checkbox)
2. **General Enquiry** (`/contact`) — Name, Business, Email, Telephone, Enquiry type, Message, Privacy consent
3. **Health Check** (`/finance-health-check`) — 10 single-select questions (Always/Usually/Sometimes/Rarely/Not sure), scored client-side into one of three result bands, then gate the full result behind an email-capture step (name + email) before showing detailed recommendations

**Requirements for all forms:**
- Client + server-side validation (Zod schema shared between client and API route)
- Accessible labels, error states with `aria-describedby`, focus management on error
- Success/error states with clear messaging (no silent failures)
- Never allow submission of file uploads or free-text fields that invite sensitive data — reinforce the "do not submit bank details / TFNs / passwords" warning shown in the content doc directly above the Book-a-Review form
- Rate-limit or honeypot spam protection on the API route

---

## INTERACTIVE ELEMENTS

- **Health Check quiz:** progress bar, one question per screen or a scrollable single-page with a live progress indicator, animated result reveal, result band styled distinctly per severity (Strong foundation = calm/gold accent; Functional but vulnerable = neutral; Immediate attention = navy emphasis with stronger CTA) — no alarming red/warning colors, keep it in the brand palette
- **Solution page cross-links:** every solution sub-page should deep-link back to `/solutions` and forward to `/book-a-review`
- **Scroll-triggered reveal animations** on section entry (Framer Motion `whileInView`, one-time trigger, respects `prefers-reduced-motion`)

---

## LEGAL / CONTENT GOVERNANCE HANDLING

- `/privacy` and `/terms` must render the placeholder date and bracketed fields (`[insert date]`, `[privacy email]`, jurisdiction clause) **visibly as placeholders** in a distinct style (e.g., highlighted background) so no one accidentally ships unreviewed legal text as final
- Do not add a cookie-consent banner implementation beyond a structural placeholder — the content doc notes final analytics tools are TBD
- Founder bio on `/about` renders as a clearly marked placeholder block, not fabricated content

---

## PERFORMANCE & QUALITY BAR

- Lighthouse targets: **95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO** on the homepage
- All images optimized/responsive via `next/image`
- No layout shift from web fonts (use `font-display: swap` + size-adjust or next/font's built-in handling)
- Fully responsive: mobile (375px), tablet (768px), desktop (1280px+) — test all breakpoints, especially the multi-column card grids collapsing to single-column on mobile
- Dark mode: **not required** — this brand is a fixed light, ivory/navy palette by design

---

## DELIVERABLE

1. Full Next.js project source
2. A short `README.md` covering: how to run locally, environment variables needed for form submission, and a **pre-launch checklist** copied from the content doc's "Pre-publication approvals" and "Minimum viable launch" sections
3. Flag every placeholder (legal text, founder bio, contact details, imagery) in a single `PLACEHOLDERS.md` file so the client can find and resolve every open item before going live

---

## WHAT "DONE" LOOKS LIKE

A reviewer should be able to click through all 15 launch pages, submit both forms and see validation/success states, complete the health check and get a scored result, and — visually — mistake this for a firm that has been operating for a decade, not a brand-new site. If any page reads as a generic SaaS template with the copy swapped in, it has failed the brief.
