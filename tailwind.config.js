module.exports = {
  mode: 'jit',
  purge: ['./*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        light: "url('@/assets/img/bg-light.png')"
      }),
      spacing: {
        81: ''
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
