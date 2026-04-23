import { BlogArticleTemplate, SectionHeading } from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
    { id: "giris", heading: "Favori Araçlarınızdaki Gizli Güç" },
    { id: "figma", heading: "1. Figma: AI Destekli Tasarımın Yeni Merkezi" },
    { id: "photoshop", heading: "2. Adobe Photoshop: Generative Fill Mucizesi" },
    { id: "canva", heading: "3. Canva: Magic Edit ile Tanışın" },
    { id: "google-slides", heading: "4. Google Slides: Duet AI ile Otomatik Sunumlar" },
    { id: "sonuc", heading: "Sonuç: Araçlarınızı Akıllı Kullanın" },
]

export default function GizliAiOzellikleri() {
    return (
        <BlogArticleTemplate
            title="Favori Pazarlama & Tasarım Araçlarınızdaki Gizli Yapay Zeka Özellikleri"
            metaDescription="Figma, Photoshop, Canva ve Google Slides'ın iş akışınızı hızlandıracak yapay zeka özelliklerini keşfedin."
            category="AI Destekli Yaratıcılık"
            categoryId="ai-powered-creative"
            readTime="8 dk"
            heroImage="https://cdn.sanity.io/images/k0dlbavy/production/79af68beb2c85a929135d7607b7caae6667252ac-1584x892.png?w=1584&q=95&auto=format"
            heroImageAlt="Gizli AI Özellikleri"
            sections={SECTIONS}
        >
            <div className="text-[22px] md:text-[26px] font-normal leading-[1.6] text-[#0b2117] mb-12 italic border-l-4 border-[#D8FF85] pl-6">
                Pek çok tasarım ve pazarlama aracı, son aylarda sessiz sedasız devrim niteliğinde yapay zeka özellikleri ekledi. İşte iş akışınızı kökten değiştirecek o gizli özellikler.
            </div>

            <div id="giris" className="scroll-mt-32 space-y-8">
                <p>
                    Gündelik işlerinizde kullandığınız araçların ne kadar "akıllı" olduğunu biliyor musunuz? Genellikle yeni bir AI aracı arayışına gireriz ama kullandığımız devlerin sunduğu çözümleri atlarız. Pikselai olarak biz, her aracın en verimli özelliklerini birleştirerek çalışıyoruz.
                </p>
            </div>

            <SectionHeading id="figma">1. Figma: AI Destekli Tasarımın Yeni Merkezi</SectionHeading>
            <p>
                Figma'nın "FigJam AI" özelliği, beyin fırtınası seanslarını tek tuşla organize etmenizi sağlıyor. Ayrıca Figma'nın yeni "AI for Design" araçları, taslaklarınızı (wireframe) saniyeler içinde gerçeğe dönüştürmenize yardımcı oluyor.
            </p>

            <SectionHeading id="photoshop">2. Adobe Photoshop: Generative Fill Mucizesi</SectionHeading>
            <p>
                Photoshop'un "Üretken Dolgu" (Generative Fill) özelliği, bir fotoğrafın içinden objeleri silmek veya oraya hiç olmayan objeleri eklemek için sadece bir metin komutu yazmanızı yeterli kılıyor. Eskiden saatler süren rötüş işlemleri artık saniyeler sürüyor.
            </p>

            <SectionHeading id="canva">3. Canva: Magic Edit ile Tanışın</SectionHeading>
            <p>
                Canva'nın "Sihirli Düzenleme" özelliği sayesinde, bir fotoğraftaki çiçeği saniyeler içinde bir elmaya veya bir arabayı bir uçağa dönüştürebilirsiniz. Pikselai ekipleri, hızlı içerik üretiminde bu pratik araçlardan sıkça faydalanıyor.
            </p>

            <SectionHeading id="google-slides">4. Google Slides: Duet AI ile Otomatik Sunumlar</SectionHeading>
            <p>
                Google Workspace'e entegre olan AI özellikleri, metinlerinizden otomatik olarak sunum slaytları ve görseller üretebiliyor. Sunum hazırlama süreci artık metin yazmak kadar kolay.
            </p>

            <SectionHeading id="sonuc">Sonuç: Araçlarınızı Akıllı Kullanın</SectionHeading>
            <p>
                Teknoloji geliştikçe, araçlarımız da bizimle birlikte öğreniyor. Önemli olan bu araçların hangisinin hangi iş için daha verimli olduğunu bilmek. Pikselai olarak biz, bu karmaşayı sizin için çözüyor ve markanız için en doğru araç kombinasyonunu kullanıyoruz.
            </p>
        </BlogArticleTemplate>
    )
}
