# PikselAI-WEB İşbirliği Rehberi

Kardeşinizle birlikte aynı projede çalışırken işleri en basit ve hızlı şekilde yürütmek için aşağıdaki adımları takip edebilirsiniz.

## Temel Kural: İletişim

Birbirinizden haberiniz olduğu sürece karmaşık kurallara gerek yok. Ancak kodların birbirine karışmaması (conflict) için şu basit sırayı izlemeniz yeterlidir.

## Günlük Çalışma Akışı

1.  **İşe Başlamadan Önce (Çok Önemli):**
    Her sabah veya projeyi açtığınızda ilk yapmanız gereken şey, diğer kişinin yaptığı değişiklikleri kendi bilgisayarınıza çekmektir.
    ```bash
    git pull
    ```

2.  **Geliştirme Yapın:**
    Kodlarınızı yazın, yeni özellikler ekleyin veya hataları düzeltin.

3.  **Kaydetme (Commit):**
    Yaptığınız işi kaydedin. Ne yaptığınızı kısaca yazın ki karışıklık olmasın.
    ```bash
    git add .
    git commit -m "Ana sayfadaki logo düzeltildi"
    ```
    > **Not:** `commit` yaparken otomatik bir kontrol (lint) çalışır. Eğer kodda hata varsa sizi uyarır. Hataları düzeltip tekrar commit yapmanız gerekir.

4.  **Gönderme (Push):**
    Değişikliklerinizi GitHub'a gönderin.
    ```bash
    git push
    ```

## Çakışma (Conflict) Olursa Ne Yapmalı?

Eğer ikiniz de aynı anda **aynı dosyanın aynı satırını** değiştirdiyseniz, `git push` yaparken hata alabilirsiniz. Korkmayın, çözümü basit:

1.  Önce `git pull` yapın.
2.  VS Code size hangi dosyalarda çakışma olduğunu gösterecek.
3.  Dosyayı açın, "Hangi değişikliği tutmak istiyorsunuz?" diye soracak (Sizin değişikliğiniz mi, gelen değişiklik mi, yoksa ikisi birden mi?).
4.  Doğru olanı seçin.
5.  Tekrar `git add .`, `git commit` ve `git push` yapın.

## Özet
- Paslaşın: "Ben şu dosyada çalışıyorum" diyerek haberleşin.
- Çekin (`git pull`): Başlamadan önce daima güncelleyin.
- Gönderin (`git push`): İşiniz bitince bekletmeden gönderin.

İyi çalışmalar!
