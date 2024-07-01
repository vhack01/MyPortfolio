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
        iconDark: "#2d2e32",
      },
      boxShadowColor: {
        dark: "#121212",
      },
      borderColor: {
        dark: "#3a3a3a",
      },
      textColor: {
        dark: "#2d2e32",
      },
    },
  },
  plugins: [],
};
