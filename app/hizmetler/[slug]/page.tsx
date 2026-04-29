import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentSections } from "@/components/ContentSections";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { districts } from "@/data/districts";
import { getServiceBySlug, services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
  getServiceSchema,
} from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedDistricts = districts.filter((district) =>
    district.relatedServices.includes(service.slug),
  );

  const breadcrumbItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: service.title, href: `/hizmetler/${service.slug}` },
  ];

  return (
    <>
      <SEOJsonLd
        data={[
          getLocalBusinessSchema(),
          getServiceSchema(service, `/hizmetler/${service.slug}`),
          getFAQSchema(service.faqs),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />

      <PageHero
        eyebrow="Hizmet detayı"
        title={service.h1}
        description={service.metaDescription}
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <div className="grid gap-8 xl:grid-cols-[1fr_0.36fr]">
        <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <ContentSections sections={service.longContent} />
        </div>

        <aside className="space-y-6">
          <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Bu hizmetin öne çıkan tarafları
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Uygulama akışı</h2>
            <ol className="mt-4 space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-7 text-slate-600">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Bu hizmetin öne çıktığı ilçeler
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedDistricts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/${district.slug}`}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-800"
                >
                  {district.name}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            SSS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {service.title} hakkında sık sorulan sorular
          </h2>
        </div>
        <FAQAccordion items={service.faqs} />
      </section>

      <FinalCTA
        title={`${service.title} için kapsamı ve doğru boya planını birlikte netleştirelim.`}
      />
    </>
  );
}
