import Link from "next/link";
import { Icon } from "@/lib/icons";
import { findCategory } from "@/data/categories";
import type { Guide } from "@/lib/types";

export function GuideCard({
  guide,
  variant = "light",
}: {
  guide: Guide;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const cat = findCategory(guide.category);
  return (
    <Link
      href={`/guider/${guide.slug}`}
      className={`group flex h-full flex-col rounded-2xl p-6 transition ${
        isDark
          ? "border border-white/[0.08] bg-white/[0.03] hover:border-brand-light/30 hover:bg-white/[0.06]"
          : "border border-line bg-white hover:border-brand-light hover:shadow-card"
      }`}
    >
      <div
        className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl self-start ${
          isDark ? "bg-brand/15 text-brand-light" : "bg-brand/10 text-brand"
        }`}
      >
        <Icon.Edit size={22} />
      </div>
      <h3
        className={`font-display text-[15px] font-medium leading-[1.3] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {guide.title}
      </h3>
      <p
        className={`mt-2.5 flex-1 font-display text-[12.5px] leading-[1.55] ${
          isDark ? "text-white/60" : "text-muted"
        }`}
      >
        {guide.description}
      </p>
      <div
        className={`mt-4 flex items-center justify-between pt-4 border-t ${
          isDark ? "border-white/[0.08]" : "border-line"
        }`}
      >
        {cat && (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${
              isDark
                ? "bg-brand/15 text-brand-light"
                : "bg-brand/10 text-brand"
            }`}
          >
            {cat.name}
          </span>
        )}
        <span
          className={`flex items-center gap-1 font-display text-[11.5px] ${
            isDark ? "text-white/50" : "text-muted-light"
          }`}
        >
          <Icon.Clock size={12} /> {guide.readingTime} min
        </span>
      </div>
    </Link>
  );
}
