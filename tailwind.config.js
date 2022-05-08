module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'cookie': 'cookie',
      'istok': 'Istok Web'
    },
    extend: {
      colors: {
        'gray.2': '#B3B3B3',
        'dourado': '#E2E7AF'
      },
      height: {
        '7.2/8': '90%',
        '0.8/8': '10%'
      },
      backgroundImage: {
        'background': "url('/background.svg')",
      }
    },
  },
  plugins: [],
}
