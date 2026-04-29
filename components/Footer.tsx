import Link from "next/link";

import { districts } from "@/data/districts";
import { services } from "@/data/services";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

const featuredBlogs = [
  {
    label: "İstanbul boya badana fiyatları",
    href: "/blog/istanbul-boya-badana-fiyatlari",
  },
  {
    label: "Eşyalı evde boya badana",
    href: "/blog/esyali-evde-boya-badana-nasil-yapilir",
  },
  {
    label: "Rutubetli duvar nasıl boyanır",
    href: "/blog/rutubetli-duvar-nasil-boyanir",
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Boya Badana İstanbul
          </p>
          <p className="mt-4 max-w-md leading-8 text-slate-600">
            Biz sadece duvar boyamıyoruz; taşınma ve yenilenme sürecini daha az
            yorucu, daha planlı ve daha temiz hale getirmeye çalışıyoruz.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-slate-700">
            <Link className="font-semibold text-emerald-700" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              WhatsApp&rsquo;tan Hızlı Fiyat Al
            </Link>
            <Link href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</Link>
            <p>{siteConfig.areaServed.join(", ")}</p>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-950">Hizmetler</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetler/${service.slug}`} className="transition hover:text-slate-950">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-950">İlçeler</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {districts.map((district) => (
              <li key={district.slug}>
                <Link href={`/${district.slug}`} className="transition hover:text-slate-950">
                  {district.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-950">Blog ve Bilgi</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {featuredBlogs.map((blog) => (
              <li key={blog.href}>
                <Link href={blog.href} className="transition hover:text-slate-950">
                  {blog.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/iletisim" className="transition hover:text-slate-950">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/gizlilik-politikasi" className="transition hover:text-slate-950">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href="/kvkk-aydinlatma" className="transition hover:text-slate-950">
                KVKK Aydınlatma Metni
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
