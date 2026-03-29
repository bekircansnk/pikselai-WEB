import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const DigitalGrowth = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* ═══════════════════════════════════════════
			    1. HERO
			    ═══════════════════════════════════════════ */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-bor-primary-900">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" alt="Digital Growth" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bor-primary-900 via-bor-primary-900/80 to-bor-primary-900/60" />
                </div>
                <div className="container-custom relative z-10 py-32">
                    <div className="max-w-3xl space-y-8">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary bg-bor-secondary/10 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-bor-secondary animate-pulse" />
                            Dijital Büyüme Çözümleri
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-white mb-6 drop-shadow-2xl">
                            Sadece görsel değil, <br />
                            <span className="italic font-light text-[#E2FF65]">satış üretiyoruz</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-xl mb-8">
                            E-ticaret yönetimi, SEO optimizasyonu, sosyal medya stratejisi ve
                            AI content factory — dijital kanallarınızı uçtan uca yönetiyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                                Strateji Toplantısı Planla
                            </Button>
                            <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14" onClick={() => navigate('/ucretler')}>
                                Ücretleri Gör
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-bold text-white">150+</div>
                                <div className="text-xs text-bor-primary-400">Yönetilen Mağaza</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">%340</div>
                                <div className="text-xs text-bor-primary-400">Ort. Ciro Artışı</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">50M+</div>
                                <div className="text-xs text-bor-primary-400">Toplam Ciro</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
			    2. CAPABILITIES
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-6 border-b border-bor-primary-100">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {[
                        { icon: "🛒", label: "E-Ticaret Yönetimi" },
                        { icon: "🔍", label: "SEO & İçerik" },
                        { icon: "📱", label: "Sosyal Medya" },
                        { icon: "🤖", label: "AI Content Factory" },
                        { icon: "📊", label: "Reklam Yönetimi" },
                        { icon: "📈", label: "Analytics & Raporlama" },
                    ].map((cap, i) => (
                        <a key={i} href={`#growth-${i}`} className="flex items-center gap-2 px-5 py-3 bg-bor-primary-50 rounded-full text-sm font-medium text-bor-primary-700 hover:bg-bor-secondary/10 hover:text-bor-secondary transition-colors whitespace-nowrap shrink-0">
                            <span>{cap.icon}</span> {cap.label}
                        </a>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    3. PROBLEM / SOLUTION
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">
                            Neden Dijital Büyüme?
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-bor-primary-900 mb-6">
                            Güzel görseller <br className="hidden lg:block" />
                            <span className="italic font-light text-[#86AA00]">tek başına satmaz</span>
                        </h2>
                        <div className="space-y-6 text-lg font-light text-bor-primary-600 leading-relaxed">
                            <p>
                                Mükemmel ürün fotoğraflarınız var. Ama doğru kişilere ulaşamıyorsanız, SEO'nuz
                                çalışmıyorsa, sosyal medyanız sessizse — <strong className="text-bor-primary-900">o görseller sadece hard diskte kalır.</strong>
                            </p>
                            <p>
                                PikselAI olarak görsel üretimin ötesine geçip, o görsellerin nerede, nasıl ve kime
                                gösterilmesi gerektiğini de yönetiyoruz. <strong className="text-[#86AA00] italic">Görsel + dijital strateji = satış.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <MetricCard value="%67" label="Müşterilerin ilk izlenimini görseller belirliyor" icon="👁️" />
                        <MetricCard value="%85" label="Online alışverişler SEO'dan başlıyor" icon="🔍" />
                        <MetricCard value="3x" label="Sosyal medya reklamları gelenekselden daha etkili" icon="📱" />
                        <MetricCard value="%340" label="PikselAI müşterilerinin ortalama ciro artışı" icon="🚀" />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    4. HİZMET DETAYLARI — Grid
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Hizmetler</span>
                    <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-6">
                        Uçtan uca <br className="hidden lg:block" />
                        <span className="italic font-light text-[#E2FF65]">dijital büyüme</span>
                    </h2>
                </div>

                {/* E-Ticaret Yönetimi — Tam detay */}
                <div className="grid md:grid-cols-2 gap-8 mb-8" id="growth-0">
                    <div className="relative overflow-hidden rounded-3xl h-[500px] group">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80" alt="E-commerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">E-Ticaret</span>
                            <h3 className="text-3xl font-bold text-white mb-3">E-Ticaret Mağaza Yönetimi</h3>
                            <p className="text-white/80 leading-relaxed max-w-md">
                                Trendyol, Hepsiburada, N11, Amazon Türkiye ve Shopify mağazalarınızı
                                tek çatı altında yönetiyoruz.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <EcomFeature
                            title="Mağaza Kurulumu & Optimizasyon"
                            desc="Sıfırdan mağaza açma, mevcut mağazaları audit edip performans artırma. Anahtar kelime optimizasyonu, kategori düzenleme."
                        />
                        <EcomFeature
                            title="Ürün Listleme & İçerik"
                            desc="Başlık optimizasyonu, SEO uyumlu açıklamalar, A+ içerik tasarımı. Tüm pazaryeri kurallarına uyumlu görsel & metin."
                        />
                        <EcomFeature
                            title="Fiyatlandırma & Stok Takibi"
                            desc="Dinamik fiyatlandırma stratejileri, rakip analizi, stok alarm sistemleri. Karlılık odaklı fiyat yönetimi."
                        />
                        <EcomFeature
                            title="Reklam & Kampanya Yönetimi"
                            desc="Pazaryeri reklamları, flash sale planlama, kupon stratejileri. ROAS odaklı bütçe optimizasyonu."
                        />
                    </div>
                </div>

                {/* SEO & Sosyal Medya */}
                <div className="grid md:grid-cols-12 gap-6">
                    {/* SEO */}
                    <div className="md:col-span-7 group relative overflow-hidden rounded-3xl h-[450px]" id="growth-1">
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80" alt="SEO" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Organik Büyüme</span>
                            <h3 className="text-2xl font-bold text-white mb-3">SEO & İçerik Otomasyonu</h3>
                            <p className="text-white/80 leading-relaxed max-w-lg mb-4">
                                Programmatik SEO ile 1.000'lerce ürün sayfasını optimize ediyoruz.
                                AI ile blog yazıları, ürün açıklamaları üreten content factory sistemi.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Anahtar kelime analizi</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Schema markup</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">İçerik planı</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Link building</span>
                            </div>
                        </div>
                    </div>

                    {/* Sosyal Medya */}
                    <div className="md:col-span-5 group relative overflow-hidden rounded-3xl h-[450px]" id="growth-2">
                        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80" alt="Social Media" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Topluluk</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Sosyal Medya Yönetimi</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                İçerik planı, görsel üretim, hashtag stratejisi, influencer koordinasyonu.
                                350+ paylaşım / ay kapasitesi.
                            </p>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>→ Instagram, TikTok, Pinterest</li>
                                <li>→ Aylık içerik takvimi</li>
                                <li>→ Influencer kampanyaları</li>
                            </ul>
                        </div>
                    </div>

                    {/* AI Content Factory */}
                    <div className="md:col-span-12 group relative overflow-hidden rounded-3xl h-[350px]" id="growth-3">
                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" alt="AI Content Factory" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                        <div className="absolute top-0 bottom-0 left-0 p-10 flex flex-col justify-center max-w-xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Yenilikçi</span>
                            <h3 className="text-3xl font-bold text-white mb-3">AI Content Factory</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                1.000 ürün için 1.000 SEO uyumlu açıklama, 1.000 sosyal medya paylaşımı — AI gücüyle,
                                insan kontrolüyle. Marka ses tonunuza sadık kalarak toplu içerik üretimi.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-bor-secondary">1.000+</div>
                                    <div className="text-white/50 text-xs">İçerik / ay</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-bor-secondary">%90</div>
                                    <div className="text-white/50 text-xs">Zaman tasarrufu</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-bor-secondary">5 dil</div>
                                    <div className="text-white/50 text-xs">Çeviri desteği</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reklam Yönetimi */}
                    <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 h-[350px] flex flex-col justify-between" id="growth-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-4">Performans</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Reklam Yönetimi</h3>
                            <p className="text-bor-primary-300 leading-relaxed">
                                Meta Ads, Google Ads, Trendyol Ads — tüm reklam kanallarınızı tek panelden yönetiyoruz.
                                A/B testi, görsel optimizasyonu, hedef kitle analizi dahil.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">5x+</div>
                                <div className="text-white/50 text-xs">ROAS</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">-%40</div>
                                <div className="text-white/50 text-xs">CPA düşüşü</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">24/7</div>
                                <div className="text-white/50 text-xs">Monitoring</div>
                            </div>
                        </div>
                    </div>

                    {/* Analytics */}
                    <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 h-[350px] flex flex-col justify-between" id="growth-5">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-4">Data</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Analytics & Raporlama</h3>
                            <p className="text-bor-primary-300 leading-relaxed">
                                Tüm kanallarınızı birleştiren tek bir dashboard. Haftalık performans raporları,
                                rakip karşılaştırmaları, büyüme projeksiyonları. Veri odaklı kararlar alın.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Google Analytics</span>
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Meta Business</span>
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Pazaryeri data</span>
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Aylık rapor</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    5. RAKIP KARŞILAŞTIRMA
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Karşılaştırma</span>
                    <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-bor-primary-900 mb-6">
                        Neden PikselAI <br className="hidden lg:block" />
                        <span className="italic font-light text-[#86AA00]">farklı?</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-bor-primary-600 leading-relaxed max-w-xl mx-auto mb-10 mt-4">
                        Geleneksel ajanslar ya görsel üretir ya da dijital strateji yapar. Biz ikisini birleştiriyoruz.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left p-4 text-sm text-bor-primary-500 font-normal border-b border-bor-primary-100">Özellik</th>
                                <th className="p-4 text-sm text-bor-primary-500 font-normal border-b border-bor-primary-100">Geleneksel Ajans</th>
                                <th className="p-4 text-sm font-bold text-bor-secondary border-b-2 border-bor-secondary bg-bor-secondary/5">PikselAI</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <CompareRow feature="Görsel + Dijital Strateji" traditional="Ayrı ayrı" pikselai="Tek çatı altında ✓" />
                            <CompareRow feature="AI İçerik Üretimi" traditional="Manuel" pikselai="Otomatik + İnsan QC ✓" />
                            <CompareRow feature="Pazaryeri Yönetimi" traditional="Sınırlı" pikselai="5+ platform ✓" />
                            <CompareRow feature="SEO Kapasitesi" traditional="50-100 sayfa/ay" pikselai="1.000+ sayfa/ay ✓" />
                            <CompareRow feature="Sosyal Medya İçerik" traditional="8-12 paylaşım/ay" pikselai="30+ paylaşım/ay ✓" />
                            <CompareRow feature="Raporlama" traditional="Aylık PDF" pikselai="Canlı dashboard ✓" />
                            <CompareRow feature="Maliyet" traditional="15.000₺+/ay" pikselai="Daha uygun ✓" />
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    6. SÜREÇ
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">
                            Nasıl Başlıyoruz?
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-6">
                            Sonuç odaklı bir süreç, <br className="hidden lg:block" />
                            <span className="italic font-light text-[#E2FF65]">veri odaklı kararlar</span>
                        </h2>
                        <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed mb-8">
                            Her müşteriyle 30 dakikalık bir keşif toplantısıyla başlıyoruz. Mevcut durumunuzu analiz edip,
                            ölçülebilir hedefler belirliyoruz.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white">%340</div>
                                <div className="text-sm text-bor-primary-400 mt-1">Ort. ciro artışı</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">6 ay</div>
                                <div className="text-sm text-bor-primary-400 mt-1">ROI süresi</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-0">
                        <ProcessTimelineItem number={1} badge="ANALİZ" title="Mevcut Durum Auditi" description="Mağaza, SEO, sosyal medya ve reklam performansınızı detaylı analiz ediyoruz. Fırsat alanlarını ve acil müdahale noktalarını belirliyoruz." isLast={false} />
                        <ProcessTimelineItem number={2} badge="STRATEJİ" title="Yol Haritası Oluşturma" description="3-6-12 aylık hedefler ve KPI'lar belirleyip, haftalık aksiyon planı oluşturuyoruz. Bütçe ve kaynak planlaması dahil." isLast={false} />
                        <ProcessTimelineItem number={3} badge="UYGULAMA" title="Uygulama & Optimizasyon" description="Stratejiyi uygulamaya başlıyoruz. A/B testleri, performans izleme ve sürekli optimizasyon ile büyümeyi hızlandırıyoruz." isLast={false} />
                        <ProcessTimelineItem number={4} badge="RAPORLAMA" title="Ölçüm & Raporlama" description="Haftalık performans raporları, aylık strateji toplantıları. Her kararı veriyle destekliyoruz." isLast={true} />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    7. TESTIMONIALS — Sosyal kanıt
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Müşterilerimiz</span>
                    <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-bor-primary-900 mb-6">
                        Sonuçlar <br className="hidden lg:block" />
                        <span className="italic font-light text-[#86AA00]">kendini anlatıyor</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <TestimonialCard
                        quote="6 ay içinde Trendyol satışlarımız %280 arttı. PikselAI ekibi sadece görsel değil, tüm dijital stratejimizi dönüştürdü."
                        name="Ayşe Kara"
                        role="E-Ticaret Müdürü, Moda Markası"
                        metric="%280 Satış Artışı"
                    />
                    <TestimonialCard
                        quote="SEO çalışmalarıyla organik trafiğimiz 5 kat arttı. Artık reklam bütçesine olan bağımlılığımız çok azaldı."
                        name="Mehmet Demir"
                        role="Kurucu, Kozmetik Markası"
                        metric="5x Organik Trafik"
                    />
                    <TestimonialCard
                        quote="Sosyal medya içeriklerimiz artık profesyonel ajans kalitesinde ama maliyetin yarısına. AI content factory konsepti harika."
                        name="Zehra Yılmaz"
                        role="Pazarlama Direktörü, Aksesuar Markası"
                        metric="%50 Maliyet Tasarrufu"
                    />
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    8. FAQ
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 border-t border-bor-primary-100">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-bor-primary-900 mb-6">
                            Sık Sorulan <br className="hidden lg:block" />
                            <span className="italic font-light text-[#86AA00]">Sorular</span>
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <FaqItem question="Minimum kontrat süresi var mı?" answer="3 aylık minimum çalışma süresi öneriyoruz çünkü dijital büyüme sonuçları zaman alır. Ancak aylık planlar da mevcuttur." />
                        <FaqItem question="Hangi pazaryerlerini yönetiyorsunuz?" answer="Trendyol, Hepsiburada, N11, Amazon Türkiye, Çiçeksepeti ve Shopify/WooCommerce mağazaları. Yeni platformlar talep üzerine eklenir." />
                        <FaqItem question="AI içerik kaliteli mi?" answer="Evet. AI ilk taslağı oluşturur, insan editörlerimiz marka ses tonuna uygunluk, doğruluk ve kalite kontrolünü yapar. Son çıktı %100 insan onaylıdır." />
                        <FaqItem question="Mevcut ajansımla birlikte çalışabilir misiniz?" answer="Evet. Birçok müşterimiz mevcut ajanslarının yanında bizi görsel üretim ve AI content factory için kullanıyor." />
                        <FaqItem question="Sonuçları ne zaman görürüm?" answer="SEO sonuçları 3-6 ay, sosyal medya 1-2 ay, e-ticaret optimizasyonu ise ilk 30 gün içinde ilk sonuçları gösterir." />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    9. FINAL CTA
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-32 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-white mb-6">
                        Dijital büyümeyi <br />
                        <span className="italic font-light text-[#E2FF65]">şansa bırakmayın</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-xl mx-auto mb-10">
                        Ücretsiz bir strateji toplantısıyla fırsat alanlarınızı keşfedin.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-10 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                            Ücretsiz Strateji Toplantısı
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14" onClick={() => navigate('/ucretler')}>
                            Paketleri İncele
                        </Button>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

/* Sub-components */

function MetricCard({ value, label, icon }: { value: string; label: string; icon: string }) {
    return (
        <div className="p-6 rounded-2xl bg-bor-primary-50 border border-bor-primary-100 text-center">
            <div className="text-3xl mb-2">{icon}</div>
            <div className="text-3xl font-bold font-display text-bor-secondary mb-2">{value}</div>
            <div className="text-sm text-bor-primary-500">{label}</div>
        </div>
    );
}

function EcomFeature({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-bor-secondary/30 transition-colors">
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-bor-primary-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function ProcessTimelineItem({ number, badge, title, description, isLast }: { number: number; badge: string; title: string; description: string; isLast: boolean }) {
    return (
        <div className="flex gap-6">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-bor-secondary/30 bg-bor-secondary/10 flex items-center justify-center text-bor-secondary font-bold text-lg shrink-0">
                    {number}
                </div>
                {!isLast && <div className="w-px flex-1 bg-white/10 my-2" />}
            </div>
            <div className="pb-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-bor-secondary/60 block mb-1">{badge}</span>
                <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                <p className="text-bor-primary-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function CompareRow({ feature, traditional, pikselai }: { feature: string; traditional: string; pikselai: string }) {
    return (
        <tr className="border-b border-bor-primary-100">
            <td className="p-4 font-medium text-bor-primary-900">{feature}</td>
            <td className="p-4 text-center text-bor-primary-400">{traditional}</td>
            <td className="p-4 text-center font-bold text-bor-secondary bg-bor-secondary/5">{pikselai}</td>
        </tr>
    );
}

function TestimonialCard({ quote, name, role, metric }: { quote: string; name: string; role: string; metric: string }) {
    return (
        <div className="flex flex-col bg-bor-primary-50 rounded-3xl p-8">
            <div className="bg-bor-secondary/10 text-bor-secondary text-sm font-bold px-4 py-2 rounded-full w-fit mb-6">{metric}</div>
            <blockquote className="text-bor-primary-700 leading-relaxed flex-1 mb-6">"{quote}"</blockquote>
            <div>
                <div className="font-bold text-bor-primary-900">{name}</div>
                <div className="text-sm text-bor-primary-500">{role}</div>
            </div>
        </div>
    );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-bor-primary-200 rounded-2xl overflow-hidden">
            <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-bor-primary-50 transition-colors" onClick={() => setOpen(!open)}>
                <span className="font-bold text-bor-primary-900">{question}</span>
                <span className={`text-bor-secondary text-2xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open && <div className="px-6 pb-5 text-bor-primary-600 leading-relaxed">{answer}</div>}
        </div>
    );
}

export default DigitalGrowth;
