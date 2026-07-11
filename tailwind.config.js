/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": {
            transform: "translateX(-150%) skewX(12deg)",
          },

          "100%": {
            transform: "translateX(350%) skewX(12deg)",
          },
        },
      },

      animation: {
        shine: "shine 2.5s linear infinite",
      },
    },
  },

  plugins: [],
};