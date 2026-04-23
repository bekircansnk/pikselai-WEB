import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, User, Zap, BarChart3, Package, TrendingUp, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { cn } from "../lib/utils"

// Kategori listesi
const categories = ["Tümü", "Referans Proje", "Yapay Zeka", "E-Ticaret", "Sosyal Medya"]

// Gerçek case study'ler
const caseStudies = [
    {
        id: 1,
        slug: "/blog/referanslar",
        category: "Referans Proje",
        brand: "Cazador",
        title: "Cazador'un Dijital Dönüşüm Yolculuğu",
        excerpt: "Moda dünyasının köklü markası Cazador, Pikselai'ın yapay zeka çözümleriyle katalog süreçlerini hızlandırdı ve dijital varlığını mükemmelleştirdi.",
        tags: ["Dijital Katalog", "AI Prodüksiyon", "Sosyal Medya"],
        image: "/assets/brands/cazador/cazador_moda_haki.webp",
        stat: { label: "Katalog Hızı", value: "10x", icon: TrendingUp },
        featured: true,
    },
    {
        id: 2,
        slug: "/blog/mina-drinks",
        category: "E-Ticaret",
        brand: "Mina Drinks",
        title: "Mina Drinks'in Görsel Dönüşüm Yolculuğu",
        excerpt: "İçecek sektörünün yenilikçi markası Mina Drinks, Pikselai'ın yapay zeka çözümleriyle ürün fotoğrafçılığı süreçlerini baştan yarattı.",
        tags: ["Ürün Fotoğrafçılığı", "AI Stüdyo", "Maliyet Azaltma"],
        image: "/assets/pages/minadrinkscasestudy/_id_scenario_1_corn_field_dream_2k_202.webp",
        stat: { label: "Maliyet Azalması", value: "%90", icon: BarChart3 },
        featured: false,
    },
    {
        id: 3,
        slug: "/blog/venus",
        category: "E-Ticaret",
        brand: "Venüs Giyim",
        title: "Venüs'ün Model Çeşitliliği Dönüşümü",
        excerpt: "Kadın giyim markası Venüs, e-ticaret manken çekim süreçlerini Pikselai'ın Sanal Manken (AI Model) teknolojisiyle tamamen yeniden kurguladı.",
        tags: ["Sanal Manken", "AI Model", "Uluslararası Pazar"],
        image: "/assets/brands/venus/mila_1_image00004_4k_16_9_01_hero_full.webp",
        stat: { label: "Zaman Tasarrufu", value: "%85", icon: Zap },
        featured: false,
    },
    {
        id: 4,
        slug: "/blog/campandmap",
        category: "E-Ticaret",
        brand: "Campandmap",
        title: "Campandmap'in Outdoor Vitrini",
        excerpt: "Ağır kamp ekipmanlarını stüdyoya taşımak yerine Pikselai'ın yapay zeka destekli arka plan üretimi ile doğanın ruhunu kataloglarına taşıdı.",
        tags: ["Background AI", "Outdoor Prodüksiyon", "E-Ticaret"],
        image: "/assets/brands/camp_and_map/1_2k_auto_undefined.webp",
        stat: { label: "Lojistik Tasarruf", value: "%100", icon: Package },
        featured: false,
    },
]

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("Tümü")

    const filtered = activeCategory === "Tümü"
        ? caseStudies
        : caseStudies.filter(p => p.category === activeCategory)

    const featured = caseStudies.find(p => p.featured)
    const rest = filtered.filter(p => !p.featured)

    return (
        <div className="min-h-screen bg-[#F4EFE6] font-sans">
            <Header transparent={false} lightText={false} />

            {/* Hero - Öne Çıkan */}
            {featured && activeCategory === "Tümü" && (
                <section className="pt-24 pb-0 bg-[#F4EFE6]">
                    {/* Sayfa başlığı */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center px-4 pt-6 pb-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0b2117]/10 bg-[#0b2117]/5 text-[#0b2117] text-xs font-bold tracking-widest uppercase mb-5">
                            Müşteri Hikayeleri
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-3">
                            Gerçek Markalar,<br />
                            <span className="italic font-light text-[#86AA00]">Gerçek Sonuçlar</span>
                        </h1>
                        <p className="text-[#3a5245] text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Pikselai ile dijital dönüşüm yolculuğuna çıkan markalardan ilham alın.
                        </p>
                    </motion.div>

                    {/* Öne Çıkan - Tam Genişlik */}
                    <Link to={featured.slug} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="group relative grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] overflow-hidden"
                        >
                            {/* Sol - Büyük Ürün Görseli */}
                            <div className="relative h-[55vw] max-h-[680px] lg:h-auto overflow-hidden bg-[#0b2117]">
                                <img
                                    src={featured.image}
                                    alt={featured.brand}
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Sağa doğru gradient geçişi */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b2117]/60 hidden lg:block" />
                                {/* Alt gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b2117]/50 to-transparent lg:hidden" />

                                {/* Brand etiket - sol alt */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#caf265] animate-pulse" />
                                    <span className="text-white/80 text-sm font-bold tracking-widest uppercase">
                                        {featured.brand}
                                    </span>
                                </div>
                            </div>

                            {/* Sağ - İçerik */}
                            <div className="bg-[#0b2117] px-10 md:px-16 lg:px-20 py-16 lg:py-24 flex flex-col justify-center relative overflow-hidden">
                                {/* Arka plan glow efektleri */}
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#caf265]/8 blur-[100px] rounded-full" />
                                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#caf265]/5 blur-[80px] rounded-full" />

                                <div className="relative z-10">
                                    {/* Etiket */}
                                    <span className="inline-flex items-center gap-2 text-[#caf265] text-xs font-bold tracking-widest uppercase mb-6">
                                        <Star size={10} className="fill-[#caf265]" />
                                        Öne Çıkan Hikaye
                                    </span>

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-5">
                                        {featured.title}
                                    </h2>

                                    <p className="text-[#a8b8af] font-light leading-relaxed text-lg mb-8 max-w-md">
                                        {featured.excerpt}
                                    </p>

                                    {/* İstatistikler */}
                                    <div className="flex items-center gap-10 mb-10 pb-8 border-b border-white/10">
                                        <div>
                                            <div className="text-3xl font-bold text-[#caf265]">{featured.stat.value}</div>
                                            <div className="text-xs text-[#a8b8af] mt-1">{featured.stat.label}</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-white">10x</div>
                                            <div className="text-xs text-[#a8b8af] mt-1">Hız Artışı</div>
                                        </div>
                                    </div>

                                    {/* Etiketler */}
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {featured.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 text-white/60 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-4">
                                        <span className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#caf265] text-[#0b2117] font-bold text-base group-hover:gap-3 transition-all duration-300">
                                            Hikayeyi Oku <ArrowRight size={18} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </section>
            )}

            {/* Kategori Filtreleri */}
            <section className="sticky top-[72px] z-30 bg-[#F4EFE6]/90 backdrop-blur-md border-b border-[#e0dcd3] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                                    activeCategory === cat
                                        ? "bg-[#0b2117] text-white shadow-md"
                                        : "bg-[#0b2117]/5 text-[#0b2117] hover:bg-[#0b2117]/10"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kart Izgara */}
            <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#F4EFE6]">
                <div className="max-w-7xl mx-auto">
                    {activeCategory !== "Tümü" && filtered.length === 0 && (
                        <div className="text-center py-20 text-[#3a5245] text-lg font-light">
                            Bu kategoride henüz içerik yok.
                        </div>
                    )}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {(activeCategory === "Tümü" ? rest : filtered).map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                >
                                    <Link to={post.slug} className="block group h-full">
                                        <article className="flex flex-col h-full rounded-3xl overflow-hidden border border-[#e0dcd3] bg-white hover:border-[#86AA00]/40 hover:shadow-xl transition-all duration-500">
                                            {/* Görsel */}
                                            <div className="h-52 overflow-hidden relative">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                                {/* Stat badge */}
                                                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b2117]/80 backdrop-blur-sm">
                                                    <post.stat.icon size={12} className="text-[#caf265]" />
                                                    <span className="text-white text-xs font-bold">{post.stat.value}</span>
                                                    <span className="text-white/60 text-[10px]">{post.stat.label}</span>
                                                </div>
                                            </div>

                                            {/* İçerik */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-xs font-bold text-[#86AA00] uppercase tracking-widest">{post.brand}</span>
                                                    <span className="text-[#0b2117]/20">·</span>
                                                    <span className="text-xs text-[#0b2117]/50">{post.category}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-[#0b2117] mb-3 leading-snug group-hover:text-[#86AA00] transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-[#3a5245] font-light leading-relaxed mb-5 flex-grow line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 mb-5">
                                                    {post.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#0b2117]/5 text-[#0b2117]/60">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between pt-4 border-t border-[#e0dcd3]">
                                                    <span className="text-xs font-medium text-[#3a5245] flex items-center gap-1.5">
                                                        <User size={12} /> Pikselai Ekibi
                                                    </span>
                                                    <span className="text-xs text-[#86AA00] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Oku <ArrowRight size={12} />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA Bülteni */}
            <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#F4EFE6]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0b2117] rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#caf265]/8 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#caf265]/5 blur-[80px] rounded-full" />

                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-3xl md:text-5xl font-bold font-display text-white leading-tight mb-4">
                                Markanız da bu<br />
                                <span className="italic font-light text-[#caf265]">başarı hikayesinde olsun</span>
                            </h2>
                            <p className="text-[#a8b8af] font-light leading-relaxed">
                                Ücretsiz danışmanlık görüşmesi planlayalım ve dijital hedeflerinizi gerçeğe dönüştürelim.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col gap-4 items-center md:items-start shrink-0">
                            <a
                                href="/iletisim"
                                className="px-8 py-4 rounded-full bg-[#caf265] text-[#0b2117] font-bold text-base flex items-center gap-2 hover:bg-[#b5dc57] transition-colors"
                            >
                                Ücretsiz Danışmanlık Al <ArrowRight size={18} />
                            </a>
                            <a
                                href="mailto:bilgi@pikselai.com"
                                className="text-sm text-white/60 hover:text-[#caf265] transition-colors"
                            >
                                bilgi@pikselai.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
