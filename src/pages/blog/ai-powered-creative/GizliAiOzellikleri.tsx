import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'

/* ─── Bölüm verisi ─── */
interface Section {
    id: string
    heading: string
}

const SECTIONS: Section[] = [
    { id: "giris",         heading: "Sizinle bir iddia yapacağız" },
    { id: "figma",         heading: "Figma'nın Gizli Yapay Zeka Özellikleri" },
    { id: "photoshop",     heading: "Photoshop'un Gizli Yapay Zeka Özellikleri" },
    { id: "canva",         heading: "Canva'nın Gizli Yapay Zeka Özellikleri" },
    { id: "google-slides", heading: "Google Slides'ın Gizli Yapay Zeka Özellikleri" },
    { id: "pikselai",      heading: "Pikselai ile Yapay Zekayı Gerçek Güce Dönüştürün" },
]

/* ─── Sol kenar içindekiler tablosu (TOC) ─── */
function TableOfContents({ active }: { active: string }) {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        // Header yüksekliğini (yaklaşık 100px) hesaba katarak scroll yapıyoruz
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
                {SECTIONS.map(s => (
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

/* ─── Makale başlık bileşeni ─── */
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id} className="text-3xl md:text-[36px] font-bold text-[#0b2117] mt-20 mb-6 leading-tight tracking-tight">
            {children}
        </h2>
    )
}

/* ─── Ana bileşen ─── */
export default function GizliAiOzellikleri() {
    const active = useActiveSection(SECTIONS.map(s => s.id))

    return (
        <MainLayout transparentHeader={false} headerLightText={false}>
            <Helmet>
                <title>Favori Pazarlama ve Tasarım Araçlarınızdaki Gizli Yapay Zeka Özellikleri | Pikselai</title>
                <meta
                    name="description"
                    content="Figma, Photoshop, Canva ve Google Slides'taki gizli yapay zeka özelliklerini keşfederek iş akışınızı hızlandırın ve üretkenliğinizi artırın."
                />
            </Helmet>

            <div className="bg-[#FDFBF7] min-h-screen pt-28 pb-32">
                
                {/* ─── Üst Başlık (Hero Text) ─── */}
                <section className="px-6 lg:px-12 max-w-[1200px] mx-auto text-center flex flex-col items-center mb-16">
                    {/* Geri bağlantı */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#0b2117]/50 hover:text-[#0b2117] font-semibold text-sm mb-10 transition-colors uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> Blog
                    </Link>

                    {/* Başlık */}
                    <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold text-[#0b2117] leading-[1.05] tracking-[-0.02em] mb-10 max-w-[1000px]">
                        Favori Pazarlama &amp; Tasarım Araçlarınızdaki <span className="italic font-normal text-[#3a5245]">Gizli Yapay Zeka Özellikleri</span>
                    </h1>

                    {/* Yazar / Tarih / Kategori */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-[#0b2117]/80 font-medium text-base">
                        <span className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#0b2117] text-[#D8FF85] flex items-center justify-center font-bold text-sm shadow-sm">
                                P
                            </div>
                            Pikselai Ekibi
                        </span>
                        <span className="text-[#0b2117]/20">|</span>
                        <span>AI Destekli Yaratıcılık</span>
                        <span className="text-[#0b2117]/20">|</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#0b2117]/50" /> 8 dk okuma</span>
                    </div>
                </section>

                {/* ─── İçerik Gövdesi (Grid: Sol TOC - Sağ Metin) ─── */}
                <section className="px-6 lg:px-12 max-w-[1300px] mx-auto flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">
                    
                    {/* Sol: Sabit İçindekiler */}
                    <TableOfContents active={active} />

                    {/* Sağ: Makale akışı */}
                    <article className="flex-1 min-w-0 w-full max-w-4xl mx-auto xl:mx-0">
                        
                        {/* Kahraman görsel - Yazının üstünde */}
                        <div className="w-full overflow-hidden rounded-[2rem] bg-[#0b2117] aspect-[16/8] mb-16 shadow-lg">
                            <img
                                src="https://cdn.sanity.io/images/k0dlbavy/production/79af68beb2c85a929135d7607b7caae6667252ac-1584x892.png?w=1584&q=95&auto=format"
                                alt="Gizli AI Özellikleri Kapak"
                                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                                loading="eager"
                            />
                        </div>

                        {/* Metin İçeriği */}
                        <div className="text-[#1a2e24] text-[19px] md:text-[22px] leading-[1.8] font-light space-y-8">

                            {/* Özet (TL;DR) */}
                            <div className="text-[22px] md:text-[26px] font-normal leading-[1.6] text-[#0b2117] mb-12">
                                Tasarım araçlarındaki en iyi yapay zeka özelliklerinin bazıları gözünüzün önünde saklanıyor. Onları kullanmaya başlayın; iş akışınız daha hızlı, daha temiz ve çok daha az manuel hale gelsin.
                            </div>

                            {/* Giriş */}
                            <div id="giris" className="scroll-mt-32 space-y-8">
                                <p>
                                    Sizinle küçük bir iddia yapacağız. Figma, Photoshop, Canva ve Google Slides gibi araçları neredeyse her gün kullanıyorsunuz ve yine de bu araçların iş akışını hızlandırabilecek, zaman kazandırabilecek ve yaratıcı süreçleri dönüştürebilecek pek çok yapay zeka özelliğini hiç kullanmadınız.
                                </p>
                                <p>
                                    Bu durum anlaşılır bir şey. Araçlar sürekli güncelleniyor, menüler değişiyor ve yapay zeka özellikleri çoğunlukla görünmez bir yere gömülüyor. Bu yüzden ekibimiz bu araçların en iyi gizli özelliklerini derleyerek size sunuyor.
                                </p>
                                <p>
                                    Önemli bir not: Bu araçların yapay zekası, yetenekli bir tasarım ekibinin yerini almaz. Pikselai gibi uzmanlar, araçların sunduğu olanakları çok daha stratejik ve verimli bir şekilde kullanır. Ama bireysel olarak ne kadar çok bileceğiniz; o kadar iyi kararlar alırsınız.
                                </p>
                            </div>

                            {/* Figma */}
                            <SectionHeading id="figma">Figma'nın Gizli Yapay Zeka Özellikleri</SectionHeading>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">First Draft</h3>
                            <p>
                                Figma'nın <strong className="font-semibold">First Draft</strong> özelliği, kısa bir metin girdisinden düzenlere ve tasarım taslağına dönüştürebilir. Siz yalnızca ne istediğinizi yazın; Figma bir başlangıç noktası oluştursun. Düzeni ve renkleri sonradan istediğiniz gibi şekillendirebilirsiniz.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Make Prototype</h3>
                            <p>
                                Bir bağlantı başlatın, "Prototip Yap" deyin. Figma'nın yapay zekası, katmanları analiz ederek bağlantı hedeflerini ve geçiş animasyonlarını otomatik olarak önerir. Saatlik manuel çalışmanın yerini saniyeler alır.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Rename Layers</h3>
                            <p>
                                "Katman 1, Dikdörtgen 24, Grup 7..." Bu kaotik isimlendirmeye son verin. Figma'nın <strong className="font-semibold">Rename Layers</strong> özelliği, katmanları içeriklerine ve işlevlerine göre otomatik olarak adlandırır. Ekip çalışmalarında dosya okunabilirliği bu sayede kökten değişir.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Replace Content</h3>
                            <p>
                                Çok sayıda bileşende içeriği tek tek değiştirmenize gerek kalmıyor. <strong className="font-semibold">Replace Content</strong>, AI destekli içerik önerileriyle seçili bileşenlerin tüm metin ve görsel alanlarını toplu halde günceller.
                            </p>

                            {/* Photoshop */}
                            <SectionHeading id="photoshop">Photoshop'un Gizli Yapay Zeka Özellikleri</SectionHeading>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Generative Fill & Expand</h3>
                            <p>
                                Bir görselin sınırlarını genişletmek veya mevcut fotoğrafa uyumlu yeni öğeler eklemek mi istiyorsunuz? <strong className="font-semibold">Generative Fill</strong> bunu tek tıkla yapar. Fotoğrafı seçin, doldurulmasını istediğiniz alanı işaretleyin ve Photoshop sahneyi harmanlayarak tamamlar.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Harmonize</h3>
                            <p>
                                Farklı kaynaklardan getirilen görsel öğeleri tek bir fotoğrafa birleştirirken renk tonları ve ışık her zaman uyumsuz görünür. <strong className="font-semibold">Harmonize</strong> özelliği, yapay zeka yardımıyla tüm katmanları aynı renk paletine ve ışık koşuluna uyarlar.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Modify with a Prompt</h3>
                            <p>
                                "Arka planı gün batımı renkleriyle değiştir" veya "Görüntüye sinema atmosferi ekle" gibi düz Türkçe komutlarla doğrudan fotoğrafı düzenleyebilirsiniz. Karmaşık katman maskeleri ve efekt zincirlerine gerek kalmadan.
                            </p>

                            {/* Canva */}
                            <SectionHeading id="canva">Canva'nın Gizli Yapay Zeka Özellikleri</SectionHeading>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Magic Grab</h3>
                            <p>
                                Canva'nın <strong className="font-semibold">Magic Grab</strong> özelliği, bir fotoğraftaki herhangi bir nesneyi arka plandan ayırır. Ürün fotoğrafçılığında hayalinizdeki arka planları saniyeler içinde değiştirebilirsiniz.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Magic Write</h3>
                            <p>
                                <strong className="font-semibold">Magic Write</strong>, tasarımın içinden çıkmadan metin üretmenizi sağlar. Başlık, sosyal medya gönderisi veya reklam metni yazmanız mı gerekiyor? Kısa bir açıklama girin, AI ilk taslağı oluştursun; siz sadece düzenleyin.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Design (AI Düzeni)</h3>
                            <p>
                                "Ürün lansmanı için sosyal medya görseli" gibi bir istem yazın; Canva birden fazla düzen önerisi sunar. Beğendiğinizi seçip özelleştirmeye başlayabilirsiniz. Boş tuval korkusu tamamen ortadan kalkar.
                            </p>

                            {/* Google Slides */}
                            <SectionHeading id="google-slides">Google Slides'ın Gizli Yapay Zeka Özellikleri</SectionHeading>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Ask Gemini</h3>
                            <p>
                                Google Slides içindeki <strong className="font-semibold">Ask Gemini</strong> paneli, sunum içeriğinizi analiz edebilir, eksik noktalar önerebilir ve hatta mevcut slaytlarınızdan özet çıkarabilir. Sununuzu bitmeden önce bir kez daha gözden geçirmiş olursunuz.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">Shorten / Rephrase / Bulletize</h3>
                            <p>
                                Slayttaki herhangi bir metin bloğunu seçin; Gemini o metni kısaltabilir, farklı bir tonda yeniden yazabilir veya madde işaretleriyle düzenleyebilir. Uzun cümleleri temizlemek için ayrı bir araç açmanıza gerek kalmaz.
                            </p>

                            <h3 className="text-[22px] font-bold text-[#0b2117] mt-10 mb-4">More Formal / More Casual</h3>
                            <p>
                                Sunum tonunuzu hedef kitlenize göre kolayca ayarlayabilirsiniz. Yönetim kurulu sunumu için "Daha resmi" modunu, ekip toplantısı için "Daha samimi" modunu seçin.
                            </p>

                            {/* Pikselai CTA */}
                            <div className="pt-8">
                                <SectionHeading id="pikselai">Pikselai ile Yapay Zekayı Gerçek Güce Dönüştürün</SectionHeading>

                                <p>
                                    Tüm bu araçlar son derece değerli. Ancak her aracın AI özelliğini ayrı ayrı öğrenmek, yönetmek ve üretim süreçlerinize entegre etmek başlı başına bir uzmanlık gerektirir.
                                </p>
                                <p>
                                    Pikselai, bu araçların tamamını sizin adınıza profesyonelce kullanır. Yapay zeka destekli ürün prodüksiyonundan sosyal medya görsellerine, sanal manken teknolojisinden dijital kataloglara kadar tüm süreçleri tek çatı altında yönetir.
                                </p>
                                <p className="font-semibold text-[#0b2117] pb-8">
                                    Kendi ekibinizi yetiştirmek yerine; biz sizin uzman AI tasarım ekibiniz oluyoruz.
                                </p>
                            </div>

                            {/* CTA Kutusu (Alt) */}
                            <div className="bg-[#0b2117] rounded-[2rem] p-10 md:p-14 text-white flex flex-col md:flex-row items-center gap-10 mt-6 shadow-2xl">
                                <div className="flex-1">
                                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#D8FF85] mb-4">Pikselai ile Başlayın</p>
                                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                        Yapay Zeka Destekli<br/>Görsel Prodüksiyon
                                    </h3>
                                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                                        E-ticaret görsellerinden sosyal medya içeriklerine, 48 saat içinde profesyonel çıktı.
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
