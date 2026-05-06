"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon, IconByName } from "@/lib/icons";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { guides } from "@/data/guides";

type MenuKey = "kunnskapsbase" | "guider" | "sammenligninger" | null;

/**
 * Header megamenu — full-width panel with two-column layout:
 * - Left (white): main content / navigation
 * - Right (navy): featured / cross-section context
 *
 * Inspired by domainnordic.com's authoritative menu pattern.
 */
export function MegaMenu({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [openKey, setOpenKey] = useState<MenuKey>(null);
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
    closeTimerRef.current = setTimeout(() => setOpenKey(null), 150);
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
        href="/leverandorer"
        className={linkClass}
        onMouseEnter={() => {
          cancelClose();
          setOpenKey(null);
        }}
      >
        Leverandører
      </Link>
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

      {/* Full-width megamenu panel */}
      {openKey && (
        <div
          className="fixed left-0 right-0 top-[86px] z-40 px-7"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[1180px] rounded-2xl shadow-cardLg ring-1 ring-line overflow-hidden bg-white animate-fadeIn">
            <div className="grid grid-cols-[minmax(0,1fr)_320px] min-h-[440px]">
              {/* Left: main content (white) */}
              <div className="p-10">
                {openKey === "kunnskapsbase" && <KunnskapsbaseMain />}
                {openKey === "guider" && <GuiderMain />}
                {openKey === "sammenligninger" && <SammenligningerMain />}
              </div>

              {/* Right: featured panel (navy) */}
              <div className="bg-navy text-white p-10 relative overflow-hidden">
                {/* Subtle accent gradient */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, rgba(123,160,255,0.15) 0%, transparent 60%)",
                  }}
                />
                <div className="relative">
                  {openKey === "kunnskapsbase" && <KunnskapsbaseFeatured />}
                  {openKey === "guider" && <GuiderFeatured />}
                  {openKey === "sammenligninger" && <SammenligningerFeatured />}
                </div>
              </div>
            </div>
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
  keyName: NonNullable<MenuKey>;
  label: string;
  href: string;
  openKey: MenuKey;
  setOpenKey: (k: MenuKey) => void;
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

/* ─── KUNNSKAPSBASE ─────────────────────────────────────────── */

function KunnskapsbaseMain() {
  const groups: { heading: string; icon: string; slugs: string[] }[] = [
    {
      heading: "Domener",
      icon: "/icons/nordic-tlds.png",
      slugs: ["no-domene", "domeneregistrering", "domeneflytting"],
    },
    {
      heading: "Infrastruktur",
      icon: "/icons/server.png",
      slugs: ["dns", "epost", "webhotell", "whois", "seo-og-synlighet"],
    },
    {
      heading: "Sikkerhet & juss",
      icon: "/icons/padlock.png",
      slugs: ["dnssec", "domenesikkerhet", "juridisk-og-varemerke", "personvern-og-gdpr"],
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-7">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-2">
          Kunnskapsbase
        </div>
        <h2 className="font-display text-[26px] font-medium tracking-[-0.015em] text-ink m-0 leading-tight">
          Fjorten kategorier,{" "}
          <span className="font-serif italic text-brand">tre temaer.</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8 flex-1">
        {groups.map((g) => (
          <div key={g.heading}>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-line">
              <Image
                src={g.icon}
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
                className="flex-shrink-0"
              />
              <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink">
                {g.heading}
              </div>
            </div>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {g.slugs.map((slug) => {
                const cat = categories.find((c) => c.slug === slug);
                if (!cat) return null;
                return (
                  <li key={cat.slug}>
                    <Link
                      href={`/kunnskapsbase/${cat.slug}`}
                      className="group inline-flex items-center gap-2 font-display text-[13.5px] text-ink/80 hover:text-brand transition-colors"
                    >
                      <IconByName
                        name={cat.icon}
                        size={14}
                        className="opacity-50 group-hover:opacity-100 group-hover:text-brand transition"
                      />
                      {cat.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-line">
        <Link
          href="/kunnskapsbase"
          className="inline-flex items-center gap-1.5 font-display text-[13px] font-medium text-brand hover:underline"
        >
          Se alle 14 kategorier <Icon.ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function KunnskapsbaseFeatured() {
  return (
    <div className="flex flex-col h-full">
      <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
        Mest lest
      </div>
      <h3 className="font-display text-[22px] font-medium leading-tight m-0 mb-3">
        .no domene{" "}
        <span className="font-serif italic text-brand-light">
          forklart
        </span>
      </h3>
      <p className="font-display text-[13.5px] leading-[1.6] text-white/65 m-0 mb-6">
        Det norske toppnivådomenet - krav, registrering, eierskap og praksis. 4
        guider, 7 begreper, 1 sammenligning.
      </p>

      <Link
        href="/kunnskapsbase/no-domene"
        className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition px-4 py-2.5 font-display text-[12.5px] font-medium text-white"
      >
        Les om .no domene <Icon.ArrowRight size={12} />
      </Link>

      <div className="mt-auto pt-7 border-t border-white/10">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
          Praktiske ressurser
        </div>
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          <li>
            <Link
              href="/ordliste"
              className="font-display text-[13px] text-white/75 hover:text-white inline-flex items-center gap-1.5"
            >
              <Icon.Info size={12} className="opacity-60" /> 55 begreper i
              ordlisten
            </Link>
          </li>
          <li>
            <Link
              href="/guider"
              className="font-display text-[13px] text-white/75 hover:text-white inline-flex items-center gap-1.5"
            >
              <IconByName
                name="edit"
                size={12}
                className="opacity-60"
              />{" "}
              20 guider med vanskelighetsgrad
            </Link>
          </li>
          <li>
            <Link
              href="/verktoy"
              className="font-display text-[13px] text-white/75 hover:text-white inline-flex items-center gap-1.5"
            >
              <IconByName
                name="calculator"
                size={12}
                className="opacity-60"
              />{" "}
              Praktiske verktøy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ─── GUIDER ─────────────────────────────────────────── */

function GuiderMain() {
  const featuredCats = categories.slice(0, 6);

  return (
    <div className="flex flex-col h-full">
      <div className="mb-7">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-2">
          Guider
        </div>
        <h2 className="font-display text-[26px] font-medium tracking-[-0.015em] text-ink m-0 leading-tight">
          Tjue guider,{" "}
          <span className="font-serif italic text-brand">tre nivåer.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div>
          <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink mb-4 pb-3 border-b border-line">
            Etter kategori
          </div>
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {featuredCats.map((cat) => {
              const count = guides.filter(
                (g) => g.category === cat.slug
              ).length;
              if (count === 0) return null;
              return (
                <li key={cat.slug}>
                  <Link
                    href={`/kunnskapsbase/${cat.slug}`}
                    className="group flex items-center justify-between gap-3 py-1.5 font-display text-[13.5px] text-ink/80 hover:text-brand transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <IconByName
                        name={cat.icon}
                        size={14}
                        className="opacity-50 group-hover:opacity-100"
                      />
                      {cat.name}
                    </span>
                    <span className="font-display text-[11.5px] text-muted-light">
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink mb-4 pb-3 border-b border-line">
            Populære guider
          </div>
          <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
            {guides.slice(0, 5).map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guider/${g.slug}`}
                  className="block group"
                >
                  <div className="font-display text-[13.5px] font-medium text-ink leading-snug group-hover:text-brand transition">
                    {g.title}
                  </div>
                  <div className="font-display text-[11.5px] text-muted mt-0.5 line-clamp-1">
                    {g.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-line">
        <Link
          href="/guider"
          className="inline-flex items-center gap-1.5 font-display text-[13px] font-medium text-brand hover:underline"
        >
          Se alle 20 guider <Icon.ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function GuiderFeatured() {
  const featured = guides[0];
  return (
    <div className="flex flex-col h-full">
      <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
        Anbefalt start
      </div>
      <h3 className="font-display text-[22px] font-medium leading-tight m-0 mb-3">
        {featured?.title ?? "Hvordan registrere et .no"}
      </h3>
      <p className="font-display text-[13.5px] leading-[1.6] text-white/65 m-0 mb-6">
        {featured?.description ??
          "Steg-for-steg guide for første registrering."}
      </p>

      <Link
        href={`/guider/${featured?.slug ?? "registrere-no-domene"}`}
        className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition px-4 py-2.5 font-display text-[12.5px] font-medium text-white"
      >
        Les guiden <Icon.ArrowRight size={12} />
      </Link>

      <div className="mt-auto pt-7 border-t border-white/10">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
          Vanskelighetsgrad
        </div>
        <ul className="flex flex-col gap-2 list-none m-0 p-0 font-display text-[13px] text-white/75">
          <li className="flex items-center justify-between">
            <span>Nybegynner</span>
            <span className="text-white/50">
              {guides.filter((g) => g.difficulty === "nybegynner").length} guider
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Viderekommen</span>
            <span className="text-white/50">
              {guides.filter((g) => g.difficulty === "viderekommen").length} guider
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Avansert</span>
            <span className="text-white/50">
              {guides.filter((g) => g.difficulty === "avansert").length} guider
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ─── SAMMENLIGNINGER ─────────────────────────────────────────── */

function SammenligningerMain() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-7">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-2">
          Sammenligninger
        </div>
        <h2 className="font-display text-[26px] font-medium tracking-[-0.015em] text-ink m-0 leading-tight">
          Åtte sammenligninger,{" "}
          <span className="font-serif italic text-brand">manuelt verifisert.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-3 flex-1">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/sammenligninger/${c.slug}`}
            className="group block py-1"
          >
            <div className="font-display text-[13.5px] font-medium text-ink leading-snug group-hover:text-brand transition">
              {shortenComparisonTitle(c.title)}
            </div>
            <div className="font-display text-[11.5px] text-muted mt-0.5 line-clamp-1">
              {c.description}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-line flex items-center justify-between">
        <p className="font-display text-[12px] text-muted m-0">
          Verifisert manuelt fra primærkilder
        </p>
        <Link
          href="/sammenligninger"
          className="inline-flex items-center gap-1.5 font-display text-[13px] font-medium text-brand hover:underline"
        >
          Se alle sammenligninger <Icon.ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function SammenligningerFeatured() {
  return (
    <div className="flex flex-col h-full">
      <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
        Mest besøkte
      </div>
      <h3 className="font-display text-[22px] font-medium leading-tight m-0 mb-3">
        Domenepriser{" "}
        <span className="font-serif italic text-brand-light">2026</span>
      </h3>
      <p className="font-display text-[13.5px] leading-[1.6] text-white/65 m-0 mb-6">
        Verifisert oversikt over priser på .no- og .com-domener hos åtte
        registrarer. Med Domeneshops bulkrabatt-tabell. Alle priser inkl. mva.
      </p>

      <Link
        href="/sammenligninger/domenepriser"
        className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition px-4 py-2.5 font-display text-[12.5px] font-medium text-white"
      >
        Se prissammenligningen <Icon.ArrowRight size={12} />
      </Link>

      <div className="mt-auto pt-7 border-t border-white/10">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-3">
          Konsernstruktur
        </div>
        <p className="font-display text-[13px] leading-[1.55] text-white/65 m-0 mb-3">
          Hvem eier hvem? Av åtte norske registrarer er bare to reelt
          uavhengige.
        </p>
        <Link
          href="/sammenligninger/eierskap-norske-registrarer"
          className="inline-flex items-center gap-1.5 font-display text-[12.5px] font-medium text-brand-light hover:text-white transition"
        >
          Les eierskapsoversikten <Icon.ArrowRight size={11} />
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
