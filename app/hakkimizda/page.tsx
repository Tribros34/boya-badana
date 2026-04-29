import { Breadcrumb } from "@/components/Breadcrumb";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Hakkımızda | Planlı, Temiz ve Güven Veren Boya Badana Ekibi",
  description:
    "Biz sadece duvar boyamıyoruz; taşınma ve yenilenme sürecinizi kolaylaştıran planlı, temiz ve ulaşılabilir bir hizmet sunuyoruz.",
  path: "/hakkimizda",
});

const breadcrumbItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
];

const pillars = [
  "İşi başlamadan önce kapsamı netleştiririz.",
  "Eşyaları ve zemini korumadan uygulamaya geçmeyiz.",
  "Söz verdiğimiz saat ve teslim süresini ciddiye alırız.",
  "Boya sonrasında da ulaşılabilir olmayı önemseriz.",
];

export default function AboutPage() {
  return (
    <>
      <SEOJsonLd
        data={[getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbItems)]}
      />

      <PageHero
        eyebrow="Marka yaklaşımı"
        title="Biz sadece duvar boyamıyoruz, taşınma ve yenilenme sürecinizi kolaylaştırıyoruz"
        description="Bu siteyi sıradan bir boyacı vitrini gibi değil, işi düzenli yöneten bir çözüm ortağı gibi kurguluyoruz. Çünkü kullanıcıların en büyük ihtiyacı yalnızca usta değil, güven veren bir süreç."
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Nasıl çalışırız</h2>
          <p className="mt-5 leading-8 text-slate-700">
            İstanbul&rsquo;da boya badana hizmeti alırken kullanıcıların en büyük kaygısı
            düzensizliktir: usta geç gelir, fiyat değişir, iş uzar, ev kirli
            kalır. Biz bu sektörde fark yaratmanın yolunun, daha çok cümle kurmak
            değil daha düzenli çalışmak olduğuna inanıyoruz.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Bu yüzden teklif aşamasından teslim anına kadar her adımın görünür
            olmasına dikkat ediyoruz. İster eşyalı bir aile evi olsun ister hafta
            sonu boyanması gereken ofis, hedefimiz kullanıcının neyle
            karşılaşacağını baştan bilmesidir.
          </p>
        </article>

        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">İş disiplinimiz</h2>
          <div className="mt-5 grid gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-[24px] border border-stone-200 bg-stone-50 p-5"
              >
                <p className="leading-7 text-slate-700">{pillar}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <FinalCTA title="Kapsamı konuşalım, size uygun boya planını birlikte çıkaralım." />
    </>
  );
}
