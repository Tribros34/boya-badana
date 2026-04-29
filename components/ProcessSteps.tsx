const steps = [
  "Fotoğraf veya keşif ile ihtiyacı netleştiriyoruz.",
  "Malzeme, süre ve fiyatı açıkça paylaşıyoruz.",
  "Eşyaları ve zemini koruyup uygulamaya başlıyoruz.",
  "Temiz teslim yapıp iş sonrası destek sağlıyoruz.",
];

export function ProcessSteps() {
  return (
    <section className="rounded-[32px] border border-stone-200 bg-slate-950 px-6 py-10 text-white sm:px-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
          Süreç
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          4 adımda baş ağrıtmayan boya badana süreci
        </h2>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step}
            className="rounded-[24px] border border-white/10 bg-white/5 p-5"
          >
            <span className="text-sm font-semibold text-amber-300">
              0{index + 1}
            </span>
            <p className="mt-3 text-base leading-7 text-slate-100">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
