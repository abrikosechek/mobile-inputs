/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9A826',
        'primary-light': '#FFB133',
        'alt_color': '#707070',
        'light-grey': '#ADADAD',
        
      },
      fontSize: {
        'sm': ['12px', '15px'],
        'md': ['15px', '18.75px'],
        'lg': ['18px', '22.5px'],
        'xl': ['48px', '60px'],
      }
    },
  },
  plugins: [],
}
