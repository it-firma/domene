import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { StructuredData } from "@/components/StructuredData";
import {
  buildMetadata,
  ldArticle,
  ldBreadcrumb,
  ldFaq,
  ldHowTo,
} from "@/lib/seo";
import { guides, findGuide } from "@/data/guides";
import { findCategory } from "@/data/categories";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const g = findGuide(params.slug);
  if (!g) return {};
  return buildMetadata({
    title: g.title,
    description: g.description,
    path: `/guider/${g.slug}`,
    type: "article",
    updatedAt: g.updatedAt,
  });
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = findGuide(params.slug);
  if (!g) notFound();
  const cat = findCategory(g.category);

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Guider", href: "/guider" },
    ...(cat
      ? [{ label: cat.name, href: `/kunnskapsbase/${cat.slug}` }]
      : []),
    { label: g.title, href: `/guider/${g.slug}` },
  ];

  const schemas = [
    ldArticle(g),
    ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
    ldFaq(g.faq),
    ldHowTo(g),
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <>
      <ArticleLayout guide={g} breadcrumbs={crumbs} />
      <StructuredData data={schemas} />
    </>
  );
}
