/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        cyber: {
          green: "#00ff88",
          cyan: "#00d4ff",
          pink: "#ff0080",
          yellow: "#ffd700",
          dark: "#050505",
          card: "rgba(255, 255, 255, 0.02)",
        },
      },
    },
  },
  plugins: [],
};
