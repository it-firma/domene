import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { StructuredData } from "@/components/StructuredData";
import { IconByName } from "@/lib/icons";
import {
  buildMetadata,
  ldBreadcrumb,
  ldFaq,
  ldSoftwareApplication,
} from "@/lib/seo";
import { tools, findTool } from "@/data/tools";
import { findGuide } from "@/data/guides";
import { findGlossary } from "@/data/glossary";
import { DomainCheckTool } from "@/components/tools/DomainCheckTool";
import { DnsLookupTool } from "@/components/tools/DnsLookupTool";
import { WhoisTool } from "@/components/tools/WhoisTool";
import { NameserverTool } from "@/components/tools/NameserverTool";

const TOOL_COMPONENTS: Record<string, React.ComponentType> = {
  domenesjekk: DomainCheckTool,
  "dns-sjekk": DnsLookupTool,
  "whois-oppslag": WhoisTool,
  "navneserver-sjekk": NameserverTool,
};

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const t = findTool(params.slug);
  if (!t) return {};
  return buildMetadata({
    title: t.name,
    description: t.description,
    path: `/verktoy/${t.slug}`,
  });
}

export default function ToolDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = findTool(params.slug);
  if (!t) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Verktøy", href: "/verktoy" },
    { label: t.name, href: `/verktoy/${t.slug}` },
  ];

  // Resolve related items
  const relatedTerms = (t.relatedTerms ?? [])
    .map((s) => findGlossary(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined);

  const relatedGuides = (t.relatedGuides ?? [])
    .map((s) => findGuide(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined);

  const relatedTools = (t.relatedTools ?? [])
    .map((s) => findTool(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined && x.slug !== t.slug);

  const ToolComponent = TOOL_COMPONENTS[t.slug];
  const isComingSoon = t.status === "coming-soon";

  return (
    <>
      <article>
        {/* HERO (navy) */}
        <section className="relative overflow-hidden bg-navy text-white pt-32 pb-16">
          <div
            className="absolute -top-1/3 -right-[10%] w-[700px] h-[700px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(123,160,255,0.18) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-1/2 -left-[10%] w-[500px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,255,0.12) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="container-prose relative z-10">
            <Breadcrumbs items={crumbs} variant="dark" />

            <div className="mt-6 flex items-center gap-2.5 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand-light">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-brand-light">
                <IconByName name={t.icon} size={14} />
              </span>
              {t.tagline ?? `Verktøy - ${t.name}`}
            </div>

            <h1 className="mt-4 max-w-[820px] font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0">
              {t.editorialTitle ? (
                <>
                  {t.editorialTitle.lead}{" "}
                  <em className="font-serif italic font-normal text-brand-light">
                    {t.editorialTitle.emphasis}
                  </em>
                  {t.editorialTitle.tail && <> {t.editorialTitle.tail}</>}
                </>
              ) : (
                t.name
              )}
            </h1>

            {t.answerBox && (
              <p className="mt-5 max-w-[680px] font-display text-[16px] leading-[1.65] text-white/72 m-0">
                {t.answerBox}
              </p>
            )}
          </div>
        </section>

        {/* THE TOOL ITSELF (light bg) */}
        <section className="bg-surface-100 py-14" id="verktoy">
          <div className="container-prose">
            {isComingSoon ? (
              <div className="max-w-[760px] mx-auto rounded-2xl border-2 border-amber-200 bg-amber-50 p-8 text-center">
                <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-amber-700 mb-3">
                  Under utvikling
                </div>
                <h2 className="font-display text-[22px] font-medium text-ink m-0 mb-3">
                  Dette verktøyet er på vei
                </h2>
                <p className="font-display text-[15px] leading-[1.65] text-ink/80 m-0 max-w-[540px] mx-auto">
                  {t.longDescription ?? t.description}
                </p>
                <p className="mt-5 font-display text-[14px] text-muted m-0">
                  Imens kan du{" "}
                  <Link
                    href="/sammenligninger/domenepriser"
                    className="text-brand hover:underline font-medium"
                  >
                    sjekke vår live prissammenligning
                  </Link>
                  .
                </p>
              </div>
            ) : ToolComponent ? (
              <div className="max-w-[860px] mx-auto">
                <ToolComponent />
              </div>
            ) : null}
          </div>
        </section>

        {/* OM VERKTØYET (white) */}
        {t.longDescription && (
          <section className="bg-white py-14" id="om">
            <div className="container-prose">
              <SectionEyebrow>Om verktøyet</SectionEyebrow>
              <SectionH2>
                Hva <em className="font-serif italic font-normal text-brand">{t.name}</em> gjør
              </SectionH2>
              <p className="mt-6 max-w-[760px] font-display text-[16px] leading-[1.75] text-ink/85 m-0">
                {t.longDescription}
              </p>
            </div>
          </section>
        )}

        {/* HOW TO USE (surface-200) */}
        {t.howToUse && t.howToUse.length > 0 && (
          <section className="bg-surface-200 py-14" id="hvordan">
            <div className="container-prose">
              <SectionEyebrow>Slik bruker du verktøyet</SectionEyebrow>
              <SectionH2>
                Steg for{" "}
                <em className="font-serif italic font-normal text-brand">steg</em>
              </SectionH2>
              <p className="mt-3 max-w-[640px] font-display text-[15px] leading-[1.65] text-muted m-0">
                Verktøyet er enkelt å bruke - her er prosessen i detalj.
              </p>

              <ol className="mt-10 max-w-[860px] flex flex-col gap-5 list-none m-0 p-0">
                {t.howToUse.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-5 items-start bg-white border border-line rounded-2xl px-6 py-5"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white font-display text-[15px] font-semibold">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-[17px] font-semibold text-ink m-0 mb-1.5">
                        {step.title}
                      </h3>
                      <p className="font-display text-[14.5px] leading-[1.65] text-ink/80 m-0">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* RESULT EXPLAINED (white) */}
        {t.resultExplained && t.resultExplained.length > 0 && (
          <section className="bg-white py-14" id="resultat">
            <div className="container-prose">
              <SectionEyebrow>Hva betyr resultatet?</SectionEyebrow>
              <SectionH2>
                Tolking av{" "}
                <em className="font-serif italic font-normal text-brand">resultatet</em>
              </SectionH2>
              <p className="mt-3 max-w-[640px] font-display text-[15px] leading-[1.65] text-muted m-0">
                Forstå hva hver del av resultatet betyr og hva det krever av deg.
              </p>

              <div className="mt-10 max-w-[980px] grid gap-4 md:grid-cols-2">
                {t.resultExplained.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-100 border border-line rounded-2xl p-6"
                  >
                    <h3 className="font-display text-[17px] font-semibold text-ink m-0 mb-2">
                      {item.heading}
                    </h3>
                    <p className="font-display text-[14px] leading-[1.65] text-ink/80 m-0">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMMON ERRORS (surface-300) */}
        {t.commonErrors && t.commonErrors.length > 0 && (
          <section className="bg-surface-300 py-14" id="vanlige-feil">
            <div className="container-prose">
              <SectionEyebrow>Vanlige feil</SectionEyebrow>
              <SectionH2>
                Når noe{" "}
                <em className="font-serif italic font-normal text-brand">ikke stemmer</em>
              </SectionH2>
              <p className="mt-3 max-w-[640px] font-display text-[15px] leading-[1.65] text-muted m-0">
                De vanligste problemene du møter, og hva de betyr i praksis.
              </p>

              <div className="mt-10 max-w-[980px] flex flex-col gap-3">
                {t.commonErrors.map((err, i) => (
                  <div
                    key={i}
                    className="bg-white border-l-4 border-amber-400 rounded-r-xl px-6 py-5"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-display text-[10px] font-bold"
                        aria-hidden="true"
                      >
                        !
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-[15.5px] font-semibold text-ink m-0 mb-1.5">
                          {err.error}
                        </h3>
                        <p className="font-display text-[13.5px] leading-[1.65] text-ink/75 m-0">
                          {err.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WHEN NEEDED (navy) */}
        {t.whenNeeded && t.whenNeeded.length > 0 && (
          <section className="bg-navy text-white py-14" id="naar">
            <div className="container-prose">
              <SectionEyebrow inverse>Når trenger du dette?</SectionEyebrow>
              <SectionH2 inverse>
                Typiske{" "}
                <em className="font-serif italic font-normal text-brand-light">situasjoner</em>
              </SectionH2>

              <ul className="mt-10 max-w-[860px] flex flex-col gap-3 list-none m-0 p-0">
                {t.whenNeeded.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3.5 items-start"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light"
                      aria-hidden="true"
                    />
                    <span className="font-display text-[15px] leading-[1.65] text-white/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ (surface-kb) */}
        {t.faq && t.faq.length > 0 && (
          <section className="bg-surface-kb py-14" id="faq">
            <div className="container-prose">
              <SectionEyebrow>Ofte stilte spørsmål</SectionEyebrow>
              <SectionH2>
                Spørsmål og{" "}
                <em className="font-serif italic font-normal text-brand">svar</em>
              </SectionH2>
              <div className="mt-10 max-w-[880px]">
                <FAQ items={t.faq} title="" />
              </div>
            </div>
          </section>
        )}

        {/* RELATED + CTA (white) */}
        <section className="bg-white py-14">
          <div className="container-prose">
            {/* Related guides */}
            {relatedGuides.length > 0 && (
              <div className="max-w-[980px] mb-12">
                <SectionEyebrow>Relaterte guider</SectionEyebrow>
                <h2 className="mt-2 font-display text-[24px] font-medium tracking-[-0.01em] text-ink m-0 mb-6">
                  Lær mer om temaet
                </h2>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  {relatedGuides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guider/${g.slug}`}
                        className="block group bg-surface-100 border border-line rounded-xl px-5 py-4 hover:border-line-hover transition-colors"
                      >
                        <span className="font-display text-[15px] font-medium text-ink group-hover:text-brand transition-colors">
                          {g.title}
                        </span>
                        <span className="block mt-0.5 font-display text-[13px] text-muted leading-snug">
                          {g.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related tools */}
            {relatedTools.length > 0 && (
              <div className="max-w-[980px] mb-12">
                <SectionEyebrow>Andre verktøy</SectionEyebrow>
                <h2 className="mt-2 font-display text-[24px] font-medium tracking-[-0.01em] text-ink m-0 mb-6">
                  Relatert verktøy
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedTools.map((rt) => (
                    <Link
                      key={rt.slug}
                      href={`/verktoy/${rt.slug}`}
                      className="group flex items-start gap-3.5 bg-surface-100 border border-line rounded-xl px-5 py-4 hover:border-line-hover transition-colors"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white border border-line text-brand">
                        <IconByName name={rt.icon} size={16} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="font-display text-[14.5px] font-medium text-ink group-hover:text-brand transition-colors">
                          {rt.name}
                        </span>
                        <span className="block mt-0.5 font-display text-[12.5px] text-muted leading-snug line-clamp-2">
                          {rt.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related terms */}
            {relatedTerms.length > 0 && (
              <div className="max-w-[980px] mb-12">
                <SectionEyebrow>Lær mer i ordlisten</SectionEyebrow>
                <h2 className="mt-2 font-display text-[24px] font-medium tracking-[-0.01em] text-ink m-0 mb-6">
                  Relaterte begreper
                </h2>
                <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                  {relatedTerms.map((term) => (
                    <li key={term.slug}>
                      <Link
                        href={`/ordliste/${term.slug}`}
                        className="inline-flex bg-surface-100 hover:bg-surface-200 border border-line rounded-full px-4 py-2 font-display text-[13px] text-ink transition-colors"
                      >
                        {term.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="max-w-[980px] bg-brand text-white px-8 py-9 sm:px-10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display text-[22px] font-medium tracking-[-0.01em] m-0 mb-1">
                  Trenger du eksperthjelp?
                </h3>
                <p className="font-display text-[14px] leading-[1.55] text-white/85 m-0">
                  Snakk med våre rådgivere om domener, DNS, e-post eller domenestrategi.
                </p>
              </div>
              <Link
                href="/eksperthjelp"
                className="bg-white text-brand px-6 py-3 rounded-full font-display text-[14px] font-semibold hover:bg-white/90 transition flex-shrink-0 whitespace-nowrap"
              >
                Få eksperthjelp →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldSoftwareApplication(t),
          ...(t.faq && t.faq.length > 0 ? [ldFaq(t.faq)] : []),
          ...(t.howToUse && t.howToUse.length > 0
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "HowTo",
                  name: `Slik bruker du ${t.name}`,
                  description: t.description,
                  step: t.howToUse.map((s, i) => ({
                    "@type": "HowToStep",
                    position: i + 1,
                    name: s.title,
                    text: s.description,
                  })),
                },
              ]
            : []),
        ]}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section components
   ───────────────────────────────────────────────────────────── */

function SectionEyebrow({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <div
      className={`font-display text-[11px] font-medium uppercase tracking-[0.14em] mb-2.5 ${
        inverse ? "text-brand-light" : "text-brand"
      }`}
    >
      {children}
    </div>
  );
}

function SectionH2({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <h2
      className={`font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 ${
        inverse ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}
