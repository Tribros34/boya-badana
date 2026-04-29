import Link from "next/link";

import type { ContentSection } from "@/lib/types";

type ContentSectionsProps = {
  sections: ContentSection[];
};

function renderParagraph(paragraph: string) {
  const parts = paragraph.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    const [, label, href] = match;

    return (
      <Link key={`${href}-${index}`} href={href}>
        {label}
      </Link>
    );
  });
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-emerald-700"
            >
              {renderParagraph(paragraph)}
            </p>
          ))}
          {section.bullets ? (
            <ul className="space-y-3 rounded-[24px] border border-stone-200 bg-stone-50 p-5 text-slate-700">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {section.note ? (
            <p className="rounded-2xl bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900">
              {section.note}
            </p>
          ) : null}
        </section>
      ))}
    </div>
  );
}
