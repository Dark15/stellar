const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        light: "url('@/assets/images/bg-light.png')"
      }),
      spacing: {
        81: ''
      }
    }
  },
  variants: {
    extend: {}
  }
  // plugins: [
  //   plugin(({ addUtilities }) => {
  //     const newUtilities = {
  //       '.text-shadow': {
  //         textShadow: '0 3px 2px rgba(0,0,0,0.20);'
  //       }
  //     }

  //     addUtilities(newUtilities)
  //   })
  // ]
}
