import Link from "next/link";
import { Icon, IconByName } from "@/lib/icons";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";

/**
 * Editorial preview of the knowledge base on the homepage —
 * a left rail of categories and a right column with featured guide.
 */
export function KnowledgeBasePreview() {
  const featured = guides[0];
  return (
    <section className="bg-surface-kb py-20">
      <div className="container-prose">
        <div className="text-center mb-12">
          <div className="font-serif italic text-muted text-[14px] mb-2">
            N°05 — Inne i kunnskapsbasen
          </div>
          <h2 className="font-display text-[28px] md:text-[36px] font-medium tracking-[-0.02em] leading-[1.15] text-ink m-0">
            Alt du trenger, organisert og lett å finne
          </h2>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 md:p-10 shadow-card">
          <div className="grid gap-8 md:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <nav aria-label="Kategorier-snarvei" className="md:border-r md:border-line md:pr-7">
              <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3">
                Kategorier
              </div>
              <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
                {categories.slice(0, 8).map((c, i) => (
                  <li key={c.slug}>
                    <Link
                      href={`/kunnskapsbase/${c.slug}`}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 font-display text-[13.5px] transition ${
                        i === 0
                          ? "bg-brand/10 text-brand font-medium"
                          : "text-muted hover:bg-surface-100 hover:text-ink"
                      }`}
                    >
                      <span className="w-[15px] flex-shrink-0">
                        <IconByName name={c.icon} size={15} />
                      </span>
                      <span>{c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/kunnskapsbase"
                className="mt-4 inline-flex items-center gap-1 font-display text-[12.5px] font-medium text-brand"
              >
                Se alle kategorier <Icon.ArrowRight size={12} />
              </Link>
            </nav>

            {/* Featured guide */}
            <div className="rounded-2xl border border-line bg-surface-100 p-7">
              <div className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand mb-4">
                ★ Anbefalt guide
              </div>
              <h3 className="font-display text-[22px] md:text-[26px] font-medium tracking-[-0.015em] leading-[1.25] text-ink mb-3">
                {featured.title}
              </h3>
              <p className="font-display text-[14.5px] leading-[1.6] text-muted m-0 mb-6 max-w-[520px]">
                {featured.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6 font-display text-[12.5px] text-muted">
                <span className="flex items-center gap-1">
                  <Icon.Clock size={13} /> {featured.readingTime} min lesetid
                </span>
                <span aria-hidden>·</span>
                <span className="capitalize">{featured.difficulty}</span>
                <span aria-hidden>·</span>
                <span>Sist oppdatert i dag</span>
              </div>
              <Link
                href={`/guider/${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-display text-[13.5px] font-medium text-white transition hover:bg-brand-dark"
              >
                Les guiden <Icon.ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
