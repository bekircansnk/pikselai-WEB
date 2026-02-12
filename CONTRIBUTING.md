# PikselAI-WEB Projesine Katkı Rehberi

PikselAI-WEB projesine hoş geldiniz! Geliştiriciler arasında sorunsuz bir işbirliği sağlamak için belirli bir Git iş akışını izliyoruz.

## Dallanma (Branch) Stratejisi

Basit ama etkili bir strateji kullanıyoruz:

1.  **Ana Dal (`main`)**: Bu bizim üretim (production) dalımızdır. Buradaki kod her zaman kararlı ve yayına hazır olmalıdır.
    - **Koruma**: `main` dalına doğrudan kod göndermek (push) yasaktır. Tüm değişiklikler bir "Pull Request" (PR) ile gelmelidir.

2.  **Özellik Dalları (Feature Branches)**: Yeni özellikler, geliştirmeler veya acil olmayan düzeltmeler için.
    - **İsimlendirme**: `feature/ozellik-isimi` (örn: `feature/giris-sayfasi`, `feature/banner-guncelleme`)
    - **Kaynak**: Her zaman `main` dalından türetilmelidir.

3.  **Hata Düzeltme Dalları (Bugfix Branches)**: Acil düzeltilmesi gereken hatalar için.
    - **İsimlendirme**: `fix/hata-aciklamasi` (örn: `fix/header-kaymasi`)
    - **Kaynak**: Her zaman `main` dalından türetilmelidir.

## İş Akışı Adımları

1.  **Eşitleme (Sync)**: Başlamadan önce yerel `main` dalınızın güncel olduğundan emin olun:
    ```bash
    git checkout main
    git pull origin main
    ```

2.  **Dal Oluşturma**: Yapacağınız iş için yeni bir dal oluşturun:
    ```bash
    git checkout -b feature/yeni-ozellik-isminiz
    ```

3.  **Geliştirme**: Kodunuzu yazın ve değişikliklerinizi yapın.
    - **Otomatik Kontrol**: Her `commit` işleminden önce kodunuz otomatik olarak taranır (lint). Eğer hatalı kod varsa işlem engellenir. Hataları düzeltip tekrar deneyin.

4.  **Commit**: Açıklayıcı mesajlar kullanın:
    ```bash
    git commit -m "Giriş formu bileşenleri ve stilleri eklendi"
    ```

5.  **Gönderme (Push)**: Dalınızı GitHub'a gönderin:
    ```bash
    git push origin feature/yeni-ozellik-isminiz
    ```

6.  **Pull Request (PR)**:
    - GitHub proje sayfasına gidin.
    - "Compare & pull request" butonuna tıklayın.
    - Yaptığınız değişiklikleri açıklayın.
    - Diğer geliştiriciyi "Reviewer" (Gözden Geçiren) olarak atayın.

7.  **İnceleme ve Birleştirme**:
    - Gözden geçiren kişi kodu inceler.
    - Onaylandıktan sonra "Merge" işlemi ile kod `main` dalına alınır.
    - İşlem bitince özellik dalı silinir.

## Kod Kalitesi

- **Lint**: `npm run lint` komutunun hatasız çalıştığından emin olun.
- **Format**: Kod düzenine dikkat edin.
