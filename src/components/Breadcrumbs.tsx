import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

/**
 * Breadcrumb yapısı için route tanımları
 */
const routeNames: Record<string, string> = {
    '/': 'Anasayfa',
    '/ucretler': 'Ücretler',
    '/profesyonel-katalog': 'Dijital Katalog',
    '/yapay-zeka-fotograf-cekimi': 'AI Fotoğraf',
    '/sosyal-medya-yonetimi': 'Sosyal Medya'
}

/**
 * Breadcrumbs - Schema.org BreadcrumbList yapısı
 * Kullanıcıya navigasyon yolu gösterir ve SEO için JSON-LD üretir
 */
const Breadcrumbs = () => {
    const location = useLocation()
    const pathSegments = location.pathname.split('/').filter(Boolean)

    // Breadcrumb item'ları oluştur
    const breadcrumbItems = [
        { name: 'Anasayfa', path: '/' }
    ]

    // Mevcut sayfayı ekle
    if (location.pathname !== '/') {
        const currentName = routeNames[location.pathname] || pathSegments[pathSegments.length - 1]
        breadcrumbItems.push({
            name: currentName,
            path: location.pathname
        })
    }

    // Schema.org BreadcrumbList JSON-LD
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://pikselai.com${item.path}`
        }))
    }

    // Ana sayfada breadcrumbs gösterme
    if (location.pathname === '/') {
        return null
    }

    return (
        <>
            {/* JSON-LD Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Görsel Breadcrumbs */}
            <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol className="breadcrumbs-list">
                    {breadcrumbItems.map((item, index) => (
                        <li key={item.path} className="breadcrumbs-item">
                            {index < breadcrumbItems.length - 1 ? (
                                <>
                                    <Link to={item.path} className="breadcrumbs-link">
                                        {item.name}
                                    </Link>
                                    <span className="breadcrumbs-separator" aria-hidden="true">›</span>
                                </>
                            ) : (
                                <span className="breadcrumbs-current" aria-current="page">
                                    {item.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumbs
