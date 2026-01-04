import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AiPhotoHome from '../components/AiPhotoHome'
import SocialMediaHome from '../components/SocialMediaHome'
import EcommerceHome from '../components/EcommerceHome'

/**
 * Home - Ana sayfa bileşeni
 * Profesyonel Katalog tanıtım, özellikler ve sosyal medya bölümleri
 */
const Home = () => {
    return (
        <>
            {/* Sayfa bazlı SEO meta etiketleri */}
            <Helmet>
                <title>Pikselai | Profesyonel Katalog, E-Ticaret & Sosyal Medya Yönetimi</title>
                <meta name="description" content="Yapay zeka destekli profesyonel katalog ve fotoğraf odaklı sosyal medya yönetimi. Pikselai ile markanızı dijitalde güçlendirin." />
            </Helmet>

            {/* Hero Section - Ana tanıtım alanı */}
            <Hero />

            {/* Features Section - Katalog özellikleri */}
            <Features />

            {/* AI Fotoğraf Section - Yapay zeka fotoğraf üretimi */}
            <AiPhotoHome />

            {/* Sosyal Medya Section - AI destekli sosyal medya tanıtımı */}
            <SocialMediaHome />

            {/* E-Ticaret Danışmanlığı - 360° Çözüm */}
            <EcommerceHome />
        </>
    )
}

export default Home
