import Link from "next/link";

import { getWhatsAppUrl, siteConfig } from "@/lib/config";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link
          href={siteConfig.phoneHref}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-3 py-3 text-xs font-semibold text-slate-800"
        >
          Ara
        </Link>
        <Link
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-3 text-xs font-semibold text-white"
        >
          WhatsApp
        </Link>
        <Link
          href="/boya-badana-fiyatlari"
          className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 px-3 py-3 text-xs font-semibold text-amber-900"
        >
          Teklif Al
        </Link>
      </div>
    </div>
  );
}
