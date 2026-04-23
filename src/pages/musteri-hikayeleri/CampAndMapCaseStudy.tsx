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



const CampAndMapCaseStudy = () => {
    return (
        <MainLayout transparentHeader={false} headerLightText={false}>
            <Helmet>
                <title>Campandmap Dijital Ürün Prodüksiyonu | Pikselai</title>
                <meta name="description" content="Campandmap'in Pikselai ile gerçekleştirdiği yapay zeka destekli outdoor ürün fotoğrafçılığı başarı hikayesi." />
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
                                Campandmap'in <br className="hidden lg:block" />
                                <span className="italic font-light text-[#86AA00]">Outdoor Vitrini</span>
                            </h1>
                            <p className="text-[#3a5245] font-light text-lg md:text-xl leading-relaxed max-w-lg">
                                Doğa ve kamp kültürünü destekleyen Campandmap ekibi, ağır kamp ekipmanlarını stüdyoya taşımak yerine Pikselai'ın yapay zeka destekli arka plan üretimi ile doğanın ruhunu kataloglarına taşıdı.
                            </p>
                        </motion.div>
                    </div>
                    <div className="relative h-[45vh] md:h-[55vh] lg:h-auto overflow-hidden bg-[#0b2117]">
                        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src="/assets/brands/camp_and_map/1_2k_auto_undefined.webp" alt="Campandmap AI" className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Devasa Ekipmanlar, <br className="hidden md:block" /><span className="italic text-[#86AA00]">Akıllı Üretim</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Çadır, uyku tulumu, dış mekan masa ve sandalyeleri... Campandmap, e-ticaret siteleri için bu büyük hacimli ürünlerin prodüksiyonunda büyük maliyetler harcıyordu.</p>
                                <p><strong>Pikselai Background AI Studio</strong> konsepti ile ürünler basit bir stüdyoda çekildi. Geri kalanı tamamıyla yapay zeka tarafından kusursuz şekilde inşa edildi ve ürün doğa içerisine yerleştirildi.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage src="/assets/brands/camp_and_map/1_2k_4_5_undefined__1_.webp" alt="Karlı Dağ Konsepti" href="/assets/brands/camp_and_map/1_2k_4_5_undefined__1_.webp" caption="Karlı Dağ Konsepti" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1">
                            <BlogImage src="/assets/brands/camp_and_map/1_2k_4_5_undefined.webp" alt="Atmosferik Dönüşüm" href="/assets/brands/camp_and_map/1_2k_4_5_undefined.webp" caption="İklim ve Aydınlatma Atmosferi" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                Sınırları Kaldıran <br className="hidden md:block" /><span className="italic text-[#86AA00]">Doğa Olayları</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Yapay zeka sistemi sayesinde; aynı kamp ekipmanını saniyeler içinde sisli bir dağ yamacında, yağmurlu bir orman kampında ya da güneşli bir göl kenarında konumlandırmak mümkün hale geldi.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0b2117] mb-6">
                                E-ticarette <br className="hidden md:block" /><span className="italic text-[#86AA00]">Lojistik Tasarrufu</span>
                            </h2>
                            <div className="text-[#3a5245] text-lg space-y-5 font-light leading-relaxed">
                                <p>Marka yüzbinlerce liralık lojistik ve saha kiralama maliyetinden <strong>%100 tasarruf</strong> sağlarken, marka algısına son derece yüksek bir premium etki kattı. Pazarlama performansında artan etkileşim, ziyaretçilerin sitede daha uzun süre kalmasını sağladı.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            <BlogImage src="/assets/brands/camp_and_map/1_2k_auto_undefined.webp" alt="Final Kampanya Çıktıları" href="/assets/brands/camp_and_map/1_2k_auto_undefined.webp" caption="Final Kampanya Çıktıları" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <BottomCTA />
        </MainLayout>
    )
}

export default CampAndMapCaseStudy
