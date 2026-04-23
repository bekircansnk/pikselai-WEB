import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "giris", heading: "Tasarımda Kaosu Durdurun" },
    { id: "nedir", heading: "Tasarım Sistemi Nedir?" },
    { id: "vimeo", heading: "Başarı Hikayesi: Vimeo'nun Dinamik Sistemi" },
    { id: "faydalar", heading: "Neden Bir Tasarım Sistemine İhtiyacınız Var?" },
    { id: "sonuc", heading: "Ölçeklenebilir Tasarımlar İnşa Edin" }
]

export default function TasarimSistemleri() {
    return (
        <BlogArticleTemplate
            title="Tasarım Sistemleri: Nedir ve Neden Önemli?"
            metaDescription="Tasarım sistemleri ile marka tutarlılığını nasıl sağlarsınız? Vimeo örneği ve tasarım sistemlerinin iş akışına faydaları üzerine bir rehber."
            category="Markaya Dair Her Şey"
            categoryId="all-things-brand"
            readTime="10 dk"
            heroImage="/assets/pages/blog/tasarim_sistemleri.webp"
            heroImageAlt="Tasarım Sistemleri"
            sections={SECTIONS}
        >
            <div id="giris" className="scroll-mt-32 space-y-8">
                <p>
                    Bir marka büyüdükçe, tasarım ihtiyaçları da aynı hızla karmaşıklaşır. Farklı departmanların, farklı kanallar için ürettiği binlerce görsel arasında tutarlılığı korumak imkansız hale gelebilir. İşte bu noktada tasarım sistemleri, bir markanın "görsel anayasası" olarak devreye girer.
                </p>
                <p>
                    Tasarım sistemi sadece bir stil rehberi değildir; yaşayan, gelişen ve tüm ekiplerin aynı dili konuşmasını sağlayan modüler bir kütüphanedir.
                </p>
            </div>

            <SectionHeading id="nedir">Tasarım Sistemi Nedir?</SectionHeading>
            <div className="space-y-8">
                <p>
                    Tasarım sistemi; bir şirketin dijital ürünlerini tasarlamak ve geliştirmek için kullandığı standartlar, bileşenler ve kurallar bütünüdür. Renk paletlerinden butonlara, tipografiden karmaşık UI bileşenlerine kadar her şey bu sistemin bir parçasıdır.
                </p>
                <p>
                    <strong>Atomik Tasarım (Atomic Design)</strong> metodolojisiyle inşa edilen bu sistemler, en küçük parçadan (atom) başlayarak karmaşık sayfalara (organizmalar) kadar her şeyin birbiriyle uyumlu olmasını sağlar.
                </p>
            </div>

            <SectionHeading id="vimeo">Başarı Hikayesi: Vimeo'nun Dinamik Sistemi</SectionHeading>
            <div className="space-y-8">
                <p>
                    Dünya devi Vimeo, marka tutarlılığını korurken gelecekteki büyümeye de izin verecek esnek bir yapıya ihtiyaç duyuyordu. 15'ten fazla farklı iletişim kanalı (onboarding, kampanya, hesap işlemleri vb.) için ortak bir dil gerekiyordu.
                </p>
                <p>
                    Oluşturulan modüler tasarım sistemi sayesinde, bugün bir e-posta şablonunda kullanılan bir buton, yarın yeni bir web sayfasında aynı tutarlılıkla kullanılabiliyor. Bu, her seferinde sıfırdan başlamak yerine mevcut parçaları birleştirerek hız kazanmayı sağlıyor.
                </p>
            </div>

            <SectionHeading id="faydalar">Neden Bir Tasarım Sistemine İhtiyacınız Var?</SectionHeading>
            <div className="space-y-8">
                <ul className="space-y-6">
                    <li className="bg-white p-6 rounded-2xl shadow-sm border border-[#0b2117]/5">
                        <span className="font-bold text-[#0b2117]">Hız ve Verimlilik:</span> Tasarımcılar ve yazılımcılar tekerleği her seferinde yeniden icat etmek yerine hazır bileşenleri kullanır. Bu da üretim süresini ciddi oranda düşürür.
                    </li>
                    <li className="bg-white p-6 rounded-2xl shadow-sm border border-[#0b2117]/5">
                        <span className="font-bold text-[#0b2117]">Marka Tutarlılığı:</span> Web sitenizden mobil uygulamanıza, reklamlarınızdan sosyal medya paylaşımlarınıza kadar her yerde aynı profesyonel duruşu sergilersiniz.
                    </li>
                    <li className="bg-white p-6 rounded-2xl shadow-sm border border-[#0b2117]/5">
                        <span className="font-bold text-[#0b2117]">Kolay Ölçeklenebilirlik:</span> Yeni bir özellik veya ürün eklemek, tasarım sisteminin sunduğu modüler yapı sayesinde çok daha kolay ve hatasız hale gelir.
                    </li>
                </ul>
            </div>

            <SectionHeading id="sonuc">Ölçeklenebilir Tasarımlar İnşa Edin</SectionHeading>
            <div className="space-y-8">
                <p>
                    Tasarım sistemleri sadece büyük şirketler için değil, büyümeyi hedefleyen her marka için bir gerekliliktir. Statik kuralların ötesine geçen, dinamik ve esnek bir sistemle markanızın geleceğini inşa edin.
                </p>
                <p>
                    Pikselai olarak biz, markaların hem tasarım süreçlerini hızlandırıyor hem de görsel kalitelerini standartlaştırıyoruz. Profesyonel tasarım sistemleri ve UX/UI çözümlerimizle markanızı dijital dünyada öne çıkarın.
                </p>
            </div>
        </BlogArticleTemplate>
    )
}
