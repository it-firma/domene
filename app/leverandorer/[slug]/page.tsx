import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, ldBreadcrumb, ldFaq } from "@/lib/seo";
import { providers, findProvider } from "@/data/providers";
import { findComparison } from "@/data/comparisons";
import { Icon } from "@/lib/icons";
import type { ConglomerateCode, ProviderFeature } from "@/lib/types";

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = findProvider(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.name} - ${p.tagline}`,
    description: p.description,
    path: `/leverandorer/${p.slug}`,
  });
}

const CONGLOMERATE_META: Record<
  ConglomerateCode,
  { label: string; dotClass: string }
> = {
  "norsk-uavhengig": { label: "Norsk uavhengig", dotClass: "bg-emerald-500" },
  "miss-group": { label: "Miss Group", dotClass: "bg-brand" },
  "one-com-group": { label: "one.com Group", dotClass: "bg-navy" },
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

export default function ProviderPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = findProvider(params.slug);
  if (!p) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Leverandører", href: "/leverandorer" },
    { label: p.name, href: `/leverandorer/${p.slug}` },
  ];

  const conglom = CONGLOMERATE_META[p.conglomerate];
  const relComparisons = (p.relatedComparisons ?? [])
    .map((slug) => findComparison(slug))
    .filter((c): c is NonNullable<typeof c> => !!c);
  const relProviders = (p.relatedProviders ?? [])
    .map((slug) => findProvider(slug))
    .filter((rp): rp is NonNullable<typeof rp> => !!rp);

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

            <div className="mt-6 inline-flex items-center gap-2 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand-light">
              <span
                className={`h-2 w-2 rounded-full ${conglom.dotClass}`}
                aria-hidden="true"
              />
              Leverandørprofil - {conglom.label}
            </div>

            <h1 className="mt-4 max-w-[820px] font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0">
              {p.editorialTitle.lead}{" "}
              <em className="font-serif italic font-normal text-brand-light">
                {p.editorialTitle.emphasis}
              </em>
              {p.editorialTitle.tail && <> {p.editorialTitle.tail}</>}
            </h1>

            <p className="mt-5 max-w-[680px] font-display text-[16px] leading-[1.65] text-white/72 m-0">
              {p.answerBox}
            </p>
          </div>
        </section>

        {/* ─────────── 2. FAKTABOKS (SURFACE-100) ─────────── */}
        <section className="bg-surface-100 py-14" id="fakta">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Faktaboks
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Hva er{" "}
              <em className="font-serif italic font-normal text-brand">
                {p.name}?
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              Verifiserte fakta hentet fra primærkilder: leverandørens nettsider,
              Brønnøysundregisteret og offentlige prislister.
            </p>

            <dl className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-line border border-line rounded-2xl overflow-hidden max-w-[980px]">
              <FactRow label="Konsern">
                <span className="inline-flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${conglom.dotClass}`}
                    aria-hidden="true"
                  />
                  {p.factBox.konsern}
                </span>
              </FactRow>
              <FactRow label="Hovedkontor">{p.factBox.hovedkontor}</FactRow>
              <FactRow label="Juridisk navn">{p.factBox.juridisk}</FactRow>
              <FactRow label="Stiftet">{p.factBox.stiftet}</FactRow>
              {p.factBox.orgnr && (
                <FactRow label="Org.nr">{p.factBox.orgnr}</FactRow>
              )}
              <FactRow label="Norid-akkreditert">
                {p.factBox.norid ? "Ja" : "Nei"}
              </FactRow>
              <FactRow label="ICANN-akkreditert">
                {p.factBox.icann ? "Ja" : "Nei"}
              </FactRow>
              {p.factBox.markedsandel && (
                <FactRow label="Markedsandel">
                  {p.factBox.markedsandel}
                </FactRow>
              )}
              <FactRow label="Nettside">
                <a
                  href={p.factBox.url}
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-brand hover:underline inline-flex items-center gap-1"
                >
                  {p.factBox.url.replace(/^https?:\/\//, "")}
                  <span aria-hidden="true">↗</span>
                </a>
              </FactRow>
            </dl>
          </div>
        </section>

        {/* ─────────── 3. INTRODUKSJON (SURFACE-200) ─────────── */}
        <section className="bg-surface-200 py-14" id="introduksjon">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Bakgrunn og kontekst
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Om{" "}
              <em className="font-serif italic font-normal text-brand">
                {p.name}
              </em>
            </h2>
            <div className="mt-6 max-w-[760px] flex flex-col gap-5">
              {p.introduction.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-display text-[15.5px] leading-[1.75] text-ink/85 m-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 4. PRISER (HVIT) ─────────── */}
        <section className="bg-white py-14" id="priser">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2.5">
              Priser - Verifisert mai 2026
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              {p.name}{" "}
              <em className="font-serif italic font-normal text-brand">
                priser
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              Alle priser i NOK inkludert 25 % mva. Manuelt verifisert fra
              leverandørens offentlige prisliste.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-line bg-white max-w-[980px]">
              <table className="w-full text-left font-display text-[14px]">
                <thead className="bg-surface-100">
                  <tr>
                    <th className="px-5 py-3.5 font-medium text-[10.5px] uppercase tracking-[0.1em] text-muted">
                      TLD
                    </th>
                    <th className="px-5 py-3.5 font-medium text-[10.5px] uppercase tracking-[0.1em] text-muted">
                      Første år
                    </th>
                    <th className="px-5 py-3.5 font-medium text-[10.5px] uppercase tracking-[0.1em] text-muted">
                      Fornyelse
                    </th>
                    <th className="px-5 py-3.5 font-medium text-[10.5px] uppercase tracking-[0.1em] text-muted">
                      3-års total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {p.pricing.map((row, i) => (
                    <tr key={i} className="hover:bg-surface-100/60">
                      <td className="px-5 py-4 font-medium text-ink">
                        {row.tld}
                      </td>
                      <td className="px-5 py-4 text-ink/90 tabular-nums">
                        {row.firstYear}
                      </td>
                      <td className="px-5 py-4 text-ink/90 tabular-nums">
                        {row.renewal}
                      </td>
                      <td className="px-5 py-4 text-ink font-medium tabular-nums">
                        {row.threeYearTotal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {p.pricingNote && (
              <p className="mt-4 font-display text-[12.5px] leading-[1.6] text-muted-light italic max-w-[680px]">
                {p.pricingNote}
              </p>
            )}

            <Link
              href="/sammenligninger/domenepriser"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-[14px] font-medium text-brand hover:underline"
            >
              Sammenlign med alle 8 leverandører
              <Icon.ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ─────────── 5. INKLUDERT (SURFACE-300) ─────────── */}
        {p.included.length > 0 && (
          <section className="bg-surface-300 py-14" id="inkludert">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                I grunnpakken
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                Hva er{" "}
                <em className="font-serif italic font-normal text-brand">
                  inkludert?
                </em>
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
                Disse funksjonene er inkludert i {p.name} sin grunnpakke uten
                ekstra kostnad. Tilleggsprodukter selges separat.
              </p>

              <ul className="flex flex-wrap gap-2.5 list-none m-0 p-0 max-w-[980px]">
                {p.included.map((feat) => (
                  <li
                    key={feat}
                    className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2.5 font-display text-[13px] text-ink"
                  >
                    <Icon.Check size={14} className="text-brand" />
                    {FEATURE_META[feat].label}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ─────────── 6. SAMMENLIGN MED ANDRE (NAVY) ─────────── */}
        {relProviders.length > 0 && (
          <section className="bg-navy text-white py-14" id="sammenlign">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand-light mb-2.5">
                Andre leverandører
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-white">
                Sammenlign{" "}
                <em className="font-serif italic font-normal text-brand-light">
                  {p.name}
                </em>{" "}
                med andre.
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-white/70">
                Andre relevante leverandører du kan sammenligne med basert på
                pris, eierskap og tjenester.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3 max-w-[980px]">
                {relProviders.map((rp) => {
                  const rc = CONGLOMERATE_META[rp.conglomerate];
                  return (
                    <Link
                      key={rp.slug}
                      href={`/leverandorer/${rp.slug}`}
                      className="group block bg-white/5 border border-white/12 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`h-2 w-2 rounded-full ${rc.dotClass}`}
                          aria-hidden="true"
                        />
                        <span className="font-display text-[10px] uppercase tracking-[0.08em] text-white/55 font-medium">
                          {rc.label}
                        </span>
                      </div>
                      <h3 className="font-display text-[18px] font-semibold text-white m-0 mb-1 group-hover:text-brand-light transition-colors">
                        {rp.name}
                      </h3>
                      <p className="font-display text-[12.5px] text-white/65 leading-snug m-0">
                        {rp.tagline}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── 7. FAQ + CTA + RELATED (SURFACE-KB) ─────────── */}
        <section className="bg-surface-kb py-14" id="faq">
          <div className="container-prose">
            {p.faq.length > 0 && (
              <>
                <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                  Ofte stilte spørsmål
                </div>
                <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                  Spørsmål om{" "}
                  <em className="font-serif italic font-normal text-brand">
                    {p.name}
                  </em>
                </h2>
                <div className="mt-8 max-w-[880px]">
                  <FAQ items={p.faq} title="" />
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
                  Snakk med våre rådgivere om hvilken leverandør som passer dine
                  behov.
                </p>
              </div>
              <Link
                href="/eksperthjelp"
                className="bg-white text-brand px-6 py-3 rounded-full font-display text-[14px] font-semibold hover:bg-white/90 transition flex-shrink-0 whitespace-nowrap"
              >
                Få eksperthjelp →
              </Link>
            </div>

            {/* Related comparisons */}
            {relComparisons.length > 0 && (
              <div className="mt-12 max-w-[980px]">
                <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                  Relaterte sammenligninger
                </div>
                <ul className="mt-5 flex flex-col gap-3 list-none m-0 p-0">
                  {relComparisons.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/sammenligninger/${c.slug}`}
                        className="block group bg-white border border-line rounded-xl px-5 py-4 hover:border-line-hover transition-colors"
                      >
                        <span className="font-display text-[15px] font-medium text-ink group-hover:text-brand transition-colors">
                          {c.title}
                        </span>
                        <span className="block mt-0.5 font-display text-[13px] text-muted leading-snug">
                          {c.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 font-display text-[12.5px] text-muted-light">
              Sist oppdatert{" "}
              {new Date(p.updatedAt).toLocaleDateString("nb-NO", {
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
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: p.name,
            alternateName: p.factBox.juridisk,
            url: p.factBox.url,
            foundingDate: p.factBox.stiftet,
            address: {
              "@type": "PostalAddress",
              addressLocality: p.factBox.hovedkontor,
            },
            ...(p.factBox.orgnr && {
              identifier: { "@type": "PropertyValue", name: "Org.nr", value: p.factBox.orgnr },
            }),
            description: p.description,
            parentOrganization: {
              "@type": "Organization",
              name: conglom.label,
            },
          },
          ...(p.faq.length > 0 ? [ldFaq(p.faq)] : []),
        ]}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   FACT ROW (used in faktaboks grid)
   ───────────────────────────────────────────────────────────── */

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
