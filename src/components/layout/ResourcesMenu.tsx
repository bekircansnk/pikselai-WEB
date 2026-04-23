import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"



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
                                    <div className="mt-4 space-y-3">
                                        <ImageCard
                                            image="/assets/pages/blog/gizli_ai_ozellikleri.jpeg"
                                            title="AI Destekli Yaratıcılık"
                                            href="/blog?cat=ai-powered-creative"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="/assets/pages/blog/ai_marka_rehberleri.jpeg"
                                            title="Markaya Dair Her Şey"
                                            href="/blog?cat=all-things-brand"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="/assets/pages/blog/ai_telif_haklari.jpeg"
                                            title="Yaratıcı Liderlik"
                                            href="/blog?cat=creative-leadership"
                                            onClose={onClose}
                                        />
                                        <ImageCard
                                            image="/assets/pages/blog/ai_pazarlama_kampanyalari.png"
                                            title="Dijital Pazarlama"
                                            href="/blog?cat=digital-marketing"
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
