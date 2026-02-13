import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Mic, BookOpen, PieChart, PlayCircle, FolderArchive
} from "lucide-react"


interface ResourcesMenuProps {
    isOpen: boolean
    activeMenu: string | null
    onClose: () => void
}

export function ResourcesMenu({ isOpen, activeMenu, onClose }: ResourcesMenuProps) {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    className="absolute left-0 top-full w-full z-40 border-b border-bor-primary-200 bg-[#F9F9F7] backdrop-blur-xl shadow-2xl dark:border-bor-primary-800 dark:bg-bor-primary-900/98"
                    onMouseLeave={onClose}
                >
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        {activeMenu === "kaynaklar" && (
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-bor-primary-100 dark:border-bor-primary-800">

                                {/* Sütun 1: Öğrenim Merkezi (4/12) */}
                                <div className="md:col-span-4 pr-8 border-r border-bor-primary-100 dark:border-bor-primary-800">
                                    <MenuHeader title="Öğrenim Merkezi" href="#" onClose={onClose} />
                                    <div className="mt-4 space-y-0.5">
                                        <TextItem
                                            title="Etkinlikler ve Zirveler"
                                            desc="Yaklaşan etkinliklerimiz ve kayıtlar"
                                            icon={<Mic size={16} />}
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Rehberler"
                                            desc="Pazarlama liderlerinden içgörüler"
                                            icon={<BookOpen size={16} />}
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Raporlar"
                                            desc="Daha akıllı kararlar için veri"
                                            icon={<PieChart size={16} />}
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Video kütüphanesi"
                                            desc="PikselAI'nın en yeni videoları"
                                            icon={<PlayCircle size={16} />}
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Oyun kılavuzları"
                                            desc="Stratejik büyüme metotları"
                                            icon={<FolderArchive size={16} />}
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                                {/* Sütun 2: Blog (4/12) */}
                                <div className="md:col-span-4 px-8 border-r border-bor-primary-100 dark:border-bor-primary-800">
                                    <MenuHeader title="Blog" href="/blog" onClose={onClose} />
                                    <div className="mt-4 space-y-3">
                                        <ImageCard
                                            image="https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop"
                                            title="SaaS için tasarım sistemleri: En iyi 6 ajans"
                                            href="/blog"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                            title="2026 Markalarından 10 Yaratıcı Hizmet Örneği"
                                            href="/blog"
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                                {/* Sütun 3: Müşteri Hikayeleri (4/12) */}
                                <div className="md:col-span-4 pl-8">
                                    <MenuHeader title="Müşteri Hikayeleri" href="/musteri-hikayeleri" onClose={onClose} />
                                    <div className="mt-4 space-y-3">
                                        <ImageCard
                                            image="https://images.unsplash.com/photo-1611162617263-4ec3060a058e?q=80&w=1974&auto=format&fit=crop"
                                            title="Vimeo'da AI ile yaratıcı iş akışları"
                                            href="/musteri-hikayeleri"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                            title="Fortune 500 şirketi AI kullanımını katladı"
                                            href="/musteri-hikayeleri"
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function MenuHeader({ title, href, onClose }: { title: string, href: string, onClose: () => void }) {
    return (
        <Link
            to={href}
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bor-primary-400 dark:text-bor-primary-500 hover:text-bor-secondary transition-colors"
        >
            {title} <span className="text-[10px]">↗</span>
        </Link>
    )
}

function TextItem({ title, desc, icon, onClose }: { title: string, desc: string, icon: React.ReactNode, onClose: () => void }) {
    return (
        <Link
            to="#"
            className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-lg hover:bg-white dark:hover:bg-bor-primary-800 transition-all duration-200"
            onClick={onClose}
        >
            <div className="space-y-0.5">
                <h4 className="font-bold text-[14px] text-bor-primary-900 dark:text-white group-hover:text-bor-secondary transition-colors leading-tight">
                    {title}
                </h4>
                <p className="text-[11px] text-bor-primary-500 dark:text-bor-primary-400 leading-snug opacity-80">
                    {desc}
                </p>
            </div>
            <div className="text-bor-primary-300 group-hover:text-bor-secondary transition-colors ml-3 opacity-40 group-hover:opacity-100">
                {icon}
            </div>
        </Link>
    )
}

function ImageCard({ image, title, href, onClose }: { image: string, title: string, href: string, onClose: () => void }) {
    return (
        <Link
            to={href}
            className="group flex items-center gap-3 p-1.5 -mx-1.5 rounded-xl hover:bg-white dark:hover:bg-bor-primary-800 transition-all duration-200"
            onClick={onClose}
        >
            <div className="w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h4 className="font-semibold text-[13px] text-bor-primary-900 dark:text-white group-hover:text-bor-secondary transition-colors leading-snug line-clamp-2">
                {title}
            </h4>
        </Link>
    )
}
