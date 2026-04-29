import { BlogCard } from "@/components/BlogCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { blogPosts } from "@/data/blogs";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Blog | Boya Badana Rehberleri ve Yerel İpuçları",
  description:
    "İstanbul'da boya badana, fiyat, eşyalı ev boyama, rutubet çözümü ve ofis yenileme konularında pratik blog yazıları.",
  path: "/blog",
});

const breadcrumbItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <SEOJsonLd
        data={[getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbItems)]}
      />

      <PageHero
        eyebrow="Rehber içerikler"
        title="Boya badana sürecini daha rahat yönetmek için yazılmış içerikler"
        description="Blog yalnızca trafik çekmek için değil, gerçekten işinize yarayacak pratik bilgiler sunmak için kurgulandı. Her yazıda ilgili hizmet ve ilçe sayfalarına doğal bağlantılar bulunur."
      >
        <Breadcrumb items={breadcrumbItems} />
      </PageHero>

      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </>
  );
}
