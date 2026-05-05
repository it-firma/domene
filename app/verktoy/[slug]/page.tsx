import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { Icon, IconByName } from "@/lib/icons";
import {
  buildMetadata,
  ldBreadcrumb,
  ldFaq,
  ldSoftwareApplication,
} from "@/lib/seo";
import { tools, findTool } from "@/data/tools";
import { findGuide } from "@/data/guides";
import { findGlossary } from "@/data/glossary";
import { DomainCheckTool } from "@/components/tools/DomainCheckTool";
import { DnsLookupTool } from "@/components/tools/DnsLookupTool";
import { WhoisTool } from "@/components/tools/WhoisTool";
import { NameserverTool } from "@/components/tools/NameserverTool";

const TOOL_COMPONENTS: Record<string, React.ComponentType> = {
  domenesjekk: DomainCheckTool,
  "dns-sjekk": DnsLookupTool,
  "whois-oppslag": WhoisTool,
  "navneserver-sjekk": NameserverTool,
};

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const t = findTool(params.slug);
  if (!t) return {};
  return buildMetadata({
    title: t.name,
    description: t.description,
    path: `/verktoy/${t.slug}`,
  });
}

export default function ToolDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = findTool(params.slug);
  if (!t) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Verktøy", href: "/verktoy" },
    { label: t.name, href: `/verktoy/${t.slug}` },
  ];

  const relatedTerms = (t.relatedTerms || [])
    .map((s) => findGlossary(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined)
    .map((x) => ({
      label: x.term,
      description: x.shortDefinition.split(".")[0] + ".",
      href: `/ordliste/${x.slug}`,
    }));

  const relatedGuides = (t.relatedGuides || [])
    .map((s) => findGuide(s))
    .filter((x): x is NonNullable<typeof x> => x !== undefined)
    .map((x) => ({
      label: x.title,
      description: x.description,
      href: `/guider/${x.slug}`,
    }));

  return (
    <>
      <div className="bg-white pt-32 pb-12">
        <div className="container-prose max-w-[860px]">
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 flex items-start gap-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand flex-shrink-0">
              <IconByName name={t.icon} size={28} />
            </span>
            <div>
              <div className="font-serif italic text-muted text-[14px] mb-1">
                Verktøy
              </div>
              <h1 className="font-display text-[34px] md:text-[40px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
                {t.name}
              </h1>
            </div>
          </div>

          <p className="mt-6 font-display text-[16px] leading-[1.65] text-muted max-w-[680px]">
            {t.description}
          </p>

          {t.status === "coming-soon" ? (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 max-w-[640px]">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-amber-700 mb-2">
                Kommer snart
              </div>
              <p className="font-display text-[14.5px] leading-[1.6] text-ink m-0">
                Dette verktøyet er under utvikling. Meld deg på nyhetsbrevet for
                å få beskjed når det er klart.
              </p>
            </div>
          ) : (
            (() => {
              const Comp = TOOL_COMPONENTS[t.slug];
              return Comp ? <Comp /> : null;
            })()
          )}

          {t.longDescription && (
            <section className="mt-10">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-3">
                Om {t.name}
              </h2>
              <p className="font-display text-[15.5px] leading-[1.7] text-ink/85 m-0">
                {t.longDescription}
              </p>
            </section>
          )}

          {t.faq && t.faq.length > 0 && <FAQ items={t.faq} />}

          {relatedTerms.length > 0 && (
            <RelatedLinks title="Relaterte begreper" items={relatedTerms} />
          )}
          {relatedGuides.length > 0 && (
            <RelatedLinks title="Relaterte guider" items={relatedGuides} />
          )}

          <div className="mt-12">
            <CTA variant="light" />
          </div>

          <div className="mt-10">
            <Link
              href="/verktoy"
              className="inline-flex items-center gap-1 font-display text-[13px] text-muted hover:text-brand"
            >
              <Icon.ArrowLeft size={13} /> Tilbake til alle verktøy
            </Link>
          </div>
        </div>
      </div>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((c) => ({ name: c.label, url: c.href }))),
          ldSoftwareApplication(t),
          ...(t.faq && t.faq.length > 0 ? [ldFaq(t.faq)] : []),
        ]}
      />
    </>
  );
}
