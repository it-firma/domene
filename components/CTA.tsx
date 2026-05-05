import Link from "next/link";
import { Icon } from "@/lib/icons";

interface Props {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: "navy" | "light";
}

/**
 * Reusable, calm CTA box. Per the brief: helpful first, never aggressive.
 */
export function CTA({
  title = "Trenger du eksperthjelp?",
  description = "Snakk med våre rådgivere om domener, DNS, e-post eller domenestrategi. Trygge råd, ingen forpliktelser.",
  primaryLabel = "Få eksperthjelp",
  primaryHref = "/eksperthjelp",
  variant = "navy",
}: Props) {
  if (variant === "light") {
    return (
      <section className="my-12 rounded-2xl border border-line bg-surface-100 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-[560px]">
          <h2 className="font-display text-[22px] md:text-[26px] font-medium tracking-[-0.015em] text-ink m-0 mb-3">
            {title}
          </h2>
          <p className="font-display text-[14.5px] leading-[1.65] text-muted m-0">
            {description}
          </p>
        </div>
        <Link href={primaryHref} className="btn-primary self-start md:self-auto">
          {primaryLabel} <Icon.ArrowRight size={14} />
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-navy p-8 md:p-12 text-white">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="font-serif italic text-white/55 text-[14px] mb-2">
            Personlig rådgivning
          </div>
          <h2 className="font-display text-[24px] md:text-[28px] font-medium tracking-[-0.015em] text-white m-0 mb-4">
            {title}
          </h2>
          <p className="font-display text-[14.5px] leading-[1.65] text-white/70 m-0 max-w-[460px]">
            {description}
          </p>
        </div>
        <div className="md:text-right">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-[14px] font-medium text-white transition hover:bg-brand-dark hover:-translate-y-0.5"
          >
            {primaryLabel} <Icon.ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
