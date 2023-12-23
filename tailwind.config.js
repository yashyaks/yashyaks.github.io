/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',

  ],

  theme: {
    colors:
      {'black': { DEFAULT: '#1d1d20', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' }, 

      'risd_blue': { DEFAULT: '#474bfc', 100: '#01023f', 200: '#02047f', 300: '#0306be', 400: '#060afb', 500: '#474bfc', 600: '#6a6dfd', 700: '#8f91fd', 800: '#b5b6fe', 900: '#dadafe' }, 
      
      'white': { DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff' } 
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/hero.jpg')",
      },

    },
    
    fontFamily: {
      Alice: ['Alice', 'serif'],
      Kalnia: ['Kalnia', 'serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Quicksand: ['Quicksand','sans-serif'],
    },

  },
  plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),

  ],
}

