import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import { Section } from '../../components/ui/Section';

const LAST_UPDATED = '23 Nisan 2026';

const KvkkPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>
            {/* Hero */}
            <Section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden bg-[#0b2117]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#caf265]/8 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-4xl relative z-10 mx-auto px-6 md:px-12">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#caf265] block mb-6">Yasal</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6">
                        KVKK <span className="italic font-light text-[#caf265]">Aydınlatma Metni</span>
                    </h1>
                    <p className="text-lg text-[#a8b8af] max-w-2xl leading-relaxed font-light">
                        6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, veri sorumlusu sıfatıyla
                        kişisel verilerinizin işlenmesine ilişkin aydınlatma yükümlülüğümüzü yerine getiriyoruz.
                    </p>
                    <p className="text-sm text-[#a8b8af]/60 mt-6">Son güncelleme: {LAST_UPDATED}</p>
                </div>
            </Section>

            {/* İçerik */}
            <Section className="py-20 bg-[#F4EFE6]">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="prose prose-lg max-w-none text-[#3a5245] space-y-12">

                        {/* Önemli Uyarı */}
                        <div className="bg-[#0b2117] text-[#F4EFE6] rounded-2xl p-8 not-prose">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#caf265] flex items-center justify-center shrink-0 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b2117" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Yasal Dayanak</h3>
                                    <p className="text-[#a8b8af] text-[15px] leading-relaxed">
                                        İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi
                                        ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ
                                        uyarınca hazırlanmıştır.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <LegalSection number="1" title="Veri Sorumlusunun Kimliği">
                            <p>
                                6698 sayılı KVKK uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla <strong>PikselAI</strong>
                                tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose">
                                <table className="w-full text-[15px] text-[#3a5245]">
                                    <tbody>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold text-[#0b2117] w-1/3">Veri Sorumlusu</td>
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

                        <LegalSection number="2" title="İşlenen Kişisel Veriler">
                            <p>Tarafınıza ait aşağıdaki kişisel veri kategorileri işlenebilmektedir:</p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose">
                                <table className="w-full text-[15px] text-[#3a5245]">
                                    <thead>
                                        <tr className="border-b-2 border-[#e0dcd3]">
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Veri Kategorisi</th>
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Veri Türleri</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">Kimlik</td>
                                            <td className="py-3">Ad, soyad</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">İletişim</td>
                                            <td className="py-3">E-posta adresi, telefon numarası, firma adı</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">İşlem Güvenliği</td>
                                            <td className="py-3">IP adresi, oturum bilgileri, log kayıtları</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3 font-semibold">Pazarlama</td>
                                            <td className="py-3">Çerez verileri, kampanya tercihleri</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-semibold">Müşteri İşlem</td>
                                            <td className="py-3">Talep ve şikayet bilgileri, hizmet geçmişi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </LegalSection>

                        <LegalSection number="3" title="Kişisel Verilerin İşlenme Amaçları">
                            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Hizmet sunumu ve sözleşme yükümlülüklerinin yerine getirilmesi</li>
                                <li>İletişim taleplerinin karşılanması</li>
                                <li>Teklif hazırlama ve müşteri ilişkileri yönetimi</li>
                                <li>Web sitesinin güvenliği ve işlevselliğinin sağlanması</li>
                                <li>İstatistiksel analiz ve hizmet geliştirme</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi (vergi, muhasebe vb.)</li>
                                <li>Açık rızanız dahilinde pazarlama ve tanıtım faaliyetleri</li>
                                <li>Hukuki uyuşmazlıklarda delil olarak kullanılması</li>
                            </ul>
                        </LegalSection>

                        <LegalSection number="4" title="Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi">
                            <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Web sitemizdeki iletişim ve teklif talep formları</li>
                                <li>WhatsApp ve e-posta iletişim kanalları</li>
                                <li>Çerezler ve benzeri izleme teknolojileri</li>
                                <li>Telefon görüşmeleri</li>
                                <li>Yüz yüze görüşmeler ve toplantılar</li>
                            </ul>
                            <p className="mt-4">
                                Verileriniz, KVKK'nın 5. maddesinin 2. fıkrasında belirtilen aşağıdaki hukuki sebepler
                                kapsamında işlenmektedir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>a)</strong> Kanunlarda açıkça öngörülmesi</li>
                                <li><strong>c)</strong> Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
                                <li><strong>ç)</strong> Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi</li>
                                <li><strong>e)</strong> Bir hakkın tesisi, kullanılması veya korunması</li>
                                <li><strong>f)</strong> İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaat</li>
                                <li><strong>Açık rıza:</strong> Yukarıdaki şartların bulunmadığı hallerde (özellikle pazarlama amaçlı iletişim)</li>
                            </ul>
                        </LegalSection>

                        <LegalSection number="5" title="Kişisel Verilerin Aktarılması">
                            <p>
                                Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak
                                aşağıdaki kişi ve kuruluşlara aktarılabilmektedir:
                            </p>
                            <h4 className="text-[#0b2117] font-bold mt-4">5.1. Yurt İçi Aktarım</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Yasal zorunluluk kapsamında yetkili kamu kurum ve kuruluşları</li>
                                <li>Hizmet sunumunda iş birliği yapılan iş ortakları ve tedarikçiler</li>
                                <li>Hukuki danışmanlar ve mali müşavirler</li>
                            </ul>
                            <h4 className="text-[#0b2117] font-bold mt-6">5.2. Yurt Dışı Aktarım</h4>
                            <p>
                                Web altyapısı ve analitik hizmetler kapsamında kişisel verileriniz, KVKK'nın 9. maddesi
                                çerçevesinde yeterli korumanın bulunduğu veya açık rızanızın alındığı durumlarda yurt
                                dışına aktarılabilmektedir. Bu aktarımlarda gerekli teknik ve idari tedbirler alınmaktadır.
                            </p>
                        </LegalSection>

                        <LegalSection number="6" title="Veri Saklama Süreleri">
                            <p>
                                Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre ve ilgili mevzuatta öngörülen
                                zamanaşımı süreleri boyunca saklanmaktadır:
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose">
                                <table className="w-full text-[15px] text-[#3a5245]">
                                    <thead>
                                        <tr className="border-b-2 border-[#e0dcd3]">
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Veri Türü</th>
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Saklama Süresi</th>
                                            <th className="text-left py-3 font-bold text-[#0b2117]">Dayanak</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3">İletişim formu verileri</td>
                                            <td className="py-3">2 yıl</td>
                                            <td className="py-3">Meşru menfaat</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3">Sözleşme verileri</td>
                                            <td className="py-3">10 yıl</td>
                                            <td className="py-3">TTK m.82, TBK m.146</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3">Muhasebe kayıtları</td>
                                            <td className="py-3">10 yıl</td>
                                            <td className="py-3">VUK m.253</td>
                                        </tr>
                                        <tr className="border-b border-[#e0dcd3]">
                                            <td className="py-3">Log kayıtları</td>
                                            <td className="py-3">2 yıl</td>
                                            <td className="py-3">5651 sayılı Kanun</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Çerez verileri</td>
                                            <td className="py-3">Türüne göre değişken</td>
                                            <td className="py-3">Açık rıza</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </LegalSection>

                        <LegalSection number="7" title="İlgili Kişinin Hakları (KVKK m.11)">
                            <p>
                                KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose space-y-4 text-[15px] text-[#3a5245]">
                                {[
                                    { letter: 'a', text: 'Kişisel verilerinizin işlenip işlenmediğini öğrenme' },
                                    { letter: 'b', text: 'Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme' },
                                    { letter: 'c', text: 'Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme' },
                                    { letter: 'ç', text: 'Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme' },
                                    { letter: 'd', text: 'Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme' },
                                    { letter: 'e', text: 'KVKK\'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme' },
                                    { letter: 'f', text: '(d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme' },
                                    { letter: 'g', text: 'İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme' },
                                    { letter: 'ğ', text: 'Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme' },
                                ].map((item) => (
                                    <div key={item.letter} className="flex items-start gap-3">
                                        <span className="w-7 h-7 rounded-full bg-[#caf265]/20 text-[#0b2117] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                                            {item.letter}
                                        </span>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </LegalSection>

                        <LegalSection number="8" title="Başvuru Yöntemi">
                            <p>
                                Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerden birini tercih edebilirsiniz:
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose space-y-4 text-[15px] text-[#3a5245]">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#0b2117] text-[#caf265] flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                                    <div>
                                        <p className="font-semibold text-[#0b2117]">E-posta ile Başvuru</p>
                                        <p className="text-[#3a5245]">
                                            "Kişisel Verilerin Korunması Kanunu Kapsamında Bilgi Talebi" konulu e-postanızı
                                            <strong> bilgi@pikselai.com</strong> adresine gönderebilirsiniz.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#0b2117] text-[#caf265] flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                                    <div>
                                        <p className="font-semibold text-[#0b2117]">Yazılı Başvuru</p>
                                        <p className="text-[#3a5245]">
                                            Kimliğinizi tespit edici belgeler ile birlikte noter kanalıyla veya iadeli
                                            taahhütlü posta yoluyla İstanbul adresimize gönderebilirsiniz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4">
                                Başvurunuzda; adınız, soyadınız, T.C. kimlik numaranız (yabancılar için pasaport numarası),
                                tebligata esas yerleşim yeri veya iş yeri adresi, varsa e-posta adresi, telefon numarası
                                ve talep konusu bilgilerinizin yer alması gerekmektedir.
                            </p>
                            <p>
                                Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç <strong>30 (otuz) gün</strong> içinde
                                ücretsiz olarak sonuçlandırılacaktır. İşlemin ayrıca bir maliyet gerektirmesi halinde,
                                Kişisel Verileri Koruma Kurulunca belirlenen tarifedeki ücret alınabilecektir.
                            </p>
                        </LegalSection>

                        <LegalSection number="9" title="Kişisel Verileri Koruma Kurulu'na Şikayet Hakkı">
                            <p>
                                Başvurunuzun reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde cevap verilmemesi
                                halinde; cevabı öğrendiğiniz tarihten itibaren 30 gün ve her halde başvuru tarihinden itibaren
                                60 gün içinde <strong>Kişisel Verileri Koruma Kurulu'na</strong> şikayette bulunma hakkınız mevcuttur.
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-[#e0dcd3] not-prose space-y-2 text-[15px] text-[#3a5245]">
                                <p><strong className="text-[#0b2117]">Kurum:</strong> Kişisel Verileri Koruma Kurumu</p>
                                <p><strong className="text-[#0b2117]">Web:</strong> <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener noreferrer" className="text-[#86AA00] hover:underline">www.kvkk.gov.tr</a></p>
                            </div>
                        </LegalSection>

                        {/* Alt linkler */}
                        <div className="flex flex-wrap gap-4 pt-8 border-t border-[#e0dcd3]">
                            <Link to="/gizlilik-politikasi" className="text-[#86AA00] hover:text-[#0b2117] font-semibold transition-colors">
                                Gizlilik Politikası →
                            </Link>
                            <Link to="/kullanim-kosullari" className="text-[#86AA00] hover:text-[#0b2117] font-semibold transition-colors">
                                Kullanım Koşulları →
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

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

export default KvkkPolicy;
