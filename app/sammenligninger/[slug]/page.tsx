import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { AnswerBox } from "@/components/AnswerBox";
import { StructuredData } from "@/components/StructuredData";
import {
  buildMetadata,
  ldBreadcrumb,
  ldFaq,
} from "@/lib/seo";
import { comparisons, findComparison } from "@/data/comparisons";
import type { ProviderBadge } from "@/lib/types";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const c = findComparison(params.slug);
  if (!c) return {};
  return buildMetadata({
    title: c.title,
    description: c.description,
    path: `/sammenligninger/${c.slug}`,
  });
}

const BADGE_META: Record<
  ProviderBadge,
  { label: string; icon: string; tooltip: string }
> = {
  "laveste-forstepris": {
    label: "Laveste førstepris",
    icon: "/icons/badge-laveste-forstepris.png",
    tooltip: "Lavest pris første år for .no",
  },
  "laveste-3ar-no": {
    label: "Laveste 3-års .no",
    icon: "/icons/badge-laveste-5ar.png",
    tooltip: "Lavest samlet kostnad over 3 år for .no-domene",
  },
  "laveste-3ar-com": {
    label: "Laveste 3-års .com",
    icon: "/icons/badge-laveste-5ar.png",
    tooltip: "Lavest samlet kostnad over 3 år for .com-domene",
  },
  "laveste-fornyelse": {
    label: "Laveste fornyelse",
    icon: "/icons/badge-laveste-5ar.png",
    tooltip: "Lavest fornyelsespris uten lokketilbud",
  },
  bedrifter: {
    label: "Best for bedrifter",
    icon: "/icons/badge-bedrifter.png",
    tooltip: "DNSSEC, registry-lock og sikkerhet for forretningskritiske domener",
  },
  "mange-domener": {
    label: "Best for mange domener",
    icon: "/icons/badge-mange-domener.png",
    tooltip: "Volumrabatt og masseadministrasjon for porteføljer",
  },
  "norsk-uavhengig": {
    label: "Norsk uavhengig",
    icon: "/icons/badge-bedrifter.png",
    tooltip: "Reelt uavhengig norsk eierskap, ikke del av internasjonalt konsern",
  },
};

export default function ComparisonPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = findComparison(params.slug);
  if (!c) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Sammenligninger", href: "/sammenligninger" },
    { label: c.title, href: `/sammenligninger/${c.slug}` },
  ];

  const related = (c.relatedSlugs ?? [])
    .map((slug) => findComparison(slug))
    .filter((rc): rc is NonNullable<typeof rc> => !!rc && rc.slug !== c.slug);

  const isPriceComparison = c.slug === "domenepriser";
  const numColumns = c.columns?.length ?? 0;

  return (
    <>
      <article className="bg-white pt-32 pb-16">
        <div className="container-prose max-w-[860px]">
          <Breadcrumbs items={crumbs} />

          <div className="mt-6 font-serif italic text-muted text-[14px] mb-2">
            Redaksjonell sammenligning
          </div>
          <h1 className="font-display text-[36px] md:text-[44px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
            {c.title}
          </h1>

          {c.answerBox && <AnswerBox>{c.answerBox}</AnswerBox>}

          <p className="mt-6 font-display text-[16px] leading-[1.65] text-muted m-0">
            {c.intro}
          </p>

          {/* Methodology box with icons */}
          <section
            className="mt-10 rounded-2xl border border-line bg-surface-100 p-7"
            aria-labelledby="metode"
          >
            <h2
              id="metode"
              className="font-display text-[16px] font-semibold uppercase tracking-[0.12em] text-brand mb-3"
            >
              Slik sammenligner vi
            </h2>
            <p className="font-display text-[14.5px] leading-[1.7] text-ink/85 m-0">
              {c.methodology}
            </p>
            {isPriceComparison && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-5">
                <MethodIcon
                  src="/icons/check-quality.png"
                  label="Manuell kvalitetssjekk"
                />
                <MethodIcon
                  src="/icons/price-update.png"
                  label="Månedlig prisinnsamling"
                />
                <MethodIcon
                  src="/icons/mass-admin.png"
                  label="Konsernstruktur verifisert"
                />
                <MethodIcon
                  src="/icons/nordic-tlds.png"
                  label="Norsk markedsfokus"
                />
              </div>
            )}
          </section>

          {/* Provider table with badges and volume tiers */}
          {c.columns && c.providers && c.providers.length > 0 ? (
            <section className="mt-10">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-4">
                Sammenligningstabell
              </h2>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-left font-display text-[13.5px]">
                  <thead className="bg-surface-100">
                    <tr>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Leverandør
                      </th>
                      {c.columns.map((col) => (
                        <th
                          key={col.key}
                          className="px-5 py-3 font-semibold text-ink whitespace-nowrap"
                        >
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {c.providers.map((p) => (
                      <ProviderRows
                        key={p.name}
                        provider={p}
                        columns={c.columns!}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 font-display text-[12px] text-muted-light italic">
                Priser hentet manuelt fra leverandørens offentlige prisliste.
                Verifiser alltid hos leverandøren før bestilling.
              </p>
            </section>
          ) : (
            <section className="mt-10">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-4">
                Sammenligningstabell
              </h2>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-left font-display text-[13.5px]">
                  <thead className="bg-surface-100">
                    <tr>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Leverandør
                      </th>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Første år
                      </th>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Fornyelse
                      </th>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Flytting
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="px-5 py-3" colSpan={4}>
                        <span className="text-muted-light italic">
                          Tabelldata kommer — vi oppdaterer manuelt fra åpne
                          priser.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Ownership chart — only on the price comparison page */}
          {isPriceComparison && <OwnershipChart />}

          {/* Recommendations per persona */}
          {c.recommendations && c.recommendations.length > 0 && (
            <section
              className="mt-12 rounded-2xl border border-line p-7"
              aria-labelledby="anbefalinger"
            >
              <h2
                id="anbefalinger"
                className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-4"
              >
                Anbefaling per situasjon
              </h2>
              <p className="font-display text-[14.5px] leading-[1.65] text-muted m-0 mb-5">
                Det finnes ikke én leverandør som er best for alle. Her er
                våre anbefalinger basert på hva du faktisk skal bruke domenet
                til.
              </p>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {c.recommendations.map((rec, i) => (
                  <li
                    key={i}
                    className="rounded-xl bg-surface-100 px-5 py-4 border border-line/60"
                  >
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <span className="font-display text-[14px] font-medium text-ink">
                        {rec.persona}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand text-white px-3 py-1 text-[12.5px] font-medium">
                        Anbefalt: {rec.recommended}
                      </span>
                    </div>
                    <p className="mt-2 font-display text-[13.5px] leading-[1.6] text-ink/75 m-0">
                      {rec.reason}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Important to know */}
          <section className="mt-10 rounded-2xl border border-line p-7">
            <h2 className="font-display text-[18px] font-medium text-ink mb-4">
              Viktig å vite før du sammenligner
            </h2>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0 font-display text-[14.5px] leading-[1.6] text-ink/85">
              {(c.importantNotes ?? [
                "Førsteårsprisen er ofte rabattert — det viktigste er fornyelsesprisen.",
                "Sjekk hva som faktisk er inkludert: DNS, e-post, SSL, backup.",
                "Vurder hvilken kontroll du har: kan du flytte, eier du domenet, har du tofaktor og DNSSEC-støtte?",
              ]).map((note, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {c.faq.length > 0 && <FAQ items={c.faq} />}

          {/* Related comparisons */}
          {related.length > 0 && (
            <section className="mt-12 rounded-2xl border border-line bg-surface-50 p-7">
              <h2 className="font-display text-[16px] font-semibold uppercase tracking-[0.12em] text-brand mb-4">
                Relaterte sammenligninger
              </h2>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {related.map((rc) => (
                  <li key={rc.slug}>
                    <Link
                      href={`/sammenligninger/${rc.slug}`}
                      className="block group"
                    >
                      <span className="font-display text-[15px] font-medium text-ink group-hover:text-brand transition-colors">
                        {rc.title}
                      </span>
                      <span className="block mt-0.5 font-display text-[13px] text-muted leading-snug">
                        {rc.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-10 font-display text-[12.5px] text-muted-light">
            Sist oppdatert{" "}
            {new Date(c.updatedAt).toLocaleDateString("nb-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            . Verifiser alltid hos leverandøren før bestilling.
          </div>

          <div className="mt-10">
            <CTA variant="light" />
          </div>
        </div>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((cr) => ({ name: cr.label, url: cr.href }))),
          ...(c.faq.length > 0 ? [ldFaq(c.faq)] : []),
        ]}
      />
    </>
  );
}

/**
 * Renders a single provider row + optional volume-tier sub-rows for bulk discount providers.
 * Uses native <details> for tier expansion so all tier data is in HTML for SEO.
 */
function ProviderRows({
  provider: p,
  columns,
}: {
  provider: import("@/lib/types").ComparisonProvider;
  columns: import("@/lib/types").ComparisonColumn[];
}) {
  const numCols = columns.length;

  return (
    <>
      <tr className="align-top">
        <td className="px-5 py-3 font-semibold text-ink">
          <div className="flex flex-col gap-1.5">
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="text-ink hover:text-brand transition-colors"
              >
                {p.name}
              </a>
            ) : (
              <span>{p.name}</span>
            )}
            {p.badges && p.badges.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {p.badges.map((b) => {
                  const meta = BADGE_META[b];
                  return (
                    <span
                      key={b}
                      title={meta.tooltip}
                      className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-[10.5px] font-medium text-brand"
                    >
                      <Image
                        src={meta.icon}
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden="true"
                      />
                      {meta.label}
                    </span>
                  );
                })}
              </div>
            )}
            {p.note && (
              <div className="font-display text-[12px] font-normal text-muted leading-snug">
                {p.note}
              </div>
            )}
            {p.volumeTiers && p.volumeTiers.length > 0 && (
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-[11.5px] font-medium text-amber-900 self-start">
                <span aria-hidden="true">📊</span>
                Bulkrabatt fra 5 domener — se trinn under
              </div>
            )}
          </div>
        </td>
        {columns.map((col) => (
          <td key={col.key} className="px-5 py-3 text-ink/85 whitespace-nowrap">
            {p.values[col.key] ?? "—"}
          </td>
        ))}
      </tr>
      {p.volumeTiers && p.volumeTiers.length > 0 && (
        <>
          {p.volumeTiers.map((tier, ti) => (
            <tr
              key={ti}
              className="bg-amber-50/40 align-top text-[12.5px] border-t border-amber-100/60"
            >
              <td className="px-5 py-2.5 pl-9 font-medium text-amber-900/90">
                ↳ {tier.range}
              </td>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-5 py-2.5 text-ink/75 whitespace-nowrap"
                >
                  {tier.values[col.key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </>
      )}
    </>
  );
}

function MethodIcon({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Image
        src={src}
        alt=""
        width={48}
        height={48}
        aria-hidden="true"
      />
      <span className="font-display text-[12px] font-medium leading-tight text-ink/80">
        {label}
      </span>
    </div>
  );
}

/**
 * Visual ownership chart for the price comparison page.
 */
function OwnershipChart() {
  return (
    <section
      className="mt-12 rounded-2xl border border-line bg-gradient-to-br from-surface-50 to-white p-7"
      aria-labelledby="konsernkart"
    >
      <h2
        id="konsernkart"
        className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-2"
      >
        Konsernstruktur i norsk domenemarked
      </h2>
      <p className="font-display text-[14.5px] leading-[1.65] text-muted m-0 mb-6">
        Av åtte leverandører som retter seg mot norske kunder er to reelt
        uavhengige norske. De seks andre fordeler seg på tre internasjonale
        konserner.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConglomerateCard
          name="one.com Group AB"
          location="Malmö, Sverige"
          brands={["One.com", "Uniweb", "ProISP"]}
          accent="bg-brand/10 border-brand/30"
          highlight="3 brands"
          extraNote="Uniweb og ProISP er samme juridiske selskap (Group.One Norway AS) siden september 2024."
        />
        <ConglomerateCard
          name="Miss Group"
          location="Stockholm, Sverige"
          brands={["Domeneshop", "Domene.no"]}
          accent="bg-brand/10 border-brand/30"
          highlight="2 brands"
          extraNote="Domeneshop er Norges største .no-registrar med 45 % markedsandel."
        />
        <ConglomerateCard
          name="team.blue"
          location="Gent, Belgia"
          brands={["Simply.com"]}
          accent="bg-brand/10 border-brand/30"
          highlight="1 brand"
          extraNote="Europas største digital-økosystem med 60+ brands i 22 EU-land."
        />
        <ConglomerateCard
          name="Uavhengig norsk"
          location="Bergen + Sandefjord"
          brands={["Webhuset", "Gigahost"]}
          accent="bg-emerald-50 border-emerald-200"
          highlight="2 brands"
          extraNote="De to reelt uavhengige norske aktørene. Webhuset siden 1998, Gigahost siden 2006."
        />
      </div>

      <Link
        href="/sammenligninger/eierskap-norske-registrarer"
        className="mt-6 inline-flex items-center gap-1.5 font-display text-[14px] font-medium text-brand hover:underline"
      >
        Les full eierskapsoversikt
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

function ConglomerateCard({
  name,
  location,
  brands,
  accent,
  highlight,
  extraNote,
}: {
  name: string;
  location: string;
  brands: string[];
  accent: string;
  highlight: string;
  extraNote: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${accent}`}>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <h3 className="font-display text-[14px] font-semibold text-ink m-0">
          {name}
        </h3>
        <span className="text-[11px] font-medium text-brand uppercase tracking-wider whitespace-nowrap">
          {highlight}
        </span>
      </div>
      <p className="font-display text-[12px] text-muted m-0 mb-3">{location}</p>
      <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0 mb-3">
        {brands.map((b) => (
          <li
            key={b}
            className="rounded-md bg-white border border-line px-2 py-1 font-display text-[12px] font-medium text-ink"
          >
            {b}
          </li>
        ))}
      </ul>
      <p className="font-display text-[12px] leading-snug text-ink/70 m-0">
        {extraNote}
      </p>
    </div>
  );
}
