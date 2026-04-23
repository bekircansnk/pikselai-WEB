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
const DEFAULT_OG_IMAGE = `${SITE_URL}/branding/full-logo-dark-v2.webp`
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
                url: `${SITE_URL}/branding/logo-dark-v2.webp`
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
