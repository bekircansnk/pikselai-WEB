import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * AI Fotoğraf özellik kartı tipi
 */
interface AiPhotoFeature {
    icon: string
    title: string
    description: string
}

/**
 * AI Fotoğraf Üretim özellikleri listesi
 */
const aiPhotoFeatures: AiPhotoFeature[] = [
    {
        icon: '👗',
        title: 'Sanal Manken Çekimi',
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
 * AiPhotoHome - Ana sayfa AI Fotoğraf tanıtım bölümü
 * Features ve SocialMediaHome ile aynı görsel dil
 */
const AiPhotoHome = () => {
    // Animasyon varyantları
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    }

    return (
        <section id="ai-photo-home" className="features">
            <div className="features-container">
                {/* Section başlığı - Tıklanabilir */}
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/yapay-zeka-fotograf-cekimi" className="section-title-link">
                        <h2 className="features-title">
                            <span className="gradient-text">Yapay Zeka ile</span> Mankenli Fotoğraf Çekimi
                        </h2>
                    </Link>
                    <p className="features-subtitle">
                        Pikselai AI fotoğraf üretimi ile stüdyo masraflarına son verin
                    </p>
                </motion.div>

                {/* Özellik kartları grid */}
                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {aiPhotoFeatures.map((feature, index) => (
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

                {/* CTA Alanı */}
                <motion.div
                    style={{
                        textAlign: 'center',
                        marginTop: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '1.1rem',
                        maxWidth: '500px'
                    }}>
                        AI fotoğraf paketlerini inceleyerek ürünleriniz için en uygun çözümü seçin.
                    </p>
                    <Link
                        to="/ucretler#ai-fotograf-fiyat"
                        className="glass-button glow"
                    >
                        <span>📸</span>
                        AI Fotoğraf Paketlerini İncele
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default AiPhotoHome
