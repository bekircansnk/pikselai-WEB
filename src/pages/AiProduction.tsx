import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const AiProduction = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* ═══════════════════════════════════════════
			    1. HERO — Büyük başlık + sosyal kanıt
			    ═══════════════════════════════════════════ */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-bor-primary-900">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=2000" alt="AI Production" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bor-primary-900 via-bor-primary-900/70 to-bor-primary-900/50" />
                </div>
                <div className="container-custom relative z-10 py-32">
                    <div className="max-w-3xl space-y-8">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary bg-bor-secondary/10 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-bor-secondary animate-pulse" />
                            AI-Powered Creative Production
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1]">
                            Fiziksel çekim dönemine <br />
                            <span className="italic text-bor-secondary">son</span>
                        </h1>
                        <p className="text-xl text-bor-primary-300 max-w-xl leading-relaxed">
                            Ürün fotoğrafçılığından sanal manken tasarımına, AI video üretiminden görsel A/B testine —
                            stüdyo yok, manken yok, haftalarca bekleme yok.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                                Ücretsiz Demo Talep Et
                            </Button>
                            <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14" onClick={() => navigate('/ucretler')}>
                                Ücretleri Gör
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-bold text-white tracking-tight">Kusursuz</div>
                                <div className="text-xs text-bor-primary-400">Piksel Kalitesi</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">%80</div>
                                <div className="text-xs text-bor-primary-400">Maliyet Avantajı</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">24-48s</div>
                                <div className="text-xs text-bor-primary-400">Teslim Süresi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
			    2. CAPABILITIES MENU — Yatay kart dizisi
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-6 border-b border-bor-primary-100">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {[
                        { icon: "📸", label: "Ürün Fotoğrafçılığı" },
                        { icon: "👤", label: "Sanal Manken" },
                        { icon: "🎬", label: "AI Video & Reels" },
                        { icon: "✨", label: "Fotoğraf Avantajları" },
                        { icon: "🖼️", label: "Ghost Mannequin" },
                        { icon: "🎨", label: "Görsel İyileştirme" },
                    ].map((cap, i) => (
                        <a key={i} href={`#service-${i}`} className="flex items-center gap-2 px-5 py-3 bg-bor-primary-50 rounded-full text-sm font-medium text-bor-primary-700 hover:bg-bor-secondary/10 hover:text-bor-secondary transition-colors whitespace-nowrap shrink-0">
                            <span>{cap.icon}</span> {cap.label}
                        </a>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    3. PROBLEM / SOLUTION — Neden gerekli?
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">
                            Neden AI Prodüksiyon?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-bor-primary-900 mb-6 leading-tight">
                            Geleneksel çekim süreci <br />
                            <span className="italic">ölçeklenemiyor</span>
                        </h2>
                        <div className="space-y-6 text-bor-primary-600 leading-relaxed">
                            <p>
                                Bir e-ticaret markası olarak her sezon yüzlerce ürün fotoğrafı çekmeniz gerekiyor.
                                Stüdyo kiralama, ekipman, ışıkçı, fotoğrafçı, manken, makyöz...
                                <strong className="text-bor-primary-900"> Hepsi birer maliyet kalemi.</strong>
                            </p>
                            <p>
                                Ya da ürünlerinizi kargolamak, günlerce beklemek,
                                beğenmediğiniz kareleri yeniden çektirmek...
                                <strong className="text-bor-primary-900"> Hepsi birer zaman kaybı.</strong>
                            </p>
                            <p>
                                PikselAI ile bu sürecin tamamını AI'ya taşıyoruz.
                                Ürünün tek bir karesi veya kargo paketiyle
                                <strong className="text-bor-secondary"> dünya standartlarında görseller</strong> üretiyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Before/After İllüstrasyon */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/50">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm font-bold">✗</span>
                                <span className="font-bold text-red-700">Geleneksel Süreç</span>
                            </div>
                            <ul className="space-y-3 text-sm text-red-600">
                                <li className="flex items-start gap-2">⏰ Çekim organizasyonu: 3-5 gün</li>
                                <li className="flex items-start gap-2">💰 Stüdyo + ekip maliyeti: 5.000₺+/gün</li>
                                <li className="flex items-start gap-2">📦 Kargo + bekleme: 3-7 gün</li>
                                <li className="flex items-start gap-2">🔄 Revizyon: Yeniden çekim gerekir</li>
                                <li className="flex items-start gap-2">📊 Tek konsept, tek arka plan</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50/50 border border-green-200/50">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-sm font-bold">✓</span>
                                <span className="font-bold text-green-700">PikselAI Süreci</span>
                            </div>
                            <ul className="space-y-3 text-sm text-green-600">
                                <li className="flex items-start gap-2">⚡ Sipariş → Teslim: 24-48 saat</li>
                                <li className="flex items-start gap-2">💰 Maliyet: Gelenekselin %20'si</li>
                                <li className="flex items-start gap-2">📸 Tek fotoğraf yeterli</li>
                                <li className="flex items-start gap-2">🔄 Sınırsız revizyon</li>
                                <li className="flex items-start gap-2">🎨 10+ farklı konsept ve varyasyon</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    4. BENTO GRID — Detaylı hizmet açıklamaları
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24" id="service-0">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">
                        Ne Yapıyoruz?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display text-white">
                        Her ihtiyaca özel <span className="italic">AI çözümü</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-6">
                    {/* Ürün Fotoğrafçılığı — Tam genişlik, en üstte */}
                    <div className="md:col-span-12 group relative overflow-hidden rounded-3xl h-[400px]" id="service-0">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80" alt="Product Photography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                        <div className="absolute top-0 bottom-0 left-0 p-10 flex flex-col justify-center max-w-xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Temel Hizmet</span>
                            <h3 className="text-3xl font-bold text-white mb-3">Ürün Fotoğrafçılığı</h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Dekupe, beyaz arka plan, renkli arka plan, lifestyle konsept sahneleme, flat lay — tüm
                                e-ticaret görsel formatlarını AI ile üretiyoruz. Pazaryeri kurallarına %100 uyumlu.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">Trendyol</div>
                                    <div className="text-white/50 text-xs">Uyumlu</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">Hepsiburada</div>
                                    <div className="text-white/50 text-xs">Uyumlu</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">Amazon</div>
                                    <div className="text-white/50 text-xs">Uyumlu</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ghost Mannequin — Geniş */}
                    <div className="md:col-span-7 group relative overflow-hidden rounded-3xl h-[500px]" id="service-4">
                        <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80" alt="Ghost Mannequin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">En Popüler</span>
                            <h3 className="text-3xl font-bold text-white mb-3">Ghost Mannequin / Hayalet Manken</h3>
                            <p className="text-white/80 leading-relaxed max-w-lg mb-4">
                                Giysi ürünlerinizi manken üzerinde çekilmiş gibi, 3 boyutlu formda gösterin.
                                İç dikişler görünür, ürün gerçekçi durur. Fiziksel çekimden ayırt edilemez.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">T-Shirt</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Gömlek</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Ceket</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Pantolon</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Elbise</span>
                            </div>
                        </div>
                    </div>

                    {/* Sanal Manken */}
                    <div className="md:col-span-5 group relative overflow-hidden rounded-3xl h-[500px]" id="service-1">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" alt="Virtual Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Yenilikçi</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Sanal Manken Ajansı</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Markanıza özel bir AI manken tasarlayın. Her kampanyada tutarlı yüz,
                                farklı pozlar, farklı kıyafetler. Manken ajansına ödemenin %10'u.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Özel yüz tasarımı</span>
                                <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">Tutarlı marka yüzü</span>
                            </div>
                        </div>
                    </div>

                    {/* AI Video */}
                    <div className="md:col-span-5 group relative overflow-hidden rounded-3xl h-[450px]" id="service-2">
                        <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80" alt="AI Video" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Video</span>
                            <h3 className="text-2xl font-bold text-white mb-3">AI Video & Reels</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Statik ürün fotoğrafından hareketli videolara. Ürün havada döner,
                                kumaş dalgalanır, ışıklar değişir. Instagram & TikTok'a hazır.
                            </p>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>→ Ürün tanıtım videoları</li>
                                <li>→ Reels / Shorts paketi</li>
                                <li>→ Before/After showcase</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fotoğraf Avantajları (Eski A/B Testi) */}
                    {/* Katalog & Sosyal Medya Çekimi — Özet Kutusu */}
                    <div className="md:col-span-7 group relative overflow-hidden rounded-3xl h-[450px]" id="service-3">
                        <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80" alt="Catalog & Social Media AI" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Katalog Kalitesi</span>
                            <h3 className="text-3xl font-bold text-white mb-3">Sosyal Medya ve Katalog Çekimi</h3>
                            <p className="text-white/80 leading-relaxed max-w-lg mb-8">
                                Ürünlerinizi sadece fotoğraflamıyor, onları paylaşıma hazır birer sanat eserine dönüştürüyoruz.
                                Katalog kalitesinde, yüksek çözünürlüklü ve sosyal medya trendlerine tam uyumlu
                                görsellerle markanızın dijital vitrinini baştan yaratın.
                            </p>

                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <div className="text-2xl font-bold text-bor-secondary">HD+</div>
                                    <div className="text-white/50 text-[10px] uppercase tracking-wider">Katalog Kalitesi</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-bor-secondary">100%</div>
                                    <div className="text-white/50 text-[10px] uppercase tracking-wider">Paylaşıma Hazır</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-bor-secondary">AI</div>
                                    <div className="text-white/50 text-[10px] uppercase tracking-wider">Trend Odaklı</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Görsel İyileştirme */}
                    <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 h-[350px] flex flex-col justify-between" id="service-5">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-4">Ek Hizmet</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Görsel İyileştirme & Renk Düzeltme</h3>
                            <p className="text-bor-primary-300 leading-relaxed">
                                Mevcut fotoğraflarınızı AI ile temizler, renk düzeltir, arka plan değiştirir.
                                Düşük çözünürlüklü görselleri yükseltir, gürültüyü temizler, marka tutarlılığını sağlar.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Arka plan değiştirme</span>
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Renk düzeltme</span>
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Çözünürlük artırma</span>
                            <span className="bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">Batch işleme</span>
                        </div>
                    </div>

                    {/* Toplu Üretim */}
                    <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 h-[350px] flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-4">Ölçek</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Toplu Görsel Üretim</h3>
                            <p className="text-bor-primary-300 leading-relaxed">
                                100'lerce ürün için tek seferde görsel üretin. Tutarlı marka dili,
                                aynı ışık, aynı arka plan, aynı kalite. E-ticaret sitelerine toplu yüklemeye hazır formatlar.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">100+</div>
                                <div className="text-white/50 text-xs">Ürün / sipariş</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">CSV</div>
                                <div className="text-white/50 text-xs">Format çıktı</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">API</div>
                                <div className="text-white/50 text-xs">Entegrasyon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>



            {/* ═══════════════════════════════════════════
			    6. SÜREÇ — Numaralı timeline
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">
                            Nasıl Çalışır?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-4 leading-tight">
                            Markanızın hak ettiği <br />
                            <span className="italic">desteği sunmak için tasarlandı</span>
                        </h2>
                        <p className="text-bor-primary-400 leading-relaxed mb-8">
                            Doğru insanları bulmak sadece ilk adım. Sürecimiz de en az ekibimiz kadar kaliteli —
                            onboarding'den teslimata, her aşamada sorunsuz iş birliği.
                        </p>
                        <div className="flex gap-8 text-left">
                            <div>
                                <div className="text-3xl font-bold text-white tracking-tight">Dijital</div>
                                <div className="text-sm text-bor-primary-400 mt-1">Üretim Hattı</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white tracking-tight">Ölçekli</div>
                                <div className="text-sm text-bor-primary-400 mt-1">Büyüme Odaklı</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-0">
                        <ProcessTimelineItem
                            number={1}
                            badge="DİJİTAL"
                            title="Ürün detaylarını iletin"
                            description="Web sayfanızın linkini paylaşın veya mevcut fotoğraflarınızı yükleyin. Ürün grubuna göre ihtiyaç duyulan görsel açıları hızlıca belirliyoruz."
                            isLast={false}
                        />
                        <ProcessTimelineItem
                            number={2}
                            badge="KREATİF"
                            title="Brief & stil belirleme"
                            description="Sanal manken, konsept sahne veya ghost mannequin... Arka plan, ışık tarzı ve marka kimliğinize uygun stil tercihlerini netleştiriyoruz."
                            isLast={false}
                        />
                        <ProcessTimelineItem
                            number={3}
                            badge="AI-ÜRETİM"
                            title="Yapay zeka iş başında"
                            description="Kreatif ekibimiz AI motorlarını sizin için çalıştırır. Her görsel kalite kontrolünden geçer ve marka standartlarınıza %100 uyum sağlar."
                            isLast={false}
                        />
                        <ProcessTimelineItem
                            number={4}
                            badge="MÜKEMMELİYET"
                            title="Teslim & stil uyumu"
                            description="24-48 saatte görseller hazır. İlk kurulum sürecinde markanızın görsel dilini tam yakalamak için sınırsız revizyon imkanı sunuyoruz."
                            isLast={true}
                        />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    7. PORTFOLIO — Örnek çalışmalar
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Portfolyo</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-bor-primary-900">
                        Çalışmalarımızdan örnekler
                    </h2>
                    <p className="text-bor-primary-500 mt-4 max-w-xl mx-auto">
                        Bu görseller gerçek müşteri projelerindendir. Fotoğraflar gerçek ürünler yüklendiğinde güncellenecektir.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80", label: "Ghost Mannequin" },
                        { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80", label: "Sanal Manken" },
                        { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80", label: "Ürün Dekupe" },
                        { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80", label: "Lifestyle" },
                        { src: "https://images.unsplash.com/photo-1515562141589-67f0d89b7a68?auto=format&fit=crop&q=80", label: "Aksesuar" },
                        { src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80", label: "Flat Lay" },
                        { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80", label: "Konsept Sahne" },
                        { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80", label: "A/B Test" },
                    ].map((img, i) => (
                        <div key={i} className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square">
                            <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                                <span className="text-white font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    8. FAQ — Sık sorulan sorular
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 border-t border-bor-primary-100">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-bor-primary-900">Sık Sorulan Sorular</h2>
                    </div>

                    <div className="space-y-4">
                        <FaqItem
                            question="AI ile üretilen görseller gerçekçi mi?"
                            answer="Evet. AI modellerimiz milyonlarca gerçek fotoğrafla eğitilmiştir. Ürettiğimiz görseller fiziksel çekimden ayırt edilemez kalitededir. Ayrıca her görsel insan gözüyle kontrol edilir."
                        />
                        <FaqItem
                            question="Minimum sipariş adedi var mı?"
                            answer="Hayır. Tek bir ürün için bile sipariş verebilirsiniz. Ancak toplu siparişlerde birim başına maliyet düşer — 100+ ürün için özel fiyatlandırma yapıyoruz."
                        />
                        <FaqItem
                            question="Ürünü kargolamamal mıyım?"
                            answer="Zorunlu değil. Eğer iyi kalitede bir ürün fotoğrafınız varsa, onunla da çalışabiliriz. Ancak ghost mannequin gibi hizmetlerde fiziksel ürün daha iyi sonuç verir."
                        />
                        <FaqItem
                            question="Teslim süresi ne kadar?"
                            answer="Standart siparişler 24-48 saat içinde teslim edilir. Acil işler için aynı gün teslim de mümkündür (ek ücretle). Toplu siparişlerde süre ürün sayısına göre değişir."
                        />
                        <FaqItem
                            question="Pazaryeri standartlarına uygun mu?"
                            answer="Evet. Trendyol, Hepsiburada, Amazon, N11 ve diğer pazaryerlerinin tüm görsel kurallarına uygun çıktılar üretiyoruz. Beyaz arka plan, minimum boyut, dosya formatı — hepsi standarda uygun."
                        />
                        <FaqItem
                            question="Revizyon hakkım var mı?"
                            answer="Üretim kaynaklı teknik hatalarda veya marka standartlarına uymayan durumlarda sınırsız revizyon hakkınız bulunmaktadır. Kişisel beğeni veya konsept değişikliği taleplerinde ise seçilen pakete göre revizyon hakları tanımlanmaktadır."
                        />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    9. FINAL CTA
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-32 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-display text-white leading-tight">
                        Hangi fotoğrafın sattıracağını <br />
                        <span className="italic">tahmin etmeyin</span>
                    </h2>
                    <p className="text-xl text-bor-primary-300 max-w-xl mx-auto">
                        10 farklı varyasyonu üretip test edelim. Ücretsiz demo ile farkı görün.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-10 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                            Ücretsiz Demo Talep Et
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14" onClick={() => navigate('/ucretler')}>
                            Ücretleri Gör
                        </Button>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

/* ═══════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════ */



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

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-bor-primary-200 rounded-2xl overflow-hidden">
            <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-bor-primary-50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <span className="font-bold text-bor-primary-900">{question}</span>
                <span className={`text-bor-secondary text-2xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open && (
                <div className="px-6 pb-5 text-bor-primary-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default AiProduction;
