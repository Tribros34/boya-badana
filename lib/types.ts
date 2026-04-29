export type FAQItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  longContent: ContentSection[];
  benefits: string[];
  process: string[];
  faqs: FAQItem[];
  image: {
    src: string;
    alt: string;
  };
};

export type District = {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  customerProfile: string[];
  commonNeeds: string[];
  localHighlights: string[];
  serviceBridge: string[];
  services: string[];
  neighborhoods: string[];
  faqs: FAQItem[];
  relatedBlogs: string[];
  relatedServices: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  content: ContentSection[];
  faqs: FAQItem[];
  relatedLinks: LinkItem[];
  coverImage: {
    src: string;
    alt: string;
  };
};

export type GalleryItem = {
  title: string;
  summary: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};
