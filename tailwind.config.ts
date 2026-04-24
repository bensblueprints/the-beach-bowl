import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        acai: {
          50: "#f6f2fb",
          100: "#ece1f5",
          300: "#b695d9",
          500: "#6b3fa0",
          700: "#472470",
          900: "#2a1346",
        },
        coral: {
          300: "#ffb4a2",
          500: "#ff6f61",
          700: "#d64537",
        },
        seafoam: {
          300: "#a8e6d2",
          500: "#4fc3a1",
          700: "#2a8f72",
        },
        sand: {
          50: "#fdf9f2",
          100: "#f8f0e0",
          300: "#eddcbb",
          500: "#d9b98a",
        },
        ink: "#1a1625",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
