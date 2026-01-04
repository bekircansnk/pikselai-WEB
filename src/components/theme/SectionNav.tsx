import { motion } from 'framer-motion'

/**
 * SectionNav - Mini navigasyon bileşeni
 * Sağda (desktop) veya altta (mobile) sabit konumda
 * Aktif section'ı vurgular ve tıklanınca smooth scroll yapar
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
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={`section-nav-item ${activeId === section.id ? 'active' : ''}`}
                    onClick={() => onJump(section.id)}
                    title={section.label}
                >
                    <span className="section-nav-icon">{section.icon}</span>
                    <span className="section-nav-label">{section.label}</span>
                    <span className="section-nav-indicator" />
                </button>
            ))}
        </motion.nav>
    )
}

export default SectionNav
