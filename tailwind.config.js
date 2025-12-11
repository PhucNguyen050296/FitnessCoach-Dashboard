/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
            brand: {
              50: '#eef2ff',
              100: '#e0e7ff',
              500: '#4f46e5',
              700: '#3730a3'
            },
            dark: {
              900: '#0b1220',
              800: '#0f1724'
            }
          },
          fontFamily: {
            inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
          }
    },
  },
  plugins: [],
}

