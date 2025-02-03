import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import eslint from 'vite-plugin-eslint2'

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
