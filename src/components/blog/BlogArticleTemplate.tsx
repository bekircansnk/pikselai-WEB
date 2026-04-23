import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'

/* ─── Tipler ─── */
export interface BlogSection {
    id: string
    heading: string
}

interface BlogArticleTemplateProps {
    title: string
    metaDescription: string
    category: string
    categoryId: string
    author?: string
    readTime: string
    publishDate?: string
    heroImage: string
    heroImageAlt: string
    sections: BlogSection[]
    children: React.ReactNode
    ctaTitle?: string
    ctaDescription?: string
}

/* ─── Sol kenar içindekiler tablosu (TOC) ─── */
function TableOfContents({ sections, active }: { sections: BlogSection[]; active: string }) {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 120
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }
    return (
        <aside className="sticky top-32 hidden xl:block w-[320px] shrink-0 self-start bg-[#F4EFE6] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4 border-b border-[#0b2117]/10 pb-4">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#0b2117]/60">İçindekiler</p>
                <span className="text-[#0b2117]/40">—</span>
            </div>
            <nav className="flex flex-col gap-1.5">
                {sections.map(s => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className={[
                            'text-left text-[15px] font-medium leading-snug py-2.5 px-3 rounded-lg transition-all duration-200',
                            active === s.id
                                ? 'text-[#0b2117] bg-[#D8FF85]/60 shadow-sm'
                                : 'text-[#0b2117]/60 hover:text-[#0b2117] hover:bg-[#0b2117]/5',
                        ].join(' ')}
                    >
                        {s.heading}
                    </button>
                ))}
            </nav>
        </aside>
    )
}

/* ─── Aktif bölüm hook'u ─── */
function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0])
    useEffect(() => {
        const observers: IntersectionObserver[] = []
        ids.forEach(id => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id) },
                { rootMargin: '-20% 0px -60% 0px' },
            )
            obs.observe(el)
            observers.push(obs)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [ids])
    return active
}

/* ─── Ana Şablon Bileşeni ─── */
export function BlogArticleTemplate({
    title,
    metaDescription,
    category,
    author = "Pikselai Ekibi",
    readTime,
    heroImage,
    heroImageAlt,
    sections,
    children,
    ctaTitle = "Yapay Zeka Destekli Görsel Prodüksiyon",
    ctaDescription = "E-ticaret görsellerinden sosyal medya içeriklerine, 48 saat içinde profesyonel çıktı."
}: BlogArticleTemplateProps) {
    const active = useActiveSection(sections.map(s => s.id))

    return (
        <MainLayout transparentHeader={false} headerLightText={false}>
            <Helmet>
                <title>{title} | Pikselai</title>
                <meta name="description" content={metaDescription} />
            </Helmet>

            <div className="bg-[#FDFBF7] min-h-screen pt-28 pb-32">
                
                {/* ─── Üst Başlık (Hero) ─── */}
                <section className="px-6 lg:px-12 max-w-[1200px] mx-auto text-center flex flex-col items-center mb-16">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#0b2117]/50 hover:text-[#0b2117] font-semibold text-sm mb-10 transition-colors uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> Blog
                    </Link>

                    <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold text-[#0b2117] leading-[1.05] tracking-[-0.02em] mb-10 max-w-[1000px]">
                        {title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-[#0b2117]/80 font-medium text-base">
                        <span className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#0b2117] text-[#D8FF85] flex items-center justify-center font-bold text-sm shadow-sm">
                                {author.charAt(0)}
                            </div>
                            {author}
                        </span>
                        <span className="text-[#0b2117]/20">|</span>
                        <span>{category}</span>
                        <span className="text-[#0b2117]/20">|</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#0b2117]/50" /> {readTime}</span>
                    </div>
                </section>

                {/* ─── İçerik Gövdesi ─── */}
                <section className="px-6 lg:px-12 max-w-[1300px] mx-auto flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">
                    <TableOfContents sections={sections} active={active} />

                    <article className="flex-1 min-w-0 w-full max-w-4xl mx-auto xl:mx-0">
                        {/* Kahraman görsel */}
                        <div className="w-full overflow-hidden rounded-[2rem] bg-[#0b2117] aspect-[16/8] mb-16 shadow-lg">
                            <img
                                src={heroImage}
                                alt={heroImageAlt}
                                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                                loading="eager"
                            />
                        </div>

                        {/* Metin İçeriği */}
                        <div className="text-[#1a2e24] text-[19px] md:text-[22px] leading-[1.8] font-light space-y-8">
                            {children}

                            {/* CTA Kutusu (Alt) */}
                            <div className="bg-[#0b2117] rounded-[2rem] p-10 md:p-14 text-white flex flex-col md:flex-row items-center gap-10 mt-12 shadow-2xl">
                                <div className="flex-1">
                                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#D8FF85] mb-4">Pikselai ile Başlayın</p>
                                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                        {ctaTitle}
                                    </h3>
                                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                                        {ctaDescription}
                                    </p>
                                </div>
                                <Link
                                    to="/iletisim"
                                    className="shrink-0 bg-[#D8FF85] text-[#0b2117] font-bold text-[17px] px-10 py-5 rounded-full hover:bg-[#c8ef75] transition-all transform hover:scale-105"
                                >
                                    Demo Talep Et
                                </Link>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </MainLayout>
    )
}

/* ─── Makale başlık bileşeni ─── */
export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id} className="text-3xl md:text-[36px] font-bold text-[#0b2117] mt-20 mb-6 leading-tight tracking-tight scroll-mt-32">
            {children}
        </h2>
    )
}
