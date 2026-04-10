import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { ArrowRight, ChevronRight, ChevronDown, Zap, Play, Box, TrendingUp, Layers } from 'lucide-react';



const colors = {
  beige: "bg-[#F4EFE6]",
  darkGreen: "bg-[#0b2117]",
  limeBtn: "bg-[#caf265]",
  textDark: "text-[#0b2117]",
  textLight: "text-[#F4EFE6]",
  borderColor: "border-[#e0dcd3]",
  borderColorDark: "border-[#1e3b2b]"
};

const services = [
  {
    title: "AI Prodüksiyon",
    desc: "Yapay zeka ile stüdyo maliyetlerini sıfırlayın. Kusursuz sanal mankenler ve ürün görselleri oluşturun.",
    icon: <Zap size={32} />,
    path: "/hizmetler/ai-produksiyon",
    bg: "bg-[#18201d]",
    img: "/sosyal_medya_resimler/image1.webp",
    cols: "md:col-span-8"
  },
  {
    title: "E-Ticaret Yönetimi",
    desc: "Satışlarınızı en üst düzeye çıkaran kapsamlı mağaza kurulumları ve SEO uyumlu optimizasyonlar.",
    icon: <Box size={32} />,
    path: "/hizmetler/e-ticaret",
    bg: "bg-[#336b9c]",
    img: "/sosyal_medya_resimler/image2.webp",
    cols: "md:col-span-4"
  },
  {
    title: "Sosyal Medya",
    desc: "Markanızı öne çıkaran etkili içerikler, Reels videoları ve 360 derece kreatif topluluk yönetimi.",
    icon: <Play size={32} />,
    path: "/hizmetler/sosyal-medya",
    bg: "bg-[#1f1614]",
    img: "/sosyal_medya_resimler/sosyal_medya_partlar/1.webp",
    cols: "md:col-span-4"
  },
  {
    title: "Dijital Büyüme (Performans)",
    desc: "Veri odaklı metrikler ve dönüşüm optimizasyonlarıyla satış grafiklerinizi hızlıca yukarı yöne çevirin.",
    icon: <TrendingUp size={32} />,
    path: "/hizmetler/dijital-buyume",
    bg: "bg-[#6d5b4a]",
    img: "/sosyal_medya_resimler/sosyal_medya_partlar/2.webp",
    cols: "md:col-span-4"
  },
  {
    title: "Kreatif Tasarım",
    desc: "Marka kimliğinizi A'dan Z'ye güçlendiren benzersiz kurumsal kimlik, UI/UX ve etkileyici görsel çözümler.",
    icon: <Layers size={32} />,
    path: "/hizmetler/kreatif-tasarim",
    bg: "bg-[#0b1426]",
    img: "/sosyal_medya_resimler/sosyal_medya_partlar/3.webp",
    cols: "md:col-span-4"
  }
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout transparentHeader={true} headerLightText={true}>
      <main className="bg-[#0b2117] min-h-screen font-sans selection:bg-[#caf265] selection:text-[#0b2117] overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className={`relative min-h-[75vh] 2xl:min-h-[70vh] flex items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-24 ${colors.darkGreen}`}>
          {/* Subtle bg effects */}
          <div className="absolute inset-0 bg-[#0b2117] z-0">
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#caf265]/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#a8b8af]/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          </div>

          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 lg:px-24 relative z-10 flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#caf265] animate-pulse" />
              <span className="text-[#a8b8af] text-xs font-bold uppercase tracking-widest">PİKSELAI İLE TANIŞIN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-[7rem] font-display font-normal text-[#F4EFE6] leading-[1.05] tracking-tight mb-8"
            >
              Her işiniz <br />
              <span className="italic text-white">tek çatı altında!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-[#a8b8af] max-w-2xl font-light mb-12"
            >
              Bir ajans, bir fatura, sınırsız çözüm. Yapay zeka destekli görsel üretimden e-ticaret yönetimine, sosyal medyadan kreatif tasarıma — her şey tek çatıda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto"
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

        {/* 2. EN HIZLI ÇÖZÜMLER BANNER (Marquee & Large Text) */}
        <section className={`py-12 md:py-16 border-t ${colors.borderColorDark} relative overflow-hidden`}>
           <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
             <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                <div className="md:w-1/2">
                   <h2 className="text-4xl md:text-5xl lg:text-7xl font-display italic text-[#F4EFE6] leading-tight mb-6">
                     Size özel <br className="hidden md:block"/><span className="not-italic">en hızlı çözümler!</span>
                   </h2>
                </div>
                <div className="md:w-1/2 text-lg text-[#a8b8af] font-light leading-relaxed">
                   Geleneksel ajansların haftalar süren süreçlerini saatlere indiriyoruz. Yapay zeka teknolojimizle zamanınızı ve bütçenizi en verimli şekilde kullanın.
                </div>
             </div>
           </div>
        </section>

        {/* 3. MASONRY SERVICES GRID */}
        <section id="services" className={`py-12 md:py-16 border-t ${colors.borderColorDark}`}>
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
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content (Z-10) */}
                  <div className="relative z-10 text-[#caf265] mb-6">
                     {service.icon}
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

        {/* 4. METRICS / NUMBERS SECTION */}
        <section className={`py-12 md:py-16 border-t ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1e3b2b]">
                <div className="flex flex-col items-center md:items-start pt-12 md:pt-0 pr-0 md:pr-12 text-center md:text-left">
                  <div className="text-6xl md:text-7xl font-display font-medium text-[#caf265] mb-4">∞</div>
                  <h4 className="text-2xl font-display text-white mb-3">Sınırsız Varyasyon</h4>
                  <p className="text-[#a8b8af] font-light">Tek ürün için onlarca farklı konsept, arka plan ve sahne. Her birini test edip en iyisini seçin.</p>
                </div>
                <div className="flex flex-col items-center md:items-start pt-12 md:pt-0 px-0 md:px-12 text-center md:text-left">
                  <div className="text-6xl md:text-7xl font-display font-medium text-[#caf265] mb-4">%80</div>
                  <h4 className="text-2xl font-display text-white mb-3">Daha Düşük Maliyet</h4>
                  <p className="text-[#a8b8af] font-light">Fiziksel stüdyo, manken ve ekip maliyetini ortadan kaldırın. Aynı kalite, çok daha düşük bütçe.</p>
                </div>
                <div className="flex flex-col items-center md:items-start pt-12 md:pt-0 pl-0 md:pl-12 text-center md:text-left">
                  <div className="text-6xl md:text-7xl font-display font-medium text-[#caf265] mb-4">48s</div>
                  <h4 className="text-2xl font-display text-white mb-3">İçinde Teslim</h4>
                  <p className="text-[#a8b8af] font-light">Haftalar süren süreçleri saatlere indirdik. Profesyonel görselleriniz aynı gün hazır.</p>
                </div>
             </div>
          </div>
        </section>

        {/* 5. NASIL ÇALIŞIR — 4 Adım */}
        <section className={`py-16 md:py-24 border-t ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="text-center mb-16">
              <span className="text-[#caf265] text-xs font-bold uppercase tracking-widest mb-4 block">SÜREÇ</span>
              <h2 className="text-4xl md:text-6xl font-display text-white">
                Nasıl <span className="italic">çalışır?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Bize Ulaşın", desc: "İhtiyaçlarınızı anlatalım. Ücretsiz keşif görüşmesiyle projenizin kapsamını birlikte belirleyelim." },
                { step: "02", title: "Strateji & Plan", desc: "Size özel bir yol haritası çıkarıyoruz. Zaman, bütçe ve hedefler netleştirilir." },
                { step: "03", title: "Üretim Başlasın", desc: "AI destekli süreçlerimizle görsel üretim, içerik ve teknik çalışmalar eş zamanlı ilerler." },
                { step: "04", title: "Teslim & Büyüme", desc: "Projelerinizi zamanında teslim eder, performans takibiyle sürekli iyileştirmeler yaparız." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="text-center group"
                >
                  <div className="text-6xl font-display font-medium text-[#caf265]/20 group-hover:text-[#caf265] transition-colors duration-500 mb-4">{item.step}</div>
                  <h4 className="text-xl font-display text-white mb-3 font-medium">{item.title}</h4>
                  <p className="text-[#a8b8af] font-light leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MÜŞTERİ YORUMU (Testimonial) */}
        <section className={`py-16 md:py-24 border-t ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#caf265] text-xs font-bold uppercase tracking-widest mb-8 block">MÜŞTERİ YORUMU</span>
              
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl font-display italic text-[#F4EFE6] leading-snug mb-10"
              >
                "PikselAI ile çalışmak bizim için kritik öneme sahipti. Zamanında kaliteli iş teslim edebilen, kısa süreli bildirimlerde bile <span className="text-[#caf265] not-italic">güvenebileceğimiz bir ekip.</span>"
              </motion.blockquote>

              <div className="flex flex-col items-center gap-2">
                <span className="text-white font-bold text-lg">Fatih Erdoğan</span>
                <span className="text-[#a8b8af] text-sm">Pazarlama ve İletişim Müdürü — Cazador</span>
              </div>

              <div className="flex justify-center gap-16 mt-12 pt-12 border-t border-[#1e3b2b]">
                <div>
                  <div className="text-4xl font-display font-medium text-[#caf265]">100+</div>
                  <div className="text-sm text-[#a8b8af] mt-1">Tasarım Projesi</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-medium text-[#caf265]">48s</div>
                  <div className="text-sm text-[#a8b8af] mt-1">Ort. Teslim Süresi</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-medium text-[#caf265]">%95</div>
                  <div className="text-sm text-[#a8b8af] mt-1">Memnuniyet</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SSS – Sıkça Sorulan Sorular */}
        <section className={`py-16 md:py-24 border-t ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#caf265] text-xs font-bold uppercase tracking-widest mb-4 block">SSS</span>
                <h2 className="text-4xl md:text-5xl font-display text-white">
                  Sıkça <span className="italic">sorulan sorular</span>
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Minimum sipariş miktarı var mı?", a: "Hayır, tek bir ürün görseli için bile çalışabiliriz. Paketlerimiz her bütçeye uygun esnek seçenekler sunar." },
                  { q: "Teslim süresi ne kadar?", a: "Proje tipine göre değişmekle birlikte, ürün görselleri için ortalama 24-48 saat, kapsamlı projeler için 1-2 hafta süre öngörüyoruz." },
                  { q: "Yapay zeka ile üretilen görseller gerçekçi mi?", a: "Evet, fotorealistik kalitede görseller üretiyoruz. Her görsel profesyonel kreatif ekibimiz tarafından kontrol edilir ve gerekirse ince ayar yapılır." },
                  { q: "Hangi sektörlere hizmet veriyorsunuz?", a: "Moda & tekstil, kozmetik, aksesuar, mobilya, gıda ve daha birçok sektörde deneyimimiz var. İhtiyacınıza özel çözümler sunuyoruz." },
                  { q: "E-ticaret yönetimi ile birlikte görsel üretim de yapıyor musunuz?", a: "Evet, tam entegre hizmet sunuyoruz. E-ticaret mağazanızın yönetiminden ürün görsellerine, sosyal medya içeriklerinden reklam yönetimine kadar her şey tek çatı altında." }
                ].map((faq, idx) => (
                  <FaqItem key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. BOTTOM CTA */}
        <section className={`py-12 md:py-16 px-6 md:px-16 lg:px-24 border-t ${colors.borderColorDark}`}>
          <div className="max-w-[1400px] mx-auto bg-[#caf265] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col items-center justify-center text-center gap-8 shadow-2xl">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-black/5 pointer-events-none" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display font-normal italic text-[#0b2117] mb-8 leading-[1.1]">
                Markanızı birlikte <br /> <span className="text-[#0b2117] font-display font-normal not-italic">büyütmeye hazır mısınız?</span>
              </h2>
              <p className="text-[#4a6355] mb-12 text-lg md:text-xl font-medium max-w-xl">
                Ajans hantallığına son verin. Kaliteli, hızlı ve markanıza tam uyumlu süreçlerimize bugün katılın. En hızlı çözümleri size özel kurgulayalım.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
                <button 
                  onClick={() => navigate('/iletisim')}
                  className="bg-[#0b2117] text-white hover:bg-black transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] group shadow-xl"
                >
                  Toplantı Planla
                  <ArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </MainLayout>
  );
};

export default Home;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl transition-colors duration-300 ${
        isOpen ? 'border-[#caf265]/30 bg-white/5' : 'border-[#1e3b2b] hover:border-[#caf265]/20'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-medium text-white pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#caf265] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-[#a8b8af] font-light leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
