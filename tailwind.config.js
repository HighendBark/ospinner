const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
