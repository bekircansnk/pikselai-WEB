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
                    Profesyonel Katalog & Sosyal Medya Yönetimi
                </div>
                <p className="footer-text">
                    Yapay Zeka Destekli Dijital Katalog ve Sosyal Medya Çözümleri
                </p>
                <p className="footer-developer">
                    © {currentYear} Profesyonel Katalog & Sosyal Medya Çözümleri
                    <br />
                    Destek için:{' '}
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B905531832344&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp ile destek alın"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 16px',
                            marginTop: '8px',
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
                </p>
            </div>
        </footer>
    )
}

export default Footer
