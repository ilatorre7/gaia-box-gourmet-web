/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaia: '#91B290',
        gaiaSecondary: '#bdc690',
        gaiaTertiary: '#627b53',
        wine: '#3A0842',
      },
      spacing: {
        half: '50vw',
        aHalf: '45vw',
      }
    },
    fontFamily: {
      brandon: ['Brandon Grotesque', 'sans-serif']
    }
  },
  plugins: [],
}
