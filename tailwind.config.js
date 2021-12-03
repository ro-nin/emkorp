module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      flex:{
        'grow6':'6 1 auto',
        'grow8':'8 1 auto',
        'grow1':'1 1 auto'
      },

      animation: {
        //TODO not optimal to slow down incrementally, find a better way to delay the start without making it start from target position
        'slideInFromRightDefault': 'slideInFromRight .4s ease-in-out 250ms',
        'slideInFromRight0': 'slideInFromRight .4s ease-in-out ',
        'slideInFromRight1': 'slideInFromRight .5s ease-in-out ',
        'slideInFromRight2': 'slideInFromRight .6s ease-in-out ',
        'slideInFromRight3': 'slideInFromRight .7s ease-in-out ',
        'slideInFromRight4': 'slideInFromRight .8s ease-in-out ',
        'slideInFromRight5': 'slideInFromRight .9s ease-in-out ',
        'slideInFromRight6': 'slideInFromRight .10s ease-in-out ',
        'slideInFromRight7': 'slideInFromRight .11s ease-in-out ',
        'slideInFromRight8': 'slideInFromRight .12s ease-in-out ',
        'slideInFromRight9': 'slideInFromRight .13s ease-in-out ',
        'slideInFromRight10': 'slideInFromRight .13s ease-in-out ',
      },

      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(60rem)', },
          '100%': { transform: 'translateX(0)', }
        }
      },

      fontFamily: {
        'mono': ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      fontFamily: {
        'sans':'"M PLUS 1",ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        
      },

      stroke: theme => ({
        'black': theme('colors.black'),
      }),

      strokeWidth: {
        '3': '3',
        '4': '4'
      },

      grayscale: {
        30: '30%',
        50: '50%',
        70: '70%',
        90: '90%',
        95: '95%',
        99: '99%'
      },

      minHeight: {
        '75vh': '75vh',
        'fullscreen': '100vh',
        'sm-button': '43px',
        '10rem': '10rem',
        '20rem': '20rem',
      },

      minWidth: {
        '75vw': '75vw',
        'sm-button': '43px',
        '10rem': '10rem',
        '20rem': '20rem',
      },

      maxWidth: {
        '150px': '150px',
        '10rem': '10rem',
        '20rem': '20rem',
        '75vw': '75vw'
      },

      maxHeight: {
        '150px': '150px',
        '10rem': '10rem',
        '20rem': '20rem',
        '75vh': '75vh'
      },

      blur: {
        xs: '2px',
        xxs: '1px'
      }
    },
  },
  variants: {
    extend: {
      visibility: ['hover'],
      vertical: ['responsive']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
