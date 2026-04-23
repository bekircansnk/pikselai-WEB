import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "figma", heading: "Figma: İş Akışındaki Küçük Ama Etkili Dokunuşlar" },
    { id: "photoshop", heading: "Photoshop: Kontrolü Elden Bırakmadan Ustalık" },
    { id: "slides", heading: "Google Slides: Bir Sunum Aracından Daha Fazlası" },
    { id: "canva", heading: "Canva: Hız ve Erişilebilirlik Odaklı AI" },
    { id: "sonuc", heading: "Nasıl Kullanıldığı Önemli" }
]

export default function GizliAiOzellikleri() {
    return (
        <BlogArticleTemplate
            title="Favori Tasarım Araçlarınızdaki 'Gizli' AI Özellikleri"
            metaDescription="Figma, Photoshop, Canva ve Google Slides'da işinizi kolaylaştıracak ancak pek bilinmeyen yapay zeka özelliklerini keşfedin."
            category="AI Destekli Yaratıcılık"
            categoryId="ai-powered-creative"
            readTime="10 dk"
            heroImage="/assets/pages/blog/gizli_ai_ozellikleri.webp"
            heroImageAlt="Gizli AI Özellikleri"
            sections={SECTIONS}
        >
            <div id="figma" className="scroll-mt-32 space-y-8">
                <p>
                    Yapay zeka sadece ChatGPT veya Midjourney'den ibaret değil. Her gün kullandığımız tasarım araçları, iş akışımızı sessizce devrimselleştiren "gizli" özelliklerle donatıldı. Bu özelliklerin çoğu gösterişli değil, pratiktir ve tam da bu yüzden değerlidirler.
                </p>
                <p>
                    İşte en popüler tasarım araçlarında muhtemelen gözden kaçırdığınız bazı güçlü AI yetenekleri:
                </p>
            </div>

            <SectionHeading id="figma">Figma: İş Akışındaki Küçük Ama Etkili Dokunuşlar</SectionHeading>
            <div className="space-y-8">
                <p>
                    Figma'nın AI özellikleri gösterişten ziyade verimliliğe odaklanıyor. Tasarımcıların akışını bozmadan küçük ama zaman alan işleri üstleniyorlar.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                    <li><strong>Dosyadan Çıkmadan Görsel Düzenleme:</strong> Arka plan silme, nesne silme ve canvas genişletme gibi işleri artık Photoshop'a geçmeden Figma içinde yapabilirsiniz.</li>
                    <li><strong>Boş Sayfadan Kurtulun:</strong> AI destekli ilk taslaklar ile düzenlenebilir layout'lar ve çok ekranlı UI akışları oluşturabilirsiniz.</li>
                    <li><strong>Küçük Görevleri Otomatize Edin:</strong> Katmanları otomatik adlandırma, metinleri saniyeler içinde çevirme veya yer tutucu (placeholder) içerikleri anlamlı metinlerle değiştirme.</li>
                </ul>
            </div>

            <SectionHeading id="photoshop">Photoshop: Kontrolü Elden Bırakmadan Ustalık</SectionHeading>
            <div className="space-y-8">
                <p>
                    Herkes "Generative Fill" özelliğini biliyor, ancak onun etrafındaki yardımcı araçlar asıl farkı yaratıyor.
                </p>
                <div className="bg-[#D8FF85]/10 p-8 rounded-[2rem] space-y-6">
                    <div>
                        <h4 className="font-bold">Harmonize (Uyumlaştırma):</h4>
                        <p className="text-sm">Bir nesneyi sahneye bıraktığınızda, Photoshop ışığı, rengi ve gölgeleri otomatik olarak ayarlar. Manuel düzenlemeye gerek kalmaz.</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Generative Upscale:</h4>
                        <p className="text-sm">Görsel boyutunu 4 kata kadar artırırken detayları ve keskinliği akıllıca korur. Eski veya düşük çözünürlüklü varlıklar için hayat kurtarıcıdır.</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Distraction Removal (Dikkat Dağıtıcıları Kaldır):</h4>
                        <p className="text-sm">Arka plandaki kalabalık, kablolar veya karmaşayı tek bir hamleyle, içeriğe uygun şekilde temizler.</p>
                    </div>
                </div>
            </div>

            <SectionHeading id="slides">Google Slides: Bir Sunum Aracından Daha Fazlası</SectionHeading>
            <div className="space-y-8">
                <p>
                    Google Slides artık sadece sunum yapmak için değil, bir düşünme aracı olarak da kullanılıyor. Gemini yan paneli sayesinde sunum hazırlama süreci tamamen değişiyor.
                </p>
                <ul className="list-disc pl-6 space-y-4 font-light">
                    <li><strong>Karmaşık Verileri Slayta Dönüştürün:</strong> Drive'daki verilerinizi analiz ederek en vurucu slayt başlıklarını ve konuşmacı notlarını otomatik üretir.</li>
                    <li><strong>Özel Görseller Üretin:</strong> Stok fotoğraf aramak yerine, Google'ın Imagen modeliyle doğrudan slaytın içine markanıza uygun görseller yerleştirin.</li>
                    <li><strong>Metinleri Yerinde Düzenleyin:</strong> Başka bir araca geçmeden metnin tonunu değiştirebilir veya uzun paragrafları saniyeler içinde sadeleştirebilirsiniz.</li>
                </ul>
            </div>

            <SectionHeading id="canva">Canva: Hız ve Erişilebilirlik Odaklı AI</SectionHeading>
            <div className="space-y-8">
                <p>
                    Canva, yapay zekayı tasarımın karmaşıklığını ortadan kaldırmak için kullanıyor. Özellikle yüksek hacimli içerik ihtiyacı olan ekipler için güçlü çözümler sunuyor.
                </p>
                <ul className="list-disc pl-6 space-y-4 font-light">
                    <li><strong>Magic Studio:</strong> Katmanlarla veya maskelerle uğraşmadan nesneleri hareket ettirebilir, silebilir veya görselleri genişletebilirsiniz.</li>
                    <li><strong>Bulk Create (Toplu Oluşturma):</strong> Tek bir tasarımdan yüzlerce farklı varyasyonu saniyeler içinde üreterek kampanya hızınızı artırabilirsiniz.</li>
                    <li><strong>Formatlar Arası Geçiş:</strong> Bir görseli tek bir tıkla videoya dönüştürebilir, AI seslendirmeler ekleyebilir ve Beat Sync ile müziğe uyumlu hale getirebilirsiniz.</li>
                </ul>
            </div>

            <SectionHeading id="sonuc">Nasıl Kullanıldığı Önemli</SectionHeading>
            <div className="space-y-8">
                <p>
                    Artık "AI kullanıyor olmak" tek başına bir avantaj değil. Asıl fark yaratan şey; AI'nın iş akışınızda tam olarak nerede işe yaradığını, hangi özelliklerin gerçek sürtünmeyi ortadan kaldırdığını ve ne zaman hıza odaklanılması gerektiğini bilmektir.
                </p>
                <p>
                    En iyi AI özellikleri, kendilerini AI gibi hissettirmeyenlerdir. Onlar sadece işinizi her zaman hayal ettiğiniz hızda yapmanızı sağlayan araçlardır.
                </p>
            </div>
        </BlogArticleTemplate>
    )
}
