import { useState } from "react";
import { Check, Settings, Image as ImageIcon, Box, PieChart, Info, Copy, Zap } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEOHead, createSoftwareApplicationSchema, createBreadcrumbSchema } from "../components/seo/SEOHead";
import {
  DEFAULT_SOCIAL,
  DEFAULT_BANNERS,
  DEFAULT_BULK,
  IMAGES_PER_RUN,
} from "../lib/calculatorConstants";
import {
  calculateSocialMedia,
  calculateBanners,
  calculateBulkProduction,
  getUnitPrice,
} from "../lib/calculatorUtils";

interface CardHeaderProps {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
}

const CardHeader = ({ icon: Icon, title, description, badge }: CardHeaderProps) => (
  <div className="flex flex-col mb-6">
    <div className="flex justify-between items-start mb-2">
      <div className="p-3 bg-white/5 dark:bg-black/20 rounded-2xl shadow-inner border border-white/10">
        <Icon className="w-6 h-6 text-bor-secondary" />
      </div>
      {badge && (
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-bor-secondary/20 text-bor-secondary rounded-full border border-bor-secondary/30">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mt-4">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{description}</p>
  </div>
);

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  suffix?: string;
  tooltip?: string;
  min?: number;
}

const InputField = ({ label, value, onChange, type = "number", suffix = "", tooltip = "", min = 0 }: InputFieldProps) => (
  <div className="flex flex-col gap-1.5 mb-4 group relative">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
        {label}
        {tooltip && (
          <div className="group/tip relative flex cursor-help">
            <Info className="w-3.5 h-3.5 text-gray-400" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-xs text-white rounded-lg opacity-0 invisible group-hover/tip:opacity-100 group-hover/tip:visible transition-all z-10 shadow-xl">
              {tooltip}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </label>
      {suffix && <span className="text-xs text-gray-400 font-medium">{suffix}</span>}
    </div>
    <input
      type={type}
      value={value === 0 && min > 0 ? min : value}
      min={min}
      onChange={onChange}
      className="w-full bg-black/5 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-bor-secondary/50 focus:border-bor-secondary transition-all"
    />
  </div>
);

const EMPTY_SOCIAL = { dailyContentCount: 0, revisionCount: 0, daysPerMonth: 30 };
const EMPTY_BANNERS = { mobileCount: 0, desktopCount: 0, categoryCount: 0, revisionCount: 0, imagesPerRun: 4, mobileMultiplier: 1, desktopMultiplier: 2, categoryMultiplier: 2 };
const EMPTY_BULK = { totalProducts: 0, imagesPerProduct: 1, errorBase: 500, errorAmount: 10 };

const CostCalculator = () => {
  // States
  const [social, setSocial] = useState(DEFAULT_SOCIAL);
  const [banner, setBanner] = useState(DEFAULT_BANNERS);
  const [bulk, setBulk] = useState(DEFAULT_BULK);


  const [isCopied, setIsCopied] = useState(false);

  // Adım 1: Hacimleri hesapla
  const rawSocial = calculateSocialMedia({ ...social, imagesPerRun: IMAGES_PER_RUN });
  const rawBanner = calculateBanners({ ...banner, imagesPerRun: IMAGES_PER_RUN });
  const rawBulk = calculateBulkProduction({ ...bulk });

  // Adım 2: Tüm tablolardaki toplam görsel üretimini bul ve global birim fiyatı belirle
  const overallImages = rawSocial.monthlyTotal + rawBanner.monthlyTotal + rawBulk.billableImages;
  const globalUnitPrice = getUnitPrice(overallImages);

  // Adım 3: Belirlenen global birim fiyatla gerçek maliyetleri hesapla
  const socialCalc = calculateSocialMedia({ ...social, imagesPerRun: IMAGES_PER_RUN, overrideUnitPrice: globalUnitPrice });
  const bannerCalc = calculateBanners({ ...banner, imagesPerRun: IMAGES_PER_RUN, overrideUnitPrice: globalUnitPrice });
  const bulkCalc = calculateBulkProduction({ ...bulk, overrideUnitPrice: globalUnitPrice });

  const totalMonthlyCost = socialCalc.totalCost;
  const totalBannerCost = bannerCalc.totalCost;
  const totalBulkCost = bulkCalc.totalCost;
  const overallCost = totalMonthlyCost + totalBannerCost + totalBulkCost;

  const handleCopy = () => {
    const text = `
PikselAI Gelişmiş Üretim Özeti:
----------------------------------
Sosyal Medya Aylık: $${socialCalc.totalCost.toFixed(2)} (${socialCalc.monthlyTotal} Görsel)
Banner Üretimi Aylık: $${bannerCalc.totalCost.toFixed(2)} (${bannerCalc.monthlyTotal} Görsel)
Toplu Üretim (Sezonluk): $${bulkCalc.totalCost.toFixed(2)} (${bulkCalc.billableImages} Görsel)
----------------------------------
Genel Toplam Bütçe: $${overallCost.toFixed(2)}
    `.trim();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <SEOHead 
          title="Maliyet Hesaplama Aracı — PikselAI"
          description="Yapay zeka ile ürün fotoğrafçılığı, e-ticaret, sosyal medya ve kreatif tasarım projelerinizin maliyetini anında hesaplayın. Geleneksel ajanslara göre %80'e varan tasarruf sağlayın."
          canonical="/maliyet-hesapla"
          jsonLd={[
              createSoftwareApplicationSchema({
                  name: 'PikselAI Proje Maliyet Hesaplayıcı',
                  description: 'Yapay zeka destekli kreatif ajans hizmetlerinin (ürün fotoğrafçılığı, e-ticaret vb.) proje maliyetlerini hesaplayan etkileşimli bir araç.',
                  applicationCategory: 'BusinessApplication'
              }),
              createBreadcrumbSchema([
                  { name: 'Anasayfa', url: '/' },
                  { name: 'Maliyet Hesapla', url: '/fiyat-hesapla' }
              ])
          ]}
      />
      <Header />
      <div className="min-h-screen pt-24 pb-20 bg-[#f8f9fa] dark:bg-[#0a0a0c] selection:bg-bor-secondary/30 transition-colors duration-300">
        
        {/* Background Ambient SVG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-bor-secondary/10 dark:bg-bor-secondary/5 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-bor-primary-500/10 dark:bg-bor-primary-500/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Hero Section */}
          <div className="flex flex-col mb-12 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                Zamanı Kısaltın,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bor-primary-400 to-bor-secondary">
                  Görsel Üretimi Hesaplayın.
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                AI görsel üretim operasyonlarınız için tahmini hacmi ve bütçeyi anında planlayın. Şeffaf, hızlı ve güçlü.
              </p>
            </div>
          </div>

          {/* Quick Scenario Buttons & Reset */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2 p-1.5 bg-gray-200/50 dark:bg-black/40 rounded-2xl w-fit backdrop-blur-xl border border-gray-300/50 dark:border-white/5">
              {[
                { id: "social-section", label: "Sosyal Medya", icon: PieChart },
                { id: "banner-section", label: "Banner", icon: ImageIcon },
                { id: "bulk-section", label: "Toplu Üretim", icon: Box },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all bg-white dark:bg-[#1a1c23] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-white/10"
                >
                  <tab.icon className="w-4 h-4 text-bor-secondary" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setSocial(EMPTY_SOCIAL);
                setBanner(EMPTY_BANNERS);
                setBulk(EMPTY_BULK);
              }}
              className="flex items-center gap-2 px-5 py-2.5 w-fit rounded-xl font-medium text-sm bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 transition-all border border-red-100 dark:border-red-500/20 shadow-sm"
            >
              Tümünü Sıfırla
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Calculators */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Social Media Calculator */}
              <div 
                id="social-section"
                className="bg-white/70 dark:bg-[#15171e]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/50 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none scroll-mt-32"
              >
                <CardHeader 
                  icon={PieChart} 
                  title="Sosyal Medya İçerikleri" 
                  description="Aylık düzenli Instagram/TikTok vb. senaryoları için görsel üretimi." 
                  badge="Aylık"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                  <InputField label="Günlük İçerik Adedi" value={social.dailyContentCount} onChange={(e) => setSocial({...social, dailyContentCount: Math.max(0, Number(e.target.value))})} min={0} type="number" tooltip="1 günde paylaşılacak toplam ortalama story, reel ve post adedi." />
                  <InputField label="Aylık Revizyon" value={social.revisionCount} onChange={(e) => setSocial({...social, revisionCount: Math.max(0, Number(e.target.value))})} min={0} type="number" tooltip="Ay boyunca sosyal medya üretimlerinde ihtiyaç duyulacak tahmini toplam revize (varyasyon) sayısı." />
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-transparent border border-gray-200 dark:border-white/5 flex flex-wrap gap-6 justify-between items-center">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Aylık Görsel Hacmi</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{socialCalc.monthlyTotal}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Uygulanan Birim Fiyat</span>
                    <span className="text-2xl font-bold text-bor-secondary">${socialCalc.unitPrice.toFixed(3)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Aylık Maliyet</span>
                    <span className="text-3xl font-display font-bold text-gray-900 dark:text-white">${socialCalc.totalCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Banner Calculator */}
              <div 
                id="banner-section"
                className="bg-white/70 dark:bg-[#15171e]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/50 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none scroll-mt-32"
              >
                <CardHeader 
                  icon={ImageIcon} 
                  title="Banner Üretimi" 
                  description="Kampanya ve e-ticaret siteleri için mobil, desktop banner ihtiyaçları." 
                  badge="Aylık"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 mb-6">
                  <InputField label="Mobil Banner" value={banner.mobileCount} onChange={(e) => setBanner({...banner, mobileCount: Math.max(0, Number(e.target.value))})} min={0} type="number" suffix="x1 Standart" tooltip="Mobil cihazlarda gösterilecek dikey veya kare formatlı kampanya görselleri." />
                  <InputField label="Desktop Banner" value={banner.desktopCount} onChange={(e) => setBanner({...banner, desktopCount: Math.max(0, Number(e.target.value))})} min={0} type="number" suffix="x2 (4K)" tooltip="Desktop bannerlar 4K render alındığı için x2 kalite çarpanı uygulanır."/>
                  <InputField label="Kategori Banner" value={banner.categoryCount} onChange={(e) => setBanner({...banner, categoryCount: Math.max(0, Number(e.target.value))})} min={0} type="number" suffix="x2 (4K)" tooltip="Kategori bannerlar 4K render alındığı için x2 kalite çarpanı uygulanır." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                   <InputField label="Revizyon Sayısı" value={banner.revisionCount} onChange={(e) => setBanner({...banner, revisionCount: Math.max(0, Number(e.target.value))})} min={0} type="number" tooltip="İlk üretimden sonra kaç kez yeni varyasyon/revize talep edilecek?" />
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-transparent border border-gray-200 dark:border-white/5 flex flex-wrap gap-6 justify-between items-center">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Aylık Hacim</span>
                    <span className="text-2xl font-bold font-display text-gray-900 dark:text-white">{bannerCalc.monthlyTotal}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Birim Fiyat</span>
                    <span className="text-2xl font-bold text-bor-secondary">${bannerCalc.unitPrice.toFixed(3)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Aylık Maliyet</span>
                    <span className="text-3xl font-display font-bold text-gray-900 dark:text-white">${bannerCalc.totalCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Bulk Calculator */}
              <div 
                id="bulk-section"
                className="bg-white/70 dark:bg-[#15171e]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/50 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none scroll-mt-32"
              >
                <CardHeader 
                  icon={Box} 
                  title="Toplu Üretim" 
                  description="Katalog, seri kıyafet üretimi ve yüzlerce varyasyonu planlamak için." 
                  badge="Sezonluk"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-8">
                  <InputField label="Toplam Ana Ürün" value={bulk.totalProducts} onChange={(e) => setBulk({...bulk, totalProducts: Math.max(0, Number(e.target.value))})} min={0} type="number" tooltip="Toplam render alınacak model veya kıyafet sayısı. (Varyasyonlar dahil)" />
                  <InputField label="Ürün Başı Final Görsel" value={bulk.imagesPerProduct} onChange={(e) => setBulk({...bulk, imagesPerProduct: Math.max(1, Number(e.target.value))})} min={1} type="number" tooltip="Her bir ürün veya obje için teslim edilecek nihai (final) fotoğraf adedi." />
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-transparent border border-gray-200 dark:border-white/5 flex flex-wrap gap-6 justify-between items-center">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Faturalandırılan Hacim</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {bulkCalc.billableImages} <span className="text-sm font-normal text-gray-500">({bulkCalc.errorTolerance} Fire Payı)</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Ürün Başı Maliyet</span>
                    <span className="text-2xl font-bold text-bor-secondary">${bulkCalc.productUnitCost.toFixed(2)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Maliyet (Proje)</span>
                    <span className="text-3xl font-display font-bold text-gray-900 dark:text-white">${bulkCalc.totalCost.toFixed(2)}</span>
                  </div>
                </div>

                {/* Error Tolerance Description */}
                <div className="mt-6 p-4 rounded-xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30">
                  <p className="text-xs text-orange-700 dark:text-orange-400 flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>Fire Payı Sistem Notu:</strong> Yapay zeka varyasyonlarındaki olası hataları telafi edebilmek adına, sisteme girilen her {bulk.errorBase} ana ürün üretimine karşılık {bulk.errorAmount} adet ekstra "fire/telafi payı" bütçesi otomatik olarak eklenmektedir.</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Summary Panel */}
            <div className="lg:col-span-4 transition-opacity">
              <div className="sticky top-32 space-y-6">
                
                {/* Summary Card */}
                <div className="bg-bor-primary-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-bor-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  
                  <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-bor-secondary" />
                    Bütçe Özeti
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-gray-400">Sosyal Medya (Aylık)</span>
                      <span className="font-semibold">${socialCalc.totalCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-100 dark:border-white/10">
                      <span className="text-gray-400">Banner (Aylık)</span>
                      <span className="font-semibold text-white">${bannerCalc.totalCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-gray-400">Toplu Üretim</span>
                      <span className="font-semibold">${bulkCalc.totalCost.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <span className="text-sm text-gray-400 block mb-1">Genel Maliyet Profiliniz</span>
                    <div className="text-4xl font-display font-bold text-white mb-2">
                       ${overallCost.toFixed(2)}
                    </div>
                    <div className="text-sm text-bor-secondary">
                      Toplam {overallImages} görsel baz alınmıştır.
                    </div>
                  </div>

                  <button 
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-bor-primary-900 font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    {isCopied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                    {isCopied ? "Kopyalandı!" : "Özeti Kopyala"}
                  </button>
                </div>

                {/* Explanation Card */}
                <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-200 dark:border-white/5 shadow-lg">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-gray-500" />
                    Hesaplama Mantığı
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bor-secondary mt-1 shrink-0" />
                      Fiyatlandırma üretilen görsel sayısına göre kümülatif azalır. ($0.50 → $0.25)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bor-secondary mt-1 shrink-0" />
                      Standart tek üretim {IMAGES_PER_RUN} adet varyasyon görseli çıkarır.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1 shrink-0" />
                      Sonuçlar tahmini maliyetlerdir, satış temsilcisiyle kesinleştirilir.
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CostCalculator;
