import { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SEOHead, createLocalBusinessSchema } from '../components/seo/SEOHead';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        adSoyad: '',
        firma: '',
        eposta: '',
        telefon: '',
        hizmet: '',
        mesaj: ''
    });

    const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateMessage = () => {
        return `Merhaba, siteniz üzerinden yeni bir teklif talebim var:\n\n*Ad Soyad:* ${formData.adSoyad}\n*Firma:* ${formData.firma}\n*E-posta:* ${formData.eposta}\n*Telefon:* ${formData.telefon}\n*İlgilenilen Hizmet:* ${formData.hizmet || 'Belirtilmedi'}\n*Mesaj:* ${formData.mesaj}`;
    };

    const handleWhatsappSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.adSoyad) {
            alert('Lütfen Ad Soyad alanını doldurun.');
            return;
        }

        const text = generateMessage();
        const url = `https://wa.me/905531832344?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const handleMailSubmit = () => {
        // Form boş mu diye kontrol edelim
        if (!formData.adSoyad) {
            alert('Lütfen e-posta göndermeden önce en azından Ad Soyad alanını doldurun.');
            return;
        }

        // E-Posta uygulamasını başlat
        window.location.href = getDynamicMailUrl();
    };

    const getDynamicMailUrl = () => {
        if (!formData.adSoyad && !formData.mesaj) return "mailto:bilgi@pikselai.com";
        const text = generateMessage();
        const subject = `İletişim Talebi - ${formData.firma || formData.adSoyad}`;
        return `mailto:bilgi@pikselai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    };

    const getDynamicWhatsappUrl = () => {
        if (!formData.adSoyad && !formData.mesaj) return "https://wa.me/905531832344";
        const text = generateMessage();
        return `https://wa.me/905531832344?text=${encodeURIComponent(text)}`;
    };


    return (
        <MainLayout transparentHeader={true} headerLightText={true}>
            <SEOHead
                title="İletişim — Ücretsiz Demo ve Teklif Alın"
                description="PikselAI ile iletişime geçin. Yapay zeka destekli ürün fotoğrafçılığı, e-ticaret ve sosyal medya hizmetleri için ücretsiz demo talep edin."
                canonical="/iletisim"
                jsonLd={createLocalBusinessSchema()}
            />
            {/* HERO SECTION */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-[#0b2117]">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#caf265]/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#caf265]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl relative z-10 mx-auto text-center px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#caf265]/30 bg-[#caf265]/10 text-[#caf265] text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(202,242,101,0.05)] backdrop-blur-sm">
                            <MessageSquare size={14} /> İLETİŞİM
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-6 drop-shadow-2xl">
                            Projenizi <br className="hidden md:block" />
                            <span className="italic font-light text-[#caf265]">anlatın</span>
                        </h1>
                        <p className="text-lg text-[#a8b8af] max-w-2xl mx-auto leading-relaxed font-light">
                            Ücretsiz demo, detaylı danışmanlık veya fiyat teklifi için bizimle iletişime geçin. Dijital dünyadaki hedeflerinizi gerçeğe dönüştürmek için buradayız.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* FORM AND INFO SECTION */}
            <Section className="py-24 bg-[#F4EFE6]">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-7xl mx-auto px-6 md:px-12">

                    {/* LEFT AREA: Form */}
                    <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-[#0b2117]/5 border border-[#e0dcd3]">
                        <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-8">
                            Teklif Talep Formu
                        </h2>

                        <form className="space-y-6" onSubmit={handleWhatsappSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#3a5245] mb-2 pl-1">Ad Soyad *</label>
                                    <input
                                        type="text"
                                        name="adSoyad"
                                        value={formData.adSoyad}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EFE6]/50 border border-[#e0dcd3] focus:border-[#caf265] focus:bg-white focus:ring-4 focus:ring-[#caf265]/20 outline-none transition-all placeholder-[#a8b8af]"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#3a5245] mb-2 pl-1">Firma</label>
                                    <input
                                        type="text"
                                        name="firma"
                                        value={formData.firma}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EFE6]/50 border border-[#e0dcd3] focus:border-[#caf265] focus:bg-white focus:ring-4 focus:ring-[#caf265]/20 outline-none transition-all placeholder-[#a8b8af]"
                                        placeholder="Firma Adı"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#3a5245] mb-2 pl-1">E-posta</label>
                                    <input
                                        type="email"
                                        name="eposta"
                                        value={formData.eposta}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EFE6]/50 border border-[#e0dcd3] focus:border-[#caf265] focus:bg-white focus:ring-4 focus:ring-[#caf265]/20 outline-none transition-all placeholder-[#a8b8af]"
                                        placeholder="ornek@firma.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#3a5245] mb-2 pl-1">Telefon</label>
                                    <input
                                        type="tel"
                                        name="telefon"
                                        value={formData.telefon}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EFE6]/50 border border-[#e0dcd3] focus:border-[#caf265] focus:bg-white focus:ring-4 focus:ring-[#caf265]/20 outline-none transition-all placeholder-[#a8b8af]"
                                        placeholder="+90 (5XX) XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#3a5245] mb-2 pl-1">İlgilendiğiniz Hizmet</label>
                                <div className="relative">
                                    <select
                                        name="hizmet"
                                        value={formData.hizmet}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-[#F4EFE6]/50 border border-[#e0dcd3] focus:border-[#caf265] focus:bg-white focus:ring-4 focus:ring-[#caf265]/20 outline-none transition-all text-[#0b2117] appearance-none"
                                    >
                                        <option value="">Seçiniz</option>
                                        <option value="Yapay Zeka (AI) Prodüksiyon (Fotoğraf, Video, Manken)">Yapay Zeka (AI) Prodüksiyon (Fotoğraf, Video, Manken)</option>
                                        <option value="Shopify & E-ticaret Sistemleri">Shopify & E-ticaret Sistemleri</option>
                                        <option value="Dijital Pazarlama & Sosyal Medya">Dijital Pazarlama & Sosyal Medya</option>
                                        <option value="Kurumsal Web ve Yazılım Çözümleri">Kurumsal Web ve Yazılım Çözümleri</option>
                                        <option value="Tüm Hizmetler">Tüm Hizmetler Hakkında Bilgi</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#a8b8af]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#3a5245] mb-2 pl-1">Mesajınız</label>
                                <textarea
                                    rows={4}
                                    name="mesaj"
                                    value={formData.mesaj}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-2xl bg-[#F4EFE6]/50 border border-[#e0dcd3] focus:border-[#caf265] focus:bg-white focus:ring-4 focus:ring-[#caf265]/20 outline-none transition-all resize-none placeholder-[#a8b8af]"
                                    placeholder="Projenizden veya hedeflerinizden kısaca bahsedin..."
                                />
                            </div>

                            <div className="pt-4 flex flex-col gap-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 rounded-2xl px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 group shadow-[0_8px_30px_rgba(37,211,102,0.25)]"
                                >
                                    <WhatsappIcon size={24} className="group-hover:scale-110 transition-transform" />
                                    WhatsApp Üzerinden Gönder
                                </button>

                                <button
                                    type="button"
                                    onClick={handleMailSubmit}
                                    className="w-full bg-[#0b2117] text-[#F4EFE6] hover:bg-[#153828] transition-all duration-300 rounded-2xl px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 group"
                                >
                                    <Mail size={22} className="group-hover:scale-110 transition-transform opacity-80" />
                                    E-Posta İle Gönder
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT AREA: Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight tracking-tight text-[#0b2117] mb-6">
                                Direkt <span className="italic font-light text-[#86AA00]">İletişim</span>
                            </h2>
                            <p className="text-[#3a5245] text-lg font-light leading-relaxed mb-8">
                                Form doldurmak yerine doğrudan kanallardan projenizi anlatmak isterseniz, ekibimize anında ulaşabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* WhatsApp Card */}
                            <a
                                href={getDynamicWhatsappUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-[#e0dcd3] hover:border-[#caf265] hover:shadow-lg transition-all group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <WhatsappIcon size={28} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-[#0b2117] text-lg mb-1">WhatsApp Hattı</div>
                                    <div className="text-[#3a5245] text-sm">+90 553 183 23 44</div>
                                </div>
                                <div className="text-[#a8b8af] group-hover:text-[#0b2117] group-hover:translate-x-1 transition-all">
                                    <ArrowRight size={20} />
                                </div>
                            </a>

                            {/* Email Card */}
                            <a
                                href={getDynamicMailUrl()}
                                className="flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-[#e0dcd3] hover:border-[#caf265] hover:shadow-lg transition-all group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#0b2117]/5 text-[#0b2117] group-hover:bg-[#0b2117] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <Mail size={28} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-[#0b2117] text-lg mb-1">E-posta Gönderin</div>
                                    <div className="text-[#3a5245] text-sm">bilgi@pikselai.com</div>
                                </div>
                                <div className="text-[#a8b8af] group-hover:text-[#0b2117] group-hover:translate-x-1 transition-all">
                                    <ArrowRight size={20} />
                                </div>
                            </a>

                            {/* Location Card */}
                            <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-[#e0dcd3]">
                                <div className="w-16 h-16 rounded-full bg-[#0b2117]/5 text-[#0b2117] flex items-center justify-center shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-[#0b2117] text-lg mb-1">Konum</div>
                                    <div className="text-[#3a5245] text-sm">Başakşehir / İstanbul</div>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="p-8 rounded-[2rem] bg-[#0b2117] text-[#F4EFE6] border mt-8">
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#caf265]"></div>
                                Çalışma Saatleri
                            </h3>
                            <div className="space-y-4 text-sm font-light">
                                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                    <span className="text-[#a8b8af]">Pazartesi - Cuma</span>
                                    <span className="font-medium text-white">09:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                    <span className="text-[#a8b8af]">Cumartesi</span>
                                    <span className="font-medium text-white">10:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#a8b8af]">Pazar</span>
                                    <span className="text-white/50">Kapalı</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>
        </MainLayout>
    );
};

export default Contact;
