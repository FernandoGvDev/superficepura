import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from "vite-plugin-sitemap";
import sitemapConfig from "./sitemap.config";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap(sitemapConfig)
  ]
})
