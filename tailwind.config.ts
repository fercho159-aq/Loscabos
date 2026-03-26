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
        cream: "#F6EDDB",
        teal: "#006666",
        navy: "#081722",
        acid: "#BDC957",
        blue: "#6687C3",
        brown: "#3A1801",
        orange: "#C47A3D",
        blush: "#E9B0BD",
        periwinkle: "#6687C3",
        lime: "#BDC957",
        rose: "#E9B0BD",
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
