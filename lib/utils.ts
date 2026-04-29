import { siteConfig } from "@/lib/config";

type LeadFormValues = {
  district: string;
  propertyType: string;
  propertyStatus: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.baseUrl).toString();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function buildLeadMessage({
  district,
  propertyType,
  propertyStatus,
}: LeadFormValues) {
  return `Merhaba, boya badana hizmeti için fiyat almak istiyorum. İlçem: ${district}, Daire tipi: ${propertyType}, Ev durumu: ${propertyStatus}.`;
}

export function clampText(text: string, maxLength = 160) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}…`;
}
