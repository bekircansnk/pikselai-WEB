import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import ServicesHub from './pages/ServicesHub'
import AiProduction from './pages/AiProduction'
import DigitalGrowth from './pages/DigitalGrowth'
import CatalogWeb from './pages/CatalogWeb'
import About from './pages/About'
import References from './pages/References'
import Contact from './pages/Contact'
import CazadorCaseStudy from './pages/blog/CazadorCaseStudy'
import OurWork from './pages/OurWork'
import Islerimiz from './pages/Islerimiz'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import CustomerStories from './pages/CustomerStories'
import EcommerceService from './pages/EcommerceService'
import SocialMediaService from './pages/SocialMediaService'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<ServicesHub />} />
          <Route path="/hizmetler/ai-produksiyon" element={<AiProduction />} />
          <Route path="/hizmetler/e-ticaret" element={<EcommerceService />} />
          <Route path="/hizmetler/sosyal-medya" element={<SocialMediaService />} />
          <Route path="/hizmetler/dijital-buyume" element={<DigitalGrowth />} />
          <Route path="/hizmetler/katalog-web" element={<CatalogWeb />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/referanslar" element={<References />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/ucretler" element={<Pricing />} />
          <Route path="/yapitigimiz-isler" element={<OurWork />} />
          <Route path="/islerimiz" element={<Islerimiz />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/musteri-hikayeleri" element={<CustomerStories />} />
          <Route path="/blog/referanslar" element={<CazadorCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}

export default App
