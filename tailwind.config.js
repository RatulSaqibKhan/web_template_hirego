/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: '425px', // Custom breakpoint for min-width: 425px
      },
      colors: {
        darkSection: {
          DEFAULT: "#1B1B1B"
        },
        heroSection: {
          DEFAULT: "#B1D8FC"
        }
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

