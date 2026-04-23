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
        catId: "yapay-zeka-yaraticilik",
        title: "Favori Pazarlama & Tasarım Araçlarınızdaki Gizli Yapay Zeka Özellikleri",
        desc: "Figma, Photoshop, Canva ve Google Slides'ın iş akışınızı hızlandıracak yapay zeka özelliklerini keşfedin.",
        img: "/assets/pages/blog/gizli_ai_ozellikleri.webp",
        link: "/blog/yapay-zeka-yaraticilik/gizli-ai-ozellikleri",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-pazarlama-kampanyalari",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "Yaratıcılığın Sınırlarını Zorlayan En Başarılı AI Pazarlama Kampanyaları",
        desc: "Türk markalarının yapay zeka kullanarak hayata geçirdiği en etkileyici pazarlama kampanyalarını inceleyin. Venüs Ayakkabı, CAMPANDMAP ve Cazador örnekleri.",
        img: "/assets/pages/blog/ai_pazarlama_kampanyalari.webp",
        link: "/blog/dijital-pazarlama/ai-pazarlama-kampanyalari",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-tasarim-trendleri",
        cat: "AI Destekli Yaratıcılık",
        catId: "yapay-zeka-yaraticilik",
        title: "AI Tasarım Trendleri: 2026'da Bilmeniz Gereken Her Şey",
        desc: "2026 yılının en önemli yapay zeka tasarım trendlerini keşfedin. Fotorealizmden hiper-kişiselleştirmeye, tasarım dünyasını değiştiren 7 yenilik.",
        img: "/assets/pages/blog/ai_tasarim_trendleri_2026.webp",
        link: "/blog/yapay-zeka-yaraticilik/ai-tasarim-trendleri",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-tasarim-araclari",
        cat: "AI Destekli Yaratıcılık",
        catId: "yapay-zeka-yaraticilik",
        title: "En İyi AI Tasarım Araçları: 2026 Kapsamlı Rehber",
        desc: "İş akışınızı %60 hızlandıracak en iyi 11 yapay zeka tasarım aracını keşfedin. Midjourney'den Adobe Firefly'a, profesyonel tasarımcıların tercihleri.",
        img: "/assets/pages/blog/en_iyi_ai_araclari.webp",
        link: "/blog/yapay-zeka-yaraticilik/ai-tasarim-araclari",
        time: "7 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-gorsel-uretimi-ornekleri",
        cat: "AI Destekli Yaratıcılık",
        catId: "yapay-zeka-yaraticilik",
        title: "AI Görsel Üretimi: İlham Veren Örnekler ve En İyi Uygulamalar",
        desc: "Yapay zeka ile görsel üretiminin sınırlarını zorlayın. Ürün fotoğrafçılığından sanal mankenlere, markalar için en başarılı AI kullanım örnekleri.",
        img: "/assets/pages/blog/ai_gorsel_uretimi_ornekleri.webp",
        link: "/blog/yapay-zeka-yaraticilik/ai-gorsel-uretimi-ornekleri",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-telif-haklari",
        cat: "Yaratıcı Liderlik",
        catId: "yaratici-liderlik",
        title: "Yapay Zeka ve Telif Hakları: Yaratıcı Ekipler İçin Kapsamlı Rehber",
        desc: "Yapay zeka ile üretilen içeriklerin telif hakları kime ait? Markalar için AI kullanımında yasal riskler ve dikkat edilmesi gerekenler.",
        img: "/assets/pages/blog/ai_telif_haklari.webp",
        link: "/blog/yaratici-liderlik/ai-telif-haklari",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarimda-ai-gelecegi",
        cat: "Yaratıcı Liderlik",
        catId: "yaratici-liderlik",
        title: "Tasarımda Yapay Zekanın Geleceği: Kimler Öne Geçecek?",
        desc: "Yapay zeka tasarım dünyasını nasıl dönüştürüyor? Hız, ölçek ve yaratıcılık ekseninde tasarımın geleceğine dair uzman öngörüleri.",
        img: "/assets/pages/blog/tasarimda_ai_gelecegi.webp",
        link: "/blog/yaratici-liderlik/tasarimda-ai-gelecegi",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarim-is-akisi-otomasyon",
        cat: "Pikselai'ın İçinden",
        catId: "pikselainin-icinden",
        title: "Tasarım İş Akışında Otomasyon: Pikselai'ın İçinden Sırlar",
        desc: "Tasarım süreçlerini otomatize ederek nasıl 5 kat daha hızlı içerik üretiyoruz? Pikselai'ın iç iş akışlarını ve otomasyon stratejilerini keşfedin.",
        img: "/assets/pages/blog/tasarim_is_akisi_otomasyon.webp",
        link: "/blog/pikselainin-icinden/tasarim-is-akisi-otomasyon",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-marka-rehberleri",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "AI ve Marka Rehberleri: Geleceğin Görsel Standartlarını Belirlemek",
        desc: "Yapay zeka marka rehberlerini nasıl dönüştürüyor? Statik PDF'lerden yaşayan, dinamik AI modellerine geçiş süreci ve marka tutarlılığı.",
        img: "/assets/pages/blog/ai_marka_rehberleri.webp",
        link: "/blog/marka-rehberi/ai-marka-rehberleri",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-video-pazarlama",
        cat: "Video Pazarlama",
        catId: "video-pazarlama",
        title: "AI ile Video Pazarlama: Saniyeler İçinde Etkileyici İçerikler Üretin",
        desc: "Yapay zeka video pazarlamasını nasıl değiştiriyor? AI video araçları, kurgu otomasyonu ve sosyal medya için stratejik video üretim rehberimiz.",
        img: "/assets/pages/blog/ai_video_pazarlama.webp",
        link: "/blog/video-pazarlama/ai-video-pazarlama",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarimda-yapay-zeka",
        cat: "AI Destekli Yaratıcılık",
        catId: "yapay-zeka-yaraticilik",
        title: "Tasarımda Yapay Zeka: Nerede, Nasıl ve Neden?",
        desc: "Yapay zeka tasarım dünyasını nasıl dönüştürüyor? Hız, ölçek ve yaratıcılık ekseninde tasarımın geleceğine dair uzman öngörüleri.",
        img: "/assets/pages/blog/tasarimda_yapay_zeka.webp",
        link: "/blog/yapay-zeka-yaraticilik/tasarimda-yapay-zeka",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "sosyal-medya-icerik-donusturme",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "Sosyal Medya İçin AI ile İçerik Dönüştürme",
        desc: "Tek bir ana içerikten onlarca sosyal medya paylaşımı üretin. Yapay zeka ile içerik dönüştürme stratejileri ve ipuçları.",
        img: "/assets/pages/blog/sosyal_medya_icerik_donusturme.webp",
        link: "/blog/dijital-pazarlama/sosyal-medya-icerik-donusturme",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "marka-kimligi-rehberi",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Marka Kimliği Oluşturma Rehberi",
        desc: "Marka kimliği nedir? Logo, renk paleti ve tipografi ile markanızı nasıl ayrıştırırsınız? Adım adım stratejiler.",
        img: "/assets/pages/blog/marka_kimligi_rehberi.webp",
        link: "/blog/marka-rehberi/marka-kimligi-rehberi",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarimci-ise-alma-rehberi",
        cat: "Yaratıcı Liderlik",
        catId: "yaratici-liderlik",
        title: "5 Kritik Soru: Grafik Tasarımcı İşe Alırken Nelere Dikkat Edilmeli?",
        desc: "İş ilanını yayınlamadan önce durun. Bir tasarımcı işe alırken sormanız gereken 5 soru ile doğru kararı verin.",
        img: "/assets/pages/blog/tasarimci_ise_alma_rehberi.webp",
        link: "/blog/yaratici-liderlik/tasarimci-ise-alma-rehberi",
        time: "8 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-reklam-gorselleri",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "AI Reklam Görselleri: İlham Veren 10 Başarı Hikayesi",
        desc: "Yapay zeka reklam dünyasını nasıl değiştiriyor? Nutella, Trivago ve SmartNews gibi markaların AI başarı hikayeleri.",
        img: "/assets/pages/blog/ai_reklam_gorselleri.webp",
        link: "/blog/dijital-pazarlama/ai-reklam-gorselleri",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "reklam-yaraticilik-trendleri",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "Reklam Yaratıcılık Trendleri: 2026'da Öne Çıkan 5 Strateji",
        desc: "2026'nın reklam dünyasını şekillendiren trendleri keşfedin. Kısa videolar ve AI destekli kişiselleştirme.",
        img: "/assets/pages/blog/reklam_yaraticilik_trendleri.webp",
        link: "/blog/dijital-pazarlama/reklam-yaraticilik-trendleri",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-reklam-gorseli-olusturma",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "AI ile Reklam Görseli Oluşturma: Adım Adım Başarı Rehberi",
        desc: "Yapay zeka kullanarak nasıl yüksek performanslı reklam görselleri oluşturulur? Adım adım süreçler ve araçlar.",
        img: "/assets/pages/blog/ai_reklam_gorseli_olusturma.webp",
        link: "/blog/dijital-pazarlama/ai-reklam-gorseli-olusturma",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "marka-tasarim-trendleri",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Marka Tasarım Trendleri: 2026'da Neler Değişiyor?",
        desc: "2026 marka tasarım trendlerini keşfedin. Otantiklik, nostalji ve AI'nın marka kimliği üzerindeki etkileri.",
        img: "/assets/pages/blog/marka_tasarim_trendleri.webp",
        link: "/blog/marka-rehberi/marka-tasarim-trendleri",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "markalasma-rehberi",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Kapsamlı Markalaşma Rehberi: Sıfırdan Zirveye Marka İnşası",
        desc: "Markalaşma süreci nasıl yönetilir? Strateji, konumlandırma ve görsel kimlik konularında kapsamlı rehber.",
        img: "/assets/pages/blog/markalasma_rehberi.webp",
        link: "/blog/marka-rehberi/markalasma-rehberi",
        time: "7 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "yaratici-liderlik",
        cat: "Yaratıcı Liderlik",
        catId: "yaratici-liderlik",
        title: "Yaratıcı Liderlik: Tasarım Ekiplerini Yönetme Sanatı",
        desc: "İyi bir tasarımcıdan iyi bir lidere nasıl dönüşülür? Yaratıcı liderlik basamaklarını ve ekip yönetiminin püf noktalarını keşfedin.",
        img: "/assets/pages/blog/yaratici_liderlik.webp",
        link: "/blog/yaratici-liderlik/yaratici-liderlik",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "tasarim-sistemleri",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Tasarım Sistemleri: Nedir ve Neden Önemli?",
        desc: "Tasarım sistemleri ile marka tutarlılığını nasıl sağlarsınız? Vimeo örneği ve tasarım sistemlerinin faydaları.",
        img: "/assets/pages/blog/tasarim_sistemleri.webp",
        link: "/blog/marka-rehberi/tasarim-sistemleri",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "eticaret-web-tasarimi",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "E-Ticaret Web Tasarımı: Satışları Artıran 5 Temel Kural",
        desc: "E-ticaret sitenizi nasıl satış makinesine dönüştürürsünüz? Ana sayfa, ürün sayfası ve ödeme süreçleri.",
        img: "/assets/pages/blog/eticaret_web_tasarimi.webp",
        link: "/blog/marka-rehberi/eticaret-web-tasarimi",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "video-pazarlama-stratejisi",
        cat: "Video Pazarlama",
        catId: "video-pazarlama",
        title: "Video Pazarlama Stratejisi: 2026 Rehberi",
        desc: "Video pazarlamasında başarıya giden yol haritası. 70-20-10 kuralı, kanal stratejileri ve video içerik üretimi.",
        img: "/assets/pages/blog/video_pazarlama_stratejisi.webp",
        link: "/blog/video-pazarlama/video-pazarlama-stratejisi",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "motion-grafik-ornekleri",
        cat: "Video Pazarlama",
        catId: "video-pazarlama",
        title: "İlham Veren Motion Grafik Örnekleri: 2026",
        desc: "Motion grafiklerin gücünü keşfedin. Intel, PayPal ve Dropbox gibi markaların ilham veren örnekleri.",
        img: "/assets/pages/blog/motion_grafik_ornekleri.webp",
        link: "/blog/video-pazarlama/motion-grafik-ornekleri",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-video-olusturma-araclari",
        cat: "Video Pazarlama",
        catId: "video-pazarlama",
        title: "En İyi AI Video Oluşturma Araçları: 2026",
        desc: "2026'nın en iyi yapay zeka video araçlarını keşfedin. Runway, HeyGen ve Sora gibi araçlarla prodüksiyonu ölçeklendirin.",
        img: "/assets/pages/blog/ai_video_olusturma_araclari.webp",
        link: "/blog/video-pazarlama/ai-video-olusturma-araclari",
        time: "7 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-eposta-pazarlama",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "AI ile E-posta Pazarlama: Dönüşüm Artırma Rehberi",
        desc: "Yapay zeka e-posta pazarlamasını nasıl dönüştürüyor? Kişiselleştirme, otomasyon ve optimizasyon stratejileri.",
        img: "/assets/pages/blog/ai_eposta_pazarlama.webp",
        link: "/blog/dijital-pazarlama/ai-eposta-pazarlama",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "sosyal-medya-kampanyalari",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "Başarılı Sosyal Medya Kampanyaları: İlham Veren 5 Dev Marka",
        desc: "Dünya devlerinin en başarılı sosyal medya kampanyalarını inceleyin. Spotify, Dove, H&M ve Walmart örnekleri.",
        img: "/assets/pages/blog/sosyal_medya_kampanyalari.webp",
        link: "/blog/dijital-pazarlama/sosyal-medya-kampanyalari",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ambalaj-tasarimi",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Ambalaj Tasarımı: Ürününüzü Rafta Nasıl Öne Çıkarırsınız?",
        desc: "Ürün ambalajı tasarımında dikkat edilmesi gerekenler. Sürdürülebilirlik, görsel etki ve unboxing deneyimi.",
        img: "/assets/pages/blog/ambalaj_tasarimi.webp",
        link: "/blog/marka-rehberi/ambalaj-tasarimi",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "logo-tasarim-ipuclari",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Kusursuz Logo Tasarımı: İpuçları ve Örnekler",
        desc: "Etkileyici bir logo nasıl tasarlanır? Sadelik, tipografi, renk seçimi ve görsel hiyerarşi üzerine profesyonel ipuçları.",
        img: "/assets/pages/blog/logo_tasarim_ipuclari.webp",
        link: "/blog/marka-rehberi/logo-tasarim-ipuclari",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "olceklenebilir-yaraticilik",
        cat: "Yaratıcı Liderlik",
        catId: "yaratici-liderlik",
        title: "Ölçeklenebilir Yaratıcılık: Tasarım Operasyonları",
        desc: "Kurumsal markalar tasarım süreçlerini nasıl ölçeklendirir? DesignOps, AI entegrasyonu ve optimizasyon.",
        img: "/assets/pages/blog/olceklenebilir_yaraticilik.webp",
        link: "/blog/yaratici-liderlik/olceklenebilir-yaraticilik",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-destekli-ajanslar",
        cat: "AI Destekli Yaratıcılık",
        catId: "yapay-zeka-yaraticilik",
        title: "Yapay Zeka Destekli Ajanslar: Yeni Nesil İş Ortakları",
        desc: "Yapay zeka destekli ajanslar tasarım dünyasını nasıl değiştiriyor? AI ajanslarıyla çalışmanın avantajları.",
        img: "/assets/pages/blog/ai_destekli_ajanslar.webp",
        link: "/blog/yapay-zeka-yaraticilik/ai-destekli-ajanslar",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "icerik-pazarlamasi-ornekleri",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "İçerik Pazarlaması Örnekleri: 5 İlham Veren Yol",
        desc: "Dünya çapında başarıya ulaşmış içerik pazarlaması örneklerini inceleyin. LEGO, Patagonia ve Netflix stratejileri.",
        img: "/assets/pages/blog/icerik_pazarlamasi_ornekleri.webp",
        link: "/blog/dijital-pazarlama/icerik-pazarlamasi-ornekleri",
        time: "5 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "ai-video-nasil-olusturulur",
        cat: "Video Pazarlama",
        catId: "video-pazarlama",
        title: "AI ile Video Nasıl Oluşturulur? Adım Adım Rehber",
        desc: "Yapay zeka ile profesyonel videolar nasıl üretilir? Senaryo hazırlığından araç seçimine adım adım AI video rehberi.",
        img: "/assets/pages/blog/ai_video_nasil_olusturulur.webp",
        link: "/blog/video-pazarlama/ai-video-nasil-olusturulur",
        time: "7 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "renklerin-gucu",
        cat: "Markaya Dair Her Şey",
        catId: "marka-rehberi",
        title: "Renklerin Gücü: Marka Kimliğinde Stratejik Renk Seçimi",
        desc: "Renklerin tüketici psikolojisi üzerindeki etkisini keşfedin. Markanız için doğru renkleri nasıl seçersiniz?",
        img: "/assets/pages/blog/renklerin_gucu.webp",
        link: "/blog/marka-rehberi/renklerin-gucu",
        time: "4 dk",
        date: "23 Nisan 2026"
    },
    {
        id: "dijital-pazarlama-trendleri",
        cat: "Dijital Pazarlama",
        catId: "dijital-pazarlama",
        title: "Dijital Pazarlama Trendleri: 2026'da Büyüme Stratejileri",
        desc: "2026 dijital pazarlama dünyasını şekillendiren trendleri keşfedin. AI analitiği, video stratejileri ve büyüme.",
        img: "/assets/pages/blog/dijital_pazarlama_trendleri.webp",
        link: "/blog/dijital-pazarlama/dijital-pazarlama-trendleri",
        time: "5 dk",
        date: "23 Nisan 2026"
    }

]

export const BLOG_CATEGORIES = [
    { id: "tumu",                  label: "Tümü" },
    { id: "yapay-zeka-yaraticilik",   label: "AI Destekli Yaratıcılık" },
    { id: "marka-rehberi",      label: "Markaya Dair Her Şey" },
    { id: "yaratici-liderlik",   label: "Yaratıcı Liderlik" },
    { id: "dijital-pazarlama",     label: "Dijital Pazarlama" },
    { id: "pikselainin-icinden",       label: "Pikselai'ın İçinden" },
    { id: "video-pazarlama",       label: "Video Pazarlama" },
]
