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
const GizliAiOzellikleri = lazy(() => import('./pages/blog/ai-powered-creative/GizliAiOzellikleri'))
const AiTasarimTrendleri = lazy(() => import('./pages/blog/ai-powered-creative/AiTasarimTrendleri'))
const AiTasarimAraclari = lazy(() => import('./pages/blog/ai-powered-creative/AiTasarimAraclari'))
const AiGorselUretimiOrnekleri = lazy(() => import('./pages/blog/ai-powered-creative/AiGorselUretimiOrnekleri'))
const AiTelifHaklari = lazy(() => import('./pages/blog/creative-leadership/AiTelifHaklari'))
const AiPazarlamaKampanyalari = lazy(() => import('./pages/blog/digital-marketing/AiPazarlamaKampanyalari'))
const TasarimdaAiGelecegi = lazy(() => import('./pages/blog/creative-leadership/TasarimdaAiGelecegi'))
const TasarimIsAkisiOtomasyon = lazy(() => import('./pages/blog/inside-pikselai/TasarimIsAkisiOtomasyon'))
const AiMarkaRehberleri = lazy(() => import('./pages/blog/all-things-brand/AiMarkaRehberleri'))
const AiVideoPazarlama = lazy(() => import('./pages/blog/video-marketing/AiVideoPazarlama'))

// Yeni Makaleler (Batch 1 & 2)
const TasarimdaYapayZeka = lazy(() => import('./pages/blog/ai-powered-creative/TasarimdaYapayZeka'))
const SosyalMedyaIcerikDonusturme = lazy(() => import('./pages/blog/digital-marketing/SosyalMedyaIcerikDonusturme'))
const MarkalasmaRehberi = lazy(() => import('./pages/blog/all-things-brand/MarkalasmaRehberi'));
const YaraticiLiderlik = lazy(() => import('./pages/blog/creative-leadership/YaraticiLiderlik'));
const TasarimSistemleri = lazy(() => import('./pages/blog/all-things-brand/TasarimSistemleri'));
const EticaretWebTasarimi = lazy(() => import('./pages/blog/all-things-brand/EticaretWebTasarimi'));
const VideoPazarlamaStratejisi = lazy(() => import('./pages/blog/video-marketing/VideoPazarlamaStratejisi'));
const MotionGrafikOrnekleri = lazy(() => import('./pages/blog/video-marketing/MotionGrafikOrnekleri'));
const AiVideoOlusturmaAraclari = lazy(() => import('./pages/blog/video-marketing/AiVideoOlusturmaAraclari'));
const AiEpostaPazarlama = lazy(() => import('./pages/blog/digital-marketing/AiEpostaPazarlama'));
const SosyalMedyaKampanyalari = lazy(() => import('./pages/blog/digital-marketing/SosyalMedyaKampanyalari'));
const AmbalajTasarimi = lazy(() => import('./pages/blog/all-things-brand/AmbalajTasarimi'));
const LogoTasarimIpuclari = lazy(() => import('./pages/blog/all-things-brand/LogoTasarimIpuclari'));
const OlceklenebilirYaraticilik = lazy(() => import('./pages/blog/creative-leadership/OlceklenebilirYaraticilik'));
const AiDestekliAjanslar = lazy(() => import('./pages/blog/ai-powered-creative/AiDestekliAjanslar'));
const IcerikPazarlamasiOrnekleri = lazy(() => import('./pages/blog/digital-marketing/IcerikPazarlamasiOrnekleri'));
const AiVideoNasilOlusturulur = lazy(() => import('./pages/blog/video-marketing/AiVideoNasilOlusturulur'));
const RenklerinGucu = lazy(() => import('./pages/blog/all-things-brand/RenklerinGucu'));
const DijitalPazarlamaTrendleri = lazy(() => import('./pages/blog/digital-marketing/DijitalPazarlamaTrendleri'));
const MarkaKimligiRehberi = lazy(() => import('./pages/blog/all-things-brand/MarkaKimligiRehberi'));
const TasarimciIseAlmaRehberi = lazy(() => import('./pages/blog/creative-leadership/TasarimciIseAlmaRehberi'));
const AiReklamGorselleri = lazy(() => import('./pages/blog/digital-marketing/AiReklamGorselleri'));
const ReklamYaraticilikTrendleri = lazy(() => import('./pages/blog/digital-marketing/ReklamYaraticilikTrendleri'));
const AiReklamGorseliOlusturma = lazy(() => import('./pages/blog/digital-marketing/AiReklamGorseliOlusturma'));
const MarkaTasarimTrendleri = lazy(() => import('./pages/blog/all-things-brand/MarkaTasarimTrendleri'));

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
            
            {/* Blog Makaleleri */}
            <Route path="/blog/ai-powered-creative/gizli-ai-ozellikleri" element={<GizliAiOzellikleri />} />
            <Route path="/blog/ai-powered-creative/ai-tasarim-trendleri" element={<AiTasarimTrendleri />} />
            <Route path="/blog/ai-powered-creative/ai-tasarim-araclari" element={<AiTasarimAraclari />} />
            <Route path="/blog/ai-powered-creative/ai-gorsel-uretimi-ornekleri" element={<AiGorselUretimiOrnekleri />} />
            <Route path="/blog/ai-powered-creative/tasarimda-yapay-zeka" element={<TasarimdaYapayZeka />} />
            <Route path="/blog/ai-powered-creative/ai-destekli-ajanslar" element={<AiDestekliAjanslar />} />
            
            <Route path="/blog/creative-leadership/ai-telif-haklari" element={<AiTelifHaklari />} />
            <Route path="/blog/creative-leadership/tasarimda-ai-gelecegi" element={<TasarimdaAiGelecegi />} />
            <Route path="/blog/creative-leadership/yaratici-liderlik" element={<YaraticiLiderlik />} />
            <Route path="/blog/creative-leadership/tasarimci-ise-alma-rehberi" element={<TasarimciIseAlmaRehberi />} />
            <Route path="/blog/creative-leadership/olceklenebilir-yaraticilik" element={<OlceklenebilirYaraticilik />} />
            
            <Route path="/blog/digital-marketing/ai-pazarlama-kampanyalari" element={<AiPazarlamaKampanyalari />} />
            <Route path="/blog/digital-marketing/sosyal-medya-icerik-donusturme" element={<SosyalMedyaIcerikDonusturme />} />
            <Route path="/blog/digital-marketing/ai-reklam-gorselleri" element={<AiReklamGorselleri />} />
            <Route path="/blog/digital-marketing/reklam-yaraticilik-trendleri" element={<ReklamYaraticilikTrendleri />} />
            <Route path="/blog/digital-marketing/ai-reklam-gorseli-olusturma" element={<AiReklamGorseliOlusturma />} />
            <Route path="/blog/digital-marketing/ai-eposta-pazarlama" element={<AiEpostaPazarlama />} />
            <Route path="/blog/digital-marketing/sosyal-medya-kampanyalari" element={<SosyalMedyaKampanyalari />} />
            <Route path="/blog/digital-marketing/icerik-pazarlamasi-ornekleri" element={<IcerikPazarlamasiOrnekleri />} />
            <Route path="/blog/digital-marketing/dijital-pazarlama-trendleri" element={<DijitalPazarlamaTrendleri />} />
            
            <Route path="/blog/all-things-brand/ai-marka-rehberleri" element={<AiMarkaRehberleri />} />
            <Route path="/blog/all-things-brand/markalasma-rehberi" element={<MarkalasmaRehberi />} />
            <Route path="/blog/all-things-brand/tasarim-sistemleri" element={<TasarimSistemleri />} />
            <Route path="/blog/all-things-brand/eticaret-web-tasarimi" element={<EticaretWebTasarimi />} />
            <Route path="/blog/all-things-brand/ambalaj-tasarimi" element={<AmbalajTasarimi />} />
            <Route path="/blog/all-things-brand/logo-tasarim-ipuclari" element={<LogoTasarimIpuclari />} />
            <Route path="/blog/all-things-brand/renklerin-gucu" element={<RenklerinGucu />} />
            <Route path="/blog/all-things-brand/marka-kimligi-rehberi" element={<MarkaKimligiRehberi />} />
            <Route path="/blog/all-things-brand/marka-tasarim-trendleri" element={<MarkaTasarimTrendleri />} />
            
            <Route path="/blog/video-marketing/ai-video-pazarlama" element={<AiVideoPazarlama />} />
            <Route path="/blog/video-marketing/video-pazarlama-stratejisi" element={<VideoPazarlamaStratejisi />} />
            <Route path="/blog/video-marketing/motion-grafik-ornekleri" element={<MotionGrafikOrnekleri />} />
            <Route path="/blog/video-marketing/ai-video-olusturma-araclari" element={<AiVideoOlusturmaAraclari />} />
            <Route path="/blog/video-marketing/ai-video-nasil-olusturulur" element={<AiVideoNasilOlusturulur />} />
            
            <Route path="/blog/inside-pikselai/tasarim-is-akisi-otomasyon" element={<TasarimIsAkisiOtomasyon />} />

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
