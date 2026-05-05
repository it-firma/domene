import { Icon } from "@/lib/icons";

const stats = [
  { value: "260+", label: "Guider og artikler", IconComp: Icon.Edit },
  { value: "15+", label: "Kategorier", IconComp: Icon.Network },
  { value: "25+", label: "Profesjonelle verktøy", IconComp: Icon.Tag },
  { value: "Daglig", label: "Oppdatert kvalitet", IconComp: Icon.Clock },
];

/**
 * Mission card that overlaps the hero bottom and the navy section below.
 * Inspired by DomainNordic's editorial style.
 */
export function StatsBar() {
  return (
    <section className="relative z-20 -mt-[180px]">
      <div className="container-prose">
        <div className="rounded-3xl bg-white shadow-cardLg p-10 md:p-12">
          <header className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between border-b border-line pb-8 mb-8">
            <div className="flex-1 max-w-[480px]">
              <div className="font-serif italic text-muted text-[14px] mb-2">
                N°02 — Vår misjon
              </div>
              <h2 className="font-display text-[26px] md:text-[32px] font-medium tracking-[-0.015em] leading-[1.2] text-ink m-0">
                Norges største ressurs
                <br className="hidden md:block" /> om domener
              </h2>
            </div>
            <p className="font-display text-[13.5px] leading-[1.65] text-muted max-w-[360px] m-0">
              Vi har samlet og kvalitetssikret domeneverdenens viktigste
              kunnskap, slik at du kan ta trygge beslutninger om eierskap,
              flytting, sikkerhet og strategi.
            </p>
          </header>
          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-4">
            {stats.map(({ value, label, IconComp }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <IconComp size={22} />
                </span>
                <div>
                  <div className="font-display text-[22px] font-semibold tracking-[-0.01em] leading-none text-ink">
                    {value}
                  </div>
                  <div className="mt-1 font-display text-[12px] text-muted">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
