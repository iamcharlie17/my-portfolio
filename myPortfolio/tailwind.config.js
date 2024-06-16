/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'kaushan': ['Kaushan Script', 'cursive', 'helvetica', 'sans-serif'],
      'poppins':["Poppins", 'sans-serif'],
      'pacifico': ["Pacifico", 'cursive']
    },
  },
  plugins: [require('daisyui'),],
}

