import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const References = () => {
    const navigate = useNavigate();

    const projects = [
        {
            brand: "Cazador",
            category: "Moda & Tekstil",
            services: "AI Fotoğraf, Katalog, E-Ticaret",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
            quote: "PikselAI ile çalışmak bizim için kritik öneme sahipti.",
            author: "Fatih Erdoğan",
            role: "Pazarlama ve İletişim Müdürü",
        },
        {
            brand: "Pernod Ricard",
            category: "Yiyecek & İçecek",
            services: "Dijital Raporlar, Video Production",
            image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80",
        },
        {
            brand: "Picsart",
            category: "Teknoloji",
            services: "Ad Creative, Social Media",
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
        },
        {
            brand: "Fashion Brand",
            category: "Moda & Tekstil",
            services: "Ghost Mannequin, Lookbook",
            image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80",
        },
        {
            brand: "Cosmetic Co.",
            category: "Kozmetik",
            services: "Ürün Görselleri, Sosyal Medya",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
        },
        {
            brand: "Accessory Store",
            category: "Aksesuar",
            services: "360° Görüntüleme, Katalog",
            image: "https://images.unsplash.com/photo-1515562141589-67f0d89b7a68?auto=format&fit=crop&q=80",
        },
    ];

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* Hero */}
            <Section mood="dark" className="pt-32 pb-20 md:pt-44 md:pb-28">
                <div className="max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">Referanslarımız</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Büyük markalar <span className="italic text-bor-secondary">PikselAI</span> kullanıyor
                    </h1>
                    <p className="text-xl text-bor-primary-300 max-w-xl">
                        Farklı sektörlerden müşterilerimizin başarı hikayeleri.
                    </p>
                </div>
            </Section>

            {/* Stats */}
            <Section mood="light" className="py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <StatBlock metric="100+" label="Tamamlanan Proje" />
                    <StatBlock metric="50+" label="Mutlu Müşteri" />
                    <StatBlock metric="24-48s" label="Ortalama Teslim" />
                    <StatBlock metric="%80" label="Maliyet Avantajı" />
                </div>
            </Section>

            {/* Projects Grid */}
            <Section mood="light" className="py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/3]">
                                <img src={p.image} alt={p.brand} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-bor-primary-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{p.category}</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-bor-primary-900 mb-1">{p.brand}</h3>
                            <p className="text-bor-primary-500 mb-2">{p.services}</p>
                            {p.quote && (
                                <blockquote className="text-sm text-bor-primary-400 italic border-l-2 border-bor-secondary/30 pl-4 mt-4">
                                    "{p.quote}"
                                    <cite className="not-italic block mt-1 text-bor-primary-500 font-medium">{p.author}, {p.role}</cite>
                                </blockquote>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section mood="dark" className="py-24 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-display text-white">
                        Sıradaki başarı hikayesi <span className="italic">sizinki olsun</span>
                    </h2>
                    <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14" onClick={() => navigate('/iletisim')}>
                        Projenizi Anlatın
                    </Button>
                </div>
            </Section>
        </MainLayout>
    );
};

function StatBlock({ metric, label }: { metric: string; label: string }) {
    return (
        <div>
            <div className="text-4xl font-bold font-display text-bor-secondary">{metric}</div>
            <div className="text-sm text-bor-primary-500 mt-1">{label}</div>
        </div>
    );
}

export default References;
