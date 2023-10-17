/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sm-md-lg-xl' : 'min-content minmax(434px, 967px)', /* Template Columns for resolutions > w-640px */
        'mobile'      : 'minmax(434px, 639px)',             /* Template Columns for resolutions < w-640px */
        'landing'     : '1fr 1fr'                           /* Template Columns for landing page          */
      },
      gridTemplateRows: {
        'sm-md-lg-xl' : '80px 1fr',                 /* Content Rows for resolutions > w-640px */
        'mobile'      : '80px 1fr 80px'             /* Content Rows for resolutions < w-640px */
      },
      maxHeight: {
        '112' : '28rem', /* 440px */
      },
      width: {
        '46' : '11.5rem',  /* 184px */
        '50' : '12.5rem',  /* 200px */
        '51' : '12.75rem', /* 204px */
        '52' : '13rem',    /* 208px */
        '53' : '13.25rem', /* 212px */
      },
      height: {
        '30' : '7.5rem',
        '46' : '11.5rem',  /* 184px */
        '50' : '12.5rem',  /* 200px */
        '51' : '12.75rem', /* 204px */
        '52' : '13rem',    /* 208px */
        '53' : '13.25rem', /* 212px */        
      }
    },
    colors: {
      transparent: 'transparent',
      /* 
        Colors are on a scale of 1 - 9:
          - lower than 5 is brighter
          - 5 is the base color
          - higher than 5 is darker
      */
      'light': '#f1f5f9',
      'dark': '#353b3c',
      'highlight': '#5F8173',
      'border': '#aeb1b1'
    }
  },
  plugins: [],
}

