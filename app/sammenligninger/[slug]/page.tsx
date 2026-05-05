import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import {
  buildMetadata,
  ldBreadcrumb,
  ldFaq,
} from "@/lib/seo";
import { comparisons, findComparison } from "@/data/comparisons";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const c = findComparison(params.slug);
  if (!c) return {};
  return buildMetadata({
    title: c.title,
    description: c.description,
    path: `/sammenligninger/${c.slug}`,
  });
}

export default function ComparisonPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = findComparison(params.slug);
  if (!c) notFound();

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Sammenligninger", href: "/sammenligninger" },
    { label: c.title, href: `/sammenligninger/${c.slug}` },
  ];

  return (
    <>
      <article className="bg-white pt-32 pb-16">
        <div className="container-prose max-w-[860px]">
          <Breadcrumbs items={crumbs} />

          <div className="mt-6 font-serif italic text-muted text-[14px] mb-2">
            Redaksjonell sammenligning
          </div>
          <h1 className="font-display text-[36px] md:text-[44px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0">
            {c.title}
          </h1>

          <p className="mt-6 font-display text-[16px] leading-[1.65] text-muted m-0">
            {c.intro}
          </p>

          {/* Methodology box */}
          <section
            className="mt-10 rounded-2xl border border-line bg-surface-100 p-7"
            aria-labelledby="metode"
          >
            <h2
              id="metode"
              className="font-display text-[16px] font-semibold uppercase tracking-[0.12em] text-brand mb-3"
            >
              Slik sammenligner vi
            </h2>
            <p className="font-display text-[14.5px] leading-[1.7] text-ink/85 m-0">
              {c.methodology}
            </p>
          </section>

          {/* Real provider data */}
          {c.columns && c.providers && c.providers.length > 0 ? (
            <section className="mt-10">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-4">
                Sammenligningstabell
              </h2>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-left font-display text-[13.5px]">
                  <thead className="bg-surface-100">
                    <tr>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Leverandør
                      </th>
                      {c.columns.map((col) => (
                        <th
                          key={col.key}
                          className="px-5 py-3 font-semibold text-ink whitespace-nowrap"
                        >
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {c.providers.map((p) => (
                      <tr key={p.name} className="align-top">
                        <td className="px-5 py-3 font-semibold text-ink">
                          {p.href ? (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="text-ink hover:text-brand transition-colors"
                            >
                              {p.name}
                            </a>
                          ) : (
                            p.name
                          )}
                          {p.note && (
                            <div className="mt-1 font-display text-[12px] font-normal text-muted leading-snug">
                              {p.note}
                            </div>
                          )}
                        </td>
                        {c.columns!.map((col) => (
                          <td key={col.key} className="px-5 py-3 text-ink/85 whitespace-nowrap">
                            {p.values[col.key] ?? "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 font-display text-[12px] text-muted-light italic">
                Priser hentet manuelt fra leverandørens offentlige prisliste.
                Verifiser alltid hos leverandøren før bestilling.
              </p>
            </section>
          ) : (
            <section className="mt-10">
              <h2 className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink mb-4">
                Sammenligningstabell
              </h2>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-left font-display text-[13.5px]">
                  <thead className="bg-surface-100">
                    <tr>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Leverandør
                      </th>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Første år
                      </th>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Fornyelse
                      </th>
                      <th className="px-5 py-3 font-semibold text-ink">
                        Flytting
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="px-5 py-3" colSpan={4}>
                        <span className="text-muted-light italic">
                          Tabelldata kommer — vi oppdaterer manuelt fra åpne
                          priser.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Important to know */}
          <section className="mt-10 rounded-2xl border border-line p-7">
            <h2 className="font-display text-[18px] font-medium text-ink mb-4">
              Viktig å vite før du sammenligner
            </h2>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0 font-display text-[14.5px] leading-[1.6] text-ink/85">
              {(c.importantNotes ?? [
                "Førsteårsprisen er ofte rabattert — det viktigste er fornyelsesprisen.",
                "Sjekk hva som faktisk er inkludert: DNS, e-post, SSL, backup.",
                "Vurder hvilken kontroll du har: kan du flytte, eier du domenet, har du tofaktor og DNSSEC-støtte?",
              ]).map((note, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {c.faq.length > 0 && <FAQ items={c.faq} />}

          <div className="mt-10 font-display text-[12.5px] text-muted-light">
            Sist oppdatert{" "}
            {new Date(c.updatedAt).toLocaleDateString("nb-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            . Verifiser alltid prisene hos leverandøren før bestilling.
          </div>

          <div className="mt-10">
            <CTA variant="light" />
          </div>
        </div>
      </article>

      <StructuredData
        data={[
          ldBreadcrumb(crumbs.map((cr) => ({ name: cr.label, url: cr.href }))),
          ...(c.faq.length > 0 ? [ldFaq(c.faq)] : []),
        ]}
      />
    </>
  );
}
