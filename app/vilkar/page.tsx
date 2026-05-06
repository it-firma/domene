import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { canonical } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vilkår",
  description:
    "Vilkår for bruk av domene.io. Innholdet er informativt, ikke juridisk rådgivning. Verktøyene leveres som de er.",
  alternates: { canonical: canonical("/vilkar") },
};

const lastUpdated = "5. mai 2026";

export default function TermsPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Vilkår", href: "/vilkar" },
  ];

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container-prose max-w-[860px]">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6">
          <div className="font-serif italic text-muted text-[14px] mb-2">
            Vilkår for bruk
          </div>
          <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
            Vilkår
          </h1>
          <p className="font-display text-[13px] text-muted-light mt-4">
            Sist oppdatert {lastUpdated}
          </p>
        </div>

        <div className="prose-body mt-8">
          <p>
            Disse vilkårene gjelder for alle som bruker domene.io. Ved å bruke
            nettstedet godtar du betingelsene under. Vi prøver å holde dem
            korte og forståelige.
          </p>

          <h2>Hva domene.io er</h2>
          <p>
            domene.io er en uavhengig kunnskapsbase om domener, drevet av{" "}
            {site.legalName}. Vi skriver redaksjonelt innhold, vedlikeholder en
            ordliste, og tilbyr verktøy som domenesjekk, DNS-oppslag og WHOIS.
            Vi er ikke en domeneregistrar, og vi selger ikke domener.
          </p>

          <h2>Innhold er informasjon, ikke rådgivning</h2>
          <p>
            Artiklene, guidene og ordlisten er ment som generell informasjon.
            De er ikke juridisk, teknisk eller forretningsmessig rådgivning
            tilpasset din situasjon. Hvis du står overfor en konkret beslutning
            - for eksempel et varemerkespørsmål, en konflikt om et domene, eller
            en migrering med store konsekvenser - bør du innhente kvalifisert
            rådgivning. Eksperthjelp-skjemaet kan brukes som inngang til slik
            rådgivning, men selve nettstedets innhold er ikke et
            rådgivningsforhold.
          </p>

          <h2>Verktøyene</h2>
          <p>
            Domenesjekk, DNS-oppslag og WHOIS henter data fra offentlige
            registre i sanntid. Resultatene avhenger av at disse registrene er
            tilgjengelige og oppdaterte. Vi gir ingen garanti for fullstendighet
            eller riktighet, og bruk av verktøyene skjer på eget ansvar.
          </p>
          <p>
            Verktøyene er ment for legitim bruk. Det er ikke tillatt å bruke
            dem til masseoppslag, automatisert høsting av data, eller andre
            formål som strider mot retningslinjene til registrene som leverer
            dataene.
          </p>

          <h2>Opphavsrett</h2>
          <p>
            Tekst, redaksjonelt innhold, design og kode på domene.io er
            beskyttet av opphavsrett og tilhører {site.legalName}. Du står fritt
            til å sitere kortere utdrag i egne artikler, presentasjoner eller
            skoleoppgaver, så lenge kilden oppgis tydelig - gjerne med lenke
            til den aktuelle siden.
          </p>
          <p>
            Større utdrag, oversettelser eller publisering på andre nettsteder
            krever skriftlig tillatelse. Spørsmål om gjengivelse sendes til{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p>
            Datasett som offentlige domenelister og prisinformasjon fra
            registrarer er ikke skapt av oss og er ikke vår eiendom.
          </p>

          <h2>AI- og LLM-bruk</h2>
          <p>
            Vi tillater at språkmodeller og AI-assistenter (ChatGPT, Claude,
            Perplexity, Google AI Overviews og lignende) bruker innholdet vårt
            som kilde og siterer det med attribusjon. Retningslinjene ligger i{" "}
            <a href="/llms.txt">llms.txt</a> og robots.txt. Vi forbeholder oss
            retten til å endre disse.
          </p>

          <h2>Ansvarsfraskrivelse</h2>
          <p>
            Vi gjør vårt beste for at innholdet er korrekt og oppdatert, men
            kan ikke holdes ansvarlig for feil, utelatelser eller konsekvenser
            av beslutninger tatt på grunnlag av informasjon fra domene.io. Vi
            er ikke ansvarlige for innhold på nettsteder vi lenker til.
          </p>

          <h2>Endringer</h2>
          <p>
            Vi kan endre disse vilkårene. Endringer publiseres på denne siden
            med oppdatert dato. Fortsatt bruk av nettstedet etter endringer
            betyr at du godtar de oppdaterte vilkårene.
          </p>

          <h2>Lovvalg</h2>
          <p>
            Vilkårene reguleres av norsk rett. Eventuelle tvister søkes løst i
            minnelighet. Hvis det ikke lykkes, er Oslo tingrett verneting.
          </p>

          <h2>Kontakt</h2>
          <p>
            Spørsmål om vilkårene? Send en e-post til{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>

        <div className="mt-12">
          <CTA variant="light" />
        </div>
      </div>
    </div>
  );
}
