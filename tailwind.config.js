/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        'White': 'hsl(0, 0%, 100%)',
        'LightGray':'hsl(212, 45%, 89%)',
        'GrayishBlue': 'hsl(220, 15%, 55%)',
        'Darkblue': 'hsl(218, 44%, 22%)'
      },
      fontSize:{
        body:['Outfit']
      }
    },
  },
  plugins: [],
}
