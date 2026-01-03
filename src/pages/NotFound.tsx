import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

/**
 * NotFound - 404 Sayfa Bulunamadı
 * SEO için noindex, kullanıcı için şık tasarım
 */
const NotFound = () => {
    return (
        <>
            {/* SEO - Bu sayfa indexlenmemeli */}
            <Helmet>
                <title>404 - Sayfa Bulunamadı | Pikselai</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="Aradığınız sayfa bulunamadı. Pikselai ana sayfasına dönün." />
            </Helmet>

            <section className="hero" style={{ minHeight: '80vh' }}>
                <div className="hero-glow-1" aria-hidden="true" />
                <div className="hero-glow-2" aria-hidden="true" />

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    {/* 404 Büyük Numara */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            fontSize: 'clamp(6rem, 20vw, 12rem)',
                            fontWeight: 900,
                            fontFamily: 'var(--font-display)',
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}
                    >
                        404
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                    >
                        Sayfa Bulunamadı
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                        Ana sayfaya dönerek devam edebilirsiniz.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <Link to="/" className="glass-button glow">
                            <span>🏠</span>
                            Anasayfaya Dön
                        </Link>
                        <Link to="/ucretler" className="glass-button glass-button-secondary">
                            <span>📋</span>
                            Ücretler
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default NotFound
