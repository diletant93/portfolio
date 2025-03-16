import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderSpacing: {
        '1': '0.25rem',
        '2': '0.5rem',
      },
      colors: {
        primary: "rgba(var(--primary))",
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          light: "rgba(var(--secondary-light))",
        },
        grey: "rgba(var(--grey))",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        scrollLeft: {
          '0%':{
            transform:'translate(50%)'
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        scrollRight: {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(50%)",
          },
        },
      },
    },
  },
  plugins: ["tailwind-scrollbar"],
};
