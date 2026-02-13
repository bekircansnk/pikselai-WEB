import { useState, useEffect } from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/Button"
import { MegaMenu } from "./MegaMenu"
import { ResourcesMenu } from "./ResourcesMenu"
import { MobileMenu } from "./MobileMenu"

interface HeaderProps {
    transparent?: boolean
    lightText?: boolean
}

export function Header({ transparent = false, lightText = false }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMouseEnter = (menu: string) => {
        setActiveMegaMenu(menu)
    }

    const handleMouseLeave = () => {
        setActiveMegaMenu(null)
    }

    const isActive = (path: string) => location.pathname === path
    const isServicePath = location.pathname.startsWith('/hizmetler')

    // Logic: 
    // If not scrolled and transparent prop is true -> bg-transparent
    // Else -> bg-white/90 (or dark equiv)
    const showGlass = !transparent || isScrolled

    // Text color logic:
    // If not scrolled and lightText prop is true -> force white text
    // Else -> standard text colors (dark in light mode, white in dark mode)
    const forceWhiteText = lightText && !isScrolled

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                showGlass
                    ? "bg-white/90 backdrop-blur-md border-b border-bor-primary-200/50 py-3 dark:bg-bor-primary-900/90 dark:border-bor-primary-800 shadow-sm"
                    : "bg-transparent py-5 border-b border-transparent"
            )}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="z-50 flex items-center gap-2 group">
                    <span className={cn(
                        "text-2xl font-bold font-display tracking-tight transition-colors group-hover:text-bor-secondary",
                        forceWhiteText ? "text-white" : "text-bor-primary-900 dark:text-white"
                    )}>
                        pikselai
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 h-full absolute left-1/2 -translate-x-1/2">
                    {/* Hizmetler - Mega Menu */}
                    <button
                        className={cn(
                            "relative flex items-center gap-1 text-sm font-medium transition-colors py-2 group",
                            (activeMegaMenu === "hizmetler" || isServicePath)
                                ? (forceWhiteText ? "text-white" : "text-bor-secondary")
                                : (forceWhiteText ? "text-white/90 hover:text-white" : "text-bor-primary-600 dark:text-bor-primary-300 hover:text-bor-primary-900")
                        )}
                        onMouseEnter={() => handleMouseEnter("hizmetler")}
                    >
                        <span className="flex items-center gap-2">
                            <span className={cn(
                                "w-1.5 h-1.5 rounded-full bg-bor-secondary scale-0 transition-transform duration-200 group-hover:scale-100",
                                (activeMegaMenu === "hizmetler" || isServicePath) && "scale-100"
                            )} />
                            Hizmetler
                        </span>
                        <ChevronDown
                            size={14}
                            className={cn(
                                "transition-transform duration-200 ml-0.5",
                                activeMegaMenu === "hizmetler" && "rotate-180"
                            )}
                        />
                    </button>

                    {/* Kaynaklar - Resources Menu */}
                    <button
                        className={cn(
                            "relative flex items-center gap-1 text-sm font-medium transition-colors py-2 group",
                            (activeMegaMenu === "kaynaklar" || location.pathname.startsWith('/blog') || location.pathname.startsWith('/musteri-hikayeleri'))
                                ? (forceWhiteText ? "text-white" : "text-bor-secondary")
                                : (forceWhiteText ? "text-white/90 hover:text-white" : "text-bor-primary-600 dark:text-bor-primary-300 hover:text-bor-primary-900")
                        )}
                        onMouseEnter={() => handleMouseEnter("kaynaklar")}
                    >
                        <span className="flex items-center gap-2">
                            <span className={cn(
                                "w-1.5 h-1.5 rounded-full bg-bor-secondary scale-0 transition-transform duration-200 group-hover:scale-100",
                                (activeMegaMenu === "kaynaklar" || location.pathname.startsWith('/blog') || location.pathname.startsWith('/musteri-hikayeleri')) && "scale-100"
                            )} />
                            Kaynaklar
                        </span>
                        <ChevronDown
                            size={14}
                            className={cn(
                                "transition-transform duration-200 ml-0.5",
                                activeMegaMenu === "kaynaklar" && "rotate-180"
                            )}
                        />
                    </button>

                    {/* Links */}
                    {[
                        { path: "/islerimiz", label: "İşlerimiz" },
                        { path: "/hakkimizda", label: "Hakkımızda" },
                        { path: "/ucretler", label: "Ücretler" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "relative flex items-center gap-2 text-sm font-medium transition-colors py-2 group",
                                isActive(link.path)
                                    ? (forceWhiteText ? "text-white" : "text-bor-secondary")
                                    : (forceWhiteText ? "text-white/90 hover:text-white" : "text-bor-primary-600 dark:text-bor-primary-300 hover:text-bor-primary-900")
                            )}
                            onMouseEnter={handleMouseLeave}
                        >
                            <span className={cn(
                                "w-1.5 h-1.5 rounded-full bg-bor-secondary scale-0 transition-transform duration-200 group-hover:scale-100",
                                isActive(link.path) && "scale-100"
                            )} />
                            {link.label}
                        </Link>
                    ))}

                    {/* Sosyal - Statik HTML Sayfa */}
                    <a
                        href="/social-media-creative.html"
                        className={cn(
                            "relative flex items-center gap-2 text-sm font-medium transition-colors py-2 group",
                            forceWhiteText ? "text-white/90 hover:text-white" : "text-bor-primary-600 dark:text-bor-primary-300 hover:text-bor-primary-900"
                        )}
                        onMouseEnter={handleMouseLeave}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-bor-secondary scale-0 transition-transform duration-200 group-hover:scale-100" />
                        Sosyal
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn("hidden lg:flex", forceWhiteText ? "text-white hover:bg-white/10 hover:text-white" : "")}
                        onClick={() => navigate('/iletisim')}
                    >
                        İletişim
                    </Button>
                    <Button
                        size="sm"
                        className="hidden lg:flex shadow-lg shadow-bor-secondary/20 hover:shadow-bor-secondary/40 transition-shadow"
                        onClick={() => navigate('/iletisim')}
                    >
                        Demo Talep Et
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "lg:hidden p-2",
                            forceWhiteText ? "text-white" : "text-bor-primary-900 dark:text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Menüyü Aç"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mega Menu */}
            <MegaMenu
                isOpen={activeMegaMenu === "hizmetler"}
                activeMenu={activeMegaMenu}
                onClose={() => setActiveMegaMenu(null)}
            />

            {/* Resources Menu */}
            <ResourcesMenu
                isOpen={activeMegaMenu === "kaynaklar"}
                activeMenu={activeMegaMenu}
                onClose={() => setActiveMegaMenu(null)}
            />

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </header>
    )
}
