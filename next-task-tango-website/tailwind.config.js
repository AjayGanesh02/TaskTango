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
    extend: {
      colors: {
        "lightgreen": "#EDF7DE",
        "mediumgreen": "#C8E79D",
        "darkgreen": "#5EBC67",
        "brown": "#333333"
      },
      fontFamily: {
        sans: [
          "Roboto", "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}
