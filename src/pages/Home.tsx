import Hero from '../components/Hero'
import Features from '../components/Features'
import SocialMediaHome from '../components/SocialMediaHome'

/**
 * Home - Ana sayfa bileşeni
 * Profesyonel Katalog tanıtım, özellikler ve sosyal medya bölümleri
 */
const Home = () => {
    return (
        <>
            {/* Hero Section - Ana tanıtım alanı */}
            <Hero />

            {/* Features Section - Katalog özellikleri */}
            <Features />

            {/* Sosyal Medya Section - AI destekli sosyal medya tanıtımı */}
            <SocialMediaHome />
        </>
    )
}

export default Home
