# İşlerimiz Sayfası Kategori ve Klasör Mimarisi Planı

## 🎯 Hedef
`Islerimiz.tsx` sayfasındaki kategori filtrelerini kullanıcının talepleri doğrultusunda düzenlemek ve her bir proje (kart) için yönetimi kolaylaştıracak modüler, iç içe geçmiş bir klasör yapısı inşa etmek.

---

## 🛑 User Review Required (Sokratik Sorular)

> [!IMPORTANT]
> Projeyi koda dökmeden önce netleştirmemiz gereken bazı noktalar var. Lütfen aşağıdaki sorulara yanıt ver:
> 
> 1. **Klasörlerin Yeri:** Tüm bu klasör sistemini `public/islerimiz/` ana klasörü altında mı toplayalım, yoksa halihazırda var olan `public/sosyal_medya_resimler/` veya `public/assets/pages/islerimiz/` gibi bir klasörün altına mı konumlandıralım? `public/islerimiz/` en temizi gibi görünüyor, ne dersin?
> 2. **Proje (Kart) Verileri:** React'ta klasörlerin içini dinamik okumak (Node.js backend'i olmadan) pek mümkün olmadığı için, fotoğrafları klasörlere attıktan sonra `Islerimiz.tsx` içindeki `projects` (mock data) dizisine bu yeni klasör yollarını (Örn: `/islerimiz/kampanya/cazador_kis_seti/1.webp`) manuel olarak girmemiz gerekecek. Bu veri girişini kod üzerinden yapmak senin için uygun mu? (Gelecekte dilersen bunu otomatikleştiren küçük bir "scripts" dosyası da yazabiliriz).
> 3. **Temsili Kartlar (Mockup):** Ben kodlamayı yaparken senin için bu kategorilere ait temsili boş 1-2 kart oluşturacağım. Sonrasında sen klasörlere fotoğrafları attıkça bu kartların içindeki linkleri güncelleyeceksin, doğru mu anlıyorum?

---

## 🛠 Planlanan Değişiklikler

### 1. Kategori (Filtre) Düzenlemesi
`Islerimiz.tsx` içerisindeki kategoriler aşağıdaki gibi güncellenecektir:

*   **[DELETE]** "AI Fotoğraf" kaldırılacak.
*   **[DELETE]** "Sanal Manken" kaldırılacak.
*   **[MODIFY]** "Social Media" adı "Sosyal Medya" olarak değiştirilecek.
*   **[NEW]** "Kampanya" kategorisi eklenecek.
*   **[NEW]** "Hayalet Çekim" kategorisi eklenecek.

**Yeni Kategori Listesi:**
`Tümü`, `E-Ticaret`, `Sosyal Medya`, `Ürün Fotoğrafçılığı`, `Kampanya`, `Hayalet Çekim`

### 2. Klasör Mimarisi Kurulumu
Projenin `public/islerimiz/` dizini (veya senin belirleyeceğin kök dizin) altında aşağıdaki hiyerarşiyi oluşturacağız. Her kategori kendi ana klasörüne sahip olacak.

```text
public/
  └── islerimiz/
      ├── e_ticaret/
      │   └── [proje_kart_adi_1]/      <- 8-10 fotoğraflık setin bulunacağı klasör
      ├── sosyal_medya/
      │   └── [proje_kart_adi_2]/ 
      ├── urun_fotografciligi/
      │   └── [proje_kart_adi_3]/ 
      ├── kampanya/
      │   └── [proje_kart_adi_4]/ 
      └── hayalet_cekim/
          └── [proje_kart_adi_5]/ 
```

### 3. Kod Tarafı (Veri Yapısı) Uyarlaması
*   Var olan `projects` dizisi, yeni kategorilere göre (Kampanya, Hayalet Çekim vb.) güncellenmiş temsili projelerle değiştirilecek.
*   Örnek bir projenin `images` array'i doğrudan yeni klasör mimarisini işaret edecek (Örn: `/islerimiz/hayalet_cekim/cazador_set_1/foto_1.webp`).
*   Sayfanın alt kısmında footer bölgesinde yazan "AI FOTOĞRAF" gibi eski link başlıkları da yeni kategori isimleriyle uyumlu hale getirilecek.

---

## ✅ Doğrulama Planı
1. **Görsel Kontrol:** Sayfa açıldığında sadece belirttiğin filtre seçenekleri görünecek.
2. **Filtre Testi:** Her bir filtreye tıklandığında sadece o kategoriye ait "setlerin" (kartların) listelendiği test edilecek.
3. **Detay Görünüm Testi:** Kartın içine tıklandığında (Modal), ayarlanan alt klasörlerdeki o sete ait olan 8-10 fotoğrafın başarıyla yatay/dikey formlarda render edildiği doğrulanacak.
