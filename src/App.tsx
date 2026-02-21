import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'

const Home = lazy(() => import('./pages/Home'))
const Pricing = lazy(() => import('./pages/Pricing'))
const ServicesHub = lazy(() => import('./pages/ServicesHub'))
const AiProduction = lazy(() => import('./pages/AiProduction'))
const DigitalGrowth = lazy(() => import('./pages/DigitalGrowth'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const CazadorCaseStudy = lazy(() => import('./pages/blog/CazadorCaseStudy'))
const Islerimiz = lazy(() => import('./pages/Islerimiz'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Blog = lazy(() => import('./pages/Blog'))
const CustomerStories = lazy(() => import('./pages/CustomerStories'))
const EcommerceService = lazy(() => import('./pages/EcommerceService'))
const EticaretYeni = lazy(() => import('./pages/EticaretYeni'))
const SocialMediaCreative = lazy(() => import('./pages/SocialMediaCreative'))
const CreativeDesign = lazy(() => import('./pages/CreativeDesign'))

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-full"></div>
    </div>
  )
}

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

/**
 * Ana Uygulama Bileşeni
 * Tüm rota tanımları ve tema sağlayıcısı burada yapılandırılır.
 */
function App() {
  return (
    <ThemeProvider>
      <ScrollToHash />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<ServicesHub />} />
            <Route path="/hizmetler/ai-produksiyon" element={<AiProduction />} />
            <Route path="/hizmetler/e-ticaret" element={<EcommerceService />} />
            <Route path="/hizmetler/e-ticaret-yeni" element={<EticaretYeni />} />
            <Route path="/hizmetler/sosyal-medya" element={<SocialMediaCreative />} />
            <Route path="/hizmetler/dijital-buyume" element={<DigitalGrowth />} />
            <Route path="/hizmetler/kreatif-tasarim" element={<CreativeDesign />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/ucretler" element={<Pricing />} />
            <Route path="/islerimiz" element={<Islerimiz />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/musteri-hikayeleri" element={<CustomerStories />} />
            <Route path="/blog/referanslar" element={<CazadorCaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </ThemeProvider>
  )
}

export default App
