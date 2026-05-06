import type { Tool } from "@/lib/types";

/**
 * Verktøy (/verktoy/[slug]).
 *
 * Hver verktøy-side har:
 * - Tagline + editorialTitle (hero)
 * - description (meta, max 155 tegn)
 * - longDescription (forklaring)
 * - answerBox (40-70 ord, AEO-snippet)
 * - howToUse (steg-for-steg, HowTo-schema)
 * - resultExplained (hva resultatet betyr)
 * - commonErrors (vanlige feil)
 * - whenNeeded (når trenger du dette)
 * - faq (utvidet 6-10 spørsmål)
 * - relaterte verktøy/guider/begreper
 */
export const tools: Tool[] = [
  {
    slug: "domenesjekk",
    name: "Domenesjekk",
    description:
      "Sjekk om et domene er ledig på .no, .com, .io og 300+ andre toppdomener. Sanntids-oppslag mot registry og registrarer.",
    icon: "search",
    category: "domeneregistrering",
    status: "live",
    tagline: "Verktøy - Domenesjekk",
    editorialTitle: {
      lead: "Er navnet",
      emphasis: "ledig?",
      tail: "Sjekk her.",
    },
    longDescription:
      "Domenesjekk er det første verktøyet du bruker når du vurderer et nytt domenenavn. I løpet av sekunder ser du om navnet ditt er ledig på toppdomenene som betyr noe for deg - .no, .com, .io, .ai eller noe av de over 300 andre vi støtter. Sjekken kjører direkte mot registry og registrar-API-er, så svaret er ferskt og pålitelig - ikke en cache fra forrige uke.",
    answerBox:
      "En domenesjekk forteller deg om et domenenavn er ledig for registrering. Sjekken sender en forespørsel direkte til registry (for eksempel Norid for .no eller Verisign for .com) og returnerer status: ledig, registrert, reservert eller i karantene. Resultatet er sanntids - ingen cache. Sjekk alltid før du går videre til en registrar.",
    howToUse: [
      {
        title: "Skriv inn ønsket domenenavn",
        description:
          "Tast inn navnet du vurderer - uten www. og uten toppdomenet. For eksempel mittfirma, ikke www.mittfirma.no. Vi legger på toppdomener automatisk.",
      },
      {
        title: "Velg toppdomener",
        description:
          "Standard sjekker vi .no og .com, som er de viktigste for norske bedrifter. Du kan velge flere - som .io for tech, .shop for e-handel, eller .ai for AI-prosjekter.",
      },
      {
        title: "Få status i sanntid",
        description:
          "Sjekken returnerer på 1-3 sekunder. Grønt betyr ledig - du kan registrere det hos en registrar. Rødt betyr tatt - se hvem som eier det med WHOIS-oppslaget.",
      },
      {
        title: "Vurder alternativer",
        description:
          "Hvis førstevalget er tatt, foreslår vi varianter: andre toppdomener, korte alternativer, eller navn med samme rotord. Eller du kan endre navnet - det er ofte bedre enn å akseptere et dårligere domene.",
      },
      {
        title: "Registrer hos en registrar",
        description:
          "Når du har funnet et ledig navn, gå videre til en registrar. Sammenlign priser og tjenester - de varierer mer enn folk tror. Domenesjekk er gratis - registrering koster fra 99 kr.",
      },
    ],
    resultExplained: [
      {
        heading: "Ledig",
        body: "Domenet er ikke registrert og kan registreres hos en registrar. Vær rask - populære navn kan registreres samme dag. Vi anbefaler å registrere innen 24-48 timer hvis navnet er strategisk viktig.",
      },
      {
        heading: "Registrert",
        body: "Noen eier domenet allerede. Bruk WHOIS-oppslaget for å se hvem - du kan ofte kontakte eieren direkte hvis du vil kjøpe. Sjekk også fornyelsesdato i WHOIS - hvis det utløper snart og eieren ikke fornyer, kan domenet bli ledig igjen.",
      },
      {
        heading: "Reservert",
        body: "Norid eller registry har holdt navnet tilbake - typisk for offentlige institusjoner, politiske partier, eller kjente merkevarer. Du kan ikke registrere det selv. Hvis det handler om eget firmanavn, kontakt registry med dokumentasjon.",
      },
      {
        heading: "I karantene",
        body: "Domenet har utløpt nylig og er i karantene før det frigjøres. For .no varer karantenen typisk 30-90 dager. Etter karantenen blir det ledig - men også andre kan registrere det. Bruk en backorder-tjeneste hvis du vil prøve å fange det.",
      },
    ],
    commonErrors: [
      {
        error: "Ugyldig tegn",
        explanation:
          "Domenet inneholder tegn som ikke er tillatt. Tillatte tegn for .no er a-z, 0-9, bindestrek, og norske bokstaver (æ, ø, å). Mellomrom, æ-tegn på .com, eller emoji er ikke tillatt.",
      },
      {
        error: "For kort eller for langt",
        explanation:
          "Toppdomener har lengdebegrensninger. .no krever 2-63 tegn. Ett-tegns navn er reservert hos de fleste registries. Praktisk anbefaling: 4-15 tegn er sweet spot for merkevare.",
      },
      {
        error: "Bindestrek på feil sted",
        explanation:
          "Du kan ikke starte eller slutte navnet med bindestrek. To bindestreker etter hverandre på posisjon 3-4 (xn--) er reservert for IDN. mittfirma- eller -mittfirma er ikke gyldig.",
      },
      {
        error: "Toppdomenet finnes ikke",
        explanation:
          "Du har skrevet en TLD vi ikke støtter, eller en TLD som ikke eksisterer. Vi støtter alle aktive TLD-er i IANAs root-database (1 593 stykker per februar 2026).",
      },
    ],
    whenNeeded: [
      "Du vurderer et nytt firmanavn og vil sjekke at domenet er tilgjengelig før du investerer i merkevaren.",
      "Du planlegger en kampanje eller produktlansering som trenger eget domene.",
      "Du vil flytte til et bedre domenenavn enn det du har i dag.",
      "Du ekspanderer internasjonalt og må sjekke om navnet er ledig på .com, .eu eller andre TLD-er.",
      "Du vurderer å registrere defensive domener (vanlige feilstavinger, andre TLD-er) for å beskytte merkevaren.",
      "Du har fått en idé til et domeneinvesterings-kjøp og vil sjekke status raskt.",
    ],
    relatedTerms: ["tld", "registrar", "norid", "registrant"],
    relatedGuides: [
      "hvordan-velge-domenenavn",
      "hvordan-registrere-no-domene",
      "krav-til-no-domene",
    ],
    relatedTools: ["whois-oppslag", "sammenlign-domenepriser"],
    faq: [
      {
        question: "Er domenesjekken oppdatert i sanntid?",
        answer:
          "Ja. Vi gjør oppslag direkte mot registry-API (Norid for .no, Verisign for .com) og registrar-systemer for andre TLD-er. Resultatet du får er status fra det øyeblikket - ikke en cache fra timer eller dager tilbake. For .no er forsinkelsen typisk under ett sekund.",
      },
      {
        question: "Hvorfor er noen domener markert som tatt selv om ingen bruker dem?",
        answer:
          "Mange registrerte domener er parkert - eieren har registrert dem uten å bruke dem aktivt. Det kan være domeneinvestorer, defensive registreringer fra bedrifter, eller bare gamle domener ingen har slettet. Bruk WHOIS-oppslaget for å se hvem som eier det og når det utløper.",
      },
      {
        question: "Hva er forskjellen på 'ledig' og 'tilgjengelig'?",
        answer:
          "'Ledig' betyr at ingen har registrert domenet og du kan ta det hos en registrar. 'Tilgjengelig for kjøp' betyr at noen eier det, men har lagt det ut for salg på en markedsplass som Sedo eller Dan.com - ofte til premium-pris. Vår sjekk skiller mellom disse.",
      },
      {
        question: "Kan jeg sjekke flere domener samtidig?",
        answer:
          "Ja, du kan sjekke samme rot mot flere TLD-er samtidig (mittfirma.no, mittfirma.com, mittfirma.io). For massesjekk av helt forskjellige navn må du gjøre flere sjekker. Profesjonelle med mange domener bruker ofte registrarens egne bulk-verktøy.",
      },
      {
        question: "Hvor lenge er resultatet gyldig?",
        answer:
          "Sjekken viser status akkurat nå. Et 'ledig' domene kan registreres av andre om noen sekunder. For viktige navn anbefaler vi å registrere så snart du har gjort sjekken - ikke vente til neste uke. Populære navn forsvinner raskt.",
      },
      {
        question: "Hvorfor støttes ikke alle toppdomener?",
        answer:
          "Vi støtter de TLD-ene som har offentlige registry-API-er eller pålitelige WHOIS-tjenester. Noen små eller spesialiserte TLD-er har lukkede systemer - der må du sjekke direkte hos registry. Vi dekker likevel over 300 TLD-er, inkludert alle som er relevante for norske bedrifter.",
      },
      {
        question: "Hva gjør jeg hvis et domene jeg vil ha er tatt?",
        answer:
          "Tre alternativer: (1) Bruk WHOIS for å finne eieren og send et tilbud direkte. (2) Sjekk om det utløper snart - ikke alle fornyer. (3) Vurder et alternativ - andre TLD, kortere navn, eller helt nytt navn. Det fjerde alternativet (UDRP/varemerkesak) er aktuelt bare hvis du har varemerkerett til navnet.",
      },
      {
        question: "Koster domenesjekk noe?",
        answer:
          "Nei, sjekken er gratis. Det er kun selve registreringen som koster - typisk 99-300 kr per år for de vanligste TLD-ene. Sammenlign priser hos flere registrarer før du registrerer - prisene varierer betydelig.",
      },
    ],
  },

  {
    slug: "whois-oppslag",
    name: "WHOIS-oppslag",
    description:
      "Slå opp eierinformasjon, registrar, registrerings- og fornyelsesdato på et hvilket som helst registrert domene.",
    icon: "info",
    category: "whois",
    status: "live",
    tagline: "Verktøy - WHOIS",
    editorialTitle: {
      lead: "Hvem eier",
      emphasis: "domenet?",
    },
    longDescription:
      "WHOIS-oppslaget er det offentlige registeret over domeneeiere. Hver gang noen registrerer et domene, lagres opplysninger om eieren i WHOIS-databasen - hvem, når, og hos hvilken registrar. Det er et verktøy for åpenhet, juridisk oppfølging, sikkerhet og daglig administrasjon. Bruk det for å sjekke eget domene, vurdere en eier før kjøp, eller løse tekniske problemer med navneservere.",
    answerBox:
      "WHOIS er et offentlig oppslagssystem som viser hvem som eier et domene, når det ble registrert, hvilken registrar som administrerer det, og når det utløper. Personvernregler skjuler ofte personlige opplysninger for privatpersoner, men organisasjoner og bedrifter er typisk synlige med navn, adresse og kontaktinformasjon.",
    howToUse: [
      {
        title: "Skriv inn domenenavn",
        description:
          "Tast inn det fulle domenet du vil sjekke - inkludert toppdomenet (mittfirma.no eller eksempel.com). WHOIS fungerer kun på registrerte domener; ledige domener gir ikke noe svar.",
      },
      {
        title: "Få fullt registreringsbilde",
        description:
          "WHOIS returnerer registrant (eier), registrar (leverandør), opprettelsesdato, fornyelsesdato, og navneservere. For .no-domener viser det også organisasjonsnummer hvis eier er en juridisk person.",
      },
      {
        title: "Tolke resultatet",
        description:
          "Sjekk om eier-feltet viser deg eller ditt firma - ikke leverandøren. Verifiser at fornyelsesdato gir deg nok tid før neste betaling. Bruk navneservere til å forstå hvem som drifter DNS.",
      },
      {
        title: "Bruk informasjonen videre",
        description:
          "WHOIS er springbrettet for andre handlinger: kontakt en eier for kjøp, varsle registrar om problemer, eller bruke informasjonen i juridisk sak. For tekniske problemer, kombiner med DNS-sjekk.",
      },
    ],
    resultExplained: [
      {
        heading: "Registrant (eier)",
        body: "Den juridiske eieren av domenet. Skal alltid være deg eller ditt firma - ikke leverandøren. Hvis det er feil, kontakt registraren umiddelbart for å få det korrigert. Et domene registrert i feil navn kan bli vanskelig å flytte senere.",
      },
      {
        heading: "Registrar",
        body: "Selskapet som har registrert domenet på vegne av eieren. For .no er registraren norsk-akkreditert (Domeneshop, Webhuset, Gigahost m.fl.). Registraren er kontaktpunktet ditt for fornyelse, flytting, og DNS-endringer.",
      },
      {
        heading: "Opprettelsesdato",
        body: "Datoen domenet ble registrert første gang. Eldre domener har ofte mer SEO-autoritet - men husk at autoritet bygges opp gjennom innhold og lenker, ikke alder alene. Et domene som har vært parkert i 10 år har lite autoritet.",
      },
      {
        heading: "Fornyelsesdato",
        body: "Datoen registreringen utløper. For .no-domener må det fornyes minst 30 dager før denne datoen for å unngå karantene. Sett kalenderpåminnelse i god tid - en glemt fornyelse er den enkleste måten å miste et domene på.",
      },
      {
        heading: "Navneservere",
        body: "Serverne som autoritativt svarer på DNS-spørringer for domenet. Forteller deg hvem som drifter DNS - ofte registraren, men kan også være en spesialisert leverandør som Cloudflare eller AWS Route 53.",
      },
      {
        heading: "DNSSEC-status",
        body: "Om domenet bruker DNSSEC eller ikke. Aktiv DNSSEC vises som DS-record. Hvis domenet ditt er forretningskritisk og DNSSEC ikke er aktivt, vurder å aktivere - det beskytter mot DNS-spoofing.",
      },
    ],
    commonErrors: [
      {
        error: "Ingen WHOIS-data tilgjengelig",
        explanation:
          "Domenet er enten ikke registrert (sjekk med domenesjekk), eller registry har midlertidig sperret WHOIS-oppslag. Noen registries setter rate-limit på offentlige oppslag.",
      },
      {
        error: "Eier-felt skjult / 'Redacted for privacy'",
        explanation:
          "GDPR og personvernregler gjør at registrar skjuler personlige opplysninger for privatpersoner. Organisasjoner er typisk synlige. For å kontakte en privat eier, bruk registrarens egen kontaktformidling.",
      },
      {
        error: "Utdatert informasjon",
        explanation:
          "WHOIS oppdateres når eier endrer det hos sin registrar - ikke automatisk. Hvis du nettopp har endret eier eller flyttet, kan WHOIS vise gammel info i 24-48 timer mens databasene synkroniseres.",
      },
      {
        error: "Domenet eksisterer, men WHOIS viser tomt",
        explanation:
          "Vanlig for nye gTLD-er (.app, .dev) der noen registrar-er bruker tynn WHOIS - kun grunnleggende info hos registry, full info kun hos registrar. Sjekk hos registrarens egen WHOIS hvis det er kritisk.",
      },
    ],
    whenNeeded: [
      "Du vil verifisere at du selv står som registrant for ditt eget domene - en grunnleggende sikkerhetssjekk.",
      "Du vurderer å kjøpe et domene fra eksisterende eier og må finne kontaktinformasjon.",
      "Du etterforsker svindel, phishing, eller varemerkebrudd og trenger å vite hvem som står bak.",
      "Du flytter et domene og må verifisere status både før og etter flyttingen.",
      "Du opplever tekniske problemer (e-post, nettside) og må sjekke hvilke navneservere som er konfigurert.",
      "Du vurderer å registrere et utløpt domene og må sjekke når det blir ledig.",
    ],
    relatedTerms: ["whois", "registrar", "registrant", "navneserver"],
    relatedGuides: [
      "hvordan-flytte-domene",
      "hvordan-sikre-domenet",
      "auth-kode-og-flytting",
    ],
    relatedTools: ["domenesjekk", "dns-sjekk", "navneserver-sjekk"],
    faq: [
      {
        question: "Er WHOIS-oppslag offentlig tilgjengelig?",
        answer:
          "I stor grad ja, men personvernregler som GDPR gjør at personlige opplysninger til privatpersoner ofte er skjult. Organisasjoner er som regel synlige med firmanavn og kontaktdetaljer. Norid har strengere regler enn ICANN-akkrediterte registrarer.",
      },
      {
        question: "Kan jeg skjule mine WHOIS-data?",
        answer:
          "For privatpersoner er mange opplysninger skjult automatisk hos de fleste seriøse registrarer. Bedrifter kan i noen tilfeller bruke en personverntjeneste, men ikke for .no - der er reglene strengere. Norid krever at registrant er identifisert med organisasjonsnummer.",
      },
      {
        question: "Hva betyr 'Redacted for privacy'?",
        answer:
          "At opplysningene er anonymisert i den offentlige WHOIS-visningen, ofte på grunn av personvernregler. For å kontakte eieren må du bruke registrarens egen formidlingstjeneste - de sender meldingen videre uten å oppgi e-post.",
      },
      {
        question: "Hvor ofte oppdateres WHOIS?",
        answer:
          "I sanntid når eier endrer info hos sin registrar. Men det kan ta 24-48 timer før endringer propagerer til alle WHOIS-tjenester globalt. Hvis du nettopp har gjort en endring og ikke ser den ennå, vent et døgn før du blir bekymret.",
      },
      {
        question: "Kan jeg se historikk over hvem som har eid domenet?",
        answer:
          "WHOIS viser kun nåværende registrering. For historisk eierskap finnes spesialiserte tjenester som DomainTools, WhoisHistory og Wayback Machine - noen er gratis, andre koster. Nyttig før kjøp av brukt domene.",
      },
      {
        question: "Hvorfor viser WHOIS leverandøren som eier i stedet for meg?",
        answer:
          "Det er en alvorlig feil - leverandøren har registrert domenet i sitt eget navn istedenfor ditt. Kontakt dem umiddelbart og krev korrigering. Hvis ikke korrigert, kan du miste domenet hvis leverandøren går konkurs eller du bytter leverandør.",
      },
      {
        question: "Hva er forskjellen på 'thick' og 'thin' WHOIS?",
        answer:
          "Thick WHOIS lagrer all informasjon hos registry. Thin WHOIS lagrer kun grunnleggende info hos registry, og full info kun hos registraren. .com bruker thin (du må gå til registrarens egen WHOIS for full info), .no bruker thick.",
      },
      {
        question: "Kan jeg slå opp utløpte domener?",
        answer:
          "Ja, så lenge de er i karantene-perioden vises de fortsatt med 'pending delete' eller lignende status. Etter at de er fullt slettet, returnerer WHOIS at domenet er ledig - og du kan registrere det.",
      },
    ],
  },

  {
    slug: "dns-sjekk",
    name: "DNS-sjekk",
    description:
      "Test DNS-oppsettet ditt for A, MX, TXT og DNSSEC. Verifiser at domenet peker riktig og finn vanlige feil før de skaper problemer.",
    icon: "network",
    category: "dns",
    status: "live",
    tagline: "Verktøy - DNS-sjekk",
    editorialTitle: {
      lead: "Hva sier",
      emphasis: "DNS-en din?",
    },
    longDescription:
      "DNS-sjekken er ditt røntgenbilde av domenets tekniske oppsett. Vi sender oppslag mot flere globale resolvere samtidig og viser deg nøyaktig hvilke svar de returnerer. Inkonsistente svar betyr propageringsproblemer. Manglende DNSSEC betyr sårbarhet. Feil MX betyr e-post som ikke kommer frem. Med ett klikk får du oversikt over A, AAAA, CNAME, MX, TXT og NS-poster, pluss DNSSEC-status.",
    answerBox:
      "DNS-sjekk verifiserer at domenets DNS-oppsett er korrekt og konsistent globalt. Verktøyet sender oppslag mot flere resolvere og rapporterer A-pekere (nettside), AAAA (IPv6), MX (e-post), TXT (verifisering, SPF, DKIM, DMARC), NS (navneservere) og DNSSEC-status. Bruk det før produksjon, etter endringer, og når noe slutter å virke.",
    howToUse: [
      {
        title: "Skriv inn domenet",
        description:
          "Tast inn domenet du vil sjekke - rotnavnet uten www. eller subdomene. For å sjekke et subdomene (mail.firma.no), skriv det fullt ut.",
      },
      {
        title: "Velg hvilke poster å sjekke",
        description:
          "Standard sjekker vi A, MX, TXT og DNSSEC. Du kan velge spesifikke posttyper - AAAA for IPv6, CNAME for alias, NS for navneservere - hvis du leter etter noe konkret.",
      },
      {
        title: "Les resultatet",
        description:
          "For hver posttype viser vi verdien fra flere globale resolvere. Konsistente svar betyr at DNS-oppsettet propagerer riktig. Inkonsistente svar tyder på at endringer fortsatt sprer seg eller at TTL er feil satt.",
      },
      {
        title: "Verifiser DNSSEC",
        description:
          "DNSSEC-statusen viser om domenet er signert og om signaturen er gyldig. Aktiv DNSSEC = grønt. Inaktiv = ingenting (kanskje OK, kanskje ikke). Brutt DNSSEC = rødt og krever umiddelbar handling.",
      },
      {
        title: "Sammenlign mot forventet",
        description:
          "Sjekk at A-pekeren peker mot riktig server-IP. At MX-pekerne stemmer med e-postleverandøren. At SPF, DKIM og DMARC er satt opp. At TTL ikke er for lav (gir tregere svar) eller for høy (gjør endringer trege).",
      },
    ],
    resultExplained: [
      {
        heading: "A-peker (nettside)",
        body: "IPv4-adressen som domenet peker mot - serveren der nettsiden ligger. Skal være konsistent på tvers av resolvere. Hvis du nettopp har byttet hosting og noen resolvere viser gammel IP, vent på TTL-utløp før du får panikk.",
      },
      {
        heading: "AAAA-peker (IPv6)",
        body: "IPv6-adressen, hvis serveren støtter det. Anbefalt for moderne nettsider, men ikke kritisk for små sider. Mangler kun A-peker (ikke AAAA), fungerer fortsatt - kunden får IPv4 over IPv6 hvis tilgjengelig.",
      },
      {
        heading: "MX-peker (e-post)",
        body: "Forteller hvor e-post til ditt domene skal leveres. Verdiene skal stemme med e-postleverandøren - Microsoft 365 har sine MX-verdier, Google Workspace har andre. Feil MX = e-post forsvinner.",
      },
      {
        heading: "TXT-poster (verifisering, sikkerhet)",
        body: "Brukes til SPF, DKIM, DMARC, og verifisering hos tjenester som Google Search Console. Sjekk at SPF-posten er korrekt, at DMARC ikke er satt for strengt, og at det bare er én SPF-post per domene.",
      },
      {
        heading: "NS-poster (navneservere)",
        body: "De autoritative navneserverne for domenet - hvor selve DNS-konfigurasjonen ligger. Skal stemme med det som er konfigurert hos registrar. Mismatch betyr at endringer ikke når frem.",
      },
      {
        heading: "DNSSEC",
        body: "Kryptografisk signering av DNS-svar. Aktiv: domenet er beskyttet mot DNS-spoofing. Inaktiv: domenet er sårbart, men fungerer normalt. Brutt: signaturen er ugyldig - dette tar domenet ned for resolvere som validerer.",
      },
    ],
    commonErrors: [
      {
        error: "Inkonsistente svar mellom resolvere",
        explanation:
          "Noen resolvere viser ny verdi, andre gammel. Skyldes at endringer fortsatt propagerer. Vent til TTL utløper - kan ta fra minutter til 24 timer. Hvis det fortsetter etter 48 timer, har du sannsynligvis forskjellige verdier hos flere navneservere.",
      },
      {
        error: "MX-peker mangler eller er feil",
        explanation:
          "E-post kommer ikke frem. Sjekk at MX-pekerne stemmer eksakt med leverandørens dokumentasjon. Vanlig feil: gammel MX-peker er ikke slettet, så e-post går til feil sted. Slett alle MX først, legg til de nye.",
      },
      {
        error: "Mer enn én SPF-post",
        explanation:
          "SPF tillater kun én post per domene. Hvis du ser to TXT-poster som starter med v=spf1, slå dem sammen til én. Mange resolvere vil avvise begge hvis det er to - som gjør at e-post fra ditt domene markeres som spam.",
      },
      {
        error: "DNSSEC validering feiler",
        explanation:
          "Domenet er signert, men signaturen er ugyldig. Vanligst etter migrering der DS-record hos registrar ikke matcher DNSKEY hos navneserver. Krever umiddelbar handling - domenet er utilgjengelig for DNSSEC-validerende resolvere.",
      },
      {
        error: "TTL for høy eller for lav",
        explanation:
          "For høy (over 86400 sek = 1 dag) gjør endringer trege. For lav (under 300 sek) gir mye DNS-trafikk og treghet. Optimal verdi avhenger av hvor ofte du forventer endringer - 3600 (1 time) er sweet spot.",
      },
      {
        error: "CNAME på rot-domenet",
        explanation:
          "DNS-spesifikasjonen tillater ikke CNAME på apex (rot-domenet) sammen med andre poster. Hvis du har firma.no som CNAME, fjern den og bruk A-peker istedenfor. Eller bruk leverandørens ALIAS/ANAME-løsning.",
      },
    ],
    whenNeeded: [
      "Du har nettopp gjort endringer i DNS og vil verifisere at de propagerer korrekt globalt.",
      "E-post fra ditt domene havner i spam, eller du sender ikke ut i det hele tatt - sjekk SPF, DKIM og DMARC.",
      "Nettsiden din er nede, og du må finne ut om problemet er DNS, server eller DNSSEC-relatert.",
      "Du flytter til ny hostingleverandør og må verifisere at DNS peker mot den nye serveren.",
      "Du aktiverer DNSSEC og må bekrefte at signering fungerer end-to-end.",
      "Du gjennomfører rutinemessig sikkerhetsrevisjon av domenets oppsett.",
    ],
    relatedTerms: ["dns", "a-peker", "mx-peker", "dnssec", "navneserver", "ttl"],
    relatedGuides: [
      "hvordan-sette-opp-dns",
      "hva-er-dns-poster",
      "spf-dkim-dmarc-forklart",
      "dnssec-i-praksis",
    ],
    relatedTools: ["navneserver-sjekk", "whois-oppslag"],
    faq: [
      {
        question: "Hvor lang tid tar DNS-endringer å propagere?",
        answer:
          "Avhenger av TTL. Med TTL på 300 sekunder vil endringen som regel være fullt synlig globalt innen 10-15 minutter. Høy TTL (24 timer) kan bety opp til et døgn. Senk TTL i god tid før planlagte endringer for raskere propagering.",
      },
      {
        question: "Hva betyr det at resolverene returnerer forskjellige svar?",
        answer:
          "At endringer fortsatt sprer seg, eller at navneservere har ulike verdier. Det første går over av seg selv ved TTL-utløp. Det andre er en konfigurasjonsfeil hvor du har inkonsistens mellom flere autoritative servere - må fikses manuelt.",
      },
      {
        question: "Hvorfor er DNSSEC viktig?",
        answer:
          "DNSSEC beskytter mot DNS-spoofing der en angriper kan rute brukere til en falsk server. Uten DNSSEC kan resolvere ikke verifisere at svaret faktisk kommer fra rettmessig eier. For forretningskritiske domener (banker, e-handel, autentisering) er DNSSEC praktisk talt obligatorisk.",
      },
      {
        question: "Hvilke globale resolvere bruker dere?",
        answer:
          "Vi sjekker mot Google DNS (8.8.8.8), Cloudflare (1.1.1.1), Quad9 (9.9.9.9), OpenDNS, og lokale norske resolvere. Det gir en global indikasjon - hvis alle returnerer samme verdi, er propageringen ferdig.",
      },
      {
        question: "Kan jeg sjekke et subdomene?",
        answer:
          "Ja. Skriv inn fullt navn (mail.firma.no, blog.firma.no) og verktøyet sjekker DNS for det subdomenet. Subdomener kan ha helt andre poster enn rot-domenet - typisk CNAME til en tjeneste, eller egne A-pekere.",
      },
      {
        question: "Hva skal SPF-posten min inneholde?",
        answer:
          "Avhenger av hvilke tjenester som sender e-post fra ditt domene. Typisk: v=spf1 include:_spf.google.com ~all (for Google Workspace) eller v=spf1 include:spf.protection.outlook.com -all (for Microsoft 365). Inkluder alle godkjente sendere, og avslutt med ~all (softfail) eller -all (hardfail).",
      },
      {
        question: "Trenger alle domener DNSSEC?",
        answer:
          "For kritiske tjenester definitivt ja. For personlige sider er det anbefalt, men ikke kritisk hvis du ellers bruker HTTPS overalt. Norid (.no) støtter DNSSEC fra 2014. De fleste seriøse registrarer aktiverer det med ett klikk.",
      },
      {
        question: "Hva hvis noen TXT-poster mangler?",
        answer:
          "Avhengig av hvilke. SPF og DMARC er kritiske for e-post. Verifisering for tjenester (Google Search Console, Microsoft 365) trengs kun for de tjenestene. Andre TXT-er er valgfrie. Ikke alle domener trenger alle posttyper.",
      },
    ],
  },

  {
    slug: "navneserver-sjekk",
    name: "Navneserver-sjekk",
    description:
      "Sjekk hvilke navneservere domenet bruker, om de svarer korrekt, og om de er konsistente på tvers av globale resolvere.",
    icon: "server",
    category: "dns",
    status: "live",
    tagline: "Verktøy - Navneservere",
    editorialTitle: {
      lead: "Hvor ligger",
      emphasis: "DNS-en?",
    },
    longDescription:
      "Navneservere er hjernene bak DNS - serverne som autoritativt svarer på spørsmål om ditt domene. Riktige navneservere som svarer raskt og konsistent er fundamentet for at nettside, e-post og alt annet på domenet fungerer. Verktøyet viser hvilke navneservere som er konfigurert hos registrar, om de stemmer med det som faktisk svarer, og om alle reagerer på spørringer.",
    answerBox:
      "Navneserver-sjekk viser hvilke autoritative navneservere som er konfigurert for et domene, og verifiserer at de svarer korrekt. Inkonsistens mellom det registry forteller og det som faktisk svarer er en vanlig årsak til DNS-problemer. Sjekken hjelper deg å verifisere oppsett før migrering, etter flytting, og som rutinemessig overvåkning.",
    howToUse: [
      {
        title: "Skriv inn domenenavnet",
        description:
          "Tast inn domenet uten www eller subdomene. Verktøyet henter NS-pekerne fra registry og verifiserer at de fysiske serverne svarer.",
      },
      {
        title: "Sammenlign konfigurert vs. svarende",
        description:
          "Vi viser navneserverne registry har lagret (det som er offisielt), og navneserverne som faktisk svarer på DNS-spørringer. Mismatch betyr noe er galt.",
      },
      {
        title: "Sjekk responstid",
        description:
          "Hver navneserver bør svare innen 100-300 ms. Tregere enn 1 sekund er et problem. Vi måler responstid fra flere geografiske lokasjoner for å gi et globalt bilde.",
      },
      {
        title: "Verifiser redundans",
        description:
          "Du bør ha minimum 2 navneservere, gjerne 3-4, og helst i forskjellige geografiske lokasjoner og hos forskjellige operatører. Ingen enkelt-navneserver er en kritisk svikt.",
      },
    ],
    resultExplained: [
      {
        heading: "Konfigurert hos registry",
        body: "Navneserverne som registry har registrert for domenet. Dette er det offisielle - utgangspunktet for all DNS-trafikk. Endres her må gjøres hos registrar.",
      },
      {
        heading: "Faktisk svarende",
        body: "Navneserverne som responsererer på spørringer akkurat nå. Skal stemme nøyaktig med det som er konfigurert. Hvis ikke - enten er endringer i ferd med å propagere, eller du har en feil i konfigurasjonen.",
      },
      {
        heading: "Responstid",
        body: "Hvor lang tid det tar fra spørring sendes til svar mottas. Under 100 ms er bra, 100-500 ms er akseptabelt, over 1 sekund er problematisk. Trege navneservere gjør hele nettsiden treg å laste.",
      },
      {
        heading: "Glue records",
        body: "Hvis navneserverne ligger under samme domene (ns1.firma.no, ns2.firma.no), trenger registry en A-peker (glue) for å unngå sirkulær avhengighet. Mangler glue, fungerer ikke domenet selv om alt annet er riktig.",
      },
    ],
    commonErrors: [
      {
        error: "Mismatch mellom konfigurert og svarende",
        explanation:
          "Det vanligste etter en flytting. Registry har gamle NS, men selve navneserverne svarer fra ny leverandør - eller motsatt. Sjekk hos registrar at NS er oppdatert, og vent på TTL-utløp.",
      },
      {
        error: "En eller flere navneservere svarer ikke",
        explanation:
          "Server er nede, eller IP-adressen er feil. Hvis bare en av flere navneservere er nede, fungerer DNS fortsatt - men du har redusert redundans. Hvis alle er nede, er domenet utilgjengelig.",
      },
      {
        error: "Mangler glue records",
        explanation:
          "Når navneservere ligger under samme domene de skal svare for. Uten glue må resolveren først finne ut hvilken IP ns1.firma.no har, men kan bare gjøre det ved å spørre ns1.firma.no - som ikke fungerer.",
      },
      {
        error: "Bare én navneserver konfigurert",
        explanation:
          "Mot gode praksiser. Hvis den ene navneserveren er nede, er hele domenet ute. Konfigurer minst to navneservere, helst hos ulike operatører for ekte redundans.",
      },
    ],
    whenNeeded: [
      "Du har nettopp byttet DNS-leverandør og må verifisere at navneserverne er oppdatert hos registry.",
      "Nettsiden din er treg eller utilgjengelig fra spesifikke geografiske områder.",
      "Du gjennomfører revisjon av domenets tekniske oppsett som del av sikkerhetsarbeid.",
      "E-post slutter å virke, og du må sjekke om navneservere har endret seg uten varsel.",
      "Du planlegger en migrering og må forstå nåværende DNS-arkitektur før du flytter.",
      "Du opplever intermittente DNS-feil som tyder på en navneserver som ikke svarer konsistent.",
    ],
    relatedTerms: ["navneserver", "dns", "ttl"],
    relatedGuides: [
      "hvordan-sette-opp-dns",
      "hvordan-flytte-domene",
      "hva-er-dns-poster",
    ],
    relatedTools: ["dns-sjekk", "whois-oppslag"],
    faq: [
      {
        question: "Hvor mange navneservere bør jeg ha?",
        answer:
          "Minimum 2, anbefalt 3-4, helst hos forskjellige operatører. Redundans beskytter mot at en operatør får problemer. Stor virksomhet bruker ofte 4 navneservere fordelt på to leverandører i forskjellige geografiske områder.",
      },
      {
        question: "Hva er forskjellen på rekursive og autoritative navneservere?",
        answer:
          "Rekursive navneservere (som 8.8.8.8) brukes av sluttbrukere - de jobber for å finne svar på vegne av brukere. Autoritative navneservere holder svarene for et bestemt domene. Verktøyet vårt sjekker autoritative navneservere - de som autoritativt svarer for ditt domene.",
      },
      {
        question: "Kan jeg ha navneservere hos forskjellige leverandører?",
        answer:
          "Ja, og det er anbefalt for kritiske domener. Du kan for eksempel ha to navneservere hos AWS Route 53 og to hos Cloudflare. Mismatch må unngås - alle skal svare med samme DNS-poster.",
      },
      {
        question: "Hvor raskt bør en navneserver svare?",
        answer:
          "Under 100 ms er ideelt. 100-300 ms er akseptabelt. Over 500 ms gir merkbar treghet på nettsiden, fordi DNS-oppslag må gjøres før innholdet kan lastes. AWS Route 53 og Cloudflare har global infrastruktur som gir lav latency.",
      },
      {
        question: "Hva er glue records og hvorfor er de viktige?",
        answer:
          "Glue er en A-peker hos registry som forteller hvor en navneserver befinner seg, når navneserveren ligger under samme domene som den skal svare for. Eksempel: ns1.firma.no skal svare for firma.no - registry må vite IP-adressen til ns1.firma.no uten å måtte spørre den.",
      },
      {
        question: "Hvor lenge tar det før navneservere endrer seg?",
        answer:
          "Endringer hos registry forplanter seg innen 1-48 timer avhengig av TLD og TTL. .no propagerer typisk på under 4 timer. .com kan ta opp til 24 timer. Bruk TTL-justering før migrering for raskere propagering.",
      },
      {
        question: "Kan jeg drifte navneservere selv?",
        answer:
          "Ja, men det er kompleks operasjon. Du trenger minimum 2 servere på forskjellige nettverk, riktig BIND/PowerDNS-konfigurasjon, monitoring, og kunnskap om DNSSEC. For de fleste er det bedre å bruke en spesialisert leverandør (AWS, Cloudflare, registrar).",
      },
    ],
  },

  {
    slug: "domenekalkulator",
    name: "Domenekalkulator",
    description:
      "Beregn totalkostnaden for domener over tid på tvers av leverandører. Inkluderer registrering, fornyelse og tilleggstjenester.",
    icon: "calculator",
    category: "domeneregistrering",
    status: "coming-soon",
    tagline: "Verktøy - Kalkulator",
    editorialTitle: {
      lead: "Hva koster",
      emphasis: "domenet ditt",
      tail: "egentlig?",
    },
    longDescription:
      "Domenekalkulatoren viser hva domenet ditt faktisk koster over tid - ikke bare første år, men reelle 3-, 5- og 10-årskostnader. Mange leverandører bruker lokketilbud (lavt første år, høy fornyelse), så hva som ser billigst ut i dag er ofte det dyreste over tid. Med ekte priser fra åtte norske registrarer hjelper kalkulatoren deg å se sannheten - og ta informerte valg.",
    answerBox:
      "Domenekalkulator beregner total kostnad for et domene over tid hos ulike leverandører. Du legger inn TLD, antall år, og om du trenger tilleggstjenester (DNSSEC, e-post, SSL). Kalkulatoren viser oppsummert totalkostnad per leverandør og synliggjør lokketilbud der første-årspris ikke matcher fornyelsespris. Bruk den for å unngå overraskelser.",
    howToUse: [
      {
        title: "Velg toppdomene",
        description:
          "Start med å velge TLD - .no, .com, .io, .ai osv. Prisene varierer mye mellom TLD-er. .no er typisk 100-300 kr/år, .ai kan være 1500-3000 kr/år.",
      },
      {
        title: "Sett tidshorisont",
        description:
          "Velg hvor mange år du vil beregne. 3-5 år er typisk for å se reell kostnad. Lokketilbud blir tydelige først når du sammenligner totalkostnad over flere år.",
      },
      {
        title: "Inkluder tilleggstjenester",
        description:
          "Marker hvilke tjenester du trenger - DNSSEC, e-postpakke, SSL, registry-lock. Noen leverandører har det inkludert, andre tar ekstra. Den 'billige' kan plutselig bli dyrest.",
      },
      {
        title: "Se sammenligning",
        description:
          "Resultatet viser total kostnad per leverandør, sortert fra billigst til dyrest. Vi merker lokketilbud, viser fornyelsespris, og kalkulerer prosent-besparelse mot dyreste alternativ.",
      },
    ],
    resultExplained: [
      {
        heading: "Total kostnad",
        body: "Summen av første-årspris pluss fornyelsespris i etterfølgende år, alt inklusive moms. Dette er det du faktisk betaler over tidsperioden du har valgt.",
      },
      {
        heading: "Første år vs. fornyelse",
        body: "Vi skiller tydelig mellom hva du betaler for første år og hva fornyelsen koster. Stor forskjell = lokketilbud. Liten forskjell = ærlig prising.",
      },
      {
        heading: "Per år gjennomsnitt",
        body: "Total kostnad delt på antall år. Gir et fair sammenligningstall som tar høyde for både første-års-rabatt og fornyelsespris.",
      },
      {
        heading: "Sparing mot dyreste",
        body: "Hvor mye du sparer på å velge billigste leverandør sammenlignet med dyreste. For et domene over 5 år kan dette være 1000-3000 kr.",
      },
    ],
    commonErrors: [
      {
        error: "Glemte tilleggstjenester",
        explanation:
          "Mange leverandører ser billige ut på domenepris, men tar ekstra for DNSSEC, e-post eller SSL. Inkluder alt du faktisk trenger for å få korrekt sammenligning.",
      },
      {
        error: "Bare første-årspris",
        explanation:
          "Vanligste fellen. Et domene som koster 9 kr første år men 300 kr i fornyelse er dyrere over 3 år enn et som koster 100 kr begge år. Tenk minimum 3 år frem.",
      },
      {
        error: "Volumrabatt ignorert",
        explanation:
          "Hvis du har 5+ domener, gir Domeneshop automatisk volumrabatt fra 10-30% lavere fornyelse. Sett antall domener i kalkulatoren for å få korrekt totalpris for portefølje.",
      },
    ],
    whenNeeded: [
      "Du vurderer å registrere et nytt domene og vil sammenligne leverandører ærlig.",
      "Du fornyer ditt eksisterende domene og lurer på om det er verdt å flytte.",
      "Du planlegger en domeneportefølje for bedriften og må budsjettere for 3-5 år frem.",
      "Du har fått tilbud fra en leverandør og vil verifisere at det er konkurransedyktig.",
      "Du vurderer flere TLD-er for samme prosjekt og må forstå totalkostnad per alternativ.",
    ],
    relatedTerms: ["registrar", "tld", "norid"],
    relatedGuides: [
      "hvordan-velge-domenenavn",
      "hvordan-registrere-no-domene",
      "domeneportefolje-for-bedrifter",
    ],
    relatedTools: ["sammenlign-domenepriser", "domenesjekk"],
    faq: [
      {
        question: "Hvor henter dere prisene fra?",
        answer:
          "Manuelt fra leverandørenes offentlige prislister og bestillingsskjemaer, oppdatert månedlig. Dette gir mer pålitelig data enn skraping eller affiliate-feeds som ofte inneholder reklame-priser.",
      },
      {
        question: "Inkluderer prisene moms?",
        answer:
          "Ja. Alle priser i kalkulatoren er inklusive 25% mva for direkte sammenligning. Domeneshop oppgir dette på sin prisliste; de andre seks oppgir eks mva, og vi har konvertert.",
      },
      {
        question: "Hva er lokketilbud?",
        answer:
          "Når en leverandør tilbyr lavt første-årspris (ofte 9-99 kr) for å trekke nye kunder, men har høy fornyelsespris etterpå (ofte 200-300+ kr). Vi merker disse tydelig i kalkulatoren.",
      },
      {
        question: "Kan jeg sammenligne flere TLD-er?",
        answer:
          "Ja. Velg flere TLD-er, og kalkulatoren viser totalpris for hver hos hver leverandør. Nyttig hvis du for eksempel skal registrere både .no og .com og lurer på hvor det er billigst totalt.",
      },
      {
        question: "Inkluderer kalkulatoren flytteavgift?",
        answer:
          "Ikke som standard - det er en engangskostnad som varierer. Mange leverandører har gratis flytting hvis du fornyer for ett år. For .no er flytting typisk gratis hos alle norske registrarer.",
      },
    ],
  },

  {
    slug: "sammenlign-domenepriser",
    name: "Sammenlign domenepriser",
    description:
      "Sammenlign priser for domeneregistrering, fornyelse og flytting på tvers av åtte norske registrarer i sanntid.",
    icon: "tag",
    category: "domeneregistrering",
    status: "coming-soon",
    tagline: "Verktøy - Prissammenligning",
    editorialTitle: {
      lead: "Sammenlign",
      emphasis: "alle prisene",
      tail: "i ett verktøy.",
    },
    longDescription:
      "Domenepriser i Norge varierer mer enn folk tror. Forskjellen mellom billigste og dyreste leverandør kan være over 1000 kr per domene over 3 år. Sammenligningsverktøyet henter offisielle priser fra åtte registrarer og viser dem side om side - førsteår, fornyelse, 3-årstotal. Du ser umiddelbart hvem som er reelt billigst, og hvem som bruker lokketilbud.",
    answerBox:
      "Verktøyet sammenligner priser hos åtte norske registrarer (Domeneshop, Webhuset, Gigahost, Simply.com, ProISP, One.com, Uniweb, Domene.no) for de mest brukte TLD-ene. Du ser førsteårspris, fornyelsespris, og 3-årstotal i én tabell. Resultatene oppdateres månedlig fra primærkilder.",
    howToUse: [
      {
        title: "Velg toppdomene",
        description:
          "Tast inn TLD-en du vil sammenligne - .no, .com, .se, .dk osv. Verktøyet henter de aktuelle prisene hos alle åtte registrarer.",
      },
      {
        title: "Filtrer på funksjon",
        description:
          "Du kan filtrere på inkluderte tjenester - DNSSEC, e-post, registry-lock, gratis SSL. Bare de leverandørene som matcher kriteriene vises.",
      },
      {
        title: "Sorter etter behov",
        description:
          "Sorter etter førsteårspris, fornyelse, eller 3-års total. For domener du planlegger å beholde i mange år, er fornyelsesprisen det viktigste tallet.",
      },
      {
        title: "Sammenlign konsernstruktur",
        description:
          "Vi viser hvilke leverandører som er reelt uavhengige norske, og hvilke som er del av internasjonale konsern. Viktig informasjon når du velger leverandør for kritiske domener.",
      },
    ],
    resultExplained: [
      {
        heading: "Førsteårspris",
        body: "Det du betaler ved registrering. Kan være lokketilbud (lav nå, høy senere) eller normalpris. Sjekk fornyelsesprisen før du tar et førsteinntrykk.",
      },
      {
        heading: "Fornyelsespris",
        body: "Det du betaler hvert år etter første år. Det viktigste tallet på sikt. Hvis du planlegger å beholde domenet i 3+ år, er denne langt viktigere enn førsteår.",
      },
      {
        heading: "3-års total",
        body: "Førsteår + 2 år fornyelse. Realistisk minimum tidshorisont. Lokketilbud blir tydelige - noen leverandører er billigst første år, men dyrest over 3 år.",
      },
      {
        heading: "Volumrabatt",
        body: "Domeneshop gir automatisk rabatt fra 5 domener på samme konto - 10-30 % lavere fornyelse. For bedrifter med 5+ domener er dette ofte avgjørende.",
      },
    ],
    commonErrors: [
      {
        error: "Sammenligner kun førsteår",
        explanation:
          "Vanligste fellen. Et domene som koster 9 kr første år men 300 kr i fornyelse er dyrere enn ett som koster 99 kr begge år, hvis du beholder det. Sammenlign 3-årstotal, ikke førsteår.",
      },
      {
        error: "Glemmer mva",
        explanation:
          "Domeneshop oppgir priser inkl. mva, de fleste andre eks. mva. Forskjellen er 25 %. Vi konverterer alt til inkl. mva for direkte sammenligning - det er det privatpersoner faktisk betaler.",
      },
      {
        error: "Ignorerer inkluderte tjenester",
        explanation:
          "Domene.no har høyere domenepris men inkluderer 10 e-postkontoer. Hvis du trenger e-post uansett, blir totalkostnaden ofte lavere enn hos en billigere ren-domene-leverandør.",
      },
    ],
    whenNeeded: [
      "Du skal registrere et nytt domene og vil ikke betale for mye.",
      "Du har et eksisterende domene og lurer på om fornyelsesprisen er konkurransedyktig.",
      "Du planlegger en større domeneportefølje (10+ domener) og trenger volumrabatt.",
      "Du flytter et domene og vil sammenligne mottakende leverandører.",
      "Du sammenligner TLD-er for et nytt prosjekt og må forstå reell kostnadsforskjell.",
    ],
    relatedTerms: ["registrar", "tld"],
    relatedGuides: [
      "hvordan-velge-domenenavn",
      "domeneportefolje-for-bedrifter",
    ],
    relatedTools: ["domenekalkulator", "domenesjekk"],
    faq: [
      {
        question: "Hvor henter dere prisene fra?",
        answer:
          "Manuelt fra leverandørenes egne prislister og bestillingsskjemaer. Vi tester selv ved bestilling for å sikre at oppgitt pris stemmer. Oppdateres månedlig - for eksempel har vi verifisert prisene 5. mai 2026.",
      },
      {
        question: "Hvilke leverandører er sammenlignet?",
        answer:
          "Åtte registrarer som retter seg mot norske kunder: Domeneshop, Webhuset, Gigahost, Simply.com, ProISP, One.com, Uniweb og Domene.no. Av disse er kun Webhuset og Gigahost reelt uavhengige norske; de seks andre er del av internasjonale konsern.",
      },
      {
        question: "Inkluderer prisene moms?",
        answer:
          "Ja. Alle priser i tabellen er inklusive 25 % mva for direkte sammenligning. Det er det du faktisk betaler som privatperson eller forbruker.",
      },
      {
        question: "Hva med tilleggstjenester?",
        answer:
          "Vi viser hva som er inkludert i grunnprisen (DNS, DNSSEC, e-postvideresending). Tilleggstjenester (premium e-post, webhotell, Microsoft 365) er separat og kan ofte gi total bedre pris hos en leverandør med litt høyere domenepris men gode pakker.",
      },
      {
        question: "Hvor ofte oppdateres prisene?",
        answer:
          "Månedlig som hovedregel. Ved store endringer (kampanjer, nye leverandører) oppdaterer vi raskere. Sjekk 'sist verifisert'-datoen øverst på sammenligningssiden.",
      },
      {
        question: "Hvorfor er enkelte leverandører billigere enn andre?",
        answer:
          "Forskjellige forretningsmodeller. Gigahost prismatcher domener for å selge serverhosting. Domeneshop tjener mer på e-post og webhotell. One.com bruker aggressive lokketilbud. Webhuset er reelt billig. Forstå modellen før du velger.",
      },
    ],
  },
];

export const findTool = (slug: string) => tools.find((t) => t.slug === slug);
