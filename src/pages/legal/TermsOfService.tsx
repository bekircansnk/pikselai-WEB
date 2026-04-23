import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import { Section } from '../../components/ui/Section';

const LAST_UPDATED = '23 Nisan 2026';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>
            {/* Hero */}
            <Section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden bg-[#0b2117]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#caf265]/8 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-4xl relative z-10 mx-auto px-6 md:px-12">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#caf265] block mb-6">Yasal</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6">
                        Kullanım <span className="italic font-light text-[#caf265]">Koşulları</span>
                    </h1>
                    <p className="text-lg text-[#a8b8af] max-w-2xl leading-relaxed font-light">
                        pikselai.com web sitesini ve hizmetlerimizi kullanmadan önce lütfen bu kullanım koşullarını dikkatlice okuyunuz.
                    </p>
                    <p className="text-sm text-[#a8b8af]/60 mt-6">Son güncelleme: {LAST_UPDATED}</p>
                </div>
            </Section>

            {/* İçerik */}
            <Section className="py-20 bg-[#F4EFE6]">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="prose prose-lg max-w-none text-[#3a5245] space-y-12">

                        {/* 1. Genel Hükümler */}
                        <LegalSection number="1" title="Genel Hükümler">
                            <p>
                                İşbu Kullanım Koşulları ("Koşullar"), <strong>PikselAI</strong> ("Şirket") tarafından işletilen 
                                <strong> pikselai.com</strong> web sitesinin ("Site") kullanımına ilişkin hüküm ve şartları 
                                düzenlemektedir.
                            </p>
                            <p>
                                Siteyi ziyaret eden, kullanan veya hizmetlerimizden yararlanan her gerçek ve tüzel kişi ("Kullanıcı"), 
                                işbu Koşulları okuduğunu, anladığını ve kabul ettiğini beyan eder. 
                                Bu Koşulları kabul etmiyorsanız, Siteyi kullanmayı bırakmanız gerekmektedir.
                            </p>
                            <p>
                                İşbu Koşullar, 6098 sayılı Türk Borçlar Kanunu, 6502 sayılı Tüketicinin Korunması Hakkında Kanun, 
                                6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun, 5846 sayılı Fikir ve Sanat Eserleri 
                                Kanunu ve ilgili mevzuat hükümleri çerçevesinde hazırlanmıştır.
                            </p>
                        </LegalSection>

                        {/* 2. Hizmet Tanımı */}
                        <LegalSection number="2" title="Hizmetlerin Tanımı">
                            <p>PikselAI, aşağıdaki alanlarda dijital hizmetler sunan bir teknoloji şirketidir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>AI Prodüksiyon:</strong> Yapay zeka destekli ürün fotoğrafçılığı, sanal manken, AI video ve görsel içerik üretimi</li>
                                <li><strong>E-Ticaret Çözümleri:</strong> Shopify ve diğer platformlarda mağaza kurulumu, yönetimi ve pazar yeri entegrasyonları</li>
                                <li><strong>Sosyal Medya Yönetimi:</strong> İçerik üretimi, hesap yönetimi ve reklam kampanyası yönetimi</li>
                                <li><strong>Kreatif Tasarım:</strong> Marka kimliği, grafik tasarım ve sunum tasarımı</li>
                            </ul>
                            <p>
                                PikselAI, sunduğu hizmetlerin kapsamını, özelliklerini ve fiyatlandırmasını önceden 
                                bildirmeksizin değiştirme hakkını saklı tutar.
                            </p>
                        </LegalSection>

                        {/* 3. Fikri Mülkiyet */}
                        <LegalSection number="3" title="Fikri Mülkiyet Hakları">
                            <h4 className="text-[#0b2117] font-bold mt-4">3.1. PikselAI'nin Fikri Mülkiyet Hakları</h4>
                            <p>
                                Site üzerindeki tüm içerik, tasarım, grafik, logo, ikon, metin, görsel, video, yazılım, 
                                kaynak kodu ve diğer materyaller ("İçerik") PikselAI'nin veya lisans verenlerinin mülkiyetindedir 
                                ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile uluslararası fikri mülkiyet mevzuatı 
                                kapsamında korunmaktadır.
                            </p>
                            <p>
                                PikselAI'nin önceden yazılı izni olmaksızın Site İçeriğinin kısmen veya tamamen kopyalanması, 
                                çoğaltılması, dağıtılması, yayınlanması, değiştirilmesi veya ticari amaçlarla kullanılması 
                                kesinlikle yasaktır.
                            </p>

                            <h4 className="text-[#0b2117] font-bold mt-6">3.2. Müşteri İçerikleri</h4>
                            <p>
                                PikselAI tarafından müşteriler adına üretilen içerikler (fotoğraf, video, tasarım vb.) üzerindeki 
                                haklar, taraflar arasında akdedilecek ayrı hizmet sözleşmesi hükümlerine tabidir. Sözleşmede 
                                aksi belirtilmedikçe, üretilen içerikler üzerindeki mali haklar müşteriye devredilir.
                            </p>

                            <h4 className="text-[#0b2117] font-bold mt-6">3.3. Portföy ve Referans Kullanımı</h4>
                            <p>
                                PikselAI, müşteriler adına ürettiği içerikleri, müşterinin ticari sırlarını ifşa etmemek kaydıyla, 
                                portföy ve referans amacıyla kendi tanıtım materyallerinde kullanma hakkına sahiptir. 
                                Bu kullanım hakkı, hizmet sözleşmesinde aksi kararlaştırılmadıkça geçerlidir.
                            </p>
                        </LegalSection>

                        {/* 4. Kullanıcı Yükümlülükleri */}
                        <LegalSection number="4" title="Kullanıcı Yükümlülükleri">
                            <p>Kullanıcılar, Siteyi kullanırken aşağıdaki kurallara uymakla yükümlüdür:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Siteye sağlanan tüm bilgilerin doğru, güncel ve eksiksiz olmasını sağlamak</li>
                                <li>Türkiye Cumhuriyeti yasalarına ve uluslararası hukuka aykırı faaliyetlerde bulunmamak</li>
                                <li>Sitenin güvenliğini tehlikeye atacak herhangi bir eylemde bulunmamak</li>
                                <li>Otomatik veri toplama araçları (bot, scraper, crawler vb.) kullanmamak</li>
                                <li>Diğer kullanıcıların Site kullanımını engelleyecek veya kısıtlayacak davranışlarda bulunmamak</li>
                                <li>Virüs, zararlı yazılım veya benzer zararlı kodlar yaymamak</li>
                                <li>PikselAI'nin yazılı izni olmaksızın Site İçeriğini ticari amaçlarla kullanmamak</li>
                                <li>Aldatıcı, yanıltıcı veya hukuka aykırı içerik paylaşmamak</li>
                            </ul>
                            <p>
                                Bu yükümlülüklere aykırı davranan Kullanıcıların Siteye erişimi 
                                PikselAI tarafından önceden bildirimde bulunmaksızın kısıtlanabilir veya engellenebilir.
                            </p>
                        </LegalSection>

                        {/* 5. Sorumluluk Sınırlamaları */}
                        <LegalSection number="5" title="Sorumluluk Sınırlamaları">
                            <h4 className="text-[#0b2117] font-bold mt-4">5.1. Site Kullanılabilirliği</h4>
                            <p>
                                PikselAI, Sitenin kesintisiz, hatasız veya güvenli bir şekilde çalışacağını garanti etmez. 
                                Site, bakım, güncelleme veya teknik sorunlar nedeniyle zaman zaman kullanılamayabilir. 
                                PikselAI, bu nedenle oluşabilecek zararlardan sorumlu tutulamaz.
                            </p>

                            <h4 className="text-[#0b2117] font-bold mt-6">5.2. İçerik Doğruluğu</h4>
                            <p>
                                Sitede yer alan bilgiler, genel bilgilendirme amaçlıdır. PikselAI, İçeriğin doğruluğu, 
                                eksiksizliği ve güncelliği konusunda herhangi bir garanti vermez. İçerik, profesyonel 
                                danışmanlık yerine geçmez.
                            </p>

                            <h4 className="text-[#0b2117] font-bold mt-6">5.3. Dolaylı Zararlar</h4>
                            <p>
                                PikselAI, Sitenin kullanımından veya kullanılamamasından kaynaklanan doğrudan, dolaylı, 
                                özel, arızi veya sonuç olarak ortaya çıkan herhangi bir zarar (kar kaybı, veri kaybı, 
                                itibar kaybı dahil) bakımından, hukuki sorumluluk teorisi ne olursa olsun ve bu tür 
                                zararların olasılığı hakkında bilgilendirilmiş olsa dahi, sorumlu tutulamaz.
                            </p>
                        </LegalSection>

                        {/* 6. Üçüncü Taraf Bağlantıları */}
                        <LegalSection number="6" title="Üçüncü Taraf Bağlantıları ve Hizmetleri">
                            <p>
                                Site, üçüncü taraf web sitelerine ve hizmetlerine bağlantılar içerebilir. Bu bağlantılar, 
                                yalnızca Kullanıcıların kolaylığı için sağlanmış olup PikselAI, bu üçüncü taraf sitelerin 
                                içeriğini, gizlilik politikalarını veya uygulamalarını kontrol etmemekte ve bunlardan 
                                sorumlu olmamaktadır.
                            </p>
                            <p>
                                Üçüncü taraf sitelerle olan etkileşimleriniz, tamamen sizin ve ilgili üçüncü taraf arasındadır.
                            </p>
                        </LegalSection>

                        {/* 7. Tazminat */}
                        <LegalSection number="7" title="Tazminat">
                            <p>
                                Kullanıcı, işbu Koşulları ihlal etmesi veya herhangi bir üçüncü tarafın haklarını 
                                ihlal etmesi nedeniyle ortaya çıkabilecek her türlü talep, zarar, yükümlülük, masraf 
                                ve giderden (makul avukatlık ücretleri dahil) PikselAI'yi, yöneticilerini, çalışanlarını 
                                ve temsilcilerini tazmin edecek ve zarar görmelerini önleyecektir.
                            </p>
                        </LegalSection>

                        {/* 8. Mücbir Sebepler */}
                        <LegalSection number="8" title="Mücbir Sebepler">
                            <p>
                                PikselAI; doğal afet, savaş, terör, isyan, grev, salgın hastalık, hükümet kararları, 
                                siber saldırı, altyapı arızaları ve benzeri önceden öngörülemeyen, kontrol dışı 
                                olaylar ("Mücbir Sebep") nedeniyle yükümlülüklerini yerine getirememesinden veya 
                                gecikmesinden sorumlu tutulamaz.
                            </p>
                        </LegalSection>

                        {/* 9. Değişiklikler */}
                        <LegalSection number="9" title="Koşulların Değiştirilmesi">
                            <p>
                                PikselAI, işbu Kullanım Koşulları'nı herhangi bir zamanda, tek taraflı olarak değiştirme 
                                hakkını saklı tutar. Değişiklikler, Sitede yayımlandığı tarihte yürürlüğe girer. 
                                Kullanıcıların, güncel Koşulları düzenli olarak kontrol etmeleri önerilmektedir.
                            </p>
                            <p>
                                Değişikliklerin yürürlüğe girmesinden sonra Siteyi kullanmaya devam etmeniz, 
                                güncellenmiş Koşulları kabul ettiğiniz anlamına gelir.
                            </p>
                        </LegalSection>

                        {/* 10. Bölünebilirlik */}
                        <LegalSection number="10" title="Bölünebilirlik">
                            <p>
                                İşbu Koşulların herhangi bir hükmünün yetkili bir mahkeme veya hakem heyeti 
                                tarafından geçersiz, hukuka aykırı veya uygulanamaz bulunması halinde, söz konusu 
                                hüküm Koşullardan ayrılacak ve kalan hükümler tam olarak yürürlükte kalmaya devam edecektir.
                            </p>
                        </LegalSection>

                        {/* 11. Uygulanacak Hukuk ve Yetki */}
                        <LegalSection number="11" title="Uygulanacak Hukuk ve Yetkili Mahkeme">
                            <p>
                                İşbu Kullanım Koşulları, Türkiye Cumhuriyeti hukukuna tabidir ve Türkiye Cumhuriyeti 
                                hukukuna göre yorumlanacaktır.
                            </p>
                            <p>
                                Bu Koşullardan doğan veya bu Koşullarla bağlantılı her türlü uyuşmazlığın çözümünde 
                                <strong> İstanbul Mahkemeleri ve İcra Daireleri</strong> münhasıran yetkilidir.
                            </p>
                            <p>
                                Tüketici işlemlerinden kaynaklanan uyuşmazlıklarda, 6502 sayılı Tüketicinin Korunması 
                                Hakkında Kanun'un belirlediği parasal sınırlar dahilinde Tüketici Hakem Heyetleri, 
                                bu sınırları aşan uyuşmazlıklarda Tüketici Mahkemeleri yetkilidir.
                            </p>
                        </LegalSection>

                        {/* 12. İletişim */}
                        <LegalSection number="12" title="İletişim">
                            <p>
                                Kullanım Koşulları hakkında sorularınız veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose space-y-2 text-[15px] text-[#3a5245]">
                                <p><strong className="text-[#0b2117]">E-posta:</strong> bilgi@pikselai.com</p>
                                <p><strong className="text-[#0b2117]">Telefon:</strong> +90 553 183 23 44</p>
                                <p><strong className="text-[#0b2117]">Adres:</strong> Başakşehir / İstanbul</p>
                            </div>
                        </LegalSection>

                        {/* Alt linkler */}
                        <div className="flex flex-wrap gap-4 pt-8 border-t border-[#e0dcd3]">
                            <Link to="/gizlilik-politikasi" className="text-[#86AA00] hover:text-[#0b2117] font-semibold transition-colors">
                                Gizlilik Politikası →
                            </Link>
                            <Link to="/kvkk" className="text-[#86AA00] hover:text-[#0b2117] font-semibold transition-colors">
                                KVKK Aydınlatma Metni →
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

// Yasal bölüm bileşeni
function LegalSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
    return (
        <div id={`madde-${number}`}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0b2117] mb-4 flex items-baseline gap-3">
                <span className="text-[#86AA00] text-lg font-mono">{number}.</span>
                {title}
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export default TermsOfService;
