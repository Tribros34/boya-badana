import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blogs";
import { districts } from "@/data/districts";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/config";

const staticRoutes = [
  "",
  "/hizmetler",
  "/blog",
  "/boya-badana-fiyatlari",
  "/galeri",
  "/hakkimizda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/kvkk-aydinlatma",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.baseUrl}/hizmetler/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const districtEntries = districts.map((district) => ({
    url: `${siteConfig.baseUrl}/${district.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...serviceEntries, ...districtEntries, ...blogEntries];
}
