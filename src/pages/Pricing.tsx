import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Profesyonel Katalog Paketi (Sabit)
const catalogPlan = {
    name: 'Profesyonel Katalog',
    price: '₺15.000',
    suffix: '/ tek seferlik',
    description: 'Kendi fotoğraflarını kullanmak isteyen işletmeler için profesyonel katalog çözümü.',
    features: [
        'Sınırsız albüm oluşturma',
        'Mobil uyumlu modern tasarım',
        'Hızlı arama ve filtreleme',
        'Video ve medya desteği',
        'PWA (uygulama olarak yükleme)',
        'Tek seferlik ödeme – süresiz kullanım'
    ],
    cta: 'Paketi Seç'
};

// AI Fotoğraf Paketleri
const aiPlans = [
    {
        name: 'Başlangıç',
        price: '$39',
        suffix: '/ aylık',
        description: 'Yapay zekayı düşük riskle denemek isteyen işletmeler için.',
        features: ['Ayda 200 adet AI fotoğraf', 'Profesyonel prompt altyapısı', 'Katalog ve sosyal medya uyumlu', 'İptal edilebilir üyelik'],
        cta: 'Paketi Seç'
    },
    {
        name: 'En Popüler',
        price: '$119',
        suffix: '/ aylık',
        description: 'Düzenli içerik üreten markalar için en dengeli paket.',
        features: ['Ayda 700 adet AI fotoğraf', 'Gelişmiş prompt mühendisliği', 'Tutarlı stil ve görsel bütünlük', 'Öncelikli üretim sırası'],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Profesyonel',
        price: '$219',
        suffix: '/ aylık',
        description: 'Yüksek hacimli, sürekli görsel üretimi yapan markalar için.',
        features: ['Ayda 1.400 adet AI fotoğraf', 'Gelişmiş prompt + sahne varyasyonları', 'Büyük kataloglar için uygun', 'Öncelikli destek'],
        cta: 'Profesyonel Paketi Seç'
    }
];

// E-Ticaret Paketleri
const ecommercePackages = [
    {
        name: 'Temel',
        price: '₺29.000',
        suffix: 'Tek Seferlik',
        description: 'Standart, temiz ve satışa hazır bir Shopify mağazası kurulumu.',
        features: ['Shopify mağaza kurulumu', 'Tema ve temel ayarlar', 'Ürünlerin eklenmesi', 'Ödeme ve kargo ayarları', '3 ay teknik destek'],
        cta: 'Teklif Al'
    },
    {
        name: 'Profesyonel',
        price: '₺39.000',
        suffix: 'Tek Seferlik',
        description: 'Markanıza özel, yapay zeka destekli profesyonel mağaza.',
        features: ['AI destekli özel kurulum', 'Baştan sona danışmanlık', 'Ürünlere özel gerçekçi AI görselleri', 'Meta alan özelleştirmeleri', 'İçerik ve yapı desteği'],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Premium 360°',
        price: '₺49.000',
        suffix: '+ ₺25.000/ay',
        description: 'Kurulum + Sürekli Yönetim + Sosyal Medya + Katalog — Tam Kapsamlı Çözüm.',
        features: ['Tüm kurulum hizmetleri dahil', 'Aylık performans yönetimi', 'Sosyal medya yönetimi (48 post/ay)', 'AI reklam kreatifleri', 'Hediye Dijital Katalog (₺15.000 değerinde)'],
        cta: '360° Çözüm Ortaklığı Başlat',
        isPremium: true
    }
];

const Pricing = () => {
    const [activeTab, setActiveTab] = useState<'katalog' | 'ai' | 'eticaret'>('ai');

    return (
        <MainLayout>
            <Helmet>
                <title>Ücretler | Pikselai</title>
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24 text-center" mood="light">
                <h1 className="text-4xl md:text-6xl font-bold font-display text-bor-primary-900 dark:text-white mb-6">
                    Şeffaf ve Esnek <span className="text-bor-secondary">Fiyatlandırma</span>
                </h1>
                <p className="text-lg text-bor-primary-500 dark:text-bor-primary-400 max-w-2xl mx-auto mb-10">
                    İhtiyacınıza en uygun paketi seçin, işletmenizi büyütmeye hemen başlayın. Gizli ücret yok, sürpriz yok.
                </p>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-2 mb-12">
                    <Button
                        variant={activeTab === 'katalog' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('katalog')}
                        className="rounded-full"
                    >
                        Katalog
                    </Button>
                    <Button
                        variant={activeTab === 'ai' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('ai')}
                        className="rounded-full"
                    >
                        AI Fotoğraf
                    </Button>
                    <Button
                        variant={activeTab === 'eticaret' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('eticaret')}
                        className="rounded-full"
                    >
                        E-Ticaret
                    </Button>
                </div>

                {/* Pricing Content */}
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatePresence mode="wait">

                        {/* Katalog Tab */}
                        {activeTab === 'katalog' && (
                            <motion.div
                                key="katalog"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex justify-center"
                            >
                                <PricingCard plan={catalogPlan} />
                            </motion.div>
                        )}

                        {/* AI Tab */}
                        {activeTab === 'ai' && (
                            <motion.div
                                key="ai"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {aiPlans.map((plan, i) => (
                                    <PricingCard key={i} plan={plan} />
                                ))}
                            </motion.div>
                        )}

                        {/* E-Ticaret Tab */}
                        {activeTab === 'eticaret' && (
                            <motion.div
                                key="eticaret"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {ecommercePackages.map((plan, i) => (
                                    <PricingCard key={i} plan={plan} />
                                ))}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </Section>

            {/* CTA Section */}
            <Section mood="dark" className="text-center py-20">
                <h2 className="text-3xl font-bold font-display text-white mb-6">
                    Karar veremediniz mi?
                </h2>
                <p className="text-bor-primary-200 mb-8 max-w-xl mx-auto">
                    İşletmeniz için en doğru çözümü belirlemek adına ücretsiz bir analiz görüşmesi yapalım.
                </p>
                <Button size="lg" className="bg-white text-bor-primary-900 hover:bg-gray-100">
                    İletişime Geç
                </Button>
            </Section>
        </MainLayout>
    );
};

interface PricingPlan {
    name: string;
    price: string;
    suffix?: string;
    description: string;
    features: string[];
    cta: string;
    featured?: boolean;
    isPremium?: boolean;
}

function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <Card className={`relative flex flex-col h-full ${plan.featured ? 'border-bor-secondary shadow-lg ring-1 ring-bor-secondary' : ''}`}>
            {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bor-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    En Popüler
                </div>
            )}
            <CardHeader>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-bor-primary-900 dark:text-white">
                        {plan.price}
                    </span>
                    {plan.suffix && <span className="text-sm font-medium text-bor-primary-500">{plan.suffix}</span>}
                </div>
                <CardDescription className="mt-2 text-sm text-bor-primary-500 dark:text-bor-primary-400">
                    {plan.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm text-bor-primary-600 dark:text-bor-primary-300">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex gap-3">
                            <span className="text-bor-secondary">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full"
                    variant={plan.featured ? 'primary' : 'outline'}
                    href="https://wa.me/905531832344" // WhatsApp linki eklendi
                >
                    {plan.cta}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Pricing;
