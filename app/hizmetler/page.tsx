import Link from "next/link";

import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Hizmetler | İstanbul Boya Badana Çözümleri",
  description:
    "Ev boyama, eşyalı ev boyama, ofis boyama, dış cephe boyama, rutubet çözümü, alçı sıva zımpara ve dekoratif boya hizmetleri.",
  path: "/hizmetler",
});

const breadcrumbItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
];

export default function ServicesPage() {
  return (
    <>
      <SEOJsonLd
        data={[getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbItems)]}
      />

      <PageHero
        eyebrow="Hizmet alanları"
        title="İstanbul'da ihtiyaç tipine göre planlanan boya badana hizmetleri"
        description="Her iş aynı hazırlıkla ilerlemez. Konut, ofis, eşyalı ev, rutubetli yüzey ya da dekoratif boya taleplerini ayrı kapsamlarla ele alıyoruz."
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <ServicesGrid services={services} />

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Şeffaf kapsam</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Hangi alanların boyanacağı, tavan ve tamir ihtiyacı baştan netleşmeden
            sonradan fiyat sürprizi yaşamamanız mümkün olmaz.
          </p>
        </article>
        <article className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Temiz teslim</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Hizmetin kalitesi yalnızca duvarın rengiyle ölçülmez. Zemin koruma,
            maskeleme ve son toparlama da işin parçasıdır.
          </p>
        </article>
        <article className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Doğru yönlendirme</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Her kullanıcıya aynı boya tipi ya da aynı hız sözü verilmez. İhtiyaca
            uygun olan çözüm neyse onu anlatmak daha doğrudur.
          </p>
        </article>
      </section>

      <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-950">
          İlçe sayfalarına da göz atın
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Hizmeti ilçe bazında değerlendirmek isterseniz özel landing page
          kurgumuzdan devam edebilirsiniz. Özellikle İstanbul içindeki kullanıcı
          profilini ve sık ihtiyaçları ayrı ele alıyoruz.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kadikoy-boya-badana" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-800">
            Kadıköy
          </Link>
          <Link href="/besiktas-boya-badana" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-800">
            Beşiktaş
          </Link>
          <Link href="/atasehir-boya-badana" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-800">
            Ataşehir
          </Link>
        </div>
      </section>
    </>
  );
}
