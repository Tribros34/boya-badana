import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/BlogCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { blogPosts } from "@/data/blogs";
import { districts, getDistrictBySlug } from "@/data/districts";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

type DistrictPageProps = {
  params: Promise<{ districtSlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return districts.map((district) => ({ districtSlug: district.slug }));
}

export async function generateMetadata({ params }: DistrictPageProps) {
  const { districtSlug } = await params;
  const district = getDistrictBySlug(districtSlug);

  if (!district) {
    return {};
  }

  return createPageMetadata({
    title: district.metaTitle,
    description: district.metaDescription,
    path: `/${district.slug}`,
  });
}

export default async function DistrictPage({ params }: DistrictPageProps) {
  const { districtSlug } = await params;
  const district = getDistrictBySlug(districtSlug);

  if (!district) {
    notFound();
  }

  const relatedServices = services.filter((service) =>
    district.relatedServices.includes(service.slug),
  );
  const relatedPosts = blogPosts.filter((post) =>
    district.relatedBlogs.includes(post.slug),
  );

  const breadcrumbItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: district.name, href: `/${district.slug}` },
  ];

  return (
    <>
      <SEOJsonLd
        data={[
          getLocalBusinessSchema(),
          getFAQSchema(district.faqs),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />

      <PageHero
        eyebrow="İlçe landing page"
        title={district.h1}
        description={district.metaDescription}
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <div className="grid gap-8 xl:grid-cols-[1fr_0.34fr]">
        <div className="space-y-8">
          <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              {`${district.name}'de boya badana beklentisi neden farklı`}
            </h2>
            <div className="mt-5 space-y-5">
              {district.intro.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              Bu ilçede hangi müşteri tipleri öne çıkıyor
            </h2>
            <div className="mt-5 space-y-5">
              {district.customerProfile.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              En sık görülen boya badana ihtiyaçları
            </h2>
            <div className="mt-5 space-y-5">
              {district.commonNeeds.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {district.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              {`${district.name}'e göre uygulama yaklaşımı`}
            </h2>
            <div className="mt-5 space-y-5">
              {district.localHighlights.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              Bu ilçede hangi hizmetler daha çok karşılık buluyor
            </h2>
            <div className="mt-5 space-y-5">
              {district.serviceBridge.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedServices.map((service) => (
                <article
                  key={service.slug}
                  className="rounded-[24px] border border-stone-200 bg-stone-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-emerald-700"
                  >
                    İlgili hizmeti incele
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              İlçe özeti
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {district.services.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              İlgili blog yazıları
            </h2>
            <ul className="mt-4 space-y-3">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            İlçe SSS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {district.name} boya badana hizmeti hakkında sık sorulan sorular
          </h2>
        </div>
        <FAQAccordion items={district.faqs} />
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Rehber içerikler
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {district.name} için karar vermeyi kolaylaştıran yazılar
            </h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <FinalCTA
        title={`${district.name} için boya planını, süresini ve fiyat çerçevesini netleştirelim.`}
      />
    </>
  );
}
