import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, type Variants } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  ArrowRight,
  Clock,
  Camera,
  Layers,
  Sparkles,
  User,
  Image as ImageIcon,
  Layout,
  Target,
  Compass,
  X,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export interface AiProject {
  id: number;
  client: string;
  category: string;
  thumbnail: string;
  description: string;
  spanClass: string;
  aspectClass: string;
  images: string[];
}

const aiProjects: AiProject[] = [
  {
    id: 1,
    client: "Cazador",
    category: "Reklam Yaratıcılığı",
    thumbnail: "/sosyal_medya_resimler/cazador/cazador2.webp",
    description: "Cazador'un yeni sezon koleksiyonu için dinamik ve dikkat çekici sosyal medya kurguları.",
    spanClass: "md:col-span-4",
    aspectClass: "aspect-[3/4]",
    images: ["/sosyal_medya_resimler/cazador/cazador1.webp", "/sosyal_medya_resimler/cazador/cazador2.webp", "/sosyal_medya_resimler/cazador/cazador3.webp", "/sosyal_medya_resimler/cazador/cazador4.webp"]
  },
  {
    id: 2,
    client: "Venüs Ayakkabı",
    category: "Sosyal Medya Çekimleri",
    thumbnail: "/sosyal_medya_resimler/venüs/venus2.webp",
    description: "Venüs Ayakkabı'nın yeni modelleri için etkileşim odaklı reklam kreatifleri.",
    spanClass: "md:col-span-8",
    aspectClass: "aspect-square md:aspect-video",
    images: ["/sosyal_medya_resimler/venüs/venus1.webp", "/sosyal_medya_resimler/venüs/venus2.webp", "/sosyal_medya_resimler/venüs/venus3.webp", "/sosyal_medya_resimler/venüs/venus4.webp"]
  },
  {
    id: 3,
    client: "Camp and Map",
    category: "E-ticaret için Çekimler",
    thumbnail: "/sosyal_medya_resimler/camp and map/camp1.webp",
    description: "Doğa tutkunları için outdoor ruhunu yansıtan etkileyici görsel kurgular.",
    spanClass: "md:col-span-6",
    aspectClass: "aspect-[4/3]",
    images: ["/sosyal_medya_resimler/camp and map/camp1.webp", "/sosyal_medya_resimler/camp and map/camp2.webp", "/sosyal_medya_resimler/camp and map/camp3.webp", "/sosyal_medya_resimler/camp and map/camp4.webp"]
  },
  {
    id: 4,
    client: "Mina Drinks",
    category: "Katalog Çekimleri",
    thumbnail: "/sosyal_medya_resimler/mina drinks/mina1.webp",
    description: "Mina Drinks'in ferahlatıcı kimliğini öne çıkaran yapay zeka destekli görseller.",
    spanClass: "md:col-span-6",
    aspectClass: "aspect-[4/3]",
    images: ["/sosyal_medya_resimler/mina drinks/mina1.webp", "/sosyal_medya_resimler/mina drinks/mina2.webp", "/sosyal_medya_resimler/mina drinks/mina3.webp", "/sosyal_medya_resimler/mina drinks/mina4.webp"]
  }
];

const MANKEN_ASSETS = [
  // Anna
  { name: "Anna", img: "/sosyal_medya_resimler/sanal_manken/Anna/Anna-1.webp" },
  { name: "Anna", img: "/sosyal_medya_resimler/sanal_manken/Anna/Anna-2.webp" },
  { name: "Anna", img: "/sosyal_medya_resimler/sanal_manken/Anna/Anna-imaj-1.webp" },
  { name: "Anna", img: "/sosyal_medya_resimler/sanal_manken/Anna/Anna-imaj-2.webp" },
  // Mike
  { name: "Mike", img: "/sosyal_medya_resimler/sanal_manken/Mike/mike_1.webp" },
  { name: "Mike", img: "/sosyal_medya_resimler/sanal_manken/Mike/mike_2.webp" },
  { name: "Mike", img: "/sosyal_medya_resimler/sanal_manken/Mike/mike_3.webp" },
  { name: "Mike", img: "/sosyal_medya_resimler/sanal_manken/Mike/mike_4.webp" },
  // Nia
  { name: "Nia", img: "/sosyal_medya_resimler/sanal_manken/Nia/Nia-1.webp" },
  { name: "Nia", img: "/sosyal_medya_resimler/sanal_manken/Nia/Nia-2.webp" },
  { name: "Nia", img: "/sosyal_medya_resimler/sanal_manken/Nia/Nia-imaj-4.webp" },
  { name: "Nia", img: "/sosyal_medya_resimler/sanal_manken/Nia/Nia-imaj-6.webp" },
  // Nora
  { name: "Nora", img: "/sosyal_medya_resimler/sanal_manken/Nora/Nora-1.webp" },
  { name: "Nora", img: "/sosyal_medya_resimler/sanal_manken/Nora/Nora-3.webp" },
  { name: "Nora", img: "/sosyal_medya_resimler/sanal_manken/Nora/Nora-1_imaj.webp" },
  { name: "Nora", img: "/sosyal_medya_resimler/sanal_manken/Nora/Nora-1_imaj_2.webp" },
  // Sora
  { name: "Sora", img: "/sosyal_medya_resimler/sanal_manken/Sora/sora_1.webp" },
  { name: "Sora", img: "/sosyal_medya_resimler/sanal_manken/Sora/sora_3.webp" },
  { name: "Sora", img: "/sosyal_medya_resimler/sanal_manken/Sora/Sora-imaj-11.webp" },
  { name: "Sora", img: "/sosyal_medya_resimler/sanal_manken/Sora/Sora-imaj-5.webp" },
  // Zoe
  { name: "Zoe", img: "/sosyal_medya_resimler/sanal_manken/Zoe/Zoe-1.webp" },
  { name: "Zoe", img: "/sosyal_medya_resimler/sanal_manken/Zoe/Zoe-5.webp" },
  { name: "Zoe", img: "/sosyal_medya_resimler/sanal_manken/Zoe/Zoe-imaj-1.webp" },
  { name: "Zoe", img: "/sosyal_medya_resimler/sanal_manken/Zoe/Zoe-imaj-5.webp" }
];

const MankenRow = ({ items, reverse = false, duration = 40 }: { items: typeof MANKEN_ASSETS, reverse?: boolean, duration?: number }) => (
  <div className="flex gap-4 mb-4 overflow-hidden mask-fade">
    <motion.div
      initial={{ x: reverse ? "-50%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 flex-nowrap"
    >
      {[...items, ...items].map((item, i) => (
        <div key={i} className="relative w-[280px] h-[380px] flex-shrink-0 group rounded-3xl overflow-hidden border border-white/10">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h4 className="text-white text-xl font-display font-normal italic lowercase">{item.name}</h4>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);



const GHOST_ASSETS = [
  { img1: "/sosyal_medya_resimler/ghost_v2/1_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/1_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/2_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/2_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/3_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/3_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/4_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/4_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/5_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/5_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/6_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/6_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/7_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/7_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/8_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/8_arka.webp" },
  { img1: "/sosyal_medya_resimler/ghost_v2/9_ön.webp", img2: "/sosyal_medya_resimler/ghost_v2/9_arka.webp" }
];

const LIFESTYLE_PROJECTS = [
  {
    name: "Ella-1 Full Body",
    images: [
      "/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_01_Full_Body.webp",
      "/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_01_Full_Body_Power_Stride (1).webp",
      "/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_02_Full_Body.webp",
      "/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_03_Full_Body_Sitting_Step.webp",
      "/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_04_Close_Up_Side_Profile.webp",
      "/sosyal_medya_resimler/konsept/1/Ella-1_1_2K_4_5_04_Mid_Shot_mid_walk_legs.webp"
    ]
  },
  {
    name: "Mila-1 Studio",
    images: [
      "/sosyal_medya_resimler/konsept/2/Mila-1_image00004_2K_4_5_01_Hero_Full (2).webp",
      "/sosyal_medya_resimler/konsept/2/Mila-1_image00004_2K_4_5_02_Story_Full (2).webp",
      "/sosyal_medya_resimler/konsept/2/Mila-1_image00004_2K_4_5_03_Portrait_Mid (2).webp",
      "/sosyal_medya_resimler/konsept/2/Mila-1_image00004_2K_4_5_04_CloseUp_Knee (2).webp"
    ]
  },
  {
    name: "Ella-1 Portrait",
    images: [
      "/sosyal_medya_resimler/konsept/3/Ella-1_1_2K_4_5_02_Story_Full.webp",
      "/sosyal_medya_resimler/konsept/3/Ella-1_1_2K_4_5_03_Portrait_Mid (1).webp",
      "/sosyal_medya_resimler/konsept/3/Ella-1_1_2K_4_5_03_Portrait_Mid.webp",
      "/sosyal_medya_resimler/konsept/3/Ella-1_1_2K_4_5_04_CloseUp_Knee.webp"
    ]
  },
  {
    name: "Anna-1 Cinematic",
    images: [
      "/sosyal_medya_resimler/konsept/4/Anna-1_1_2K_4_5_02_Full_Body_Sitting (3).webp",
      "/sosyal_medya_resimler/konsept/4/Anna-1_1_2K_4_5_02_Full_Body_Sitting (4).webp",
      "/sosyal_medya_resimler/konsept/4/Anna-1_1_2K_4_5_03_Full_Body_Leaning (2).webp",
      "/sosyal_medya_resimler/konsept/4/Anna-1_1_2K_4_5_06_Extreme_Close_Up_Crossed_Ankles.webp"
    ]
  },
  {
    name: "20220-SİYAH Pro",
    images: [
      "/sosyal_medya_resimler/konsept/5/20220-SİYAH_2K_4_5_scene_02_shot_07_hero.webp",
      "/sosyal_medya_resimler/konsept/5/20220-SİYAH_2K_4_5_scene_02_shot_08_macro.webp",
      "/sosyal_medya_resimler/konsept/5/20220-SİYAH_2K_4_5_scene_02_shot_09_action.webp",
      "/sosyal_medya_resimler/konsept/5/20220-SİYAH_2K_4_5_scene_02_shot_10_profile.webp",
      "/sosyal_medya_resimler/konsept/5/20220-SİYAH_2K_4_5_scene_02_shot_12_american.webp"
    ]
  },
  {
    name: "10200-KIRMIZI Life",
    images: [
      "/sosyal_medya_resimler/konsept/6/10200-KIRMIZI_2K_2_3_shot_02_macro.webp",
      "/sosyal_medya_resimler/konsept/6/10200-KIRMIZI_2K_2_3_shot_03_lifestyle.webp",
      "/sosyal_medya_resimler/konsept/6/10200-KIRMIZI_2K_2_3_shot_04_side_profile.webp",
      "/sosyal_medya_resimler/konsept/6/10200-KIRMIZI_2K_2_3_shot_06_american_plan.webp"
    ]
  }
];

// --- Bento Detail Overlay (Exact Match with Islerimiz.tsx) ---
const ExpandableProductShowcase = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Body Scroll Lock logic
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIdx]);

  const projects = [
    {
      id: 1,
      title: "Mina Drinks",
      category: "GASTRONOMİ",
      desc: "Gastronomik kurgu ve yüksek çözünürlüklü detaylar.",
      mainImg: "/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_1.webp",
      gridImgs: [
        "/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_1.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_2.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_3.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/mina_drink_4.webp",
      ]
    },
    {
      id: 2,
      title: "ROSSEA",
      category: "MODA & TEKSTİL",
      desc: "Tekstil dokusunu ve ışık oyunlarını vurgulayan stüdyo çekimi.",
      mainImg: "/sosyal_medya_resimler/ürün_fotoğraf/esarp_1.webp",
      gridImgs: [
        "/sosyal_medya_resimler/ürün_fotoğraf/esarp_1.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/esarp_2.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/esarp_3.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/esarp_4.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/esarp_5.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/esarp_6.webp",
      ]
    },
    {
      id: 3,
      title: "CAZADOR Kazak",
      category: "ERKEK GİYİM",
      desc: "Modern erkek giyim siluetleri ve profesyonel mekan kurgusu.",
      mainImg: "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak.webp",
      gridImgs: [
        "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_2.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_3.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_4.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_5.webp",
      ]
    },
    {
      id: 4,
      title: "CAMP and MAP",
      category: "LIFESTYLE",
      desc: "Doğa ile ürünün kusursuz uyumu ve atmosferik çekimler.",
      mainImg: "/sosyal_medya_resimler/ürün_fotoğraf/ca.webp",
      gridImgs: [
        "/sosyal_medya_resimler/ürün_fotoğraf/ca.webp",
        "/sosyal_medya_resimler/ürün_fotoğraf/CAMPANDMAP%20LOGO%203_4_5_2K%20(4)%202.jpg",
        "/sosyal_medya_resimler/ürün_fotoğraf/Camp-imaj_Magic%20Hamak_4x5_scene_1_shot_1_arrival.png",
        "/sosyal_medya_resimler/ürün_fotoğraf/Camp-imaj_Set1_4x5_scene_1_shot_3_wide.webp",
      ]
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      {/* Grid of Initial Cards (1.5x Enlarged: Shorter and Wider) */}
      <div className="grid grid-cols-2 gap-6 md:gap-10 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedIdx(idx)}
            className="relative group cursor-pointer rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#1A1A1A] aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/2]"
          >
            <motion.img
              layoutId={`img-${project.id}`}
              src={project.mainImg}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Dynamic Label */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="py-3 px-5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:bg-[#D97941] transition-all flex items-center justify-between">
                <h4 className="text-sm md:text-md font-display italic text-white uppercase tracking-[0.2em]">{project.title}</h4>
                <Plus size={16} className="text-white/40 group-hover:text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#050505] flex flex-col"
            style={{ cursor: 'none' }}
            onMouseMove={(e) => {
              const cursor = document.getElementById('custom-modal-cursor');
              if (cursor) {
                cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
              }
            }}
          >
            {/* Custom Cursor */}
            <div id="custom-modal-cursor" className="fixed w-6 h-6 rounded-full bg-white shadow-lg pointer-events-none z-[1000] transition-transform duration-75" style={{ top: 0, left: 0 }} />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed top-8 right-8 z-[1001] p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all group"
              style={{ cursor: 'none' }}
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            <motion.div
              layoutId={`project-${projects[selectedIdx].id}`}
              className="w-full h-full flex flex-col bg-[#050505]"
              style={{ cursor: 'none' }}
            >
              {/* TOP: Photo Strip (Optimized Sizes) */}
              <div
                className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar"
                style={{ cursor: 'none' }}
                onWheel={(e) => { if (e.currentTarget) e.currentTarget.scrollLeft += e.deltaY; }}
              >
                <div className="h-full px-6 md:px-16 py-6 flex items-center space-x-6 md:space-x-8 min-w-max" style={{ cursor: 'none' }}>

                  {/* 1. Large Intro Block */}
                  <motion.div className="h-full w-[450px] md:w-[800px] shrink-0 relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-[#1A1A1A]">
                    <motion.img layoutId={`img-${projects[selectedIdx].id}`} src={projects[selectedIdx].mainImg} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                  </motion.div>

                  {/* 2. Stacked Normal Block (Removed Circles) */}
                  <div className="h-full w-[300px] md:w-[450px] flex flex-col space-y-6 md:space-y-8 shrink-0">
                    <div className="flex-1 rounded-2xl md:rounded-[3rem] overflow-hidden relative shadow-2xl">
                      <img src={projects[selectedIdx].gridImgs[1 % projects[selectedIdx].gridImgs.length]} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-2xl md:rounded-[3rem] overflow-hidden relative shadow-2xl bg-white/5">
                      <img src={projects[selectedIdx].gridImgs[2 % projects[selectedIdx].gridImgs.length]} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* 3. High Impact Wide Block */}
                  <motion.div className="h-full w-[450px] md:w-[850px] shrink-0 relative rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src={projects[selectedIdx].gridImgs[3 % projects[selectedIdx].gridImgs.length]} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* 4. Second Stacked Block */}
                  <div className="h-full w-[280px] md:w-[420px] flex flex-col space-y-6 md:space-y-8 shrink-0">
                    <div className="flex-1 rounded-2xl md:rounded-[3rem] overflow-hidden relative shadow-2xl">
                      <img src={projects[selectedIdx].gridImgs[0]} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 rounded-2xl md:rounded-[3rem] overflow-hidden relative shadow-2xl">
                      <img src={projects[selectedIdx].gridImgs[4 % projects[selectedIdx].gridImgs.length] || projects[selectedIdx].mainImg} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* 5. Ultra Wide Cinematic Block */}
                  <motion.div className="h-full w-[600px] md:w-[1100px] shrink-0 relative rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src={projects[selectedIdx].gridImgs[1 % projects[selectedIdx].gridImgs.length]} className="w-full h-full object-cover" />
                  </motion.div>

                </div>
              </div>

              {/* BOTTOM: Compact Typography Section */}
              <div className="shrink-0 px-8 md:px-24 py-4 md:py-6 border-t border-white/5 bg-[#050505]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-16 max-w-screen-2xl mx-auto">
                  <div className="shrink-0">
                    <h2 className="text-4xl md:text-6xl font-display italic leading-none text-white">{projects[selectedIdx].title.split(' ')[0]}</h2>
                    <p className="text-white/30 text-xs font-bold tracking-[0.4em] uppercase mt-2">{projects[selectedIdx].title.split(' ').slice(1).join(' ')}</p>
                  </div>
                  <p className="text-white/50 text-base md:text-xl font-light italic max-w-2xl text-right">
                    {projects[selectedIdx].desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 0px; }
                .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
    </div>
  );
};

// --- Ghost Mannequin Showcase: Aesthetic Studio ---
const GhostShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % GHOST_ASSETS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const current = GHOST_ASSETS[index];
  const next = GHOST_ASSETS[(index + 1) % GHOST_ASSETS.length];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* Focused Multi-Product Showcase */}
      <div className="relative z-10 flex flex-col gap-12 items-center justify-center w-full h-full p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`multi-pair-${index}`}
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -100 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full h-full items-center justify-center"
          >
            {/* Product 1 */}
            <div className="flex flex-col items-center group scale-125 md:scale-[1.6]">
              <div className="flex w-full h-full items-center justify-center overflow-hidden">
                <img src={current.img1} className="w-1/2 h-full object-contain" alt="" />
                <img src={current.img2} className="w-1/2 h-full object-contain" alt="" />
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col items-center group scale-125 md:scale-[1.6] transform md:translate-y-24">
              <div className="flex w-full h-full items-center justify-center overflow-hidden">
                <img src={next.img1} className="w-1/2 h-full object-contain" alt="" />
                <img src={next.img2} className="w-1/2 h-full object-contain" alt="" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const MankenShowcase = () => {
  // Split assets into 3 different starting flows for variety
  const row1 = [...MANKEN_ASSETS];
  const row2 = [...MANKEN_ASSETS.slice(8), ...MANKEN_ASSETS.slice(0, 8)];
  const row3 = [...MANKEN_ASSETS.slice(16), ...MANKEN_ASSETS.slice(0, 16)];

  return (
    <div className="relative w-full py-8 md:py-16 overflow-hidden">
      <MankenRow items={row1} reverse={true} duration={40} />
      <MankenRow items={row2} reverse={false} duration={45} />
      <MankenRow items={row3} reverse={true} duration={50} />

      {/* Side Overlays to blend scrolling borders */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#D97941] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#D97941] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// --- Lifestyle Showcase: Moodboard Grid (Project Synchronized) ---
const LifestyleShowcase = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectIndex(prev => (prev + 1) % LIFESTYLE_PROJECTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const project = LIFESTYLE_PROJECTS[projectIndex];
  const imgs = project.images;

  return (
    <div className="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-6 p-4 md:p-8 bg-[#F4EFE6]">
      <AnimatePresence mode="wait">
        <motion.div
          key={`p1-${projectIndex}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="col-span-1 row-span-2 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl"
        >
          <img src={imgs[0]} className="w-full h-full object-cover" alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`p2-${projectIndex}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl"
        >
          <img src={imgs[1 % imgs.length]} className="w-full h-full object-cover" alt="" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`p3-${projectIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-2 border-[#D97941]/30"
        >
          <img src={imgs[2 % imgs.length]} className="w-full h-full object-cover" alt="" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AiProduction = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProject, setSelectedProject] = useState<AiProject | null>(null);
  const [cursorType, setCursorType] = useState<'dot' | 'exit'>('dot');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  return (
    <div className={`font-sans min-h-screen selection:bg-black selection:text-white`}>
      <Header />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 px-6 md:px-16 lg:px-24 overflow-hidden min-h-screen flex items-center bg-black">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80 brightness-[0.7] contrast-[1.1] scale-[1.15] translate-y-8">
            <source src="/as.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#D97941]/20 via-transparent to-transparent z-[1] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[38rem]">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#F4EFE6] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
                  <Sparkles size={14} className="opacity-80 shrink-0" />
                  YAPAY ZEKA DESTEKLİ ÜRETİM
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h1 className="text-[3.5rem] md:text-6xl lg:text-[6.5rem] font-display font-normal italic leading-[0.95] tracking-tight mb-8 text-[#F4EFE6]">
                    Fiziksel çekim <br />
                    <span className="not-italic text-white font-normal underline decoration-[#D97941]/50 underline-offset-[12px]">devri kapandı</span>
                  </h1>
                </motion.div>
                <motion.p className="opacity-80 md:text-xl font-light leading-relaxed max-w-md mb-10 text-[#F4EFE6]">
                  Stüdyo maliyetlerini ve lojistik dertleri unutun. Yeni nesil AI prodüksiyon ile her kampanyanızı dakikalar içinde hazırlayın.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => navigate('/iletisim')} className="bg-[#D97941] text-[#1A1A1A] hover:bg-[#C46931] transition-all duration-300 rounded-full px-10 py-5 text-base font-bold flex items-center justify-center gap-3 w-fit group shadow-2xl">
                    Demoyu Başlat <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-12 md:h-16 bg-[#D97941] bg-gradient-to-b from-transparent to-[#F4EFE6]" />

        {/* 2. VALUE PROPS */}
        <section className={`py-12 md:py-16 flex items-center bg-[#F4EFE6]`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16 md:mb-24">
              <motion.h2 className="text-5xl md:text-7xl font-display font-normal italic text-[#1A1A1A] mb-10 leading-tight">Zamanın ötesinde <br /><span className="not-italic font-normal">bir prodüksiyon akışı.</span></motion.h2>
              <motion.p className="text-[#1A1A1A] opacity-60 max-w-3xl mx-auto text-xl font-light">Eski usul çekimlerin yarattığı tüm engelleri ortadan kaldırın. Verimliliği merkeze alan bir vizyonla markanızı büyütün.</motion.p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                { icon: <Clock size={40} />, t: "Eşi Benzeri Olmayan Hız", d: "Sektördeki en hızlı üretim döngüsü. Fikirden paylaşıma sadece saatler içinde geçiş yapın." },
                { icon: <Layers size={40} />, t: "Kusursuz Devamlılık", d: "Yapay zeka modellerimiz her mecrada aynı görsel dili ve karakteri %100 doğrulukla korur." },
                { icon: <Camera size={40} />, t: "Kuralsız Yaratıcılık", d: "Mekan, bütçe veya teknik kısıtlamalar olmadan istediğiniz her türlü atmosferi oluşturun." }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center p-12 rounded-[3rem] bg-black/5 hover:bg-black/10 transition-colors group">
                  <div className="w-24 h-24 rounded-[2rem] bg-black text-[#F4EFE6] flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-2xl font-display font-normal italic mb-4 text-[#1A1A1A]">{item.t}</h3>
                  <p className="text-[#1A1A1A] opacity-50 leading-relaxed font-light">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SERVICES */}
        <div className="h-12 md:h-16 bg-[#F4EFE6] bg-gradient-to-b from-transparent to-[#D97941]" />
        <section className="py-12 md:py-24 overflow-hidden flex flex-col items-center bg-[#D97941]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl bg-black text-[#F4EFE6]">
                    <User size={24} />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 text-[#1A1A1A]">Özel Yüz Tasarımı</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-display font-normal italic leading-tight text-[#1A1A1A]">Sanal Manken <br /><span className="not-italic font-normal">Kütüphanesi</span></h3>
              </div>
              <p className="text-xl leading-relaxed font-light text-[#1A1A1A] opacity-70 max-w-lg">Markanıza özel bir AI manken tasarlayın. Her kampanyada tutarlı yüz, profesyonel pozlar ve markanıza özel stil ile personanızı güçlendirin.</p>
            </div>
          </div>
          <div className="w-full"><MankenShowcase /></div>
          <div className="mt-16"><button onClick={() => navigate('/iletisim')} className="group flex items-center gap-4 font-bold text-lg hover:gap-6 transition-all w-fit p-4 px-12 rounded-full border border-black/10 hover:bg-black hover:text-[#F4EFE6] text-[#1A1A1A]">Detaylı Bilgi Al <ArrowRight size={22} /></button></div>
        </section>

        <div className="h-12 md:h-16 bg-[#D97941] bg-gradient-to-b from-transparent to-[#F4EFE6]" />
        <section className="py-12 md:py-24 overflow-hidden flex items-center bg-[#F4EFE6]">
          <div className="max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-20 lg:gap-32 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative lg:order-2 h-auto md:h-[900px] w-full flex items-center">
                <ExpandableProductShowcase />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:order-1">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl bg-[#D97941] text-[#F4EFE6]">
                      <ImageIcon size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 text-[#1A1A1A]">Stüdyo Kalitesi</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal italic mb-8 leading-tight text-[#1A1A1A]">Ürün <br /><span className="not-italic font-normal">Fotoğrafçılığı</span></h3>
                  <p className="text-xl leading-relaxed font-light mb-12 max-w-lg text-[#1A1A1A] opacity-70">Stüdyo ortamına gerek kalmadan, sadece ürününüzün bir karesiyle dünya standartlarında, yüksek çözünürlüklü ürün fotoğrafları üretiyoruz.</p>
                  <button onClick={() => navigate('/iletisim')} className="group flex items-center gap-4 font-bold text-lg hover:gap-6 transition-all w-fit p-4 px-12 rounded-full border border-black/10 hover:bg-black hover:text-[#F4EFE6] text-[#1A1A1A]">Detaylı Bilgi Al <ArrowRight size={22} /></button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="h-12 md:h-16 bg-[#F4EFE6] bg-gradient-to-b from-transparent to-[#D97941]" />
        <section className="py-12 md:py-24 overflow-hidden flex items-center bg-[#D97941]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative lg:order-1">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl bg-black text-[#F4EFE6]">
                      <Layout size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 text-[#1A1A1A]">3D Form & Detay</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-display font-normal italic mb-8 leading-tight text-[#1A1A1A]">Ghost <br /><span className="not-italic font-normal">Mannequin</span></h3>
                  <p className="text-xl leading-relaxed font-light mb-12 max-w-lg text-[#1A1A1A] opacity-70">Ürünlerinizi 3D formda, sanki görünmez bir manken üzerindeymiş gibi sergileyin. İç dikiş detayları ve dikiş detaylarıyla gerçekliği yansıtın.</p>

                  <div className="space-y-4">
                    <button onClick={() => navigate('/iletisim')} className="group flex items-center gap-4 font-bold text-lg hover:gap-6 transition-all w-fit p-4 px-12 rounded-full border border-black/10 hover:bg-black hover:text-[#F4EFE6] text-[#1A1A1A]">Detaylı Bilgi Al <ArrowRight size={22} /></button>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:order-2 h-[600px] md:h-auto flex items-center justify-center">
                <GhostShowcase />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-12 md:h-16 bg-[#D97941] bg-gradient-to-b from-transparent to-[#F4EFE6]" />
        <section className="py-12 md:py-24 overflow-hidden flex items-center bg-[#F4EFE6]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl bg-[#D97941] text-[#F4EFE6]">
                      <Camera size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 text-[#1A1A1A]">Özel Konsept</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-display font-normal italic mb-8 leading-tight text-[#1A1A1A]">Konsept <br /><span className="not-italic font-normal">Lifestyle</span></h3>
                  <p className="text-xl leading-relaxed font-light mb-12 max-w-lg text-[#1A1A1A] opacity-70">Ürünlerinizi hikayesini anlatan çarpıcı yaşam tarzı çekimleri. Ürünü istediğiniz her mekanda yüksek gerçekçilikle sahneleyin.</p>
                  <button onClick={() => navigate('/iletisim')} className="group flex items-center gap-4 font-bold text-lg hover:gap-6 transition-all w-fit p-4 px-12 rounded-full border border-black/10 hover:bg-black hover:text-[#F4EFE6] text-[#1A1A1A]">Detaylı Bilgi Al <ArrowRight size={22} /></button>
                </div>
              </motion.div>
              <div className="lg:order-1 h-[600px] md:h-[700px] rounded-[4rem] overflow-hidden shadow-3xl bg-black/5">
                <LifestyleShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* 7. PORTFOLYO */}
        <section className={`py-12 md:py-16 flex items-center bg-[#F4EFE6]`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl text-[#1A1A1A]">
                <h3 className="opacity-40 text-sm font-bold tracking-[0.3em] uppercase mb-6">PORTFOLYO</h3>
                <h2 className="text-5xl md:text-7xl font-display font-normal italic leading-[0.9]">Üretim Gücümüzü <br /><span className="not-italic">Somutlaştırın.</span></h2>
              </div>
              <button className="px-10 py-5 rounded-full border border-black/20 hover:bg-black hover:text-[#F4EFE6] transition-all font-medium text-[#1A1A1A]">Tüm İşlerimizi Gör</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-14">
              {aiProjects.map((project, idx) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`group relative cursor-pointer ${project.spanClass} flex flex-col`} onClick={() => setSelectedProject(project)}>
                  <div className={`w-full rounded-[3rem] overflow-hidden bg-black/5 relative ${project.aspectClass} mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700`}>
                    <img src={project.thumbnail} alt={project.client} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000" />
                  </div>
                  <h3 className="text-3xl font-display font-normal italic text-[#1A1A1A] mb-3">{project.client}</h3>
                  <p className="text-[#1A1A1A] opacity-40 text-sm font-bold tracking-widest uppercase">{project.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-12 md:h-16 bg-[#F4EFE6] bg-gradient-to-b from-transparent to-[#D97941]" />
        <section className={`py-12 md:py-16 overflow-hidden flex items-center bg-[#D97941]`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full text-[#1A1A1A]">
            <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
              <h3 className="text-black/40 text-sm font-bold tracking-widest uppercase mb-8 font-sans">SİSTEM NASIL İŞLER?</h3>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-normal italic leading-[0.9] tracking-tighter">Bürokrasiyi atlayın, <br /> <span className="not-italic underline decoration-black/20 underline-offset-[12px]">doğrudan sonuca</span> odaklanın.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-black/10" />
              {[
                { n: 1, t: "Stratejik Brief", d: "İhtiyaçlarınızı ve marka ruhunu tanımlayın. Ürün görsellerini panele yükleyin." },
                { n: 2, t: "AI Motoru Devrede", d: "Gelişmiş algoritmalarımız manken ve mekan kurgusunu sanal dünyada tamamlar." },
                { n: 3, t: "Yüksek Çözünürlük", d: "Yayına hazır, rötüşlenmiş ve kusursuz görsellerinizi 48 saatte indirin." }
              ].map(step => (
                <div key={step.n} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-32 h-32 rounded-full bg-black text-[#F4EFE6] text-4xl font-display font-normal italic mb-10 shadow-2xl group-hover:scale-110 transition-transform flex items-center justify-center">{step.n}</div>
                  <h4 className="text-3xl font-display font-normal italic mb-6 tracking-tight">{step.t}</h4>
                  <p className="opacity-60 leading-relaxed max-w-xs text-lg font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#F4EFE6]" style={{ cursor: 'none' }} onMouseMove={handleMouseMove}>
            <motion.div className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center" style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}>
              {cursorType === 'exit' ? <div className="w-[100px] h-[100px] rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-2xl"><span className="text-[#F4EFE6] text-sm font-bold">Çıkış</span></div> : <div className="w-[24px] h-[24px] rounded-full bg-[#D97941] shadow-[0_0_20px_rgba(217,121,65,0.5)]" />}
            </motion.div>
            <button onClick={() => setSelectedProject(null)} className="fixed top-6 right-6 z-50 p-4 rounded-full bg-black/10 text-[#1A1A1A] hover:bg-black hover:text-[#F4EFE6] transition-all group" onMouseEnter={() => setCursorType('exit')} onMouseLeave={() => setCursorType('dot')}>
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <div className="w-full h-full flex flex-col bg-[#F4EFE6]">
              <div className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar" onWheel={(e) => { if (e.currentTarget) e.currentTarget.scrollLeft += e.deltaY; }}>
                <div className="h-full px-6 md:px-16 py-6 md:py-12 flex items-center space-x-8 min-w-max">
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full w-[500px] shrink-0 relative rounded-[2rem] overflow-hidden bg-black/5">
                    <img src={selectedProject.images[0]} alt={selectedProject.client} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#D97941]/20 mix-blend-multiply" />
                    <div className="absolute top-10 left-10 text-white z-10 font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{selectedProject.client}</div>
                  </motion.div>
                  {selectedProject.images.slice(1).map((img, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: (i + 1) * 0.1 }} className="h-full w-[400px] md:w-[600px] shrink-0 relative rounded-[2rem] overflow-hidden bg-black/5">
                      <img src={img} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 px-8 md:px-16 py-8 md:py-12 border-t border-black/10 bg-[#F4EFE6]" onClick={() => setSelectedProject(null)}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 max-w-screen-2xl mx-auto text-[#1A1A1A]">
                  <div className="shrink-0 max-w-md">
                    <h2 className="text-4xl md:text-5xl font-display font-normal italic mb-3">{selectedProject.client}</h2>
                    <p className="text-[#D97941] text-sm tracking-widest font-bold uppercase">{selectedProject.category}</p>
                  </div>
                  <p className="text-base md:text-lg opacity-70 leading-relaxed font-light max-w-xl">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 0px; }
          .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AiProduction;
