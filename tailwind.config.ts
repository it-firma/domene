import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Sans"', "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#2563FF",
          dark: "#1E4FD9",
          light: "#7BA0FF",
        },
        ink: "#071633",
        muted: {
          DEFAULT: "#5D6B85",
          light: "#7B88A1",
        },
        navy: {
          DEFAULT: "#0E1A33",
          deep: "#060E20",
          mid: "#131D3A",
        },
        surface: {
          100: "#F8FBFF",
          200: "#F3F7FF",
          300: "#EEF5FF",
          kb: "#F5F8FD",
        },
        line: {
          DEFAULT: "#E7EEF8",
          strong: "#DDE7F5",
          hover: "#BFD1FF",
        },
      },
      maxWidth: {
        container: "1440px",
        "container-narrow": "1180px",
      },
      boxShadow: {
        card: "0 16px 40px rgba(7,22,51,0.10), 0 4px 12px rgba(7,22,51,0.06)",
        cardLg: "0 30px 70px rgba(7,22,51,0.16), 0 10px 24px rgba(7,22,51,0.06)",
        pill: "0 8px 32px rgba(0,0,0,0.18)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
