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
        thumbnailType: 'single',
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
        thumbnailType: 'single',
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
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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
                                className={`group relative cursor-pointer overflow-hidden bg-white aspect-[4/3] md:aspect-auto md:h-[600px]`}
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
                                        className="text-3xl md:text-5xl font-serif mb-2"
                                    >
                                        {project.client} <span className="text-white/50 text-2xl font-sans inline-block align-middle">+</span>
                                    </motion.h3>
                                    <p className="text-xs md:text-xs tracking-wider text-white/70">
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
                        onMouseMove={(e) => {
                            setCursorPos({ x: e.clientX, y: e.clientY });
                        }}
                    >
                        {/* Custom Cursor */}
                        <motion.div
                            className="fixed pointer-events-none z-[100]"
                            animate={{ x: cursorPos.x - (cursorType === 'exit' ? 50 : 12), y: cursorPos.y - (cursorType === 'exit' ? 50 : 12) }}
                            transition={{ type: 'tween', duration: 0.05, ease: 'linear' }}
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
                                            className="text-3xl md:text-5xl font-serif italic text-white mb-1"
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
