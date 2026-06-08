import { useState, useRef, useEffect } from "react"
import { 
    Download, Eye, Check, Globe, 
    Smartphone, CreditCard, Shirt, Laptop, Copy
} from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/Button"

// Mevcut fontların listesi (index.html'de yüklenmiş olanlar)
const fonts = [
    { name: "Instrument Serif", family: "'Instrument Serif', serif", display: "Instrument Serif (Zarif Serif)" },
    { name: "Inter", family: "'Inter', sans-serif", display: "Inter (Modern Sans)" },
    { name: "Outfit", family: "'Outfit', sans-serif", display: "Outfit (Dinamik & Yuvarlak)" },
    { name: "Raleway", family: "'Raleway', sans-serif", display: "Raleway (Şık & Geniş)" }
]

// Mockup tipleri
type MockupType = "browser" | "header" | "card" | "tshirt" | "mobile"

export default function LogoGenerator() {
    // Logo State'leri
    const [logoText, setLogoText] = useState("pikselai")
    const [selectedFont, setSelectedFont] = useState(fonts[0])
    const [isItalic, setIsItalic] = useState(false)
    const [fontWeight, setFontWeight] = useState("700") // Default bold for Instrument Serif
    const [letterSpacing, setLetterSpacing] = useState("-0.02") // em cinsinden
    const [textColorType, setTextColorType] = useState<"solid" | "gradient">("solid")
    const [textColor, setTextColor] = useState("#111827")
    const [textGradient, setTextGradient] = useState("linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)")
    const [logoType, setLogoType] = useState<"text" | "icon" | "both">("both")
    const [iconShape, setIconShape] = useState<"circle" | "square" | "rounded" | "none">("rounded")
    const [iconBg, setIconBg] = useState("#a8ff57")
    const [iconColor, setIconColor] = useState("#0a0f0a")
    
    // UI ve Export State'leri
    const [activeMockup, setActiveMockup] = useState<MockupType>("browser")
    const [downloadSize, setDownloadSize] = useState(512)
    const [copiedSvg, setCopiedSvg] = useState(false)
    
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Seçilen fonta göre varsayılan ağırlıkları ayarla
    useEffect(() => {
        if (selectedFont.name === "Instrument Serif") {
            setFontWeight("400") // Serif için genellikle normal veya italik ağırlıklar daha şık durur
            setIsItalic(true) // Serif logolar için varsayılanı italik yapalım, çok şık duruyor
        } else {
            setFontWeight("700")
            setIsItalic(false)
        }
    }, [selectedFont])

    // SVG string üretici
    const getSvgString = (isFavicon: boolean = false, size: number = 512) => {
        if (isFavicon) {
            // Sadece ikon tabanlı favicon SVG
            const letter = logoText.charAt(0) || "p"
            let shapeElement = ""
            if (iconShape === "circle") {
                shapeElement = `<circle cx="256" cy="256" r="240" fill="${iconBg}" />`
            } else if (iconShape === "square") {
                shapeElement = `<rect x="16" y="16" width="480" height="480" fill="${iconBg}" />`
            } else { // rounded
                shapeElement = `<rect x="16" y="16" width="480" height="480" rx="96" fill="${iconBg}" />`
            }

            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&amp;family=Inter:wght@400;700&amp;family=Outfit:wght@400;700&amp;family=Raleway:wght@400;700&amp;display=swap');
                    .logo-icon {
                        font-family: ${selectedFont.family};
                        font-size: 320px;
                        font-weight: ${fontWeight};
                        font-style: ${isItalic ? "italic" : "normal"};
                        fill: ${iconColor};
                        text-anchor: middle;
                        dominant-baseline: central;
                    }
                </style>
                ${iconShape !== "none" ? shapeElement : ""}
                <text x="256" y="260" class="logo-icon">${letter}</text>
            </svg>`
        } else {
            // Normal logo SVG (Text veya Combination)
            const showIcon = logoType === "both" || logoType === "icon"
            const showText = logoType === "both" || logoType === "text"
            const letter = logoText.charAt(0) || "p"
            
            // Renk dolgu stili
            let textFill = textColor
            let gradientDef = ""
            if (textColorType === "gradient") {
                textFill = "url(#logoGradient)"
                // Degrade renk duraklarını ayrıştır
                const hexColors = textGradient.match(/#[0-9a-fA-F]{6}/g)
                if (hexColors && hexColors.length >= 2) {
                    gradientDef = `
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="${hexColors[0]}" />
                            <stop offset="100%" stop-color="${hexColors[1]}" />
                        </linearGradient>
                    </defs>`
                }
            }

            let shapeElement = ""
            if (iconShape === "circle") {
                shapeElement = `<circle cx="60" cy="50" r="40" fill="${iconBg}" />`
            } else if (iconShape === "square") {
                shapeElement = `<rect x="20" y="10" width="80" height="80" fill="${iconBg}" />`
            } else { // rounded
                shapeElement = `<rect x="20" y="10" width="80" height="80" rx="18" fill="${iconBg}" />`
            }

            const iconSvg = showIcon ? `
                <g id="logo-icon-part">
                    ${iconShape !== "none" ? shapeElement : ""}
                    <text x="60" y="55" font-family="${selectedFont.family}" font-size="52" font-weight="${fontWeight}" font-style="${isItalic ? "italic" : "normal"}" fill="${iconColor}" text-anchor="middle" dominant-baseline="central">${letter}</text>
                </g>
            ` : ""

            const textX = showIcon ? 130 : 20
            const textSvg = showText ? `
                <text x="${textX}" y="62" font-family="${selectedFont.family}" font-size="54" font-weight="${fontWeight}" font-style="${isItalic ? "italic" : "normal"}" letter-spacing="${letterSpacing}em" fill="${textFill}">${logoText}</text>
            ` : ""

            // Boyut hesaplamaları
            let viewWidth = 600
            if (logoType === "text") viewWidth = 450
            if (logoType === "icon") viewWidth = 120

            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewWidth} 100" width="${size}" height="${(size / viewWidth) * 100}">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&amp;family=Inter:wght@400;700&amp;family=Outfit:wght@400;700&amp;family=Raleway:wght@400;700&amp;display=swap');
                </style>
                ${gradientDef}
                ${iconSvg}
                ${textSvg}
            </svg>`
        }
    }

    // SVG İndirme İşlemi
    const handleDownloadSvg = (isFavicon: boolean = false) => {
        const svgString = getSvgString(isFavicon)
        const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = isFavicon ? `${logoText}_favicon.svg` : `${logoText}_logo.svg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    // PNG İndirme İşlemi (Canvas kullanarak)
    const handleDownloadPng = (isFavicon: boolean = false, size: number = 512) => {
        const svgString = getSvgString(isFavicon, size)
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Canvas boyutunu ayarla
        canvas.width = size
        canvas.height = isFavicon ? size : (size / 600) * 100

        const img = new Image()
        const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
        const url = URL.createObjectURL(svgBlob)

        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0)
            
            const pngUrl = canvas.toDataURL("image/png")
            const link = document.createElement("a")
            link.href = pngUrl
            link.download = isFavicon ? `${logoText}_favicon_${size}x${size}.png` : `${logoText}_logo_${size}px.png`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        }

        img.src = url
    }

    // Favicon Seti Olarak İndir
    const handleDownloadFaviconSet = () => {
        handleDownloadPng(true, 16)
        handleDownloadPng(true, 32)
        handleDownloadPng(true, 180)
    }

    // SVG Kodunu Kopyala
    const handleCopySvgCode = () => {
        const svgString = getSvgString(false)
        navigator.clipboard.writeText(svgString)
        setCopiedSvg(true)
        setTimeout(() => setCopiedSvg(false), 2000)
    }

    // Resmi PikselAI Logolarını İndir
    const handleDownloadOfficialLogo = (type: "svg" | "png" | "favicon") => {
        if (type === "svg") {
            const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100" width="600" height="100">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&amp;display=swap');
                </style>
                <text x="20" y="62" font-family="'Instrument Serif', serif" font-size="54" font-weight="400" font-style="italic" letter-spacing="-0.02em" fill="#111827">pikselai</text>
            </svg>`
            const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
            const url = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = "pikselai_resmi_logo.svg"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } else if (type === "favicon") {
            const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&amp;display=swap');
                </style>
                <rect x="16" y="16" width="480" height="480" rx="96" fill="#a8ff57" />
                <text x="256" y="260" font-family="'Instrument Serif', serif" font-size="320" font-weight="400" font-style="italic" fill="#0a0f0a" text-anchor="middle" dominant-baseline="central">p</text>
            </svg>`
            const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
            const url = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = "pikselai_resmi_favicon.svg"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } else {
            const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100" width="1200" height="200">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&amp;display=swap');
                </style>
                <text x="20" y="62" font-family="'Instrument Serif', serif" font-size="54" font-weight="400" font-style="italic" letter-spacing="-0.02em" fill="#111827">pikselai</text>
            </svg>`
            const canvas = canvasRef.current
            if (!canvas) return
            const ctx = canvas.getContext("2d")
            if (!ctx) return
            canvas.width = 1200
            canvas.height = 200
            const img = new Image()
            const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
            const url = URL.createObjectURL(svgBlob)
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(img, 0, 0)
                const pngUrl = canvas.toDataURL("image/png")
                const link = document.createElement("a")
                link.href = pngUrl
                link.download = "pikselai_resmi_logo_1200px.png"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)
            }
            img.src = url
        }
    }

    return (
        <div className="min-h-screen bg-bor-background text-bor-foreground flex flex-col font-sans transition-colors duration-300">
            {/* Header */}
            <Header transparent={false} lightText={false} />

            <div className="flex-1 pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Sayfa Başlığı */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold text-bor-secondary uppercase tracking-[0.2em] bg-bor-secondary/10 px-3.5 py-1.5 rounded-full dark:bg-bor-secondary/20">
                            PikselAI Laboratuvar
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-normal text-bor-primary-900 dark:text-white mt-4 tracking-tight leading-tight">
                            Logo &amp; Favicon Oluşturucu
                        </h1>
                        <p className="text-base text-bor-primary-500 dark:text-bor-primary-400 mt-3 leading-relaxed font-sans">
                            Sitenizin şık serif fontlarını ve marka kimliğini kendi projenizde kullanın. Metninizi girin, stilinizi belirleyin ve anında vektörel logo paketlerini indirin.
                        </p>
                    </div>

                    {/* Ana Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Sol Kolon: Kontroller (5/12) */}
                        <div className="lg:col-span-5 bg-white dark:bg-bor-primary-900 border border-bor-primary-200/60 dark:border-bor-primary-800 rounded-3xl p-6 shadow-xl shadow-bor-primary-200/20 dark:shadow-none space-y-6">
                            
                            {/* Logo Metni */}
                            <div>
                                <label className="block text-xs font-bold text-bor-primary-500 uppercase tracking-wider mb-2">
                                    Logo Yazısı
                                </label>
                                <input
                                    type="text"
                                    value={logoText}
                                    onChange={(e) => setLogoText(e.target.value)}
                                    maxLength={24}
                                    className="w-full bg-bor-primary-50 dark:bg-bor-primary-800/50 border border-bor-primary-200 dark:border-bor-primary-700/80 rounded-2xl px-4 py-3 text-[17px] focus:outline-none focus:ring-2 focus:ring-bor-secondary text-bor-primary-900 dark:text-white font-medium transition-all"
                                    placeholder="Logo metni yazın..."
                                />
                            </div>

                            {/* Logo Tipi */}
                            <div>
                                <label className="block text-xs font-bold text-bor-primary-500 uppercase tracking-wider mb-2.5">
                                    Logo Yapısı
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {(["both", "text", "icon"] as const).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setLogoType(type)}
                                            className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                                                logoType === type
                                                    ? "bg-bor-secondary text-white border-bor-secondary shadow-md"
                                                    : "bg-bor-primary-50 dark:bg-bor-primary-800/30 text-bor-primary-700 dark:text-bor-primary-300 border-bor-primary-200 dark:border-bor-primary-800 hover:bg-bor-primary-100/50"
                                            }`}
                                        >
                                            {type === "both" ? "İkon + Metin" : type === "text" ? "Sadece Metin" : "Sadece İkon"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Font Seçimi */}
                            <div>
                                <label className="block text-xs font-bold text-bor-primary-500 uppercase tracking-wider mb-2.5">
                                    Yazı Tipi (Font)
                                </label>
                                <div className="space-y-2">
                                    {fonts.map((f) => (
                                        <button
                                            key={f.name}
                                            onClick={() => setSelectedFont(f)}
                                            className={`w-full text-left py-3 px-4 rounded-2xl border transition-all flex items-center justify-between ${
                                                selectedFont.name === f.name
                                                    ? "bg-bor-primary-900 text-white dark:bg-white dark:text-bor-primary-900 border-bor-primary-900 dark:border-white shadow-md"
                                                    : "bg-bor-primary-50 dark:bg-bor-primary-800/30 text-bor-primary-800 dark:text-bor-primary-300 border-bor-primary-200/70 dark:border-bor-primary-800 hover:bg-bor-primary-100/50"
                                            }`}
                                        >
                                            <span style={{ fontFamily: f.family }} className="text-[17px]">
                                                {logoText || f.name}
                                            </span>
                                            <span className="text-[11px] font-sans opacity-60">
                                                {f.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tipografi Ayrıntıları */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-bor-primary-500 uppercase tracking-wider mb-2">
                                        Eğim (Stil)
                                    </label>
                                    <div className="grid grid-cols-2 gap-1.5 bg-bor-primary-50 dark:bg-bor-primary-800/30 p-1 rounded-xl">
                                        <button
                                            onClick={() => setIsItalic(false)}
                                            className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                                                !isItalic 
                                                    ? "bg-white text-bor-primary-900 shadow-sm dark:bg-bor-primary-800 dark:text-white" 
                                                    : "text-bor-primary-500 hover:text-bor-primary-900 dark:text-bor-primary-400"
                                            }`}
                                        >
                                            Normal
                                        </button>
                                        <button
                                            onClick={() => setIsItalic(true)}
                                            className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                                                isItalic 
                                                    ? "bg-white text-bor-primary-900 shadow-sm dark:bg-bor-primary-800 dark:text-white" 
                                                    : "text-bor-primary-500 hover:text-bor-primary-900 dark:text-bor-primary-400"
                                            }`}
                                        >
                                            İtalik
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-bor-primary-500 uppercase tracking-wider mb-2">
                                        Harf Boşluğu
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="range"
                                            min="-0.08"
                                            max="0.2"
                                            step="0.01"
                                            value={letterSpacing}
                                            onChange={(e) => setLetterSpacing(e.target.value)}
                                            className="w-full accent-bor-secondary cursor-pointer h-1.5 bg-bor-primary-200 dark:bg-bor-primary-800 rounded-lg appearance-none"
                                        />
                                        <span className="text-[11px] font-mono font-bold text-bor-primary-600 dark:text-bor-primary-400 w-8">
                                            {letterSpacing}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* İkon Seçenekleri (Eğer aktifse) */}
                            {(logoType === "both" || logoType === "icon") && (
                                <div className="p-4 bg-bor-primary-50/70 dark:bg-bor-primary-800/20 rounded-2xl border border-bor-primary-100 dark:border-bor-primary-800 space-y-4">
                                    <h4 className="text-xs font-bold text-bor-primary-800 dark:text-white uppercase tracking-wider border-b border-bor-primary-200/50 dark:border-bor-primary-800/80 pb-2">
                                        İkon Rozet Ayarları
                                    </h4>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* İkon Şekli */}
                                        <div>
                                            <span className="block text-[11px] font-semibold text-bor-primary-500 mb-1.5">Şekil</span>
                                            <div className="grid grid-cols-4 gap-1">
                                                {(["rounded", "circle", "square", "none"] as const).map((shape) => (
                                                    <button
                                                        key={shape}
                                                        onClick={() => setIconShape(shape)}
                                                        className={`py-1.5 px-1 text-[10px] font-bold rounded-lg border transition-all ${
                                                            iconShape === shape
                                                                ? "bg-bor-primary-900 border-bor-primary-900 text-white dark:bg-white dark:text-bor-primary-900 dark:border-white"
                                                                : "bg-white border-bor-primary-200 dark:bg-bor-primary-800 dark:border-bor-primary-700 text-bor-primary-600 dark:text-bor-primary-300"
                                                        }`}
                                                    >
                                                        {shape === "rounded" ? "Kare R." : shape === "circle" ? "Daire" : shape === "square" ? "Kare" : "Yok"}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* İkon Arka Planı */}
                                        <div>
                                            <span className="block text-[11px] font-semibold text-bor-primary-500 mb-1.5">İkon Arka Plan Rengi</span>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="color"
                                                    value={iconBg}
                                                    onChange={(e) => setIconBg(e.target.value)}
                                                    className="w-8 h-8 rounded-lg overflow-hidden border border-bor-primary-200 dark:border-bor-primary-700 cursor-pointer"
                                                />
                                                <span className="text-[11px] font-mono text-bor-primary-600 dark:text-bor-primary-400 uppercase">
                                                    {iconBg}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* İkon Harf Rengi */}
                                    <div>
                                        <span className="block text-[11px] font-semibold text-bor-primary-500 mb-1.5">İkon Harf Rengi</span>
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-2">
                                                {["#0a0f0a", "#FFFFFF"].map((c) => (
                                                    <button
                                                        key={c}
                                                        onClick={() => setIconColor(c)}
                                                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                                                            iconColor === c ? "ring-2 ring-bor-secondary border-transparent" : "border-bor-primary-300"
                                                        }`}
                                                        style={{ backgroundColor: c }}
                                                    >
                                                        {iconColor === c && <Check size={10} className={c === "#FFFFFF" ? "text-black" : "text-white"} />}
                                                    </button>
                                                ))}
                                            </div>
                                            <input
                                                type="color"
                                                value={iconColor}
                                                onChange={(e) => setIconColor(e.target.value)}
                                                className="w-6 h-6 rounded-md overflow-hidden border cursor-pointer ml-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Metin Renk Kontrolü (Sadece Metin varsa) */}
                            {(logoType === "both" || logoType === "text") && (
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-bor-primary-500 uppercase tracking-wider">
                                        Metin Rengi / Degrade
                                    </label>
                                    
                                    {/* Düz vs Degrade Seçici */}
                                    <div className="grid grid-cols-2 gap-2 bg-bor-primary-50 dark:bg-bor-primary-800/30 p-1 rounded-xl">
                                        <button
                                            onClick={() => setTextColorType("solid")}
                                            className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                                                textColorType === "solid" 
                                                    ? "bg-white text-bor-primary-900 shadow-sm dark:bg-bor-primary-800 dark:text-white" 
                                                    : "text-bor-primary-500"
                                            }`}
                                        >
                                            Tek Renk
                                        </button>
                                        <button
                                            onClick={() => setTextColorType("gradient")}
                                            className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                                                textColorType === "gradient" 
                                                    ? "bg-white text-bor-primary-900 shadow-sm dark:bg-bor-primary-800 dark:text-white" 
                                                    : "text-bor-primary-500"
                                            }`}
                                        >
                                            Degrade Geçiş
                                        </button>
                                    </div>

                                    {textColorType === "solid" ? (
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1.5">
                                                {["#111827", "#a8ff57", "#4F46E5", "#EC4899", "#FFFFFF"].map((c) => (
                                                    <button
                                                        key={c}
                                                        onClick={() => setTextColor(c)}
                                                        className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                                                            textColor === c ? "ring-2 ring-bor-secondary border-transparent scale-105" : "border-bor-primary-200"
                                                        }`}
                                                        style={{ backgroundColor: c }}
                                                    >
                                                        {textColor === c && <Check size={12} className={c === "#FFFFFF" || c === "#a8ff57" ? "text-black" : "text-white"} />}
                                                    </button>
                                                ))}
                                            </div>
                                            <input
                                                type="color"
                                                value={textColor}
                                                onChange={(e) => setTextColor(e.target.value)}
                                                className="w-8 h-8 rounded-lg overflow-hidden border border-bor-primary-200 cursor-pointer ml-auto"
                                            />
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-4 gap-2">
                                            {[
                                                "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                                                "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
                                                "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
                                                "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                                            ].map((g, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setTextGradient(g)}
                                                    className={`h-9 rounded-xl border flex items-center justify-center transition-all ${
                                                        textGradient === g ? "ring-2 ring-bor-secondary border-transparent scale-105" : "border-bor-primary-200"
                                                    }`}
                                                    style={{ backgroundImage: g }}
                                                >
                                                    {textGradient === g && <Check size={14} className="text-white drop-shadow-md" />}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>

                        {/* Sağ Kolon: Önizleme & İndirme (7/12) */}
                        <div className="lg:col-span-7 space-y-8">
                            
                            {/* Ana Tuval (Canvas/SVG Önizleme Alanı) */}
                            <div className="bg-[#FAF9F6] dark:bg-bor-primary-950 border border-bor-primary-200/50 dark:border-bor-primary-800 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[300px] shadow-sm relative group overflow-hidden">
                                
                                {/* Arka plan grid paterni */}
                                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                                
                                <div className="relative z-10 transition-transform duration-300 hover:scale-105 select-none max-w-full">
                                    <div dangerouslySetInnerHTML={{ __html: getSvgString() }} />
                                </div>

                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={handleCopySvgCode}
                                        className="bg-white/80 backdrop-blur border border-bor-primary-200 hover:bg-white dark:bg-bor-primary-800/80 dark:border-bor-primary-700 dark:hover:bg-bor-primary-700 py-1.5 px-3 rounded-lg text-xs font-semibold text-bor-primary-800 dark:text-white flex items-center gap-1.5 shadow-sm transition-all"
                                    >
                                        {copiedSvg ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                        {copiedSvg ? "Kopyalandı!" : "SVG Kodunu Kopyala"}
                                    </button>
                                </div>
                            </div>

                            {/* Mockup Değerlendirme Bölümü */}
                            <div className="bg-white dark:bg-bor-primary-900 border border-bor-primary-200/60 dark:border-bor-primary-800 rounded-3xl p-6 shadow-xl shadow-bor-primary-200/10 dark:shadow-none">
                                <div className="flex items-center justify-between border-b border-bor-primary-200/50 dark:border-bor-primary-800 pb-4 mb-6">
                                    <h3 className="font-display text-xl text-bor-primary-900 dark:text-white flex items-center gap-2">
                                        <Eye size={18} className="text-bor-secondary" /> Marka Önizleme (Mockups)
                                    </h3>
                                    
                                    {/* Mockup Seçiciler */}
                                    <div className="flex gap-1 overflow-x-auto pb-1 max-w-[60%] sm:max-w-none">
                                        {[
                                            { id: "browser", label: "Sekme", icon: Globe },
                                            { id: "header", label: "Header", icon: Laptop },
                                            { id: "card", label: "Kartvizit", icon: CreditCard },
                                            { id: "tshirt", label: "T-Shirt", icon: Shirt },
                                            { id: "mobile", label: "Mobil", icon: Smartphone }
                                        ].map((mock) => {
                                            const Icon = mock.icon
                                            return (
                                                <button
                                                    key={mock.id}
                                                    onClick={() => setActiveMockup(mock.id as MockupType)}
                                                    className={`py-1.5 px-3 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all border shrink-0 ${
                                                        activeMockup === mock.id
                                                            ? "bg-bor-secondary/10 border-bor-secondary text-bor-secondary"
                                                            : "bg-bor-primary-50 border-transparent text-bor-primary-600 hover:bg-bor-primary-100 dark:bg-bor-primary-800/30 dark:text-bor-primary-400"
                                                    }`}
                                                >
                                                    <Icon size={13} />
                                                    {mock.label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Mockup Çerçeveleri */}
                                <div className="w-full bg-[#F4F3EF] dark:bg-bor-primary-950 rounded-2xl p-6 min-h-[260px] flex items-center justify-center border border-bor-primary-100 dark:border-bor-primary-800 overflow-hidden relative">
                                    
                                    {/* 1. Tarayıcı Sekmesi / Favicon */}
                                    {activeMockup === "browser" && (
                                        <div className="w-full max-w-sm bg-white dark:bg-bor-primary-800 rounded-xl shadow-lg border border-bor-primary-200/50 dark:border-bor-primary-700 overflow-hidden">
                                            <div className="bg-bor-primary-100 dark:bg-bor-primary-900 px-4 py-2 flex items-center gap-2 border-b border-bor-primary-200/30 dark:border-bor-primary-800">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                                </div>
                                                <div className="bg-white dark:bg-bor-primary-800 ml-4 px-3 py-1 rounded-t-lg text-[10px] font-sans font-semibold text-bor-primary-700 dark:text-white flex items-center gap-1.5 border-t border-x border-bor-primary-200/50 dark:border-bor-primary-700/80 -mb-2 shadow-sm min-w-[130px]">
                                                    <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0" dangerouslySetInnerHTML={{ __html: getSvgString(true) }} />
                                                    <span className="truncate">{logoText || "pikselai"}</span>
                                                </div>
                                            </div>
                                            <div className="p-8 text-center text-xs text-bor-primary-400 dark:text-bor-primary-500">
                                                Tarayıcı sekmesinde favicon olarak görüntüsü bu şekilde çıkacaktır.
                                            </div>
                                        </div>
                                    )}

                                    {/* 2. Web Sitesi Header */}
                                    {activeMockup === "header" && (
                                        <div className="w-full bg-white dark:bg-bor-primary-900 rounded-xl shadow-md border border-bor-primary-200/40 dark:border-bor-primary-800 overflow-hidden">
                                            <div className="px-6 py-4 flex items-center justify-between border-b border-bor-primary-100 dark:border-bor-primary-800">
                                                <div className="h-6 flex items-center" dangerouslySetInnerHTML={{ __html: getSvgString(false, 100) }} />
                                                <div className="flex gap-4 text-[10px] font-bold text-bor-primary-500 dark:text-bor-primary-400 uppercase tracking-wider">
                                                    <span>Hizmetler</span>
                                                    <span>İşlerimiz</span>
                                                    <span>Hakkımızda</span>
                                                </div>
                                                <div className="w-16 h-6 rounded-md bg-bor-secondary/10 dark:bg-bor-secondary/20" />
                                            </div>
                                            <div className="h-16 bg-bor-primary-50/50 dark:bg-bor-primary-950/20 flex items-center justify-center text-[10px] text-bor-primary-400">
                                                Web Header Alanı
                                            </div>
                                        </div>
                                    )}

                                    {/* 3. Kartvizit */}
                                    {activeMockup === "card" && (
                                        <div className="w-80 h-44 bg-gradient-to-br from-bor-primary-900 to-black text-white rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10">
                                            <div className="absolute right-0 bottom-0 w-32 h-32 bg-bor-secondary/10 rounded-full blur-2xl pointer-events-none" />
                                            <div className="h-8 max-w-[150px]" dangerouslySetInnerHTML={{ 
                                                __html: getSvgString(false, 120).replace(/fill="url\(#logoGradient\)"/g, 'fill="#FFFFFF"').replace(/fill="#111827"/g, 'fill="#FFFFFF"') 
                                            }} />
                                            <div>
                                                <h4 className="font-bold text-sm leading-tight">Bekircan Sağnak</h4>
                                                <p className="text-[10px] text-bor-secondary font-semibold uppercase tracking-widest mt-0.5">Kreatif Direktör, PikselAI</p>
                                                <div className="mt-4 pt-2 border-t border-white/10 flex justify-between text-[8px] text-white/50 font-mono">
                                                    <span>bekir@pikselai.com</span>
                                                    <span>pikselai.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 4. Tişörte Baskı */}
                                    {activeMockup === "tshirt" && (
                                        <div className="relative flex flex-col items-center">
                                            <Shirt size={140} className="text-bor-primary-900 dark:text-bor-primary-200 fill-bor-primary-900 dark:fill-bor-primary-900 stroke-[1]" />
                                            <div className="absolute top-12 left-1/2 -translate-x-1/2 scale-50 max-w-[120px] pointer-events-none select-none bg-white/10 p-1.5 rounded backdrop-blur-sm" dangerouslySetInnerHTML={{ 
                                                __html: getSvgString(false, 110).replace(/fill="#111827"/g, 'fill="#FFFFFF"').replace(/fill="url\(#logoGradient\)"/g, 'fill="#FFFFFF"')
                                            }} />
                                            <span className="text-[10px] text-bor-primary-500 mt-2">Merch Baskı Önizlemesi</span>
                                        </div>
                                    )}

                                    {/* 5. Mobil Splash Ekranı */}
                                    {activeMockup === "mobile" && (
                                        <div className="w-44 h-80 bg-white dark:bg-bor-primary-900 rounded-3xl shadow-xl border-4 border-bor-primary-900 dark:border-bor-primary-800 flex flex-col items-center justify-between p-6 relative overflow-hidden">
                                            <div className="absolute top-1 w-12 h-3 bg-bor-primary-900 dark:bg-bor-primary-800 rounded-full" />
                                            
                                            <div className="my-auto flex flex-col items-center gap-4">
                                                <div className="w-14 h-14" dangerouslySetInnerHTML={{ __html: getSvgString(true, 56) }} />
                                                <div className="h-6" dangerouslySetInnerHTML={{ __html: getSvgString(false, 100) }} />
                                            </div>

                                            <div className="text-[8px] text-bor-primary-400 font-medium">
                                                Sürüm 1.0.0
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* İndirme Seçenekleri Kartı */}
                            <div className="bg-white dark:bg-bor-primary-900 border border-bor-primary-200/60 dark:border-bor-primary-800 rounded-3xl p-6 shadow-xl shadow-bor-primary-200/10 dark:shadow-none space-y-6">
                                <h3 className="font-display text-xl text-bor-primary-900 dark:text-white flex items-center gap-2 border-b border-bor-primary-200/50 dark:border-bor-primary-800 pb-3">
                                    <Download size={18} className="text-bor-secondary" /> Logoları ve Faviconları Dışa Aktar
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Logo İndirme Bölümü */}
                                    <div className="p-4 bg-bor-primary-50/40 dark:bg-bor-primary-800/10 rounded-2xl border border-bor-primary-100 dark:border-bor-primary-800/80 space-y-3">
                                        <h4 className="text-xs font-bold text-bor-primary-800 dark:text-white uppercase tracking-wider">
                                            Tasarlanan Logo
                                        </h4>
                                        <div className="space-y-2">
                                            <Button 
                                                className="w-full justify-center text-xs font-semibold py-2.5 h-auto" 
                                                variant="outline"
                                                onClick={() => handleDownloadSvg(false)}
                                            >
                                                <Download size={14} className="mr-1.5" /> SVG Olarak İndir (Vektörel)
                                            </Button>
                                            <Button 
                                                className="w-full justify-center text-xs font-semibold py-2.5 h-auto bg-bor-primary-900 text-white dark:bg-white dark:text-bor-primary-900 hover:bg-black"
                                                onClick={() => handleDownloadPng(false, downloadSize)}
                                            >
                                                <Download size={14} className="mr-1.5" /> PNG Olarak İndir ({downloadSize}px)
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between text-[11px] text-bor-primary-500 pt-1">
                                            <span>Çözünürlük:</span>
                                            <select 
                                                value={downloadSize} 
                                                onChange={(e) => setDownloadSize(Number(e.target.value))}
                                                className="bg-transparent font-bold border-none focus:ring-0 cursor-pointer text-bor-primary-900 dark:text-white"
                                            >
                                                <option value="256">256 px</option>
                                                <option value="512">512 px</option>
                                                <option value="1024">1024 px</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Favicon İndirme Bölümü */}
                                    <div className="p-4 bg-bor-primary-50/40 dark:bg-bor-primary-800/10 rounded-2xl border border-bor-primary-100 dark:border-bor-primary-800/80 space-y-3">
                                        <h4 className="text-xs font-bold text-bor-primary-800 dark:text-white uppercase tracking-wider">
                                            İkon &amp; Favicon Seti
                                        </h4>
                                        <div className="space-y-2">
                                            <Button 
                                                className="w-full justify-center text-xs font-semibold py-2.5 h-auto" 
                                                variant="outline"
                                                onClick={() => handleDownloadSvg(true)}
                                            >
                                                <Download size={14} className="mr-1.5" /> SVG Favicon İndir
                                            </Button>
                                            <Button 
                                                className="w-full justify-center text-xs font-semibold py-2.5 h-auto bg-bor-secondary text-white hover:bg-indigo-700"
                                                onClick={handleDownloadFaviconSet}
                                            >
                                                <Download size={14} className="mr-1.5" /> PNG Favicon Seti İndir
                                            </Button>
                                        </div>
                                        <p className="text-[9px] text-bor-primary-500 text-center leading-normal pt-1">
                                            Favicon seti; 16x16, 32x32 ve 180x180 (Apple Icon) piksel çözünürlüklerinde ayrı PNG'leri indirir.
                                        </p>
                                    </div>
                                </div>

                                {/* Resmi PikselAI Logo Paketi Bölümü */}
                                <div className="border-t border-bor-primary-100 dark:border-bor-primary-800 pt-6">
                                    <div className="p-4 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                                                <Check size={14} /> Resmi PikselAI Logo Seti
                                            </h4>
                                            <p className="text-xs text-bor-primary-600 dark:text-bor-primary-400 mt-1">
                                                Sitenin yeni Instrument Serif tabanlı orijinal logolarını ve favicon dosyasını doğrudan bilgisayarınıza indirin.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 shrink-0">
                                            <Button 
                                                className="text-[10px] font-bold py-1.5 px-3 h-auto border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10" 
                                                variant="outline"
                                                onClick={() => handleDownloadOfficialLogo("svg")}
                                            >
                                                SVG Logo
                                            </Button>
                                            <Button 
                                                className="text-[10px] font-bold py-1.5 px-3 h-auto border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10" 
                                                variant="outline"
                                                onClick={() => handleDownloadOfficialLogo("favicon")}
                                            >
                                                Favicon SVG
                                            </Button>
                                            <Button 
                                                className="text-[10px] font-bold py-1.5 px-3 h-auto bg-emerald-600 text-white hover:bg-emerald-700"
                                                onClick={() => handleDownloadOfficialLogo("png")}
                                            >
                                                HD PNG Logo
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Hidden canvas for image rendering */}
            <canvas ref={canvasRef} style={{ display: "none" }} />

            {/* Footer */}
            <Footer />
        </div>
    )
}
