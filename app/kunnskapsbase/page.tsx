import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { GuideCard } from "@/components/GuideCard";
import { GlossaryCard } from "@/components/GlossaryCard";
import { ToolCard } from "@/components/ToolCard";
import { KnowledgeBaseSidebar } from "@/components/KnowledgeBaseSidebar";
import { SectionHead } from "@/components/SectionHead";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { Icon } from "@/lib/icons";
import { canonical, ldBreadcrumb, ldCollectionPage } from "@/lib/seo";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { glossary } from "@/data/glossary";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Kunnskapsbase om domener",
  description:
    "Utforsk guider, forklaringer, verktøy og steg-for-steg innhold om domener, DNS, .no domener, e-post, webhotell og domenesikkerhet.",
  alternates: { canonical: canonical("/kunnskapsbase") },
};

export default function KbOverviewPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Kunnskapsbase", href: "/kunnskapsbase" },
  ];

  return (
    <>
      <div className="bg-white pt-32 pb-16">
        <div className="container-prose">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 max-w-[720px]">
            <div className="font-serif italic text-muted text-[14px] mb-2">
              Kunnskapsbase
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
              Norges kunnskapsbase om domener
            </h1>
            <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
              Velg en kategori for å lære mer, eller bla deg gjennom guider,
              verktøy og ordlisteforklaringer. Alt er strukturert for å gjøre det
              enkelt å finne svar — enten du er nybegynner eller jobber med
              domener til daglig.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface-100 py-16">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <KnowledgeBaseSidebar />
              </div>
            </aside>

            <div>
              <SectionHead
                eyebrow="Kategorier"
                title="Alle kategorier"
                description="Klikk en kategori for å se guider, verktøy, begreper og spørsmål."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((c) => (
                  <CategoryCard key={c.slug} category={c} />
                ))}
              </div>

              <div className="mt-16">
                <SectionHead
                  eyebrow="Anbefalte guider"
                  title="Start her"
                  seeAll={{ label: "Se alle guider", href: "/guider" }}
                />
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {guides.slice(0, 6).map((g) => (
                    <GuideCard key={g.slug} guide={g} />
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <SectionHead
                  eyebrow="Begreper å kjenne"
                  title="Fra ordlisten"
                  seeAll={{ label: "Se hele ordlisten", href: "/ordliste" }}
                />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {glossary.slice(0, 6).map((t) => (
                    <GlossaryCard key={t.slug} term={t} />
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <SectionHead
                  eyebrow="Praktiske ressurser"
                  title="Verktøy"
                  seeAll={{ label: "Se alle verktøy", href: "/verktoy" }}
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.slice(0, 3).map((t) => (
                    <ToolCard key={t.slug} tool={t} />
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <CTA variant="light" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldCollectionPage({
            name: "Kunnskapsbase om domener",
            description:
              "Komplett kunnskapsbase om domener, DNS, e-post, webhotell og sikkerhet.",
            path: "/kunnskapsbase",
            items: categories.map((c) => ({
              name: c.name,
              url: `/kunnskapsbase/${c.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}
