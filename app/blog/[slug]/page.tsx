import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentSections } from "@/components/ContentSections";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";
import { formatDate } from "@/lib/utils";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SEOJsonLd
        data={[
          getLocalBusinessSchema(),
          getBlogPostingSchema(post, `/blog/${post.slug}`),
          getFAQSchema(post.faqs),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      >
        <div className="space-y-4">
          <Breadcrumb items={breadcrumbItems} />
          <p className="text-sm text-slate-500">
            {formatDate(post.date)} • {post.readingTime}
          </p>
        </div>
      </PageHero>

      <div className="grid gap-8 xl:grid-cols-[1fr_0.34fr]">
        <article className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
          <ContentSections sections={post.content} />
        </article>

        <aside className="space-y-6">
          <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              İlgili sayfalar
            </h2>
            <ul className="mt-4 space-y-3">
              {post.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                  >
                    {link.label}
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
            Yazı içi SSS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {post.title} hakkında kısa cevaplar
          </h2>
        </div>
        <FAQAccordion items={post.faqs} />
      </section>

      <FinalCTA title="Kendi eviniz ya da ofisiniz için doğru uygulama planını birlikte çıkaralım." />
    </>
  );
}
