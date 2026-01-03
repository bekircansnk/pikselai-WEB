import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

/**
 * Sosyal Medya özellik kartı tipi
 */
interface Feature {
    icon: string
    title: string
    description: string
}

/**
 * Sosyal medya yönetimi özellikleri
 */
const features: Feature[] = [
    {
        icon: '🤖',
        title: 'AI Destekli İçerik',
        description: 'Yapay zeka ile oluşturulan profesyonel görseller. Markanıza özel, özgün ve dikkat çekici içerikler.'
    },
    {
        icon: '📅',
        title: 'Düzenli Paylaşım',
        description: 'Haftalık ve aylık içerik takvimleri ile düzenli, tutarlı ve sürdürülebilir sosyal medya varlığı.'
    },
    {
        icon: '🎯',
        title: 'Stratejik Reklam',
        description: 'Doğru hedef kitleye ulaşan, sonuç odaklı reklam kampanyaları ve bütçe optimizasyonu.'
    },
    {
        icon: '📊',
        title: 'Performans Raporları',
        description: 'Erişim, etkileşim ve büyüme metriklerini takip eden detaylı aylık raporlar.'
    },
    {
        icon: '🎨',
        title: 'Marka Kimliği',
        description: 'Feed bütünlüğü, estetik planlama ve marka kimliğinize uygun görsel stil oluşturma.'
    },
    {
        icon: '📸',
        title: 'Fotoğraf Odaklı',
        description: 'Video değil, profesyonel fotoğraf içerikleriyle sosyal medya yönetimi. Görsel kalite öncelikli.'
    }
]

/**
 * SocialMediaService - Sosyal Medya Yönetimi hizmet sayfası
 * SEO optimize edilmiş landing page
 */
const SocialMediaService = () => {
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
                <title>Yapay Zeka Destekli Sosyal Medya Yönetimi | Pikselai</title>
                <meta name="description" content="AI destekli profesyonel sosyal medya yönetimi. Düzenli içerik paylaşımı, Reels üretimi, reklam yönetimi ve marka kimliği oluşturma hizmetleri." />
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
                        Profesyonel Yönetim
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="gradient-text">Pikselai</span> ile Sosyal Medya Yönetimi
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Yapay zeka destekli profesyonel içerikler, düzenli paylaşım takvimleri ve
                        stratejik reklam yönetimi ile markanızı dijitalde büyütün.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <Link to="/ucretler#sosyal-medya-fiyat" className="glass-button glow">
                            <span>📱</span>
                            Yönetim Paketlerini İncele
                        </Link>
                        <a
                            href="https://www.instagram.com/pikselai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button glass-button-secondary"
                        >
                            <span>📸</span>
                            Instagram
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
                            <span className="gradient-text">Neden</span> Pikselai Sosyal Medya?
                        </h2>
                        <p className="features-subtitle">
                            AI destekli profesyonel sosyal medya yönetimi avantajları
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
                        <Link to="/ucretler#sosyal-medya-fiyat" className="glass-button glow">
                            <span>📱</span>
                            Yönetim Paketlerini İncele
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default SocialMediaService
