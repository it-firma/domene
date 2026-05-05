import Link from "next/link";
import { Icon } from "@/lib/icons";
import type { GlossaryTerm } from "@/lib/types";

export function GlossaryCard({ term }: { term: GlossaryTerm }) {
  return (
    <Link
      href={`/ordliste/${term.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition hover:border-brand-light hover:shadow-card"
    >
      <div className="font-display text-[15px] font-medium text-ink">
        {term.term}
      </div>
      <p className="mt-2 flex-1 font-display text-[13px] leading-[1.55] text-muted">
        {term.shortDefinition.split(".")[0]}.
      </p>
      <div className="mt-4 inline-flex items-center gap-1 font-display text-[12px] font-medium text-brand">
        Se forklaring <Icon.ArrowRight size={12} />
      </div>
    </Link>
  );
}
