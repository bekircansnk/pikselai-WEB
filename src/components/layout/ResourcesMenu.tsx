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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-bor-primary-100 dark:border-bor-primary-800">

                                {/* Sütun 1: Müşteri Hikayeleri (1/2) */}
                                <div className="pr-8 border-r border-bor-primary-100 dark:border-bor-primary-800">
                                    <MenuHeader title="Müşteri Hikayeleri" href="/musteri-hikayeleri" onClose={onClose} />
                                    <div className="mt-4 space-y-3">
                                        <ImageCard
                                            image="/assets/brands/cazador/cazador_siyah_pose.webp"
                                            title="Cazador: Moda Fotoğrafçılığında AI Dönüşümü"
                                            href="/musteri-hikayeleri/referanslar"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="/assets/blog/id_scenario_1_end_frame_prompt_2k_20.webp"
                                            title="Mina Drinks: Ürün Prodüksiyonunda %90 Tasarruf"
                                            href="/musteri-hikayeleri/mina-drinks"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp"
                                            title="Venüs Giyim: E-Ticarette Sanal Manken Teknolojisi"
                                            href="/musteri-hikayeleri/venus"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="/assets/brands/camp_and_map/1_2k_4_5_undefined__1_.webp"
                                            title="Camp and Map: Açık Hava Stüdyoları AI'a Taşındı"
                                            href="/musteri-hikayeleri/campandmap"
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                                {/* Sütun 2: Öğrenim Merkezi & Blog (1/2) */}
                                <div className="pl-8">
                                    <MenuHeader title="Öğrenim Merkezi & Blog" href="/blog" onClose={onClose} />
                                    <div className="mt-4 space-y-1">
                                        <TextItem
                                            title="AI Destekli Yaratıcılık"
                                            desc="Yapay zeka ile tasarımın sınırlarını keşfedin"
                                            icon={<div className="w-8 h-8 rounded-lg bg-spark-500/10 flex items-center justify-center text-spark-600"><PlayCircle size={20} /></div>}
                                            href="/blog?cat=ai-powered-creative"
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Markaya Dair Her Şey"
                                            desc="Güçlü ve sürdürülebilir markalar inşa edin"
                                            icon={<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600"><FolderArchive size={20} /></div>}
                                            href="/blog?cat=all-things-brand"
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Yaratıcı Liderlik"
                                            desc="Ekiplerinizi geleceğe hazırlayın"
                                            icon={<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600"><Mic size={20} /></div>}
                                            href="/blog?cat=creative-leadership"
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Dijital Pazarlama"
                                            desc="Veri odaklı büyüme stratejileri"
                                            icon={<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600"><PieChart size={20} /></div>}
                                            href="/blog?cat=digital-marketing"
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Video Pazarlama"
                                            desc="Etkileyici görsel hikayeler oluşturun"
                                            icon={<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-600"><PlayCircle size={20} /></div>}
                                            href="/blog?cat=video-marketing"
                                            onClose={onClose}
                                        />
                                        <TextItem
                                            title="Pikselai'ın İçinden"
                                            desc="Ekibimizden haberler ve güncellemeler"
                                            icon={<div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600"><FolderArchive size={20} /></div>}
                                            href="/blog?cat=inside-pikselai"
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
            className="flex items-center gap-1.5 text-[13px] font-black uppercase tracking-[0.15em] text-bor-primary-400 dark:text-bor-primary-500 hover:text-bor-secondary transition-colors mb-2"
        >
            {title} <span className="text-[11px] opacity-50">↗</span>
        </Link>
    )
}

function TextItem({ title, desc, icon, href, onClose }: { title: string, desc: string, icon: React.ReactNode, href: string, onClose: () => void }) {
    return (
        <Link
            to={href}
            className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-xl hover:bg-white dark:hover:bg-bor-primary-800 transition-all duration-300"
            onClick={onClose}
        >
            <div className="space-y-1">
                <h4 className="font-bold text-[16px] md:text-[18px] text-bor-primary-900 dark:text-white group-hover:text-bor-secondary transition-colors leading-tight tracking-tight">
                    {title}
                </h4>
                <p className="text-[12px] md:text-[13px] text-bor-primary-500 dark:text-bor-primary-400 leading-snug opacity-70 group-hover:opacity-100 transition-opacity max-w-[240px]">
                    {desc}
                </p>
            </div>
            <div className="text-bor-primary-300 group-hover:text-bor-secondary transition-all duration-300 ml-4 transform group-hover:scale-110 group-hover:rotate-3">
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
