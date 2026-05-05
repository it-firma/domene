import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { canonical } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personvern",
  description:
    "Slik håndterer domene.io personopplysninger. Vi samler inn så lite som mulig, lagrer ikke uten grunn, og selger aldri data videre.",
  alternates: { canonical: canonical("/personvern") },
};

const lastUpdated = "5. mai 2026";

export default function PrivacyPage() {
  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Personvern", href: "/personvern" },
  ];

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container-prose max-w-[860px]">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6">
          <div className="font-serif italic text-muted text-[14px] mb-2">
            Personvernerklæring
          </div>
          <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
            Personvern på domene.io
          </h1>
          <p className="font-display text-[13px] text-muted-light mt-4">
            Sist oppdatert {lastUpdated}
          </p>
        </div>

        <div className="prose-body mt-8">
          <p>
            domene.io er en kunnskapsbase. Vi samler inn så lite
            personopplysninger som mulig, lagrer ikke noe uten grunn, og selger
            aldri data videre. Denne siden forklarer hva som faktisk skjer når
            du besøker oss.
          </p>

          <h2>Hvem er behandlingsansvarlig</h2>
          <p>
            {site.legalName} er behandlingsansvarlig for personopplysninger som
            samles inn via domene.io. Du når oss på{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Hva vi samler inn</h2>
          <p>
            <strong>Ingen sporings- eller analysecookies.</strong> Vi bruker
            ingen tredjeparts analyseverktøy som Google Analytics eller
            lignende. Det settes ingen cookies som kan identifisere deg eller
            spore deg på tvers av nettsteder.
          </p>
          <p>
            <strong>Logger fra serveren.</strong> Som alle nettsteder mottar
            serveren vår tekniske data hver gang en side lastes: IP-adresse,
            tidspunkt, hvilken side som ble forespurt, og nettleserens
            user-agent. Disse logges kortvarig av sikkerhetsårsaker (oppdage
            misbruk, feilsøking) og slettes normalt innen 30 dager.
          </p>
          <p>
            <strong>Verktøy-bruk.</strong> Når du bruker domenesjekk, DNS-oppslag
            eller WHOIS-verktøyet, sendes spørringen videre til offentlige
            registre (Cloudflare DNS, RDAP). Selve domenenavnet du sjekker
            sendes til disse tjenestene, men vi lagrer ikke historikk over hva
            du har slått opp.
          </p>
          <p>
            <strong>Eksperthjelp og kontaktskjema.</strong> Hvis du sender oss
            en henvendelse, mottar vi det du skriver — typisk navn, e-post og
            beskjeden. Vi bruker dette kun til å svare deg, og oppbevarer
            korrespondansen så lenge det er rimelig (typisk inntil 24 måneder
            etter siste kontakt). Henvendelser slettes på forespørsel.
          </p>

          <h2>Rettslig grunnlag</h2>
          <p>
            Vi behandler personopplysninger basert på berettiget interesse
            (drift og sikkerhet av nettstedet) og samtykke når du sender oss
            en henvendelse (du oppgir frivillig dine kontaktopplysninger for å
            få svar).
          </p>

          <h2>Deling med tredjeparter</h2>
          <p>
            Vi selger aldri personopplysninger. Vi deler kun data der det er
            strengt nødvendig for å levere tjenesten:
          </p>
          <ul>
            <li>
              <strong>Hosting og infrastruktur</strong> — nettsiden driftes på
              skytjenester som behandler tekniske logger på våre vegne.
            </li>
            <li>
              <strong>Offentlige domeneregistre</strong> — når du bruker
              verktøyene, sendes domenenavnet videre til Cloudflare DNS, RDAP-
              eller WHOIS-tjenester for å hente svaret.
            </li>
            <li>
              <strong>E-post</strong> — innkommende henvendelser leveres via
              standard e-postinfrastruktur.
            </li>
          </ul>
          <p>
            Vi overfører ikke personopplysninger utenfor EØS uten at det
            foreligger gyldig overføringsgrunnlag etter GDPR.
          </p>

          <h2>Dine rettigheter</h2>
          <p>
            Du har rett til innsyn, retting, sletting og dataportabilitet for
            personopplysninger vi behandler om deg. Du kan når som helst trekke
            tilbake samtykke. Send forespørsel til{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>, så svarer vi
            innen rimelig tid (normalt én virkedag, senest 30 dager).
          </p>
          <p>
            Hvis du mener vi behandler personopplysninger i strid med
            personvernreglene, har du rett til å klage til Datatilsynet (
            <a
              href="https://www.datatilsynet.no"
              target="_blank"
              rel="noreferrer"
            >
              datatilsynet.no
            </a>
            ).
          </p>

          <h2>Endringer</h2>
          <p>
            Hvis vi endrer hvordan vi behandler personopplysninger, oppdaterer
            vi denne siden og endrer dato over. Vesentlige endringer
            kommuniseres tydelig i toppen av siden.
          </p>
        </div>

        <div className="mt-12">
          <CTA variant="light" />
        </div>
      </div>
    </div>
  );
}
