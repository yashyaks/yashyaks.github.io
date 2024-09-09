/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',

  ],

  theme: {
    colors:
      {'black': { DEFAULT: '#000000'}, 

      'blue': { DEFAULT: '#474bfc', 100: '#01023f', 200: '#02047f', 300: '#0306be', 400: '#060afb', 500: '#474bfc', 600: '#6a6dfd', 700: '#8f91fd', 800: '#b5b6fe', 900: '#dadafe' }, 
      
      'white': { DEFAULT: '#ffffff'},
      'gray': {DEFAULT: '#1e293b'}
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/hero.jpg')",
      },

    },
    
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Quicksand: ['Quicksand','sans-serif'],
    },

  },
  plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),

  ],
}

