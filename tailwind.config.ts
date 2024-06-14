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
        primary: "hsla(230, 35%, 7%)",
        secondary: "hsla(231, 77%, 90%)",
      },
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "28px",
      xl: "32px",
      "2xl": "56px",
      "3xl": "100px",
      "4xl": "144px",
    },
    fontFamily: {
      barlow: "'Barlow', sans-serif",
      bellefair: "'Bellefair', serif",
      "barlow-condensed": "'Barlow Condensed', sans-serif",
    },
    animation: {
      "show-btn-padding": "show-btn-padding 0.3s ease-in-out forwards",
      "slide-in-right": "slide-in-right 0.3s ease-in-out forwards",
      "slide-out-right": "slide-out-right 0.3s ease-in-out forwards",
    },
  },
  plugins: [],
};
export default config;
