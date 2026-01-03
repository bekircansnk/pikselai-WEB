import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SocialMediaPackages from '../components/SocialMediaPackages'

/**
 * Profesyonel Katalog paketi veri tipi (TEK SEFERLİK)
 */
interface CatalogPlan {
    name: string
    price: string
    suffix: string
    description: string
    features: string[]
    cta: string
    note: string
}

/**
 * AI Fotoğraf Üretim paketi veri tipi (AYLIK)
 */
interface AIPlan {
    name: string
    price: string
    suffix: string
    description: string
    features: string[]
    featured?: boolean
    cta: string
    badge?: string
}

/**
 * Profesyonel Katalog Paketi - TEK SEFERLİK
 * Kendi fotoğraflarını kullanmak isteyen işletmeler için
 */
const catalogPlan: CatalogPlan = {
    name: 'Sadece Profesyonel Katalog',
    price: '₺15.000',
    suffix: '/ tek seferlik',
    description: 'Kendi fotoğraflarını kullanmak isteyen işletmeler için, yapay zeka olmadan sunulan profesyonel katalog çözümü.',
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
 * Yapay Zeka Fotoğraf Üretim Paketleri - AYLIK
 * Her ay düzenli AI destekli fotoğraf üretimi
 */
const aiPlans: AIPlan[] = [
    {
        name: 'Başlangıç',
        price: '$39',
        suffix: '/ aylık',
        description: 'Yapay zekayı düşük riskle denemek isteyen işletmeler için aylık başlangıç paketi.',
        features: [
            'Ayda 200 adet AI destekli fotoğraf üretimi',
            'Profesyonel prompt altyapısı',
            'Katalog ve sosyal medya uyumlu içerikler',
            'Her ay yenilenen üretim hakkı',
            'Aylık kullanım – iptal edilebilir'
        ],
        cta: 'Paketi Seç'
    },
    {
        name: 'En Popüler',
        price: '$119',
        suffix: '/ aylık',
        description: 'Düzenli içerik üreten markalar için en dengeli ve en çok tercih edilen paket.',
        features: [
            'Ayda 700 adet AI destekli fotoğraf üretimi',
            'Gelişmiş prompt mühendisliği',
            'Katalog + sosyal medya için ideal hacim',
            'Tutarlı stil ve görsel bütünlük',
            'Öncelikli üretim sırası',
            'Profesyonel kullanım için önerilir'
        ],
        featured: true,
        cta: 'En Popüler Paketi Seç',
        badge: '⭐ Önerilen ⭐'
    },
    {
        name: 'Profesyonel',
        price: '$219',
        suffix: '/ aylık',
        description: 'Yüksek hacimli, sürekli görsel üretimi yapan markalar için.',
        features: [
            'Ayda 1.400 adet AI destekli fotoğraf üretimi',
            'Gelişmiş prompt + sahne varyasyonları',
            'Büyük kataloglar ve kampanyalar için uygun',
            'Maksimum aylık üretim kapasitesi',
            'Öncelikli destek'
        ],
        cta: 'Profesyonel Paketi Seç'
    }
]

/**
 * Pricing - Ücretler sayfası bileşeni
 * Liquid Glass temalı fiyat kartları
 */
const Pricing = () => {
    // Animasyon varyantları
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    }

    return (
        <>
            {/* Sayfa bazlı SEO meta etiketleri */}
            <Helmet>
                <title>Ücretler | Pikselai - Profesyonel Katalog & AI Çözümleri</title>
                <meta name="description" content="Pikselai fiyatlandırma: Profesyonel katalog, yapay zeka fotoğraf üretimi ve sosyal medya yönetimi paketleri. İşletmenize uygun planı seçin." />
            </Helmet>

            {/* ========================================
                BÖLÜM 1: PROFESYONEL KATALOG (TEK SEFERLİK)
                ======================================== */}
            <section id="katalog-fiyat" className="pricing">
                <div className="pricing-container">
                    {/* Section başlığı */}
                    <motion.div
                        className="pricing-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="pricing-title">
                            <span className="gradient-text">Profesyonel</span> Katalog Çözümü
                        </h1>
                        <p style={{
                            color: 'var(--color-accent-tertiary)',
                            fontSize: '1rem',
                            fontWeight: 500,
                            marginBottom: '0.5rem'
                        }}>
                            Hızlı Arama • Modern Tasarım • Kolay Yönetim
                        </p>
                        <p className="pricing-subtitle">
                            Kendi fotoğraflarınızı kullanmak istiyorsanız, tek seferlik ödeme ile profesyonel katalog sistemine sahip olun
                        </p>
                    </motion.div>

                    {/* Tek Seferlik Katalog Kartı */}
                    <motion.div
                        className="pricing-grid"
                        style={{ maxWidth: '500px', margin: '0 auto' }}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="glass-card pricing-card"
                            variants={cardVariants}
                        >
                            {/* Paket adı */}
                            <h3 className="pricing-plan-name">{catalogPlan.name}</h3>

                            {/* Fiyat */}
                            <div className="pricing-price">
                                {catalogPlan.price}
                                <span className="pricing-price-suffix">{catalogPlan.suffix}</span>
                            </div>

                            {/* TEK SEFERLİK notu */}
                            <p style={{
                                color: 'var(--color-accent-secondary)',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(34, 197, 94, 0.1)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid rgba(34, 197, 94, 0.3)'
                            }}>
                                {catalogPlan.note}
                            </p>

                            {/* Açıklama */}
                            <p className="pricing-description">{catalogPlan.description}</p>

                            {/* Özellik listesi */}
                            <ul className="pricing-features">
                                {catalogPlan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="pricing-feature">
                                        <span className="pricing-feature-icon">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Butonu */}
                            <a
                                href="https://api.whatsapp.com/send/?phone=%2B905531832344&text&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-button pricing-cta glass-button-secondary"
                            >
                                {catalogPlan.cta}
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================
                BÖLÜM 2: YAPAY ZEKA FOTOĞRAF ÜRETİM PAKETLERİ (AYLIK)
                ======================================== */}
            <section id="ai-fotograf-fiyat" className="pricing" style={{ paddingTop: '2rem' }}>
                <div className="pricing-container">
                    {/* Section başlığı */}
                    <motion.div
                        className="pricing-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="pricing-title" style={{ fontSize: '2rem' }}>
                            <span className="gradient-text">Yapay Zeka</span> Fotoğraf Üretim Paketleri
                            <span style={{
                                display: 'inline-block',
                                marginLeft: '0.75rem',
                                padding: '0.25rem 0.75rem',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid rgba(168, 85, 247, 0.3)',
                                color: 'var(--color-accent-tertiary)'
                            }}>
                                AYLIK
                            </span>
                        </h2>
                        <p className="pricing-subtitle">
                            Her ay düzenli yapay zeka destekli fotoğraf üretimi ile katalog ve sosyal medya içeriklerinizi sürekli güncel tutun.
                        </p>
                    </motion.div>

                    {/* AI Paket kartları grid */}
                    <motion.div
                        className="pricing-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {aiPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`glass-card pricing-card ${plan.featured ? 'featured' : ''}`}
                                variants={cardVariants}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="pricing-badge">{plan.badge}</div>
                                )}

                                {/* Paket adı */}
                                <h3 className="pricing-plan-name">{plan.name}</h3>

                                {/* Fiyat */}
                                <div className="pricing-price">
                                    {plan.price}
                                    <span className="pricing-price-suffix">{plan.suffix}</span>
                                </div>

                                {/* AYLIK vurgusu */}
                                <p style={{
                                    color: 'var(--color-accent-tertiary)',
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                    marginBottom: '0.5rem',
                                    opacity: 0.8
                                }}>
                                    📅 Aylık abonelik – istediğiniz zaman iptal
                                </p>

                                {/* Açıklama */}
                                <p className="pricing-description">{plan.description}</p>

                                {/* Özellik listesi */}
                                <ul className="pricing-features">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="pricing-feature">
                                            <span className="pricing-feature-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Butonu */}
                                <a
                                    href="https://api.whatsapp.com/send/?phone=%2B905531832344&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`glass-button pricing-cta ${plan.featured ? 'glow' : 'glass-button-secondary'}`}
                                >
                                    {plan.cta}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Demo butonu */}
                    <motion.div
                        className="text-center"
                        style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <a
                            href="https://katalog.pikselai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button glow"
                        >
                            <span>🚀</span>
                            Canlı Demo
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Sosyal Medya Yönetimi Bölümü */}
            <SocialMediaPackages />
        </>
    )
}

export default Pricing
