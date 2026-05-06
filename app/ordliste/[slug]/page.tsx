import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, ldBreadcrumb, ldDefinedTerm, ldFaq } from "@/lib/seo";
import { glossary } from "@/data/glossary";
import { findCategory } from "@/data/categories";
import { Icon } from "@/lib/icons";

const findTerm = (slug: string) => glossary.find((t) => t.slug === slug);

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const t = findTerm(params.slug);
  if (!t) return {};
  return buildMetadata({
    title: `${t.term} | Ordliste`,
    description: t.shortDefinition.slice(0, 160),
    path: `/ordliste/${t.slug}`,
  });
}

export default function GlossaryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = findTerm(params.slug);
  if (!t) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Ordliste", href: "/ordliste" },
    { label: t.term, href: `/ordliste/${t.slug}` },
  ];

  const category = findCategory(t.category);
  const related = t.relatedTerms
    .map((slug) => findTerm(slug))
    .filter((rt): rt is NonNullable<typeof rt> => !!rt);

  // Extract clean term (e.g., "DNS" from "Hva er DNS?")
  const cleanTerm = t.term.replace(/^Hva er /i, "").replace(/\?$/, "");

  return (
    <>
      <article>
        {/* ─────────── 1. HERO (NAVY) ─────────── */}
        <section className="relative overflow-hidden bg-navy text-white pt-32 pb-16">
          <div
            className="absolute -top-1/3 -right-[10%] w-[700px] h-[700px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(123,160,255,0.18) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="container-prose relative z-10">
            <Breadcrumbs items={crumbs} variant="dark" />

            <div className="mt-6 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand-light">
              Ordliste{category ? ` - ${category.name}` : ""}
            </div>

            <h1 className="mt-4 max-w-[820px] font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0">
              {t.term.startsWith("Hva er ") ? (
                <>
                  Hva er{" "}
                  <em className="font-serif italic font-normal text-brand-light">
                    {cleanTerm}?
                  </em>
                </>
              ) : (
                t.term
              )}
            </h1>

            <p className="mt-5 max-w-[680px] font-display text-[16px] leading-[1.65] text-white/80 m-0">
              {t.shortDefinition}
            </p>
          </div>
        </section>

        {/* ─────────── 2. ENKEL FORKLARING (SURFACE-100) ─────────── */}
        <section className="bg-surface-100 py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Forklart enkelt
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              På{" "}
              <em className="font-serif italic font-normal text-brand">
                vanlig norsk
              </em>
            </h2>
            <p className="mt-6 max-w-[760px] font-display text-[16px] leading-[1.7] text-ink/85 m-0">
              {t.simpleExplanation}
            </p>
          </div>
        </section>

        {/* ─────────── 3. TEKNISK FORKLARING (SURFACE-200) ─────────── */}
        <section className="bg-surface-200 py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              For deg som vil dypere
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Teknisk{" "}
              <em className="font-serif italic font-normal text-brand">
                forklaring
              </em>
            </h2>
            <p className="mt-6 max-w-[760px] font-display text-[15.5px] leading-[1.75] text-ink/85 m-0">
              {t.technicalExplanation}
            </p>
          </div>
        </section>

        {/* ─────────── 4. EKSEMPEL (HVIT) ─────────── */}
        {t.example && (
          <section className="bg-white py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2.5">
                Praktisk eksempel
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                Et{" "}
                <em className="font-serif italic font-normal text-brand">
                  eksempel
                </em>
              </h2>
              <div className="mt-6 max-w-[760px] bg-surface-100 border-l-4 border-brand rounded-r-2xl p-6">
                <p className="font-display text-[15.5px] leading-[1.7] text-ink/85 m-0">
                  {t.example}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 5. HVORFOR DETTE TELLER (NAVY-MID) ─────────── */}
        <section className="bg-navy-mid text-white py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand-light mb-2.5">
              Hvorfor det teller
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-white">
              Hvorfor er{" "}
              <em className="font-serif italic font-normal text-brand-light">
                {cleanTerm} viktig?
              </em>
            </h2>
            <p className="mt-6 max-w-[760px] font-display text-[15.5px] leading-[1.75] text-white/80 m-0">
              {t.importance}
            </p>
          </div>
        </section>

        {/* ─────────── 6. RELATERTE BEGREPER (SURFACE-300) ─────────── */}
        {related.length > 0 && (
          <section className="bg-surface-300 py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                Relaterte begreper
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                Lær mer om{" "}
                <em className="font-serif italic font-normal text-brand">
                  beslektede ord
                </em>
              </h2>

              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {related.map((rt) => (
                  <Link
                    key={rt.slug}
                    href={`/ordliste/${rt.slug}`}
                    className="group block bg-white border border-line rounded-xl p-5 hover:border-line-hover transition-colors"
                  >
                    <div className="font-display text-[16px] font-semibold text-ink mb-1.5 group-hover:text-brand transition-colors">
                      {rt.term}
                    </div>
                    <p className="font-display text-[13px] text-muted leading-[1.55] m-0 line-clamp-2">
                      {rt.shortDefinition}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 7. FAQ + CTA (SURFACE-KB) ─────────── */}
        <section className="bg-surface-kb py-14">
          <div className="container-prose">
            {t.faq.length > 0 && (
              <>
                <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                  Ofte stilte spørsmål
                </div>
                <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                  Spørsmål om{" "}
                  <em className="font-serif italic font-normal text-brand">
                    {cleanTerm}
                  </em>
                </h2>
                <div className="mt-8 max-w-[880px]">
                  <FAQ items={t.faq} title="" />
                </div>
              </>
            )}

            {/* Related guides */}
            {t.relatedGuides.length > 0 && (
              <div className="mt-12 max-w-[980px]">
                <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                  Praktiske guider
                </div>
                <ul className="mt-5 flex flex-col gap-3 list-none m-0 p-0">
                  {t.relatedGuides.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/guider/${slug}`}
                        className="block group bg-white border border-line rounded-xl px-5 py-4 hover:border-line-hover transition-colors"
                      >
                        <span className="font-display text-[15px] font-medium text-ink group-hover:text-brand transition-colors inline-flex items-center gap-1.5">
                          Guide:{" "}
                          {slug
                            .replace(/-/g, " ")
                            .replace(/^./, (c) => c.toUpperCase())}
                          <Icon.ArrowRight size={13} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back to glossary link */}
            <div className="mt-10">
              <Link
                href="/ordliste"
                className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-display text-[14px] font-medium hover:bg-brand-dark transition"
              >
                Se hele ordlisten <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-10 font-display text-[12.5px] text-muted-light">
              Sist oppdatert{" "}
              {new Date(t.updatedAt).toLocaleDateString("nb-NO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              .
            </div>
          </div>
        </section>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldDefinedTerm(t),
          ...(t.faq.length > 0 ? [ldFaq(t.faq)] : []),
        ]}
      />
    </>
  );
}
