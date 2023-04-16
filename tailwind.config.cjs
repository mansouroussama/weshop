/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Libre Franklin', 'sans-serif'],
      'serif': ['Libre Baskerville', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}