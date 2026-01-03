import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'

/**
 * Blog Görsel Bileşeni
 * Makale içinde ekran görüntüleri için tıklanabilir görsel
 */
interface BlogImageProps {
    src: string
    alt: string
    href: string
    caption: string
}

const BlogImage = ({ src, alt, href, caption }: BlogImageProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-image-link"
        style={{
            display: 'block',
            margin: '2rem 0',
            textDecoration: 'none'
        }}
    >
        <figure style={{ margin: 0 }}>
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all var(--transition-normal)'
                }}
                loading="lazy"
            />
            <figcaption style={{
                textAlign: 'center',
                marginTop: '0.75rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem'
            }}>
                {caption} <span style={{ opacity: 0.7 }}>→ Tıklayın</span>
            </figcaption>
        </figure>
    </a>
)

/**
 * CazadorCaseStudy - Cazador Başarı Hikayesi Vaka Analizi Sayfası
 * 360 derece hizmet verdiğimiz Cazador markasının dijital dönüşüm hikayesi
 */
const CazadorCaseStudy = () => {
    return (
        <>
            {/* SEO Meta Etiketleri */}
            <Helmet>
                <title>Cazador Başarı Hikayesi: Yapay Zeka ile Dijital Dönüşüm | Pikselai</title>
                <meta
                    name="description"
                    content="Cazador'un dijital katalog, AI fotoğraf çekimi ve sosyal medya yönetim süreçlerini Pikselai ile nasıl yapay zeka destekli ve profesyonel bir yapıya kavuşturduğunun hikayesi."
                />
                <link rel="canonical" href="https://pikselai.com/blog/referanslar" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-glow-1" aria-hidden="true" />
                <div className="hero-glow-2" aria-hidden="true" />

                <Breadcrumbs />

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="hero-badge-dot" aria-hidden="true" />
                        Referansımız
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        <span className="gradient-text">Cazador'un</span> Dijital Dönüşüm Yolculuğu: Hız, Kalite ve Yapay Zeka
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Moda dünyasının köklü markalarından Cazador'un, Pikselai'ın yapay zeka çözümleriyle tanışarak
                        katalog süreçlerini nasıl hızlandırdığını ve dijital varlığını nasıl mükemmelleştirdiğini inceleyin.
                    </motion.p>
                </motion.div>
            </section>

            {/* Makale İçeriği */}
            <article className="blog-article">
                <div className="blog-container">

                    {/* BÖLÜM 1: Hızlı Katalog Çözümü */}
                    <motion.section
                        className="blog-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="blog-heading">
                            <span className="gradient-text">Geleneksel Yöntemlerden</span> Dijital Hıza Geçiş
                        </h2>

                        <p className="blog-paragraph">
                            Cazador, yıllarca Drive linkleriyle paylaşılan katalog görselleriyle mücadele etti.
                            Her sezon yeni koleksiyonları müşterilere ulaştırmak, haftalar süren bir maratona dönüşüyordu.
                            Paylaşılan linkler unutuluyor, kayboluyordu. Bayiler ve satış ekipleri, güncel ürün bilgilerine ulaşmakta zorlanıyordu.
                        </p>

                        <p className="blog-paragraph">
                            <strong>Pikselai'ın Google Drive tabanlı dijital katalog altyapısı</strong> ile bu süreç köklü bir
                            değişime uğradı. Panel derdi olmadan, mevcut Google Drive klasörlerinden beslenen sistem sayesinde,
                            binlerce ürünü içeren profesyonel katalog <strong>rekor sürede yayına alındı</strong>.
                        </p>

                        <p className="blog-paragraph">
                            Artık Cazador ekibi, yeni ürün eklemek için sadece Google Drive'a fotoğraf yüklüyor.
                            Geri kalanını sistem otomatik olarak halledip, anlık olarak kataloğa yansıtıyor.
                            <strong>Hızlı arama özelliği</strong> sayesinde bayiler, binlerce ürün arasından
                            istediklerini dakikalar içinde buluyor.
                        </p>

                        <BlogImage
                            src="/katalog-cazador.webp"
                            alt="Cazador Dijital Katalog Arayüzü"
                            href="https://katalog.cazador.com.tr/"
                            caption="Cazador Dijital Katalog Arayüzü"
                        />
                    </motion.section>

                    {/* BÖLÜM 2: Katalog Entegreli AI Stüdyo */}
                    <motion.section
                        className="blog-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="blog-heading">
                            <span className="gradient-text">Katalog Entegreli</span> Yapay Zeka Stüdyosu
                        </h2>

                        <p className="blog-paragraph">
                            Pikselai ile görsel üretim süreci artık <strong>tamamen otonom ve katalogla entegre</strong>.
                            Cazador ekibi, katalog içerisinden dilediği ürünü seçip, ister kendi belirlediği bir
                            senaryo/arka plan ile, isterse de yapay zekanın ürünü analiz edip en uygun atmosferi
                            kendisinin kurguladığı <strong>"Otomatik Senaryo"</strong> moduyla üretim yapabiliyor.
                        </p>

                        <p className="blog-paragraph">
                            Oluşturulan <strong>yüksek çözünürlüklü görseller, saniyeler içinde direkt olarak
                                katalog uygulamasındaki ilgili albüme otomatik olarak düşüyor</strong>. Ekipler bu
                            görselleri anlık olarak panelden inceleyip eleyebiliyor.
                        </p>

                        <p className="blog-paragraph">
                            Sosyal medya paylaşımı için hazır kalitede çıkan bu görseller, arzu edilirse ışık ve
                            teknik detayların son rötüşleri için Photoshop sürecinden geçirilerek
                            <strong>"yayına mükemmel"</strong> hale getiriliyor ve son nokta konuluyor.
                        </p>

                        <BlogImage
                            src="/AI-cazador.webp"
                            alt="Cazador AI Fotoğraf Üretimi Örnekleri"
                            href="https://www.instagram.com/cazadorglobal/"
                            caption="Cazador AI Fotoğraf Üretimi Örnekleri"
                        />
                    </motion.section>

                    {/* BÖLÜM 3: Sosyal Medya Yönetimi */}
                    <motion.section
                        className="blog-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="blog-heading">
                            <span className="gradient-text">AI Odaklı</span> Profesyonel Sosyal Medya Vitrini
                        </h2>

                        <p className="blog-paragraph">
                            Üretilen yüksek kaliteli AI görseller, Cazador'un <strong>Instagram hesabında profesyonel
                                bir akışa</strong> dönüştürüldü. Feed bütünlüğü sağlandı, estetik planlama yapıldı ve marka
                            kimliğine uygun bir görsel dil oluşturuldu.
                        </p>

                        <p className="blog-paragraph">
                            <strong>Tüm süreç Pikselai tarafından tek elden yönetiliyor:</strong> Katalog güncelleme,
                            AI fotoğraf üretimi, içerik planlama ve sosyal medya paylaşımları. Cazador'un dijital
                            varlığı artık tutarlı, profesyonel ve etkileyici.
                        </p>

                        <p className="blog-paragraph">
                            Düzenli paylaşım takvimleri, stratejik içerik planlaması ve performans raporları ile
                            Cazador'un sosyal medya hesapları sürekli büyüyor. Marka bilinirliği ve müşteri etkileşimi
                            her geçen gün artıyor.
                        </p>

                        <BlogImage
                            src="/instagram-cazador.webp"
                            alt="Cazador Instagram Akışı"
                            href="https://www.instagram.com/cazadorglobal/"
                            caption="@cazadorglobal Instagram Akışı"
                        />
                    </motion.section>

                    {/* SONUÇ VE CTA */}
                    <motion.section
                        className="blog-section blog-cta-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                            <h2 className="blog-heading" style={{ marginBottom: '1.5rem' }}>
                                <span className="gradient-text">360°</span> Çözüm Ortaklığı
                            </h2>

                            <p className="blog-paragraph" style={{ marginBottom: '2rem' }}>
                                Pikselai olarak, Cazador'un <strong>360 derece dijital çözüm ortağı</strong> olmaktan
                                gurur duyuyoruz. Katalog altyapısından AI fotoğraf üretimine, sosyal medya yönetiminden
                                içerik stratejisine kadar tüm süreçleri profesyonelce yönetiyoruz.
                            </p>

                            <p className="blog-paragraph" style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                                Siz de markanızı dijital çağa taşımak, süreçlerinizi hızlandırmak ve
                                profesyonel bir dijital varlık oluşturmak ister misiniz?
                            </p>

                            <Link to="/ucretler" className="glass-button glow">
                                <span aria-hidden="true">🚀</span>
                                Siz de Markanızı Dönüştürün
                            </Link>
                        </div>
                    </motion.section>

                </div>
            </article>
        </>
    )
}

export default CazadorCaseStudy
