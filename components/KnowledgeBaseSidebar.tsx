import Link from "next/link";
import { Icon, IconByName } from "@/lib/icons";
import { categories } from "@/data/categories";
import { SearchBar } from "./SearchBar";

const resourceLinks = [
  { label: "Ordliste", href: "/ordliste", icon: "info" },
  { label: "Verktøy", href: "/verktoy", icon: "calculator" },
  { label: "Sjekklister", href: "/guider", icon: "edit" },
  { label: "Sammenligninger", href: "/sammenligninger", icon: "tag" },
];

export function KnowledgeBaseSidebar({
  activeSlug,
}: {
  activeSlug?: string;
}) {
  return (
    <aside
      aria-label="Kunnskapsbase-navigasjon"
      className="rounded-2xl border border-line bg-surface-100 p-5"
    >
      <SearchBar variant="kb" placeholder="Søk i kunnskapsbasen…" />

      <Link
        href="/kunnskapsbase"
        className={`mt-4 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 font-display text-[13.5px] font-medium transition ${
          !activeSlug
            ? "bg-brand text-white"
            : "text-ink hover:bg-white"
        }`}
      >
        <Icon.ArrowRight size={14} /> Start her
      </Link>

      <div className="mt-6">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3 px-3.5">
          Kategorier
        </div>
        <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
          <li>
            <Link
              href="/kunnskapsbase"
              className="flex items-center gap-2.5 rounded-lg px-3.5 py-2 font-display text-[13.5px] text-muted hover:bg-white hover:text-ink"
            >
              <Icon.Network size={15} /> Alle kategorier
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/kunnskapsbase/${c.slug}`}
                className={`flex items-center gap-2.5 rounded-lg px-3.5 py-2 font-display text-[13.5px] transition ${
                  activeSlug === c.slug
                    ? "bg-brand/10 text-brand font-medium"
                    : "text-muted hover:bg-white hover:text-ink"
                }`}
              >
                <span className="w-[15px] flex-shrink-0">
                  <IconByName name={c.icon} size={15} />
                </span>
                <span>{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-light mb-3 px-3.5">
          Ressurser
        </div>
        <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
          {resourceLinks.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="flex items-center gap-2.5 rounded-lg px-3.5 py-2 font-display text-[13.5px] text-muted hover:bg-white hover:text-ink"
              >
                <span className="w-[15px] flex-shrink-0">
                  <IconByName name={r.icon} size={15} />
                </span>
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
