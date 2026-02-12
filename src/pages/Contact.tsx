import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const Contact = () => {
    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            {/* Hero */}
            <Section mood="dark" className="pt-32 pb-20 md:pt-44 md:pb-28">
                <div className="max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-6">İletişim</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Projenizi <span className="italic text-bor-secondary">anlatın</span>
                    </h1>
                    <p className="text-xl text-bor-primary-300 max-w-xl">
                        Ücretsiz demo ve fiyat teklifi için bizimle iletişime geçin.
                    </p>
                </div>
            </Section>

            {/* Contact Content */}
            <Section mood="light" className="py-24">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-bor-primary-900 mb-8">Teklif Talep Formu</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-bor-primary-700 mb-2">Ad Soyad</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-bor-primary-200 focus:border-bor-secondary focus:ring-1 focus:ring-bor-secondary outline-none transition-colors" placeholder="Adınız Soyadınız" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-bor-primary-700 mb-2">Firma</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-bor-primary-200 focus:border-bor-secondary focus:ring-1 focus:ring-bor-secondary outline-none transition-colors" placeholder="Firma Adı" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-bor-primary-700 mb-2">E-posta</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-bor-primary-200 focus:border-bor-secondary focus:ring-1 focus:ring-bor-secondary outline-none transition-colors" placeholder="ornek@firma.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-bor-primary-700 mb-2">Telefon</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-bor-primary-200 focus:border-bor-secondary focus:ring-1 focus:ring-bor-secondary outline-none transition-colors" placeholder="+90 (5XX) XXX XX XX" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-bor-primary-700 mb-2">İlgilendiğiniz Hizmet</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-bor-primary-200 focus:border-bor-secondary focus:ring-1 focus:ring-bor-secondary outline-none transition-colors bg-white">
                                    <option value="">Seçiniz</option>
                                    <option value="ai-production">AI Prodüksiyon (Fotoğraf, Video, Manken)</option>
                                    <option value="digital-growth">Dijital Büyüme (E-ticaret, SEO, Sosyal Medya)</option>
                                    <option value="catalog-web">Dijital Katalog & Web</option>
                                    <option value="all">Tüm Hizmetler Hakkında Bilgi</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-bor-primary-700 mb-2">Mesajınız</label>
                                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-bor-primary-200 focus:border-bor-secondary focus:ring-1 focus:ring-bor-secondary outline-none transition-colors resize-none" placeholder="Projenizi kısaca anlatın..." />
                            </div>

                            <Button size="lg" className="w-full bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-xl h-14 text-lg">
                                Teklif Talep Et
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-bor-primary-900 mb-8">Hızlı İletişim</h2>
                            <p className="text-bor-primary-500 mb-8 leading-relaxed">
                                Form doldurmak yerine direkt iletişime geçmek mi tercih edersiniz?
                                WhatsApp üzerinden hızlıca ulaşabilirsiniz.
                            </p>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/905531832344"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-green-800 text-lg">WhatsApp ile Yazın</div>
                                <div className="text-green-600 text-sm">+90 553 183 23 44 · Hızlı yanıt</div>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@pikselai.com"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-bor-primary-50 border border-bor-primary-200 hover:bg-bor-primary-100 transition-colors cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-full bg-bor-primary-900 flex items-center justify-center shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-bor-primary-900 text-lg">E-posta Gönderin</div>
                                <div className="text-bor-primary-500 text-sm">info@pikselai.com</div>
                            </div>
                        </a>

                        {/* Working Hours */}
                        <div className="p-6 rounded-2xl bg-bor-primary-50 border border-bor-primary-200">
                            <h3 className="font-bold text-bor-primary-900 text-lg mb-4">Çalışma Saatleri</h3>
                            <div className="space-y-2 text-sm text-bor-primary-600">
                                <div className="flex justify-between"><span>Pazartesi - Cuma</span><span className="font-medium">09:00 - 18:00</span></div>
                                <div className="flex justify-between"><span>Cumartesi</span><span className="font-medium">10:00 - 14:00</span></div>
                                <div className="flex justify-between text-bor-primary-400"><span>Pazar</span><span>Kapalı</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

export default Contact;
