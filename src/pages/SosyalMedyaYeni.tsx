import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, type Variants } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  TrendingUp,
  Plus,
  Minus,
  Play,
  ChevronRight,
  Star,
  Volume2,
  Lightbulb,
  ListChecks,
  X
} from 'lucide-react';

// Animasyon Değişkenleri
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

// Proje Data (Çalışmalarımız)
export interface SocialProject {
  id: number;
  client: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  spanClass: string;
  aspectClass: string;
}

const socialProjects: SocialProject[] = [
  {
    id: 1,
    client: "Amazon Eczanesi",
    title: "Video Prodüksiyonu",
    category: "Reklam Yaratıcılığı",
    thumbnail: "/images/social-hero-1.webp",
    description: "Amazon'un yerel eczane hizmetleri için dikkat çekici CGI destekli reklam kampanyası.",
    spanClass: "md:col-span-4",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: 2,
    client: "Treatwell",
    title: "E-Posta Tasarımı",
    category: "Mobil Uygulama",
    thumbnail: "/images/social-hero-3.webp",
    description: "Güzellik ve rezervasyon platformu Treatwell'in mobil pazarlama ekranları.",
    spanClass: "md:col-span-4",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: 3,
    client: "Wilson",
    title: "Basketbol Kampanyası",
    category: "Sosyal Medya Yaratıcılığı",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800",
    description: "Yeni nesil basketbol topları için dinamik tipografi ve görsel efektlerle harmanlanmış sosyal ağ kampanyası.",
    spanClass: "md:col-span-4",
    aspectClass: "aspect-square md:aspect-[3/4] md:h-full lg:aspect-auto"
  },
  {
    id: 4,
    client: "Yüceltme",
    title: "Lansman Tasarımları",
    category: "Marka Kimliği",
    thumbnail: "/images/social-carousel.webp",
    description: "Cesur renk blokları ve kalın tipografinin birleştiği modern bir marka hikayesi.",
    spanClass: "md:col-span-6",
    aspectClass: "aspect-square md:aspect-video"
  },
  {
    id: 5,
    client: "Pernod Ricard",
    title: "Dijital Raporlar",
    category: "E-Kitap",
    thumbnail: "/images/social-strategy.webp",
    description: "Kurumsal dokümanların ve PDF tabanlı raporların tamamen baştan ve çekici hale getirilmesi.",
    spanClass: "md:col-span-3",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: 6,
    client: "Collabera",
    title: "Marka Yenileme",
    category: "Görsel Kimlik",
    thumbnail: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=800",
    description: "Kurumsal tabelalar ve ofis içi materyallerin uyumlu yeni tasarımı.",
    spanClass: "md:col-span-3",
    aspectClass: "aspect-[3/4]"
  }
];

const SosyalMedyaYeni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Modal ve Cursor State (Çalışmalarımız için)
  const [selectedProject, setSelectedProject] = useState<SocialProject | null>(null);
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

  // Renk Paleti (Superside stiline uyarlanmış Cinematic Brutalism)
  const colors = {
    beige: "bg-[#F4EFE6]",
    darkGreen: "bg-[#0b2117]",
    limeBtn: "bg-[#caf265]",
    textDark: "text-[#0b2117]",
    textLight: "text-[#F4EFE6]",
    borderColor: "border-[#e0dcd3]",
    borderColorDark: "border-[#1e3b2b]"
  };

  // Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "İçerik üretim süreciniz nasıl işliyor?",
      answer: "Marka kimliğinizi ve hedeflerinizi analiz ettikten sonra aylık bir içerik takvimi hazırlıyoruz. Onayınızın ardından çekim, kurgu ve tasarım aşamalarını tamamlayıp paylaşıma hazır hale getiriyoruz."
    },
    {
      question: "Çekimleri siz mi yapıyorsunuz?",
      answer: "İhtiyacınıza göre stüdyo çekimlerinden UGC (Kullanıcı Tarafından Üretilen İçerik) tarzı projelere kadar geniş bir yelpazede hizmet veriyoruz. Yapay zeka destekli üretimlerle de çekim maliyetlerini büyük oranda düşürebiliyoruz."
    },
    {
      question: "Hesabımın yönetimi tamamen sizde mi oluyor?",
      answer: "Eğer Topluluk Yönetimi hizmetini de alırsanız, evet. Sadece içerikleri üretmekle kalmıyor, paylaşım yapıyor, yorum ve mesajlara belirlediğimiz strateji doğrultusunda yanıt veriyoruz."
    },
    {
      question: "Minimum çalışma süresi nedir?",
      answer: "Sosyal medya organik bir büyüme alanıdır, bu nedenle stratejilerin oturması zaman alır. Tavsiye ettiğimiz minimum çalışma süresi 3-6 aydır ancak ihtiyaca yönelik esnek paketlerimiz de mevcuttur."
    },
    {
      question: "Reklam bütçesi yönetimi dahil mi?",
      answer: "Biz organik ve reklam kreativleri üretiyoruz. Performans pazarlama ve bütçe yönetimi hizmetimiz Dijital Büyüme departmanımız tarafından yönetilmektedir, her iki hizmeti entegre bir şekilde sunabiliriz."
    }
  ];

  return (
    <div className={`font-sans sosyal-page ${colors.beige} ${colors.textDark} min-h-screen selection:bg-[#caf265] selection:text-[#0b2117]`}>
      {/* Header */}
      <div className={`${colors.darkGreen}`}>
        <Header />
      </div>

      <main>

        {/* 1. HERO SECTION - Superside Style Split Layout */}
        <section className={`relative pt-32 pb-20 lg:py-40 px-6 md:px-16 lg:px-24 overflow-hidden ${colors.darkGreen}`}>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#caf265]/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              {/* Sol İçerik Alanı */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-[38rem]"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#caf265]/30 bg-[#caf265]/10 text-[#caf265] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                  <Zap size={14} className="opacity-80 shrink-0" />
                  YÜKSEK ETKİLEŞİMLİ İÇERİK
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h1 className={`text-[3.5rem] md:text-6xl lg:text-[5rem] font-display font-normal italic ${colors.textLight} leading-[1.05] tracking-tight mb-8`}>
                    Sosyal Medya <br />
                    <span className="font-display not-italic font-normal text-white">kreatiflerini</span> <br className="hidden sm:block" /> ölçeklendirin
                  </h1>
                </motion.div>

                <motion.p variants={fadeInUp} className="text-[#a8b8af] md:text-xl font-light leading-relaxed max-w-md mb-10">
                  Ajans yavaşlığı ve freelance sürprizleri olmadan, markanız için viral kapasitesi yüksek, dönüşüm odaklı video ve tasarımlar üretiyoruz.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <button className={`${colors.limeBtn} ${colors.textDark} hover:bg-[#b5dc57] transition-colors duration-300 rounded-full px-8 py-4 text-base font-semibold flex items-center justify-center gap-3 w-fit group`}>
                    Kreatif Üretimi Başlat
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white hover:text-[#caf265] transition-colors duration-300 rounded-full px-8 py-4 border border-[#1e3b2b] hover:border-[#caf265]/50 bg-[#1e3b2b]/30 text-base font-medium flex items-center justify-center gap-3 w-fit">
                    Örnek İşleri Gör
                  </button>
                </motion.div>
              </motion.div>

              {/* Sağ Görsel Alanı (Superside stili hareketli / asimetrik kartlar) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative h-[500px] lg:h-[600px] w-full hidden md:block"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] opacity-20 pointer-events-none" />

                {/* Floating Image Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[10%] left-[5%] w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <img src="/images/social-hero-1.webp" alt="Creative Video" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[5%] right-[5%] w-[50%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-20 bg-[#caf265]"
                >
                  <img src="/images/social-hero-2.webp" alt="Social Post" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-medium text-lg">Yüksek CTR Optimizasyonu</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-[20%] right-[15%] w-[35%] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-[#0b2117] z-10"
                >
                  <img src="/images/social-hero-3.webp" alt="Reels" className="w-full h-full object-cover" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[45%] left-[-5%] bg-white rounded-xl p-4 shadow-xl z-30 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Büyüme Oranı</p>
                    <p className="text-sm font-bold text-gray-900">+340%</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LOGO MARQUEE */}
        <div className={`py-12 border-b ${colors.borderColorDark} ${colors.darkGreen} overflow-hidden`}>
          <div className="max-w-[1400px] mx-auto px-6 mb-6">
            <p className="text-[#a8b8af] text-sm font-medium text-center uppercase tracking-widest">Global & Yerel 100+ Markanın Tercihi</p>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
              {/* Dummy Logos (Replace with actual SVG/Image later) */}
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="text-[#F4EFE6]/40 font-display font-normal italic text-2xl">BrandLogo {i}</div>
              ))}
            </div>
            <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="text-[#F4EFE6]/40 font-display font-normal italic text-2xl">BrandLogo {i}</div>
              ))}
            </div>
            {/* Fade Gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b2117] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b2117] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* 3. VALUE PROPS (3 Columns) */}
        <section className={`${colors.beige} py-32 border-b ${colors.borderColor}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-normal italic text-[#0b2117] mb-6">İhtiyacınız olan hız ve kalite <br /><span className="font-display font-normal not-italic text-black">Aynı çatı altında.</span></h2>
              <p className="text-[#3a5245] max-w-2xl mx-auto text-lg">Yetersiz araçlar veya yavaş ajans süreçleriyle vakit kaybetmeyin. Dünyanın en iyi kreatif üretim modelini sunuyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0b2117] text-[#caf265] flex items-center justify-center mb-6 shadow-xl">
                  <Clock size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-normal italic text-[#0b2117] mb-4">Göz Açıp Kapayıncaya Kadar</h3>
                <p className="text-[#4a6355] leading-relaxed">
                  2-4 hafta süren geleneksel ajans teslimatlarını unutun. Trendlere anında tepki veren, haftalık kreatif döngüleriyle çalışıyoruz.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0b2117] text-[#caf265] flex items-center justify-center mb-6 shadow-xl">
                  <Star size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-normal italic text-[#0b2117] mb-4">Sadece En İyiler</h3>
                <p className="text-[#4a6355] leading-relaxed">
                  İçerikleriniz staja yeni başlamış kişilere değil, alanında uzman direktörler ve son teknoloji yapay zeka araçları tarafından yönetilir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0b2117] text-[#caf265] flex items-center justify-center mb-6 shadow-xl">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-normal italic text-[#0b2117] mb-4">Sıfır Gizli Maliyet</h3>
                <p className="text-[#4a6355] leading-relaxed">
                  Sürpriz faturalar yok. Abonelik modeliyle veya net proje bütçeleriyle çalışarak bütçenizi her zaman korur ve planlı ilerlersiniz.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* YENİ BÖLÜM: PARMAĞINIZIN UCUNDAKİ KREATİF ÇEŞİTLİLİK */}
        <section className={`${colors.beige} py-32 border-b ${colors.borderColor}`}>
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
                <motion.div variants={fadeInUp} className="mb-8">
                  <h3 className="text-[#3a5245] text-[13px] font-bold tracking-widest uppercase mb-4">PARMAĞINIZIN UCUNDAKİ KREATİF ÇEŞİTLİLİK</h3>
                  <div className="w-full h-px bg-[#0b2117]/10"></div>
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[4rem] font-display font-normal text-[#0b2117] leading-[1.05] mb-8 tracking-tight">
                  Tasarım, video, hareketli grafik <span className="italic">ve daha fazlası</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-[#3a5245] text-[1.1rem] font-medium leading-relaxed mb-6">
                  İster çarpıcı bir reklam kurgusuna, ister etkileşim odaklı statik tasarımlara, ister viral potansiyelli reels videolarına ihtiyacınız olsun; global standartlardaki yaratıcı ekibimiz bunu gerçeğe dönüştürür.
                </motion.p>

                <motion.p variants={fadeInUp} className="text-[#4a6355] text-base leading-relaxed mb-10 font-light">
                  Geleneksel kreatif ajanslarının hantallığından uzak; günümüz markalarının hızına ve büyüyen ihtiyaçlarına ayak uydurmak üzere kurulmuş, yeni nesil ve teknoloji destekli bir "Hizmet Olarak Kreatif" çözümüyüz. Tüm tasarım ve video ihtiyaçlarınızı ölçeklenebilir ve şeffaf bir modelle hızlıca teslim alırsınız.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <button className={`bg-[#0b2117] text-white hover:bg-[#1e3b2b] transition-all duration-300 rounded-full px-10 py-4 text-base font-semibold flex items-center justify-center w-fit`}>
                    Örnekleri İncele
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
                <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 w-full h-full opacity-80 group-hover:opacity-[0.85] transition-opacity duration-500 group-hover:scale-105 transform ease-out">
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]"><img src="/images/social-hero-1.webp" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80')} /></div>
                  <div className="col-span-1 row-span-2 rounded-xl overflow-hidden bg-[#1e3b2b]"><img src="/images/social-reels.webp" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80')} /></div>
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]"><img src="/images/social-carousel.webp" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80')} /></div>
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]"><img src="/images/social-ads.webp" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1541560052-5e137f229371?w=800&q=80')} /></div>
                  <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#1e3b2b]"><img src="/images/social-motion.webp" alt="Work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80')} /></div>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2117]/60 via-transparent to-[#0b2117]/20 pointer-events-none" />

                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#F4EFE6]/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#caf265]/90 group-hover:text-[#0b2117] transition-all duration-300 z-10 border border-white/30 group-hover:border-[#caf265]">
                  <Play size={32} className="ml-1 fill-current" />
                </div>

                {/* Fake Sound Button (top right) */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-10 border border-white/10 hover:bg-black/60 transition-colors">
                  <Volume2 size={18} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. CREATIVE SERVICES GRID (Superside Style Masonry) */}
        {(() => {
          const creativeServices = [
            {
              title: "Reklam Kreatifleri",
              desc: "Sosyal medya kanallarınız için orijinal tasarımlar. Instagram'dan YouTube'a veya Facebook'a statik, animasyonlu veya video formatta.",
              img: "/images/social-reels.webp",
              span: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[776px]",
              bgClass: "bg-[#18201d]",
              imageClass: "absolute bottom-0 right-0 w-full h-[65%] object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700",
            },
            {
              title: "Kurumsal Kimlik",
              desc: "İhtiyacınız olan marka uzmanlığını elde edin, temel marka geliştirmelerinden özel marka çözümlerine kadar her detay kontrol altında.",
              img: "/images/social-hero-3.webp",
              span: "md:col-span-1 md:row-span-1 min-h-[380px]",
              bgClass: "bg-[#336b9c]",
              imageClass: "absolute bottom-0 right-0 w-[85%] h-[60%] object-cover object-left-top shadow-2xl group-hover:scale-105 transition-transform duration-700",
            },
            {
              title: "Web Tasarım",
              desc: "Özenle tasarlanmış UI/UX tel kafesleri ve tasarımlarıyla, sıfırdan oluşturulmuş veya mevcut materyallere dayanan açılış sayfaları edinin.",
              img: "/images/social-hero-1.webp",
              span: "md:col-span-1 md:row-span-1 min-h-[380px]",
              bgClass: "bg-[#1f1614]",
              imageClass: "absolute bottom-0 right-0 w-[80%] h-[75%] object-cover opacity-80 rounded-tl-xl group-hover:scale-105 transition-transform duration-700",
            },
            {
              title: "Sosyal Medya Kreatifleri",
              desc: "Sosyal medya genelinde daha iyi sonuçlar elde etmenizi sağlayan statik, hareketli reklam kreatifleri ve konsept ivmeleri edinin.",
              img: "/images/social-carousel.webp",
              span: "md:col-span-2 md:row-span-1 min-h-[380px]",
              bgClass: "bg-[#0b1426]",
              imageClass: "absolute bottom-0 right-0 w-[60%] h-[85%] object-cover object-left shadow-2xl rounded-tl-xl group-hover:scale-105 transition-transform duration-700",
            },
            {
              title: "E-Posta Tasarımı",
              desc: "Tasarım kalıpları, yenilikçi şablonlar ve kreatif yaklaşımlarla kitlelerinizin ilgisini çeken kurumsal iletişim kanalları tasarlayın.",
              img: "/images/social-hero-2.webp",
              span: "md:col-span-1 md:row-span-1 min-h-[380px]",
              bgClass: "bg-[#102a1d]",
              imageClass: "absolute bottom-0 left-0 w-[70%] h-[75%] object-cover rounded-tr-xl opacity-90 group-hover:scale-105 transition-transform duration-700",
            },
            {
              title: "E-Kitap & Rapor Tasarımı",
              desc: "İlgiyi merkezinde toplayan, kurumsal PDF'lerinizi okutmayı baştan başlatan e-kitap ve özelleştirilmiş rapor tasarım çözümleri.",
              img: "/images/social-strategy.webp",
              span: "md:col-span-1 md:row-span-1 min-h-[380px]",
              bgClass: "bg-[#6d5b4a]",
              imageClass: "absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700",
            },
            {
              title: "İllüstrasyon Tasarımı",
              desc: "Şirketinizin doğrudan ve güçlü bir yansıması olarak hareket eden ve pazarlama operasyonlarını destekleyen on-brand çizimler.",
              img: "/images/social-motion.webp",
              span: "md:col-span-1 md:row-span-1 min-h-[380px]",
              bgClass: "bg-[#1c38e6]",
              imageClass: "absolute right-0 bottom-0 w-[65%] h-[85%] object-cover object-left-top opacity-50 mix-blend-screen group-hover:scale-105 transition-transform duration-700",
            }
          ];

          return (
            <section className={`${colors.darkGreen} py-32 pt-20 border-t border-[#1e3b2b]`}>
              <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-normal text-[#F4EFE6] leading-tight">
                    Her platform için <br className="md:hidden" /><span className="italic">özelleşmiş üretim</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 auto-rows-auto">
                  {creativeServices.map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`relative rounded-3xl overflow-hidden group flex flex-col justify-between ${service.bgClass} ${service.span} shadow-xl`}
                    >
                      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
                        <img src={service.img} alt={service.title} className={service.imageClass}
                          onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop')} />
                      </div>
                      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>

                      <div className="relative z-10 p-6 flex flex-col h-full">
                        <div className="mb-auto">
                          <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                          <p className="text-xs md:text-sm text-gray-200 font-light leading-relaxed max-w-[95%]">
                            {service.desc}
                          </p>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                          <button className="inline-flex items-center gap-2 text-xs text-white hover:text-white transition-opacity opacity-70 hover:opacity-100 font-medium pb-1 border-b border-transparent hover:border-white">
                            İncele <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* 5. PROCESS (How it works - 1, 2, 3) */}
        <section className={`${colors.darkGreen} py-32 border-t ${colors.borderColorDark} overflow-hidden`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h3 className="text-[#caf265] text-sm font-bold tracking-widest uppercase mb-6">NASIL ÇALIŞIYORUZ?</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal italic text-[#F4EFE6] leading-tight">Zamanınızı geri kazanın,<br /> <span className="font-display font-normal not-italic text-white">tasarımı bize bırakın.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#caf265]/50 to-transparent border-dashed border-t border-[#1e3b2b]" />

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[#1e3b2b] border border-[#caf265]/20 flex items-center justify-center text-[#caf265] text-3xl font-display font-normal italic mb-8 group-hover:bg-[#caf265] group-hover:text-[#0b2117] transition-all duration-500 shadow-xl">
                  1
                </div>
                <h4 className="text-2xl font-display font-normal italic text-[#F4EFE6] mb-4">Brief İletin</h4>
                <p className="text-[#a8b8af] leading-relaxed max-w-xs px-4">Kolaylaştırılmış panelimiz üzerinden veya ortak toplantılarımızda ihtiyaçlarınızı birkaç dakika içinde tanımlayın.</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0"
              >
                <div className="w-24 h-24 rounded-full bg-[#1e3b2b] border border-[#caf265]/20 flex items-center justify-center text-[#caf265] text-3xl font-display font-normal italic mb-8 group-hover:bg-[#caf265] group-hover:text-[#0b2117] transition-all duration-500 shadow-xl">
                  2
                </div>
                <h4 className="text-2xl font-display font-normal italic text-[#F4EFE6] mb-4">Sihir Gerçekleşsin</h4>
                <p className="text-[#a8b8af] leading-relaxed max-w-xs px-4">Tasarım ekibimiz hemen işe koyulur. %100 şeffaflıkla ilerlemeyi görür ve anında geri bildirim verirsiniz.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0"
              >
                <div className="w-24 h-24 rounded-full bg-[#1e3b2b] border border-[#caf265]/20 flex items-center justify-center text-[#caf265] text-3xl font-display font-normal italic mb-8 group-hover:bg-[#caf265] group-hover:text-[#0b2117] transition-all duration-500 shadow-xl">
                  3
                </div>
                <h4 className="text-2xl font-display font-normal italic text-[#F4EFE6] mb-4">Sonucu Alın</h4>
                <p className="text-[#a8b8af] leading-relaxed max-w-xs px-4">Kısa sürede yüksek kaliteli tasarımlarınızı teslim alın ve sosyal medyanızda anında yayına girin.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. COMPARISON (Why Us?) */}
        <section className={`${colors.beige} py-32 border-t ${colors.borderColor}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal italic text-[#0b2117] leading-tight mb-6">
                  Mükemmel çözüm<br /> <span className="font-display font-normal not-italic text-black">uzaklarda değil</span>
                </h2>
                <p className="text-[#3a5245] text-lg font-light leading-relaxed mb-8 max-w-md">
                  Geleneksel reklam ajanslarının bürokrasisinden ve serbest çalışanların belirsizliğinden yoruldunuz mu? Yeni nesil kreatif ajans modelimizle tanışın.
                </p>

                <ul className="space-y-6">
                  {[
                    "Her zaman ulaşılabilir özel proje yöneticisi",
                    "Küresel trendlere anında adaptasyon",
                    "Sınırsız revizyon imkanı (Abonelik modelinde)",
                    "Kalite kontrol süreçlerinden geçmiş hatasız teslimat"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#0b2117]">
                      <CheckCircle2 className="text-[#caf265] bg-[#0b2117] rounded-full shrink-0 mt-1" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side Table / Blocks */}
              <div className="flex flex-col gap-6">
                {/* Agency Block */}
                <div className="bg-white rounded-3xl p-8 border border-[#e0dcd3] opacity-60">
                  <h3 className="text-xl font-bold text-gray-400 mb-4 line-through">Geleneksel Ajanslar</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-gray-500 text-sm">
                      <Minus size={18} className="shrink-0 text-red-300" /> Yüksek retainer maliyetleri ve uzun kontratlar
                    </li>
                    <li className="flex gap-3 text-gray-500 text-sm">
                      <Minus size={18} className="shrink-0 text-red-300" /> Haftalarca süren "fikir geliştirme" aşamaları
                    </li>
                    <li className="flex gap-3 text-gray-500 text-sm">
                      <Minus size={18} className="shrink-0 text-red-300" /> Projenin stajyer/junior ekiplere devri
                    </li>
                  </ul>
                </div>

                {/* PIKSEL AI Block */}
                <div className="bg-[#0b2117] rounded-3xl p-10 shadow-2xl relative overflow-hidden transform lg:scale-105 border border-[#1e3b2b]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#caf265]/10 rounded-full blur-[80px]" />
                  <h3 className="text-2xl font-display font-normal italic text-white mb-6">Piksel AI Sosyal Medya</h3>
                  <ul className="space-y-5 relative z-10">
                    <li className="flex gap-4 text-[#F4EFE6]">
                      <CheckCircle2 size={24} className="shrink-0 text-[#caf265]" />
                      <span className="leading-snug">Şeffaf fiyatlandırma, esnek bütçe yönetimi</span>
                    </li>
                    <li className="flex gap-4 text-[#F4EFE6]">
                      <CheckCircle2 size={24} className="shrink-0 text-[#caf265]" />
                      <span className="leading-snug">Yapay zeka hızlandırmasıyla 48 saatte ilk teslimatlar</span>
                    </li>
                    <li className="flex gap-4 text-[#F4EFE6]">
                      <CheckCircle2 size={24} className="shrink-0 text-[#caf265]" />
                      <span className="leading-snug">Kıdemli Art Direktörler ve Stratejistler ile çalışma</span>
                    </li>
                    <li className="flex gap-4 text-[#F4EFE6]">
                      <CheckCircle2 size={24} className="shrink-0 text-[#caf265]" />
                      <span className="leading-snug">Veriye ve dönüşüme direkt etki eden tasarımlar</span>
                    </li>
                  </ul>
                </div>

                {/* Freelancer Block */}
                <div className="bg-white rounded-3xl p-8 border border-[#e0dcd3] opacity-60">
                  <h3 className="text-xl font-bold text-gray-400 mb-4 line-through">Serbest Çalışanlar</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-gray-500 text-sm">
                      <Minus size={18} className="shrink-0 text-red-300" /> Sınırlı bant genişliği ve tekil tecrübe
                    </li>
                    <li className="flex gap-3 text-gray-500 text-sm">
                      <Minus size={18} className="shrink-0 text-red-300" /> İleti̇şi̇m kopuklukları ve ulaşılamama ri̇ski̇
                    </li>
                    <li className="flex gap-3 text-gray-500 text-sm">
                      <Minus size={18} className="shrink-0 text-red-300" /> Kalite stabilitesinin garanti edilememesi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR DIFFERENCE BLOCK */}
        <section className={`${colors.beige} py-32 border-t ${colors.borderColor}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h3 className="text-[#3a5245] text-[13px] font-bold tracking-widest uppercase mb-6">BİZİM FARKIMIZ</h3>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-normal text-[#0b2117] leading-tight">
                Piksel AI, <span className="italic">hızlı büyüyen</span> <br className="hidden md:block" /> markalar için kusursuz çözümdür
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {/* Scalable */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-10 transition-transform group-hover:scale-105 cursor-pointer shadow-sm">
                  <Lightbulb size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#3a5245] text-[11px] font-bold tracking-widest uppercase mb-5">ÖLÇEKLENEBİLİR</h4>
                <h3 className="text-[1.75rem] font-display font-normal italic text-[#0b2117] mb-4 transition-colors">Kurum içi yaratıcılığınızı artırın</h3>
                <p className="text-[#4a6355] text-[15px] leading-[1.7] font-light max-w-[90%]">
                  Ekibinize ekstra yönetim yükü bindirmeden, stratejik ve yüksek etkili işlere odaklanabilmeniz için ağır işleri biz üstleniyoruz.
                </p>
              </motion.div>

              {/* Flexible */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-10 transition-transform group-hover:scale-105 cursor-pointer shadow-sm">
                  <ListChecks size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#3a5245] text-[11px] font-bold tracking-widest uppercase mb-5">ESNEK</h4>
                <h3 className="text-[1.75rem] font-display font-normal italic text-[#0b2117] mb-4 transition-colors">Daha fazla projeye evet deyin</h3>
                <p className="text-[#4a6355] text-[15px] leading-[1.7] font-light max-w-[90%]">
                  Genişletilmiş kapasite veya farklı yeteneklere ihtiyaç duyduğunuz her an, işi tamamlamak için gereken tüm kaynaklara tek noktadan erişin.
                </p>
              </motion.div>

              {/* 24/7 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-10 transition-transform group-hover:scale-105 cursor-pointer shadow-sm">
                  <Star size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#3a5245] text-[11px] font-bold tracking-widest uppercase mb-5">7/24 KESİNTİSİZ</h4>
                <h3 className="text-[1.75rem] font-display font-normal italic text-[#0b2117] mb-4 transition-colors">Hız için kaliteden ödün vermeyin</h3>
                <p className="text-[#4a6355] text-[15px] leading-[1.7] font-light max-w-[90%]">
                  Yeni nesil teknolojiler destekli kreatif ekibimiz, ajans standartlarındaki prestijli işleri geleneksel sürelerin çok altında teslim eder.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ÇALIŞMALARIMIZ (WORKS GRID) */}
        <section className={`${colors.beige} py-32 border-t ${colors.borderColor}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h3 className="text-[#3a5245] text-[13px] font-bold tracking-widest uppercase mb-4">ÇALIŞMAMIZ</h3>
                <h2 className="text-4xl md:text-5xl lg:text-show font-display font-normal italic text-[#0b2117] leading-tight">
                  Önde gelen markaların <br /> <span className="font-display font-normal not-italic text-black">Piksel AI'ı nasıl kullandığını görün.</span>
                </h2>
              </div>
              <button className="text-[#0b2117] hover:bg-[#e3decf] transition-colors rounded-full px-8 py-3 border border-[#0b2117]/20 text-sm font-medium w-fit shrink-0">
                Tüm çalışmalarımızı keşfedin
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
              {socialProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative cursor-pointer ${project.spanClass} flex flex-col`}
                  onClick={() => setSelectedProject(project)}
                  onMouseMove={handleMouseMove}
                >
                  <div className={`w-full rounded-[2rem] overflow-hidden bg-[#e0dcd3] relative ${project.aspectClass} mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500`}>
                    <img src={project.thumbnail} alt={project.client} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop')} />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                    {/* Hover Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100 pointer-events-none z-10 hidden md:block">
                      <div className="w-24 h-24 rounded-full bg-[#caf265] text-[#0b2117] flex items-center justify-center font-bold text-xs uppercase tracking-widest shadow-2xl">
                        İncele
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-normal italic text-[#0b2117] mb-2">{project.client}</h3>
                  <p className="text-[#4a6355] text-[13px] font-medium tracking-wide uppercase">{project.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ ACCORDION */}
        <section className={`${colors.darkGreen} py-32 border-t ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5 relative">
                <div className="sticky top-32">
                  <h3 className="text-[#a8b8af] text-xs font-bold tracking-widest uppercase mb-4">SORULARINIZ MI VAR?</h3>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal italic text-[#F4EFE6] leading-tight mb-6">
                    Sıkça sorulan <br />
                    <span className="font-display not-italic font-normal text-white">sorular</span>
                  </h2>
                  <p className="text-[#a8b8af] text-lg font-light leading-relaxed mb-8 max-w-sm">
                    Süreç, teslimat hızları ve işleyişimiz hakkında aklınıza takılan her şeyi yanıtladık.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border-t border-[#1e3b2b]">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={index} className="border-b border-[#1e3b2b]">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full py-8 flex items-start justify-between text-left group gap-8"
                        >
                          <h3 className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#caf265]' : 'text-[#F4EFE6] group-hover:text-white'}`}>
                            {faq.question}
                          </h3>
                          <div className={`mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#caf265] text-[#0b2117]' : 'text-[#a8b8af] group-hover:text-white'}`}>
                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                          </div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                            marginBottom: isOpen ? 32 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#a8b8af] text-lg leading-relaxed font-light pr-12">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. BOTTOM CTA (Superside huge block) */}
        <section className={`${colors.beige} py-32 px-6 md:px-16 lg:px-24 border-t ${colors.borderColor}`}>
          <div className="max-w-[1400px] mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col items-center justify-center text-center gap-8 shadow-2xl">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#caf265]/10 via-[#0b2117] to-[#0b2117] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#caf265]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#caf265] rounded-2xl flex items-center justify-center text-[#0b2117] mb-8 shadow-[0_0_30px_rgba(202,242,101,0.3)]">
                <Zap size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display font-normal italic text-[#F4EFE6] mb-8 leading-[1.1]">
                Markanızı birlikte <br /> <span className="text-white font-display font-normal not-italic">büyütmeye hazır mısınız?</span>
              </h2>
              <p className="text-[#a8b8af] mb-12 text-lg md:text-xl font-light max-w-xl">
                Ajans hantallığına son verin. Kaliteli, hızlı ve veri odaklı kreatif süreçlerimize bugün katılın.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
                <button className={`${colors.limeBtn} ${colors.textDark} hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] group shadow-[0_8px_30px_rgba(202,242,101,0.2)]`}>
                  Toplantı Planla
                  <ChevronRight className="group-hover:translate-x-1.5 transition-transform" />
                </button>
                <a href="mailto:bilgi@pikselai.com" className="text-white hover:text-[#caf265] transition-colors rounded-full px-10 py-5 border border-white/20 hover:border-[#caf265]/50 text-lg font-medium flex items-center justify-center w-full sm:w-auto">
                  bilgi@pikselai.com
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <div className={`${colors.darkGreen}`}>
        <Footer />
      </div>

      {/* PROJECT MODAL (Superside Horizontal Slider overlay) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#0b2117]"
            style={{ cursor: 'none' }}
            onMouseMove={handleMouseMove}
          >
            {/* Custom Cursor Inside Modal */}
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
              }}
            >
              {cursorType === 'exit' ? (
                <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                  <span className="text-[#0b2117] text-sm font-bold">Çıkış</span>
                </div>
              ) : (
                <div className="w-[24px] h-[24px] rounded-full bg-[#caf265] shadow-[0_0_20px_rgba(202,242,101,0.5)]" />
              )}
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-50 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0b2117] transition-all group"
              style={{ cursor: 'none' }}
              onMouseEnter={() => setCursorType('exit')}
              onMouseLeave={() => setCursorType('dot')}
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              <span className="sr-only">Kapat</span>
            </motion.button>

            <div
              className="w-full h-full flex flex-col bg-[#0b2117]"
              style={{ cursor: 'none' }}
            >
              {/* TOP: Horizontal Photo Strip */}
              <div
                className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar"
                onWheel={(e) => {
                  if (e.currentTarget) {
                    e.currentTarget.scrollLeft += e.deltaY;
                  }
                }}
              >
                <div className="h-full px-6 md:px-16 py-6 md:py-12 flex items-center space-x-3 md:space-x-8 min-w-max">

                  {/* Col: Intro Block */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="h-full w-[350px] md:w-[500px] shrink-0 relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#1e3b2b]"
                  >
                    <img src={selectedProject.thumbnail} alt={selectedProject.client} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0b2117]/30 mix-blend-multiply"></div>
                    <div className="absolute top-10 left-10 text-[#caf265] z-10 font-bold tracking-widest uppercase">
                      {selectedProject.client}
                    </div>
                  </motion.div>

                  {/* Col: Mixed */}
                  <div className="h-full w-[260px] md:w-[350px] flex flex-col space-y-3 md:space-y-6 shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden relative"
                    >
                      <img src="/images/social-carousel.webp" className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=600&auto=format&fit=crop')} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-[#caf265]"
                    >
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0b2117] rounded-[2rem] relative overflow-hidden flex items-center justify-center text-[#caf265] font-display font-normal italic text-2xl">
                          AI
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Col: Wide image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="h-full w-[400px] md:w-[650px] shrink-0 relative rounded-2xl md:rounded-[2rem] overflow-hidden"
                  >
                    <img src="/images/social-hero-3.webp" className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop')} />
                  </motion.div>

                </div>
              </div>

              {/* BOTTOM: Fixed Typography Section */}
              <div
                className="shrink-0 px-8 md:px-16 py-8 md:py-12 border-t border-white/10 bg-[#0b2117]"
                onMouseEnter={() => setCursorType('exit')}
                onMouseLeave={() => setCursorType('dot')}
                onClick={() => setSelectedProject(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 max-w-screen-2xl mx-auto">
                  {/* Left: Title */}
                  <div className="shrink-0 max-w-md">
                    <h2
                      className="text-4xl md:text-5xl font-display font-normal italic text-[#F4EFE6] mb-3"
                    >
                      {selectedProject.client}
                    </h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[#caf265] text-sm tracking-widest font-bold uppercase"
                    >
                      {selectedProject.category}
                    </motion.p>
                  </div>

                  {/* Right: Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-[#a8b8af] leading-relaxed font-light max-w-xl"
                  >
                    {selectedProject.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
          .custom-scrollbar::-webkit-scrollbar {
              width: 0px;
          }
          .custom-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
          .sosyal-page h1,
          .sosyal-page h2,
          .sosyal-page h3,
          .sosyal-page h4,
          .sosyal-page h5,
          .sosyal-page h6 {
              font-family: 'Raleway', Arial, sans-serif;
              letter-spacing: 0.1px;
          }
      `}</style>
    </div>
  );
};

export default SosyalMedyaYeni;
