import Link from "next/link";
import { Icon, IconByName } from "@/lib/icons";
import type { Tool } from "@/lib/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/verktoy/${tool.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:border-brand-light hover:shadow-card"
    >
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <IconByName name={tool.icon} size={24} />
      </span>
      <h3 className="font-display text-[15px] font-medium text-ink">
        {tool.name}
      </h3>
      <p className="mt-2 flex-1 font-display text-[12.5px] leading-[1.55] text-muted">
        {tool.description}
      </p>
      <div className="mt-4 flex items-center justify-between pt-4 border-t border-line">
        {tool.status === "coming-soon" ? (
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">
            Kommer snart
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
            Tilgjengelig
          </span>
        )}
        <span className="inline-flex items-center gap-1 font-display text-[12px] font-medium text-brand">
          Åpne <Icon.ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
