import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHead } from "@/components/SectionHead";
import { SectionSidebar } from "@/components/SectionSidebar";
import { StructuredData } from "@/components/StructuredData";
import { Icon } from "@/lib/icons";
import { canonical, ldBreadcrumb, ldCollectionPage } from "@/lib/seo";
import { comparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Sammenlign domenepriser og leverandører",
  description:
    "Sammenlign priser, fornyelse, flytting og tjenester hos domeneleverandører. Få bedre oversikt før du velger leverandør.",
  alternates: { canonical: canonical("/sammenligninger") },
};

export default function ComparisonsOverviewPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Sammenligninger", href: "/sammenligninger" },
  ];
  return (
    <>
      <div className="bg-white pt-32 pb-12">
        <div className="container-prose">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 max-w-[720px]">
            <div className="font-serif italic text-muted text-[14px] mb-2">
              Sammenligninger
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
              Redaksjonelle sammenligninger
            </h1>
            <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
              Manuelt oppdaterte sammenligninger basert på åpne priser og
              spesifikasjoner. Vi viser metoden vi bruker, slik at du kan
              vurdere kvaliteten selv.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface-100 py-16">
        <div className="container-prose">
          <div className="grid gap-8 xl:gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain pr-1">
                <SectionSidebar section="sammenligninger" />
              </div>
            </aside>

            <div className="min-w-0">
              <SectionHead
                eyebrow="Alle sammenligninger"
                title="Velg det du vurderer"
                description="Klikk en sammenligning for å se metode, leverandører og anbefalinger."
              />
              <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                {comparisons.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/sammenligninger/${c.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition hover:border-brand-light hover:shadow-card"
                  >
                    <h3 className="font-display text-[18px] font-medium tracking-[-0.01em] text-ink mb-3 leading-snug">
                      {c.title}
                    </h3>
                    <p className="font-display text-[14px] leading-[1.6] text-muted m-0 mb-4 flex-1">
                      {c.description}
                    </p>
                    <div className="inline-flex items-center gap-1 font-display text-[13px] font-medium text-brand">
                      Se sammenligning <Icon.ArrowRight size={13} />
                    </div>
                  </Link>
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
            name: "Redaksjonelle sammenligninger",
            description:
              "Sammenlign domenepriser, registrarer, webhotell og e-postleverandører.",
            path: "/sammenligninger",
            items: comparisons.map((c) => ({
              name: c.title,
              url: `/sammenligninger/${c.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}
