import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/html-css-training/",
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => ['plate','bento','apple','orange','pickle','sushi', 'toast'].includes(tag)
      }
    }
  })]
})
