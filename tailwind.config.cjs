/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    backgroundImage : {
      linearImage : "linear-gradient(135deg, #12324E 0%, #070f30 46%, #471735 100%)"
    },
    clipPath : {
      myPolygon : "polygon(0 0, 100% 0, 100% 35%, 0% 100%)"
    }
  },
  plugins: [
    require('tailwind-clip-path')
  ],
  darkMode : 'class',
}
