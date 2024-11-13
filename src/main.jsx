import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)