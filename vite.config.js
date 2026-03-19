import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 這裡的名稱請改成你的 GitHub 倉庫 (Repository) 名稱
  // 例如你的 Repo 叫 my-itinerary，這裡就填 '/my-itinerary/'
  base: '/f1-travel-schedule', 
})
