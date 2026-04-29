import Link from "next/link";

import { getWhatsAppUrl } from "@/lib/config";

import { TrustBadges } from "./TrustBadges";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-stone-200 bg-white px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:px-10 lg:px-12 lg:py-14">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_55%)] lg:block" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative">
          <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            İstanbul genelinde planlı boya badana hizmeti
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            İstanbul&rsquo;da 1 Günde Temiz, Garantili Boya Badana
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Eşyalı ya da boş dairenizi; zemin, mobilya ve kapılarınızı koruyarak,
            sürpriz fiyat çıkarmadan, planlanan sürede boyuyoruz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp&rsquo;tan Hızlı Fiyat Al
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950"
              href="/iletisim"
            >
              Ücretsiz Keşif İste
            </Link>
          </div>
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>

        <aside className="relative rounded-[28px] border border-stone-200 bg-slate-950 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)]">
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              Hızlı plan
            </span>
            <span className="text-sm text-slate-300">İlk dönüş aynı gün</span>
          </div>
          <h2 className="text-2xl font-semibold">
            İlk 15 saniyede güven vermesi gereken şeyler
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Boya kapsamını, malzemeyi ve yaklaşık süreyi baştan açık konuşuruz.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Eşyaları, zemini ve kapı detaylarını korumadan uygulamaya başlamayız.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Ofis ve taşınma işleri için hafta sonu ya da sıkışık takvime uygun plan çıkarırız.
            </li>
          </ul>
          <div className="mt-6 rounded-2xl bg-white p-4 text-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              En çok sorulan
            </p>
            <p className="mt-2 text-sm font-medium">
              &ldquo;Net fiyat için ne gerekiyor?&rdquo;
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              İlçe, daire tipi ve birkaç fotoğraf çoğu işte yeterli başlangıç verir.
              Sonrasında gerekiyorsa kısa keşif ile kapsamı netleştiririz.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
