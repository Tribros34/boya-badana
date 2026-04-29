import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
      <div className="relative h-52 bg-stone-100">
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{post.category}</span>
          <span aria-hidden="true">•</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-950">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-emerald-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
        >
          Yazıyı oku
        </Link>
      </div>
    </article>
  );
}
