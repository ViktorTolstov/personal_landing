module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#010027',
      // 'secondary': '#6294bb',
      'secondary': '#c77271',
      'white': '#fff',
    },
    fontFamily: {
      roboto: ["Roboto"]
    },
    backgroundImage: theme => ({
      'coverimage': "url('/images/cover.jpg')",
      'coverimagepc': "url('/images/coverpc.jpg')",
      'main': "url('/images/main.jpg')",
    }),
    extend: {
      borderRadius: {
       'mobile': '50% 60px',
      },
      height: {
        'mobile': '100vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
