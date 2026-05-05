import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import { CategoryCard } from "@/components/CategoryCard";
import { GuideCard } from "@/components/GuideCard";
import { GlossaryCard } from "@/components/GlossaryCard";
import { ToolCard } from "@/components/ToolCard";
import { CTA } from "@/components/CTA";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { KnowledgeBasePreview } from "@/components/KnowledgeBasePreview";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { glossary } from "@/data/glossary";
import { tools } from "@/data/tools";
import { comparisons } from "@/data/comparisons";
import { Icon } from "@/lib/icons";
import { canonical } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Norges ultimate kunnskapsbase om domener`,
  description:
    "Lær alt om domener fra A til Å. Guider, verktøy, sammenligninger og eksperttips for norske domeneeier, bedrifter og prosjekter.",
  alternates: { canonical: canonical("/") },
};

const homepageFaq = [
  {
    question: "Hva er domene.io?",
    answer:
      "domene.io er en norsk kunnskapsbase om domener — en samling av guider, ordlisteforklaringer, verktøy og sammenligninger som hjelper deg å forstå og forvalte domenet ditt riktig. Vi er en del av DomainNordic Advisory Group.",
  },
  {
    question: "Hvem er domene.io for?",
    answer:
      "Vi skriver for norske privatpersoner, bedriftsledere, IT-ansvarlige, og rådgivere som jobber med domener — fra førstegangs registrering til strategisk eierskap av store domeneporteføljer.",
  },
  {
    question: "Koster det noe å bruke domene.io?",
    answer:
      "Nei. Alt redaksjonelt innhold — guider, ordliste og verktøy — er gratis tilgjengelig. Eksperthjelp er en separat tjeneste du kan velge når du trenger personlig rådgivning.",
  },
  {
    question: "Hvordan er innholdet organisert?",
    answer:
      "Vi deler innholdet i kategorier (.no domene, DNS, e-post, webhotell osv.), guider (steg-for-steg artikler), ordliste (begrepsforklaringer), verktøy (praktiske oppslag) og sammenligninger.",
  },
  {
    question: "Hvor ofte oppdateres innholdet?",
    answer:
      "Innholdet kvalitetssikres redaksjonelt og oppdateres jevnlig. Hver artikkel har en «sist oppdatert»-dato slik at du vet når informasjonen ble verifisert sist.",
  },
];

export default function HomePage() {
  const featuredGuides = guides.slice(0, 5);
  const featuredTerms = glossary.slice(0, 6);
  const featuredTools = tools.slice(0, 3);

  // "Siste artikler" — top 4 guides sorted by updatedAt descending.
  const latestGuides = [...guides]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, 4);

  return (
    <>
      <Hero />

      {/* Categories — wrapped in dn-section for navy bg */}
      <div className="bg-navy-mid pt-24 pb-16 -mt-px">
        <div className="container-prose">
          <SectionHead
            number="03"
            eyebrow="Hva vi dekker"
            title="Utforsk våre hovedkategorier"
            seeAll={{ label: "Se alle kategorier", href: "/kunnskapsbase" }}
            variant="dark"
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, 8).map((c) => (
              <CategoryCard key={c.slug} category={c} variant="dark" />
            ))}
          </div>
        </div>

        {/* Featured guides */}
        <div className="container-prose mt-20">
          <SectionHead
            number="04"
            eyebrow="Mest leste"
            title="Utvalgte guider"
            seeAll={{ label: "Se alle guider", href: "/guider" }}
            variant="dark"
          />
          <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {featuredGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} variant="dark" />
            ))}
          </div>
        </div>
      </div>

      {/* Knowledge base preview */}
      <KnowledgeBasePreview />

      {/* Latest articles */}
      <section className="bg-white py-20">
        <div className="container-prose">
          <SectionHead
            number="05"
            eyebrow="Siste oppdatert"
            title="Nye og oppdaterte artikler"
            description="Vi reviderer innholdet jevnlig — her er de fire nyeste."
            seeAll={{ label: "Se alle guider", href: "/guider" }}
          />
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {latestGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} variant="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Tools and comparisons */}
      <section className="bg-white py-20">
        <div className="container-prose">
          <SectionHead
            number="06"
            eyebrow="Praktiske ressurser"
            title="Verktøy og sammenligninger"
            description="Sjekk DNS, slå opp WHOIS, eller sammenlign leverandører før du tar valget."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {featuredTools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {comparisons.slice(0, 2).map((c) => (
              <Link
                key={c.slug}
                href={`/sammenligninger/${c.slug}`}
                className="group rounded-2xl border border-line bg-surface-100 p-7 transition hover:border-brand-light hover:bg-white hover:shadow-card"
              >
                <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-2">
                  Sammenligning
                </div>
                <h3 className="font-display text-[18px] font-medium text-ink mb-2">
                  {c.title}
                </h3>
                <p className="font-display text-[13.5px] leading-[1.6] text-muted m-0">
                  {c.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 font-display text-[13px] font-medium text-brand">
                  Se sammenligning <Icon.ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary teaser */}
      <section className="bg-surface-100 py-20">
        <div className="container-prose">
          <SectionHead
            number="07"
            eyebrow="Begreper og definisjoner"
            title="Lær begrepene fra A til Å"
            description="Korte og presise forklaringer av de viktigste begrepene innen domener."
            seeAll={{ label: "Se hele ordlisten", href: "/ordliste" }}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTerms.map((t) => (
              <GlossaryCard key={t.slug} term={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-prose">
          <SectionHead
            number="08"
            eyebrow="Ofte stilte spørsmål"
            title="Vanlige spørsmål om domene.io"
          />
          <FAQ items={homepageFaq} title="" />
        </div>
      </section>

      {/* CTA + Newsletter */}
      <section className="bg-white pb-24">
        <div className="container-prose">
          <CTA />
          <div className="mt-12">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
