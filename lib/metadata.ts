import type { Metadata } from "next";

import { siteConfig } from "@/lib/config";
import { absoluteUrl, clampText } from "@/lib/utils";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: CreatePageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const cleanDescription = clampText(description, 170);

  return {
    title,
    description: cleanDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "tr_TR",
      url,
      title,
      description: cleanDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} sosyal paylaşım görseli`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cleanDescription,
      images: [absoluteUrl("/twitter-image")],
    },
  };
}
