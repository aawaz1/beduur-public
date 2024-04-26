/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#339F9F',
        'custom-orange' : '#ED6D4F',
        "custom-green" : "#008196",
        "custom-black" : "#36474F",
        "whitesmoke": "#f6f6f6",
        "custom-skyblue" :"#B4DBDB"
       
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
      
      fontSize: {
        'sm': '0.8rem',
        'primary' : "0.6rem",
        'base': '1.5rem', // Change the base font size to 18px
        'lg': '20px',
        'xl': '24px',
        "md" :"1rem"
        
      },
    },
  },
  plugins: [],
}

