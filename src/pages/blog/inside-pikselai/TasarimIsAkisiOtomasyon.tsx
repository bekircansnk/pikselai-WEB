import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "giris", heading: "Hızın Yeni Tanımı: Otomasyon" },
    { id: "otomasyon-nedir", heading: "1. Tasarımda Otomasyon Nedir?" },
    { id: "pikselai-surecleri", heading: "2. Pikselai'da Otomasyon Nasıl Çalışır?" },
    { id: "kalite-kontrol", heading: "3. Hız ve Kalite Dengesi" },
    { id: "verimlilik", heading: "4. Ekipler İçin Verimlilik Artışı" },
    { id: "sonuc", heading: "Sonuç: Geleceğin Üretim Standartları" },
]

export default function TasarimIsAkisiOtomasyon() {
    return (
        <BlogArticleTemplate
            title="Tasarım İş Akışında Otomasyon: Pikselai'ın İçinden Sırlar"
            metaDescription="Tasarım süreçlerini otomatize ederek nasıl 5 kat daha hızlı içerik üretiyoruz? Pikselai'ın iç iş akışlarını ve otomasyon stratejilerini keşfedin."
            category="Pikselai'ın İçinden"
            categoryId="inside-pikselai"
            readTime="9 dk"
            heroImage="/assets/pages/blog/tasarim_is_akisi_otomasyon.jpeg"
            heroImageAlt="Tasarım İş Akışında Otomasyon"
            sections={SECTIONS}
        >
            <div className="text-[22px] md:text-[26px] font-normal leading-[1.6] text-[#0b2117] mb-12 italic border-l-4 border-[#D8FF85] pl-6">
                Yaratıcılıktan ödün vermeden nasıl bu kadar hızlı olabiliyoruz? Cevap, kurduğumuz kusursuz otomasyon sistemlerinde gizli.
            </div>

            <div id="giris" className="scroll-mt-32 space-y-8">
                <p>
                    Modern dünyada markaların içerik ihtiyacı hiç olmadığı kadar fazla. Her gün binlerce görsel, onlarca video ve yüzlerce reklam varyasyonu üretilmesi gerekiyor. Geleneksel yöntemlerle bu hıza yetişmek imkansız.
                </p>
                <p>
                    Pikselai olarak biz, tasarımın tekrarlayan ve zaman alan kısımlarını otomatize ederek, yaratıcı ekibimizin asıl önemli olan "fikir" aşamasına odaklanmasını sağlıyoruz. İşte mutfağımızdan detaylar.
                </p>
            </div>

            <SectionHeading id="otomasyon-nedir">1. Tasarımda Otomasyon Nedir?</SectionHeading>
            <p>
                Tasarımda otomasyon, bir görselin farklı boyutlara uyarlanması (resizing), benzer banner setlerinin oluşturulması veya ham fotoğrafların rötüşlanması gibi süreçlerin yazılımsal ve AI destekli araçlarla yapılmasıdır.
            </p>

            <SectionHeading id="pikselai-surecleri">2. Pikselai'da Otomasyon Nasıl Çalışır?</SectionHeading>
            <p>
                Biz, markalarımız için özel "tasarım kitleri" oluşturuyoruz. AI modellerimizi markanın renkleri, fontları ve görsel diliyle eğitiyoruz. Bu sayede, yeni bir kampanya başladığında temel görsel öğeler saniyeler içinde markanın ruhuna uygun şekilde üretiliyor.
            </p>

            <SectionHeading id="kalite-kontrol">3. Hız ve Kalite Dengesi</SectionHeading>
            <p>
                Otomasyon hız getirir, ancak kalite kontrolü her zaman bir "insan" tarafından yapılmalıdır. Pikselai'da üretilen her otomatize içerik, uzman bir sanat yönetmeni (Art Director) onayından geçmeden müşteriye ulaşmaz.
            </p>

            <SectionHeading id="verimlilik">4. Ekipler İçin Verimlilik Artışı</SectionHeading>
            <p>
                Otomasyon sayesinde ekiplerimiz %60 daha verimli çalışıyor. Bu verimlilik artışı, müşterilerimize daha uygun fiyatlı ve çok daha hızlı teslimatlar olarak geri dönüyor.
            </p>

            <SectionHeading id="sonuc">Sonuç: Geleceğin Üretim Standartları</SectionHeading>
            <p>
                Tasarımda otomasyon bir tercih değil, hayatta kalma stratejisidir. Pikselai ile çalışarak, bu ileri düzey teknolojileri markanızın hizmetine sunabilirsiniz.
            </p>
        </BlogArticleTemplate>
    )
}
