import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../layouts/MainLayout'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { useNavigate } from 'react-router-dom'

const CatalogService = () => {
    const navigate = useNavigate()

    const features = [
        {
            icon: '🔍',
            title: 'Hızlı Arama & Filtreleme',
            description: 'Binlerce ürün arasında saniyeler içinde arama yapın. Renk, beden ve kategori filtreleriyle müşterileriniz aradığını hemen bulsun.'
        },
        {
            icon: '📱',
            title: 'Mobil Uyumlu Tasarım',
            description: 'Her cihazda kusursuz görünen, uygulama kalitesinde bir deneyim. Müşterileriniz telefonlarından rahatça sipariş verebilir.'
        },
        {
            icon: '⚡',
            title: 'PWA Teknolojisi',
            description: 'Uygulama marketlerine gerek kalmadan, tek tıkla telefon ana ekranına yüklenebilen modern web uygulaması.'
        },
        {
            icon: '💬',
            title: 'WhatsApp Entegrasyonu',
            description: 'Müşterileriniz beğendikleri ürünleri veya oluşturdukları sepeti tek tıkla WhatsApp üzerinden size gönderebilir.'
        },
        {
            icon: '🎥',
            title: 'Video & Medya Desteği',
            description: 'Sadece fotoğraf değil, ürün videolarını da kataloğunuza ekleyerek etkileşimi artırın.'
        },
        {
            icon: '🔄',
            title: 'Kolay Yönetim Paneli',
            description: 'Ürünlerinizi, stok durumunu ve fiyatları kolayca güncelleyebileceğiniz kullanıcı dostu yönetim paneli.'
        }
    ]

    return (
        <MainLayout>
            <Helmet>
                <title>Dijital Katalog | Profesyonel Ürün Kataloğu | Pikselai</title>
                <meta name="description" content="İşletmeniz için hızlı, mobil uyumlu ve modern dijital ürün kataloğu çözümleri. WhatsApp sipariş ve PWA özellikleri." />
            </Helmet>

            {/* Hero Section */}
            <Section className="py-24 text-center" mood="light">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center rounded-full border border-bor-primary-200 bg-white px-3 py-1 text-sm font-medium text-bor-primary-600 dark:border-bor-primary-800 dark:bg-bor-primary-900 dark:text-bor-primary-300">
                        📚 Yeni Nesil Katalog
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-bor-primary-900 dark:text-white">
                        Ürünlerinizi <span className="text-bor-secondary">Dijital Dünyaya</span> Taşıyın
                    </h1>
                    <p className="text-lg text-bor-primary-500 dark:text-bor-primary-400 max-w-2xl mx-auto">
                        PDF katalogların hantallığından kurtulun. Müşterilerinize hızlı, etkileşimli ve her zaman güncel bir dijital katalog deneyimi sunun.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" onClick={() => navigate('/ucretler')}>
                            Fiyatı Gör (Tek Seferlik)
                        </Button>
                        <Button variant="outline" size="lg" href="https://wa.me/905531832344">
                            Demo Talep Et
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Visual Showcase (Mockup Placeholder) */}
            <Section mood="gray" className="overflow-hidden">
                <div className="relative max-w-5xl mx-auto">
                    <div className="aspect-[16/9] bg-white dark:bg-bor-primary-900 rounded-2xl shadow-2xl border border-bor-primary-200 dark:border-bor-primary-800 flex items-center justify-center overflow-hidden">
                        <div className="text-center p-12">
                            <span className="text-6xl mb-4 block">📱</span>
                            <h3 className="text-2xl font-bold text-bor-primary-300">Katalog Arayüzü Önizleme</h3>
                            <p className="text-bor-primary-200">Modern ve kullanıcı dostu arayüz tasarımı</p>
                        </div>
                        {/* Buraya gerçek bir ekran görüntüsü veya mockup görseli gelecek */}
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-bor-secondary/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-bor-accent/20 rounded-full blur-3xl pointer-events-none" />
                </div>
            </Section>

            {/* Features Grid */}
            <Section mood="light">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-display mb-4">Öne Çıkan Özellikler</h2>
                    <p className="text-bor-primary-500">Kataloğunuzu güçlendiren teknolojiler</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="text-4xl mb-4 w-16 h-16 rounded-2xl bg-bor-primary-50 dark:bg-bor-primary-800 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-bor-primary-500 dark:text-bor-primary-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section mood="dark" className="text-center py-24">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-8">
                    Kataloğunuzu Şimdi Oluşturun
                </h2>
                <p className="text-xl text-bor-primary-200 mb-10 max-w-2xl mx-auto">
                    Tek seferlik ödeme ile ömür boyu kullanım. Aylık veya yıllık aidat yok.
                </p>
                <Button
                    size="lg"
                    className="bg-white text-bor-primary-900 h-14 px-10 text-lg hover:bg-gray-100"
                    onClick={() => navigate('/ucretler')}
                >
                    Paketi Satın Al - ₺15.000
                </Button>
            </Section>
        </MainLayout>
    )
}

export default CatalogService
