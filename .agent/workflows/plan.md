---
description: project-planner ajanını kullanarak proje planı oluştur. Kod yazmak yok - sadece plan dosyası oluşturma.
---

# /plan - Proje Planlama Modu

$ARGUMENTS

---

## 🔴 KRİTİK KURALLAR

1. **KOD YAZMAK YOK** - Bu komut sadece plan dosyası oluşturur
2. **project-planner ajanını kullan** - Claude Code'un yerel Plan alt ajanını DEĞİL
3. **Sokratik Kapı** - Planlamadan önce netleştirici sorular sor
4. **Dinamik İsimlendirme** - Göreve dayalı plan dosyası ismi

---

## Görev

`project-planner` ajanını şu bağlamla kullan:

```
BAĞLAM:
- Kullanıcı İsteği: $ARGUMENTS
- Mod: SADECE PLANLAMA (kod yok)
- Çıktı: docs/PLAN-{task-slug}.md (dinamik isimlendirme)

İSİMLENDİRME KURALLARI:
1. İstekten 2-3 anahtar kelime çıkar
2. Küçük harf, tire ile ayrılmış
3. Maksimum 30 karakter
4. Örnek: "e-ticaret sepeti" → PLAN-eticaret-sepeti.md

KURALLAR:
1. project-planner.md Aşama -1'i (Bağlam Kontrolü) izle
2. project-planner.md Aşama 0'ı (Sokratik Kapı) izle
3. Görev kırılımı ile PLAN-{slug}.md oluştur
4. Herhangi bir kod dosyası YAZMA
5. Oluşturulan tam dosya adını RAPORLA
```

---

## Beklenen Çıktı

| Teslimat | Konum |
|----------|-------|
| Proje Planı | `docs/PLAN-{task-slug}.md` |
| Görev Kırılımı | Plan dosyası içinde |
| Ajan Atamaları | Plan dosyası içinde |
| Doğrulama Kontrol Listesi | Plan dosyasında Aşama X |

---

## Planlamadan Sonra

Kullanıcıya söyle:
```
[TAMAM] Plan oluşturuldu: docs/PLAN-{slug}.md

Sonraki adımlar:
- Planı inceleyin
- Uygulamayı başlatmak için `/create` çalıştırın
- Veya planı manuel olarak değiştirin
```

---

## İsimlendirme Örnekleri

| İstek | Plan Dosyası |
|-------|--------------|
| `/plan sepetli e-ticaret sitesi` | `docs/PLAN-eticaret-sepet.md` |
| `/plan fitness için mobil uygulama` | `docs/PLAN-fitness-app.md` |
| `/plan karanlık mod özelliği ekle` | `docs/PLAN-karanlik-mod.md` |
| `/plan kimlik doğrulama hatasını düzelt` | `docs/PLAN-auth-fix.md` |
| `/plan SaaS gösterge paneli` | `docs/PLAN-saas-dashboard.md` |

---

## Kullanım

```
/plan sepetli e-ticaret sitesi
/plan fitness takibi için mobil uygulama
/plan analitik özellikli SaaS gösterge paneli
```
