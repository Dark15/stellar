import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  extract: {
    include: ['./*.html', './src/**/*.{js,jsx,ts,tsx,vue}']
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        light: "url('@/assets/images/bg-light.png')"
      })
    }
  }
})
