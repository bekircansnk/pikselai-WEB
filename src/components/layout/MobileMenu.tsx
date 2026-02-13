import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-50 h-full w-[300px] bg-white p-6 shadow-2xl dark:bg-bor-primary-900 overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-bold font-display text-bor-primary-900 dark:text-white">Menü</span>
                                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                                    ✕
                                </Button>
                            </div>

                            <div className="space-y-6 flex-1">
                                <MobileMenuItem title="Ana Sayfa" href="/" onClick={onClose} />

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase text-bor-primary-400">AI Prodüksiyon</h4>
                                    <MobileMenuItem title="Tüm AI Prodüksiyon" href="/hizmetler/ai-produksiyon" onClick={onClose} />
                                    <MobileMenuItem title="Ürün Fotoğrafçılığı" href="/hizmetler/ai-produksiyon" onClick={onClose} />
                                    <MobileMenuItem title="Sanal Manken" href="/hizmetler/ai-produksiyon" onClick={onClose} />
                                    <MobileMenuItem title="AI Video & Reels" href="/hizmetler/ai-produksiyon" onClick={onClose} />
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase text-bor-primary-400">Dijital Büyüme</h4>
                                    <MobileMenuItem title="Tüm Dijital Büyüme" href="/hizmetler/dijital-buyume" onClick={onClose} />
                                    <MobileMenuItem title="E-Ticaret Yönetimi" href="/hizmetler/dijital-buyume" onClick={onClose} />
                                    <MobileMenuItem title="SEO & İçerik" href="/hizmetler/dijital-buyume" onClick={onClose} />
                                    <MobileMenuItem title="Sosyal Medya" href="/hizmetler/sosyal-medya" onClick={onClose} />
                                    <MobileMenuItem title="Social Media (English)" href="/social-media-creative" onClick={onClose} />
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase text-bor-primary-400">Katalog & Web</h4>
                                    <MobileMenuItem title="Tüm Katalog & Web" href="/hizmetler/katalog-web" onClick={onClose} />
                                </div>

                                <div className="w-full h-px bg-bor-primary-100 dark:bg-bor-primary-800" />

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase text-bor-primary-400">Kaynaklar</h4>
                                    <MobileMenuItem title="Blog" href="/blog" onClick={onClose} />
                                    <MobileMenuItem title="Müşteri Hikayeleri" href="/musteri-hikayeleri" onClick={onClose} />
                                </div>

                                <div className="w-full h-px bg-bor-primary-100 dark:bg-bor-primary-800" />

                                <MobileMenuItem title="İşlerimiz" href="/islerimiz" onClick={onClose} />
                                <MobileMenuItem title="Hakkımızda" href="/hakkimizda" onClick={onClose} />
                                <MobileMenuItem title="Ücretler" href="/ucretler" onClick={onClose} />
                                <a
                                    href="/social-media-creative.html"
                                    className="block text-lg font-medium text-bor-primary-600 hover:text-bor-primary-900 dark:text-bor-primary-300 dark:hover:text-white transition-colors"
                                    onClick={onClose}
                                >
                                    Sosyal
                                </a>
                                <MobileMenuItem title="İletişim" href="/iletisim" onClick={onClose} />
                            </div>

                            <div className="mt-auto space-y-4 pt-6 border-t border-bor-primary-100 dark:border-bor-primary-800">
                                <Button className="w-full justify-center" size="lg" href="/iletisim">
                                    Demo Talep Et
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

function MobileMenuItem({ title, href, onClick }: { title: string; href: string; onClick: () => void }) {
    return (
        <Link
            to={href}
            className="block text-lg font-medium text-bor-primary-600 hover:text-bor-primary-900 dark:text-bor-primary-300 dark:hover:text-white transition-colors"
            onClick={onClick}
        >
            {title}
        </Link>
    )
}
