/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  
    "./dist/**/*.{html,js}"  
  ],
  theme: {
    extend: {
      colors: {
        navyblue: '#223B58',
        primary: '#3E7FB9',
      },
      fontFamily: {
        'cs-canela': ['CS Canela', 'sans-serif'],
        'general-sans': ['General Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      plugins: [
        require('flowbite/plugin')
    ]

    },
  },
  plugins: [],
}
