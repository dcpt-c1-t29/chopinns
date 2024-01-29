/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

// module.exports = 
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primaryColor1': '#FEF6F6',
      'primaryColor2': '#E0BFBF',
      'primaryColor3': '#FB6236',
      'primaryColor4': '#F54748',
      'primaryColor5': '#E35242',
      'complementaryColor1': '#FDC55E',
      'complementaryColor2': '#FDC55E',
      'neutrals1': '#FFFFFF',
      'neutrals2': '#F8F8F8',
      'neutrals3': '#C4C4C4',
      'neutrals4': '#DBDADA',
      'neutrals5': '#BBB9B9',
      'neutrals6': '#777373',
      'neutrals7': '#6A6868',
      'neutrals8': '#484646',
      'neutrals9': '#332C2C',
      'neutrals0': '#1C1515',
      'auxiliaryColor': '#F2C94C'
    },
    fontSize: {
      'head': ['20px', {
        lineHeight: '30px',
        // fontWeight: '900',
      }],
      'body': ['16px', {
        lineHeight: '20px',
        fontWeight: '400',
      }],
      'sbody': ['14px', {
        lineHeight: '18px',
        fontWeight: '400',
      }],
      'xsmall': ['12px', {
        lineHeight: '16px',
        fontWeight: '400',
      }],
      'l': '18px',
      'xl': ['48px', {
        lineHeight: '1.3',
        fontWeight: '900',
      }]
    },
    extend: {
      lineHeight: {
        '1': '16px',
        '2': '18px',
        '3': '20px',
        '4': '30px'
      }
      // screens: {
      //   'ls': '491px',
      //   'xxxs': '200px',
      //   'x': '500px',
      //   'xs': '490px',   // Extra small screens
      //   'xxs': '360px',  // Extra extra small screens
      // }
    },
  },
  plugins: [],
}