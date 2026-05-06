import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, ldBreadcrumb } from "@/lib/seo";
import { tlds } from "@/data/tlds";
import type { TldType } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Alle TLD-er - komplett liste over toppnivådomener (1593)",
  description:
    "Komplett liste over alle 1 593 toppnivådomener (TLD-er) i IANAs root-database. Sortert etter type: ccTLD, gTLD, sTLD og IDN. Verifisert mai 2026.",
  path: "/kunnskapsbase/tld/alle",
});

const TYPE_META: Record<TldType, { label: string; description: string }> = {
  ccTLD: {
    label: "ccTLD - Landkode",
    description:
      "Country-code Top-Level Domain. Knyttet til et bestemt land eller territorium (eks. .no, .se).",
  },
  gTLD: {
    label: "gTLD - Generisk",
    description:
      "Generic Top-Level Domain. Åpen for registrering uavhengig av geografi (eks. .com, .org).",
  },
  sTLD: {
    label: "sTLD - Sponset",
    description:
      "Sponsored Top-Level Domain. Strenge krav til hvem som kan registrere (eks. .gov, .museum).",
  },
  iTLD: {
    label: "iTLD - Internasjonalisert",
    description:
      "Internationalized Domain Name TLD i ikke-latinske skrift (eks. .中国, .рф).",
  },
  infrastructure: {
    label: "Infrastructure",
    description: "Teknisk infrastruktur for internett (kun .arpa).",
  },
  brand: {
    label: "Brand-TLD",
    description:
      "Brand-eid Top-Level Domain. Kun bedriften som eier kan bruke (eks. .google, .apple).",
  },
};

export default function TldListPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Kunnskapsbase", href: "/kunnskapsbase" },
    { label: "TLD - toppnivådomener", href: "/kunnskapsbase/tld" },
    { label: "Alle TLD-er", href: "/kunnskapsbase/tld/alle" },
  ];

  // Group by type
  const byType: Record<TldType, typeof tlds> = {
    ccTLD: [],
    gTLD: [],
    sTLD: [],
    iTLD: [],
    infrastructure: [],
    brand: [],
  };
  for (const t of tlds) byType[t.type].push(t);

  // Sort each group alphabetically
  for (const type in byType) {
    byType[type as TldType].sort((a, b) => a.code.localeCompare(b.code));
  }

  // Popular TLDs across all types
  const popular = tlds
    .filter((t) => t.popular)
    .sort((a, b) => a.code.localeCompare(b.code));

  return (
    <>
      <article>
        {/* ─────────── HERO (NAVY) ─────────── */}
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
              IANA Root Zone Database - Verifisert mai 2026
            </div>

            <h1 className="mt-4 max-w-[820px] font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0">
              Alle{" "}
              <em className="font-serif italic font-normal text-brand-light">
                toppnivådomener
              </em>{" "}
              i verden.
            </h1>

            <p className="mt-5 max-w-[680px] font-display text-[16px] leading-[1.65] text-white/72 m-0">
              Komplett liste over alle 1 593 toppnivådomener (TLD-er) i IANAs
              root-database. Sortert etter type: 248 landkode (ccTLD), 1 020+
              generiske (gTLD), 14 sponsede (sTLD) og 150+ internasjonaliserte
              (IDN). Vi har skrevet beskrivelser for de mest brukte.
            </p>

            <div className="mt-10 max-w-[760px] grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-7">
              <div className="pr-6 pb-4 md:pb-0">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Totalt i databasen
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  1 593
                </div>
              </div>
              <div className="md:px-6 md:border-l border-white/10 pb-4 md:pb-0">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Landkode (ccTLD)
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  {byType.ccTLD.length}
                </div>
              </div>
              <div className="md:px-6 md:border-l border-white/10 pb-4 md:pb-0">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Generisk (gTLD)
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  ~1 020
                </div>
              </div>
              <div className="md:pl-6 md:border-l border-white/10">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Internasjonal
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  ~150
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── POPULÆRE TLD-ER (SURFACE-100) ─────────── */}
        <section className="bg-surface-100 py-14" id="populaere">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Mest brukt
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Populære{" "}
              <em className="font-serif italic font-normal text-brand">
                TLD-er
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              De {popular.length} mest brukte TLD-ene globalt. Disse dekker over
              90 % av alle registrerte domener på internett.
            </p>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {popular.map((t) => (
                <TldCard key={t.code} tld={t} highlight />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── ccTLDs (SURFACE-200) ─────────── */}
        <section className="bg-surface-200 py-14" id="cctld">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              {byType.ccTLD.length} landkode-TLD-er
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Landkode-TLD-er{" "}
              <em className="font-serif italic font-normal text-brand">
                (ccTLD)
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              {TYPE_META.ccTLD.description} Standardisert via ISO 3166-1
              alpha-2-koden, men med unntak (.uk for Storbritannia i stedet for
              .gb).
            </p>

            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {byType.ccTLD.map((t) => (
                <TldCard key={t.code} tld={t} compact />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── gTLDs (HVIT) ─────────── */}
        <section className="bg-white py-14" id="gtld">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2.5">
              Generiske og brand-TLD-er
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Generiske{" "}
              <em className="font-serif italic font-normal text-brand">
                TLD-er (gTLD)
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              {TYPE_META.gTLD.description} Per februar 2026 finnes det rundt
              1 020 generiske TLD-er. Vi har beskrevet de viktigste under -
              resten finnes i IANAs root-database.
            </p>

            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {byType.gTLD.map((t) => (
                <TldCard key={t.code} tld={t} compact />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── sTLDs (SURFACE-300) ─────────── */}
        <section className="bg-surface-300 py-14" id="stld">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Sponsede TLD-er (sTLD)
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Sponsede{" "}
              <em className="font-serif italic font-normal text-brand">
                TLD-er (sTLD)
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              {TYPE_META.sTLD.description} Disse 14 TLD-ene har strenge regler
              for hvem som kan registrere - typisk en spesifikk yrkesgruppe
              eller bransje.
            </p>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {byType.sTLD.map((t) => (
                <TldCard key={t.code} tld={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── BRAND-TLDs (NAVY) ─────────── */}
        {byType.brand.length > 0 && (
          <section className="bg-navy text-white py-14" id="brand">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand-light mb-2.5">
                Brand-TLD-er
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-white">
                Brand-eide{" "}
                <em className="font-serif italic font-normal text-brand-light">
                  TLD-er
                </em>
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-white/70">
                {TYPE_META.brand.description} Det finnes hundrevis av
                brand-TLD-er totalt - vi viser kun de mest kjente. Disse er ikke
                åpne for offentlig registrering.
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {byType.brand.map((t) => (
                  <TldCard key={t.code} tld={t} dark />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── BACK TO CATEGORY (SURFACE-KB) ─────────── */}
        <section className="bg-surface-kb py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Lær mer om TLD-er
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Trenger du{" "}
              <em className="font-serif italic font-normal text-brand">
                bakgrunn?
              </em>
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              Vår TLD-kategori i kunnskapsbasen forklarer hva TLD-er er, hvem
              som administrerer dem, og hvordan du velger riktig.
            </p>

            <Link
              href="/kunnskapsbase/tld"
              className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-display text-[14px] font-medium hover:bg-brand-dark transition"
            >
              Les TLD-kategorien <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Alle TLD-er - komplett liste",
            description:
              "Komplett liste over alle 1 593 toppnivådomener i IANAs root-database",
            numberOfItems: tlds.length,
            itemListElement: tlds.slice(0, 50).map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t.name,
              description: t.description,
              url: `https://domene.io/kunnskapsbase/tld/${t.code}`,
            })),
          },
        ]}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   TLD CARD
   ───────────────────────────────────────────────────────────── */

function TldCard({
  tld: t,
  compact,
  highlight,
  dark,
}: {
  tld: (typeof tlds)[number];
  compact?: boolean;
  highlight?: boolean;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <Link
        href={`/kunnskapsbase/tld/${t.code}`}
        className="group block bg-white/5 border border-white/12 rounded-xl p-4 hover:bg-white/8 hover:border-white/20 transition-all"
      >
        <div className="font-display text-[16px] font-semibold text-white mb-1 group-hover:text-brand-light transition-colors">
          {t.name}
        </div>
        <div className="font-display text-[12px] text-white/65 leading-snug line-clamp-2">
          {t.description}
        </div>
      </Link>
    );
  }

  if (compact) {
    return (
      <Link
        href={`/kunnskapsbase/tld/${t.code}`}
        className="group block bg-white border border-line rounded-xl px-4 py-3 hover:border-line-hover transition-colors"
      >
        <div className="flex items-baseline gap-2 mb-0.5">
          <span className="font-display text-[15px] font-semibold text-ink group-hover:text-brand transition-colors tabular-nums">
            {t.name}
          </span>
          {t.country && (
            <span className="font-display text-[12px] text-muted truncate">
              {t.country}
            </span>
          )}
        </div>
        <div className="font-display text-[12px] text-muted leading-snug line-clamp-2">
          {t.description}
        </div>
      </Link>
    );
  }

  if (highlight) {
    return (
      <Link
        href={`/kunnskapsbase/tld/${t.code}`}
        className="group block bg-white border border-line rounded-2xl p-5 hover:border-line-hover hover:-translate-y-0.5 transition-all"
      >
        <div className="font-display text-[20px] font-semibold text-ink mb-1 group-hover:text-brand transition-colors tabular-nums">
          {t.name}
        </div>
        {t.country && (
          <div className="font-display text-[12.5px] uppercase tracking-[0.06em] text-muted-light font-medium mb-2">
            {t.country}
          </div>
        )}
        <p className="font-display text-[13px] text-muted leading-[1.55] m-0">
          {t.description}
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={`/kunnskapsbase/tld/${t.code}`}
      className="group block bg-white border border-line rounded-xl p-4 hover:border-line-hover transition-colors"
    >
      <div className="font-display text-[16px] font-semibold text-ink mb-1 group-hover:text-brand transition-colors tabular-nums">
        {t.name}
      </div>
      <div className="font-display text-[12px] text-muted leading-snug">
        {t.description}
      </div>
    </Link>
  );
}
