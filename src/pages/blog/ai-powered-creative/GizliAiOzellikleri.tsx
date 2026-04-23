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

/* ─── Sol kenar içindekiler tablosu ─── */
function TableOfContents({ active }: { active: string }) {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <aside className="sticky top-28 hidden xl:block w-60 shrink-0 self-start">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#0b2117]/40 mb-4">İçindekiler</p>
            <nav className="flex flex-col gap-1">
                {SECTIONS.map(s => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className={[
                            'text-left text-sm leading-snug py-1.5 px-3 rounded transition-colors duration-200',
                            active === s.id
                                ? 'font-semibold text-[#0b2117] bg-[#D8FF85]/40'
                                : 'text-[#0b2117]/50 hover:text-[#0b2117] hover:bg-[#0b2117]/5',
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
        <h2 id={id} className="text-2xl md:text-3xl font-bold text-[#0b2117] mt-14 mb-5 scroll-mt-32 leading-tight">
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

            {/* ─── Kapak (Hero) ─── */}
            <section className="bg-[#F4EFE6] border-b border-[#e0dcd3] pt-28 pb-0">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    {/* Geri bağlantı */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-1.5 text-[#0b2117]/50 hover:text-[#86AA00] text-sm mb-8 transition-colors"
                    >
                        <ArrowLeft size={14} /> Blog'a Dön
                    </Link>

                    {/* Kategori + okuma süresi */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#0b2117]/60">
                            AI Destekli Yaratıcılık
                        </span>
                        <span className="text-[#0b2117]/30">•</span>
                        <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#0b2117]/60">
                            <Clock size={12} /> 8 dk okuma
                        </span>
                    </div>

                    {/* Başlık */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2117] leading-tight tracking-tight mb-6 max-w-3xl">
                        Favori Pazarlama &amp; Tasarım Araçlarınızdaki{' '}
                        <span className="italic font-normal text-[#3a5245]">Gizli Yapay Zeka Özellikleri</span>
                    </h1>

                    {/* Özet */}
                    <p className="text-[#3a5245] text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                        Figma, Photoshop, Canva ve Google Slides'ı neredeyse her gün kullanıyorsunuz; ama bu araçların iş akışını kısaltacak, zaman kazandıracak ve yaratıcılığı dönüştürecek yapay zeka özelliklerini muhtemelen hiç fark etmediniz.
                    </p>
                </div>

                {/* Kahraman görsel */}
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <div className="w-full overflow-hidden rounded-t-3xl bg-[#0b2117] aspect-[16/7]">
                        <img
                            src="https://cdn.sanity.io/images/k0dlbavy/production/79af68beb2c85a929135d7607b7caae6667252ac-1584x892.png?w=1584&q=95&auto=format"
                            alt="Gizli AI Özellikleri Kapak"
                            className="w-full h-full object-cover opacity-90"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            {/* ─── İçerik gövdesi ─── */}
            <section className="bg-[#FDFBF7] py-16">
                <div className="max-w-5xl mx-auto px-6 md:px-12 flex gap-16 items-start">

                    {/* Sol: Sabit İçindekiler */}
                    <TableOfContents active={active} />

                    {/* Sağ: Makale akışı */}
                    <article className="flex-1 min-w-0 text-[#3a5245] text-base md:text-lg leading-relaxed font-light">

                        {/* Giriş */}
                        <div id="giris" className="scroll-mt-32">
                            <p className="mb-5">
                                Sizinle küçük bir iddia yapacağız. Figma, Photoshop, Canva ve Google Slides gibi araçları neredeyse her gün kullanıyorsunuz ve yine de bu araçların iş akışını hızlandırabilecek, zaman kazandırabilecek ve yaratıcı süreçleri dönüştürebilecek pek çok yapay zeka özelliğini hiç kullanmadınız.
                            </p>
                            <p className="mb-5">
                                Bu durum anlaşılır bir şey. Araçlar sürekli güncelleniyor, menüler değişiyor ve yapay zeka özellikleri çoğunlukla görünmez bir yere gömülüyor. Bu yüzden ekibimiz bu araçların en iyi gizli özelliklerini derleyerek size sunuyor.
                            </p>
                            <p className="mb-5">
                                Önemli bir not: Bu araçların yapay zekası, yetenekli bir tasarım ekibinin yerini almaz. Pikselai gibi uzmanlar, araçların sunduğu olanakları çok daha stratejik ve verimli bir şekilde kullanır. Ama bireysel olarak ne kadar çok bileceğiniz; o kadar iyi kararlar alırsınız.
                            </p>
                        </div>

                        {/* Figma */}
                        <SectionHeading id="figma">Figma'nın Gizli Yapay Zeka Özellikleri</SectionHeading>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">First Draft</h3>
                        <p className="mb-5">
                            Figma'nın <strong>First Draft</strong> özelliği, kısa bir metin girdisinden düzenlere ve tasarım taslağına dönüştürebilir. Siz yalnızca ne istediğinizi yazın; Figma bir başlangıç noktası oluştursun. Düzeni ve renkleri sonradan istediğiniz gibi şekillendirebilirsiniz.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Make Prototype</h3>
                        <p className="mb-5">
                            Bir bağlantı başlatın, "Prototip Yap" deyin. Figma'nın yapay zekası, katmanları analiz ederek bağlantı hedeflerini ve geçiş animasyonlarını otomatik olarak önerir. Saatlik manuel çalışmanın yerini saniyeler alır.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Rename Layers</h3>
                        <p className="mb-5">
                            "Katman 1, Dikdörtgen 24, Grup 7..." Bu kaotik isimlendirmeye son verin. Figma'nın <strong>Rename Layers</strong> özelliği, katmanları içeriklerine ve işlevlerine göre otomatik olarak adlandırır. Ekip çalışmalarında dosya okunabilirliği bu sayede kökten değişir.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Replace Content</h3>
                        <p className="mb-5">
                            Çok sayıda bileşende içeriği tek tek değiştirmenize gerek kalmıyor. <strong>Replace Content</strong>, AI destekli içerik önerileriyle seçili bileşenlerin tüm metin ve görsel alanlarını toplu halde günceller.
                        </p>

                        {/* Photoshop */}
                        <SectionHeading id="photoshop">Photoshop'un Gizli Yapay Zeka Özellikleri</SectionHeading>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Generative Fill & Expand</h3>
                        <p className="mb-5">
                            Bir görselin sınırlarını genişletmek veya mevcut fotoğrafa uyumlu yeni öğeler eklemek mi istiyorsunuz? <strong>Generative Fill</strong> bunu tek tıkla yapar. Fotoğrafı seçin, doldurulmasını istediğiniz alanı işaretleyin ve Photoshop sahneyi harmanlayarak tamamlar.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Harmonize</h3>
                        <p className="mb-5">
                            Farklı kaynaklardan getirilen görsel öğeleri tek bir fotoğrafa birleştirirken renk tonları ve ışık her zaman uyumsuz görünür. <strong>Harmonize</strong> özelliği, yapay zeka yardımıyla tüm katmanları aynı renk paletine ve ışık koşuluna uyarlar.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Modify with a Prompt</h3>
                        <p className="mb-5">
                            "Arka planı gün batımı renkleriyle değiştir" veya "Görüntüye sinema atmosferi ekle" gibi düz Türkçe komutlarla doğrudan fotoğrafı düzenleyebilirsiniz. Karmaşık katman maskeleri ve efekt zincirlerine gerek kalmadan.
                        </p>

                        {/* Canva */}
                        <SectionHeading id="canva">Canva'nın Gizli Yapay Zeka Özellikleri</SectionHeading>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Magic Grab</h3>
                        <p className="mb-5">
                            Canva'nın <strong>Magic Grab</strong> özelliği, bir fotoğraftaki herhangi bir nesneyi arka plandan ayırır. Ürün fotoğrafçılığında hayalinizdeki arka planları saniyeler içinde değiştirebilirsiniz.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Magic Write</h3>
                        <p className="mb-5">
                            <strong>Magic Write</strong>, tasarımın içinden çıkmadan metin üretmenizi sağlar. Başlık, sosyal medya gönderisi veya reklam metni yazmanız mı gerekiyor? Kısa bir açıklama girin, AI ilk taslağı oluştursun; siz sadece düzenleyin.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Design (AI Düzeni)</h3>
                        <p className="mb-5">
                            "Ürün lansmanı için sosyal medya görseli" gibi bir istem yazın; Canva birden fazla düzen önerisi sunar. Beğendiğinizi seçip özelleştirmeye başlayabilirsiniz. Boş tuval korkusu tamamen ortadan kalkar.
                        </p>

                        {/* Google Slides */}
                        <SectionHeading id="google-slides">Google Slides'ın Gizli Yapay Zeka Özellikleri</SectionHeading>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Ask Gemini</h3>
                        <p className="mb-5">
                            Google Slides içindeki <strong>Ask Gemini</strong> paneli, sunum içeriğinizi analiz edebilir, eksik noktalar önerebilir ve hatta mevcut slaytlarınızdan özet çıkarabilir. Sununuzu bitmeden önce bir kez daha gözden geçirmiş olursunuz.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">Shorten / Rephrase / Bulletize</h3>
                        <p className="mb-5">
                            Slayttaki herhangi bir metin bloğunu seçin; Gemini o metni kısaltabilir, farklı bir tonda yeniden yazabilir veya madde işaretleriyle düzenleyebilir. Uzun cümleleri temizlemek için ayrı bir araç açmanıza gerek kalmaz.
                        </p>

                        <h3 className="text-xl font-semibold text-[#0b2117] mt-8 mb-3">More Formal / More Casual</h3>
                        <p className="mb-5">
                            Sunum tonunuzu hedef kitlenize göre kolayca ayarlayabilirsiniz. Yönetim kurulu sunumu için "Daha resmi" modunu, ekip toplantısı için "Daha samimi" modunu seçin.
                        </p>

                        {/* Pikselai CTA */}
                        <SectionHeading id="pikselai">Pikselai ile Yapay Zekayı Gerçek Güce Dönüştürün</SectionHeading>

                        <p className="mb-5">
                            Tüm bu araçlar son derece değerli. Ancak her aracın AI özelliğini ayrı ayrı öğrenmek, yönetmek ve üretim süreçlerinize entegre etmek başlı başına bir uzmanlık gerektirir.
                        </p>
                        <p className="mb-5">
                            Pikselai, bu araçların tamamını sizin adınıza profesyonelce kullanır. Yapay zeka destekli ürün prodüksiyonundan sosyal medya görsellerine, sanal manken teknolojisinden dijital kataloglara kadar tüm süreçleri tek çatı altında yönetir.
                        </p>
                        <p className="mb-8">
                            Kendi ekibinizi yetiştirmek yerine; biz sizin uzman AI tasarım ekibiniz oluyoruz.
                        </p>

                        {/* CTA Kutusu */}
                        <div className="bg-[#0b2117] rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#D8FF85] mb-3">Pikselai ile Başlayın</p>
                                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
                                    Yapay Zeka Destekli Görsel Prodüksiyon
                                </h3>
                                <p className="text-white/70 text-base font-light leading-relaxed">
                                    E-ticaret görsellerinden sosyal medya içeriklerine, 48 saat içinde profesyonel çıktı.
                                </p>
                            </div>
                            <Link
                                to="/iletisim"
                                className="shrink-0 bg-[#D8FF85] text-[#0b2117] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#c8ef75] transition-colors"
                            >
                                Demo Talep Et
                            </Link>
                        </div>

                    </article>
                </div>
            </section>
        </MainLayout>
    )
}
