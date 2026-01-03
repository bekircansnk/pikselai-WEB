import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Hero - Ana sayfa hero section bileşeni
 * Yapay Zeka Destekli Dijital Çözümler tanıtımı
 * LCP optimize edilmiş, CLS için min-height sabitlenmiş
 */
const Hero = () => {
    return (
        <section className="hero" style={{ minHeight: '100vh' }}>
            {/* Dekoratif arka plan efektleri - Erişilebilirlik için gizli */}
            <div className="hero-glow-1" aria-hidden="true" />
            <div className="hero-glow-2" aria-hidden="true" />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Üst badge */}
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className="hero-badge-dot" aria-hidden="true" />
                    Yapay Zeka Destekli Dijital Çözümler
                </motion.div>

                {/* Ana başlık */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <span className="gradient-text">Pikselai ile</span> Profesyonel Katalog & Sosyal Medya Yönetimi
                </motion.h1>

                {/* Alt başlık */}
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Yapay zeka destekli profesyonel katalog ve sosyal medya çözümleri.
                    Markanızı dijitalde güçlendirin.
                </motion.p>

                {/* CTA Butonları */}
                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Link to="/ucretler" className="glass-button glow">
                        <span aria-hidden="true">💎</span>
                        Fiyatları İncele
                    </Link>
                    <a
                        href="https://katalog.pikselai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button glass-button-secondary"
                    >
                        <span aria-hidden="true">🚀</span>
                        Canlı Demo
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
