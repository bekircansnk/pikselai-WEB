import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../layouts/MainLayout'
import { Section } from '../../components/ui/Section'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, MessageSquare, TrendingUp } from 'lucide-react'

const BlogImage = ({ src, alt, href, caption }: { src: string, alt: string, href: string, caption: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block my-8 group">
        <figure className="m-0">
            <div className="overflow-hidden rounded-2xl border border-bor-primary-200 dark:border-bor-primary-700 shadow-lg">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <figcaption className="text-center mt-3 text-sm text-bor-primary-500">
                {caption} <span className="opacity-70 group-hover:opacity-100 transition-opacity">→ Tıklayın</span>
            </figcaption>
        </figure>
    </a>
)

const VenusCaseStudy = () => {
    const navigate = useNavigate()

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            <Helmet>
                <title>Venüs Giyim Sanal Manken Hikayesi | Pikselai</title>
                <meta name="description" content="Venüs Giyim'in Pikselai ile gerçekleştirdiği yapay zeka manken devrimi ve katalog başarı hikayesi." />
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24 relative overflow-hidden" mood="dark">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <img 
                        src="/assets/brands/venus/mila_1_image00004_4k_16_9_01_hero_full.webp" 
                        alt="Venüs Hero Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950/90"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-bor-secondary mb-6 backdrop-blur-md">
                        Referans Proje
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 drop-shadow-lg">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bor-secondary to-bor-accent">Venüs'ün</span> Model Çeşitliliği Dönüşümü
                    </h1>
                    <p className="text-xl text-bor-primary-200 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                        Kadın giyim markası Venüs, e-ticaret sitelerindeki manken çekim süreçlerini Pikselai'ın Sanal Manken (AI Model) teknolojisiyle tamamen yeniden kurguladı.
                    </p>
                </div>
            </Section>

            {/* Article Content */}
            <Section mood="light">
                <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-bor-primary-600 dark:prose-p:text-bor-primary-300 dark:prose-headings:text-white">

                    {/* Bölüm 1 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2>Model Bağımlılığından Tam Özgürlüğe</h2>
                        <p>
                            E-ticarette kıyafet giydirilmiş model (manken) kullanmak dönüşümleri artırırken; ajans maliyetleri, lojistik süreçleri ve model uygunluğu gibi zorluklar da yaratıyordu. Venüs markası için her yeni sezonda aynı kaliteyi tutturmak ve hedef kitleye uygun modeller bulmak maliyetli bir operasyon haline gelmişti.
                        </p>
                        <p>
                            <strong>Pikselai Ghost Mannequin & AI Model Altyapısı</strong> sayesinde, "Hayalet Manken" (veya askıda/cansız mankende) çekilen tüm kıyafetler dakikalar içinde yüksek kaliteli, insansı görünüme sahip fotorealistik karakterlerin üzerine giydirildi.
                        </p>
                        <BlogImage
                            src="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp"
                            alt="Venüs AI Manken Giyindirilmesi"
                            href="/assets/brands/venus/ella_1_1_2k_4_5_03_portrait_mid.webp"
                            caption="Yapay Zeka Destekli Mid-shot (Portre) Görsel"
                        />
                    </motion.div>

                    {/* Bölüm 2 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                        <h2>Uluslararası Açılım İçin Kültürel Çeşitlilik</h2>
                        <p>
                            Venüs'ün global pazara açılırken her hedef ülke için ayrı etnik kökene sahip modeller bulması ve çekim yapması oldukça maliyetliydi. Geliştirdiğimiz "Sanal Manken" kütüphanesi sayesinde, Ortadoğu'dan Avrupa'ya kadar her bölgeye özgü karakterler kurgulandı. Aynı ürün, saniyeler içinde farklı demografilerden modellere uygun şekilde uyarlandı.
                        </p>
                        <BlogImage
                            src="/assets/brands/venus/ella_1_1_4k_4_5_02_story_full.webp"
                            alt="Venüs Küresel Müşteri Portföyü Modelleri"
                            href="/assets/brands/venus/ella_1_1_4k_4_5_02_story_full.webp"
                            caption="Full-body E-Ticaret ve Lifestyle Katalog Çalışması"
                        />
                        <BlogImage
                            src="/assets/brands/venus/mila_1_image00004_2k_4_5_03_portrait_mid__2_.webp"
                            alt="Farklı Kültürel Modellerin Portrelendirilmesi"
                            href="/assets/brands/venus/mila_1_image00004_2k_4_5_03_portrait_mid__2_.webp"
                            caption="Her pazar için doğru yüz ve etnik köken modeli"
                        />
                    </motion.div>

                    {/* Bölüm 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                        <h2>E-Ticarette Sürekli Güncel Görünüm</h2>
                        <p>
                            Yeni bir ürün stoklara girdiğinde çekim süreci günler değil, sadece 15 dakika sürüyor. Bu da e-ticaret ekibine her sezon koleksiyonu vitrine çıkarırken <strong>%85 zaman tasarrufu</strong> ve daha hızlı satışa çıkarma olanağı sağladı. Müşteri deneyimini dönüştüren bu adım, Venüs'ün geri dönüşüm (conversion) oranlarında belirgin bir artı yarattı.
                        </p>
                        <BlogImage
                            src="/assets/brands/venus/mila_1_image00004_2k_4_5_01_hero_full__2_.webp"
                            alt="Venüs E-Ticaret Sayfa Vitrini"
                            href="/assets/brands/venus/mila_1_image00004_2k_4_5_01_hero_full__2_.webp"
                            caption="Dönüşümü Arttıran Yüksek Kaliteli Stüdyo Standardı"
                        />
                    </motion.div>

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
