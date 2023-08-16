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
      backgroundImage: {
        'contact-img': "url('/src/img/img (6).jpg')",
        'sesionesBg-img': "url('/src/img/img (7).jpg')",
        'productBg-img': "url('/src/img/productMockup.jpg')",
        'streetBg-img': "url('/src/img/exteriores (6).jpg')",
        'sesionesPageBg': "url('/src/img/img (2).jpg')",
        'exterioresPageBg': "url('/src/img/portadaExt.jpg')",
        'productosPageBg': "url('/src/img/productMockupMain.jpg')",
      },
      keyframes: {
        animation: {
          '0%':{
              opacity: 0
          },
          '100%': { 
              opacity: 1
          },
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size':'150% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'100% 200%',
              'background-position': 'right center'
          }
        },
      },
      animation: {
        fadeIn: 'animation 1s ease-in-out 1',
        'gradient-x':'gradient-x 15s ease infinite',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
