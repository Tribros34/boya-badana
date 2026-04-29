import Image from "next/image";
import Link from "next/link";

import type { GalleryItem } from "@/lib/types";

type GalleryPreviewProps = {
  items: GalleryItem[];
  compact?: boolean;
};

export function GalleryPreview({
  items,
  compact = false,
}: GalleryPreviewProps) {
  const list = compact ? items.slice(0, 6) : items;

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Galeri
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Öncesi sonrası ve çalışma düzeni
          </h2>
        </div>
        <p className="max-w-2xl leading-8 text-slate-600">
          Fotoğraf alanları gerçek çekimlerle kolayca değiştirilebilir şekilde
          kurgulandı. Şimdilik her kartta doğal alt metin ve gerçekçi sahne
          başlıkları yer alıyor.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {list.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Öncesi
                </span>
                <div className="relative h-48 overflow-hidden rounded-2xl bg-stone-100">
                  <Image
                    src={item.beforeSrc}
                    alt={item.beforeAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Sonrası
                </span>
                <div className="relative h-48 overflow-hidden rounded-2xl bg-stone-100">
                  <Image
                    src={item.afterSrc}
                    alt={item.afterAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
          </article>
        ))}
      </div>

      {compact ? (
        <Link
          href="/galeri"
          className="inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
        >
          Tüm galeriyi incele
        </Link>
      ) : null}
    </section>
  );
}
