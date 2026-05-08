import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { ChevronRight, X, Sparkles, ShoppingBag, Palette, BookOpen, Layers, Briefcase, Phone, Zap, Store, Share2 } from "lucide-react"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

/**
 * Mobil Menü Bileşeni (Tam Ekran Premium)
 * Portal kullanarak Header'ın filter kısıtlamalarından kaçar.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [mounted, setMounted] = useState(false)
    const location = useLocation()

    // Sayfa değiştiğinde menüyü kapat
    useEffect(() => {
        if (isOpen) onClose()
    }, [location.pathname])

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex">
                    {/* Arka plan overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-bor-primary-900/60 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Menü Paneli */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative ml-auto h-full w-full max-w-md bg-[#fbfbf9] shadow-2xl dark:bg-bor-primary-900 flex flex-col overflow-hidden"
                    >
                        {/* Header Kısmı */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-bor-primary-200/50 dark:border-bor-primary-800">
                            <span className="text-2xl font-bold font-display tracking-tight text-bor-primary-900 dark:text-white">
                                pikselai
                            </span>
                            <button 
                                onClick={onClose}
                                className="p-2 -mr-2 text-bor-primary-500 hover:text-bor-primary-900 dark:text-bor-primary-400 dark:hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Linkler Kısmı (Scrollable) */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
                            <nav className="flex flex-col gap-6">
                                {/* Hizmetler Kategorileri */}
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-bor-primary-400 mb-4 ml-2">Hizmetlerimiz</h4>
                                    <div className="space-y-2">
                                        <MobileSubLink title="AI Prodüksiyon" href="/hizmetler/ai-produksiyon" icon={<Sparkles size={18} />} onClose={onClose} />
                                        <MobileSubLink title="E-Ticaret" href="/hizmetler/e-ticaret" icon={<Store size={18} />} onClose={onClose} />
                                        <MobileSubLink title="Sosyal Medya" href="/hizmetler/sosyal-medya" icon={<Share2 size={18} />} onClose={onClose} />
                                        <MobileSubLink title="Kreatif Tasarım" href="/hizmetler/kreatif-tasarim" icon={<Palette size={18} />} onClose={onClose} />
                                    </div>
                                </div>

                                <div className="h-px w-full bg-bor-primary-200/50 dark:bg-bor-primary-800/50" />

                                {/* Ana Linkler */}
                                <div className="space-y-1">
                                    <MobileMainLink title="Ana Sayfa" href="/" icon={<Zap size={20} />} onClose={onClose} />
                                    <MobileMainLink title="İşlerimiz" href="/islerimiz" icon={<Briefcase size={20} />} onClose={onClose} />
                                    <MobileMainLink title="Ücretler" href="/ucretler" icon={<ShoppingBag size={20} />} onClose={onClose} />
                                    <MobileMainLink title="Hakkımızda" href="/hakkimizda" icon={<Layers size={20} />} onClose={onClose} />
                                    <MobileMainLink title="İletişim" href="/iletisim" icon={<Phone size={20} />} onClose={onClose} />
                                </div>

                                <div className="h-px w-full bg-bor-primary-200/50 dark:bg-bor-primary-800/50" />

                                {/* Kaynaklar Kategorileri */}
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-bor-primary-400 mb-4 ml-2">Kaynaklar</h4>
                                    <div className="space-y-2">
                                        <MobileSubLink title="Öğrenim Merkezi & Blog" href="/blog" icon={<BookOpen size={18} />} onClose={onClose} />
                                        <MobileSubLink title="Müşteri Hikayeleri" href="/musteri-hikayeleri" icon={<Briefcase size={18} />} onClose={onClose} />
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* Footer / CTA Kısmı */}
                        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#fbfbf9] via-[#fbfbf9] to-transparent dark:from-bor-primary-900 dark:via-bor-primary-900 pt-12 border-t border-bor-primary-200/50 dark:border-bor-primary-800 mt-auto">
                            <Button className="w-full justify-center shadow-lg shadow-bor-secondary/20" size="lg" onClick={() => window.open('https://katalog-app.vercel.app/', '_blank')}>
                                Kataloğu İncele
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}

function MobileMainLink({ title, href, icon, onClose }: { title: string; href: string; icon: React.ReactNode; onClose: () => void }) {
    const location = useLocation()
    const isActive = location.pathname === href

    return (
        <Link
            to={href}
            onClick={onClose}
            className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200",
                isActive 
                    ? "bg-bor-secondary/10 text-bor-secondary dark:bg-bor-secondary/20 font-semibold" 
                    : "text-bor-primary-700 hover:bg-bor-primary-100 dark:text-bor-primary-300 dark:hover:bg-bor-primary-800 font-medium"
            )}
        >
            <div className={cn("flex-shrink-0", isActive ? "text-bor-secondary" : "text-bor-primary-400 dark:text-bor-primary-500")}>
                {icon}
            </div>
            <span className="text-[17px]">{title}</span>
            <ChevronRight size={18} className="ml-auto opacity-40" />
        </Link>
    )
}

function MobileSubLink({ title, href, icon, onClose }: { title: string; href: string; icon: React.ReactNode; onClose: () => void }) {
    const location = useLocation()
    const isActive = location.pathname.startsWith(href)

    return (
        <Link
            to={href}
            onClick={onClose}
            className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                    ? "bg-bor-primary-100 dark:bg-bor-primary-800 text-bor-primary-900 dark:text-white font-medium" 
                    : "text-bor-primary-600 hover:bg-white hover:shadow-sm dark:text-bor-primary-400 dark:hover:bg-bor-primary-800 dark:hover:text-white"
            )}
        >
            <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg bg-bor-primary-100 dark:bg-bor-primary-800 group-hover:bg-bor-primary-200 dark:group-hover:bg-bor-primary-700 transition-colors",
                isActive ? "bg-white dark:bg-bor-primary-700 text-bor-secondary" : "text-bor-primary-500"
            )}>
                {icon}
            </div>
            <span className="text-[15px]">{title}</span>
        </Link>
    )
}
