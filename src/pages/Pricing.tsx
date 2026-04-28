import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { AnimatePresence, motion } from 'framer-motion';
import { SEOHead } from '../components/seo/SEOHead';
import { ChevronRight, MessageSquare, TrendingUp } from 'lucide-react';

// Profesyonel Katalog Paketi (Sabit)
const catalogPlan = {
    name: 'Profesyonel Katalog',
    price: '₺15.000',
    suffix: '/ tek seferlik',
    description: 'Kendi fotoğraflarını kullanmak isteyen işletmeler için profesyonel katalog çözümü.',
    features: [
        'Sınırsız albüm oluşturma',
        'Mobil uyumlu modern tasarım',
        'Hızlı arama ve filtreleme',
        'Video ve medya desteği',
        'PWA (uygulama olarak yükleme)',
        'Tek seferlik ödeme – süresiz kullanım'
    ],
    cta: 'Paketi Seç'
};

// Sosyal Medya İçerik Paketleri
const aiPlans = [
    {
        name: 'Başlangıç',
        price: '₺6.000',
        suffix: '/ ay',
        description: 'Sosyal medyada içerik üretimini denemek isteyenler için',
        features: [
            'Aylık 15 paylaşım (post) için içerik üretimi',
            'Her içerik için 4 alternatif (60 görsel)',
            '5 revize hakkı (+20 görsel)',
            'Aylık toplam 80 görsel teslimi'
        ],
        cta: 'Paketi Seç',
        bottomMessage: 'Küçük işletmeler ve deneme süreci için'
    },
    {
        name: 'En Popüler ⭐',
        price: '₺12.000',
        suffix: '/ ay',
        description: 'Günlük paylaşım yapan markalar için en ideal paket',
        features: [
            'Günlük 2 post paylaşımına uygun içerik üretimi',
            'Aylık 60 içerik (240 görsel)',
            '15 revize hakkı (+60 görsel)',
            'Aylık toplam 300 görsel teslimi',
            'Story için geniş içerik havuzu',
            'Tutarlı marka görünümü'
        ],
        cta: 'Paketi Seç',
        featured: true,
        bottomMessage: 'Günlük düzenli paylaşım yapan markalar için en ideal kullanım'
    },
    {
        name: 'Profesyonel',
        price: '₺15.000',
        suffix: '/ ay',
        description: 'Sosyal medyada hızlı büyümek isteyen markalar için',
        features: [
            'Günlük 3 post paylaşımına uygun içerik üretimi',
            'Aylık 90 içerik (360 görsel)',
            '25 revize hakkı (+100 görsel)',
            'Aylık toplam 460 görsel teslimi',
            'Story için geniş içerik havuzu',
            'Kampanya içerikleri',
            'Öncelikli üretim'
        ],
        cta: 'Paketi Seç',
        bottomMessage: 'Daha fazla paylaşım = daha fazla büyüme'
    },
    {
        name: 'Özel Üretim',
        price: 'Özel',
        suffix: 'Teklif',
        description: 'Standart paketlerin dışında kalan projeler için',
        features: [
            'Katalog çekimleri',
            'Web sitesi banner',
            'Kampanya içerikleri',
            '500+ görsel üretim'
        ],
        cta: 'Özel Teklif Alın'
    }
];

// E-Ticaret Paketleri
const ecommercePackages = [
    {
        name: 'Temel',
        price: '₺29.000',
        suffix: 'Tek Seferlik',
        description: 'Standart, temiz ve satışa hazır bir Shopify mağazası kurulumu.',
        features: ['Shopify mağaza kurulumu', 'Tema ve temel ayarlar', 'Ürünlerin eklenmesi', 'Ödeme ve kargo ayarları', '30 gün teknik destek'],
        cta: 'Teklif Al'
    },
    {
        name: 'Profesyonel',
        price: '₺39.000',
        suffix: 'Tek Seferlik',
        description: 'Markanıza özel, yapay zeka destekli profesyonel mağaza.',
        features: ['AI destekli özel kurulum', 'Baştan sona danışmanlık', 'Ürünlere özel gerçekçi AI görselleri', 'Meta alan özelleştirmeleri', 'İçerik ve yapı desteği'],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Premium 360°',
        price: '₺49.000',
        suffix: '+ ₺25.000/ay',
        description: 'Kurulum + Sürekli Yönetim + Sosyal Medya + Katalog — Tam Kapsamlı Çözüm.',
        features: ['Tüm kurulum hizmetleri dahil', 'Aylık performans yönetimi', 'Sosyal medya yönetimi (48 post/ay)', 'AI reklam kreatifleri', 'Hediye Dijital Katalog (₺15.000 değerinde)'],
        cta: '360° Çözüm Ortaklığı Başlat',
        isPremium: true
    }
];

// Kreatif Tasarım Paketleri
const creativePackages = [
    {
        name: 'Landing Page',
        price: '₺15.000',
        suffix: 'Tek Seferlik',
        description: 'Tek sayfalık dönüşüm odaklı tanıtım ve kampanya sayfaları.',
        features: ['Özel UI/UX tasarımı', 'Mobil uyumlu modern yapı', 'Hızlı sayfa yüklenme (SEO)', 'Form ve lead toplama', 'Google Analytics & Takip Kurulumu'],
        cta: 'Teklif Al'
    },
    {
        name: 'Kurumsal Web Sitesi',
        price: '₺25.000',
        suffix: 'Tek Seferlik',
        description: 'Markanızı en iyi yansıtan çok sayfalı ve dinamik kurumsal kimlik siteleri.',
        features: ['Özgün tasarım sistemi', 'CMS (İçerik Yönetimi)', 'Sınırsız sayfa yapısı', 'Blog ve haberler modülü', 'Temel SEO yapılandırması'],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Özel Proje',
        price: 'Özel Teklif',
        suffix: '',
        description: 'İnteraktif katalog, portal veya tam kapsamlı özel tasarım süreçleri.',
        features: ['Kapsamlı marka analizi', 'Tasarım sistemleri', 'Özel React/Next.js geliştirme', 'API/Backend entegrasyonları', 'Sürekli teknik destek'],
        cta: 'Projenizi Konuşalım',
        isPremium: true
    }
];

// SSS Verileri
const catalogFaqs = [
    { q: "Katalog paketi için ödeme tek seferlik mi?", a: "Evet, profesyonel katalog paketi için sadece bir kez ödeme yaparsınız. Sistem tarafımızdan kurulup size teslim edildikten sonra sınırsız ve süresiz kullanım hakkına sahip olursunuz." },
    { q: "Kendi domainimi kullanabilir miyim?", a: "Kesinlikle! Hazırlanan dijital kataloğu kendi alan adınız (örn: katalog.markaniz.com) altında kullanabilirsiniz." },
    { q: "Kaç ürün yükleyebilirim?", a: "Herhangi bir ürün veya görsel sınırımız yoktur. Google Drive altyapısını sisteminize entegre ediyoruz, böylece kendi Google Drive deponuzun kapasitesine göre sınırsız sayıda ürün ve kategori oluşturabilirsiniz." }
];

const aiFaqs = [
    { q: "Günde kaç paylaşım yapabilirim?", a: "Seçtiğiniz pakete göre günlük paylaşım yapabileceğiniz içerikler üretilir." },
    { q: "Görseller nasıl üretiliyor?", a: "Her içerik için markanıza uygun sahne oluşturulur ve 4 farklı alternatif görsel hazırlanır." },
    { q: "Beğenmediğim görseller ne olacak?", a: "Paket kapsamında belirlenen revize hakkınızı kullanarak yeni görseller talep edebilirsiniz." },
    { q: "Revize ne demek?", a: "Revize, bir içerik için yeniden üretim yapılmasıdır. Her revizede 4 yeni görsel hazırlanır." },
    { q: "Sosyal medya yönetimi de dahil mi?", a: "Hayır. Bu hizmet sadece görsel içerik üretimini kapsar." },
    { q: "Ek görsel istersem?", a: "İstediğiniz kadar ek içerik satın alabilirsiniz. Ek üretim: 120 TL / içerik (4 alternatif görsel dahil)." }
];

const ecommerceFaqs = [
    { q: "Hangi altyapıyı kullanıyorsunuz?", a: "E-ticaret projelerimizde hız, güvenlik ve dönüşüm oranı en yüksek olan Shopify altyapısını tercih ediyoruz." },
    { q: "Kurulum süreci ne kadar sürüyor?", a: "Seçtiğiniz pakete göre değişiklik göstermekle birlikte, standart projelerin kurulumu 3-4 hafta, daha özel tasarımlı kurulumlar ise 4-8 hafta içerisinde tamamlanmaktadır." },
    { q: "Ödeme altyapılarını siz mi kuruyorsunuz?", a: "Evet. Altyapımızda şu anda sadece İyzico desteklenmektedir ve İyzico entegrasyonu tarafımızca eksiksiz olarak yapılmaktadır." }
];

const creativeFaqs = [
    { q: "Özel proje ne anlama geliyor?", a: "Özel projeler, standart bir web sitesinin ötesinde; interaktif portallar, gelişmiş filtreleme sistemleri veya markanıza tamamen özel, sıfırdan kodlanan (React/Next.js) web uygulamalarıdır." },
    { q: "Sitenin SEO ayarları yapılıyor mu?", a: "Tüm web projelerimizde, Google'ın güncel standartlarına uygun temel SEO yapılandırmaları, site hızı optimizasyonları ve doğru etiket hiyerarşisi (H1, H2 vb.) sağlanarak teslim edilir." },
    { q: "Teslimat sonrası teknik destek veriyor musunuz?", a: "Elbette. Proje tesliminden sonra oluşabilecek teknik sorunlar için standart olarak ilk 1 ay ücretsiz destek sağlıyor, sonrasında dilerseniz aylık bakım paketlerimizle yanınızda olmaya devam ediyoruz." }
];

const heroContent = {
    ai: {
        title: "Sosyal Medyanız İçin",
        titleHighlight: "Her Gün Hazır İçerik",
        description: "Her gün paylaşım yapabilmeniz için ihtiyacınız olan tüm görselleri düzenli olarak üretiyoruz.",
        features: [
            "Günlük paylaşım için hazır içerikler",
            "Her içerik için 4 alternatif görsel",
            "Beğenmediğin içerikleri kolayca değiştir"
        ]
    },
    eticaret: {
        title: "Satışa Hazır Özel",
        titleHighlight: "E-Ticaret Mağazaları",
        description: "Shopify altyapısı ve yapay zeka gücüyle dönüşüm oranı yüksek, modern ve satış odaklı online mağazalar kuruyoruz.",
        features: [
            "Baştan sona anahtar teslim Shopify kurulumu.",
            "Markanıza özel yüksek dönüşümlü modern tasarım."
        ]
    },
    kreatif: {
        title: "Markanızı Büyüten",
        titleHighlight: "Kreatif Web Çözümleri",
        description: "Dönüşüm odaklı açılış sayfalarından kapsamlı kurumsal sitelere kadar, markanızın dijital yüzünü modern standartlarda tasarlıyoruz.",
        features: [
            "Kullanıcı deneyimi (UI/UX) odaklı özel tasarım.",
            "Yüksek performanslı, hızlı ve SEO uyumlu altyapı."
        ]
    },
    katalog: {
        title: "Profesyonel ve Sınırsız",
        titleHighlight: "Dijital Katalog Çözümü",
        description: "Ürünlerinizi en iyi şekilde sergileyebileceğiniz, PWA destekli ve mobil uyumlu dijital katalog sistemine tek seferlik ödemeyle sahip olun.",
        features: [
            "Sınırsız kategori, albüm ve görsel kapasitesi.",
            "Herhangi bir aylık komisyon veya abonelik ücreti yok."
        ]
    }
};

const Pricing = () => {
    const [activeTab, setActiveTab] = useState<'katalog' | 'ai' | 'eticaret' | 'kreatif'>('ai');

    return (
        <MainLayout>
            <SEOHead
                title="Fiyatlandırma — Şeffaf ve Esnek Paketler"
                description="PikselAI hizmet ücretleri: AI fotoğraf üretimi, Shopify e-ticaret kurulumu, sosyal medya yönetimi ve kreatif tasarım paketleri. Gizli ücret yok."
                canonical="/fiyatlandirma"
            />

            {/* Hero Section */}
            <Section className="py-24 text-center" mood="light">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-bor-primary-900 dark:text-white mb-6">
                            {heroContent[activeTab].title} <br className="hidden lg:block" />
                            <span className="italic font-light text-[#86AA00] dark:text-[#E2FF65]">{heroContent[activeTab].titleHighlight}</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed max-w-2xl mx-auto mb-6">
                            {heroContent[activeTab].description}
                        </p>
                        
                        <div className="flex flex-col items-center justify-center gap-3 mb-12 text-sm md:text-base font-medium text-bor-primary-600 dark:text-bor-primary-300 bg-bor-secondary/10 dark:bg-bor-secondary/5 py-5 px-8 rounded-3xl border border-bor-secondary/20 max-w-xl mx-auto text-left w-full shadow-sm">
                            {heroContent[activeTab].features.map((feature, idx) => (
                                <span key={idx} className="flex items-center gap-3 w-full">
                                    <span className="text-[#86AA00] dark:text-[#E2FF65] text-xl font-bold">✓</span> {feature}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-2 mb-12">
                    <Button
                        variant={activeTab === 'katalog' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('katalog')}
                        className="rounded-full"
                    >
                        Katalog
                    </Button>
                    <Button
                        variant={activeTab === 'ai' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('ai')}
                        className="rounded-full"
                    >
                        Sosyal Medya Görsel Üretimi
                    </Button>
                    <Button
                        variant={activeTab === 'eticaret' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('eticaret')}
                        className="rounded-full"
                    >
                        E-Ticaret
                    </Button>
                    <Button
                        variant={activeTab === 'kreatif' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('kreatif')}
                        className="rounded-full"
                    >
                        Kreatif Tasarım
                    </Button>
                </div>

                {/* Pricing Content */}
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatePresence mode="wait">

                        {/* Katalog Tab */}
                        {activeTab === 'katalog' && (
                            <motion.div
                                key="katalog"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center gap-10"
                            >
                                <div className="w-full max-w-md">
                                    <PricingCard plan={catalogPlan} />
                                </div>
                                <FaqSection faqs={catalogFaqs} />
                            </motion.div>
                        )}

                        {/* AI Tab */}
                        {activeTab === 'ai' && (
                            <motion.div
                                key="ai"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-10"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {aiPlans.map((plan, i) => (
                                        <PricingCard key={i} plan={plan} />
                                    ))}
                                </div>
                                
                                {/* Model Sistemi ve Ekstra Üretim */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-16 mb-6 text-left">
                                    {/* Nasıl Çalışır? */}
                                    <div className="bg-white dark:bg-bor-primary-900/40 rounded-3xl p-8 lg:p-10 border border-gray-100 dark:border-white/5 shadow-sm h-full flex flex-col">
                                        <h3 className="text-2xl font-bold font-display text-bor-primary-900 dark:text-white mb-4">
                                            👉 Nasıl Çalışır?
                                        </h3>
                                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 mb-6 flex items-center gap-3">
                                            <span className="text-2xl">💡</span>
                                            <p className="text-sm text-bor-primary-600 dark:text-bor-primary-300 font-medium leading-relaxed">
                                                <strong className="text-bor-primary-900 dark:text-white">“İçerik”</strong> = 1 paylaşım için üretilen görsellerdir.
                                            </p>
                                        </div>
                                        <div className="font-medium text-bor-primary-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-white/5 pb-4">
                                            <span className="text-[#86AA00] dark:text-[#E2FF65]">👉</span> Her içerik = 1 sosyal medya paylaşımı (post)
                                        </div>
                                        <ul className="space-y-4 text-bor-primary-600 dark:text-bor-primary-300 mt-2">
                                            <li className="flex gap-4 items-start">
                                                <span className="text-bor-secondary font-bold text-lg mt-0.5">1.</span>
                                                <span className="leading-relaxed font-medium">Markanıza özel sahne oluşturularak aynı sahneden 4 farklı pozda görsel üretilir.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="text-bor-secondary font-bold text-lg mt-0.5">2.</span>
                                                <span className="leading-relaxed font-medium">En beğendiğinizi kullanırsınız.</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="text-bor-secondary font-bold text-lg mt-0.5">3.</span>
                                                <span className="leading-relaxed font-medium">Beğenmediklerinizi revize edebilirsiniz.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Ekstra Üretim Bloğu */}
                                    <div className="bg-[#E2FF65]/10 dark:bg-[#E2FF65]/5 rounded-3xl p-8 lg:p-10 border border-[#E2FF65]/30 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold font-display text-bor-primary-900 dark:text-white mb-3 flex flex-col gap-1">
                                                <span>👉 Ek Görsel İhtiyaçları</span>
                                                <span className="text-lg opacity-80 font-medium text-bor-primary-600 dark:text-bor-primary-400">(İstediğin kadar üretim)</span>
                                            </h3>
                                            <p className="text-bor-primary-600 dark:text-bor-primary-300 mb-8 text-base">
                                                Paket dışında ihtiyacınız olan tüm görselleri esnek şekilde üretebilirsiniz.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                                                <ul className="space-y-3 text-bor-primary-600 dark:text-bor-primary-300 font-medium">
                                                    <li className="flex items-center gap-3"><span className="text-[#86AA00] dark:text-[#E2FF65]">✓</span> Web banner</li>
                                                    <li className="flex items-center gap-3"><span className="text-[#86AA00] dark:text-[#E2FF65]">✓</span> Kampanya görselleri</li>
                                                    <li className="flex items-center gap-3"><span className="text-[#86AA00] dark:text-[#E2FF65]">✓</span> Ürün sayfası içerikleri</li>
                                                    <li className="flex items-center gap-3"><span className="text-[#86AA00] dark:text-[#E2FF65]">✓</span> Ek sosyal medya içerikleri</li>
                                                </ul>
                                                <div className="bg-white dark:bg-bor-primary-900 rounded-2xl p-6 text-center min-w-[180px] shadow-sm border border-gray-100 dark:border-white/10 mt-4 sm:mt-0">
                                                    <div className="text-3xl font-bold font-display text-bor-primary-900 dark:text-white">120 TL</div>
                                                    <div className="text-sm font-bold text-bor-primary-500 mt-1 uppercase tracking-wider">/ içerik</div>
                                                    <div className="text-xs text-bor-primary-400 mt-1">(4 alternatif görsel dahil)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <FaqSection faqs={aiFaqs} />
                            </motion.div>
                        )}

                        {/* E-Ticaret Tab */}
                        {activeTab === 'eticaret' && (
                            <motion.div
                                key="eticaret"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {ecommercePackages.map((plan, i) => (
                                        <PricingCard key={i} plan={plan} />
                                    ))}
                                </div>
                                <FaqSection faqs={ecommerceFaqs} />
                            </motion.div>
                        )}

                        {/* Kreatif Tasarım Tab */}
                        {activeTab === 'kreatif' && (
                            <motion.div
                                key="kreatif"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {creativePackages.map((plan, i) => (
                                        <PricingCard key={i} plan={plan} />
                                    ))}
                                </div>
                                <FaqSection faqs={creativeFaqs} />
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </Section>

            {/* BOTTOM CTA - İletişim Vurgusu */}
            <section className="bg-transparent py-24 px-6 md:px-16 lg:px-24 mb-1">
                <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
                    {/* Soft Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E2FF65]/10 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#E2FF65]/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h2 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-8 text-left">
                            Her gün <span className="italic font-light text-[#E2FF65]">paylaşım yapmaya</span> hazır mısınız?
                        </h2>
                        <p className="text-[#a8b8af] mb-10 text-lg text-left">
                            Düzenli paylaşım yaparak markanızı büyütmeye bugün başlayın.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <button 
                                onClick={() => window.location.href = 'https://wa.me/905531832344'}
                                className="bg-[#E2FF65] text-[#0b2117] hover:bg-[#d4f54e] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 group"
                            >
                                👉 Hemen Başlayalım
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="mailto:bilgi@pikselai.com" className="text-[#F4EFE6] font-medium border-b border-[#F4EFE6]/30 hover:border-[#E2FF65] hover:text-[#E2FF65] transition-all pb-1 flex items-center gap-2">
                                <MessageSquare size={18} /> bilgi@pikselai.com
                            </a>
                        </div>
                    </div>

                    {/* Creative SVG/Visual Element for CTA */}
                    <div className="relative z-10 hidden md:block w-full max-w-xs aspect-square">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full border-2 border-dashed border-[#E2FF65]/30 rounded-full flex items-center justify-center p-8"
                        >
                            <div className="w-full h-full border border-[#E2FF65]/50 rounded-full flex items-center justify-center">
                                <div className="w-20 h-20 bg-[#E2FF65] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(226,255,101,0.4)]">
                                    <TrendingUp size={32} className="text-[#0b2117]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

interface PricingPlan {
    name: string;
    price: string;
    suffix?: string;
    description: string;
    features: string[];
    cta: string;
    featured?: boolean;
    isPremium?: boolean;
    bottomMessage?: string;
}

function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <Card className={`relative flex flex-col h-full ${plan.featured ? 'border-[#E2FF65] shadow-lg ring-1 ring-[#E2FF65]/50' : 'border-gray-200 dark:border-white/10'}`}>
            {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E2FF65] text-bor-primary-900 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
                    En Popüler
                </div>
            )}
            <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-2xl font-bold !font-sans tracking-tight text-bor-primary-900 dark:text-white">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-bor-primary-900 dark:text-white">
                        {plan.price}
                    </span>
                    {plan.suffix && <span className="text-sm font-medium text-bor-primary-500">{plan.suffix}</span>}
                </div>
                <CardDescription className="mt-3 text-sm text-bor-primary-500 dark:text-bor-primary-400 leading-relaxed min-h-[40px]">
                    {plan.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
                <ul className="space-y-4 text-sm text-bor-primary-600 dark:text-bor-primary-300">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex gap-3 items-start">
                            <span className="text-[#86AA00] dark:text-[#E2FF65] font-bold mt-0.5">✓</span>
                            <span className="leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="pb-8 flex-col gap-4 items-stretch">
                <Button
                    className={`w-full py-6 text-base font-bold ${plan.featured ? 'bg-[#E2FF65] text-bor-primary-900 hover:bg-[#d4f54e] shadow-lg shadow-[#E2FF65]/20 border-none' : ''}`}
                    variant={plan.featured ? 'outline' : 'outline'}
                    href="https://wa.me/905531832344"
                >
                    {plan.cta}
                </Button>
                {plan.bottomMessage && (
                    <div className="w-full mt-1">
                        <span className="text-xs font-medium text-bor-primary-600 dark:text-bor-primary-400 bg-gray-50 dark:bg-white/5 py-2.5 px-3 rounded-xl block border border-gray-100 dark:border-white/5 text-center leading-tight">
                            💬 {plan.bottomMessage}
                        </span>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}

function FaqSection({ faqs }: { faqs: { q: string, a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-16 text-left max-w-4xl mx-auto w-full">
            <h3 className="text-3xl font-bold font-display text-bor-primary-900 dark:text-white mb-8 text-center">
                Sıkça Sorulan Sorular
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-bor-secondary/50 bg-white/50 dark:bg-bor-primary-900/30' : 'border-gray-200 dark:border-white/10 bg-white/30 dark:bg-transparent'}`}
                    >
                        <button 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                        >
                            <span className="font-semibold text-lg text-bor-primary-900 dark:text-white">{faq.q}</span>
                            <span className="shrink-0 text-bor-primary-400 transition-transform duration-300">
                                {openIndex === index ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                )}
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-5 text-bor-primary-600 dark:text-bor-primary-400"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
