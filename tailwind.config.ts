import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#7A123E",
          gold: "#E61E73",
          soft: "#FFF6FA",
          ink: "#2D1323"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"]
      },
      boxShadow: {
        luxury: "0 20px 50px rgba(122, 18, 62, 0.16)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(230, 30, 115, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(122, 18, 62, 0.12), transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
