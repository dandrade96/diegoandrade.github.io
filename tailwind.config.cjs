/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    letterSpacing:{
      'w13': '13%',
    },
    fontFamily: {
      'calibre': ['Calibre\\ 300', 'Calibre\\ 500'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
     },
     extend: {
      colors:{
        'first-blue': '#0A192F',
        'lt':'#64FFDA',
        'blue-lt':'#CCD6F6',
        'blue-ft':'#8892B0',
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
