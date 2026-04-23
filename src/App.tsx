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

// Blog — Yapay Zeka Yaratıcılık
const GizliAiOzellikleri = lazy(() => import('./pages/blog/yapay-zeka-yaraticilik/GizliAiOzellikleri'))
const AiTasarimTrendleri = lazy(() => import('./pages/blog/yapay-zeka-yaraticilik/AiTasarimTrendleri'))
const AiTasarimAraclari = lazy(() => import('./pages/blog/yapay-zeka-yaraticilik/AiTasarimAraclari'))
const AiGorselUretimiOrnekleri = lazy(() => import('./pages/blog/yapay-zeka-yaraticilik/AiGorselUretimiOrnekleri'))
const TasarimdaYapayZeka = lazy(() => import('./pages/blog/yapay-zeka-yaraticilik/TasarimdaYapayZeka'))
const AiDestekliAjanslar = lazy(() => import('./pages/blog/yapay-zeka-yaraticilik/AiDestekliAjanslar'))

// Blog — Yaratıcı Liderlik
const AiTelifHaklari = lazy(() => import('./pages/blog/yaratici-liderlik/AiTelifHaklari'))
const TasarimdaAiGelecegi = lazy(() => import('./pages/blog/yaratici-liderlik/TasarimdaAiGelecegi'))
const YaraticiLiderlik = lazy(() => import('./pages/blog/yaratici-liderlik/YaraticiLiderlik'))
const TasarimciIseAlmaRehberi = lazy(() => import('./pages/blog/yaratici-liderlik/TasarimciIseAlmaRehberi'))
const OlceklenebilirYaraticilik = lazy(() => import('./pages/blog/yaratici-liderlik/OlceklenebilirYaraticilik'))

// Blog — Dijital Pazarlama
const AiPazarlamaKampanyalari = lazy(() => import('./pages/blog/dijital-pazarlama/AiPazarlamaKampanyalari'))
const SosyalMedyaIcerikDonusturme = lazy(() => import('./pages/blog/dijital-pazarlama/SosyalMedyaIcerikDonusturme'))
const AiReklamGorselleri = lazy(() => import('./pages/blog/dijital-pazarlama/AiReklamGorselleri'))
const ReklamYaraticilikTrendleri = lazy(() => import('./pages/blog/dijital-pazarlama/ReklamYaraticilikTrendleri'))
const AiReklamGorseliOlusturma = lazy(() => import('./pages/blog/dijital-pazarlama/AiReklamGorseliOlusturma'))
const AiEpostaPazarlama = lazy(() => import('./pages/blog/dijital-pazarlama/AiEpostaPazarlama'))
const SosyalMedyaKampanyalari = lazy(() => import('./pages/blog/dijital-pazarlama/SosyalMedyaKampanyalari'))
const IcerikPazarlamasiOrnekleri = lazy(() => import('./pages/blog/dijital-pazarlama/IcerikPazarlamasiOrnekleri'))
const DijitalPazarlamaTrendleri = lazy(() => import('./pages/blog/dijital-pazarlama/DijitalPazarlamaTrendleri'))

// Blog — Marka Rehberi
const AiMarkaRehberleri = lazy(() => import('./pages/blog/marka-rehberi/AiMarkaRehberleri'))
const MarkalasmaRehberi = lazy(() => import('./pages/blog/marka-rehberi/MarkalasmaRehberi'))
const TasarimSistemleri = lazy(() => import('./pages/blog/marka-rehberi/TasarimSistemleri'))
const EticaretWebTasarimi = lazy(() => import('./pages/blog/marka-rehberi/EticaretWebTasarimi'))
const AmbalajTasarimi = lazy(() => import('./pages/blog/marka-rehberi/AmbalajTasarimi'))
const LogoTasarimIpuclari = lazy(() => import('./pages/blog/marka-rehberi/LogoTasarimIpuclari'))
const RenklerinGucu = lazy(() => import('./pages/blog/marka-rehberi/RenklerinGucu'))
const MarkaKimligiRehberi = lazy(() => import('./pages/blog/marka-rehberi/MarkaKimligiRehberi'))
const MarkaTasarimTrendleri = lazy(() => import('./pages/blog/marka-rehberi/MarkaTasarimTrendleri'))

// Blog — Video Pazarlama
const AiVideoPazarlama = lazy(() => import('./pages/blog/video-pazarlama/AiVideoPazarlama'))
const VideoPazarlamaStratejisi = lazy(() => import('./pages/blog/video-pazarlama/VideoPazarlamaStratejisi'))
const MotionGrafikOrnekleri = lazy(() => import('./pages/blog/video-pazarlama/MotionGrafikOrnekleri'))
const AiVideoOlusturmaAraclari = lazy(() => import('./pages/blog/video-pazarlama/AiVideoOlusturmaAraclari'))
const AiVideoNasilOlusturulur = lazy(() => import('./pages/blog/video-pazarlama/AiVideoNasilOlusturulur'))

// Blog — Pikselai'nın İçinden
const TasarimIsAkisiOtomasyon = lazy(() => import('./pages/blog/pikselainin-icinden/TasarimIsAkisiOtomasyon'))

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
            
            {/* Blog — Yapay Zeka Yaratıcılık */}
            <Route path="/blog/yapay-zeka-yaraticilik/gizli-ai-ozellikleri" element={<GizliAiOzellikleri />} />
            <Route path="/blog/yapay-zeka-yaraticilik/ai-tasarim-trendleri" element={<AiTasarimTrendleri />} />
            <Route path="/blog/yapay-zeka-yaraticilik/ai-tasarim-araclari" element={<AiTasarimAraclari />} />
            <Route path="/blog/yapay-zeka-yaraticilik/ai-gorsel-uretimi-ornekleri" element={<AiGorselUretimiOrnekleri />} />
            <Route path="/blog/yapay-zeka-yaraticilik/tasarimda-yapay-zeka" element={<TasarimdaYapayZeka />} />
            <Route path="/blog/yapay-zeka-yaraticilik/ai-destekli-ajanslar" element={<AiDestekliAjanslar />} />
            
            {/* Blog — Yaratıcı Liderlik */}
            <Route path="/blog/yaratici-liderlik/ai-telif-haklari" element={<AiTelifHaklari />} />
            <Route path="/blog/yaratici-liderlik/tasarimda-ai-gelecegi" element={<TasarimdaAiGelecegi />} />
            <Route path="/blog/yaratici-liderlik/yaratici-liderlik" element={<YaraticiLiderlik />} />
            <Route path="/blog/yaratici-liderlik/tasarimci-ise-alma-rehberi" element={<TasarimciIseAlmaRehberi />} />
            <Route path="/blog/yaratici-liderlik/olceklenebilir-yaraticilik" element={<OlceklenebilirYaraticilik />} />
            
            {/* Blog — Dijital Pazarlama */}
            <Route path="/blog/dijital-pazarlama/ai-pazarlama-kampanyalari" element={<AiPazarlamaKampanyalari />} />
            <Route path="/blog/dijital-pazarlama/sosyal-medya-icerik-donusturme" element={<SosyalMedyaIcerikDonusturme />} />
            <Route path="/blog/dijital-pazarlama/ai-reklam-gorselleri" element={<AiReklamGorselleri />} />
            <Route path="/blog/dijital-pazarlama/reklam-yaraticilik-trendleri" element={<ReklamYaraticilikTrendleri />} />
            <Route path="/blog/dijital-pazarlama/ai-reklam-gorseli-olusturma" element={<AiReklamGorseliOlusturma />} />
            <Route path="/blog/dijital-pazarlama/ai-eposta-pazarlama" element={<AiEpostaPazarlama />} />
            <Route path="/blog/dijital-pazarlama/sosyal-medya-kampanyalari" element={<SosyalMedyaKampanyalari />} />
            <Route path="/blog/dijital-pazarlama/icerik-pazarlamasi-ornekleri" element={<IcerikPazarlamasiOrnekleri />} />
            <Route path="/blog/dijital-pazarlama/dijital-pazarlama-trendleri" element={<DijitalPazarlamaTrendleri />} />
            
            {/* Blog — Marka Rehberi */}
            <Route path="/blog/marka-rehberi/ai-marka-rehberleri" element={<AiMarkaRehberleri />} />
            <Route path="/blog/marka-rehberi/markalasma-rehberi" element={<MarkalasmaRehberi />} />
            <Route path="/blog/marka-rehberi/tasarim-sistemleri" element={<TasarimSistemleri />} />
            <Route path="/blog/marka-rehberi/eticaret-web-tasarimi" element={<EticaretWebTasarimi />} />
            <Route path="/blog/marka-rehberi/ambalaj-tasarimi" element={<AmbalajTasarimi />} />
            <Route path="/blog/marka-rehberi/logo-tasarim-ipuclari" element={<LogoTasarimIpuclari />} />
            <Route path="/blog/marka-rehberi/renklerin-gucu" element={<RenklerinGucu />} />
            <Route path="/blog/marka-rehberi/marka-kimligi-rehberi" element={<MarkaKimligiRehberi />} />
            <Route path="/blog/marka-rehberi/marka-tasarim-trendleri" element={<MarkaTasarimTrendleri />} />
            
            {/* Blog — Video Pazarlama */}
            <Route path="/blog/video-pazarlama/ai-video-pazarlama" element={<AiVideoPazarlama />} />
            <Route path="/blog/video-pazarlama/video-pazarlama-stratejisi" element={<VideoPazarlamaStratejisi />} />
            <Route path="/blog/video-pazarlama/motion-grafik-ornekleri" element={<MotionGrafikOrnekleri />} />
            <Route path="/blog/video-pazarlama/ai-video-olusturma-araclari" element={<AiVideoOlusturmaAraclari />} />
            <Route path="/blog/video-pazarlama/ai-video-nasil-olusturulur" element={<AiVideoNasilOlusturulur />} />
            
            {/* Blog — Pikselai'nın İçinden */}
            <Route path="/blog/pikselainin-icinden/tasarim-is-akisi-otomasyon" element={<TasarimIsAkisiOtomasyon />} />

            {/* Müşteri Hikayeleri */}
            <Route path="/musteri-hikayeleri" element={<MusteriHikayeleri />} />
            <Route path="/musteri-hikayeleri/cazador" element={<CazadorCaseStudy />} />
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
