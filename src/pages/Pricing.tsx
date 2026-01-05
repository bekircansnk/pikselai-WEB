import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import SocialMediaPackages from '../components/SocialMediaPackages'
import SectionNav from '../components/theme/SectionNav'
import SectionBand from '../components/theme/SectionBand'
import ThemeBg from '../components/theme/ThemeBg'

/**
 * Tema konfigürasyonları - 4 farklı section için (dark/light ayrı)
 * LIGHT tema: Daha koyu/belirgin arka planlar, yüksek kontrast
 * DARK tema: Mevcut kalite korunuyor
 */
const PRICING_SECTIONS = [
    {
        id: 'katalog-fiyat',
        label: 'Katalog',
        icon: '📁',
        bandTitle: 'Profesyonel Katalog Çözümü',
        bandSubtitle: 'Tek seferlik ödeme ile profesyonel katalog',
        theme: {
            dark: {
                primary: '#A855F7',
                accent: '#C084FC',
                bg1: 'rgba(168, 85, 247, 0.18)',
                bg2: 'rgba(139, 92, 246, 0.10)',
                glow: 'rgba(168, 85, 247, 0.40)'
            },
            light: {
                primary: '#7C3AED',
                accent: '#8B5CF6',
                bg1: 'rgba(124, 58, 237, 0.12)',
                bg2: 'rgba(139, 92, 246, 0.08)',
                glow: 'rgba(124, 58, 237, 0.20)'
            }
        }
    },
    {
        id: 'ai-fiyat',
        label: 'AI Fotoğraf',
        icon: '📸',
        bandTitle: 'Yapay Zeka Fotoğraf Üretimi',
        bandSubtitle: 'Aylık AI destekli görsel üretimi',
        theme: {
            dark: {
                primary: '#22D3EE',
                accent: '#67E8F9',
                bg1: 'rgba(34, 211, 238, 0.18)',
                bg2: 'rgba(6, 182, 212, 0.10)',
                glow: 'rgba(34, 211, 238, 0.40)'
            },
            light: {
                primary: '#0891B2',
                accent: '#06B6D4',
                bg1: 'rgba(8, 145, 178, 0.12)',
                bg2: 'rgba(6, 182, 212, 0.08)',
                glow: 'rgba(8, 145, 178, 0.20)'
            }
        }
    },
    {
        id: 'sosyal-medya-fiyat',
        label: 'Sosyal Medya',
        icon: '📱',
        bandTitle: 'Sosyal Medya Yönetimi',
        bandSubtitle: 'Fotoğraf odaklı profesyonel yönetim',
        theme: {
            dark: {
                primary: '#F472B6',
                accent: '#FB7185',
                bg1: 'rgba(244, 114, 182, 0.18)',
                bg2: 'rgba(236, 72, 153, 0.10)',
                glow: 'rgba(244, 114, 182, 0.40)'
            },
            light: {
                primary: '#DB2777',
                accent: '#EC4899',
                bg1: 'rgba(219, 39, 119, 0.12)',
                bg2: 'rgba(236, 72, 153, 0.08)',
                glow: 'rgba(219, 39, 119, 0.20)'
            }
        }
    },
    {
        id: 'pricing-ecommerce-solution',
        label: 'E-Ticaret',
        icon: '🛒',
        bandTitle: 'E-Ticaret Danışmanlığı',
        bandSubtitle: 'Shopify tabanlı profesyonel çözümler',
        theme: {
            dark: {
                primary: '#34D399',
                accent: '#6EE7B7',
                bg1: 'rgba(52, 211, 153, 0.18)',
                bg2: 'rgba(16, 185, 129, 0.10)',
                glow: 'rgba(52, 211, 153, 0.40)'
            },
            light: {
                primary: '#059669',
                accent: '#10B981',
                bg1: 'rgba(5, 150, 105, 0.12)',
                bg2: 'rgba(16, 185, 129, 0.08)',
                glow: 'rgba(5, 150, 105, 0.20)'
            }
        }
    }
]

/**
 * Profesyonel Katalog paketi (TEK SEFERLİK)
 */
const catalogPlan = {
    name: 'Sadece Profesyonel Katalog',
    price: '₺15.000',
    suffix: '/ tek seferlik',
    description: 'Kendi fotoğraflarını kullanmak isteyen işletmeler için profesyonel katalog çözümü.',
    features: [
        'Kendi fotoğraflarınızı yükleyin',
        'Hızlı arama ve filtreleme',
        'Mobil uyumlu tasarım',
        'Sınırsız albüm oluşturma',
        'Video desteği',
        'PWA (uygulama olarak yükleme)',
        'Google Drive entegrasyonu',
        'Tek seferlik ödeme – süresiz kullanım'
    ],
    cta: 'Paketi Seç',
    note: '💡 Bu paket TEK SEFERLİK ödemedir. Aylık ücret yoktur.'
}

/**
 * Yapay Zeka Fotoğraf Paketleri (AYLIK)
 */
const aiPlans = [
    {
        name: 'Başlangıç',
        price: '$39',
        suffix: '/ aylık',
        description: 'Yapay zekayı düşük riskle denemek isteyen işletmeler için.',
        features: ['Ayda 200 adet AI fotoğraf', 'Profesyonel prompt altyapısı', 'Katalog ve sosyal medya uyumlu', 'Aylık kullanım – iptal edilebilir'],
        cta: 'Paketi Seç',
        featured: false
    },
    {
        name: 'En Popüler',
        price: '$119',
        suffix: '/ aylık',
        description: 'Düzenli içerik üreten markalar için en dengeli paket.',
        features: ['Ayda 700 adet AI fotoğraf', 'Gelişmiş prompt mühendisliği', 'Tutarlı stil ve görsel bütünlük', 'Öncelikli üretim sırası', 'Profesyonel kullanım için önerilir'],
        featured: true,
        cta: 'En Popüler Paketi Seç',
        badge: '⭐ EN POPÜLER ⭐'
    },
    {
        name: 'Profesyonel',
        price: '$219',
        suffix: '/ aylık',
        description: 'Yüksek hacimli, sürekli görsel üretimi yapan markalar için.',
        features: ['Ayda 1.400 adet AI fotoğraf', 'Gelişmiş prompt + sahne varyasyonları', 'Büyük kataloglar için uygun', 'Öncelikli destek'],
        cta: 'Profesyonel Paketi Seç',
        featured: false
    }
]

/**
 * E-Ticaret Danışmanlığı Paketleri
 */
const ecommercePackages = [
    {
        name: 'Temel',
        title: 'Temel Shopify Kurulum Paketi',
        price: '₺29.000',
        priceSuffix: 'Tek Seferlik',
        description: 'Standart, temiz ve satışa hazır bir Shopify mağazası kurulumu.',
        includes: [
            'Shopify mağaza kurulumu',
            'Tema kurulumu ve temel ayarlar',
            'Ürünlerin müşteri görseleriyle eklenmesi',
            'Sayfa yapıları (Hakkımızda, İletişim, Politikalar)',
            'Ödeme ve kargo ayarları',
            'Anahtar teslim yayın',
            '3 ay teknik destek'
        ],
        cta: 'Teklif Al',
        featured: false
    },
    {
        name: 'Profesyonel',
        badge: '⭐ EN POPÜLER ⭐',
        title: 'AI Destekli Özel Shopify Kurulum Paketi',
        price: '₺39.000',
        priceSuffix: 'Tek Seferlik',
        description: 'Markanıza özel, yapay zeka destekli profesyonel mağaza.',
        includes: [
            'Temel Shopify Kurulum Paketindeki Her Şey',
            'Baştan sona kişisel danışmanlık',
            'Özel alanların birlikte belirlenmesi',
            'Ürünlere özel yapay zeka ile üretilmiş gerçekçi görseller',
            'Banner ve alanlara özel AI tasarımlar',
            'Koleksiyon ve vitrin alanları için özel görseller',
            'Ürün sayfalarında özel alanlar',
            'Meta alanlarda toplu özelleştirme desteği',
            'İçerik, başlık ve yapı desteği'
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

/**
 * Pricing - Ücretler sayfası bileşeni
 */
const Pricing = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [isPremiumOpen, setIsPremiumOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('katalog-fiyat')
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

    // Dark mode kontrolü
    const isDarkMode = () => {
        return document.documentElement.classList.contains('dark') ||
            document.body.classList.contains('dark') ||
            window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    // Scroll Trigger için flag'ler
    const isClickingRef = useRef<boolean>(false) // Tıklama sırasında observer'ı devre dışı bırak
    const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // IntersectionObserver ile aktif section tespiti - GELİŞTİRİLMİŞ SCROLL TRIGGER
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Tıklama sırasında observer'ı devre dışı bırak (titreme önleme)
                if (isClickingRef.current) return

                // Tüm intersecting entries'i topla
                const intersecting = entries.filter(e => e.isIntersecting)

                if (intersecting.length > 0) {
                    // En yüksek intersection ratio'ya sahip olanı bul
                    const mostVisible = intersecting.reduce((prev, current) => {
                        return (current.intersectionRatio > prev.intersectionRatio) ? current : prev
                    })

                    // Algılanan section'ı güncelle
                    const sectionId = mostVisible.target.getAttribute('id')
                    if (sectionId && mostVisible.intersectionRatio > 0.1) {
                        setActiveSection((prevSection) => {
                            // Sadece farklıysa güncelle (gereksiz re-render önle)
                            if (prevSection !== sectionId) {
                                return sectionId
                            }
                            return prevSection
                        })
                    }
                }
            },
            {
                root: null, // viewport
                rootMargin: '-40% 0px -40% 0px', // Ekranın ortasına yakın alanı referans al
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // Daha hassas algılama
            }
        )

        // Section'ları observe et
        const observeTimeout = setTimeout(() => {
            PRICING_SECTIONS.forEach((section) => {
                const element = document.getElementById(section.id)
                if (element) {
                    observer.observe(element)
                    sectionRefs.current[section.id] = element
                }
            })
        }, 100)

        return () => {
            clearTimeout(observeTimeout)
            observer.disconnect()
        }
    }, []) // Dependency array boş - sadece mount'ta çalışsın

    // FALLBACK: Manuel scroll dinleyicisi - Observer kaçırırsa koordinatlardan algıla
    useEffect(() => {
        const OFFSET_PAY = 200 // Bölüme yaklaşırken aktif olsun

        const handleScroll = () => {
            // Tıklama sırasında çalışmasın
            if (isClickingRef.current) return

            const scrollY = window.scrollY + window.innerHeight / 2 // Ekranın ortası

            // Tüm section'ların pozisyonlarını al
            const sectionPositions = PRICING_SECTIONS.map((section) => {
                const element = document.getElementById(section.id)
                if (!element) return { id: section.id, top: Infinity, bottom: Infinity }
                const rect = element.getBoundingClientRect()
                const top = rect.top + window.scrollY
                const bottom = top + rect.height
                return { id: section.id, top, bottom }
            })

            // Hangi section'ın içindeyiz?
            for (let i = sectionPositions.length - 1; i >= 0; i--) {
                const section = sectionPositions[i]
                // scrollY, section'ın başlangıcına yaklaştıysa (offset pay ile)
                if (scrollY >= section.top - OFFSET_PAY) {
                    setActiveSection((prevSection) => {
                        if (prevSection !== section.id) {
                            return section.id
                        }
                        return prevSection
                    })
                    break
                }
            }
        }

        // Throttle ile performans optimizasyonu
        let ticking = false
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', throttledScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', throttledScroll)
        }
    }, []) // Sadece mount'ta çalışsın

    // Aktif section değişince CSS variables güncelle - DARK/LIGHT DESTEKLI
    useEffect(() => {
        const section = PRICING_SECTIONS.find(s => s.id === activeSection)
        if (section) {
            const isDark = isDarkMode()
            const theme = isDark ? section.theme.dark : section.theme.light

            const root = document.documentElement
            root.style.setProperty('--theme-primary', theme.primary)
            root.style.setProperty('--theme-accent', theme.accent)
            root.style.setProperty('--theme-bg-1', theme.bg1)
            root.style.setProperty('--theme-bg-2', theme.bg2)
            root.style.setProperty('--theme-glow', theme.glow)

            console.log('THEME APPLIED:', activeSection, isDark ? 'DARK' : 'LIGHT', theme)
        }
    }, [activeSection])

    // Section'a smooth scroll - Anchor'a git (label görünsün)
    const handleJumpToSection = (sectionId: string) => {
        // Tıklama flag'ini aç - observer'ı devre dışı bırak
        isClickingRef.current = true

        // Önceki timeout'u temizle
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current)
        }

        // State'i hemen güncelle (gecikme olmasın)
        setActiveSection(sectionId)

        // Anchor ID: 'anchor-' + section id
        const anchorId = `anchor-${sectionId}`
        const anchor = document.getElementById(anchorId)
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            // Fallback: section'a git, center ile hizala
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }

        // Scroll tamamlandıktan sonra observer'ı tekrar aç (800ms sonra)
        clickTimeoutRef.current = setTimeout(() => {
            isClickingRef.current = false
        }, 800)
    }

    // Süreç adımları (kısa)
    const processSteps = [
        { step: 1, title: 'İhtiyaç Analizi', icon: '🔍', items: ['Hedef kitle belirleme', '%50 ödeme ile başlangıç'] },
        { step: 2, title: 'Mağaza Kurulumu', icon: '🏪', items: ['Tema & sayfa yapıları', 'Birlikte ilerleme'] },
        { step: 3, title: 'İçerik & Görsel', icon: '✨', items: ['AI görseller', 'Ön hazırlık tamamlanmadan satış yok'] },
        { step: 4, title: 'Yayın & Destek', icon: '🚀', items: ['Anahtar teslim', 'Kalan %50 ödeme', '3 ay destek'] }
    ]

    // FAQ (geniş kapsamlı)
    const faqs = [
        { question: 'Ödeme süreci nasıl işliyor?', answer: 'Kurulum başında %50 ödeme alınır. Mağaza anahtar teslim edildiğinde kalan %50 ödenir. Mağaza hazır olmadan ödeme planı başlamaz, acele yok.' },
        { question: 'Shopify aboneliği kime ait?', answer: 'Shopify hesabı ve aboneliği tamamen size aittir. Biz kurulum ve yönetim desteği sağlıyoruz, hesap kontrolü sizde kalır.' },
        { question: 'AI içerikler tamamen bana mı özel?', answer: 'Evet, tüm AI içerikler markanıza özel üretilir. Marka kimliğinize, ürünlerinize ve hedef kitlenize göre özelleştirilir.' },
        { question: 'Mağaza ne zaman yayına alınır?', answer: 'Mağaza açılış tarihi tamamen sizin planınıza göre belirlenir. Tüm ön hazırlıklar tamamlandıktan sonra, siz hazır olduğunuzda birlikte yayına alıyoruz.' },
        { question: 'Aylık paket ne zaman başlar?', answer: '360° paketinde aylık hizmet, mağaza anahtar teslim edildikten sonra başlar. Kurulum sürecinde aylık ücret alınmaz.' },
        { question: 'Sosyal medya hizmeti dahil mi?', answer: 'Sosyal medya yönetimi sadece 360° Premium paketine dahildir. Diğer paketler için ayrı sosyal medya paketlerimizi inceleyebilirsiniz.' },
        { question: 'Destek süresi bitince ne olur?', answer: '3 aylık teknik destek süresinin ardından, isteğe bağlı olarak aylık destek paketi veya tek seferlik danışmanlık hizmeti alabilirsiniz.' }
    ]

    // Animasyonlar
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
    const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
    const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

    // Aktif kategorinin tema renkleri
    const getActiveCategoryStyle = () => {
        const section = PRICING_SECTIONS.find(s => s.id === activeSection)
        if (!section) return {}
        const theme = isDarkMode() ? section.theme.dark : section.theme.light
        return {
            '--active-primary': theme.primary,
            '--active-accent': theme.accent,
            '--active-bg1': theme.bg1,
            '--active-bg2': theme.bg2,
            '--active-glow': theme.glow
        } as React.CSSProperties
    }

    return (
        <div
            className="pricing-page"
            data-active-category={activeSection}
            style={getActiveCategoryStyle()}
        >
            {/* Theme Background - 2 Katmanlı Crossfade */}
            <ThemeBg activeSection={activeSection} isDark={isDarkMode()} />

            {/* Section Navigator */}
            <SectionNav
                sections={PRICING_SECTIONS.map(s => ({ id: s.id, label: s.label, icon: s.icon }))}
                activeId={activeSection}
                onJump={handleJumpToSection}
            />

            <Helmet>
                <title>Ücretler | Pikselai - Profesyonel Katalog, E-Ticaret & AI Çözümleri</title>
                <meta name="description" content="Pikselai fiyatlandırma: Profesyonel katalog, yapay zeka fotoğraf üretimi, sosyal medya ve e-ticaret danışmanlığı paketleri." />
            </Helmet>

            {/* BÖLÜM 1: PROFESYONEL KATALOG */}
            <SectionBand icon="📁" title="Profesyonel Katalog Çözümü" subtitle="Tek seferlik ödeme" themeColor="#8B5CF6" anchorId="anchor-katalog-fiyat" />
            <section id="katalog-fiyat" className="pricing" data-category="katalog">
                <div className="pricing-container">
                    <motion.div className="pricing-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="pricing-title"><span className="gradient-text">Profesyonel</span> Katalog Çözümü</h1>
                        <p style={{ color: 'var(--color-accent-tertiary)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>Hızlı Arama • Modern Tasarım • Kolay Yönetim</p>
                        <p className="pricing-subtitle">Kendi fotoğraflarınızı kullanmak istiyorsanız, tek seferlik ödeme ile profesyonel katalog sistemine sahip olun</p>
                    </motion.div>

                    <motion.div className="pricing-grid" style={{ maxWidth: '500px', margin: '0 auto' }} variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div className="glass-card pricing-card" variants={cardVariants}>
                            <h3 className="pricing-plan-name">{catalogPlan.name}</h3>
                            <div className="pricing-price">{catalogPlan.price}<span className="pricing-price-suffix">{catalogPlan.suffix}</span></div>
                            <p style={{ color: 'var(--color-accent-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', padding: '0.5rem 1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: 'var(--radius-sm)', display: 'inline-block' }}>{catalogPlan.note}</p>
                            <p className="pricing-description">{catalogPlan.description}</p>
                            <ul className="pricing-features">{catalogPlan.features.map((f, i) => <li key={i} className="pricing-feature"><span className="pricing-feature-icon">✓</span>{f}</li>)}</ul>
                            <a href="https://api.whatsapp.com/send/?phone=%2B905531832344&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="glass-button pricing-cta glow">{catalogPlan.cta}</a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* BÖLÜM 2: YAPAY ZEKA FOTOĞRAF */}
            <SectionBand icon="📸" title="Yapay Zeka Fotoğraf Üretimi" subtitle="Aylık AI destekli görsel" themeColor="#22D3EE" anchorId="anchor-ai-fiyat" />
            <section id="ai-fiyat" className="pricing" data-category="ai-fotograf" style={{ paddingTop: 0 }}>
                <div className="pricing-container">
                    <motion.div className="pricing-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="pricing-title"><span className="gradient-text">Yapay Zeka</span> Fotoğraf Üretim Paketleri</h2>
                        <p style={{ color: 'var(--color-accent-tertiary)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>AYLIK</p>
                        <p className="pricing-subtitle">Her ay düzenli yapay zeka destekli fotoğraf üretimi ile katalog ve sosyal medya içeriklerinizi sürekli güncel tutun</p>
                    </motion.div>

                    <motion.div className="pricing-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {aiPlans.map((plan, index) => (
                            <motion.div key={index} className={`glass-card pricing-card ${plan.featured ? 'featured' : ''}`} variants={cardVariants}>
                                {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                                <h3 className="pricing-plan-name">{plan.name}</h3>
                                <div className="pricing-price">{plan.price}<span className="pricing-price-suffix">{plan.suffix}</span></div>
                                <p className="pricing-description">{plan.description}</p>
                                <ul className="pricing-features">{plan.features.map((f, i) => <li key={i} className="pricing-feature"><span className="pricing-feature-icon">✓</span>{f}</li>)}</ul>
                                <a href="https://api.whatsapp.com/send/?phone=%2B905531832344&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={`glass-button pricing-cta ${plan.featured ? 'glow' : 'glass-button-secondary'}`}>{plan.cta}</a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SOSYAL MEDYA */}
            <SectionBand icon="📱" title="Sosyal Medya Yönetimi" subtitle="Fotoğraf odaklı profesyonel yönetim" themeColor="#F472B6" anchorId="anchor-sosyal-medya-fiyat" />
            <SocialMediaPackages />

            {/* E-TİCARET DANIŞMANLIĞI PAKETLERİ */}
            <SectionBand icon="🛒" title="E-Ticaret Danışmanlığı" subtitle="Shopify tabanlı profesyonel çözümler" themeColor="#34D399" anchorId="anchor-pricing-ecommerce-solution" />
            <section id="pricing-ecommerce-solution" className="pricing ecommerce-packages" data-category="e-ticaret">
                <div className="pricing-container">
                    <motion.div className="pricing-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="pricing-title"><span className="gradient-text">E-Ticaret</span> Yolculuğunuzun Her Adımında Profesyonel Destek</h2>
                        <p className="pricing-subtitle">Shopify tabanlı profesyonel e-ticaret çözümleri</p>
                    </motion.div>

                    <motion.div
                        className="pricing-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {ecommercePackages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className={`glass-card pricing-card ecommerce-package-card ${pkg.featured ? 'featured' : ''} ${pkg.isPremium ? 'premium-card' : ''}`}
                                variants={cardVariants}
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
                                            onClick={() => setIsPremiumOpen(true)}
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

                    <motion.div className="text-center" style={{ marginTop: '2rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <Link to="/e-ticaret-danismanligi" className="glass-button glass-button-secondary">Detaylı Bilgi için E-Ticaret Sayfasını İncele →</Link>
                    </motion.div>
                </div>
            </section>

            {/* PREMIUM PAKET DETAY MODAL */}
            <AnimatePresence>
                {isPremiumOpen && (
                    <motion.div
                        className="ecommerce-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsPremiumOpen(false)}
                    >
                        <motion.div
                            className="ecommerce-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="ecommerce-modal-close" onClick={() => setIsPremiumOpen(false)}>✕</button>
                            <h2 className="ecommerce-modal-title"><span className="gradient-text">360°</span> Çözüm Ortaklığı Detayları</h2>
                            <p className="ecommerce-modal-subtitle">Aylık ₺25.000 ile aldığınız tüm hizmetler</p>

                            <div className="ecommerce-modal-content">
                                {ecommercePackages[2].categories?.map((cat, i) => (
                                    <div key={i} className="ecommerce-modal-category">
                                        <h4 className="ecommerce-modal-category-title"><span>{cat.icon}</span> {cat.title}</h4>
                                        <ul className="ecommerce-modal-category-list">
                                            {cat.items.map((item, j) => (
                                                <li key={j}>
                                                    {item.includes('HEDİYE') ? (
                                                        <Link to="/profesyonel-katalog" className="ecommerce-modal-gift-link" onClick={() => setIsPremiumOpen(false)}>
                                                            <span>✓</span> {item}
                                                        </Link>
                                                    ) : (
                                                        <><span>✓</span> {item}</>
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

            {/* PİKSELAI NASIL YANINIZDA */}
            <section className="features ecommerce-process">
                <div className="features-container" style={{ maxWidth: '900px' }}>
                    <motion.div className="features-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="features-title"><span className="gradient-text">PikselAI</span> Nasıl Yanınızda?</h2>
                        <p className="features-subtitle">Güvenli ve kontrollü süreç</p>
                    </motion.div>

                    <motion.div className="timeline-container" style={{ maxWidth: '700px', margin: '0 auto' }} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {processSteps.map((step, index) => (
                            <motion.div key={index} className="timeline-item" variants={cardVariants}>
                                <div className="timeline-step">
                                    <span className="timeline-icon">{step.icon}</span>
                                    <span className="timeline-number">{step.step}</span>
                                </div>
                                {index < processSteps.length - 1 && <div className="timeline-connector" />}
                                <div className="glass-card timeline-content">
                                    <h4 className="timeline-title">{step.title}</h4>
                                    <ul className="timeline-list">{step.items.map((item, i) => <li key={i}><span className="pricing-feature-icon">→</span>{item}</li>)}</ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SIK SORULAN SORULAR */}
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

            {/* SON CTA */}
            <section className="features ecommerce-final-cta">
                <div className="features-container" style={{ maxWidth: '700px' }}>
                    <motion.div className="glass-card ecommerce-cta-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="features-title">Mağazanızı <span className="gradient-text">Birlikte Kuralım</span></h2>
                        <p className="features-subtitle" style={{ marginBottom: '1.5rem' }}>E-ticaret yolculuğunuza profesyonel bir başlangıç yapın</p>

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

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://api.whatsapp.com/send/?phone=%2B905531832344&text=Merhaba, bilgi almak istiyorum.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="glass-button glow">Ücretsiz Ön Görüşme</a>
                            <Link to="/e-ticaret-danismanligi#paketler" className="glass-button glass-button-secondary">Paketleri İncele</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
