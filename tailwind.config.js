/** @type {import('tailwindcss').Config} */
const tailwind = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   'primary': '#053B50',
    //   'secondary': '#176B87',
    //   'success': '#64CCC5',
    //   'text': '#EEEEEE',
    // },
    // backgroundColor : {
    //   'bg-primary': '#053B50',
    //   'bg-secondary': '#176B87',
    //   'bg-success': '#64CCC5',
    //   'bg-text': '#EEEEEE',
    // }
    screens: {
      xs:'300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}
