import { motion } from 'framer-motion'

/**
 * SectionBand - Bölüm geçiş bandı
 * Her section başında görünen tema rengi ile uyumlu geçiş bandı
 * anchorId: Scroll hedefi için anchor ID
 */
interface SectionBandProps {
    icon: string
    title: string
    subtitle?: string
    themeColor: string
    anchorId?: string // Scroll hedefi için anchor ID
}

const SectionBand = ({ icon, title, subtitle, themeColor, anchorId }: SectionBandProps) => {
    return (
        <>
            {/* Scroll anchor - Label'ın üstünde, görünmez */}
            {anchorId && (
                <div
                    id={anchorId}
                    className="section-anchor"
                    aria-hidden="true"
                />
            )}
            <motion.div
                className="section-band"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                style={{
                    '--band-color': themeColor
                } as React.CSSProperties}
            >
                <div className="section-band-content">
                    <span className="section-band-icon">{icon}</span>
                    <div className="section-band-text">
                        <span className="section-band-title">{title}</span>
                        {subtitle && <span className="section-band-subtitle">{subtitle}</span>}
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default SectionBand
