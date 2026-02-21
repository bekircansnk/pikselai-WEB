import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import {
  Store,
  ShieldCheck,
  Globe,
  Zap,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Layers,
  MessageSquare
} from 'lucide-react';

// Animasyon Değişkenleri
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

const EticaretYeni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Renk Paleti (PDF Referanslı)
  const colors = {
    beige: "bg-[#F4EFE6]",
    darkGreen: "bg-[#0b2117]",
    limeBtn: "bg-[#caf265]",
    textDark: "text-[#0b2117]",
    textLight: "text-[#F4EFE6]",
    borderColor: "border-[#e0dcd3]",
    borderColorDark: "border-[#1e3b2b]"
  };

  return (
    <div className={`font-sans ${colors.beige} ${colors.textDark} min-h-screen selection:bg-[#caf265] selection:text-[#0b2117]`}>
      {/* Header (Saydam/Dark) */}
      <div className={`${colors.darkGreen}`}>
        <Header />
      </div>

      <main>

        {/* 1. HERO SECTION - Shopify Partner Vurgulu */}
        <section className={`relative grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] ${colors.darkGreen}`}>
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 lg:py-0 z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#caf265]/30 bg-[#caf265]/10 text-[#caf265] text-xs font-bold tracking-widest uppercase mb-8">
                SHOPIFY TÜRKİYE RESMİ PARTNERİ
              </div>

              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif italic ${colors.textLight} leading-[1.05] tracking-tight mb-8`}>
                Markanızı her dilde <br />
                dünyaya açan e-ticaret <br />
                vizyonu
              </h1>

              <p className="text-lg md:text-xl text-[#a8b8af] mb-10 leading-relaxed font-light italic">
                "Bekir Can Sağnak ve PikselAI ile e-ticaret mağazanızı global standartlarda kuruyor, profesyonel içeriklerle satışa hazırlıyoruz. Teknik yükü bize bırakın, siz sadece büyümeye odaklanın."
              </p>

              <button className={`${colors.limeBtn} ${colors.textDark} hover:bg-[#b5dc57] transition-colors duration-300 rounded-full px-8 py-4 text-base font-bold flex items-center gap-2 w-fit group shadow-lg shadow-black/20`}>
                Projenizi Başlatalım
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Sağ Görsel - E-ticaret Odaklı */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[50vh] lg:h-auto overflow-hidden hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Profesyonel Shopify Mağazası"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2117] via-[#0b2117]/40 to-transparent lg:via-[#0b2117]/20" />
          </motion.div>
        </section>


        {/* 2. SPLIT LAYOUT SECTION - Neden Shopify? (Superside Style) */}
        <section className={`${colors.beige} border-b ${colors.borderColor}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Sol İçerik Alanı */}
            <div className="px-6 md:px-16 lg:px-24 py-20 lg:py-32 flex flex-col justify-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="max-w-xl mx-auto lg:mx-0 w-full"
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="border-t border-[#0b2117]/20 pt-4 mb-8">
                    <span className="text-xs tracking-widest uppercase text-[#0b2117]/60 font-medium">SHOPIFY ALTYAPISI İÇİN ÇÖZÜMLER</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif italic text-[#0b2117] leading-tight mb-6">
                    Güçlü bir altyapı, <br />
                    <span className="font-sans not-italic font-medium">kesintisiz bir operasyon.</span>
                  </h2>
                  <p className="text-[#3a5245] md:text-lg leading-relaxed max-w-lg">
                    PikselAI olarak Shopify'ı sadece bir araç değil, işletmenizin büyüme motoru olarak kurguluyoruz. Aynı zamanda veri güvenliği ve performanstan ödün vermeden nasıl ilerleyeceğinizi bulmanız gerekiyor. İşte tam da bu noktada devreye giriyoruz.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mt-16">
                  {/* Grid Item 1 */}
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-5 border border-[#d6d0c4]">
                      <ShieldCheck size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium text-[#0b2117] mb-2 leading-tight">Tam Güvenlik</h3>
                    <p className="text-[#4a6355] text-sm leading-relaxed">
                      SSL sertifikası ve PCI uyumu ile verileriniz koruma altında.
                    </p>
                  </div>

                  {/* Grid Item 2 */}
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-5 border border-[#d6d0c4]">
                      <Zap size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium text-[#0b2117] mb-2 leading-tight">Yüksek Performans</h3>
                    <p className="text-[#4a6355] text-sm leading-relaxed">
                      Core Web Vitals standartlarına uygun, bulut tabanlı yüksek hızlı altyapı.
                    </p>
                  </div>

                  {/* Grid Item 3 */}
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-5 border border-[#d6d0c4]">
                      <Globe size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium text-[#0b2117] mb-2 leading-tight">Küresel Satış</h3>
                    <p className="text-[#4a6355] text-sm leading-relaxed">
                      Shopify Markets ile farklı dillerde ve para birimlerinde satış.
                    </p>
                  </div>

                  {/* Grid Item 4 */}
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#e3decf] text-[#0b2117] flex items-center justify-center mb-5 border border-[#d6d0c4]">
                      <Store size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium text-[#0b2117] mb-2 leading-tight">Sıfır Sunucu Maliyeti</h3>
                    <p className="text-[#4a6355] text-sm leading-relaxed">
                      Sunucu kurulumuyla uğraşmadan bulut sistemin rahatlığını yaşayın.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sağ Görsel Alanı (Superside style tam ekran görsel) */}
            <div className="relative h-[60vh] lg:h-auto overflow-hidden bg-[#0b2117]">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                src="/superside-astronaut.png"
                alt="AI ve E-ticaret Operasyonu"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2117]/60 via-transparent to-[#0b2117]/20"></div>
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
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#0b2117] leading-tight max-w-xl">
                E-Ticaretin her aşamasında <br /> yanınızdayız
              </h2>
              <p className="text-[#3a5245] font-light md:max-w-sm italic">
                Shopify partnerliğimizle sıfırdan kuruluma, veri taşımadan ileri düzey entegrasyonlara kadar her şeyi bizzat üstleniyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - Kurulum */}
              <motion.div variants={fadeInUp} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#0b2117] cursor-pointer shadow-xl">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" alt="Sıfırdan Mağaza Kurulumu" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-8 left-8">
                  <Layers className="text-[#caf265]" size={32} />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif italic text-white mb-3">Sıfırdan Kurulum<br />& Tasarım</h3>
                  <p className="text-[#a8b8af] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    İhtiyacınıza en uygun premium temaları markanıza uyarlıyor, UX odaklı profesyonel bir vitrin oluşturuyoruz.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Migration */}
              <motion.div variants={fadeInUp} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#0b2117] cursor-pointer shadow-xl">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80" alt="Platform Taşıma" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-8 left-8">
                  <TrendingUp className="text-[#caf265]" size={32} />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif italic text-white mb-3">Kusursuz Veri<br />Taşıma</h3>
                  <p className="text-[#a8b8af] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Mevcut altyapınızı Shopify'a taşıyor; müşteri, ürün ve sipariş verilerinizi eksiksiz aktarıyoruz.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Entegrasyonlar */}
              <motion.div variants={fadeInUp} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#0b2117] cursor-pointer shadow-xl">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80" alt="Entegrasyonlar" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-8 left-8">
                  <Zap className="text-[#caf265]" size={32} />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif italic text-white mb-3">Gelişmiş<br />Entegrasyonlar</h3>
                  <p className="text-[#a8b8af] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Ödeme sistemleri (iyzico, Stripe), kargo ve ERP sistemlerini (Logo vb.) profesyonelce bağlıyoruz.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* 4. METRİKLER - Shopify'ın Gücü */}
        <section className={`${colors.darkGreen} py-20 px-6 md:px-16 lg:px-24 mb-1`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[#caf265] text-sm font-bold tracking-widest uppercase mb-4">RAKAMLARLA SHOPIFY</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#F4EFE6]">Dünya genelinde devasa başarı</h3>
            </div>

            <div className={`border-t border-b ${colors.borderColorDark} py-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x ${colors.borderColorDark}`}>
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
                <span className="text-6xl md:text-7xl font-sans font-medium text-[#caf265] mb-2">2M+</span>
                <span className="text-[#a8b8af] uppercase tracking-wider text-sm">Aktif İşletme</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0">
                <span className="text-6xl md:text-7xl font-sans font-medium text-[#caf265] mb-2">%99.9</span>
                <span className="text-[#a8b8af] uppercase tracking-wider text-sm">Uptime / Çalışma Süresi</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0">
                <span className="text-6xl md:text-7xl font-sans font-medium text-[#caf265] mb-2">175+</span>
                <span className="text-[#a8b8af] uppercase tracking-wider text-sm">Ülkede Satış</span>
              </div>
            </div>
          </div>
        </section>


        {/* 5. SÜREÇ - Adım Adım Mağaza Kurulumu */}
        <section className={`${colors.beige} py-32 px-6 md:px-16 lg:px-24 border-b ${colors.borderColor}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-serif italic text-[#0b2117]">Nasıl çalışıyoruz?</h2>
              <p className="mt-6 text-[#3a5245] max-w-2xl mx-auto text-lg italic">"Analizle başlıyor, sonuç odaklı testlerle yayına giriyoruz. Sizi asla teknik karmaşada yalnız bırakmıyoruz."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Step 1 */}
              <div className="relative group">
                <div className="text-[#0b2117]/10 text-9xl font-serif italic absolute -top-12 -left-4 group-hover:text-[#caf265]/20 transition-colors">1</div>
                <div className="relative pt-8">
                  <h4 className="text-2xl font-serif italic text-[#0b2117] mb-4">Analiz & Planlama</h4>
                  <p className="text-[#4a6355] text-sm leading-relaxed">Markanızı ve rakiplerinizi analiz ediyor, size özel dijital yol haritamızı oluşturuyoruz.</p>
                </div>
                <div className="w-12 h-1 bg-[#0b2117] mt-8 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="text-[#0b2117]/10 text-9xl font-serif italic absolute -top-12 -left-4 group-hover:text-[#caf265]/20 transition-colors">2</div>
                <div className="relative pt-8">
                  <h4 className="text-2xl font-serif italic text-[#0b2117] mb-4">Tasarım & Yapı</h4>
                  <p className="text-[#4a6355] text-sm leading-relaxed">En uygun premimum temayı seçiyor, görsellerinizi markanıza özel kurguluyoruz.</p>
                </div>
                <div className="w-12 h-1 bg-[#0b2117] mt-8 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="text-[#0b2117]/10 text-9xl font-serif italic absolute -top-12 -left-4 group-hover:text-[#caf265]/20 transition-colors">3</div>
                <div className="relative pt-8">
                  <h4 className="text-2xl font-serif italic text-[#0b2117] mb-4">Test & Hazırlık</h4>
                  <p className="text-[#4a6355] text-sm leading-relaxed">Ödeme, kargo ve sepet süreçlerini tek tek test ediyor, mükemmel akışı sağlıyoruz.</p>
                </div>
                <div className="w-12 h-1 bg-[#0b2117] mt-8 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="text-[#0b2117]/10 text-9xl font-serif italic absolute -top-12 -left-4 group-hover:text-[#caf265]/20 transition-colors">4</div>
                <div className="relative pt-8">
                  <h4 className="text-2xl font-serif italic text-[#0b2117] mb-4">Eğitim & Destek</h4>
                  <p className="text-[#4a6355] text-sm leading-relaxed">Sizi Shopify paneli konusunda eğitiyor, 30 gün boyunca ücretsiz destek sunuyoruz.</p>
                </div>
                <div className="w-12 h-1 bg-[#0b2117] mt-8 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>


        {/* 6. SIKÇA SORULAN SORULAR (Superside Style 3-Cards) */}
        <section className={`${colors.darkGreen} py-32 overflow-hidden border-t ${colors.borderColorDark}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16 text-center">
            <h3 className="text-[#a8b8af] text-xs font-bold tracking-widest uppercase mb-6">
              AI & SHOPIFY YAKLAŞIMINIZI SEÇİN
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#F4EFE6] mb-6">
              Akıllardakiler, <span className="font-sans font-medium not-italic text-white">Cevaplar</span>
            </h2>
            <p className="text-[#a8b8af] max-w-2xl mx-auto md:text-lg leading-relaxed font-light">
              Müşterilerimizin en çok merak ettiği soruları ve süreç detaylarını şeffaf paketler halinde sunuyoruz.
              İhtiyacınıza en uygun yaklaşımı seçin, operasyonlarınızı sorunsuzca büyütelim.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
            {/* Horizontal Scroll Container on Mobile, Grid on Desktop */}
            <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {/* Card 1: Süreç (Beige) */}
              <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 bg-[#F4EFE6] rounded-3xl p-8 md:p-10 snap-center shrink-0">
                <h3 className="text-3xl font-serif italic text-[#0b2117] mb-4">Süreç & Kurulum</h3>
                <p className="text-[#3a5245] leading-relaxed mb-10 min-h-[48px]">
                  İhtiyacınıza uygun, hızlı ve metodik bir şekilde planlanan e-ticaret mağazası inşası.
                </p>

                <ul className="space-y-0">
                  {[
                    "Kapsamlı marka ve rakip analizi",
                    "Ortalama 10-15 iş günü kurulum süresi",
                    "Özel isteklere göre esnek proje takvimi",
                    "A'dan Z'ye sınırsız yayına alma testleri",
                    "Kesintisiz platform taşıma (migration) desteği"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 py-4 border-t border-[#0b2117]/10 text-[#0b2117]">
                      <div className="flex-1 text-[15px]">{item}</div>
                      <svg className="w-5 h-5 opacity-60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Sahiplik (Lime) */}
              <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 bg-[#caf265] rounded-3xl p-8 md:p-10 snap-center shrink-0">
                <h3 className="text-3xl font-serif italic text-[#0b2117] mb-4">Mülkiyet & Güvenlik</h3>
                <p className="text-[#0b2117]/80 leading-relaxed mb-10 min-h-[48px]">
                  Site sahibinin asil yetkileri. Kurulum tamamlandığında anahtarı size koşulsuz teslim ediyoruz.
                </p>

                <ul className="space-y-0">
                  {[
                    "Sitenin %100 tam kullanım ve mülkiyet hakkı",
                    "Kendi kurumsal domaininiz üzerinden yayın",
                    "Yüksek performanslı Shopify bulut altyapısı",
                    "Güvenli ödeme - PCI uyumlu standartlar",
                    "Hesabınıza tanımlı lisanslar ve yetkiler"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 py-4 border-t border-[#0b2117]/10 text-[#0b2117]">
                      <div className="flex-1 text-[15px] font-medium">{item}</div>
                      <svg className="w-5 h-5 opacity-60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Yönetim (Dark Tan) */}
              <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 bg-[#d9cbb2] rounded-3xl p-8 md:p-10 snap-center shrink-0">
                <h3 className="text-3xl font-serif italic text-[#0b2117] mb-4">Yönetim & Büyüme</h3>
                <p className="text-[#0b2117]/80 leading-relaxed mb-10 min-h-[48px]">
                  Teknik bilgi gerektirmeyen panel. En kolay şekilde küresel pazarlara açılın ve satış yapın.
                </p>

                <ul className="space-y-0">
                  {[
                    "E-posta göndermek kadar basit yönetim",
                    "Hiçbir kodlama veya sunucu bilgisi gerekmez",
                    "Kurulum sonrası 30 günlük ücretsiz destek",
                    "E-ihracat ve dropshipping uyumlu sistemler",
                    "Market optimizasyonuyla uluslararası satış"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 py-4 border-t border-[#0b2117]/10 text-[#0b2117]">
                      <div className="flex-1 text-[15px]">{item}</div>
                      <svg className="w-5 h-5 opacity-60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>


        {/* 7. BOTTOM CTA - İletişim Vurgusu */}
        <section className={`${colors.beige} py-32 px-6 md:px-16 lg:px-24 mb-1`}>
          <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Soft Glow Effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caf265]/10 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#caf265]/5 blur-[80px] rounded-full"></div>

            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-serif italic text-[#F4EFE6] mb-8 leading-tight">
                Mağazanızın geleceği bir <br /> mesaj uzağınızda
              </h2>
              <p className="text-[#a8b8af] mb-10 text-lg">
                Hemen bir ücretsiz danışmanlık görüşmesi planlayalım ve e-ticaret hedeflerinizi global standartlarda gerçeğe dönüştürelim.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                <button className={`${colors.limeBtn} ${colors.textDark} hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 group`}>
                  İş Birliğine Başlayalım
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="mailto:bilgi@pikselai.com" className="text-[#F4EFE6] font-medium border-b border-[#F4EFE6]/30 hover:border-[#caf265] hover:text-[#caf265] transition-all pb-1 flex items-center gap-2">
                  <MessageSquare size={18} /> bilgi@pikselai.com
                </a>
              </div>
            </div>

            {/* Creative SVG/Visual Element for CTA */}
            <div className="relative z-10 hidden md:block w-full max-w-xs aspect-square">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-2 border-dashed border-[#caf265]/30 rounded-full flex items-center justify-center p-8"
              >
                <div className="w-full h-full border border-[#caf265]/50 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#caf265] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(202,242,101,0.4)]">
                    <TrendingUp size={32} className="text-[#0b2117]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <div className={`${colors.darkGreen}`}>
        <Footer />
      </div>
    </div>
  );
};

export default EticaretYeni;
