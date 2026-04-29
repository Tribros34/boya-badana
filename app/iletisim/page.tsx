import Link from "next/link";

import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { PriceEstimatorForm } from "@/components/PriceEstimatorForm";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { districts } from "@/data/districts";
import { contactFaqs } from "@/data/faqs";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "İletişim | Ücretsiz Keşif ve WhatsApp'tan Hızlı Fiyat",
  description:
    "Telefon, WhatsApp, iletişim formu, hizmet bölgeleri ve Google Maps alanı ile İstanbul boya badana iletişim sayfası.",
  path: "/iletisim",
});

const breadcrumbItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "İletişim", href: "/iletisim" },
];

export default function ContactPage() {
  return (
    <>
      <SEOJsonLd
        data={[
          getLocalBusinessSchema(),
          getFAQSchema(contactFaqs),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />

      <PageHero
        eyebrow="Hızlı iletişim"
        title="Ücretsiz keşif iste, WhatsApp'tan hızlı fiyat al, bizi arayın"
        description="İlçe, daire tipi ve birkaç fotoğraf ile hızlı başlangıç yapabilirsiniz. Gerekirse kısa keşif planlayıp kapsamı netleştiriyoruz."
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Telefon</h2>
          <Link href={siteConfig.phoneHref} className="mt-4 inline-flex text-lg font-semibold text-emerald-700">
            {siteConfig.phoneDisplay}
          </Link>
          <p className="mt-3 leading-7 text-slate-600">
            Uygun olduğumuz saatlerde hızlıca geri dönüş yapıyoruz.
          </p>
        </article>
        <article className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">WhatsApp</h2>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-lg font-semibold text-emerald-700"
          >
            WhatsApp&rsquo;tan hızlı fiyat al
          </Link>
          <p className="mt-3 leading-7 text-slate-600">
            Fotoğraf gönder, ortalama fiyat çerçevesi için süreci hızlandıralım.
          </p>
        </article>
        <article className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Hizmet bölgeleri</h2>
          <p className="mt-4 leading-7 text-slate-600">
            {districts.map((district) => district.name).join(", ")}
          </p>
        </article>
      </section>

      <PriceEstimatorForm
        title="İletişim formu"
        description="Form gönderiminden sonra teşekkür mesajı ve WhatsApp yönlendirmesi gösterilir. Yapı daha sonra backend'e bağlanabilecek şekilde düzenlenmiştir."
      />

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Harita alanı
          </h2>
          <p className="mt-4 leading-8 text-slate-700">
            Google Maps embed alanı kolayca gerçek konuma çevrilebilir. Şimdilik
            İstanbul merkezli örnek bir gömme bağlantı kullanılıyor.
          </p>
          <div className="mt-6 overflow-hidden rounded-[24px] border border-stone-200">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="İstanbul boya badana hizmet bölgesi haritası"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>

        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            En sık kullanılan CTA&rsquo;lar
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="/boya-badana-fiyatlari"
              className="inline-flex justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Ücretsiz keşif iste
            </Link>
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800"
            >
              WhatsApp&rsquo;tan hızlı fiyat al
            </Link>
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800"
            >
              Bizi arayın
            </Link>
          </div>
        </article>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            İletişim SSS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Keşif ve iletişim hakkında sık sorulan sorular
          </h2>
        </div>
        <FAQAccordion items={contactFaqs} />
      </section>
    </>
  );
}
