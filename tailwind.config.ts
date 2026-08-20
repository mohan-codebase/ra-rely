import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rely: {
          navy: "#0B1B4D",
          "navy-light": "#132766",
          "navy-dark": "#071233",
        },
        advisory: {
          gold: "#C4A35A",
          "gold-light": "#D8BD7E",
          "gold-dark": "#A6863D",
        },
        warm: {
          ivory: "#F5F2EA",
          "ivory-light": "#FAF8F3",
          "ivory-dark": "#ECE7DA",
        },
        cloud: {
          grey: "#F4F6F9",
          "grey-light": "#FAFBFC",
          "grey-border": "#E2E7F0",
        },
        charcoal: {
          DEFAULT: "#263247",
          muted: "#4A5568",
          light: "#718096",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "3px",
        DEFAULT: "4px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        "2xl": "12px",
        "3xl": "16px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(11, 27, 77, 0.05), 0 1px 2px 0 rgba(11, 27, 77, 0.03)",
        card: "0 4px 12px 0 rgba(11, 27, 77, 0.05)",
        "card-hover": "0 8px 24px 0 rgba(11, 27, 77, 0.09)",
        premium: "0 12px 32px 0 rgba(11, 27, 77, 0.08)",
        "float": "0 8px 32px 0 rgba(11, 27, 77, 0.12), 0 2px 8px 0 rgba(11, 27, 77, 0.06)",
        "float-lg": "0 16px 48px 0 rgba(11, 27, 77, 0.14), 0 4px 12px 0 rgba(11, 27, 77, 0.08)",
        "glow-gold": "0 0 20px 0 rgba(196, 163, 90, 0.15)",
        "inner-soft": "inset 0 2px 4px 0 rgba(11, 27, 77, 0.04)",
      },
      maxWidth: {
        container: "1240px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "draw-line": "drawLine 1s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "counter": "counter 2s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
