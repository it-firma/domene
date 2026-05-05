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
      "Manuelt verifisert oversikt over priser på .no- og .com-domener hos seks registrarer for det norske markedet. Alle priser inkl. mva.",
    intro:
      "Domeneprisene varierer mer enn mange tror — særlig fornyelsen er ofte langt høyere enn førsteårsprisen. Vi sammenligner seks registrarer som retter seg mot norske kunder: tre uavhengige (Domeneshop, Webhuset, Simply.com) og tre under Group.One-konsernet (One.com, Uniweb, ProISP). Alle priser i NOK inkludert 25 % mva. Verifiser alltid hos leverandøren før bestilling.",
    methodology:
      "Priser er hentet manuelt fra leverandørenes prislister og bestillingsskjemaer, og verifisert i mai 2026. Domeneshop oppgir prisene inklusive mva; de øvrige oppgir eksklusive mva, og vi har konvertert ved å multiplisere med 1,25. Førsteårsprisen er det du betaler ved registrering (ofte rabattert som lokketilbud); fornyelsesprisen er det du betaler hvert år etter — og er det tallet som faktisk teller over tid.",
    columns: [
      { key: "no_first", label: ".no første år" },
      { key: "no_renew", label: ".no fornyelse" },
      { key: "com_first", label: ".com første år" },
      { key: "com_renew", label: ".com fornyelse" },
      { key: "included", label: "Inkludert" },
    ],
    providers: [
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          no_first: "124 kr",
          no_renew: "124 kr",
          com_first: "188 kr",
          com_renew: "188 kr",
          included: "DNS, e-postvideresending",
        },
        note: "Norsk eid og uavhengig. Bergensbasert. Lavest .no-pris i sammenligningen.",
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          no_first: "175 kr",
          no_renew: "175 kr",
          com_first: "250 kr",
          com_renew: "250 kr",
          included: "DNS, e-postvideresending, SSL",
        },
        note: "Dansk uavhengig (tidligere UnoEuro). Tilbyr .no-trustee for danske kunder uten norsk organisasjonsnummer.",
      },
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          no_first: "199 kr",
          no_renew: "199 kr",
          com_first: "220 kr",
          com_renew: "220 kr",
          included: "DNS, e-postvideresending, gratis SSL",
        },
        note: "Norsk eid og uavhengig. Ingen lokketilbud — fornyelse er lik førsteårspris. Volumrabatt fra 5 domener.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          no_first: "275 kr",
          no_renew: "275 kr",
          com_first: "336 kr",
          com_renew: "336 kr",
          included: "DNS, SSL, e-post i webhotell-pakker",
        },
        note: "Del av Group.One-konsernet (sammen med One.com og Uniweb). Teknisk profil med webhotell-fokus.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          no_first: "99 kr",
          no_renew: "286 kr",
          com_first: "59 kr",
          com_renew: "349 kr",
          included: "DNS, e-post 1 GB, SSL",
        },
        note: "Dansk hovedkontor, del av Group.One. Lav førsteårspris, vesentlig høyere fornyelse — sjekk totalkostnad over flere år.",
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          no_first: "300 kr",
          no_renew: "300 kr",
          com_first: "336 kr",
          com_renew: "336 kr",
          included: "DNS, SSL",
        },
        note: "Del av Group.One-konsernet. Høyest .no-pris i sammenligningen.",
      },
    ],
    importantNotes: [
      "Tre av seks (One.com, Uniweb, ProISP) er del av Group.One-konsernet. Domeneshop, Webhuset og Simply.com er reelt uavhengige.",
      "Førsteårsprisen er ofte rabattert. One.com går for eksempel fra 99 kr første år til 286 kr ved fornyelse for .no. Beregn alltid totalkostnad over 3 år før du velger.",
      "Sjekk hva som faktisk er inkludert: DNS, DNSSEC, e-postvideresending, SSL og registry-lock varierer mellom leverandørene.",
      "Volumrabatt: Domeneshop gir automatisk rabatt fra 5 domener. De andre må kontaktes direkte for tilbud ved større porteføljer.",
      "Kundeservice på norsk er viktig ved kritiske feil. Sjekk åpningstider, kanaler og responstid før du velger.",
    ],
    faq: [
      {
        question: "Hvor ofte oppdaterer dere prisene?",
        answer:
          "Manuelt, jevnlig. Datoen nederst i tabellen viser når prisene sist ble verifisert. Leverandørene kan endre priser uten varsel — verifiser alltid hos leverandøren før bestilling.",
      },
      {
        question: "Inkluderer prisene moms?",
        answer:
          "Ja. Alle priser i tabellen er oppgitt inklusive 25 % mva, slik at sammenligningen er direkte. Domeneshop oppgir prisene slik på sin prisliste fra før; de øvrige oppgir eksklusive mva, og vi har konvertert ved å multiplisere med 1,25.",
      },
      {
        question: "Hvorfor er Webhuset så mye billigere på .no enn Uniweb?",
        answer:
          "Webhuset er norsk eid og uavhengig, og bruker .no som et inngangsprodukt — du betaler 124 kr i fornyelse. Uniweb er del av Group.One-konsernet og priser .no høyere (300 kr). Konsernstruktur gir ikke automatisk billigere priser; ofte er det motsatt.",
      },
      {
        question: "Hvorfor er One.com så mye dyrere ved fornyelse?",
        answer:
          "One.com bruker lave førsteårspriser som lokketilbud (99 kr på .no, 59 kr på .com). Fra år to går prisen opp til markedsnivå (286 kr på .no, 349 kr på .com). Hvis du ikke flytter videre, betaler du den høye prisen i alle år etter det første.",
      },
      {
        question: "Er den billigste alltid best?",
        answer:
          "Nei. Sjekk fornyelsespris, kvalitet på DNS, sikkerhet (tofaktor, DNSSEC, registry-lock) og kundeservice. Lavpris med dårlig støtte koster mer ved problemer. For forretningskritiske domener er gode rutiner viktigere enn 50 kr i prisforskjell per år.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "no-domene",
    title: "Sammenlign .no domeneleverandører",
    description:
      "Hvilken registrar bør du velge for ditt .no domene? Sammenlign pris, sikkerhet og kontroll hos seks norske registrarer.",
    intro:
      "Registrarer for .no betaler samme avgift til Norid (~57 kr/år), men har ulike priser, brukerflater og tilleggstjenester. Her ser du forskjellene som faktisk betyr noe i daglig bruk — særlig sikkerhet og åpenhet. Tre uavhengige (Domeneshop, Webhuset, Simply.com) og tre Group.One-eide (ProISP, One.com, Uniweb).",
    methodology:
      "Vi vurderer pris, sikkerhet (tofaktor, registry-lock, DNSSEC), DNS-håndtering, brukervennlighet og åpenhet. Priser inkl. 25% mva, verifisert manuelt 5. mai 2026. Sikkerhetsfunksjoner basert på offentlig tilgjengelig informasjon — vi tester ikke selv kundeservice. Hvor sikkerhetsfunksjon ikke er entydig dokumentert, viser vi 'Sjekk hos leverandør'.",
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
          price: "199 kr",
          twofa: "Ja",
          lock: "Tilbys",
          dnssec: "Ja, gratis",
          support: "E-post, telefon på dagtid",
        },
        note: "Norsk eid og uavhengig. Sterk sikkerhetsprofil — registry-lock for kritiske domener.",
      },
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          price: "124 kr",
          twofa: "Ja",
          lock: "Sjekk hos leverandør",
          dnssec: "Ja",
          support: "E-post, telefon",
        },
        note: "Norsk eid og uavhengig. Bergen-basert. Lavest .no-pris i sammenligningen.",
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          price: "175 kr",
          twofa: "Ja",
          lock: "Sjekk hos leverandør",
          dnssec: "Ja",
          support: "E-post, chat (engelsk/dansk)",
        },
        note: "Dansk uavhengig (tidligere UnoEuro). Tilbyr .no-trustee for danske kunder uten norsk CVR.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          price: "275 kr",
          twofa: "Ja",
          lock: "Begrenset",
          dnssec: "Ja",
          support: "E-post, chat",
        },
        note: "Del av Group.One-konsernet. Teknisk profil med webhotell-fokus.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          price: "99 kr / 286 kr",
          twofa: "Ja",
          lock: "Begrenset",
          dnssec: "Ja",
          support: "Chat, telefon",
        },
        note: "Dansk hovedkontor, del av Group.One. Førsteårspris 99 kr, fornyelse 286 kr.",
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          price: "300 kr",
          twofa: "Ja",
          lock: "Sjekk hos leverandør",
          dnssec: "Ja",
          support: "E-post",
        },
        note: "Del av Group.One-konsernet. Høyest .no-pris av de seks.",
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
        note: "Norsk eid og uavhengig. Webhotell-pris ikke verifisert av oss.",
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
        note: "Dansk hovedkontor, del av Group.One. Webhotell-pris ikke verifisert av oss.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no/webhotell",
        values: {
          price: "fra 39 kr",
          storage: "10-100 GB",
          ssl: "Let's Encrypt gratis",
          backup: "Daglig",
          email: "Inkludert",
        },
        note: "Del av Group.One-konsernet. Webhotell-pris ikke verifisert av oss.",
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
        note: "Selger til kostpris uten påslag — krever flytting fra annen registrar først. .com-priser ikke verifisert av oss.",
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
        note: "Internasjonal, populær blant utviklere — gjennomsiktig prising. .com-priser ikke verifisert av oss.",
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
        note: "Internasjonal, billig, vanlig brukt blant utviklere. .com-priser ikke verifisert av oss.",
      },
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          first: "188 kr",
          renew: "188 kr",
          transfer: "188 kr",
          whois: "Gratis",
          dnssec: "Ja",
        },
        note: "Norsk eid og uavhengig. Lavest .com-pris av norske registrarer i sammenligningen.",
      },
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          first: "220 kr",
          renew: "220 kr",
          transfer: "220 kr",
          whois: "Gratis",
          dnssec: "Gratis",
        },
        note: "Norsk eid og uavhengig — ingen lokketilbud, fornyelse = førsteårspris. Volumrabatt fra 5+ domener.",
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          first: "250 kr",
          renew: "250 kr",
          transfer: "250 kr",
          whois: "Gratis",
          dnssec: "Ja",
        },
        note: "Dansk uavhengig (tidligere UnoEuro). Stabil pris uten lokketilbud.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          first: "336 kr",
          renew: "336 kr",
          transfer: "336 kr",
          whois: "Gratis",
          dnssec: "Ja",
        },
        note: "Del av Group.One-konsernet (sammen med Uniweb og One.com).",
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          first: "336 kr",
          renew: "336 kr",
          transfer: "336 kr",
          whois: "Gratis",
          dnssec: "Ja",
        },
        note: "Del av Group.One-konsernet. Identisk .com-pris med ProISP — bekrefter samme bakliggende infrastruktur.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          first: "59 kr",
          renew: "349 kr",
          transfer: "349 kr",
          whois: "Inkludert",
          dnssec: "Ja",
        },
        note: "Dansk hovedkontor, del av Group.One. Lavt lokketilbud — fornyelse er nesten 6× førsteårspris. Sjekk total over flere år.",
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
        note: "Aggressiv kryssalg — vær oppmerksom på påløpende tjenester ved utsjekk. .com-priser ikke verifisert av oss.",
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
        note: "Norsk eid og uavhengig — sterk sikkerhetsprofil med automatisk DNSSEC-håndtering.",
      },
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Sjekk hos leverandør",
          rollover: "Sjekk hos leverandør",
          algos: "Sjekk hos leverandør",
        },
        note: "Norsk eid og uavhengig. Bekreft DNSSEC-detaljer direkte med Webhuset for kritiske domener.",
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Ett klikk",
          rollover: "Automatisk",
          algos: "ECDSAP256SHA256",
        },
        note: "Dansk uavhengig — moderne DNSSEC-implementering.",
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
        note: "Del av Group.One. RSA-algoritme — fungerer, men gir større DNS-pakker enn ECDSA.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Manuell",
          rollover: "Manuell",
          algos: "RSASHA256",
        },
        note: "Del av Group.One. Manuell rullering er en sikkerhetsrisiko hvis du glemmer det.",
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          support: "Ja",
          price: "Gratis",
          ease: "Sjekk hos leverandør",
          rollover: "Sjekk hos leverandør",
          algos: "Sjekk hos leverandør",
        },
        note: "Del av Group.One. Bekreft DNSSEC-detaljer direkte for kritiske domener.",
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
        note: "Krever at Cloudflare brukes som DNS-leverandør (registrar kan være en annen). Industri-ledende implementering.",
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

  // ── Tillegg 2026-05-05: Sekskant-sammenligning av seks registrarer på 7 strategiske TLD-er ──
  {
    slug: "norske-registrarer-fokus",
    title: "Sammenligning av norske registrarer på 7 strategiske TLD-er",
    description:
      "Direkte prissammenligning av seks registrarer for norske kunder, fokusert på .no, nordiske TLD-er, .com, .io og .ai. Alle priser inkl. mva.",
    intro:
      "Vi har manuelt verifisert priser hos seks registrarer som retter seg mot norske kunder: tre uavhengige (Domeneshop, Webhuset, Simply.com) og tre Group.One-eide (Uniweb, One.com, ProISP). Alle priser i NOK inkludert 25% mva for direkte sammenlignbarhet. Førsteårspriser kan være lavere enn vist — disse er fornyingsprisene som er det som faktisk teller over tid.",
    methodology:
      "Priser er hentet direkte fra leverandørenes prislister og bestillingsskjema (verifisert 5. mai 2026). Tre leverandører (Domeneshop) oppgir inkl. mva — de andre er konvertert fra eks. mva ved 1.25x. ProISP bekreftet via handlekurv-skjermbilde. Vinneren per TLD er den med lavest fornyingspris.",
    columns: [
      { key: "no_renew", label: ".no fornying" },
      { key: "se_renew", label: ".se fornying" },
      { key: "dk_renew", label: ".dk fornying" },
      { key: "fi_renew", label: ".fi fornying" },
      { key: "com_renew", label: ".com fornying" },
      { key: "io_renew", label: ".io fornying" },
      { key: "ai_renew", label: ".ai fornying" },
    ],
    providers: [
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          no_renew: "199 kr",
          se_renew: "275 kr",
          dk_renew: "220 kr",
          fi_renew: "220 kr",
          com_renew: "220 kr",
          io_renew: "875 kr",
          ai_renew: "2750 kr",
        },
        note: "Norsk eid og uavhengig. Vinner på .fi. Volumrabatt fra 5+ domener.",
      },
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          no_renew: "124 kr",
          se_renew: "311 kr",
          dk_renew: "249 kr",
          fi_renew: "474 kr",
          com_renew: "188 kr",
          io_renew: "874 kr",
          ai_renew: "3749 kr",
        },
        note: "Norsk eid og uavhengig. Vinner på .no, .com og .io. Bergen-basert.",
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          no_renew: "300 kr",
          se_renew: "320 kr",
          dk_renew: "320 kr",
          fi_renew: "450 kr",
          com_renew: "336 kr",
          io_renew: "1036 kr",
          ai_renew: "1624 kr",
        },
        note: "Del av Group.One-konsernet (sammen med ProISP og One.com).",
      },
      {
        name: "One.com",
        href: "https://www.one.com/no",
        values: {
          no_renew: "286 kr",
          se_renew: "306 kr",
          dk_renew: "188 kr",
          fi_renew: "344 kr",
          com_renew: "349 kr",
          io_renew: "1012 kr",
          ai_renew: "2388 kr",
        },
        note: "Dansk hovedkontor, del av Group.One. Vinner på .dk.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          no_renew: "275 kr",
          se_renew: "320 kr",
          dk_renew: "320 kr",
          fi_renew: "249 kr",
          com_renew: "336 kr",
          io_renew: "974 kr",
          ai_renew: "1624 kr",
        },
        note: "Del av Group.One. Teknisk profil, samme .ai-pris som Uniweb.",
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          no_renew: "175 kr",
          se_renew: "251 kr",
          dk_renew: "192 kr",
          fi_renew: "283 kr",
          com_renew: "250 kr",
          io_renew: "1165 kr",
          ai_renew: "1835 kr",
        },
        note: "Dansk uavhengig (tidligere UnoEuro). Vinner på .se.",
      },
    ],
    importantNotes: [
      "Tre av seks (Uniweb, One.com, ProISP) er Group.One-konsern — bekreftet av identisk pris på .ai (1 624 kr) hos Uniweb og ProISP.",
      "Førsteårspriser er ofte langt lavere (Simply .se fra 6 kr, Webhuset .no fra 9 kr) — beregn alltid totalkostnad over 3-5 år.",
      "Domeneshop er den eneste med automatisk volumrabatt fra 5+ domener.",
      "For .ai er internasjonale registrarer som Porkbun ofte rimeligere enn alle seks i sammenligningen.",
    ],
    faq: [
      {
        question: "Hvilken registrar er rimeligst totalt?",
        answer:
          "Det avhenger av TLD-mix. Webhuset vinner på .no, .com og .io. Domeneshop vinner på .fi. Simply.com vinner på .se. One.com vinner på .dk. Uniweb og ProISP deler førsteplass på .ai. Beregn totalkostnad over 3-5 år for din spesifikke portefølje.",
      },
      {
        question: "Hvorfor har Uniweb og ProISP samme pris på .ai?",
        answer:
          "Begge er del av Group.One-konsernet. Identisk pris (1 624 kr inkl. mva) bekrefter samme bakliggende infrastruktur. Det betyr at hvis du fordeler domener mellom dem som risikospredning, oppnår du det ikke — du er fortsatt avhengig av samme selskap.",
      },
      {
        question: "Er disse prisene inkludert mva?",
        answer:
          "Ja, alle priser i tabellen er inkludert 25% mva. Domeneshop oppgir slik på sin prisliste. De andre fem oppgir eks. mva — vi har konvertert ved å multiplisere med 1.25 for direkte sammenligning. Ved kjøp som privatperson er prisen i tabellen det du faktisk betaler.",
      },
      {
        question: "Bør jeg flytte domenet hvis en annen registrar er billigere?",
        answer:
          "Sjelden lønnsomt for én eller to domener — flytteprosessen tar tid og noen registrarer krever fornyingsbetaling som del av flytting. For 10+ domener kan det gi reell besparelse, særlig hvis du flytter til en med volumrabatt eller bedre nordiske priser. Beregn besparelsen over 3 år før du bestemmer deg.",
      },
    ],
    updatedAt: "2026-05-05",
  },
];

export const findComparison = (slug: string) =>
  comparisons.find((c) => c.slug === slug);
