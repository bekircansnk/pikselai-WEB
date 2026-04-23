import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Eye, HandHeart, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEOHead } from '../components/seo/SEOHead';

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans bg-[#F4EFE6] text-[#0b2117] min-h-screen selection:bg-[#caf265] selection:text-[#0b2117]">
            <SEOHead
                title="Hakkımızda — Yapay Zeka Destekli Dijital Ajans"
                description="Pikselai, yapay zeka destekli kreatif üretim, e-ticaret yönetimi ve dijital çözümler sunan profesyonel bir dijital ajanstır. Markanızı gözle görülür yapıyoruz."
                canonical="/hakkimizda"
            />
            {/* Header */}
            <div className="bg-[#0b2117]">
                <Header />
            </div>

            <main>
                {/* ═══════════════ HERO ═══════════════ */}
                <section className="pt-32 pb-24 md:pt-44 md:pb-36 bg-[#0b2117] px-6 md:px-16 lg:px-24 relative overflow-hidden">
                    {/* Arka plan parıltıları */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#caf265]/8 blur-[180px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#caf265]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="max-w-4xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#caf265] block mb-6">Hakkımızda</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] tracking-tight text-[#F4EFE6] mb-8">
                                Markanızı <br className="hidden md:block" />
                                <span className="italic font-light text-[#caf265]">gözle görülür</span> yapıyoruz.
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-[#F4EFE6]/75 max-w-2xl leading-relaxed">
                                Stüdyo yok. Fiziksel set yok. Haftalarca bekleme yok.
                                Sadece yapay zeka, yaratıcılık ve ürünlerinizi parlatma tutkusu var.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══════════════ MANİFESTO ═══════════════ */}
                <section className="py-28 bg-[#F4EFE6] border-b border-[#e0dcd3] px-6 md:px-16 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            {/* Sol: Başlık */}
                            <div className="lg:col-span-4 lg:sticky lg:top-32">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b2117]/50 block mb-4">Hikayemiz</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#0b2117]">
                                    Her şey bir <span className="italic font-light text-[#86AA00]">soruyla</span> başladı.
                                </h2>
                            </div>

                            {/* Sağ: Hikaye metni */}
                            <div className="lg:col-span-8 space-y-8 text-lg md:text-xl font-light text-[#3a5245] leading-relaxed">
                                <p className="text-2xl md:text-3xl font-normal text-[#0b2117] leading-snug">
                                    "Bir e-ticaret markasının profesyonel görsellere ulaşması neden bu kadar zor, 
                                    bu kadar pahalı ve bu kadar yavaş?"
                                </p>

                                <p>
                                    Yıllardır dijital dünyada çalışıyoruz. Ve şunu net gördük: küçük-orta 
                                    ölçekli markalar aynı tuzağa düşüyor. Ürünü harika, hikayesi güçlü 
                                    ama görselleri o hikayeyi anlatamıyor. Çünkü profesyonel bir çekim 
                                    için stüdyo kirala, manken bul, fotoğrafçı ayarla, post-prodüksiyon yaptır… 
                                    Haftalar geçiyor, bütçe eriyor.
                                </p>

                                <p>
                                    Biz dedik ki: <strong>"Bu döngüyü kıralım."</strong>
                                </p>

                                <p>
                                    PikselAI olarak yapay zekayı bir araç değil, bir <em>yaratıcı ortak</em> olarak 
                                    kullanıyoruz. Ürününüzün tek bir fotoğrafını alıyoruz — bazen kargoya 
                                    koymadan önceki bir kareyi bile — ve onu profesyonel stüdyo kalitesinde 
                                    görselere, sanal manken üzerinde moda çekimlerine, sosyal medya içeriklerine 
                                    dönüştürüyoruz. 48 saat içinde. Bütçenizin bir kısmıyla.
                                </p>

                                <p>
                                    Ama sadece "güzel fotoğraf üretiyoruz" demek eksik kalır. Biz markanızın 
                                    dijital varlığını baştan sona inşa ediyoruz: e-ticaret altyapısından sosyal 
                                    medya yönetimine, marka kimliğinden performans pazarlamasına kadar.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════ YAKLAŞIMIMIZ — 3 SÜTUN ═══════════════ */}
                <section className="py-28 bg-[#0b2117] px-6 md:px-16 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#caf265]/70 block mb-4">Yaklaşımımız</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6]">
                                Neden <span className="italic font-light text-[#caf265]">farklıyız?</span>
                            </h2>
                            <p className="text-lg text-[#a8b8af] max-w-2xl mx-auto mt-6 font-light leading-relaxed">
                                Geleneksel ajansların yaptığını yapay zekayla birleştiriyoruz — ama asıl farkımız 
                                teknolojide değil, bakış açımızda.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            <ApproachCard
                                icon={<Eye className="w-7 h-7" />}
                                title="Sonucu Teslim Ediyoruz"
                                description="Size 'nasıl yapılacağını' anlatmıyoruz. Yapılmış, kullanıma hazır sonucu sunuyoruz. Ürün görseli mi? Hazır. Sosyal medya takvimi mi? Dolu. E-ticaret sitesi mi? Açık ve çalışıyor."
                            />
                            <ApproachCard
                                icon={<Lightbulb className="w-7 h-7" />}
                                title="Teknolojiyi İnsanlaştırıyoruz"
                                description="Yapay zeka tek başına yeterli değil. Her görseli, her stratejiyi insan gözüyle kontrol ediyoruz. AI üretir, biz kusursuzlaştırırız. Sonuç: 'Gerçek çekim mi bu?' dedirten görseller."
                            />
                            <ApproachCard
                                icon={<TrendingUp className="w-7 h-7" />}
                                title="Birlikte Büyüyoruz"
                                description="Tek seferlik iş yapmıyoruz. Markanız büyüdükçe hizmetlerimiz de ölçekleniyor. Bugün 10 ürün görseli, yarın 10.000 — aynı kalite, aynı hız, aynı maliyet avantajıyla."
                            />
                        </div>
                    </div>
                </section>

                {/* ═══════════════ RAKAMLARLA BİZ ═══════════════ */}
                <section className="py-24 bg-[#F4EFE6] border-b border-[#e0dcd3] px-6 md:px-16 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#0b2117]">
                                Rakamlarla <span className="italic font-light text-[#86AA00]">PikselAI</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatBlock value="%80" label="Maliyet Tasarrufu" subtitle="Geleneksel çekime kıyasla" />
                            <StatBlock value="48s" label="Ortalama Teslim" subtitle="İki gün içinde, haftalar değil" />
                            <StatBlock value="∞" label="Sınırsız Versiyon" subtitle="Tek üründen sınırsız sahne" />
                            <StatBlock value="4+" label="Hizmet Alanı" subtitle="AI, E-Ticaret, Sosyal, Tasarım" />
                        </div>
                    </div>
                </section>

                {/* ═══════════════ DEĞERLERİMİZ ═══════════════ */}
                <section className="py-28 bg-[#F4EFE6] px-6 md:px-16 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            {/* Sol: Başlık */}
                            <div className="lg:col-span-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b2117]/50 block mb-4">Değerlerimiz</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                    Neye <span className="italic font-light text-[#86AA00]">inanıyoruz?</span>
                                </h2>
                                <p className="text-lg font-light text-[#3a5245] leading-relaxed">
                                    Güzel görseller üretmek kolay. Asıl zor olan, her seferinde aynı özenle, 
                                    aynı tutarlılıkla ve müşterimizin hikayesine sadık kalarak bunu yapmak.
                                </p>
                            </div>

                            {/* Sağ: Değer kartları */}
                            <div className="lg:col-span-8 space-y-6">
                                <ValueCard
                                    icon={<Zap className="w-6 h-6" />}
                                    title="Hız, ama acelecilik değil"
                                    description="48 saat içinde teslim ediyoruz ama 'çabuk olsun da nasıl olursa olsun' demiyoruz. Her pikseli kontrol ediyor, kaliteyi asla hıza feda etmiyoruz. Hızlı oluyoruz çünkü süreçlerimiz akıllı."
                                />
                                <ValueCard
                                    icon={<HandHeart className="w-6 h-6" />}
                                    title="Dürüst iletişim"
                                    description="Yapamayacağımız şeyi söz vermiyoruz. İhtiyacınız olmayan hizmeti satmıyoruz. 'Bu sizin için uygun değil' diyebilecek kadar rahatız — çünkü amacımız tek seferlik satış değil, uzun vadeli ortaklık."
                                />
                                <ValueCard
                                    icon={<Users className="w-6 h-6" />}
                                    title="Erişilebilir profesyonellik"
                                    description="Kurumsal markaların kullandığı teknoloji ve kaliteyi, butik markalara ve girişimcilere de sunuyoruz. Premium görsel üretim artık sadece büyük bütçelerin ayrıcalığı değil."
                                />
                                <ValueCard
                                    icon={<Lightbulb className="w-6 h-6" />}
                                    title="Sürekli öğrenme"
                                    description="AI teknolojisi her gün değişiyor ve biz de onunla birlikte gelişiyoruz. Dünün yöntemlerine takılıp kalmıyoruz. Her projede bir öncekinden daha iyisini hedefliyoruz."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════ KİMLER İÇİN ═══════════════ */}
                <section className="py-28 bg-[#0b2117] px-6 md:px-16 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#caf265]/70 block mb-4">Hedef Kitlemiz</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6">
                                Kimlerle <span className="italic font-light text-[#caf265]">çalışıyoruz?</span>
                            </h2>
                            <p className="text-lg text-[#a8b8af] max-w-2xl mx-auto font-light leading-relaxed">
                                Ortak noktaları aynı: harika ürünleri var ama görsellerle anlatamıyorlar.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AudienceCard
                                emoji="👗"
                                title="Moda & Tekstil Markaları"
                                description="Koleksiyonunuzu stüdyo kurmadan, manken tutmadan profesyonel moda çekimlerine dönüştürüyoruz."
                            />
                            <AudienceCard
                                emoji="🛒"
                                title="E-Ticaret Girişimcileri"
                                description="Mağazanızı kuruyor, görselleri üretiyor ve satışa hazır hale getiriyoruz — uçtan uca."
                            />
                            <AudienceCard
                                emoji="🏢"
                                title="KOBİ & Butik Markalar"
                                description="Kurumsal kalitede dijital varlık oluşturuyoruz, KOBİ bütçesiyle."
                            />
                            <AudienceCard
                                emoji="🚀"
                                title="Startup & Yeni Markalar"
                                description="Henüz piyasaya çıkmamış ürünler için bile görsel ve içerik üretiyoruz. Lansmandan önce hazır olun."
                            />
                            <AudienceCard
                                emoji="🍽️"
                                title="Yiyecek & İçecek Markaları"
                                description="Ürünlerinizi iştah açıcı sahnelerde, farklı konseptlerde sınırsız versiyonla sunuyoruz."
                            />
                            <AudienceCard
                                emoji="💄"
                                title="Kozmetik & Güzellik"
                                description="Ürünlerinizi premium kampanya görsellerine dönüştürüyoruz — lüks marka estetiğiyle."
                            />
                        </div>
                    </div>
                </section>

                {/* ═══════════════ CTA ═══════════════ */}
                <section className="py-24 bg-[#F4EFE6] px-6 md:px-16 lg:px-24 mb-1">
                    <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden">
                        {/* Parıltı efektleri */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caf265]/10 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#caf265]/5 blur-[80px] rounded-full" />

                        <div className="relative z-10 max-w-2xl text-center mx-auto">
                            <h2 className="text-4xl lg:text-6xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6">
                                Ürünleriniz bu kadar iyiyse, <span className="italic font-light text-[#caf265]">görselleri de öyle olmalı.</span>
                            </h2>
                            <p className="text-[#a8b8af] mb-10 text-lg font-light leading-relaxed">
                                Ücretsiz demo ile AI görsel üretiminin farkını kendi ürününüzde görün. 
                                Hiçbir taahhüt yok — sadece sonucu beğenin.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => navigate('/iletisim')}
                                    className="bg-[#caf265] text-[#0b2117] hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center justify-center gap-3 group"
                                >
                                    Ücretsiz Demo Talep Et
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => navigate('/islerimiz')}
                                    className="border border-white/20 text-[#F4EFE6] hover:border-[#caf265]/50 hover:text-[#caf265] transition-all duration-300 rounded-full px-10 py-5 text-lg font-medium"
                                >
                                    İşlerimizi İncele
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="bg-[#0b2117]">
                <Footer />
            </div>
        </div>
    );
};

// ─── Alt Bileşenler ───

// Yaklaşım kartı (koyu arka plan üzerinde)
function ApproachCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#caf265]/25 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-[#caf265]/10 text-[#caf265] flex items-center justify-center mb-6 group-hover:bg-[#caf265]/20 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold font-display text-[#F4EFE6] mb-4">{title}</h3>
            <p className="text-[#a8b8af] text-[17px] font-light leading-relaxed">{description}</p>
        </div>
    );
}

// İstatistik bloğu
function StatBlock({ value, label, subtitle }: { value: string; label: string; subtitle: string }) {
    return (
        <div className="text-center p-8 lg:p-10 rounded-3xl bg-white border border-[#e0dcd3] hover:border-[#0b2117]/20 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="text-5xl lg:text-6xl font-bold font-display text-[#0b2117] mb-2 tracking-tight">{value}</div>
            <div className="text-lg font-semibold text-[#0b2117] mb-1">{label}</div>
            <div className="text-sm text-[#3a5245]/70 font-light">{subtitle}</div>
        </div>
    );
}

// Değer kartı (açık arka plan, yatay düzen)
function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-[#e0dcd3] hover:border-[#0b2117]/20 transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#0b2117] text-[#caf265] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold font-display text-[#0b2117] mb-2">{title}</h3>
                <p className="text-[#3a5245] text-[17px] font-light leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

// Hedef kitle kartı (koyu arka plan)
function AudienceCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
    return (
        <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#caf265]/25 transition-all duration-300 group">
            <div className="text-4xl mb-5">{emoji}</div>
            <h3 className="text-lg font-bold text-[#F4EFE6] mb-3 group-hover:text-[#caf265] transition-colors">{title}</h3>
            <p className="text-[#a8b8af] text-[15px] font-light leading-relaxed">{description}</p>
        </div>
    );
}

export default About;
