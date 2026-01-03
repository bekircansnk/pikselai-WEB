import { Helmet } from 'react-helmet-async'
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
            {/* Sayfa bazlı SEO meta etiketleri */}
            <Helmet>
                <title>Pikselai | Profesyonel Katalog & Sosyal Medya Yönetimi</title>
                <meta name="description" content="Yapay zeka destekli profesyonel katalog ve fotoğraf odaklı sosyal medya yönetimi. Pikselai ile markanızı dijitalde güçlendirin." />
            </Helmet>

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
