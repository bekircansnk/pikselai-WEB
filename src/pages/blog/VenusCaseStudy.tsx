import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../layouts/MainLayout'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BottomCTA } from '../../components/sections/BottomCTA'

const BlogImage = ({ src, alt, href, caption }: { src: string; alt: string; href: string; caption: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group w-full">
        <figure className="m-0 relative w-full">
            <div className="overflow-hidden rounded-3xl border border-[#e0dcd3] shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#F4EFE6]">
                <img src={src} alt={alt} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <figcaption className="text-center mt-4 text-sm font-medium text-[#0b2117]/60 uppercase tracking-widest">
                {caption} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#86AA00]">→ İncele</span>
            </figcaption>
        </figure>
    </a>
)



const VenusCaseStudy = () => {
    return (
        <MainLayout transparentHeader={false} headerLightText={false}>
            <Helmet>
                <title>Venüs Giyim Sanal Manken Hikayesi | Pikselai</title>
                <meta name="description" content="Venüs Giyim'in Pikselai ile gerçekleştirdiği yapay zeka manken devrimi ve katalog başarı hikayesi." />
            </Helmet>

            <section className="bg-[#F4EFE6] border-b border-[#e0dcd3]">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                    <div className="px-6 md:px-16 lg:px-24 pt-28 pb-20 lg:py-32 flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl mx-auto lg:mx-0 w-full">
                            <Link to="/musteri-hikayeleri" className="inline-flex items-center gap-1.5 text-[#0b2117]/50 hover:text-[#86AA00] text-sm mb-8 transition-colors">
                                <ArrowLeft size={14} /> Müşteri Hikayeleri
                            </Link>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0b2117]/10 bg-[#0b2117]/5 text-[#0b2117] text-[10px] font-bold tracking-widest uppercase mb-6">REFERANS PROJE</div>
                            <h1 className="text-4xl lg:text-6xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                Venüs'ün <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00]">Model Çeşitliliği Dönüşümü</span>
                            </h1>
                            <p className="text-[#3a5245] font-light text-lg md:text-xl leading-relaxed max-w-lg">
                                Kadın giyim markası Venüs, e-ticaret sitelerindeki manken çekim süreçlerini Pikselai'ın Sanal Manken (AI Model) teknolojisiyle tamamen yeniden kurguladı.
                            </p>
                        </motion.div>
                    </div>
                    <div className="relative h-[45vh] md:h-[55vh] lg:h-auto overflow-hidden bg-[#0b2117]">
                        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src="/assets/brands/venus/mila_1_image00004_4k_16_9_01_hero_full.webp" alt="Venüs AI" className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Model Bağımlılığından <br className="hidden md:block" /><span className="italic text-[#86AA00]">Tam Özgürlüğe</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Venüs markası için her yeni sezonda aynı kaliteyi tutturmak ve hedef kitleye uygun modeller bulmak maliyetli bir operasyon haline gelmişti.</p>
                                <p><strong>Pikselai Ghost Mannequin & AI Model Altyapısı</strong> sayesinde, "Hayalet Manken" çekilen tüm kıyafetler dakikalar içinde yüksek kaliteli, insansı görünüme sahip fotorealistik karakterlerin üzerine giydirildi.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage src="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp" alt="Venüs AI Manken" href="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp" caption="Yapay Zeka Destekli Mid-shot (Portre) Görsel" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            <BlogImage src="/assets/brands/venus/ella_1_1_4k_4_5_02_story_full.webp" alt="Lifestyle Katalog" href="/assets/brands/venus/ella_1_1_4k_4_5_02_story_full.webp" caption="Lifestyle Katalog" />
                            <BlogImage src="/assets/brands/venus/mila_1_image00004_2k_4_5_03_portrait_mid__2_.webp" alt="Pazara Doğru Yüz" href="/assets/brands/venus/mila_1_image00004_2k_4_5_03_portrait_mid__2_.webp" caption="Pazara Doğru Yüz" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Uluslararası Açılım İçin <br className="hidden md:block" /><span className="italic text-[#86AA00]">Kültürel Çeşitlilik</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Geliştirdiğimiz "Sanal Manken" kütüphanesi sayesinde, Ortadoğu'dan Avrupa'ya kadar her bölgeye özgü karakterler kurgulandı. Aynı ürün, saniyeler içinde farklı demografilerden modellere uygun şekilde uyarlandı.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                E-Ticarette Sürekli <br className="hidden md:block" /><span className="italic text-[#86AA00]">Güncel Görünüm</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Yeni bir ürün stoklara girdiğinde çekim süreci günler değil, sadece 15 dakika sürüyor. Bu da e-ticaret ekibine her sezon koleksiyonu vitrine çıkarırken <strong>%85 zaman tasarrufu</strong> ve daha hızlı satışa çıkarma olanağı sağladı.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage src="/assets/brands/venus/mila_1_image00004_2k_4_5_01_hero_full__2_.webp" alt="Venüs E-Ticaret" href="/assets/brands/venus/mila_1_image00004_2k_4_5_01_hero_full__2_.webp" caption="Yüksek Kaliteli Stüdyo Standardı" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <BottomCTA />
        </MainLayout>
    )
}

export default VenusCaseStudy
