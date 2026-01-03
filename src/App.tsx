import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'

/**
 * ScrollToHash - URL hash'ine göre scroll yapar
 * Sayfa geçişlerinde anchor linklerinin çalışmasını sağlar
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Sayfa değiştiğinde
    if (hash) {
      // Hash varsa o elemente scroll yap
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Hash yoksa sayfanın en üstüne scroll yap
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

/**
 * Dijital Çözümler Sunum Uygulaması
 * Ana uygulama bileşeni - Routing ve layout yönetimi
 * ThemeProvider ile tema yönetimi
 */
function App() {
  return (
    <ThemeProvider>
      {/* Hash scroll yönetimi */}
      <ScrollToHash />

      {/* Üst navigasyon barı */}
      <Navigation />

      {/* Sayfa içerikleri */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ucretler" element={<Pricing />} />
        </Routes>
      </main>

      {/* Alt bilgi alanı */}
      <Footer />
    </ThemeProvider>
  )
}

export default App
