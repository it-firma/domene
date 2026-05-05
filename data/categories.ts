import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "no-domene",
    name: ".no domene",
    h1: "Alt om .no domener",
    shortDescription:
      "Det norske toppnivådomenet — krav, registrering, eierskap og praksis.",
    intro:
      ".no er Norges nasjonale toppnivådomene, administrert av Norid. Her samler vi det du trenger å vite om hvem som kan registrere et .no domene, hvilke krav som gjelder, hvordan registrering og fornyelse fungerer, og hvordan du flytter eller overdrar et .no domene på riktig måte.",
    shortAnswer:
      "Et .no domene er et nasjonalt toppnivådomene som administreres av Norid. Både privatpersoner og organisasjoner med tilknytning til Norge kan registrere .no domener. Reglene er strengere enn for generiske toppdomener, men gir samtidig høy tillit, lokal forankring og en stabil teknisk infrastruktur.",
    icon: "globe",
    startHere: "hvordan-registrere-no-domene",
    guides: [
      "hvordan-registrere-no-domene",
      "hvordan-velge-domenenavn",
      "hvordan-flytte-domene",
    ],
    terms: ["tld", "registrar", "registrant", "whois"],
    tools: ["domenesjekk", "whois-oppslag"],
    faq: [
      {
        question: "Hvem kan registrere et .no domene?",
        answer:
          "Både privatpersoner med norsk fødselsnummer og organisasjoner registrert i Enhetsregisteret kan registrere .no domener. Privatpersoner kan registrere inntil 5 .no domener, mens organisasjoner kan ha inntil 100.",
      },
      {
        question: "Må man ha norsk organisasjonsnummer?",
        answer:
          "Organisasjoner må ha norsk organisasjonsnummer. Privatpersoner trenger fødselsnummer og må være myndige. Utenlandske selskaper uten norsk avdeling kan ikke registrere .no direkte, men kan benytte en lokal representant.",
      },
      {
        question: "Hvor lang tid tar det å registrere et .no domene?",
        answer:
          "Selve registreringen skjer som regel innen få minutter når kravene er oppfylt og betaling er gjennomført hos registraren. DNS-endringer kan ta noen timer å spre seg globalt.",
      },
      {
        question: "Hva koster et .no domene?",
        answer:
          "Prisen varierer mellom registrarer. Selve avgiften til Norid er den samme, men registraren legger til sin egen pris for oppsett, fornyelse og eventuelle tilleggstjenester. Sammenlign alltid både første år, fornyelsespris og flyttepris.",
      },
      {
        question: "Kan jeg flytte mitt .no domene til en annen leverandør?",
        answer:
          "Ja. Du har full rett til å flytte domenet ditt mellom registrarer. Du trenger autoriseringskode (auth-kode) fra dagens leverandør og må bekrefte flyttingen hos den nye.",
      },
      {
        question: "Hva skjer hvis jeg ikke fornyer .no domenet?",
        answer:
          "Et utløpt .no domene går først i karantene en periode hvor du fortsatt kan reaktivere det. Etter karantenen frigis domenet og kan registreres på nytt av andre.",
      },
    ],
    summary: [
      ".no er Norges toppnivådomene, drevet av Norid.",
      "Privatpersoner og organisasjoner med norsk tilknytning kan registrere.",
      "Du eier ikke domenet permanent — du har bruksrett som må fornyes.",
      "Du kan flytte .no domenet ditt fritt mellom registrarer.",
      "Uten fornyelse går domenet i karantene før det frigis.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "domeneregistrering",
    name: "Domeneregistrering",
    h1: "Alt om domeneregistrering",
    shortDescription:
      "Hvordan registrere et domene riktig — fra valg av navn til eierskap og DNS.",
    intro:
      "Domeneregistrering handler om mer enn å klikke kjøp. Riktig registrering sikrer at du eier domenet i eget navn, har kontroll på DNS, og unngår fallgruver som dårlig fornyelse, feil kontaktperson eller låst leverandør. Her finner du alt du trenger for å registrere domener trygt og strategisk.",
    shortAnswer:
      "Domeneregistrering er prosessen der du reserverer et domenenavn hos en akkreditert registrar. Du eier ikke domenet permanent, men har bruksrett så lenge du fornyer. Registreringen knytter domenet til en eier (registrant), DNS-oppsett og fornyelsesplan — alle kritiske detaljer å få riktig fra starten.",
    icon: "edit",
    guides: ["hvordan-registrere-no-domene", "hvordan-velge-domenenavn"],
    terms: ["registrar", "registrant", "tld", "whois"],
    tools: ["domenesjekk", "domenekalkulator"],
    faq: [
      {
        question: "Hva er forskjellen på registrar og registrant?",
        answer:
          "Registraren er selskapet du registrerer domenet gjennom. Registranten er den juridiske eieren. Registranten skal alltid være deg eller ditt selskap — aldri leverandøren.",
      },
      {
        question: "Hvor lenge varer en domeneregistrering?",
        answer:
          "Vanligvis ett år av gangen. Mange toppdomener kan registreres for opptil 10 år forhåndsbetalt. Du må fornye for å beholde domenet.",
      },
      {
        question: "Kan jeg registrere flere domener samtidig?",
        answer:
          "Ja. Mange registrerer flere varianter av navnet sitt — for eksempel ulike toppdomener eller skrivemåter — for å beskytte merkevaren mot misbruk.",
      },
      {
        question: "Hvordan vet jeg at jeg er registrert som eier?",
        answer:
          "Sjekk WHOIS-oppføringen for domenet. Registrant-feltet skal vise ditt navn eller din organisasjon, ikke leverandøren.",
      },
    ],
    summary: [
      "Du eier ikke domenet permanent — du har bruksrett.",
      "Sjekk alltid at registrant-feltet i WHOIS er deg, ikke leverandøren.",
      "Sammenlign førstepris, fornyelsespris og flyttepris.",
      "Hold kontaktinformasjon oppdatert hos registraren.",
      "Sett påminnelser om fornyelse i god tid.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "domeneflytting",
    name: "Domeneflytting",
    h1: "Alt om domeneflytting",
    shortDescription:
      "Flytt domenet ditt mellom leverandører trygt og uten nedetid.",
    intro:
      "Domeneflytting er retten din som domeneeier. Hvis du er misfornøyd med leverandøren, vil samle alt på ett sted, eller bare ønsker bedre pris, kan du flytte. Riktig prosess unngår nedetid på nettside og e-post — feil prosess kan koste deg tid og kunder.",
    shortAnswer:
      "Domeneflytting er overføring av et domene fra én registrar til en annen, uten å miste eierskap eller funksjonalitet. Du trenger en autoriseringskode (auth-kode) fra dagens leverandør og må bekrefte flyttingen hos den nye. Med riktig forberedelse skjer det uten nedetid på nettside eller e-post.",
    icon: "arrow-right-left",
    guides: ["hvordan-flytte-domene", "hvordan-sikre-domenet"],
    terms: ["registrar", "navneserver", "dns"],
    tools: ["whois-oppslag", "dns-sjekk"],
    faq: [
      {
        question: "Vil nettsiden min være nede under flyttingen?",
        answer:
          "Ikke hvis du forbereder riktig. Behold DNS-oppsettet ditt hos den nye leverandøren før du fullfører flyttingen, så vil tjenestene fortsette uten avbrudd.",
      },
      {
        question: "Hva er en auth-kode?",
        answer:
          "Auth-kode (også kalt EPP-kode) er en sikkerhetskode du henter fra dagens registrar. Den bekrefter at du har rett til å flytte domenet til en ny leverandør.",
      },
      {
        question: "Kan dagens leverandør stoppe flyttingen?",
        answer:
          "Nei. Du har lovfestet rett til å flytte. Leverandøren kan be om bekreftelse, men kan ikke nekte deg å flytte når kravene er oppfylt.",
      },
      {
        question: "Hvor lang tid tar en flytting?",
        answer:
          "Vanligvis 1–7 dager. .no flyttinger går ofte raskere enn generiske domener fordi Norid har klare regler og rask saksbehandling.",
      },
    ],
    summary: [
      "Du har full rett til å flytte domenet ditt.",
      "Bevar DNS hos ny leverandør før du flytter, for å unngå nedetid.",
      "Hent auth-kode fra dagens leverandør.",
      "Ikke flytt hvis domenet utløper innen kort tid.",
      "Bekreft alltid at du fortsatt står som eier etter flyttingen.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "dns",
    name: "DNS",
    h1: "Alt om DNS",
    shortDescription:
      "Systemet som kobler domenet ditt til nettside, e-post og andre tjenester.",
    intro:
      "DNS — Domain Name System — er internettets adressebok. Hver gang noen besøker nettsiden din, sender e-post til deg, eller kobler til en tjeneste du har under domenet, er det DNS som peker dem riktig vei. Forstår du DNS, har du kontroll over alt som skjer rundt domenet ditt.",
    shortAnswer:
      "DNS står for Domain Name System og fungerer som internettets adressebok. DNS kobler domenenavnet ditt til riktig server, slik at nettsider, e-post og andre tjenester finner frem. Uten riktig DNS-oppsett vil domenet ikke peke til riktig sted, og tjenester slutter å fungere.",
    icon: "network",
    startHere: "hvordan-sette-opp-dns",
    guides: ["hvordan-sette-opp-dns", "hvordan-sette-opp-epost"],
    terms: ["dns", "a-peker", "cname", "mx-peker", "navneserver", "dnssec"],
    tools: ["dns-sjekk", "navneserver-sjekk"],
    faq: [
      {
        question: "Hva er forskjellen på DNS og navneserver?",
        answer:
          "DNS er hele systemet av adresseoppslag. En navneserver er en konkret tjener som inneholder DNS-postene for ditt domene. Du kan tenke på navneservere som filialer av en stor adressebok.",
      },
      {
        question: "Hva skjer hvis DNS er feil konfigurert?",
        answer:
          "Nettsiden kan bli utilgjengelig, e-post kan slutte å komme frem, eller besøkende blir sendt til feil server. Feil DNS er en av de vanligste årsakene til nedetid.",
      },
      {
        question: "Hva er TTL?",
        answer:
          "TTL — Time To Live — angir hvor lenge en DNS-post mellomlagres før den hentes på nytt. Lav TTL (f.eks. 300 sekunder) gir raske endringer; høy TTL (f.eks. 86400 sekunder) gir bedre ytelse.",
      },
      {
        question: "Hvor lang tid tar det før DNS-endringer slår inn?",
        answer:
          "Avhenger av TTL. Vanligvis fra noen minutter til 24 timer. For kritiske endringer bør du senke TTL i forveien så endringen sprer seg raskere.",
      },
      {
        question: "Kan jeg flytte DNS uten å flytte domenet?",
        answer:
          "Ja. DNS og domeneregistrering kan håndteres hos forskjellige leverandører. Du peker bare navneserverne dit DNS skal driftes.",
      },
    ],
    summary: [
      "DNS kobler domenenavn til IP-adresser og tjenester.",
      "Navneservere er tjenere som lagrer DNS-postene for ditt domene.",
      "TTL styrer hvor raskt endringer sprer seg.",
      "DNSSEC sikrer at DNS-svarene er ekte.",
      "Feil DNS er en hovedårsak til nedetid på nett og e-post.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "dnssec",
    name: "DNSSEC",
    h1: "Alt om DNSSEC",
    shortDescription:
      "Signaturer som bekrefter at DNS-svar er ekte og ikke manipulert.",
    intro:
      "DNSSEC — DNS Security Extensions — er en sikkerhetsstandard som signerer DNS-svar kryptografisk. Det forhindrer angrep der noen forsøker å lure besøkende til en falsk server. For domener med høy verdi eller behov for tillit er DNSSEC praktisk talt nødvendig.",
    shortAnswer:
      "DNSSEC er en utvidelse av DNS som signerer svarene digitalt. Det betyr at brukerens datamaskin kan verifisere at DNS-svaret faktisk kommer fra den rettmessige eieren av domenet, og ikke fra en angriper. DNSSEC beskytter mot DNS-spoofing og cache-forgiftning.",
    icon: "shield-check",
    guides: ["hvordan-sikre-domenet"],
    terms: ["dnssec", "dns", "navneserver"],
    tools: ["dns-sjekk"],
    faq: [
      {
        question: "Trenger alle domener DNSSEC?",
        answer:
          "Ikke teknisk, men det anbefales for alle profesjonelle domener — særlig der det håndteres innlogging, betaling, e-post eller sensitive data.",
      },
      {
        question: "Kan DNSSEC føre til nedetid?",
        answer:
          "Hvis DNSSEC settes opp feil eller signeringen utløper uten fornyelse, kan domenet bli utilgjengelig. Bruk en leverandør som støtter automatisk nøkkelrullering.",
      },
      {
        question: "Støtter Norid DNSSEC for .no?",
        answer:
          "Ja. Norid har støttet DNSSEC for .no siden 2014, og det anbefales sterkt å aktivere.",
      },
    ],
    summary: [
      "DNSSEC signerer DNS-svar kryptografisk.",
      "Beskytter mot DNS-spoofing og cache-forgiftning.",
      "Krever støtte både hos registrar og DNS-leverandør.",
      "Feil oppsett kan gi nedetid — bruk leverandør med automatikk.",
      "Sterkt anbefalt for forretningskritiske domener.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "epost",
    name: "E-post",
    h1: "Alt om e-post på eget domene",
    shortDescription:
      "Profesjonell e-post, MX-oppsett og sikkerhet med SPF, DKIM og DMARC.",
    intro:
      "E-post på eget domene er ofte det første profesjonelle steget for en virksomhet. Men teknikken bak — MX, SPF, DKIM og DMARC — kan være forvirrende. Her samler vi det du trenger for å sette opp pålitelig e-post som ikke havner i spam-mappen.",
    shortAnswer:
      "E-post på eget domene gir profesjonelt utseende og full kontroll. Det krever korrekt MX-pekere som ruter e-post til en e-posttjener, samt SPF, DKIM og DMARC for å forhindre at meldingene markeres som spam eller misbrukes til phishing.",
    icon: "mail",
    startHere: "hvordan-sette-opp-epost",
    guides: ["hvordan-sette-opp-epost", "hvordan-sikre-domenet"],
    terms: ["mx-peker", "dns", "a-peker"],
    tools: ["dns-sjekk"],
    faq: [
      {
        question: "Trenger jeg eget domene for å ha profesjonell e-post?",
        answer:
          "Ja, hvis du vil ha en e-postadresse som @firmaet-ditt.no. Du må også ha en e-posttjeneste — for eksempel Microsoft 365, Google Workspace eller en norsk leverandør.",
      },
      {
        question: "Hva er forskjellen på MX, SPF, DKIM og DMARC?",
        answer:
          "MX bestemmer hvilken server som mottar e-post for domenet ditt. SPF, DKIM og DMARC er sikkerhetsstandarder som verifiserer at e-post sendt fra ditt domene faktisk kommer fra deg.",
      },
      {
        question: "Hvorfor havner e-postene mine i spam?",
        answer:
          "Vanligvis fordi SPF, DKIM eller DMARC ikke er satt opp riktig. E-posttjenere stoler ikke på meldinger uten korrekt autentisering.",
      },
    ],
    summary: [
      "Eget domene gir profesjonell og kontrollert e-post.",
      "MX-pekere bestemmer mottakerserver.",
      "SPF, DKIM og DMARC beskytter mot misbruk og spam.",
      "Feil oppsett er hovedårsak til at e-post forsvinner.",
      "Test alltid med en e-postsjekk før du går live.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "webhotell",
    name: "Webhotell",
    h1: "Alt om webhotell",
    shortDescription:
      "Hva webhotell er, hvordan det henger sammen med domenet, og hva som er viktig.",
    intro:
      "Et domene uten webhotell er som en adresse uten hus. Webhotell er der nettsiden din faktisk ligger lagret. Her lærer du hvordan webhotell henger sammen med domenet ditt, hva som påvirker ytelsen, og hvordan du sikrer driften med SSL og backup.",
    shortAnswer:
      "Webhotell er en tjeneste som lagrer nettsiden din på en server som er tilgjengelig på internett. Domenet er adressen, webhotellet er huset. Et godt webhotell har god ytelse, daglig backup, SSL-sertifikat og en stabil teknisk plattform tilpasset behovene dine.",
    icon: "server",
    guides: ["hvordan-velge-domenenavn", "hvordan-sikre-domenet"],
    terms: ["a-peker", "dns", "navneserver"],
    tools: ["dns-sjekk", "domenesjekk"],
    faq: [
      {
        question: "Hva er forskjellen på domene og webhotell?",
        answer:
          "Domenet er navnet folk skriver inn. Webhotellet er stedet hvor nettsiden faktisk er lagret. Du kan ha ett uten det andre, men du trenger begge for at en nettside skal fungere.",
      },
      {
        question: "Kan jeg bytte webhotell uten å bytte domene?",
        answer:
          "Ja. Domenet er separat fra webhotellet. Du oppdaterer bare DNS-pekerne så de viser til den nye serveren.",
      },
      {
        question: "Hva er SSL og trenger jeg det?",
        answer:
          "SSL/TLS gir kryptert forbindelse mellom besøkende og nettsiden, og vises som en hengelås i nettleseren. I dag er SSL en grunnleggende standard, og uten det vil nettleseren markere siden som usikker.",
      },
    ],
    summary: [
      "Webhotell lagrer nettsiden på en server.",
      "Domene og webhotell er separate tjenester.",
      "SSL er obligatorisk i praksis i dag.",
      "Backup er nødvendig — ikke valgfritt.",
      "Ytelse påvirker både brukeropplevelse og søkemotorer.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "whois",
    name: "WHOIS",
    h1: "Alt om WHOIS",
    shortDescription:
      "Det offentlige registeret over domeneeiere — hva det viser og hvordan du bruker det.",
    intro:
      "WHOIS er det offentlige registeret som viser hvem som eier et domene, når det ble registrert, og hvilken registrar som administrerer det. Det er et verktøy for åpenhet, juridisk oppfølging og sikkerhet.",
    shortAnswer:
      "WHOIS er et offentlig oppslagssystem som viser registreringsinformasjon for et domene — inkludert eier, kontaktinformasjon, registreringsdato og navneservere. WHOIS brukes til å sjekke domeneeierskap, undersøke konflikter og bekrefte at registrant er korrekt oppført.",
    icon: "search",
    guides: ["hvordan-flytte-domene", "hvordan-sikre-domenet"],
    terms: ["whois", "registrar", "registrant"],
    tools: ["whois-oppslag"],
    faq: [
      {
        question: "Er WHOIS-oppslag offentlig tilgjengelig?",
        answer:
          "I stor grad ja, men personvernregler som GDPR gjør at personlige opplysninger til privatpersoner ofte er skjult. Organisasjoner er som regel synlige med firmanavn og kontaktdetaljer.",
      },
      {
        question: "Kan jeg skjule mine WHOIS-data?",
        answer:
          "For privatpersoner er mange opplysninger skjult automatisk. Bedrifter kan i noen tilfeller bruke en personverntjeneste hos registraren, men ikke for .no, hvor reglene er strengere.",
      },
      {
        question: "Hva betyr 'redacted for privacy'?",
        answer:
          "At opplysningene er anonymisert i den offentlige WHOIS-visningen, ofte på grunn av personvernregler.",
      },
    ],
    summary: [
      "WHOIS er det offentlige domeneregisteret.",
      "Viser eier, registrar og registreringsdato.",
      "Personverninnstillinger varierer mellom toppdomener.",
      "Brukes til å sjekke eierskap og løse konflikter.",
      "Hold alltid din WHOIS-info oppdatert.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "seo-og-synlighet",
    name: "SEO og synlighet",
    h1: "Alt om domener, SEO og synlighet",
    shortDescription:
      "Hvordan domenevalg, struktur og teknisk oppsett påvirker rangering i søk.",
    intro:
      "Domenet ditt er fundamentet for synligheten din i søkemotorer. Valg av navn, toppdomene, redirigeringer og teknisk oppsett kan ha langsiktige konsekvenser for hvordan du rangerer. Her samler vi det du trenger å vite.",
    shortAnswer:
      "Domenenavnet i seg selv er ikke en stor SEO-faktor, men hvordan du forvalter det er. Konsistent valg av hoveddomene, riktige redirigeringer, HTTPS, godt teknisk DNS-oppsett, og en stabil historikk uten DNS-feil gir bedre forutsetninger for å rangere over tid.",
    icon: "trending-up",
    guides: ["hvordan-velge-domenenavn"],
    terms: ["tld", "a-peker", "cname"],
    tools: ["domenesjekk", "dns-sjekk"],
    faq: [
      {
        question: "Er .no bedre for SEO i Norge enn .com?",
        answer:
          "For norsk publikum kan .no gi en geografisk signal til Google og en lokal forankring som styrker tillit. Det er likevel ingen garanti — innhold og tekniske faktorer betyr mer.",
      },
      {
        question: "Påvirker domenets alder rangeringen?",
        answer:
          "Marginalt. Det er ikke alderen i seg selv, men en lang historikk med stabilt og kvalitativt innhold som teller. Et nytt domene kan rangere godt.",
      },
      {
        question: "Hvor viktig er nøkkelord i domenenavnet?",
        answer:
          "Mindre viktig enn før. Et meningsfullt og minneverdig merkenavn er ofte bedre enn et keyword-stappet navn, både for SEO og brukertillit.",
      },
    ],
    summary: [
      "Domenenavnet er en mindre rangeringsfaktor enn folk tror.",
      "Velg merkevarenavn fremfor nøkkelord-stapping.",
      "HTTPS er obligatorisk for SEO i dag.",
      "Konsistent hoveddomene (med eller uten www) er viktig.",
      "Tekniske DNS-feil kan skade synligheten over tid.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "sikkerhet",
    name: "Domenesikkerhet",
    h1: "Alt om domenesikkerhet",
    shortDescription:
      "Hvordan du beskytter domenet mot kapring, phishing og uautoriserte endringer.",
    intro:
      "Domenet ditt er ofte selve kjernen i merkevaren din — og en angriper som tar kontroll, kan stjele e-post, omdirigere trafikk eller utgi seg for å være deg. Her får du en strukturert oversikt over hvordan du sikrer domenet ditt.",
    shortAnswer:
      "Domenesikkerhet handler om å beskytte registreringen, DNS-oppsettet og e-postkonfigurasjonen mot uautorisert tilgang. De viktigste tiltakene er sterk innlogging hos registrar, tofaktor, registry-lock, DNSSEC, og e-postautentisering med SPF, DKIM og DMARC.",
    icon: "lock",
    guides: ["hvordan-sikre-domenet"],
    terms: ["dnssec", "registrar", "navneserver"],
    tools: ["dns-sjekk", "whois-oppslag"],
    faq: [
      {
        question: "Hva er domenekapring?",
        answer:
          "Domenekapring skjer når noen får uautorisert kontroll over domenet ditt — enten ved å overta registreringskontoen, manipulere DNS, eller utnytte sosial manipulering hos leverandøren.",
      },
      {
        question: "Hva er registry-lock?",
        answer:
          "En tilleggstjeneste som gjør at domenet ikke kan endres, flyttes eller slettes uten en manuell verifisering hos registry. Anbefales for forretningskritiske domener.",
      },
      {
        question: "Trenger jeg DNSSEC?",
        answer:
          "For domener som håndterer innlogging, betaling eller sensitive data: ja. For andre domener er det en ekstra sikkerhetslag som sjelden er feil å aktivere.",
      },
    ],
    summary: [
      "Sterk innlogging og tofaktor er minimum.",
      "Registry-lock anbefales for kritiske domener.",
      "DNSSEC beskytter mot DNS-spoofing.",
      "SPF, DKIM og DMARC beskytter e-postdomenet.",
      "Hold WHOIS-kontaktene oppdatert og bemannet.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "juridisk-og-varemerke",
    name: "Juridisk og varemerke",
    h1: "Alt om juridiske forhold og varemerker for domener",
    shortDescription:
      "Domener, varemerker, konflikter og rettigheter — hva du må vite før du registrerer.",
    intro:
      "Et domene kan kollidere med eksisterende varemerker eller selskap, og en feil registrering kan gi rettslige problemer. Her samler vi grunnlaget — men dette erstatter ikke konkret juridisk rådgivning i en sak.",
    shortAnswer:
      "Domeneregistrering er først til mølla, men varemerkerett kan slå inn. Hvis du registrerer et domene som er identisk eller forvekslingsbart med et eksisterende varemerke, kan rettighetshaveren kreve domenet overført. Sjekk varemerkeregister og selskapsnavn før du registrerer kommersielle domener.",
    icon: "scale",
    guides: ["hvordan-velge-domenenavn"],
    terms: ["registrant", "tld"],
    tools: ["domenesjekk"],
    faq: [
      {
        question: "Kan jeg registrere et domene som likner et varemerke?",
        answer:
          "Teknisk ja, men juridisk kan det være risikabelt. Rettighetshavere kan kreve domenet overført eller slettet via domenetvistprosesser som UDRP eller Norids egne regler.",
      },
      {
        question: "Hva er UDRP?",
        answer:
          "Uniform Domain-Name Dispute-Resolution Policy — en prosedyre for å løse domenetvister utenfor domstol. Brukes for de fleste generiske toppdomener.",
      },
      {
        question: "Beskytter et registrert domene meg som varemerke?",
        answer:
          "Nei. Et domene gir bruksrett, men ikke varemerkebeskyttelse. Vurder å registrere et formelt varemerke ved siden av for kommersiell virksomhet.",
      },
    ],
    summary: [
      "Domener og varemerker er adskilte rettigheter.",
      "Først til mølla — men ikke uten unntak.",
      "Sjekk varemerkeregisteret før du registrerer kommersielle domener.",
      "Domenetvister kan løses gjennom UDRP eller .no-regler.",
      "Et domene gir ikke varemerkebeskyttelse.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "internasjonale-domener",
    name: "Internasjonale domener",
    h1: "Alt om internasjonale domener",
    shortDescription:
      "Skal du etablere deg utenfor Norge? Lær forskjellen på .no, .com, .eu og nye gTLD-er.",
    intro:
      "Når du tenker bredere enn det norske markedet, åpner det seg hundrevis av toppdomener. Her får du oversikt over generiske (.com, .net), nasjonale (.no, .se, .dk), og nye gTLD-er som .io og .app — pluss reglene som gjelder for IDN-domener med æ, ø og å.",
    shortAnswer:
      "Internasjonale domener deles i tre: ccTLD (landskoder som .no, .se), gTLD (generiske som .com, .org), og nye gTLD (.app, .io). Velg basert på målgruppe — ccTLD signaliserer lokalt; gTLD passer for globale merkevarer. Norske bedrifter bør ofte registrere både .no og .com som minimum.",
    icon: "globe",
    guides: ["hvordan-velge-domenenavn"],
    terms: ["gtld", "cctld", "tld", "idn", "punycode", "icann", "norid"],
    tools: ["domenesjekk", "sammenlign-domenepriser"],
    faq: [
      {
        question: "Bør et norsk firma ha .com i tillegg til .no?",
        answer:
          "Ja, hvis du har internasjonale ambisjoner eller vil beskytte merkevaren. .com er fortsatt det mest gjenkjennelige globalt, og defensiv registrering forhindrer cybersquatting.",
      },
      {
        question: "Hva er forskjellen på ccTLD og gTLD?",
        answer:
          "ccTLD er landsspesifikke (.no, .se, .uk) og styres av nasjonal registry med egne regler. gTLD er globale (.com, .net, .org) og styres av ICANN-akkrediterte registries.",
      },
      {
        question: "Kan jeg registrere æ, ø, å i domenet?",
        answer:
          "Ja, både Norid og mange gTLD-er tillater IDN-domener med norske tegn. De konverteres internt til Punycode (xn--…) men vises riktig i nettlesere.",
      },
      {
        question: "Hvilke nye gTLD-er er populære?",
        answer:
          ".app, .io, .dev, .ai og .blog er populære — særlig blant tech-selskaper. Pris og regler varierer mye, sjekk hos flere registrarer.",
      },
    ],
    summary: [
      "ccTLD signaliserer lokal tilhørighet; gTLD er globalt.",
      ".no er styrt av Norid; .com og lignende av ICANN-akkrediterte registries.",
      "IDN tillater æ, ø og å — bra for merkevare, viktig som defensiv registrering.",
      "Mange selskap kjøper både .no og .com for å beskytte merkevaren.",
      "Nye gTLD-er gir kreative muligheter, men sjekk pris og fornyelseskostnad.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "domeneutleie",
    name: "Domeneutleie",
    h1: "Alt om domeneutleie",
    shortDescription:
      "Lei et domene i stedet for å kjøpe. Slik fungerer leasing av premium-navn.",
    intro:
      "Drømme-domenet er ofte tatt — og når det er til salgs, kan prisen være for høy. Domeneutleie (domain leasing) lar deg bruke et eksisterende premium-domene mot månedlig eller årlig betaling, ofte med opsjon for senere kjøp. Det senker terskelen for nye merkevarer som vil teste markedet før full investering.",
    shortAnswer:
      "Domeneutleie er en avtale der du leier bruken av et domene i en gitt periode mot betaling, uten å overføre eierskap. Avtalen gir deg DNS-kontroll og rett til å bruke domenet kommersielt, men eieren beholder formell registrering. Krever skriftlig kontrakt med tydelige vilkår om varighet, oppsigelse og kjøpsopsjoner.",
    icon: "key",
    guides: [],
    terms: ["domeneutleie", "domeneinvestering", "registrant"],
    tools: ["domenesjekk"],
    faq: [
      {
        question: "Hva koster domeneutleie?",
        answer:
          "Vanligvis 1-3 % av domenets antatte verdi per år, betalt månedlig. Et domene verdt 500 000 kr leies typisk for 5 000-15 000 kr per måned.",
      },
      {
        question: "Får jeg DNS-kontroll når jeg leier?",
        answer:
          "Ja, det er standard. Avtalen bør spesifisere at du får full DNS-administrasjon i leieperioden, men eieren beholder rett til å overstyre ved kontraktsbrudd.",
      },
      {
        question: "Hva skjer hvis eieren går konkurs?",
        answer:
          "Avhenger av avtalen og jurisdiksjonen. Sørg for klausuler om eierskifte og hva som skjer ved konkurs — eller registrer en kjøpsopsjon med fast pris.",
      },
      {
        question: "Bygger jeg SEO-verdi når jeg leier?",
        answer:
          "Ja, all SEO-verdi følger domenet. Men hvis avtalen brytes eller ikke fornyes, mister du den. Vurder risikoen mot kostnaden ved full kjøp.",
      },
    ],
    summary: [
      "Domeneutleie gir tilgang til premium-domener uten full kjøpesum.",
      "Krever skriftlig avtale med tydelige vilkår.",
      "Avtalen bør gi DNS-kontroll, kjøpsopsjon og oppsigelsestid.",
      "Du bygger SEO-verdi som du risikerer å miste.",
      "Egnet for nystartede selskaper som vil teste merkevare før investering.",
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "domeneinvestering",
    name: "Domeneinvestering",
    h1: "Alt om domeneinvestering",
    shortDescription:
      "Domener som finansielle eiendeler — markedet, prisingen og strategiene.",
    intro:
      "Domener handles som digitale eiendeler — fra hundre kroner til millioner. Markedet inkluderer auksjoner, brokerede salg og direkte handel. Bedrifter bør forstå dette landskapet både for å beskytte egne navn og vurdere strategiske kjøp.",
    shortAnswer:
      "Domeneinvestering er kjøp og salg av domener som finansielle eiendeler. De mest verdifulle er korte, generiske og lett å huske — gjerne engelske substantiver på .com. Markedet drives av auksjoner (Sedo, GoDaddy), brokere og direkte handel. Profesjonelle investorer eier porteføljer på tusenvis av domener.",
    icon: "trending-up",
    guides: [],
    terms: ["domeneinvestering", "drop-catching", "redemption-period", "registrar"],
    tools: ["sammenlign-domenepriser"],
    faq: [
      {
        question: "Hvor mye er et 'godt' domene verdt?",
        answer:
          "Avhenger fullstendig av navnet. business.com gikk for 345 millioner USD; en mer typisk premium-pris er 5 000-100 000 USD. Verdien styres av lengde, gjenkjennelighet, søkevolum og kommersielt potensial.",
      },
      {
        question: "Kan jeg tjene penger som domeneinvestor?",
        answer:
          "Få lykkes. De fleste investeringer går i null. Profesjonelle har ofte kostbare porteføljer og bred kunnskap om markedstrender.",
      },
      {
        question: "Hva er drop-catching?",
        answer:
          "Praksis å fange domener i sekundene etter de utløper. Spesialiserte tjenester konkurrerer om de mest ettertraktede. Vanlige brukere kan ikke konkurrere — bruk en backorder-tjeneste.",
      },
      {
        question: "Hvor selger jeg et domene?",
        answer:
          "Sedo, Afternic, Dan.com og lignende plattformer for direkte salg. For premium-domener er brokere som Saw.com og MediaOptions vanlige.",
      },
    ],
    summary: [
      "Domener handles som digitale eiendeler i et globalt marked.",
      "Premium-domener er korte, generiske og lett å huske.",
      "Auksjonsplasser, brokere og drop-catching er hovedkanalene.",
      "Bedrifter bør registrere defensive domener før konkurrenter gjør det.",
      "Få blir rike — markedet er konkurransepreget og krever ekspertise.",
    ],
    updatedAt: "2026-05-05",
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
