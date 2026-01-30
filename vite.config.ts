import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    // 設定 base 為 './' 可以讓生成的 index.html 使用相對路徑引用資源
    // 這對於部署到 GitHub Pages 或其他非根目錄環境非常重要
    base: './', 
    define: {
      // This is critical: allows 'process.env.API_KEY' to work in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})