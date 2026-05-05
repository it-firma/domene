import Link from "next/link";
import { Icon } from "@/lib/icons";

interface RelatedItem {
  label: string;
  description?: string;
  href: string;
}

/**
 * Cluster of internal links displayed at the bottom of articles
 * to strengthen topic clusters and help users navigate.
 */
export function RelatedLinks({
  title,
  items,
  variant = "light",
}: {
  title: string;
  items: RelatedItem[];
  variant?: "light" | "dark";
}) {
  if (!items || items.length === 0) return null;
  const isDark = variant === "dark";
  return (
    <section className="my-10">
      <h3
        className={`font-display text-[11px] font-medium uppercase tracking-[0.18em] mb-4 ${
          isDark ? "text-white/60" : "text-muted"
        }`}
      >
        {title}
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2 list-none m-0 p-0">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-start justify-between gap-3 rounded-xl border p-4 transition ${
                isDark
                  ? "border-white/10 bg-white/[0.03] text-white/85 hover:bg-white/[0.06] hover:border-white/20"
                  : "border-line bg-white text-ink hover:border-brand-light"
              }`}
            >
              <span className="flex-1">
                <span className="block font-display text-[14.5px] font-medium">
                  {item.label}
                </span>
                {item.description && (
                  <span
                    className={`block font-display text-[12.5px] mt-1 ${
                      isDark ? "text-white/55" : "text-muted"
                    }`}
                  >
                    {item.description}
                  </span>
                )}
              </span>
              <Icon.ChevronRight
                size={16}
                className={`mt-0.5 flex-shrink-0 ${
                  isDark ? "text-white/40" : "text-muted-light"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
