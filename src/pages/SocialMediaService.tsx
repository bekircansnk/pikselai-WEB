import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const SocialMediaService = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* ═══════════════════════════════════════════
       1. HERO SECTION
       ═══════════════════════════════════════════ */}
            <Section mood="dark" className="pt-32 pb-20 bg-bor-primary-900 border-b border-white/5">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f72585] bg-[#f72585]/10 px-4 py-2 rounded-full border border-[#f72585]/20">
                            <span className="w-2 h-2 rounded-full bg-[#f72585] animate-pulse" />
                            Yeni Nesil İçerik Üretimi
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display text-white leading-tight">
                            PikselAI ile Sosyal Medya <br />
                            <span className="italic font-light text-[#f72585]">Yönetimi & Strateji</span>
                        </h1>
                        <p className="text-xl text-bor-primary-200 max-w-2xl mx-auto leading-relaxed">
                            Veri odaklı stratejiler, estetik tasarımlar ve yapay zeka hızıyla <br className="hidden md:block" />
                            markanızın dijital dünyadaki sesini güçlendiriyoruz.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button variant="primary" size="lg" className="bg-[#f72585] hover:bg-[#b5179e] border-transparent" onClick={() => navigate('/iletisim')}>
                            Markanızı Büyütün
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>
                            Paketleri İncele
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="h-8 md:h-10 hover:scale-110 transition-transform" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 md:h-8 brightness-0 invert" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="h-6 md:h-8 hover:scale-110 transition-transform" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-8 md:h-10 hover:scale-110 transition-transform" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/ebd/Tiktok_logo.svg" alt="TikTok" className="h-6 md:h-8 brightness-0 invert hover:brightness-100 hover:filter-none" />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       2. WHO IS IT FOR?
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-bor-primary-50">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-display text-bor-primary-900 mb-6">Bu Hizmet <span className="text-[#f72585]">Kimler İçin?</span></h2>
                    <p className="text-bor-primary-500 text-lg leading-relaxed">
                        Farklı sektörlerden ve ölçeklerden markalar için özelleştirilmiş sosyal medya çözümleri sunuyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[
                        { icon: "🛍️", title: "E-Ticaret Markaları", desc: "Ürünlerini sosyal medyada sergilemek, mağaza trafiğini artırmak ve satışa dönüştürmek isteyenler." },
                        { icon: "🏢", title: "Kurumsal Şirketler", desc: "Prestijli bir marka kimliği oluşturmak, LinkedIn ve Instagram'da profesyonel bir duruş sergilemek isteyenler." },
                        { icon: "👨‍💻", title: "Kişisel Markalar", desc: "Kendi uzmanlığını öne çıkarmak, takipçi kitlesini büyütmek ve sektör lideri olmak isteyen profesyoneller." },
                        { icon: "🏨", title: "Hizmet Sektörü", desc: "Oteller, restoranlar, klinikler ve danışmanlık firmaları için randevu ve müşteri kazanımı odaklı yönetim." },
                        { icon: "🚀", title: "Start-up'lar", desc: "Hızlı büyüme (growth hacking) stratejileriyle, kısıtlı bütçeyle maksimum etkileşim hedefleyen girişimler." },
                        { icon: "🎓", title: "Eğitim & Akademi", desc: "Bilgi içerikli paylaşımlarla topluluk oluşturmak ve kurs/eğitim satışı yapmak isteyen kurumlar." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-bor-primary-100 hover:border-[#f72585]/30 transition-all hover:shadow-xl group flex flex-col items-start pb-10">
                            <div className="w-14 h-14 rounded-xl bg-[#f72585]/5 text-3xl flex items-center justify-center mb-6 group-hover:bg-[#f72585]/10 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-bor-primary-900 mb-3">{item.title}</h3>
                            <p className="text-bor-primary-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       3. PROCESS
       ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24 bg-bor-primary-900">
                <div className="text-center mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f72585] block mb-4">AKIŞ</span>
                    <h2 className="text-4xl font-display text-white mb-4">PikselAI <span className="italic text-[#f72585]">Yönetim Süreci</span></h2>
                    <p className="text-white/60">Etkileşimden satışa giden 6 adımlı yolculuk.</p>
                </div>

                <div className="max-w-5xl mx-auto space-y-12 relative px-4">
                    {/* Central Line */}
                    <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f72585] via-white/10 to-transparent transform md:-translate-x-1/2" />

                    {[
                        { step: "01", title: "Hesap Audit & Analiz", desc: "Mevcut hesaplarınızın sağlık durumunu, takipçi kitlenizi ve rakiplerinizi detaylıca inceliyoruz." },
                        { step: "02", title: "İçerik Stratejisi (Pillar)", desc: "Markanızın konuşacağı ana konuları (Content Pillars) ve görsel dilini (Tone of Voice) belirliyoruz." },
                        { step: "03", title: "Üretim & Tasarım", desc: "Profesyonel grafik tasarım, video kurgu ve AI destekli metin yazımıyla aylık takvimi hazırlıyoruz." },
                        { step: "04", title: "Onay & Planlama", desc: "Hazırlanan içerikleri onayınıza sunuyor, revizeler sonrası en doğru saatlere zamanlıyoruz." },
                        { step: "05", title: "Topluluk Yönetimi", desc: "Gelen yorumlara ve mesajlara marka dilinize uygun şekilde yanıt veriyor, etkileşimi canlı tutuyoruz." },
                        { step: "06", title: "Raporlama & Optimize", desc: "Ay sonunda erişim, etkileşim ve dönüşüm verilerini raporluyor, sonraki ayı bu verilere göre planlıyoruz." }
                    ].map((item, i) => (
                        <div key={i} className={`flex flex-col md:flex-row gap-8 relative items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                            {/* Number Bubble */}
                            <div className="w-16 h-16 rounded-full bg-bor-primary-900 border-4 border-[#f72585] text-white font-bold text-xl flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(247,37,133,0.5)]">
                                {item.step}
                            </div>

                            {/* Text Content */}
                            <div className={`w-full md:w-[calc(50%-40px)] bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#f72585]/50 transition-colors backdrop-blur-sm ${i % 2 !== 0 ? 'mr-auto' : 'ml-auto'}`}>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       4. PACKAGES
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-white" id="packages">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display text-bor-primary-900 mb-4">Sosyal Medya <span className="text-[#f72585]">Paketleri</span></h2>
                    <p className="text-bor-primary-500">Hedeflerinize ve yoğunluğunuza uygun esnek planlar.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {/* Paket 1 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-bor-primary-100 flex flex-col hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-bor-primary-200 group-hover:bg-[#f72585] transition-colors" />
                        <h3 className="text-2xl font-bold text-bor-primary-900 mb-2">Başlangıç (Visibility)</h3>
                        <p className="text-sm text-bor-primary-500 mb-6">Varlığını korumak ve düzenli paylaşım yapmak isteyenler.</p>
                        <div className="text-4xl font-display font-bold text-bor-primary-900 mb-8">₺25.000 <span className="text-sm font-sans font-normal text-bor-primary-400">/ay</span></div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                                {["Haftada 3 Paylaşım (Post/Reels)", "Aylık İçerik Takvimi", "Temel Grafik Tasarım", "Hazır Hashtag Analizi", "Aylık Performans Raporu", "DM/Yorum Yanıtlama (Sınırlı)"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-bor-primary-600">
                                        <span className="w-5 h-5 rounded-full bg-[#f72585]/10 text-[#f72585] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="outline" className="w-full hover:bg-[#f72585] hover:text-white hover:border-[#f72585]" onClick={() => navigate('/iletisim')}>Bilgi Al</Button>
                    </div>

                    {/* Paket 2 (Featured) */}
                    <div className="bg-bor-primary-900 rounded-[2rem] p-8 border border-[#f72585] flex flex-col shadow-2xl relative transform md:-translate-y-4 z-10">
                        <div className="absolute top-0 right-0 bg-[#f72585] text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">En Popüler</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Büyüme (Growth)</h3>
                        <p className="text-sm text-white/60 mb-6">Hızlı takipçi kazanımı ve etkileşim hedefleyenler.</p>
                        <div className="text-4xl font-display font-bold text-white mb-8">₺45.000 <span className="text-sm font-sans font-normal text-white/40">/ay</span></div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                                {["Haftada 5 Paylaşım (Post/Reels)", "Profesyonel Video Kurgu (Reels)", "Özel Grafik Tasarım & Carousel", "Stratejik Hashtag & Rakip Analizi", "Reklam Yönetimi (Meta Ads)", "Influencer İletişimi", "Detaylı Aylık Rapor & Toplantı"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                                        <span className="w-5 h-5 rounded-full bg-[#f72585] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="primary" className="w-full py-4 text-lg bg-[#f72585] hover:bg-[#b5179e]" onClick={() => navigate('/iletisim')}>Hemen Başlayın</Button>
                    </div>

                    {/* Paket 3 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-bor-primary-100 flex flex-col hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-bor-primary-200 group-hover:bg-[#4361ee] transition-colors" />
                        <h3 className="text-2xl font-bold text-bor-primary-900 mb-2">Kurumsal (Prestige)</h3>
                        <p className="text-sm text-bor-primary-500 mb-6">Çoklu platform ve yüksek prodüksiyon ihtiyacı olanlar.</p>
                        <div className="text-4xl font-display font-bold text-bor-primary-900 mb-8">₺75.000 <span className="text-sm font-sans font-normal text-bor-primary-400">/ay</span></div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                                {["Her gün Paylaşım (7/24 Aktif)", "Profesyonel Fotoğraf & Video Çekimi", "Omnichannel (IG, TikTok, LinkedIn, YT)", "Kriz Yönetimi & PR Desteği", "Canlı Yayın & Etkinlik Kurgusu", "Özel Topluluk Yöneticisi (CM)", "Haftalık Check-up Toplantıları"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-bor-primary-600">
                                        <span className="w-5 h-5 rounded-full bg-[#4361ee]/10 text-[#4361ee] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="outline" className="w-full hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee]" onClick={() => navigate('/iletisim')}>Teklif İste</Button>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       5. WHY PIKSELAI?
       ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24 bg-bor-primary-950">
                <div className="flex flex-col md:flex-row gap-16 items-center px-4">
                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f72585] block mb-4">NEDEN BİZ?</span>
                            <h2 className="text-4xl font-display text-white mb-6">Algoritmayı Bilen <br /> <span className="italic text-[#f72585]">Yaratıcı Zekalar</span></h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Trend Avcısı", desc: "Viral sesleri, akımları ve güncel konuları (Real-time marketing) anlık takip ediyor, markanıza uyarlıyoruz." },
                                { title: "Veri Odaklı Tasarım", desc: "Hangi renklerin, hangi formatların daha çok tıklandığını analiz ediyor, tasarımları buna göre optimize ediyoruz." },
                                { title: "Platforma Özel Dil", desc: "LinkedIn'de kurumsal, TikTok'ta samimi. Her platformun dinamiklerine uygun içerik dili geliştiriyoruz." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-[#f72585]/20 flex items-center justify-center shrink-0 group-hover:bg-[#f72585] group-hover:text-white transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-[#f72585] ring-4 ring-[#f72585]/20 group-hover:bg-white group-hover:ring-white/20" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute -inset-4 bg-[#f72585]/20 rounded-[3rem] blur-2xl opacity-50" />
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80" alt="Social Media Dashboard" className="w-full transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                                <div className="text-white">
                                    <div className="text-sm font-bold uppercase tracking-widest text-[#f72585] mb-2">Canlı Etkileşim</div>
                                    <div className="text-3xl font-display font-bold">Milyonlarca Gösterim</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
       6. FAQ
       ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 bg-bor-primary-50">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-primary-400 block mb-4">AKLINIZA TAKILANLAR</span>
                        <h2 className="text-3xl font-display text-bor-primary-900 mb-4">Sıkça Sorulan <span className="text-[#f72585]">Sorular</span></h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Takipçi satın alıyor musunuz?", a: "Hayır, asla. Biz sadece organik büyüme ve hedef kitle odaklı reklam stratejileri ile gerçek ve etkileşime giren takipçiler kazanmanızı sağlıyoruz. Bot takipçi marka imajına zarar verir." },
                            { q: "İçerikleri kim hazırlıyor?", a: "Alanında uzman grafik tasarımcılarımız, video kurgu ekibimiz ve metin yazarlarımız (copywriter) markanız için özel olarak çalışır. Siz sadece onay verirsiniz." },
                            { q: "Hangi platformlarda yönetiyorsunuz?", a: "Instagram, TikTok, LinkedIn, YouTube Shorts, Facebook, Pinterest ve Twitter (X) platformlarında profesyonel yönetim sağlıyoruz." },
                            { q: "Sözleşme süresi nedir?", a: "Stratejilerin oturması ve sonuç vermesi için en az 3 aylık çalışma öneriyoruz. Ancak memnuniyet odaklı çalıştığımız için aylık yenileme opsiyonumuz da mevcuttur." }
                        ].map((item, i) => (
                            <div key={i} className="group border border-bor-primary-200 rounded-2xl p-6 bg-white hover:border-[#f72585]/50 transition-all hover:shadow-md cursor-pointer">
                                <h3 className="font-bold text-bor-primary-900 mb-2 flex justify-between items-center text-lg">
                                    {item.q}
                                    <span className="w-8 h-8 rounded-full bg-bor-primary-50 text-bor-primary-400 flex items-center justify-center group-hover:bg-[#f72585] group-hover:text-white transition-colors">?</span>
                                </h3>
                                <p className="text-bor-primary-600 text-sm leading-relaxed pr-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
                7. CTA
                ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-20 bg-bor-primary-900">
                <div className="bg-gradient-to-br from-bor-primary-800 to-bor-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f72585]/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-[#f72585]/20 transition-colors duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4361ee]/10 rounded-full blur-[100px] -ml-32 -mb-32 group-hover:bg-[#4361ee]/20 transition-colors duration-1000" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                            Sosyal Medyada <br />
                            <span className="text-[#f72585] italic">Yıldızınız Parlasın</span>
                        </h2>
                        <p className="text-bor-primary-200 text-lg">
                            Markanızın sosyal medya karnesini çıkarmak için ücretsiz audit talep edin.
                            Neleri daha iyi yapabiliriz, birlikte bakalım.
                        </p>
                        <Button variant="primary" size="lg" className="min-w-[200px] h-14 text-lg bg-[#f72585] hover:bg-[#b5179e]" onClick={() => navigate('/iletisim')}>
                            Ücretsiz Hesap Analizi
                        </Button>
                    </div>
                </div>
            </Section>

        </MainLayout>
    );
};

export default SocialMediaService;
