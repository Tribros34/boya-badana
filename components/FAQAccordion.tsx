import type { FAQItem } from "@/lib/types";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-950">
            {item.question}
            <span className="text-xl text-slate-400 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
