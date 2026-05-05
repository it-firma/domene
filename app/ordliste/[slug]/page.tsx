import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerBox } from "@/components/AnswerBox";
import { CrossLinkBox } from "@/components/CrossLinkBox";
import { FAQ } from "@/components/FAQ";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { Icon } from "@/lib/icons";
import {
  buildMetadata,
  ldBreadcrumb,
  ldDefinedTerm,
  ldFaq,
} from "@/lib/seo";
import { glossary, findGlossary } from "@/data/glossary";
import { findCategory } from "@/data/categories";
import { findGuide } from "@/data/guides";

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const t = findGlossary(params.slug);
  if (!t) return {};
  return buildMetadata({
    title: t.term,
    description: t.shortDefinition,
    path: `/ordliste/${t.slug}`,
  });
}

export default function GlossaryTermPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = findGlossary(params.slug);
  if (!t) notFound();
  const cat = findCategory(t.category);
  const matchingCategory = findCategory(t.slug);

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Ordliste", href: "/ordliste" },
    { label: t.term, href: `/ordliste/${t.slug}` },
  ];

  const relatedTerms = t.relatedTerms
    .map((s) => findGlossary(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined)
    .map((x) => ({
      label: x.term,
      description: x.shortDefinition.split(".")[0] + ".",
      href: `/ordliste/${x.slug}`,
    }));

  const relatedGuides = t.relatedGuides
    .map((s) => findGuide(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined)
    .map((x) => ({
      label: x.title,
      description: x.description,
      href: `/guider/${x.slug}`,
    }));

  return (
    <>
      <article className="bg-white pt-32 pb-16">
        <div className="container-prose max-w-[860px]">
          <Breadcrumbs items={crumbs} />

          <div className="mt-6 flex flex-wrap items-center gap-3 font-display text-[12.5px] text-muted">
            {cat && (
              <Link
                href={`/kunnskapsbase/${cat.slug}`}
                className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand hover:bg-brand/15"
              >
                {cat.name}
              </Link>
            )}
            <span>Ordliste</span>
          </div>

          <h1 className="mt-3 font-display text-[36px] md:text-[44px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
            {t.term}
          </h1>

          <AnswerBox>{t.shortDefinition}</AnswerBox>

          {matchingCategory && (
            <CrossLinkBox
              eyebrow="Gå dypere"
              title={matchingCategory.h1}
              description={matchingCategory.shortDescription}
              href={`/kunnskapsbase/${matchingCategory.slug}`}
              ctaLabel="Utforsk kategorien"
            />
          )}

          <section className="mt-12">
            <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-3">
              Enkel forklaring
            </h2>
            <p className="font-display text-[15.5px] leading-[1.7] text-ink/85 m-0">
              {t.simpleExplanation}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-3">
              Teknisk forklaring
            </h2>
            <p className="font-display text-[15.5px] leading-[1.7] text-ink/85 m-0">
              {t.technicalExplanation}
            </p>
          </section>

          {t.example && (
            <section className="mt-10">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-3">
                Eksempel
              </h2>
              <div className="rounded-xl border-l-4 border-brand bg-surface-100 p-5">
                <p className="font-display text-[14.5px] leading-[1.6] text-ink/90 m-0">
                  {t.example}
                </p>
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-3">
              Hvorfor det er viktig
            </h2>
            <p className="font-display text-[15.5px] leading-[1.7] text-ink/85 m-0">
              {t.importance}
            </p>
          </section>

          {t.faq.length > 0 && <FAQ items={t.faq} />}

          {relatedTerms.length > 0 && (
            <RelatedLinks title="Relaterte begreper" items={relatedTerms} />
          )}
          {relatedGuides.length > 0 && (
            <RelatedLinks title="Relaterte guider" items={relatedGuides} />
          )}

          <div className="mt-12">
            <CTA variant="light" />
          </div>

          <div className="mt-10 flex justify-between font-display text-[12.5px] text-muted-light">
            <Link
              href="/ordliste"
              className="inline-flex items-center gap-1 hover:text-brand"
            >
              <Icon.ArrowLeft size={12} /> Tilbake til ordlisten
            </Link>
            <span>
              Sist oppdatert{" "}
              {new Date(t.updatedAt).toLocaleDateString("nb-NO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldDefinedTerm(t),
          ldFaq(t.faq),
        ]}
      />
    </>
  );
}
