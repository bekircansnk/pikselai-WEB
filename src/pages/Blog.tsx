import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blogPosts"

/* ─── Süperside Renk Referansları ───────────────────────────────
   cloud-100  : #f7f9f2  (krem arka plan)
   pine-500   : rgb(10,33,31)  (koyu forest yeşil dark section)
   pine-300   : rgb(17,57,53)  (biraz daha açık koyu yeşil)
   spark-500  : rgb(216,255,133)  (neon sarı-yeşil vurgu)
   spark-300  : rgb(228,255,173)  (açık neon)
   earth-900  : rgb(17,15,15)  (başlık metni)
   leaf-500   : rgb(42,78,69)  (ikincil metin koyu)
─────────────────────────────────────────────────────────────── */

/* Renk sabitleri */
const C = {
    bg: "#f7f9f2",
    pine: "rgb(10,33,31)",
    pine2: "rgb(17,57,53)",
    pine3: "rgb(23,74,70)",
    spark: "rgb(216,255,133)",
    sparkMid: "rgb(228,255,173)",
    text: "rgb(1,3,3)",
    textMuted: "rgb(42,78,69)",
    textLight: "rgb(85,113,106)",
    border: "rgba(10,33,31,0.12)",
}

const PER_PAGE = 6

/* ═════════════════════════════════════════════════════════════ */
export default function Blog() {
    const [activeCat, setActiveCat] = useState("tumu")
    const [page, setPage]           = useState(1)
    const location = useLocation()

    // URL'den kategori parametresini oku ve state'e yansıt
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const cat = params.get('cat')
        if (cat && BLOG_CATEGORIES.find(c => c.id === cat)) {
            setActiveCat(cat)
            setPage(1)
        } else if (!cat) {
            setActiveCat("tumu")
            setPage(1)
        }
    }, [location])

    const filtered   = activeCat === "tumu" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.catId === activeCat)
    const totalPages = Math.ceil(filtered.length / PER_PAGE)
    const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

    const changeCat = (id: string) => { setActiveCat(id); setPage(1) }

    return (
        <div className="min-h-screen font-sans overflow-x-hidden" style={{ background: C.bg }}>
            <Header />

            {/* ── HERO (Ortalanmış Başlık) ─────────────────────────── */}
            <section className="px-6 lg:px-12 xl:px-20 pt-32 pb-16 max-w-screen-xl mx-auto flex flex-col items-center text-center">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6" style={{ color: C.textLight }}>
                        BİZİM BLOG
                    </p>
                    <h1 className="text-5xl md:text-[80px] font-medium leading-[1.05] mb-6 tracking-tight" style={{ color: C.pine }}>
                        Yaratıcı <em className="font-light italic text-[#1a3835]">Performans</em>
                    </h1>
                    <p className="text-lg md:text-[21px] max-w-[800px] leading-relaxed font-light mt-4 text-[#1a3835]/70">
                        Yaratıcı fikirler, pratik ipuçları ve içeriden bilgiler — Pikselai blogu, ekibinizin büyük ölçekli tasarımları harika bir şekilde tamamlamasına yardımcı olur.
                    </p>
                </motion.div>
            </section>

            {/* ── 2'Lİ BÜYÜK ÖNE ÇIKAN KARTLAR (Yazılar altta) ──────────────── */}
            <section className="px-6 lg:px-12 xl:px-20 pb-20 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {BLOG_POSTS.slice(0, 2).map((f, i) => (
                        <motion.div
                            key={f.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col"
                        >
                            {/* Görsel Kutusu */}
                            <Link to={f.link} className="block overflow-hidden rounded-[1.5rem] mb-6 shadow-sm">
                                <img
                                    src={f.img} alt={f.title}
                                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </Link>

                            {/* İçerik */}
                            <div>
                                <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3 text-[#1a3835]/50">
                                    <span>{f.cat}</span>
                                    <span>•</span>
                                    <span>{f.time} okuma</span>
                                </div>
                                <Link to={f.link}>
                                    <h2 className="text-2xl md:text-[28px] font-medium leading-tight mb-3 text-[#0a211f] group-hover:text-[#2a4e45] transition-colors">
                                        {f.title}
                                    </h2>
                                </Link>
                                <p className="text-[#1a3835]/70 text-base leading-relaxed mb-5 line-clamp-3">
                                    {f.desc}
                                </p>
                                
                                {/* Yazar */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0b2117] text-[#D8FF85] flex items-center justify-center font-bold text-sm shadow-sm">P</div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-[#0a211f]">Pikselai Ekibi</span>
                                        <span className="text-xs text-[#1a3835]/60">İçerik Stüdyosu</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── KOYU YEŞİL TRENLER (AI bölümü - Kategorisiz, Ortalı) ────── */}
            <section style={{ background: C.pine }} className="py-24 px-6 lg:px-12 xl:px-20">
                <div className="max-w-screen-xl mx-auto">
                    
                    {/* Başlık (Ortalı) */}
                    <div className="text-center mb-16">
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(247,249,242,0.6)" }}>
                            TRENDLER
                        </p>
                        <h2 className="text-4xl md:text-5xl font-medium text-white">
                            AI Destekli Yaratıcılık
                        </h2>
                    </div>

                    {/* Blog Grid (Koyu temada yazılar altta) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {BLOG_POSTS.filter(p => p.catId === "ai-powered-creative").slice(0, 3).map(p => (
                            <div key={p.id} className="group flex flex-col">
                                {/* Görsel Kutusu */}
                                <Link to={p.link} className="block overflow-hidden rounded-[1.5rem] mb-6">
                                    <img 
                                        src={p.img} 
                                        alt={p.title} 
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                </Link>

                                {/* İçerik */}
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3 text-white/50">
                                        <span>{p.cat}</span>
                                        <span>•</span>
                                        <span>{p.time} okuma</span>
                                    </div>
                                    <Link to={p.link}>
                                        <h3 className="text-white font-medium text-[22px] leading-snug mb-3 hover:text-[#D8FF85] transition-colors">
                                            {p.title}
                                        </h3>
                                    </Link>
                                    <p className="text-white/60 text-base leading-relaxed line-clamp-3">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FİLTRELİ YAZI GRİDİ (Tüm İçerikler) ─────────────────────────── */}
            <section className="px-6 lg:px-12 xl:px-20 py-24 max-w-screen-xl mx-auto">
                {/* Başlık */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.text }}>
                            {activeCat === "tumu" ? "Tüm İçerikler" : BLOG_CATEGORIES.find(c => c.id === activeCat)?.label}
                        </h2>
                        <p className="text-sm mt-1" style={{ color: C.textLight }}>{filtered.length} içerik</p>
                    </div>
                </div>

                {/* Kategori tab bar */}
                <div className="flex flex-wrap gap-2 border-b mb-12 pb-4" style={{ borderColor: C.border }}>
                    {BLOG_CATEGORIES.map(c => (
                        <button
                            key={c.id}
                            onClick={() => { setActiveCat(c.id); setPage(1); }}
                            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                            style={activeCat === c.id
                                ? { background: C.pine, color: C.sparkMid }
                                : { color: C.textMuted, background: "transparent" }
                            }
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* 3 Kolonlu Grid (Aynı resim üstte formatı) */}
                {paginated.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {paginated.map((p, i) => (
                            <motion.article
                                key={p.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: i * 0.05 }}
                                className="group flex flex-col"
                            >
                                {/* Görsel */}
                                <Link to={p.link} className="block overflow-hidden rounded-[1.5rem] mb-6">
                                    <img
                                        src={p.img} alt={p.title}
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>

                                {/* İçerik */}
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3 text-[#1a3835]/50">
                                        <span>{p.cat}</span>
                                        <span>•</span>
                                        <span>{p.time} okuma</span>
                                    </div>

                                    <Link to={p.link}>
                                        <h3
                                            className="text-xl md:text-[22px] font-medium leading-snug mb-3 transition-colors duration-200 text-[#0a211f] group-hover:text-[#2a4e45]"
                                        >
                                            {p.title}
                                        </h3>
                                    </Link>

                                    <p className="text-[#1a3835]/70 text-base leading-relaxed line-clamp-3">{p.desc}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 text-lg" style={{ color: C.textLight }}>
                        Bu kategoride henüz içerik bulunmuyor.
                    </div>
                )}

                {/* Sayfalama */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-20">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="flex items-center justify-center w-11 h-11 rounded-full border transition-all disabled:opacity-30"
                            style={{ borderColor: C.border, color: C.textMuted }}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                            <button
                                key={n}
                                onClick={() => setPage(n)}
                                className="w-11 h-11 rounded-full text-sm font-bold transition-all border"
                                style={page === n
                                    ? { background: C.pine, color: C.sparkMid, borderColor: C.pine }
                                    : { borderColor: C.border, color: C.textMuted }
                                }
                            >
                                {n}
                            </button>
                        ))}
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="flex items-center justify-center w-11 h-11 rounded-full border transition-all disabled:opacity-30"
                            style={{ borderColor: C.border, color: C.textMuted }}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </section>

            {/* ── CTA BANNER ──────────────────────────────────── */}
            <section style={{ background: C.pine }} className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm font-bold tracking-[0.18em] uppercase mb-6" style={{ color: "rgba(216,255,133,0.6)" }}>
                        Yaratıcı Ekibinizin Yaratıcı Ekibi™
                    </p>
                    <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] mb-8 text-white">
                        Markanızın görsel geleceğini{" "}
                        <em className="not-italic" style={{ color: C.spark, fontStyle: "italic" }}>birlikte inşa edelim.</em>
                    </h2>
                    <p className="text-xl mb-12" style={{ color: "rgba(247,249,242,0.6)" }}>
                        Ücretsiz danışmanlık görüşmesi için bugün bize ulaşın.
                    </p>
                    <Link
                        to="/iletisim"
                        className="inline-flex items-center gap-3 font-bold px-10 py-5 rounded-full text-base transition-all duration-200 hover:scale-105"
                        style={{ background: C.spark, color: C.pine }}
                    >
                        Ücretsiz Danışmanlık Al <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
