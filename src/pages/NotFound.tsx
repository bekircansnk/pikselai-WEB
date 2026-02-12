import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../layouts/MainLayout'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            <Helmet>
                <title>Sayfa Bulunamadı | Pikselai</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <Section className="min-h-[80vh] flex flex-col items-center justify-center text-center" mood="dark">
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bor-secondary/20 rounded-full blur-[100px] pointer-events-none" />

                    <h1 className="text-[10rem] md:text-[15rem] font-bold font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
                        404
                    </h1>

                    <div className="relative z-10 -mt-10 md:-mt-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Sayfa Bulunamadı
                        </h2>
                        <p className="text-lg text-bor-primary-300 max-w-lg mx-auto mb-10">
                            Aradığınız sayfa silinmiş, taşınmış veya hiç var olmamış olabilir.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" onClick={() => navigate('/')}>
                                Ana Sayfaya Dön
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => navigate('/ucretler')} className="border-white/20 text-white hover:bg-white/10">
                                Fiyatları İncele
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    )
}

export default NotFound
