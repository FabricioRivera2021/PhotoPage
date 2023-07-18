/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: 
  [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        "screen-1/2": "50vh",
      },
      spacing: {
        16: "4rem",
      },
      fontFamily: {
          'display': ['Oswald'],
          'body': ['"Open Sans"'],
          'cursive': ['"Italianno"']
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
