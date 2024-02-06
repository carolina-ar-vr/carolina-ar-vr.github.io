/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'carvr': '#7EBDE5',
        'carvr': '#6EB4E3',
        'carvr-footer': '#343166',
        'purple-fade': '#554688',
        'pink-fade': '#EA3381',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],

}
