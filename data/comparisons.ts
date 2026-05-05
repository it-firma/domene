import type { Comparison } from "@/lib/types";

/**
 * Pricing data is researched manually from public price lists at the leverandør's
 * website. Always verify with the provider before purchase. Prices in NOK
 * incl. MVA where applicable. Last updated: see updatedAt per row.
 */

export const comparisons: Comparison[] = [
  {
    slug: "domenepriser",
    title: "Sammenlign domenepriser hos norske registrarer",
    description:
      "Manuelt oppdatert oversikt over priser på domener hos norske og internasjonale registrarer.",
    intro:
      "Domeneprisene varierer mer enn man tror — særlig fornyelse og flyttepriser kan være langt høyere enn førsteårsprisen. Vi viser åpne priser hentet direkte fra leverandørene, manuelt oppdatert. Verifiser alltid før bestilling.",
    methodology:
      "Vi henter priser fra leverandørenes offentlige prislister. Førsteårsprisen er det du betaler ved registrering; fornyelsen er prisen ved hvert årlige fornyelse; flytting er prisen for å overføre fra annen leverandør. Tjenester nevner kun det leverandøren tydelig markedsfører som inkludert.",
    columns: [
      { key: "no_first", label: ".no første år" },
      { key: "no_renew", label: ".no fornyelse" },
      { key: "com_first", label: ".com første år" },
      { key: "com_renew", label: ".com fornyelse" },
      { key: "included", label: "Inkludert" },
    ],
    providers: [
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          no_first: "129 kr",
          no_renew: "129 kr",
          com_first: "165 kr",
          com_renew: "165 kr",
          included: "DNS, videresending, gratis SSL",
        },
        note: "Ingen lokketilbud — fornyelse = førsteårspris.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          no_first: "99 kr",
          no_renew: "199 kr",
          com_first: "59 kr",
          com_renew: "239 kr",
          included: "DNS, e-post 1 GB, SSL",
        },
        note: "Lav førsteårspris, høyere fornyelse — sjekk total over flere år.",
      },
      {
        name: "IIO (Internet Norge)",
        href: "https://www.internett.no",
        values: {
          no_first: "169 kr",
          no_renew: "169 kr",
          com_first: "189 kr",
          com_renew: "189 kr",
          included: "DNS, DNSSEC, registry-lock tilgjengelig",
        },
        note: "Norsk leverandør med fokus på sikkerhet og .no-spesialisering.",
      },
      {
        name: "GoDaddy",
        href: "https://www.godaddy.com",
        values: {
          no_first: "Ikke .no",
          no_renew: "—",
          com_first: "fra 12 kr",
          com_renew: "ca. 220 kr",
          included: "DNS, parking, SSL ekstra",
        },
        note: "Tilbyr ikke .no. Aggressiv kryssalg av tilleggstjenester.",
      },
      {
        name: "Cloudflare Registrar",
        href: "https://www.cloudflare.com/products/registrar/",
        values: {
          no_first: "Ikke .no",
          no_renew: "—",
          com_first: "ca. 95 kr",
          com_renew: "ca. 95 kr",
          included: "DNS, DNSSEC, gratis SSL, ingen påslag",
        },
        note: "Selger til kostpris — krever flytting fra annen leverandør først.",
      },
      {
        name: "Namecheap",
        href: "https://www.namecheap.com",
        values: {
          no_first: "Ikke .no",
          no_renew: "—",
          com_first: "ca. 95 kr",
          com_renew: "ca. 165 kr",
          included: "DNS, gratis WHOIS-beskyttelse, SSL første år",
        },
        note: "Internasjonal leverandør, billig, men ingen .no-støtte.",
      },
      {
        name: "Hyp.net",
        href: "https://hyp.net",
        values: {
          no_first: "199 kr",
          no_renew: "199 kr",
          com_first: "199 kr",
          com_renew: "199 kr",
          included: "DNS, e-postvideresending, SSL",
        },
        note: "Norsk leverandør med enkel prisstruktur.",
      },
      {
        name: "PRO ISP",
        href: "https://www.proisp.no",
        values: {
          no_first: "149 kr",
          no_renew: "149 kr",
          com_first: "149 kr",
          com_renew: "149 kr",
          included: "DNS, SSL, e-post i webhotell-pakker",
        },
        note: "Norsk leverandør med rimelig pris og webhotell-fokus.",
      },
    ],
    importantNotes: [
      "Førsteårsprisen er ofte rabattert — det viktigste er fornyelsesprisen over tid.",
      "Sjekk hva som faktisk er inkludert: DNS, DNSSEC, e-post, SSL, registry-lock.",
      "Internasjonale registrarer (GoDaddy, Namecheap, Cloudflare) tilbyr ikke .no.",
      "Cloudflare Registrar selger til kostpris, men krever at domenet allerede er registrert.",
      "Sjekk åpningstider og språk på kundeservice — viktig ved kritisk feil.",
    ],
    faq: [
      {
        question: "Hvor ofte oppdaterer dere prisene?",
        answer:
          "Manuelt, jevnlig. Datoen i bunnen av tabellen viser sist oppdatering. Priser kan endres uten varsel — verifiser hos leverandøren før bestilling.",
      },
      {
        question: "Inkluderer prisene moms?",
        answer:
          "Ja, vi viser priser inklusive merverdiavgift for norske kjøpere der det er relevant.",
      },
      {
        question: "Hvorfor varierer .com-prisen så mye?",
        answer:
          "Mange registrarer bruker første-års-rabatt for å lokke nye kunder, deretter høyere fornyelsespris. Cloudflare Registrar selger til kostpris uten påslag.",
      },
      {
        question: "Er den billigste alltid best?",
        answer:
          "Nei. Sjekk fornyelsespris, kvalitet på DNS, sikkerhet (tofaktor, DNSSEC, registry-lock) og kundeservice. Lavpris med dårlig støtte koster mer ved problemer.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "no-domene",
    title: "Sammenlign .no domeneleverandører",
    description:
      "Hvilken registrar bør du velge for ditt .no domene? Sammenlign pris, sikkerhet og kontroll.",
    intro:
      "Registrarer for .no betaler samme avgift til Norid, men har ulike priser, brukerflater og tilleggstjenester. Her ser du forskjellene som faktisk betyr noe i daglig bruk — særlig sikkerhet og åpenhet.",
    methodology:
      "Vi vurderer pris, sikkerhet (tofaktor, registry-lock, DNSSEC), DNS-håndtering, brukervennlighet og åpenhet. Basert på offentlig tilgjengelig informasjon, manuelt oppdatert. Vi tester ikke selv kundeservice — vurderingen baseres på publiserte SLA-er og bruker-erfaringer.",
    columns: [
      { key: "price", label: "Pris/år" },
      { key: "twofa", label: "Tofaktor" },
      { key: "lock", label: "Registry-lock" },
      { key: "dnssec", label: "DNSSEC" },
      { key: "support", label: "Kundeservice" },
    ],
    providers: [
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          price: "129 kr",
          twofa: "Ja",
          lock: "Tilbys",
          dnssec: "Ja, gratis",
          support: "E-post, telefon på dagtid",
        },
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          price: "99 kr / 199 kr",
          twofa: "Ja",
          lock: "Begrenset",
          dnssec: "Ja",
          support: "Chat, telefon",
        },
        note: "Førsteårspris 99 kr, fornyelse 199 kr.",
      },
      {
        name: "IIO (Internet Norge)",
        href: "https://www.internett.no",
        values: {
          price: "169 kr",
          twofa: "Ja",
          lock: "Tilbys",
          dnssec: "Ja, gratis",
          support: "E-post, telefon",
        },
        note: "Spesialisert på .no, sterk sikkerhetsprofil.",
      },
      {
        name: "Hyp.net",
        href: "https://hyp.net",
        values: {
          price: "199 kr",
          twofa: "Ja",
          lock: "Begrenset",
          dnssec: "Ja",
          support: "E-post",
        },
      },
      {
        name: "PRO ISP",
        href: "https://www.proisp.no",
        values: {
          price: "149 kr",
          twofa: "Ja",
          lock: "Begrenset",
          dnssec: "Ja",
          support: "E-post, chat",
        },
      },
      {
        name: "Domainnameshop",
        href: "https://www.domainnameshop.com",
        values: {
          price: "129 kr",
          twofa: "Ja",
          lock: "Tilbys",
          dnssec: "Ja",
          support: "E-post, telefon",
        },
        note: "Engelskspråklig grensesnitt for internasjonale kunder.",
      },
    ],
    importantNotes: [
      "Alle .no-registrarer betaler samme grunnpris til Norid (~57 kr/år) — forskjellen er deres påslag.",
      "Registry-lock er en ekstra forsvarslinje mot kapring — verdt det for kritiske domener.",
      "DNSSEC bør alltid være med, og er gratis hos de fleste seriøse registrarer.",
      "Tofaktor-autentisering er minimum — sjekk at det er aktivt og at du faktisk bruker det.",
    ],
    faq: [
      {
        question: "Bør jeg velge norsk eller utenlandsk leverandør for .no?",
        answer:
          "Utenlandske leverandører tilbyr som regel ikke .no direkte. Norske leverandører er som regel enklere ved tvister og kundestøtte på norsk.",
      },
      {
        question: "Hva er registry-lock?",
        answer:
          "Et tilleggsnivå av sikkerhet der domenet ikke kan flyttes eller endres uten verifisering ut-av-bånd, typisk telefon. Anbefalt for kritiske merkevaredomener.",
      },
      {
        question: "Får jeg DNSSEC alle steder?",
        answer:
          "De fleste seriøse norske registrarer tilbyr DNSSEC, ofte gratis. Sjekk eksplisitt at det støttes før du registrerer.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "webhotell",
    title: "Sammenlign webhotell i Norge",
    description: "Hvilket webhotell passer for deg? Sammenlign ytelse, pris og funksjoner.",
    intro:
      "Webhotell-markedet er fragmentert med store prisforskjeller. Vi sammenligner offentlig tilgjengelige priser, lagringsplass, backup, SSL-policy og inkluderte tjenester. For dynamiske nettsider med høyere krav: vurder cloud-leverandører som Vercel.",
    methodology:
      "Basert på offentlig publiserte priser og spesifikasjoner per mai 2026. Vi tester ikke ytelse selv, men noterer hvor leverandøren publiserer SLA og uptime-data. Cloud-tjenester er nevnt for sammenligning, men har annen prisstruktur (per bruk).",
    columns: [
      { key: "price", label: "Pris/mnd (fra)" },
      { key: "storage", label: "Lagring" },
      { key: "ssl", label: "SSL" },
      { key: "backup", label: "Backup" },
      { key: "email", label: "E-post" },
    ],
    providers: [
      {
        name: "Domeneshop Webhotell",
        href: "https://domene.shop/webhotell",
        values: {
          price: "fra 49 kr",
          storage: "10-50 GB",
          ssl: "Inkludert",
          backup: "Daglig",
          email: "Inkludert",
        },
      },
      {
        name: "One.com Hosting",
        href: "https://www.one.com/no/webhotell",
        values: {
          price: "fra 49 kr",
          storage: "25 GB-ubegrenset",
          ssl: "Inkludert",
          backup: "Daglig",
          email: "Inkludert (5+ kontoer)",
        },
      },
      {
        name: "PRO ISP",
        href: "https://www.proisp.no/webhotell",
        values: {
          price: "fra 39 kr",
          storage: "10-100 GB",
          ssl: "Let's Encrypt gratis",
          backup: "Daglig",
          email: "Inkludert",
        },
      },
      {
        name: "Hyp.net",
        href: "https://hyp.net/webhotell",
        values: {
          price: "fra 99 kr",
          storage: "20-200 GB",
          ssl: "Inkludert",
          backup: "Daglig",
          email: "Inkludert",
        },
      },
      {
        name: "Vercel (cloud)",
        href: "https://vercel.com",
        values: {
          price: "Gratis-base, fra $20",
          storage: "Per bruk",
          ssl: "Automatisk",
          backup: "Versjonering via Git",
          email: "Ikke inkludert",
        },
        note: "Cloud-PaaS — egnet for moderne JavaScript/Next.js-apper. Ikke direkte sammenlignbar med tradisjonelt webhotell.",
      },
      {
        name: "Netlify (cloud)",
        href: "https://www.netlify.com",
        values: {
          price: "Gratis-base, fra $19",
          storage: "Per bruk",
          ssl: "Automatisk",
          backup: "Git-versjonering",
          email: "Ikke inkludert",
        },
        note: "Cloud-PaaS for statiske og JAMstack-nettsider.",
      },
    ],
    importantNotes: [
      "Tradisjonelle webhotell har faste ressurser; cloud-tjenester (Vercel, Netlify) skalerer automatisk og fakturerer per bruk.",
      "Backup-policy varierer mye — sjekk hvor langt tilbake i tid du kan gjenopprette.",
      "E-post er ofte 'inkludert' men begrenset i lagring og funksjoner — vurder Google Workspace eller Microsoft 365 separat for profesjonell bruk.",
      "Server-lokasjon påvirker ytelse for norske brukere — sjekk om datasenter er i Norge eller Norden.",
    ],
    faq: [
      {
        question: "Hva er forskjellen på shared hosting og VPS?",
        answer:
          "Shared hosting deler en server mellom mange kunder — billigst, men begrenset ytelse. VPS gir deg dedikerte ressurser på en virtuell server — bedre ytelse, men dyrere.",
      },
      {
        question: "Bør jeg velge norsk eller utenlandsk hosting?",
        answer:
          "Norsk hosting gir lavere ventetid for norske brukere og enklere kundeservice. Utenlandske cloud-leverandører gir bedre skalerbarhet og fleksibilitet for tekniske team.",
      },
      {
        question: "Er gratis SSL like sikkert som betalt?",
        answer:
          "For de fleste formål: ja. Let's Encrypt og lignende tjenester gir samme kryptering som betalte. Forskjellen ligger i validering og forsikring, ikke teknisk sikkerhet.",
      },
      {
        question: "Hvor mye lagring trenger jeg?",
        answer:
          "Typisk nettside med tekst og noen bilder bruker 1-5 GB. Med video, mange bilder eller en e-handel kan du raskt nå 20-50 GB.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "epost",
    title: "Sammenlign e-postløsninger for bedrifter",
    description: "Microsoft 365, Google Workspace eller norsk leverandør — hva passer for deg?",
    intro:
      "Valg av e-postløsning handler om mer enn pris. Lagring, samarbeid, kalender, integrasjoner, sikkerhet og lokal støtte påvirker totalkostnaden over tid. Her sammenligner vi de mest brukte alternativene for norske bedrifter.",
    methodology:
      "Vi sammenligner pris per bruker, lagringsplass, samhandling, sikkerhet og lokal kundeservice. Basert på offentlig publiserte priser per mai 2026. Avhenger av abonnementsnivå — vi viser ofte basisplan; du kan velge høyere planer med flere funksjoner.",
    columns: [
      { key: "price", label: "Pris/bruker/mnd" },
      { key: "storage", label: "Lagring" },
      { key: "calendar", label: "Kalender" },
      { key: "office", label: "Kontorpakke" },
      { key: "support", label: "Kundeservice" },
    ],
    providers: [
      {
        name: "Google Workspace Business Starter",
        href: "https://workspace.google.com",
        values: {
          price: "fra ca. 75 kr",
          storage: "30 GB/bruker",
          calendar: "Google Calendar",
          office: "Docs, Sheets, Slides",
          support: "24/7 engelsk; norske partnere",
        },
      },
      {
        name: "Microsoft 365 Business Basic",
        href: "https://www.microsoft.com/nb-no/microsoft-365/business",
        values: {
          price: "fra ca. 65 kr",
          storage: "50 GB innboks + 1 TB OneDrive",
          calendar: "Outlook",
          office: "Web-versjoner",
          support: "24/7 norsk og engelsk",
        },
      },
      {
        name: "Microsoft 365 Business Standard",
        href: "https://www.microsoft.com/nb-no/microsoft-365/business",
        values: {
          price: "fra ca. 135 kr",
          storage: "50 GB innboks + 1 TB OneDrive",
          calendar: "Outlook",
          office: "Desktop + web Office-apper",
          support: "24/7 norsk og engelsk",
        },
      },
      {
        name: "Domeneshop e-post",
        href: "https://domene.shop/epost",
        values: {
          price: "fra ca. 25 kr",
          storage: "5-25 GB",
          calendar: "CalDAV-støtte",
          office: "Ikke inkludert",
          support: "Norsk på dagtid",
        },
      },
      {
        name: "Fastmail",
        href: "https://www.fastmail.com",
        values: {
          price: "fra ca. 50 kr",
          storage: "30-100 GB",
          calendar: "Innebygd kalender",
          office: "Ikke inkludert",
          support: "Engelsk e-post",
        },
        note: "Fokusert på e-post — ikke kontorpakke.",
      },
      {
        name: "ProtonMail Business",
        href: "https://proton.me/business",
        values: {
          price: "fra ca. 80 kr",
          storage: "15-50 GB",
          calendar: "Proton Calendar",
          office: "Proton Drive",
          support: "Engelsk",
        },
        note: "Sterk fokus på personvern og kryptering.",
      },
    ],
    importantNotes: [
      "Lagringsbehov vokser raskt — start med plan som tillater oppgradering uten datatap.",
      "Microsoft 365 og Google Workspace har norske partnere som gir lokal støtte og rådgivning.",
      "ProtonMail og lignende personvern-fokuserte tjenester gir kryptering, men noen integrasjoner mangler.",
      "Sjekk databehandler-avtale (DPA) og hvor data lagres — viktig for GDPR-overholdelse.",
      "Migrering mellom leverandører tar tid — planlegg gradvis utrulling med tidlig backup.",
    ],
    faq: [
      {
        question: "Hva passer for små bedrifter?",
        answer:
          "Microsoft 365 Business Basic eller Google Workspace Business Starter er gode utgangspunkter. Begge er rimelige, godt integrerte og pålitelige.",
      },
      {
        question: "Hvor lagres dataene mine?",
        answer:
          "Microsoft 365 har EU-datasentre tilgjengelig. Google Workspace lagrer i USA og EU. ProtonMail lagrer i Sveits. Sjekk leverandørens DPA for spesifikk lokasjon.",
      },
      {
        question: "Kan jeg bytte leverandør senere?",
        answer:
          "Ja, men det krever migrering av e-post, kontakter og kalender. Bruk IMAP-eksport eller leverandørens egne migreringsverktøy.",
      },
      {
        question: "Trenger jeg å sette opp SPF, DKIM og DMARC?",
        answer:
          "Ja, for at e-post fra ditt domene ikke skal havne i spam. Alle store leverandører gir ferdige verdier å lime inn i DNS.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "com-domene",
    title: "Sammenlign .com domene-registrarer",
    description:
      "Hvilken registrar bør du velge for .com? Vi sammenligner pris, fornyelse og inkluderte tjenester.",
    intro:
      ".com administreres av Verisign og selges av tusenvis av registrarer. Prisen til Verisign er ca. 10–11 USD i grossistpris — alt over det er registrarens påslag. Forskjellene ligger i påslag, brukerflate og tilleggstjenester.",
    methodology:
      "Vi henter priser fra leverandørenes offentlige prislister og noterer både førsteårspris og fornyelsespris. Mange registrarer bruker rabatt på første år for å lokke nye kunder. Vi vurderer også inkluderte sikkerhetstjenester som DNSSEC, WHOIS-beskyttelse og tofaktor.",
    columns: [
      { key: "first", label: "Første år" },
      { key: "renew", label: "Fornyelse" },
      { key: "transfer", label: "Flytting" },
      { key: "whois", label: "WHOIS-skjul" },
      { key: "dnssec", label: "DNSSEC" },
    ],
    providers: [
      {
        name: "Cloudflare Registrar",
        href: "https://www.cloudflare.com/products/registrar/",
        values: {
          first: "ca. 95 kr",
          renew: "ca. 95 kr",
          transfer: "Gratis",
          whois: "Gratis",
          dnssec: "Gratis",
        },
        note: "Selger til kostpris uten påslag — krever flytting fra annen registrar først.",
      },
      {
        name: "Namecheap",
        href: "https://www.namecheap.com",
        values: {
          first: "ca. 95 kr",
          renew: "ca. 165 kr",
          transfer: "ca. 95 kr",
          whois: "Gratis",
          dnssec: "Gratis",
        },
        note: "Internasjonal, billig, vanlig brukt blant utviklere.",
      },
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          first: "165 kr",
          renew: "165 kr",
          transfer: "165 kr",
          whois: "Gratis",
          dnssec: "Gratis",
        },
        note: "Norsk leverandør, ingen lokketilbud — fornyelse = førsteårspris.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          first: "59 kr",
          renew: "239 kr",
          transfer: "239 kr",
          whois: "Inkludert",
          dnssec: "Ja",
        },
        note: "Lavt lokketilbud — sjekk fornyelsespris over flere år.",
      },
      {
        name: "GoDaddy",
        href: "https://www.godaddy.com",
        values: {
          first: "fra 12 kr",
          renew: "ca. 220 kr",
          transfer: "ca. 110 kr",
          whois: "Ekstra",
          dnssec: "Ja",
        },
        note: "Aggressiv kryssalg — vær oppmerksom på påløpende tjenester ved utsjekk.",
      },
      {
        name: "Porkbun",
        href: "https://porkbun.com",
        values: {
          first: "ca. 95 kr",
          renew: "ca. 110 kr",
          transfer: "ca. 95 kr",
          whois: "Gratis",
          dnssec: "Gratis",
        },
        note: "Internasjonal, populær blant utviklere — gjennomsiktig prising.",
      },
      {
        name: "Google Domains (lukket)",
        values: {
          first: "—",
          renew: "—",
          transfer: "—",
          whois: "—",
          dnssec: "—",
        },
        note: "Tjenesten ble overført til Squarespace i 2023 — eksisterende kunder ble flyttet.",
      },
    ],
    importantNotes: [
      "Grossistprisen for .com fra Verisign er ca. 10–11 USD — alt utover det er registrarens påslag.",
      "Fornyelsesprisen er viktigere enn førsteårsprisen over tid.",
      "Cloudflare og Porkbun selger til lav margin og er populære blant tekniske brukere.",
      "WHOIS-beskyttelse bør være gratis — det er det hos alle seriøse registrarer.",
      "Sjekk om DNSSEC er fullt støttet, ikke bare 'tilgjengelig på forespørsel'.",
    ],
    faq: [
      {
        question: "Er det forskjell på kvalitet mellom .com-registrarer?",
        answer:
          "Selve domenet er identisk — men registrarens kontrollpanel, sikkerhet (tofaktor, registry-lock, DNSSEC), kundeservice og prisstrategi varierer betydelig.",
      },
      {
        question: "Bør jeg flytte .com til Cloudflare?",
        answer:
          "Hvis pris er viktigst og du er komfortabel med teknisk kontrollpanel — ja, Cloudflare er ofte billigst. Hvis du vil ha norsk kundeservice, velg en norsk registrar.",
      },
      {
        question: "Hva betyr 'lokketilbud'?",
        answer:
          "Lavt førsteårspris (ofte under kostpris) for å trekke kunder — deretter høy fornyelsespris. Sjekk total pris over 3–5 år før valg.",
      },
      {
        question: "Kan jeg flytte .com når som helst?",
        answer:
          "Ja, etter 60-dagers låsing fra registrering eller forrige flytting. Du trenger auth-kode (EPP-kode) fra nåværende registrar.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "dnssec-leverandorer",
    title: "Sammenlign DNSSEC-støtte hos norske registrarer",
    description:
      "Hvem tilbyr DNSSEC, og hvordan? Sammenlign støtte, pris og brukervennlighet.",
    intro:
      "DNSSEC beskytter mot DNS-forfalskning og cache-poisoning ved å signere DNS-svar kryptografisk. Norid (.no-registret) støtter DNSSEC, men ikke alle registrarer har enkel aktivering. Her ser du hvem som tilbyr hva.",
    methodology:
      "Vi vurderer om DNSSEC er gratis, om det aktiveres med ett klikk, og om leverandøren støtter automatisk nøkkelrullering (key rollover). Basert på offentlig publisert dokumentasjon. Sjekk alltid med leverandøren før kritiske domener.",
    columns: [
      { key: "support", label: "DNSSEC-støtte" },
      { key: "price", label: "Pris" },
      { key: "ease", label: "Aktivering" },
      { key: "rollover", label: "Auto-rullering" },
      { key: "algos", label: "Algoritmer" },
    ],
    providers: [
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          support: "Full",
          price: "Gratis",
          ease: "Ett klikk i kontrollpanel",
          rollover: "Automatisk",
          algos: "ECDSAP256SHA256, RSA",
        },
      },
      {
        name: "IIO (Internet Norge)",
        href: "https://www.internett.no",
        values: {
          support: "Full",
          price: "Gratis",
          ease: "Ett klikk",
          rollover: "Automatisk",
          algos: "ECDSAP256SHA256",
        },
        note: "Sterk sikkerhetsprofil — DNSSEC standardisert.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Ett klikk",
          rollover: "Automatisk",
          algos: "RSASHA256",
        },
      },
      {
        name: "Hyp.net",
        href: "https://hyp.net",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Manuell aktivering",
          rollover: "Manuell",
          algos: "RSASHA256",
        },
      },
      {
        name: "Cloudflare DNS (ekstern)",
        href: "https://www.cloudflare.com/dns/",
        values: {
          support: "Full",
          price: "Gratis",
          ease: "Ett klikk",
          rollover: "Automatisk",
          algos: "ECDSAP256SHA256",
        },
        note: "Krever at Cloudflare brukes som DNS-leverandør, ikke nødvendigvis registrar.",
      },
      {
        name: "PRO ISP",
        href: "https://www.proisp.no",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Manuell",
          rollover: "Manuell",
          algos: "RSASHA256",
        },
      },
    ],
    importantNotes: [
      "Hvis du bruker ekstern DNS (Cloudflare, AWS Route 53), må DNSSEC aktiveres begge steder med riktig DS-record.",
      "ECDSA-algoritmer er moderne og effektive — RSA fungerer fortsatt, men gir større pakker.",
      "Manuell nøkkelrullering er en sikkerhetsrisiko hvis glemt — automatisk rullering er foretrukket.",
      "DNSSEC-validering må også være aktivert hos sluttbrukerens resolver — Google og Cloudflare gjør dette automatisk.",
    ],
    faq: [
      {
        question: "Hva er DNSSEC i praksis?",
        answer:
          "Et lag med kryptografisk signering på DNS-svar som hindrer forfalskning. Når du aktiverer det hos registraren, signeres ditt domenes DNS-data og resolvere kan verifisere autentisiteten.",
      },
      {
        question: "Bryter DNSSEC noe?",
        answer:
          "Ja — feilkonfigurasjon kan gjøre domenet utilgjengelig. Bruk leverandører med automatisk håndtering, og test før produksjon.",
      },
      {
        question: "Trenger jeg DNSSEC?",
        answer:
          "For kritiske tjenester (bank, e-handel, autentisering): definitivt ja. For personlige sider: anbefalt, men ikke kritisk hvis du ellers bruker HTTPS overalt.",
      },
      {
        question: "Kan jeg ha DNSSEC med ekstern DNS?",
        answer:
          "Ja, men det krever koordinering: DNS-leverandøren genererer nøkler, registraren publiserer DS-record. Cloudflare gjør dette med ett klikk hvis registraren støtter det.",
      },
    ],
    updatedAt: "2026-05-05",
  },
];

export const findComparison = (slug: string) =>
  comparisons.find((c) => c.slug === slug);
