import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import { Section } from '../../components/ui/Section';

// Son güncelleme tarihi
const LAST_UPDATED = '23 Nisan 2026';

const PrivacyPolicy = () => {
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
                        Gizlilik <span className="italic font-light text-[#caf265]">Politikası</span>
                    </h1>
                    <p className="text-lg text-[#a8b8af] max-w-2xl leading-relaxed font-light">
                        PikselAI olarak kişisel verilerinizin korunmasını ciddiye alıyoruz. Bu politika, verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.
                    </p>
                    <p className="text-sm text-[#a8b8af]/60 mt-6">Son güncelleme: {LAST_UPDATED}</p>
                </div>
            </Section>

            {/* İçerik */}
            <Section className="py-20 bg-[#F4EFE6]">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="prose prose-lg max-w-none text-[#3a5245] space-y-12">

                        {/* 1. Giriş */}
                        <LegalSection number="1" title="Giriş ve Kapsam">
                            <p>
                                İşbu Gizlilik Politikası, <strong>PikselAI</strong> ("Şirket", "biz" veya "bizim") tarafından işletilen 
                                <strong> pikselai.com</strong> web sitesi ve ilgili dijital hizmetler aracılığıyla toplanan kişisel verilerin 
                                işlenmesine ilişkin esasları düzenlemektedir.
                            </p>
                            <p>
                                Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK"), 6563 sayılı Elektronik Ticaretin 
                                Düzenlenmesi Hakkında Kanun ve ilgili ikincil mevzuat hükümleri çerçevesinde hazırlanmıştır.
                            </p>
                            <p>
                                Web sitemizi ziyaret ederek veya hizmetlerimizden yararlanarak bu Gizlilik Politikası'nı kabul etmiş sayılırsınız.
                            </p>
                        </LegalSection>

                        {/* 2. Veri Sorumlusu */}
                        <LegalSection number="2" title="Veri Sorumlusu">
                            <p>Kişisel verileriniz bakımından veri sorumlusu:</p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose">
                                <table className="w-full text-[15px] text-[#3a5245]">
                                    <tbody>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold text-[#0b2117] w-1/3">Unvan</td>
                                            <td className="py-3">PikselAI</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold text-[#0b2117]">Adres</td>
                                            <td className="py-3">Başakşehir / İstanbul</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold text-[#0b2117]">E-posta</td>
                                            <td className="py-3">bilgi@pikselai.com</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-semibold text-[#0b2117]">Telefon</td>
                                            <td className="py-3">+90 553 183 23 44</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </LegalSection>

                        {/* 3. Toplanan Veriler */}
                        <LegalSection number="3" title="Toplanan Kişisel Veriler">
                            <p>Hizmetlerimiz kapsamında aşağıdaki kişisel veri kategorileri toplanabilmektedir:</p>

                            <h4 className="text-[#0b2117] font-bold mt-6">3.1. Doğrudan Sizden Toplanan Veriler</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
                                <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, firma adı</li>
                                <li><strong>Talep ve İçerik Bilgileri:</strong> İletişim formları, WhatsApp ve e-posta üzerinden ilettiğiniz mesajlar, hizmet talepleri</li>
                            </ul>

                            <h4 className="text-[#0b2117] font-bold mt-6">3.2. Otomatik Olarak Toplanan Veriler</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cihaz ve Tarayıcı Bilgileri:</strong> IP adresi, tarayıcı türü ve sürümü, işletim sistemi, ekran çözünürlüğü</li>
                                <li><strong>Kullanım Verileri:</strong> Ziyaret edilen sayfalar, tıklama davranışları, oturum süresi, yönlendiren URL</li>
                                <li><strong>Çerez Verileri:</strong> Çerezler ve benzeri teknolojiler aracılığıyla toplanan bilgiler (detaylar için bkz. Madde 7)</li>
                            </ul>
                        </LegalSection>

                        {/* 4. Verilerin İşlenme Amaçları */}
                        <LegalSection number="4" title="Kişisel Verilerin İşlenme Amaçları">
                            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>İletişim taleplerinizin yanıtlanması ve müşteri ilişkilerinin yönetimi</li>
                                <li>Hizmet tekliflerinin hazırlanması ve sunulması</li>
                                <li>Sözleşme süreçlerinin yürütülmesi</li>
                                <li>Web sitesinin işlevselliğinin ve kullanıcı deneyiminin iyileştirilmesi</li>
                                <li>İstatistiksel analizler ve raporlama</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                                <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
                                <li>Açık rızanızın bulunması halinde, tanıtım ve pazarlama faaliyetleri</li>
                            </ul>
                        </LegalSection>

                        {/* 5. Hukuki Sebepler */}
                        <LegalSection number="5" title="Kişisel Verilerin İşlenmesinin Hukuki Sebepleri">
                            <p>
                                Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebepler 
                                kapsamında işlenmektedir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Açık rıza:</strong> Pazarlama ve tanıtım amaçlı iletişim</li>
                                <li><strong>Sözleşmenin ifası:</strong> Hizmet sunumu için gerekli veri işleme</li>
                                <li><strong>Kanuni yükümlülük:</strong> Vergi, muhasebe ve yasal raporlama yükümlülükleri</li>
                                <li><strong>Meşru menfaat:</strong> Web sitesi güvenliği, istatistiksel analiz ve hizmet kalitesinin artırılması</li>
                            </ul>
                        </LegalSection>

                        {/* 6. Veri Aktarımı */}
                        <LegalSection number="6" title="Kişisel Verilerin Aktarılması">
                            <p>
                                Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak 
                                aşağıdaki taraflarla paylaşılabilmektedir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>İş ortakları:</strong> Hizmet sunumu kapsamında iş birliği yapılan tedarikçiler ve çözüm ortakları</li>
                                <li><strong>Yasal merciler:</strong> Mevzuat gereği yetkili kamu kurum ve kuruluşları</li>
                                <li><strong>Altyapı sağlayıcıları:</strong> Web barındırma, e-posta ve analitik hizmet sağlayıcıları</li>
                            </ul>

                            <h4 className="text-[#0b2117] font-bold mt-6">6.1. Yurt Dışına Veri Aktarımı</h4>
                            <p>
                                Web sitemizde kullanılan bazı üçüncü taraf hizmetler (analitik araçlar, barındırma altyapıları vb.) 
                                nedeniyle kişisel verileriniz yurt dışına aktarılabilmektedir. Bu aktarımlar, KVKK'nın 9. maddesi 
                                kapsamında gerekli güvenlik önlemleri alınarak ve ilgili hukuki mekanizmalar (açık rıza, standart 
                                sözleşme hükümleri, yeterli koruma bulunan ülkeler) çerçevesinde gerçekleştirilmektedir.
                            </p>
                        </LegalSection>

                        {/* 7. Çerezler */}
                        <LegalSection number="7" title="Çerezler (Cookies)">
                            <p>
                                Web sitemizde çeşitli çerezler kullanılmaktadır. Çerezler, tarayıcınız aracılığıyla cihazınıza 
                                yerleştirilen küçük metin dosyalarıdır.
                            </p>

                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose mt-4">
                                <table className="w-full text-[15px] text-[#3a5245]">
                                    <thead>
                                        <tr className="border-b-2 border-[#e0dcd3]">
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Çerez Türü</th>
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Amaç</th>
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Süre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">Zorunlu Çerezler</td>
                                            <td className="py-3">Sitenin temel işlevlerinin çalışması</td>
                                            <td className="py-3">Oturum</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">Analitik Çerezler</td>
                                            <td className="py-3">Ziyaretçi davranışlarının analizi</td>
                                            <td className="py-3">2 yıl</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">Tercih Çerezleri</td>
                                            <td className="py-3">Dil ve görünüm tercihlerinin saklanması</td>
                                            <td className="py-3">1 yıl</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-semibold">Pazarlama Çerezleri</td>
                                            <td className="py-3">Kişiselleştirilmiş reklam sunumu</td>
                                            <td className="py-3">90 gün</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="mt-4">
                                Zorunlu çerezler dışındaki çerezler, ancak açık rızanızla etkinleştirilir. 
                                Tarayıcınızın ayarlarından çerezleri yönetebilir veya silebilirsiniz. Ancak çerezlerin 
                                devre dışı bırakılması, sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
                            </p>
                        </LegalSection>

                        {/* 8. Veri Güvenliği */}
                        <LegalSection number="8" title="Veri Güvenliği">
                            <p>
                                PikselAI olarak, kişisel verilerinizin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek 
                                ile verilerin muhafazasını sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik 
                                gerekli her türlü teknik ve idari tedbirleri almaktayız. Bu kapsamda:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>SSL/TLS şifreleme teknolojisi kullanılmaktadır</li>
                                <li>Erişim yetkilendirme ve kimlik doğrulama mekanizmaları uygulanmaktadır</li>
                                <li>Düzenli güvenlik testleri ve denetimler yapılmaktadır</li>
                                <li>Çalışanlar veri güvenliği konusunda bilgilendirilmektedir</li>
                            </ul>
                        </LegalSection>

                        {/* 9. Veri Saklama */}
                        <LegalSection number="9" title="Veri Saklama Süreleri">
                            <p>
                                Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuatta 
                                öngörülen yasal saklama süreleri kadar muhafaza edilmektedir. Saklama süresinin sona ermesinin 
                                ardından kişisel veriler, KVKK ve ilgili mevzuat hükümleri doğrultusunda silinmekte, 
                                yok edilmekte veya anonim hale getirilmektedir.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>İletişim formu verileri:</strong> Talep sonuçlandıktan sonra 2 yıl</li>
                                <li><strong>Sözleşme verileri:</strong> Sözleşme sona erdikten sonra 10 yıl (Türk Ticaret Kanunu)</li>
                                <li><strong>Analitik veriler:</strong> Anonim hale getirildikten sonra süresiz</li>
                                <li><strong>Çerez verileri:</strong> Çerez türüne göre değişken (bkz. Madde 7)</li>
                            </ul>
                        </LegalSection>

                        {/* 10. Haklar */}
                        <LegalSection number="10" title="İlgili Kişi Hakları">
                            <p>
                                KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                                <li>Düzeltme ve silme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                                <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                            </ul>

                            <p className="mt-4">
                                Haklarınızı kullanmak için <strong>bilgi@pikselai.com</strong> adresine yazılı başvuruda 
                                bulunabilirsiniz. Başvurularınız en geç 30 gün içinde sonuçlandırılacaktır.
                            </p>
                        </LegalSection>

                        {/* 11. Üçüncü Taraf Bağlantılar */}
                        <LegalSection number="11" title="Üçüncü Taraf Bağlantıları">
                            <p>
                                Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılara tıklayarak 
                                ayrıldığınızda, söz konusu sitelerin gizlilik uygulamalarından PikselAI sorumlu değildir. 
                                Üçüncü taraf sitelerin kendi gizlilik politikalarını incelemenizi öneririz.
                            </p>
                        </LegalSection>

                        {/* 12. Çocukların Gizliliği */}
                        <LegalSection number="12" title="Çocukların Gizliliği">
                            <p>
                                Hizmetlerimiz 18 yaş altındaki bireylere yönelik değildir. Bilerek 18 yaşın altındaki 
                                kişilerden kişisel veri toplamıyoruz. Bir çocuğun kişisel verilerini bize sağladığını 
                                fark ederseniz, lütfen bizimle iletişime geçin; ilgili verileri derhal sileceğiz.
                            </p>
                        </LegalSection>

                        {/* 13. Değişiklikler */}
                        <LegalSection number="13" title="Politika Değişiklikleri">
                            <p>
                                PikselAI, işbu Gizlilik Politikası'nı herhangi bir zamanda güncelleme hakkını saklı tutar. 
                                Politikadaki önemli değişiklikler, web sitemizde yayımlanarak duyurulacaktır. Değişikliklerin 
                                yürürlük tarihi, güncellenmiş politikanın yayımlandığı tarih olacaktır.
                            </p>
                            <p>
                                Web sitemizi düzenli olarak ziyaret ederek güncel Gizlilik Politikamızdan haberdar 
                                olmanızı öneririz.
                            </p>
                        </LegalSection>

                        {/* 14. İletişim */}
                        <LegalSection number="14" title="İletişim">
                            <p>
                                Gizlilik Politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose space-y-2 text-[15px] text-[#3a5245]">
                                <p><strong className="text-[#0b2117]">E-posta:</strong> bilgi@pikselai.com</p>
                                <p><strong className="text-[#0b2117]">Telefon:</strong> +90 553 183 23 44</p>
                                <p><strong className="text-[#0b2117]">Adres:</strong> Başakşehir / İstanbul</p>
                            </div>
                        </LegalSection>

                        {/* Alt linkler */}
                        <div className="flex flex-wrap gap-4 pt-8 border-t border-[#e0dcd3]">
                            <Link to="/kullanim-kosullari" className="text-[#86AA00] hover:text-[#0b2117] font-semibold transition-colors">
                                Kullanım Koşulları →
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

export default PrivacyPolicy;
