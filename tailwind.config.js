const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        th: {
          transparent: 'transparent',
          current: 'currentColor',
          blue: {
            cyan: '#4CD7D0',
          },
          yellow: {
            gold: '#F8D210'
          },
          pink: {
            true: '#FA26A0'
          },
          red: {
            chili: '#F51720'
          }
        }
      },

      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}