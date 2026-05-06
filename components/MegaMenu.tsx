"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon, IconByName } from "@/lib/icons";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";

type MenuKey = "kunnskapsbase" | "guider" | "sammenligninger" | "verktoy";

/**
 * Header megamenu — single shared dropdown that swaps content based on
 * which top-level item is hovered/focused. Closes on outside click,
 * Esc, route change, or pointer leaving the menu region.
 */
export function MegaMenu({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenKey(null), 120);
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenKey(null);
      }
    };
    if (openKey) {
      document.addEventListener("mousedown", onClick);
      return () => document.removeEventListener("mousedown", onClick);
    }
  }, [openKey]);

  const linkClass =
    variant === "light"
      ? "font-display text-[13px] font-medium text-white/85 transition hover:text-white"
      : "font-display text-[13px] font-medium text-ink/80 transition hover:text-ink";

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-7"
      onMouseLeave={scheduleClose}
    >
      <MenuTrigger
        keyName="kunnskapsbase"
        label="Kunnskapsbase"
        href="/kunnskapsbase"
        openKey={openKey}
        setOpenKey={setOpenKey}
        cancelClose={cancelClose}
        className={linkClass}
      />
      <MenuTrigger
        keyName="guider"
        label="Guider"
        href="/guider"
        openKey={openKey}
        setOpenKey={setOpenKey}
        cancelClose={cancelClose}
        className={linkClass}
      />
      <Link
        href="/verktoy"
        className={linkClass}
        onMouseEnter={() => {
          cancelClose();
          setOpenKey(null);
        }}
      >
        Verktøy
      </Link>
      <MenuTrigger
        keyName="sammenligninger"
        label="Sammenligninger"
        href="/sammenligninger"
        openKey={openKey}
        setOpenKey={setOpenKey}
        cancelClose={cancelClose}
        className={linkClass}
      />
      <Link
        href="/ordliste"
        className={linkClass}
        onMouseEnter={() => {
          cancelClose();
          setOpenKey(null);
        }}
      >
        Ordliste
      </Link>
      <Link
        href="/om-oss"
        className={linkClass}
        onMouseEnter={() => {
          cancelClose();
          setOpenKey(null);
        }}
      >
        Om oss
      </Link>

      {/* Dropdown panel */}
      {openKey && (
        <div
          className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div
            className="rounded-2xl bg-white shadow-cardLg ring-1 ring-line min-w-[640px] max-w-[860px] p-6 animate-fadeIn"
            role="menu"
          >
            {openKey === "kunnskapsbase" && <KunnskapsbaseMenu />}
            {openKey === "guider" && <GuiderMenu />}
            {openKey === "sammenligninger" && <SammenligningerMenu />}
          </div>
        </div>
      )}
    </div>
  );
}

function MenuTrigger({
  keyName,
  label,
  href,
  openKey,
  setOpenKey,
  cancelClose,
  className,
}: {
  keyName: MenuKey;
  label: string;
  href: string;
  openKey: MenuKey | null;
  setOpenKey: (k: MenuKey | null) => void;
  cancelClose: () => void;
  className: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} inline-flex items-center gap-1`}
      onMouseEnter={() => {
        cancelClose();
        setOpenKey(keyName);
      }}
      onFocus={() => {
        cancelClose();
        setOpenKey(keyName);
      }}
      aria-expanded={openKey === keyName}
      aria-haspopup="menu"
    >
      {label}
      <Icon.ChevronDown
        size={11}
        className={`transition-transform ${
          openKey === keyName ? "rotate-180" : ""
        } opacity-60`}
      />
    </Link>
  );
}

/* ─── Kunnskapsbase menu — 3 columns by topic group ─── */

function KunnskapsbaseMenu() {
  const groups: { heading: string; slugs: string[] }[] = [
    {
      heading: "Domener",
      slugs: ["no-domene", "domeneregistrering", "domeneflytting"],
    },
    {
      heading: "Infrastruktur",
      slugs: ["dns", "epost", "webhotell", "whois", "seo-og-synlighet"],
    },
    {
      heading: "Sikkerhet & juss",
      slugs: ["dnssec", "domenesikkerhet", "juridisk-og-varemerke", "personvern-og-gdpr"],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {groups.map((g) => (
        <div key={g.heading}>
          <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3">
            {g.heading}
          </div>
          <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
            {g.slugs.map((slug) => {
              const cat = categories.find((c) => c.slug === slug);
              if (!cat) return null;
              return (
                <li key={cat.slug}>
                  <Link
                    href={`/kunnskapsbase/${cat.slug}`}
                    className="flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-surface-100 transition-colors group"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                      <IconByName name={cat.icon} size={14} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-display text-[13.5px] font-medium text-ink">
                        {cat.name}
                      </div>
                      <div className="font-display text-[11.5px] leading-snug text-muted truncate">
                        {cat.shortDescription}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="col-span-3 mt-2 pt-4 border-t border-line flex items-center justify-between">
        <p className="font-display text-[12px] text-muted m-0">
          {categories.length} kategorier · 55 begreper · 20 guider
        </p>
        <Link
          href="/kunnskapsbase"
          className="inline-flex items-center gap-1 font-display text-[12.5px] font-medium text-brand hover:underline"
        >
          Se hele kunnskapsbasen <Icon.ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

/* ─── Guider menu — by category, with featured guides ─── */

function GuiderMenu() {
  // Pick top guides by category (first guide in each category)
  const featuredCats = categories.slice(0, 6);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3">
          Etter kategori
        </div>
        <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
          {featuredCats.map((cat) => {
            const count = guides.filter((g) => g.category === cat.slug).length;
            if (count === 0) return null;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/kunnskapsbase/${cat.slug}`}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 hover:bg-surface-100 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <IconByName
                      name={cat.icon}
                      size={14}
                      className="text-brand"
                    />
                    <span className="font-display text-[13.5px] text-ink">
                      {cat.name}
                    </span>
                  </span>
                  <span className="font-display text-[11px] text-muted-light">
                    {count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3">
          Populære guider
        </div>
        <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
          {guides.slice(0, 6).map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guider/${g.slug}`}
                className="block rounded-lg px-3 py-2 hover:bg-surface-100 transition-colors"
              >
                <div className="font-display text-[13px] font-medium text-ink leading-snug">
                  {g.title}
                </div>
                <div className="font-display text-[11px] text-muted mt-0.5 truncate">
                  {g.description}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-2 mt-2 pt-4 border-t border-line flex items-center justify-between">
        <p className="font-display text-[12px] text-muted m-0">
          {guides.length} guider med vanskelighetsgrad og lesetid
        </p>
        <Link
          href="/guider"
          className="inline-flex items-center gap-1 font-display text-[12.5px] font-medium text-brand hover:underline"
        >
          Se alle guider <Icon.ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

/* ─── Sammenligninger menu — show all 8 in a 2-column grid ─── */

function SammenligningerMenu() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
      <div className="col-span-2 font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-2">
        Alle sammenligninger
      </div>
      {comparisons.map((c) => (
        <Link
          key={c.slug}
          href={`/sammenligninger/${c.slug}`}
          className="block rounded-lg px-3 py-2.5 hover:bg-surface-100 transition-colors"
        >
          <div className="font-display text-[13px] font-medium text-ink leading-snug">
            {shortenComparisonTitle(c.title)}
          </div>
          <div className="font-display text-[11px] text-muted mt-0.5 line-clamp-1">
            {c.description}
          </div>
        </Link>
      ))}

      <div className="col-span-2 mt-3 pt-4 border-t border-line flex items-center justify-between">
        <p className="font-display text-[12px] text-muted m-0">
          Verifisert manuelt fra primærkilder
        </p>
        <Link
          href="/sammenligninger"
          className="inline-flex items-center gap-1 font-display text-[12.5px] font-medium text-brand hover:underline"
        >
          Se alle sammenligninger <Icon.ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function shortenComparisonTitle(title: string): string {
  return title
    .replace(/^Sammenlign(ing)?\s+(av\s+)?/, "")
    .replace(/^Hvem eier hvem\?\s*/, "Eierskap: ")
    .replace(/:\s*Sammenlign\s+\d+\s+registrarer i Norge/, "")
    .replace(/\s+for bedrifter/, "")
    .replace(/\s+i Norge/, "")
    .replace(/\s+i norsk domenemarked\s*\d*/, "")
    .replace(/\s+hos norske registrarer/, "")
    .replace(/\s+på \d+ strategiske TLD-er/, "")
    .replace(/\s+\d{4}/, "")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

// Suppress unused warning — tools is exported for symmetry but currently
// not used in megamenu (Verktøy has too few items to justify a dropdown).
void tools;
