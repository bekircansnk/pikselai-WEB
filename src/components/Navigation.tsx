import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

/**
 * Navigation - Üst navigasyon barı bileşeni
 * Glass efektli sabit navigasyon + Tema toggle butonu
 */
const Navigation = () => {
    const location = useLocation()
    const { theme, toggleTheme } = useTheme()

    // Link aktif kontrolü
    const isActive = (path: string) => location.pathname === path

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
                        src={theme === 'dark' ? '/full-logo-dark.png' : '/full-logo-light.png'}
                        alt="PikselAI"
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
