import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['./src/components'],
      extensions: ['vue', 'tsx'],
      deep: true,
      dts: './src/components.d.ts'
    }),
    AutoImport({
      dts: './src/auto-import.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/ // .vue
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router'
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: resolve(process.cwd(), '.', 'src') + '/'
      }
    ]
  }
})
