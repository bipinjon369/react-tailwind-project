/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#A7A7A7',
        'search-bar': '#F6F6F6',
        'icon-grey': '#EBEBEB66'
      },
      fontSize: {
        'searchText': ['20px', { lineHeight: '20px', fontWeight: '400' }],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

