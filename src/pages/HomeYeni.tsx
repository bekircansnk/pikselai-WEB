import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { ArrowRight, ChevronDown, Zap, Play, Box, TrendingUp, Layers, ImageIcon, User, Sparkles, RefreshCcw, Check, Camera, MoveRight } from 'lucide-react';
import HeroAlternatives from '../components/sections/HeroAlternatives';

const colors = {
  beige: "bg-[#F4EFE6]",
  darkGreen: "bg-[#0b2117]",
  limeBtn: "bg-[#caf265]",
  borderColorDark: "border-[#1e3b2b]"
};

// --- DATA ---
const modules = import.meta.glob('/public/assets/pages/homeyeni/banner/*.{webp,jpg,jpeg,png}', { eager: true });
const INITIAL_HERO_IMAGES = Object.keys(modules).map(path => path.replace('/public', ''));

const shuffleArray = (array: string[]) => {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

const HERO_IMAGES = shuffleArray(INITIAL_HERO_IMAGES);

const ghostModules = import.meta.glob('/public/assets/pages/homeyeni/hayalet_oncesi_sonrasi/*__1.webp', { eager: true });
const GHOST_PAIRS = Object.keys(ghostModules).map(path => {
    const beforeStr = path.replace('/public', '');
    const afterStr = beforeStr.replace('__1.webp', '__2.webp');
    return { before: beforeStr, after: afterStr };
});

const BRAND_LOGOS = [
    "/assets/brands/cazador/cazador_logo.webp",
    "/assets/brands/venus/venus_logo.webp",
    "/assets/brands/mina_drinks/minadrinks_logo.webp",
    "/assets/brands/camp_and_map/campandmap_logo.webp"
];

const COMPARE_TABS = [
  { id: "ghost", label: "Ghost → E-Ticaret", before: "/assets/pages/homeyeni/banner/l0000000751458_1.webp", after: "/assets/pages/homeyeni/banner/l0000000751458_6.webp" },
  { id: "flat", label: "Düz Ürün → Kampanya", before: "/assets/brands/venus/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined18.webp", after: "/assets/brands/venus/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined16.webp" },
  { id: "lifestyle", label: "Ham → Lifestyle", before: "/assets/pages/homeyeni/banner/l0000000758648_1.webp", after: "/assets/pages/homeyeni/banner/03085_haki_2k_4_5_shot_13_action_brushing_foliage.webp" }
];

const SERVICES = [
  { title: "AI Prodüksiyon", desc: "Stüdyo maliyetlerini sıfırlayın. Kusursuz sanal mankenler ve ürün görselleri oluşturun.", icon: <Zap size={32} />, path: "/hizmetler/ai-produksiyon", bg: "bg-[#18201d]", img: "/assets/common/image1.webp", cols: "md:col-span-8" },
  { title: "E-Ticaret Yönetimi", desc: "Satışlarınızı en üst düzeye çıkaran kapsamlı mağaza kurulumları ve optimizasyonlar.", icon: <Box size={32} />, path: "/hizmetler/ai-produksiyon", bg: "bg-[#336b9c]", img: "/assets/common/image2.webp", cols: "md:col-span-4" },
  { title: "Sosyal Medya", desc: "Markanızı öne çıkaran etkili içerikler, Reels videoları ve kreatif yönetim.", icon: <Play size={32} />, path: "/hizmetler/sosyal-medya", bg: "bg-[#1f1614]", img: "/assets/common/1.webp", cols: "md:col-span-4" },
  { title: "Dijital Büyüme", desc: "Veri odaklı metrikler ve dönüşüm optimizasyonlarıyla satış grafiklerinizi hızlıca artırın.", icon: <TrendingUp size={32} />, path: "/hizmetler/sosyal-medya", bg: "bg-[#6d5b4a]", img: "/assets/common/2.webp", cols: "md:col-span-4" },
  { title: "Kreatif Tasarım", desc: "Marka kimliğinizi A'dan Z'ye güçlendiren benzersiz kurumsal kimlik ve UI/UX çözümleri.", icon: <Layers size={32} />, path: "/hizmetler/ai-produksiyon", bg: "bg-[#0b1426]", img: "/assets/common/3.webp", cols: "md:col-span-4" }
];

const MANKEN_ASSETS = [
    { name: "Anna", img: "/assets/common/anna_1.webp" },
    { name: "Anna", img: "/assets/common/anna_2.webp" },
    { name: "Mike", img: "/assets/common/mike_1.webp" },
    { name: "Mike", img: "/assets/common/mike_2.webp" },
    { name: "Nia", img: "/assets/common/nia_1.webp" },
    { name: "Nia", img: "/assets/common/nia_2.webp" },
    { name: "Nora", img: "/assets/common/nora_1.webp" },
    { name: "Nora", img: "/assets/common/nora_3.webp" }
];

const PORTFOLIO = [
  { id: 1, client: "Cazador", category: "Reklam Yaratıcılığı", thumbnail: "/assets/brands/cazador/cazador2.webp", spanClass: "md:col-span-4", aspectClass: "aspect-[3/4]" },
  { id: 2, client: "Venüs Ayakkabı", category: "Sosyal Medya Çekimleri", thumbnail: "/assets/brands/venus/venus2.webp", spanClass: "md:col-span-8", aspectClass: "aspect-square md:aspect-video" },
  { id: 3, client: "Camp and Map", category: "E-ticaret için Çekimler", thumbnail: "/assets/brands/camp_and_map/camp1.webp", spanClass: "md:col-span-6", aspectClass: "aspect-[4/3]" },
  { id: 4, client: "Mina Drinks", category: "Katalog Çekimleri", thumbnail: "/assets/brands/mina_drinks/mina1.webp", spanClass: "md:col-span-6", aspectClass: "aspect-[4/3]" }
];

const INFINITE_FORMATS = [
  { id: 1, title: "Orijinal Çekim (Düz)", img: "/assets/brands/venus/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined18.webp" },
  { id: 2, title: "E-Ticaret Katalog", img: "/assets/brands/venus/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined2.webp" },
  { id: 3, title: "Sosyal Medya Post", img: "/assets/brands/venus/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined10.webp" },
  { id: 4, title: "Kampanya Görseli", img: "/assets/brands/venus/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined16.webp" }
];

// --- COMPONENTS ---

// COMPONENT: CountUp
const CountUp = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState<string | number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      if (start === end) return;
      const totalMilSecDur = duration * 1000;
      const incrementTime = (totalMilSecDur / end) * 1.5;

      const timer = setInterval(() => {
        start += 1;
        setCount(String(start) + suffix);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration, suffix]);

  return <span ref={ref}>{count === 0 ? "0" + suffix : count}</span>;
};

// CompareSliderNode removed to support static side-by-side view for all tabs

// COMPONENT: CompareSlider
const CompareSlider = () => {
    const [activeTab, setActiveTab] = useState(COMPARE_TABS[0]);
    
    // Her sayfa yenilendiğinde klasörden rastgele bir çift seç
    const [randomPair] = useState(() => {
        if (GHOST_PAIRS.length > 0) {
            return GHOST_PAIRS[Math.floor(Math.random() * GHOST_PAIRS.length)];
        }
        return null;
    });

    const displayBefore = activeTab.id === 'ghost' && randomPair ? randomPair.before : activeTab.before;
    const displayAfter = activeTab.id === 'ghost' && randomPair ? randomPair.after : activeTab.after;

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex bg-black/40 p-2 rounded-full w-fit mx-auto border border-white/10 flex-wrap justify-center">
                {COMPARE_TABS.map((tab) => (
                    <button 
                        key={tab.id} 
                        onClick={() => { setActiveTab(tab); }}
                        className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab.id === tab.id ? 'bg-[#caf265] text-black shadow-lg hover:-translate-y-0.5' : 'text-white/60 hover:text-white'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
                {displayBefore && displayAfter && (
                    <>
                        {/* ÖNCESİ */}
                        <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-[#131110]">
                            <img src={displayBefore} alt="Öncesi" className="w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80" />
                            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md rounded-xl text-white/90 text-[10px] md:text-sm font-bold uppercase tracking-widest pointer-events-none border border-white/10 shadow-lg">Öncesi (Ham)</div>
                        </div>
                        {/* SONRASI */}
                        <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-[#131110]">
                            <img src={displayAfter} alt="Sonrası" className="w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80" />
                            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 bg-[#caf265]/90 backdrop-blur-md rounded-xl text-black text-[10px] md:text-sm font-bold uppercase tracking-widest pointer-events-none shadow-lg">Sonrası</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// COMPONENT: Manken Marquee
const MankenRow = ({ items, reverse = false, duration = 40 }: { items: typeof MANKEN_ASSETS, reverse?: boolean, duration?: number }) => (
    <div className="flex gap-4 mb-4 overflow-hidden mask-fade relative">
      <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 flex-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="relative w-[240px] md:w-[280px] h-[340px] md:h-[380px] flex-shrink-0 group rounded-3xl overflow-hidden border border-white/10">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <h4 className="text-white text-xl font-display font-normal italic lowercase">{item.name}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
);

// COMPONENT: FAQ Item
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={`border rounded-2xl transition-colors duration-300 bg-white shadow-sm ${isOpen ? 'border-[#0b2117]/20 bg-[#F4EFE6]/50' : 'border-[#0b2117]/10 hover:border-[#0b2117]/30'}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
          <span className="text-lg font-medium text-[#0b2117] pr-4">{question}</span>
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'border-[#0b2117] bg-[#0b2117] text-white' : 'border-[#0b2117]/20 text-[#0b2117] hover:border-[#0b2117]'}`}>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="px-6 pb-6 text-[#0b2117]/70 font-light leading-relaxed">{answer}</p>
        </div>
      </div>
    );
};

// --- MAIN PAGE COMPONENT ---
const Home = () => {
  const navigate = useNavigate();
  const [heroIndex, setHeroIndex] = useState(() => {
     if (HERO_IMAGES.length === 0) return 0;
     const lastItem = sessionStorage.getItem('lastPikselHero');
     let nextIdx = Math.floor(Math.random() * HERO_IMAGES.length);
     
     if (lastItem && HERO_IMAGES[nextIdx] === lastItem) {
         nextIdx = (nextIdx + 1) % HERO_IMAGES.length;
     }

     sessionStorage.setItem('lastPikselHero', HERO_IMAGES[nextIdx]);
     return nextIdx;
  });
  const [processStep, setProcessStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero slideshow interval
  useEffect(() => {
     const interval = setInterval(() => {
         setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
     }, 4000);
     return () => clearInterval(interval);
  }, []);

  // Process Interactive Interval
  useEffect(() => {
      const interval = setInterval(() => {
          setProcessStep((prev) => (prev + 1) % 3);
      }, 5000); // 5 sec per step automated
      return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout transparentHeader={true} headerLightText={true}>
      <main className="bg-[#0b2117] min-h-screen font-sans selection:bg-[#caf265] selection:text-[#0b2117] overflow-x-hidden">
        
        {/* 1. HERO SECTION */}
        <section className={`relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden`}>
          <div className="absolute inset-0 z-0 bg-[#0b2117]">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#caf265]/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#a8b8af]/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          </div>

          <div className="w-full relative z-10 flex flex-col items-center text-center mt-12 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="max-w-[1400px] px-6 md:px-16 lg:px-24 text-5xl md:text-7xl lg:text-[7rem] font-display font-normal text-[#F4EFE6] leading-[1.05] tracking-tight mb-8"
            >
              Her işiniz <br />
              <span className="italic text-white">tek çatı altında!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-4xl px-6 md:px-16 text-xl md:text-2xl text-[#a8b8af] font-light mb-12"
            >
              Dağınık ajanslar, karmaşık süreçler ve belirsiz maliyetlere son. Tasarım, yazılım, yapay zeka ve dijital pazarlama... İhtiyacınız olan her şey PikselAI'da.
            </motion.p>
            
            <HeroAlternatives />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto px-6"
            >
              <button 
                onClick={() => navigate('/iletisim')}
                className="w-full sm:w-auto px-10 py-5 bg-[#caf265] hover:bg-white text-[#0b2117] rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 transition-colors duration-300"
              >
                Bizimle Tanışın
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:border-white text-white rounded-full text-lg font-medium transition-all flex items-center justify-center gap-3 transition-colors duration-300"
              >
                Hizmetlerimizi İncele
              </button>
            </motion.div>
          </div>
        </section>

        {/* 1.5. SUB HERO SECTION */}
        <section className={`relative flex items-center justify-center py-20 lg:py-32 ${colors.darkGreen} overflow-hidden border-t border-white/10`}>
          <div className="absolute inset-0 z-0 bg-black">
             <AnimatePresence mode="wait">
                 <motion.img 
                    key={heroIndex}
                    src={HERO_IMAGES[heroIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                 />
             </AnimatePresence>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0b2117] via-[#0b2117]/60 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0b2117] via-transparent to-transparent opacity-80" />
             <div className="absolute inset-0 bg-[#0b2117]/40 pointer-events-none" />
          </div>

          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 lg:px-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            
            <div className="flex-1 text-left w-full">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                  <Sparkles size={16} className="text-[#caf265]" />
                  <span className="text-[#a8b8af] text-xs font-bold uppercase tracking-widest">YENİ NESİL AJANS DENEYİMİ</span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-[3.5rem] md:text-7xl lg:text-[7rem] font-display font-normal text-[#F4EFE6] leading-[1.05] tracking-tight mb-8">
                  Stüdyo Yok. <br />
                  <span className="italic text-[#caf265]">Sınır Yok.</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-white/80 max-w-xl font-light mb-12 leading-relaxed">
                  Yapay zeka devrimiyle fiziksel prodüksiyonun yüksek maliyetlerini ortadan kaldırın. Moda markanız için tek çatı altında sınırsız görsel üretim.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
                  <button onClick={() => navigate('/iletisim')} className="w-full sm:w-auto px-10 py-5 bg-[#caf265] hover:bg-white text-[#0b2117] rounded-full text-lg font-bold flex items-center justify-center gap-3 transition-colors duration-300 shadow-[0_0_30px_rgba(202,242,101,0.2)]">
                      Demoyu Başlat <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center justify-center gap-3 text-white/60 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#caf265] animate-pulse"></span>
                      Hemen Teslimata Hazır
                  </div>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="hidden lg:block relative w-full lg:w-[450px] xl:w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl p-2 bg-white/5 backdrop-blur-xl shrink-0">
                 <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                    <motion.img 
                        key={heroIndex}
                        src={HERO_IMAGES[heroIndex]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </AnimatePresence>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                     <span className="text-white/90 text-xs tracking-widest font-bold uppercase drop-shadow-md">✨ PikselAI ile Üretildi</span>
                 </div>
            </motion.div>
          </div>
        </section>

        {/* 2. MARKA LOGOLARI MARQUEE (Geçici Olarak Gizlendi) */}
        {false && (
        <section className={`py-10 bg-black/40 border-y ${colors.borderColorDark} overflow-hidden relative z-10`}>
            <div className="max-w-[1400px] mx-auto flex gap-4 mask-fade relative">
               <motion.div 
                 animate={{ x: [0, -1500] }} 
                 transition={{ duration: 30, ease: "linear", repeat: Infinity }} 
                 className="flex flex-nowrap items-center gap-20 md:gap-32 shrink-0"
               >
                  {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                      <img key={i} src={logo} alt="Marka Logo" className="h-10 md:h-14 object-contain opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
                  ))}
               </motion.div>
            </div>
        </section>
        )}

        {/* 3. DEĞER ÖNERİSİ & SAYAÇLAR */}
        <section className={`py-20 md:py-32 border-b border-[#0b2117]/10 bg-[#F4EFE6] relative transition-colors`}>
           <div className="absolute inset-0 bg-[#0b2117] opacity-[0.03] bg-center pointer-events-none"></div>
           <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 justify-between items-center">
                 <div className="lg:w-5/12 text-center lg:text-left">
                     <span className="text-[#0b2117]/60 text-xs font-bold uppercase tracking-widest mb-6 block">HIZLI ÇÖZÜMLER</span>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-[#0b2117] leading-tight mb-6">
                         Rakamlarla <br className="hidden lg:block"/><span className="not-italic font-medium">Yapay Zeka Farkı.</span>
                     </h2>
                     <p className="text-[#0b2117]/70 font-light leading-relaxed text-lg lg:max-w-md mx-auto lg:mx-0">
                         Ajans hantallığına son veriyoruz. Yapay zeka motorumuz sayesinde geleneksel prodüksiyonların getirdiği maliyetleri düşürürken hızı inanılmaz boyutlara çıkarıyoruz.
                     </p>
                 </div>
                 
                 <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full mt-10 lg:mt-0">
                    <div className="flex flex-col items-center lg:items-start p-6 rounded-3xl bg-white border border-[#0b2117]/10 shadow-sm hover:border-black/30 transition-colors">
                        <div className="text-5xl md:text-6xl font-display font-medium text-[#0b2117] mb-4 flex items-baseline">
                            %<CountUp end={80} duration={2}/>
                        </div>
                        <h4 className="text-xl font-display text-[#0b2117] mb-2 font-bold">Düşük Maliyet</h4>
                        <p className="text-[#0b2117]/70 text-sm font-light leading-relaxed text-center lg:text-left">Fiziksel stüdyo, manken, ışık ve ekip maliyetini sıfırlayın.</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start p-6 rounded-3xl bg-white border border-[#0b2117]/10 shadow-sm hover:border-black/30 transition-colors">
                        <div className="text-5xl md:text-6xl font-display font-medium text-[#0b2117] mb-4 flex items-baseline">
                            <CountUp end={48} duration={2} suffix="s" />
                        </div>
                        <h4 className="text-xl font-display text-[#0b2117] mb-2 font-bold">İçinde Teslim</h4>
                        <p className="text-[#0b2117]/70 text-sm font-light leading-relaxed text-center lg:text-left">Haftalar süren prodüksiyon süreçleri artık aynı gün elinizde.</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start p-6 rounded-3xl bg-white border border-[#0b2117]/10 shadow-sm hover:border-black/30 transition-colors">
                        <div className="text-5xl md:text-6xl font-display font-medium text-[#0b2117] mb-4">∞</div>
                        <h4 className="text-xl font-display text-[#0b2117] mb-2 font-bold">Sınırsız Sahne</h4>
                        <p className="text-[#0b2117]/70 text-sm font-light leading-relaxed text-center lg:text-left">Dünyanın her köşesinde, istenilen arka planda üretim yapın.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. ÖNCESİ / SONRASI SLIDER */}
        <section className={`py-20 md:py-32 border-b ${colors.borderColorDark} relative overflow-hidden bg-[#08150f]`}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#caf265] rounded-full blur-[150px] opacity-5 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <span className="text-[#caf265] text-xs font-bold uppercase tracking-widest mb-6 block">SIKICI FOTOĞRAFLARA VEDA</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display text-white leading-tight mb-8">
                        Basit ürünlerden <br/><span className="italic text-[#caf265]">Dünya Standartlarında Kampanyalara.</span>
                    </h2>
                    <p className="text-[#a8b8af] font-light text-xl leading-relaxed max-w-2xl mx-auto">
                        Hangi formatta çekim yapmış olursanız olun. AI motorumuz ham görselinizi alır ve dünyanın en kaliteli prodüksiyon şirketinden çıkmış gibi harikalar yaratır. Üstelik sıfır defo ile.
                    </p>
                </div>
                
                <CompareSlider />
            </div>
        </section>

        {/* 5. MASONRY SERVICES GRID */}
        <section id="services" className={`py-20 md:py-32 border-b border-[#0b2117]/10 bg-[#F4EFE6] transition-colors`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-[#0b2117]/60 text-xs font-bold uppercase tracking-widest mb-4 block">360° ÇÖZÜMLER</span>
                <h2 className="text-5xl md:text-7xl font-display text-[#0b2117]">
                  Tek merkezden <br/><span className="italic">sonsuz potansiyel</span>
                </h2>
              </div>
              <p className="text-[#0b2117]/70 max-w-md text-xl font-light leading-relaxed mb-4">
                Markanızı sıfırdan zirveye taşıyacak entegre dijital altyapılar ve yaratıcı çözümler sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-6 auto-rows-auto">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative ${service.bg} rounded-[2.5rem] p-10 md:p-12 overflow-hidden group cursor-pointer ${service.cols} min-h-[400px] md:min-h-[500px] flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all`}
                  onClick={() => navigate(service.path)}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative z-10">
                     <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-bold text-white mb-8 border border-white/10 group-hover:bg-[#caf265] group-hover:text-black transition-colors">
                        {idx === 0 ? "Özel AI Altyapısı" : "Tam Kapsamlı"}
                     </span>
                     <div className="text-[#caf265] mb-8 bg-black/40 p-4 rounded-2xl w-fit backdrop-blur-sm border border-white/10 group-hover:bg-[#caf265] group-hover:text-black transition-colors">
                         {service.icon}
                     </div>
                  </div>

                  <div className="relative z-10 mt-auto flex items-end justify-between gap-6">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 leading-tight">{service.title}</h3>
                        <p className="text-[#a8b8af] text-lg font-light leading-relaxed max-w-sm">{service.desc}</p>
                    </div>
                    <div className="w-14 h-14 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0b2117] transition-all duration-300">
                      <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. NASIL ÇALIŞIR — ETKİLEŞİMLİ 3 ADIM */}
        <section className={`py-20 md:py-32 border-b ${colors.borderColorDark}`}>
           <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
              <div className="text-center mb-20 max-w-3xl mx-auto">
                  <span className="text-[#caf265] text-xs font-bold uppercase tracking-widest mb-4 block">BASİT VE ETKİLİ</span>
                  <h2 className="text-5xl md:text-6xl font-display text-white mb-6">Sürecimiz Nasıl <span className="italic">İşliyor?</span></h2>
                  <p className="text-[#a8b8af] font-light text-xl">Sadece ürün görselini yükleyin, karmaşık promptlar ve teknik detaylarla biz ilgilenelim.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                 {/* Sol Panel: Adımlar */}
                 <div className="flex flex-col space-y-10 relative pl-8 border-l-2 border-white/10">
                     {[
                         { title: "Ürün Görselinizi Gönderin", desc: "Telefonla çekilmiş basit bir düz ürün, cansız manken veya askı fotoğrafı... Bizim için başlangıç noktası olması yeterli." },
                         { title: "Tasarım & Yapay Zeka İşliyor", desc: "Kreatif ekibimiz ve yapay zeka analiz motorumuz birleşerek, markanıza uyan en mükemmel vizyonu saniyeler içinde işliyor." },
                         { title: "Kampanyanız Yayınlanmaya Hazır", desc: "Cironuzu katlayacak, dünya standartlarında üretilmiş mankenli ve konsept yaşamsal kareler dijital reklamlarınıza hazır!" }
                     ].map((step, idx) => (
                        <div 
                           key={idx} 
                           className={`cursor-pointer transition-all duration-500 relative group ${processStep === idx ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-70'}`}
                           onClick={() => setProcessStep(idx)}
                        >
                            <div className={`absolute -left-[37px] w-4 h-4 rounded-full top-2 transition-all duration-500 ${processStep === idx ? 'bg-[#caf265] shadow-[0_0_20px_#caf265] scale-125' : 'bg-[#1e3b2b] group-hover:bg-white/40'}`} />
                            <div className="text-[#caf265]/50 text-sm font-bold tracking-widest uppercase mb-2">Adım 0{idx + 1}</div>
                            <h3 className="text-3xl font-display text-white mb-3 font-medium tracking-tight leading-tight">{step.title}</h3>
                            <p className="text-[#a8b8af] font-light leading-relaxed text-lg max-w-md">{step.desc}</p>
                        </div>
                     ))}
                 </div>
                 
                 {/* Sağ Panel: Görsel Gösterim */}
                 <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-4 shadow-2xl">
                     <AnimatePresence mode="wait">
                         {processStep === 0 && (
                            <motion.div key="s1" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:1.05}} transition={{duration:0.6}} className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                                <img src="/assets/pages/homeyeni/banner/35325_siyah_1.webp" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none">
                                    <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                        <Camera size={32} />
                                    </div>
                                    <div className="mt-4 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm uppercase tracking-widest font-bold">Ham Görsel Yükleniyor</div>
                                </div>
                            </motion.div>
                         )}
                         {processStep === 1 && (
                            <motion.div key="s2" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:1.05}} transition={{duration:0.6}} className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#0b2117] via-black to-[#0b2117] flex items-center justify-center flex-col gap-8 relative overflow-hidden border border-white/10">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
                                <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                                    <div className="absolute w-full h-full border-4 border-[#caf265]/10 border-t-[#caf265] rounded-full animate-[spin_2s_linear_infinite]"></div>
                                    <div className="absolute w-24 h-24 border-4 border-[#caf265]/20 border-b-[#caf265] rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                                    <Sparkles size={40} className="text-[#caf265] animate-pulse" />
                                </div>
                                <div className="relative z-10 text-center">
                                    <p className="text-[#caf265] font-display text-3xl animate-pulse mb-2">Yapay Zeka Analizi</p>
                                    <p className="text-white/60 font-light font-mono text-sm">Hedef Persona Eşleştiriliyor... 87%</p>
                                </div>
                            </motion.div>
                         )}
                         {processStep === 2 && (
                            <motion.div key="s3" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:1.05}} transition={{duration:0.6}} className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                                <img src="/assets/pages/homeyeni/banner/35325_siyah_8.jpg" className="w-full h-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#caf265] text-black rounded-full font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(202,242,101,0.4)]">
                                       <Check size={14} /> Yayınlanmaya Hazır
                                    </div>
                                </div>
                            </motion.div>
                         )}
                     </AnimatePresence>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. AI VİTRİNİ BENTO */}
        <section className={`py-16 md:py-24 border-b border-[#0b2117]/10 bg-[#F4EFE6] transition-colors`}>
           <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
              <div className="text-center mb-16">
                  <span className="text-[#0b2117]/60 text-xs font-bold uppercase tracking-widest mb-4 block">HİZMET ALANLARIMIZ</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#0b2117] mb-6">Sanal Prodüksiyon <span className="italic font-medium">Yeteneklerimiz</span></h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[650px]">
                  <div className="bg-[#18201d] rounded-3xl p-10 md:p-12 border border-white/10 relative overflow-hidden group hover:border-[#caf265]/50 hover:shadow-[0_0_50px_rgba(202,242,101,0.05)] transition-all cursor-pointer" onClick={() => navigate('/hizmetler/ai-produksiyon')}>
                      <img src="/assets/common/anna_2.webp" className="absolute right-0 bottom-0 w-2/3 h-full object-cover object-[center_20%] mask-fade opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" alt="Manken" />
                      <div className="relative z-10 w-2/3 h-full flex flex-col">
                         <div className="w-16 h-16 bg-[#caf265] text-[#0b2117] rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl"><User size={28} /></div>
                         <h3 className="text-4xl md:text-5xl font-display text-white mb-6 leading-tight">Sanal Manken Yaratımı</h3>
                         <p className="text-[#a8b8af] font-light text-lg mb-8 leading-relaxed">Kapsayıcı ve markanıza %100 uyan, her fotoğrafınızda tutarlı görünen özgün dijital personalar inşa edin. Sizin markanız, sizin yüzünüz.</p>
                         <div className="mt-auto flex items-center gap-3 text-white font-medium group-hover:text-[#caf265] transition-colors">Portföyü İncele <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></div>
                      </div>
                  </div>
                  
                  <div className="grid grid-rows-2 gap-6">
                     <div className="bg-[#0b1426] rounded-3xl p-10 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all cursor-pointer flex items-center" onClick={() => navigate('/hizmetler/ai-produksiyon')}>
                         <img src="/assets/pages/homeyeni/banner/l0000000751461_2_6.webp" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-r from-[#0b1426] via-[#0b1426]/80 to-transparent" />
                         <div className="relative z-10 w-2/3 pr-8">
                             <div className="w-12 h-12 bg-white/10 text-white rounded-[1rem] flex items-center justify-center mb-6 backdrop-blur-md border border-white/20"><ImageIcon size={20} /></div>
                             <h3 className="text-3xl font-display text-white mb-3 tracking-tight">Ghost Mannequin</h3>
                             <p className="text-[#a8b8af] font-light leading-relaxed">Hacimli 3D form hissiyatı yaratarak ürünün kumaş kalitesini öne çıkarın.</p>
                         </div>
                     </div>
                     <div className="bg-[#241a15] rounded-3xl p-10 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all cursor-pointer" onClick={() => navigate('/hizmetler/ai-produksiyon')}>
                         <img src="/assets/pages/homeyeni/03085_haki_2k_4_5_shot_13_action_brushing_foliage.webp" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#110c0a] via-black/50 to-transparent" />
                         <div className="relative z-10 h-full flex flex-col justify-end">
                             <h3 className="text-3xl font-display text-white mb-3">Konsept Lifestyle</h3>
                             <p className="text-[#a8b8af] font-light w-5/6 text-lg leading-relaxed mb-4">Dünyanın öbür ucunda bir stüdyo kurmadan oradaymış hissi verin ve hedef kitlenizi ikna edin.</p>
                             <div className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest group-hover:text-white/70 transition-colors">Katalog Çekimleri <ArrowRight size={16} /></div>
                         </div>
                     </div>
                  </div>
              </div>
           </div>
        </section>

        {/* 8. MANKEN SHOWCASE MARQUEE */}
        <section className={`py-20 md:py-32 border-b ${colors.borderColorDark} overflow-hidden bg-black/20`}>
           <div className="text-center mb-16 max-w-3xl mx-auto px-6">
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 block">SABİT PERSONALAR, ÇEŞİTLİLİK SAĞLAR</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight">İnsan Formunda <span className="italic text-[#caf265]">Dijital Modeller</span></h2>
                <p className="text-[#a8b8af] mt-4 font-light text-lg">Markanıza uyan sanal mankenlerden birini seçin, koleksiyonlarınızın tamamını aynı yüzle tanıtın.</p>
           </div>
           
           <MankenRow items={MANKEN_ASSETS} reverse={false} duration={40} />
           <MankenRow items={[...MANKEN_ASSETS].reverse()} reverse={true} duration={45} />
           
           <div className="mt-16 flex justify-center">
               <button onClick={() => navigate('/hizmetler/ai-produksiyon')} className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all font-bold text-lg flex items-center gap-3">
                   Tüm Manken Portföyünü İncele <MoveRight size={20} />
               </button>
           </div>
        </section>

        {/* 9. PORTFOLYO / İŞLERİMİZ */}
        <section className={`py-20 md:py-32 border-b border-[#0b2117]/10 bg-[#F4EFE6] transition-colors`}>
           <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
              <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl text-[#0b2117]">
                    <span className="text-[#0b2117]/60 text-xs font-bold uppercase tracking-widest mb-4 block">100+ MEMNUN MARKA</span>
                    <h2 className="text-5xl md:text-7xl font-display font-normal italic leading-[0.95] text-[#0b2117]">Üretim Gücümüzü <br /><span className="not-italic font-bold">Somutlaştırın.</span></h2>
                </div>
                <button onClick={() => navigate('/islerimiz')} className="px-10 py-5 rounded-full border border-[#0b2117]/20 bg-white text-[#0b2117] shadow-sm hover:bg-[#0b2117] hover:text-white transition-all font-bold group flex items-center gap-3">
                    Tüm İşlerimizi Gör <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto">
                 {PORTFOLIO.map((item) => (
                     <div key={item.id} onClick={() => navigate('/islerimiz')} className={`group cursor-pointer rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-[#0b1426] border border-white/10 hover:border-[#caf265]/30 ${item.spanClass} ${item.aspectClass}`}>
                         <img src={item.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" alt={item.client} />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0b2117] via-[#0b2117]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                         
                         {/* Hover State Explore Button */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                            <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                                <ArrowRight size={32} className="-rotate-45" />
                            </div>
                         </div>
                         
                         {/* Content Info */}
                         <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex flex-col gap-2">
                             <span className="text-[#caf265] text-xs font-bold tracking-[0.2em] uppercase bg-black/50 backdrop-blur-sm self-start px-3 py-1 rounded-full border border-white/10">
                                 {item.category}
                             </span>
                             <h4 className="text-white text-3xl md:text-4xl font-display">{item.client}</h4>
                         </div>
                     </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 11. TEK ÜRÜN SINIRSIZ İÇERİK FORMATLARI */}
        <section className={`py-20 md:py-32 border-b ${colors.borderColorDark}`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white/5 bg-[#1A1A1A]">
                        <img src={INFINITE_FORMATS[0].img} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0" />
                        <motion.img 
                            animate={{ opacity: [0, 1, 1, 0, 0, 0] }}
                            transition={{ duration: 16, repeat: Infinity, times: [0, 0.1, 0.3, 0.4, 0.9, 1] }}
                            src={INFINITE_FORMATS[1].img} className="absolute inset-0 w-full h-full object-cover z-10" 
                        />
                        <motion.img 
                            animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                            transition={{ duration: 16, repeat: Infinity, times: [0, 0.3, 0.4, 0.6, 0.7, 1] }}
                            src={INFINITE_FORMATS[2].img} className="absolute inset-0 w-full h-full object-cover z-20" 
                        />
                        <motion.img 
                            animate={{ opacity: [0, 0, 0, 0, 0, 1] }}
                            transition={{ duration: 16, repeat: Infinity, times: [0, 0.6, 0.7, 0.9, 1, 1] }}
                            src={INFINITE_FORMATS[3].img} className="absolute inset-0 w-full h-full object-cover z-30" 
                        />
                        <div className="absolute bottom-8 left-8 right-8 z-50 bg-black/60 backdrop-blur-xl text-white px-6 py-4 rounded-2xl flex items-center justify-between border border-white/20">
                           <div className="flex items-center gap-3">
                               <RefreshCcw size={20} className="text-[#caf265] animate-spin-slow" />
                               <span className="font-bold text-sm tracking-widest uppercase">Akıllı Format Dönüşümü</span>
                           </div>
                           <div className="flex gap-1.5">
                               {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />)}
                           </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6 block">MAKSİMUM VERİMLİLİK</span>
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display text-white leading-tight mb-8">
                            Tek Ürün. <br/><span className="italic text-white font-bold underline decoration-[#caf265] underline-offset-8">Sınırsız Sahne.</span>
                        </h2>
                        <p className="text-[#a8b8af] font-medium text-xl leading-relaxed mb-10">Bir kere basit fotoğraf çekin, sonsuza kadar farklı formatlarda kullanın. Aynı çantayı bugün beyaz fonda satarken, yarın sokak stilinde 16:9 reklamınızda başrolde izleyin.</p>
                        
                        <div className="flex flex-col gap-4">
                            {INFINITE_FORMATS.map((form) => (
                                <div key={form.id} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#caf265]/50 hover:bg-white/10 transition-all">
                                   <div className="flex items-center gap-4 text-white font-bold text-lg">
                                      <div className="w-10 h-10 rounded-xl bg-[#caf265] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(202,242,101,0.3)]"><Check size={20} className="text-black" /></div>
                                      {form.title}
                                   </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 12. SSS – FREQUENTLY ASKED QUESTIONS */}
        <section className={`py-20 md:py-32 border-b border-[#0b2117]/10 bg-[#F4EFE6]`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#0b2117]/60 text-xs font-bold uppercase tracking-widest mb-4 block">AKLINIZA TAKILANLAR</span>
                <h2 className="text-4xl md:text-6xl font-display text-[#0b2117]">
                  Sıkça Sorulan <span className="italic font-normal">Sorular</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "Minimum sipariş veya görsel miktarı var mı?", a: "Hayır, tek bir ürün görseli için bile çalışabiliriz. Esnek kampanya paketlerimiz e-ticaret satıcılarından büyük moda devlerine kadar her ölçeğe hitap etmektedir." },
                  { q: "Teslim süresi ortalama ne kadardır?", a: "Sezon veya konsept yenilemeleri genelde aynı gün veya 48 saat içinde teslim edilmektedir. Proje başlamadan önce kesin teslimat takvimini belirliyoruz." },
                  { q: "Yapay zeka ile üretilen mankenli fotoğraflar gerçekten inandırıcı mı?", a: "Evet. Özel eğitim yapılmış, kumaş dokusunu bozmayan ve anatomik bütünlüğü (eller, yüz vb.) tamamen doğru işleyen kurumsal AI mimarimiz sayesinde dünyanın en iyi dergi çekimlerinden farksız sonuçlar alırsınız." },
                  { q: "Kendi ürünümü stüdyonuzda fiziki olarak çektirebilir miyim?", a: "PikselAI olarak dijital prodüksiyon (sanal fotoğrafçılık) haricinde, kendi e-ticaret stüdyomuzda klasik ürün çekim, ghost mannequin ve video hizmetlerini de fiziksel olarak sunuyoruz." }
                ].map((faq, idx) => (
                  <FaqItem key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 14. BOTTOM CTA */}
        <section className={`py-16 md:py-24 px-4 md:px-12 lg:px-24`}>
          <div className="max-w-[1400px] mx-auto bg-[#caf265] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col items-center justify-center text-center gap-8 shadow-2xl">
            {/* Dekoratif Daireler */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0b2117] opacity-10 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 max-w-4xl flex flex-col items-center">
              <span className="px-4 py-2 rounded-full border border-[#0b2117]/20 text-[#0b2117] text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md mb-8">Ücretsiz Danışmanlık</span>
              <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-display font-normal italic text-[#0b2117] mb-8 leading-[1.0]">
                Markanızı geleceğe <br /> <span className="text-[#0b2117] font-display font-bold not-italic">taşımaya hazır mısınız?</span>
              </h2>
              <p className="text-[#0b2117]/80 mb-12 text-xl font-medium max-w-2xl leading-relaxed">
                Ağır süreçleri, yüksek prodüksiyon maliyetlerini ve karmaşayı geride bırakın. Kaliteli, hızlı ve ölçeklenebilir kreatif sürecimize adım atmak için bugün bizimle iletişime geçin.
              </p>
              <button onClick={() => navigate('/iletisim')} className="bg-[#0b2117] text-[#caf265] hover:bg-black transition-all duration-300 rounded-full px-12 py-6 text-xl font-bold flex items-center justify-center gap-4 w-full sm:w-auto shadow-[0_20px_40px_rgba(11,33,23,0.3)] hover:-translate-y-1 group">
                 <span>Hemen Demo Talep Et</span>
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </MainLayout>
  );
};

export default Home;
