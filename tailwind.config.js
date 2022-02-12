module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        grey: '#F8F8F8',
        pink: '#F9B9DC',
        purples: '#9175DC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}
