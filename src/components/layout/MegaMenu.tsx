import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Bot, Sparkles, Video, Aperture, Wand2, // AI Icons
    Search, Calendar, Target, BarChart3, Camera, // Growth Icons
    Store, Paintbrush, Zap, Plug, Mail, // Ecommerce Icons
    Layout, Code, Palette, BookOpen, Layers // Web Icons
} from "lucide-react"
import { cn } from "../../lib/utils"

interface MegaMenuProps {
    isOpen: boolean
    activeMenu: string | null
    onClose: () => void
}

/**
 * Masaüstü Mega Menü Bileşeni
 * Hizmetler ve kaynaklar için genişletilmiş açılır menüyü görüntüler.
 * Animasyonlu geçişler ve kategorize edilmiş linkler içerir.
 */
export function MegaMenu({ isOpen, activeMenu, onClose }: MegaMenuProps) {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    className="absolute left-0 top-full w-full z-40 border-b border-bor-primary-200 bg-[#fbfbf9]/98 backdrop-blur-xl shadow-2xl dark:border-bor-primary-800 dark:bg-bor-primary-900/98"
                    onMouseLeave={onClose}
                >
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        {activeMenu === "hizmetler" && (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                                {/* Sütun 1: AI Prodüksiyon */}
                                <div className="space-y-4">
                                    <MenuHeader
                                        title="AI Prodüksiyon"
                                        color="bg-[#023e8a] text-white"
                                        href="/hizmetler/ai-produksiyon"
                                        onClose={onClose}
                                    />
                                    <div className="space-y-0.5">
                                        <MenuItem
                                            icon={<Aperture size={16} />}
                                            title="Ürün Fotoğrafçılığı"
                                            href="/hizmetler/ai-produksiyon"
                                            desc="Dekupe, ghost mannequin"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Bot size={16} />}
                                            title="Sanal Manken Ajansı"
                                            href="/hizmetler/ai-produksiyon"
                                            desc="Size özel dijital manken"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Video size={16} />}
                                            title="AI Video & Reels"
                                            href="/hizmetler/ai-produksiyon"
                                            desc="Görselden videoya geçiş"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Wand2 size={16} />}
                                            title="Görsel A/B Testi"
                                            href="/hizmetler/ai-produksiyon"
                                            desc="Satış odaklı görsel analizi"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Sparkles size={16} />}
                                            title="AI Konsept Tasarımı"
                                            href="/hizmetler/ai-produksiyon"
                                            desc="Yaratıcı kampanya fikirleri"
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                                {/* Sütun 2: E-Ticaret Yönetimi */}
                                <div className="space-y-4">
                                    <MenuHeader
                                        title="E-Ticaret"
                                        color="bg-[#2d6a4f] text-white"
                                        href="/hizmetler/e-ticaret"
                                        onClose={onClose}
                                    />
                                    <div className="space-y-0.5">
                                        <MenuItem
                                            icon={<Store size={16} />}
                                            title="Shopify Kurulum"
                                            href="/hizmetler/e-ticaret"
                                            desc="Anahtar teslim mağaza açılışı"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Paintbrush size={16} />}
                                            title="Tema & Tasarım"
                                            href="/hizmetler/e-ticaret"
                                            desc="Markaya özel UX/UI düzenlemeleri"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Zap size={16} />}
                                            title="Dönüşüm (CRO)"
                                            href="/hizmetler/e-ticaret"
                                            desc="Satış odaklı sayfa optimizasyonu"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Search size={16} />}
                                            title="Teknik SEO"
                                            href="/hizmetler/e-ticaret"
                                            desc="Google sıralama ve site performansı"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Plug size={16} />}
                                            title="Entegrasyonlar"
                                            href="/hizmetler/e-ticaret"
                                            desc="ERP, Kargo ve Pazaryeri bağlantıları"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Mail size={16} />}
                                            title="E-Mail Pazarlama"
                                            href="/hizmetler/e-ticaret"
                                            desc="Klaviyo otomasyon kurulumları"
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                                {/* Sütun 3: Sosyal Medya Yönetimi */}
                                <div className="space-y-4">
                                    <MenuHeader
                                        title="Sosyal Medya"
                                        color="bg-[#386641] text-white"
                                        href="/hizmetler/sosyal-medya"
                                        onClose={onClose}
                                    />
                                    <div className="space-y-0.5">
                                        <MenuItem
                                            icon={<Sparkles size={16} />}
                                            title="AI Destekli İçerik"
                                            href="/hizmetler/sosyal-medya"
                                            desc="Yapay zeka ile profesyonel üretim"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Calendar size={16} />}
                                            title="Düzenli Paylaşım"
                                            href="/hizmetler/sosyal-medya"
                                            desc="Planlı ve tutarlı içerik takvimi"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Target size={16} />}
                                            title="Stratejik Reklam"
                                            href="/hizmetler/sosyal-medya"
                                            desc="Hedef kitle odaklı yönetim"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<BarChart3 size={16} />}
                                            title="Performans Raporları"
                                            href="/hizmetler/sosyal-medya"
                                            desc="Aylık detaylı veri analizleri"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Palette size={16} />}
                                            title="Marka Kimliği"
                                            href="/hizmetler/sosyal-medya"
                                            desc="Estetik ve marka bütünlüğü"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Camera size={16} />}
                                            title="Fotoğraf Odaklı"
                                            href="/hizmetler/sosyal-medya"
                                            desc="Görsel kalite öncelikli yönetim"
                                            onClose={onClose}
                                        />
                                    </div>
                                </div>

                                {/* Sütun 3: Kreatif Tasarım */}
                                <div className="space-y-4">
                                    <MenuHeader
                                        title="Kreatif Tasarım"
                                        color="bg-[#7209b7] text-white"
                                        href="/hizmetler/kreatif-tasarim"
                                        onClose={onClose}
                                    />
                                    <div className="space-y-0.5">
                                        <MenuItem
                                            icon={<BookOpen size={16} />}
                                            title="İnteraktif Kataloglar"
                                            href="/hizmetler/kreatif-tasarim"
                                            desc="Dijital yayın çözümleri"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Layout size={16} />}
                                            title="Landing Page"
                                            href="/hizmetler/kreatif-tasarim"
                                            desc="Dönüşüm odaklı tasarım"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Code size={16} />}
                                            title="Web Geliştirme"
                                            href="/hizmetler/kreatif-tasarim"
                                            desc="Modern teknoloji siteleri"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Palette size={16} />}
                                            title="UI/UX Tasarım"
                                            href="/hizmetler/kreatif-tasarim"
                                            desc="Kullanıcı deneyimi odaklı"
                                            onClose={onClose}
                                        />
                                        <MenuItem
                                            icon={<Layers size={16} />}
                                            title="Tasarım Sistemleri"
                                            href="/hizmetler/kreatif-tasarim"
                                            desc="Marka dili bütünlüğü"
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

function MenuHeader({ title, color, href, onClose }: { title: string, color: string, href: string, onClose: () => void }) {
    return (
        <Link
            to={href}
            onClick={onClose}
            className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-lg font-bold font-serif italic text-base shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5",
                color
            )}
        >
            {title} <span className="ml-2 not-italic text-sm">↗</span>
        </Link>
    )
}

function MenuItem({ icon, title, href, desc, onClose }: { icon: React.ReactNode, title: string, href: string, desc: string, onClose: () => void }) {
    return (
        <Link
            to={href}
            className="group flex items-center gap-3 p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200"
            onClick={onClose}
        >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-bor-primary-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-bor-primary-900 group-hover:text-bor-secondary dark:text-white dark:group-hover:text-bor-secondary transition-colors text-sm">
                    {title}
                </h4>
                <p className="text-[11px] text-bor-primary-500 dark:text-bor-primary-400 mt-0 opacity-80 leading-tight">
                    {desc}
                </p>
            </div>
        </Link>
    )
}
