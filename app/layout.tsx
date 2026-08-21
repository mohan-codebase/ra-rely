import type { Metadata } from "next";
import { Montserrat, Inter, Geist } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://relyadvisory.com.au"),
  title: {
    default: "Finance operations and advisory support | Rely Advisory Group",
    template: "%s | Rely Advisory Group",
  },
  description:
    "Improve accounts payable, receivables, finance processes and reporting with practical support for growing Australian businesses.",
  keywords: [
    "finance operations",
    "outsourced accounts payable",
    "accounts receivable support",
    "management reporting",
    "finance process improvement",
    "Power BI dashboards",
    "Australian SME finance",
  ],
  authors: [{ name: "Rely Advisory Group" }],
  creator: "Rely Advisory Group",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://relyadvisory.com.au",
    siteName: "Rely Advisory Group",
    title: "Finance operations and advisory support | Rely Advisory Group",
    description:
      "Improve accounts payable, receivables, finance processes and reporting with practical support for growing Australian businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance operations and advisory support | Rely Advisory Group",
    description:
      "Improve accounts payable, receivables, finance processes and reporting with practical support for growing Australian businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={cn(montserrat.variable, inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col bg-white text-charcoal antialiased selection:bg-rely-navy selection:text-warm-ivory">
        {/* Lenis smooth scrolling, wired into GSAP ScrollTrigger */}
        <SmoothScrollProvider />

        {/* Branded Preloader — shows on first session visit */}
        <Preloader />

        {/* Gold scroll progress rail + back-to-top pill */}
        <ScrollProgress />

        {/* WCAG 2.1 AA Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-rely-navy focus:text-white focus:outline-none focus:ring-2 focus:ring-advisory-gold rounded-full shadow-lg font-medium text-sm"
        >
          Skip to main content
        </a>

        {/* Global Floating Navigation Header */}
        <Nav />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
