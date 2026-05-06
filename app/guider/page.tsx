import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideCard } from "@/components/GuideCard";
import { SectionHead } from "@/components/SectionHead";
import { StructuredData } from "@/components/StructuredData";
import { canonical, ldBreadcrumb, ldCollectionPage } from "@/lib/seo";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guider om domener",
  description:
    "Steg-for-steg guider om domeneregistrering, DNS-oppsett, e-post, flytting og sikkerhet. Skrevet for norske brukere.",
  alternates: { canonical: canonical("/guider") },
};

export default function GuidesOverviewPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Guider", href: "/guider" },
  ];
  return (
    <>
      <div className="bg-white pt-32 pb-12">
        <div className="container-prose">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 max-w-[760px]">
            <div className="font-serif italic text-muted text-[14px] mb-2">
              Guider
            </div>
            <h1 className="font-display text-[36px] md:text-[52px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
              Guider om domener
            </h1>
            <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
              Steg-for-steg artikler skrevet for å løse konkrete problemer. Fra
              første domeneregistrering til DNS-feilsøking og sikkerhet.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface-100 py-16">
        <div className="container-prose">
          <SectionHead
            eyebrow="Alle guider"
            title="Velg den som passer deg"
            description="Vi merker hver guide med vanskelighetsgrad og lesetid, slik at du kan velge riktig nivå."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </div>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldCollectionPage({
            name: "Guider om domener",
            description:
              "Steg-for-steg guider om domeneregistrering, DNS, flytting, e-post og sikkerhet.",
            path: "/guider",
            items: guides.map((g) => ({
              name: g.title,
              url: `/guider/${g.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}
