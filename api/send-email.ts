import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
    // Sadece POST isteklerini kabul et
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { adSoyad, firma, eposta, telefon, hizmet, mesaj } = req.body;

        // Vercel Environment Variables içinden SMTP verilerini çek.
        // Eğer kullanıcı Vercel > Settings > Environment Variables bölümüne eklerse bunlar kullanılacak.
        const smtpHost = process.env.SMTP_HOST || 'mail.pikselai.com';
        const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
        const smtpUser = process.env.SMTP_USER || 'bilgi@pikselai.com';
        const smtpPass = process.env.SMTP_PASS; // ŞİFRE BURAYA VEYA VERCEL ENV'E GİRİLMELİDİR

        if (!smtpPass) {
            return res.status(500).json({ 
                success: false, 
                message: 'Sunucu tarafında (Vercel) e-posta SMTP şifresi (SMTP_PASS) tanımlanmamış.' 
            });
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // 465 için true, 587 için false
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        const mailContext = `
Merhaba, pikselai.com üzerinden yeni bir form gönderildi.

Müşteri Bilgileri:
- Ad Soyad: ${adSoyad || 'Belirtilmedi'}
- Firma: ${firma || 'Belirtilmedi'}
- E-Posta: ${eposta || 'Belirtilmedi'}
- Telefon: ${telefon || 'Belirtilmedi'}
- Hizmet Tipi: ${hizmet || 'Belirtilmedi'}

Mesaj:
${mesaj || 'Mesaj yok.'}
        `;

        const mailOptions = {
            from: `"${adSoyad} (Site Formu)" <${smtpUser}>`, // Kendi sunucumuzdan çıkıyoruz
            to: 'bilgi@pikselai.com', // Formun düşeceği ana mail adresi
            replyTo: eposta || smtpUser, // Müşteriye hızlı yanıt dönebilmek için replyTo
            subject: `Yeni Teklif Talebi: ${firma || adSoyad}`,
            text: mailContext
        };

        // Maili gönder
        await transporter.sendMail(mailOptions);
        
        return res.status(200).json({ success: true, message: 'E-Posta başarıyla gönderildi.' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return res.status(500).json({ success: false, message: 'E-Posta gönderilemedi. SMTP ayarlarınızı kontrol edin.', error: String(error) });
    }
}
