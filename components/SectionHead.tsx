import Link from "next/link";
import { Icon } from "@/lib/icons";

/**
 * Section header with "N°XX — eyebrow" Fraunces italic and large title.
 */
export function SectionHead({
  number,
  eyebrow,
  title,
  description,
  seeAll,
  variant = "light",
}: {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  seeAll?: { label: string; href: string };
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <header className="mb-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex-1 max-w-[680px]">
        <div
          className={`mb-2 font-serif italic text-[14px] ${
            isDark ? "text-white/55" : "text-muted"
          }`}
        >
          {number && <span className="mr-2">N°{number}</span>}
          {number && <span className="mr-2 text-current/40">—</span>}
          {eyebrow}
        </div>
        <h2
          className={`font-display text-[28px] md:text-[36px] font-medium tracking-[-0.02em] leading-[1.15] ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-3 font-display text-[15px] leading-[1.6] ${
              isDark ? "text-white/60" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {seeAll && (
        <Link
          href={seeAll.href}
          className={`inline-flex items-center gap-1.5 font-display text-[13.5px] font-medium transition ${
            isDark
              ? "text-brand-light hover:text-white"
              : "text-brand hover:text-brand-dark"
          }`}
        >
          {seeAll.label} <Icon.ArrowRight size={14} />
        </Link>
      )}
    </header>
  );
}
