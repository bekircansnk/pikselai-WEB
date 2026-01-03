import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

/**
 * AI Fotoğraf özellik kartı tipi
 */
interface Feature {
    icon: string
    title: string
    description: string
}

/**
 * AI fotoğraf üretim özellikleri
 */
const features: Feature[] = [
    {
        icon: '👗',
        title: 'AI Mankenli Çekim',
        description: 'Gerçek manken ve stüdyo masrafı olmadan, yapay zeka ile ürünlerinizi profesyonel mankenlere giydirin.'
    },
    {
        icon: '🎨',
        title: 'Özel Stüdyo Ortamları',
        description: 'Farklı arka planlar, mekanlar ve ışık setleri ile ürünlerinizi istediğiniz ortamda sergileyin.'
    },
    {
        icon: '⚡',
        title: 'Hızlı Üretim',
        description: 'Geleneksel fotoğraf çekimlerine kıyasla çok daha hızlı. Günler değil, saatler içinde profesyonel görseller.'
    },
    {
        icon: '📐',
        title: 'Yüksek Çözünürlük',
        description: 'Katalog, e-ticaret ve sosyal medya için uygun, yüksek kalite ve çözünürlükte görseller.'
    },
    {
        icon: '🔄',
        title: 'Tutarlı Stil',
        description: 'Tüm ürünleriniz için tutarlı görsel dil. Marka kimliğinize uygun profesyonel sonuçlar.'
    },
    {
        icon: '💰',
        title: 'Maliyet Avantajı',
        description: 'Manken, stüdyo, ekipman ve post-prodüksiyon masraflarından tasarruf edin.'
    }
]

/**
 * AiPhotoService - Yapay Zeka Fotoğraf hizmet sayfası
 * SEO optimize edilmiş landing page
 */
const AiPhotoService = () => {
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
            {/* SEO Meta Etiketleri */}
            <Helmet>
                <title>Yapay Zeka ile Mankenli Fotoğraf Çekimi | Pikselai</title>
                <meta name="description" content="Manken ve stüdyo masrafı olmadan, yapay zeka ile ürünlerinizi profesyonel mankenlere giydirin. Hızlı üretim, yüksek çözünürlük, tutarlı stil." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-glow-1" />
                <div className="hero-glow-2" />

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
                        Stüdyo Masrafına Son
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="gradient-text">Pikselai</span> ile AI Mankenli Fotoğraf
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Yapay zeka teknolojisi ile ürünlerinizi profesyonel mankenlere giydirin.
                        Gerçek stüdyo kalitesinde, düşük maliyetle, hızlı teslim.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <Link to="/ucretler#ai-fotograf-fiyat" className="glass-button glow">
                            <span>📸</span>
                            Fotoğraf Paketlerini İncele
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
                            <span className="gradient-text">Yapay Zeka</span> Fotoğraf Avantajları
                        </h2>
                        <p className="features-subtitle">
                            Pikselai AI fotoğraf üretimi ile işletmenizi öne çıkarın
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
                        <Link to="/ucretler#ai-fotograf-fiyat" className="glass-button glow">
                            <span>📸</span>
                            Fotoğraf Paketlerini İncele
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default AiPhotoService
