import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const EcommerceService = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* ═══════════════════════════════════════════
       1. HERO SECTION — Video Arka Plan & Premium Tasarım
       ═══════════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
                {/* Background Video — Güvenilir Kaynak */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-50"
                    >
                        {/* Google Cloud Tech Background - Yüksek Performanslı */}
                        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                        {/* Yedek kaynak */}
                        <source src="https://cdn.pixabay.com/video/2019/04/20/22908-331666453_large.mp4" type="video/mp4" />
                    </video>
                    {/* Dark Overlay — Metin Okunurluğu İçin */}
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
                </div>

                <div className="container-custom relative z-20 pt-20">
                    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-12">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-bor-secondary bg-white/5 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-md"
                            >
                                <span className="w-2 h-2 rounded-full bg-bor-secondary animate-pulse" />
                                Profesyonel Shopify Ortaklığı
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-6xl md:text-8xl font-display leading-[1.05] tracking-tight text-white drop-shadow-2xl"
                            >
                                PikselAI ile <br />
                                <span className="italic font-light text-bor-secondary">E-Ticaret Dönüşümü</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
                            >
                                Sadece mağaza kurmuyoruz; markanızı global pazarlarda <br className="hidden md:block" />
                                <span className="text-white font-medium">satış rekorları kıran</span> bir operasyona dönüştürüyoruz.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                className="h-16 px-12 rounded-full text-lg shadow-[0_0_30px_rgba(45,106,79,0.3)] hover:scale-105 transition-all"
                                onClick={() => navigate('/iletisim')}
                            >
                                Hemen Başlayın
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-16 px-12 rounded-full text-lg border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-black transition-all"
                                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Paketleri İncele
                            </Button>
                        </motion.div>

                        {/* Partner Logoları — SVG (Inline) Çözümü */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="pt-16 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 text-white"
                        >
                            {/* Shopify Logo SVG */}
                            <svg className="h-8 md:h-10 w-auto fill-current" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96.34 27.67l-26.65-20.08a4.17 4.17 0 00-5.83.84L50 27.42l-13.86-18.99a4.17 4.17 0 00-5.83-.84L3.66 27.67a4.17 4.17 0 00-1.63 3.32v46.72c0 2.3 1.87 4.17 4.17 4.17h87.6a4.17 4.17 0 004.17-4.17V30.99a4.17 4.17 0 00-1.63-3.32zM33.33 75H10V33.33l23.33-17.5v59.17zm33.34 0H33.33V10l16.67 22.5L66.67 10v65zm23.33 0H66.67V15.83l23.33 17.5V75z" fill="currentColor" />
                            </svg>

                            {/* Google Logo SVG */}
                            <svg className="h-7 md:h-9 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
                            </svg>

                            {/* Meta Logo SVG */}
                            <svg className="h-6 md:h-8 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.924 5.336c-2.057 0-3.844.97-4.924 2.464-1.08-1.494-2.867-2.464-4.924-2.464-3.374 0-6.076 2.702-6.076 6.076s2.702 6.076 6.076 6.076c2.057 0 3.844-.97 4.924-2.464 1.08 1.494 2.867 2.464 4.924 2.464 3.374 0 6.076-2.702 6.076-6.076s-2.702-6.076-6.076-6.076zm-9.848 9.924c-2.126 0-3.848-1.722-3.848-3.848s1.722-3.848 3.848-3.848c1.378 0 2.584.726 3.27 1.83.084.135.25.135.334 0 .686-1.104 1.892-1.83 3.27-1.83 2.126 0 3.848 1.722 3.848 3.848s-1.722 3.848-3.848 3.848c-1.378 0-2.584-.726-3.27-1.83-.084-.135-.25-.135-.334 0-.686 1.104-1.892 1.83-3.27 1.83z" fill="currentColor" />
                            </svg>

                            {/* TikTok Logo SVG */}
                            <svg className="h-7 md:h-9 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.14c0 3.48-1.74 6.66-5.16 7.2-6.32 1.66-11.37-4.07-7.23-9.56 1.31-1.67 3.32-2.5 5.51-2.28v4.2c-1.66-.23-3.32 1.05-3.59 2.73-.2 1.31.63 2.72 1.95 3.12 1.93.52 3.87-1 3.81-2.93V.02h.63z" fill="currentColor" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
       2. WHO IS IT FOR? — Bu Hizmet Kimler İçin?
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-bor-primary-50">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-display text-bor-primary-900 mb-6">Bu Hizmet <span className="text-bor-secondary">Kimler İçin?</span></h2>
                    <p className="text-bor-primary-500 text-lg leading-relaxed">
                        E-ticaret yolculuğunuzun hangi aşamasında olursanız olun, size özel hazırlanmış, ölçülebilir ve ölçeklenebilir bir çözümümüz var.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[
                        { icon: "🚀", title: "Yeni Girişimciler", desc: "Sıfırdan e-ticarete başlamak, doğru altyapı ve stratejiyle global pazara açılmak isteyenler." },
                        { icon: "📈", title: "Büyümek İsteyenler", desc: "Mevcut mağazasının satışlarını, trafiğini ve dönüşüm oranlarını (CRO) artırmak isteyen işletmeler." },
                        { icon: "🎨", title: "Marka Yenileyenler", desc: "Tasarım ve altyapı olarak modernizasyona ihtiyaç duyan, kurumsal kimliğini güçlendirmek isteyen köklü markalar." },
                        { icon: "🌍", title: "E-İhracat Yapanlar", desc: "Yurtdışı pazarlarına (Amazon, Etsy, Shopify Global) dövizle satış yapmak ve operasyonunu yönetmek isteyenler." },
                        { icon: "🔧", title: "Teknik Çözüm Arayanlar", desc: "Hız problemleri, entegrasyon hataları veya ödeme sistemi sorunlarıyla boğuşan mağaza sahipleri." },
                        { icon: "⚡", title: "Operasyonel Liderler", desc: "Stok, sipariş ve kargo süreçlerini otomatize etmek, verimliliği artırmak isteyen yöneticiler." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-bor-primary-100 hover:border-bor-secondary/30 transition-all hover:shadow-xl group flex flex-col items-start pb-10">
                            <div className="w-14 h-14 rounded-xl bg-bor-primary-50 text-3xl flex items-center justify-center mb-6 group-hover:bg-bor-secondary/10 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-bor-primary-900 mb-3">{item.title}</h3>
                            <p className="text-bor-primary-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       3. PROCESS — Nasıl Yapıyoruz?
       ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24 bg-bor-primary-900">
                <div className="text-center mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">SÜREÇ</span>
                    <h2 className="text-4xl font-display text-white mb-4">PikselAI <span className="italic text-bor-secondary">Nasıl Yönetir?</span></h2>
                    <p className="text-white/60">6 Adımda fikirlerinizi satışa dönüştüren sistem.</p>
                </div>

                <div className="max-w-5xl mx-auto space-y-12 relative px-4">
                    {/* Central Line */}
                    <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bor-secondary via-white/10 to-transparent transform md:-translate-x-1/2" />

                    {[
                        { step: "01", title: "Bilgi Toplama & Analiz", desc: "Markanızı, hedeflerinizi ve rakiplerinizi analiz ederek en doğru yol haritasını çıkarıyoruz." },
                        { step: "02", title: "Strateji & Planlama", desc: "Teknik gereksinimler, site mimarisi ve UX/UI tasarım planlamasını yapıyoruz." },
                        { step: "03", title: "Kurulum & Tasarım", desc: "Shopify altyapısı üzerine markanıza özel, mobil uyumlu ve hızlı bir tasarım giydiriyoruz." },
                        { step: "04", title: "İçerik & Ürün Girişi", desc: "SEO uyumlu ürün açıklamaları, kategori yapıları ve görsel girişlerini tamamlıyoruz." },
                        { step: "05", title: "Test & Entegrasyon", desc: "Ödeme sistemleri, kargo entegrasyonları ve tüm fonksiyonel testleri (Hız, Mobil) yapıyoruz." },
                        { step: "06", title: "Lansman & Büyüme", desc: "Mağazayı yayına alıyor, reklam ve pazarlama stratejileriyle trafiği başlatıyoruz." }
                    ].map((item, i) => (
                        <div key={i} className={`flex flex-col md:flex-row gap-8 relative items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                            {/* Number Bubble */}
                            <div className="w-16 h-16 rounded-full bg-bor-primary-900 border-4 border-bor-secondary text-white font-bold text-xl flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(45,106,79,0.5)]">
                                {item.step}
                            </div>

                            {/* Text Content */}
                            <div className={`w-full md:w-[calc(50%-40px)] bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-bor-secondary/50 transition-colors backdrop-blur-sm ${i % 2 !== 0 ? 'mr-auto' : 'ml-auto'}`}>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       4. PACKAGES — Paketler
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-white" id="packages">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display text-bor-primary-900 mb-4">E-Ticaret <span className="text-bor-secondary">Paketlerimiz</span></h2>
                    <p className="text-bor-primary-500">İhtiyacınıza ve bütçenize uygun profesyonel çözümler.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {/* Paket 1 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-bor-primary-100 flex flex-col hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-bor-primary-200 group-hover:bg-bor-secondary transition-colors" />
                        <h3 className="text-2xl font-bold text-bor-primary-900 mb-2">Başlangıç (Launch)</h3>
                        <p className="text-sm text-bor-primary-500 mb-6">Yeni başlayanlar için temel kurulum paketi.</p>
                        <div className="text-4xl font-display font-bold text-bor-primary-900 mb-8">₺39.000 <span className="text-sm font-sans font-normal text-bor-primary-400">/tek sefer</span></div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                                {["Shopify Hesap Kurulumu", "Hazır Tema Özelleştirme", "Mobil Uyumlu Tasarım", "Ana Sayfa + 3 Alt Sayfa", "Basit SEO Ayarları", "Ödeme Sistemi Entegrasyonu", "1 Saat Eğitim"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-bor-primary-600">
                                        <span className="w-5 h-5 rounded-full bg-bor-primary-100 text-bor-secondary flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="outline" className="w-full hover:bg-bor-secondary hover:text-white hover:border-bor-secondary" onClick={() => navigate('/iletisim')}>Bilgi Al</Button>
                    </div>

                    {/* Paket 2 (Featured) */}
                    <div className="bg-bor-primary-900 rounded-[2rem] p-8 border border-bor-secondary flex flex-col shadow-2xl relative transform md:-translate-y-4 z-10">
                        <div className="absolute top-0 right-0 bg-bor-secondary text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">En Popüler</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Büyüme (Growth)</h3>
                        <p className="text-sm text-white/60 mb-6">Satışlarını artırmak isteyen markalar için.</p>
                        <div className="text-4xl font-display font-bold text-white mb-8">₺69.000 <span className="text-sm font-sans font-normal text-white/40">/tek sefer</span></div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                                {["Her Şey Dahil Kurulum", "Premium Tema Lisansı", "Gelişmiş UX/UI Düzenleme", "Kapsamlı SEO Optimizasyonu", "Hız & Performans Ayarları", "E-Mail Pazarlama (Klaviyo)", "Blog ve İçerik Yönetimi", "3 Saat Eğitim & 1 Ay Destek"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                                        <span className="w-5 h-5 rounded-full bg-bor-secondary text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="primary" className="w-full py-4 text-lg" onClick={() => navigate('/iletisim')}>Hemen Başlayın</Button>
                    </div>

                    {/* Paket 3 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-bor-primary-100 flex flex-col hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-bor-primary-200 group-hover:bg-[#7209b7] transition-colors" />
                        <h3 className="text-2xl font-bold text-bor-primary-900 mb-2">Kurumsal (Pro)</h3>
                        <p className="text-sm text-bor-primary-500 mb-6">Özel tasarım ve yüksek hacimli operasyonlar.</p>
                        <div className="text-4xl font-display font-bold text-bor-primary-900 mb-8">₺109.000 <span className="text-sm font-sans font-normal text-bor-primary-400">/tek sefer</span></div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                                {["Custom (Özel) Yazılım/Tasarım", "Pazaryeri Entegrasyonları", "ERP / CRM Bağlantıları", "Çoklu Dil & Para Birimi", "Gelişmiş Veri Analitiği (GA4)", "Dönüşüm Oranı Optimizasyonu", "Özel Ekip Desteği", "3 Ay Öncelikli Destek"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-bor-primary-600">
                                        <span className="w-5 h-5 rounded-full bg-bor-primary-100 text-[#7209b7] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="outline" className="w-full hover:bg-[#7209b7] hover:text-white hover:border-[#7209b7]" onClick={() => navigate('/iletisim')}>Teklif İste</Button>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       5. WHY PIKSELAI? — Neden Biz?
       ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24 bg-bor-primary-900">
                <div className="flex flex-col md:flex-row gap-16 items-center px-4">
                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">NEDEN PİKSELAI?</span>
                            <h2 className="text-4xl font-display text-white mb-6">Mühendislik ve Sanatın <br /> <span className="italic text-bor-secondary">Kusursuz Uyumu</span></h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Teknik Uzmanlık", desc: "Sadece tasarım değil; kod yapısı, hız ve SEO metriklerine hakim mühendislik yaklaşımı." },
                                { title: "Satış Odaklılık", desc: "Güzel görünen değil, satış yapan mağazalar tasarlıyoruz. Her detayı dönüşüm (CRO) için kurguluyoruz." },
                                { title: "AI Gücü", desc: "Ürün görsellerinden metin yazımına kadar yapay zeka araçlarıyla sürecinizi hızlandırıyoruz." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-bor-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-bor-secondary group-hover:text-white transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-bor-secondary ring-4 ring-bor-secondary/20 group-hover:bg-white group-hover:ring-white/20" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute -inset-4 bg-bor-secondary/20 rounded-[3rem] blur-2xl opacity-50" />
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Dashboard" className="w-full transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-10">
                                <div className="text-white">
                                    <div className="text-sm font-bold uppercase tracking-widest text-bor-secondary mb-2">Ölçülebilir Başarı</div>
                                    <div className="text-3xl font-display font-bold">Verilerle Kanıtlanmış Büyüme</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       6. FAQ
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-bor-primary-50">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-primary-400 block mb-4">MERAK EDİLENLER</span>
                        <h2 className="text-3xl font-display text-bor-primary-900 mb-4">Sıkça Sorulan <span className="text-bor-secondary">Sorular</span></h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Neden Shopify tercih etmeliyim?", a: "Shopify, dünyanın en güvenilir, hızlı ve ölçeklenebilir e-ticaret altyapısıdır. Sunucu bakımı, güvenlik güncellemeleri gibi teknik dertlerle uğraşmaz, sadece satışa odaklanırsınız. Google, Facebook ve Instagram ile kusursuz çalışır." },
                            { q: "Mağazam ne kadar sürede açılır?", a: "Paket kapsamına göre değişmekle birlikte; Başlangıç paketi ortalama 3-5 iş günü, Büyüme paketi 10-14 gün, Kurumsal paket ise 3-4 hafta sürmektedir." },
                            { q: "Mevcut sitemi Shopify'a taşıyabilir misiniz?", a: "Evet, Woocommerce, Opencart, İkas veya T-soft gibi altyapılardaki ürün, müşteri ve sipariş verilerinizi kayıpsız olarak Shopify'a taşıyoruz." },
                            { q: "Kurulum sonrası destek veriyor musunuz?", a: "Kesinlikle. Her proje tesliminde yönetim paneli eğitimi veriyoruz. Ayrıca seçtiğiniz pakete göre 1 ila 3 ay arasında ücretsiz teknik destek sağlıyoruz." }
                        ].map((item, i) => (
                            <div key={i} className="group border border-bor-primary-200 rounded-2xl p-6 bg-white hover:border-bor-secondary/50 transition-all hover:shadow-md cursor-pointer">
                                <h3 className="font-bold text-bor-primary-900 mb-2 flex justify-between items-center text-lg">
                                    {item.q}
                                    <span className="w-8 h-8 rounded-full bg-bor-primary-50 text-bor-primary-400 flex items-center justify-center group-hover:bg-bor-secondary group-hover:text-white transition-colors">?</span>
                                </h3>
                                <p className="text-bor-primary-600 text-sm leading-relaxed pr-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
                7. CTA
                ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-20 bg-bor-primary-900">
                <div className="bg-gradient-to-br from-bor-primary-800 to-bor-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bor-secondary/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-bor-secondary/20 transition-colors duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7209b7]/10 rounded-full blur-[100px] -ml-32 -mb-32 group-hover:bg-[#7209b7]/20 transition-colors duration-1000" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                            Markanızı Büyütmeye <br />
                            <span className="text-bor-secondary italic">Hazır mısınız?</span>
                        </h2>
                        <p className="text-bor-primary-200 text-lg">
                            Ücretsiz dijital varlık analizi için hemen randevu alın.
                            Potansiyelinizi birlikte keşfedelim.
                        </p>
                        <Button variant="primary" size="lg" className="min-w-[200px] h-14 text-lg" onClick={() => navigate('/iletisim')}>
                            Ücretsiz Analiz Al
                        </Button>
                    </div>
                </div>
            </Section>

        </MainLayout>
    );
};

export default EcommerceService;
