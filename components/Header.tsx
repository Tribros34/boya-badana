import Link from "next/link";

import { getWhatsAppUrl } from "@/lib/config";

const navItems = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "İlçeler", href: "/#ilceler" },
  { label: "Fiyatlar", href: "/boya-badana-fiyatlari" },
  { label: "Blog", href: "/blog" },
  { label: "Galeri", href: "/galeri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(247,243,238,0.88)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
            Boya Badana İstanbul
          </span>
          <span className="text-lg font-semibold text-slate-950">
            Temiz, planlı, güven veren hizmet
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            WhatsApp&rsquo;tan Fiyat Al
          </Link>
        </div>

        <details className="lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-800">
            Menü
          </summary>
          <div className="absolute left-4 right-4 top-[72px] rounded-[24px] border border-stone-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-800 transition hover:bg-stone-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
              >
                WhatsApp&rsquo;tan Fiyat Al
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
