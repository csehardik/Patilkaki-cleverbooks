// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right,  #000000, #000000 20%, #3a1030 100%)',
        'pink-btn':'linear-gradient(to right, #4a148c, #4a148c 1%, #f9a8d4 100%)',
      },
      colors:{
        'pink-btn':'linear-gradient(to right, #4a148c, #4a148c 1%, #f9a8d4 100%)',
      },
      fontFamily: {
        'proxima': ['"Proxima Nova"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
