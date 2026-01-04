import { motion } from 'framer-motion'

/**
 * Sosyal medya paketi veri tipi
 */
interface SocialMediaPlan {
    name: string
    icon: string
    price: string
    suffix: string
    description: string
    features: string[]
    featured?: boolean
    cta: string
}

/**
 * Sosyal Medya Yönetimi paketleri
 * Fotoğraf odaklı, yapay zeka destekli
 */
const socialMediaPlans: SocialMediaPlan[] = [
    {
        name: 'Sosyal Medya – Temel Paket',
        icon: '📷',
        price: '₺18.000',
        suffix: '/ aylık',
        description: 'Kendi görselleriyle sosyal medya yönetimi isteyen markalar için.',
        features: [
            'Müşteri tarafından sağlanan görsellerle içerik paylaşımı',
            'Haftalık 4 adet post (toplam 16 post / ay)',
            'Haftalık 4 adet hikâye (toplam 16 hikâye / ay)',
            'Paylaşım metinlerinin düzenlenmesi (caption + hashtag)',
            'Aylık içerik planı',
            'Feed düzeni ve paylaşım sırası planlaması',
            'Temel raporlama (aylık)',
            'Aylık kullanım – istenildiğinde iptal'
        ],
        cta: 'Temel Paketi Seç'
    },
    {
        name: 'Sosyal Medya – Standart Paket',
        icon: '📸',
        price: '₺24.000',
        suffix: '/ aylık',
        description: 'Yapay zeka destekli profesyonel sosyal medya yönetimi',
        features: [
            'Haftalık 6 adet AI destekli post (toplam 24 post / ay)',
            'Haftalık 6 adet AI destekli hikâye (toplam 24 hikâye / ay)',
            'Marka kimliğine uygun görsel stil',
            'Feed bütünlüğü ve estetik planlama',
            'Yapay zeka ile görsel üretimi ve düzenleme',
            'Aylık içerik takvimi'
        ],
        cta: 'Standart Paketi Seç'
    },
    {
        name: 'Sosyal Medya – Pro Paket',
        icon: '🚀',
        price: '₺35.000',
        suffix: '/ aylık',
        description: 'Maksimum büyüme ve profesyonel yönetim',
        features: [
            'Haftalık 12 adet AI destekli post (toplam 48 post / ay)',
            'Haftalık 7 adet AI destekli hikâye (toplam 28 hikâye / ay)',
            'Gelişmiş yapay zeka görsel üretimi',
            'Özel konsept & kampanya görselleri',
            'Feed ve grid tasarımı',
            'Aylık + haftalık içerik planlaması',
            'Doğru hedef kitleye yönelik reklam stratejisi',
            'Reklam kreatifleri + varyasyonlar',
            'Reklam performans optimizasyonu',
            'Detaylı aylık rapor (erişim, etkileşim, büyüme)',
            'Öncelikli destek ve hızlı revize hakkı'
        ],
        featured: true,
        cta: 'Pro Paketi Seç'
    }
]

/**
 * Ek notlar listesi
 */
const notes = [
    'Reklam bütçesi paket fiyatlarına dahil değildir',
    'Yapay zeka destekli içerik yalnızca Standart ve Pro paketlerde sunulur',
    'Video üretimi bu paketlere dahil değildir',
    'Fotoğraf odaklı profesyonel sosyal medya yönetimi sunulur'
]

/**
 * SocialMediaPackages - Sosyal Medya Yönetimi bölümü
 * Fotoğraf odaklı, yapay zeka destekli paketler
 */
const SocialMediaPackages = () => {
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
        <section id="sosyal-medya-fiyat" className="pricing" style={{ paddingTop: 0 }}>
            <div className="pricing-container">
                {/* Section başlığı */}
                <motion.div
                    className="pricing-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="pricing-title">
                        <span className="gradient-text">Yapay Zeka Destekli</span> Sosyal Medya Yönetimi
                    </h2>
                    <p style={{
                        color: 'var(--color-accent-tertiary)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem'
                    }}>
                        Fotoğraf Odaklı • Stratejik • Ölçülebilir
                    </p>
                    <p className="pricing-subtitle">
                        Markanız için yapay zeka destekli, profesyonel fotoğraf içerikleriyle sosyal medya hesaplarınızı düzenli, estetik ve doğru hedef kitleye uygun şekilde yönetiyoruz.
                    </p>
                </motion.div>

                {/* Paket kartları */}
                <motion.div
                    className="pricing-grid"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {socialMediaPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`glass-card pricing-card ${plan.featured ? 'featured' : ''}`}
                            variants={cardVariants}
                        >
                            {/* Pro badge */}
                            {plan.featured && (
                                <div className="pricing-badge">🚀 Önerilen</div>
                            )}

                            {/* Paket adı */}
                            <h3 className="pricing-plan-name">
                                <span style={{ marginRight: '8px' }}>{plan.icon}</span>
                                {plan.name}
                            </h3>

                            {/* Fiyat */}
                            <div className="pricing-price">
                                {plan.price}
                                <span className="pricing-price-suffix">{plan.suffix}</span>
                            </div>

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

                            {/* CTA Butonu - WhatsApp'a yönlendir */}
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

                {/* Ek notlar */}
                <motion.div
                    className="text-center"
                    style={{ marginTop: '2rem' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div style={{
                        display: 'inline-block',
                        textAlign: 'left',
                        padding: '1rem 1.5rem',
                        background: 'var(--glass-bg)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--glass-border)'
                    }}>
                        {notes.map((note, index) => (
                            <p
                                key={index}
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.85rem',
                                    margin: index === notes.length - 1 ? 0 : '0.25rem 0'
                                }}
                            >
                                • {note}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SocialMediaPackages
