import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { canonical } from "@/lib/seo";
import { site } from "@/lib/site";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Ta kontakt med ${site.name} — vi svarer normalt innen én virkedag.`,
  alternates: { canonical: canonical("/kontakt") },
};

export default function ContactPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Kontakt", href: "/kontakt" },
  ];
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container-prose max-w-[760px]">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6">
          <div className="font-serif italic text-muted text-[14px] mb-2">
            Kontakt
          </div>
          <h1 className="font-display text-[36px] md:text-[44px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
            Ta kontakt med oss
          </h1>
          <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
            Vi svarer normalt innen én virkedag. For konkret rådgivning, bruk{" "}
            <Link href="/eksperthjelp" className="text-brand">
              eksperthjelp-skjemaet
            </Link>{" "}
            — det gir oss bedre kontekst.
          </p>
        </div>

        <section className="mt-10 rounded-2xl border border-line bg-surface-100 p-8">
          <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-2">
            Direkte kontakt
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 font-display text-[20px] font-medium text-ink hover:text-brand"
          >
            {site.email} <Icon.ArrowRight size={16} />
          </a>
          <p className="mt-4 font-display text-[14px] leading-[1.6] text-muted m-0">
            Alle henvendelser håndteres med diskresjon. Vi bekrefter normalt
            mottak samme dag.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-[20px] font-medium text-ink mb-4">
            Hvilken kanal bruker du?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/eksperthjelp"
              className="rounded-2xl border border-line bg-white p-6 hover:border-brand-light"
            >
              <div className="font-display text-[16px] font-medium text-ink mb-1">
                Eksperthjelp
              </div>
              <p className="m-0 font-display text-[13.5px] leading-[1.55] text-muted">
                Konkret rådgivning om domener, DNS eller strategi.
              </p>
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-2xl border border-line bg-white p-6 hover:border-brand-light"
            >
              <div className="font-display text-[16px] font-medium text-ink mb-1">
                Generell e-post
              </div>
              <p className="m-0 font-display text-[13.5px] leading-[1.55] text-muted">
                For redaksjonelle henvendelser, partnerskap og presse.
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
