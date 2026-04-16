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

const MinaDrinksCaseStudy = () => {


    return (
        <MainLayout transparentHeader={false} headerLightText={false}>

            <Helmet>
                <title>Mina Drinks Dijital Dönüşüm Hikayesi | Pikselai</title>
                <meta name="description" content="Mina Drinks'in Pikselai ile gerçekleştirdiği yapay zeka destekli ürün prodüksiyonu başarı hikayesi." />
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
                                Mina Drinks'in <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00]">Görsel Dönüşüm Yolculuğu</span>
                            </h1>
                            <p className="text-[#3a5245] font-light text-lg md:text-xl leading-relaxed max-w-lg">
                                İçecek sektörünün yenilikçi markası Mina Drinks, Pikselai'ın yapay zeka çözümleriyle ürün fotoğrafçılığı süreçlerini baştan yarattı.
                            </p>
                        </motion.div>
                    </div>

                    {/* Sağ Görsel Alanı */}
                    <div className="relative h-[40vh] md:h-[50vh] lg:h-auto overflow-hidden bg-[#0b2117]">
                        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src="/assets/pages/minadrinkscasestudy/_id_scenario_1_corn_field_dream_2k_202.webp" alt="Mina Drinks AI" className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
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
                                Geleneksel Stüdyo Maliyetlerinden <br className="hidden md:block"/><span className="italic text-[#86AA00]">Kurtuluş</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Mina Drinks, yüksek kaliteli içecek fotoğrafları üretmek için düzenli olarak stüdyo çekimleri gerçekleştiriyor ve bu süreç hem zaman hem de bütçe olarak markaya büyük yük getiriyordu. Farklı arka planlarda profesyonel içecek görselleri oluşturmak geleneksel yöntemlerle oldukça maliyetliydi.</p>
                                <p><strong>Pikselai'ın yapay zeka destekli ürün prodüksiyon platformu</strong> ile bu süreç köklü bir değişime uğradı. Ürün fotoğrafları saniyeler içinde doğal ortam ve yüksek kaliteyle entegre edilerek, <strong>markanın üretim maliyetleri %90'a varan oranda düşürüldü</strong>.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage
                                src="/assets/blog/id_scenario_1_end_frame_prompt_2k_20.webp"
                                alt="Mina Drinks Dijital Katalog Arayüzü"
                                href="/assets/blog/id_scenario_1_end_frame_prompt_2k_20.webp"
                                caption="İlk AI Konsept Tasarımı"
                            />
                        </motion.div>
                    </div>

                    {/* Bölüm 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1">
                            <BlogImage
                                src="/assets/pages/minadrinkscasestudy/id_scenario_3_end_frame_prompt_2k_20.webp"
                                alt="Mina Drinks AI Fotoğraf Üretimi Örnekleri"
                                href="/assets/pages/minadrinkscasestudy/id_scenario_3_end_frame_prompt_2k_20.webp"
                                caption="Esnek Görsel Çıktıları"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Sınırsız Konsept ve <br className="hidden md:block"/><span className="italic text-[#86AA00]">Arka Plan Çeşitliliği</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>İçecekleri farklı kurgusal sahnelerde göstermek hiç bu kadar kolay olmamıştı. Orijinal şişe görsellerini baz alan sistem, saniyeler içinde <strong>gerçekçi sıvı efektleri, buzlar ve canlı yaz konseptleriyle</strong> bütünleşen görseller oluşturdu. Marka bu sayede pazarlama kampanyalarına özel içerikleri anında üretme yeteneği kazandı.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bölüm 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Taze İçerik, <br className="hidden md:block"/><span className="italic text-[#86AA00]">Güçlü Marka Algısı</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Üretilen yüksek kaliteli AI görseller, reklam kampanyalarında doğrudan kullanıldı. Ürünlerin ışık, yansıma ve perspektif açısından kusursuzluğu, Mina Drinks'in yeni dijital varlığında premium bir hissiyat sağladı. Artık markanın her yeni ürünü, pazara eşzamanlı profesyonel prodüksiyon hızında sunulabiliyor.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage
                                src="/assets/pages/minadrinkscasestudy/id_scenario_creative_01_start_frame_pr__1_.webp"
                                alt="Mina Drinks Instagram Akışı"
                                href="/assets/pages/minadrinkscasestudy/id_scenario_creative_01_start_frame_pr__1_.webp"
                                caption="Yüksek Etkileşimli Görsel Kalitesi"
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

export default MinaDrinksCaseStudy
