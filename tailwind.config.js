/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'bela':['Belanosima', 'sans-serif'],
        'bagel':['Bagel Fat One', 'cursive'],
        'dms':['DM Serif Display', 'serif'],
      }
    },
  },
  plugins: [],
}

