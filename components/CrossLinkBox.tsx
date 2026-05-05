import Link from "next/link";
import { Icon } from "@/lib/icons";

/**
 * Small directional link card used to bridge a category page and a glossary
 * entry that share the same slug. Renders nothing if href is missing.
 */
export function CrossLinkBox({
  eyebrow,
  title,
  description,
  href,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <Link
      href={href}
      className="group mt-8 block rounded-2xl border border-line bg-white p-6 transition hover:border-brand-light hover:shadow-card"
    >
      <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-2">
        {eyebrow}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-[16px] font-medium text-ink mb-1">
            {title}
          </div>
          {description && (
            <p className="m-0 font-display text-[13.5px] leading-[1.55] text-muted">
              {description}
            </p>
          )}
        </div>
        <span className="inline-flex items-center gap-1 font-display text-[13px] font-medium text-brand whitespace-nowrap">
          {ctaLabel} <Icon.ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
