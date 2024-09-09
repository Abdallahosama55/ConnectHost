module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },

      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // Adjusted to match #00000040
      },
    },
  },
  plugins: [],
}
