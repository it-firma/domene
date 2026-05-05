import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/lib/icons";
import { SearchBar } from "./SearchBar";

const popularSearches = [
  ".no domene",
  "DNS",
  "Sett opp e-post",
  "Flytt domene",
  "DNSSEC",
  "Velg domenenavn",
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-navy-deep">
      {/* Background image with priority load (LCP) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-banner.jpg"
          alt=""
          role="presentation"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/45 via-navy-deep/15 to-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/60 via-transparent to-navy-deep/25" />
      </div>

      <div className="container-prose flex min-h-[100vh] flex-col justify-center pt-32 pb-32 relative">
        <div className="font-serif italic text-white/70 text-[14px] mb-7 flex items-center gap-4">
          <span>N°01</span>
          <span className="block h-px w-8 bg-white/35" />
          <span className="font-display not-italic text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/65">
            Norges kunnskapsbase om domener
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column: heading */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-normal text-white tracking-[-0.035em] leading-[0.98] text-[clamp(48px,6.8vw,108px)] max-w-[640px] m-0">
              Norges
              <br />
              ultimate
              <br />
              <em className="font-serif italic font-normal text-white">
                kunnskaps&shy;base,
              </em>
              <br />
              bygget for
              <br />
              <span className="text-white/55">fremtiden.</span>
            </h1>
          </div>

          {/* Right column: description, search, CTAs */}
          <div className="lg:col-span-5 flex flex-col gap-5 max-w-[440px] lg:max-w-none">
            <p className="font-display text-[14.5px] leading-[1.65] text-white/80 m-0">
              En komplett ressurs for norske domeneeier. Lær om domener fra A
              til Å, sett opp DNS riktig, og finn verktøyene du trenger for å
              gjøre trygge valg.
            </p>

            <SearchBar variant="hero" />

            <div className="hidden lg:block">
              <div className="font-display text-[11px] uppercase tracking-[0.16em] text-white/50 mb-3">
                Populære søk
              </div>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                {popularSearches.map((s) => (
                  <li key={s}>
                    <Link
                      href={`/kunnskapsbase?q=${encodeURIComponent(s)}`}
                      className="inline-flex rounded-full bg-white/[0.08] px-3 py-1.5 font-display text-[12px] text-white/85 ring-1 ring-white/[0.1] transition hover:bg-white/[0.14]"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/kunnskapsbase"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-[14px] font-medium text-white transition hover:bg-brand-dark hover:-translate-y-0.5"
              >
                Utforsk kunnskapsbasen <Icon.ArrowRight size={14} />
              </Link>
              <Link href="/verktoy" className="btn-ghost-light">
                Verktøy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
