import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Tema tipi tanımı
 */
type Theme = 'dark' | 'light'

/**
 * Tema context arayüzü
 */
interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

/**
 * Tema context'i
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * LocalStorage anahtarı
 */
const STORAGE_KEY = 'pikselai-theme'

/**
 * ThemeProvider - Tema yönetimi sağlayıcısı
 * Varsayılan tema: dark
 * Kullanıcı tercihi LocalStorage'da saklanır
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    // Varsayılan tema dark, localStorage'dan okuma
    const [theme, setTheme] = useState<Theme>(() => {
        // SSR kontrolü
        if (typeof window === 'undefined') return 'dark'

        const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
        return saved === 'light' ? 'light' : 'dark' // Dark varsayılan
    })

    // Tema değiştiğinde DOM'u ve favicon'u güncelle
    useEffect(() => {
        const root = document.documentElement

        // data-theme attribute'u ayarla
        root.setAttribute('data-theme', theme)

        // LocalStorage'a kaydet
        localStorage.setItem(STORAGE_KEY, theme)

        // Dinamik favicon güncelleme - temaya göre ikon değiştir
        updateFavicon(theme)
    }, [theme])

    /**
     * Favicon ve uygulama ikonlarını temaya göre günceller
     * public/dark ve public/light klasörlerindeki ilgili dosyaları kullanır.
     * @param currentTheme 'dark' | 'light'
     */
    const updateFavicon = (currentTheme: Theme) => {
        const iconTypes = [
            { id: 'favicon-32', fileName: 'favicon-32x32.webp' },
            { id: 'favicon-16', fileName: 'favicon-16x16.webp' },
            { id: 'apple-icon', fileName: 'apple-icon-180x180.webp' },
            { id: 'favicon-ico', fileName: 'favicon.ico' }
        ]

        iconTypes.forEach(({ id, fileName }) => {
            const linkElement = document.getElementById(id) as HTMLLinkElement | null
            if (linkElement) {
                // Örn: /dark/favicon-32x32.webp veya /light/favicon-32x32.webp
                linkElement.href = `/${currentTheme}/${fileName}`
            }
        })
    }

    // Tema değiştirme fonksiyonu
    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

/**
 * useTheme - Tema hook'u
 * Tema değerini ve değiştirme fonksiyonunu döndürür
 */
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme, ThemeProvider içinde kullanılmalıdır')
    }

    return context
}
