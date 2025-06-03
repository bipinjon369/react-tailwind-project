/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#A7A7A7',
        'search-bar': '#F6F6F6',
        'search-bar-dark': '#2D2D2D',
        'icon-grey': '#EBEBEB66',
        'icon-grey-dark': '#56565666',
        'border-grey': '#E8E8E8',
        'border-grey-dark': '#242424',
        'selected-menu': '#5832E6',
        'selected-menu-dark': '#2D2D2DDB',
        'menu-text-color': '#292D32',
        'selected-menu-text': '#5832E6',
        'main-color': '#F8FAFB',
        'profit-green': '#23C10A26',
        'loss-red': '#C10A0A26',
        'profit-text-green': '#0B8A00',
        'loss-text-red': '#C71026',
        'graph-grey': '#F2EFFF',
        'graph-purple': '#5832E6',
        'filter-blue': '#1A2B88',
        'table-header-grey': '#949494',
        'dark-mode': '#0D0D0D'
      },
      fontSize: {
        'searchText': ['20px', { lineHeight: '20px', fontWeight: '400' }],
        'user-name': ['18px', { lineHeight: '18px', fontWeight: '400' }],
        'user-role': ['13px', { lineHeight: '13px', fontWeight: '400' }],
        'menu-text': ['18.97px', { lineHeight: '18.97px', fontWeight: '400' }],
        'stat-text': ['16px', { lineHeight: '16px', fontWeight: '400' }],
        'profit-text': ['14px', { lineHeight: '14px', fontWeight: '400' }],
        'graph-h1': ['22.4px', { lineHeight: '22.px', fontWeight: '400' }],
        'table-header': ['20.3px', { lineHeight: '20.3px', fontWeight: '400' }],
        'filter-text': ['12.68px', { lineHeight: '12.68px', fontWeight: '400' }],
        'table-header-text': ['14.5px', { lineHeight: '14.5px', fontWeight: '400' }],
        'pie-header-text': ['20.3px', { lineHeight: '20.3px', fontWeight: '400' }],
        'card-number-text': ['28px', { lineHeight: '28px', fontWeight: '400' }],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        'max-318': { max: '318px' },
      },
    },
  },
  plugins: [],
}

