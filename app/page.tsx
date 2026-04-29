import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";
import { DistrictGrid } from "@/components/DistrictGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { GalleryPreview } from "@/components/GalleryPreview";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { ServicesGrid } from "@/components/ServicesGrid";
import { blogPosts } from "@/data/blogs";
import { districts } from "@/data/districts";
import { homeFaqs } from "@/data/faqs";
import { galleryItems } from "@/data/gallery";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQSchema, getLocalBusinessSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "İstanbul Boya Badana | 1 Günde Temiz ve Garantili Boyacı Hizmeti",
  description:
    "İstanbul'da eşyalı ve boş evler için temiz, planlı ve şeffaf fiyatlı boya badana hizmeti. Ücretsiz keşif, WhatsApp'tan hızlı teklif ve 1 günde teslim imkanı.",
  path: "/",
});

const trustPoints = [
  "Planlı ekip",
  "Temiz çalışma",
  "Şeffaf teklif",
  "İş sonrası destek",
  "Faturalı çalışma opsiyonu",
  "Kurumsal muhatap",
];

export default function Home() {
  return (
    <>
      <SEOJsonLd data={[getLocalBusinessSchema(), getFAQSchema(homeFaqs)]} />

      <HeroSection />

      <ProblemSolutionSection />

      <ServicesGrid services={services} />

      <DistrictGrid districts={districts} />

      <ProcessSteps />

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Güven
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Evini emanet ettiğin ekibi tanımak istersin.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {trustPoints.map((point) => (
            <article
              key={point}
              className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{point}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Teklifi ve uygulamayı rastgele değil, baştan konuşulmuş plan
                içinde yürütmeye çalışırız.
              </p>
            </article>
          ))}
        </div>
      </section>

      <GalleryPreview items={galleryItems} compact />

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Blog
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Karar vermeyi kolaylaştıran rehber yazılar
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
          >
            Tüm yazıları incele
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 6).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Sık Sorulan Sorular
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Boya badana öncesi en çok sorulan sorular
          </h2>
        </div>
        <FAQAccordion items={homeFaqs} />
      </section>

      <FinalCTA />
    </>
  );
}
