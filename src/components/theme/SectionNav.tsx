import { motion } from 'framer-motion'

/**
 * SectionNav - Mini navigasyon bileşeni
 * Sağda (desktop) veya altta (mobile) sabit konumda
 * Aktif section'ı scale + border-glow ile vurgular
 */
interface Section {
    id: string
    label: string
    icon: string
}

interface SectionNavProps {
    sections: Section[]
    activeId: string
    onJump: (id: string) => void
}

const SectionNav = ({ sections, activeId, onJump }: SectionNavProps) => {
    return (
        <motion.nav
            className="section-nav"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            {sections.map((section) => {
                const isActive = activeId === section.id
                return (
                    <motion.button
                        key={section.id}
                        className={`section-nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => onJump(section.id)}
                        title={section.label}
                        // Aktif kategori için scale + glow animasyonu
                        animate={{
                            scale: isActive ? 1.05 : 1,
                            boxShadow: isActive
                                ? '0 0 20px var(--active-glow, rgba(139, 92, 246, 0.4))'
                                : '0 0 0px transparent'
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="section-nav-icon">{section.icon}</span>
                        <span className="section-nav-label">{section.label}</span>
                        {/* Aktif göstergesi */}
                        <motion.span
                            className="section-nav-indicator"
                            animate={{
                                opacity: isActive ? 1 : 0,
                                scaleX: isActive ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.button>
                )
            })}
        </motion.nav>
    )
}

export default SectionNav
