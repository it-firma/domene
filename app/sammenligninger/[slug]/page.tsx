import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { AnswerBox } from "@/components/AnswerBox";
import { ComparisonTOC } from "@/components/ComparisonTOC";
import { StructuredData } from "@/components/StructuredData";
import {
  buildMetadata,
  ldBreadcrumb,
  ldFaq,
} from "@/lib/seo";
import { comparisons, findComparison } from "@/data/comparisons";
import type {
  ProviderBadge,
  ConglomerateCode,
  ProviderFeature,
  ComparisonProvider,
  ComparisonColumn,
} from "@/lib/types";

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
  { label: string; tooltip: string }
> = {
  "laveste-forstepris": {
    label: "Laveste førstepris",
    tooltip: "Lavest pris første år for .no",
  },
  "laveste-3ar-no": {
    label: "Laveste 3-års .no",
    tooltip: "Lavest samlet kostnad over 3 år for .no-domene",
  },
  "laveste-3ar-com": {
    label: "Laveste 3-års .com",
    tooltip: "Lavest samlet kostnad over 3 år for .com-domene",
  },
  "laveste-fornyelse": {
    label: "Laveste fornyelse",
    tooltip: "Lavest fornyelsespris uten lokketilbud",
  },
  bedrifter: {
    label: "Best for bedrifter",
    tooltip: "DNSSEC, registry-lock og sikkerhet for forretningskritiske domener",
  },
  "mange-domener": {
    label: "Best for mange domener",
    tooltip: "Volumrabatt og masseadministrasjon for porteføljer",
  },
  "norsk-uavhengig": {
    label: "Norsk uavhengig",
    tooltip: "Reelt uavhengig norsk eierskap, ikke del av internasjonalt konsern",
  },
};

const CONGLOMERATE_META: Record<
  ConglomerateCode,
  { label: string; dotClass: string; bgClass: string; textClass: string }
> = {
  "norsk-uavhengig": {
    label: "Norsk uavhengig",
    dotClass: "bg-emerald-500",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-900",
  },
  "miss-group": {
    label: "Miss Group",
    dotClass: "bg-brand",
    bgClass: "bg-brand/10",
    textClass: "text-brand-dark",
  },
  "one-com-group": {
    label: "one.com Group AB",
    dotClass: "bg-navy",
    bgClass: "bg-navy/10",
    textClass: "text-navy",
  },
  "team-blue": {
    label: "team.blue",
    dotClass: "bg-brand-light",
    bgClass: "bg-brand-light/20",
    textClass: "text-brand-dark",
  },
};

const FEATURE_META: Record<ProviderFeature, { label: string; iconPath?: string }> = {
  dns: { label: "DNS-hosting" },
  "epost-videresending": { label: "E-postvideresending" },
  ssl: { label: "Gratis SSL" },
  dnssec: { label: "DNSSEC" },
  "registry-lock": { label: "Registry-lock" },
  "rest-api": { label: "REST API" },
  "ptr-reverse-dns": { label: "PTR / Reverse DNS" },
  "certbot-plugin": { label: "Certbot plugin" },
  "dynamic-dns": { label: "Dynamic DNS" },
  "epost-pakke": { label: "E-post inkludert" },
  "antispam-antivirus": { label: "Antispam og antivirus" },
  "support-norsk": { label: "Norsk kundeservice" },
  volumrabatt: { label: "Automatisk volumrabatt" },
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

  // Build TOC items
  const tocItems = [
    { id: "metode", label: "Slik sammenligner vi" },
    { id: "tabell", label: "Sammenligningstabell" },
    ...(isPriceComparison
      ? [{ id: "konsernkart", label: "Konsernstruktur" }]
      : []),
    ...(c.recommendations && c.recommendations.length > 0
      ? [{ id: "anbefalinger", label: "Anbefaling per situasjon" }]
      : []),
    { id: "viktig", label: "Viktig å vite" },
    { id: "faq", label: "Ofte stilte spørsmål" },
    ...(related.length > 0
      ? [{ id: "relaterte", label: "Relaterte sammenligninger" }]
      : []),
  ];

  // Pick which conglomerates appear so we only show legend entries that apply
  const conglomeratesShown = new Set(
    (c.providers ?? [])
      .map((p) => p.conglomerate)
      .filter((c): c is ConglomerateCode => !!c)
  );

  return (
    <>
      <article className="bg-white">
        <div className="container-prose pt-32 pb-16">
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="min-w-0">
              <div className="font-serif italic text-muted text-[14px] mb-2">
                Redaksjonell sammenligning
              </div>
              <h1 className="font-display text-[36px] md:text-[44px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
                {c.title}
              </h1>

              {c.answerBox && <AnswerBox>{c.answerBox}</AnswerBox>}

              <p className="mt-6 font-display text-[16px] leading-[1.65] text-muted m-0">
                {c.intro}
              </p>

              {/* Methodology */}
              <section
                id="metode"
                className="mt-12 scroll-mt-32 rounded-2xl border border-line bg-surface-100 p-7"
                aria-labelledby="metode-heading"
              >
                <h2
                  id="metode-heading"
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

              {/* Provider table */}
              {c.columns && c.providers && c.providers.length > 0 ? (
                <section id="tabell" className="mt-12 scroll-mt-32">
                  <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
                    <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink m-0">
                      Sammenligningstabell
                    </h2>
                    <p className="font-display text-[12px] text-muted-light m-0">
                      Klikk leverandørnavn for detaljer
                    </p>
                  </div>

                  <ProviderTable
                    columns={c.columns}
                    providers={c.providers}
                  />

                  {conglomeratesShown.size > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-[12px] text-muted">
                      <span className="text-[11px] uppercase tracking-[0.12em] text-muted-light">
                        Konsern:
                      </span>
                      {(Object.keys(CONGLOMERATE_META) as ConglomerateCode[])
                        .filter((k) => conglomeratesShown.has(k))
                        .map((k) => (
                          <span
                            key={k}
                            className="inline-flex items-center gap-1.5"
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${CONGLOMERATE_META[k].dotClass}`}
                              aria-hidden="true"
                            />
                            {CONGLOMERATE_META[k].label}
                          </span>
                        ))}
                    </div>
                  )}

                  <p className="mt-4 font-display text-[12px] text-muted-light italic">
                    Priser hentet manuelt fra leverandørens offentlige
                    prisliste. Verifiser alltid hos leverandøren før bestilling.
                  </p>
                </section>
              ) : (
                <section id="tabell" className="mt-12 scroll-mt-32">
                  <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-4">
                    Sammenligningstabell
                  </h2>
                  <div className="rounded-xl border border-line p-8 text-center">
                    <p className="font-display text-[14px] text-muted-light italic m-0">
                      Tabelldata kommer — vi oppdaterer manuelt fra åpne priser.
                    </p>
                  </div>
                </section>
              )}

              {/* Ownership chart — only on price comparison page */}
              {isPriceComparison && <OwnershipChart />}

              {/* Recommendations per persona */}
              {c.recommendations && c.recommendations.length > 0 && (
                <section
                  id="anbefalinger"
                  className="mt-12 scroll-mt-32 rounded-2xl border border-line p-7"
                >
                  <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-3 mt-0">
                    Anbefaling per situasjon
                  </h2>
                  <p className="font-display text-[14.5px] leading-[1.65] text-muted m-0 mb-6">
                    Det finnes ikke én leverandør som er best for alle. Her er
                    våre anbefalinger basert på hva du faktisk skal bruke
                    domenet til.
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
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand text-white px-3 py-1 text-[12px] font-medium">
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
              <section
                id="viktig"
                className="mt-12 scroll-mt-32 rounded-2xl border border-line p-7"
              >
                <h2 className="font-display text-[18px] font-medium text-ink mb-4 mt-0">
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

              {c.faq.length > 0 && (
                <div id="faq" className="scroll-mt-32">
                  <FAQ items={c.faq} />
                </div>
              )}

              {/* Related comparisons */}
              {related.length > 0 && (
                <section
                  id="relaterte"
                  className="mt-12 scroll-mt-32 rounded-2xl border border-line bg-surface-100 p-7"
                >
                  <h2 className="font-display text-[16px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 mt-0">
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

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <ComparisonTOC items={tocItems} />
            </aside>
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

/* ─────────────────────────────────────────────────────────────
   PROVIDER TABLE — expandable rows with native <details>
   ───────────────────────────────────────────────────────────── */

function ProviderTable({
  columns,
  providers,
}: {
  columns: ComparisonColumn[];
  providers: ComparisonProvider[];
}) {
  // For price tables, drop "included" from the visible columns since it's
  // shown in the expanded detail. Any other comparison keeps all columns.
  const isPriceTable = columns.some((c) => c.key === "no_first");
  const visibleColumns = isPriceTable
    ? columns.filter((c) => c.key !== "included")
    : columns;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      {/* Header */}
      <div
        className="hidden md:grid bg-surface-100 px-5 py-3 gap-3 font-display text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
        style={{
          gridTemplateColumns: `1.6fr ${visibleColumns
            .map(() => "1fr")
            .join(" ")}`,
        }}
      >
        <div>Leverandør</div>
        {visibleColumns.map((col) => (
          <div key={col.key} className="whitespace-nowrap">
            {col.label}
          </div>
        ))}
      </div>

      {/* Rows */}
      <ul className="list-none m-0 p-0 divide-y divide-line">
        {providers.map((p, idx) => (
          <li key={p.name}>
            <ProviderRow
              provider={p}
              columns={columns}
              visibleColumns={visibleColumns}
              defaultOpen={idx === 0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProviderRow({
  provider: p,
  columns,
  visibleColumns,
  defaultOpen,
}: {
  provider: ComparisonProvider;
  columns: ComparisonColumn[];
  visibleColumns: ComparisonColumn[];
  defaultOpen: boolean;
}) {
  const conglom = p.conglomerate ? CONGLOMERATE_META[p.conglomerate] : null;

  const gridStyle = {
    gridTemplateColumns: `1.6fr ${visibleColumns.map(() => "1fr").join(" ")}`,
  };

  return (
    <details
      className="group"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary
        className="cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-surface-100 transition-colors"
      >
        <div
          className="md:grid flex flex-col gap-2 md:gap-3 px-5 py-4 items-start md:items-center"
          style={gridStyle}
        >
          {/* Provider cell */}
          <div className="flex items-start gap-2.5 min-w-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 flex-shrink-0 text-muted-light transition-transform group-open:rotate-90"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-display text-[15px] font-medium text-ink">
                  {p.name}
                </span>
                {conglom && (
                  <span
                    className="inline-flex items-center gap-1 font-display text-[11px] text-muted"
                    title={conglom.label}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${conglom.dotClass}`}
                      aria-hidden="true"
                    />
                    {conglom.label}
                  </span>
                )}
              </div>

              {p.badges && p.badges.length > 0 && (
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {p.badges.map((b) => {
                    const meta = BADGE_META[b];
                    return (
                      <span
                        key={b}
                        title={meta.tooltip}
                        className="inline-flex items-center rounded-full bg-brand/10 px-2 py-0.5 text-[10.5px] font-medium text-brand"
                      >
                        {meta.label}
                      </span>
                    );
                  })}
                </div>
              )}

              {p.volumeTiers && p.volumeTiers.length > 0 && (
                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10.5px] font-medium text-amber-900">
                    Bulkrabatt fra 5 domener
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Price cells */}
          {visibleColumns.map((col) => {
            const value = p.values[col.key] ?? "—";
            return (
              <div
                key={col.key}
                className="font-display text-[14px] text-ink/90 whitespace-nowrap"
              >
                <span className="md:hidden text-[11px] uppercase tracking-[0.08em] text-muted-light mr-2">
                  {col.label}:
                </span>
                {value}
              </div>
            );
          })}
        </div>
      </summary>

      {/* Expanded detail */}
      <div className="px-5 pb-5 pt-1 md:pl-12 bg-surface-100/40 border-t border-line/60">
        {p.note && (
          <p className="font-display text-[13.5px] leading-[1.6] text-ink/75 m-0 mb-4 max-w-[680px]">
            {p.note}
          </p>
        )}

        {p.features && p.features.length > 0 && (
          <div className="mb-4">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.12em] text-brand mb-2">
              Inkludert
            </div>
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-md bg-white border border-line px-2.5 py-1 font-display text-[12px] text-ink/80"
                >
                  <CheckIcon />
                  {FEATURE_META[f].label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Volume tiers — only for providers with bulk discount */}
        {p.volumeTiers && p.volumeTiers.length > 0 && (
          <div className="mt-4">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.12em] text-brand mb-2">
              Volumrabatt-trinn
            </div>
            <p className="font-display text-[13px] leading-[1.55] text-muted m-0 mb-3 max-w-[680px]">
              Rabatten aktiveres automatisk på fakturatidspunktet basert på
              hvor mange domener du har på samme brukerkonto.
            </p>
            <div className="overflow-hidden rounded-xl border border-amber-200 bg-amber-50/30">
              <div
                className="hidden md:grid bg-amber-50 border-b border-amber-200 px-4 py-2 gap-3 font-display text-[11px] font-medium uppercase tracking-[0.06em] text-amber-900"
                style={{
                  gridTemplateColumns: `1.4fr ${columns
                    .filter((c) => c.key !== "included")
                    .map(() => "1fr")
                    .join(" ")} 1.6fr`,
                }}
              >
                <div>Antall domener</div>
                {columns
                  .filter((c) => c.key !== "included")
                  .map((col) => (
                    <div key={col.key} className="whitespace-nowrap">
                      {col.label}
                    </div>
                  ))}
                <div>Merknad</div>
              </div>
              <ul className="list-none m-0 p-0 divide-y divide-amber-100">
                {p.volumeTiers.map((tier, ti) => (
                  <li
                    key={ti}
                    className="md:grid flex flex-col gap-1 md:gap-3 px-4 py-2.5 font-display text-[13px] text-ink/80"
                    style={{
                      gridTemplateColumns: `1.4fr ${columns
                        .filter((c) => c.key !== "included")
                        .map(() => "1fr")
                        .join(" ")} 1.6fr`,
                    }}
                  >
                    <div className="font-medium text-amber-900">
                      {tier.range}
                    </div>
                    {columns
                      .filter((c) => c.key !== "included")
                      .map((col) => (
                        <div
                          key={col.key}
                          className="whitespace-nowrap"
                        >
                          <span className="md:hidden text-[11px] uppercase tracking-[0.08em] text-muted-light mr-2">
                            {col.label}:
                          </span>
                          {tier.values[col.key] ?? "—"}
                        </div>
                      ))}
                    <div className="text-[12px] text-muted leading-snug">
                      {tier.values.included ?? ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {p.href && (
          <div className="mt-4">
            <a
              href={p.href}
              target="_blank"
              rel="noopener nofollow sponsored"
              className="inline-flex items-center gap-1.5 font-display text-[13px] font-medium text-brand hover:underline"
            >
              Besøk {p.name.replace(" ★", "")}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </details>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand flex-shrink-0"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
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

function OwnershipChart() {
  return (
    <section
      id="konsernkart"
      className="mt-12 scroll-mt-32 rounded-2xl border border-line bg-surface-100 p-7"
    >
      <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-2 mt-0">
        Konsernstruktur i norsk domenemarked
      </h2>
      <p className="font-display text-[14.5px] leading-[1.65] text-muted m-0 mb-6 max-w-[680px]">
        Av åtte leverandører som retter seg mot norske kunder er to reelt
        uavhengige norske. De seks andre fordeler seg på tre internasjonale
        konserner.
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ConglomerateCard
          name="one.com Group AB"
          location="Malmö, Sverige"
          brands={["One.com", "Uniweb", "ProISP"]}
          dotClass="bg-navy"
          highlight="3 brands"
          extraNote="Uniweb og ProISP er samme juridiske selskap (Group.One Norway AS) siden september 2024."
        />
        <ConglomerateCard
          name="Miss Group"
          location="Stockholm, Sverige"
          brands={["Domeneshop", "Domene.no"]}
          dotClass="bg-brand"
          highlight="2 brands"
          extraNote="Domeneshop er Norges største .no-registrar med 45 % markedsandel."
        />
        <ConglomerateCard
          name="team.blue"
          location="Gent, Belgia"
          brands={["Simply.com"]}
          dotClass="bg-brand-light"
          highlight="1 brand"
          extraNote="Europas største digital-økosystem med 60+ brands i 22 EU-land."
        />
        <ConglomerateCard
          name="Norsk uavhengig"
          location="Bergen + Sandefjord"
          brands={["Webhuset", "Gigahost"]}
          dotClass="bg-emerald-500"
          highlight="2 brands"
          extraNote="De reelt uavhengige norske aktørene. Webhuset siden 1998, Gigahost siden 2006."
          highlightAccent
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
  dotClass,
  highlight,
  extraNote,
  highlightAccent,
}: {
  name: string;
  location: string;
  brands: string[];
  dotClass: string;
  highlight: string;
  extraNote: string;
  highlightAccent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 bg-white ${
        highlightAccent ? "border-emerald-200" : "border-line"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span
          className={`h-2 w-2 rounded-full flex-shrink-0 ${dotClass}`}
          aria-hidden="true"
        />
        <h3 className="font-display text-[14px] font-semibold text-ink m-0 flex-1 truncate">
          {name}
        </h3>
        <span className="text-[10.5px] font-medium text-muted uppercase tracking-wider whitespace-nowrap">
          {highlight}
        </span>
      </div>
      <p className="font-display text-[12px] text-muted m-0 mb-3">{location}</p>
      <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0 mb-3">
        {brands.map((b) => (
          <li
            key={b}
            className="rounded-md bg-surface-100 border border-line px-2 py-0.5 font-display text-[11.5px] font-medium text-ink"
          >
            {b}
          </li>
        ))}
      </ul>
      <p className="font-display text-[11.5px] leading-snug text-ink/70 m-0">
        {extraNote}
      </p>
    </div>
  );
}
