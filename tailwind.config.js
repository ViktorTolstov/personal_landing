module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#010027',
      // 'secondary': '#6294bb',
      'secondary': '#004c5c',
      'white': '#fff',
      'black': '#000',
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
      gridTemplateColumns: {
        '5': 'repeat(5, minmax(0, 1fr))',
      },
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
