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
        img: "/assets/pages/blog/gizli_ai_ozellikleri.jpeg",
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
        img: "/assets/pages/blog/ai_tasarim_trendleri_2026.jpeg",
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
        img: "/assets/pages/blog/en_iyi_ai_araclari.jpeg",
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
        img: "/assets/pages/blog/ai_gorsel_uretimi_ornekleri.jpeg",
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
        img: "/assets/pages/blog/ai_telif_haklari.jpeg",
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
        img: "/assets/pages/blog/ai_pazarlama_kampanyalari.png",
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
        img: "/assets/pages/blog/tasarimda_ai_gelecegi.png",
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
        img: "/assets/pages/blog/tasarim_is_akisi_otomasyon.jpeg",
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
        img: "/assets/pages/blog/ai_marka_rehberleri.jpeg",
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
        img: "/assets/pages/blog/ai_video_pazarlama.jpeg",
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
