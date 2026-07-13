import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saucy: {
          yellow: "#FFB800",
          orange: "#F97316",
          orangeDeep: "#EA580C",
        },
        char: {
          DEFAULT: "#1A1410",
          light: "#2A211A",
        },
        sauce: "#D62828",
        leaf: "#2F7A3D",
        cream: "#FFF8ED",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        tag: ["var(--font-tag)"],
      },
      boxShadow: {
        sticker: "0 6px 0 rgba(26,20,16,0.9)",
        card: "0 10px 30px -10px rgba(26,20,16,0.25)",
        pop: "0 14px 40px -12px rgba(249,115,22,0.45)",
      },
      backgroundImage: {
        "diagonal-stripe":
          "repeating-linear-gradient(135deg, rgba(26,20,16,0.06) 0px, rgba(26,20,16,0.06) 2px, transparent 2px, transparent 14px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt,0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--tilt,0deg))" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
