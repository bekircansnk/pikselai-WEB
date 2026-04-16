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

const CazadorCaseStudy = () => {
    const navigate = useNavigate()

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            <Helmet>
                <title>Cazador Dijital Dönüşüm Hikayesi | Pikselai</title>
                <meta name="description" content="Cazador'un Pikselai ile gerçekleştirdiği yapay zeka destekli dijital dönüşüm, katalog ve sosyal medya başarı hikayesi." />
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24" mood="dark">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-bor-secondary mb-6">
                        Referans Proje
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bor-secondary to-bor-accent">Cazador'un</span> Dijital Dönüşüm Yolculuğu
                    </h1>
                    <p className="text-xl text-bor-primary-200 leading-relaxed max-w-3xl mx-auto">
                        Moda dünyasının köklü markalarından Cazador, Pikselai'ın yapay zeka çözümleriyle katalog süreçlerini hızlandırdı ve dijital varlığını mükemmelleştirdi.
                    </p>
                </div>
            </Section>

            {/* Article Content */}
            <Section mood="light">
                <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-bor-primary-600 dark:prose-p:text-bor-primary-300 dark:prose-headings:text-white">

                    {/* Bölüm 1 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2>Geleneksel Yöntemlerden Dijital Hıza Geçiş</h2>
                        <p>
                            Cazador, yıllarca Drive linkleriyle paylaşılan katalog görselleriyle mücadele etti.
                            Her sezon yeni koleksiyonları müşterilere ulaştırmak, haftalar süren bir maratona dönüşüyordu.
                            Paylaşılan linkler unutuluyor, kayboluyordu.
                        </p>
                        <p>
                            <strong>Pikselai'ın Google Drive tabanlı dijital katalog altyapısı</strong> ile bu süreç köklü bir
                            değişime uğradı. Panel derdi olmadan, mevcut Google Drive klasörlerinden beslenen sistem sayesinde,
                            binlerce ürünü içeren profesyonel katalog <strong>rekor sürede yayına alındı</strong>.
                        </p>
                        <BlogImage
                            src="/assets/brands/cazador/katalog_cazador.webp"
                            alt="Cazador Dijital Katalog Arayüzü"
                            href="https://katalog.cazador.com.tr/"
                            caption="Cazador Dijital Katalog Arayüzü"
                        />
                    </motion.div>

                    {/* Bölüm 2 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                        <h2>Katalog Entegreli Yapay Zeka Stüdyosu</h2>
                        <p>
                            Pikselai ile görsel üretim süreci artık <strong>tamamen otonom ve katalogla entegre</strong>.
                            Cazador ekibi, katalog içerisinden dilediği ürünü seçip, ister kendi belirlediği bir
                            senaryo/arka plan ile, isterse de yapay zekanın ürünü analiz edip en uygun atmosferi
                            kendisinin kurguladığı <strong>"Otomatik Senaryo"</strong> moduyla üretim yapabiliyor.
                        </p>
                        <BlogImage
                            src="/assets/brands/cazador/ai_cazador.webp"
                            alt="Cazador AI Fotoğraf Üretimi Örnekleri"
                            href="https://www.instagram.com/cazadorglobal/"
                            caption="Cazador AI Fotoğraf Üretimi Örnekleri"
                        />
                    </motion.div>

                    {/* Bölüm 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                        <h2>AI Odaklı Profesyonel Sosyal Medya Vitrini</h2>
                        <p>
                            Üretilen yüksek kaliteli AI görseller, Cazador'un Instagram hesabında profesyonel bir akışa dönüştürüldü.
                            <strong> Tüm süreç Pikselai tarafından tek elden yönetiliyor:</strong> Katalog güncelleme,
                            AI fotoğraf üretimi, içerik planlama ve sosyal medya paylaşımları.
                        </p>
                        <BlogImage
                            src="/assets/brands/cazador/instagram_cazador.webp"
                            alt="Cazador Instagram Akışı"
                            href="https://www.instagram.com/cazadorglobal/"
                            caption="@cazadorglobal Instagram Akışı"
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
                                onClick={() => navigate('/iletisim')}
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

export default CazadorCaseStudy
