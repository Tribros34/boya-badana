import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="rounded-[32px] border border-stone-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        {description}
      </p>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
