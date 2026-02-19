import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * EcommerceHome - Ana sayfa için 360° E-Ticaret Danışmanlığı bölümü
 * Diğer hizmetlerden ayrı, ciddi ve güven veren tasarım
 */
const EcommerceHome = () => {
    // 4 küçük highlight kartı
    const highlights = [
        { icon: '🛒', text: 'Shopify tabanlı anahtar teslim kurulum' },
        { icon: '🤖', text: 'AI destekli ürün & içerik üretimi' },
        { icon: '📱', text: 'Sosyal medya + e-ticaret birlikte yönetim' },
        { icon: '💳', text: 'Güvenli ödeme & esnek süreç' }
    ]

    // Neden PikselAI? - 6 kart
    const advantages = [
        {
            icon: '💼',
            title: 'Gerçek Projelerden Gelen Deneyim',
            description: 'Farklı sektörlerden onlarca başarılı e-ticaret projesi deneyimi.'
        },
        {
            icon: '🤖',
            title: 'Yapay Zekayı Gerçekten Kullanan Yapı',
            description: 'AI sadece bir slogan değil, tüm süreçlerimize entegre bir çözüm aracı.'
        },
        {
            icon: '🤝',
            title: 'Sadece Kurup Bırakmayan Yaklaşım',
            description: '3 ay teknik destek ve sonrasında da ihtiyaç duyduğunuzda yanınızdayız.'
        },
        {
            icon: '🛡️',
            title: 'Risksiz ve Planlı Geçiş',
            description: 'Mevcut platformunuzda aktif bir aboneliğiniz olabilir. Bu süreçte acele etmenizi istemiyoruz. PikselAI ile mağazanız, ödeme planı başlatılmadan Shopify altyapısında tamamen kurulur ve satışa hazır hale getirilir.'
        },
        {
            icon: '🧩',
            title: 'Ödeme Zamanı Size Ait',
            description: 'Ürünleriniz, içerikleriniz, görselleriniz ve teknik yapı arka planda eksiksiz hazırlanır. Ödeme planı, siz ne zaman hazırsanız o zaman başlar. Böylece mevcut lisanslarınız yanmaz, ek platform maliyeti oluşmaz.'
        },
        {
            icon: '🔑',
            title: 'Anahtar Teslim Birlikte Yayına Alma',
            description: 'Mağazanızı tek başınıza değil, birlikte yayına alıyoruz. Başlangıçta %50, anahtar teslimde kalan %50 ödeme yapılır. 3 aylık teknik destek, mağaza yayına alındıktan sonra başlar.'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section id="homepage-ecommerce-focus" className="features" style={{ background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.05) 0%, transparent 100%)' }}>
            <div className="features-container">
                {/* Başlık */}
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="features-title">
                        PikselAI ile <span className="gradient-text">360° E-Ticaret</span> Danışmanlığı
                    </h2>
                    <p className="features-subtitle">
                        Sadece kurulum değil; planlama, içerik, reklam ve büyüme süreçlerinde yanınızdayız.
                    </p>
                </motion.div>

                {/* 4 Küçük Highlight Kartı */}
                <motion.div
                    className="features-grid"
                    style={{ maxWidth: '900px', margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card feature-card"
                            variants={itemVariants}
                            style={{ textAlign: 'center', padding: '1.5rem' }}
                        >
                            <span className="feature-icon" style={{ fontSize: '2rem' }}>{item.icon}</span>
                            <p className="feature-description" style={{ marginTop: '0.75rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Neden PikselAI? - 6 Kart (3x2 Grid) */}
                <motion.div
                    className="features-header"
                    style={{ marginTop: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="features-title" style={{ fontSize: '1.75rem' }}>
                        Neden <span className="gradient-text">PikselAI</span>?
                    </h3>
                    <p className="features-subtitle">Fark yaratan yaklaşımımız</p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card feature-card"
                            variants={itemVariants}
                        >
                            <span className="feature-icon">{item.icon}</span>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-description">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Butonları */}
                <motion.div
                    style={{
                        textAlign: 'center',
                        marginTop: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}
                    className="cta-buttons-flex"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        width: '100%',
                        maxWidth: '600px'
                    }}>
                        <Link
                            to="/ucretler#pricing-ecommerce-solution"
                            className="glass-button glow"
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minWidth: '200px' }}
                        >
                            <span>💰</span>
                            Paketleri İncele
                        </Link>
                        <Link
                            to="/e-ticaret-danismanligi"
                            className="glass-button glass-button-secondary"
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minWidth: '200px' }}
                        >
                            <span>📋</span>
                            Detaylı İncele
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default EcommerceHome
