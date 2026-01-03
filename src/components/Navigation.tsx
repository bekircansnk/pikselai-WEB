import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

/**
 * Navigation - Üst navigasyon barı bileşeni
 * Glass efektli sabit navigasyon + Hizmetler dropdown + Tema toggle
 */
const Navigation = () => {
    const location = useLocation()
    const { theme, toggleTheme } = useTheme()
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    // Link aktif kontrolü
    const isActive = (path: string) => location.pathname === path
    const isServiceActive = () => ['/profesyonel-katalog', '/yapay-zeka-fotograf-cekimi', '/sosyal-medya-yonetimi'].includes(location.pathname)

    return (
        <motion.nav
            className="nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="nav-container">
                {/* Logo - Tema duyarlı full logo (ikon + yazı birlikte) */}
                <Link to="/" className="nav-logo" aria-label="Ana Sayfa">
                    <img
                        src={theme === 'dark' ? '/full-logo-dark-v2.png' : '/full-logo-light-v2.png'}
                        alt="Pikselai Logo"
                        className="nav-logo-image"
                    />
                </Link>

                {/* Navigasyon Linkleri + Tema Toggle */}
                <div className="nav-links">
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Anasayfa
                    </Link>

                    {/* Hizmetler Dropdown */}
                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            className={`nav-link nav-dropdown-trigger ${isServiceActive() ? 'active' : ''}`}
                            aria-expanded={isServicesOpen}
                        >
                            Hizmetler
                            <span style={{ marginLeft: '4px', fontSize: '0.7em' }}>▼</span>
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    className="nav-dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        to="/profesyonel-katalog"
                                        className={`nav-dropdown-item ${isActive('/profesyonel-katalog') ? 'active' : ''}`}
                                    >
                                        📁 Dijital Katalog
                                    </Link>
                                    <Link
                                        to="/yapay-zeka-fotograf-cekimi"
                                        className={`nav-dropdown-item ${isActive('/yapay-zeka-fotograf-cekimi') ? 'active' : ''}`}
                                    >
                                        📸 AI Fotoğraf
                                    </Link>
                                    <Link
                                        to="/sosyal-medya-yonetimi"
                                        className={`nav-dropdown-item ${isActive('/sosyal-medya-yonetimi') ? 'active' : ''}`}
                                    >
                                        📱 Sosyal Medya
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to="/ucretler"
                        className={`nav-link ${isActive('/ucretler') ? 'active' : ''}`}
                    >
                        Ücretler
                    </Link>

                    {/* Tema Toggle Butonu */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Aydınlık temaya geç' : 'Karanlık temaya geç'}
                        title={theme === 'dark' ? 'Aydınlık Tema' : 'Karanlık Tema'}
                    >
                        <span className="theme-toggle-icon">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </span>
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navigation
