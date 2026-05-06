import Link from "next/link";
import { Icon } from "@/lib/icons";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { TableOfContents } from "./TableOfContents";
import { slugifyHeading } from "@/lib/slug";
import { AnswerBox } from "./AnswerBox";
import { FAQ } from "./FAQ";
import { Summary } from "./Summary";
import { RelatedLinks } from "./RelatedLinks";
import { findCategory } from "@/data/categories";
import { findGlossary } from "@/data/glossary";
import { findGuide } from "@/data/guides";
import { findTool } from "@/data/tools";
import type { Guide } from "@/lib/types";

/**
 * Full article layout used by /guider/[slug] pages.
 * Includes sticky TOC, AEO answer box, sections, FAQ, summary, and related links.
 */
export function ArticleLayout({
  guide,
  breadcrumbs,
}: {
  guide: Guide;
  breadcrumbs: Crumb[];
}) {
  const cat = findCategory(guide.category);
  const relatedGuides = guide.relatedGuides
    .map((s) => findGuide(s))
    .filter((g): g is Guide => g !== undefined)
    .map((g) => ({
      label: g.title,
      description: g.description,
      href: `/guider/${g.slug}`,
    }));

  const relatedTerms = guide.relatedTerms
    .map((s) => findGlossary(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined)
    .map((t) => ({
      label: t.term,
      description: t.shortDefinition.split(".")[0] + ".",
      href: `/ordliste/${t.slug}`,
    }));

  const relatedTools = guide.relatedTools
    .map((s) => findTool(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined)
    .map((t) => ({
      label: t.name,
      description: t.description,
      href: `/verktoy/${t.slug}`,
    }));

  return (
    <article className="bg-white">
      <div className="container-prose pt-32 pb-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0 max-w-[760px]">
            <ArticleMeta guide={guide} />

            <h1 className="mt-4 font-display text-[34px] md:text-[44px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
              {guide.title}
            </h1>

            <AnswerBox>{guide.shortAnswer}</AnswerBox>

            {/* Article sections */}
            <div className="prose-body mt-12">
              {guide.sections.map((s) => {
                const id = slugifyHeading(s.heading);
                return (
                  <section key={id} className="mb-10 scroll-mt-32" id={id}>
                    <h2 className="font-display text-[24px] font-medium tracking-[-0.015em] text-ink mb-4 mt-12 first:mt-0">
                      {s.heading}
                    </h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{renderInline(p)}</p>
                    ))}
                    {s.bullets && (
                      <ul className="my-5 flex flex-col gap-2 list-none p-0">
                        {s.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-3 font-display text-[15px] leading-[1.65] text-ink/85"
                          >
                            <Icon.Check
                              size={18}
                              className="mt-0.5 flex-shrink-0 text-brand"
                            />
                            <span>{renderInline(b)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.example && (
                      <div className="my-5 rounded-xl border-l-4 border-brand bg-surface-100 p-5">
                        <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-2">
                          Eksempel
                        </div>
                        <p className="m-0 font-display text-[14.5px] leading-[1.6] text-ink/90">
                          {s.example}
                        </p>
                      </div>
                    )}
                    {s.subsections?.map((sub) => (
                      <div key={sub.heading} className="mt-7">
                        <h3 className="font-display text-[18px] font-medium text-ink mb-3">
                          {sub.heading}
                        </h3>
                        {sub.paragraphs.map((p, i) => (
                          <p key={i}>{renderInline(p)}</p>
                        ))}
                      </div>
                    ))}
                  </section>
                );
              })}
            </div>

            {/* Step by step */}
            {guide.steps && guide.steps.length > 0 && (
              <section
                className="my-12 rounded-2xl border border-line bg-surface-100 p-8"
                aria-label="Steg for steg"
              >
                <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-6">
                  Slik gjør du det
                </h2>
                <ol className="flex flex-col gap-6 list-none m-0 p-0 counter-reset">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand font-display text-[14px] font-semibold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-[16px] font-medium text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 font-display text-[14px] leading-[1.65] text-muted">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Pitfalls */}
            {guide.pitfalls && guide.pitfalls.length > 0 && (
              <section
                className="my-10 rounded-2xl border border-line p-7"
                aria-label="Vanlige feil"
              >
                <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-ink mb-4">
                  Vanlige feil
                </h2>
                <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                  {guide.pitfalls.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-3 font-display text-[14.5px] leading-[1.6] text-ink/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Checklist */}
            {guide.checklist && guide.checklist.length > 0 && (
              <section
                className="my-10 rounded-2xl border border-line p-7"
                aria-label="Sjekkliste"
              >
                <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-ink mb-4">
                  Sjekkliste
                </h2>
                <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                  {guide.checklist.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 font-display text-[14.5px] leading-[1.6] text-ink/85"
                    >
                      <Icon.Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-brand"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <FAQ items={guide.faq} />

            <Summary items={guide.summary} />

            {/* Related links */}
            {relatedGuides.length > 0 && (
              <RelatedLinks title="Relaterte guider" items={relatedGuides} />
            )}
            {relatedTerms.length > 0 && (
              <RelatedLinks title="Relaterte begreper" items={relatedTerms} />
            )}
            {relatedTools.length > 0 && (
              <RelatedLinks title="Relaterte verktøy" items={relatedTools} />
            )}

            {/* Next step */}
            {guide.nextStep && (
              <div className="my-10 rounded-2xl border border-brand/30 bg-brand/5 p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-1.5">
                    Neste steg
                  </div>
                  <div className="font-display text-[16px] font-medium text-ink">
                    {guide.nextStep.label}
                  </div>
                </div>
                <Link href={guide.nextStep.href} className="btn-primary">
                  Fortsett <Icon.ArrowRight size={14} />
                </Link>
              </div>
            )}

            {/* CTA to expert help */}
            <div className="my-10 rounded-2xl bg-navy p-8 text-white">
              <div className="font-serif italic text-[14px] text-white/55 mb-2">
                Trenger du hjelp?
              </div>
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-white m-0 mb-3">
                Snakk med våre rådgivere
              </h2>
              <p className="font-display text-[14px] leading-[1.65] text-white/70 mb-5 m-0">
                Skreddersydd rådgivning for{cat ? ` ${cat.name.toLowerCase()}` : " domener"} -
                trygge råd, ingen forpliktelser.
              </p>
              <Link
                href="/eksperthjelp"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-display text-[14px] font-medium text-white transition hover:bg-brand-dark"
              >
                Få eksperthjelp <Icon.ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <TableOfContents sections={guide.sections} />
          </aside>
        </div>
      </div>
    </article>
  );
}

function ArticleMeta({ guide }: { guide: Guide }) {
  const cat = findCategory(guide.category);
  return (
    <div className="flex flex-wrap items-center gap-3 font-display text-[12.5px] text-muted">
      {cat && (
        <Link
          href={`/kunnskapsbase/${cat.slug}`}
          className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand hover:bg-brand/15"
        >
          {cat.name}
        </Link>
      )}
      <span className="flex items-center gap-1">
        <Icon.Clock size={13} /> {guide.readingTime} min lesetid
      </span>
      <span aria-hidden="true">-</span>
      <span>Sist oppdatert {formatNorwegianDate(guide.updatedAt)}</span>
      {guide.author && (
        <>
          <span aria-hidden="true">-</span>
          <span>Av {guide.author}</span>
        </>
      )}
    </div>
  );
}

/** Render simple **bold** markup inline */
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function formatNorwegianDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
