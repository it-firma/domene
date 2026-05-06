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
import { canonical, ldFaq, ldOrganization, ldWebsite } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domene - Norges kunnskapsbase | Lær, sammenlign, registrer",
  description:
    "Alt om domener i Norge: hva er .no, hvordan registrere, hvilken leverandør, sikkerhet og DNS. 14 kategorier, 20 guider, 55 begreper. Uavhengig kunnskapsbase.",
  alternates: { canonical: canonical("/") },
  keywords: [
    "domene",
    "domener",
    "domenenavn",
    ".no domene",
    "registrere domene",
    "kjøpe domene",
    "domene Norge",
    "DNS",
    "DNSSEC",
    "WHOIS",
    "e-post",
    "webhotell",
    "domeneflytting",
    "domenesikkerhet",
    "norske registrarer",
  ].join(", "),
  openGraph: {
    title: "Domene - Norges kunnskapsbase om domener",
    description:
      "Lær alt om domener i Norge - .no, .com, DNS, e-post, sikkerhet. Uavhengig og redaksjonelt.",
    url: canonical("/"),
    siteName: site.name,
    locale: "nb_NO",
    type: "website",
  },
};

const homepageFaq = [
  {
    question: "Hva er et domene?",
    answer:
      "Et domene er den unike adressen som identifiserer en nettside på internett, som domene.io eller vg.no. Domenet består av to hoveddeler: navnet (domene) og toppnivådomenet (.io, .no, .com). Domenet er nøkkelen til din digitale tilstedeværelse - det knytter sammen nettsiden, e-postadressen og andre tjenester du har på internett. I Norge administreres .no-domener av Norid, mens internasjonale domener som .com administreres av ICANN.",
  },
  {
    question: "Hvordan registrerer jeg et domene i Norge?",
    answer:
      "For å registrere et .no-domene i Norge trenger du norsk tilknytning - enten organisasjonsnummer i Brønnøysund eller norsk personnummer. Du registrerer gjennom en Norid-akkreditert registrar som Domeneshop, Webhuset, Gigahost eller Simply.com. Privatpersoner kan registrere inntil 5 .no-domener, bedrifter inntil 100. Internasjonale domener som .com har ingen slike begrensninger og kan registreres av alle.",
  },
  {
    question: "Hva koster et domene i Norge?",
    answer:
      "Et .no-domene koster fra 100 til 300 kroner per år inkludert mva, avhengig av leverandør. I mai 2026 har Gigahost laveste fornyelsespris (106 kr/år) og Webhuset best 3-årstotal (256 kr). Et .com-domene koster fra 200 til 350 kroner per år. Vær oppmerksom på lokketilbud - førsteårsprisen er ofte mye lavere enn fornyelsesprisen, så beregn alltid totalkostnad over 3 år før du velger.",
  },
  {
    question: "Hva er forskjellen på .no og .com?",
    answer:
      ".no er Norges nasjonale toppnivådomene (ccTLD) administrert av Norid og krever norsk tilknytning. .com er et internasjonalt generisk toppnivådomene (gTLD) administrert av ICANN og kan registreres av alle. .no signaliserer at virksomheten er norsk, mens .com har bredere internasjonal appell. Mange norske bedrifter registrerer begge for å beskytte merkevaren.",
  },
  {
    question: "Hva er domene.io?",
    answer:
      "domene.io er Norges uavhengige kunnskapsbase om domener - en samling guider, ordlisteforklaringer, verktøy og sammenligninger som hjelper deg å forstå og forvalte domenet ditt riktig. Vi er en del av DomainNordic Advisory Group og selger ikke domener selv, så innholdet er nøytralt og redaksjonelt.",
  },
  {
    question: "Hvordan velger jeg riktig domeneleverandør?",
    answer:
      "Velg domeneleverandør basert på dine behov, ikke bare pris. Sjekk fornyelsesprisen (ikke bare førsteårsprisen), DNSSEC-støtte, registry-lock for sikkerhet, og om norsk kundeservice er viktig for deg. Av åtte registrarer i Norge er bare Webhuset og Gigahost reelt uavhengige norske. Domeneshop har størst markedsandel og best sikkerhet for bedrifter.",
  },
  {
    question: "Koster det noe å bruke domene.io?",
    answer:
      "Nei. Alt redaksjonelt innhold - guider, ordliste, verktøy og sammenligninger - er gratis tilgjengelig. Eksperthjelp er en separat tjeneste du kan velge når du trenger personlig rådgivning fra DomainNordic.",
  },
  {
    question: "Hvor ofte oppdateres innholdet?",
    answer:
      "Innholdet kvalitetssikres redaksjonelt og oppdateres jevnlig. Hver artikkel har en 'sist oppdatert'-dato slik at du vet når informasjonen ble verifisert sist. Priser i sammenligninger oppdateres månedlig fra primærkilder.",
  },
];

export default function HomePage() {
  const featuredGuides = guides.slice(0, 5);
  const featuredTerms = glossary.slice(0, 6);
  const featuredTools = tools.slice(0, 3);

  // "Siste artikler" - top 4 guides sorted by updatedAt descending.
  const latestGuides = [...guides]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, 4);

  return (
    <>
      <Hero />

      {/* ─────────── EDUCATIONAL: "Hva er et domene?" ─────────── */}
      <section
        className="bg-white py-20 border-b border-line"
        aria-labelledby="hva-er-domene"
      >
        <div className="container-prose">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-brand mb-3">
                Domene-kunnskap
              </div>
              <h2
                id="hva-er-domene"
                className="font-display text-[34px] md:text-[40px] font-medium tracking-[-0.025em] leading-[1.1] text-ink m-0"
              >
                Hva er et{" "}
                <em className="font-serif italic font-normal text-brand">
                  domene?
                </em>
              </h2>
            </div>

            <div className="lg:col-span-7 max-w-[680px]">
              <p className="font-display text-[16px] leading-[1.7] text-ink/85 m-0">
                Et domene er den unike adressen som identifiserer en nettside
                på internett. domene.io og vg.no er begge domener. Domenet
                fungerer som internettets svar på et postnummer - det knytter
                sammen nettsiden, e-postadressen og andre tjenester du har på
                internett, slik at folk lett kan finne frem til deg.
              </p>

              <p className="mt-4 font-display text-[15px] leading-[1.7] text-muted m-0">
                Et domene består av to hoveddeler: <strong>navnet</strong>{" "}
                (selve domenet, som "domene") og{" "}
                <strong>toppnivådomenet</strong> (TLD, som ".io" eller ".no").
                I Norge administreres .no-domener av Norid, mens internasjonale
                domener som .com administreres av ICANN. Du kan ikke kjøpe et
                domene for alltid - du leier rettighetene år for år gjennom en
                <em> registrar</em>.
              </p>

              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                <Link
                  href="/guider/hvordan-velge-domenenavn"
                  className="group block rounded-xl border border-line bg-surface-100 p-4 hover:border-line-hover transition"
                >
                  <div className="font-display text-[10.5px] uppercase tracking-[0.12em] text-brand mb-1.5 font-medium">
                    Veiviser
                  </div>
                  <div className="font-display text-[14px] font-medium text-ink leading-snug mb-1">
                    Hvordan velger du riktig domene?
                  </div>
                  <div className="font-display text-[12px] text-muted">
                    Strategi for navn, TLD og merkevare.
                  </div>
                </Link>

                <Link
                  href="/sammenligninger/domenepriser"
                  className="group block rounded-xl border border-line bg-surface-100 p-4 hover:border-line-hover transition"
                >
                  <div className="font-display text-[10.5px] uppercase tracking-[0.12em] text-brand mb-1.5 font-medium">
                    Pris
                  </div>
                  <div className="font-display text-[14px] font-medium text-ink leading-snug mb-1">
                    Hvor mye koster et domene?
                  </div>
                  <div className="font-display text-[12px] text-muted">
                    Fra 100 kr/år hos norske leverandører.
                  </div>
                </Link>

                <Link
                  href="/kunnskapsbase/no-domene"
                  className="group block rounded-xl border border-line bg-surface-100 p-4 hover:border-line-hover transition"
                >
                  <div className="font-display text-[10.5px] uppercase tracking-[0.12em] text-brand mb-1.5 font-medium">
                    Valg
                  </div>
                  <div className="font-display text-[14px] font-medium text-ink leading-snug mb-1">
                    .no eller .com?
                  </div>
                  <div className="font-display text-[12px] text-muted">
                    Når du bør velge norsk eller internasjonalt.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Categories - dark navy section ─────────── */}
      <div className="bg-navy-mid pt-24 pb-16 -mt-px">
        <div className="container-prose">
          <SectionHead
            eyebrow="14 kategorier"
            title="Lær om domener i 14 kategorier"
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
            eyebrow="Mest leste"
            title="Mest leste guider om domener"
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
            eyebrow="Siste oppdatert"
            title="Nye og oppdaterte artikler om domener"
            description="Vi reviderer innholdet jevnlig - her er de fire nyeste."
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
            eyebrow="Praktiske ressurser"
            title="Sjekk domener og sammenlign leverandører"
            description="Sjekk DNS, slå opp WHOIS, eller sammenlign domeneleverandører før du tar valget."
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
            eyebrow="Begreper og definisjoner"
            title="Domene-ordliste fra A til Å"
            description="Korte og presise forklaringer av de viktigste begrepene innen domener, DNS og e-post."
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
            eyebrow="Ofte stilte spørsmål"
            title="Vanlige spørsmål om domener"
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

      <StructuredData
        data={[ldOrganization(), ldWebsite(), ldFaq(homepageFaq)]}
      />
    </>
  );
}
