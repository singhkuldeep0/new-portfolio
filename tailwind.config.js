/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'playfair': ['Playfair Display', 'serif'],
      'roboto-slab': ['Roboto Slab', 'serif'],
      'poppins': ['Poppins', 'serif'],
      'openSans': ['Open Sans', 'serif'],
      'lato': ['Lato', 'serif'],
      'Merriweather': ['Merriweather', 'serif'],
    }
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}