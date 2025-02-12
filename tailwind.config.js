/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
