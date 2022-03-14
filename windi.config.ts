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
  },
  shortcuts: {
    'post-tag':
      'min-w-7rem h-2.1rem mr-1rem leading-1.7rem text-center rounded-0.5rem backdrop-filter backdrop-blur-10px bg-white bg-opacity-[0.5] backdrop-brightness-[1.15] text-1.2rem cursor-pointer select-none flex justify-center items-center'
  }
})
