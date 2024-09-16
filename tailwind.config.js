/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#7b47f5',
        'secondary': '#CCC8A4',
        'border': '#213547',
        'light': '#fcf3e8',
      },
    },
  },
  plugins: [require('daisyui')],
}
