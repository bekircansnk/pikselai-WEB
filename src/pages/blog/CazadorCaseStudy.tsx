import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../layouts/MainLayout'
import { motion } from 'framer-motion'
import { ChevronRight, MessageSquare, TrendingUp, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BottomCTA } from '../../components/sections/BottomCTA'

// Tekrar kullanılabilir görsel bileşeni
const BlogImage = ({ src, alt, href, caption }: { src: string; alt: string; href: string; caption: string }) => (
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

// Bölüm başlığı yapısı
const SectionTitle = ({ line1, line2 }: { line1: string; line2: string }) => (
    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
        {line1} <br className="hidden md:block" />
        <span className="italic text-[#86AA00]">{line2}</span>
    </h2>
)

const CazadorCaseStudy = () => {
    return (
        <MainLayout transparentHeader={false} headerLightText={false}>
            <Helmet>
                <title>Cazador Dijital Dönüşüm Hikayesi | Pikselai</title>
                <meta name="description" content="Cazador'un Pikselai ile gerçekleştirdiği yapay zeka destekli dijital dönüşüm, katalog ve sosyal medya başarı hikayesi." />
            </Helmet>

            {/* Hero */}
            <section className="bg-[#F4EFE6] border-b border-[#e0dcd3]">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                    <div className="px-6 md:px-16 lg:px-24 pt-28 pb-20 lg:py-32 flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl mx-auto lg:mx-0 w-full">
                            {/* Geri bağlantı */}
                            <Link to="/musteri-hikayeleri" className="inline-flex items-center gap-1.5 text-[#0b2117]/50 hover:text-[#86AA00] text-sm mb-8 transition-colors">
                                <ArrowLeft size={14} /> Müşteri Hikayeleri
                            </Link>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0b2117]/10 bg-[#0b2117]/5 text-[#0b2117] text-[10px] font-bold tracking-widest uppercase mb-6">
                                REFERANS PROJE
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                Cazador'un <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00]">Dijital Dönüşüm Yolculuğu</span>
                            </h1>
                            <p className="text-[#3a5245] font-light text-lg md:text-xl leading-relaxed max-w-lg">
                                Moda dünyasının köklü markalarından Cazador, Pikselai'ın yapay zeka çözümleriyle katalog süreçlerini hızlandırdı ve dijital varlığını mükemmelleştirdi.
                            </p>
                        </motion.div>
                    </div>
                    <div className="relative h-[45vh] md:h-[55vh] lg:h-auto overflow-hidden bg-[#0b2117]">
                        <motion.img
                            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
                            src="/assets/brands/cazador/ai_cazador.webp"
                            alt="Cazador AI"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
                        />
                    </div>
                </div>
            </section>

            {/* İçerik */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    {/* Bölüm 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <SectionTitle line1="Geleneksel Yöntemlerden" line2="Dijital Hıza Geçiş" />
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Cazador, yıllarca Drive linkleriyle paylaşılan katalog görselleriyle mücadele etti. Her sezon yeni koleksiyonları müşterilere ulaştırmak, haftalar süren bir maratona dönüşüyordu.</p>
                                <p><strong>Pikselai'ın Google Drive tabanlı dijital katalog altyapısı</strong> ile bu süreç köklü bir değişime uğradı. Binlerce ürünü içeren profesyonel katalog <strong>rekor sürede yayına alındı</strong>.</p>
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
                            <SectionTitle line1="Katalog Entegreli" line2="Yapay Zeka Stüdyosu" />
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Cazador ekibi, katalog içerisinden dilediği ürünü seçip, ister kendi belirlediği senaryo/arka plan ile, isterse yapay zekanın <strong>"Otomatik Senaryo"</strong> moduyla üretim yapabiliyor.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bölüm 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <SectionTitle line1="AI Odaklı" line2="Profesyonel Sosyal Medya" />
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
            </section>

            <BottomCTA />
        </MainLayout>
    )
}

export default CazadorCaseStudy
