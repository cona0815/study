import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 設定 base 為 './' 可以讓生成的 index.html 使用相對路徑引用資源
  // 這對於部署到 GitHub Pages 或其他非根目錄環境非常重要
  base: './', 
})