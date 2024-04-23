/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#339F9F',
        'custom-orange' : '#ED6D4F'
       
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
      },
      fontSize: {
        'sm': '0.8rem',
        'primary' : "0.6rem",
        'base': '1.5rem', // Change the base font size to 18px
        'lg': '20px',
        'xl': '24px',
        
      },
    },
  },
  plugins: [],
}

