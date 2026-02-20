import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export default function CreativeDesign() {

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>
            {/* ═══════════════════════════════════════════
       1. HERO SECTION — Koyu Arka Plan & Animasyonlu Başlık
       ═══════════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A2624] text-white min-h-[90vh] flex items-center">
                <div className="absolute inset-0 bg-[url('https://cdn.sanity.io/images/k0dlbavy/production/e7225134cb74ddfc0fd510b9bfef77a6a4221ba2-2400x1200.jpg?q=100&auto=format&w=2400&h=1200&fit=min')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2624] via-[#0A2624]/80 to-[#0A2624]" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                                Kusursuz Dijital <br />
                                <span className="italic font-light text-[#E2FF65]">Katalog Deneyimi</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-white/80 mb-8 font-light leading-relaxed">
                                Geleneksel ve karmaşık ürün sergileme yöntemlerini geride bırakın. Binlerce görsel ve ürün arasında kaybolmadan, koleksiyonlarınızı müşterilerinize kusursuz bir akıcılıkla sunun.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <a href="https://katalog-pikselai.netlify.app/" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        className="bg-[#E2FF65] text-black hover:bg-[#D4F054] border-none text-lg px-8 h-14 rounded-full w-full sm:w-auto font-medium"
                                    >
                                        Sistemi Keşfetmeye Başla
                                    </Button>
                                </a>
                                <div className="text-sm text-white/60 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-xs">✓</span>
                                    Işık Hızında Arama
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-bor-primary-900 flex items-center justify-center p-2 lg:p-4"
                        >
                            <img
                                src="/katalog-hero.webp"
                                alt="PikselAI Katalog Uygulaması"
                                className="w-full h-auto rounded-[1.5rem] object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
       2. REASONS & STATS -> Kullanıcı Deneyimi
       ═══════════════════════════════════════════ */}
            <section className="py-24 border-b border-bor-primary-200/30 dark:border-bor-primary-800/30">
                <div className="container-custom">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl font-display text-bor-primary-900 mb-6">Kullanıcı Deneyimi ve Genel Kolaylıklar</h2>
                        <p className="text-bor-primary-500 text-lg leading-relaxed">
                            Neden bu uygulamayı tercih etmelisiniz? Çünkü her bir piksel, işinizi kolaylaştırmak için tasarlandı:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-bor-secondary/10 text-bor-secondary rounded-2xl flex items-center justify-center text-3xl mb-6">✨</div>
                            <h3 className="font-bold text-xl mb-3">Minimalist ve Sezgisel</h3>
                            <p className="text-bor-primary-500">Hiçbir eğitime veya kullanım kılavuzuna ihtiyaç duymadan herkesin kullanabileceği, karmaşadan uzak tasarım.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-bor-secondary/10 text-bor-secondary rounded-2xl flex items-center justify-center text-3xl mb-6">👉</div>
                            <h3 className="font-bold text-xl mb-3">Dokunsal Geri Bildirim</h3>
                            <p className="text-bor-primary-500">Mobil cihazlarda menüler arası geçişlerde hissettiğiniz hafif titreşimlerle donatılmış premium etkileşim.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-bor-secondary/10 text-bor-secondary rounded-2xl flex items-center justify-center text-3xl mb-6">📦</div>
                            <h3 className="font-bold text-xl mb-3">Kolay İndirme ve Paylaşım</h3>
                            <p className="text-bor-primary-500">Görselleri tek tıkla indirebilir veya bir bağlantı aracılığıyla takım arkadaşlarınızla pürüzsüzce paylaşabilirsiniz.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
       3. WHAT WE OFFER — Bento Grid (Ana Özellikler)
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-bor-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h4 className="text-sm font-bold tracking-[0.2em] text-bor-primary-400 mb-6 uppercase">Ana Özellikler</h4>
                        <h2 className="text-4xl lg:text-5xl font-display mb-6">
                            İhtiyacınız Olan Her Şey <br /> <span className="italic font-light text-bor-secondary">Tek Bir Platformda</span>
                        </h2>
                        <p className="text-lg text-bor-primary-600 dark:text-bor-primary-400 font-light mt-4 max-w-2xl mx-auto">
                            Sadece ürünlerinizi sergilemekle kalmaz; operasyonel süreçlerinizi hızlandırmak ve senkronizasyon sağlamak için modüller sunar.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-4 lg:gap-6">
                        <BentoCard
                            title="Gelişmiş Albüm Yönetimi"
                            desc="Hiyerarşik akıllı klasörleme ile sezonlara veya kategorilere göre ürün gruplandırma ve anında sunum."
                            img="https://cdn.sanity.io/images/k0dlbavy/production/29e4fadd842063016b83c80145d445daec740abf-1584x880.png?q=100&auto=format&fit=min"
                            className="md:col-span-2 lg:col-span-2 min-h-[350px]"
                        />
                        <BentoCard
                            title="Etkileşimli Galeri"
                            desc="Cihaz bağımsız çalışan, pürüzsüz lightbox geçişlerine sahip modern görsel sergileme alanı."
                            img="https://cdn.sanity.io/images/k0dlbavy/production/0bc1fcbe5aac0bec68b6193db358c1d0370890e0-768x880.png?q=100&auto=format&fit=min"
                            className="lg:col-span-1 min-h-[350px]"
                        />

                        <BentoCard
                            title="Akıllı Çoklu İndirme"
                            desc="Seçtiğiniz yüzlerce medyayı otomatik ZIP arşivine çevirip optimize edilmiş boyutlarla cihazınıza aktarın."
                            img="https://cdn.sanity.io/images/k0dlbavy/production/d061fc203765d8af2a7b9c88ab4d93ec8963b848-1040x1808.png?q=100&auto=format&fit=min"
                            className="lg:col-span-1 min-h-[350px] lg:min-h-[440px]"
                        />
                        <BentoCard
                            title="Medya Oynatıcı"
                            desc="İndirme gerektirmeden en ağır videoları anında oynatan, harici programa ihtiyaç bırakmayan entegre sistem."
                            img="https://cdn.sanity.io/images/k0dlbavy/production/6737db1e51268f8ded474ed1b5d0577c1023facc-1040x880.png?q=100&auto=format&fit=min"
                            className="lg:col-span-1 min-h-[350px] lg:min-h-[440px]"
                            textDark={true}
                        />
                        <BentoCard
                            title="Yönetici ve Erişim Kontrolü"
                            desc="Yeni sezon ürünleri gibi gizli kalması gereken koleksiyonlar için şifreli özel paneller."
                            img="https://cdn.sanity.io/images/k0dlbavy/production/f344ad12eb0fa8e750de216cf58b5dbb41519fba-1040x880.png?q=100&auto=format&fit=min"
                            className="lg:col-span-1 min-h-[350px] lg:min-h-[440px]"
                            textDark={true}
                        />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       4. SHOWCASE & IMPACT — Animated Layout
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 lg:py-32 bg-bor-primary-50 dark:bg-bor-primary-900/20 overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
                                Odak Noktası: <span className="italic font-light text-bor-secondary">Işık Hızında Akıllı Arama</span>
                            </h2>
                            <p className="text-lg text-bor-primary-600 mb-8 max-w-xl">
                                Sadece bulmayı değil, hissedilebilir bir hızla anında ulaşmayı vadediyoruz. Siz yazarken, binlerce görsel ve veri anlık olarak filtrelenir ve ekranınız akıcılıkla güncellenir.
                            </p>
                            <div className="space-y-8 mt-10">
                                <FeatureItem
                                    title="Tam Hakimiyet ve Güven"
                                    desc="Arka planda çalışan lokal veritabanı senkronizasyonu sayesinde, sanki tüm ürünler cihazınızın içindeymiş gibi muazzam bir tepki hızı elde edersiniz."
                                    icon="⚡"
                                />
                                <FeatureItem
                                    title="Zamanla Yarışılan Anlar"
                                    desc="Müşterinize aradığını hemen gösterin. Arama çubuğuna sadece birkaç harf yazarak sonuçları anında ekrana getirin. Klasörler içinde kaybolmayın."
                                    icon="⏱️"
                                />
                                <FeatureItem
                                    title="PWA ile Hızlı Kurulum"
                                    desc="İnternet bağlantısının zayıf olduğu durumlarda bile uygulamanın önbelleği sayesinde kesintisiz çalışmayı sürdürebilirsiniz."
                                    icon="📱"
                                />
                            </div>
                            <div className="mt-12">
                                <a href="https://katalog-pikselai.netlify.app/" target="_blank" rel="noreferrer">
                                    <Button size="lg" className="shadow-lg shadow-bor-secondary/20 rounded-full px-8">
                                        Canlı Demoyu İncele
                                    </Button>
                                </a>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/5] bg-bor-primary-100 dark:bg-bor-primary-800 shadow-2xl border border-white/20"
                            >
                                <img
                                    src="https://cdn.sanity.io/images/k0dlbavy/production/ab01cd9dfaa3cf82aee1d5d1c2d9eecbedaa8612-1400x1646.jpg?q=100&auto=format&w=1200&h=1411&fit=min"
                                    alt="Katalog Arama Ekranı"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Element 1 - Animasyonlu Search */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute -bottom-8 -left-8 bg-white dark:bg-bor-primary-900 p-6 rounded-2xl shadow-xl w-72 border border-bor-primary-100 dark:border-bor-primary-800"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-bor-primary-900 dark:text-white">Anında Sonuç</div>
                                        <div className="text-xs text-bor-primary-500">Oms gecikme (0 ms)</div>
                                    </div>
                                </div>
                                <div className="w-full h-2 bg-bor-primary-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className="h-full bg-blue-500"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       5. CTA SECTION
       ═══════════════════════════════════════════ */}
            <section className="py-32 bg-[#0A2624] text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <div className="w-[800px] h-[800px] bg-[#E2FF65] rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-bold font-display mb-8"
                    >
                        Hazır mısınız?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto"
                    >
                        Büyük dosyalarla ve karmaşık arşivlerle boğuşmaya son verin. Sizinle aynı hızda çalışan, modern, güvenli ve zarif medya yönetimi deneyimine bugün adım atın.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a href="https://katalog-pikselai.netlify.app/" target="_blank" rel="noreferrer">
                            <Button
                                size="lg"
                                className="bg-[#E2FF65] text-black hover:bg-[#D4F054] border-none text-xl px-12 h-16 rounded-full hover:scale-105 transition-transform font-medium"
                            >
                                Platformu Keşfedin
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

        </MainLayout>
    )
}

function BentoCard({ title, desc, img, className, textDark = false }: { title: string; desc: string; img: string; className?: string; textDark?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-[20px] lg:rounded-[32px] group bg-bor-background shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
        >
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className={`relative z-10 p-6 lg:p-8 flex flex-col h-full pointer-events-none ${textDark ? 'text-bor-primary-900' : 'text-white'}`}>
                <h3 className="text-2xl font-bold mb-3 leading-tight">{title}</h3>
                <p className="text-sm lg:text-base opacity-95 leading-relaxed max-w-[90%] md:max-w-[70%]">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}

function FeatureItem({ title, desc, icon }: { title: string, desc: string, icon: string }) {
    return (
        <div className="flex gap-5 group">
            <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-2xl bg-bor-primary-50 dark:bg-bor-primary-800 flex items-center justify-center text-xl group-hover:bg-bor-secondary group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2 text-bor-primary-900 dark:text-white">{title}</h4>
                <p className="text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed text-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}
