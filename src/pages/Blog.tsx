import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

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

/* ─── Kategoriler ─── */
const CATS = [
    { id: "tumu",            label: "Tümü" },
    { id: "musteri",         label: "Müşteri Hikayeleri" },
    { id: "ai-produksiyon",  label: "AI Prodüksiyon" },
    { id: "moda",            label: "Moda & Tekstil" },
    { id: "e-ticaret",       label: "E-Ticaret" },
    { id: "sosyal-medya",    label: "Sosyal Medya" },
]

/* ─── Öne Çıkan Kartlar ─── */
const FEATURED = [
    {
        id: "cazador",
        cat: "Müşteri Hikayesi",
        title: "Cazador: Moda Fotoğrafçılığında AI Dönüşümü",
        desc: "Geleneksel stüdyo çekimine kıyasla 10x daha hızlı ve %80 daha düşük maliyetli prodüksiyon.",
        img: "/assets/brands/cazador/cazador_moda_haki.webp",
        link: "/musteri-hikayeleri/referanslar",
        stats: [{ v: "%80", l: "Maliyet Tasarrufu" }, { v: "10x", l: "Hız Artışı" }],
    },
    {
        id: "mina",
        cat: "Müşteri Hikayesi",
        title: "Mina Drinks: CGI ile Sıfır Maliyetli Stüdyo",
        desc: "Stüdyo giderlerini tamamen ortadan kaldırarak sınırsız ürün görseli üretimi.",
        img: "/assets/brands/mina_drinks/mina1.webp",
        link: "/musteri-hikayeleri/mina-drinks",
        stats: [{ v: "%90", l: "Maliyet Azaltımı" }, { v: "∞", l: "Yaratıcı Çıktı" }],
    },
]

/* ─── Tüm Yazılar ─── */
const POSTS = [
    { id: "c1", cat: "Müşteri Hikayesi", catId: "musteri", title: "Yapay Zeka ile Moda Fotoğrafçılığında Devrim", desc: "Geleneksel fotoğraf çekimi maliyetlerini %80 düşürürken ürün görselleştirme hızını 10 kat artırdık.", img: "/assets/brands/cazador/cazador_siyah_pose.webp", link: "/musteri-hikayeleri/referanslar", time: "5 dk" },
    { id: "c2", cat: "Müşteri Hikayesi", catId: "musteri", title: "Görsel Üretim Maliyetlerinde %90 Tasarruf",      desc: "İçecek fotoğrafçılığını stüdyolardan AI altyapılarına taşıyarak sınırsız yaratıcılık kazandık.",  img: "/assets/brands/mina_drinks/mina2.webp",             link: "/musteri-hikayeleri/mina-drinks",  time: "4 dk" },
    { id: "c3", cat: "Moda & Tekstil",   catId: "moda",    title: "Sanal Manken Teknolojisi ile E-Ticarette Hız",   desc: "Hayalet manken görsellerini saniyeler içinde uluslararası modellere dönüştürerek süreci %85 hızlandırdık.", img: "/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp", link: "/musteri-hikayeleri/venus", time: "6 dk" },
    { id: "c4", cat: "Outdoor & Ekipman", catId: "e-ticaret", title: "Saha Prodüksiyonu Olmadan Profesyonel Doğa Çekimleri", desc: "Ağır ekipman taşımadan AI ortam üretimiyle kusursuz doğa vitrinleri inşa ettik.", img: "/assets/brands/camp_and_map/1_2k_4_5_undefined__1_.webp", link: "/musteri-hikayeleri/campandmap", time: "5 dk" },
    { id: "c5", cat: "AI Prodüksiyon",   catId: "ai-produksiyon", title: "AI Görsel Prodüksiyona Başlamadan Önce Bilmeniz Gerekenler", desc: "Yapay zeka destekli görsel üretim sürecine geçmeden önce dikkat etmeniz gereken 7 kritik nokta.", img: "/assets/brands/cazador/cazador1.webp", link: "/musteri-hikayeleri/referanslar", time: "8 dk" },
    { id: "c6", cat: "Sosyal Medya",     catId: "sosyal-medya", title: "Sosyal Medya İçerikleri için AI Görsel Üretimi", desc: "Günlük içerik ihtiyacınızı karşılamak için AI destekli görsel akışını nasıl kurarsınız?", img: "/assets/brands/cazador/instagram_cazador.webp", link: "/musteri-hikayeleri/referanslar", time: "6 dk" },
    { id: "c7", cat: "E-Ticaret",        catId: "e-ticaret", title: "E-Ticaret Ürün Fotoğraflarını AI ile Optimize Etmek", desc: "Dönüşüm oranlarını artıran AI destekli ürün görseli stratejileri ve pratik ipuçları.", img: "/assets/brands/venus/venus1.webp", link: "/musteri-hikayeleri/venus", time: "7 dk" },
    { id: "c8", cat: "Moda & Tekstil",   catId: "moda", title: "2025'te Moda Fotoğrafçılığında AI Trendleri", desc: "Gelecek sezon moda markalarının AI ile üretkenliğini nasıl katlayacağını anlatan analiz.", img: "/assets/brands/venus/venus2.webp", link: "/musteri-hikayeleri/venus", time: "9 dk" },
    { id: "c9", cat: "Outdoor & Ekipman", catId: "e-ticaret", title: "Outdoor Markalar için AI Ürün Fotoğrafçılığı", desc: "Dağ, orman ve kamp ortamlarını stüdyodan oluşturan AI sistemleri nasıl çalışır?", img: "/assets/brands/camp_and_map/camp1.webp", link: "/musteri-hikayeleri/campandmap", time: "5 dk" },
]

const PER_PAGE = 6

/* ═════════════════════════════════════════════════════════════ */
export default function Blog() {
    const [activeCat, setActiveCat] = useState("tumu")
    const [page, setPage]           = useState(1)

    const filtered   = activeCat === "tumu" ? POSTS : POSTS.filter(p => p.catId === activeCat)
    const totalPages = Math.ceil(filtered.length / PER_PAGE)
    const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

    const changeCat = (id: string) => { setActiveCat(id); setPage(1) }

    return (
        <div className="min-h-screen font-sans overflow-x-hidden" style={{ background: C.bg }}>
            <Header />

            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="px-6 lg:px-12 xl:px-20 pt-28 pb-14 max-w-screen-xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: C.textLight }}>
                        Pikselai Blog
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-6" style={{ color: C.text }}>
                        Yaratıcı{" "}
                        <em className="not-italic" style={{ color: C.textMuted, fontStyle: "italic" }}>
                            Performans
                        </em>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl leading-relaxed" style={{ color: C.textMuted }}>
                        AI destekli görsel prodüksiyonda müşteri başarı hikayeleri, rehberler ve sektör analizleri.
                    </p>
                </motion.div>
            </section>

            {/* ── 2'Lİ BÜYÜK ÖNE ÇIKAN KARTLAR ──────────────── */}
            <section className="px-6 lg:px-12 xl:px-20 pb-16 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {FEATURED.map((f, i) => (
                        <motion.div
                            key={f.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl"
                            style={{ minHeight: 460 }}
                        >
                            {/* Görsel */}
                            <img
                                src={f.img} alt={f.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.pine} 0%, rgba(10,33,31,0.5) 50%, transparent 100%)` }} />

                            {/* İçerik */}
                            <div className="relative flex flex-col justify-between h-full p-8 md:p-10" style={{ minHeight: 460 }}>
                                {/* Üst: kategori badge */}
                                <div>
                                    <span
                                        className="text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                                        style={{ background: "rgba(216,255,133,0.15)", color: C.spark, border: "1px solid rgba(216,255,133,0.35)" }}
                                    >
                                        {f.cat}
                                    </span>
                                </div>

                                {/* Alt */}
                                <div className="space-y-5 mt-auto">
                                    {/* İstatistikler */}
                                    <div className="flex gap-7">
                                        {f.stats.map(s => (
                                            <div key={s.l}>
                                                <div className="text-3xl font-bold" style={{ color: C.spark }}>{s.v}</div>
                                                <div className="text-xs mt-0.5" style={{ color: "rgba(216,255,133,0.65)" }}>{s.l}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">{f.title}</h2>
                                    <p className="text-base leading-relaxed" style={{ color: "rgba(247,249,242,0.65)" }}>{f.desc}</p>
                                    <Link
                                        to={f.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200"
                                        style={{ color: C.spark }}
                                    >
                                        Hikayeyi Oku <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── KOYU YEŞİL FEATURED SECTION (AI bölümü) ────── */}
            <section style={{ background: C.pine }} className="py-16 px-6 lg:px-12 xl:px-20">
                <div className="max-w-screen-xl mx-auto">
                    {/* Başlık + kategori butonları */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(216,255,133,0.6)" }}>
                                Öne Çıkanlar
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">AI Destekli Yaratıcılık</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {CATS.map(c => (
                                <button
                                    key={c.id}
                                    onClick={() => changeCat(c.id)}
                                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                                    style={activeCat === c.id
                                        ? { background: C.spark, color: C.pine }
                                        : { background: "rgba(247,249,242,0.1)", color: "rgba(247,249,242,0.7)" }
                                    }
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 2 büyük görsel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {POSTS.slice(0, 2).map(p => (
                            <Link key={p.id} to={p.link} className="group block rounded-xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,33,31,0.9) 0%, transparent 60%)" }} />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="text-[11px] font-bold tracking-widest uppercase mb-2 block" style={{ color: C.spark }}>{p.cat}</span>
                                    <h3 className="text-white font-bold text-xl leading-snug">{p.title}</h3>
                                    <p className="text-sm mt-2" style={{ color: "rgba(247,249,242,0.6)" }}>{p.time} okuma</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* 3 küçük görsel */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {POSTS.slice(2, 5).map(p => (
                            <Link key={p.id} to={p.link} className="group block rounded-xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,33,31,0.9) 0%, transparent 60%)" }} />
                                <div className="absolute bottom-0 left-0 p-5">
                                    <span className="text-[10px] font-bold tracking-widest uppercase mb-1.5 block" style={{ color: C.spark }}>{p.cat}</span>
                                    <h3 className="text-white font-bold text-base leading-snug line-clamp-2">{p.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FİLTRELİ YAZI GRİDİ ─────────────────────────── */}
            <section className="px-6 lg:px-12 xl:px-20 py-20 max-w-screen-xl mx-auto">
                {/* Başlık */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.text }}>
                            {activeCat === "tumu" ? "Tüm İçerikler" : CATS.find(c => c.id === activeCat)?.label}
                        </h2>
                        <p className="text-sm mt-1" style={{ color: C.textLight }}>{filtered.length} içerik</p>
                    </div>
                </div>

                {/* Kategori tab bar */}
                <div className="flex flex-wrap gap-2 border-b mb-10 pb-4" style={{ borderColor: C.border }}>
                    {CATS.map(c => (
                        <button
                            key={c.id}
                            onClick={() => changeCat(c.id)}
                            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                            style={activeCat === c.id
                                ? { background: C.pine, color: C.sparkMid }
                                : { color: C.textMuted, background: "transparent" }
                            }
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* 3 Kolonlu Grid */}
                {paginated.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {paginated.map((p, i) => (
                            <motion.article
                                key={p.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: i * 0.05 }}
                            >
                                {/* Görsel */}
                                <Link to={p.link} className="group block rounded-xl overflow-hidden mb-5" style={{ aspectRatio: "16/9", background: C.pine2 }}>
                                    <img
                                        src={p.img} alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>

                                {/* Meta */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: C.textMuted }}>{p.cat}</span>
                                    <span style={{ color: C.border }}>·</span>
                                    <span className="text-xs font-medium" style={{ color: C.textLight }}>{p.time} okuma</span>
                                </div>

                                {/* Başlık */}
                                <Link to={p.link}>
                                    <h3
                                        className="text-xl md:text-2xl font-bold leading-snug mb-3 transition-colors duration-200"
                                        style={{ color: C.text }}
                                        onMouseEnter={e => (e.currentTarget.style.color = C.textMuted)}
                                        onMouseLeave={e => (e.currentTarget.style.color = C.text)}
                                    >
                                        {p.title}
                                    </h3>
                                </Link>

                                {/* Açıklama */}
                                <p className="text-base leading-relaxed line-clamp-2" style={{ color: C.textLight }}>{p.desc}</p>
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
            <section style={{ background: C.pine }} className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm font-bold tracking-[0.18em] uppercase mb-6" style={{ color: "rgba(216,255,133,0.6)" }}>
                        Yaratıcı Ekibinizin Yaratıcı Ekibi™
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                        Markanızın görsel geleceğini{" "}
                        <em className="not-italic" style={{ color: C.spark, fontStyle: "italic" }}>birlikte inşa edelim.</em>
                    </h2>
                    <p className="text-xl mb-10" style={{ color: "rgba(247,249,242,0.6)" }}>
                        Ücretsiz danışmanlık görüşmesi için bugün bize ulaşın.
                    </p>
                    <Link
                        to="/iletisim"
                        className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90"
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
