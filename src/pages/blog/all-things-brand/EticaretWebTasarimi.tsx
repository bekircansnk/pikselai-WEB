import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "giris", heading: "Dijital Mağazanız Sizin Vitrininizdir" },
    { id: "ana-sayfa", heading: "Ana Sayfa: Güven ve Merak Uyandırın" },
    { id: "urun-sayfasi", heading: "Ürün Sayfası: Karar Verme Sürecini Kolaylaştırın" },
    { id: "odeme", heading: "Ödeme Sayfası: Sürtünmeyi Sıfıra İndirin" },
    { id: "mobil", heading: "Mobil Öncelikli Tasarımın Gücü" },
    { id: "sonuc", heading: "Dönüşüm Oranlarınızı Zirveye Taşıyın" }
]

export default function EticaretWebTasarimi() {
    return (
        <BlogArticleTemplate
            title="E-Ticaret Web Tasarımı: Satışları Artıran 5 Temel Kural"
            metaDescription="E-ticaret sitenizi nasıl satış makinesine dönüştürürsünüz? Ana sayfa, ürün sayfası ve ödeme süreçlerinde dikkat etmeniz gereken tasarım stratejileri."
            category="Markaya Dair Her Şey"
            categoryId="all-things-brand"
            readTime="12 dk"
            heroImage="/assets/pages/blog/eticaret_web_tasarimi.webp"
            heroImageAlt="E-Ticaret Web Tasarımı"
            sections={SECTIONS}
        >
            <div id="giris" className="scroll-mt-32 space-y-8">
                <p>
                    E-ticaret dünyasında rekabet artık sadece fiyatlarla değil, sunulan "deneyimle" ölçülüyor. Bir kullanıcının sitenize girdiğinde hissettiği güven, aradığı ürünü bulma hızı ve ödeme adımındaki kolaylık, satışın gerçekleşip gerçekleşmeyeceğini belirleyen ana faktörlerdir.
                </p>
                <p>
                    İyi bir e-ticaret web tasarımı, sadece güzel görünmekle kalmaz; kullanıcıyı adım adım satın almaya yönlendiren bir stratejiye sahiptir. İşte e-ticaret sitenizi bir satış makinesine dönüştürecek temel kurallar:
                </p>
            </div>

            <SectionHeading id="ana-sayfa">Ana Sayfa: Güven ve Merak Uyandırın</SectionHeading>
            <div className="space-y-8">
                <p>
                    Ana sayfanız, markanızın dijital vitrinidir. Kullanıcılar ilk 3 saniyede ne sattığınızı ve neden sizi tercih etmeleri gerektiğini anlamalıdır.
                </p>
                <ul className="list-disc pl-6 space-y-4 font-light">
                    <li><strong>Net Değer Önerisi:</strong> Sizi rakiplerinizden ayıran nedir? (Örn: "48 Saatte Teslimat", "Sürdürülebilir Ürünler").</li>
                    <li><strong>Sosyal Kanıt:</strong> Müşteri yorumları ve yıldızlı değerlendirmeler güven inşa eder.</li>
                    <li><strong>Yönlendirici CTA'lar:</strong> "Şimdi Keşfet", "Yeni Sezonu Gör" gibi net çağrılar kullanın.</li>
                </ul>
            </div>

            <SectionHeading id="urun-sayfasi">Ürün Sayfası: Karar Verme Sürecini Kolaylaştırın</SectionHeading>
            <div className="space-y-8">
                <p>
                    Ürün sayfası, kullanıcının "almalı mıyım?" sorusuna yanıt aradığı yerdir. Buradaki detaylar, şüpheleri ortadan kaldırmalıdır.
                </p>
                <div className="bg-[#D8FF85]/10 p-8 rounded-[2rem] space-y-6">
                    <p><strong>Yüksek Kaliteli Görseller:</strong> Ürünün her açısından çekilmiş, zoom yapılabilir fotoğraflar ve mümkünse kısa videolar ekleyin.</p>
                    <p><strong>Detaylı Açıklamalar:</strong> Boyutlar, malzemeler ve kullanım ipuçları gibi teknik detayları eksiksiz sunun.</p>
                    <p><strong>Stok ve Teslimat Bilgisi:</strong> "Son 3 ürün" gibi aciliyet duygusu yaratan veya "Ücretsiz Kargo" gibi teşvik edici bilgiler verin.</p>
                </div>
            </div>

            <SectionHeading id="odeme">Ödeme Sayfası: Sürtünmeyi Sıfıra İndirin</SectionHeading>
            <div className="space-y-8">
                <p>
                    Alışveriş sepeti terk etme oranlarının en yüksek olduğu yer ödeme adımıdır. Bu sayfayı ne kadar sade tutarsanız, dönüşüm o kadar artar.
                </p>
                <ul className="list-disc pl-6 space-y-4 font-light">
                    <li><strong>Misafir Ödeme Seçeneği:</strong> Kullanıcıları hesap oluşturmaya zorlamayın.</li>
                    <li><strong>Net Fiyatlandırma:</strong> Kargo maliyetlerini veya ek vergileri en sonda sürpriz olarak çıkarmayın.</li>
                    <li><strong>Çeşitli Ödeme Yöntemleri:</strong> Kredi kartı, dijital cüzdanlar ve taksit seçeneklerini açıkça belirtin.</li>
                </ul>
            </div>

            <SectionHeading id="mobil">Mobil Öncelikli Tasarımın Gücü</SectionHeading>
            <div className="space-y-8">
                <p>
                    E-ticaret trafiğinin %70'inden fazlası artık mobil cihazlardan geliyor. Sitenizin mobilde hızlı açılması ve parmak ucuyla kolayca kontrol edilebilmesi bir seçenek değil, zorunluluktur. Mobil kullanıcılar için optimize edilmemiş bir site, potansiyel satışlarınızın yarısını kaybetmeniz demektir.
                </p>
            </div>

            <SectionHeading id="sonuc">Dönüşüm Oranlarınızı Zirveye Taşıyın</SectionHeading>
            <div className="space-y-8">
                <p>
                    Harika bir e-ticaret sitesi inşa etmek zaman ve enerji gerektirir, ancak doğru yapıldığında markanızın büyüme motoru haline gelir. Tasarımınızı sürekli test edin, verileri okuyun ve kullanıcı deneyimini her gün bir adım öteye taşıyın.
                </p>
                <p>
                    Pikselai olarak biz, e-ticaret markaları için yüksek performanslı UX/UI tasarımları ve dönüşüm odaklı stratejiler sunuyoruz. Satışlarınızı artırmak ve markanızı dijital dünyada devleştirmek için bizimle iletişime geçin.
                </p>
            </div>
        </BlogArticleTemplate>
    )
}
