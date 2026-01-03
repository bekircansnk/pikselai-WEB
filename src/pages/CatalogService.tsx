import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

/**
 * Katalog özellik kartı tipi
 */
interface Feature {
    icon: string
    title: string
    description: string
}

/**
 * Dijital katalog özellikleri
 */
const features: Feature[] = [
    {
        icon: '🔍',
        title: 'Anında Arama',
        description: 'Binlerce ürün arasında saniyeler içinde arama yapın. PDF kataloğun aksine, aradığınız ürüne anında ulaşın.'
    },
    {
        icon: '📱',
        title: 'Mobil Uyumlu',
        description: 'Telefon, tablet veya bilgisayar fark etmez. Katalog her cihazda mükemmel görünür ve çalışır.'
    },
    {
        icon: '☁️',
        title: 'Google Drive Entegrasyonu',
        description: 'Ek sunucu veya panel gerekmez. Mevcut Google Drive klasörlerinizi kataloga dönüştürün.'
    },
    {
        icon: '💬',
        title: 'WhatsApp Paylaşımı',
        description: 'Bayilerinize veya müşterilerinize tek tıkla ürün fotoğrafı gönderin. Satış sürecinizi hızlandırın.'
    },
    {
        icon: '🚀',
        title: 'Hızlı Kurulum',
        description: 'Karmaşık yazılım kurulumları yok. Size özel katalogunuz hızlıca hazırlanır ve kullanıma sunulur.'
    },
    {
        icon: '✨',
        title: 'Modern Tasarım',
        description: 'Liquid Glass UI ile profesyonel ve çağdaş bir görünüm. Markanızı en iyi şekilde temsil edin.'
    }
]

/**
 * Service Schema JSON-LD
 */
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dijital Katalog Tasarımı",
    "provider": {
        "@type": "Organization",
        "name": "Pikselai",
        "url": "https://pikselai.com"
    },
    "description": "Google Drive tabanlı, arama özellikli profesyonel dijital katalog sistemi.",
    "areaServed": "TR",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Katalog Paketleri",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Tek Seferlik Katalog"
                },
                "price": "15000",
                "priceCurrency": "TRY"
            }
        ]
    }
}

/**
 * CatalogService - Dijital Katalog hizmet sayfası
 * SEO optimize edilmiş landing page
 */
const CatalogService = () => {
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

    return (
        <>
            {/* SEO Meta Etiketleri ve Schema */}
            <Helmet>
                <title>Dijital Katalog Tasarımı & Hızlı Arama | Pikselai</title>
                <meta name="description" content="PDF katalog devri bitti. Pikselai dijital katalog ile ürünlerinize anında erişim, WhatsApp paylaşımı ve Google Drive entegrasyonu. Panel gerektirmez." />
                <link rel="canonical" href="https://pikselai.com/profesyonel-katalog" />
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
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
                        PDF Devri Bitti
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="gradient-text">Pikselai</span> ile Profesyonel Dijital Katalog
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Ağır PDF'lere veda edin. Arama butonlu, mobil uyumlu ve Google Drive entegrasyonlu
                        dijital katalog ile ürünlerinize saniyeler içinde ulaşın.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <Link to="/ucretler#katalog-fiyat" className="glass-button glow">
                            <span>💎</span>
                            Katalog Fiyatlarını İncele
                        </Link>
                        <a
                            href="https://katalog.pikselai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button glass-button-secondary"
                        >
                            <span>🚀</span>
                            Canlı Demo
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Özellikler Section */}
            <section className="features">
                <div className="features-container">
                    <motion.div
                        className="features-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="features-title">
                            <span className="gradient-text">Neden</span> Dijital Katalog?
                        </h2>
                        <p className="features-subtitle">
                            Pikselai dijital katalog sistemi ile işletmenizi modernleştirin
                        </p>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="glass-card feature-card"
                                variants={itemVariants}
                            >
                                <span className="feature-icon">{feature.icon}</span>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        style={{ textAlign: 'center', marginTop: '3rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link to="/ucretler#katalog-fiyat" className="glass-button glow">
                            <span>💎</span>
                            Katalog Fiyatlarını İncele
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default CatalogService
