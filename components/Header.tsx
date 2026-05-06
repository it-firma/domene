"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon, IconByName } from "@/lib/icons";
import { MegaMenu } from "./MegaMenu";
import { categories } from "@/data/categories";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpandedSection(null);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3.5 px-7" : "py-4.5 px-7"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "h-[58px] max-w-[1180px] rounded-full bg-navy/90 px-3 pl-[22px] shadow-pill backdrop-blur-xl ring-1 ring-white/[0.06]"
            : "h-16 max-w-container px-2"
        }`}
      >
        <Logo variant="light" />

        <nav aria-label="Hovedmeny" className="hidden lg:flex items-center">
          <MegaMenu variant="light" />
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/eksperthjelp"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 font-display text-[13px] font-medium text-white transition hover:bg-brand-dark hover:-translate-y-0.5"
          >
            Få eksperthjelp
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 mx-2 rounded-2xl bg-navy/95 backdrop-blur-xl ring-1 ring-white/[0.08] p-5 animate-fadeIn max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain">
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            <MobileNavGroup
              label="Kunnskapsbase"
              href="/kunnskapsbase"
              expanded={mobileExpandedSection === "kunnskapsbase"}
              onToggle={() =>
                setMobileExpandedSection(
                  mobileExpandedSection === "kunnskapsbase" ? null : "kunnskapsbase"
                )
              }
            >
              <ul className="flex flex-col gap-0.5 list-none m-0 p-0 mt-1">
                {categories.slice(0, 8).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/kunnskapsbase/${cat.slug}`}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 font-display text-[13px] text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      <IconByName name={cat.icon} size={13} />
                      {cat.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/kunnskapsbase"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 font-display text-[13px] font-medium text-brand-light hover:text-white"
                  >
                    Se alle kategorier <Icon.ArrowRight size={11} />
                  </Link>
                </li>
              </ul>
            </MobileNavGroup>

            <MobileNavLink href="/guider" label="Guider" />
            <MobileNavLink href="/verktoy" label="Verktøy" />
            <MobileNavLink href="/sammenligninger" label="Sammenligninger" />
            <MobileNavLink href="/ordliste" label="Ordliste" />
            <MobileNavLink href="/om-oss" label="Om oss" />

            <li className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/eksperthjelp"
                className="block text-center rounded-full bg-brand px-5 py-3 font-display text-sm font-medium text-white"
              >
                Få eksperthjelp
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block px-3 py-2.5 font-display text-[15px] text-white/90 hover:bg-white/5 rounded-lg"
      >
        {label}
      </Link>
    </li>
  );
}

function MobileNavGroup({
  label,
  href,
  expanded,
  onToggle,
  children,
}: {
  label: string;
  href: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <li>
      <div className="flex items-center justify-between rounded-lg hover:bg-white/5">
        <Link
          href={href}
          className="flex-1 px-3 py-2.5 font-display text-[15px] text-white/90"
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={expanded ? `Skjul ${label}-meny` : `Vis ${label}-meny`}
          className="px-3 py-2.5 text-white/55"
        >
          <Icon.ChevronDown
            size={14}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {expanded && children}
    </li>
  );
}
