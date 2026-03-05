import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE3",
        navy: "#0D1520",
        acid: "#C8D42C",
        blue: "#4A7FBF",
        forest: "#173119",
        coral: "#E8523D",
        blush: "#E9B0BD",
        periwinkle: "#6687C3",
        lime: "#BDC957",
        tangerine: "#F4A061",
        magenta: "#960942",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        "barlow-condensed": ["var(--font-barlow-condensed)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
