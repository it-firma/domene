import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { Icon } from "@/lib/icons";
import { canonical } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "domene.io er en del av DomainNordic Advisory Group — en uavhengig nordisk rådgivningsgruppe som hjelper bedrifter med strategisk eierskap av domener.",
  alternates: { canonical: canonical("/om-oss") },
};

export default function AboutPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Om oss", href: "/om-oss" },
  ];
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container-prose max-w-[860px]">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6">
          <div className="font-serif italic text-muted text-[14px] mb-2">
            Om domene.io
          </div>
          <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
            Bygget for å gjøre domener forståelige
          </h1>
        </div>

        <div className="prose-body mt-8">
          <p>
            domene.io er en norsk kunnskapsbase om domener. Vi skriver for
            privatpersoner og bedrifter som ønsker å forstå hvordan domener
            fungerer, og hvordan man tar gode valg om eierskap, sikkerhet og
            forvaltning.
          </p>
          <p>
            Vi er en del av <strong>DomainNordic Advisory Group</strong>, en
            uavhengig nordisk rådgivningsgruppe. Sammen med søsterportalene
            domän.io, domæne.io og verkkotunnus.io samler vi innhold og
            verktøy for de fire skandinaviske språkene.
          </p>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface-100 p-7">
            <h2 className="font-display text-[18px] font-medium text-ink mb-3">
              Vår redaksjonelle standard
            </h2>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0 font-display text-[14px] leading-[1.6] text-muted">
              <li className="flex gap-2.5">
                <Icon.Check size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                <span>Vi skriver basert på dokumenterte kilder.</span>
              </li>
              <li className="flex gap-2.5">
                <Icon.Check size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                <span>Vi merker tydelig når noe er en mening eller anbefaling.</span>
              </li>
              <li className="flex gap-2.5">
                <Icon.Check size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                <span>Vi viser når innhold sist er oppdatert.</span>
              </li>
              <li className="flex gap-2.5">
                <Icon.Check size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                <span>Vi utgir oss aldri for å være noe vi ikke er.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-surface-100 p-7">
            <h2 className="font-display text-[18px] font-medium text-ink mb-3">
              Familien
            </h2>
            <p className="font-display text-[13.5px] leading-[1.6] text-muted mb-4">
              domene.io er én av fire portaler under DomainNordic Advisory Group.
            </p>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {site.family.map((f) => (
                <li
                  key={f.name}
                  className="flex items-center justify-between font-display text-[14px]"
                >
                  <span className="text-ink font-medium">{f.name}</span>
                  <span className="text-muted-light text-[12.5px]">
                    {f.country}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12">
          <CTA variant="light" />
        </div>
      </div>
    </div>
  );
}
