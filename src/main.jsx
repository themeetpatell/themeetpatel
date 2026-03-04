import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
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
