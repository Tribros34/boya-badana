export const siteConfig = {
  name: "Boya Badana İstanbul",
  legalName: "Boya Badana İstanbul Hizmetleri",
  description:
    "İstanbul'da ev, ofis ve iş yerleri için temiz, planlı ve şeffaf fiyatlı boya badana hizmeti.",
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.istanbulboyabadana.com",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+90 532 123 45 67",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF ?? "tel:+905321234567",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "905321234567",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "iletisim@boyabadanaistanbul.com",
  addressLocality: "İstanbul",
  areaServed: [
    "Kadıköy",
    "Beşiktaş",
    "Bakırköy",
    "Adalar",
    "Maltepe",
    "Şişli",
    "Üsküdar",
    "Ataşehir",
    "Çekmeköy",
  ],
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=Istanbul&output=embed",
  defaultWhatsAppMessage:
    "Merhaba, boya badana hizmeti için fiyat almak istiyorum.",
} as const;

export function getWhatsAppUrl(message: string = siteConfig.defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
