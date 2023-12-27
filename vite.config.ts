import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/carolina-ar-vr.github.io/",
  plugins: [vue()],
  resolve: {
    alias: [

    ]
  },
})