import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const CatalogWeb = () => {
    const navigate = useNavigate();

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* ═══════════════════════════════════════════
			    1. HERO
			    ═══════════════════════════════════════════ */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-bor-primary-900">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000" alt="Catalog Web" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bor-primary-900 via-bor-primary-900/80 to-bor-primary-900/60" />
                </div>
                <div className="container-custom relative z-10 py-32">
                    <div className="max-w-3xl space-y-8">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary bg-bor-secondary/10 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-bor-secondary animate-pulse" />
                            Katalog & Web Çözümleri
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1]">
                            Markanızın dijital <br />
                            <span className="italic text-bor-secondary">vitrini</span>
                        </h1>
                        <p className="text-xl text-bor-primary-300 max-w-xl leading-relaxed">
                            İnteraktif dijital kataloglar, satışa dönüştüren landing page'ler, modern kurumsal web siteleri
                            ve kullanıcı odaklı arayüz tasarımları.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                                Proje Teklifi Al
                            </Button>
                            <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14" onClick={() => navigate('/referanslar')}>
                                Çalışmaları Gör
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-bold text-white">200+</div>
                                <div className="text-xs text-bor-primary-400">Katalog Tasarımı</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-xs text-bor-primary-400">Web Sitesi</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white">%95</div>
                                <div className="text-xs text-bor-primary-400">Müşteri Memnuniyeti</div>
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
                        { icon: "📄", label: "İnteraktif Katalog" },
                        { icon: "🚀", label: "Landing Page" },
                        { icon: "🌐", label: "Web Geliştirme" },
                        { icon: "🎨", label: "UI/UX Tasarım" },
                    ].map((cap, i) => (
                        <a key={i} href={`#catalog-${i}`} className="flex items-center gap-2 px-5 py-3 bg-bor-primary-50 rounded-full text-sm font-medium text-bor-primary-700 hover:bg-bor-secondary/10 hover:text-bor-secondary transition-colors whitespace-nowrap shrink-0">
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
                            Neden Dijital Katalog?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-bor-primary-900 mb-6 leading-tight">
                            PDF kataloglar <br /> <span className="italic">artık yetmiyor</span>
                        </h2>
                        <div className="space-y-6 text-bor-primary-600 leading-relaxed">
                            <p>
                                Müşterilerinize PDF gönderip WhatsApp'tan sipariş almak geçen yılın yöntemi.
                                <strong className="text-bor-primary-900"> Bugünün alıcısı interaktif deneyim istiyor.</strong>
                            </p>
                            <p>
                                Sayfa çevirme efektiyle dijital katalog, tek tıkla sipariş formu,
                                canlı stok bilgisi, PDF/print uyumlu çıktı —
                                <strong className="text-bor-secondary"> hepsi tek platformda.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/50">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm font-bold">✗</span>
                                <span className="font-bold text-red-700">PDF Katalog</span>
                            </div>
                            <ul className="space-y-3 text-sm text-red-600">
                                <li>📝 Statik, güncellemesi zor</li>
                                <li>📊 Analitik yok — kim okudu bilmezsiniz</li>
                                <li>🔗 Linkler çalışmaz, interaktif değil</li>
                                <li>📱 Mobilde kötü deneyim</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50/50 border border-green-200/50">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-sm font-bold">✓</span>
                                <span className="font-bold text-green-700">PikselAI Dijital Katalog</span>
                            </div>
                            <ul className="space-y-3 text-sm text-green-600">
                                <li>✨ Sayfa çevirme efekti, zoom, arama</li>
                                <li>📊 Hangi sayfa kaç kez görüntülendi — detaylı analiz</li>
                                <li>🛒 Ürüne tıkla → direkt sipariş</li>
                                <li>📱 Tüm cihazlarda mükemmel deneyim</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    4. HİZMET DETAYLARI — Grid
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Hizmetler</span>
                    <h2 className="text-3xl md:text-5xl font-display text-white">
                        Dijital <span className="italic">mevcudiyet</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-6">
                    {/* İnteraktif Katalog — Geniş */}
                    <div className="md:col-span-7 group relative overflow-hidden rounded-3xl h-[520px]" id="catalog-0">
                        <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80" alt="Digital Catalog" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">En Popüler</span>
                            <h3 className="text-3xl font-bold text-white mb-3">İnteraktif Dijital Katalog</h3>
                            <p className="text-white/80 leading-relaxed max-w-lg mb-4">
                                Sayfa çevirme efektiyle gerçek kitap deneyimi. Müşterileriniz ürünlere tıklayıp
                                detay görebilir, favori listesi oluşturabilir, doğrudan sipariş verebilir.
                            </p>
                            <div className="grid grid-cols-2 gap-4 max-w-sm">
                                <Feature icon="📊" label="Analytics & Heatmap" />
                                <Feature icon="🔗" label="Paylaşılabilir link" />
                                <Feature icon="📱" label="Responsive tasarım" />
                                <Feature icon="🖨️" label="Print-ready çıktı" />
                            </div>
                        </div>
                    </div>

                    {/* Landing Page */}
                    <div className="md:col-span-5 group relative overflow-hidden rounded-3xl h-[520px]" id="catalog-1">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="Landing Page" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Dönüşüm</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Landing Page Tasarımı</h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Reklam kampanyaları, ürün lansmanları ve lead generation için
                                yüksek dönüşümlü landing page'ler. A/B test desteği dahil.
                            </p>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>→ Lead toplama formları</li>
                                <li>→ Kampanya sayfaları</li>
                                <li>→ Ürün lansman sayfaları</li>
                                <li>→ Webinar kayıt sayfaları</li>
                            </ul>
                        </div>
                    </div>

                    {/* Web Geliştirme — Tam genişlik */}
                    <div className="md:col-span-12 group relative overflow-hidden rounded-3xl h-[400px]" id="catalog-2">
                        <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80" alt="Web Development" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                        <div className="absolute top-0 bottom-0 left-0 p-10 flex flex-col justify-center max-w-xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-2">Kurumsal</span>
                            <h3 className="text-3xl font-bold text-white mb-3">Web Geliştirme</h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Modern, hızlı ve SEO uyumlu web siteleri. Shopify, WooCommerce, Next.js —
                                ihtiyacınıza en uygun teknolojiyle özel çözümler.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["React", "Next.js", "Shopify", "WooCommerce", "WordPress"].map(tech => (
                                    <span key={tech} className="bg-white/10 text-white/80 text-xs px-4 py-2 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* UI/UX Tasarım */}
                    <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 h-[400px] flex flex-col justify-between" id="catalog-3">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-4">Tasarım</span>
                            <h3 className="text-2xl font-bold text-white mb-3">UI/UX Tasarım</h3>
                            <p className="text-bor-primary-300 leading-relaxed mb-6">
                                Kullanıcı odaklı arayüz tasarımları. Wireframe'den prototipe, kullanıcı testinden
                                pixel-perfect tasarıma — UX sürecinin tamamını yürütüyoruz.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <UIXStep step="1" label="Kullanıcı Araştırması" desc="Hedef kitle analizi, competitor benchmark" />
                            <UIXStep step="2" label="Wireframe & IA" desc="Sayfa yapısı, kullanıcı akışları" />
                            <UIXStep step="3" label="UI Tasarım" desc="Pixel-perfect ekran tasarımları" />
                            <UIXStep step="4" label="Prototip & Test" desc="Interaktif prototip, kullanılabilirlik testi" />
                        </div>
                    </div>

                    {/* B2B Katalog */}
                    <div className="md:col-span-6 p-8 rounded-3xl bg-white/5 border border-white/10 h-[400px] flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary block mb-4">B2B</span>
                            <h3 className="text-2xl font-bold text-white mb-3">B2B Toptan Katalog</h3>
                            <p className="text-bor-primary-300 leading-relaxed mb-6">
                                Toptan müşterileriniz için özel B2B sipariş sistemi. Fiyatlandırma,
                                lot bilgileri, barkod eşleştirme ve toplu sipariş formu entegrasyonu.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">Excel</div>
                                <div className="text-white/50 text-xs">Entegrasyon</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">QR</div>
                                <div className="text-white/50 text-xs">Kod desteği</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">PDF</div>
                                <div className="text-white/50 text-xs">Otomatik çıktı</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-bor-secondary">API</div>
                                <div className="text-white/50 text-xs">ERP bağlantı</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    5. ÖRNEK ÇALIŞMALAR — Portfolio
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Portfolyo</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-bor-primary-900">Örnek Çalışmalar</h2>
                    <p className="text-bor-primary-500 mt-4 max-w-xl mx-auto">
                        Gerçek müşteri projeleri. Fotoğraflar güncellenecektir.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80"
                        category="Dijital Katalog"
                        title="Cazador 26 Kış Kataloğu"
                        description="240 sayfa, 500+ ürün, sayfa çevirme efekti, mobil uyumlu. Bayiler için özel B2B sipariş formu."
                        tags={["Interaktif", "B2B", "240 Sayfa"]}
                    />
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
                        category="Kurumsal Web"
                        title="Cazador Kurumsal Sayfa"
                        description="Modern kurumsal web sitesi. Marka hikayesi, ürün kategorileri, bayi ağı haritası, iletişim formu."
                        tags={["Next.js", "SEO", "Responsive"]}
                    />
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                        category="Landing Page"
                        title="Sezon Kampanya Sayfası"
                        description="İndirim kampanyası için yüksek dönüşümlü landing page. A/B test ile %3.2 dönüşüm oranı."
                        tags={["Kampanya", "A/B Test", "%3.2 CR"]}
                    />
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    6. SÜREÇ
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">Proje Süreci</span>
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-4 leading-tight">
                            Fikirden teslimata, <br />
                            <span className="italic">her adımda yanınızdayız</span>
                        </h2>
                        <p className="text-bor-primary-400 leading-relaxed mb-8">
                            Katalog ve web projelerinde şeffaf bir süreç izliyoruz.
                            Her aşamada onayınızı alarak ilerliyoruz.
                        </p>
                    </div>

                    <div className="space-y-0">
                        <ProcessTimelineItem number={1} badge="KEŞİF" title="Brief & İhtiyaç Analizi" description="Markanızı, hedef kitlenizi ve amacınızı anlıyoruz. Mevcut materyalleri review edip fırsat alanlarını belirliyoruz." isLast={false} />
                        <ProcessTimelineItem number={2} badge="TASARIM" title="Konsept & Wireframe" description="3 farklı konsept sunum, sayfa yapısı planı, renk paleti ve tipografi seçimi. Onayınızla detaya geçiyoruz." isLast={false} />
                        <ProcessTimelineItem number={3} badge="GELIŞTIRME" title="Prodüksiyon" description="Onaylanan tasarımı hayata geçiriyoruz. Responsive kontrol, performans optimizasyonu, cross-browser test." isLast={false} />
                        <ProcessTimelineItem number={4} badge="TESLİM" title="Lansman & Destek" description="Projeyi canlıya alıyoruz. Domain, hosting, SSL — teknik detayları biz hallediyoruz. 30 gün ücretsiz destek." isLast={true} />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    7. TEKNOLOJİ STACK
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Teknoloji</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-bor-primary-900">Modern Teknoloji Stack</h2>
                    <p className="text-bor-primary-500 mt-4 max-w-xl mx-auto">
                        İhtiyacınıza en uygun teknolojiyi seçiyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "React / Next.js", desc: "Hızlı, SEO uyumlu SPA & SSR", category: "Frontend" },
                        { name: "Shopify", desc: "E-ticaret mağazaları", category: "E-commerce" },
                        { name: "WordPress", desc: "Blog & kurumsal siteler", category: "CMS" },
                        { name: "WooCommerce", desc: "WordPress e-ticaret", category: "E-commerce" },
                        { name: "Figma", desc: "UI/UX tasarım & prototip", category: "Tasarım" },
                        { name: "Vercel", desc: "Performans odaklı hosting", category: "Altyapı" },
                        { name: "Cloudflare", desc: "CDN & güvenlik", category: "Altyapı" },
                        { name: "FlipHTML5", desc: "İnteraktif katalog motoru", category: "Katalog" },
                    ].map((tech, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-bor-primary-100 hover:border-bor-secondary/30 transition-colors bg-white">
                            <span className="text-xs font-bold uppercase tracking-wider text-bor-secondary block mb-3">{tech.category}</span>
                            <h4 className="font-bold text-bor-primary-900 mb-1">{tech.name}</h4>
                            <p className="text-sm text-bor-primary-500">{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    8. FAQ
			    ═══════════════════════════════════════════ */}
            <Section mood="light" className="py-24 border-t border-bor-primary-100">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-bor-primary-900">Sık Sorulan Sorular</h2>
                    </div>
                    <div className="space-y-4">
                        <FaqItem question="Dijital katalog ne kadar sürede hazır olur?" answer="Katalog boyutuna bağlı olarak 5-15 iş günü. 100 sayfalık standart bir katalog yaklaşık 7 iş gününde teslim edilir." />
                        <FaqItem question="Web sitesi bakımını siz yapıyor musunuz?" answer="Evet. Aylık bakım paketlerimiz içerisinde güncelleme, güvenlik, yedekleme ve performans optimizasyonu yer alır." />
                        <FaqItem question="Mevcut sitemizi yenileyebilir misiniz?" answer="Evet. Mevcut sitenizin audit'ini yapıp, iyileştirme planı sunuyoruz. Komple yenileme ya da kısmi güncelleme — ikisi de mümkün." />
                        <FaqItem question="Hosting dahil mi?" answer="Web projeleri için ilk yıl hosting dahil. Katalog projeleri ise kendi platformumuzda süresiz olarak barındırılır." />
                        <FaqItem question="SEO optimizasyonu yapıyor musunuz?" answer="Evet. Tüm web projelerimiz SEO best practice'lere uygun şekilde geliştiriliyor. Schema markup, meta tag, sitemap, hız optimizasyonu dahil." />
                    </div>
                </div>
            </Section>

            {/* ═══════════════════════════════════════════
			    9. FINAL CTA
			    ═══════════════════════════════════════════ */}
            <Section mood="dark" className="py-32 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-display text-white leading-tight">
                        Markanız dijitalde <br />
                        <span className="italic">nasıl görünmeli?</span>
                    </h2>
                    <p className="text-xl text-bor-primary-300 max-w-xl mx-auto">
                        Ücretsiz bir proje görüşmesiyle başlayalım.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-10 h-14 text-lg" onClick={() => navigate('/iletisim')}>
                            Ücretsiz Proje Teklifi Al
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14" onClick={() => navigate('/referanslar')}>
                            Çalışmaları Gör
                        </Button>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

/* Sub-components */

function Feature({ icon, label }: { icon: string; label: string }) {
    return (
        <div className="flex items-center gap-2 text-white/70 text-sm">
            <span>{icon}</span> {label}
        </div>
    );
}

function UIXStep({ step, label, desc }: { step: string; label: string; desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-bor-secondary/20 flex items-center justify-center text-bor-secondary text-sm font-bold shrink-0">{step}</div>
            <div>
                <div className="text-white font-medium text-sm">{label}</div>
                <div className="text-bor-primary-400 text-xs">{desc}</div>
            </div>
        </div>
    );
}

function ProjectCard({ image, category, title, description, tags }: { image: string; category: string; title: string; description: string; tags: string[] }) {
    return (
        <div className="group rounded-3xl overflow-hidden border border-bor-primary-100 hover:shadow-xl transition-shadow bg-white">
            <div className="relative h-56 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-bor-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{category}</span>
            </div>
            <div className="p-6">
                <h3 className="font-bold text-bor-primary-900 text-lg mb-2">{title}</h3>
                <p className="text-bor-primary-500 text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="bg-bor-primary-50 text-bor-primary-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProcessTimelineItem({ number, badge, title, description, isLast }: { number: number; badge: string; title: string; description: string; isLast: boolean }) {
    return (
        <div className="flex gap-6">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-bor-secondary/30 bg-bor-secondary/10 flex items-center justify-center text-bor-secondary font-bold text-lg shrink-0">{number}</div>
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
            <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-bor-primary-50 transition-colors" onClick={() => setOpen(!open)}>
                <span className="font-bold text-bor-primary-900">{question}</span>
                <span className={`text-bor-secondary text-2xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open && <div className="px-6 pb-5 text-bor-primary-600 leading-relaxed">{answer}</div>}
        </div>
    );
}

export default CatalogWeb;
