import { motion } from 'framer-motion';
import { Layers, Search, Share2, Zap, Timer, Smartphone } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export default function CreativeDesign() {

    return (
        <MainLayout transparentHeader={true} headerLightText={true} showFooter={false}>
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
                            <h1 className="text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight tracking-tight text-white drop-shadow-2xl">
                                Tek Merkez: <br />
                                <span className="italic font-light text-[#E2FF65]">Hem Ekibinize Arşiv, Hem Müşterinize Katalog</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-white/80 mb-8 font-light leading-relaxed">
                                Binlerce ürün görseli arasında neyin nerede olduğunu aramakla vakit kaybetmeyin. Bu sistem sadece müşterinize şık bir sunum yapmanız için değil; kendi ekibinizin de ne arıyorsa saniyeler içinde ulaşıp yönetebilmesi için tasarlandı. Siz içeride dev bir arama motoru hızıyla dilediğinizi bulurken, müşteriniz vitrinde sadece netliği ve sadeliği görsün.
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
                            className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-bor-primary-900 flex items-center justify-center p-2 lg:p-4 group cursor-pointer"
                        >
                            <img
                                src="/images/katalog-hero.webp"
                                alt="PikselAI Katalog Uygulaması"
                                className="w-full h-auto rounded-[1.5rem] object-contain transition-transform duration-700 group-hover:scale-105"
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
                            <div className="w-16 h-16 mx-auto bg-bor-primary-100 dark:bg-bor-primary-800 text-bor-primary-900 dark:text-bor-primary-100 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm border border-bor-primary-200/50 dark:border-white/10">
                                <Layers className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-bor-primary-900 dark:text-white">Minimalist ve Sezgisel</h3>
                            <p className="text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed font-light">
                                Karmaşık menülerden kurtulun. Hiçbir eğitime veya kılavuza ihtiyaç duymadan, ekibinizin ve müşterilerinizin ilk saniyeden itibaren rahatça kullanabileceği bir tasarım.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-bor-primary-100 dark:bg-bor-primary-800 text-bor-primary-900 dark:text-bor-primary-100 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm border border-bor-primary-200/50 dark:border-white/10">
                                <Search className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-bor-primary-900 dark:text-white">Hızlı ve Akıllı Arama</h3>
                            <p className="text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed font-light">
                                Yüzlerce klasör arasında kaybolmayın. Hem siz hem de müşterileriniz, bakmak istedikleri modele, renge veya spesifik bir ürüne anında, saniyeler içinde ulaşabilir.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-16 h-16 mx-auto bg-bor-primary-100 dark:bg-bor-primary-800 text-bor-primary-900 dark:text-bor-primary-100 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm border border-bor-primary-200/50 dark:border-white/10">
                                <Share2 className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-bor-primary-900 dark:text-white">Kolay İndirme ve Paylaşım</h3>
                            <p className="text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed font-light">
                                Beğendiğiniz görselleri doğrudan cihazınıza hızlıca indirebilir veya tek bir paylaşma butonu ile ekip arkadaşlarınızla ve müşterilerinizle anında paylaşabilirsiniz.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
       3. WHAT WE OFFER — Bento Grid (Ana Özellikler)
       ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24 bg-[#0A2624] text-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h4 className="text-sm font-bold tracking-[0.2em] text-[#E2FF65] mb-6 uppercase">Ana Özellikler</h4>
                        <h2 className="text-4xl lg:text-5xl font-display mb-6">
                            İhtiyacınız Olan Her Şey <br /> <span className="italic font-light text-[#E2FF65]">Tek Bir Platformda</span>
                        </h2>
                        <p className="text-lg text-white/80 font-light mt-4 max-w-2xl mx-auto">
                            Sadece müşterilerinize şık bir vitrin sunmuyoruz. Sahne arkasında, binlerce görsel arasında kaybolmadan kendi işinizi hızla yürütebileceğiniz sağlam bir altyapı inşa ettik.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-4 lg:gap-6">
                        <BentoCard
                            title="Gelişmiş Albüm Yönetimi"
                            desc="Ürünlerinizi sezon, kampanya veya kategorilere göre dilediğiniz gibi klasörleyip aynı dakika içinde sunuma hazır hale getirin."
                            img="/katalog-assets/klasorleme.webp"
                            className="md:col-span-2 lg:col-span-2 min-h-[350px]"
                        />
                        <BentoCard
                            title="Etkileşimli Galeri"
                            desc="Kolay kullanım için filtreleme seçenekleri ve farklı görünüm seçenekleri sunmaktadır."
                            img="/katalog-assets/filtre.webp"
                            className="lg:col-span-1 min-h-[350px]"
                        />

                        <BentoCard
                            title="Toplu İndirme Kolaylığı"
                            desc="Beğendiğiniz tüm görselleri seçin ve tek tıkla bilgisayarınıza indirin. Arşiv formatında düzenli bir şekilde anında cihazınızda."
                            img="/katalog-assets/indir.webp"
                            className="lg:col-span-1 min-h-[350px] lg:min-h-[440px]"
                        />
                        <BentoCard
                            title="Dahili Medya Oynatıcı"
                            desc="Videoları izlemek için cihazınıza indirmenize gerek yok. Tüm kampanya veya ürün videolarını doğrudan galeri üzerinden akıcı biçimde oynatın."
                            video="/katalog-assets/video-player-opt.mp4"
                            className="lg:col-span-1 min-h-[350px] lg:min-h-[440px]"
                            textDark={true}
                        />
                        <BentoCard
                            title="Özel Erişim Kontrolü"
                            desc="Henüz herkese açık olmayan yeni sezon ürünleriniz veya özel müşterileriniz için şifrelenmiş, güvenli paylaşım alanları."
                            img="/katalog-assets/sifre.webp"
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
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-bor-primary-900 dark:text-white">
                                Odak Noktası: <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00] dark:text-[#E2FF65]">Işık Hızında Akıllı Arama</span>
                            </h2>
                            <p className="text-lg text-bor-primary-600 dark:text-bor-primary-400 mb-8 max-w-xl font-light">
                                Müşterinize o an tam da sormuş olduğu ürünü göstermeniz gerekiyor. İşte bu noktada hız her şeydir. Siz arama çubuğuna yazarken sonuçların nasıl anında döküldüğünü gördüğünüzde klavyeye dokunmaktan keyif alacaksınız.
                            </p>
                            <div className="space-y-8 mt-10">
                                <FeatureItem
                                    title="Kesintisiz Akış"
                                    desc="Veritabanı cihazınıza senkronize olarak arka planda çalışır. Böylece bir şeyler aradığınızda 'yükleniyor' çemberini izlemek yerine direkt sonuca ulaşırsınız."
                                    icon={<Zap className="w-6 h-6" strokeWidth={1.5} />}
                                />
                                <FeatureItem
                                    title="Zamanınızı Geri Kazanın"
                                    desc="İç içe geçmiş onlarca klasör veya drive linkleri arasında doğru görseli arama devri bitti. Sadece birkaç harf yazın ve aradığınızı anında ekranınıza getirin."
                                    icon={<Timer className="w-6 h-6" strokeWidth={1.5} />}
                                />
                                <FeatureItem
                                    title="Her Yerde Sizinle"
                                    desc="İnternet çekmeyen depo veya fuar alanlarına mı gidiyorsunuz? Sunacağınız koleksiyonları cihazınıza indirerek bağlantı olmadan da çalışmaya kesintisiz devam edebilirsiniz."
                                    icon={<Smartphone className="w-6 h-6" strokeWidth={1.5} />}
                                />
                            </div>
                            <div className="mt-12">
                                <a href="https://katalog-pikselai.netlify.app/" target="_blank" rel="noreferrer">
                                    <Button size="lg" className="bg-[#0A2624] text-white hover:bg-[#0A2624]/90 border-none shadow-lg px-8 rounded-full font-medium">
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
                                className="relative rounded-[2rem] overflow-hidden bg-bor-primary-100 dark:bg-bor-primary-800 shadow-2xl border border-white/20 p-2 lg:p-4 flex items-center justify-center group cursor-pointer"
                            >
                                <img
                                    src="/images/arama-ekrani.webp"
                                    alt="Katalog Arama Ekranı"
                                    className="w-full h-auto rounded-[1.5rem] object-contain transition-transform duration-700 group-hover:scale-105"
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
                                    <div className="w-12 h-12 rounded-full bg-[#0A2624] text-[#E2FF65] flex items-center justify-center shrink-0 shadow-sm">
                                        <Search strokeWidth={2} className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-bor-primary-900 dark:text-white">Ekranınızda</div>
                                        <div className="text-xs text-bor-primary-500 font-medium">Bekleme yok, yükleme yok</div>
                                    </div>
                                </div>
                                <div className="w-full h-2 bg-bor-primary-100 dark:bg-bor-primary-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className="h-full bg-[#0A2624] dark:bg-[#E2FF65]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       5. CTA SECTION & FOOTER
       ═══════════════════════════════════════════ */}
            <div className="relative bg-[#0A2624] text-white flex flex-col pt-24 lg:pt-40 overflow-hidden">

                {/* Full Bleed Background Image - Anchored at the top so the dense forest shows, falling naturally into black/dark green at the bottom */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Hiding the natural dark bottom part seamlessly with the UI's brand green (#0A2624) */}
                    <div className="absolute inset-0 bg-[url('/images/katalog-cta-bg.png')] bg-cover bg-top bg-no-repeat opacity-90"></div>
                    <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0A2624] via-[#0A2624]/80 to-transparent"></div>
                </div>

                {/* The text block pushes into the dark, negative space generated by the AI photo and CSS gradient */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex-1 flex flex-col justify-end pb-24 lg:pb-32 mt-[40vh]">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-bold font-display mb-6 drop-shadow-2xl"
                    >
                        Hazır mısınız? <br className="hidden md:block" />
                        <span className="italic font-light text-[#E2FF65]">Sistemi hemen deneyin</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto drop-shadow-md"
                    >
                        Büyük dosyalarla ve karmaşık arşivlerle boğuşmaya son verin. Sizinle aynı hızda çalışan, modern, güvenli ve zarif ürün yönetimi deneyimine bugün adım atın.
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
                                className="bg-[#E2FF65] text-[#0A2624] hover:bg-[#D4F054] border-none text-xl px-12 h-16 rounded-full hover:scale-105 transition-transform font-bold shadow-xl"
                            >
                                Platformu Keşfedin
                            </Button>
                        </a>
                    </motion.div>
                </div>

                {/* Clean inline footer without its own black blur background */}
                <div className="relative z-10">
                    <Footer transparent={true} />
                </div>
            </div>

        </MainLayout>
    )
}

function BentoCard({ title, desc, img, video, className, textDark = false }: { title: string; desc: string; img?: string; video?: string; className?: string; textDark?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-[20px] lg:rounded-[32px] group bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
        >
            <div className="absolute inset-0 w-full h-full z-0 bg-transparent flex items-center justify-center p-0">
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                ) : img ? (
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                ) : null}
            </div>

            {/* Dark overlay that appears on hover to make text readable */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/30 z-0 pointer-events-none"></div>

            {/* Hidden by default, appears perfectly centered on hover */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 pointer-events-none">
                <div className={`backdrop-blur-md rounded-2xl p-6 lg:p-8 text-center w-full shadow-2xl transition-transform duration-700 scale-95 group-hover:scale-100 ${textDark ? 'bg-white/60 text-bor-primary-900 border border-white/50' : 'bg-black/40 text-white border border-white/20'}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight drop-shadow-md">{title}</h3>
                    <p className="text-sm lg:text-base opacity-95 leading-relaxed font-medium drop-shadow-md">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function FeatureItem({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
    return (
        <div className="flex gap-5 group">
            <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-bor-primary-800 border border-bor-primary-100 dark:border-bor-primary-700 flex items-center justify-center text-[#0A2624] dark:text-[#E2FF65] group-hover:bg-[#0A2624] group-hover:text-[#E2FF65] dark:group-hover:bg-[#E2FF65] dark:group-hover:text-[#0A2624] transition-colors duration-300 shadow-sm">
                    {icon}
                </div>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2 text-[#2B544E] dark:text-[#E2FF65]">{title}</h4>
                <p className="text-bor-primary-600 dark:text-bor-primary-400 leading-relaxed text-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}
