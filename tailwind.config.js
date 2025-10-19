/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        background:"var(--background)"
      },
    },
  },
  plugins: [],
};
