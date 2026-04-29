import { siteConfig } from "@/lib/config";
import type {
  BlogPost,
  BreadcrumbItem,
  FAQItem,
  Service,
} from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    areaServed: siteConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressCountry: "TR",
    },
    serviceType: [
      "Boya badana",
      "Ev boyama",
      "Ofis boyama",
      "Rutubet ve küf çözümü",
      "Dış cephe boyama",
    ],
    image: absoluteUrl("/opengraph-image"),
    sameAs: [absoluteUrl("/")],
  };
}

export function getServiceSchema(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.shortDescription,
    areaServed: siteConfig.areaServed,
    url: absoluteUrl(path),
    provider: {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: siteConfig.legalName,
      url: siteConfig.baseUrl,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
    },
  };
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function getBlogPostingSchema(post: BlogPost, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(post.coverImage.src),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.ico"),
      },
    },
  };
}
