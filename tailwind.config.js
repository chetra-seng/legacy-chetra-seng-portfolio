/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'la-belle-aurore': ['La Belle Aurore', 'serif'],
      'coolvetica': ['Coolvetica', "serif"],
      'sans-serif': ['sans-serif']
    },
    animation: {
      fadeIn: 'fadeIn 1s forwards',
      fadeInBackWards: 'fadeIn 1s 1.7s backwards',
      rotateIn: 'rotateIn 1s linear both'
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
