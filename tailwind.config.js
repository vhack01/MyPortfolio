/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
        Montagu: "Montagu Slab",
      },
      backgroundColor: {
        backgroundDark: ["#2d2e32", "#121212"],
      },
      boxShadowColor: {
        dark: "#121212",
      },
      borderColor: {
        dark: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
