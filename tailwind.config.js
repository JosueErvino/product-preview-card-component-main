module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        "primary-cyan": "hsl(158, 36%, 37%)",
        "primary-dark-cyan": "hsl(157, 44%, 17%)",
        
        "primary-cream": "hsl(30, 38%, 92%)",
        "dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
