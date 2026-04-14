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
    thumbnailType?: 'single'; // Removed 'collage' for grid display
    collageImages?: string[]; // Array of 4 images if thumbnailType is 'collage'
    images: ProjectImage[];
    description: string;
    tags: string[];
    bgColor?: string;
}

/* ── Mock Data ── */
const categories = ['Tümü', 'AI Fotoğraf', 'E-Ticaret', 'Social Media', 'Ürün Fotoğrafçılığı', 'Sanal Manken'];

const stats = [
    { value: '500+', label: 'Tamamlanan Proje' },
    { value: '50+', label: 'Mutlu Marka' },
    { value: '%80', label: 'Maliyet Tasarrufu' },
    { value: '24-48s', label: 'Teslimat Süresi' },
];

const projects: Project[] = [
    {
        id: 1,
        title: 'AI Kış Kampanyası',
        client: 'Cazador',
        category: 'AI Fotoğraf',
        thumbnail: '/sosyal_medya_resimler/cazador/cazador1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/projects/cazador-local/shopify-migration.mp4', type: 'video', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/cazador/cazador1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/cazador/cazador2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/cazador/cazador3.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/cazador/cazador4.webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/AI-cazador.webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/katalog-cazador.webp', type: 'image', aspect: 'tall' },
            { url: '/projects/cazador-local/katalog-hero.webp', type: 'image', aspect: 'wide' },
            { url: '/projects/cazador-local/instagram-cazador.webp', type: 'image', aspect: 'tall' },
            { url: '/e_ticaret_images/22_pernod_ricard_2k_202602210105.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Cazador için tamamen yapay zeka ile üretilen dış mekan kış koleksiyonu çekimleri. Stüdyo ve manken olmadan, AI ile fotorealistik editorial görseller.",
        tags: ['AI', 'Moda', 'Outdoor'],
        bgColor: '#1a2a1f'
    },
    {
        id: 2,
        title: 'E-Ticaret Dönüşümü',
        client: 'Cazador',
        category: 'E-Ticaret',
        thumbnail: '/e_ticaret_images/15.webp',
        thumbnailType: 'single',
        images: [
            { url: '/e_ticaret_images/video_e_ticaret.mp4', type: 'video', aspect: 'wide' },
            { url: '/e_ticaret_images/15.webp', type: 'image', aspect: 'wide' },
            { url: '/e_ticaret_images/16.webp', type: 'image', aspect: 'wide' },
            { url: '/e_ticaret_images/11.webp', type: 'image', aspect: 'wide' },
            { url: '/e_ticaret_images/1.webp', type: 'image', aspect: 'tall' },
            { url: '/e_ticaret_images/2.webp', type: 'image', aspect: 'tall' },
            { url: '/e_ticaret_images/3.webp', type: 'image', aspect: 'tall' },
            { url: '/e_ticaret_images/4.webp', type: 'image', aspect: 'tall' },
            { url: '/e_ticaret_images/5.webp', type: 'image', aspect: 'wide' },
            { url: '/e_ticaret_images/19_transformation_optimization_2k_2026022101.webp', type: 'image', aspect: 'wide' }
        ],
        description: "Cazador'un e-ticaret altyapısının uçtan uca dönüşümü. Shopify entegrasyonu, ürün optimize ve satış artırıcı UX iyileştirmeleri.",
        tags: ['Shopify', 'E-Ticaret', 'UX'],
        bgColor: '#0a1628'
    },
    {
        id: 3,
        title: 'AI Moda Çekimleri',
        client: 'Venus',
        category: 'AI Fotoğraf',
        thumbnail: '/sosyal_medya_resimler/venüs/venus2.webp',
        thumbnailType: 'single',
        images: [
            { url: '/sosyal_medya_resimler/venüs/venus1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/venüs/venus2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/venüs/venus3.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/venüs/venus4.webp', type: 'image', aspect: 'tall' },
            { url: '/BLOG/venus/mila-1_image00004_2k_4_5_01_hero_full__2_.webp', type: 'image', aspect: 'tall' },
            { url: '/BLOG/venus/ella-1_1_2k_4_5_03_portrait_mid.webp', type: 'image', aspect: 'tall' },
            { url: '/BLOG/venus/ella-1_1_4k_4_5_02_story_full.webp', type: 'image', aspect: 'wide' },
            { url: '/BLOG/venus/mila-1_image00004_2k_4_5_05_closeup_creative__2_.webp', type: 'image', aspect: 'square' },
            { url: '/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_01_Full_Body.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_02_Full_Body.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Venus için hazırlanan yapay zeka destekli kadın moda koleksiyonu çekimleri. Ayakkabı, çanta ve aksesuar görselleri.",
        tags: ['AI', 'Kadın Moda', 'Aksesuar'],
        bgColor: '#2d1b36'
    },
    {
        id: 4,
        title: 'Mina Drinks Konsept',
        client: 'Mina Drinks',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/sosyal_medya_resimler/mina drinks/mina1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/sosyal_medya_resimler/mina drinks/mina1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/mina drinks/mina2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/mina drinks/mina3.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/mina drinks/mina4.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_3.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_4.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/ca.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Mina Drinks içecek markası için hazırlanan AI destekli yaratıcı ürün görselleri ve sosyal medya konseptleri.",
        tags: ['İçecek', 'Ürün', 'Sosyal Medya'],
        bgColor: '#1c3a13'
    },
    {
        id: 5,
        title: 'CampAndMap Outdoor',
        client: 'CampAndMap',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/sosyal_medya_resimler/camp and map/camp1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/sosyal_medya_resimler/camp and map/camp1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/camp and map/camp2.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/camp and map/camp3.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/camp and map/camp4.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/Camp-imaj_Magic Hamak_4x5_scene_1_shot_1_arrival.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/Camp-imaj_Set1_4x5_scene_1_shot_3_wide.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/CAMPANDMAP LOGO 3_4_5_2K (4) 2.webp', type: 'image', aspect: 'tall' },
            { url: '/BLOG/campandmap/1_2k_4_5_undefined.webp', type: 'image', aspect: 'tall' },
            { url: '/BLOG/campandmap/2_2k_4_5_undefined.webp', type: 'image', aspect: 'tall' },
            { url: '/BLOG/campandmap/1_2k_auto_undefined.webp', type: 'image', aspect: 'wide' }
        ],
        description: "CampAndMap outdoor ekipman markası için AI ile üretilen doğa ve kamp temalı e-ticaret ve sosyal medya ürün görselleri.",
        tags: ['Outdoor', 'Kamp', 'Ürün'],
        bgColor: '#1a2612'
    },
    {
        id: 6,
        title: 'Rossea Eşarp Koleksiyonu',
        client: 'Rossea',
        category: 'AI Fotoğraf',
        thumbnail: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_3.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_4.webp', type: 'image', aspect: 'wide' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_5.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/esarp_6.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Rossea eşarp markası için yapay zeka ile üretilen sanal manken üzerinde ürün çekimleri. Otantik Türk lokasyonlarında editorial tarz.",
        tags: ['Eşarp', 'AI', 'Moda'],
        bgColor: '#2e1a1a'
    },
    {
        id: 7,
        title: 'Ghost Mannequin Sistemleri',
        client: 'Cazador',
        category: 'E-Ticaret',
        thumbnail: '/sosyal_medya_resimler/ghost_v2/1_ön.webp',
        thumbnailType: 'single',
        images: [
            { url: '/sosyal_medya_resimler/ghost_v2/1_ön.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_v2/1_arka.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_v2/3_ön.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_v2/3_arka.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_v2/5_ön.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_v2/5_arka.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_cekim/35195-Kiremit (1).webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_cekim/55035-Siyah (1).webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_cekim/35325-Haki (1).webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ghost_cekim/05810-Hippo Navy Wash (1).webp', type: 'image', aspect: 'tall' }
        ],
        description: "Markaların e-ticaret siteleri için hazırlanan, kıyafet formlarını 3 boyutlu gösteren kusursuz profesyonel ghost mannequin (hayalet manken) çekimleri.",
        tags: ['Ghost', 'Katalog', 'E-Ticaret'],
        bgColor: '#1a1a1a'
    },
    {
        id: 8,
        title: 'Sanal Manken & Modeller',
        client: 'PikselAI',
        category: 'Sanal Manken',
        thumbnail: '/sosyal_medya_resimler/sanal_manken/Anna/Anna-imaj-1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/sosyal_medya_resimler/sanal_manken/Anna/Anna-imaj-1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/sanal_manken/Anna/Anna-imaj-2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/sanal_manken/Anna/Anna-1.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/sanal_manken/Anna/Anna-2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/man_kazak.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_2.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_3.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_4.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_03_Full_Body_Sitting_Step.webp', type: 'image', aspect: 'tall' },
            { url: '/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_04_Close_Up_Side_Profile.webp', type: 'image', aspect: 'square' }
        ],
        description: "PikselAI'ın tescilli sanal manken ajansı. Yüksek çözünürlüklü, anatomik tutarlılığa sahip dijital modeller markalar için özelleştirilerek kullanılıyor.",
        tags: ['Sanal Manken', 'AI', 'Moda'],
        bgColor: '#2a1a2e'
    }
];

const Islerimiz = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorType, setCursorType] = useState<'dot' | 'exit'>('dot');

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
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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
                        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-[#E2FF65]">
                            YAPTIĞIMIZ İŞLER
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-white mb-6 drop-shadow-2xl">
                            Yaratıcılık <br />
                            <span className="italic font-light text-[#E2FF65]">işe yarar</span>
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
            <Section mood="light" width="narrow" className="py-24">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl font-light text-bor-primary-600 leading-relaxed text-center"
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
                            <div className="text-3xl md:text-5xl font-bold text-[#86AA00] mb-2">{stat.value}</div>
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
                                className={`group relative cursor-none overflow-hidden bg-white aspect-[4/3] md:aspect-auto md:h-[600px]`}
                                onClick={() => setSelectedProject(project)}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
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

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Info */}
                                <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full">
                                    <motion.h3
                                        layoutId={`project-title-${project.id}`}
                                        className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-2"
                                    >
                                        {project.client} <span className="text-white/50 text-2xl font-sans inline-block align-middle">+</span>
                                    </motion.h3>
                                    <p className="text-xs md:text-xs tracking-wider text-white/70">
                                        {project.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* ── Project Modal (Redesigned - Superside Style) */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#050505]"
                        style={{ cursor: 'none' }}
                        onMouseMove={handleMouseMove}
                    >
                        {/* Custom Cursor */}
                        <motion.div
                            className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center transform-gpu"
                            style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
                        >
                            {cursorType === 'exit' ? (
                                <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                                    <span className="text-black text-sm font-medium">Çıkış</span>
                                </div>
                            ) : (
                                <div className="w-[24px] h-[24px] rounded-full bg-white shadow-lg" />
                            )}
                        </motion.div>

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all group"
                            style={{ cursor: 'none' }} // Hide native cursor for this button too
                            onMouseEnter={() => setCursorType('exit')}
                            onMouseLeave={() => setCursorType('dot')}
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            <span className="sr-only">Kapat</span>
                        </motion.button>

                        <motion.div
                            layoutId={`project-container-${selectedProject.id}`}
                            className="w-full h-full flex flex-col bg-[#050505]"
                            style={{ cursor: 'none' }}
                        >
                            {/* TOP: Horizontal Photo Strip */}
                            <div
                                className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar"
                                style={{ cursor: 'none' }}
                                onWheel={(e) => {
                                    if (e.currentTarget) {
                                        e.currentTarget.scrollLeft += e.deltaY;
                                    }
                                }}
                            >
                                <div className="h-full px-6 md:px-16 py-6 flex items-center space-x-3 md:space-x-6 min-w-max" style={{ cursor: 'none' }}>

                                    {/* Column 1: Large Wide Block */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="h-full w-[350px] md:w-[600px] shrink-0 relative rounded-xl md:rounded-2xl overflow-hidden bg-blue-900"
                                    >
                                        <img src="https://images.unsplash.com/photo-1572297837096-7fc11c435520?q=80&w=1200&auto=format&fit=crop" alt="Large Intro" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                                        <div className="absolute top-6 left-6 text-white z-10 w-2/3">
                                            <h3 className="text-2xl md:text-3xl font-serif uppercase leading-tight">A Blend <br /> Ahead</h3>
                                        </div>
                                    </motion.div>

                                    {/* Column 2: Two Stacked */}
                                    <div className="h-full w-[220px] md:w-[300px] flex flex-col space-y-3 md:space-y-6 shrink-0">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative"
                                        >
                                            <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=600&auto=format&fit=crop" alt="Square 1" className="w-full h-full object-cover" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative bg-[#c6e9a7]"
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                                <div className="w-20 h-20 md:w-28 md:h-28 bg-black rounded-3xl relative overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" className="absolute -bottom-2 -right-2 w-14 h-14 md:w-18 md:h-18 rounded-full border-4 border-[#c6e9a7] object-cover" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Column 3: One Tall Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="h-full w-[260px] md:w-[350px] shrink-0 relative rounded-xl md:rounded-2xl overflow-hidden"
                                    >
                                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" alt="Tall Portrait" className="w-full h-full object-cover" />
                                    </motion.div>

                                    {/* Column 4: Two Stacked */}
                                    <div className="h-full w-[220px] md:w-[300px] flex flex-col space-y-3 md:space-y-6 shrink-0">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative bg-purple-200 flex items-center justify-center"
                                        >
                                            <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop" alt="Circle Graphic" className="w-full max-w-[100px] aspect-square object-cover rounded-full" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative"
                                        >
                                            <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600&auto=format&fit=crop" alt="Square 2" className="w-full h-full object-cover" />
                                        </motion.div>
                                    </div>

                                    {/* Column 5: Wide Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="h-full w-[400px] md:w-[550px] shrink-0 relative rounded-xl md:rounded-2xl overflow-hidden"
                                    >
                                        <img src="https://images.unsplash.com/photo-1544026261-71fbdfb548eb?q=80&w=1200&auto=format&fit=crop" alt="Wide Content" className="w-full h-full object-cover" />
                                    </motion.div>

                                    {/* Column 6: Final Stacked Block */}
                                    <div className="h-full w-[260px] md:w-[400px] flex flex-col space-y-3 md:space-y-6 shrink-0">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative"
                                        >
                                            <img src="https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=800&auto=format&fit=crop" alt="Bottom Wide" className="w-full h-full object-cover" />
                                        </motion.div>
                                        <div className="flex-1 flex gap-3 md:gap-6 items-stretch">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.9 }}
                                                className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative bg-[#1a1a1a] p-5 text-white flex flex-col justify-end"
                                            >
                                                <h4 className="text-base font-bold">Details</h4>
                                                <p className="text-xs opacity-50 mt-1">More specs</p>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.0 }}
                                                className="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative"
                                            >
                                                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop" alt="Final Square" className="w-full h-full object-cover" />
                                            </motion.div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* BOTTOM: Fixed Typography Section */}
                            <div
                                className="shrink-0 px-8 md:px-16 py-6 md:py-8 border-t border-white/5"
                                style={{ cursor: 'none' }}
                                onMouseEnter={() => setCursorType('exit')}
                                onMouseLeave={() => setCursorType('dot')}
                                onClick={() => setSelectedProject(null)}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-16 max-w-screen-2xl mx-auto">
                                    {/* Left: Title */}
                                    <div className="shrink-0">
                                        <motion.h2
                                            layoutId={`project-title-${selectedProject.id}`}
                                            className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-1"
                                        >
                                            {selectedProject.client}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-gray-500 text-sm tracking-wide"
                                        >
                                            {selectedProject.title}
                                        </motion.p>
                                    </div>

                                    {/* Right: Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-2xl"
                                    >
                                        {selectedProject.description}
                                    </motion.p>
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
                className="fixed top-0 left-0 w-24 h-24 bg-gray-400/80 backdrop-blur-sm rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white font-bold text-sm tracking-widest uppercase transform-gpu"
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
                    <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-6">
                        Markanı <br className="hidden lg:block" />
                        <span className="italic font-light text-[#E2FF65]">geleceğe taşıyalım.</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
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
