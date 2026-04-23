import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "beklentiler", heading: "Bir Tasarımcıda Tam Olarak Ne Arıyorsunuz?" },
    { id: "maliyet", heading: "İşe Alım İçin Zamanınız ve Kaynağınız Var mı?" },
    { id: "outsourcing", heading: "Dış Kaynak (Outsourcing) Seçeneğini Değerlendirdiniz mi?" },
    { id: "kriterler", heading: "Hız mı, Ölçek mi, Esneklik mi?" },
    { id: "sonuc", heading: "Ekibi mi Büyütmek Yoksa Üretimi mi Ölçeklendirmek?" }
]

export default function TasarimciIseAlmaRehberi() {
    return (
        <BlogArticleTemplate
            title="5 Kritik Soru: Grafik Tasarımcı İşe Alırken Nelere Dikkat Edilmeli?"
            metaDescription="İş ilanını yayınlamadan önce durun. Bir tasarımcı işe alırken sormanız gereken 5 soru ile doğru kararı verin ve bütçenizi koruyun."
            category="Yaratıcı Liderlik"
            categoryId="creative-leadership"
            readTime="8 dk"
            heroImage="/assets/pages/blog/tasarimci_ise_alma_rehberi.webp"
            heroImageAlt="Tasarımcı İşe Alma Rehberi"
            sections={SECTIONS}
        >
            <div id="beklentiler" className="scroll-mt-32 space-y-8">
                <p>
                    Tasarım talepleri biriktiğinde ilk refleks genellikle yeni bir tasarımcıyı işe almaktır. Ancak bu, her zaman en verimli çözüm olmayabilir. İşe alım sürecine başlamadan önce kendinize sormanız gereken kritik sorular vardır.
                </p>
                <p>
                    Yeni bir tasarımcıyı ekibe dahil etmek sadece bir "kafa sayısı" artışı değil, büyümenin temellerini atmaktır. İşte sormanız gereken ilk soru:
                </p>
            </div>

            <SectionHeading id="beklentiler">Bir Tasarımcıda Tam Olarak Ne Arıyorsunuz?</SectionHeading>
            <div className="space-y-8">
                <p>
                    Ekibinize birini katarken amacınız nedir? Eksik bir yeteneği mi tamamlamak istiyorsunuz? Sadece genel kapasiteyi mi artırmayı hedefliyorsunuz? Yoksa içeride marka bilgisini daha güçlü mü tutmak istiyorsunuz?
                </p>
                <div className="bg-[#0b2117]/5 p-8 rounded-[2rem]">
                    <p className="font-bold mb-4">İşe alımın bazı zorluklarını da göz önünde bulundurun:</p>
                    <ul className="list-disc pl-6 space-y-2 text-base font-light">
                        <li>Her uzmanlık alanını (video, 3D, illüstrasyon vb.) tek bir kişide bulmak zordur.</li>
                        <li>Yaratıcı iş akışlarındaki dönemsel yoğunlukları tek bir kişiyle yönetemeyebilirsiniz.</li>
                        <li>Doğru yeteneği bulmak, eğitmek ve elde tutmak büyük bir enerji gerektirir.</li>
                    </ul>
                </div>
            </div>

            <SectionHeading id="maliyet">İşe Alım İçin Zamanınız ve Kaynağınız Var mı?</SectionHeading>
            <div className="space-y-8">
                <p>
                    İşe alım yapmak, sadece bir ilan yayınlamaktan çok daha fazlasıdır. Rolü tanımlamanız, maliyetleri tahmin etmeniz, bütçe onayı almanız ve uzun mülakat süreçlerini yönetmeniz gerekir.
                </p>
                <p>
                    <strong>Tahmini Maliyet Tablosu (Yıllık):</strong>
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-[#0b2117]/10">
                                <th className="py-4 font-bold">Kalem</th>
                                <th className="py-4 font-bold text-right">Tahmini Tutar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#0b2117]/10">
                                <td className="py-4">İşe Alım ve Reklam Giderleri</td>
                                <td className="py-4 text-right">$4,000</td>
                            </tr>
                            <tr className="border-b border-[#0b2117]/10">
                                <td className="py-4">Ortalama Maaş (Kıdemli)</td>
                                <td className="py-4 text-right">$80,000</td>
                            </tr>
                            <tr className="border-b border-[#0b2117]/10">
                                <td className="py-4">Yazılım Lisansları ve Donanım</td>
                                <td className="py-4 text-right">$3,000</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-bold">Toplam</td>
                                <td className="py-4 text-right font-bold">$87,000+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <SectionHeading id="outsourcing">Dış Kaynak (Outsourcing) Seçeneğini Değerlendirdiniz mi?</SectionHeading>
            <div className="space-y-8">
                <p>
                    Tam zamanlı bir ekip olsa bile, çoğu iç kreatif ekip talepler altında boğulur. Bu yüzden "hibrit model" giderek yaygınlaşıyor. Stratejik işleri içeride tutarken, operasyonel veya uzmanlık gerektiren işleri dışarıya devretmek ekibinizin nefes almasını sağlar.
                </p>
                <p>
                    Freelancer'lar, geleneksel ajanslar veya <strong>Creative-as-a-Service (CaaS)</strong> modelleri bu noktada devreye girer.
                </p>
            </div>

            <SectionHeading id="kriterler">Hız mı, Ölçek mi, Esneklik mi?</SectionHeading>
            <div className="space-y-8">
                <p>
                    Hangi seçeneğin sizin için en iyisi olduğunu belirlemek için bu kriterlere odaklanın:
                </p>
                <ul className="space-y-6">
                    <li className="bg-white p-6 rounded-2xl shadow-sm border border-[#0b2117]/5">
                        <span className="font-bold text-[#0b2117]">Freelancer'lar:</span> Hızlı ve esnektirler ancak güvenilirlik ve uzun vadeli bağlılık konusunda risk taşıyabilirler.
                    </li>
                    <li className="bg-white p-6 rounded-2xl shadow-sm border border-[#0b2117]/5">
                        <span className="font-bold text-[#0b2117]">Geleneksel Ajanslar:</span> Büyük kampanyaları ölçeklendirebilirler ancak maliyetleri yüksektir ve geri dönüş süreleri (turnaround) uzundur.
                    </li>
                    <li className="bg-white p-6 rounded-2xl shadow-sm border border-[#0b2117]/5">
                        <span className="font-bold text-[#0b2117]">Pikselai (CaaS):</span> Freelancer esnekliği ile ajans güvenilirliğini birleştirir. 48 saat içinde teslimat ve ölçeklenebilir üretim sunar.
                    </li>
                </ul>
            </div>

            <SectionHeading id="sonuc">Ekibi mi Büyütmek Yoksa Üretimi mi Ölçeklendirmek?</SectionHeading>
            <div className="space-y-8">
                <p>
                    İşe alım ekibinizi büyütür. Ancak tasarım üretiminizi ölçeklendirmek, kesintisiz ve yüksek kaliteli bir kreatif akışı sağlamaktır. Bunun için ekibinizi doğru araçlarla ve dış destek mekanizmalarıyla donatmanız gerekir.
                </p>
                <p>
                    Pikselai olarak biz, markaların sadece ekiplerini değil, vizyonlarını ölçeklendirmelerine yardımcı oluyoruz. İşe alım sürecinin karmaşıklığına girmeden, profesyonel bir tasarım ekibini anında yanınızda hissedin.
                </p>
            </div>
        </BlogArticleTemplate>
    )
}
