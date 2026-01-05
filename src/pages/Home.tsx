import { Helmet } from 'react-helmet-async'
import { useState, useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AiPhotoHome from '../components/AiPhotoHome'
import SocialMediaHome from '../components/SocialMediaHome'
import EcommerceHome from '../components/EcommerceHome'
import SectionNav from '../components/theme/SectionNav'
import SectionBand from '../components/theme/SectionBand'
import ThemeBg from '../components/theme/ThemeBg'

/**
 * Ana sayfa section konfigürasyonları - 5 farklı bölüm için (dark/light ayrı)
 * LIGHT tema: Daha koyu/belirgin arka planlar, yüksek kontrast
 * DARK tema: Mevcut kalite korunuyor
 */
const HOME_SECTIONS = [
    {
        id: 'hero',
        label: 'Ana Sayfa',
        icon: '🏠',
        bandTitle: 'Pikselai',
        bandSubtitle: 'Yapay Zeka Destekli Dijital Çözümler',
        theme: {
            dark: {
                primary: '#A855F7',
                accent: '#C084FC',
                bg1: 'rgba(168, 85, 247, 0.18)',
                bg2: 'rgba(139, 92, 246, 0.10)',
                glow: 'rgba(168, 85, 247, 0.40)'
            },
            light: {
                primary: '#7C3AED',
                accent: '#8B5CF6',
                bg1: 'rgba(124, 58, 237, 0.12)',
                bg2: 'rgba(139, 92, 246, 0.08)',
                glow: 'rgba(124, 58, 237, 0.20)'
            }
        }
    },
    {
        id: 'katalog',
        label: 'Katalog',
        icon: '📁',
        bandTitle: 'Profesyonel Katalog Çözümü',
        bandSubtitle: 'Modern ve hızlı dijital katalog sistemi',
        theme: {
            dark: {
                primary: '#34D399',
                accent: '#6EE7B7',
                bg1: 'rgba(52, 211, 153, 0.18)',
                bg2: 'rgba(16, 185, 129, 0.10)',
                glow: 'rgba(52, 211, 153, 0.40)'
            },
            light: {
                primary: '#059669',
                accent: '#10B981',
                bg1: 'rgba(5, 150, 105, 0.12)',
                bg2: 'rgba(16, 185, 129, 0.08)',
                glow: 'rgba(5, 150, 105, 0.20)'
            }
        }
    },
    {
        id: 'ai-fotograf',
        label: 'AI Fotoğraf',
        icon: '📸',
        bandTitle: 'Yapay Zeka Fotoğraf Üretimi',
        bandSubtitle: 'Gerçekçi görseller, sınırsız yaratıcılık',
        theme: {
            dark: {
                primary: '#22D3EE',
                accent: '#67E8F9',
                bg1: 'rgba(34, 211, 238, 0.18)',
                bg2: 'rgba(6, 182, 212, 0.10)',
                glow: 'rgba(34, 211, 238, 0.40)'
            },
            light: {
                primary: '#0891B2',
                accent: '#06B6D4',
                bg1: 'rgba(8, 145, 178, 0.12)',
                bg2: 'rgba(6, 182, 212, 0.08)',
                glow: 'rgba(8, 145, 178, 0.20)'
            }
        }
    },
    {
        id: 'sosyal-medya',
        label: 'Sosyal Medya',
        icon: '📱',
        bandTitle: 'Sosyal Medya Yönetimi',
        bandSubtitle: 'AI destekli profesyonel sosyal medya yönetimi',
        theme: {
            dark: {
                primary: '#F472B6',
                accent: '#FB7185',
                bg1: 'rgba(244, 114, 182, 0.18)',
                bg2: 'rgba(236, 72, 153, 0.10)',
                glow: 'rgba(244, 114, 182, 0.40)'
            },
            light: {
                primary: '#DB2777',
                accent: '#EC4899',
                bg1: 'rgba(219, 39, 119, 0.12)',
                bg2: 'rgba(236, 72, 153, 0.08)',
                glow: 'rgba(219, 39, 119, 0.20)'
            }
        }
    },
    {
        id: 'e-ticaret',
        label: 'E-Ticaret',
        icon: '🛒',
        bandTitle: 'E-Ticaret Danışmanlığı',
        bandSubtitle: 'Shopify tabanlı profesyonel çözümler',
        theme: {
            dark: {
                primary: '#FBBF24',
                accent: '#FCD34D',
                bg1: 'rgba(251, 191, 36, 0.18)',
                bg2: 'rgba(245, 158, 11, 0.10)',
                glow: 'rgba(251, 191, 36, 0.40)'
            },
            light: {
                primary: '#D97706',
                accent: '#F59E0B',
                bg1: 'rgba(217, 119, 6, 0.12)',
                bg2: 'rgba(245, 158, 11, 0.08)',
                glow: 'rgba(217, 119, 6, 0.20)'
            }
        }
    }
]

/**
 * Home - Ana sayfa bileşeni
 * Profesyonel Katalog tanıtım, özellikler ve sosyal medya bölümleri
 * Pricing.tsx ile aynı yapı: Scrollspy, dinamik arka plan, sağ menü senkronizasyonu
 */
const Home = () => {
    const [activeSection, setActiveSection] = useState('hero')
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

    // Dark mode kontrolü
    const isDarkMode = () => {
        return document.documentElement.classList.contains('dark') ||
            document.body.classList.contains('dark') ||
            window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    // Scroll Trigger için flag'ler
    const isClickingRef = useRef<boolean>(false) // Tıklama sırasında observer'ı devre dışı bırak
    const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // IntersectionObserver ile aktif section tespiti - GELİŞTİRİLMİŞ SCROLL TRIGGER
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Tıklama sırasında observer'ı devre dışı bırak (titreme önleme)
                if (isClickingRef.current) return

                // Tüm intersecting entries'i topla
                const intersecting = entries.filter(e => e.isIntersecting)

                if (intersecting.length > 0) {
                    // En yüksek intersection ratio'ya sahip olanı bul
                    const mostVisible = intersecting.reduce((prev, current) => {
                        return (current.intersectionRatio > prev.intersectionRatio) ? current : prev
                    })

                    // Algılanan section'ı güncelle
                    const sectionId = mostVisible.target.getAttribute('id')
                    if (sectionId && mostVisible.intersectionRatio > 0.1) {
                        setActiveSection((prevSection) => {
                            // Sadece farklıysa güncelle (gereksiz re-render önle)
                            if (prevSection !== sectionId) {
                                return sectionId
                            }
                            return prevSection
                        })
                    }
                }
            },
            {
                root: null, // viewport
                rootMargin: '-40% 0px -40% 0px', // Ekranın ortasına yakın alanı referans al
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // Daha hassas algılama
            }
        )

        // Section'ları observe et
        const observeTimeout = setTimeout(() => {
            HOME_SECTIONS.forEach((section) => {
                const element = document.getElementById(section.id)
                if (element) {
                    observer.observe(element)
                    sectionRefs.current[section.id] = element
                }
            })
        }, 100)

        return () => {
            clearTimeout(observeTimeout)
            observer.disconnect()
        }
    }, []) // Dependency array boş - sadece mount'ta çalışsın

    // FALLBACK: Manuel scroll dinleyicisi - Observer kaçırırsa koordinatlardan algıla
    useEffect(() => {
        const OFFSET_PAY = 200 // Bölüme yaklaşırken aktif olsun

        const handleScroll = () => {
            // Tıklama sırasında çalışmasın
            if (isClickingRef.current) return

            const scrollY = window.scrollY + window.innerHeight / 2 // Ekranın ortası

            // Tüm section'ların pozisyonlarını al
            const sectionPositions = HOME_SECTIONS.map((section) => {
                const element = document.getElementById(section.id)
                if (!element) return { id: section.id, top: Infinity, bottom: Infinity }
                const rect = element.getBoundingClientRect()
                const top = rect.top + window.scrollY
                const bottom = top + rect.height
                return { id: section.id, top, bottom }
            })

            // Hangi section'ın içindeyiz?
            for (let i = sectionPositions.length - 1; i >= 0; i--) {
                const section = sectionPositions[i]
                // scrollY, section'ın başlangıcına yaklaştıysa (offset pay ile)
                if (scrollY >= section.top - OFFSET_PAY) {
                    setActiveSection((prevSection) => {
                        if (prevSection !== section.id) {
                            return section.id
                        }
                        return prevSection
                    })
                    break
                }
            }
        }

        // Throttle ile performans optimizasyonu
        let ticking = false
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', throttledScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', throttledScroll)
        }
    }, []) // Sadece mount'ta çalışsın

    // Aktif section değişince CSS variables güncelle - DARK/LIGHT DESTEKLI
    useEffect(() => {
        const section = HOME_SECTIONS.find(s => s.id === activeSection)
        if (section) {
            const isDark = isDarkMode()
            const theme = isDark ? section.theme.dark : section.theme.light

            const root = document.documentElement
            root.style.setProperty('--theme-primary', theme.primary)
            root.style.setProperty('--theme-accent', theme.accent)
            root.style.setProperty('--theme-bg-1', theme.bg1)
            root.style.setProperty('--theme-bg-2', theme.bg2)
            root.style.setProperty('--theme-glow', theme.glow)

            console.log('THEME APPLIED:', activeSection, isDark ? 'DARK' : 'LIGHT', theme)
        }
    }, [activeSection])

    // Section'a smooth scroll - Anchor'a git (label görünsün)
    const handleJumpToSection = (sectionId: string) => {
        // Tıklama flag'ini aç - observer'ı devre dışı bırak
        isClickingRef.current = true

        // Önceki timeout'u temizle
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current)
        }

        // State'i hemen güncelle (gecikme olmasın)
        setActiveSection(sectionId)

        // Anchor ID: 'anchor-' + section id
        const anchorId = `anchor-${sectionId}`
        const anchor = document.getElementById(anchorId)
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            // Fallback: section'a git, center ile hizala
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }

        // Scroll tamamlandıktan sonra observer'ı tekrar aç (800ms sonra)
        clickTimeoutRef.current = setTimeout(() => {
            isClickingRef.current = false
        }, 800)
    }

    // Aktif kategorinin tema renkleri
    const getActiveCategoryStyle = () => {
        const section = HOME_SECTIONS.find(s => s.id === activeSection)
        if (!section) return {}
        const theme = isDarkMode() ? section.theme.dark : section.theme.light
        return {
            '--active-primary': theme.primary,
            '--active-accent': theme.accent,
            '--active-bg1': theme.bg1,
            '--active-bg2': theme.bg2,
            '--active-glow': theme.glow
        } as React.CSSProperties
    }

    return (
        <div
            className="home-page"
            data-active-category={activeSection}
            style={getActiveCategoryStyle()}
        >
            {/* Theme Background - 2 Katmanlı Crossfade */}
            <ThemeBg activeSection={activeSection} isDark={isDarkMode()} />

            {/* Section Navigator */}
            <SectionNav
                sections={HOME_SECTIONS.map(s => ({ id: s.id, label: s.label, icon: s.icon }))}
                activeId={activeSection}
                onJump={handleJumpToSection}
            />

            {/* Sayfa bazlı SEO meta etiketleri */}
            <Helmet>
                <title>Pikselai | Profesyonel Katalog, E-Ticaret & Sosyal Medya Yönetimi</title>
                <meta name="description" content="Yapay zeka destekli profesyonel katalog ve fotoğraf odaklı sosyal medya yönetimi. Pikselai ile markanızı dijitalde güçlendirin." />
            </Helmet>

            {/* BÖLÜM 1: HERO - Ana tanıtım alanı */}
            <section id="hero" data-category="hero">
                <Hero />
            </section>

            {/* BÖLÜM 2: KATALOG - Katalog özellikleri */}
            <SectionBand icon="📁" title="Profesyonel Katalog Çözümü" subtitle="Modern ve hızlı dijital katalog sistemi" themeColor="#10B981" anchorId="anchor-katalog" />
            <section id="katalog" data-category="katalog">
                <Features />
            </section>

            {/* BÖLÜM 3: AI FOTOĞRAF - Yapay zeka fotoğraf üretimi */}
            <SectionBand icon="📸" title="Yapay Zeka Fotoğraf Üretimi" subtitle="Gerçekçi görseller, sınırsız yaratıcılık" themeColor="#22D3EE" anchorId="anchor-ai-fotograf" />
            <section id="ai-fotograf" data-category="ai-fotograf">
                <AiPhotoHome />
            </section>

            {/* BÖLÜM 4: SOSYAL MEDYA - AI destekli sosyal medya tanıtımı */}
            <SectionBand icon="📱" title="Sosyal Medya Yönetimi" subtitle="AI destekli profesyonel sosyal medya yönetimi" themeColor="#F472B6" anchorId="anchor-sosyal-medya" />
            <section id="sosyal-medya" data-category="sosyal-medya">
                <SocialMediaHome />
            </section>

            {/* BÖLÜM 5: E-TİCARET - 360° Çözüm */}
            <SectionBand icon="🛒" title="E-Ticaret Danışmanlığı" subtitle="Shopify tabanlı profesyonel çözümler" themeColor="#FBBF24" anchorId="anchor-e-ticaret" />
            <section id="e-ticaret" data-category="e-ticaret">
                <EcommerceHome />
            </section>
        </div>
    )
}

export default Home
