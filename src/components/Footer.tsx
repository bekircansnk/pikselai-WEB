/**
 * Footer - Alt bilgi alanı bileşeni
 * Profesyonel Katalog & Sosyal Medya Çözümleri
 */
const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    Pikselai
                </div>
                <p className="footer-text">
                    Yapay Zeka Destekli Dijital Katalog ve Sosyal Medya Çözümleri
                </p>

                {/* İletişim Butonları */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
                    {/* Mail Butonu */}
                    <a
                        href="mailto:bilgi@pikselai.com"
                        title="E-posta gönder"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(168, 85, 247, 0.3)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(168, 85, 247, 0.5)'
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(168, 85, 247, 0.3)'
                        }}
                    >
                        ✉️ bilgi@pikselai.com
                    </a>

                    {/* WhatsApp Butonu */}
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B905531832344&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp ile destek alın"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.5)'
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 211, 102, 0.3)'
                        }}
                    >
                        💬 WhatsApp
                    </a>
                </div>

                <p className="footer-developer" style={{ marginTop: '20px' }}>
                    © {currentYear} Pikselai - Profesyonel Katalog & Sosyal Medya Çözümleri
                </p>
            </div>
        </footer>
    )
}

export default Footer
