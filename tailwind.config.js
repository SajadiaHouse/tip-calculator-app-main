/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "primary-900": ' hsl(183, 100%, 15%)',
      "primary-500": 'hsl(186, 14%, 43%)',
      "primary-300": 'hsl(184, 14%, 56%)',
      "pri-100": 'hsl(185, 41%, 84%)',
      "primary-100": 'hsl(189, 41%, 97%)',
      "primary-200": "hsl(172, 67%, 45%)",
      "white": "#fffff",
      "red" : "#ff0000b3"

    },
    extend: {
      'body': ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}

