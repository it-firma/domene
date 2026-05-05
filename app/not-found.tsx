import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  description:
    "Vi fant ikke siden du lette etter. Her er noen veier videre i kunnskapsbasen.",
  robots: { index: false, follow: false },
};

const suggestions: { title: string; href: string; description: string }[] = [
  {
    title: "Kunnskapsbase",
    href: "/kunnskapsbase",
    description: "Alle kategoriene — fra .no-domener til DNS, e-post og sikkerhet.",
  },
  {
    title: "Ordliste",
    href: "/ordliste",
    description: "Korte definisjoner av begreper du møter i domeneverdenen.",
  },
  {
    title: "Guider",
    href: "/guider",
    description: "Praktiske gjennomganger — registrering, flytting, oppsett.",
  },
  {
    title: "Verktøy",
    href: "/verktoy",
    description: "Domenesjekk, DNS-oppslag, WHOIS — alt på én side.",
  },
];

export default function NotFound() {
  return (
    <div className="bg-white pt-32 pb-24 min-h-[70vh]">
      <div className="container-prose max-w-[860px]">
        <div className="font-serif italic text-muted text-[14px] mb-2">
          404
        </div>
        <h1 className="font-display text-[44px] md:text-[60px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
          Siden finnes ikke
        </h1>
        <p className="prose-body mt-6 max-w-[640px]">
          Adressen du fulgte peker ikke til noe vi har publisert. Den kan være
          flyttet, skrevet litt feil, eller kanskje aldri ha eksistert. Her er
          noen veier videre.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-line bg-surface-100 p-6 transition hover:border-brand/40 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-[18px] font-medium text-ink m-0">
                  {s.title}
                </h2>
                <Icon.ArrowRight
                  size={18}
                  className="mt-1 flex-shrink-0 text-muted-light transition group-hover:text-brand group-hover:translate-x-0.5"
                />
              </div>
              <p className="font-display text-[14px] leading-[1.55] text-muted mt-2 m-0">
                {s.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="font-display text-[14px] text-muted">
            Tror du noe er ødelagt?{" "}
            <Link href="/kontakt" className="text-brand hover:underline">
              Si fra her
            </Link>{" "}
            — vi setter pris på det.
          </p>
        </div>
      </div>
    </div>
  );
}
