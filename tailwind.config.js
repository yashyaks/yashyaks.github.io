/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',

  ],

  theme: {
    colors:
      {
      'background':{DEFAULT: '#09090b', light: '#18181a', nav: '#141416'},
      'black': { DEFAULT: '#000000'}, 
      'blue': { DEFAULT: '#2563eb'}, 
      'white': { DEFAULT: '#ffffff', light: '#969696'},
      'gray': {DEFAULT: '#1e293b', }
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/hero.jpg')",
      },

    },
    
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },

  },
  plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),
        require('@tailwindcss/typography'),

  ],
}

