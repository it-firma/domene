import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "@/lib/icons";
import { site } from "@/lib/site";

const cols: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Familien",
    items: site.family.map((f) => ({ label: f.name, href: f.url })),
  },
  {
    title: "Kunnskapsbase",
    items: [
      { label: ".no domene", href: "/kunnskapsbase/no-domene" },
      { label: "DNS og DNSSEC", href: "/kunnskapsbase/dns" },
      { label: "E-post", href: "/kunnskapsbase/epost" },
      { label: "Webhotell", href: "/kunnskapsbase/webhotell" },
      { label: "Alle kategorier", href: "/kunnskapsbase" },
    ],
  },
  {
    title: "Ressurser",
    items: [
      { label: "Guider", href: "/guider" },
      { label: "Verktøy", href: "/verktoy" },
      { label: "Sammenligninger", href: "/sammenligninger" },
      { label: "Leverandører", href: "/leverandorer" },
      { label: "Ordliste", href: "/ordliste" },
    ],
  },
  {
    title: "Selskap",
    items: [
      { label: "Om oss", href: "/om-oss" },
      { label: "DomainNordic", href: "/om-oss" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Eksperthjelp", href: "/eksperthjelp" },
    ],
  },
];

/** True when href is a real route, not a placeholder. */
const isRealHref = (href: string) => href !== "#" && href.length > 0;

export function Footer() {
  const hasLinkedin = isRealHref(site.social.linkedin);
  const hasX = isRealHref(site.social.x);
  return (
    <footer className="bg-[#050A1E] text-white/70">
      <div className="mx-auto max-w-container px-7 py-20">
        <div className="grid gap-20 md:grid-cols-2 mb-15">
          <div>
            <div className="mb-6">
              <Logo variant="light" size="footer" />
            </div>
            <p className="font-display text-sm leading-[1.6] text-white/55 max-w-[460px] mb-7">
              domene.io er en del av DomainNordic Advisory Group, en nordisk
              rådgivningsgruppe som hjelper bedrifter med strategisk eierskap av
              domener - bygget for langsiktige eiendeler, ikke transaksjoner.
            </p>
            {(hasLinkedin || hasX) && (
              <div className="flex gap-2.5">
                {hasLinkedin && (
                  <Link
                    href={site.social.linkedin}
                    aria-label="LinkedIn"
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition hover:bg-white/[0.12] hover:text-white"
                  >
                    <Icon.Linkedin size={16} />
                  </Link>
                )}
                {hasX && (
                  <Link
                    href={site.social.x}
                    aria-label="X"
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition hover:bg-white/[0.12] hover:text-white"
                  >
                    <Icon.X size={14} />
                  </Link>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 mb-4">
              Direkte kontakt
            </div>
            <a
              href={`mailto:${site.email}`}
              className="font-display text-base font-medium text-white mb-3.5 block hover:text-brand-light"
            >
              {site.email}
            </a>
            <p className="font-display text-[13.5px] leading-[1.6] text-white/55 max-w-[360px]">
              Alle henvendelser håndteres med høy diskresjon. Vi svarer normalt
              innen én virkedag.
            </p>
          </div>
        </div>

        <div className="h-px bg-white/[0.08] mb-14" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-15 mb-14">
          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 mb-5">
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.href + item.label}>
                    {isRealHref(item.href) ? (
                      <Link
                        href={item.href}
                        className="font-display text-sm text-white/75 transition hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className="font-display text-sm text-white/40 cursor-default"
                        title="Kommer snart"
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-7 border-t border-white/[0.08]">
          <div className="font-display text-[12.5px] text-white/45 flex flex-wrap gap-7">
            <span>© 2026 {site.legalName}</span>
            <Link href="/personvern" className="hover:text-white/80">
              Personvern
            </Link>
            <Link href="/vilkar" className="hover:text-white/80">
              Vilkår
            </Link>
          </div>
          <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
            Nordisk domenerådgivning
          </div>
        </div>
      </div>
    </footer>
  );
}
