import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// CAZADOR Galeri Sunum Uygulaması
// React DOM render işlemi
// HashRouter kullanılıyor - tüm hosting firmalarında sorunsuz çalışır
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

