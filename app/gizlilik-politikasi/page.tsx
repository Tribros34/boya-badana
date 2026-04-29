import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gizlilik Politikası",
  description:
    "İletişim formları ve teklif talepleri sırasında paylaşılan bilgilerin gizliliğine dair örnek politika metni.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal metin"
        title="Gizlilik Politikası"
        description="Bu sayfa, teklif talepleri sırasında paylaşılan temel bilgilerin nasıl ele alındığını açıklayan örnek bir politika metnidir."
      >
        <Breadcrumb
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
          ]}
        />
      </PageHero>

      <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="space-y-5 leading-8 text-slate-700">
          <p>
            İletişim formu, telefon ve WhatsApp üzerinden paylaştığınız bilgiler
            yalnızca teklif oluşturma, randevu planlama ve hizmet sürecini
            yönetme amacıyla değerlendirilir.
          </p>
          <p>
            Bu örnek projede form gönderimleri mock akış olarak çalışır. Gerçek
            ortamda kişisel veri işleme ve saklama detayları işletmenin hukuki
            yapısına göre güncellenmelidir.
          </p>
          <p>
            İleride canlı kullanıma alınırken çerez yönetimi, KVKK kapsamı ve veri
            saklama prosedürleri gerçek işletme bilgileriyle uyumlu biçimde
            düzenlenmelidir.
          </p>
        </div>
      </article>
    </>
  );
}
