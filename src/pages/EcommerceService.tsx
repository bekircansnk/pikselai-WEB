import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

/**
 * E-Ticaret Danışmanlığı (Shopify) Sayfası
 * Anahtar teslim mağaza kurulumu + AI destekli büyüme hizmeti
 */

// Hedef kitle kartları
interface TargetCard {
    icon: string
    title: string
    description: string
}

const targetAudience: TargetCard[] = [
    {
        icon: '🚀',
        title: 'İlk Kez E-Ticaret Mağazası Açacaklar',
        description: 'Sıfırdan başlayıp satışa hazır bir Shopify mağazası isteyenler için eksiksiz kurulum ve rehberlik.'
    },
    {
        icon: '🔄',
        title: 'Mevcut Mağazasını Shopify\'a Taşımak İsteyenler',
        description: 'Mevcut e-ticaret sitenizi Shopify altyapısına güvenli şekilde taşıyarak daha güçlü, ölçeklenebilir ve modern bir yapıya kavuşturuyoruz.'
    },
    {
        icon: '🎨',
        title: 'Görsel ve İçerik Üretiminde Zorlananlar',
        description: 'Yapay zeka destekli görseller ve içeriklerle zamanınızı ve bütçenizi koruyun.'
    },
    {
        icon: '🏷️',
        title: 'Meta Alanlar & İçerik Yapısında Toplu Özelleştirme',
        description: 'Ürün ve koleksiyonlar için meta alanlarda toplu düzenleme, başlık, açıklama ve yapı optimizasyonu ile mağazanızı SEO ve dönüşüm odaklı hale getiriyoruz.'
    },
    {
        icon: '🛡️',
        title: 'Risksiz ve Planlı Geçiş',
        description: 'Mevcut platformunuzda aktif bir aboneliğiniz olabilir. Bu süreçte acele etmenizi istemiyoruz. PikselAI ile mağazanız, ödeme planı başlatılmadan Shopify altyapısında tamamen kurulur ve satışa hazır hale getirilir.'
    },
    {
        icon: '🤝',
        title: 'Anahtar Teslim Birlikte Yayına Alma',
        description: 'Mağazanızı tek başınıza değil, birlikte yayına alıyoruz. Başlangıçta %50, anahtar teslimde kalan %50 ödeme yapılır. 3 aylık teknik destek, mağaza yayına alındıktan sonra başlar.'
    }
]

// Süreç adımları
interface ProcessStep {
    step: number
    title: string
    items: string[]
    icon: string
}

const processSteps: ProcessStep[] = [
    {
        step: 1,
        title: 'İhtiyaç Analizi',
        icon: '🔍',
        items: ['Hedef kitle belirleme', 'Ürün yapısı inceleme', 'Marka dili oluşturma', '%50 ödeme ile sürece başlangıç']
    },
    {
        step: 2,
        title: 'Shopify Mağaza Kurulumu',
        icon: '🏪',
        items: ['Tema kurulumu', 'Sayfa yapıları', 'Navigasyon', 'Ödeme & kargo ayarları', 'Birlikte ilerleme – her adımda bilgilendirme']
    },
    {
        step: 3,
        title: 'İçerik & Görsel Süreç',
        icon: '✨',
        items: ['Ürün sayfaları', 'Banner alanları', 'Koleksiyon görselleri', 'Ön hazırlıklar tamamlanmadan satışa açılmaz']
    },
    {
        step: 4,
        title: 'Yayın & Destek',
        icon: '🚀',
        items: ['Anahtar teslim yayına alma', 'Kalan %50 ödeme teslimde', '3 ay teknik destek teslimden sonra başlar']
    },
    {
        step: 5,
        title: 'Ödeme Esnekliği & Güvenli Başlangıç',
        icon: '💳',
        items: ['Kurulum sürecinde %50 – anahtar teslimde %50', 'Mağaza açılış tarihi size özel', 'Ödeme planı mağaza hazır olunca başlar', 'Acele yok, risk yok, yalnız değilsiniz']
    }
]

// Paket bilgileri
interface Package {
    name: string
    badge?: string
    title: string
    price: string
    priceSuffix: string
    monthlyPrice?: string
    monthlySuffix?: string
    description: string
    includes: string[]
    excludes?: string[]
    // Paket 3 için detaylı kategoriler
    categories?: {
        title: string
        icon: string
        items: string[]
    }[]
    cta: string
    featured?: boolean
    isPremium?: boolean
}

const packages: Package[] = [
    {
        name: 'Temel',
        title: 'Temel Shopify Kurulum Paketi',
        price: '₺29.000',
        priceSuffix: 'Tek Seferlik',
        description: 'Standart, temiz ve satışa hazır bir Shopify mağazası kurulumu. Bu paket sadece kurulum paketidir, aylık devam eden hizmet içermez.',
        includes: [
            'Shopify mağaza kurulumu',
            'Tema kurulumu ve temel ayarlar',
            'Ürünlerin müşteri tarafından sağlanan görsellerle eklenmesi',
            'Sayfa yapıları (Hakkımızda, İletişim, Politikalar)',
            'Ödeme ve kargo ayarları',
            'Anahtar teslim yayın',
            '3 ay teknik destek'
        ],
        excludes: [
            'Özel kişiselleştirmeler',
            'Yapay zeka görselleri',
            'Ürün içerik geliştirme',
            'Meta & SEO özelleştirmeleri'
        ],
        cta: 'Teklif Al'
    },
    {
        name: 'Profesyonel',
        badge: '⭐ EN POPÜLER ⭐',
        title: 'AI Destekli Özel Shopify Kurulum Paketi',
        price: '₺39.000',
        priceSuffix: 'Tek Seferlik',
        description: 'Markanıza özel, baştan sona kişiselleştirilmiş ve yapay zeka destekli profesyonel mağaza. Bu paket sadece kurulum paketidir, aylık devam eden hizmet içermez.',
        includes: [
            'Temel Shopify Kurulum Paketindeki Her Şey',
            'Baştan sona kişisel danışmanlık',
            'Özel alanların birlikte belirlenmesi',
            'Ürünlere özel yapay zeka ile üretilmiş gerçekçi görseller',
            'Banner ve alanlara özel AI tasarımlar',
            'Koleksiyon ve vitrin alanları için özel görseller',
            'Ürün sayfalarında özel alanlar',
            'Meta alanlarda toplu özelleştirme desteği',
            'İçerik, başlık ve yapı desteği',
            'Yayın sonrası yönlendirme'
        ],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Premium',
        badge: '🔥 TAM KAPSAM 🔥',
        title: 'PikselAI 360° E-Ticaret Çözüm Ortaklığı',
        price: '₺49.000',
        priceSuffix: 'Tek Seferlik Kurulum',
        monthlyPrice: '₺25.000',
        monthlySuffix: '/ ay',
        description: 'Kurulum + Sürekli Yönetim + Sosyal Medya + Katalog — Tam Kapsamlı Çözüm. Bu paket iki aşamalıdır ve bölünemez.',
        includes: [
            'Temel Shopify Kurulum Paketindeki Her Şey',
            'AI Destekli Özel Shopify Kurulum Paketindeki Her Şey',
            'Yapay zeka ile toplu ürün açıklamaları oluşturma',
            'SEO uyumlu ürün & kategori metinleri',
            'Düşük performanslı ürünler için AI iyileştirme önerileri',
            'Kampanya & indirim dönemleri için dinamik yapı kurulumu',
            'Kurulum sonrası aktif yönetim süreci',
            'Aylık performans takibi ve iyileştirme',
            'Öncelikli destek & hızlı revize hakkı',
            '"Kurduk bitti" değil, birlikte büyüme modeli'
        ],
        categories: [
            {
                title: 'Yapay Zeka Destekli E-Ticaret Yönetimi',
                icon: '🧠',
                items: [
                    'Yapay zeka ile toplu ürün açıklamaları oluşturma',
                    'Yapay zeka destekli meta title & meta description üretimi',
                    'SEO uyumlu ürün ve kategori metinleri',
                    'Koleksiyon & ürün sayfalarında gelişmiş AI optimizasyonu'
                ]
            },
            {
                title: 'Yapay Zeka Destekli Görsel & Katalog Çözümleri',
                icon: '📸',
                items: [
                    '🎁 Dijital Katalog Çözümü – HEDİYE (₺15.000 değerinde)',
                    '⭐ Markanıza özel dijital katalog – En popüler özellik',
                    '🔍 Binlerce ürün arasında anında arama',
                    '💬 Bayilere WhatsApp ile tek tıkla ürün paylaşımı'
                ]
            },
            {
                title: 'Yapay Zeka Destekli Reklam & Büyüme',
                icon: '📢',
                items: [
                    'Yapay zeka destekli reklam araştırması',
                    'Doğru hedef kitle analizi',
                    'Ürün ve kampanya bazlı reklam stratejileri',
                    'Reklam metni + kreatif üretimi'
                ]
            },
            {
                title: 'Sosyal Medya Pro Yönetimi (Aylık – Dahil)',
                icon: '📱',
                items: [
                    'Haftalık 12 adet AI destekli post → 48 post / ay',
                    'Haftalık 7 adet AI destekli hikâye → 28 hikâye / ay',
                    'Gelişmiş yapay zeka görsel üretimi',
                    'Özel konsept & kampanya tasarımları',
                    'Feed & grid tasarımı',
                    'Aylık + haftalık içerik planlaması'
                ]
            },
            {
                title: 'Reklam & Performans Yönetimi',
                icon: '📈',
                items: [
                    'Reklam kreatifleri + varyasyonlar',
                    'Reklam performans optimizasyonu',
                    'Satış ve büyüme odaklı iyileştirme'
                ]
            },
            {
                title: 'Raporlama & Destek',
                icon: '📑',
                items: [
                    'Detaylı aylık performans raporu',
                    'Öncelikli destek',
                    'Hızlı revize hakkı'
                ]
            }
        ],
        cta: '360° Çözüm Ortaklığı Başlat',
        isPremium: true
    }
]

// Neden PikselAI avantajları
const advantages: TargetCard[] = [
    {
        icon: '💼',
        title: 'Gerçek Projelerden Gelen Deneyim',
        description: 'Farklı sektörlerden onlarca başarılı e-ticaret projesi deneyimi.'
    },
    {
        icon: '🤖',
        title: 'Yapay Zekayı Gerçekten Kullanan Yapı',
        description: 'AI sadece bir slogan değil, tüm süreçlerimize entegre bir çözüm aracı.'
    },
    {
        icon: '🤝',
        title: 'Sadece Kurup Bırakmayan Yaklaşım',
        description: '3 ay teknik destek ve sonrasında da ihtiyaç duyduğunuzda yanınızdayız.'
    },
    {
        icon: '🛡️',
        title: 'Risksiz ve Planlı Geçiş',
        description: 'Mevcut platformunuzda aktif bir aboneliğiniz olabilir. Bu süreçte acele etmenizi istemiyoruz. PikselAI ile mağazanız, ödeme planı başlatılmadan Shopify altyapısında tamamen kurulur ve satışa hazır hale getirilir.'
    },
    {
        icon: '🧩',
        title: 'Ödeme Zamanı Size Ait',
        description: 'Ürünleriniz, içerikleriniz, görselleriniz ve teknik yapı arka planda eksiksiz hazırlanır. Ödeme planı, siz ne zaman hazırsanız o zaman başlar. Böylece mevcut lisanslarınız yanmaz, ek platform maliyeti oluşmaz.'
    },
    {
        icon: '🔑',
        title: 'Anahtar Teslim Birlikte Yayına Alma',
        description: 'Mağazanızı tek başınıza değil, birlikte yayına alıyoruz. Başlangıçta %50, anahtar teslimde kalan %50 ödeme yapılır. 3 aylık teknik destek, mağaza yayına alındıktan sonra başlar.'
    }
]

// SSS
interface FAQ {
    question: string
    answer: string
}

const faqs: FAQ[] = [
    {
        question: 'Shopify nedir, neden tercih ediyorsunuz?',
        answer: 'Shopify, dünya genelinde en çok tercih edilen e-ticaret platformudur. Güvenilir altyapısı, kolay yönetim paneli, güçlü ödeme entegrasyonları ve sürekli güncellemeler ile işletmenizi büyütmenize olanak tanır. Teknik altyapıyla uğraşmadan satışa odaklanabilirsiniz.'
    },
    {
        question: 'Görsellerim yoksa ne oluyor?',
        answer: 'Yapay zeka destekli paketlerimizde (Paket 2 ve üzeri) ürün görsellerinizi AI ile oluşturuyoruz. Gerçekçi, profesyonel ve markanıza uygun görseller üretiyoruz. Temel pakette ise sizin sağladığınız görsellerle çalışıyoruz.'
    },
    {
        question: 'Kurulum ne kadar sürer?',
        answer: 'Paket ve içerik hacmine göre değişmekle birlikte, standart kurulum 2-4 hafta arasında tamamlanır. Süreç boyunca sizi bilgilendiriyor ve her aşamada onayınızı alıyoruz.'
    },
    {
        question: '3 ay destek neleri kapsıyor?',
        answer: 'Teknik sorunların çözümü, küçük düzenlemeler, ürün ekleme/güncelleme desteği, ödeme/kargo sorunlarında yönlendirme ve genel danışmanlık hizmetleri 3 aylık destek kapsamındadır.'
    },
    {
        question: 'Aylık hizmet zorunlu mu?',
        answer: 'Paket 1 ve Paket 2 yalnızca tek seferlik kurulum paketleridir, aylık hizmet içermez. Paket 3 (360° Çözüm Ortaklığı) ise kurulum + zorunlu aylık hizmet olarak birlikte sunulmaktadır. Bu paket bölünemez ve kurulum sonrası aylık hizmet paketin doğal devamıdır.'
    }
]

// Service Schema JSON-LD
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Ticaret Danışmanlığı - Shopify Mağaza Kurulumu",
    "provider": {
        "@type": "Organization",
        "name": "Pikselai",
        "url": "https://pikselai.com"
    },
    "description": "Anahtar teslim Shopify mağaza kurulumu, yapay zeka destekli görseller ve 3 ay teknik destek ile e-ticarete profesyonel başlangıç.",
    "areaServed": "TR"
}

/**
 * EcommerceService - E-Ticaret Danışmanlığı Landing Page
 */
const EcommerceService = () => {
    // FAQ açık/kapalı state
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    // Premium paket modal state
    const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false)

    // Animasyon varyantları
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <>
            {/* SEO Meta Etiketleri ve Schema */}
            <Helmet>
                <title>E-Ticaret Danışmanlığı | Shopify Mağaza Kurulumu | Pikselai</title>
                <meta name="description" content="Anahtar teslim Shopify mağaza kurulumu, yapay zeka destekli görseller ve 3 ay teknik destek. PikselAI ile e-ticarete profesyonel başlayın." />
                <link rel="canonical" href="https://pikselai.com/e-ticaret-danismanligi" />
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>

            {/* ========================================
                BÖLÜM 1: HERO SECTION
                ======================================== */}
            <section className="hero ecommerce-hero">
                <div className="hero-glow-1" aria-hidden="true" />
                <div className="hero-glow-2" aria-hidden="true" />

                {/* Breadcrumbs */}
                <Breadcrumbs />

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="hero-badge-dot" />
                        Anahtar Teslim E-Ticaret Çözümü
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="gradient-text">PikselAI</span> ile Shopify E-Ticaret Danışmanlığı
                        <br />
                        <span style={{ fontSize: '0.6em', fontWeight: 600, opacity: 0.9 }}>
                            Anahtar Teslim Mağaza Kurulumu + Yapay Zeka Destekli Büyüme
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Sıfırdan satışa hazır, modern ve ölçeklenebilir bir Shopify mağazası kuruyoruz.
                        Kurulumdan yayına, içerikten görsele, reklama kadar tüm süreçte yanınızdayız.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <a href="#paketler" className="glass-button glow">
                            <span>📦</span>
                            Paketleri İncele
                        </a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=%2B905531832344&text=Merhaba, E-Ticaret Danışmanlığı hakkında bilgi almak istiyorum.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button glass-button-secondary"
                        >
                            <span>💬</span>
                            Ücretsiz Ön Görüşme
                        </a>
                    </motion.div>

                    {/* Hero Rozetleri */}
                    <motion.div
                        className="ecommerce-badges"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <span className="ecommerce-badge">🛍️ Shopify Uzmanlığı</span>
                        <span className="ecommerce-badge">🔑 Anahtar Teslim Kurulum</span>
                        <span className="ecommerce-badge">🛠️ 3 Ay Teknik Destek</span>
                        <span className="ecommerce-badge">🤖 Yapay Zeka Destekli İçerikler</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* ========================================
                BÖLÜM 2: BU HİZMET KİMLER İÇİN?
                ======================================== */}
            <section className="features ecommerce-target">
                <div className="features-container">
                    <motion.div
                        className="features-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="features-title">
                            Bu Hizmet <span className="gradient-text">Kimler İçin?</span>
                        </h2>
                        <p className="features-subtitle">
                            E-ticaret yolculuğunuzun her aşamasında yanınızdayız
                        </p>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {targetAudience.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-card feature-card"
                                variants={itemVariants}
                            >
                                <span className="feature-icon">{item.icon}</span>
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================
                BÖLÜM 3: PİKSELAI NASIL YANINIZDA?
                ======================================== */}
            <section className="features ecommerce-process">
                <div className="features-container">
                    <motion.div
                        className="features-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="features-title">
                            <span className="gradient-text">PikselAI</span> Nasıl Yanınızda?
                        </h2>
                        <p className="features-subtitle">
                            Baştan sona profesyonel destek ile e-ticaret yolculuğunuz
                        </p>
                    </motion.div>

                    <motion.div
                        className="ecommerce-timeline"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                variants={itemVariants}
                            >
                                <div className="timeline-step">
                                    <span className="timeline-icon">{step.icon}</span>
                                    <span className="timeline-number">{step.step}</span>
                                </div>
                                <div className="timeline-content glass-card">
                                    <h3 className="timeline-title">{step.title}</h3>
                                    <ul className="timeline-list">
                                        {step.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="timeline-connector" />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================
                BÖLÜM 4: PAKETLER
                ======================================== */}
            <section id="paketler" className="pricing ecommerce-packages">
                <div className="pricing-container">
                    <motion.div
                        className="pricing-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="pricing-title">
                            <span className="gradient-text">E-Ticaret</span> Paketlerimiz
                        </h2>
                        <p className="pricing-subtitle">
                            İhtiyacınıza uygun paketi seçin, gerisini bize bırakın
                        </p>
                    </motion.div>

                    <motion.div
                        className="pricing-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className={`glass-card pricing-card ecommerce-package-card ${pkg.featured ? 'featured' : ''} ${pkg.isPremium ? 'premium-card' : ''}`}
                                variants={itemVariants}
                            >
                                {pkg.badge && (
                                    <div className="pricing-badge">{pkg.badge}</div>
                                )}

                                <h3 className="pricing-plan-name">{pkg.title}</h3>

                                {/* Fiyat Alanı */}
                                <div className="ecommerce-price-block">
                                    <div className="pricing-price">
                                        {pkg.price}
                                        <span className="pricing-price-suffix">{pkg.priceSuffix}</span>
                                    </div>
                                    {pkg.monthlyPrice && (
                                        <div
                                            className="ecommerce-monthly-price ecommerce-monthly-clickable"
                                            onClick={() => setIsPremiumModalOpen(true)}
                                        >
                                            <span className="ecommerce-plus">+</span>
                                            <span className="ecommerce-monthly-value">{pkg.monthlyPrice}</span>
                                            <span className="ecommerce-monthly-suffix">{pkg.monthlySuffix}</span>
                                            <span className="ecommerce-monthly-label">3 Ay Devam Etme Sözü</span>
                                            <span className="ecommerce-monthly-hint">📋 Detaylar için tıklayınız</span>
                                        </div>
                                    )}
                                </div>

                                <p className="pricing-description">{pkg.description}</p>

                                {/* Dahil olanlar - Temel liste */}
                                <ul className="pricing-features">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="pricing-feature">
                                            <span className="pricing-feature-icon">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Premium Paket için kısa özet - detaylar modal'da */}
                                {pkg.isPremium && (
                                    <div className="ecommerce-premium-summary">
                                        <Link
                                            to="/profesyonel-katalog"
                                            className="ecommerce-gift-highlight"
                                        >
                                            <span className="ecommerce-gift-icon">🎁</span>
                                            <span className="ecommerce-gift-text">
                                                Dijital Katalog Çözümü – HEDİYE
                                                <span className="ecommerce-gift-value">₺15.000 değerinde</span>
                                            </span>
                                            <span className="ecommerce-gift-arrow">→</span>
                                        </Link>
                                        <p className="ecommerce-premium-note">
                                            + Yapay Zeka Destekli E-Ticaret Yönetimi, Görsel Üretimi, Sosyal Medya Pro ve daha fazlası...
                                        </p>
                                    </div>
                                )}

                                {/* Hariç olanlar */}
                                {pkg.excludes && pkg.excludes.length > 0 && (
                                    <ul className="pricing-excludes">
                                        {pkg.excludes.map((item, i) => (
                                            <li key={i} className="pricing-exclude">
                                                <span className="pricing-exclude-icon">✗</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <a
                                    href="https://api.whatsapp.com/send/?phone=%2B905531832344&text=Merhaba, E-Ticaret Danışmanlığı hakkında bilgi almak istiyorum.&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`glass-button pricing-cta ${pkg.featured || pkg.isPremium ? 'glow' : 'glass-button-secondary'}`}
                                >
                                    {pkg.cta}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Premium Paket Detay Modal */}
            <AnimatePresence>
                {isPremiumModalOpen && (
                    <motion.div
                        className="ecommerce-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsPremiumModalOpen(false)}
                    >
                        <motion.div
                            className="ecommerce-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="ecommerce-modal-close"
                                onClick={() => setIsPremiumModalOpen(false)}
                            >
                                ✕
                            </button>

                            <h2 className="ecommerce-modal-title">
                                <span className="gradient-text">360°</span> Çözüm Ortaklığı Detayları
                            </h2>
                            <p className="ecommerce-modal-subtitle">
                                Aylık ₺25.000 ile aldığınız tüm hizmetler
                            </p>

                            <div className="ecommerce-modal-content">
                                {packages[2].categories?.map((category, catIndex) => (
                                    <div key={catIndex} className="ecommerce-modal-category">
                                        <h4 className="ecommerce-modal-category-title">
                                            <span>{category.icon}</span> {category.title}
                                        </h4>
                                        <ul className="ecommerce-modal-category-list">
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    {item.includes('Dijital Katalog') ? (
                                                        <Link
                                                            to="/profesyonel-katalog"
                                                            className="ecommerce-modal-gift-link"
                                                            onClick={() => setIsPremiumModalOpen(false)}
                                                        >
                                                            <span className="pricing-feature-icon">🎁</span>
                                                            {item}
                                                        </Link>
                                                    ) : (
                                                        <>
                                                            <span className="pricing-feature-icon">✓</span>
                                                            {item}
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://api.whatsapp.com/send/?phone=%2B905531832344&text=Merhaba, 360° E-Ticaret Çözüm Ortaklığı hakkında bilgi almak istiyorum.&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button glow ecommerce-modal-cta"
                            >
                                360° Çözüm Ortaklığı Başlat
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================================
                BÖLÜM 6: NEDEN PİKSELAI?
                ======================================== */}
            <section className="features ecommerce-why">
                <div className="features-container">
                    <motion.div
                        className="features-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="features-title">
                            Neden <span className="gradient-text">PikselAI?</span>
                        </h2>
                        <p className="features-subtitle">
                            Fark yaratan yaklaşımımız
                        </p>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {advantages.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-card feature-card"
                                variants={itemVariants}
                            >
                                <span className="feature-icon">{item.icon}</span>
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================
                BÖLÜM 7: SIK SORULAN SORULAR
                ======================================== */}
            <section className="features ecommerce-faq">
                <div className="features-container">
                    <motion.div
                        className="features-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="features-title">
                            Sık Sorulan <span className="gradient-text">Sorular</span>
                        </h2>
                        <p className="features-subtitle">
                            Merak ettiklerinizi yanıtlıyoruz
                        </p>
                    </motion.div>

                    <motion.div
                        className="ecommerce-faq-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={`glass-card ecommerce-faq-item ${openFaq === index ? 'open' : ''}`}
                                variants={itemVariants}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className="ecommerce-faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="ecommerce-faq-toggle">
                                        {openFaq === index ? '−' : '+'}
                                    </span>
                                </div>
                                {openFaq === index && (
                                    <motion.div
                                        className="ecommerce-faq-answer"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================
                BÖLÜM 8: SON CTA
                ======================================== */}
            <section className="features ecommerce-final-cta">
                <div className="features-container">
                    <motion.div
                        className="glass-card ecommerce-cta-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="features-title" style={{ marginBottom: '1rem' }}>
                            Mağazanızı <span className="gradient-text">Birlikte Kuralım</span>
                        </h2>
                        <p className="features-subtitle" style={{ marginBottom: '1.5rem' }}>
                            E-ticaret yolculuğunuza profesyonel bir başlangıç yapın
                        </p>

                        {/* Mail Adresi */}
                        <a
                            href="mailto:bilgi@pikselai.com"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                marginBottom: '1.5rem',
                                background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                                color: '#fff',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)'
                            }}
                        >
                            ✉️ bilgi@pikselai.com
                        </a>

                        <div className="hero-buttons">
                            <a
                                href="https://api.whatsapp.com/send/?phone=%2B905531832344&text=Merhaba, E-Ticaret Danışmanlığı için ücretsiz görüşme yapmak istiyorum.&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button glow"
                            >
                                <span>💬</span>
                                Ücretsiz Ön Görüşme
                            </a>
                            <Link to="#paketler" className="glass-button glass-button-secondary">
                                <span>📦</span>
                                Paketleri İncele
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default EcommerceService
