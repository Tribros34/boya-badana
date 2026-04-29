import { Breadcrumb } from "@/components/Breadcrumb";
import { GalleryPreview } from "@/components/GalleryPreview";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { galleryItems } from "@/data/gallery";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Galeri | Öncesi Sonrası Boya Badana Çalışmaları",
  description:
    "Öncesi sonrası uygulamalar, eşya koruma düzeni, maskeleme ve temiz teslim örnekleri ile galeri sayfası.",
  path: "/galeri",
});

const breadcrumbItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Galeri", href: "/galeri" },
];

export default function GalleryPage() {
  return (
    <>
      <SEOJsonLd
        data={[getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbItems)]}
      />

      <PageHero
        eyebrow="Çalışma örnekleri"
        title="Öncesi sonrası kartlarıyla temiz ve planlı çalışma düzeni"
        description="Gerçek fotoğraflar eklendiğinde aynı yapı korunacak şekilde galeri kurgulandı. Şimdilik SEO uyumlu alt metinleri olan doğal placeholder görseller kullanılıyor."
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <GalleryPreview items={galleryItems} />
    </>
  );
}
