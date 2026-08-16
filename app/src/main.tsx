import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { initAnalytics } from './lib/analytics'
import './index.css'

/*
 * Before render, so the first pageview is recorded. No-ops entirely unless
 * both Umami variables are set — see src/lib/analytics.ts for why it is off
 * by default rather than opt-out.
 */
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
