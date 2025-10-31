/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bg: '#0f1724',
        card: '#0b1220',
        accent: '#6ee7b7'
      }
    }
  },
  plugins: [],
}