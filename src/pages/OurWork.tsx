import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

/* ── Portfolio Data ── */
interface PortfolioItem {
    id: number;
    title: string;
    brand: string;
    category: string;
    image: string;
    video?: string;
    aspect: 'tall' | 'wide' | 'square';
    tags: string[];
}

const categories = [
    'Tümü',
    'AI Fotoğraf',
    'Ghost Manken',
    'E-Ticaret',
    'Sosyal Medya',
    'Katalog',
    'Web Tasarım',
    'Video',
];

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: 'AI Ürün Fotoğrafçılığı',
        brand: 'Cazador',
        category: 'AI Fotoğraf',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1000&fit=crop',
        aspect: 'tall',
        tags: ['AI', 'Ürün Fotoğrafı'],
    },
    {
        id: 2,
        title: 'Ghost Manken Çekimi',
        brand: 'Fashion Brand',
        category: 'Ghost Manken',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        aspect: 'wide',
        tags: ['Ghost', 'Manken'],
    },
    {
        id: 3,
        title: 'E-Ticaret Mağaza Yönetimi',
        brand: 'Trendyol Seller',
        category: 'E-Ticaret',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop',
        aspect: 'square',
        tags: ['E-Ticaret', 'Trendyol'],
    },
    {
        id: 4,
        title: 'Sosyal Medya İçerik Üretimi',
        brand: 'Lifestyle Co.',
        category: 'Sosyal Medya',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=1000&fit=crop',
        aspect: 'tall',
        tags: ['Sosyal Medya', 'İçerik'],
    },
    {
        id: 5,
        title: 'Ürün Katalog Tasarımı',
        brand: 'B2B Textile',
        category: 'Katalog',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=600&fit=crop',
        aspect: 'wide',
        tags: ['Katalog', 'Tasarım'],
    },
    {
        id: 6,
        title: 'Kurumsal Web Sitesi',
        brand: 'TechStart',
        category: 'Web Tasarım',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=800&fit=crop',
        aspect: 'square',
        tags: ['Web', 'Kurumsal'],
    },
    {
        id: 7,
        title: 'AI Sanal Manken Üretimi',
        brand: 'Denim Studio',
        category: 'AI Fotoğraf',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop',
        aspect: 'tall',
        tags: ['AI', 'Sanal Manken'],
    },
    {
        id: 8,
        title: 'Ürün Video Çekimi',
        brand: 'Accessory World',
        category: 'Video',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        aspect: 'wide',
        tags: ['Video', 'Ürün'],
    },
    {
        id: 9,
        title: 'Dijital Pazarlama Kampanyası',
        brand: 'GreenLeaf',
        category: 'Sosyal Medya',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=800&fit=crop',
        aspect: 'square',
        tags: ['Pazarlama', 'Kampanya'],
    },
    {
        id: 10,
        title: 'E-Ticaret Entegrasyonu',
        brand: 'HomeStyle',
        category: 'E-Ticaret',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=1000&fit=crop',
        aspect: 'tall',
        tags: ['E-Ticaret', 'Entegrasyon'],
    },
    {
        id: 11,
        title: 'Marka Kimliği Tasarımı',
        brand: 'Nova Brand',
        category: 'Web Tasarım',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        aspect: 'wide',
        tags: ['Marka', 'Kimlik'],
    },
    {
        id: 12,
        title: 'Ghost Manken – Koleksiyon',
        brand: 'Urban Wear',
        category: 'Ghost Manken',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=800&fit=crop',
        aspect: 'square',
        tags: ['Ghost', 'Koleksiyon'],
    },
];

/* ── Stats ── */
const stats = [
    { value: '3000+', label: 'Tamamlanan Proje' },
    { value: '150+', label: 'Mutlu Müşteri' },
    { value: '%80', label: 'Maliyet Tasarrufu' },
    { value: '24-48s', label: 'Teslimat Süresi' },
];

/* ── Main Component ── */
export default function OurWork() {
    const [activeCategory, setActiveCategory] = useState('Tümü');
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredItems = activeCategory === 'Tümü'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* ─── HERO SECTION ─── */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-bor-primary-900">
                {/* Background Video/Image */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-60"
                        poster="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
                    >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-bor-primary-900/80 via-bor-primary-900/50 to-bor-primary-900/90" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm tracking-[0.3em] uppercase text-bor-secondary font-medium mb-6"
                    >
                        Yaptığımız İşler
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05]"
                    >
                        Yaratıcılık
                        <br />
                        <span className="font-serif italic text-bor-secondary">işe yarar</span>
                    </motion.h1>

                    {/* Play button overlay */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center mx-auto hover:border-white hover:bg-white/10 transition-all duration-300 group"
                    >
                        <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </motion.button>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ─── SUBTITLE ─── */}
            <Section mood="light" width="narrow">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl lg:text-3xl text-center text-bor-primary-700 leading-relaxed font-light"
                >
                    Türkiye'nin lider markalarına, AI destekli yaratıcı çözümlerle
                    hız ve kalitede fark yaratan prodüksiyonlar sunuyoruz — konseptten
                    uygulamaya, sonuca kadar.
                </motion.p>
            </Section>

            {/* ─── TRUST BAR ─── */}
            <Section mood="gray" className="!py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-bor-secondary mb-1">{stat.value}</div>
                            <div className="text-sm text-bor-primary-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── CATEGORY FILTER ─── */}
            <Section mood="light" className="!py-8 !pb-4 sticky top-16 z-30 backdrop-blur-xl bg-bor-background/90 border-b border-bor-primary-100">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
								px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap
								transition-all duration-300
								${activeCategory === cat
                                    ? 'bg-bor-primary-900 text-white shadow-lg shadow-bor-primary-900/20'
                                    : 'bg-bor-primary-50 text-bor-primary-600 hover:bg-bor-primary-100'
                                }
							`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Section>

            {/* ─── PORTFOLIO GRID ─── */}
            <Section mood="light" width="wide" className="!pt-8">
                <div ref={gridRef} className="columns-1 md:columns-2 gap-6 space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="break-inside-avoid group cursor-pointer"
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div
                                    className={`
										relative overflow-hidden rounded-2xl
										${item.aspect === 'tall' ? 'aspect-[3/4]' : item.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'}
									`}
                                >
                                    {/* Image / Video */}
                                    {item.video && hoveredItem === item.id ? (
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover"
                                        >
                                            <source src={item.video} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    )}

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Video play icon */}
                                    {item.video && (
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Bottom content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <motion.div
                                            initial={false}
                                            animate={{ y: hoveredItem === item.id ? 0 : 10, opacity: hoveredItem === item.id ? 1 : 0.8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-white/70 text-sm font-medium tracking-wider uppercase mb-1">
                                                {item.brand}
                                            </p>
                                            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                                                {item.title}
                                            </h3>
                                            {/* Tags */}
                                            <div className={`flex gap-2 mt-3 transition-all duration-500 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Hover border glow */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load more button */}
                <div className="flex justify-center mt-16">
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-12 py-4 text-base rounded-full border-2"
                    >
                        Daha Fazla Göster
                    </Button>
                </div>
            </Section>

            {/* ─── CTA SECTION ─── */}
            <Section mood="dark" className="!py-24 md:!py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Bir sonraki projede
                        <br />
                        <span className="text-bor-secondary">biz de olalım</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-white/70 mb-10 max-w-xl mx-auto"
                    >
                        AI destekli yaratıcı prodüksiyonlarla markanızı bir adım öne taşıyalım.
                        Ücretsiz danışmanlık için hemen iletişime geçin.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            variant="secondary"
                            size="lg"
                            className="px-10 py-4 text-base rounded-full"
                            onClick={() => window.location.href = '/iletisim'}
                        >
                            Ücretsiz Danışmanlık Al
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-10 py-4 text-base rounded-full border-white/30 text-white hover:bg-white/10"
                            onClick={() => window.location.href = '/hizmetler'}
                        >
                            Hizmetlerimizi Keşfet
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </MainLayout>
    );
}
