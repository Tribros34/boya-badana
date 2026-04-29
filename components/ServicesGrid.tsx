import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/types";

type ServicesGridProps = {
  services: Service[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Hizmetler
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Farklı ihtiyaçlar için tek tip teklif vermiyoruz
          </h2>
        </div>
        <p className="max-w-2xl leading-8 text-slate-600">
          Ev, ofis, eşyalı uygulama, rutubet çözümü ya da dekoratif boya gibi
          farklı işlerde hazırlık ve teslim standardı değişiyor. Her sayfa bu
          farkı açıkça anlatacak şekilde hazırlanmıştır.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <div className="relative h-52 bg-stone-100">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {service.shortDescription}
              </p>
              <Link
                href={`/hizmetler/${service.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Detaylı İncele
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
