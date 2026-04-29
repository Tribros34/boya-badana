import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "Teklif talebi ve iletişim süreçleri için hazırlanmış örnek KVKK aydınlatma metni sayfası.",
  path: "/kvkk-aydinlatma",
});

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal metin"
        title="KVKK Aydınlatma Metni"
        description="Bu alan, gerçek işletme bilgileri girilerek üretim ortamına uygun hale getirilebilecek örnek bir KVKK sayfasıdır."
      >
        <Breadcrumb
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "KVKK Aydınlatma", href: "/kvkk-aydinlatma" },
          ]}
        />
      </PageHero>

      <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="space-y-5 leading-8 text-slate-700">
          <p>
            Teklif almak, keşif planlamak ya da iletişim talebi bırakmak amacıyla
            paylaştığınız ad, telefon, ilçe ve benzeri bilgiler yalnızca hizmet
            sürecinin planlanması kapsamında değerlendirilir.
          </p>
          <p>
            Bu proje örnek içeriklerle üretildiği için, canlı kullanıma geçmeden
            önce gerçek veri sorumlusu bilgileri, saklama süreleri ve başvuru
            kanalları hukuk danışmanlığıyla birlikte netleştirilmelidir.
          </p>
          <p>
            Kullanıcıya güven veren bir site için yalnızca tasarım değil, veri
            işleme şeffaflığı da önemlidir. Bu nedenle sayfa yapısı hazırlandı ve
            kolayca gerçek metinle değiştirilebilir hale getirildi.
          </p>
        </div>
      </article>
    </>
  );
}
