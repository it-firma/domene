import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GlossaryCard } from "@/components/GlossaryCard";
import { SectionHead } from "@/components/SectionHead";
import { KnowledgeBaseSidebar } from "@/components/KnowledgeBaseSidebar";
import { StructuredData } from "@/components/StructuredData";
import { canonical, ldBreadcrumb, ldCollectionPage } from "@/lib/seo";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Ordliste for domener | Forklaringer på DNS, WHOIS, TLD og mer",
  description:
    "Forstå de viktigste begrepene innen domener, DNS, WHOIS, navneservere, DNSSEC, SSL, e-post og webhotell.",
  alternates: { canonical: canonical("/ordliste") },
};

export default function GlossaryOverviewPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Ordliste", href: "/ordliste" },
  ];

  // Group by first letter
  const byLetter = glossary.reduce<Record<string, typeof glossary>>(
    (acc, t) => {
      const key = t.slug[0].toUpperCase();
      acc[key] = acc[key] ? [...acc[key], t] : [t];
      return acc;
    },
    {}
  );
  const letters = Object.keys(byLetter).sort();

  return (
    <>
      <div className="bg-white pt-32 pb-12">
        <div className="container-prose">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 max-w-[720px]">
            <div className="font-serif italic text-muted text-[14px] mb-2">
              Ordliste
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
              Ordliste for domener
            </h1>
            <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
              Korte og presise forklaringer av begreper innen domener, DNS,
              WHOIS, e-post og sikkerhet. Bla deg gjennom alfabetisk eller søk
              etter konkrete begreper.
            </p>
          </div>

          {/* Alphabet nav */}
          <nav
            aria-label="Alfabetisk navigasjon"
            className="mt-8 flex flex-wrap gap-1.5"
          >
            {letters.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white font-display text-[13px] font-medium text-ink transition hover:border-brand hover:bg-brand hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-surface-100 py-16">
        <div className="container-prose">
          <div className="grid gap-8 xl:gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain pr-1">
                <KnowledgeBaseSidebar />
              </div>
            </aside>

            <div className="min-w-0">
              {letters.map((l) => (
                <section key={l} id={l} className="mb-14 scroll-mt-32">
                  <h2 className="font-display text-[28px] font-medium text-ink mb-6">
                    {l}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {byLetter[l].map((t) => (
                      <GlossaryCard key={t.slug} term={t} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldCollectionPage({
            name: "Ordliste for domener",
            description:
              "Forklaringer av de viktigste begrepene innen domener, DNS og e-post.",
            path: "/ordliste",
            items: glossary.map((t) => ({
              name: t.term,
              url: `/ordliste/${t.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}
