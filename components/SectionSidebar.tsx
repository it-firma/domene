import Link from "next/link";
import { Icon, IconByName } from "@/lib/icons";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { tools } from "@/data/tools";
import { guides } from "@/data/guides";
import { SearchBar } from "./SearchBar";

type SectionType =
  | "kunnskapsbase"
  | "sammenligninger"
  | "verktoy"
  | "guider"
  | "ordliste";

/**
 * Map comparison slug to icon name.
 */
function comparisonIcon(slug: string): string {
  if (slug.includes("priser")) return "tag";
  if (slug.includes("eierskap")) return "info";
  if (slug.includes("dnssec")) return "shield-check";
  if (slug.includes("webhotell")) return "server";
  if (slug.includes("epost")) return "mail";
  if (slug.includes("registrarer-fokus")) return "network";
  if (slug.includes("no-domene")) return "globe";
  if (slug.includes("com-domene")) return "globe";
  return "tag";
}

/**
 * Map guide slug/category to icon name.
 */
function guideIcon(category: string): string {
  const cat = categories.find((c) => c.slug === category);
  return cat?.icon ?? "edit";
}

/**
 * Shorten long titles for sidebar display.
 */
function shorten(title: string, max = 40): string {
  if (title.length <= max) return title;
  return title.slice(0, max - 1).trimEnd() + "…";
}

/**
 * Cross-link sections — shown at bottom of every sidebar.
 * The current section is excluded from this list.
 */
const ALL_SECTIONS: { type: SectionType; label: string; href: string; icon: string }[] = [
  { type: "kunnskapsbase", label: "Kunnskapsbase", href: "/kunnskapsbase", icon: "network" },
  { type: "sammenligninger", label: "Sammenligninger", href: "/sammenligninger", icon: "tag" },
  { type: "verktoy", label: "Verktøy", href: "/verktoy", icon: "calculator" },
  { type: "guider", label: "Guider", href: "/guider", icon: "edit" },
  { type: "ordliste", label: "Ordliste", href: "/ordliste", icon: "info" },
];

export function SectionSidebar({
  section,
  activeSlug,
}: {
  section: SectionType;
  activeSlug?: string;
}) {
  const config = getConfig(section);
  const otherSections = ALL_SECTIONS.filter((s) => s.type !== section);

  return (
    <aside
      aria-label={`${config.label}-navigasjon`}
      className="rounded-2xl border border-line bg-surface-100 p-5"
    >
      <SearchBar variant="kb" placeholder={config.searchPlaceholder} />

      <Link
        href={config.basePath}
        className={`mt-4 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 font-display text-[13.5px] font-medium transition ${
          !activeSlug
            ? "bg-brand text-white"
            : "text-ink hover:bg-white"
        }`}
      >
        <Icon.ArrowRight size={14} /> {config.allLabel}
      </Link>

      <div className="mt-6">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3 px-3.5">
          {config.heading}
        </div>
        <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
          {config.items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`${config.basePath}/${item.slug}`}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2 font-display text-[13.5px] transition ${
                  activeSlug === item.slug
                    ? "bg-brand/10 text-brand font-medium"
                    : "text-muted hover:bg-white hover:text-ink"
                }`}
                title={item.fullTitle ?? item.label}
              >
                <span className="w-[15px] flex-shrink-0">
                  <IconByName name={item.icon} size={15} />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-5 border-t border-line">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3 px-3.5">
          Andre ressurser
        </div>
        <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
          {otherSections.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="flex items-center gap-2.5 rounded-lg px-3.5 py-2 font-display text-[13.5px] text-muted hover:bg-white hover:text-ink"
              >
                <span className="w-[15px] flex-shrink-0">
                  <IconByName name={s.icon} size={15} />
                </span>
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

interface SidebarConfig {
  label: string;
  basePath: string;
  searchPlaceholder: string;
  allLabel: string;
  heading: string;
  items: {
    slug: string;
    label: string;
    icon: string;
    fullTitle?: string;
  }[];
}

function getConfig(section: SectionType): SidebarConfig {
  switch (section) {
    case "kunnskapsbase":
      return {
        label: "Kunnskapsbase",
        basePath: "/kunnskapsbase",
        searchPlaceholder: "Søk i kunnskapsbasen…",
        allLabel: "Alle kategorier",
        heading: "Kategorier",
        items: categories.map((c) => ({
          slug: c.slug,
          label: c.name,
          icon: c.icon,
        })),
      };

    case "sammenligninger":
      return {
        label: "Sammenligninger",
        basePath: "/sammenligninger",
        searchPlaceholder: "Søk i sammenligninger…",
        allLabel: "Alle sammenligninger",
        heading: "Alle sammenligninger",
        items: comparisons.map((c) => ({
          slug: c.slug,
          label: shorten(shortenComparisonTitle(c.title), 32),
          fullTitle: c.title,
          icon: comparisonIcon(c.slug),
        })),
      };

    case "verktoy":
      return {
        label: "Verktøy",
        basePath: "/verktoy",
        searchPlaceholder: "Søk i verktøy…",
        allLabel: "Alle verktøy",
        heading: "Alle verktøy",
        items: tools.map((t) => ({
          slug: t.slug,
          label: t.name,
          icon: t.icon,
        })),
      };

    case "guider":
      return {
        label: "Guider",
        basePath: "/guider",
        searchPlaceholder: "Søk i guider…",
        allLabel: "Alle guider",
        heading: "Alle guider",
        items: guides.slice(0, 12).map((g) => ({
          slug: g.slug,
          label: shorten(g.title, 36),
          fullTitle: g.title,
          icon: guideIcon(g.category),
        })),
      };

    case "ordliste":
      return {
        label: "Ordliste",
        basePath: "/ordliste",
        searchPlaceholder: "Søk i ordliste…",
        allLabel: "Alle begreper",
        heading: "Kategorier",
        items: categories.map((c) => ({
          slug: c.slug,
          label: c.name,
          icon: c.icon,
        })),
      };
  }
}

/**
 * Shorten comparison titles for sidebar display.
 */
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
