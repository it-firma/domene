import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ToolCard } from "@/components/ToolCard";
import { SectionHead } from "@/components/SectionHead";
import { SectionSidebar } from "@/components/SectionSidebar";
import { StructuredData } from "@/components/StructuredData";
import { canonical, ldBreadcrumb, ldCollectionPage } from "@/lib/seo";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Domeneverktøy | Sjekk DNS, WHOIS, navneserver og domenepriser",
  description:
    "Bruk praktiske domeneverktøy for å sjekke DNS, WHOIS, navneservere, tilgjengelighet og kostnader knyttet til domener.",
  alternates: { canonical: canonical("/verktoy") },
};

export default function ToolsOverviewPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Verktøy", href: "/verktoy" },
  ];
  return (
    <>
      <div className="bg-white pt-32 pb-12">
        <div className="container-prose">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 max-w-[720px]">
            <div className="font-serif italic text-muted text-[14px] mb-2">
              Verktøy
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
              Domeneverktøy
            </h1>
            <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
              Praktiske verktøy for å sjekke DNS, WHOIS, navneservere og priser.
              Alle verktøy er gratis å bruke.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface-100 py-16">
        <div className="container-prose">
          <div className="grid gap-8 xl:gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain pr-1">
                <SectionSidebar section="verktoy" />
              </div>
            </aside>

            <div className="min-w-0">
              <SectionHead
                eyebrow="Alle verktøy"
                title="Velg et verktøy"
                description="Vi merker tydelig hvilke verktøy som er tilgjengelige nå og hvilke som er under utvikling."
              />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {tools.map((t) => (
                  <ToolCard key={t.slug} tool={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldCollectionPage({
            name: "Domeneverktøy",
            description:
              "Praktiske domeneverktøy for å sjekke DNS, WHOIS, navneservere og priser.",
            path: "/verktoy",
            items: tools.map((t) => ({
              name: t.name,
              url: `/verktoy/${t.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}
