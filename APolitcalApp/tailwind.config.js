/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sm-md-lg-xl' : 'min-content minmax(500px, 768px)', /* Template Columns for resolutions > w-640px */
      },
      gridTemplateRows: {
        'Content-sm-md-lg-xl' : '80px 1fr',                 /* Content Rows for resolutions > w-640px */
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
      'highlight': '#5F8173'
    }
  },
  plugins: [],
}

