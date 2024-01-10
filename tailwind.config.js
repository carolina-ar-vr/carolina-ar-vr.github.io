/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'carvr': '#7EBDE5',
        'carvr-nav': '#99c9ea'
      },
    },
  },
  plugins: [],

}
