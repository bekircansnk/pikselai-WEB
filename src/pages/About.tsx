import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Sparkles, CircleDollarSign, ArrowRight } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Superside Renk Paleti
    const colors = {
        beige: "bg-[#F4EFE6]",
        darkGreen: "bg-[#0b2117]",
        limeBtn: "bg-[#caf265]",
        textDark: "text-[#0b2117]",
        textLight: "text-[#F4EFE6]",
        borderColor: "border-[#e0dcd3]",
        borderColorDark: "border-[#1e3b2b]"
    };

    return (
        <div className={`font-sans ${colors.beige} ${colors.textDark} min-h-screen selection:bg-[#caf265] selection:text-[#0b2117]`}>
            {/* Header */}
            <div className={`${colors.darkGreen}`}>
                <Header />
            </div>

            <main>
                {/* Hero */}
                <section className={`pt-32 pb-20 md:pt-44 md:pb-28 ${colors.darkGreen} px-6 md:px-16 lg:px-24`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#caf265] block mb-6">Hakkımızda</span>
                            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6">
                                Biz <span className="italic font-light text-[#caf265]">fotoğrafçı</span> değiliz. <br />
                                <span className="italic font-light text-[#caf265]">Teknoloji ortağınızız.</span>
                            </h1>
                            <p className="text-lg md:text-xl font-light text-[#F4EFE6]/80 max-w-xl leading-relaxed">
                                Geleneksel ajanslardaki fiziksel stüdyo, manken ve ekip ihtiyacını ortadan kaldırıyoruz.
                                Yapay zeka ile dünyanın en hızlı ve ekonomik görsel üretim hattını işletiyoruz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story */}
                <section className={`py-24 ${colors.beige} border-b ${colors.borderColor} px-6 md:px-16 lg:px-24`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b2117]/60 block mb-4">Hikayemiz</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                    Neden <span className="italic font-light text-[#86AA00]">PikselAI?</span>
                                </h2>
                                <div className="space-y-4 text-lg md:text-xl font-light text-[#3a5245] leading-relaxed">
                                    <p>
                                        E-ticaret sektöründe yıllardır gördüğümüz sorunu çözüyoruz: yüksek maliyetli, yavaş ve ölçeklenemeyen görsel üretim süreçleri.
                                    </p>
                                    <p>
                                        Fiziksel stüdyo kurmak, ışık ayarlamak, manken tutmak — tüm bunlar zaman ve para. Bir ürünün kargosundan veya tek bir amatör kareden "High-End" moda çekimi yapabilecek teknolojiyi geliştirdik.
                                    </p>
                                    <p>
                                        Siteyi kurup bırakmıyoruz. İçini AI ile saniyeler içinde binlerce benzersiz içerik ve görselle dolduruyoruz.
                                        İşin "nasıl yapılacağını" değil, "yapılmış halini" sunuyoruz — hem de çok daha ekonomik.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden aspect-square bg-[#0b2117]/10">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="PikselAI Team" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitive Advantage */}
                <section className={`py-24 ${colors.darkGreen} border-b ${colors.borderColorDark} px-6 md:px-16 lg:px-24`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6">
                                Biz ne <span className="italic font-light text-[#caf265]">farklı yapıyoruz?</span>
                            </h2>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                <CompetitorCard
                                    rival="Star İstanbul & Edil Ajans"
                                    rivalDesc="Geleneksel fotoğrafçılık, katalog ve matbaa/baskı"
                                    advantage="Ürünü kargolamadan veya tek bir amatör kareyle 'High-End' moda çekimi yapabilirsiniz."
                                />
                                <CompetitorCard
                                    rival="Qreate & Alis Dijital"
                                    rivalDesc="Shopify ve E-ticaret altyapısı kurma"
                                    advantage="Siteyi kurmakla kalmayıp, içini AI ile saniyeler içinde binlerce benzersiz içerik ve görselle dolduruyoruz."
                                />
                                <CompetitorCard
                                    rival="Roible & SEO Ajansları"
                                    rivalDesc="SEO ve yerel pazarlama"
                                    advantage="Programatik SEO ile binlerce long-tail kelime için otomatik sayfalar oluşturuyoruz."
                                />
                                <CompetitorCard
                                    rival="Bossy & SmartKid"
                                    rivalDesc="Performans pazarlaması ve marka yaratma"
                                    advantage="Ürünü daha üretilmeden, AI ile reklam görselleri sunarak ön satış yapmanızı sağlıyoruz."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className={`py-24 ${colors.beige} px-6 md:px-16 lg:px-24`}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                <span className="italic font-light text-[#86AA00]">Değerlerimiz</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <ValueBlock title="Hız" description="Haftalar değil, saatler içinde teslim. Müşterilerimiz zamanı geri kazanır." icon={<Zap className="w-10 h-10 text-[#0b2117]" />} />
                            <ValueBlock title="Kalite" description="Fiziksel çekimden ayırt edilemeyen gerçekçilik. Her piksel mükemmellik için optimize." icon={<Sparkles className="w-10 h-10 text-[#0b2117]" />} />
                            <ValueBlock title="Maliyet Avantajı" description="%80'e varan tasarruf. Kurumsal bütçe değil, akıllı bütçe." icon={<CircleDollarSign className="w-10 h-10 text-[#0b2117]" />} />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={`py-24 ${colors.beige} px-6 md:px-16 lg:px-24 mb-1`}>
                    <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Soft Glow Effect */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caf265]/10 blur-[120px] rounded-full"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#caf265]/5 blur-[80px] rounded-full"></div>

                        <div className="relative z-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
                            <h2 className="text-4xl lg:text-6xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-8">
                                "Bu adamlar <span className="italic font-light text-[#caf265]">geleceği getirmiş</span>" deyin
                            </h2>
                            <p className="text-[#a8b8af] mb-10 text-lg">Ücretsiz demo ile farkı görün.</p>
                            
                            <div className="flex justify-center md:justify-start">
                                <button 
                                    onClick={() => navigate('/iletisim')}
                                    className="bg-[#caf265] text-[#0b2117] hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 group"
                                >
                                    Demo Talep Et
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className={`${colors.darkGreen}`}>
                <Footer />
            </div>
        </div>
    );
};

function CompetitorCard({ rival, rivalDesc, advantage }: { rival: string; rivalDesc: string; advantage: string }) {
    return (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#caf265]/30 transition-colors duration-300">
            <div className="mb-4">
                <h4 className="text-lg font-bold text-[#F4EFE6]">{rival}</h4>
                <p className="text-sm text-[#F4EFE6]/60">{rivalDesc}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#caf265] block mb-2">PikselAI Farkı</span>
                <p className="text-[#F4EFE6]/90 text-lg font-light leading-relaxed">{advantage}</p>
            </div>
        </div>
    );
}

function ValueBlock({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
    return (
        <div className="text-center p-8 rounded-3xl border border-[#e0dcd3] bg-white hover:border-[#0b2117]/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex justify-center mb-6">{icon}</div>
            <h3 className="text-xl lg:text-2xl font-bold font-display text-[#0b2117] mb-3">{title}</h3>
            <p className="text-[#3a5245] text-lg font-light leading-relaxed">{description}</p>
        </div>
    );
}

export default About;
