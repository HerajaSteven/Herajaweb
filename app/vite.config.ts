import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

/*
 * `vite preview` is a local tool now, not a deployment surface.
 *
 * This used to default to ["herajaweb-production.up.railway.app"], from when
 * the site was served by `npm run preview` on Railway. The site is deployed on
 * Vercel as static output, so nothing runs this in production and the Railway
 * hostname was the last reference to an environment that no longer serves it —
 * railway.toml was already removed for the same reason.
 *
 * PREVIEW_ALLOWED_HOSTS is kept because it costs nothing and makes previewing
 * a build behind a tunnel or on another device possible without editing this
 * file. Unset, Vite's own default applies, which permits localhost.
 */
const previewAllowedHostsFromEnv = process.env.PREVIEW_ALLOWED_HOSTS
  ?.split(",")
  .map((host) => host.trim())
  .filter(Boolean)

const previewAllowedHosts =
  previewAllowedHostsFromEnv?.includes("*")
    ? true
    : previewAllowedHostsFromEnv?.length
      ? previewAllowedHostsFromEnv
      : undefined

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
