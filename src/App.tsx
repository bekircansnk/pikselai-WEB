import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'

const Pricing = lazy(() => import('./pages/Pricing'))

const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const CazadorCaseStudy = lazy(() => import('./pages/musteri-hikayeleri/CazadorCaseStudy'))
const Islerimiz = lazy(() => import('./pages/Islerimiz'))
const NotFound = lazy(() => import('./pages/NotFound'))
const MusteriHikayeleri = lazy(() => import('./pages/MusteriHikayeleri'))
const Blog = lazy(() => import('./pages/Blog'))
const EticaretYeni = lazy(() => import('./pages/EticaretYeni'))
const SosyalMedyaYeni = lazy(() => import('./pages/SosyalMedyaYeni'))
const AiProductionYeni = lazy(() => import('./pages/AiProductionYeni'))
const HomeYeni = lazy(() => import('./pages/HomeYeni'))
const CreativeDesign = lazy(() => import('./pages/CreativeDesign'))
const CostCalculator = lazy(() => import('./pages/CostCalculator'))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'))
const KvkkPolicy = lazy(() => import('./pages/legal/KvkkPolicy'))

const TestPanel = lazy(() => import('./pages/TestPanel'))


const MinaDrinksCaseStudy = lazy(() => import('./pages/musteri-hikayeleri/MinaDrinksCaseStudy'))
const VenusCaseStudy = lazy(() => import('./pages/musteri-hikayeleri/VenusCaseStudy'))
const CampAndMapCaseStudy = lazy(() => import('./pages/musteri-hikayeleri/CampAndMapCaseStudy'))

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
            <Route path="/" element={<HomeYeni />} />

            <Route path="/hizmetler/ai-produksiyon" element={<AiProductionYeni />} />
            <Route path="/hizmetler/e-ticaret" element={<EticaretYeni />} />
            <Route path="/hizmetler/sosyal-medya" element={<SosyalMedyaYeni />} />
            <Route path="/hizmetler/kreatif-tasarim" element={<CreativeDesign />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/ucretler" element={<Pricing />} />
            <Route path="/islerimiz" element={<Islerimiz />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/musteri-hikayeleri" element={<MusteriHikayeleri />} />
            <Route path="/musteri-hikayeleri/referanslar" element={<CazadorCaseStudy />} />
            <Route path="/musteri-hikayeleri/mina-drinks" element={<MinaDrinksCaseStudy />} />
            <Route path="/musteri-hikayeleri/venus" element={<VenusCaseStudy />} />
            <Route path="/musteri-hikayeleri/campandmap" element={<CampAndMapCaseStudy />} />
            <Route path="/fiyat-hesapla" element={<CostCalculator />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
            <Route path="/kullanim-kosullari" element={<TermsOfService />} />
            <Route path="/kvkk" element={<KvkkPolicy />} />


            <Route path="/test-panel" element={<TestPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </ThemeProvider>
  )
}

export default App
