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

const CampAndMapCaseStudy = () => {
    const navigate = useNavigate()

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            <Helmet>
                <title>Campandmap Dijital Ürün Prodüksiyonu | Pikselai</title>
                <meta name="description" content="Campandmap'in Pikselai ile gerçekleştirdiği yapay zeka destekli outdoor ürün fotoğrafçılığı başarı hikayesi." />
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24 relative overflow-hidden" mood="dark">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <img 
                        src="/BLOG/campandmap/1_2k_auto_undefined.webp" 
                        alt="Camp and Map Hero Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950/90"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-bor-secondary mb-6 backdrop-blur-md">
                        Referans Proje
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 drop-shadow-lg">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bor-secondary to-bor-accent">Campandmap'in</span> Outdoor Vitrini
                    </h1>
                    <p className="text-xl text-bor-primary-200 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                        Doğa ve kamp kültürünü destekleyen Campandmap ekibi, ağır kamp ekipmanlarını stüdyoya taşımak yerine Pikselai'ın yapay zeka destekli arka plan üretimi ile doğanın ruhunu kataloglarına taşıdı.
                    </p>
                </div>
            </Section>

            {/* Article Content */}
            <Section mood="light">
                <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-bor-primary-600 dark:prose-p:text-bor-primary-300 dark:prose-headings:text-white">

                    {/* Bölüm 1 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2>Devasa Ekipmanlar, Akıllı Üretim</h2>
                        <p>
                            Çadır, uyku tulumu, dış mekan masa ve sandalyeleri... Campandmap, e-ticaret siteleri için bu büyük hacimli ve doğayla iç içe çekilmesi gereken ürünlerin prodüksiyonunda büyük maliyetler harcıyordu. Taşıma, hava şartları, uzak lokasyonlar fotoğrafçılık süreçlerini aksatan risklerdi.
                        </p>
                        <p>
                            <strong>Pikselai Ekipman Geliştirme AI Ajansı</strong> (Background AI Studio) konsepti ile ürünler sadece basit bir stüdyoda temiz nền veya izole olarak çekildi. Geri kalanı tamamıyla yapay zeka tarafından kusursuz şekilde inşa edildi ve ürün doğa içerisine yerleştirildi.
                        </p>
                        <BlogImage
                            src="/BLOG/campandmap/1_2k_4_5_undefined__1_.webp"
                            alt="Campandmap AI Ürün Katalog Çalışması"
                            href="/BLOG/campandmap/1_2k_4_5_undefined__1_.webp"
                            caption="Yapay Zeka Destekli Karlı / Dağ Konsepti Üretimi"
                        />
                    </motion.div>

                    {/* Bölüm 2 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                        <h2>Sınırları Kaldıran Doğa Olayları</h2>
                        <p>
                            Yapay zeka sistemi sayesinde; aynı kamp ekipmanını saniyeler içinde sisli bir dağ yamacında, yağmurlu bir orman kampında ya da güneşli bir göl kenarında konumlandırmak mümkün hale geldi. Bu esneklik, marka kreatif süreçlerine <strong>inanılmaz bir özgürlük</strong> kattı.
                        </p>
                        <BlogImage
                            src="/BLOG/campandmap/1_2k_4_5_undefined.webp"
                            alt="Campandmap Atmosferik Dönüşüm"
                            href="/BLOG/campandmap/1_2k_4_5_undefined.webp"
                            caption="Farklı İklim ve Aydınlatma Olgusu ile Geliştirilmiş Background"
                        />
                    </motion.div>

                    {/* Bölüm 3 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                        <h2>E-ticarette Lojistik Tasarrufu</h2>
                        <p>
                            Marka yüzbinlerce liralık lojistik ve saha kiralama (çekim alanı) maliyetinden %100 tasarruf sağlarken, marka algısına son derece yüksek bir premium etki kattı. Pazarlama performansında artan etkileşim, Campandmap'in e-ticaret vitrininde ziyaretçi sitelerinde daha uzun süre kalmasını sağladı.
                        </p>
                        <BlogImage
                            src="/BLOG/campandmap/1_2k_auto_undefined.webp"
                            alt="Campandmap Kusursuz E-Ticaret"
                            href="/BLOG/campandmap/1_2k_auto_undefined.webp"
                            caption="Marka Kampanyalarına Yönelik Final Çıktılar"
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
                        Campandmap gibi masraflı çekim süreçlerinden kurtulun ve AI stüdyo entegrasyonuyla tanışın! Yapay zekanın gücünden faydalanmak için bizimle iletişime geçin.
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

export default CampAndMapCaseStudy
