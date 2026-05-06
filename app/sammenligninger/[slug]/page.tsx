import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, ldBreadcrumb, ldFaq } from "@/lib/seo";
import { comparisons, findComparison } from "@/data/comparisons";
import type {
  ProviderBadge,
  ConglomerateCode,
  ProviderFeature,
  ComparisonProvider,
  ComparisonColumn,
  HeroStat,
  ComparisonHighlight,
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
  { label: string; dotClass: string }
> = {
  "norsk-uavhengig": { label: "Norsk uavhengig", dotClass: "bg-emerald-500" },
  "miss-group": { label: "Miss Group", dotClass: "bg-brand" },
  "one-com-group": { label: "one.com Group AB", dotClass: "bg-navy" },
  "team-blue": { label: "team.blue", dotClass: "bg-brand-light" },
};

const FEATURE_META: Record<ProviderFeature, { label: string }> = {
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

function getTableMode(columns: ComparisonColumn[]): "price" | "wide" {
  const hasLongTextKey = columns.some((c) =>
    ["fakta", "konsern", "hovedkontor", "juridisk"].includes(c.key)
  );
  return hasLongTextKey ? "wide" : "price";
}

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
  const showOwnership = isPriceComparison || c.slug === "eierskap-norske-registrarer";

  return (
    <>
      <article>
        {/* ─────────── 1. HERO (NAVY) ─────────── */}
        <section className="relative overflow-hidden bg-navy text-white pt-32 pb-16">
          {/* Subtle radial accents */}
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

            {c.tagline && (
              <div className="mt-6 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand-light">
                {c.tagline}
              </div>
            )}

            <h1
              className={`${c.tagline ? "mt-4" : "mt-6"} max-w-[820px] font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0`}
            >
              {c.editorialTitle ? (
                <>
                  {c.editorialTitle.lead}{" "}
                  <em className="font-serif italic font-normal text-brand-light">
                    {c.editorialTitle.emphasis}
                  </em>
                  {c.editorialTitle.tail && <> {c.editorialTitle.tail}</>}
                </>
              ) : (
                c.title
              )}
            </h1>

            {c.answerBox && (
              <p className="mt-5 max-w-[640px] font-display text-[16px] leading-[1.65] text-white/72 m-0">
                {c.answerBox}
              </p>
            )}

            {c.heroStats && c.heroStats.length > 0 && (
              <div className="mt-10 max-w-[760px] grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-7">
                {c.heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className={`px-0 md:px-6 ${
                      i > 0 ? "md:border-l border-white/10" : ""
                    } ${i < c.heroStats!.length - 1 ? "" : "md:pr-0"} ${
                      i === 0 ? "md:pl-0" : ""
                    } pb-4 md:pb-0`}
                  >
                    <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                      {stat.label}
                    </div>
                    <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                      {stat.value}
                      {stat.unit && (
                        <span className="ml-1.5 text-[13px] font-normal text-white/55">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─────────── 2. VINNERE (SURFACE-100) ─────────── */}
        {c.highlights && c.highlights.length > 0 && (
          <section className="bg-surface-100 py-14" id="vinnere">
            <div className="container-prose">
              <SectionEyebrow>Vinnere etter kategori</SectionEyebrow>
              <SectionH2>
                Tre vinnere - én vinner{" "}
                <em className="font-serif italic font-normal text-brand">
                  ikke alle
                </em>
              </SectionH2>
              <SectionIntro>
                Hvilken leverandør som er best avhenger av hvordan du skal bruke
                tjenesten. Her er våre anbefalinger basert på faktisk
                bruksmønster.
              </SectionIntro>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[980px]">
                {c.highlights.map((h, i) => (
                  <WinnerCard key={i} highlight={h} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 3. SLIK SAMMENLIGNER VI (SURFACE-200) ─────────── */}
        <section className="bg-surface-200 py-14" id="metode">
          <div className="container-prose">
            <SectionEyebrow>Slik sammenligner vi</SectionEyebrow>
            <SectionH2>
              Manuelt verifisert{" "}
              <em className="font-serif italic font-normal text-brand">
                fra primærkilder
              </em>
            </SectionH2>
            <SectionIntro>{c.methodology}</SectionIntro>
          </div>
        </section>

        {/* ─────────── 4. TABELL (HVIT) ─────────── */}
        {c.columns && c.providers && c.providers.length > 0 && (
          <section className="bg-white py-14" id="tabell">
            <div className="container-prose">
              <SectionEyebrow muted>Sammenligningstabell</SectionEyebrow>
              <SectionH2>
                {c.providers.length} {pluralize("leverandør", c.providers.length)}{" "}
                <em className="font-serif italic font-normal text-brand">
                  side om side
                </em>
              </SectionH2>
              <SectionIntro>
                Klikk leverandørnavn for å se hva som er inkludert, badge-er og
                detaljer.
              </SectionIntro>

              <div className="mt-8">
                <ProviderTable
                  columns={c.columns}
                  providers={c.providers}
                />
              </div>

              <p className="mt-4 font-display text-[12.5px] text-muted-light italic">
                Priser hentet manuelt fra leverandørens offentlige prisliste.
                Verifiser alltid hos leverandøren før bestilling.
              </p>
            </div>
          </section>
        )}

        {/* ─────────── 5. KONSERNKART (NAVY) ─────────── */}
        {showOwnership && (
          <section className="bg-navy text-white py-14" id="konsernkart">
            <div className="container-prose">
              <SectionEyebrow inverse>Konsernstruktur</SectionEyebrow>
              <SectionH2 inverse>
                Hvem eier{" "}
                <em className="font-serif italic font-normal text-brand-light">
                  hvem?
                </em>
              </SectionH2>
              <SectionIntro inverse>
                Av åtte registrarer som retter seg mot norske kunder er to reelt
                uavhengige norske. De seks andre fordeler seg på tre
                internasjonale konserner.
              </SectionIntro>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <ConglomerateCard
                  name="one.com Group"
                  location="Malmö, Sverige"
                  brands={["One.com", "Uniweb", "ProISP"]}
                  dotClass="bg-brand"
                  count="3 brands"
                  note="Uniweb og ProISP er samme juridiske selskap (Group.One Norway AS) siden september 2024."
                />
                <ConglomerateCard
                  name="Miss Group"
                  location="Stockholm, Sverige"
                  brands={["Domeneshop", "Domene.no"]}
                  dotClass="bg-brand-light"
                  count="2 brands"
                  note="Domeneshop er Norges største .no-registrar med 45 % markedsandel."
                />
                <ConglomerateCard
                  name="team.blue"
                  location="Gent, Belgia"
                  brands={["Simply.com"]}
                  dotClass="bg-white/40"
                  count="1 brand"
                  note="Europas største digital-økosystem med 60+ brands i 22 EU-land."
                />
                <ConglomerateCard
                  name="Norsk uavhengig"
                  location="Bergen + Sandefjord"
                  brands={["Webhuset", "Gigahost"]}
                  dotClass="bg-emerald-400"
                  count="2 brands"
                  note="De reelt uavhengige norske aktørene. Webhuset siden 1998, Gigahost siden 2006."
                  highlight
                />
              </div>

              {c.slug !== "eierskap-norske-registrarer" && (
                <Link
                  href="/sammenligninger/eierskap-norske-registrarer"
                  className="mt-7 inline-flex items-center gap-1.5 font-display text-[14px] font-medium text-brand-light hover:text-white transition"
                >
                  Les full eierskapsoversikt <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* ─────────── 6. ANBEFALING PER SITUASJON (SURFACE-300) ─────────── */}
        {c.recommendations && c.recommendations.length > 0 && (
          <section className="bg-surface-300 py-14" id="anbefalinger">
            <div className="container-prose">
              <SectionEyebrow>Anbefaling per situasjon</SectionEyebrow>
              <SectionH2>
                Hva passer{" "}
                <em className="font-serif italic font-normal text-brand">
                  for deg?
                </em>
              </SectionH2>
              <SectionIntro>
                Det finnes ikke én leverandør som er best for alle. Her er våre
                anbefalinger basert på hva du faktisk skal bruke tjenesten til.
              </SectionIntro>

              <ul className="mt-8 flex flex-col gap-2.5 max-w-[980px] list-none m-0 p-0">
                {c.recommendations.map((rec, i) => (
                  <li
                    key={i}
                    className="bg-white border border-line rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row hover:border-line-hover transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-display text-[14.5px] font-medium text-ink mb-1">
                        {rec.persona}
                      </div>
                      <div className="font-display text-[12.5px] leading-[1.55] text-muted">
                        {rec.reason}
                      </div>
                    </div>
                    <span className="bg-brand text-white px-4 py-2 rounded-full font-display text-[12.5px] font-medium flex-shrink-0 whitespace-nowrap">
                      {rec.recommended}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ─────────── 7. VIKTIG Å VITE (NAVY-MID) ─────────── */}
        {c.importantNotes && c.importantNotes.length > 0 && (
          <section className="bg-navy-mid text-white py-14" id="viktig">
            <div className="container-prose">
              <SectionEyebrow inverse>Viktig å vite</SectionEyebrow>
              <SectionH2 inverse>
                {c.importantNotes.length} ting{" "}
                <em className="font-serif italic font-normal text-brand-light">
                  før du velger
                </em>
              </SectionH2>

              <ul className="mt-8 max-w-[760px] flex flex-col gap-3.5 list-none m-0 p-0">
                {c.importantNotes.map((note, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light"
                      aria-hidden="true"
                    />
                    <span className="font-display text-[14.5px] leading-[1.65] text-white/85">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ─────────── 8. FAQ + CTA + RELATED (SURFACE-KB) ─────────── */}
        <section className="bg-surface-kb py-14" id="faq">
          <div className="container-prose">
            {c.faq.length > 0 && (
              <>
                <SectionEyebrow>FAQ</SectionEyebrow>
                <SectionH2>
                  Ofte stilte{" "}
                  <em className="font-serif italic font-normal text-brand">
                    spørsmål
                  </em>
                </SectionH2>
                <div className="mt-8 max-w-[880px]">
                  <FAQ items={c.faq} />
                </div>
              </>
            )}

            {/* CTA */}
            <div className="mt-10 max-w-[980px] bg-brand text-white px-8 py-9 sm:px-10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display text-[22px] font-medium tracking-[-0.01em] m-0 mb-1">
                  Trenger du eksperthjelp?
                </h3>
                <p className="font-display text-[14px] leading-[1.55] text-white/85 m-0">
                  Snakk med våre rådgivere om domener, DNS, e-post eller
                  domenestrategi.
                </p>
              </div>
              <Link
                href="/eksperthjelp"
                className="bg-white text-brand px-6 py-3 rounded-full font-display text-[14px] font-semibold hover:bg-white/90 transition flex-shrink-0 whitespace-nowrap"
              >
                Få eksperthjelp →
              </Link>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-12 max-w-[980px]">
                <SectionEyebrow>Relaterte sammenligninger</SectionEyebrow>
                <ul className="mt-5 flex flex-col gap-3 list-none m-0 p-0">
                  {related.map((rc) => (
                    <li key={rc.slug}>
                      <Link
                        href={`/sammenligninger/${rc.slug}`}
                        className="block group bg-white border border-line rounded-xl px-5 py-4 hover:border-line-hover transition-colors"
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
              </div>
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
          </div>
        </section>
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
   SECTION HELPERS
   ───────────────────────────────────────────────────────────── */

function SectionEyebrow({
  children,
  muted,
  inverse,
}: {
  children: React.ReactNode;
  muted?: boolean;
  inverse?: boolean;
}) {
  const color = inverse
    ? "text-brand-light"
    : muted
    ? "text-muted"
    : "text-brand";
  return (
    <div
      className={`font-display text-[11px] font-medium uppercase tracking-[0.14em] ${color} mb-2.5`}
    >
      {children}
    </div>
  );
}

function SectionH2({
  children,
  inverse,
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

function SectionIntro({
  children,
  inverse,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <p
      className={`font-display text-[15px] leading-[1.65] max-w-[640px] m-0 ${
        inverse ? "text-white/70" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────
   WINNER CARD
   ───────────────────────────────────────────────────────────── */

function WinnerCard({ highlight: h }: { highlight: ComparisonHighlight }) {
  const isPrimary = h.variant !== "outline";
  return (
    <div className="relative bg-white border border-line rounded-2xl px-6 pt-7 pb-6 hover:border-line-hover hover:-translate-y-0.5 transition-all duration-200">
      <span
        className={`absolute -top-3 left-6 px-3 py-1.5 rounded-full font-display text-[10px] font-semibold uppercase tracking-[0.12em] ${
          isPrimary
            ? "bg-brand text-white"
            : "bg-white text-brand border border-line-hover"
        }`}
      >
        ★ {h.badge}
      </span>
      <div className="mt-5 mb-2.5 flex items-baseline gap-1.5">
        <span className="font-display text-[38px] font-medium tracking-[-0.02em] leading-none text-ink">
          {h.value}
        </span>
        {h.unit && (
          <span className="font-display text-[13px] text-muted">{h.unit}</span>
        )}
      </div>
      <div className="font-display text-[16px] font-semibold text-ink mb-1">
        {h.name}
      </div>
      <div className="font-display text-[12.5px] text-muted">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-brand mr-1.5 align-middle"
          aria-hidden="true"
        />
        {h.sub}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONGLOMERATE CARD (for navy section)
   ───────────────────────────────────────────────────────────── */

function ConglomerateCard({
  name,
  location,
  brands,
  dotClass,
  count,
  note,
  highlight,
}: {
  name: string;
  location: string;
  brands: string[];
  dotClass: string;
  count: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        highlight
          ? "bg-brand/10 border border-brand-light/25"
          : "bg-white/5 border border-white/12"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span
          className={`h-2 w-2 rounded-full flex-shrink-0 ${dotClass}`}
          aria-hidden="true"
        />
        <h3 className="font-display text-[14px] font-semibold text-white m-0 flex-1">
          {name}
        </h3>
        <span className="font-display text-[10px] uppercase tracking-[0.08em] text-white/55 font-medium whitespace-nowrap">
          {count}
        </span>
      </div>
      <p className="font-display text-[12.5px] text-white/55 m-0 mb-3.5">
        {location}
      </p>
      <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0 mb-3">
        {brands.map((b) => (
          <li
            key={b}
            className="bg-white/8 border border-white/10 rounded-md px-2 py-0.5 font-display text-[11px] font-medium text-white"
          >
            {b}
          </li>
        ))}
      </ul>
      <p className="font-display text-[11.5px] leading-[1.45] text-white/60 m-0">
        {note}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROVIDER TABLE - preserved from previous version
   (price-mode grid + wide-mode table + expanded details)
   ───────────────────────────────────────────────────────────── */

function ProviderTable({
  columns,
  providers,
}: {
  columns: ComparisonColumn[];
  providers: ComparisonProvider[];
}) {
  const mode = getTableMode(columns);
  const isPriceTable = columns.some((c) => c.key === "no_first");
  const visibleColumns = isPriceTable
    ? columns.filter((c) => c.key !== "included")
    : columns;

  if (mode === "wide") {
    return <WideTable columns={visibleColumns} providers={providers} />;
  }
  return <PriceTable columns={visibleColumns} providers={providers} />;
}

function PriceTable({
  columns,
  providers,
}: {
  columns: ComparisonColumn[];
  providers: ComparisonProvider[];
}) {
  const allColumns = providers[0]?.values
    ? Object.keys(providers[0].values).map((k) => ({ key: k, label: k }))
    : columns;
  const numCols = columns.length;
  const providerColWidth = numCols >= 6 ? "1.4fr" : "1.6fr";
  const gridStyle = {
    gridTemplateColumns: `${providerColWidth} ${columns
      .map(() => "minmax(80px, 1fr)")
      .join(" ")}`,
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white">
      <div className="min-w-[680px]">
        <div
          className="hidden md:grid bg-surface-100 px-6 py-3.5 gap-3 font-display text-[10.5px] font-medium uppercase tracking-[0.1em] text-muted"
          style={gridStyle}
        >
          <div>Leverandør</div>
          {columns.map((col) => (
            <div key={col.key} className="whitespace-nowrap">
              {col.label}
            </div>
          ))}
        </div>
        <ul className="list-none m-0 p-0 divide-y divide-line">
          {providers.map((p, idx) => (
            <li key={p.name}>
              <PriceRow
                provider={p}
                columns={columns}
                allColumns={allColumns as ComparisonColumn[]}
                gridStyle={gridStyle}
                defaultOpen={idx === 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PriceRow({
  provider: p,
  columns,
  allColumns,
  gridStyle,
  defaultOpen,
}: {
  provider: ComparisonProvider;
  columns: ComparisonColumn[];
  allColumns: ComparisonColumn[];
  gridStyle: { gridTemplateColumns: string };
  defaultOpen: boolean;
}) {
  const conglom = p.conglomerate ? CONGLOMERATE_META[p.conglomerate] : null;

  return (
    <details className="group" {...(defaultOpen ? { open: true } : {})}>
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-surface-100 transition-colors">
        <div
          className="md:grid flex flex-col gap-2 md:gap-3 px-6 py-4 items-start md:items-center"
          style={gridStyle}
        >
          <div className="flex items-start gap-2.5 min-w-0">
            <ChevronIcon />
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

          {columns.map((col) => {
            const value = p.values[col.key] ?? "-";
            return (
              <div
                key={col.key}
                className="font-display text-[14px] text-ink/90 whitespace-nowrap tabular-nums"
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

      <ExpandedDetail provider={p} allColumns={allColumns} />
    </details>
  );
}

function WideTable({
  columns,
  providers,
}: {
  columns: ComparisonColumn[];
  providers: ComparisonProvider[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full text-left font-display text-[13.5px]">
        <thead className="bg-surface-100">
          <tr>
            <th className="px-5 py-3.5 font-medium text-[10.5px] uppercase tracking-[0.1em] text-muted whitespace-nowrap min-w-[180px]">
              Leverandør
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-5 py-3.5 font-medium text-[10.5px] uppercase tracking-[0.1em] text-muted whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {providers.map((p) => (
            <WideRow key={p.name} provider={p} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WideRow({
  provider: p,
  columns,
}: {
  provider: ComparisonProvider;
  columns: ComparisonColumn[];
}) {
  const hasKonsernColumn = columns.some((col) => col.key === "konsern");
  const conglom =
    p.conglomerate && !hasKonsernColumn
      ? CONGLOMERATE_META[p.conglomerate]
      : null;

  return (
    <>
      <tr className="hover:bg-surface-100/60 transition-colors">
        <td className="px-5 py-4 align-top min-w-[180px]">
          <div className="flex items-start gap-2.5">
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
            </div>
          </div>
        </td>
        {columns.map((col) => {
          const value = p.values[col.key] ?? "-";
          if (col.key === "konsern" && p.conglomerate) {
            const cm = CONGLOMERATE_META[p.conglomerate];
            return (
              <td
                key={col.key}
                className="px-5 py-4 align-top text-ink/90 min-w-[150px]"
              >
                <span className="inline-flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full flex-shrink-0 ${cm.dotClass}`}
                    aria-hidden="true"
                  />
                  {value}
                </span>
              </td>
            );
          }
          if (col.key === "fakta") {
            return (
              <td
                key={col.key}
                className="px-5 py-4 align-top text-ink/85 min-w-[280px] max-w-[420px] leading-[1.55]"
              >
                {value}
              </td>
            );
          }
          return (
            <td
              key={col.key}
              className="px-5 py-4 align-top text-ink/90 min-w-[140px]"
            >
              {value}
            </td>
          );
        })}
      </tr>
      {p.note && (
        <tr className="bg-surface-100/40">
          <td
            colSpan={columns.length + 1}
            className="px-5 pl-12 pb-4 pt-0 text-[13px] leading-[1.6] text-muted italic"
          >
            {p.note}
          </td>
        </tr>
      )}
    </>
  );
}

function ExpandedDetail({
  provider: p,
  allColumns,
}: {
  provider: ComparisonProvider;
  allColumns: ComparisonColumn[];
}) {
  return (
    <div className="px-6 pb-5 pt-1 md:pl-12 bg-surface-100/40 border-t border-line/60">
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

      {p.volumeTiers && p.volumeTiers.length > 0 && (
        <div className="mt-4">
          <div className="font-display text-[11px] font-medium uppercase tracking-[0.12em] text-brand mb-2">
            Volumrabatt-trinn
          </div>
          <p className="font-display text-[13px] leading-[1.55] text-muted m-0 mb-3 max-w-[680px]">
            Rabatten aktiveres automatisk på fakturatidspunktet basert på antall
            domener på samme brukerkonto.
          </p>
          <VolumeTiersTable
            tiers={p.volumeTiers}
            columns={allColumns.filter((c) => c.key !== "included")}
          />
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
  );
}

function VolumeTiersTable({
  tiers,
  columns,
}: {
  tiers: NonNullable<ComparisonProvider["volumeTiers"]>;
  columns: ComparisonColumn[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-amber-200 bg-amber-50/30">
      <table className="w-full text-left font-display text-[13px]">
        <thead>
          <tr className="bg-amber-50 border-b border-amber-200">
            <th className="px-4 py-2 font-medium text-[11px] uppercase tracking-[0.06em] text-amber-900 whitespace-nowrap">
              Antall domener
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 font-medium text-[11px] uppercase tracking-[0.06em] text-amber-900 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-2 font-medium text-[11px] uppercase tracking-[0.06em] text-amber-900 whitespace-nowrap">
              Merknad
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-100">
          {tiers.map((tier, ti) => (
            <tr key={ti}>
              <td className="px-4 py-2.5 font-medium text-amber-900 whitespace-nowrap">
                {tier.range}
              </td>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-2.5 text-ink/80 whitespace-nowrap tabular-nums"
                >
                  {tier.values[col.key] ?? "-"}
                </td>
              ))}
              <td className="px-4 py-2.5 text-[12px] text-muted leading-snug">
                {tier.values.included ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ICONS + UTILS
   ───────────────────────────────────────────────────────────── */

function ChevronIcon() {
  return (
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

function pluralize(word: string, n: number): string {
  if (word === "leverandør") return n === 1 ? "leverandør" : "leverandører";
  return word;
}
