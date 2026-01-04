import { motion } from 'framer-motion'

/**
 * SectionNav - Mini navigasyon bileşeni
 * Sağda (desktop) veya altta (mobile) sabit konumda
 * Aktif section'ı vurgular ve tıklanınca smooth scroll yapar
 * Aktif buton: scale-110, ring-2, tam opaklık
 * İnaktif butonlar: sönük görünüm (opacity-50)
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
                    <button
                        key={section.id}
                        className={`section-nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => onJump(section.id)}
                        title={section.label}
                        style={{
                            // Dinamik stil: aktif buton büyür ve parlak, inaktif buton sönük
                            transform: isActive ? 'scale(1.1)' : 'scale(1)',
                            opacity: isActive ? 1 : 0.5,
                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                    >
                        <span className="section-nav-icon">{section.icon}</span>
                        <span className="section-nav-label">{section.label}</span>
                        <span className="section-nav-indicator" />
                    </button>
                )
            })}
        </motion.nav>
    )
}

export default SectionNav

