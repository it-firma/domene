import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, ldBreadcrumb } from "@/lib/seo";
import { providers } from "@/data/providers";
import { Icon } from "@/lib/icons";
import type { ConglomerateCode } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Domeneleverandører i Norge - 8 registrarer sammenlignet",
  description:
    "Komplett oversikt over alle 8 domeneleverandører som retter seg mot norske kunder. Verifiserte fakta, priser og konsernstruktur. Oppdatert mai 2026.",
  path: "/leverandorer",
});

const CONGLOMERATE_META: Record<
  ConglomerateCode,
  { label: string; dotClass: string }
> = {
  "norsk-uavhengig": { label: "Norsk uavhengig", dotClass: "bg-emerald-500" },
  "miss-group": { label: "Miss Group", dotClass: "bg-brand" },
  "one-com-group": { label: "one.com Group", dotClass: "bg-navy" },
  "team-blue": { label: "team.blue", dotClass: "bg-brand-light" },
};

export default function LeverandorerPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Leverandører", href: "/leverandorer" },
  ];

  // Group providers by conglomerate for visual organization
  const norskUavhengig = providers.filter(
    (p) => p.conglomerate === "norsk-uavhengig"
  );
  const missGroup = providers.filter((p) => p.conglomerate === "miss-group");
  const oneComGroup = providers.filter(
    (p) => p.conglomerate === "one-com-group"
  );
  const teamBlue = providers.filter((p) => p.conglomerate === "team-blue");

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

            <div className="mt-6 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand-light">
              Domeneleverandører - Norge - 2026
            </div>

            <h1 className="mt-4 max-w-[820px] font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-white m-0">
              Alle{" "}
              <em className="font-serif italic font-normal text-brand-light">
                domeneleverandører
              </em>{" "}
              i Norge.
            </h1>

            <p className="mt-5 max-w-[640px] font-display text-[16px] leading-[1.65] text-white/72 m-0">
              Verifisert oversikt over åtte domeneregistrarer som retter seg
              mot norske kunder. Hver leverandør har sin egen profilside med
              priser, konsernstruktur, faktaboks og ofte stilte spørsmål.
            </p>

            <div className="mt-10 max-w-[760px] grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-7">
              <div className="pr-6 pb-4 md:pb-0">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Leverandører
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  8
                </div>
              </div>
              <div className="md:px-6 md:border-l border-white/10 pb-4 md:pb-0">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Konserner
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  3
                  <span className="ml-1.5 text-[13px] font-normal text-white/55">
                    + 2 uavh.
                  </span>
                </div>
              </div>
              <div className="md:px-6 md:border-l border-white/10 pb-4 md:pb-0">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Norid-akkreditert
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  8
                  <span className="ml-1.5 text-[13px] font-normal text-white/55">
                    av 8
                  </span>
                </div>
              </div>
              <div className="md:pl-6 md:border-l border-white/10">
                <div className="font-display text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 mb-2">
                  Sist verifisert
                </div>
                <div className="font-display text-[28px] font-medium tracking-[-0.02em] leading-none">
                  5.
                  <span className="ml-1.5 text-[13px] font-normal text-white/55">
                    mai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── NORSK UAVHENGIG (SURFACE-100) ─────────── */}
        {norskUavhengig.length > 0 && (
          <section className="bg-surface-100 py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                Reelt uavhengige norske
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                De{" "}
                <em className="font-serif italic font-normal text-brand">
                  to uavhengige
                </em>{" "}
                norske registrarene.
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted">
                Av åtte domeneleverandører som retter seg mot norske kunder, er
                bare disse to reelt uavhengige norske: ikke del av
                internasjonalt konsern, fortsatt eid av gründerne eller norske
                investorer.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {norskUavhengig.map((p) => (
                  <ProviderCard key={p.slug} provider={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── MISS GROUP (SURFACE-200) ─────────── */}
        {missGroup.length > 0 && (
          <section className="bg-surface-200 py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                Miss Group - Stockholm
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                Eid av{" "}
                <em className="font-serif italic font-normal text-brand">
                  Miss Group
                </em>
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted">
                Miss Group i Stockholm overtok Domeneshop i august 2024 og eier
                også Domene.no. Begge driver fortsatt fra Norge med norsk team
                og norsk juridisk enhet.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {missGroup.map((p) => (
                  <ProviderCard key={p.slug} provider={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── ONE.COM GROUP (NAVY) ─────────── */}
        {oneComGroup.length > 0 && (
          <section className="bg-navy text-white py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand-light mb-2.5">
                one.com Group - Malmö
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-white">
                Eid av{" "}
                <em className="font-serif italic font-normal text-brand-light">
                  one.com Group
                </em>
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-white/70">
                Tre merkevarer med felles svensk eier i Malmö. Uniweb og ProISP
                ble slått sammen til Group.One Norway AS i september 2024.
                One.com opererer som internasjonalt flaggskip.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {oneComGroup.map((p) => (
                  <ProviderCard key={p.slug} provider={p} dark />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── TEAM.BLUE (SURFACE-300) ─────────── */}
        {teamBlue.length > 0 && (
          <section className="bg-surface-300 py-14">
            <div className="container-prose">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
                team.blue - Gent, Belgia
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
                Eid av{" "}
                <em className="font-serif italic font-normal text-brand">
                  team.blue
                </em>
              </h2>
              <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted">
                Europas største hostingkonsern med 60+ merkevarer i 22 EU-land.
                Simply.com (tidligere UnoEuro) er deres nordiske flaggskip.
              </p>
              <div className="mt-8 grid gap-4">
                {teamBlue.map((p) => (
                  <ProviderCard key={p.slug} provider={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── CTA + RELATED (SURFACE-KB) ─────────── */}
        <section className="bg-surface-kb py-14">
          <div className="container-prose">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-brand mb-2.5">
              Sammenlign side om side
            </div>
            <h2 className="font-display text-[28px] md:text-[32px] font-medium tracking-[-0.02em] leading-[1.15] m-0 mb-3.5 text-ink">
              Vil du{" "}
              <em className="font-serif italic font-normal text-brand">
                sammenligne flere
              </em>{" "}
              samtidig?
            </h2>
            <p className="font-display text-[15px] leading-[1.65] max-w-[640px] m-0 text-muted mb-8">
              Se priser, eierskap, sikkerhet og inkluderte funksjoner side om
              side i våre redaksjonelle sammenligninger.
            </p>

            <div className="grid gap-3 md:grid-cols-2 max-w-[980px]">
              <Link
                href="/sammenligninger/domenepriser"
                className="block group bg-white border border-line rounded-2xl p-6 hover:border-line-hover transition-colors"
              >
                <div className="font-display text-[11px] uppercase tracking-[0.12em] text-brand mb-2 font-medium">
                  Sammenligning
                </div>
                <h3 className="font-display text-[18px] font-medium text-ink m-0 mb-2 group-hover:text-brand transition-colors">
                  Sammenlign domenepriser hos norske registrarer
                </h3>
                <p className="font-display text-[13px] text-muted leading-snug m-0">
                  Verifiserte priser på .no og .com hos alle åtte leverandører.
                </p>
              </Link>
              <Link
                href="/sammenligninger/eierskap-norske-registrarer"
                className="block group bg-white border border-line rounded-2xl p-6 hover:border-line-hover transition-colors"
              >
                <div className="font-display text-[11px] uppercase tracking-[0.12em] text-brand mb-2 font-medium">
                  Sammenligning
                </div>
                <h3 className="font-display text-[18px] font-medium text-ink m-0 mb-2 group-hover:text-brand transition-colors">
                  Eierskap blant norske registrarer
                </h3>
                <p className="font-display text-[13px] text-muted leading-snug m-0">
                  Hvem eier hvem? Konsernkart over alle åtte leverandører.
                </p>
              </Link>
            </div>

            <div className="mt-10 max-w-[980px] bg-brand text-white px-8 py-9 sm:px-10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display text-[22px] font-medium tracking-[-0.01em] m-0 mb-1">
                  Trenger du hjelp å velge?
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
          </div>
        </section>
      </article>

      <StructuredData
        data={[ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href })))]}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROVIDER CARD
   ───────────────────────────────────────────────────────────── */

function ProviderCard({
  provider: p,
  dark,
}: {
  provider: (typeof providers)[number];
  dark?: boolean;
}) {
  const conglom = CONGLOMERATE_META[p.conglomerate];

  if (dark) {
    return (
      <Link
        href={`/leverandorer/${p.slug}`}
        className="group block bg-white/5 border border-white/12 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all"
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`h-2 w-2 rounded-full flex-shrink-0 ${conglom.dotClass}`}
            aria-hidden="true"
          />
          <span className="font-display text-[11px] uppercase tracking-[0.08em] text-white/55 font-medium">
            {p.factBox.hovedkontor}
          </span>
        </div>
        <h3 className="font-display text-[20px] font-semibold text-white m-0 mb-1.5 group-hover:text-brand-light transition-colors">
          {p.name}
        </h3>
        <p className="font-display text-[13px] text-white/70 leading-snug m-0 mb-4">
          {p.tagline}
        </p>
        <div className="flex items-center gap-1 font-display text-[13px] font-medium text-brand-light">
          Les profil <Icon.ArrowRight size={13} />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/leverandorer/${p.slug}`}
      className="group block bg-white border border-line rounded-2xl p-6 hover:border-line-hover hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`h-2 w-2 rounded-full flex-shrink-0 ${conglom.dotClass}`}
          aria-hidden="true"
        />
        <span className="font-display text-[11px] uppercase tracking-[0.08em] text-muted font-medium">
          {p.factBox.hovedkontor}
        </span>
      </div>
      <h3 className="font-display text-[20px] font-semibold text-ink m-0 mb-1.5 group-hover:text-brand transition-colors">
        {p.name}
      </h3>
      <p className="font-display text-[13px] text-muted leading-snug m-0 mb-4">
        {p.tagline}
      </p>
      <div className="grid grid-cols-2 gap-3 pb-4 border-b border-line/60 mb-4">
        <div>
          <div className="font-display text-[10px] uppercase tracking-[0.1em] text-muted-light mb-1 font-medium">
            .no fra
          </div>
          <div className="font-display text-[14px] font-medium text-ink tabular-nums">
            {p.pricing[0]?.firstYear ?? "—"}
          </div>
        </div>
        <div>
          <div className="font-display text-[10px] uppercase tracking-[0.1em] text-muted-light mb-1 font-medium">
            .no fornyelse
          </div>
          <div className="font-display text-[14px] font-medium text-ink tabular-nums">
            {p.pricing[0]?.renewal ?? "—"}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 font-display text-[13px] font-medium text-brand">
        Les profil <Icon.ArrowRight size={13} />
      </div>
    </Link>
  );
}
