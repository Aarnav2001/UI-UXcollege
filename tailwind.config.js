module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      post: '200px',
      '1/2' : '50%',
      small: '10rem',
      big: '30rem'
    },
    maxHeight: {
      post: '200px',
      small: '10rem',
      big: '30rem'
    },
    fill: {
      red: '#eb1915'
    },
    colors: {
      back: '#eee2dc',
      black: '#000000',
      white: '#ffffff',
      black_hover: '#545352',
      gray: '#d4d4d4',
      red: '#eb1915',
      red_hover: '#a30e0b',
    },
    borderRadius: {
      login: '20px'
    },
    extend: {
      fontFamily: {
        body: ['Arvo', 'serif'],
        title: ['Oswald', 'sans-serif']
      }
    },
  },
  variants: {
    backgroundColor: ['hover','active'],
    extend: {
    }
  },
  plugins: [],
}
