/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'sf-white': '#ffffff',
      'sf-black': '#000000',
      'sf-gray': '#c9c9c9',
    },
    fontFamily: {
      'sans': ['Waldenburg', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

