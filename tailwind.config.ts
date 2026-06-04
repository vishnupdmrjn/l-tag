import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF8F6",
          deep: "#F5F1EC",
        },
        ink: {
          DEFAULT: "#111111",
          soft: "#222222",
          muted: "#6B6760",
        },
        champagne: {
          DEFAULT: "#C7A87A",
          light: "#D9C2A0",
          dark: "#A98B5E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.28em",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease forwards",
        shimmer: "shimmer 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
