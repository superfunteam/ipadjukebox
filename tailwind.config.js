import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#00ff00',
      }
    },
  },
})