import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { X, Play, Pause, ChevronRight } from 'lucide-react';

/* ── Types ── */
interface ProjectImage {
    url: string;
    type: 'image' | 'video';
    aspect?: 'square' | 'wide' | 'tall';
}

interface Project {
    id: number;
    title: string;
    client: string;
    category: string;
    thumbnail: string;
    thumbnailType?: 'single' | 'collage'; // New property for grid display
    collageImages?: string[]; // Array of 4 images if thumbnailType is 'collage'
    images: ProjectImage[];
    description: string;
    tags: string[];
    bgColor?: string;
}

/* ── Mock Data ── */
const categories = [
    'Tümü',
    'AI Fotoğraf',
    'E-Ticaret',
    'Social Media',
    'Video',
    '3D & Motion',
    'Mimari',
    'Gastronomi',
    'Doğa',
    'Teknoloji'
];

const stats = [
    { value: '500+', label: 'Tamamlanan Proje' },
    { value: '50+', label: 'Mutlu Marka' },
    { value: '%80', label: 'Maliyet Tasarrufu' },
    { value: '24-48s', label: 'Teslimat Süresi' },
];

const projects: Project[] = [
    {
        id: 1,
        title: 'Cazador AI Kış Kampanyası',
        client: 'Cazador',
        category: 'AI Fotoğraf',
        thumbnail: '/projects/cazador-local/10600-HAKİ_2K_4_5_A candid, full-body editorial shot captured with a 35mm lens, observing a male model with curly brown hair standing on a snow-covered sidewalk against a textured grey stone façade. He wears a matte olive green hooded (1).webp',
        thumbnailType: 'single',
        images: [
            { url: '/projects/cazador-local/VID_20251125_203429_529.mp4', type: 'video', aspect: 'wide' },
            { url: '/projects/cazador-local/10600-HAKİ_2K_4_5_A candid, full-body editorial shot captured with a 35mm lens, observing a male model with curly brown hair standing on a snow-covered sidewalk against a textured grey stone façade. He wears a matte olive green hooded (1).webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/10600-HAKİ_2K_4_5_A candid, full-body editorial shot captured with a 35mm lens, observing a male model with curly brown hair standing on a snow-covered sidewalk against a textured grey stone façade. He wears a matte olive green hooded (5).webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/10600-HAKİ_2K_4_5_A wide, observational editorial photograph of the subject standing quietly on a snow-dusted concrete sidewalk against a minimalist gray architectural wall. He is wearing the olive green hooded puffer jacket, zipped halfwa.webp', type: 'image', aspect: 'wide' }
        ],
        description: "Türkiye'nin tekstil devi Cazador için hazırladığımız, tamamen yapay zeka tarafından generate edilen dış mekan kış koleksiyonu çekimleri.",
        tags: ['AI', 'Moda', 'Outdoor']
    },
    {
        id: 2,
        title: 'Modern Koleksiyon Lansmanı',
        client: 'Cazador',
        category: 'E-Ticaret',
        thumbnail: '/projects/cazador-local/10600-SİYAH_2K_4_5_Editorial fashion medium shot. The specific male model with curly brown hair stands confidently against a textured gray concrete wall in a quiet city alley. He is wearing a matte black hooded puffer jacket, slightly (16).webp',
        thumbnailType: 'collage',
        collageImages: [
            '/projects/cazador-local/10600-SİYAH_2K_4_5_Editorial fashion medium shot. The specific male model with curly brown hair stands confidently against a textured gray concrete wall in a quiet city alley. He is wearing a matte black hooded puffer jacket, slightly (16).webp',
            '/projects/cazador-local/10600-SİYAH_2K_Auto_Editorial fashion photography, medium shot. The male model stands confidently against a textured light grey concrete wall. He is wearing the black hooded puffer jacket, zipped halfway up to reveal the white crewneck (2).webp',
            '/projects/cazador-local/53320-KIRMIZI (1)_undefined(53).webp',
            '/projects/cazador-local/10200-KIRMIZI (1)_scene1_car_detail.webp'
        ],
        images: [
            { url: '/projects/cazador-local/10600-SİYAH_2K_4_5_Editorial fashion medium shot. The specific male model with curly brown hair stands confidently against a textured gray concrete wall in a quiet city alley. He is wearing a matte black hooded puffer jacket, slightly (16).webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/10600-SİYAH_2K_Auto_Editorial fashion photography, medium shot. The male model stands confidently against a textured light grey concrete wall. He is wearing the black hooded puffer jacket, zipped halfway up to reveal the white crewneck (2).webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/53320-KIRMIZI (1)_undefined(53).webp', type: 'image', aspect: 'tall' }
        ],
        description: "Cazador'un yeni sezon koleksiyonu için hazırlanan ürün çekimleri.",
        tags: ['E-Ticaret', 'Fashion']
    },
    {
        id: 3,
        title: 'Premium Streetwear',
        client: 'Cazador',
        category: 'Social Media',
        thumbnail: '/projects/cazador-local/53320-EKRU_2K_4_5_Professional fashion catalog photo of the specific Caucasian male model provided, walking confidently down a historic Nişantaşı street in winter. He is wearing a premium white crewneck sweatshirt with \'CAZADOR\' outl (6).jpg',
        thumbnailType: 'single',
        images: [
            { url: '/projects/cazador-local/53320-EKRU_2K_4_5_Professional fashion catalog photo of the specific Caucasian male model provided, walking confidently down a historic Nişantaşı street in winter. He is wearing a premium white crewneck sweatshirt with \'CAZADOR\' outl (6).jpg', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/10200-KIRMIZI (1)_scene1_car_detail.webp', type: 'image', aspect: 'wide' },
            { url: '/projects/cazador-local/10400-SİYAH (1)_scene_1_pier_leaning.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Sosyal medya için kurgulanan sokak stili çekimler.",
        tags: ['Instagram', 'Lifestyle']
    },
    {
        id: 4,
        title: 'Atmosferik Kış Hikayesi',
        client: 'Cazador',
        category: 'Video',
        thumbnail: '/projects/cazador-local/13300-Siyah (8)_scene_1_pose_4(2).webp',
        thumbnailType: 'single',
        images: [
            { url: '/projects/cazador-local/VID_20251125_203429_529.mp4', type: 'video', aspect: 'tall' },
            { url: '/projects/cazador-local/13300-Siyah (8)_scene_1_pose_4(2).webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/13300-Siyah (8)_scene_28_exterior_night_cabin_glow.webp', type: 'image', aspect: 'wide' }
        ],
        description: "Kışın ruhunu anlatan sinematik video prodüksiyonu.",
        tags: ['Video', 'Cinematic']
    },
    {
        id: 5,
        title: 'Deep Blue Explorations',
        client: 'Oceanic',
        category: 'Doğa',
        thumbnail: 'https://cdn.pixabay.com/photo/2016/11/29/09/49/underwater-1868814_1280.jpg',
        thumbnailType: 'collage',
        collageImages: [
            'https://cdn.pixabay.com/photo/2016/11/29/09/49/underwater-1868814_1280.jpg',
            'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg',
            'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg',
            'https://cdn.pixabay.com/photo/2023/03/13/13/21/colorful-7849818_1280.jpg'
        ],
        images: [
            { url: 'https://cdn.pixabay.com/video/2021/11/14/95662-646702662_large.mp4', type: 'video', aspect: 'wide' },
            { url: 'https://cdn.pixabay.com/photo/2016/11/29/09/49/underwater-1868814_1280.jpg', type: 'image', aspect: 'wide' }
        ],
        description: "Okyanusun derinliklerindeki gizemli dünya.",
        tags: ['Underwater', 'Nature']
    },
    {
        id: 6,
        title: 'Neon Nights',
        client: 'Cyber Studio',
        category: 'Teknoloji',
        thumbnail: 'https://cdn.pixabay.com/photo/2016/11/29/05/27/night-1867540_1280.jpg',
        thumbnailType: 'single',
        images: [
            { url: 'https://cdn.pixabay.com/video/2020/07/25/45607-440478144_large.mp4', type: 'video', aspect: 'wide' },
            { url: 'https://cdn.pixabay.com/photo/2016/11/29/05/27/night-1867540_1280.jpg', type: 'image', aspect: 'wide' }
        ],
        description: "Neon ışıkları altında dijital dünya.",
        tags: ['Neon', 'Night']
    },
    {
        id: 17,
        title: 'B2B Katalog Otomasyonu',
        client: 'Cazador',
        category: 'E-Ticaret',
        thumbnail: '/projects/cazador-local/iasmag.webp',
        thumbnailType: 'single',
        images: [
            { url: '/projects/cazador-local/iasmag.webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/imaj g2örsel1.webp', type: 'image', aspect: 'wide' },
            { url: '/projects/cazador-local/imaj görsel12.webp', type: 'image', aspect: 'tall' }
        ],
        description: "B2B platformları için otomatik katalog oluşturma süreçleri.",
        tags: ['B2B', 'Automation']
    }
];

const Islerimiz = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // Cursor Motion
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const handleMouseMove = (e: React.MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    const filteredProjects = selectedCategory === 'Tümü'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedProject]);

    return (
        <MainLayout showFooter={false} transparentHeader={true} headerLightText={true}>
            {/* ── Hero Section (Video Background) ── */}
            <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-black overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        src="https://cdn.pixabay.com/video/2024/02/09/199958-911694865_large.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-blue-400">
                            YAPTIĞIMIZ İŞLER
                        </p>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-8 leading-tight">
                            Yaratıcılık <br />
                            <span className="not-italic text-blue-500">işe yarar</span>
                        </h1>

                        <button
                            onClick={togglePlay}
                            className="bg-white/10 backdrop-blur-md border border-white/30 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all duration-300 group"
                        >
                            {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-white rounded-full" />
                    </div>
                </motion.div>
            </div>

            {/* ─── SUBTITLE & STATS ─── */}
            <Section mood="light" width="narrow">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl lg:text-3xl text-center text-gray-700 leading-relaxed font-light"
                >
                    Türkiye'nin lider markalarına, AI destekli yaratıcı çözümlerle
                    hız ve kalitede fark yaratan prodüksiyonlar sunuyoruz — konseptten
                    uygulamaya, sonuca kadar.
                </motion.p>
            </Section>

            <Section mood="gray" className="!py-12 bg-gray-50/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── Category Filter Hub ── */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 py-6 overflow-x-auto">
                <div className="flex justify-center min-w-max px-4">
                    <div className="flex gap-2 md:gap-4 bg-gray-100/50 p-1.5 rounded-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-black text-white shadow-lg'
                                    : 'text-gray-500 hover:text-black hover:bg-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Portfolio Grid ── */}
            <div className="bg-white min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layoutId={`project-container-${project.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`group relative cursor-pointer overflow-hidden bg-white ${project.thumbnailType === 'collage' ? 'md:col-span-1 aspect-square' : 'aspect-[4/3] md:aspect-auto md:h-[600px]'
                                    }`}
                                onClick={() => setSelectedProject(project)}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {project.thumbnailType === 'collage' && project.collageImages ? (
                                    <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-gray-100">
                                        {project.collageImages.map((img, i) => (
                                            <div key={i} className="relative w-full h-full overflow-hidden">
                                                <img
                                                    src={img}
                                                    alt={`${project.title} - ${i}`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        className="w-full h-full"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                                    >
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                )}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Info */}
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 text-white w-full">
                                    <motion.h3
                                        layoutId={`project-title-${project.id}`}
                                        className="text-3xl md:text-4xl font-serif italic mb-2"
                                    >
                                        {project.client}
                                    </motion.h3>
                                    <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/70">
                                        {project.category}
                                    </p>
                                </div>

                                {/* Hover Reveal Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                                    <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs uppercase tracking-widest shadow-xl">
                                        İncele
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* ── Project Modal (Redesigned - Superside Style) ── */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all group"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            <span className="sr-only">Kapat</span>
                        </motion.button>

                        <motion.div
                            layoutId={`project-container-${selectedProject.id}`}
                            className="w-full h-full overflow-y-auto custom-scrollbar"
                        >
                            <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
                                {/* Header Info */}
                                <div className="text-center mb-16 md:mb-24">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-6"
                                    >
                                        {selectedProject.category}
                                    </motion.p>
                                    <motion.h2
                                        layoutId={`project-title-${selectedProject.id}`}
                                        className="text-5xl md:text-7xl lg:text-9xl font-serif italic text-white mb-8"
                                    >
                                        {selectedProject.client}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
                                    >
                                        {selectedProject.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-wrap justify-center gap-2 mt-8"
                                    >
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-white/60 text-xs uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Media Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                    {selectedProject.images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-10%" }}
                                            transition={{ delay: idx * 0.1 }}
                                            className={`relative rounded-none md:rounded-lg overflow-hidden ${img.aspect === 'wide' ? 'md:col-span-2 aspect-video' : 'aspect-[3/4]'
                                                }`}
                                        >
                                            {img.type === 'video' ? (
                                                <video
                                                    src={img.url}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <img
                                                    src={img.url}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Next Project CTA */}
                                <div className="mt-32 text-center">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-white fill-current hover:text-blue-500 transition-colors duration-300"
                                    >
                                        <div className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-50">Back to Grid</div>
                                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all">
                                            <X size={24} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <IslerimizFooter />

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 0px;
                }
                .custom-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* ── Custom Cursor ── */}
            <motion.div
                className="fixed top-0 left-0 w-24 h-24 bg-gray-400/80 backdrop-blur-sm rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white font-bold text-sm tracking-widest uppercase"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1 : 0,
                    opacity: isHovering ? 1 : 0
                }}
            >
                İncele
            </motion.div>
        </MainLayout>
    );
};

const IslerimizFooter = () => {
    return (
        <section className="relative bg-[#02211e] text-white overflow-hidden pt-32 pb-16">
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Footer Background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02312d] via-[#02211e]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight">
                        Markanı <span className="text-blue-400 not-italic uppercase font-bold tracking-tighter">Geleceğe</span> taşıyalım.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
                        Yapay zeka prodüksiyonu ile tanışın. Süreçleri hızlandırın, maliyetleri düşürün ve etkileyici sonuçlar alın.
                    </p>

                    <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-6 bg-white text-black rounded-full text-sm font-bold tracking-widest uppercase hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-3 group">
                            Proje Başlat
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-12 py-6 bg-transparent border border-white/20 text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300">
                            Tanıtım Sunumunu Gör
                        </button>
                    </div>
                </motion.div>

                <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    <div>© 2026 PIKSELAI PRODUCTION. TÜM HAKLARI SAKLIDIR.</div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                            MODA PRODÜKSİYONU <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                            AI FOTOĞRAF <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                            SOSYAL MEDYA <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Islerimiz;
