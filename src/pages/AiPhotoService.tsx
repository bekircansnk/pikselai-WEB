import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../layouts/MainLayout'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Card, CardTitle, CardContent } from '../components/ui/Card'
import { useNavigate } from 'react-router-dom'

const AiPhotoService = () => {
    const navigate = useNavigate()

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>

            <Helmet>
                <title>Yapay Zeka Fotoğraf Çekimi | Pikselai AI Stüdyo</title>
                <meta name="description" content="Ürünleriniz için mankenli ve konsept yapay zeka fotoğraf çekimi. Stüdyo maliyetlerini sıfırlayın, satışlarınızı artırın." />
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24 md:py-32 text-center overflow-hidden relative" mood="dark">
                {/* Background Gradient Animation Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bor-primary-800 via-bor-primary-900 to-black z-0" />

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-bor-secondary mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bor-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-bor-secondary"></span>
                        </span>
                        AI Stüdyo Yayında
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-8 leading-tight">
                        Sanal Stüdyo, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bor-secondary via-purple-400 to-bor-accent animate-gradient-x">
                            Gerçek Sonuçlar
                        </span>
                    </h1>

                    <p className="text-xl text-bor-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Manken, stüdyo, ışık, kuaför... Hepsini unutun. Yapay zeka teknolojimizle ürünlerinizi dünyanın istediğiniz yerinde, istediğiniz mankenle fotoğraflıyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="h-14 px-8 w-full sm:w-auto text-lg" onClick={() => navigate('/ucretler')}>
                            Paketleri İncele
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 w-full sm:w-auto text-lg border-white/20 text-white hover:bg-white/10" href="https://wa.me/905531832344">
                            Örnek Çalışma Talep Et
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Comparison Section */}
            <Section mood="light" className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Geleneksel vs Yapay Zeka</h2>
                    <p className="text-bor-primary-500">Neden binlerce marka yapay zekaya geçiyor?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Old Way */}
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg">Geleneksel Çekim</div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-400">Eski Yöntem</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-500">
                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm">✕</span>
                                Yüksek stüdyo ve ekipman maliyeti
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm">✕</span>
                                Manken, makyöz, kuaför masrafları
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm">✕</span>
                                Haftalar süren organizasyon ve teslimat
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm">✕</span>
                                Mekan ve hava durumu sınırlamaları
                            </li>
                        </ul>
                    </div>

                    {/* New Way - AI */}
                    <div className="p-8 rounded-3xl bg-white border border-bor-secondary/20 shadow-xl shadow-bor-secondary/5 relative overflow-hidden ring-1 ring-bor-secondary/20">
                        <div className="absolute top-0 left-0 bg-bor-secondary text-white text-xs font-bold px-3 py-1 rounded-br-lg">PikselAI Farkı</div>
                        <h3 className="text-2xl font-bold mb-6 text-bor-primary-900">Yapay Zeka Devrimi</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-bor-primary-700 font-medium">
                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                                %70'e varan maliyet tasarrufu
                            </li>
                            <li className="flex items-center gap-3 text-bor-primary-700 font-medium">
                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                                Sınırsız manken ve mekan seçeneği
                            </li>
                            <li className="flex items-center gap-3 text-bor-primary-700 font-medium">
                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                                48 saatte teslim hızlı sonuçlar
                            </li>
                            <li className="flex items-center gap-3 text-bor-primary-700 font-medium">
                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                                Tutarlı ve ölçeklenebilir görsel dili
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* How it Works */}
            <Section mood="gray">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-display mb-4">Nasıl Çalışır?</h2>
                    <p className="text-bor-primary-500">3 adımda ürünlerinizi hayata geçirin</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center p-6">
                        <div className="text-5xl mb-6">📸</div>
                        <CardTitle className="mb-2">1. Fotoğraf Gönderin</CardTitle>
                        <CardContent>
                            Ürünlerinizin cansız manken üzerinde veya askıda çekilmiş basit fotoğraflarını bize iletin.
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6">
                        <div className="text-5xl mb-6">🎨</div>
                        <CardTitle className="mb-2">2. Tarzınızı Seçin</CardTitle>
                        <CardContent>
                            İstediğiniz manken tipini (yaş, etnik köken vb.) ve çekim mekanını (stüdyo, sokak, doğa) belirleyin.
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6">
                        <div className="text-5xl mb-6">✨</div>
                        <CardTitle className="mb-2">3. Sonuçları Alın</CardTitle>
                        <CardContent>
                            Yapay zeka teknolojimizle üretilen yüksek çözünürlüklü, gerçekçi fotoğraflarınızı teslim alın.
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* CTA */}
            <Section mood="img" className="text-center py-32 relative">
                <div className="absolute inset-0 bg-bor-primary-900">
                    {/* Abstract tech pattern can go here */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                        Ücretsiz Deneme Çekimi
                    </h2>
                    <p className="text-xl text-bor-primary-200 mb-10 max-w-2xl mx-auto">
                        Kaliteyi kendi gözlerinizle görmeniz için ilk ürününüzü ücretsiz olarak yapay zeka ile dönüştürüyoruz.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="h-14 px-10 text-lg shadow-xl shadow-bor-secondary/20"
                        href="https://wa.me/905531832344"
                    >
                        Hemen Deneyin
                    </Button>
                </div>
            </Section>
        </MainLayout>
    )
}

export default AiPhotoService
