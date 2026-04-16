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

const CazadorCaseStudy = () => {


    return (
        <MainLayout transparentHeader={false} headerLightText={false}>

            <Helmet>
                <title>Cazador Dijital Dönüşüm Hikayesi | Pikselai</title>
                <meta name="description" content="Cazador'un Pikselai ile gerçekleştirdiği yapay zeka destekli dijital dönüşüm, katalog ve sosyal medya başarı hikayesi." />
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
                                Cazador'un <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00]">Dijital Dönüşüm Yolculuğu</span>
                            </h1>
                            <p className="text-[#3a5245] font-light text-lg md:text-xl leading-relaxed max-w-lg">
                                Moda dünyasının köklü markalarından Cazador, Pikselai'ın yapay zeka çözümleriyle katalog süreçlerini hızlandırdı ve dijital varlığını mükemmelleştirdi.
                            </p>
                        </motion.div>
                    </div>

                    {/* Sağ Görsel Alanı */}
                    <div className="relative h-[40vh] md:h-[50vh] lg:h-auto overflow-hidden bg-[#0b2117]">
                        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src="/assets/brands/cazador/ai_cazador.webp" alt="Cazador AI" className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
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
                                Geleneksel Yöntemlerden <br className="hidden md:block"/><span className="italic text-[#86AA00]">Dijital Hıza Geçiş</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Cazador, yıllarca Drive linkleriyle paylaşılan katalog görselleriyle mücadele etti. Her sezon yeni koleksiyonları müşterilere ulaştırmak, haftalar süren bir maratona dönüşüyordu. Paylaşılan linkler unutuluyor, kayboluyordu.</p>
                                <p><strong>Pikselai'ın Google Drive tabanlı dijital katalog altyapısı</strong> ile bu süreç köklü bir değişime uğradı. Panel derdi olmadan, mevcut Google Drive klasörlerinden beslenen sistem sayesinde, binlerce ürünü içeren profesyonel katalog <strong>rekor sürede yayına alındı</strong>.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage
                                src="/assets/brands/cazador/katalog_cazador.webp"
                                alt="Cazador Dijital Katalog Arayüzü"
                                href="https://katalog.cazador.com.tr/"
                                caption="Cazador Dijital Katalog Arayüzü"
                            />
                        </motion.div>
                    </div>

                    {/* Bölüm 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1">
                            <BlogImage
                                src="/assets/brands/cazador/ai_cazador.webp"
                                alt="Cazador AI Fotoğraf Üretimi Örnekleri"
                                href="https://www.instagram.com/cazadorglobal/"
                                caption="Cazador AI Fotoğraf Üretimi Örnekleri"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Katalog Entegreli <br className="hidden md:block"/><span className="italic text-[#86AA00]">Yapay Zeka Stüdyosu</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Pikselai ile görsel üretim süreci artık <strong>tamamen otonom ve katalogla entegre</strong>. Cazador ekibi, katalog içerisinden dilediği ürünü seçip, ister kendi belirlediği bir senaryo/arka plan ile, isterse de yapay zekanın ürünü analiz edip en uygun atmosferi kendisinin kurguladığı <strong>"Otomatik Senaryo"</strong> moduyla üretim yapabiliyor.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bölüm 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                AI Odaklı <br className="hidden md:block"/><span className="italic text-[#86AA00]">Profesyonel Sosyal Medya</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Üretilen yüksek kaliteli AI görseller, Cazador'un Instagram hesabında profesyonel bir akışa dönüştürüldü. <strong>Tüm süreç Pikselai tarafından tek elden yönetiliyor:</strong> Katalog güncelleme, AI fotoğraf üretimi, içerik planlama ve sosyal medya paylaşımları.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage
                                src="/assets/brands/cazador/instagram_cazador.webp"
                                alt="Cazador Instagram Akışı"
                                href="https://www.instagram.com/cazadorglobal/"
                                caption="@cazadorglobal Instagram Akışı"
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

export default CazadorCaseStudy
