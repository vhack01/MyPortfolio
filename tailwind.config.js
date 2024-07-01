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
        headerBg: "#6e6e6e4f",
        iconDark: "#2d2e32",
        skillBg: "#5c5c5c",
      },
      boxShadow: {
        iconShadow: "1px 1px 16px #353232",
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
