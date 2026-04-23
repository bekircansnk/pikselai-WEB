import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, MessageSquare, TrendingUp } from 'lucide-react';

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

// AI Fotoğraf Paketleri (Hacim Bazlı Kullandıkça Öde)
const aiPlans = [
    {
        name: 'Başlangıç',
        price: '$0.50',
        suffix: '/ görsel',
        description: 'Yapay zekayı düşük riskle denemek isteyen işletmeler için.',
        features: [
            'Ayda 200 adete kadar üretim',
            'Katalog ve sosyal medya uyumlu',
            'İptal edilebilir üyelik',
            'Sadece ürettiğin kadar öde'
        ],
        cta: 'Paketi Seç'
    },
    {
        name: 'En Popüler',
        price: '$0.30',
        suffix: '/ görsel',
        description: 'Düzenli içerik üreten markalar için en dengeli paket.',
        features: [
            'Ayda 201 - 700 arası üretim',
            'Gelişmiş prompt mühendisliği',
            'Tutarlı stil ve görsel bütünlük',
            'Öncelikli üretim sırası',
            'Sadece ürettiğin kadar öde'
        ],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Profesyonel',
        price: '$0.25',
        suffix: '/ görsel',
        description: 'Yüksek hacimli, sürekli görsel üretimi yapan markalar için.',
        features: [
            'Ayda 700+ üzeri hacimli üretim',
            'Gelişmiş prompt + sahne varyasyonları',
            'Büyük kataloglar için uygun',
            'Öncelikli destek',
            'Sadece ürettiğin kadar öde'
        ],
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
        features: ['Shopify mağaza kurulumu', 'Tema ve temel ayarlar', 'Ürünlerin eklenmesi', 'Ödeme ve kargo ayarları', '30 gün teknik destek'],
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

// Kreatif Tasarım Paketleri
const creativePackages = [
    {
        name: 'Landing Page',
        price: '₺15.000',
        suffix: 'Tek Seferlik',
        description: 'Tek sayfalık dönüşüm odaklı tanıtım ve kampanya sayfaları.',
        features: ['Özel UI/UX tasarımı', 'Mobil uyumlu modern yapı', 'Hızlı sayfa yüklenme (SEO)', 'Form ve lead toplama', 'Google Analytics & Takip Kurulumu'],
        cta: 'Teklif Al'
    },
    {
        name: 'Kurumsal Web Sitesi',
        price: '₺25.000',
        suffix: 'Tek Seferlik',
        description: 'Markanızı en iyi yansıtan çok sayfalı ve dinamik kurumsal kimlik siteleri.',
        features: ['Özgün tasarım sistemi', 'CMS (İçerik Yönetimi)', 'Sınırsız sayfa yapısı', 'Blog ve haberler modülü', 'Temel SEO yapılandırması'],
        cta: 'En Popüler Paketi Seç',
        featured: true
    },
    {
        name: 'Özel Proje',
        price: 'Özel Teklif',
        suffix: '',
        description: 'İnteraktif katalog, portal veya tam kapsamlı özel tasarım süreçleri.',
        features: ['Kapsamlı marka analizi', 'Tasarım sistemleri', 'Özel React/Next.js geliştirme', 'API/Backend entegrasyonları', 'Sürekli teknik destek'],
        cta: 'Projenizi Konuşalım',
        isPremium: true
    }
];

// SSS Verileri
const catalogFaqs = [
    { q: "Katalog paketi için ödeme tek seferlik mi?", a: "Evet, profesyonel katalog paketi için sadece bir kez ödeme yaparsınız. Sistem tarafımızdan kurulup size teslim edildikten sonra sınırsız ve süresiz kullanım hakkına sahip olursunuz." },
    { q: "Kendi domainimi kullanabilir miyim?", a: "Kesinlikle! Hazırlanan dijital kataloğu kendi alan adınız (örn: katalog.markaniz.com) altında kullanabilirsiniz." },
    { q: "Kaç ürün yükleyebilirim?", a: "Herhangi bir ürün veya görsel sınırımız yoktur. Sınırsız sayıda ürün ve kategori oluşturabilirsiniz." }
];

const aiFaqs = [
    { q: "Kredi sisteminiz nasıl çalışıyor?", a: "Kredi veya aylık abonelik zorunluluğumuz yok. Ay sonunda sadece o ay içinde ürettiğiniz başarılı görsellerin toplam sayısı üzerinden, bulunduğunuz dilime göre faturalandırılırsınız." },
    { q: "Beğenmediğim görseller için ücret ödüyor muyum?", a: "Hayır. Kalite kontrol sürecimizden geçmeyen veya sizin onaylamadığınız hiçbir görsel için ücret talep etmiyoruz. Sadece kullandığınız nihai görseller için ödeme yaparsınız." },
    { q: "Kendi markam için özel bir AI modeli eğitilebilir mi?", a: "Evet! Özellikle hacimli çalışmalarda marka kimliğinize, renklerinize ve stilinize %100 uygun sonuçlar alabilmeniz için size özel model eğitimi gerçekleştiriyoruz. Şu an kampanya dahilinde bu işlem ücretsizdir." },
    { q: "Görsel teslim süreleri nedir?", a: "Talebinize ve hacmine bağlı olmakla birlikte, standart üretimler 48 saat içerisinde kalite kontrolü tamamlanmış olarak size teslim edilir." }
];

const ecommerceFaqs = [
    { q: "Hangi altyapıyı kullanıyorsunuz?", a: "E-ticaret projelerimizde hız, güvenlik ve dönüşüm oranı en yüksek olan Shopify altyapısını tercih ediyoruz." },
    { q: "Kurulum süreci ne kadar sürüyor?", a: "Seçtiğiniz pakete göre değişiklik göstermekle birlikte, standart bir kurulum 7-14 gün, özel tasarımlı profesyonel kurulumlar ise 3-4 hafta içerisinde tamamlanmaktadır." },
    { q: "Ödeme altyapılarını siz mi kuruyorsunuz?", a: "Evet. İyzico, PayTR, Stripe gibi popüler ödeme sağlayıcılarının entegrasyonu tarafımızca eksiksiz olarak yapılmaktadır." }
];

const creativeFaqs = [
    { q: "Özel proje ne anlama geliyor?", a: "Özel projeler, standart bir web sitesinin ötesinde; interaktif portallar, gelişmiş filtreleme sistemleri veya markanıza tamamen özel, sıfırdan kodlanan (React/Next.js) web uygulamalarıdır." },
    { q: "Sitenin SEO ayarları yapılıyor mu?", a: "Tüm web projelerimizde, Google'ın güncel standartlarına uygun temel SEO yapılandırmaları, site hızı optimizasyonları ve doğru etiket hiyerarşisi (H1, H2 vb.) sağlanarak teslim edilir." },
    { q: "Teslimat sonrası teknik destek veriyor musunuz?", a: "Elbette. Proje tesliminden sonra oluşabilecek teknik sorunlar için standart olarak ilk 1 ay ücretsiz destek sağlıyor, sonrasında dilerseniz aylık bakım paketlerimizle yanınızda olmaya devam ediyoruz." }
];

const Pricing = () => {
    const [activeTab, setActiveTab] = useState<'katalog' | 'ai' | 'eticaret' | 'kreatif'>('ai');

    return (
        <MainLayout>
            <Helmet>
                <title>Ücretler | Pikselai</title>
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24 text-center" mood="light">
                <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-bor-primary-900 dark:text-white mb-6">
                    Şeffaf ve Esnek <br className="hidden lg:block" />
                    <span className="italic font-light text-[#86AA00] dark:text-[#E2FF65]">Fiyatlandırma</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed max-w-2xl mx-auto mb-10">
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
                    <Button
                        variant={activeTab === 'kreatif' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveTab('kreatif')}
                        className="rounded-full"
                    >
                        Kreatif Tasarım
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
                                className="flex flex-col items-center gap-10"
                            >
                                <div className="w-full max-w-md">
                                    <PricingCard plan={catalogPlan} />
                                </div>
                                <FaqSection faqs={catalogFaqs} />
                            </motion.div>
                        )}

                        {/* AI Tab */}
                        {activeTab === 'ai' && (
                            <motion.div
                                key="ai"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-10"
                            >
                                <div className="flex flex-col items-center mb-10">
                                    <div className="inline-flex items-center gap-3 px-2 py-1.5 pr-5 rounded-full bg-white dark:bg-bor-primary-900/50 border border-bor-secondary/30 shadow-sm text-sm font-medium transition-all hover:border-bor-secondary/60 duration-300 text-center flex-wrap justify-center text-bor-primary-900 dark:text-white">
                                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bor-secondary text-bor-primary-900 text-xs font-bold tracking-wide uppercase">
                                            <span className="h-1.5 w-1.5 rounded-full bg-bor-primary-900 animate-pulse"></span>
                                            Kampanya
                                        </span> 
                                        <span>
                                            Markanıza özel AI model eğitimi (Tek seferlik <span className="line-through opacity-50 mx-1">$49</span>) şu an <strong className="text-bor-secondary">ÜCRETSİZ</strong>
                                        </span>
                                    </div>
                                    <p className="mt-4 text-sm text-bor-primary-500 dark:text-bor-primary-400 max-w-xl text-center leading-relaxed">
                                        Ürünlerinizin marka kimliğine ve DNA'sına uygun olarak yapay zekaya öğretilmesi işlemi kısa bir süreliğine ücretsizdir. <br className="hidden md:block" />
                                        Sistemde gizli ücret yoktur; yalnızca ürettiğiniz görsel adedi kadar faturalandırılırsınız.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {aiPlans.map((plan, i) => (
                                        <PricingCard key={i} plan={plan} />
                                    ))}
                                </div>
                                
                                {/* Cost Calculator Banner CTA */}
                                <div className="w-full bg-white dark:bg-bor-primary-900/50 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-left flex-1">
                                        <h3 className="text-2xl lg:text-3xl font-bold font-display text-gray-900 dark:text-white mb-3">
                                            Hangi paketin size uygun olduğundan emin değil misiniz?
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                                            AI üretim maliyet hesaplama motorumuzu kullanarak projenizin tahmini bütçesini anında görün.
                                        </p>
                                    </div>
                                    <Button 
                                        size="lg" 
                                        className="w-full md:w-auto md:min-w-[280px] text-lg py-6 bg-bor-secondary text-white hover:bg-bor-secondary/90 shadow-xl shadow-bor-secondary/20"
                                        href="/fiyat-hesapla"
                                    >
                                        En Uygun Paketi Hesapla
                                    </Button>
                                </div>

                                <FaqSection faqs={aiFaqs} />
                            </motion.div>
                        )}

                        {/* E-Ticaret Tab */}
                        {activeTab === 'eticaret' && (
                            <motion.div
                                key="eticaret"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {ecommercePackages.map((plan, i) => (
                                        <PricingCard key={i} plan={plan} />
                                    ))}
                                </div>
                                <FaqSection faqs={ecommerceFaqs} />
                            </motion.div>
                        )}

                        {/* Kreatif Tasarım Tab */}
                        {activeTab === 'kreatif' && (
                            <motion.div
                                key="kreatif"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {creativePackages.map((plan, i) => (
                                        <PricingCard key={i} plan={plan} />
                                    ))}
                                </div>
                                <FaqSection faqs={creativeFaqs} />
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </Section>

            {/* BOTTOM CTA - İletişim Vurgusu */}
            <section className="bg-transparent py-24 px-6 md:px-16 lg:px-24 mb-1">
                <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
                    {/* Soft Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E2FF65]/10 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#E2FF65]/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h2 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-8 text-left">
                            Mağazanızın geleceği <br />
                            <span className="italic font-light text-[#E2FF65]">bir mesaj uzağınızda</span>
                        </h2>
                        <p className="text-[#a8b8af] mb-10 text-lg text-left">
                            Hemen bir ücretsiz danışmanlık görüşmesi planlayalım ve dijital hedeflerinizi global standartlarda gerçeğe dönüştürelim.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <button 
                                onClick={() => window.location.href = 'https://wa.me/905531832344'}
                                className="bg-[#E2FF65] text-[#0b2117] hover:bg-[#d4f54e] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 group"
                            >
                                İş Birliğine Başlayalım
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="mailto:bilgi@pikselai.com" className="text-[#F4EFE6] font-medium border-b border-[#F4EFE6]/30 hover:border-[#E2FF65] hover:text-[#E2FF65] transition-all pb-1 flex items-center gap-2">
                                <MessageSquare size={18} /> bilgi@pikselai.com
                            </a>
                        </div>
                    </div>

                    {/* Creative SVG/Visual Element for CTA */}
                    <div className="relative z-10 hidden md:block w-full max-w-xs aspect-square">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full border-2 border-dashed border-[#E2FF65]/30 rounded-full flex items-center justify-center p-8"
                        >
                            <div className="w-full h-full border border-[#E2FF65]/50 rounded-full flex items-center justify-center">
                                <div className="w-20 h-20 bg-[#E2FF65] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(226,255,101,0.4)]">
                                    <TrendingUp size={32} className="text-[#0b2117]" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
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
        <Card className={`relative flex flex-col h-full ${plan.featured ? 'border-[#E2FF65] shadow-lg ring-1 ring-[#E2FF65]/50' : 'border-gray-200 dark:border-white/10'}`}>
            {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E2FF65] text-bor-primary-900 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
                    En Popüler
                </div>
            )}
            <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-bold !font-sans tracking-tight text-bor-primary-900 dark:text-white">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-bor-primary-900 dark:text-white">
                        {plan.price}
                    </span>
                    {plan.suffix && <span className="text-sm font-medium text-bor-primary-500">{plan.suffix}</span>}
                </div>
                <CardDescription className="mt-3 text-sm text-bor-primary-500 dark:text-bor-primary-400 leading-relaxed">
                    {plan.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-8">
                <ul className="space-y-4 text-sm text-bor-primary-600 dark:text-bor-primary-300">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex gap-3 items-start">
                            <span className="text-[#86AA00] dark:text-[#E2FF65] font-bold mt-0.5">✓</span>
                            <span className="leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="pb-8">
                <Button
                    className={`w-full py-6 text-base font-semibold ${plan.featured ? 'bg-[#E2FF65] text-bor-primary-900 hover:bg-[#d4f54e] shadow-lg shadow-[#E2FF65]/20 border-none' : ''}`}
                    variant={plan.featured ? 'outline' : 'outline'}
                    href="https://wa.me/905531832344" // WhatsApp linki eklendi
                >
                    {plan.cta}
                </Button>
            </CardFooter>
        </Card>
    )
}

function FaqSection({ faqs }: { faqs: { q: string, a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-16 text-left max-w-4xl mx-auto w-full">
            <h3 className="text-3xl font-bold font-display text-bor-primary-900 dark:text-white mb-8 text-center">
                Sıkça Sorulan Sorular
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-bor-secondary/50 bg-white/50 dark:bg-bor-primary-900/30' : 'border-gray-200 dark:border-white/10 bg-white/30 dark:bg-transparent'}`}
                    >
                        <button 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                        >
                            <span className="font-semibold text-lg text-bor-primary-900 dark:text-white">{faq.q}</span>
                            <span className="shrink-0 text-bor-primary-400 transition-transform duration-300">
                                {openIndex === index ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                )}
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-5 text-bor-primary-600 dark:text-bor-primary-400"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
