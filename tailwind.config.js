/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  
    "./dist/**/*.{html,js}"  
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003E2C',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      plugins: [
        require('flowbite/plugin')
    ]

    },
  },
  plugins: [],
}
