import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const services = [
    {
        category: "AI PRODÜKSIYON",
        href: "/hizmetler/ai-produksiyon",
        title: "Yapay Zeka ile Kreatif Üretim",
        description: "Stüdyo yok, manken yok, beklemek yok. Fiziksel çekim dönemine son. Ürün fotoğrafçılığından sanal manken tasarımına, AI video üretiminden görsel A/B testine.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80",
        features: ["Ghost Mannequin", "Sanal Manken Ajansı", "AI Video & Reels", "Görsel A/B Testi", "Ürün Dekupe", "Toplu Üretim"],
        stats: [
            { value: "%80", label: "Maliyet avantajı" },
            { value: "24-48s", label: "Teslim süresi" },
            { value: "∞", label: "Varyasyon" },
        ],
        color: "from-blue-600/20 to-indigo-600/20",
    },
    {
        category: "DİJİTAL BÜYÜME",
        href: "/hizmetler/dijital-buyume",
        title: "Satış Odaklı Dijital Strateji",
        description: "Güzel görseller tek başına satmaz. E-ticaret yönetimi, SEO optimizasyonu, sosyal medya stratejisi ve AI content factory ile dijital kanallarınızı uçtan uca yönetiyoruz.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        features: ["E-Ticaret Yönetimi", "SEO & İçerik Otomasyonu", "Sosyal Medya", "AI Content Factory", "Reklam Yönetimi", "Analytics"],
        stats: [
            { value: "%340", label: "Ort. ciro artışı" },
            { value: "150+", label: "Yönetilen mağaza" },
            { value: "50M+", label: "Toplam ciro" },
        ],
        color: "from-emerald-600/20 to-teal-600/20",
    },
    {
        category: "KATALOG & WEB",
        href: "/hizmetler/katalog-web",
        title: "Markanızın Dijital Vitrini",
        description: "İnteraktif dijital kataloglar, satışa dönüştüren landing page'ler, modern kurumsal web siteleri ve kullanıcı odaklı arayüz tasarımları.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        features: ["İnteraktif Katalog", "Landing Page", "Web Geliştirme", "UI/UX Tasarım", "B2B Katalog", "Shopify/WooCommerce"],
        stats: [
            { value: "200+", label: "Katalog tasarımı" },
            { value: "50+", label: "Web sitesi" },
            { value: "%95", label: "Memnuniyet" },
        ],
        color: "from-amber-600/20 to-orange-600/20",
    }
];

const ServicesHub = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-bor-primary-900">
                <div className="absolute inset-0 bg-gradient-to-b from-bor-primary-900 to-bor-primary-800" />
                <div className="container-custom relative z-10 py-32 text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary bg-bor-secondary/10 px-4 py-2 rounded-full mb-8">
                        Hizmetler
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                        Her ihtiyaca özel <br />
                        <span className="italic text-bor-secondary">AI çözümü</span>
                    </h1>
                    <p className="text-xl text-bor-primary-300 max-w-2xl mx-auto leading-relaxed">
                        Görsel üretimden dijital stratejiye, katalog tasarımından web geliştirmeye —
                        markanızın dijital dönüşümünü tek çatı altında yönetiyoruz.
                    </p>
                </div>
            </section>

            {/* Service Cards */}
            <Section mood="light" className="py-24">
                <div className="space-y-24">
                    {services.map((service, i) => (
                        <div key={i} className="group">
                            <div className={`grid md:grid-cols-2 gap-8 items-stretch ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Image */}
                                <div className={`relative overflow-hidden rounded-3xl h-[500px] cursor-pointer ${i % 2 === 1 ? 'md:order-2' : ''}`} onClick={() => navigate(service.href)}>
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="flex flex-wrap gap-3">
                                            {service.stats.map((stat, j) => (
                                                <div key={j} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                                                    <div className="text-white font-bold text-lg">{stat.value}</div>
                                                    <div className="text-white/50 text-xs">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">
                                        {service.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-bor-primary-900 mb-4 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-bor-primary-600 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Features grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feat, j) => (
                                            <div key={j} className="flex items-center gap-2 text-sm text-bor-primary-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-bor-secondary shrink-0" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        size="lg"
                                        className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14 w-fit"
                                        onClick={() => navigate(service.href)}
                                    >
                                        Detayları İncele →
                                    </Button>
                                </div>
                            </div>

                            {i < services.length - 1 && (
                                <div className="w-full h-px bg-bor-primary-100 mt-24" />
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Bottom CTA */}
            <Section mood="dark" className="py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display text-white">
                        Hangisine ihtiyacınız var?
                    </h2>
                    <p className="text-xl text-bor-primary-300">
                        Ücretsiz bir keşif görüşmesiyle en uygun çözümü belirleyelim.
                    </p>
                    <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-10 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                        Ücretsiz Görüşme Planla
                    </Button>
                </div>
            </Section>
        </MainLayout>
    );
};

export default ServicesHub;
