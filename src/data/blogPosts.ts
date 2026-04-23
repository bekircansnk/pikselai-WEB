export interface BlogPost {
    id: string
    cat: string
    catId: string
    title: string
    desc: string
    img: string
    link: string
    time: string
    date?: string
    author?: string
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "gizli-ai-ozellikleri",
        cat: "AI Destekli Yaratıcılık",
        catId: "ai-powered-creative",
        title: "Favori Pazarlama & Tasarım Araçlarınızdaki Gizli Yapay Zeka Özellikleri",
        desc: "Figma, Photoshop, Canva ve Google Slides'ın iş akışınızı hızlandıracak yapay zeka özelliklerini keşfedin.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/79af68beb2c85a929135d7607b7caae6667252ac-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/gizli-ai-ozellikleri",
        time: "8 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-tasarim-trendleri",
        cat: "AI Destekli Yaratıcılık",
        catId: "ai-powered-creative",
        title: "AI Tasarım Trendleri: 2026'da Bilmeniz Gereken Her Şey",
        desc: "2026 yılının en önemli yapay zeka tasarım trendlerini keşfedin. Fotorealizmden hiper-kişiselleştirmeye, tasarım dünyasını değiştiren 7 yenilik.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/73cbb74b83da816e09969c116d1d97dfb3b53687-4181x2185.png?rect=3,0,4175,2185&w=1200&h=628&q=95&auto=format",
        link: "/blog/ai-tasarim-trendleri",
        time: "12 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-tasarim-araclari",
        cat: "AI Destekli Yaratıcılık",
        catId: "ai-powered-creative",
        title: "En İyi AI Tasarım Araçları: 2026 Kapsamlı Rehber",
        desc: "İş akışınızı %60 hızlandıracak en iyi 11 yapay zeka tasarım aracını keşfedin. Midjourney'den Adobe Firefly'a, profesyonel tasarımcıların tercihleri.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/94b4e138a387532392070d65b38d01168532f41b-2400x1260.png?w=1584&q=95&auto=format",
        link: "/blog/ai-tasarim-araclari",
        time: "15 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-gorsel-uretimi-ornekleri",
        cat: "AI Destekli Yaratıcılık",
        catId: "ai-powered-creative",
        title: "AI Görsel Üretimi: İlham Veren Örnekler ve En İyi Uygulamalar",
        desc: "Yapay zeka ile görsel üretiminin sınırlarını zorlayın. Ürün fotoğrafçılığından sanal mankenlere, markalar için en başarılı AI kullanım örnekleri.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/49a71227189f7f465c6978438127393433a1f81d-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/ai-gorsel-uretimi-ornekleri",
        time: "10 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-telif-haklari",
        cat: "Yaratıcı Liderlik",
        catId: "creative-leadership",
        title: "Yapay Zeka ve Telif Hakları: Yaratıcı Ekipler İçin Kapsamlı Rehber",
        desc: "Yapay zeka ile üretilen içeriklerin telif hakları kime ait? Markalar için AI kullanımında yasal riskler ve dikkat edilmesi gerekenler.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/9773463372c088c442436f562477382d51b32d84-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/ai-telif-haklari",
        time: "10 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-pazarlama-kampanyalari",
        cat: "Dijital Pazarlama",
        catId: "digital-marketing",
        title: "Yaratıcılığın Sınırlarını Zorlayan En Başarılı 9 AI Pazarlama Kampanyası",
        desc: "Dünya devlerinin yapay zeka kullanarak hayata geçirdiği en etkileyici pazarlama kampanyalarını inceleyin. Coca-Cola'dan Nike'a, ilham veren AI örnekleri.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/e6e768784d16d97c729e24699564757c91d4e0e2-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/ai-pazarlama-kampanyalari",
        time: "12 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarimda-ai-gelecegi",
        cat: "Yaratıcı Liderlik",
        catId: "creative-leadership",
        title: "Tasarımda Yapay Zekanın Geleceği: Kimler Öne Geçecek?",
        desc: "Yapay zeka tasarım dünyasını nasıl dönüştürüyor? Hız, ölçek ve yaratıcılık ekseninde tasarımın geleceğine dair uzman öngörüleri.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/49a71227189f7f465c6978438127393433a1f81d-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/tasarimda-ai-gelecegi",
        time: "11 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarim-is-akisi-otomasyon",
        cat: "Pikselai'ın İçinden",
        catId: "inside-pikselai",
        title: "Tasarım İş Akışında Otomasyon: Pikselai'ın İçinden Sırlar",
        desc: "Tasarım süreçlerini otomatize ederek nasıl 5 kat daha hızlı içerik üretiyoruz? Pikselai'ın iç iş akışlarını ve otomasyon stratejilerini keşfedin.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/73cbb74b83da816e09969c116d1d97dfb3b53687-4181x2185.png?rect=3,0,4175,2185&w=1200&h=628&q=95&auto=format",
        link: "/blog/tasarim-is-akisi-otomasyon",
        time: "9 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-marka-rehberleri",
        cat: "Markaya Dair Her Şey",
        catId: "all-things-brand",
        title: "AI ve Marka Rehberleri: Geleceğin Görsel Standartlarını Belirlemek",
        desc: "Yapay zeka marka rehberlerini nasıl dönüştürüyor? Statik PDF'lerden yaşayan, dinamik AI modellerine geçiş süreci ve marka tutarlılığı.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/cc45c8502599723ec00424560731a57c2a74421b-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/ai-marka-rehberleri",
        time: "10 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-video-pazarlama",
        cat: "Video Pazarlama",
        catId: "video-marketing",
        title: "AI ile Video Pazarlama: Saniyeler İçinde Etkileyici İçerikler Üretin",
        desc: "Yapay zeka video pazarlamasını nasıl değiştiriyor? AI video araçları, kurgu otomasyonu ve sosyal medya için stratejik video üretim rehberimiz.",
        img: "https://cdn.sanity.io/images/k0dlbavy/production/be30a7d9796e62552834b9983944736f8f04757c-1584x892.png?w=1584&q=95&auto=format",
        link: "/blog/ai-video-pazarlama",
        time: "11 dk",
        date: "23 Nisan 2026"
    }
]

export const BLOG_CATEGORIES = [
    { id: "tumu",                  label: "Tümü" },
    { id: "ai-powered-creative",   label: "AI Destekli Yaratıcılık" },
    { id: "all-things-brand",      label: "Markaya Dair Her Şey" },
    { id: "creative-leadership",   label: "Yaratıcı Liderlik" },
    { id: "customer-stories",      label: "Müşteri Hikayeleri" },
    { id: "digital-marketing",     label: "Dijital Pazarlama" },
    { id: "inside-pikselai",       label: "Pikselai'ın İçinden" },
    { id: "video-marketing",       label: "Video Pazarlama" },
]
