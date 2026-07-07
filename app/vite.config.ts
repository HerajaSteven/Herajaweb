import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const previewAllowedHostsFromEnv = process.env.PREVIEW_ALLOWED_HOSTS
  ?.split(",")
  .map((host) => host.trim())
  .filter(Boolean)

const previewAllowedHosts =
  previewAllowedHostsFromEnv?.includes("*")
    ? true
    : (previewAllowedHostsFromEnv?.length
      ? previewAllowedHostsFromEnv
      : ["herajaweb-production.up.railway.app"])

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    allowedHosts: previewAllowedHosts,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
