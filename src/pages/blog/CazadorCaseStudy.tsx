import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../../layouts/MainLayout'
import { Section } from '../../components/ui/Section'
import { Button } from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
                            src="/images/katalog-cazador.webp"
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
                            src="/images/AI-cazador.webp"
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
                            src="/images/instagram-cazador.webp"
                            alt="Cazador Instagram Akışı"
                            href="https://www.instagram.com/cazadorglobal/"
                            caption="@cazadorglobal Instagram Akışı"
                        />
                    </motion.div>

                </div>
            </Section>

            {/* CTA */}
            <Section mood="accent" className="text-center py-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold font-display text-white mb-6">
                        Siz de Markanızı Dönüştürün
                    </h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Cazador gibi siz de dijital süreçlerinizi hızlandırmak ve yapay zekanın gücünden faydalanmak için bizimle iletişime geçin.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-bor-secondary hover:bg-gray-100"
                        onClick={() => navigate('/ucretler')}
                    >
                        Hemen Başlayın
                    </Button>
                </div>
            </Section>
        </MainLayout>
    )
}

export default CazadorCaseStudy
