import type { GlossaryTerm } from "@/lib/types";

export const glossary: GlossaryTerm[] = [
  {
    slug: "dns",
    term: "Hva er DNS?",
    shortDefinition:
      "DNS — Domain Name System — er internettets adressebok. DNS oversetter domenenavn til IP-adresser, slik at nettlesere og e-postservere finner riktige tjenester. Uten DNS måtte vi husket numeriske adresser i stedet for navn.",
    simpleExplanation:
      "Tenk på DNS som telefonkatalogen for internett. Du oppgir et navn — for eksempel domene.io — og DNS returnerer riktig adresse til tjeneren som inneholder nettsiden. Du skriver navn, datamaskinen får tall.",
    technicalExplanation:
      "DNS er et hierarkisk distribuert system bygd rundt rekursive og autoritative navneservere. Et oppslag starter på roten, går videre til toppdomenet (TLD), og ender hos de autoritative navneserverne for det aktuelle domenet, som returnerer riktig DNS-post (A, AAAA, MX, TXT osv.).",
    example:
      "Når du skriver inn domene.io i nettleseren, sender datamaskinen et DNS-oppslag som returnerer IP-adressen til serveren der nettsiden er lagret.",
    importance:
      "DNS er fundamentet for hvordan domener fungerer. Feil DNS-oppsett er en av de vanligste årsakene til at nettsider og e-post slutter å fungere.",
    category: "dns",
    relatedTerms: ["a-peker", "cname", "mx-peker", "navneserver", "dnssec"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [
      {
        question: "Hvor lang tid tar det før DNS-endringer slår inn?",
        answer:
          "Avhengig av TTL — typisk fra noen minutter til 24 timer. Senk TTL i forveien hvis du planlegger en endring.",
      },
      {
        question: "Hva er forskjellen på DNS og navneserver?",
        answer:
          "DNS er hele systemet; en navneserver er en konkret tjener som inneholder DNS-postene for et domene.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "tld",
    term: "Hva er TLD?",
    shortDefinition:
      "TLD står for Top-Level Domain — toppnivådomenet — og er den siste delen av et domenenavn, som .no, .com eller .org. TLD-er administreres av ulike organisasjoner og har egne regler for registrering og bruk.",
    simpleExplanation:
      "I domenet domene.io er .io toppnivådomenet. Det forteller hvilken kategori eller hvilket land domenet tilhører.",
    technicalExplanation:
      "TLD-er deles inn i nasjonale (ccTLD) som .no, generiske (gTLD) som .com og .org, og nye gTLD-er som .shop og .blog. ICANN administrerer rotsonen, mens hvert TLD har en egen registry.",
    example: ".no er Norges nasjonale toppdomene, administrert av Norid. .com er et generisk toppdomene administrert av Verisign.",
    importance:
      "Valg av TLD påvirker tillit, lokalt søkesignal, og hvilke regler du må følge ved registrering. For norske bedrifter er .no nesten alltid førstevalget.",
    category: "no-domene",
    relatedTerms: ["registrar", "registrant"],
    relatedGuides: ["hvordan-velge-domenenavn", "hvordan-registrere-no-domene"],
    faq: [
      {
        question: "Er .no eller .com bedre?",
        answer:
          "For norsk publikum gir .no et lokalt søkesignal og høy tillit. .com er internasjonalt anerkjent. Mange registrerer begge.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "whois",
    term: "Hva er WHOIS?",
    shortDefinition:
      "WHOIS er et offentlig register som viser hvem som eier et domene, når det ble registrert, og hvilken registrar som administrerer det. WHOIS brukes til å bekrefte eierskap, undersøke konflikter og verifisere registreringsdetaljer.",
    simpleExplanation:
      "WHOIS er domenets folkeregister. Du slår opp et domene og får se hvem som står oppført som eier, kontaktinformasjon og leverandør.",
    technicalExplanation:
      "WHOIS er en åpen protokoll som spør registry- og registrar-databaser om registreringsdata. Personverninnstillinger varierer — for privatpersoner er ofte personlige data skjermet i offentlig WHOIS, mens organisasjoner som regel er synlige.",
    example: "Et WHOIS-oppslag på et .no domene viser registrant, registrar, registreringsdato, fornyelsesdato og navneservere.",
    importance:
      "WHOIS er det viktigste verktøyet for å verifisere eierskap. Sørg alltid for at registrant-feltet er deg eller ditt firma — ikke leverandøren.",
    category: "whois",
    relatedTerms: ["registrar", "registrant"],
    relatedGuides: ["hvordan-registrere-no-domene", "hvordan-flytte-domene"],
    faq: [
      {
        question: "Kan jeg gjøre WHOIS-data anonyme?",
        answer:
          "Privatpersoner får automatisk skjermet personlige data i mange registre. Bedrifter kan bruke personverntjenester for noen TLD-er, men ikke for .no.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "navneserver",
    term: "Hva er en navneserver?",
    shortDefinition:
      "En navneserver er en server som inneholder DNS-postene for ett eller flere domener. Når noen slår opp domenet ditt, er det navneserverne som svarer med riktig informasjon. Domener har som regel 2–4 navneservere for redundans.",
    simpleExplanation:
      "Navneservere er filialene i DNS-adresseboken. De vet hvor nettsiden, e-posten og andre tjenester for ditt domene befinner seg, og forteller resten av internett dette.",
    technicalExplanation:
      "Et domene har autoritative navneservere som er angitt i NS-postene hos toppdomenets registry. Disse holder den autoritative kopien av sonefilen med alle DNS-poster for domenet.",
    example: "Hvis ditt domene bruker ns1.leverandor.no og ns2.leverandor.no som navneservere, er det disse to som svarer på DNS-oppslag for domenet ditt.",
    importance:
      "Hvis navneserverne er nede eller feil konfigurert, vil ingen finne tjenestene dine. Bruk minst to navneservere på forskjellige nett for redundans.",
    category: "dns",
    relatedTerms: ["dns", "a-peker", "dnssec"],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-flytte-domene"],
    faq: [
      {
        question: "Hvor mange navneservere bør jeg ha?",
        answer:
          "Minst to, helst på forskjellige nett eller hos forskjellige leverandører for redundans.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "dnssec",
    term: "Hva er DNSSEC?",
    shortDefinition:
      "DNSSEC — DNS Security Extensions — er en utvidelse av DNS som signerer DNS-svar kryptografisk. Det betyr at en bruker kan verifisere at svaret faktisk kommer fra den rettmessige domeneeieren, og ikke fra en angriper. DNSSEC beskytter mot DNS-spoofing og cache-forgiftning.",
    simpleExplanation:
      "DNSSEC er som å signere et brev med en stempel som ikke kan forfalskes. Datamaskinen som mottar svaret kan sjekke stempelet og være sikker på at svaret er ekte.",
    technicalExplanation:
      "DNSSEC bruker offentlig nøkkel-kryptografi. Sone-filen signeres med en privat nøkkel, og den offentlige nøkkelen publiseres som DNSKEY-poster. Toppdomenet publiserer en DS-post som peker tilbake til domenets nøkkel, noe som skaper en tillitskjede helt opp til rotsonen.",
    example: "Hvis ditt .no domene har DNSSEC aktivert, vil moderne nettlesere og e-postservere automatisk verifisere DNS-svar før de stoler på dem.",
    importance:
      "DNSSEC er en av de mest effektive måtene å sikre at brukere ikke blir lurt av en falsk DNS-server. Spesielt viktig for domener som håndterer innlogging, betaling eller sensitive data.",
    category: "dnssec",
    relatedTerms: ["dns", "navneserver"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      {
        question: "Kan DNSSEC føre til nedetid?",
        answer:
          "Ja, hvis nøkler ikke roteres riktig eller signaturen utløper. Bruk en leverandør som håndterer dette automatisk.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "ssl",
    term: "Hva er SSL?",
    shortDefinition:
      "SSL — Secure Sockets Layer — og dens etterfølger TLS er protokoller som krypterer trafikk mellom en nettleser og en server. Det er det som gir hengelås-symbolet i nettleseren og HTTPS i adressefeltet. I dag bruker vi nesten alltid TLS, men begrepet SSL henger fortsatt igjen.",
    simpleExplanation:
      "SSL gjør at det som sendes mellom nettleseren og nettsiden er låst. Hvis noen lytter på trafikken, ser de bare uleselig krypterte data.",
    technicalExplanation:
      "TLS bruker offentlig nøkkel-kryptografi for å etablere en sesjonsnøkkel, deretter symmetrisk kryptering for selve overføringen. Sertifikater utstedes av en sertifikatutsteder (CA) og kan være domenevaliderte (DV), organisasjonsvaliderte (OV) eller utvidet validerte (EV).",
    example: "Når du besøker en side med HTTPS, viser nettleseren en hengelås. Klikk på hengelåsen for å se sertifikatet og hvem det er utstedt til.",
    importance:
      "Uten SSL/TLS markerer moderne nettlesere siden som usikker. Det er obligatorisk i praksis for alle nettsider som vil tas på alvor.",
    category: "sikkerhet",
    relatedTerms: ["dns"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      {
        question: "Trenger jeg betalt SSL?",
        answer:
          "For de fleste formål: nei. Let's Encrypt gir gratis sertifikater med samme tekniske kryptering. Forskjellen er validering og forsikring.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "registrar",
    term: "Hva er en registrar?",
    shortDefinition:
      "En registrar er et selskap som er akkreditert til å registrere domener på vegne av kunder. Registraren er mellomleddet mellom deg og toppdomenets registry — for .no er det Norid. Registraren håndterer registrering, fornyelse, flytting og DNS-administrasjon.",
    simpleExplanation:
      "Registraren er domeneleverandøren din. Det er hos dem du betaler, administrerer kontoen og styrer DNS — men du eier domenet selv.",
    technicalExplanation:
      "Registrarer er akkreditert av registry (Norid for .no, Verisign for .com osv.) og må følge regelverket. De har tekniske grensesnitt mot registry og fungerer som forretningskanal.",
    example: "Domeneshop, One.com, Loopia og GoDaddy er eksempler på registrarer. Du registrerer domenet hos en av dem, men registry — som Norid — administrerer selve toppdomenet.",
    importance:
      "Valg av registrar påvirker pris, brukervennlighet, kundeservice og hvilke sikkerhetstjenester du har tilgang til.",
    category: "domeneregistrering",
    relatedTerms: ["registrant", "tld", "whois"],
    relatedGuides: ["hvordan-registrere-no-domene", "hvordan-flytte-domene"],
    faq: [
      {
        question: "Kan jeg bytte registrar?",
        answer:
          "Ja. Du har full rett til å flytte domenet til en annen registrar.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "registrant",
    term: "Hva er en registrant?",
    shortDefinition:
      "Registranten er den juridiske eieren av et domene — personen eller organisasjonen som er oppført som eier i registry. Det er kritisk at registranten er deg eller ditt firma, ikke leverandøren. Sjekk alltid WHOIS-oppføringen for å bekrefte dette.",
    simpleExplanation:
      "Registranten er domeneeieren. Hvis registranten er feil, eier ikke du domenet — selv om du betaler regningen.",
    technicalExplanation:
      "Registrant-feltet er en del av WHOIS-data og defineres i registreringsdata hos registraren. Endring av registrant er ofte en formell prosess som krever bekreftelse fra både gammel og ny eier.",
    example: "Hvis ditt firma er Eksempel AS, skal registrant-feltet i WHOIS for firma.no vise Eksempel AS — ikke leverandørens navn.",
    importance:
      "Feil registrant er en av de vanligste fellene ved domeneregistrering. Domenet kan da være vanskelig å flytte eller selge.",
    category: "domeneregistrering",
    relatedTerms: ["registrar", "whois"],
    relatedGuides: ["hvordan-registrere-no-domene"],
    faq: [
      {
        question: "Hvordan endrer jeg registrant?",
        answer:
          "Kontakt registraren. Endringen krever som regel bekreftelse fra både gammel og ny eier, og dokumentasjon for organisasjonsbytte.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "zonefil",
    term: "Hva er en zonefil?",
    shortDefinition:
      "En zonefil er den tekstlige beskrivelsen av alle DNS-postene for et domene. Den inneholder alle A-, MX-, TXT- og andre poster, og lever på de autoritative navneserverne. Modifisering av zonefilen er hvordan DNS-endringer faktisk gjøres.",
    simpleExplanation:
      "Zonefilen er DNS-oppskriften for ditt domene. Hver linje sier «når noen spør om dette navnet, svar med dette».",
    technicalExplanation:
      "Zonefiler følger BIND-syntaks med SOA-record, NS-poster, og deretter alle ressursposter. De fleste DNS-leverandører viser zonefilen som et UI med skjema, men formatet under er det samme.",
    example: "En zonefil for domene.io kan inneholde: A-pekere for hovedsiden, MX for e-post, TXT for SPF og DKIM, og DNSKEY/DS hvis DNSSEC er aktiv.",
    importance:
      "Forstår du strukturen i zonefilen, har du kontroll over alle DNS-endringer — uansett hvilket UI leverandøren tilbyr.",
    category: "dns",
    relatedTerms: ["dns", "navneserver", "a-peker", "mx-peker"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [],
    updatedAt: "2026-05-05",
  },
  {
    slug: "mx-peker",
    term: "Hva er en MX-peker?",
    shortDefinition:
      "En MX-peker — Mail eXchange-record — forteller resten av internett hvilken server som mottar e-post for domenet ditt. Hver MX-peker har en prioritet (lavt tall først), og du kan ha flere for redundans. Uten MX-pekere fungerer ikke e-post på domenet.",
    simpleExplanation:
      "MX-pekeren er adressen til postkontoret for domenet ditt. Send et brev til navn@firma.no, og MX-pekeren forteller hvor brevet skal leveres.",
    technicalExplanation:
      "MX-pekere lever som DNS-poster med prioritetsverdi og hostname som peker til en A- eller AAAA-record. Hostname kan ikke være en IP-adresse direkte. Mottakerservere prøver lavest prioritet først.",
    example: "MX-peker for et Microsoft 365-domene: 0 firmaet-no.mail.protection.outlook.com.",
    importance:
      "Feil MX-peker er den vanligste årsaken til at e-post ikke kommer frem. Følg leverandørens dokumentasjon nøye.",
    category: "epost",
    relatedTerms: ["dns", "a-peker"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      {
        question: "Kan jeg ha flere MX-pekere?",
        answer:
          "Ja, og det anbefales for redundans. Bruk forskjellige prioriteter.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "a-peker",
    term: "Hva er en A-peker?",
    shortDefinition:
      "En A-peker — A-record — kobler et domenenavn til en konkret IPv4-adresse. Når noen besøker nettsiden din, slår nettleseren opp A-pekeren for å finne hvilken server den skal koble seg til. AAAA-record er den samme typen for IPv6.",
    simpleExplanation:
      "A-pekeren oversetter domenet til en numerisk adresse — som husnummeret til serveren der nettsiden ligger.",
    technicalExplanation:
      "A-pekere lagres som DNS-poster i zonefilen og returneres ved oppslag mot autoritative navneservere. Verdien er en gyldig IPv4-adresse. Kan kombineres med flere A-pekere for samme navn for lastbalansering.",
    example: "domene.io. IN A 203.0.113.42 betyr at domenet peker til IP-adressen 203.0.113.42.",
    importance:
      "A-pekeren er den mest fundamentale DNS-posten — uten den finner ingen nettsiden din.",
    category: "dns",
    relatedTerms: ["dns", "cname", "navneserver"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [],
    updatedAt: "2026-05-05",
  },
  {
    slug: "cname",
    term: "Hva er CNAME?",
    shortDefinition:
      "CNAME — Canonical Name — er en DNS-post som peker fra ett domenenavn til et annet. I stedet for å oppgi en IP-adresse direkte, peker du til et annet navn. Det brukes ofte for underdomener og tredjepartstjenester. CNAME kan ikke brukes på rot-domenet.",
    simpleExplanation:
      "CNAME er som å sende videresending. I stedet for å si «her er huset», sier du «se på det huset der borte».",
    technicalExplanation:
      "CNAME-post returnerer et annet domenenavn, som så slås opp på nytt for å finne den endelige A- eller AAAA-pekeren. CNAME kan ikke kombineres med andre poster på samme navn — derfor ikke på rot-domenet (apex).",
    example: "blog.firma.no CNAME firma.medium.com — peker bloggen til en Medium-side uten å eksponere IP-en direkte.",
    importance:
      "CNAME er nøkkelen til å bruke tredjepartstjenester på underdomener. Vanlig for blogg, butikk, dokumentasjonsside osv.",
    category: "dns",
    relatedTerms: ["dns", "a-peker"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [
      {
        question: "Kan jeg bruke CNAME på domene.io selv?",
        answer:
          "Nei. CNAME kan ikke ligge på apex (rot-domenet). Bruk A-pekere eller leverandørens ALIAS/ANAME-løsning.",
      },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "aaaa-peker",
    term: "Hva er en AAAA-peker?",
    shortDefinition:
      "En AAAA-peker (kvad-A) er en DNS-post som kobler et domenenavn til en IPv6-adresse. Mens A-pekere bruker IPv4, brukes AAAA for det moderne IPv6-formatet med lengre, heksadesimale adresser. Dagens nettsider bør ha både A og AAAA der det er mulig.",
    simpleExplanation:
      "AAAA fungerer som A, men peker mot en IPv6-adresse i stedet for IPv4. Hvis serveren din støtter IPv6, gir AAAA-pekeren raskere tilkobling for moderne nettverk.",
    technicalExplanation:
      "AAAA inneholder en 128-bits IPv6-adresse i tekstlig heksadesimal notasjon. DNS-resolvere som spør etter AAAA får returnert IPv6-adressen direkte, og fall-back skjer til A-pekeren om IPv6-tilkobling feiler.",
    example: "domene.io. IN AAAA 2606:4700:3035::ac43:b0c1",
    importance:
      "Manglende AAAA-pekere kan gi tregere lasting hos brukere på rene IPv6-nettverk og påvirker tilgjengeligheten i mobile nettverk.",
    category: "dns",
    relatedTerms: ["a-peker", "dns", "navneserver"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [
      { question: "Trenger jeg AAAA-peker?", answer: "Bare hvis serveren din har en IPv6-adresse. Mange webhoteller tilbyr IPv6 nå, men ikke alle aktiverer det automatisk." },
      { question: "Kan jeg ha både A og AAAA samtidig?", answer: "Ja. Dette er anbefalt — DNS returnerer begge, og klienten velger riktig basert på nettverket sitt." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "ttl",
    term: "Hva er TTL?",
    shortDefinition:
      "TTL — Time To Live — bestemmer hvor lenge en DNS-post mellomlagres hos resolvere før de spør etter ny verdi. Lav TTL gir raske endringer; høy TTL gir mindre belastning. Verdien settes i sekunder per post i sonefilen.",
    simpleExplanation:
      "Tenk på TTL som en utløpsdato. Når TTL går ut, må mellomlageret hente ferske data. Lav TTL = fersk informasjon raskt, men mer trafikk.",
    technicalExplanation:
      "TTL spesifiseres som en 32-bits unsigned integer i sekunder og er gyldig per ressurs-record. Resolvere må respektere TTL og slette posten fra cache når den utløper. Standard TTL ligger ofte mellom 3600 og 86400 sekunder.",
    example: "300 (5 min) brukes ofte før migrering; 86400 (24 timer) brukes for stabile poster.",
    importance:
      "Senk TTL noen dager før planlagte endringer slik at brukere får oppdatert verdi raskt etter bytte.",
    category: "dns",
    relatedTerms: ["dns", "a-peker", "navneserver"],
    relatedGuides: ["hvordan-flytte-domene", "hvordan-sette-opp-dns"],
    faq: [
      { question: "Hva er fornuftig TTL?", answer: "300 sekunder før endringer, 3600 til 86400 sekunder ellers. For sjelden endrede poster er 86400 (1 døgn) vanlig." },
      { question: "Kan jeg sette TTL til 0?", answer: "Teknisk ja, men det belaster DNS-serverne unødvendig og gir ingen mellomlagring. Bruk 60-300 i stedet." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "txt-peker",
    term: "Hva er en TXT-peker?",
    shortDefinition:
      "En TXT-peker er en DNS-post som inneholder fritekst og brukes ofte til verifisering, e-postsikkerhet (SPF, DKIM, DMARC) og eierskaps-bevis for tjenester som Google Search Console. TXT er ikke synlig for sluttbrukere, men avgjørende for tekniske oppsett.",
    simpleExplanation:
      "TXT-pekere lar deg legge inn vilkårlig tekst i DNS — typisk for å bekrefte at du eier domenet eller for å fortelle e-postservere hva som er lov.",
    technicalExplanation:
      "TXT-poster består av en eller flere strenger på opptil 255 tegn hver. Lengre verdier deles opp og settes sammen igjen av leseren. SPF, DKIM og DMARC bruker spesifikt formaterte TXT-verdier.",
    example: "domene.io. IN TXT \"v=spf1 include:_spf.google.com ~all\"",
    importance:
      "Riktig TXT-oppsett er nødvendig for at e-post fra ditt domene ikke skal havne i spam.",
    category: "dns",
    relatedTerms: ["spf", "dkim", "dmarc", "dns"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Kan jeg ha flere TXT-poster?", answer: "Ja. Du kan ha flere TXT-poster på samme navn, men SPF skal kun finnes som én post per domene." },
      { question: "Hvordan ser jeg eksisterende TXT?", answer: "Bruk `dig TXT domene.no` eller online-verktøy som vår DNS-sjekk." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "ns-peker",
    term: "Hva er en NS-peker?",
    shortDefinition:
      "En NS-peker — Name Server-record — angir hvilke navneservere som er autoritative for et domene. NS-pekerne ligger både hos toppdomenets registry og i selve sonefilen, og er det første DNS-resolvere finner når de slår opp domenet.",
    simpleExplanation:
      "NS-pekere forteller resten av internett: \"Spør disse serverne om alt som gjelder domenet mitt.\"",
    technicalExplanation:
      "NS-pekere returnerer fully qualified domain names til navneservere. Det skal alltid være minst to NS-poster, og de skal stemme overens mellom delegasjon hos registry og DNS-svar fra navneserverne.",
    example: "domene.io. IN NS ns1.cloudflare.com.",
    importance:
      "Feil NS-poster betyr at internett ikke finner domenet ditt. Mismatch mellom registry og sonefil gir intermitterende feil.",
    category: "dns",
    relatedTerms: ["navneserver", "dns", "a-peker"],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-flytte-domene"],
    faq: [
      { question: "Hvor mange NS-pekere bør jeg ha?", answer: "Minimum 2, helst i ulike datasentre eller hos ulike leverandører for redundans." },
      { question: "Hvor endrer jeg NS-pekere?", answer: "Hos registraren din. Endringene propageres til toppdomenets registry, ikke i din egen sonefil." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "soa-peker",
    term: "Hva er en SOA-peker?",
    shortDefinition:
      "SOA — Start of Authority — er den øverste DNS-posten i hver sonefil og inneholder administrativ informasjon: hvem er primær navneserver, kontakt-e-post, serienummer for sonen, og hvor ofte sekundære servere skal oppdatere seg.",
    simpleExplanation:
      "SOA er sonefilens \"forside\" — den forteller hvem som eier sonen og når den sist ble oppdatert.",
    technicalExplanation:
      "SOA inneholder felt for primær NS, kontakt (e-post med `.` for `@`), serial, refresh, retry, expire og minimum TTL for negative svar. Serial økes ved hver endring slik at sekundære servere vet at de må oppdatere.",
    example: "domene.io. IN SOA ns1.cloudflare.com. hostmaster.domene.io. 2026050501 7200 3600 1209600 3600",
    importance:
      "Feil i SOA kan gi propageringsproblemer og forhindre at sekundære navneservere oppdateres.",
    category: "dns",
    relatedTerms: ["dns", "navneserver", "ns-peker"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [
      { question: "Må jeg endre SOA selv?", answer: "Nei. De fleste DNS-leverandører håndterer SOA automatisk og oppdaterer serial ved endringer." },
      { question: "Hva er negativ TTL?", answer: "Siste felt i SOA: hvor lenge resolvere skal mellomlagre beskjeden om at en post IKKE finnes." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "ptr-peker",
    term: "Hva er en PTR-peker?",
    shortDefinition:
      "En PTR-peker — pointer record — gjør motsatt DNS-oppslag: fra IP-adresse til domenenavn. Den brukes mest til reverse DNS, som er viktig for e-postservere — uten gyldig PTR blir e-post ofte stemplet som spam.",
    simpleExplanation:
      "Vanlig DNS slår opp IP fra navn. PTR slår opp navn fra IP. E-postservere bruker det for å sjekke at avsenderens IP og domenenavn henger sammen.",
    technicalExplanation:
      "PTR-poster ligger i den spesielle in-addr.arpa-sonen (IPv4) eller ip6.arpa (IPv6). De settes typisk hos hosting-leverandøren eller ISP-en som eier IP-blokken, ikke hos domeneleverandøren.",
    example: "1.2.3.4 → mail.domene.io",
    importance:
      "Manglende reverse DNS er en vanlig årsak til at egne mailservere får e-post stemplet som spam.",
    category: "dns",
    relatedTerms: ["a-peker", "dns", "spf"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Kan jeg sette PTR selv?", answer: "Bare hvis du eier IP-blokken. Vanligvis må du be hosting-leverandøren om å sette riktig PTR for IP-en din." },
      { question: "Trenger nettsider PTR?", answer: "Ikke kritisk for nettsider, men anbefalt og forventes for e-postservere." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "srv-peker",
    term: "Hva er en SRV-peker?",
    shortDefinition:
      "En SRV-peker — service record — peker på en spesifikk tjeneste på et bestemt port-nummer i et domene. Brukes mest av Microsoft 365, XMPP, SIP, Minecraft-servere og andre tjenester som trenger å finne riktig endepunkt.",
    simpleExplanation:
      "Mens A og CNAME peker bare på en server, peker SRV på \"server + port + tjeneste\". Det lar klienter finne riktig port automatisk.",
    technicalExplanation:
      "Format: `_service._proto.name TTL class SRV priority weight port target`. Klientprotokoller som støtter SRV slår opp denne posten først for å finne riktig server og port for tjenesten.",
    example: "_sip._tls.domene.io. 86400 IN SRV 10 5 5061 sip.domene.io.",
    importance:
      "Microsoft 365 og kommunikasjonstjenester krever korrekt SRV-oppsett for å fungere.",
    category: "dns",
    relatedTerms: ["dns", "mx-peker", "a-peker"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Trenger jeg SRV for vanlig nettside?", answer: "Nei. SRV brukes kun av tjenester som er bygget for å lese SRV-poster — ikke standard HTTP-trafikk." },
      { question: "Hva er forskjellen på priority og weight?", answer: "Priority gir rekkefølge (lavest først); weight fordeler trafikken mellom poster med samme priority." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "caa-peker",
    term: "Hva er en CAA-peker?",
    shortDefinition:
      "En CAA-peker — Certificate Authority Authorization — angir hvilke sertifikatutstedere som har lov til å utstede SSL-sertifikater for domenet ditt. Sertifikat-utstedere må sjekke CAA-posten før de signerer et sertifikat.",
    simpleExplanation:
      "CAA er en \"hvitelist\" for hvem som får lov til å lage SSL-sertifikater for domenet ditt. Det forhindrer at uvedkommende får utstedt sertifikat på dine vegne.",
    technicalExplanation:
      "Format: `domene.no. CAA 0 issue \"letsencrypt.org\"`. Flagget 0 (issue), `issuewild` for wildcards, og `iodef` for varsling. Manglende CAA betyr alle CA-er kan utstede.",
    example: "domene.io. IN CAA 0 issue \"letsencrypt.org\"",
    importance:
      "Anbefalt sikkerhetstiltak — beskytter mot uautorisert sertifikat-utstedelse og kapring.",
    category: "sikkerhet",
    relatedTerms: ["ssl", "dns", "dnssec"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      { question: "Må alle ha CAA?", answer: "Nei, men det anbefales for bedrifter og høyverdige domener. Det er en enkel ekstra forsvarslinje." },
      { question: "Hva skjer uten CAA-post?", answer: "Da kan teknisk sett enhver CA utstede sertifikat — men de fleste seriøse CA-er gjør domain validation før utstedelse." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "spf",
    term: "Hva er SPF?",
    shortDefinition:
      "SPF — Sender Policy Framework — er en TXT-post i DNS som angir hvilke servere som har lov til å sende e-post på vegne av domenet. Mottakerservere sjekker SPF for å avgjøre om en innkommende e-post er ekte eller forsøk på spoofing.",
    simpleExplanation:
      "SPF fungerer som en gjesteliste. Hvis avsender-IP-en ikke står på listen, vet mottakeren at e-posten kanskje ikke er ekte.",
    technicalExplanation:
      "SPF-record er en TXT på rotnavnet med syntaks som `v=spf1 include:_spf.google.com -all`. Mekanismer kan være ip4, ip6, a, mx, include, all, med modifikatorer + (pass), - (fail), ~ (softfail), ? (neutral).",
    example: "v=spf1 include:_spf.google.com include:mailgun.org ~all",
    importance:
      "Uten SPF havner e-post fra ditt domene oftere i spam, og spoofing blir lettere.",
    category: "e-post",
    relatedTerms: ["dkim", "dmarc", "txt-peker"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Hva betyr -all vs ~all?", answer: "-all (hardfail) avviser e-post fra andre kilder. ~all (softfail) markerer som mistenkelig, men slipper igjennom. Start med ~all under utrulling." },
      { question: "Kan jeg ha to SPF-poster?", answer: "Nei. Du må ha én SPF-post per domene, men den kan inneholde flere include-mekanismer." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "dkim",
    term: "Hva er DKIM?",
    shortDefinition:
      "DKIM — DomainKeys Identified Mail — signerer utgående e-post kryptografisk med en privatnøkkel hos avsenderen. Mottakeren bruker en offentlig nøkkel publisert i DNS for å verifisere at meldingen ikke er endret underveis og kommer fra autorisert kilde.",
    simpleExplanation:
      "DKIM legger en digital signatur på hver e-post du sender. Mottakeren sjekker signaturen mot nøkkelen din i DNS — hvis det stemmer, er meldingen ekte.",
    technicalExplanation:
      "DKIM-public key publiseres som en TXT-post på `selector._domainkey.domene.no`. E-postservere signerer headere og body med tilhørende privatnøkkel. RSA 2048-bit eller ed25519 anbefales i 2026.",
    example: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBi...",
    importance:
      "DKIM kombinert med SPF og DMARC er industri-standard for e-postlevering. Uten DKIM får du dårlig leverbarhet.",
    category: "e-post",
    relatedTerms: ["spf", "dmarc", "txt-peker"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Hvor får jeg DKIM-nøkler fra?", answer: "Fra e-postleverandøren din (Google Workspace, Microsoft 365, etc.). De gir deg ferdige TXT-verdier å lime inn i DNS." },
      { question: "Bør jeg rotere DKIM-nøkler?", answer: "Ja, anbefalt en gang per år. Mange leverandører gjør dette automatisk." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "dmarc",
    term: "Hva er DMARC?",
    shortDefinition:
      "DMARC — Domain-based Message Authentication — bygger på SPF og DKIM og forteller mottakerservere hvordan de skal håndtere e-post som ikke består autentisering. DMARC kan også sende rapporter om mistenkelig aktivitet til domeneeieren.",
    simpleExplanation:
      "Mens SPF og DKIM bekrefter avsender, sier DMARC: \"Hvis sjekkene feiler — gjør X.\" X kan være ingenting, sett i karantene, eller avvis.",
    technicalExplanation:
      "DMARC publiseres som TXT på `_dmarc.domene.no`. Policy `p=` kan være none, quarantine eller reject. `rua=` mottar aggregerte rapporter; `ruf=` mottar feilrapporter. Krever alignment mellom domain i From og SPF/DKIM.",
    example: "v=DMARC1; p=quarantine; rua=mailto:dmarc@domene.no; pct=100;",
    importance:
      "DMARC er essensielt for å beskytte merkevaren mot phishing og forfalskede e-poster. Stadig flere mottakerdomener krever det.",
    category: "e-post",
    relatedTerms: ["spf", "dkim", "txt-peker"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Skal jeg starte med p=reject?", answer: "Nei. Start alltid med p=none, samle inn rapporter i 4-8 uker, justér SPF/DKIM, så stram til quarantine og deretter reject." },
      { question: "Hva er BIMI?", answer: "BIMI lar deg vise logoen din i innboksen, men krever at DMARC står på p=quarantine eller p=reject først." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "mx-pri",
    term: "Hva er MX-prioritet?",
    shortDefinition:
      "MX-prioritet er et tall som bestemmer rekkefølgen mellom flere mailservere for samme domene. Lavere tall betyr høyere prioritet. Brukes til failover — hvis primær mailserver er nede, prøver mottakere automatisk neste i listen.",
    simpleExplanation:
      "Hvis du har to mailservere, sier prioritetstallet hvilken som skal forsøkes først. Den med lavest tall vinner.",
    technicalExplanation:
      "Format: `domene.no. IN MX 10 mail1.domene.no.`. Standard 10/20/30 brukes ofte. Like prioriteter gir round-robin lastfordeling.",
    example: "10 mail1.domene.no. — primær. 20 mail2.domene.no. — backup.",
    importance:
      "Riktig prioritet sikrer at e-post leveres selv om hovedserveren er nede.",
    category: "e-post",
    relatedTerms: ["mx-peker", "dns"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Hvilke tall bør jeg bruke?", answer: "10 for primær, 20 for sekundær, 30 for tertiær. Selve verdien spiller ikke rolle — bare den relative rekkefølgen." },
      { question: "Trenger små bedrifter flere MX?", answer: "Hvis du bruker Google Workspace eller Microsoft 365 har du allerede flere MX-servere bak kulissene. Egen serverpark trenger backup-MX." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "imap-vs-pop3",
    term: "Hva er forskjellen på IMAP og POP3?",
    shortDefinition:
      "IMAP og POP3 er to protokoller for å hente e-post. IMAP holder e-post på serveren og synkroniserer mellom enheter; POP3 laster ned og fjerner som regel meldingene fra serveren. IMAP er standarden i dag.",
    simpleExplanation:
      "IMAP = synkronisert overalt, alltid. POP3 = last ned én gang, så er den kun lokalt. De fleste vil ha IMAP.",
    technicalExplanation:
      "IMAP4 (port 993 med TLS) holder mappene serverside. POP3 (port 995 med TLS) er enklere og bare henter; det kan konfigureres til å la kopier ligge igjen, men er sjelden i bruk lenger.",
    example: "Konfigurer IMAP for samme innboks på telefon, laptop og webmail samtidig.",
    importance:
      "Feil valg gir frustrasjon. Mange tror e-posten er borte når de bruker POP3 på flere enheter.",
    category: "e-post",
    relatedTerms: ["smtp", "mx-peker"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Hvorfor brukes POP3 fortsatt?", answer: "Når man vil ha lokal kopi uavhengig av serveren — eller for å spare lagring hos leverandøren." },
      { question: "Kan jeg bytte fra POP3 til IMAP?", answer: "Ja, men du må kanskje migrere lokale mapper manuelt til den nye IMAP-kontoen." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "smtp",
    term: "Hva er SMTP?",
    shortDefinition:
      "SMTP — Simple Mail Transfer Protocol — er protokollen som sender e-post mellom servere og fra klienter. Den bestemmer hvordan meldinger ruteres, men ikke hvordan de hentes ned (det gjør IMAP og POP3).",
    simpleExplanation:
      "SMTP er postmesteren som leverer brevet. IMAP og POP3 er postkassen din.",
    technicalExplanation:
      "SMTP bruker port 587 (submission med STARTTLS) eller 465 (TLS direkte) for klienter, og port 25 mellom servere. Krever auth fra klienter for å hindre misbruk.",
    example: "Brukernavn: kontakt@domene.no, server: smtp.domene.no, port: 587, TLS påkrevd.",
    importance:
      "Feil SMTP-oppsett betyr at du ikke får sendt e-post — selv om du kan motta.",
    category: "e-post",
    relatedTerms: ["imap-vs-pop3", "mx-peker", "spf"],
    relatedGuides: ["hvordan-sette-opp-epost"],
    faq: [
      { question: "Hvilken port bør jeg bruke?", answer: "587 med STARTTLS er anbefalt for klienter. 465 fungerer også. Aldri 25 fra klienter." },
      { question: "Hvorfor blokkerer ISP-en min port 25?", answer: "For å hindre at infiserte maskiner sender spam direkte. Bruk 587 i stedet." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "auth-kode",
    term: "Hva er en auth-kode?",
    shortDefinition:
      "En auth-kode — også kalt EPP-kode eller transfer-kode — er et passord som gir tilgang til å flytte et domene mellom registrarer. Den utstedes av nåværende registrar og må oppgis til ny leverandør innen kort tid for å fullføre flytting.",
    simpleExplanation:
      "Auth-koden er domenets midlertidige flyttebevis. Uten den får ikke en ny leverandør lov til å overta.",
    technicalExplanation:
      "Auth-koden brukes i EPP (Extensible Provisioning Protocol) som sikkerhetsmekanisme. Hver gTLD har sine regler, men standard er at koden er gyldig i begrenset tid og må fornyes hvis flyttingen ikke fullføres.",
    example: "Et eksempel på auth-kode: K7m@9hN!2pQrV (komplekst og engangsbruk).",
    importance:
      "Uten auth-kode kan du ikke flytte domenet. Mange registrarer skjuler den eller krever støtte for utlevering.",
    category: "domeneflytting",
    relatedTerms: ["epp", "registrar"],
    relatedGuides: ["hvordan-flytte-domene"],
    faq: [
      { question: "Hvor finner jeg auth-koden?", answer: "I kontrollpanelet hos nåværende registrar — ofte under domeneadministrasjon eller \"Transfer\" / \"Flytt\". Noen krever at du ber om den via support." },
      { question: "Trenger .no domener auth-kode?", answer: "Ja. Norid bruker også flyttekoder, men prosessen håndteres typisk av registrarene direkte." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "epp",
    term: "Hva er EPP?",
    shortDefinition:
      "EPP — Extensible Provisioning Protocol — er den tekniske protokollen registrarer bruker for å snakke med registries (organisasjonen som drifter et toppdomene). Alt fra registrering, fornyelse, flytting til DNS-oppdatering går via EPP.",
    simpleExplanation:
      "EPP er språket som brukes mellom domeneleverandører og toppdomenets registry. Du møter sjelden EPP direkte — det skjer i bakgrunnen.",
    technicalExplanation:
      "EPP er en XML-basert protokoll definert i RFC 5730 og påfølgende. Kjører over TLS og brukes for objekter som domain, host, contact. Registrarer må være akkrediterte for å koble seg til en registry.",
    example: "Når du registrerer et nytt domene, sender registraren en EPP `<create>` til registry — gjerne på under et sekund.",
    importance:
      "EPP er fundamentet for hele domeneindustriens infrastruktur — uten det ville ikke registrering og flytting fungert globalt.",
    category: "domeneregistrering",
    relatedTerms: ["registrar", "auth-kode"],
    relatedGuides: ["hvordan-registrere-no-domene"],
    faq: [
      { question: "Bruker .no EPP?", answer: "Ja. Norid bruker EPP for kommunikasjon med akkrediterte registrarer." },
      { question: "Kan jeg snakke EPP selv?", answer: "Bare hvis du blir akkreditert registrar — ikke for vanlige domeneeier." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "norid",
    term: "Hva er Norid?",
    shortDefinition:
      "Norid er den norske registry-en — organisasjonen som drifter toppdomenet .no, .sj og .bv på vegne av norske myndigheter. Norid administrerer regelverket og driver de tekniske systemene, men du registrerer .no via en akkreditert registrar.",
    simpleExplanation:
      "Norid eier ikke domenene dine, men holder orden på dem og setter reglene for hvem som kan registrere .no.",
    technicalExplanation:
      "Norid er datterselskap av UNINETT/Sikt, lokalisert i Trondheim. De drifter EPP-grensesnittet, primære navneservere og policy for .no, og samarbeider med registrarer som Domeneshop, One.com, IIO m.fl.",
    example: "Når du registrerer mittfirma.no via Domeneshop, går EPP-meldingen til Norid som faktisk holder registreringen.",
    importance:
      "Forståelse av Norid er nyttig for å forstå hvorfor .no har spesielle regler (organisasjonsnummer, antall domener etc.) sammenlignet med .com.",
    category: "no-domene",
    relatedTerms: ["registrar", "tld", "registrant"],
    relatedGuides: ["hvordan-registrere-no-domene"],
    faq: [
      { question: "Kan jeg registrere .no direkte hos Norid?", answer: "Nei. Norid jobber kun med akkrediterte registrarer. Privatpersoner og bedrifter må gå gjennom dem." },
      { question: "Hva koster en .no fra Norid?", answer: "Norid-avgiften er rimelig (~57 NOK/år), men registraren legger på sin egen pris ovenpå." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "icann",
    term: "Hva er ICANN?",
    shortDefinition:
      "ICANN — Internet Corporation for Assigned Names and Numbers — er den globale organisasjonen som koordinerer toppdomener (gTLD), IP-adresser og protokoll-numre. ICANN akkrediterer registrarer for gTLD-er som .com, .org og .net.",
    simpleExplanation:
      "ICANN er ikke en internett-politi, men en standardisator. De sørger for at det finnes regler og at adresseringen fungerer globalt.",
    technicalExplanation:
      "ICANN ble etablert i 1998, har hovedkontor i Los Angeles, og opererer på flere kontrakter med registries og registrarer. ccTLD-er som .no styres av nasjonale registries (Norid), ikke ICANN direkte.",
    example: "En .com-registrar er akkreditert av ICANN. En .no-registrar er akkreditert av Norid.",
    importance:
      "ICANN-regler påvirker priser, eierskap, GDPR-håndtering av WHOIS, og domenetvister på gTLD-er.",
    category: "internasjonale-domener",
    relatedTerms: ["norid", "registrar", "gtld", "cctld"],
    relatedGuides: [],
    faq: [
      { question: "Bestemmer ICANN over .no?", answer: "Nei. .no er en ccTLD og styres av Norid. ICANN har kun overordnet rolle i rotsone-administrasjon." },
      { question: "Trenger jeg å forholde meg til ICANN?", answer: "Vanligvis ikke direkte — registraren håndterer det. Du møter dem ved tvister (UDRP) og endring av kontaktinfo." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "gtld",
    term: "Hva er gTLD?",
    shortDefinition:
      "gTLD — generic Top-Level Domain — er et generisk toppdomene som ikke er knyttet til et land. De klassiske er .com, .org og .net, men nyere finnes som .io, .app, .blog. De administreres globalt under ICANN.",
    simpleExplanation:
      "gTLD er domener uten landstilhørighet — \"globale\" toppdomener. Du kan registrere .com fra hvor som helst i verden.",
    technicalExplanation:
      "Det skilles mellom legacy gTLD (.com, .net, .org, .info, .biz), restricted (.gov, .edu) og new gTLD (lansert fra 2014, over 1500 finnes nå). Hver har egen registry, men felles regelverk fra ICANN.",
    example: ".com (Verisign), .io (Identity Digital), .app (Google).",
    importance:
      "Valg mellom ccTLD og gTLD påvirker SEO, oppfattelse av lokal vs. global merkevare, og eventuelt pris.",
    category: "internasjonale-domener",
    relatedTerms: ["cctld", "tld", "icann"],
    relatedGuides: ["hvordan-velge-domenenavn"],
    faq: [
      { question: "Er .io en gTLD?", answer: "Strengt tatt er .io en ccTLD for British Indian Ocean Territory, men brukes globalt som gTLD-aktig (særlig av tech-selskaper)." },
      { question: "Hva koster nye gTLD-er?", answer: "Varierer veldig — fra ~100 til flere tusen kr/år. Sjekk pris hos flere registrarer før du velger." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "cctld",
    term: "Hva er ccTLD?",
    shortDefinition:
      "ccTLD — country-code Top-Level Domain — er et toppdomene tildelt et bestemt land, basert på ISO 3166-1-koder. Eksempler: .no for Norge, .se for Sverige, .uk for Storbritannia. Hver ccTLD styres av sin nasjonale registry.",
    simpleExplanation:
      "ccTLD signaliserer hvilket land et domene er knyttet til. .no = Norge, .dk = Danmark.",
    technicalExplanation:
      "ccTLD-er er to-bokstavs koder fra ISO 3166-1 alpha-2. Noen er strengt regulert (.no krever organisasjonsnummer eller fødselsnummer), andre er åpne (.io, .me).",
    example: ".no (Norid), .se (IIS), .dk (DK Hostmaster).",
    importance:
      "ccTLD gir lokal SEO-fordel og signal om geografisk relevans til norske kunder.",
    category: "internasjonale-domener",
    relatedTerms: ["gtld", "tld", "norid"],
    relatedGuides: ["hvordan-velge-domenenavn"],
    faq: [
      { question: "Hvilket lands ccTLD bør jeg velge?", answer: "Velg ccTLD i markedet du retter deg mot. For norske kunder: .no. For internasjonal: .com eller en relevant ny gTLD." },
      { question: "Kan utlendinger registrere .no?", answer: "Bare med norsk organisasjonsnummer eller via lokal representant." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "idn",
    term: "Hva er IDN?",
    shortDefinition:
      "IDN — Internationalized Domain Names — er domener som inneholder tegn utenfor ASCII, som æ, ø, å eller arabiske og kinesiske tegn. De konverteres internt til Punycode (xn--…) som DNS-systemet kan håndtere.",
    simpleExplanation:
      "IDN gjør at du kan ha bokstaver som æ, ø og å i domenet. Datamaskiner ser xn--… i bakgrunnen, men brukerne ser de \"riktige\" tegnene.",
    technicalExplanation:
      "IDN bruker Punycode-konvertering definert i RFC 3492. domæne.no blir xn--domne-zsa.no internt. Norid tillater æ, ø, å siden 2014. Nettlesere viser typisk IDN i adressefeltet, men kan vise Punycode hvis det ser ut som phishing.",
    example: "domæne.no → xn--domne-zsa.no",
    importance:
      "IDN gir bedre merkevare og lesbarhet for norske kunder, men kan misbrukes til homograf-angrep (forfalskede domener).",
    category: "internasjonale-domener",
    relatedTerms: ["tld", "no-domene"],
    relatedGuides: ["hvordan-velge-domenenavn"],
    faq: [
      { question: "Bør jeg registrere både domæne.no og domene.no?", answer: "Ja, hvis merkevaren har æ/ø/å. Defensiv registrering hindrer at andre tar varianten." },
      { question: "Fungerer IDN i e-post?", answer: "Ja, men avhengig av at både avsender- og mottaker-server støtter EAI (Email Address Internationalization)." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "punycode",
    term: "Hva er Punycode?",
    shortDefinition:
      "Punycode er en konverteringsmetode som omformer Unicode-tegn (som æ, ø, å, kinesisk, arabisk) til ASCII-strenger som DNS kan håndtere. Punycode-strenger starter alltid med prefikset `xn--`.",
    simpleExplanation:
      "Punycode er språkbroen mellom moderne tegn og det gamle DNS-systemet som bare forstår engelske bokstaver og tall.",
    technicalExplanation:
      "Punycode er definert i RFC 3492 og brukes som en del av IDNA-standarden. Konverteringen er én-til-én: æ, ø, å og lignende mappes til en deterministisk ASCII-streng.",
    example: "domæne.no → xn--domne-zsa.no — den siste delen er Punycode for tegn-erstatningen.",
    importance:
      "Du må vite at domenet ditt har et Punycode-alias når du konfigurerer DNS, e-post og sertifikater.",
    category: "internasjonale-domener",
    relatedTerms: ["idn"],
    relatedGuides: [],
    faq: [
      { question: "Må jeg konfigurere noe i Punycode?", answer: "Som regel ikke. Moderne verktøy konverterer automatisk. Men ved manuell DNS-redigering eller sertifikater må du vite Punycode-formen." },
      { question: "Er Punycode sikkert?", answer: "Konverteringen er trygg, men kan brukes til homograf-angrep. Nettlesere viser Punycode i tvilstilfeller for å hindre svindel." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "tls",
    term: "Hva er TLS?",
    shortDefinition:
      "TLS — Transport Layer Security — er den moderne kryptografiske protokollen som sikrer kommunikasjon på internett. Det er etterfølgeren til SSL og brukes for HTTPS, sikker e-post (SMTPS, IMAPS) og andre tjenester. TLS 1.3 er gjeldende anbefaling.",
    simpleExplanation:
      "TLS krypterer trafikken mellom datamaskiner slik at ingen kan lese eller endre den underveis. Når du ser HTTPS, er det TLS som jobber bak.",
    technicalExplanation:
      "TLS 1.2 (2008) og TLS 1.3 (2018) er aktuelle versjoner. TLS 1.3 har raskere håndtrykk (1-RTT) og fjernet svake algoritmer. Krever et X.509-sertifikat signert av en anerkjent CA.",
    example: "https://domene.io åpner TLS-forbindelse på port 443 før HTTP-trafikken sendes.",
    importance:
      "Uten TLS kan trafikken mellom bruker og server avlyttes. I praksis kreves det av nettlesere og søkemotorer.",
    category: "sikkerhet",
    relatedTerms: ["ssl", "https"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      { question: "Er SSL og TLS det samme?", answer: "I dagligtale: ja. Teknisk: SSL er forgjengeren og er foreldet. \"SSL-sertifikat\" er bare en folkemund-betegnelse — det er egentlig TLS." },
      { question: "Trenger jeg fortsatt TLS 1.2?", answer: "Nei, TLS 1.3 dekker. Men mange servere støtter begge for bakoverkompatibilitet med eldre klienter." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "https",
    term: "Hva er HTTPS?",
    shortDefinition:
      "HTTPS — HTTP Secure — er den sikre versjonen av HTTP-protokollen, og bruker TLS for å kryptere og autentisere trafikken mellom nettleser og server. Vises i adresselinjen som https:// og ofte med en hengelås.",
    simpleExplanation:
      "HTTPS er HTTP med pansret rustning. All trafikk er kryptert, og nettleseren bekrefter at du faktisk snakker med riktig server.",
    technicalExplanation:
      "HTTPS kjører HTTP over TLS, vanligvis på port 443. Krever et gyldig sertifikat. HSTS (HTTP Strict Transport Security) tvinger nettlesere til alltid å bruke HTTPS for et domene.",
    example: "https://domene.io vs http://domene.io — de fleste moderne sider redirigerer automatisk til HTTPS.",
    importance:
      "Google rangerer HTTPS-sider høyere, og de fleste nettlesere advarer ved HTTP. Regnes som obligatorisk i 2026.",
    category: "sikkerhet",
    relatedTerms: ["ssl", "tls", "hsts"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      { question: "Trenger jeg HTTPS for en hjemmeside?", answer: "Ja. Selv en enkel landingsside bør ha HTTPS. Let's Encrypt gir gratis sertifikat på minutter." },
      { question: "Hvordan får jeg HTTPS?", answer: "De fleste webhotell tilbyr automatisk Let's Encrypt-sertifikat. Cloudflare og Vercel håndterer det også gratis." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "hsts",
    term: "Hva er HSTS?",
    shortDefinition:
      "HSTS — HTTP Strict Transport Security — er en header som forteller nettleseren at den alltid skal bruke HTTPS for et domene, selv om brukeren skriver http://. HSTS-preload kan garantere HTTPS allerede ved første besøk.",
    simpleExplanation:
      "HSTS låser fast at nettstedet kun skal nås via HTTPS. Det stenger døren for downgrade-angrep.",
    technicalExplanation:
      "Implementert som HTTP-header `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`. Preload-listen vedlikeholdes av Chrome og brukes av andre nettlesere.",
    example: "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
    importance:
      "Beskytter mot man-in-the-middle-angrep der noen prøver å lure nettleseren til å bruke ukryptert HTTP.",
    category: "sikkerhet",
    relatedTerms: ["https", "tls"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      { question: "Er HSTS reversibelt?", answer: "Ja, men kan ta lang tid (max-age) før nettlesere glemmer policyen. Preload er enda vanskeligere å reversere." },
      { question: "Bør jeg bruke includeSubDomains?", answer: "Bare hvis ALLE subdomener kan kjøre HTTPS. Ellers låser du deg ute fra interne tjenester." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "wildcard-sertifikat",
    term: "Hva er et wildcard-sertifikat?",
    shortDefinition:
      "Et wildcard-sertifikat dekker alle subdomener på ett nivå under et hoveddomene, slik at *.domene.no fungerer for både www, app, blog og api uten å trenge separate sertifikater for hvert subdomene.",
    simpleExplanation:
      "I stedet for å ha 50 sertifikater for 50 subdomener kan du ha ett wildcard-sertifikat som dekker alle.",
    technicalExplanation:
      "Wildcard angis som `*.domene.no` i Subject Alternative Name. Dekker bare ett nivå — sub.under.domene.no krever et eget wildcard `*.under.domene.no`. Krever DNS-validering hos Let's Encrypt.",
    example: "*.domene.no dekker www.domene.no, app.domene.no, men IKKE www.app.domene.no.",
    importance:
      "Forenkler administrasjon ved mange subdomener, men gir også risiko: én lekket nøkkel kompromitterer alle subdomener.",
    category: "sikkerhet",
    relatedTerms: ["ssl", "tls", "https"],
    relatedGuides: ["hvordan-sikre-domenet"],
    faq: [
      { question: "Er wildcard tryggere enn vanlige sertifikater?", answer: "Nei, snarere mindre trygt. Alt-på-ett-sted øker risiko ved kompromittering. Bruk individuelle sertifikater hvor mulig." },
      { question: "Får jeg gratis wildcard?", answer: "Ja, Let's Encrypt tilbyr gratis wildcard via DNS-01-validering." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "cdn",
    term: "Hva er CDN?",
    shortDefinition:
      "CDN — Content Delivery Network — er et nettverk av servere fordelt geografisk som leverer innhold (bilder, videoer, sider) fra det nærmeste datasenteret til brukeren. Det reduserer ventetid og avlaster opprinnelses-serveren.",
    simpleExplanation:
      "I stedet for å hente alt fra én server i Tyskland, henter CDN-en innhold fra nærmeste server — kanskje i Oslo. Det blir raskere for brukeren.",
    technicalExplanation:
      "CDN-leverandører (Cloudflare, Fastly, Akamai, Vercel Edge) speiler statisk innhold på \"edge nodes\" og bruker DNS/anycast for å rute brukere til nærmeste node. Dynamisk innhold kan også caches med riktige headere.",
    example: "En bruker i Oslo henter bilder fra Cloudflares Oslo-node, ikke fra opphavsserveren i Frankfurt.",
    importance:
      "CDN gir både ytelse og sikkerhet (DDoS-beskyttelse). Et must for nettsider med global eller voksende trafikk.",
    category: "webhotell",
    relatedTerms: ["dns", "https"],
    relatedGuides: [],
    faq: [
      { question: "Trenger en liten norsk side CDN?", answer: "Ikke alltid for ytelse, men gratis CDN-er som Cloudflare gir DDoS-beskyttelse og forenkler HTTPS — verdt det." },
      { question: "Påvirker CDN SEO?", answer: "Indirekte ja — raskere lastetid gir bedre rangering. Forsikre deg om at canonical URL ikke endres når du legger på CDN." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "webhotell",
    term: "Hva er et webhotell?",
    shortDefinition:
      "Et webhotell er en tjeneste som lagrer nettsiden din på en server tilgjengelig på internett. Det inkluderer typisk lagring, båndbredde, e-post og databasestøtte. Webhotell deles ofte av flere kunder på samme server (delt hosting).",
    simpleExplanation:
      "Et webhotell er som en leid leilighet for nettsiden din. Du eier ikke serveren, men leier plass og tjenester der.",
    technicalExplanation:
      "Typer: shared hosting (mange på samme maskin), VPS (virtuell privat server), dedikert server (egen maskin), og cloud/PaaS (Vercel, Netlify, Render). Velg etter behov for ytelse, kontroll og pris.",
    example: "domeneshop.no, one.com, hyp.net er kjente norske webhotell-leverandører.",
    importance:
      "Valg av webhotell påvirker hastighet, oppetid, sikkerhet og hvor mye teknisk arbeid du må gjøre selv.",
    category: "webhotell",
    relatedTerms: ["dns", "ssl", "cdn"],
    relatedGuides: [],
    faq: [
      { question: "Skiller webhotell og domene seg?", answer: "Ja. Domenet er adressen, webhotellet er huset. Du kan kjøpe dem fra ulike leverandører." },
      { question: "Hva er forskjellen på webhotell og cloud?", answer: "Tradisjonelt webhotell har faste ressurser; cloud (AWS, GCP, Vercel) skalerer automatisk og betales per bruk." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "subdomene",
    term: "Hva er et subdomene?",
    shortDefinition:
      "Et subdomene er en del foran hoveddomenet, som blog.domene.no eller shop.domene.no. Det fungerer som en egen seksjon, kan peke til en annen server eller tjeneste, og brukes ofte for å organisere innhold eller miljøer.",
    simpleExplanation:
      "Hoveddomenet er adressen til huset; subdomener er adresser til ulike rom — alle tilhører samme hus.",
    technicalExplanation:
      "Et subdomene er en DNS-node under apex-domenet. Det kan ha sine egne A, AAAA, CNAME, MX og andre poster, og kan delegeres til separate navneservere (subdelegasjon).",
    example: "blog.domene.no, app.domene.no, mail.domene.no.",
    importance:
      "Subdomener brukes til å skille tjenester, miljøer (test, staging) og innholdstyper uten å registrere nytt domene.",
    category: "dns",
    relatedTerms: ["dns", "a-peker", "cname"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [
      { question: "Bør jeg bruke subdomener eller mapper for blogg?", answer: "Begge fungerer for SEO. Subdomene er enklere hvis du kjører bloggen på en egen plattform; mappe (/blog) holder all SEO-vekt på hoveddomenet." },
      { question: "Hvor mange subdomener kan jeg ha?", answer: "Praktisk talt ubegrenset. De fleste DNS-leverandører har ingen hard grense." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "varemerke",
    term: "Hva er forskjellen på varemerke og domene?",
    shortDefinition:
      "Et domene er en internett-adresse du leier; et varemerke er en juridisk rettighet til et navn eller logo, registrert hos Patentstyret. Et varemerke kan gi deg fortrinn ved tvist om et domene som krenker dine rettigheter.",
    simpleExplanation:
      "Domenet er teknisk eierskap; varemerket er juridisk eierskap. Varemerket gir deg rett til å bruke navnet — også uten å eie det tekniske domenet.",
    technicalExplanation:
      "Varemerker registreres hos Patentstyret (Norge), EUIPO (EU) eller WIPO (internasjonalt). I domenetvister brukes ofte UDRP (gTLD) eller .no-tvisteordningen for å håndheve varemerkerett mot misbrukende registreringer.",
    example: "Hvis noen registrerer dittnavn-asa.no for å tvinge deg til å kjøpe det, kan du klage hvis du har varemerke på \"DittNavn\".",
    importance:
      "Bedrifter bør tidlig vurdere både varemerke og domeneportefølje for å sikre rettigheter — særlig før internasjonal lansering.",
    category: "juridisk-og-varemerke",
    relatedTerms: ["udrp"],
    relatedGuides: [],
    faq: [
      { question: "Må jeg ha varemerke for å eie et domene?", answer: "Nei. Du kan eie domenet fritt, men varemerke gir tilleggsbeskyttelse mot squatting og imitasjon." },
      { question: "Hvor mye koster varemerke?", answer: "I Norge ca. 4 000 kr for én klasse hos Patentstyret. EU-merke (EUIPO) starter på ca. 850 EUR." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "udrp",
    term: "Hva er UDRP?",
    shortDefinition:
      "UDRP — Uniform Domain-Name Dispute-Resolution Policy — er ICANN-prosessen for å klage på domener som krenker varemerker, brukt for gTLD-er som .com, .net og .org. Avgjøres av paneler hos WIPO eller andre godkjente organer.",
    simpleExplanation:
      "UDRP er en \"domene-domstol\" der du kan kreve å få overført eller slettet et domene som åpenbart misbruker ditt varemerke.",
    technicalExplanation:
      "Klager må vise tre forhold: at domenet er identisk eller forvirrende likt et varemerke, at registranten ikke har legitime interesser i navnet, og at domenet er registrert eller brukt i ond tro. Saksbehandlingstid: 2-3 måneder.",
    example: "Coca-Cola brukte UDRP for å få overført coca-colaspecial.com fra cybersquatter.",
    importance:
      "Raskere og billigere enn vanlig domstol — typisk 1500 USD per klage. Egen tvistemekanisme finnes for .no.",
    category: "juridisk-og-varemerke",
    relatedTerms: ["varemerke", "icann"],
    relatedGuides: [],
    faq: [
      { question: "Gjelder UDRP for .no?", answer: "Nei. .no har egen tvistemekanisme administrert av Norid med eget regelverk." },
      { question: "Hva koster UDRP?", answer: "Ca. 1 500 USD for ett-panel-saker hos WIPO. Tre-panel-saker er dyrere." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "cybersquatting",
    term: "Hva er cybersquatting?",
    shortDefinition:
      "Cybersquatting er praksis der noen registrerer domener som matcher kjente varemerker eller selskapsnavn med hensikt å selge dem dyrt eller utnytte trafikken. Det regnes som ond tro og kan utfordres via UDRP eller domstol.",
    simpleExplanation:
      "Cybersquatter kjøper domener i håp om at den \"riktige\" eieren vil betale dyrt. Det er ikke ulovlig per se, men kan tilbakeføres ved klage.",
    technicalExplanation:
      "Skiller seg fra typosquatting (registrering av feilstaving) og legitim domeneinvestering (generiske ord uten varemerke-konflikt). UDRP og .no-tvister krever bevis for ond tro.",
    example: "Registrering av nytt-firma-as.no rett etter offentlig kunngjøring av navneendring i Brønnøysund.",
    importance:
      "Bedrifter bør registrere defensive domener og overvåke nye registreringer som matcher varemerker.",
    category: "juridisk-og-varemerke",
    relatedTerms: ["udrp", "varemerke"],
    relatedGuides: [],
    faq: [
      { question: "Er det lovlig?", answer: "Ikke per se ulovlig, men misbruk av andres varemerker kan gi krav om tilbakeføring og erstatning." },
      { question: "Hvordan beskytter jeg meg?", answer: "Registrer varemerket, kjøp viktige domenevarianter (med æøå, .com, .no, vanlige feilstavinger), og overvåk nye registreringer." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "domeneinvestering",
    term: "Hva er domeneinvestering?",
    shortDefinition:
      "Domeneinvestering er kjøp og salg av domener som finansielle eiendeler. Investorer kjøper generiske, korte eller ettertraktede navn for å selge dem videre med fortjeneste — alt fra hundre til millioner av kroner per domene.",
    simpleExplanation:
      "Som eiendomsmegling, men for internett-adresser. Du kjøper et domene billig, sitter på det, og selger det dyrere når noen vil ha det.",
    technicalExplanation:
      "Markedet inkluderer auksjoner (Sedo, Dynadot, GoDaddy Auctions), brokeret salg (Saw.com, MediaOptions), og direkte handel. Premium-domener handles til 5-7 sifrede summer; kategori-domener (clinic.com, business.no) er mest verdifulle.",
    example: "voice.com ble solgt for 30 millioner USD i 2019. business.no ble solgt for over 1 million NOK.",
    importance:
      "Forståelse av markedet hjelper bedrifter både med å beskytte egne navn og vurdere kjøp av eksisterende domener.",
    category: "domeneinvestering",
    relatedTerms: ["registrar", "tld"],
    relatedGuides: [],
    faq: [
      { question: "Kan jeg leve av å investere i domener?", answer: "Få gjør det. De aller fleste investeringer går i null eller minus. Profesjonelle investorer har ofte tusenvis av domener." },
      { question: "Hva er et 'premium-domene'?", answer: "Generelt et kort, generisk og lett å huske domene — gjerne et engelsk substantiv på .com som lover trafikk og SEO-verdi." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "domeneutleie",
    term: "Hva er domeneutleie?",
    shortDefinition:
      "Domeneutleie — også kalt domain leasing — er en avtale der eieren leier ut bruken av et domene mot månedlig eller årlig betaling, uten å overføre eierskap. Brukes når en kjøper ikke har råd til full kjøpesum, eller eieren vil beholde langvarig kontroll.",
    simpleExplanation:
      "I stedet for å kjøpe domenet leier du retten til å bruke det. Eierne sitter på navnet; du betaler for å nyte godt av det.",
    technicalExplanation:
      "Avtalen styrer DNS-kontroll, varighet og opsjoner for kjøp ved utløp. Domeneeier opprettholder kontroll over registrering og kan tilbakekalle ved manglende betaling. Krever skriftlig avtale.",
    example: "Et selskap leier vask.no for 5 000 kr/mnd med kjøpsopsjon på 500 000 kr etter 24 måneder.",
    importance:
      "Lavere terskel enn full kjøp — gunstig for nystartede selskaper som vil teste merkevare før investering.",
    category: "domeneutleie",
    relatedTerms: ["domeneinvestering", "registrant"],
    relatedGuides: [],
    faq: [
      { question: "Kan jeg miste domenet ved utleie?", answer: "Ja, ved kontraktsbrudd. Sørg for skriftlig avtale med tydelige vilkår for opsjon, varighet og DNS-kontroll." },
      { question: "Beholder jeg SEO-verdien?", answer: "Du bygger SEO i leieperioden, men risikerer å miste alt hvis avtalen ikke fornyes — vurder nøye." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "drop-catching",
    term: "Hva er drop-catching?",
    shortDefinition:
      "Drop-catching er praksis å forsøke å registrere et domene i sekundene etter at det utløper og slippes tilbake til markedet. Spesialiserte tjenester sender millioner av forespørsler for å vinne ettertraktede domener før konkurrenter.",
    simpleExplanation:
      "Når et domene blir ledig (drops), står tusenvis av roboter klare til å snappe det. Den raskeste vinner.",
    technicalExplanation:
      "Tjenester som SnapNames, NameJet, DropCatch.com bruker høyhastighets EPP-tilgang og budgivning hvis flere fanger samtidig. .no-domener har egen utløpsprosess hos Norid.",
    example: "kjentmerkevare.com utløper, blir fanget av en investor på under 1 sekund, og selges videre dyrt.",
    importance:
      "Hvis et viktig domene mangler fornyelse, kan det forsvinne til en investor. Sett alltid auto-renew.",
    category: "domeneinvestering",
    relatedTerms: ["domeneinvestering", "registrar"],
    relatedGuides: [],
    faq: [
      { question: "Kan privatpersoner drop-catche?", answer: "Praktisk talt nei mot profesjonelle. Bruk en backorder-tjeneste hos en av de store dropcatcherne i stedet." },
      { question: "Gjelder dette .no?", answer: "Norid har en sletteprosess som tar dager — mindre fart, men også her finnes spesialiserte tjenester." },
    ],
    updatedAt: "2026-05-05",
  },
  {
    slug: "redemption-period",
    term: "Hva er redemption period?",
    shortDefinition:
      "Redemption period er fasen etter at et domene har utløpt og før det slettes endelig — typisk 30 dager for gTLD-er. I denne perioden kan eieren fortsatt få det tilbake mot et gjenopprettelsesgebyr, ofte mye dyrere enn vanlig fornyelse.",
    simpleExplanation:
      "En siste sjanse-periode. Domenet ditt er deaktivert, men du kan løse det inn — om enn dyrt — før det blir åpent for andre.",
    technicalExplanation:
      "ICANN-regulert prosess for gTLD: typisk 0-30 dager grace, 30 dager redemption, 5 dager pending delete, deretter slipp. .no har egen prosess hos Norid med opptil 60 dager før endelig sletting.",
    example: "Du glemte å fornye firma.com. Etter 30 dagers grace går det inn i 30 dagers redemption — du kan løse det inn for ~1 000 kr ekstra.",
    importance:
      "Reagerer du raskt, kan du redde domenet. Etter pending delete er det stort sett tapt til drop-catchers.",
    category: "domeneflytting",
    relatedTerms: ["registrar", "drop-catching"],
    relatedGuides: ["hvordan-flytte-domene"],
    faq: [
      { question: "Hva koster redemption?", answer: "For gTLD typisk 800-1500 NOK. For .no varierer det mellom registrarer. Sett auto-renew for å unngå." },
      { question: "Hvor mange dager har jeg?", answer: "30 dager redemption + 5 pending delete for de fleste gTLD. For .no ligner prosessen, men sjekk hos registraren." },
    ],
    updatedAt: "2026-05-05",
  },
];

export const findGlossary = (slug: string) =>
  glossary.find((g) => g.slug === slug);
