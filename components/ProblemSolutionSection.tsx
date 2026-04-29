const items = [
  {
    problem: "Sonradan artan fiyatlar",
    solution: "Sabit fiyat prensibi",
  },
  {
    problem: "Geç gelen ustalar",
    solution: "Planlı ekip",
  },
  {
    problem: "Kirlenen eşyalar",
    solution: "Maskeleme ve zemin koruma",
  },
  {
    problem: "Günlerce süren işler",
    solution: "1 günde teslim hedefi",
  },
  {
    problem: "Kalitesiz boya",
    solution: "Marka boya seçenekleri",
  },
  {
    problem: "İş sonrası muhatap bulamama",
    solution: "İş sonrası destek",
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Güven mimarisi
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Boya badana yaptırırken en çok ne can sıkıyor, biliyoruz.
        </h2>
        <p className="mt-4 max-w-xl leading-8 text-slate-600">
          Kullanıcıların çekinmesini anlıyoruz. Bu yüzden site boyunca yalnızca
          hizmet anlatmıyor, hangi riski nasıl yönettiğimizi açıkça gösteriyoruz.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.problem}
            className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-rose-700">{item.problem}</p>
            <div className="my-4 h-px bg-stone-200" />
            <p className="text-base font-medium text-slate-900">{item.solution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
