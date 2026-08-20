# Rely Advisory Group — Website

A production-grade, conversion-focused website for **Rely Advisory Group**, an Australian boutique finance-operations firm.

---

## Brand & Design System
- **Colors:**
  - `rely-navy`: `#0B1B4D`
  - `advisory-gold`: `#C4A35A`
  - `warm-ivory`: `#F5F2EA`
  - `cloud-grey`: `#F4F6F9`
  - `charcoal`: `#263247`
- **Typography:**
  - Headings: `Montserrat` (600/700)
  - Body: `Inter` (400/500)
- **Aesthetic:** Restrained, architectural, private-bank/boutique advisory.

---

## Tech Stack
- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS with custom brand design tokens
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## Pre-Publication Launch Checklist
Refer to `PLACEHOLDERS.md` and the master content document for items requiring approval before launch:
- [ ] Confirm legal entity name, ABN, and contact details
- [ ] Legal review of `/privacy` and `/terms`
- [ ] Confirm approved founder biography for `/about`
- [ ] Wire form endpoints (`/api/contact`, `/api/book-review`, `/api/health-check`) to your CRM/email provider
