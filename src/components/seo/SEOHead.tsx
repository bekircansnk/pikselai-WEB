import { Helmet } from 'react-helmet-async'

// Pikselai merkezi SEO bileşeni — tüm sayfalar bu bileşeni kullanır
interface SEOHeadProps {
    title: string
    description: string
    canonical?: string
    ogImage?: string
    ogType?: 'website' | 'article'
    noIndex?: boolean
    jsonLd?: Record<string, unknown> | Record<string, unknown>[]
    article?: {
        publishedTime?: string
        author?: string
        section?: string
    }
}

const SITE_URL = 'https://pikselai.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/common/full-logo-dark-v2.webp`
const SITE_NAME = 'Pikselai'

export function SEOHead({
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    noIndex = false,
    jsonLd,
    article
}: SEOHeadProps) {
    const fullTitle = `${title} | ${SITE_NAME}`
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined
    const imageUrl = ogImage
        ? ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`
        : DEFAULT_OG_IMAGE

    return (
        <Helmet>
            {/* Temel meta */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Canonical */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="tr_TR" />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Article meta */}
            {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
            {article?.author && <meta property="article:author" content={article.author} />}
            {article?.section && <meta property="article:section" content={article.section} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* JSON-LD Yapısal Veri */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
                </script>
            )}
        </Helmet>
    )
}

// ─── Yardımcı: Article JSON-LD üreteci ───
export function createArticleSchema({
    title,
    description,
    url,
    image,
    datePublished,
    author = 'Pikselai Ekibi',
    section
}: {
    title: string
    description: string
    url: string
    image: string
    datePublished?: string
    author?: string
    section?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
        url: `${SITE_URL}${url}`,
        datePublished: datePublished || new Date().toISOString().split('T')[0],
        author: {
            '@type': 'Organization',
            name: author,
            url: SITE_URL
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/assets/common/logo-dark-v2.webp`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}${url}`
        },
        ...(section && { articleSection: section })
    }
}

// ─── Yardımcı: Breadcrumb JSON-LD üreteci ───
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`
        }))
    }
}

// ─── Yardımcı: FAQ JSON-LD üreteci ───
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }
}

// ─── Yardımcı: Organization JSON-LD üreteci (Entity bağlantılı) ───
export function createOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/common/logo-dark-v2.webp`,
        description: 'Yapay zeka destekli kreatif üretim, ürün fotoğrafçılığı, e-ticaret yönetimi ve dijital çözümler sunan profesyonel dijital ajans.',
        foundingDate: '2024',
        sameAs: [
            'https://www.instagram.com/pikselai',
            'https://www.linkedin.com/company/pikselai',
            'https://twitter.com/pikselai'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+905531832344',
            contactType: 'customer service',
            areaServed: 'TR',
            availableLanguage: 'Turkish'
        },
        knowsAbout: [
            'Yapay Zeka ile Ürün Fotoğrafçılığı',
            'AI Sanal Manken Üretimi',
            'Ghost Mannequin (Hayalet Manken)',
            'E-Ticaret Görsel Üretimi',
            'Shopify Mağaza Kurulumu',
            'Sosyal Medya İçerik Üretimi',
            'Dijital Katalog Yönetimi',
            'Marka Kimliği Tasarımı',
            'Reklam Kreatifi Üretimi'
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'PikselAI Hizmetleri',
            itemListElement: [
                {
                    '@type': 'OfferCatalog',
                    name: 'AI Ürün Fotoğrafçılığı',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ürün Fotoğrafçılığı' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sanal Manken Üretimi' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ghost Mannequin' } }
                    ]
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'E-Ticaret Çözümleri',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Mağaza Kurulumu' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Ticaret Danışmanlığı' } }
                    ]
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Sosyal Medya',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'İçerik Üretimi' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Topluluk Yönetimi' } }
                    ]
                }
            ]
        }
    }
}

// ─── Yardımcı: LocalBusiness JSON-LD üreteci (İletişim sayfası) ───
export function createLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/common/logo-dark-v2.webp`,
        image: `${SITE_URL}/assets/common/full-logo-dark-v2.webp`,
        telephone: '+905531832344',
        email: 'bilgi@pikselai.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Başakşehir',
            addressRegion: 'İstanbul',
            addressCountry: 'TR'
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '10:00',
                closes: '14:00'
            }
        ],
        priceRange: '₺₺',
        areaServed: {
            '@type': 'Country',
            name: 'TR'
        }
    }
}

// ─── Yardımcı: Service JSON-LD üreteci ───
export function createServiceSchema({
    name,
    description,
    provider = SITE_NAME,
    serviceType
}: {
    name: string
    description: string
    provider?: string
    serviceType: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: provider
        },
        serviceType,
        areaServed: { '@type': 'Country', name: 'TR' }
    }
}

// ─── Yardımcı: Product JSON-LD üreteci ───
export function createProductSchema({
    name,
    description,
    image,
    price,
    priceCurrency = 'TRY'
}: {
    name: string
    description: string
    image: string
    price: string
    priceCurrency?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
        offers: {
            '@type': 'Offer',
            price,
            priceCurrency,
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Organization',
                name: SITE_NAME
            }
        }
    }
}

// ─── Yardımcı: SoftwareApplication JSON-LD üreteci ───
export function createSoftwareApplicationSchema({
    name,
    description,
    applicationCategory
}: {
    name: string
    description: string
    applicationCategory: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        applicationCategory,
        operatingSystem: 'Web'
    }
}

