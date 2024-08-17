/** @type {import('tailwindcss').Config} */
const neoretroUI = require('neo-retro-ui')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [neoretroUI],
}
