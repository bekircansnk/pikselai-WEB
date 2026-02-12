import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const About = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* Hero */}
            <Section mood="dark" className="pt-32 pb-20 md:pt-44 md:pb-28">
                <div className="max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">Hakkımızda</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Biz <span className="italic text-bor-secondary">fotoğrafçı</span> değiliz. <br />
                        <span className="italic">Teknoloji ortağınızız.</span>
                    </h1>
                    <p className="text-xl text-bor-primary-300 max-w-xl leading-relaxed">
                        Geleneksel ajanslardaki fiziksel stüdyo, manken ve ekip ihtiyacını ortadan kaldırıyoruz.
                        Yapay zeka ile dünyanın en hızlı ve ekonomik görsel üretim hattını işletiyoruz.
                    </p>
                </div>
            </Section>

            {/* Story */}
            <Section mood="light" className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Hikayemiz</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-bor-primary-900 mb-6">
                            Neden PikselAI?
                        </h2>
                        <div className="space-y-4 text-bor-primary-600 leading-relaxed">
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

                    <div className="rounded-3xl overflow-hidden aspect-square bg-bor-primary-100">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="PikselAI Team" className="w-full h-full object-cover" />
                    </div>
                </div>
            </Section>

            {/* Competitive Advantage */}
            <Section mood="dark" className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-white">
                        Biz ne <span className="italic">farklı yapıyoruz?</span>
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
            </Section>

            {/* Values */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-bor-primary-900">Değerlerimiz</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ValueBlock title="Hız" description="Haftalar değil, saatler içinde teslim. Müşterilerimiz zamanı geri kazanır." icon="⚡" />
                    <ValueBlock title="Kalite" description="Fiziksel çekimden ayırt edilemeyen gerçekçilik. Her piksel mükemmellik için optimize." icon="✨" />
                    <ValueBlock title="Maliyet Avantajı" description="%80'e varan tasarruf. Kurumsal bütçe değil, akıllı bütçe." icon="💰" />
                </div>
            </Section>

            {/* CTA */}
            <Section mood="dark" className="py-24 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-display text-white">
                        Bu adamlar geleceği getirmiş deyin
                    </h2>
                    <p className="text-xl text-bor-primary-300">Ücretsiz demo ile farkı görün.</p>
                    <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14" onClick={() => navigate('/iletisim')}>
                        Demo Talep Et
                    </Button>
                </div>
            </Section>
        </MainLayout>
    );
};

function CompetitorCard({ rival, rivalDesc, advantage }: { rival: string; rivalDesc: string; advantage: string }) {
    return (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="mb-4">
                <h4 className="text-lg font-bold text-white/60">{rival}</h4>
                <p className="text-sm text-white/40">{rivalDesc}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">PikselAI Farkı</span>
                <p className="text-white leading-relaxed">{advantage}</p>
            </div>
        </div>
    );
}

function ValueBlock({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
        <div className="text-center p-8 rounded-2xl border border-bor-primary-100 hover:border-bor-secondary/30 transition-colors">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-bor-primary-900 mb-3">{title}</h3>
            <p className="text-bor-primary-500">{description}</p>
        </div>
    );
}

export default About;
