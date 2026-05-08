import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useScroll, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { ArrowRight, ChevronDown, Zap, Play, Box, TrendingUp, Layers, Sparkles, Check, Camera, MoveRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import HeroAlternatives from '../components/sections/HeroAlternatives';
import { SEOHead } from '../components/seo/SEOHead';

const colors = {
  beige: "bg-[#F4EFE6]",
  darkGreen: "bg-[#0b2117]",
  limeBtn: "bg-[#caf265]",
  borderColorDark: "border-[#1e3b2b]"
};

// --- DATA ---
import { ASSET_DATA } from '../data/assetData';

// --- DATA ---
const INITIAL_HERO_IMAGES = ASSET_DATA.pages.homeyeni.banner;

const shuffleArray = (array: string[]) => {
  let newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const HERO_IMAGES = shuffleArray(INITIAL_HERO_IMAGES);

const GHOST_PAIRS = ASSET_DATA.pages.homeyeni.hayalet_oncesi_sonrasi
  .filter((path: string) => path.endsWith('__1.webp'))
  .map((path: string) => ({
    before: path,
    after: path.replace('__1.webp', '__2.webp')
  }));

const KAMPANYA_PAIRS = ASSET_DATA.pages.homeyeni.kampanya_oncesi_sonrasi
  .filter((path: string) => path.endsWith('__1.webp'))
  .map((path: string) => ({
    before: path,
    after: path.replace('__1.webp', '__2.webp')
  }));

const SOSYAL_MEDYA_PAIRS = ASSET_DATA.pages.homeyeni.sosyal_medya_oncesi_sonrasi
  .filter((path: string) => path.endsWith('__1.webp'))
  .map((path: string) => ({
    before: path,
    after: path.replace('__1.webp', '__2.webp')
  }));

const SUREC_PAIRS = ASSET_DATA.pages.homeyeni.surec_isleme
  .filter((path: string) => path.endsWith('__1.webp'))
  .map((path: string) => ({
    before: path,
    after: path.replace('__1.webp', '__2.webp')
  }));

const BRAND_LOGOS = [
  "/assets/brands/cazador/cazador_logo.webp",
  "/assets/brands/venus/venus_logo.webp",
  "/assets/brands/mina_drinks/minadrinks_logo.webp",
  "/assets/brands/camp_and_map/campandmap_logo.webp"
];

const COMPARE_TABS = [
  { id: "ghost", label: "Ghost → E-Ticaret", before: "/assets/pages/homeyeni/hayalet_oncesi_sonrasi/l0000000751458__1.webp", after: "/assets/pages/homeyeni/hayalet_oncesi_sonrasi/l0000000751458__2.webp" },
  { id: "flat", label: "Düz Ürün → Kampanya", before: "/assets/pages/homeyeni/banner/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined18.webp", after: "/assets/pages/homeyeni/banner/kadin_kol_cantasi_siyah_bordo_c2490807k_canta_venus_c2490807k_16356_23_b_undefined16.webp" },
  { id: "lifestyle", label: "Ham → Sosyal Medya", before: "/assets/pages/homeyeni/hayalet_oncesi_sonrasi/l0000000758648__1.webp", after: "/assets/pages/homeyeni/banner/03085_haki_2k_4_5_shot_13_action_brushing_foliage.webp" }
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

  // Her sayfa yenilendiğinde veya sekmeye tıklandığında klasörlerden rastgele bir çift seç
  const [randomPairs, setRandomPairs] = useState(() => {
    const ghost = GHOST_PAIRS.length > 0 ? GHOST_PAIRS[Math.floor(Math.random() * GHOST_PAIRS.length)] : null;
    const flat = KAMPANYA_PAIRS.length > 0 ? KAMPANYA_PAIRS[Math.floor(Math.random() * KAMPANYA_PAIRS.length)] : null;
    const lifestyle = SOSYAL_MEDYA_PAIRS.length > 0 ? SOSYAL_MEDYA_PAIRS[Math.floor(Math.random() * SOSYAL_MEDYA_PAIRS.length)] : null;
    return { ghost, flat, lifestyle };
  });

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    setRandomPairs(prev => {
      const ghost = GHOST_PAIRS.length > 0 ? GHOST_PAIRS[Math.floor(Math.random() * GHOST_PAIRS.length)] : null;
      const flat = KAMPANYA_PAIRS.length > 0 ? KAMPANYA_PAIRS[Math.floor(Math.random() * KAMPANYA_PAIRS.length)] : null;
      const lifestyle = SOSYAL_MEDYA_PAIRS.length > 0 ? SOSYAL_MEDYA_PAIRS[Math.floor(Math.random() * SOSYAL_MEDYA_PAIRS.length)] : null;
      return {
        ...prev,
        [tab.id]: tab.id === 'ghost' ? ghost : tab.id === 'flat' ? flat : lifestyle
      };
    });
  };

  useEffect(() => {
    const pool = [...GHOST_PAIRS, ...KAMPANYA_PAIRS, ...SOSYAL_MEDYA_PAIRS, ...SUREC_PAIRS];
    pool.forEach(pair => {
      if (pair.before) new Image().src = pair.before;
      if (pair.after) new Image().src = pair.after;
    });
  }, []);

  const displayBefore = randomPairs[activeTab.id as keyof typeof randomPairs]?.before || activeTab.before;
  const displayAfter = randomPairs[activeTab.id as keyof typeof randomPairs]?.after || activeTab.after;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex bg-black/40 p-2 rounded-full w-fit mx-auto border border-white/10 flex-wrap justify-center">
        {COMPARE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const GRID_POOL = [
  "/assets/common/image1.webp",
  "/assets/common/image2.webp",
  "/assets/pages/sosyalmedyayeni/image3.webp",
  "/assets/pages/sosyalmedyayeni/image4.webp",
  "/assets/pages/sosyalmedyayeni/image5.webp",
  "/assets/pages/sosyalmedyayeni/image6.webp",
  "/assets/pages/sosyalmedyayeni/image7.webp",
  "/assets/brands/venus/venus1.webp",
  "/assets/brands/venus/venus2.webp",
  "/assets/brands/camp_and_map/camp1.webp",
  "/assets/brands/mina_drinks/mina1.webp",
  "/assets/common/man_kazak.webp",
  "/assets/common/nora_1.webp"
];

const DynamicGridImage = ({ initialSrc, interval }: { initialSrc: string, interval: number }) => {
  const [currentSrc, setCurrentSrc] = useState(initialSrc);

  useEffect(() => {
    const timer = setTimeout(() => {
      const changeImage = () => {
        const randomImg = GRID_POOL[Math.floor(Math.random() * GRID_POOL.length)];
        setCurrentSrc(randomImg);
      };

      changeImage(); // İlk değişimi hemen yap
      const intervalId = setInterval(changeImage, interval);
      return () => clearInterval(intervalId);
    }, 500); // Site açıldıktan 0.5 saniye sonra ilk değişim başlasın

    return () => clearTimeout(timer);
  }, [interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={currentSrc}
        src={currentSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
      />
    </AnimatePresence>
  );
};
// ------------------------------------

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Process Interactive Interval & Scroll
  const processRef = useRef<HTMLElement>(null);
  const processInView = useInView(processRef, { margin: "-20%", once: false });
  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start start", "end end"]
  });

  // Hızlı scroll geçişlerini önlemek, adımları tek tek göstermek için Spring uygulanıyor
  const smoothScroll = useSpring(processScroll, { stiffness: 50, damping: 15, restDelta: 0.001 });

  // Süreç ekranına gelindiğinde Üst Menüyü (Header) tam the ekran hissiyatı için geçici gizle
  useEffect(() => {
    const headerEl = document.querySelector('header');
    if (headerEl) {
      if (processInView) {
        headerEl.style.transform = 'translateY(-100%)';
        headerEl.style.transition = 'transform 0.4s ease-in-out';
      } else {
        headerEl.style.transform = '';
      }
    }
  }, [processInView]);

  // Otonom akış (scroll olmadığında kendi kendine ilerleme)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (processInView && isAutoPlaying && processStep < 2) {
      interval = setInterval(() => {
        setProcessStep(prev => prev >= 2 ? 2 : prev + 1);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [processInView, isAutoPlaying, processStep]);

  // Manuel scroll izleme (akıcı smootScroll üzerinden hesaplanır!)
  useEffect(() => {
    return smoothScroll.on("change", latest => {
      // Eğer kullanıcı ciddi manada kaydırmaya başlarsa (örn. > %1), otonomu devre dışı bırak
      if (latest > 0.01 && isAutoPlaying) {
        setIsAutoPlaying(false);
      }

      if (!isAutoPlaying) {
        if (latest < 0.33) setProcessStep(0);
        else if (latest < 0.66) setProcessStep(1);
        else setProcessStep(2);
      }
    });
  }, [smoothScroll, isAutoPlaying]);

  const [surecPair] = useState(() => SUREC_PAIRS.length > 0 ? SUREC_PAIRS[Math.floor(Math.random() * SUREC_PAIRS.length)] : null);

  return (
    <MainLayout transparentHeader={true} headerLightText={true}>
      <SEOHead
        title="Yapay Zeka Destekli Kreatif Üretim, E-Ticaret ve Dijital Çözümler"
        description="Yapay zeka ile ürün fotoğrafçılığı, sanal manken tasarımı, e-ticaret yönetimi ve sosyal medya. Stüdyo yok, manken yok — tek çatı altında dijital çözümler."
        canonical="/"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Pikselai',
          'url': 'https://pikselai.com',
          'potentialAction': {
            '@type': 'SearchAction',
            'target': 'https://pikselai.com/blog?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }, {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Pikselai',
          'url': 'https://pikselai.com',
          'logo': 'https://pikselai.com/assets/common/logo-dark-v2.webp',
          'description': 'Yapay zeka destekli kreatif üretim, e-ticaret yönetimi ve dijital çözümler sunan profesyonel dijital ajans.',
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+905531832344',
            'contactType': 'customer service',
            'areaServed': 'TR',
            'availableLanguage': 'Turkish'
          },
          'sameAs': [
            'https://www.instagram.com/pikselai',
            'https://www.linkedin.com/company/pikselai'
          ]
        }]}
      />
      <main className="bg-[#0b2117] min-h-screen font-sans selection:bg-[#caf265] selection:text-[#0b2117]">

        {/* 1. HERO SECTION */}
        <section className={`relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden`}>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video 
              src="/assets/pages/homeyeni/landing.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-60"
            />
            {/* Dynamic Overlay for Contrast */}
            <div className="absolute inset-0 bg-[#0b2117]/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b2117]/20 via-transparent to-[#0b2117]" />
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
                  Rakamlarla <br className="hidden lg:block" /><span className="not-italic font-medium">Yapay Zeka Farkı.</span>
                </h2>
                <p className="text-[#0b2117]/70 font-light leading-relaxed text-lg lg:max-w-md mx-auto lg:mx-0">
                  Ajans hantallığına son veriyoruz. Yapay zeka motorumuz sayesinde geleneksel prodüksiyonların getirdiği maliyetleri düşürürken hızı inanılmaz boyutlara çıkarıyoruz.
                </p>
              </div>

              <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full mt-10 lg:mt-0">
                <div className="flex flex-col items-center lg:items-start p-6 rounded-3xl bg-white border border-[#0b2117]/10 shadow-sm hover:border-black/30 transition-colors">
                  <div className="text-5xl md:text-6xl font-display font-medium text-[#0b2117] mb-4 flex items-baseline">
                    %<CountUp end={80} duration={2} />
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
                Basit ürünlerden <br /><span className="italic text-[#caf265]">Dünya Standartlarında Kampanyalara.</span>
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
                  Tek merkezden <br /><span className="italic">sonsuz potansiyel</span>
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
        <section ref={processRef} className={`h-[300vh] relative border-b ${colors.borderColorDark}`}>
          <div className="sticky top-0 min-h-[100svh] w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#0b2117] pt-8 pb-8 lg:pt-10 lg:pb-10">
            <div className="max-w-[1300px] w-full mx-auto px-4 md:px-12 flex flex-col justify-center min-h-0">

              <div className="text-center mb-4 md:mb-6 shrink-0 mt-0 lg:mt-4">
                <span className="text-[#caf265] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 block">BASİT VE ETKİLİ</span>
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-display text-white mb-2 leading-tight">Sürecimiz Nasıl <span className="italic">İşliyor?</span></h2>
                <p className="text-[#a8b8af] font-light text-xs md:text-sm lg:text-base max-w-2xl mx-auto">Panel kullandırmıyoruz; ürünlerinizi alıp görsel stilini oluşturuyor, üretimi yönetiyor, kontrol ediyor ve doğrudan kullanıma hazır teslim ediyoruz.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">

                {/* Sol Panel: Adımlar */}
                <div className="flex flex-col justify-center space-y-5 md:space-y-8 relative pl-6 md:pl-10">

                  {/* DİNAMİK YUMUŞATILMIŞ PROGRESS BAR */}
                  <div className="absolute left-0 top-[15px] md:top-[20px] bottom-[15%] md:bottom-[20%] w-[3px] md:w-[4px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute top-0 left-0 w-full bg-[#caf265] rounded-full shadow-[0_0_15px_#caf265] origin-top ${isAutoPlaying ? "transition-transform duration-1000 ease-linear" : ""}`}
                      style={{ scaleY: isAutoPlaying ? (processStep + 1) * 0.3333 : smoothScroll }}
                    />
                  </div>

                  {[
                    { title: "Ürün Görselinizi Gönderin", desc: "Telefonla çekilmiş basit bir düz ürün, cansız manken veya askı fotoğrafı... Bizim için başlangıç noktası olması yeterli." },
                    { title: "Tasarım & Yapay Zeka İşliyor", desc: "Kreatif ekibimiz ve yapay zeka analiz motorumuz birleşerek, markanıza uyan en mükemmel vizyonu işliyor." },
                    { title: "Kampanyanız Yayınlanmaya Hazır", desc: "Cironuzu katlayacak, dünya standartlarında üretilmiş mankenli ve konsept yaşamsal kareler dijital reklamlarınıza hazır!" }
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className={`cursor-pointer transition-all duration-500 relative group pb-1 ${processStep === idx ? 'opacity-100 translate-x-1 lg:translate-x-3' : 'opacity-40 hover:opacity-70'}`}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setProcessStep(idx);
                        // Fiziksel scroll'ı the the da the that the the THE the the kaydırıyoruz The the ki scroll progress the (0,1,2 The the the) the the The ile the the The the state eşleşsin The the.
                        if (processRef.current) {
                          const sectionTop = processRef.current.offsetTop;
                          const targetY = sectionTop + (window.innerHeight * idx);
                          window.scrollTo({ top: targetY, behavior: 'smooth' });
                        }
                      }}
                    >
                      {/* pl-6(24px) - Barw(3px) - Dotw(12px) = -28.5px | pl-10(40px) - Barw(4px) - Dotw(16px) = -46px */}
                      <div className={`absolute -left-[28.5px] md:-left-[46px] w-3 h-3 md:w-4 md:h-4 rounded-full top-1.5 md:top-2 transition-all duration-500 z-10 ${processStep === idx ? 'bg-[#caf265] shadow-[0_0_20px_#caf265] scale-[1.3]' : 'bg-[#1e3b2b] group-hover:bg-white/40'}`} />
                      <div className="text-[#caf265]/50 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-1.5">Adım 0{idx + 1}</div>
                      <h3 className="text-xl lg:text-3xl font-display text-white mb-1.5 md:mb-2 font-medium tracking-tight leading-tight">{step.title}</h3>
                      <p className="text-[#a8b8af] font-light leading-relaxed text-xs lg:text-sm max-w-md">{step.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Sağ Panel: Görsel Gösterim (Max-w kısıtı ile Height büyümesi durduruldu) */}
                <div className="relative w-full max-w-[280px] md:max-w-[380px] lg:max-w-[440px] aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-[#0b2117] border border-white/10 p-1 md:p-3 shadow-2xl mx-auto">
                  <AnimatePresence mode="wait">
                    {processStep === 0 && (
                      <motion.div key="s1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                        <img src={surecPair?.before ? surecPair.before : "/assets/pages/homeyeni/banner/35325_siyah_1.webp"} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none">
                          <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                            <Camera size={32} />
                          </div>
                          <div className="mt-4 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm uppercase tracking-widest font-bold">Ham Görsel Yükleniyor</div>
                        </div>
                      </motion.div>
                    )}
                    {processStep === 1 && (
                      <motion.div key="s2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#0b2117] via-black to-[#0b2117] flex items-center justify-center flex-col gap-8 relative overflow-hidden border border-white/10">
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
                      <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                        <img src={surecPair?.after ? surecPair.after : "/assets/pages/homeyeni/banner/35325_siyah_8.jpg"} className="w-full h-full object-cover" />
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
          </div>
        </section>

        {/* 6.5. PROBLEM & SOLUTION (PAIN POINTS) */}
        <section className="py-24 lg:py-40 relative bg-[#0b2117] border-b border-[#0b2117]/10">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight text-white">
                Geleneksel Ajans Süreçleri <br />
                <span className="text-[#ff7e5f]">Sizi Yavaşlatıyor mu?</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Yüksek stüdyo ve manken çekim maliyetleri.',
                  'Koordinasyonu zor çoklu ajans yapıları.',
                  'Tahmin edilemeyen reklam performansları.',
                  'Yavaş içerik üretim ve revizyon süreçleri.'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#a8b8af]">
                    <div className="w-5 h-[1px] bg-[#ff7e5f]" />
                    <p className="text-lg font-light">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#caf265] text-[#0b2117] p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">Piksel AI Çözümü</h3>
              <div className="space-y-6 relative z-10">
                {[
                  'AI ile stüdyo maliyetlerinde %90 tasarruf.',
                  'Tüm hizmetler için tek ve şeffaf muhatap.',
                  'Veri odaklı, garantili büyüme stratejileri.',
                  'Gerçek zamanlı kreatif içerik üretimi.'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="mt-1 flex-shrink-0" />
                    <p className="text-xl font-medium leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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

        {/* 3. HİZMET KARTLARI - Neler Yapıyoruz? */}
        <section className={`${colors.beige} py-24 px-6 md:px-16 lg:px-24 mb-1`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-[#0b2117] max-w-xl mb-6 md:mb-0">
                E-Ticaretin her aşamasında <br className="hidden lg:block" />
                <span className="italic font-light text-[#86AA00]">yanınızdayız</span>
              </h2>
              <p className="text-[#3a5245] font-light text-lg leading-relaxed md:max-w-sm">
                Shopify partnerliğimizle sıfırdan kuruluma, veri taşımadan ileri düzey entegrasyonlara kadar her şeyi bizzat üstleniyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - Kurulum */}
              <motion.div variants={fadeInUp} className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-[#0b2117] cursor-pointer shadow-xl">
                <img src="/assets/pages/eticaretyeni/shopify_setup.webp" alt="Sıfırdan Mağaza Kurulumu" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl md:text-4xl font-display italic text-white mb-4 leading-tight group-hover:text-[#caf265] transition-colors">Sıfırdan Kurulum<br />& Tasarım</h3>
                  <p className="text-[#F4EFE6]/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 font-light italic">
                    İhtiyacınıza en uygun premium temaları markanıza uyarlıyor, UX odaklı profesyonel bir vitrin oluşturuyoruz.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Migration */}
              <motion.div variants={fadeInUp} className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-[#0b2117] cursor-pointer shadow-xl">
                <video src="/assets/common/shopify_migration.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl md:text-4xl font-display italic text-white mb-4 leading-tight group-hover:text-[#caf265] transition-colors">Kusursuz Veri<br />Taşıma</h3>
                  <p className="text-[#F4EFE6]/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 font-light italic">
                    Mevcut altyapınızı Shopify'a taşıyor; müşteri, ürün ve sipariş verilerinizi eksiksiz aktarıyoruz.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Entegrasyonlar */}
              <motion.div variants={fadeInUp} className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-[#0b2117] cursor-pointer shadow-xl">
                <img src="/assets/pages/eticaretyeni/shopify_integrations.webp" alt="Entegrasyonlar" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl md:text-4xl font-display italic text-white mb-4 leading-tight group-hover:text-[#caf265] transition-colors">Gelişmiş<br />Entegrasyonlar</h3>
                  <p className="text-[#F4EFE6]/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 font-light italic">
                    Sitenizdeki satış sürecini kolaylaştırmak için gerekli olan ödeme altyapılarını ve kargo entegrasyonlarını sorunsuzca kuruyoruz.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-[#0b2117]/10"
            >
              <p className="text-[#3a5245] text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                Sadece bir mağaza altyapısı kurmakla kalmıyor, büyüme iştahınızı teknik kapasitemizle harmanlıyoruz. Satışları katlayan o kusursuz formüle ve e-ticaret atılımına hazır mısınız?
              </p>
              <button onClick={() => navigate('/hizmetler/e-ticaret')} className="group bg-[#0b2117] text-[#F4EFE6] hover:bg-[#caf265] hover:text-[#0b2117] border border-[#0b2117] transition-all duration-300 rounded-full px-10 py-4 text-base font-semibold flex items-center gap-3 justify-center w-fit shrink-0">
                E-Ticaret Hizmetini İncele <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>


        {/* YENİ BÖLÜM: PARMAĞINIZIN UCUNDAKİ KREATİF ÇEŞİTLİLİK */}
        <section className={`${colors.beige} py-32 border-b ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left Column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.div variants={fadeInUp} className="mb-6 invisible md:visible h-px">
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-bold text-[#0b2117] leading-[1.05] mb-8 tracking-tight">
                  Sosyal Medya <br className="hidden md:block" /> <span className="italic font-light text-[#86AA00]">İçerik Üretimi</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-[#3a5245] text-lg md:text-xl font-medium leading-relaxed mb-6">
                  Çarpıcı reklam kurgularından, kaydırmayı durduran postlara ve viral potansiyelli reels videolarına kadar markanızın dijital etkileşimini kreatif gücümüzle uçuruşa geçiriyoruz.
                </motion.p>

                <motion.p variants={fadeInUp} className="text-[#4a6355] text-base leading-relaxed mb-10 font-light">
                  Size özel tasarlanmış modern, taze ve markanızla birebir örtüşen içerikler üretiyoruz. Hem de klasik bir ajansa göre çok daha hızlı ve bütçe dostu, şeffaf bir sistemle.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <button onClick={() => navigate('/hizmetler/sosyal-medya')} className={`group bg-[#0b2117] text-white hover:bg-[#caf265] hover:text-[#0b2117] border border-[#0b2117] transition-all duration-300 rounded-full px-10 py-4 text-base font-semibold flex items-center gap-3 justify-center w-fit`}>
                    Sosyal Medya Hizmetini Keşfet <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column (Video/Media Grid) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-[#0b2117] rounded-3xl p-4 md:p-6 overflow-hidden group aspect-[4/3] sm:aspect-video lg:aspect-[4/3] flex items-center justify-center cursor-pointer shadow-2xl"
              >
                {/* Embedded Grid of Images to simulate the Superside preview */}
                <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 w-full h-full opacity-80 group-hover:opacity-[0.85] transition-opacity duration-500 group-hover:scale-105 transform ease-out px-1">
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]">
                    <DynamicGridImage
                      initialSrc="/assets/common/image1.webp"
                      interval={4000}
                    />
                  </div>
                  <div className="col-span-1 row-span-2 rounded-xl overflow-hidden bg-[#1e3b2b]">
                    <video
                      src="/assets/common/end_product.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]">
                    <DynamicGridImage
                      initialSrc="/assets/common/image2.webp"
                      interval={5000}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]">
                    <DynamicGridImage
                      initialSrc="/assets/pages/sosyalmedyayeni/image3.webp"
                      interval={4500}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]">
                    <DynamicGridImage
                      initialSrc="/assets/pages/sosyalmedyayeni/image4.webp"
                      interval={5500}
                    />
                  </div>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2117]/60 via-transparent to-[#0b2117]/20 pointer-events-none" />
              </motion.div>
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
                Markanızın geleceğini <br /> <span className="text-[#0b2117] font-display font-bold not-italic">birlikte inşa edelim.</span>
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
