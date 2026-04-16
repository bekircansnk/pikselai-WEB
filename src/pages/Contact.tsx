import { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, ArrowRight } from 'lucide-react';

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

    const [isSubmitted, setIsSubmitted] = useState(false);

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
        
        // Show mail option after WhatsApp redirection
        setIsSubmitted(true);
    };

    const handleMailSubmit = () => {
        const text = generateMessage();
        const subject = `Yeni Teklif Talebi - ${formData.firma || formData.adSoyad}`;
        const url = `mailto:bilgi@pikselai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
        window.location.href = url;
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
                                    className="w-full bg-[#caf265] text-[#0b2117] hover:bg-[#b5dc57] transition-all duration-300 rounded-2xl px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 group shadow-[0_8px_30px_rgba(202,242,101,0.25)]"
                                >
                                    <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                                    WhatsApp İle Teklif Talep Et
                                </button>
                                
                                {isSubmitted && (
                                    <motion.button 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        type="button"
                                        onClick={handleMailSubmit}
                                        className="w-full bg-[#0b2117] text-[#F4EFE6] hover:bg-[#153828] transition-all duration-300 rounded-2xl px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 group"
                                    >
                                        <Mail size={20} className="group-hover:scale-110 transition-transform opacity-70" />
                                        Alternatif Olarak E-Posta İle Gönder
                                    </motion.button>
                                )}
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
                                    <MessageSquare size={28} />
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
                                    <div className="text-[#3a5245] text-sm">İstanbul, Türkiye</div>
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
