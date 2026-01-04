import { useState, useEffect, useRef } from 'react'

/**
 * ThemeBg - 2 Katmanlı Crossfade Arka Plan
 * Dark/Light modda yumuşak bölüm geçişleri için
 */
interface ThemeBgProps {
    activeSection: string
    isDark: boolean
}

// Bölüm renk paletleri - Premium PikselAI stili
const SECTION_GRADIENTS = {
    'katalog-fiyat': {
        dark: {
            gradient1: 'rgba(147, 51, 234, 0.25)', // Mor
            gradient2: 'rgba(139, 92, 246, 0.15)',
            glow: 'rgba(168, 85, 247, 0.4)'
        },
        light: {
            gradient1: 'rgba(124, 58, 237, 0.18)', // Derin mor
            gradient2: 'rgba(139, 92, 246, 0.12)',
            glow: 'rgba(124, 58, 237, 0.25)'
        }
    },
    'ai-fiyat': {
        dark: {
            gradient1: 'rgba(6, 182, 212, 0.25)', // Cyan
            gradient2: 'rgba(34, 211, 238, 0.15)',
            glow: 'rgba(34, 211, 238, 0.4)'
        },
        light: {
            gradient1: 'rgba(8, 145, 178, 0.18)', // Derin cyan
            gradient2: 'rgba(6, 182, 212, 0.12)',
            glow: 'rgba(8, 145, 178, 0.25)'
        }
    },
    'sosyal-medya-fiyat': {
        dark: {
            gradient1: 'rgba(236, 72, 153, 0.25)', // Pink
            gradient2: 'rgba(244, 114, 182, 0.15)',
            glow: 'rgba(244, 114, 182, 0.4)'
        },
        light: {
            gradient1: 'rgba(219, 39, 119, 0.18)', // Derin pink
            gradient2: 'rgba(236, 72, 153, 0.12)',
            glow: 'rgba(219, 39, 119, 0.25)'
        }
    },
    'pricing-ecommerce-solution': {
        dark: {
            gradient1: 'rgba(16, 185, 129, 0.25)', // Green
            gradient2: 'rgba(52, 211, 153, 0.15)',
            glow: 'rgba(52, 211, 153, 0.4)'
        },
        light: {
            gradient1: 'rgba(5, 150, 105, 0.18)', // Derin green
            gradient2: 'rgba(16, 185, 129, 0.12)',
            glow: 'rgba(5, 150, 105, 0.25)'
        }
    }
}

// Varsayılan gradient (katalog)
const DEFAULT_SECTION = 'katalog-fiyat'

const ThemeBg = ({ activeSection, isDark }: ThemeBgProps) => {
    const [layerA, setLayerA] = useState(activeSection)
    const [layerB, setLayerB] = useState(activeSection)
    const [showLayerB, setShowLayerB] = useState(false)
    const transitionRef = useRef<number | null>(null)

    useEffect(() => {
        if (activeSection === layerA) return

        // Temizle
        if (transitionRef.current) {
            clearTimeout(transitionRef.current)
        }

        // LayerB'ye yeni gradient'i ayarla
        setLayerB(activeSection)
        setShowLayerB(true)

        // Transition bitince layerA'yı güncelle
        transitionRef.current = setTimeout(() => {
            setLayerA(activeSection)
            setShowLayerB(false)
        }, 800)

        return () => {
            if (transitionRef.current) {
                clearTimeout(transitionRef.current)
            }
        }
    }, [activeSection, layerA])

    const getGradientStyle = (section: string) => {
        const sectionKey = section as keyof typeof SECTION_GRADIENTS
        const colors = SECTION_GRADIENTS[sectionKey] || SECTION_GRADIENTS[DEFAULT_SECTION]
        const palette = isDark ? colors.dark : colors.light

        return {
            background: `
                radial-gradient(ellipse 120% 80% at 50% -20%, ${palette.gradient1} 0%, transparent 65%),
                radial-gradient(ellipse 80% 60% at 85% 50%, ${palette.gradient2} 0%, transparent 55%),
                radial-gradient(ellipse 70% 50% at 15% 80%, ${palette.glow} 0%, transparent 45%)
            `
        }
    }

    return (
        <>
            {/* Layer A - Mevcut gradient */}
            <div
                className="theme-bg theme-bg-layer-a"
                style={getGradientStyle(layerA)}
            />
            {/* Layer B - Geçiş gradient'i */}
            <div
                className="theme-bg theme-bg-layer-b"
                style={{
                    ...getGradientStyle(layerB),
                    opacity: showLayerB ? 1 : 0
                }}
            />
            {/* Orbs */}
            <div className="theme-orbs">
                <div
                    className="theme-orb theme-orb-1"
                    style={{
                        background: isDark
                            ? SECTION_GRADIENTS[activeSection as keyof typeof SECTION_GRADIENTS]?.dark.gradient1 || 'rgba(168, 85, 247, 0.4)'
                            : SECTION_GRADIENTS[activeSection as keyof typeof SECTION_GRADIENTS]?.light.gradient1 || 'rgba(124, 58, 237, 0.3)'
                    }}
                />
                <div
                    className="theme-orb theme-orb-2"
                    style={{
                        background: isDark
                            ? SECTION_GRADIENTS[activeSection as keyof typeof SECTION_GRADIENTS]?.dark.glow || 'rgba(168, 85, 247, 0.3)'
                            : SECTION_GRADIENTS[activeSection as keyof typeof SECTION_GRADIENTS]?.light.glow || 'rgba(124, 58, 237, 0.2)'
                    }}
                />
            </div>
            {/* Noise overlay */}
            <div className="theme-noise" />
        </>
    )
}

export default ThemeBg
