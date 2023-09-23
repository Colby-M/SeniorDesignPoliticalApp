/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'md-lg-xl' : 'min-content minmax(500px, 768px)' /* Template Columns for resolutions > 768px */
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
      'light-3': '#efefef',
      'light-5': '#e8e8e8',
      'light-7': '#e0e0e0',


      'dark-5': '#353b3c',

      'text-white': '#e8e8e8', /* light-5 */
      'text-dark': '#353b3c',  /* dark-5 */

      'icon-light': '#e8e8e8', /* light-5 */
      'icon-dark': '#353b3c'   /* dark-5 */
    }
  },
  plugins: [],
}

