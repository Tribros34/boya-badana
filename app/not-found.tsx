import Link from "next/link";

export default function NotFound() {
  return (
    <section className="rounded-[32px] border border-stone-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Sayfa bulunamadı
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        Aradığınız sayfa taşınmış olabilir
      </h1>
      <p className="mt-5 leading-8 text-slate-600">
        Ana sayfaya dönerek hizmetler, ilçe sayfaları ve blog içerikleri üzerinden
        devam edebilirsiniz.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
      >
        Ana sayfaya dön
      </Link>
    </section>
  );
}
