module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx,html,css}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#04C87A'
        },
        secondary: {
          DEFAULT: '#241e61'
        }
      }
    },
  },
  plugins: [],
}
