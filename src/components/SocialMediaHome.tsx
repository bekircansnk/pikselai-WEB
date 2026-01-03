import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Sosyal medya özellik kartı veri tipi
 */
interface SocialMediaFeature {
    icon: string
    title: string
    description: string
}

/**
 * Sosyal medya özellikleri listesi
 */
const socialMediaFeatures: SocialMediaFeature[] = [
    {
        icon: '🤖',
        title: 'Yapay Zeka Destekli İçerik',
        description: 'AI destekli fotoğraf üretimi ile markanıza özel, özgün ve dikkat çekici sosyal medya görselleri.'
    },
    {
        icon: '📸',
        title: 'Profesyonel Görsel Üretimi',
        description: 'Markanıza özel, estetik ve dikkat çekici sosyal medya görselleri.'
    },
    {
        icon: '🎯',
        title: 'Stratejik Reklam Yönetimi',
        description: 'Bütçenizi verimli kullanan, sonuç odaklı reklam kampanyaları.'
    },
    {
        icon: '📅',
        title: 'Düzenli ve Planlı Paylaşım',
        description: 'Haftalık ve aylık içerik takvimleriyle düzenli, sürdürülebilir sosyal medya yönetimi.'
    },
    {
        icon: '📈',
        title: 'Ölçülebilir Performans',
        description: 'Erişim, etkileşim ve büyümeyi takip eden raporlarla şeffaf ve ölçülebilir sonuçlar.'
    },
    {
        icon: '🚀',
        title: 'Reklam ve Büyüme Desteği',
        description: 'Fotoğraf bazlı reklam kreatifleri, performans optimizasyonu ve büyüme odaklı yönetim.'
    }
]

/**
 * SocialMediaHome - Ana sayfa sosyal medya tanıtım bölümü
 * Features bileşeniyle aynı görsel dil ve grid yapısı
 */
const SocialMediaHome = () => {
    // Animasyon varyantları - Features ile aynı
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
        <section id="social-media-home" className="features">
            <div className="features-container">
                {/* Section başlığı */}
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="features-title">
                        <span className="gradient-text">Yapay Zeka Destekli</span> Sosyal Medya Yönetimi
                    </h2>
                    <p className="features-subtitle">
                        Markanızı dijitalde profesyonel şekilde büyütün.
                    </p>
                </motion.div>

                {/* Özellik kartları grid - Features ile aynı yapı */}
                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {socialMediaFeatures.map((feature, index) => (
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
                        Sosyal medya paketlerini inceleyerek markanız için en uygun çözümü seçin.
                    </p>
                    <Link
                        to="/ucretler#social-media-packages"
                        className="glass-button glow"
                    >
                        <span>📱</span>
                        Sosyal Medya Paketlerini İncele
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default SocialMediaHome
