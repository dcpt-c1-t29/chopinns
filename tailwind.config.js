/** @type {import('tailwindcss').Config} */
// module.exports = 
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'ctaColor': '#F54748'
    },
    extend: {
      screens: {
        'ls': '491px',
        'xxxs': '200px',
        'x': '500px',
        'xs': '490px',   // Extra small screens
        'xxs': '360px',  // Extra extra small screens
      }
    },
  },
  plugins: [],
}