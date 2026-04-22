import { Link } from 'react-router-dom';

// Sosyal medya ikon bileşeni
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-200"
        >
            {children}
        </a>
    );
}

// Footer link kolonu başlığı + linkleri
interface FooterColumn {
    title: string;
    href?: string; // başlığa opsiyonel link (ok ikonuyla)
    links: { label: string; to: string }[];
}

// Hizmetler kolonları
const serviceColumns: FooterColumn[] = [
    {
        title: 'AI Prodüksiyon',
        href: '/hizmetler/ai-produksiyon',
        links: [
            { label: 'Ürün Fotoğrafçılığı', to: '/hizmetler/ai-produksiyon' },
            { label: 'Sanal Manken Ajansı', to: '/hizmetler/ai-produksiyon' },
            { label: 'AI Video & Reels', to: '/hizmetler/ai-produksiyon' },
            { label: 'Görsel A/B Testi', to: '/hizmetler/ai-produksiyon' },
        ],
    },
    {
        title: 'E-Ticaret',
        href: '/hizmetler/e-ticaret',
        links: [
            { label: 'Mağaza Yönetimi', to: '/hizmetler/e-ticaret' },
            { label: 'Ürün Listeleme', to: '/hizmetler/e-ticaret' },
            { label: 'Pazar Yeri Entegrasyonu', to: '/hizmetler/e-ticaret' },
        ],
    },
    {
        title: 'Sosyal Medya',
        href: '/hizmetler/sosyal-medya',
        links: [
            { label: 'İçerik Üretimi', to: '/hizmetler/sosyal-medya' },
            { label: 'Hesap Yönetimi', to: '/hizmetler/sosyal-medya' },
            { label: 'Reklam Yönetimi', to: '/hizmetler/sosyal-medya' },
        ],
    },
    {
        title: 'Kreatif Tasarım',
        href: '/hizmetler/kreatif-tasarim',
        links: [
            { label: 'Marka Kimliği', to: '/hizmetler/kreatif-tasarim' },
            { label: 'Grafik Tasarım', to: '/hizmetler/kreatif-tasarim' },
            { label: 'Sunum Tasarımı', to: '/hizmetler/kreatif-tasarim' },
        ],
    },
];

// Navigasyon kolonları
const navColumns: FooterColumn[] = [
    {
        title: 'Şirket',
        links: [
            { label: 'İşlerimiz', to: '/islerimiz' },
            { label: 'Hakkımızda', to: '/hakkimizda' },
            { label: 'İletişim', to: '/iletisim' },
            { label: 'Ücretler', to: '/ucretler' },
            { label: 'Fiyat Hesapla', to: '/fiyat-hesapla' },
        ],
    },
    {
        title: 'Kaynaklar',
        links: [
            { label: 'Blog', to: '/blog' },
            { label: 'Müşteri Hikayeleri', to: '/musteri-hikayeleri' },
        ],
    },
];

// Yasal alt linkler
const legalLinks = [
    { label: 'Gizlilik Politikası', href: '#' },
    { label: 'Kullanım Koşulları', href: '#' },
    { label: 'KVKK', href: '#' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0f0a] text-white">
            {/* Üst ayraç çizgisi */}
            <div className="container-custom">
                <div className="border-t border-white/10" />
            </div>

            {/* Ana link grid bölümü */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">

                    {/* Hizmetler başlığı + kolonlar */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-4">
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-8 pb-4 border-b border-white/10">
                            Hizmetler
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                            {serviceColumns.map((col) => (
                                <div key={col.title}>
                                    {/* Kolon başlığı — ok ikonuyla tıklanabilir */}
                                    {col.href ? (
                                        <Link
                                            to={col.href}
                                            className="group inline-flex items-center gap-1.5 font-semibold text-sm text-white mb-4 hover:text-[#a8ff57] transition-colors"
                                        >
                                            {col.title}
                                            <svg
                                                className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                                viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                                            >
                                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    ) : (
                                        <h4 className="font-semibold text-sm text-white mb-4">{col.title}</h4>
                                    )}

                                    {/* Link listesi */}
                                    <ul className="space-y-2.5">
                                        {col.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    to={link.to}
                                                    className="text-sm text-white/50 hover:text-white/90 transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigasyon başlığı + kolonlar */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-8 pb-4 border-b border-white/10">
                            Navigasyon
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                            {navColumns.map((col) => (
                                <div key={col.title}>
                                    <h4 className="font-semibold text-sm text-white mb-4">{col.title}</h4>
                                    <ul className="space-y-2.5">
                                        {col.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    to={link.to}
                                                    className="text-sm text-white/50 hover:text-white/90 transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Alt bar: Logo + telif + sosyal medya */}
            <div className="container-custom pb-10">
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    {/* Sol: Logo + telif */}
                    <div className="flex flex-col gap-2">
                        <Link to="/" className="inline-flex items-center gap-1 group">
                            {/* Piksel/nokta ikonu */}
                            <span className="w-6 h-6 rounded-sm bg-[#a8ff57] flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <rect x="1" y="1" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                    <rect x="9" y="1" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                    <rect x="1" y="9" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                    <rect x="9" y="9" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                    <rect x="5" y="5" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                </svg>
                            </span>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#a8ff57] transition-colors">
                                pikselai
                            </span>
                        </Link>
                        <p className="text-xs text-white/30">
                            © {currentYear} PikselAI. Tüm hakları saklıdır.
                        </p>
                        {/* Yasal linkler */}
                        <div className="flex flex-wrap gap-4 mt-1">
                            {legalLinks.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="text-xs text-white/30 hover:text-white/70 transition-colors underline underline-offset-2"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sağ: Sosyal medya ikonları */}
                    <div className="flex items-center gap-2">
                        {/* Instagram */}
                        <SocialIcon href="https://instagram.com/pikselai" label="Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </SocialIcon>

                        {/* WhatsApp */}
                        <SocialIcon href="https://wa.me/905531832344" label="WhatsApp">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </SocialIcon>

                        {/* LinkedIn */}
                        <SocialIcon href="https://linkedin.com/company/pikselai" label="LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </SocialIcon>

                        {/* TikTok */}
                        <SocialIcon href="https://tiktok.com/@pikselai" label="TikTok">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                            </svg>
                        </SocialIcon>

                        {/* Pikselai logolu özel ikon kutusu (Superside'daki branded icon gibi) */}
                        <a
                            href="/"
                            aria-label="PikselAI Ana Sayfa"
                            className="w-10 h-10 rounded-full bg-[#a8ff57] flex items-center justify-center hover:bg-[#8fe041] transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                                <rect x="1" y="1" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                <rect x="9" y="1" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                <rect x="1" y="9" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                <rect x="9" y="9" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                                <rect x="5" y="5" width="4" height="4" rx="0.5" fill="#0a0f0a" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
