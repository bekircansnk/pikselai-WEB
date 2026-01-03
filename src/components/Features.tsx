import { motion } from 'framer-motion'

/**
 * Özellik kartı veri tipi
 */
interface Feature {
    icon: string
    title: string
    description: string
}

/**
 * Dijital çözümler özellikleri listesi
 * Katalog ve sosyal medya hizmetlerini kapsayan özellikler
 */
const features: Feature[] = [
    {
        icon: '🤖',
        title: 'Yapay Zeka Desteği',
        description: 'AI destekli fotoğraf üretimi ile hem katalog içeriklerinizi hem sosyal medya görsellerinizi profesyonelce oluşturun.'
    },
    {
        icon: '🔍',
        title: 'Hızlı Arama',
        description: 'Katalog içeriklerinize anında erişim. IndexedDB tabanlı kalıcı arama indeksi ile her zaman hızlı sonuçlar.'
    },
    {
        icon: '📱',
        title: 'Mobil Uyumluluk',
        description: 'Tüm dijital çözümlerimiz mobil uyumlu. PWA desteği ile müşterileriniz her cihazdan kolayca erişebilir.'
    },
    {
        icon: '☁️',
        title: 'Google Drive Entegrasyonu',
        description: 'Mevcut Google Drive klasörlerinizden kolayca katalog oluşturun. Ekstra sunucu veya kurulum gerektirmez.'
    },
    {
        icon: '🎨',
        title: 'Modern Tasarım',
        description: 'Liquid Glass UI tasarımı ve akıcı animasyonlar. Hem katalog hem sosyal medya içerikleriniz profesyonel görünür.'
    },
    {
        icon: '🚀',
        title: 'Hızlı Erişim & Kolay Paylaşım',
        description: 'Şirket içinde aradığınız ürüne anında ulaşın. Bayilerinizle tek tıkla profesyonel fotoğraf paylaşımı yapın.'
    }
]

/**
 * Features - Özellikler section bileşeni
 * Dijital çözümler için cam efektli özellik kartları grid
 */
const Features = () => {
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
        <section className="features">
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
                        <span className="gradient-text">Yapay Zeka Destekli</span> Katalog Çözümleri
                    </h2>
                    <p className="features-subtitle">
                        Pikselai olarak sunduğumuz, müşterilerinizi etkileyen profesyonel katalog çözümleri
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
            </div>
        </section>
    )
}

export default Features
