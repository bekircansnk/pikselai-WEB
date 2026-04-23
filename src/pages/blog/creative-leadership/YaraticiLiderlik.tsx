import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "giris", heading: "Zanaattan Liderliğe Geçiş" },
    { id: "asama-1", heading: "Birinci Aşama: Usta Uygulayıcı" },
    { id: "asama-2", heading: "İkinci Aşama: Vizyoner Lider" },
    { id: "asama-3", heading: "Üçüncü Aşama: Stratejik Ortak" },
    { id: "sonuc", heading: "Liderlik Okumakla Başlar" }
]

export default function YaraticiLiderlik() {
    return (
        <BlogArticleTemplate
            title="Yaratıcı Liderlik: Tasarım Ekiplerini Yönetme Sanatı"
            metaDescription="İyi bir tasarımcıdan iyi bir lidere nasıl dönüşülür? Yaratıcı liderlik basamaklarını ve ekip yönetiminin püf noktalarını keşfedin."
            category="Yaratıcı Liderlik"
            categoryId="creative-leadership"
            readTime="10 dk"
            heroImage="/assets/pages/blog/yaratici_liderlik.webp"
            heroImageAlt="Yaratıcı Liderlik"
            sections={SECTIONS}
        >
            <div id="giris" className="scroll-mt-32 space-y-8">
                <p>
                    Birçok tasarımcı için kariyer yolu, pikselleri mükemmelleştirmekle başlar. Ancak bir noktada, sadece "işi yapmak" yetmez; "işi yapanları yönetmek" ve "yaratıcı vizyonu şekillendirmek" gerekir. Bu, zanaattan liderliğe geçiş sürecidir ve her adımda farklı yetenekler gerektirir.
                </p>
                <p>
                    Yaratıcı liderlik, sadece sanatsal bir yetenek değil, aynı zamanda stratejik bir zeka ve insan yönetimi ustalığıdır. İşte bu yolculuğun temel aşamaları:
                </p>
            </div>

            <SectionHeading id="asama-1">Birinci Aşama: Usta Uygulayıcı</SectionHeading>
            <div className="space-y-8">
                <p>
                    Bu aşamada odağınız "zanaat" üzerinedir. En iyi pikselleri siz yerleştirir, en etkileyici tasarımları siz yaparsınız. Ancak liderliğe giden yol, bu yeteneği başkalarına aktarabilmekten geçer. Ekibinizdeki diğer tasarımcıların da aynı kaliteyi yakalamasını sağlamak, ilk büyük sınavınızdır.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-light">
                    <li>Teknik mükemmeliyet.</li>
                    <li>Süreç yönetimi ve disiplin.</li>
                    <li>Yapıcı geri bildirim verme yeteneği.</li>
                </ul>
            </div>

            <SectionHeading id="asama-2">İkinci Aşama: Vizyoner Lider</SectionHeading>
            <div className="space-y-8">
                <p>
                    Artık sadece projeleri değil, insanların duygularını ve motivasyonlarını da yönetiyorsunuz. Ekibiniz için güvenli bir yaratıcı liman oluşturmak, risk almalarını teşvik etmek ve başarısızlıkları birer öğrenme fırsatına dönüştürmek bu aşamanın kalbidir.
                </p>
                <p>
                    Vizyoner bir lider, "ne yapılacağını" değil, "neden yapılacağını" anlatır. Ekibine bir rota çizer ve onların bu rotada parlaması için önlerindeki engelleri kaldırır.
                </p>
            </div>

            <SectionHeading id="asama-3">Üçüncü Aşama: Stratejik Ortak</SectionHeading>
            <div className="space-y-8">
                <p>
                    En üst seviyede yaratıcı liderlik, tasarımı bir "hizmet" olmaktan çıkarıp bir "iş stratejisi" haline getirmektir. Şirketin diğer departmanlarıyla (pazarlama, satış, finans) aynı dili konuşabilmek ve yaratıcılığın iş sonuçlarına (ROI) nasıl etki ettiğini kanıtlamak bu aşamada kritik önem kazanır.
                </p>
                <p>
                    Burada artık bir "tasarımcı" değil, şirketin geleceğini şekillendiren bir "iş ortağı"sınızdır.
                </p>
            </div>

            <SectionHeading id="sonuc">Liderlik Okumakla Başlar</SectionHeading>
            <div className="space-y-8">
                <p>
                    Yaratıcı liderlik yolculuğunda başarılı olanların ortak noktası, öğrenmeyi hiç bırakmamalarıdır. Sadece tasarım dergilerini değil; liderlik, psikoloji ve strateji üzerine kitaplar okumak, ufkunuzu genişletecek en büyük yatırımdır.
                </p>
                <p>
                    Pikselai olarak biz, yaratıcı liderliğin gücüne inanıyoruz. Ekiplerinizi sadece yönetmek değil, onları birer yaratıcı güce dönüştürmek için ihtiyacınız olan vizyonu ve desteği sunuyoruz. Tasarımın gücünü iş stratejinizin merkezine taşıyın.
                </p>
            </div>
        </BlogArticleTemplate>
    )
}
