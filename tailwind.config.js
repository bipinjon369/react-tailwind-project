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
        'icon-grey': '#EBEBEB66',
        'border-grey': '#E8E8E8',
        'menu-text': '#292D32',
        'selected-menu-text': '#5832E6'
      },
      fontSize: {
        'searchText': ['20px', { lineHeight: '20px', fontWeight: '400' }],
        'user-name': ['18px', { lineHeight: '18px', fontWeight: '400' }],
        'user-role': ['13px', { lineHeight: '13px', fontWeight: '400' }],
        'menu-text': ['18.97px', { lineHeight: '18.97px', fontWeight: '400' }],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        'max-270': { max: '270px' },
      },
    },
  },
  plugins: [],
}

