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
      backgroundImage: {
        'RF': '../src/assets/CARVR2D.png',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lgl': '1440px',
      // =>  // => @media (min-width: 1440px) { ... } Large Laptop Size
      
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],

}
