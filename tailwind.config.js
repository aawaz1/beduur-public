/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#339F9F',
        'custom-skyblue' :"#A0F0F0",
        'custom-lightgray' :"#757783",
        'custom-orange' : '#ED6D4F',
        'custom-gray' : "#768BA0",
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
        'base': '1.5rem',
        'lg': '20px',
        'xl': '24px',
        "md" :"1rem"
        
      },
    },
  },
  plugins: [],
}

