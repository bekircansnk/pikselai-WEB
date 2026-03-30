import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
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
  Compass
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

const IMG_POOL = [
  "/sosyal_medya_resimler/venüs/venus1.webp",
  "/sosyal_medya_resimler/cazador/cazador1.webp",
  "/sosyal_medya_resimler/camp and map/camp1.webp",
  "/sosyal_medya_resimler/mina drinks/mina1.webp",
  "/sosyal_medya_resimler/image1.webp",
  "/sosyal_medya_resimler/image2.webp",
  "/sosyal_medya_resimler/image3.webp",
  "/sosyal_medya_resimler/image4.webp",
  "/sosyal_medya_resimler/image5.webp",
  "/sosyal_medya_resimler/image6.webp",
  "/sosyal_medya_resimler/sosyal_medya_partlar/1.webp",
  "/sosyal_medya_resimler/sosyal_medya_partlar/2.webp",
  "/sosyal_medya_resimler/sosyal_medya_partlar/3.webp",
  "/sosyal_medya_resimler/sosyal_medya_partlar/4.webp",
  "/sosyal_medya_resimler/sosyal_medya_partlar/5.webp"
];

const aiProjects = [
  { id: 1, client: "AI Manken Çalışmamız", category: "Virtual Model & Styling", thumbnail: IMG_POOL[0], spanClass: "md:col-span-4", aspectClass: "aspect-[3/4]" },
  { id: 2, client: "E-TİCARET ÜRETİMİ", category: "Product Photography", thumbnail: IMG_POOL[3], spanClass: "md:col-span-8", aspectClass: "aspect-square md:aspect-video" },
  { id: 3, client: "REKLAM & POSTER", category: "Brand Campaigns", thumbnail: IMG_POOL[6], spanClass: "md:col-span-6", aspectClass: "aspect-[4/3]" },
  { id: 4, client: "DIŞ ÇEKİM & LIFESTYLE", category: "Creative Concepts", thumbnail: IMG_POOL[7], spanClass: "md:col-span-6", aspectClass: "aspect-[4/3]" }
];

const AiProduction = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Designer Color Code


  const services = [
    { title: "Sanal Manken", desc: "Markanıza özel bir AI manken tasarlayın. Her kampanyada tutarlı yüz, profesyonel pozlar ve markanıza özel stil ile personanızı güçlendirin.", img: IMG_POOL[0], icon: <User size={24} />, badge: "Özel Yüz Tasarımı" },
    { title: "Ürün Fotoğrafçılığı", desc: "Stüdyo ortamına gerek kalmadan, sadece ürününüzün bir karesiyle dünya standartlarında, yüksek çözünürlüklü ürün fotoğrafları üretiyoruz.", img: IMG_POOL[3], icon: <ImageIcon size={24} />, badge: "Stüdyo Kalitesi" },
    { title: "Ghost Mannequin", desc: "Ürünlerinizi 3D formda, sanki görünmez bir manken üzerindeymiş gibi sergileyin. İç dikiş detayları ve dikiş detaylarıyla gerçekliği yansıtın.", img: IMG_POOL[6], icon: <Layout size={24} />, badge: "3D Form & Detay" },
    { title: "Reklam Kampanyaları", desc: "Yaratıcı posterler ve sosyal medya reklamlarınıza özel dönüşüm odaklı kreatifler. Sınırları sadece hayal gücünüzle belirleyin.", img: IMG_POOL[8], icon: <Target size={24} />, badge: "Dönüşüm Odaklı" },
    { title: "Konsept Lifestyle", desc: "Ürünlerinizin hikayesini anlatan çarpıcı yaşam tarzı çekimleri. Ürünü istediğiniz her mekanda yüksek gerçekçilikle sahneleyin.", img: IMG_POOL[5], icon: <Compass size={24} />, badge: "Özel Konsept" }
  ];

  return (
    <div className={`font-sans min-h-screen selection:bg-black selection:text-white`}>
      <Header />

      <main>
        {/* 1. HERO SECTION - Video Background */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 md:px-16 lg:px-24 overflow-hidden min-h-[60vh] lg:min-h-[50vh] flex items-center bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80 brightness-[0.7] contrast-[1.1]"
          >
            <source src="/as.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#D97941]/20 via-transparent to-transparent z-[1] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/10 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none z-[1]" />

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
                    Demoyu Başlat
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => navigate('/ucretler')} className="text-white hover:text-white transition-colors duration-300 rounded-full px-10 py-5 border border-white/20 hover:border-white/40 bg-white/5 text-base font-medium flex items-center justify-center gap-3 w-fit backdrop-blur-md">
                    Fiyat Listesi
                  </button>
                </motion.div>
              </motion.div>

              <div className="hidden lg:block h-[300px] lg:h-[400px] w-full invisible" />
            </div>
          </div>
        </section>

        {/* TRANSITION ZONE 1: Orange to Beige */}
        <div className="h-24 md:h-32 bg-[#D97941] bg-gradient-to-b from-transparent to-[#F4EFE6]" />

        {/* 2. VALUE PROPS - Beige */}
        <section className={`py-20 md:py-32 flex items-center bg-[#F4EFE6]`}>
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

        {/* SERVICES LOOP START - Alternating Transitions */}
        {services.map((service, idx) => {
          const isOrange = idx % 2 === 0;
          const currentBg = isOrange ? "#D97941" : "#F4EFE6";
          
          return (
            <div key={idx}>
              {/* TRANSITION ZONE BEFORE EACH SERVICE (except the first one which follows Values section) */}
              <div 
                className={`h-24 md:h-32`} 
                style={{ 
                  backgroundColor: idx === 0 ? "#F4EFE6" : (idx % 2 === 1 ? "#D97941" : "#F4EFE6"),
                  backgroundImage: `linear-gradient(to bottom, transparent, ${currentBg})`
                }} 
              />
              
              <section className={`py-20 md:py-32 overflow-hidden flex items-center`} style={{ backgroundColor: currentBg }}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: idx % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                    >
                      <div className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl bg-black/5">
                        <img src={service.img} alt={service.title} className="w-full aspect-[4/5] md:aspect-video lg:aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                    >
                      <div className="flex flex-col">
                        <div className="inline-flex items-center gap-3 mb-8">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl ${isOrange ? 'bg-black text-[#F4EFE6]' : 'bg-[#D97941] text-[#F4EFE6]'}`}>
                            {service.icon}
                          </div>
                          <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 text-[#1A1A1A]">{service.badge}</span>
                        </div>
                        <h3 className="text-5xl md:text-6xl font-display font-normal italic mb-8 leading-tight text-[#1A1A1A]">{service.title}</h3>
                        <p className="text-xl leading-relaxed font-light mb-12 max-w-lg text-[#1A1A1A] opacity-70">
                          {service.desc}
                        </p>
                        <button onClick={() => navigate('/iletisim')} className="group flex items-center gap-4 font-bold text-lg hover:gap-6 transition-all w-fit p-4 px-8 rounded-full border border-black/10 hover:bg-black hover:text-[#F4EFE6] text-[#1A1A1A]">
                          Detayları İncele <ArrowRight size={22} />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}

        {/* TRANSITION FROM LAST SERVICE TO PORTFOLIO (Beige) */}
        {/* Since the last service (idx 4) is Orange, we need Orange to Beige */}
        <div className="h-24 md:h-32 bg-[#D97941] bg-gradient-to-b from-transparent to-[#F4EFE6]" />

        {/* 4. PORTFOLIO - Beige */}
        <section className={`py-20 md:py-32 flex items-center bg-[#F4EFE6]`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-[#1A1A1A] opacity-40 text-sm font-bold tracking-[0.3em] uppercase mb-6">PORTFOLYO</h3>
                <h2 className="text-5xl md:text-7xl font-display font-normal italic text-[#1A1A1A] leading-[0.9]">Üretim Gücümüzü <br/><span className="not-italic">Somutlaştırın.</span></h2>
              </div>
              <button className="px-10 py-5 rounded-full border border-black/20 hover:bg-black hover:text-[#F4EFE6] transition-all font-medium text-[#1A1A1A]">Tüm İşlerimizi Gör</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-14">
              {aiProjects.map((project, idx) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className={`group relative cursor-pointer ${project.spanClass} flex flex-col`}>
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

        {/* TRANSITION PORTFOLIO TO PROCESS (Orange) */}
        <div className="h-24 md:h-32 bg-[#F4EFE6] bg-gradient-to-b from-transparent to-[#D97941]" />

        {/* 5. PROCESS - Orange */}
        <section className={`py-20 md:py-32 overflow-hidden flex items-center bg-[#D97941]`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full">
            <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
              <h3 className="text-black/40 text-sm font-bold tracking-widest uppercase mb-8 font-sans">SİSTEM NASIL İŞLER?</h3>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-normal italic text-[#1A1A1A] leading-[0.9] tracking-tighter">Bürokrasiyi atlayın, <br /> <span className="not-italic underline decoration-black/20 underline-offset-[12px]">doğrudan sonuca</span> odaklanın.</h2>
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
                  <h4 className="text-3xl font-display font-normal italic text-[#1A1A1A] mb-6 tracking-tight">{step.t}</h4>
                  <p className="text-[#1A1A1A] opacity-60 leading-relaxed max-w-xs text-lg font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiProduction;
