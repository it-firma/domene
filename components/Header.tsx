"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "@/lib/icons";

const navItems = [
  {
    label: "Kunnskapsbase",
    href: "/kunnskapsbase",
    children: [
      { label: ".no domene", href: "/kunnskapsbase/no-domene" },
      { label: "Domeneregistrering", href: "/kunnskapsbase/domeneregistrering" },
      { label: "DNS", href: "/kunnskapsbase/dns" },
      { label: "E-post", href: "/kunnskapsbase/epost" },
      { label: "Webhotell", href: "/kunnskapsbase/webhotell" },
      { label: "Sikkerhet", href: "/kunnskapsbase/sikkerhet" },
    ],
  },
  { label: "Guider", href: "/guider" },
  { label: "Verktøy", href: "/verktoy" },
  { label: "Sammenligninger", href: "/sammenligninger" },
  { label: "Ordliste", href: "/ordliste" },
  { label: "Om oss", href: "/om-oss" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3.5 px-7" : "py-4.5 px-7"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "h-[58px] max-w-[1080px] rounded-full bg-navy/90 px-3 pl-[22px] shadow-pill backdrop-blur-xl ring-1 ring-white/[0.06]"
            : "h-16 max-w-container px-2"
        }`}
      >
        <Logo variant="light" />

        <nav
          aria-label="Hovedmeny"
          className="hidden lg:flex items-center gap-7"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[13px] font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
              {item.children && (
                <Icon.ChevronDown
                  className="ml-1 inline-block text-white/55"
                  size={11}
                />
              )}
            </Link>
          ))}
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
            aria-label="Åpne meny"
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
        <div className="lg:hidden mt-3 mx-2 rounded-2xl bg-navy/95 backdrop-blur-xl ring-1 ring-white/[0.08] p-5 animate-fadeIn">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 font-display text-[15px] text-white/90 hover:bg-white/5 rounded-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/eksperthjelp"
                onClick={() => setMobileOpen(false)}
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
