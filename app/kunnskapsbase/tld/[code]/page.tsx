import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, ldBreadcrumb } from "@/lib/seo";
import { tlds, findTld } from "@/data/tlds";
import type { TldType } from "@/lib/types";

// Pre-render only popular TLDs (~40); rest fallback to dynamic
export function generateStaticParams() {
  return tlds.filter((t) => t.popular).map((t) => ({ code: t.code }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: { code: string };
}): Promise<Metadata> {
  const t = findTld(params.code);
  if (!t) return {};

  const isCountry = t.type === "ccTLD" && t.country;
  const titleParts = [
    `${t.name} - ${isCountry ? t.country : t.useCase}`,
    "Hva er det og hvem bruker det?",
  ];

  return buildMetadata({
    title: titleParts.join(" | "),
    description: `${t.description} Administrert av ${t.registry}. Lansert ${t.launched}. Verifisert mai 2026.`,
    path: `/kunnskapsbase/tld/${t.code}`,
  });
}

const TYPE_LABEL: Record<TldType, string> = {
  ccTLD: "Landkode-TLD (ccTLD)",
  gTLD: "Generisk TLD (gTLD)",
  sTLD: "Sponset TLD (sTLD)",
  iTLD: "Internasjonalisert TLD (IDN)",
  infrastructure: "Infrastruktur-TLD",
  brand: "Brand-TLD",
};

const TYPE_DESCRIPTION: Record<TldType, string> = {
  ccTLD:
    "Country-code Top-Level Domain - knyttet til et bestemt land eller territorium. Standardisert via ISO 3166-1 alpha-2-koden.",
  gTLD:
    "Generic Top-Level Domain - åpen for registrering uavhengig av geografi. Administrert under ICANNs gTLD-program.",
  sTLD:
    "Sponsored Top-Level Domain - administrert av en sponsor som setter strenge regler for hvem som kan registrere.",
  iTLD:
    "Internationalized Domain Name TLD - i ikke-latinske skrift som arabisk, kyrillisk eller kinesisk.",
  infrastructure:
    "Infrastruktur-TLD - kun teknisk bruk for internett-infrastruktur (.arpa).",
  brand:
    "Brand-TLD - eid og administrert av et selskap. Kun selskapet kan registrere domener under denne TLD-en.",
};

export default function TldDetailPage({
  params,
}: {
  params: { code: string };
}) {
  const t = findTld(params.code);
  if (!t) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Kunnskapsbase", href: "/kunnskapsbase" },
    { label: "TLD - toppnivådomener", href: "/kunnskapsbase/tld" },
    { label: "Alle TLD-er", href: "/kunnskapsbase/tld/alle" },
    { label: t.name, href: `/kunnskapsbase/tld/${t.code}` },
  ];

  // Find related TLDs by type
  const related = tlds
    .filter((rt) => rt.type === t.type && rt.code !== t.code && rt.popular)
    .slice(0, 6);

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
              {TYPE_LABEL[t.type]}
            </div>

            <h1 className="mt-4 font-display text-[48px] md:text-[64px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0">
              <span className="font-serif italic font-normal text-brand-light tabular-nums">
                {t.name}
              </span>
            </h1>

            <p className="mt-5 max-w-[680px] font-display text-[16px] leading-[1.65] text-white/72 m-0">
              {t.description}
            </p>

            {t.country && (
              <p className="mt-3 font-display text-[14px] text-brand-light m-0">
                Land/territorium:{" "}
                <span className="text-white">{t.country}</span>
              </p>
            )}
          </div>
        </section>

        {/* ─────────── 2. FAKTABOKS (SURFACE-100) ─────────── */}
        <section className="bg-surface-100 py-14" id="fakta">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Fakta om {t.name}
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Hva er{" "}
              <em className="font-serif italic font-normal text-brand">
                {t.name}?
              </em>
            </h2>

            <dl className="mt-6 grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-line border border-line rounded-2xl overflow-hidden max-w-[980px]">
              <FactRow label="Type">{TYPE_LABEL[t.type]}</FactRow>
              {t.country && <FactRow label="Land">{t.country}</FactRow>}
              <FactRow label="Registry-operatør">{t.registry}</FactRow>
              <FactRow label="Lansert">{t.launched}</FactRow>
              <FactRow label="Vanlig bruk">{t.useCase}</FactRow>
              <FactRow label="Populær">
                {t.popular ? "Ja, mye brukt" : "Nei, niche"}
              </FactRow>
            </dl>
          </div>
        </section>

        {/* ─────────── 3. EDUCATIONAL (SURFACE-200) ─────────── */}
        <section className="bg-surface-200 py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Bakgrunn
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Om{" "}
              <em className="font-serif italic font-normal text-brand">
                {t.name}
              </em>
            </h2>

            <div className="mt-6 max-w-[760px] flex flex-col gap-4">
              <p className="font-display text-[15.5px] leading-[1.7] text-ink/85 m-0">
                {t.description}
              </p>

              <p className="font-display text-[15px] leading-[1.7] text-muted m-0">
                {TYPE_DESCRIPTION[t.type]}{" "}
                {t.name} ble lagt til i IANAs root-database i {t.launched} og
                administreres av {t.registry}.
              </p>

              {t.type === "ccTLD" && (
                <p className="font-display text-[15px] leading-[1.7] text-muted m-0">
                  Som landkode-TLD følger {t.name} ISO 3166-1 alpha-2-standarden.
                  Dette betyr at TLD-en er forbeholdt {t.country || "landet"} og
                  administreres lokalt av {t.registry}. Reglene for hvem som kan
                  registrere varierer fra land til land - sjekk alltid hos
                  registry-operatøren før du forsøker å registrere.
                </p>
              )}

              {t.type === "brand" && (
                <p className="font-display text-[15px] leading-[1.7] text-muted m-0">
                  Som brand-TLD er {t.name} ikke åpen for offentlig registrering.
                  Kun {t.registry} kan opprette underdomener under denne TLD-en.
                  Brand-TLD-er er en del av ICANNs gTLD-program lansert i 2014,
                  og over 600 brand-TLD-er er delegert siden den gang.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ─────────── 4. RELATED TLDs (HVIT) ─────────── */}
        {related.length > 0 && (
          <section className="bg-white py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2.5">
                Relaterte TLD-er
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                Andre{" "}
                <em className="font-serif italic font-normal text-brand">
                  {TYPE_LABEL[t.type].toLowerCase()}
                </em>
              </h2>

              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {related.map((rt) => (
                  <Link
                    key={rt.code}
                    href={`/kunnskapsbase/tld/${rt.code}`}
                    className="group block bg-white border border-line rounded-xl p-5 hover:border-line-hover transition-colors"
                  >
                    <div className="font-display text-[18px] font-semibold text-ink mb-1 group-hover:text-brand transition-colors tabular-nums">
                      {rt.name}
                    </div>
                    {rt.country && (
                      <div className="font-display text-[12px] uppercase tracking-[0.06em] text-muted-light font-medium mb-2">
                        {rt.country}
                      </div>
                    )}
                    <p className="font-display text-[13px] text-muted leading-[1.55] m-0 line-clamp-2">
                      {rt.description}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                href="/kunnskapsbase/tld/alle"
                className="mt-6 inline-flex items-center gap-1.5 font-display text-[14px] font-medium text-brand hover:underline"
              >
                Se alle 1 593 TLD-er <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        )}

        {/* ─────────── 5. CTA (SURFACE-KB) ─────────── */}
        <section className="bg-surface-kb py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Lær mer
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Vil du vite{" "}
              <em className="font-serif italic font-normal text-brand">
                mer om TLD-er?
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              Vår TLD-kategori i kunnskapsbasen forklarer hvordan
              toppnivådomener administreres, hvem som styrer dem, og hvordan du
              velger riktig for ditt prosjekt.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kunnskapsbase/tld"
                className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-display text-[14px] font-medium hover:bg-brand-dark transition"
              >
                Les TLD-kategorien <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/kunnskapsbase/tld/alle"
                className="inline-flex items-center gap-2 bg-white text-ink border border-line px-6 py-3 rounded-full font-display text-[14px] font-medium hover:border-line-hover transition"
              >
                Se alle 1 593 TLD-er
              </Link>
            </div>

            <div className="mt-12 font-display text-[12.5px] text-muted-light">
              Verifisert mai 2026 mot IANAs root-database. Sist oppdatert 5. mai
              2026.
            </div>
          </div>
        </section>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          {
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "@id": `https://domene.io/kunnskapsbase/tld/${t.code}`,
            name: t.name,
            description: t.description,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Toppnivådomener (TLD-er)",
              url: "https://domene.io/kunnskapsbase/tld/alle",
            },
            ...(t.country && {
              additionalType: "https://schema.org/Country",
            }),
          },
        ]}
      />
    </>
  );
}

function FactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white px-5 py-4">
      <dt className="font-display text-[10.5px] uppercase tracking-[0.12em] text-muted-light font-medium mb-1.5">
        {label}
      </dt>
      <dd className="font-display text-[14px] font-medium text-ink m-0">
        {children}
      </dd>
    </div>
  );
}
