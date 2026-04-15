import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { 
  ArrowRight, 
  ChevronRight,
  CheckCircle2, 
  ShieldCheck,
  X
} from 'lucide-react';
import HeroAlternatives from '../components/sections/HeroAlternatives';

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
  images: string[];
}

const socialProjects: SocialProject[] = [
  {
    id: 1,
    client: "Cazador",
    title: "Sokak Modası Çekimleri",
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
    title: "Ürün Lansmanı",
    category: "Sosyal Medya Çekimleri",
    thumbnail: "/sosyal_medya_resimler/venüs/venus2.webp",
    description: "Venüs Ayakkabı'nın yeni modelleri için etkileşim odaklı reklam kreatifleri.",
    spanClass: "md:col-span-4",
    aspectClass: "aspect-[3/4]",
    images: ["/sosyal_medya_resimler/venüs/venus1.webp", "/sosyal_medya_resimler/venüs/venus2.webp", "/sosyal_medya_resimler/venüs/venus3.webp", "/sosyal_medya_resimler/venüs/venus4.webp"]
  },
  {
    id: 3,
    client: "Camp and Map",
    title: "Doğa Kampanyası",
    category: "E-ticaret için Çekimler",
    thumbnail: "/sosyal_medya_resimler/camp and map/camp1.webp",
    description: "Doğa tutkunları için outdoor ruhunu yansıtan etkileyici görsel kurgular.",
    spanClass: "md:col-span-4",
    aspectClass: "aspect-square md:aspect-[3/4] md:h-full lg:aspect-auto",
    images: ["/sosyal_medya_resimler/camp and map/camp1.webp", "/sosyal_medya_resimler/camp and map/camp2.webp", "/sosyal_medya_resimler/camp and map/camp3.webp", "/sosyal_medya_resimler/camp and map/camp4.webp"]
  },
  {
    id: 4,
    client: "Mina Drinks",
    title: "Enerji ve Ferahlık",
    category: "Katalog Çekimleri",
    thumbnail: "/sosyal_medya_resimler/mina drinks/mina1.webp",
    description: "Mina Drinks'in ferahlatıcı kimliğini öne çıkaran yapay zeka destekli görseller.",
    spanClass: "md:col-span-8",
    aspectClass: "aspect-square md:aspect-video",
    images: ["/sosyal_medya_resimler/mina drinks/mina1.webp", "/sosyal_medya_resimler/mina drinks/mina2.webp", "/sosyal_medya_resimler/mina drinks/mina3.webp", "/sosyal_medya_resimler/mina drinks/mina4.webp"]
  }
];

const services = [
  {
    title: "AI Prodüksiyon",
    desc: "Yapay zeka ile stüdyo maliyetlerini sıfırlayın. Kusursuz sanal mankenler ve ürün görselleri oluşturun.",
    icon: null,
    path: "/hizmetler/ai-produksiyon",
    bg: "bg-[#18201d]",
    img: "",
    cols: "md:col-span-8",
    isAiGrid: true
  },
  {
    title: "E-Ticaret Yönetimi",
    desc: "Satışlarınızı en üst düzeye çıkaran kapsamlı mağaza kurulumları ve SEO uyumlu optimizasyonlar.",
    icon: null,
    path: "/hizmetler/e-ticaret",
    bg: "bg-[#336b9c]",
    img: "/images/shopify-infrastructure.webp",
    cols: "md:col-span-4",
    opacity: "opacity-60 group-hover:opacity-80",
    noBlend: true
  },
  {
    title: "Sosyal Medya",
    desc: "Markanızı öne çıkaran etkili içerikler, Reels videoları ve 360 derece kreatif topluluk yönetimi.",
    icon: null,
    path: "/hizmetler/sosyal-medya",
    bg: "bg-[#1f1614]",
    img: "/sosyal_medya_resimler/sosyal_medya_partlar/1.webp",
    cols: "md:col-span-4",
    opacity: "opacity-60 group-hover:opacity-80",
    noBlend: true
  },
  {
    title: "Dijital Büyüme (Performans)",
    desc: "Veri odaklı metrikler and dönüşüm optimizasyonlarıyla satış grafiklerinizi hızlıca yukarı yöne çevirin.",
    icon: null,
    path: "/hizmetler/dijital-buyume",
    bg: "bg-[#6d5b4a]",
    img: "/sosyal_medya_resimler/landing_page/reklam_panel.webp",
    cols: "md:col-span-4",
    objectPos: "object-left-top",
    objectFit: "object-none",
    opacity: "opacity-60 group-hover:opacity-80",
    noBlend: true
  },
  {
    title: "Kreatif Tasarım",
    desc: "Marka kimliğinizi A'dan Z'ye güçlendiren benzersiz kurumsal kimlik, UI/UX ve etkileyici görsel çözümler.",
    icon: null,
    path: "/hizmetler/kreatif-tasarim",
    bg: "bg-[#0b1426]",
    img: "/sosyal_medya_resimler/landing_page/katalog.webp",
    cols: "md:col-span-4",
    opacity: "opacity-60 group-hover:opacity-80",
    noBlend: true
  }
];

const Landing1 = () => {
  const navigate = useNavigate();

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

  return (
    <MainLayout transparentHeader={true} headerLightText={true}>
      <main className="bg-[#0b2117] min-h-screen font-sans selection:bg-[#caf265] selection:text-[#0b2117] overflow-hidden text-[#F4EFE6]">
        
        {/* 1. STRATEGIC HERO SECTION */}
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video 
              src="/sosyal_medya_resimler/video/landing.mp4" 
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

          {/* Background Aura */}
          <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-[#caf265]/5 blur-[180px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          <div className="w-full relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#caf265]/20 bg-[#caf265]/5 backdrop-blur-md mb-8"
            >
              <span className="text-[#caf265] text-xs font-bold uppercase tracking-[0.2em]">Sonuç Odaklı Dijital Dönüşüm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-[1400px] px-6 md:px-16 lg:px-24 text-5xl md:text-7xl lg:text-[6.5rem] font-display font-medium leading-[1.05] tracking-tight mb-10"
            >
              AI Prodüksiyon ile <br />
              <span className="italic text-[#caf265] font-serif underline decoration-white/10 underline-offset-8">Maliyetleri %70 Düşürün.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl px-6 text-xl md:text-2xl text-[#a8b8af] font-light mb-16 leading-relaxed"
            >
              Geleneksel ajans karmaşasına son. Yapay zeka destekli üretim ve profesyonel medya yönetimi ile markanızı tek çatı altında geleceğe taşıyoruz.
            </motion.p>
            
            {/* The Integrated Service Pillar Component */}
            <div className="w-full mb-20">
              <HeroAlternatives />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 items-center px-6"
            >
              <button 
                onClick={() => navigate('/iletisim')}
                className="w-full sm:w-auto px-12 py-6 bg-[#caf265] hover:bg-white text-[#0b2117] rounded-full text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(202,242,101,0.2)]"
              >
                Ücretsiz Strateji Analizi Al
                <ArrowRight size={22} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. LOGO CLOUD (TRUST BAR) */}
        <section className="py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-[1400px] mx-auto px-6">
            <p className="text-center text-[#a8b8af] text-sm uppercase tracking-[0.4em] mb-12 font-medium opacity-60">Güvenen Markalar & Partnerler</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               {['CAZADOR', 'VENÜS AYAKKABI', 'CAMP AND MAP'].map((brand) => (
                 <span key={brand} className="text-2xl md:text-4xl font-display font-black tracking-tighter text-white">{brand}</span>
               ))}
            </div>
          </div>
        </section>

        {/* 5. MASONRY SERVICES GRID (COPIED FROM HOME) */}
        <section id="services" className="py-12 md:py-24 border-t border-[#1e3b2b]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-[#caf265] text-xs font-bold uppercase tracking-widest mb-4 block">HİZMETLERİMİZ</span>
                <h2 className="text-5xl md:text-6xl font-display text-white">
                  Tek merkezden <br/><span className="italic">sonsuz potansiyel</span>
                </h2>
              </div>
              <p className="text-[#a8b8af] max-w-md text-lg font-light leading-relaxed mb-2">
                Markanızı sıfırdan zirveye taşıyacak entegre dijital altyapılar ve yaratıcı çözümler sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-4 auto-rows-auto">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative ${service.bg} rounded-2xl p-8 md:p-12 overflow-hidden group cursor-pointer ${service.cols} min-h-[400px] md:min-h-[450px] flex flex-col justify-between`}
                  onClick={() => navigate(service.path)}
                >
                  {/* Background Image Wrapper */}
                  <div className="absolute inset-0 w-full h-full">
                    {service.isAiGrid ? (
                      <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-0.5 p-0.5 opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105">
                        {[
                          "/sosyal_medya_resimler/cazador/cazador2.webp",
                          "/sosyal_medya_resimler/ghost_cekim/35325-Haki (1).webp",
                          "/sosyal_medya_resimler/sanal_manken/Nora/Nora-1_imaj.webp",
                          "/sosyal_medya_resimler/ürün_fotoğraf/man_kazak_5.webp",
                          "/sosyal_medya_resimler/venüs/venus2.webp",
                          "/sosyal_medya_resimler/image4.webp"
                        ].map((src, i) => (
                          <img key={i} src={src} className="w-full h-full object-cover" />
                        ))}
                      </div>
                    ) : (
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className={`w-full h-full ${service.objectFit || 'object-cover'} ${service.objectPos || 'object-center'} ${service.opacity || 'opacity-30'} ${service.noBlend ? '' : 'mix-blend-overlay'} group-hover:scale-105 transition-all duration-700`} 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content (Z-10) */}
                  <div className="relative z-10 text-[#caf265] mb-6">
                     {/* Icon removed for minimalist look */}
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="text-3xl font-display font-medium text-white mb-3 pr-10">
                      {service.title}
                    </h3>
                    <p className="text-[#a8b8af] text-lg font-light leading-relaxed pr-10">
                      {service.desc}
                    </p>

                    <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#caf265] group-hover:text-[#0b2117] transition-colors duration-300">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. SUCCESS METRICS (KPIs) */}
        <section className="py-24 bg-[#caf265]/5 border-y border-[#caf265]/10">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '%70', label: 'Düşük Maliyet' },
              { val: 'x5', label: 'Daha Hızlı Üretim' },
              { val: '+%120', label: 'ROI Artışı' },
              { val: '360°', label: 'Tam Hizmet' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-7xl font-display font-bold text-[#caf265] mb-2">{stat.val}</div>
                <div className="text-[#a8b8af] uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PROBLEM & SOLUTION (PAIN POINTS) */}
        <section className="py-24 lg:py-40 relative">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
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

        {/* 6. TESTIMONIALS (BRAND SPECIFIC) */}
        <section className="py-24 bg-white/[0.01]">
           <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-display mb-4 tracking-tight">Referans Hikayeleri</h2>
                 <p className="text-[#a8b8af] opacity-60">Sektör liderleri Piksel AI ile nasıl dönüşüyor?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { brand: 'Cazador', role: 'Genel Müdür', text: "Piksel AI ile iş akışlarımız inanılmaz hızlandı. AI prodüksiyon sayesinde eskiden haftalar süren çekim süreci artık bir günde tamamlanıyor. Operasyonel verimliliğimiz %80 arttı." },
                   { brand: 'Venüs Ayakkabı', role: 'Pazarlama Ekibi', text: "Toplu ürün çekimlerimizde yaşadığımız stüdyo ve model karmaşası Piksel AI ile sona erdi. Hem sosyal medya görsellerimiz sınıf atladı hem de katalog üretim süremiz yarıya indi." },
                   { brand: 'Camp and Map', role: 'Kreatif Bölüm', text: "Performans reklamlarımızda kullandığımız kreatif görsellerin başarısı bizi şaşırttı. Veri odaklı yaklaşımları sayesinde reklam ROI oranlarımızda ciddi bir yükseliş yakaladık." }
                 ].map((t, i) => (
                   <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/5 flex flex-col justify-between italic text-lg leading-relaxed group hover:bg-[#caf265]/5 transition-colors duration-500">
                      <p className="mb-8 font-light">"{t.text}"</p>
                      <div className="not-italic">
                         <div className="font-bold text-white mb-1 group-hover:text-[#caf265] transition-colors">{t.brand}</div>
                         <div className="text-[10px] text-[#caf265] uppercase tracking-[0.2em] font-bold">{t.role}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. ÇALIŞMALARIMIZ (WORKS GRID FROM SOSYAL MEDYA) */}
        <section className="py-24 border-t border-white/5 bg-[#0b2117]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h3 className="text-[#caf265] text-[13px] font-bold tracking-widest uppercase mb-4">ÇALIŞMAMIZ</h3>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight">
                  Önde gelen markaların <br /> <span className="italic text-[#caf265]">Piksel AI'ı nasıl kullandığını görün.</span>
                </h2>
              </div>
              <button className="text-white hover:bg-white/10 transition-colors rounded-full px-8 py-3 border border-white/20 text-sm font-medium w-fit shrink-0">
                Tüm çalışmalarımızı keşfedin
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
              {socialProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative cursor-pointer ${project.spanClass} flex flex-col`}
                  onClick={() => setSelectedProject(project)}
                  onMouseMove={handleMouseMove}
                >
                  <div className={`w-full rounded-[2rem] overflow-hidden bg-white/5 relative ${project.aspectClass} mb-6 shadow-sm group-hover:shadow-[0_0_50px_rgba(202,242,101,0.15)] transition-all duration-500`}>
                    <img src={project.thumbnail} alt={project.client} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    {/* Hover Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100 pointer-events-none z-10 hidden md:block">
                      <div className="w-24 h-24 rounded-full bg-[#caf265] text-[#0b2117] flex items-center justify-center font-bold text-xs uppercase tracking-widest shadow-2xl">
                        İncele
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-medium text-white mb-2">{project.client}</h3>
                  <p className="text-[#caf265] text-[13px] font-bold tracking-widest uppercase">{project.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA (LEAD MAGNET) */}
        <section className="py-24 lg:py-40">
           <div className="max-w-[1200px] mx-auto px-6">
              <div className="relative rounded-[4rem] bg-[#caf265] p-12 md:p-24 overflow-hidden text-[#0b2117] text-center shadow-[0_0_100px_rgba(202,242,101,0.15)]">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl md:text-7xl font-display font-medium leading-tight mb-8">
                       Markanızın Geleceğini <br />
                       Birlikte İnşa Edelim.
                    </h2>
                    <p className="text-xl md:text-2xl text-[#0b2117]/70 font-medium mb-12 max-w-2xl">
                       Hemen ücretsiz dijital varlık denetimi talebinde bulunun ve AI devriminde yerinizi alın.
                    </p>
                    <button 
                      onClick={() => navigate('/iletisim')}
                      className="px-12 py-6 bg-[#0b2117] text-white hover:bg-black rounded-full text-xl font-bold transition-all shadow-2xl flex items-center gap-4 group"
                    >
                      Ücretsiz Denetim Başlat
                      <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="mt-12 flex items-center gap-8 text-[#0b2117]/40 text-sm font-bold uppercase tracking-widest">
                       <div className="flex items-center gap-2 underline">7/24 Teknik Destek</div>
                       <div className="flex items-center gap-2 underline">Global Standartlar</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* PROJECT MODAL */}
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
                    <img src={selectedProject.images[0]} alt={selectedProject.client} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0b2117]/30 mix-blend-multiply"></div>
                    <div className="absolute top-10 left-10 text-[#caf265] z-10 font-bold tracking-widest uppercase shadow-black drop-shadow-md">
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
                      <img src={selectedProject.images[1]} className="w-full h-full object-cover object-top" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-[#caf265]"
                    >
                      <img src={selectedProject.images[2]} className="w-full h-full object-cover object-top" />
                    </motion.div>
                  </div>

                  {/* Col: Wide image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="h-full w-[400px] md:w-[650px] shrink-0 relative rounded-2xl md:rounded-[2rem] overflow-hidden"
                  >
                    <img src={selectedProject.images[3]} className="w-full h-full object-cover object-center" />
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
                      className="text-4xl md:text-5xl font-display font-normal italic text-[#f4efe6] mb-3"
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
      `}</style>

    </MainLayout>
  );
};

export default Landing1;
