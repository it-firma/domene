import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { GlossaryCard } from "@/components/GlossaryCard";
import { ToolCard } from "@/components/ToolCard";
import { KnowledgeBaseSidebar } from "@/components/KnowledgeBaseSidebar";
import { AnswerBox } from "@/components/AnswerBox";
import { CrossLinkBox } from "@/components/CrossLinkBox";
import { FAQ } from "@/components/FAQ";
import { Summary } from "@/components/Summary";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { Icon } from "@/lib/icons";
import {
  buildMetadata,
  ldBreadcrumb,
  ldCollectionPage,
  ldFaq,
} from "@/lib/seo";
import { categories, findCategory } from "@/data/categories";
import { guides, guidesByCategory, findGuide } from "@/data/guides";
import { findGlossary } from "@/data/glossary";
import { findTool } from "@/data/tools";
import type { Difficulty } from "@/lib/types";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cat = findCategory(params.slug);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.h1} | Kunnskapsbase`,
    description: cat.shortDescription,
    path: `/kunnskapsbase/${cat.slug}`,
  });
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = findCategory(params.slug);
  if (!cat) notFound();

  const catGuides = guidesByCategory(cat.slug);
  const startHere = cat.startHere ? findGuide(cat.startHere) : undefined;
  const matchingTerm = findGlossary(cat.slug);

  const guidesByDifficulty: Record<Difficulty, typeof catGuides> = {
    nybegynner: catGuides.filter((g) => g.difficulty === "nybegynner"),
    viderekommen: catGuides.filter((g) => g.difficulty === "viderekommen"),
    avansert: catGuides.filter((g) => g.difficulty === "avansert"),
  };

  const relatedTerms = cat.terms
    .map((s) => findGlossary(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);
  const relatedTools = cat.tools
    .map((s) => findTool(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Kunnskapsbase", href: "/kunnskapsbase" },
    { label: cat.name, href: `/kunnskapsbase/${cat.slug}` },
  ];

  return (
    <>
      <div className="bg-white pt-32 pb-12">
        <div className="container-prose">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>

      <div className="bg-surface-100 pb-16">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <KnowledgeBaseSidebar activeSlug={cat.slug} />
              </div>
            </aside>

            <div className="min-w-0 max-w-[860px]">
              <div className="font-serif italic text-muted text-[14px] mb-2">
                Kategori
              </div>
              <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
                {cat.h1}
              </h1>
              <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted max-w-[680px]">
                {cat.intro}
              </p>

              <AnswerBox>{cat.shortAnswer}</AnswerBox>

              {matchingTerm && (
                <CrossLinkBox
                  eyebrow="Rask definisjon"
                  title={matchingTerm.term}
                  description={
                    matchingTerm.shortDefinition.split(".")[0] + "."
                  }
                  href={`/ordliste/${matchingTerm.slug}`}
                  ctaLabel="Se ordlisten"
                />
              )}

              {/* Start here */}
              {startHere && (
                <section className="mt-12">
                  <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-4">
                    Start her
                  </div>
                  <Link
                    href={`/guider/${startHere.slug}`}
                    className="group block rounded-2xl border border-brand/30 bg-brand/5 p-7 transition hover:bg-brand/10"
                  >
                    <h2 className="font-display text-[20px] font-medium text-ink mb-2">
                      {startHere.title}
                    </h2>
                    <p className="font-display text-[14px] leading-[1.6] text-muted m-0 mb-3">
                      {startHere.description}
                    </p>
                    <div className="inline-flex items-center gap-1 font-display text-[13px] font-medium text-brand">
                      Les guiden <Icon.ArrowRight size={13} />
                    </div>
                  </Link>
                </section>
              )}

              {/* Guides by difficulty */}
              {(["nybegynner", "viderekommen", "avansert"] as const).map(
                (lvl) => {
                  const items = guidesByDifficulty[lvl];
                  if (!items || items.length === 0) return null;
                  return (
                    <section key={lvl} className="mt-12">
                      <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-muted-light mb-4">
                        {lvl}
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {items.map((g) => (
                          <GuideCard key={g.slug} guide={g} />
                        ))}
                      </div>
                    </section>
                  );
                }
              )}

              {/* Related terms */}
              {relatedTerms.length > 0 && (
                <section className="mt-14">
                  <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-ink mb-5">
                    Relaterte begreper
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {relatedTerms.map((t) => (
                      <GlossaryCard key={t.slug} term={t} />
                    ))}
                  </div>
                </section>
              )}

              {/* Related tools */}
              {relatedTools.length > 0 && (
                <section className="mt-14">
                  <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-ink mb-5">
                    Relaterte verktøy
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedTools.map((t) => (
                      <ToolCard key={t.slug} tool={t} />
                    ))}
                  </div>
                </section>
              )}

              <FAQ items={cat.faq} />
              <Summary items={cat.summary} />

              {/* Next step */}
              <div className="mt-12">
                <CTA
                  variant="light"
                  title={`Trenger du hjelp med ${cat.name.toLowerCase()}?`}
                  description="Få personlig rådgivning fra noen som kjenner detaljene. Ingen forpliktelser."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldCollectionPage({
            name: cat.h1,
            description: cat.shortDescription,
            path: `/kunnskapsbase/${cat.slug}`,
            items: catGuides.map((g) => ({
              name: g.title,
              url: `/guider/${g.slug}`,
            })),
          }),
          ldFaq(cat.faq),
        ]}
      />
    </>
  );
}
