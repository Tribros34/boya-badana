import Link from "next/link";

import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { PriceEstimatorForm } from "@/components/PriceEstimatorForm";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { pricingFaqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Boya Badana Fiyatları | İstanbul İçin Yaklaşık Fiyat Mantığı",
  description:
    "İstanbul'da boya badana fiyatını etkileyen unsurlar: metrekare, oda sayısı, eşyalı durum, tavan, yüzey onarımı ve boya tipi.",
  path: "/boya-badana-fiyatlari",
});

const breadcrumbItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Fiyatlar", href: "/boya-badana-fiyatlari" },
];

const factors = [
  "Dairenin m2'si ve oda sayısı",
  "Eşyalı ya da boş olması",
  "Tavanların işin içinde olup olmaması",
  "Alçı, sıva, zımpara ve lokal tamir ihtiyacı",
  "Rutubet, küf ve yoğun leke durumu",
  "Kullanılacak boya markası ve boya tipi",
  "İlçe, bina koşulu ve ekip planlaması",
];

export default function PricingPage() {
  return (
    <>
      <SEOJsonLd
        data={[
          getLocalBusinessSchema(),
          getFAQSchema(pricingFaqs),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />

      <PageHero
        eyebrow="Dürüst fiyat yaklaşımı"
        title="Boya badana fiyatı tek cümleyle değil, doğru kapsamla netleşir"
        description="Net fiyat için çoğu zaman keşif gerekir. Yine de hangi detayların fiyatı etkilediğini açık anlatarak süreci daha şeffaf hale getirebiliriz."
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Yaklaşık fiyat isterken ne paylaşmak gerekir
          </h2>
          <p className="mt-5 leading-8 text-slate-700">
            İlçe, daire tipi, boş ya da eşyalı bilgisi ve birkaç net fotoğraf çoğu
            işte başlangıç için yeterli olur. Böylece verilen aralık daha gerçekçi
            hale gelir ve sonradan kapsam tartışması azalır.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Telefonda tek rakam vermek kulağa hoş gelebilir ama çoğu zaman sağlıklı
            değildir. Doğru yöntem, önce işin kapsamını anlamak ve ardından net
            çerçeve çizmektir.
          </p>
        </article>

        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Fiyatı etkileyen başlıca faktörler
          </h2>
          <ul className="mt-5 space-y-4">
            {factors.map((factor) => (
              <li key={factor} className="flex gap-4 rounded-2xl bg-stone-50 p-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span className="leading-7 text-slate-700">{factor}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <PriceEstimatorForm
        title="Fiyat hesaplama formu"
        description="Form gönderiminden sonra teşekkür mesajı gösterilir. Hemen ardından fotoğrafları WhatsApp'tan ileterek ortalama fiyat çerçevesini hızlandırabilirsiniz."
      />

      <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-950">
          Fotoğraf gönder, ortalama fiyat al
        </h2>
        <p className="mt-5 leading-8 text-slate-700">
          En pratik yöntem, boyanacak alanların ışık alan net fotoğraflarını
          göndermek. Özellikle rutubet, koyu renk geçişi veya tavan lekesi varsa
          bunu önceden görmek hem fiyat hem süre açısından daha dürüst bir plan
          yapmamızı sağlar.
        </p>
        <Link
          href="/iletisim"
          className="mt-6 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
        >
          İletişim sayfasına git
        </Link>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Fiyat SSS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Fiyatlandırma hakkında sık sorulan sorular
          </h2>
        </div>
        <FAQAccordion items={pricingFaqs} />
      </section>

      <FinalCTA title="Kapsamı netleştirelim, sürprizsiz bir boya planı çıkaralım." />
    </>
  );
}
