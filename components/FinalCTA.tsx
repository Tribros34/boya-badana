import Link from "next/link";

import { getWhatsAppUrl } from "@/lib/config";

type FinalCTAProps = {
  title?: string;
  description?: string;
};

export function FinalCTA({
  title = "Evinizi boyatmadan önce net fiyat ve doğru plan alın.",
  description = "Fotoğraf, ilçe ve daire tipini paylaşın; kapsamı ve en uygun uygulama yolunu birlikte netleştirelim.",
}: FinalCTAProps) {
  return (
    <section className="rounded-[32px] border border-emerald-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(236,253,245,0.96))] px-6 py-10 shadow-sm sm:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Son adım
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
        <p className="mt-4 leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          WhatsApp&rsquo;tan Fotoğraf Gönder
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
        >
          Ücretsiz Keşif İste
        </Link>
      </div>
    </section>
  );
}
