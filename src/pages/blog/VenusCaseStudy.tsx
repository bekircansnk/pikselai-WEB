import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../layouts/MainLayout'
import { Section } from '../../components/ui/Section'

import { motion } from 'framer-motion'
import { ChevronRight, MessageSquare, TrendingUp } from 'lucide-react'

const BlogImage = ({ src, alt, href, caption }: { src: string, alt: string, href: string, caption: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group w-full">
        <figure className="m-0 relative w-full">
            <div className="overflow-hidden rounded-3xl border border-[#e0dcd3] shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#F4EFE6]">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
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

            {/* Hero Section */}
            <section className="bg-[#F4EFE6] border-b border-[#e0dcd3] pt-24 lg:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
                    {/* Sol İçerik Alanı */}
                    <div className="px-6 md:px-16 lg:px-24 py-20 lg:py-32 flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl mx-auto lg:mx-0 w-full mt-10 md:mt-0">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0b2117]/10 bg-[#0b2117]/5 text-[#0b2117] text-[10px] font-bold tracking-widest uppercase mb-8">
                                REFERANS PROJE
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                Venüs'ün <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00]">Model Çeşitliliği Dönüşümü</span>
                            </h1>
                            <p className="text-[#3a5245] font-light text-lg md:text-xl leading-relaxed max-w-lg">
                                Kadın giyim markası Venüs, e-ticaret sitelerindeki manken çekim süreçlerini Pikselai'ın Sanal Manken (AI Model) teknolojisiyle tamamen yeniden kurguladı.
                            </p>
                        </motion.div>
                    </div>

                    {/* Sağ Görsel Alanı */}
                    <div className="relative h-[40vh] md:h-[50vh] lg:h-auto overflow-hidden bg-[#0b2117]">
                        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src="/assets/brands/venus/mila_1_image00004_4k_16_9_01_hero_full.webp" alt="Venüs AI" className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <Section className="py-24 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    {/* Bölüm 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Model Bağımlılığından <br className="hidden md:block"/><span className="italic text-[#86AA00]">Tam Özgürlüğe</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>E-ticarette kıyafet giydirilmiş model (manken) kullanmak dönüşümleri artırırken; ajans maliyetleri, lojistik süreçleri ve model uygunluğu gibi zorluklar da yaratıyordu. Venüs markası için her yeni sezonda aynı kaliteyi tutturmak ve hedef kitleye uygun modeller bulmak maliyetli bir operasyon haline gelmişti.</p>
                                <p><strong>Pikselai Ghost Mannequin & AI Model Altyapısı</strong> sayesinde, "Hayalet Manken" (veya askıda/cansız mankende) çekilen tüm kıyafetler dakikalar içinde yüksek kaliteli, insansı görünüme sahip fotorealistik karakterlerin üzerine giydirildi.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage
                                src="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp"
                                alt="Venüs AI Manken Giyindirilmesi"
                                href="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp"
                                caption="Yapay Zeka Destekli Mid-shot (Portre) Görsel"
                            />
                        </motion.div>
                    </div>

                    {/* Bölüm 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            <BlogImage
                                src="/assets/brands/venus/ella_1_1_4k_4_5_02_story_full.webp"
                                alt="Venüs Küresel Müşteri Portföyü Modelleri"
                                href="/assets/brands/venus/ella_1_1_4k_4_5_02_story_full.webp"
                                caption="Lifestyle Katalog"
                            />
                            <BlogImage
                                src="/assets/brands/venus/mila_1_image00004_2k_4_5_03_portrait_mid__2_.webp"
                                alt="Farklı Kültürel Modellerin Portrelendirilmesi"
                                href="/assets/brands/venus/mila_1_image00004_2k_4_5_03_portrait_mid__2_.webp"
                                caption="Pazara Doğru Yüz"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Uluslararası Açılım İçin <br className="hidden md:block"/><span className="italic text-[#86AA00]">Kültürel Çeşitlilik</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Venüs'ün global pazara açılırken her hedef ülke için ayrı etnik kökene sahip modeller bulması ve çekim yapması oldukça maliyetliydi. Geliştirdiğimiz "Sanal Manken" kütüphanesi sayesinde, Ortadoğu'dan Avrupa'ya kadar her bölgeye özgü karakterler kurgulandı. Aynı ürün, saniyeler içinde farklı demografilerden modellere uygun şekilde uyarlandı.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bölüm 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                E-Ticarette Sürekli <br className="hidden md:block"/><span className="italic text-[#86AA00]">Güncel Görünüm</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Yeni bir ürün stoklara girdiğinde çekim süreci günler değil, sadece 15 dakika sürüyor. Bu da e-ticaret ekibine her sezon koleksiyonu vitrine çıkarırken <strong>%85 zaman tasarrufu</strong> ve daha hızlı satışa çıkarma olanağı sağladı. Müşteri deneyimini dönüştüren bu adım, Venüs'ün geri dönüşüm (conversion) oranlarında belirgin bir artı yarattı.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage
                                src="/assets/brands/venus/mila_1_image00004_2k_4_5_01_hero_full__2_.webp"
                                alt="Venüs E-Ticaret Sayfa Vitrini"
                                href="/assets/brands/venus/mila_1_image00004_2k_4_5_01_hero_full__2_.webp"
                                caption="Yüksek Kaliteli Stüdyo Standardı"
                            />
                        </motion.div>
                    </div>

                </div>
            </Section>

            {/* BOTTOM CTA - İletişim Vurgusu */}
            <section className="bg-[#F4EFE6] py-32 px-6 md:px-16 lg:px-24 mb-1">
                <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Soft Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caf265]/10 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#caf265]/5 blur-[80px] rounded-full"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h2 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-8 text-left">
                            Mağazanızın geleceği <br />
                            <span className="italic font-light text-[#E2FF65]">bir mesaj uzağınızda</span>
                        </h2>
                        <p className="text-[#a8b8af] mb-10 text-lg text-left">
                            Hemen bir ücretsiz danışmanlık görüşmesi planlayalım ve dijital hedeflerinizi global standartlarda gerçeğe dönüştürelim.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <button 
                                onClick={() => window.location.href = 'https://pikselai-web.vercel.app/iletisim'}
                                className="bg-[#caf265] text-[#0b2117] hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 group"
                            >
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
        </MainLayout>
    )
}

export default VenusCaseStudy
