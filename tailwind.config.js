/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primaryColor: '#4A7081',
        primaryDark: '#384D55',
        secondaryColor: '#DAFC4A',
        whiteL: '#fff',
        black: '#000',
        blogsPage: '#070707',
        cardsGray: '#EAEAEA',
        heroGray: '#989898',
        lightGreen: '#CCFA69',
        mainPageBrown: '#5A5056',
        textBrown: '#483F44',
      },
      fontFamily: {
        body: ['archiaregular'],
      },
      borderRadius: {
        super: '0px 0px 35px 35px',
        help: '0px 0px 0px 130px',
        extraHelp: '0px 35px 0px 0px',
      },
    },
    screens: {
      xs: '576px',

      sm: '768px',

      md: '992px',

      lg: '1200px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
}
