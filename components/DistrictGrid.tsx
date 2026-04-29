import Link from "next/link";

import type { District } from "@/lib/types";

type DistrictGridProps = {
  districts: District[];
};

export function DistrictGrid({ districts }: DistrictGridProps) {
  return (
    <section id="ilceler" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          İstanbul odaklı sayfalar
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          İstanbul&rsquo;un merkezi ilçelerinde profesyonel boya badana
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Her ilçe için aynı metni kopyalamak yerine, kullanıcı profilini ve sık
          görülen ihtiyaçları ayrı ayrı ele alan landing page yapısı kurduk.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {districts.map((district) => (
          <article
            key={district.slug}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-950">
                {district.name}
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {district.services[0]}
              </span>
            </div>
            <p className="mt-4 line-clamp-4 leading-7 text-slate-600">
              {district.intro[0]}
            </p>
            <p className="mt-4 text-sm font-medium text-slate-800">
              Anahtar vurgu: {district.services.join(", ")}
            </p>
            <Link
              href={`/${district.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              İlçe Sayfasına Git
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
