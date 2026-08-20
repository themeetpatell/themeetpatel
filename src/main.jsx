import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostHogErrorBoundary, PostHogProvider } from '@posthog/react'
import './index.css'
import App from './App.jsx'
import AppCrashFallback from './components/AppCrashFallback.jsx'
import posthog, { initPostHog } from './lib/posthog'

initPostHog()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <PostHogErrorBoundary fallback={<AppCrashFallback />}>
        <App />
      </PostHogErrorBoundary>
    </PostHogProvider>
  </StrictMode>,
)

const loadingScreen = document.getElementById('loading-screen')
if (loadingScreen) {
  requestAnimationFrame(() => {
    loadingScreen.classList.add('is-hidden')
    setTimeout(() => {
      loadingScreen.remove()
    }, 220)
  })
}
