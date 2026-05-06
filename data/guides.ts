import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "hvordan-registrere-no-domene",
    title: "Hvordan registrere et .no domene i 7 enkle steg",
    shortAnswer:
      "For å registrere et .no domene må du være privatperson med fødselsnummer eller en organisasjon i Enhetsregisteret. Velg et ledig navn, finn en registrar du stoler på, fullfør registreringen med riktig kontaktinformasjon, og bekreft at domenet er registrert i ditt eget navn - ikke leverandørens.",
    description:
      "Komplett steg-for-steg guide for å registrere et .no domene riktig - fra valg av navn til verifisering av eierskap.",
    category: "no-domene",
    difficulty: "nybegynner",
    readingTime: 8,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva må du vite før du registrerer?",
        paragraphs: [
          ".no er Norges nasjonale toppnivådomene, administrert av Norid. Det er strengere regulert enn for eksempel .com, men gir samtidig høy tillit og lokal forankring.",
          "Privatpersoner kan registrere inntil 5 .no domener, mens organisasjoner kan ha inntil 100. Du må oppfylle krav til norsk tilknytning.",
        ],
      },
      {
        heading: "Krav til registrering",
        paragraphs: [
          "Norid stiller konkrete krav før du kan registrere et .no domene. Disse er definert i regelverket for .no.",
        ],
        bullets: [
          "Privatpersoner: norsk fødselsnummer og myndighetsalder.",
          "Organisasjoner: registrert i Enhetsregisteret med eget organisasjonsnummer.",
          "Utenlandske enheter: krever lokal representant eller norsk avdeling.",
          "Domenenavnet må følge Norids regler for tegn og lengde.",
        ],
      },
      {
        heading: "Steg-for-steg registrering",
        paragraphs: [
          "Selve registreringen skjer gjennom en akkreditert registrar - ikke direkte hos Norid. Registraren håndterer den tekniske registreringen og fakturerer deg.",
        ],
      },
      {
        heading: "Etter registrering",
        paragraphs: [
          "Sjekk at domenet er registrert på riktig eier. Dette gjør du ved å slå opp domenet i WHOIS. Registrant-feltet skal vise ditt navn eller firma - ikke leverandøren.",
          "Hvis registrant ikke er deg, kontakt leverandøren umiddelbart og krev korrigering. Et domene registrert i feil navn kan bli vanskelig å flytte senere.",
        ],
      },
    ],
    steps: [
      {
        title: "Velg domenenavn",
        text: "Tenk merkevare først, nøkkelord andre. Et godt domenenavn er kort, lett å huske, og uten unødvendige tall eller bindestrek.",
      },
      {
        title: "Sjekk om navnet er ledig",
        text: "Bruk en domenesjekk eller WHOIS-oppslag. Vær oppmerksom på at noen ledige navn kan være varemerkebeskyttet.",
      },
      {
        title: "Velg en registrar",
        text: "Sammenlign registreringspris, fornyelsespris, brukervennlighet og kundeservice. Velg en som lar deg administrere DNS og tofaktor.",
      },
      {
        title: "Fyll inn riktig eierinformasjon",
        text: "Sørg for at registrant-feltet inneholder ditt navn eller firma. Bruk en e-postadresse du har permanent tilgang til.",
      },
      {
        title: "Aktiver tofaktor og sikkerhet",
        text: "Slå på tofaktorautentisering hos registraren med en gang. Vurder også DNSSEC og registry-lock for forretningskritiske domener.",
      },
      {
        title: "Sett opp DNS",
        text: "Pek navneserverne dit du vil drifte DNS - enten hos registraren, hos webhotellet eller hos en spesialisert DNS-leverandør.",
      },
      {
        title: "Bekreft eierskap i WHOIS",
        text: "Etter at registreringen er fullført, slå opp domenet i WHOIS og bekreft at registrant er deg eller ditt firma.",
      },
    ],
    pitfalls: [
      "Domenet er registrert i leverandørens navn, ikke ditt.",
      "Du bruker en e-postadresse du mister tilgang til (f.eks. tidligere arbeidsgiver).",
      "Du glemmer å slå på tofaktor.",
      "Du fornyer ikke i tide og mister domenet.",
      "Du registrerer et navn som er varemerkebeskyttet av andre.",
    ],
    checklist: [
      "Navnet er ledig og ikke varemerkebeskyttet av andre.",
      "Du har norsk tilknytning som oppfyller Norids krav.",
      "Registrant er deg eller ditt firma.",
      "Tofaktor er aktivert hos registraren.",
      "Påminnelse om fornyelse er satt opp.",
      "DNS er korrekt satt opp.",
    ],
    faq: [
      {
        question: "Hvor lang tid tar registreringen?",
        answer:
          "Selve registreringen er som regel ferdig på minutter når kravene er oppfylt og betaling er gjennomført.",
      },
      {
        question: "Kan jeg registrere et .no domene anonymt?",
        answer:
          "Nei. Norid krever at registrant er identifisert med fødselsnummer eller organisasjonsnummer. Personlige data om privatpersoner kan likevel være skjermet i offentlig WHOIS.",
      },
      {
        question: "Hva hvis flere ønsker samme domenenavn?",
        answer:
          "Først til mølla. Den som registrerer først, får domenet - med mindre det er åpenbar varemerkekrenkelse, da kan rettighetshaveren klage gjennom Norids regelverk.",
      },
    ],
    summary: [
      "Sjekk at navnet er ledig og ikke kolliderer med varemerker.",
      "Velg en registrar du stoler på - pris er ikke alt.",
      "Registrant skal alltid være deg, ikke leverandøren.",
      "Slå på tofaktor med en gang.",
      "Verifiser i WHOIS at alt stemmer etter registrering.",
    ],
    relatedGuides: ["hvordan-velge-domenenavn", "hvordan-flytte-domene"],
    relatedTerms: ["registrar", "registrant", "tld", "whois"],
    relatedTools: ["domenesjekk", "whois-oppslag"],
    nextStep: { label: "Sjekk om ditt ønskede domene er ledig", href: "/verktoy/domenesjekk" },
  },
  {
    slug: "hvordan-velge-domenenavn",
    title: "Hvordan velge riktig domenenavn",
    shortAnswer:
      "Et godt domenenavn er kort, minneverdig, lett å skrive og uten unødvendige tall eller bindestrek. Tenk merkevare før nøkkelord. Sjekk at navnet er ledig på toppdomenet du faktisk ønsker, at det ikke kolliderer med varemerker, og at det fungerer skriftlig og muntlig - også på telefon.",
    description:
      "Strategiske og praktiske tips for å velge et domenenavn som varer, fungerer for SEO, og bygger merkevare.",
    category: "no-domene",
    difficulty: "nybegynner",
    readingTime: 7,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Tenk merkevare før nøkkelord",
        paragraphs: [
          "Mange tror et keyword-stappet domene gir bedre SEO. I praksis er det motsatt - søkemotorer prioriterer kvalitet og merkevareautoritet, ikke nøkkelord i URL.",
          "Et merkenavn er enklere å markedsføre, lettere å huske, og tåler endringer i tjenestetilbud over tid. Husk at domenet skal følge deg i mange år.",
        ],
      },
      {
        heading: "Praktiske kriterier",
        paragraphs: [
          "Et godt domenenavn oppfyller flere kriterier samtidig. Bruk denne sjekklisten når du vurderer kandidater.",
        ],
        bullets: [
          "Kort: gjerne under 15 tegn.",
          "Enkelt å stave - også for noen som hører navnet på telefon.",
          "Uten bindestrek og uten tall hvis mulig.",
          "Lett å uttale på norsk.",
          "Tilgjengelig på det toppdomenet du faktisk vil bruke.",
          "Fri for varemerkekonflikter.",
        ],
      },
      {
        heading: "Velg riktig toppdomene",
        paragraphs: [
          "For norske bedrifter er .no nesten alltid førstevalget. Det signaliserer lokal forankring og bygger tillit hos norske kunder.",
          ".com er fortsatt internasjonalt anerkjent, men kan også være vanskeligere og dyrere å sikre. Mange registrerer flere varianter - .no som hovedadresse, og .com som omdirigering - for å beskytte merkevaren.",
        ],
      },
      {
        heading: "Vanlige feilvalg",
        paragraphs: [
          "Selv erfarne bedrifter kan gjøre valg de senere angrer på. Noen mønstre går igjen.",
        ],
        bullets: [
          "Kompliserte stavemåter som krever forklaring.",
          "Tall i navnet som forvirrer (er det «4» eller «for»?).",
          "Internt akronym som ingen utenfor firmaet forstår.",
          "Navn som er for snevert og begrenser veksten.",
          "Navn som krenker en eksisterende varemerkerett.",
        ],
      },
    ],
    pitfalls: [
      "Du velger et navn som er for likt en konkurrent.",
      "Du registrerer kun .com og glemmer .no.",
      "Du velger et navn som er vanskelig å forklare på telefon.",
      "Du henger deg opp i nøkkelord og glemmer merkevaren.",
    ],
    checklist: [
      "Navnet fungerer både skriftlig og muntlig.",
      "Du eier det på .no (og helst .com).",
      "Det krenker ingen varemerkerettigheter.",
      "Det tåler at firmaet utvider tjenestetilbudet.",
      "Det er ikke for likt en eksisterende aktør.",
    ],
    faq: [
      {
        question: "Bør jeg ha nøkkelord i domenet for SEO?",
        answer:
          "Ikke nødvendigvis. Merkevarenavn fungerer ofte bedre langsiktig. Søkemotorer rangerer på innhold og autoritet, ikke på nøkkelord i domenet.",
      },
      {
        question: "Bør jeg registrere flere varianter?",
        answer:
          "For kommersielle virksomheter er det vanlig å registrere både .no og .com, samt vanlige skrivefeil-varianter, for å beskytte merkevaren.",
      },
      {
        question: "Kan jeg endre domenenavnet senere?",
        answer:
          "Ja, men det er kostbart i form av SEO, e-postvarsling og merkebygging. Det er bedre å velge riktig fra starten.",
      },
    ],
    summary: [
      "Tenk merkevare først, nøkkelord etterpå.",
      "Hold navnet kort, enkelt og uten tall eller bindestrek.",
      "Sjekk varemerkeregisteret før registrering.",
      "Sikre minst .no - vurder også .com.",
      "Test navnet muntlig: kan du forklare det på telefon uten staving?",
    ],
    relatedGuides: ["hvordan-registrere-no-domene"],
    relatedTerms: ["tld", "registrant"],
    relatedTools: ["domenesjekk"],
    nextStep: { label: "Sjekk om navnet ditt er ledig", href: "/verktoy/domenesjekk" },
  },
  {
    slug: "hvordan-flytte-domene",
    title: "Slik flytter du domenet ditt uten nedetid",
    shortAnswer:
      "For å flytte et domene mellom registrarer trenger du auth-kode (også kalt EPP-kode) fra dagens leverandør. Sett opp DNS hos den nye leverandøren før du starter flyttingen, slik at nettside og e-post ikke får nedetid. Bekreft eierskap etter flytting og oppdater fornyelsesplan.",
    description:
      "Komplett guide for å flytte domenet trygt mellom registrarer, uten å miste nettside, e-post eller eierskap.",
    category: "domeneflytting",
    difficulty: "viderekommen",
    readingTime: 7,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hvorfor flytte domenet?",
        paragraphs: [
          "Vanlige grunner er bedre pris, dårlig kundeservice hos eksisterende leverandør, eller ønske om å samle alt på én plattform.",
          "Du har lovfestet rett til å flytte domenet ditt. Ingen leverandør kan stoppe en lovlig flytting når kravene er oppfylt.",
        ],
      },
      {
        heading: "Forberedelse er alt",
        paragraphs: [
          "Den vanligste årsaken til nedetid ved flytting er at man overser DNS-oppsettet. Bevar DNS-konfigurasjonen din nøyaktig hos den nye leverandøren før du fullfører flyttingen.",
        ],
      },
    ],
    steps: [
      {
        title: "Lag en oversikt over DNS-oppsettet",
        text: "Eksporter eller kopier alle DNS-poster fra dagens leverandør: A, AAAA, CNAME, MX, TXT, SRV. Også TTL-verdier. Du trenger denne listen for å replikere oppsettet hos den nye leverandøren.",
      },
      {
        title: "Sett opp DNS hos den nye leverandøren",
        text: "Legg inn alle DNS-poster identisk hos den nye leverandøren før selve flyttingen. På den måten vil tjenestene fortsette å fungere når domenet bytter navneserver.",
      },
      {
        title: "Hent auth-kode fra dagens registrar",
        text: "Logg inn og be om auth-kode (EPP-kode). Den kan komme på e-post eller vises i kontrollpanelet. Koden er som regel gyldig i et begrenset antall dager.",
      },
      {
        title: "Lås opp domenet",
        text: "Sjekk at domenet ikke er låst (transfer lock). Hvis det er låst, deaktiver låsen før du starter flyttingen.",
      },
      {
        title: "Start flyttingen hos ny registrar",
        text: "Initier flyttingen ved å oppgi domenenavn og auth-kode. Bekreft via e-post hvis det kreves.",
      },
      {
        title: "Bekreft i begge ender",
        text: "Du vil få e-poster fra både gammel og ny registrar. Bekreft og godkjenn flyttingen så raskt som mulig.",
      },
      {
        title: "Verifiser etter flytting",
        text: "Sjekk WHOIS for å bekrefte at registrar er endret, men registrant fortsatt er deg. Test nettside og e-post.",
      },
    ],
    pitfalls: [
      "Du flytter uten å sette opp DNS hos ny leverandør først.",
      "Du flytter for nær fornyelsesdato - domenet kan utløpe under flyttingen.",
      "Auth-koden er utløpt eller feil.",
      "E-postbekreftelser går til en gammel adresse du ikke leser.",
      "Domenet er låst og du har glemt å låse det opp.",
    ],
    checklist: [
      "DNS er kopiert til ny leverandør og verifisert.",
      "Auth-kode er hentet og gyldig.",
      "Domenet er låst opp.",
      "Du har minst 30 dager igjen til fornyelse.",
      "Bekreftelses-e-post leses av deg, ikke en ekstern.",
      "Nettsiden er testet etter flyttingen.",
    ],
    faq: [
      {
        question: "Hvor lang tid tar en flytting?",
        answer:
          "Vanligvis 1-7 dager. Norids .no-flyttinger går ofte raskt. Generiske toppdomener kan ta lengre tid.",
      },
      {
        question: "Mister jeg gjenværende tid på fornyelsen?",
        answer:
          "Som regel ikke. Gjenværende tid videreføres, og noen registrarer legger til ekstra tid som del av flyttepakken.",
      },
      {
        question: "Kan dagens leverandør stoppe flyttingen?",
        answer:
          "Nei, ikke når kravene er oppfylt. Men de kan be om bekreftelser, og hvis du ikke besvarer disse, kan flyttingen avbrytes.",
      },
    ],
    summary: [
      "Du har full rett til å flytte domenet.",
      "Sett opp DNS hos ny leverandør før du flytter.",
      "Auth-kode og bekreftelser er kjernen i prosessen.",
      "Aldri flytt rett før fornyelsesdato.",
      "Verifiser i WHOIS etter at flyttingen er ferdig.",
    ],
    relatedGuides: ["hvordan-sikre-domenet", "hvordan-sette-opp-dns"],
    relatedTerms: ["registrar", "navneserver", "dns"],
    relatedTools: ["whois-oppslag", "dns-sjekk"],
    nextStep: { label: "Sjekk DNS-oppsettet ditt", href: "/verktoy/dns-sjekk" },
  },
  {
    slug: "hvordan-sette-opp-dns",
    title: "Hvordan sette opp DNS - fra A til TTL",
    shortAnswer:
      "DNS-oppsett består av poster som forteller verden hvor de skal finne tjenestene dine. De viktigste er A-pekere for nettside, MX-pekere for e-post, og TXT-poster for verifisering og e-postsikkerhet. Sett alltid TTL lavt før endringer, og verifiser med en DNS-sjekk etter at endringene er gjort.",
    description:
      "Lær DNS-oppsett: A, AAAA, CNAME, MX, TXT, NS, TTL og DNSSEC - forklart enkelt og anvendbart.",
    category: "dns",
    difficulty: "viderekommen",
    readingTime: 9,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva DNS faktisk gjør",
        paragraphs: [
          "DNS er internettets adressebok. Når noen skriver inn domenet ditt i nettleseren, slår datamaskinen opp DNS for å finne hvilken IP-adresse domenet peker til.",
          "Hver type oppslag - nettside, e-post, autentisering - bruker forskjellige DNS-poster. Forstår du disse, har du kontroll.",
        ],
      },
      {
        heading: "De viktigste DNS-postene",
        paragraphs: [
          "Du trenger ikke kunne alle DNS-typer, men de vanligste går igjen i nesten alle oppsett.",
        ],
        bullets: [
          "A: peker domenet til en IPv4-adresse.",
          "AAAA: peker domenet til en IPv6-adresse.",
          "CNAME: peker fra ett navn til et annet (alias).",
          "MX: bestemmer hvilken server som mottar e-post.",
          "TXT: tekstposter brukt til verifisering, SPF, DKIM, DMARC.",
          "NS: angir navneservere for domenet.",
        ],
      },
      {
        heading: "TTL: hvor lenge en post lagres",
        paragraphs: [
          "TTL - Time To Live - bestemmer hvor lenge en DNS-post mellomlagres. Hvis du planlegger en endring, senk TTL i god tid på forhånd.",
          "En vanlig strategi er å senke TTL til 300 sekunder før en flytting, gjennomføre endringen, og deretter sette TTL tilbake til en høyere verdi når alt er stabilt.",
        ],
      },
    ],
    pitfalls: [
      "Du lagrer endringer uten å vente på TTL-utløp.",
      "Du blander A-pekere og CNAME for samme navn.",
      "MX-pekere peker på feil hostname.",
      "SPF-posten har for mange oppslag og blir ugyldig.",
      "Du sletter en post du trodde du ikke trengte.",
    ],
    checklist: [
      "TTL er senket før endring.",
      "DNS-oppsettet er dokumentert.",
      "MX, SPF, DKIM og DMARC er testet.",
      "DNSSEC er vurdert.",
      "DNS-sjekk er kjørt etter endring.",
    ],
    faq: [
      {
        question: "Hvor lang tid tar DNS-endringer?",
        answer:
          "Avhenger av TTL. Med TTL på 300 sekunder vil endringen som regel være fullt synlig globalt innen 10-15 minutter. Høy TTL kan bety opp til 24 timer.",
      },
      {
        question: "Kan jeg ha flere A-pekere for samme domene?",
        answer:
          "Ja. Det gir lastbalansering, men kan gi inkonsistent oppførsel hvis tjenerne ikke serverer samme innhold.",
      },
    ],
    summary: [
      "DNS er adresseboken som kobler domener til tjenester.",
      "A, MX og TXT er de viktigste posttypene for de fleste.",
      "Senk TTL før endringer, hev igjen etterpå.",
      "Test alltid med DNS-sjekk etter endringer.",
      "DNSSEC er en ekstra sikkerhet - vurder å aktivere.",
    ],
    relatedGuides: ["hvordan-sette-opp-epost", "hvordan-sikre-domenet"],
    relatedTerms: ["dns", "a-peker", "mx-peker", "cname", "navneserver"],
    relatedTools: ["dns-sjekk", "navneserver-sjekk"],
    nextStep: { label: "Test DNS-oppsettet ditt", href: "/verktoy/dns-sjekk" },
  },
  {
    slug: "hvordan-sette-opp-epost",
    title: "Hvordan sette opp profesjonell e-post på eget domene",
    shortAnswer:
      "Profesjonell e-post på eget domene krever tre ting: en e-posttjeneste (Microsoft 365, Google Workspace eller en norsk leverandør), riktige MX-pekere som ruter e-post dit, og autentisering med SPF, DKIM og DMARC. Sett opp alle tre sikkerhetspostene fra starten - det forhindrer både spam-stempling og misbruk av domenet ditt.",
    description:
      "Sett opp profesjonell e-post på eget domene med MX, SPF, DKIM og DMARC - uten at meldingene havner i spam.",
    category: "epost",
    difficulty: "viderekommen",
    readingTime: 8,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Tre nivåer av e-post",
        paragraphs: [
          "Det finnes tre vanlige måter å håndtere e-post på eget domene: videresending, full e-postserver, eller en sky-tjeneste som Microsoft 365 eller Google Workspace.",
          "For de fleste bedrifter er sky-tjenester det enkleste, billigste og mest pålitelige valget.",
        ],
      },
      {
        heading: "MX-pekeren bestemmer mottak",
        paragraphs: [
          "MX-pekeren er den som forteller resten av internett hvor e-post til ditt domene skal sendes. Hver e-posttjeneste har egne MX-verdier du må sette opp.",
        ],
      },
      {
        heading: "SPF, DKIM og DMARC - hvorfor de er nødvendige",
        paragraphs: [
          "Uten autentisering blir e-postene dine markert som mistenkelige. Med riktig oppsett av SPF, DKIM og DMARC bygger du tillit både hos mottakerens servere og hos brukerne.",
          "SPF angir hvilke servere som har lov til å sende e-post på vegne av ditt domene. DKIM signerer hver melding kryptografisk. DMARC forteller mottakerne hva de skal gjøre hvis SPF eller DKIM feiler.",
        ],
      },
    ],
    steps: [
      {
        title: "Velg e-posttjeneste",
        text: "Vurder Microsoft 365, Google Workspace eller en norsk leverandør. Tenk pris, integrasjon, lokal støtte og lagringsbehov.",
      },
      {
        title: "Sett opp MX-pekere",
        text: "Følg leverandørens MX-instruksjoner. Slett gamle MX-pekere før du legger inn nye for å unngå konflikt.",
      },
      {
        title: "Konfigurer SPF",
        text: "Legg inn én TXT-post som starter med v=spf1, og som lister alle godkjente sendere.",
      },
      {
        title: "Aktiver DKIM",
        text: "Følg leverandørens prosedyre for å generere DKIM-nøkler og legge dem inn som TXT-poster.",
      },
      {
        title: "Sett opp DMARC",
        text: "Legg inn TXT-post på _dmarc.dittdomene.no som starter med v=DMARC1. Start med p=none for monitorering, gå senere til p=quarantine eller p=reject.",
      },
      {
        title: "Test og overvåk",
        text: "Send testmeldinger til Gmail og Outlook, sjekk overskriftene for autentiseringsstatus, og følg DMARC-rapportene over tid.",
      },
    ],
    pitfalls: [
      "Mer enn én SPF-post på domenet (skal kun være én).",
      "Du sletter MX feil før de nye er aktive.",
      "DMARC starter direkte på p=reject uten testing.",
      "DKIM-selektor er kopiert feil.",
      "Du glemmer å slå på autentisering for tredjepartstjenester (nyhetsbrev osv.).",
    ],
    checklist: [
      "MX-pekere stemmer med leverandørens dokumentasjon.",
      "SPF inneholder alle godkjente sendere.",
      "DKIM er aktiv og signerer alle utgående meldinger.",
      "DMARC er aktiv og logger eller håndhever.",
      "Testmeldinger til Gmail/Outlook godkjennes.",
    ],
    faq: [
      {
        question: "Trenger jeg DMARC?",
        answer:
          "Ja. Store mottakere (Gmail, Yahoo, Outlook) krever det i økende grad for at meldingene dine i det hele tatt skal komme frem.",
      },
      {
        question: "Hvorfor havner e-postene mine fortsatt i spam?",
        answer:
          "Vanligvis fordi en av SPF, DKIM eller DMARC ikke er riktig konfigurert, eller fordi domenet er for nytt og mangler omdømme.",
      },
    ],
    summary: [
      "MX bestemmer hvor e-posten din havner.",
      "SPF, DKIM og DMARC bygger tillit hos mottakerne.",
      "Start DMARC med p=none for å logge før du håndhever.",
      "Hold kun én SPF-post per domene.",
      "Test alltid med Gmail/Outlook etter oppsett.",
    ],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-sikre-domenet"],
    relatedTerms: ["mx-peker", "dns"],
    relatedTools: ["dns-sjekk"],
  },
  {
    slug: "hvordan-sikre-domenet",
    title: "Hvordan sikre domenet ditt mot kapring og misbruk",
    shortAnswer:
      "Domenesikkerhet bygges i lag. Bruk sterk passord og tofaktor hos registraren, vurder registry-lock for kritiske domener, aktiver DNSSEC, og sikre e-posten med SPF, DKIM og DMARC. Hold WHOIS-kontaktene oppdatert og bemannet - angripere utnytter foreldede kontakter.",
    description:
      "Hvordan beskytte domenet mot kapring, phishing og uautoriserte endringer - i praksis.",
    category: "sikkerhet",
    difficulty: "viderekommen",
    readingTime: 8,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva er trusselen?",
        paragraphs: [
          "En angriper som tar over domenet ditt kan stjele e-post, omdirigere trafikk til en falsk side, eller utgi seg for å være deg overfor kunder og partnere. Konsekvensene varierer fra omdømmetap til konkrete økonomiske tap.",
          "De vanligste angrepsmønstrene er overtatte registrar-kontoer, sosial manipulering hos kundeservice, og DNS-spoofing.",
        ],
      },
      {
        heading: "Sikkerhet i lag",
        paragraphs: [
          "Ingen enkelttiltak er nok alene. Tenk i lag - der hvert lag stopper sin type angrep.",
        ],
      },
    ],
    steps: [
      {
        title: "Sterkt passord og tofaktor hos registrar",
        text: "Bruk en passordbehandler. Slå på tofaktor med autentiseringsapp, ikke SMS. Aldri del kontoen.",
      },
      {
        title: "Registry-lock for kritiske domener",
        text: "Aktiver registry-lock som ekstra lås på registry-nivå. Endringer krever da manuell verifisering.",
      },
      {
        title: "Aktiver DNSSEC",
        text: "DNSSEC beskytter mot DNS-spoofing. Bruk en DNS-leverandør som håndterer signering automatisk.",
      },
      {
        title: "Sikre e-posten med SPF, DKIM og DMARC",
        text: "Forhindre at andre sender e-post som ser ut til å komme fra ditt domene.",
      },
      {
        title: "Hold WHOIS-kontaktene oppdaterte",
        text: "Bruk en e-post som leses av flere personer, og sett opp en sikker tekniskkontakt.",
      },
      {
        title: "Sett påminnelser om fornyelse",
        text: "En glemt fornyelse er den enkleste måten å miste et domene på. Sett kalenderpåminnelser flere måneder i forveien.",
      },
    ],
    pitfalls: [
      "Tofaktor på SMS - sårbart for SIM-swap.",
      "WHOIS-kontakt er en privat e-post som ikke leses.",
      "Ingen reservebemanning på teknisk kontakt.",
      "Manuell DNSSEC uten automatisk nøkkelrullering.",
      "Domenet utløper fordi betaling feilet uten oppfølging.",
    ],
    checklist: [
      "Tofaktor er aktiv med autentiseringsapp.",
      "Registry-lock vurdert for kritiske domener.",
      "DNSSEC er på.",
      "SPF, DKIM og DMARC er aktive.",
      "WHOIS-kontaktene er oppdatert og bemannet.",
      "Fornyelsespåminnelser er satt opp.",
    ],
    faq: [
      {
        question: "Hva koster registry-lock?",
        answer:
          "Det varierer mellom leverandører. For .no tilbyr noen registrarer det som tilleggstjeneste mot en månedlig eller årlig avgift.",
      },
      {
        question: "Er gratis SSL like sikkert som betalt?",
        answer:
          "For de fleste formål: ja. Let's Encrypt og lignende tjenester gir samme kryptering som betalte sertifikater. Forskjellen ligger i validering og forsikring, ikke teknisk sikkerhet.",
      },
    ],
    summary: [
      "Sterk innlogging og tofaktor er minimum.",
      "Registry-lock anbefales for kritiske domener.",
      "DNSSEC sikrer DNS-svar mot manipulering.",
      "E-postsikkerhet handler om SPF, DKIM og DMARC.",
      "Oppdaterte WHOIS-kontakter forhindrer mange angrep.",
    ],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-sette-opp-epost"],
    relatedTerms: ["dnssec", "registrar", "navneserver"],
    relatedTools: ["dns-sjekk", "whois-oppslag"],
    nextStep: { label: "Sjekk om DNSSEC er aktivt på ditt domene", href: "/verktoy/dns-sjekk" },
  },
  {
    slug: "hvem-kan-registrere-no-domene",
    title: "Hvem kan registrere et .no domene?",
    shortAnswer:
      "Alle norske organisasjoner registrert i Enhetsregisteret kan registrere .no domener. Privatpersoner kan også registrere - de trenger fødselsnummer og må være myndige. Utenlandske aktører trenger norsk avdeling eller representant. Norid setter et tak på 100 domener for organisasjoner og 5 for privatpersoner.",
    description: "Reglene for hvem som kan registrere .no, og hva som kreves av dokumentasjon, alder og norsk tilknytning.",
    category: "no-domene",
    difficulty: "nybegynner",
    readingTime: 6,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva sier regelverket?",
        paragraphs: [
          "Norid forvalter .no på vegne av norske myndigheter, og regelverket bestemmer hvem som har rett til å registrere domener under toppnivået. Hovedprinsippet er at registranten må ha tilknytning til Norge - enten som privatperson med norsk fødselsnummer, eller som juridisk person registrert i Enhetsregisteret.",
          "Reglene er strengere enn for åpne toppdomener som .com. Det betyr at .no-domener i praksis er mer kontrollerte og mindre utsatt for spekulativ registrering.",
        ],
      },
      {
        heading: "Privatpersoner",
        paragraphs: [
          "Privatpersoner over 18 år kan registrere inntil **5 .no domener**. Du må oppgi fødselsnummer ved registrering. Personnummeret lagres trygt hos Norid og brukes kun for verifisering - det er ikke offentlig synlig i WHOIS.",
          "Utenlandske privatpersoner uten norsk fødselsnummer kan ikke registrere .no direkte. De må enten få norsk D-nummer eller bruke en .no-trustee-tjeneste der en norsk representant står som registrant.",
        ],
        bullets: [
          "Krav: fødselsnummer og myndighetsalder.",
          "Tak: maksimalt 5 domener per person.",
          "Personnummer lagres hos Norid, ikke offentlig.",
        ],
      },
      {
        heading: "Organisasjoner og bedrifter",
        paragraphs: [
          "Alle organisasjoner registrert i Enhetsregisteret med eget organisasjonsnummer kan registrere inntil **100 .no domener**. Det inkluderer aksjeselskap (AS), enkeltpersonforetak (ENK), foreninger, stiftelser og offentlige etater.",
          "Domener registreres på organisasjonsnummer, ikke på person. Det gjør det enkelt å overføre domener ved eierskifte og holder dem adskilt fra personlig økonomi.",
        ],
      },
      {
        heading: "Utenlandske aktører",
        paragraphs: [
          "Utenlandske selskaper uten norsk organisasjonsnummer kan ikke registrere .no direkte. Det finnes to hovedveier:",
        ],
        bullets: [
          "Opprett norsk avdeling (NUF) - registreres i Enhetsregisteret med eget organisasjonsnummer.",
          "Bruk en .no-trustee - en norsk part står som registrant på vegne av deg, mot avgift.",
        ],
        example: "Et dansk selskap som vil ha mittfirma.no kan opprette NUF i Norge eller bruke en norsk leverandør som tilbyr trustee-tjeneste.",
      },
    ],
    checklist: [
      "Bekreft at du oppfyller registreringskriteriene (privatperson eller organisasjon).",
      "Sørg for at fødselsnummer eller organisasjonsnummer er tilgjengelig.",
      "Sjekk at du ikke har nådd taket (5 for privat, 100 for org).",
      "Hvis utenlandsk: planlegg NUF-registrering eller trustee-avtale.",
    ],
    faq: [
      { question: "Kan barn under 18 år registrere .no?", answer: "Nei. Norid krever at registranten er myndig. Foreldre kan registrere på egne vegne og overføre domenet senere." },
      { question: "Kan jeg registrere flere enn 100 domener for bedriften?", answer: "Ja, men det krever søknad til Norid med begrunnelse. Mange større merkevarer har spesiell avtale." },
      { question: "Hva om jeg flytter til utlandet?", answer: "Eksisterende .no-domener kan beholdes så lenge tilknytningen til Norge ikke er borte. Sjekk Norids regelverk ved langvarig utenlandsopphold." },
      { question: "Trenger jeg lokal adresse?", answer: "Ja. Registrant må ha norsk postadresse - privatperson eller bedrift. Postboks aksepteres." },
    ],
    summary: [
      "Privatpersoner kan registrere inntil 5 .no domener (krever fødselsnummer).",
      "Organisasjoner i Enhetsregisteret kan registrere inntil 100 domener.",
      "Utenlandske aktører trenger NUF eller trustee-tjeneste.",
      "Personnumre lagres hos Norid, ikke offentlig i WHOIS.",
      "Reglene er strengere enn for .com - gir mindre cybersquatting.",
    ],
    relatedGuides: ["hvordan-registrere-no-domene", "krav-til-no-domene"],
    relatedTerms: ["norid", "registrant", "tld", "cctld"],
    relatedTools: ["domenesjekk", "whois-oppslag"],
    nextStep: { label: "Sjekk om ditt ønskede .no-domene er ledig", href: "/verktoy/domenesjekk" },
  },
  {
    slug: "krav-til-no-domene",
    title: "Krav og retningslinjer for .no domener",
    shortAnswer:
      "Norid stiller konkrete krav til .no domener: lengde 2-63 tegn, kun bokstaver, tall, bindestrek og IDN-tegn (æ, ø, å). Domenet kan ikke starte eller slutte med bindestrek og kan ikke ha to bindestreker etter hverandre på posisjon 3-4. Reservere ord og kontroversielle navn kan avvises av Norid.",
    description: "Reglene som styrer hva slags .no-domener du kan registrere - tegn, lengde, format og forbudte ord.",
    category: "no-domene",
    difficulty: "nybegynner",
    readingTime: 5,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Tekniske krav til domenenavnet",
        paragraphs: [
          "Norid har strenge regler for selve domenenavnet. Disse er fastsatt for å sikre lesbarhet og unngå tekniske konflikter.",
        ],
        bullets: [
          "Minimum 2 tegn, maksimum 63 tegn.",
          "Tillatte tegn: a-z, 0-9, bindestrek (-) og norske tegn (æ, ø, å).",
          "Kan ikke starte eller slutte med bindestrek.",
          "To bindestreker på posisjon 3 og 4 (xn--) er reservert for IDN.",
          "Skiller mellom store og små bokstaver - alt lagres som små.",
        ],
      },
      {
        heading: "IDN-domener (æ, ø, å)",
        paragraphs: [
          "Siden 2014 kan .no-domener inneholde æ, ø og å - såkalte IDN-domener. Dette gir bedre merkevare for navn med norske tegn.",
          "Internt konverteres slike domener til **Punycode** (xn--...). For brukeren synes det riktige tegnet i nettleseren, men i tekniske oppsett (sertifikater, DNS) må Punycode brukes.",
        ],
        example: "domæne.no → xn--domne-zsa.no internt. Begge varianter må registreres separat hvis du vil ha begge.",
      },
      {
        heading: "Reserverte og forbudte navn",
        paragraphs: [
          "Norid kan også avvise registrering av åpenbart krenkende eller villedende navn. Hvis du er i tvil, ta kontakt med Norid eller en juridisk rådgiver.",
        ],
        bullets: [
          "Ord som kan være misvisende i offisiell sammenheng (som «politi», «regjering»).",
          "Generiske ord knyttet til offentlige tjenester.",
          "Navn som åpenbart krenker varemerker eller selskapsnavn.",
          "Tre-bokstavs koder reservert for fremtidige formål.",
        ],
      },
      {
        heading: "Andre-nivå-domener for bedrifter og kommune",
        paragraphs: [
          "Under .no finnes også spesialiserte andrenivå-domener: .priv.no for privatpersoner, .stat.no for statsetater, og kommunenavnet.no (for eksempel oslo.kommune.no). Disse har egne regler og brukes sjelden i kommersiell sammenheng.",
        ],
      },
    ],
    checklist: [
      "Velg navn med 2-63 tegn.",
      "Kun bokstaver, tall, bindestrek eller æøå.",
      "Ikke begynn eller slutt med bindestrek.",
      "Sjekk varemerkeregister og selskapsnavn for konflikter.",
      "Vurder å registrere både IDN-versjon (domæne.no) og ASCII-versjon (domene.no).",
    ],
    faq: [
      { question: "Kan jeg ha mellomrom i domenet?", answer: "Nei. Mellomrom og spesialtegn er ikke tillatt. Bruk bindestrek (-) som adskillelse." },
      { question: "Hva betyr 'reservert' navn?", answer: "Norid har en liste over navn som ikke kan registreres på grunn av offentlig interesse, juridisk konflikt eller misbruk-risiko." },
      { question: "Hvor lange domener er praktisk?", answer: "Selv om 63 tegn er tillatt, anbefales det å holde seg under 15-20 tegn for best brukervennlighet og merkevare." },
      { question: "Kan jeg endre domene-stavemåte etter registrering?", answer: "Nei. Et registrert domene kan ikke 'rebranded' uten å registrere et nytt og redirige det gamle." },
    ],
    summary: [
      "Tegnregler: 2-63 tegn, a-z, 0-9, bindestrek og æøå.",
      "Bindestrek kan ikke være først, sist, eller på posisjon 3-4.",
      "IDN-domener konverteres til Punycode internt.",
      "Reserverte og misvisende navn kan avvises.",
      "Spesialdomener .priv.no og kommune.no har egne regler.",
    ],
    relatedGuides: ["hvordan-registrere-no-domene", "hvem-kan-registrere-no-domene", "hvordan-velge-domenenavn"],
    relatedTerms: ["norid", "tld", "idn", "punycode"],
    relatedTools: ["domenesjekk"],
    nextStep: { label: "Sjekk tilgjengelighet av et .no-domene", href: "/verktoy/domenesjekk" },
  },
  {
    slug: "hva-er-dns-poster",
    title: "DNS-poster forklart: A, AAAA, CNAME, MX, TXT, NS, TTL",
    shortAnswer:
      "DNS-poster er de individuelle oppføringene i en sonefil som forteller hvor ulike tjenester på domenet ditt befinner seg. De viktigste er A og AAAA (IP-adresser), CNAME (alias), MX (e-post), TXT (verifisering og policy), NS (navneservere) og TTL (gyldighetstid). Hver type har sitt formål.",
    description: "Komplett oversikt over DNS-postene du møter i hverdagen - hva de gjør, syntaksen, og når du bruker hvilken.",
    category: "dns",
    difficulty: "viderekommen",
    readingTime: 9,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva er en sonefil?",
        paragraphs: [
          "DNS-poster lever i en **sonefil** for domenet ditt. Sonen administreres av navneserverne dine - for eksempel hos Cloudflare, AWS Route 53 eller leverandørens kontrollpanel. Hver post har et navn, en type, en verdi og en TTL (Time To Live).",
          "Når noen slår opp domenet ditt, returneres riktig post avhengig av hvilken type oppslag som gjøres. Et nettlesert oppslag etter A, en e-post-server etter MX, og så videre.",
        ],
      },
      {
        heading: "A og AAAA-pekere",
        paragraphs: [
          "**A-pekeren** kobler et domenenavn til en IPv4-adresse (4 tall mellom 0-255). Dette er den klassiske pekeren som har eksistert siden DNS ble skapt.",
          "**AAAA-pekeren** (kvad-A) kobler til en IPv6-adresse - det moderne formatet med lengre, heksadesimale tall. Når en server støtter både IPv4 og IPv6, bør du ha begge poster.",
        ],
        example: "domene.io. IN A 104.21.55.108\ndomene.io. IN AAAA 2606:4700:3035::ac43:b0c1",
      },
      {
        heading: "CNAME - alias",
        paragraphs: [
          "En **CNAME** (Canonical Name) peker fra ett domenenavn til et annet. Brukes mest for subdomener som skal følge et annet navn - for eksempel `www.domene.no` som CNAME til `domene.no`.",
          "Viktig: CNAME kan **ikke** ligge på rot-domenet (apex). For apex må du bruke A/AAAA, eller bruke leverandørens ALIAS/ANAME-løsning.",
        ],
        example: "www.domene.io. IN CNAME domene.io.\nshop.domene.io. IN CNAME shopify.com.",
      },
      {
        heading: "MX - e-post",
        paragraphs: [
          "**MX (Mail Exchange)** forteller hvor e-post for domenet skal leveres. Du kan ha flere MX-poster med ulik prioritet (lavere tall = høyere prioritet) for failover.",
          "MX-pekeren peker til et hostnavn, ikke en IP - derfor må MX-målet ha sin egen A/AAAA-post.",
        ],
        example: "domene.io. IN MX 10 aspmx.l.google.com.\ndomene.io. IN MX 20 alt1.aspmx.l.google.com.",
      },
      {
        heading: "TXT - fritekst og policy",
        paragraphs: [
          "**TXT-pekere** inneholder fri tekst og brukes til verifisering, e-postsikkerhet og policy. SPF, DKIM og DMARC bruker alle TXT-poster med spesifikt format.",
          "Du kan ha flere TXT-poster for samme navn - men bare én SPF-post per domene.",
        ],
        example: "domene.io. IN TXT \"v=spf1 include:_spf.google.com ~all\"\n_dmarc.domene.io. IN TXT \"v=DMARC1; p=quarantine; rua=mailto:dmarc@domene.io\"",
      },
      {
        heading: "NS - navneservere",
        paragraphs: [
          "**NS-pekerne** angir hvilke navneservere som er autoritative for domenet. Disse må stemme overens mellom registries og selve sonefilen - feil mismatch gir intermitterende oppslag.",
          "Minimum to NS-poster anbefales, helst i ulike datasentre eller hos ulike leverandører for redundans.",
        ],
      },
      {
        heading: "TTL - Time To Live",
        paragraphs: [
          "**TTL** angir i sekunder hvor lenge resolvere skal mellomlagre en DNS-post. Lav TTL gir raske endringer; høy TTL avlaster DNS-serverne.",
          "Praksis: senk TTL noen dager før planlagte endringer (til 300 sekunder), gjør endringen, og hev tilbake til normal verdi etterpå.",
        ],
      },
    ],
    pitfalls: [
      "CNAME på apex (rot-domenet) - fungerer ikke, bruk A/AAAA i stedet.",
      "To SPF-poster - gir feilkonfigurasjon. Slå dem sammen.",
      "Glemt å oppdatere navneservere ved bytte av leverandør.",
      "Lav TTL stående som standard - øker DNS-trafikken unødig.",
      "MX-peker til IP i stedet for hostnavn - strider mot spesifikasjonen.",
    ],
    checklist: [
      "Sjekk at A og AAAA-pekere er satt for både apex og www.",
      "Verifiser MX-poster og bekreft at e-post fungerer.",
      "Sjekk at SPF, DKIM og DMARC er på plass for e-postsikkerhet.",
      "Bekreft NS-poster mellom registry og sonefil.",
      "Sett TTL fornuftig (3600-86400 i normal drift).",
    ],
    faq: [
      { question: "Kan jeg ha CNAME på samme navn som andre poster?", answer: "Nei. Hvis du har CNAME på et navn, kan du ikke ha andre poster (som MX, A, TXT) for samme navn. Bruk apex-poster eller flytt CNAME til et annet subdomene." },
      { question: "Hvor lang tid tar DNS-endringer?", answer: "Avhengig av TTL: typisk fra 5 minutter til 24 timer. Resolvere som har mellomlagret den gamle verdien venter til TTL utløper." },
      { question: "Trenger jeg AAAA-poster?", answer: "Bare hvis serveren støtter IPv6. Det er anbefalt - moderne nettverk bruker stadig mer IPv6 - men ikke kritisk for små nettsider." },
      { question: "Hva er en glue-record?", answer: "Når NS-pekeren peker til en server som ligger under samme domene (f.eks. ns1.domene.no), trengs en A-peker hos registry for å unngå sirkulær oppslag. Det er glue." },
    ],
    summary: [
      "A og AAAA peker til IP-adresser; CNAME peker til andre navn.",
      "MX styrer e-postlevering med prioritet.",
      "TXT brukes til verifisering og e-postsikkerhet (SPF, DKIM, DMARC).",
      "NS angir autoritative navneservere - minimum to.",
      "TTL bestemmer mellomlagringstid; senk i forveien for raske endringer.",
    ],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-flytte-domene", "hvordan-sette-opp-epost"],
    relatedTerms: ["a-peker", "aaaa-peker", "cname", "mx-peker", "txt-peker", "ns-peker", "ttl"],
    relatedTools: ["dns-sjekk", "navneserver-sjekk"],
    nextStep: { label: "Sjekk DNS-postene dine", href: "/verktoy/dns-sjekk" },
  },
  {
    slug: "auth-kode-og-flytting",
    title: "Auth-kode: hva det er og hvordan du får tak i den",
    shortAnswer:
      "En auth-kode (også kalt EPP-kode eller transfer-kode) er passordet som lar deg flytte et domene fra én registrar til en annen. Den utstedes av nåværende leverandør, brukes hos den nye, og er gyldig i begrenset tid. Uten gyldig auth-kode er flytting umulig.",
    description: "Hva auth-koder er, hvordan du finner dem hos ulike leverandører, og hva du gjør hvis koden ikke fungerer.",
    category: "domeneflytting",
    difficulty: "viderekommen",
    readingTime: 5,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva er auth-kode egentlig?",
        paragraphs: [
          "Auth-koden er en sikkerhetsmekanisme i EPP-protokollen - det språket som registrarer bruker for å snakke med toppdomenets registry. Den fungerer som et engangs-passord som domeneeier oppgir til ny registrar for å bevise at flytting er autorisert.",
          "Uten auth-kode kunne hvem som helst flyttet domenet ditt med kjennskap til navnet alene. Koden er domenets siste forsvarslinje før eierskifte.",
        ],
      },
      {
        heading: "Hvor finner jeg auth-koden?",
        paragraphs: [
          "Auth-koden ligger som regel i kontrollpanelet hos nåværende registrar. Eksakt sted varierer:",
        ],
        subsections: [
          {
            heading: "Domeneshop",
            paragraphs: [
              "Logg inn → \"Domener\" → klikk på domenet → \"Flytt domene\" → \"Vis auth-kode\". Koden vises umiddelbart.",
            ],
          },
          {
            heading: "GoDaddy",
            paragraphs: [
              "Logg inn → \"Mine domener\" → velg domenet → \"Innstillinger\" → \"Overfør domene\" → \"Hent auth-kode\". Koden sendes til registrert e-post.",
            ],
          },
          {
            heading: "One.com",
            paragraphs: [
              "Logg inn → \"Domener\" → \"Domeneoversikt\" → klikk på domenet → \"Avansert\" → \"Auth-kode\". Vises i grensesnittet.",
            ],
          },
          {
            heading: "Andre leverandører",
            paragraphs: [
              "Hvis du ikke finner alternativet i kontrollpanelet, kontakt support og be om \"auth-kode for domeneflytting\". Det skal være gratis og leveres innen 5 virkedager etter forskrift.",
            ],
          },
        ],
      },
      {
        heading: "Hva gjør jeg når jeg har koden?",
        paragraphs: [
          "Auth-koden brukes når du starter flyttingen hos den nye registraren. Vanlig flyt:",
        ],
        bullets: [
          "Bestill flytting hos ny registrar.",
          "Lim inn auth-koden i bestillingsskjemaet.",
          "Registranten får en bekreftelses-e-post fra registry.",
          "Bekreft innen 5 dager - ellers avbrytes flyttingen.",
          "Flyttingen tar typisk 5-7 dager (varierer per TLD).",
        ],
      },
      {
        heading: "Når auth-koden ikke fungerer",
        paragraphs: [
          "Vanlige feil og løsninger:",
        ],
        bullets: [
          "**Domain lock**: domenet er låst hos nåværende registrar. Du må be om opplåsing før flytting.",
          "**Utløpt kode**: noen koder er kun gyldige i 24 timer. Be om ny.",
          "**For nylig flyttet**: domener kan ikke flyttes igjen før det har gått 60 dager (ICANN-regel for gTLD).",
          "**WHOIS-info ikke verifisert**: registry kan kreve at registrant verifiserer e-post først.",
        ],
      },
    ],
    checklist: [
      "Hent auth-kode fra nåværende registrar i god tid.",
      "Sjekk at domenet ikke er domain-locked.",
      "Forsikre deg om at WHOIS-e-post er gyldig og kan motta bekreftelse.",
      "Start flyttingen hos ny registrar med auth-kode.",
      "Bekreft transferring-e-post raskt.",
    ],
    faq: [
      { question: "Koster det å få auth-kode?", answer: "Nei. ICANN forbyr registrarer å kreve betaling for auth-kode. .no har lignende regler hos Norid." },
      { question: "Hva er gyldigheten på auth-koden?", answer: "Varierer mellom registrarer - typisk 24 timer til 30 dager. Bruk koden så snart du har den." },
      { question: "Trenger jeg auth-kode for å flytte mellom kontoer hos samme registrar?", answer: "Vanligvis nei - det kalles \"push\" eller \"konto-overføring\" og krever bare innlogging." },
      { question: "Hvor får jeg auth-kode for .no?", answer: ".no bruker også flyttekode-system, men prosessen varierer per registrar. Be om \"flyttekode\" eller \"transfer-kode\" hos support." },
    ],
    summary: [
      "Auth-kode er sikkerhetspassordet for domeneflytting.",
      "Hentes fra nåværende registrar - gratis.",
      "Brukes hos ny registrar i flytteprosessen.",
      "Gyldighetstid varierer - bruk koden raskt.",
      "Hvis koden ikke virker: sjekk lock-status, WHOIS-validering, eller nylig-flyttet-karens.",
    ],
    relatedGuides: ["hvordan-flytte-domene"],
    relatedTerms: ["auth-kode", "epp", "registrar"],
    relatedTools: ["whois-oppslag"],
    nextStep: { label: "Slik flytter du et domene", href: "/guider/hvordan-flytte-domene" },
  },
  {
    slug: "spf-dkim-dmarc-forklart",
    title: "SPF, DKIM og DMARC forklart - bygg e-postsikkerhet riktig",
    shortAnswer:
      "SPF, DKIM og DMARC er tre TXT-poster i DNS som sammen sikrer at e-post fra ditt domene leveres riktig og ikke kan forfalskes. SPF angir hvem som får sende på dine vegne, DKIM signerer meldingene kryptografisk, og DMARC bestemmer hva som skjer hvis sjekkene feiler.",
    description: "Steg-for-steg-oppsett av e-postsikkerhet med SPF, DKIM og DMARC - slik unngår du at meldinger havner i spam.",
    category: "e-post",
    difficulty: "viderekommen",
    readingTime: 10,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hvorfor er e-postsikkerhet viktig?",
        paragraphs: [
          "Uten korrekt SPF, DKIM og DMARC blir e-post fra ditt domene ofte stemplet som spam - eller verre, kapret av phishing-forsøk i ditt navn. Store mottakere som Gmail og Outlook stiller stadig strengere krav, og fra 2024 er DMARC praktisk talt obligatorisk for å nå innboksen.",
          "De tre teknologiene jobber sammen, men løser ulike problemer. Forståelsen av hver enkelt er nødvendig for å bygge robust e-postsetup.",
        ],
      },
      {
        heading: "SPF - hvem får sende?",
        paragraphs: [
          "**Sender Policy Framework (SPF)** er en TXT-post som angir hvilke IP-adresser eller servere som får sende e-post på vegne av domenet ditt.",
          "Mottakerservere sjekker SPF mot avsenderens IP. Stemmer det ikke, vet de at meldingen kanskje er forfalsket.",
        ],
        example: "v=spf1 include:_spf.google.com include:mailgun.org ~all",
        subsections: [
          {
            heading: "Mekanismer i SPF",
            paragraphs: [
              "**ip4/ip6**: spesifikke IP-adresser eller -blokker.\n**a/mx**: tillat servere som tilsvarer A-eller MX-pekeren.\n**include**: arve regler fra et annet domene (typisk leverandører).\n**all**: matcher alle andre - vanligvis med - (hardfail) eller ~ (softfail).",
            ],
          },
        ],
      },
      {
        heading: "DKIM - er meldingen ekte?",
        paragraphs: [
          "**DomainKeys Identified Mail (DKIM)** signerer hver utgående melding kryptografisk. Mottakeren kan verifisere signaturen mot en offentlig nøkkel publisert i DNS.",
          "Det betyr to ting: meldingen er ikke endret underveis, og den kommer fra noen som kontrollerer privatnøkkelen for det aktuelle selektoret.",
        ],
        example: "google._domainkey.domene.io. IN TXT \"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4...\"",
      },
      {
        heading: "DMARC - hva gjør vi om sjekkene feiler?",
        paragraphs: [
          "**Domain-based Message Authentication, Reporting and Conformance (DMARC)** binder SPF og DKIM sammen og forteller mottakerservere hva de skal gjøre hvis autentiseringen feiler.",
          "DMARC kan også sende rapporter til domeneeieren - en gullgruve for innsikt i hvordan domenet brukes (og misbrukes).",
        ],
        example: "_dmarc.domene.io. IN TXT \"v=DMARC1; p=none; rua=mailto:dmarc@domene.io; pct=100\"",
      },
      {
        heading: "Slik ruller du ut sikkert",
        paragraphs: [
          "Aldri start med p=reject. En typisk gradvis utrulling tar 2-3 måneder:",
        ],
        bullets: [
          "**Uke 1-2**: Sett opp SPF og DKIM riktig. Test med mail-tester.com.",
          "**Uke 3-4**: Aktiver DMARC med p=none og rapportering. Samle data.",
          "**Uke 5-8**: Analyser rapporter, juster SPF/DKIM, fang skygge-IT.",
          "**Uke 9-12**: Hev til p=quarantine med pct=10, så 50, så 100.",
          "**Etter ~3 mnd**: Hev til p=reject når du er trygg.",
        ],
      },
    ],
    pitfalls: [
      "Gå rett til p=reject - kan blokkere legitim e-post.",
      "To SPF-poster på samme domene - slå dem sammen.",
      "Glemt en sendende tjeneste i SPF - meldinger fra dem havner i spam.",
      "DKIM-nøkler aldri rotert - anbefalt en gang per år.",
      "Ignorere DMARC-rapporter - der ligger gullet for forbedring.",
    ],
    steps: [
      { title: "Identifiser alle sendere", text: "Lag en liste over alle tjenester som sender e-post på vegne av ditt domene - Google Workspace, Mailgun, HubSpot, fakturasystem, alt." },
      { title: "Sett opp SPF", text: "Lag én TXT-post på rotnavnet med v=spf1, alle include-mekanismer, og avslutt med ~all (softfail) under utrulling." },
      { title: "Sett opp DKIM", text: "Følg leverandørens veiledning for hver tjeneste. Hver tjeneste får sin egen selektor i DNS." },
      { title: "Aktiver DMARC med p=none", text: "Start med p=none og en rua-adresse for rapporter. Du får aggregerte rapporter til e-posten." },
      { title: "Analyser rapportene", text: "Bruk verktøy som Postmark DMARC eller dmarcian for å forstå hvem som sender, hvor, og om SPF/DKIM stemmer." },
      { title: "Stram inn gradvis", text: "Når data ser bra ut, hev til p=quarantine, og deretter p=reject med pct=10/50/100 trinnvis." },
    ],
    checklist: [
      "SPF-record satt opp med alle legitime sendere.",
      "DKIM-selektorer publisert for hver tjeneste.",
      "DMARC-record med rua-adresse for rapporter.",
      "Verktøy som mail-tester.com viser 10/10.",
      "Plan for gradvis stramming opp til p=reject.",
    ],
    faq: [
      { question: "Trenger jeg SPF om jeg har DMARC?", answer: "Ja. DMARC bygger på SPF og/eller DKIM - minst én av dem må bestå. Ha begge for redundans." },
      { question: "Hvor lang tid tar utrulling?", answer: "Plan med 2-3 måneder fra start til p=reject. Hopp ikke over rapport-fasen." },
      { question: "Hvordan ser jeg DMARC-rapporter uten verktøy?", answer: "Rapportene er XML i e-post - vanskelig å lese manuelt. Bruk Postmark DMARC, dmarcian eller Easy DMARC for parsing." },
      { question: "Hva er BIMI?", answer: "BIMI viser merkevarens logo i innboksen. Krever DMARC på p=quarantine eller p=reject + verifisert logo." },
      { question: "Påvirker SPF/DKIM/DMARC e-post jeg mottar?", answer: "Indirekte - de beskytter ditt domene mot å bli misbrukt. Mottatt e-post sjekkes mot avsenderens egne records." },
    ],
    summary: [
      "SPF angir hvem som får sende e-post på dine vegne.",
      "DKIM signerer meldinger kryptografisk for ekthet og integritet.",
      "DMARC binder dem sammen og styrer hva som skjer ved feilet sjekk.",
      "Roll alltid ut gradvis: none → quarantine → reject.",
      "Manglende oppsett gir dårlig e-postlevering og åpner for phishing.",
    ],
    relatedGuides: ["hvordan-sette-opp-epost", "hvordan-sikre-domenet"],
    relatedTerms: ["spf", "dkim", "dmarc", "txt-peker", "mx-peker"],
    relatedTools: ["dns-sjekk"],
    nextStep: { label: "Sjekk DNS-postene dine for e-post", href: "/verktoy/dns-sjekk" },
  },
  {
    slug: "domene-vs-webhotell",
    title: "Domene vs. webhotell: forskjellen, og hvordan de henger sammen",
    shortAnswer:
      "Et domene er adressen brukerne skriver inn (domene.no); webhotell er huset som lagrer selve nettsiden. De er separate tjenester du kan kjøpe fra ulike leverandører. Domenet peker mot webhotellet via DNS - uten begge fungerer ikke nettsiden.",
    description: "Den klassiske forvirringen: hva er forskjellen, og hva trenger du egentlig?",
    category: "webhotell",
    difficulty: "nybegynner",
    readingTime: 5,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Domene = adressen",
        paragraphs: [
          "Domenet er navnet folk skriver inn for å finne nettsiden din. Det er adresse-bevis, ikke innhold. Du \"eier\" ikke domenet for alltid - du **leier** det fra registry, vanligvis i 1-10 år av gangen.",
          "Du betaler typisk 100-500 kr/år for et domene, avhengig av TLD og leverandør. Et .no-domene koster mindre enn et premium .com.",
        ],
      },
      {
        heading: "Webhotell = huset",
        paragraphs: [
          "Webhotellet er den fysiske (eller virtuelle) serveren som lagrer nettsidens filer, kode, databaser og kanskje e-post. Når noen besøker domenet ditt, hentes innholdet fra webhotellet og leveres til nettleseren.",
          "Webhotell koster fra ~50 kr/mnd for delt hosting til flere tusen for dedikerte servere. Cloud-hosting (Vercel, Netlify) faktureres ofte etter bruk.",
        ],
      },
      {
        heading: "Hvordan henger de sammen?",
        paragraphs: [
          "Domenet peker mot webhotellet gjennom **DNS-poster**. Konkret: en A-peker på domenet peker mot webhotellets IP-adresse.",
          "Det betyr at du kan ha domenet hos én leverandør og webhotellet hos en annen. Det er normalt og ofte fornuftig - du står ikke fast med én leverandør.",
        ],
        example: "Domene: domene.io (registrert hos Domeneshop)\nDNS: A-peker mot 76.76.21.21 (Vercel)\nWebhotell: Vercel hoster nettsiden\nE-post: MX-poster mot Google Workspace",
      },
      {
        heading: "Trenger jeg begge fra samme leverandør?",
        paragraphs: [
          "Mange leverandører selger \"alt-i-ett-pakker\" med domene + webhotell + e-post. Det forenkler administrasjon, men kan også låse deg inne.",
          "Fordeler med samme leverandør:",
        ],
        bullets: [
          "Én faktura, ett kontrollpanel.",
          "Enklere kobling mellom domene og hosting.",
          "Som regel inkludert SSL og e-post.",
        ],
        subsections: [
          {
            heading: "Når du bør splitte",
            paragraphs: [
              "Hvis du har spesielle behov - for eksempel høy trafikk, custom kode (Next.js, Rails), eller vil bruke spesialiserte e-posttjenester (Google Workspace) - er det ofte best å splitte:",
              "Registrar (Domeneshop, Cloudflare Registrar) for domenet.\nHosting (Vercel, Netlify, AWS) for nettsiden.\nE-post (Google Workspace, Microsoft 365) for e-post.",
            ],
          },
        ],
      },
    ],
    checklist: [
      "Forstå at domene og webhotell er separate kjøp.",
      "Sjekk om alt-i-ett-pakke passer dine behov, eller om du bør splitte.",
      "Forsikre deg om at webhotellet inkluderer SSL.",
      "Vurder e-post separat - Google Workspace eller M365 ofte bedre enn webhotellets e-post.",
      "Hold domeneregistreringen hos pålitelig registrar uavhengig av hosting.",
    ],
    faq: [
      { question: "Kan jeg kjøpe domene uten webhotell?", answer: "Ja, helt vanlig. Du parkerer domenet hos registraren til du er klar med nettsiden." },
      { question: "Hva med e-post - er det inkludert?", answer: "Webhotell inkluderer ofte enkel e-post, men for profesjonell bruk anbefales separate tjenester som Google Workspace eller Microsoft 365." },
      { question: "Hva skjer hvis jeg bytter webhotell?", answer: "Du flytter nettsidens filer til ny leverandør og endrer DNS-pekerne. Domenet beholder du - det er uavhengig av hosting." },
      { question: "Hva er forskjellen på cloud og webhotell?", answer: "Tradisjonelt webhotell har faste ressurser; cloud (AWS, Vercel) skalerer automatisk og betales etter bruk." },
    ],
    summary: [
      "Domene = adressen; webhotell = huset.",
      "Du kan kjøpe dem fra ulike leverandører - ofte fornuftig.",
      "Domenet peker mot webhotellet via DNS.",
      "Alt-i-ett er enkelt; splitt for spesielle behov.",
      "E-post bør ofte være en egen tjeneste, ikke fra webhotellet.",
    ],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-velge-domenenavn"],
    relatedTerms: ["webhotell", "dns", "a-peker", "registrar"],
    relatedTools: ["domenesjekk"],
    nextStep: { label: "Lær om DNS-oppsett", href: "/guider/hvordan-sette-opp-dns" },
  },
  {
    slug: "domeneportefolje-for-bedrifter",
    title: "Domeneportefølje for bedrifter - hvilke domener bør du eie?",
    shortAnswer:
      "En bedrift bør eie hoveddomenet (.no), defensive variasjoner (vanlige feilstavinger, æøå-versjoner), nøkkel-TLD (.com og eventuelt .eu), og merkevare-relevante nye gTLD. Pluss subdomener for tjenester. Estimert kostnad: 1 000-5 000 kr/år for solid grunnportefølje.",
    description: "Strategisk valg av domener - hva som er fornuftig defensivt, og hva som er overkill.",
    category: "domeneregistrering",
    difficulty: "viderekommen",
    readingTime: 7,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hvorfor strategi rundt domener?",
        paragraphs: [
          "Selskaper investerer i merkevare gjennom design, markedsføring og produktkvalitet - men ignorerer ofte domenestrategi. Det åpner for cybersquatting, phishing og forvirring i markedet.",
          "En enkel og rimelig portefølje av relevante domener er en av de billigste forsvarslinjene en bedrift kan ha.",
        ],
      },
      {
        heading: "Hovedlinjer i porteføljen",
        paragraphs: [
          "En typisk bedriftsportefølje deles i tre kategorier:",
        ],
        subsections: [
          {
            heading: "1. Kjernedomenet",
            paragraphs: [
              "Hoveddomenet - der nettsiden, e-post og merkevaren lever. Skal være lett å huske, lett å skrive og lett å si i telefon.",
              "For norske selskaper: typisk **firmanavn.no**. Vurder også **firmanavn.com** for global tilstedeværelse.",
            ],
          },
          {
            heading: "2. Defensive registreringer",
            paragraphs: [
              "Domener som ligger i grenseland - andres feilstavelser, varianter med æøå, vanlige forvekslinger - som du registrerer for å hindre at andre tar dem.",
            ],
          },
          {
            heading: "3. Strategiske registreringer",
            paragraphs: [
              "Domener som matcher fremtidige produkter, kampanjer eller geografisk ekspansjon. Disse vurderes løpende.",
            ],
          },
        ],
      },
      {
        heading: "Hva er fornuftig defensivt?",
        paragraphs: [
          "Følgende er typisk fornuftig:",
        ],
        bullets: [
          "**Hovednavn på .no, .com og eventuelt .eu** - basisportefølje.",
          "**IDN-versjoner med æøå** hvis merkevaren har norske tegn.",
          "**Vanlige feilstavinger** - slike som faktisk ville bli skrevet feil ofte.",
          "**Bindestrek-varianter** - `mitt-firma.no` hvis hovedet er `mittfirma.no`.",
          "**Kjernet+suffiks** - `mittfirma-as.no` hvis det matcher juridisk navn.",
        ],
        example: "DomainNordic eier antakelig: domainnordic.com, domainnordic.no, domain-nordic.com, domæne.io, og lignende defensive variasjoner.",
      },
      {
        heading: "Hva er overkill?",
        paragraphs: [
          "Det er fristende å registrere mye, men de fleste registrerings-strategier kan stoppes ved 5-10 domener:",
        ],
        bullets: [
          "Alle nye gTLD-er - over 1500 finnes, du trenger ikke `firma.pizza`.",
          "Hver eneste feilstaving - fokuser på de mest sannsynlige.",
          "Domener for tilfeldige kampanjer - bruk subdomener i stedet (kampanje.firma.no).",
          "Andre lands ccTLD uten konkret plan - kjøp når ekspansjonen er reell.",
        ],
      },
      {
        heading: "Forvaltning av porteføljen",
        paragraphs: [
          "Porteføljen krever vedlikehold:",
        ],
        bullets: [
          "**Auto-renew på alle domener** - det dyreste tap-scenarioet er glemt fornyelse.",
          "**Sentralisert oversikt** - Excel eller dedikert verktøy som DomainTools.",
          "**Felles WHOIS-kontakt** - bedriftens domain-admin, ikke en ansatt.",
          "**Årlig revisjon** - fjerne domener som ikke lenger gir verdi.",
          "**Registry-lock på kjernedomenet** - ekstra sikkerhet mot kapring.",
        ],
      },
    ],
    pitfalls: [
      "Ansatt registrerer domenet på personlig konto - bedriften mister kontroll ved oppsigelse.",
      "Glemt fornyelse av defensivt domene - andre kaprer.",
      "Manglende auto-renew kombinert med utløpt kontaktinfo.",
      "Investerer i 30+ defensive uten plan - sløsing av midler.",
      "Ignorerer IDN-varianter - gir merkevare-tap.",
    ],
    checklist: [
      "Hovedmerkevare registrert på .no og .com.",
      "IDN-versjoner med æøå om relevant.",
      "1-3 vanligste feilstavinger registrert.",
      "Alle domener på bedriftens organisasjonsnummer.",
      "Auto-renew satt opp.",
      "Sentralisert oversikt vedlikeholdt.",
    ],
    faq: [
      { question: "Hvor mye bør jeg bruke på domener?", answer: "For mindre bedrifter typisk 1 000-5 000 kr/år. Større merkevarer kan ha 50-200 domener i porteføljen." },
      { question: "Bør jeg kjøpe alle TLD-er for navnet mitt?", answer: "Nei. Fokuser på .no, .com og eventuelt .eu. Andre kun hvis det er faktisk relevant." },
      { question: "Hva med mine ansattes initialer?", answer: "Bare hvis de er en del av merkevaren. Persondomener bør ansatte registrere selv." },
      { question: "Bør domenene ligge på én registrar?", answer: "Praktisk: ja, gir bedre oversikt. Sikkerhetsmessig: vurder å ha kjernedomenet hos en spesialisert leverandør med registry-lock." },
    ],
    summary: [
      "Hovedmerkevare på .no og .com som basis.",
      "Defensive variasjoner: 5-10 domener per merkevare.",
      "Alt registrert på bedriftens organisasjonsnummer, ikke person.",
      "Auto-renew og sentralisert oversikt er kritisk.",
      "Vurder porteføljen årlig - fjern det som ikke gir verdi.",
    ],
    relatedGuides: ["hvordan-velge-domenenavn", "hvordan-sikre-domenet"],
    relatedTerms: ["registrant", "registrar", "tld", "varemerke", "cybersquatting"],
    relatedTools: ["domenesjekk", "whois-oppslag"],
    nextStep: { label: "Sjekk om viktige domener er ledige", href: "/verktoy/domenesjekk" },
  },
  {
    slug: "dnssec-i-praksis",
    title: "DNSSEC i praksis: slik aktiverer du det",
    shortAnswer:
      "DNSSEC signerer DNS-svar kryptografisk slik at de ikke kan manipuleres på vei til mottakeren. Aktivering skjer i to steg: opprett nøkler hos navneserver-leverandøren og registrer DS-record hos registrar. De fleste moderne DNS-leverandører støtter DNSSEC med ett-klikks aktivering.",
    description: "Hva DNSSEC gjør, hvordan det aktiveres på .no og andre domener, og hvilke fallgruver du må unngå.",
    category: "dnssec",
    difficulty: "avansert",
    readingTime: 8,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Hva er DNSSEC?",
        paragraphs: [
          "DNSSEC - DNS Security Extensions - er et lag av kryptografi over DNS som beviser at svaret kommer fra autoritative servere og ikke har blitt endret underveis.",
          "Uten DNSSEC kan en angriper utføre **cache poisoning** - sniffe seg inn mellom DNS-resolver og bruker, og servere falske svar. Dette har skjedd i praksis og kan rute hele land til feil servere.",
        ],
      },
      {
        heading: "Hvordan virker det teknisk?",
        paragraphs: [
          "DNSSEC bruker offentlig-nøkkel-kryptografi:",
        ],
        bullets: [
          "Sone-eieren signerer alle DNS-poster med en privatnøkkel.",
          "Den offentlige nøkkelen publiseres som **DNSKEY**-record i sonen.",
          "**RRSIG**-poster inneholder selve signaturene per record-type.",
          "**DS-record** ligger hos toppdomenet (registry) og bekrefter sonens nøkkel.",
          "Resolvere bygger en \"chain of trust\" fra rot til sonen.",
        ],
      },
      {
        heading: "Aktivere DNSSEC for .no",
        paragraphs: [
          "Norid støttet DNSSEC fra tidlig. Aktivering skjer typisk hos navneserver-leverandøren:",
        ],
        subsections: [
          {
            heading: "Hvis du bruker Cloudflare DNS",
            paragraphs: [
              "1. Logg inn → DNS → Settings → DNSSEC → Enable.\n2. Kopier DS-record (digest) som vises.\n3. Logg inn hos registraren din (Domeneshop, IIO, etc.).\n4. Lim inn DS-record under domene-innstillinger.\n5. Vent 24-48 timer for propagering.",
            ],
          },
          {
            heading: "Hvis du bruker leverandørens egne navneservere",
            paragraphs: [
              "Mange .no-registrarer (Domeneshop, IIO) tilbyr DNSSEC som ett-klikks alternativ. Aktivering håndterer både nøkkel-generering og DS-publisering automatisk.",
            ],
          },
        ],
      },
      {
        heading: "Verifisering",
        paragraphs: [
          "Etter aktivering, sjekk at det fungerer:",
        ],
        bullets: [
          "Bruk DNSViz (dnsviz.net) eller Verisign Labs for visuell sjekk.",
          "Kommandolinje: `dig +dnssec domene.no DS @8.8.8.8`",
          "Sjekk at \"Authentic Data\" (ad-flag) er satt i svar.",
        ],
      },
      {
        heading: "Vanlige fallgruver",
        paragraphs: [
          "DNSSEC kan også gjøre vondt verre hvis det settes opp feil:",
        ],
        bullets: [
          "**DS uten DNSKEY** - registrar har DS, men sonen er usignert. Domenet blir uoppnåelig.",
          "**Utløpte signaturer** - RRSIG har TTL og må fornyes regelmessig (automatisk hos gode leverandører).",
          "**Bytte av leverandør uten DNSSEC-flytting** - DS hos registrar peker på gammel nøkkel, ny leverandør har annen - sonen blir BOGUS.",
          "**Algoritme ikke støttet** - bruk anbefalte algoritmer (RSA SHA-256, ECDSA P256).",
        ],
      },
    ],
    pitfalls: [
      "Aktivere DS hos registry uten å aktivere signering hos navneserver - sonen blir uoppnåelig.",
      "Migrere DNS-leverandør uten å oppdatere DS - kritisk feil.",
      "Bruke deprecerte algoritmer - kan gi advarsler hos resolvere.",
      "Ignorere monitoring - DNSSEC-fail tar ned hele domenet.",
    ],
    steps: [
      { title: "Velg DNS-leverandør med DNSSEC-støtte", text: "Cloudflare, Route 53, og de fleste norske registrarer støtter DNSSEC." },
      { title: "Aktiver DNSSEC i kontrollpanelet", text: "Følg leverandørens veiledning. De fleste tilbyr ett-klikks aktivering." },
      { title: "Hent DS-record", text: "Kopier DS-record-detaljene som genereres etter aktivering." },
      { title: "Publiser DS hos registry", text: "Logg inn hos registraren og lim inn DS-record. .no-registrarer har egen DNSSEC-seksjon." },
      { title: "Verifiser med DNSViz eller dig", text: "Sjekk at chain of trust fungerer end-to-end. Vent 24-48 timer for full propagering." },
      { title: "Sett opp overvåkning", text: "DNSSEC-feil kan ta hele domenet ned. Bruk en monitor som varsler ved BOGUS-tilstand." },
    ],
    checklist: [
      "DNSSEC aktivert hos navneserver-leverandør.",
      "DS-record publisert hos registrar.",
      "Verifisert med DNSViz at chain of trust er intakt.",
      "Monitoring satt opp for å fange utløpte signaturer.",
      "Plan for hvordan DNSSEC håndteres ved leverandørskifte.",
    ],
    faq: [
      { question: "Bremser DNSSEC oppslag?", answer: "Marginalt. DNSSEC gir litt større responsstørrelse, men ytelse-forskjellen merkes ikke i praksis." },
      { question: "Beskytter DNSSEC mot phishing?", answer: "Indirekte. Det forhindrer DNS-manipulering som kan rute brukere til falske sider, men beskytter ikke mot phishing der brukeren selv klikker på en falsk lenke." },
      { question: "Bør alle domener ha DNSSEC?", answer: "Anbefalt for kritiske domener (banker, e-handel, høyverdige merker). For små personlige sider er det ikke kritisk, men gir ekstra forsvar." },
      { question: "Hva skjer ved leverandørskifte?", answer: "Krever koordinering: ny leverandør må ha sonen signert FØR DS-record byttes hos registrar. Mange leverandører har egne migrerings-rutiner for dette." },
    ],
    summary: [
      "DNSSEC signerer DNS-svar mot manipulasjon.",
      "To deler: signering hos navneserver + DS-record hos registrar.",
      "De fleste moderne leverandører støtter ett-klikks aktivering.",
      "Verifiser med DNSViz og sett opp monitoring.",
      "Vær forsiktig ved leverandørskifte - koordineres nøye.",
    ],
    relatedGuides: ["hvordan-sikre-domenet", "hvordan-sette-opp-dns"],
    relatedTerms: ["dnssec", "dns", "navneserver", "ns-peker"],
    relatedTools: ["dns-sjekk"],
    nextStep: { label: "Verifiser DNSSEC-status", href: "/verktoy/dns-sjekk" },
  },
  {
    slug: "seo-og-domenenavn",
    title: "SEO og domenenavn: hva som faktisk betyr noe",
    shortAnswer:
      "Domenenavnet selv har minimal direkte SEO-effekt i 2026 - Google ser på innhold og lenker, ikke navnet alene. Men ccTLD som .no gir lokal relevans, kortere navn er lettere å huske og å lenke til, og et matchende merkevarenavn bygger autoritet over tid. Unngå keyword-stuffing og bindestreker.",
    description: "Sannheten om domenenavn og SEO i 2026 - hva Google bryr seg om, hva som er myter.",
    category: "seo-og-synlighet",
    difficulty: "viderekommen",
    readingTime: 7,
    updatedAt: "2026-05-05",
    author: "Redaksjonen",
    sections: [
      {
        heading: "Myten om EMD (Exact Match Domain)",
        paragraphs: [
          "Tilbake i 2010-2012 var det klart at domener som matchet søkeord (exact match domains, eller EMD) hadde en boost i rangering. **bestepizzaoslo.no** kunne rangere bra for \"beste pizza Oslo\" bare på domenenavnet alene.",
          "Google har siden 2012 dempet denne effekten betydelig. EMD-update gjorde at lavkvalitets EMD-sider mistet rangering. I 2026 har domenenavnet i seg selv minimal direkte effekt på rangering.",
        ],
      },
      {
        heading: "Det som faktisk betyr noe",
        paragraphs: [
          "Domenenavnet påvirker SEO indirekte gjennom flere faktorer:",
        ],
        subsections: [
          {
            heading: "Klikkrate (CTR) i søkeresultater",
            paragraphs: [
              "Et tydelig, troverdig domenenavn gir høyere klikkrate. **mittfirma.no** virker mer troverdig enn **mittfirma-online-2024.com**.",
              "Høy CTR sender et indirekte signal til Google om at brukerne syns ditt resultat er relevant - som påvirker ranking over tid.",
            ],
          },
          {
            heading: "Lenker og merkevareautoritet",
            paragraphs: [
              "Folk lenker til navn de gjenkjenner. Et tydelig merkevarenavn samler lenker over tid - og Backlinks er fortsatt en av de sterkeste rangerings-faktorene.",
            ],
          },
          {
            heading: "Geografisk relevans",
            paragraphs: [
              ".no-domener får automatisk geografisk signal for Norge. Det hjelper rangering i lokale søk og **Google Norge**-resultater.",
              ".com får ingen geografisk fordel - men kan retter målrettes geografisk gjennom Search Console.",
            ],
          },
        ],
      },
      {
        heading: "Hva du bør gjøre",
        paragraphs: [
          "Praktiske anbefalinger for SEO-vennlige domenevalg:",
        ],
        bullets: [
          "**Velg et tydelig merkevarenavn** - ikke nøkkelord-stappet.",
          "**Hold det kort** - 6-15 tegn er sweet spot.",
          "**.no for norsk publikum, .com for global** - ikke begge typer på samme språk.",
          "**Unngå bindestreker** - gjør det vanskeligere å si og skrive.",
          "**Enkelt å si** - \"i telefonen\"-test: kan du si det og bli forstått?",
          "**Sjekk varemerker** - unngå konflikter som kan ramme deg juridisk.",
        ],
      },
      {
        heading: "Hva du bør unngå",
        paragraphs: [
        ],
        bullets: [
          "Nøkkelord-spamming: \"billig-pizza-oslo-rabatt-as.no\".",
          "Tall i navnet (med mindre det er en del av merkevaren): \"firma2024.no\".",
          "Mange bindestreker: \"min-bedrift-web.no\".",
          "Lange og kompliserte navn: \"detbestepizzeriet-i-hele-oslo.no\".",
          "Hyper-spesifikke navn som låser deg fast: \"bare-pizza-oslo.no\" - vanskelig å pivote til burgere.",
        ],
      },
      {
        heading: "Skal jeg bytte domene?",
        paragraphs: [
          "Domenebytte er en betydelig SEO-operasjon. Riktig utført med 301-redirect kan du beholde det meste av rangeringen - men det tar 3-6 måneder å stabilisere seg.",
          "Bytt bare hvis det er en sterk grunn: feil branding, varemerke-konflikt, eller åpenbart begrensende navn. Ikke bytt for små optimaliseringer.",
        ],
      },
    ],
    checklist: [
      "Domenenavnet er tydelig merkevare, ikke keyword-stuff.",
      "Lengde 6-15 tegn.",
      "Riktig TLD for målgruppen (.no for Norge).",
      "Ingen bindestreker eller tall hvis mulig.",
      "Sjekket for varemerke-konflikter.",
      "Lett å si og skrive.",
    ],
    faq: [
      { question: "Vil et nytt domene rangere bedre enn et gammelt?", answer: "Som regel nei. Eldre domener har ofte mer akkumulert lenkeautoritet. Nye domener må bygges opp." },
      { question: "Skal jeg bruke nøkkelord i domenet?", answer: "Ikke som hovedstrategi. Hvis det passer naturlig (som med kommune.no eller pizza.no), greit. Ikke tving det inn." },
      { question: "Hjelper subdomener for SEO?", answer: "Subdomener (blog.firma.no) behandles ofte som separate domener. Mappe (firma.no/blog) holder all SEO-vekt på hoveddomenet - ofte bedre." },
      { question: "Påvirker .com SEO i Norge?", answer: ".com er nøytral; .no gir lokal Norge-relevans. For norske bedrifter er .no ofte best, men .com fungerer hvis du retter mot internasjonalt publikum." },
      { question: "Hvordan flytter jeg SEO til nytt domene?", answer: "301-redirects fra hver gammel URL til ny URL, oppdater Search Console med Change of Address, og bygg opp nye lenker. 3-6 måneder for stabilisering." },
    ],
    summary: [
      "Domenenavn har minimal direkte SEO-effekt i 2026.",
      "Indirekte effekter: CTR, lenker, geografisk signal.",
      "Velg merkevarenavn over nøkkelord-spam.",
      ".no for norsk; .com for globalt - ikke begge sammen.",
      "Bytt domene bare ved sterk grunn - krever lang stabilisering.",
    ],
    relatedGuides: ["hvordan-velge-domenenavn"],
    relatedTerms: ["tld", "cctld", "gtld"],
    relatedTools: ["domenesjekk"],
    nextStep: { label: "Sjekk domenetilgjengelighet", href: "/verktoy/domenesjekk" },
  },

  // ── Tillegg 2026-05-05: 5 flagship-guider (varemerke, internasjonale domener, SEO, utleie, investering) ──
  {
    slug: "varemerke-og-domene",
    title: "Varemerke og domenenavn - slik unngår du konflikt og beskytter posisjonen din",
    description:
      "Velg domener som ikke krenker andres varemerker, og beskytt egne. Sjekkliste, juridiske grunnregler og gråsoner forklart for norske bedrifter.",
    category: "juridisk-og-varemerke",
    difficulty: "viderekommen",
    readingTime: 14,
    updatedAt: "2026-05-05",

    shortAnswer:
      "Sjekk varemerkeregistrene (Patentstyret for Norge, EUIPO for EU, WIPO globalt) før du registrerer et domene som ligner et eksisterende merke. Hvis noen har registrert et domene som krenker ditt varemerke, har du tre veier: forhandling, UDRP-klage (for gTLD-er) eller alternativ tvisteløsning gjennom Norid for .no-domener. Forebygging er alltid billigere enn rettssak.",

    sections: [
      {
        heading: "Hva er forskjellen på et domene og et varemerke?",
        paragraphs: ["Et domenenavn er en teknisk identifikator i DNS-systemet - det er først og fremst en adresse. Du kan registrere det hos en registrar etter prinsippet «først til mølla», uten at noen sjekker om navnet ligner et eksisterende merke. Et varemerke, derimot, er en juridisk rettighet til å bruke et navn, en logo eller en frase i forbindelse med visse varer eller tjenester. Varemerker registreres hos Patentstyret (Norge), EUIPO (EU) eller WIPO (internasjonalt), og gir innehaveren enerett innen sin klasse og sitt geografiske område. To navn kan eksistere parallelt - én som domene, én som varemerke - uten at det er konflikt, så lenge de ikke peker på hverandre i markedet."],
      },
      {
        heading: "Når blir et domenenavn et varemerkebrudd?",
        paragraphs: ["Det er ikke nok at to navn er like. For at det skal være varemerkebrudd må domenet brukes i næringsvirksomhet på en måte som forveksler kunder, eller at registreringen er gjort i ond tro for å utnytte merket - det som kalles cybersquatting. Eksempel på det første: noen registrerer apple-norge.no og selger telefon-tilbehør under Apples utforming. Eksempel på det andre: noen registrerer storbedrift.no rett etter at selskapet er børsnotert, uten plan om å bruke det, og tilbyr salg til selskapet for 200 000 kr. Begge tilfeller kan utløse klage. Et domene som passivt eier et navn uten kommersielt formål er sjelden i seg selv et brudd - men det er heller ingen garanti."],
      },
      {
        heading: "Sjekkliste før du registrerer et domene",
        paragraphs: ["Gjør disse oppslagene i samme dag som du registrerer: Søk i Patentstyrets varemerkedatabase (varemerkeregisteret.no) på det aktuelle navnet og nærliggende variasjoner. Søk i EUIPOs database (euipo.europa.eu) hvis du planlegger virksomhet i EU. Søk i WIPOs Global Brand Database for internasjonal kontekst. Søk i Brønnøysundregistrene etter foretaksnavn med samme eller lignende navn. Gjør et Google-søk på navnet i kombinasjon med din bransje. Hvis noen av disse oppslagene treffer en aktør i samme eller nærliggende bransje - vurder navn på nytt eller søk juridisk vurdering."],
      },
      {
        heading: "Slik beskytter du ditt eget varemerke",
        paragraphs: ["Hvis du allerede har et registrert varemerke, eller bygger en merkevare det er verdt å beskytte, gjør disse stegene proaktivt: Registrer hovedvarianten (eksempel.no) sammen med åpenbare alternativer (.com, .net, .org), vanlige feilstavinger og separator-varianter (eksempel-as.no). Vurder defensiv registrering på utvalgte gTLD-er (.shop, .app, .io) hvis virksomheten din er digital. Bruk DNS-overvåkning (Whois.com Watchlist, MarkMonitor) for å bli varslet hvis noen registrerer domener som matcher mønsteret. Sett opp Google Alerts på merkenavnet ditt. Hold varemerkeregistreringen aktiv og fornyet - uten registrert merke har du ingenting å bygge en klage på."],
      },
      {
        heading: "Hva gjør du hvis noen krenker ditt domene?",
        paragraphs: ["Første steg er alltid en høflig henvendelse - mange tilfeller løser seg når den andre parten forstår situasjonen og ikke har juridisk støtte for sin posisjon. Hvis det ikke fungerer, har du tre formelle veier: For .no-domener kan du klage til Norids domenekonfliktordning. Behandlingen tar typisk 6-10 uker og koster en behandlingsavgift på rundt 5 000 kr. For gTLD-er (.com, .net, .org, .io osv.) er UDRP (Uniform Domain Name Dispute Resolution Policy) standardprosedyren - administreres av WIPO eller andre godkjente sentre, koster fra ca. 1 500 USD, og avgjøres på 60-90 dager. Som siste utvei finnes ordinær rettssak - dyrere og langsommere, men eneste alternativ hvis du krever erstatning utover overføring av domenet."],
      },
      {
        heading: "UDRP: hva må til for å vinne?",
        paragraphs: ["UDRP-klage krever at klageren beviser tre ting samtidig: at domenet er identisk eller forvirrende likt et varemerke klageren har rettigheter til, at registranten ikke har egne legitime rettigheter eller interesse i navnet, og at domenet er registrert og brukes i ond tro. Alle tre må oppfylles - én svak punkt og hele saken faller. «Ond tro» dokumenteres typisk gjennom mønstret atferd (registranten eier mange lignende domener), forsøk på salg til varemerkeinnehaveren, eller bruk som leder til misvisning. Vellykkede UDRP-klager fører typisk til at domenet overføres til klageren - men det gir ingen erstatning. Skal du ha erstatning også, må du gå rettens vei."],
      },
      {
        heading: "Spesielt om .no: Norids regelverk",
        paragraphs: ["Norid har eget regelverk for .no-domener som skiller seg fra UDRP. Registranten må være registrert i Brønnøysundregistrene (norsk organisasjon eller person), domenenavnet må følge Norids navnepolitikk (lengde, tegn, ingen ord på blokklister), og innehaver er ansvarlig for at registreringen ikke krenker tredjeparters rettigheter. Domenekonfliktordningen er forenklet og rimelig sammenlignet med UDRP, men dekker bare .no - for andre TLD-er må du gå andre veier. Hvis du vurderer å klage på et .no-domene, sjekk først at Norids vilkår for behandling er oppfylt: at klagen gjelder et registrert varemerke eller foretaksnavn, og at domenet brukes på en måte som krenker."],
      },
    ],

    faq: [
      {
        question: "Kan jeg miste et domene jeg har eid lenge fordi noen registrerer et varemerke?",
        answer:
          "Sjelden, men det skjer. Tidsprioritet teller mye - har du brukt domenet aktivt og lovlig før varemerket ble registrert, har du normalt vern. Men hvis du har registrert domenet i ond tro fra starten (du visste navnet var i bruk og spekulerte i å selge senere), kan tidsprioritet ikke redde deg. Hovedregelen er: god tro + aktiv bruk = trygt. Spekulasjon = sårbart.",
      },
      {
        question: "Må jeg registrere domenet før varemerket eller motsatt?",
        answer:
          "Helst i samme uke. Domenet er først til mølla - du mister sjansen hvis noen andre tar det først. Varemerket gir deg juridisk vern og verdi over tid. Mange bedrifter starter med å registrere domenet (rask handling), og sender varemerkesøknaden samme uke. Søknaden tar 6-12 måneder å få godkjent, men beskyttelsen virker tilbake til søknadsdatoen.",
      },
      {
        question: "Hva koster det å registrere et varemerke i Norge?",
        answer:
          "Patentstyret tar fra 2 900 kr i grunnsøknad for én vareklasse, pluss 750 kr per ekstra klasse. Søknadsbehandling tar typisk 4-7 måneder. Det er mulig å gjøre det selv via altinn, men de fleste bruker en varemerkeagent (advokat eller patent-/varemerkeforvalter) hvis det er penger involvert - kostnad fra ca. 8 000-15 000 kr inkludert avgifter for en enkel sak.",
      },
      {
        question: "Hva er forskjellen på UDRP og en rettssak?",
        answer:
          "UDRP er rask og rimelig, men begrenset i utfall: du kan vinne overføring av domenet, ikke erstatning eller andre krav. Rettssak gir bredere muligheter - erstatning for tap, midlertidig forføyning, dom som hindrer videre brudd - men er dyrere (typisk fra 100 000 kr i advokatkostnader) og tar 1-2 år. Mange bruker UDRP først; hvis utfallet ikke holder eller motparten anker, vurderes rettssak deretter.",
      },
      {
        question: "Kan jeg bruke et generisk ord som varemerke?",
        answer:
          "Vanskelig. Helt generiske ord (epler.no for en eplebonde) får sjelden varemerkebeskyttelse fordi andre må kunne bruke ordet for sin virksomhet. Mer spesifikke eller kreative navn - beskrivende men ikke generiske, eller helt fantasifulle - er enklere å registrere. Hvis du planlegger en sterk merkevare, velg navn med distinktiv kraft. Det er både enklere å beskytte og lettere å bygge.",
      },
    ],

    summary: [
      "Domenenavn og varemerker er to separate systemer - registrering av et domene gir ingen varemerkerettigheter, og motsatt.",
      "Sjekk Patentstyret, EUIPO og Brønnøysund før du registrerer et domene som ligner andre merker - forebygging er alltid billigere.",
      "For .no-domener kan tvister løses gjennom Norids domenekonfliktordning. For gTLD-er brukes UDRP via WIPO eller andre sentre.",
      "UDRP krever bevis for tre ting samtidig: identisk/forvirrende likhet, ingen legitim interesse, og ond tro. Alle tre må oppfylles.",
      "Beskytt egen merkevare ved å registrere hovedvariant + åpenbare alternativer + sentrale gTLD-er, og overvåk for nye registreringer.",
    ],

    relatedTerms: ["varemerke", "udrp", "cybersquatting", "norid"],
    relatedGuides: [],
    relatedTools: [],
  },

  {
    slug: "velge-internasjonale-domener",
    title: "Internasjonale domener - slik velger du riktig TLD for hvert marked",
    description:
      "Strategi for bedrifter som ekspanderer: når du bør bruke ccTLD, når .com holder, hvordan håndtere flere markeder, og fallgruver å unngå.",
    category: "internasjonale-domener",
    difficulty: "viderekommen",
    readingTime: 12,
    updatedAt: "2026-05-05",

    shortAnswer:
      "Bruk ditt lands ccTLD (.no, .se, .dk) når du primært betjener det markedet - det gir bedre lokal SEO og signaliserer tilhørighet. Bruk en gTLD som .com når merkevaren skal være global. For internasjonal virksomhet med flere markeder fungerer en sentral .com med språkversjoner ofte bedre enn ti separate ccTLD-er. Defensiv registrering av hoved-ccTLD-er + nære variasjoner anbefales uansett.",

    sections: [
      {
        heading: "ccTLD vs. gTLD: hva betyr det egentlig?",
        paragraphs: ["ccTLD (country-code top-level domain) er TLD-er knyttet til land eller territorier - .no for Norge, .se for Sverige, .uk for Storbritannia. gTLD (generic top-level domain) er TLD-er uten geografisk binding - .com, .net, .org, og hundrevis av nyere som .app, .shop, .io. For brukere signaliserer en ccTLD lokal tilstedeværelse. For søkemotorer er det et sterkt geografisk signal: Google prioriterer .no-resultater for norske søk uten at du trenger å konfigurere noe. En .com krever derimot at du forteller Google hvilket marked du sikter mot, gjennom hreflang, Search Console-innstillinger og lokal innholdssignal."],
      },
      {
        heading: "Strategi 1: Én sentral .com med språkversjoner",
        paragraphs: ["Mest brukt av globale selskaper og SaaS-virksomheter: ett hoveddomene (eksempel.com), og språk i undermapper (eksempel.com/no, eksempel.com/sv, eksempel.com/de). Fordeler: all SEO-autoritet samles på ett sted, enklere teknisk infrastruktur, ett sertifikat, ett analytics-oppsett. Ulemper: lokale brukere kan oppfatte det som mindre lokalt forankret, og Google trenger tydelige hreflang-signaler for ikke å vise feil språk. Egner seg når merkevaren er global og målgruppen aksepterer det internasjonale uttrykket. Apple, Stripe og Notion bruker denne modellen."],
      },
      {
        heading: "Strategi 2: ccTLD per marked",
        paragraphs: ["Også vanlig - særlig hos eldre, etablerte selskaper og hos virksomheter med sterke lokale merkevarer. Du har eksempel.no, eksempel.se, eksempel.dk osv., hvert med eget innhold tilpasset markedet. Fordeler: maksimal lokal autoritet, klar signalverdi til kunder og søkemotorer, fleksibilitet i lokal markedsføring. Ulemper: SEO-autoritet fragmenteres, drift blir mer komplisert (flere DNS-oppsett, sertifikater, deployment-mål), risiko for at innhold blir ulikt på tvers av markeder. Egner seg når du faktisk har lokale team og budsjetter til å vedlikeholde flere nettsider på riktig nivå."],
      },
      {
        heading: "Strategi 3: Hybrid - sentral .com + utvalgte ccTLD-er som omdirigeringer",
        paragraphs: ["Mange velger en mellomvei: en sentral .com som hovedeiendom, kombinert med ccTLD-er for de viktigste markedene som omdirigerer til riktig språkside (eksempel.no → eksempel.com/no via 301). Det gir lokal merkevareinngang uten at du må vedlikeholde separate nettsider. Defensiv registrering uten aktiv bruk er også vanlig - du eier .se, .dk og .fi for å hindre at andre tar dem, men kjører all virksomhet via .com. Vurder dette hvis hoveddrivkraften er global og lokale markeder er sekundære."],
      },
      {
        heading: "Hvordan velge: tre nøkkelspørsmål",
        paragraphs: ["Før du bestemmer strategi, svar på disse tre spørsmålene konkret. (1) Hva er målgruppens forventning? Norske B2C-kunder forventer .no - en rent .com-side kan oppfattes som internasjonal og dermed mindre relevant. B2B-kunder bryr seg sjelden. (2) Hvor mye lokalt innhold vil du faktisk produsere? Hvis dere kun kommer til å oversette det engelske innholdet er det ikke verdt et eget domene. Hvis dere har lokale team som lager ekte lokalt innhold, gir egen ccTLD mer verdi. (3) Hvor avansert er teamet? Hvert ekstra domene øker driftsbelastningen - hreflang, sertifikater, monitoring, incident response. Vær ærlig om kapasiteten."],
      },
      {
        heading: "EU-domenet (.eu) - hvem passer det for?",
        paragraphs: [".eu er en geo-TLD knyttet til EU/EØS som målgruppe. Den krever at registranten har bostedsadresse, etablering eller hovedkontor innenfor EU/EØS. For norske selskaper er det mulig å registrere .eu via norsk bedrift med EØS-tilknytning. Egnet hvis virksomheten primært betjener europeiske kunder og vil signalisere europeisk identitet - vanlig hos institusjoner, transportselskaper og enkelte teknologi-aktører. Mindre vanlig som hovedspor for kommersielle norske bedrifter, fordi .com og .no normalt dekker behovet."],
      },
      {
        heading: "IDN: domener med æ, ø, å og spesialtegn",
        paragraphs: ["Internationalized Domain Names (IDN) gjør at domener kan inneholde tegn utenfor ASCII - kafe.no, blåhøst.no, søknad.no. Teknisk konverteres de til Punycode (xn--kaf-dla.no) for DNS, men brukerne ser den lokale formen. Norid tillater æ, ø, å i .no-domener. For norske merkevarer med spesialtegn er det ofte verdt å registrere både IDN-versjonen (kafe.no) og ASCII-varianten (kafe.no eller kaffe.no), og la den ene 301-omdirigere til den andre. ASCII-versjonen er fortsatt mer praktisk for trykte materialer og tekniske integrasjoner."],
      },
      {
        heading: "Anbefalt baseline-portefølje for norske bedrifter",
        paragraphs: ["For en bedrift som planlegger nordisk eller internasjonal vekst er en god grunnportefølje: hoveddomenet på .no (kjernen), .com som internasjonal merkevareforsvarer, og ccTLD-er for naboland du faktisk planlegger å selge til (typisk .se og .dk for nordisk strategi). Vurder å legge til vanlige feilstavinger og åpenbare variasjoner. Hold deg unna defensiv overregistrering på hundrevis av nye gTLD-er - det er sjelden verdt kostnaden, og en sterk merkevare beskyttes bedre gjennom varemerkeregistrering enn gjennom å samle på domener."],
      },
    ],

    faq: [
      {
        question: "Bør jeg registrere domenet på alle nye gTLD-er som .shop, .app, .io?",
        answer:
          "Som hovedregel nei. Det er hundrevis av gTLD-er, og defensiv registrering på alle blir fort dyrt uten reell verdi. Vurder kun de som er direkte relevante for virksomheten din: .shop for nettbutikk, .app for app-virksomhet, .io for tekniske produkter. Beskytt deg heller gjennom varemerkeregistrering - det dekker uansett TLD.",
      },
      {
        question: "Påvirker valget av TLD søkeresultatene mine?",
        answer:
          "Ja, men kanskje mindre enn du tror. ccTLD-er gir et sterkt geografisk signal som hjelper for lokale søk i det landet. gTLD-er er nøytrale, og kan målrettes geografisk via Google Search Console. På tvers av land slår innholdskvalitet og lenker ofte sterkere enn TLD-valg. Velg TLD ut fra strategi og merkevare først, ikke ren SEO.",
      },
      {
        question: "Hva er hreflang og når trenger jeg det?",
        answer:
          "Hreflang er en HTML-tag eller HTTP-header som forteller søkemotorer hvilken språkversjon som er ment for hvilken målgruppe (f.eks. nb-NO for norsk i Norge, sv-SE for svensk i Sverige). Du trenger det når du har samme eller lignende innhold på flere språk eller for flere land - uansett om de ligger på én ccTLD med språkundermapper eller på separate ccTLD-er.",
      },
      {
        question: "Kan jeg overføre et domene mellom land hvis virksomheten flytter?",
        answer:
          "Du kan overføre domener mellom registrarer relativt enkelt - det er bare en transfer-prosess med auth-kode. Men hvis det er et ccTLD med residenskrav (.no krever norsk Brønnøysund-registrering, .eu krever EØS-tilknytning), må eieren oppfylle kravene i det nye landet. For norske selskaper som flytter utenlands, kan .no-domenet beholdes så lenge selskapet eksisterer i Norge.",
      },
      {
        question: "Hvor mye koster en bred internasjonal portefølje?",
        answer:
          "Avhengig av omfang. En typisk nordisk portefølje (.no, .com, .se, .dk + 2-3 variasjoner per land) kommer fort på 3 000-5 000 kr i året i ren registrering. Legger du til monitoring, varemerkeregistrering og defensiv registrering på utvalgte gTLD-er kan totalkostnaden bli 15 000-30 000 kr/år for en mellomstor merkevare. Større aktører bruker spesialisert merkevare-forvaltning som ligger på et helt annet kostnadsnivå.",
      },
    ],

    summary: [
      "ccTLD (.no, .se, .dk) gir sterkt lokalt signal - bruk når du primært betjener det landet.",
      "gTLD (.com, .org) er nøytrale og passer global merkevare - krever hreflang for å målrette geografisk.",
      "Hybrid med .com som hovedspor og ccTLD-er som omdirigeringer er ofte den enkleste strategien for norske bedrifter med internasjonale ambisjoner.",
      "Defensiv registrering bør være målrettet, ikke bredt: hovedland + nære variasjoner. Varemerkeregistrering beskytter bedre enn å samle på TLD-er.",
      "Vurder kapasiteten din realistisk - hvert ekstra domene krever drift, sertifikater, og innhold som faktisk er verdt å lese.",
    ],

    relatedTerms: ["cctld", "gtld", "idn", "punycode"],
    relatedGuides: ["varemerke-og-domene"],
    relatedTools: [],
  },

  {
    slug: "domene-og-seo",
    title: "Domenenavn og SEO - hvor mye betyr egentlig valget?",
    description:
      "Hva domenenavnet faktisk betyr for SEO i 2026: TLDs påvirkning, søkeord i domenet, og når exact match domain (EMD) gir gevinst.",
    category: "seo-og-synlighet",
    difficulty: "nybegynner",
    readingTime: 11,
    updatedAt: "2026-05-05",

    shortAnswer:
      "Domenenavnet har moderat direkte SEO-effekt i 2026. Mest betyr det for klikkrate fra søkeresultater (et tydelig, troverdig navn får flere klikk) og for å signalisere geografisk tilhørighet (.no for norske søk). Eksakte nøkkelord i domenet (best-bil-oslo.no) gir liten fordel og kan virke spammy. Velg et navn du kan bygge en merkevare rundt - det vil betjene deg bedre i lengden.",

    sections: [
      {
        heading: "Hva domenenavnet faktisk påvirker (og ikke)",
        paragraphs: ["Tre ting domenet faktisk påvirker: (1) Klikkrate fra søkeresultater - et navn som er kort, lett å lese og virker troverdig får flere klikk enn et med tall, bindestreker eller forvirrende tegn. (2) Geografisk relevans for ccTLD-er - Google bruker .no som sterkt signal for at innholdet er ment for norske brukere. (3) Branded search - sterke domener bygger merkevarer, og merkevaresøk («ekspres» søkt direkte) er den sterkeste rangeringssignaleren over tid. Det domenenavnet ikke gjør i 2026: gir deg en direkte rangeringsfordel ved å inneholde nøkkelord. Exact-match domains (EMD) ble nedprioritert av Google fra 2012 og fremover, og navnet er én av hundrevis av faktorer som teller."],
      },
      {
        heading: "Eksakte nøkkelord i domenet - hvorfor det ikke fungerer",
        paragraphs: ["Det var en tid da billigeflybilletter.no kunne rangere på «billige flybilletter» bare i kraft av navnet. Den tiden er over. Google har eksplisitt sagt at exact-match domains ikke gir spesiell rangeringsfordel siden 2012. Det som ofte skjer i dag er det motsatte: keyword-stuffed domener oppfattes som lav-tillit av brukere og av algoritmene - særlig hvis innholdet ikke holder mål. Du kan rangere bra med et generisk-sounding domene, men det er en uphill battle. Velg heller et navn som lar deg bygge en merkevare, så har du en eiendel som vokser i verdi."],
      },
      {
        heading: "ccTLD og lokal SEO: når .no betyr noe",
        paragraphs: ["For søk gjort i Norge på norsk gir .no en konkret fordel - Google prioriterer ccTLD-er i lokal kontekst. Hvis virksomheten din primært selger i Norge, er .no derfor sterkere enn .com for organisk trafikk fra norske søk. Effekten avtar når du sikter på flere markeder, eller når søket gjøres på engelsk. Hvis du bare har én nettside og alle kundene er norske, er .no sannsynligvis det riktige valget. Hvis du planlegger nordisk eller internasjonal vekst, kan .com med norsk språkversjon være et bedre utgangspunkt på sikt."],
      },
      {
        heading: "Hva med subdomener og undermapper?",
        paragraphs: ["Et tilbakevendende spørsmål: bør blogg ligge på blog.eksempel.no eller eksempel.no/blogg? Svaret avhenger av kontekst, men hovedanbefalingen i 2026 er undermapper når det er innholdsmessig sammenheng. Subdomener behandles av søkemotorer som delvis separate eiendommer, og fragmenterer SEO-autoriteten din. Undermapper holder all autoritet samlet på hoveddomenet. Bruk subdomener bare når innholdet faktisk er en separat eiendom - som en kundeportal (app.eksempel.no), et helpdesk-system (support.eksempel.no), eller et språkkode-skille (no.eksempel.com)."],
      },
      {
        heading: "Domenealder: en seig myte",
        paragraphs: ["«Eldre domener rangerer bedre» er delvis sant, men ofte misforstått. Det Google faktisk verdsetter er ikke alder i seg selv, men signalene som tendensielt følger med alder: etablerte lenker, konsistent innhold over tid, lite utskiftning av eier. Et 10 år gammelt domene som har vært uvirksomt eller hatt ulikt innhold gir deg lite. Et 6 måneder gammelt domene med høy innholdskvalitet og naturlig lenkeprofil kan rangere godt. Hvis du kjøper et eldre domene, er det viktigere å undersøke historien (Wayback Machine, ahrefs/semrush, manuelle straffer i Search Console) enn alderen alene."],
      },
      {
        heading: "Bytte av domene: hva skjer med rangeringene?",
        paragraphs: ["Hvis du flytter fra eksempel-firma.no til ekspresbyrå.no, taper du ikke nødvendigvis rangeringen - men det krever ordentlig håndtering. Sett opp 301-omdirigeringer fra alle gamle URL-er til de nye (én-til-én, ikke alt til forsiden). Oppdater Search Console med adresseendring. Oppdater interne lenker. Behold gamle domenet aktivt med 301 i minst 12 måneder, helst lengre. Forvent en midlertidig dipp på 2-8 uker i organisk trafikk mens Google reindekserer. Etter migrering returnerer rangeringen normalt - i noen tilfeller blir den endog sterkere fordi det nye domenet matcher merkevaren bedre."],
      },
      {
        heading: "Praktiske valgkriterier",
        paragraphs: ["Når du står foran valget, vekt disse i denne rekkefølgen: (1) Er navnet enkelt å si og skrive - kan du si det i telefonen uten å stave? (2) Er det fritt fra varemerke-konflikter - sjekk Patentstyret og EUIPO. (3) Er det kort nok - under 15 tegn er ideelt, under 20 er greit. (4) Står det seg over tid - vil dere fortsatt selge dette om 10 år? (5) Er ccTLD eller gTLD riktig - basert på markedet ditt. Eksakte nøkkelord, lengde for SEO-formål, og defensiv registrering på 20 TLD-er er sekundære vurderinger."],
      },
    ],

    faq: [
      {
        question: "Er bindestreker i domenet dårlig for SEO?",
        answer:
          "Ikke direkte for rangeringen, men praktisk talt ja. Bindestreker oppfattes som mindre profesjonelle av brukere og er vanskeligere å si høyt («prikk-strek-prikk»). Hvis hoveddomenet uten bindestrek er opptatt, er ofte et helt nytt navn bedre enn samme navn med bindestrek. Spørsmålet du bør stille er ikke «kan Google lese det», men «kan kunden huske det».",
      },
      {
        question: "Bør jeg kjøpe vanlige feilstavinger av domenet mitt?",
        answer:
          "Ja, men målrettet. Registrer 1-3 åpenbare feilstavinger (ekspresbyrå.no + ekspresbyra.no + eksprebyrå.no) og 301-omdiriger dem til hovedformen. Det fanger trafikk og hindrer at andre profitterer på navnet ditt. Gå ikke amok - du trenger ikke alle teoretiske kombinasjoner. SEO-effekten av defensiv registrering er minimal, men brand-effekten kan være verdt det.",
      },
      {
        question: "Hva er forskjellen på domain authority og domeneautoritet?",
        answer:
          "Domain Authority (DA) er en proprietær score fra Moz (0-100) som estimerer hvor godt et domene kan rangere. Det er ikke en Google-faktor - Google bruker ikke DA. Lignende: Ahrefs har Domain Rating (DR), Semrush har Authority Score. Disse er nyttige som proxy for sammenligning mellom nettsider, men er ikke det Google selv ser på. Reelle rangeringsfaktorer er innhold, lenker, brukersignaler, teknisk helse og merkevarestyrke.",
      },
      {
        question: "Hjelper det å ha nøkkelord i URL-stien?",
        answer:
          "Ja, mer enn i selve domenet. eksempel.no/billige-flybilletter er bedre enn eksempel.no/p/12345 for både brukere og søkemotorer - det forteller hva siden handler om. Korte, beskrivende URL-er med ett-til-tre nøkkelord gir både bedre klikkrate og lettere indeksering. Men dette gjelder URL-stien, ikke domenenavnet.",
      },
      {
        question: "Bør et nytt selskap velge ccTLD eller .com fra start?",
        answer:
          "Default for norske selskaper med norsk kundebase: .no. Det signaliserer lokal tilhørighet, gir bedre rangeringssignaler i Norge, og er enklere for kundene. Velg .com hvis dere planlegger å være globalt fra dag én, navnet er ikke ledig på .no, eller dere bygger en internasjonal merkevare hvor .com gir bedre signal. Mange velger begge: .no som primær, .com som forsvar.",
      },
    ],

    summary: [
      "Domenet har moderat direkte SEO-effekt - klikkrate, geo-signal og merkevareverdi er det viktigste det faktisk gjør.",
      "Exact-match domains gir ingen spesiell rangeringsfordel siden 2012. Velg navn for merkevarestyrke, ikke nøkkelord.",
      ".no gir tydelig fordel for søk i Norge på norsk. .com er mer nøytralt og krever hreflang for geo-målretting.",
      "Bruk undermapper, ikke subdomener, for innhold som er innholdsmessig sammenhengende - det holder SEO-autoriteten samlet.",
      "Ved domenebytte: 301-omdirigering, Search Console-oppdatering, behold gamle domenet i 12+ måneder.",
    ],

    relatedTerms: ["cctld", "https", "subdomene"],
    relatedGuides: ["velge-internasjonale-domener", "varemerke-og-domene"],
    relatedTools: [],
  },

  {
    slug: "domeneutleie-guide",
    title: "Domeneutleie - slik fungerer det, og når lønner det seg?",
    description:
      "Domeneutleie forklart: hvordan det fungerer juridisk og praktisk, hvilke kontrakter som kreves, og når det lønner seg å leie eller leie ut.",
    category: "domeneutleie",
    difficulty: "viderekommen",
    readingTime: 10,
    updatedAt: "2026-05-05",

    shortAnswer:
      "Domeneutleie er en kontraktsfestet ordning der eieren beholder eierskapet, mens leietakeren bruker domenet mot et månedlig eller årlig vederlag. Det egner seg for premium-domener som ville vært prohibitivt dyre å kjøpe utenfor en avtale, eller som rente-til-eie-løsning. Risikomomentene er reelle - leietaker mister tilgang ved kontraktsbrudd og må passe på fornying, DNS-tilgang og avtalefestet eierovergang. Anbefales bare med tydelig kontrakt og advokatbistand.",

    sections: [
      {
        heading: "Hva er domeneutleie egentlig?",
        paragraphs: ["I en typisk leieavtale forblir den juridiske registranten av domenet uendret hos eieren. Leietakeren får kontroll over DNS - i praksis muligheten til å peke domenet mot egen nettside, e-post og andre tjenester. Dette skjer enten ved at leietaker får brukertilgang i registrarens kontrollpanel (vanligst), eller ved at eieren selv gjør konfigurasjonen på leietakers vegne. Avtalen regulerer leiebeløp, varighet, oppsigelsesvilkår, og hvilke krav leietakeren kan stille hvis eieren ikke overholder forpliktelsene sine - typisk fornying av domenet og opprettholdelse av DNS-konfigurasjon."],
      },
      {
        heading: "Hvem er det egnet for?",
        paragraphs: ["Tre typiske scenarier. (1) En oppstartsbedrift som vil ha et premium-domene som koster 200 000 kr å kjøpe, men ikke kan ta den investeringen i seed-fasen. Leie 5 000 kr per måned i to år, med opsjon til kjøp, kan gi tilgang til navnet uten å binde kapitalen. (2) En kampanje eller tidsbegrenset prosjekt som trenger et eksisterende domene i en avgrenset periode - typisk 6-24 måneder rundt en lansering. (3) En investor som ikke vil selge, men vil ha kontantstrøm fra eiendelen sin. For etablerte virksomheter med langsiktig perspektiv er kjøp ofte bedre - du eier eiendelen, slipper avhengigheten, og kan justere som du vil."],
      },
      {
        heading: "Lease-to-own: rente-til-eie-modellen",
        paragraphs: ["En populær variant er lease-to-own, eller rente-til-eie. Leietakeren betaler månedlig leie i en avtalt periode (typisk 12-60 måneder), og en del eller hele beløpet teller mot et endelig kjøp. Modellen gir leietaker tid til å vurdere om domenet er verdt investeringen mens virksomheten bygges, og gir eieren stabil inntekt og en realistisk utgang. Plattformer som Dan.com (eid av GoDaddy) og Sedo tilbyr standardiserte lease-to-own-avtaler med automatisert overføring av eierskap når sluttvederlag er betalt. For .no-domener må slike avtaler ofte settes opp manuelt med advokat."],
      },
      {
        heading: "Risikomomenter for leietaker",
        paragraphs: ["Leietaker står juridisk svakere enn eier. Hvis eieren går konkurs, dør eller bare slutter å fornye domenet, kan leietaker miste tilgangen - selv om kontrakten formelt fortsatt løper. Andre reelle risikoer: eieren overfører domenet til en ny eier som ikke er bundet av leieavtalen (med mindre kontrakten er tinglyst eller registrert tydelig), DNS-konfigurasjonen endres uten varsel, eller fornying glemmes. Mitigeringer: krev månedlig dokumentasjon på at domenet er fornyet, ha alternativ DNS-tilgang skriftlig sikret, sett opp varsling på utløpsdato fra et tredjeparts WHOIS-overvåkningsverktøy, og inkluder klausul om umiddelbar overføring ved mislighold."],
      },
      {
        heading: "Risikomomenter for utleier",
        paragraphs: ["Utleier har også utfordringer. Hvis leietaker bygger betydelig SEO-autoritet og merkevareverdi på domenet, kan det bli juridisk komplisert å avslutte leieforholdet senere - leietaker kan argumentere for goodwill og krav på kompensasjon ved oppsigelse. Hvis leietakeren bruker domenet til ulovlig virksomhet (svindel, opphavsrettsbrudd, defamation), kan utleier som registrant teknisk holdes ansvarlig overfor tredjeparter. Mitigeringer: tydelige bruksbegrensninger i kontrakten, krav om at leietakers virksomhet er lovlig og beskrevet, klausul om umiddelbar oppsigelse ved misligholdt bruk, og forsikring som dekker tredjepartskrav."],
      },
      {
        heading: "Praktisk: hvordan setter man opp en leieavtale?",
        paragraphs: ["Stegene for en seriøs leieavtale: (1) Bli enig om vilkår skriftlig - leiebeløp, varighet, evt. opsjon til kjøp, oppsigelse, mislighold, ansvar for fornying og DNS. (2) Få avtalen kvalitetssikret av en advokat med erfaring innen IT-rett eller kontraktsrett. (3) Etablere DNS-tilgang for leietaker - enten gjennom brukerkonto i registrar (Domeneshop og Webhuset støtter delegert tilgang), eller ved at eieren utfører endringer på forespørsel. (4) Sette opp betalingsplan og automatisk fornyingsbekreftelse. (5) Dokumentere status månedlig - verifiser at domenet er fornyet, at DNS er korrekt, at fakturering går som avtalt. (6) Ha en plan for kontraktsslutt - overføring til kjøper eller tilbakelevering til eier."],
      },
      {
        heading: "Skattemessige forhold",
        paragraphs: ["I Norge behandles leieinntekter fra domeneutleie som inntekt for utleier, og leiekostnaden er fradragsberettiget for leietaker hvis domenet brukes i næringsvirksomhet. For lease-to-own kan strukturen kompliseres: deler av betalingen kan kategoriseres som forskudd på kjøpesum (ikke fradragsberettiget umiddelbart) snarere enn ren leie. Dette har vesentlige skattemessige konsekvenser, og avtalen bør derfor utformes i samråd med regnskapsfører eller skatteadvokat - særlig hvis beløpene er betydelige."],
      },
    ],

    faq: [
      {
        question: "Hvor mye koster det å leie et premium-domene?",
        answer:
          "Helt avhengig av domenets verdi. Lette generiske domener kan leies fra 500-2 000 kr/måned, mens premium-domener på engelsk kan koste 5 000-50 000 kr/måned eller mer. En tommelfingerregel er at årlig leie tilsvarer 8-12 % av kjøpsprisen - så et domene verdt 200 000 kr leies typisk for 1 500-2 000 kr/måned.",
      },
      {
        question: "Kan jeg leie et .no-domene?",
        answer:
          "Teknisk ja, men juridisk komplisert. Norids regelverk krever at registranten har norsk Brønnøysund-registrering. Leietakeren får i praksis bruksrett, men ikke eierskap, og må forholde seg til at eieren juridisk er ansvarlig. Norid har ikke en formell utleieordning slik andre TLD-er har - alt foregår mellom partene. Anbefales kun med advokatbistand.",
      },
      {
        question: "Hva skjer hvis utleier dør?",
        answer:
          "Avhengig av avtalen og hvor godt sikret den er. I et godt utformet kontrakt overføres rettighetene til arvingene som binder seg til leieavtalens vilkår. I praksis kan dødsfall utløse uklarhet - domenet er en immateriell eiendel som må forvaltes gjennom dødsboet. Sørg for at avtalen har en klausul om hva som skjer ved dødsfall, og vurder om eieren kan opprette en pant eller annen sikring som beskytter leietaker.",
      },
      {
        question: "Er det vanlig å leie domener i Norge?",
        answer:
          "Mindre vanlig enn i USA, men forekommer - særlig for premium-domener og rundt oppstartsmiljøer. Det er sjelden offentlig kjent, fordi avtalene er private og domenet utad ser ut som en vanlig registrering. Det betyr ikke at det ikke skjer; det betyr at du ikke nødvendigvis vet om noen leier domenet de bruker.",
      },
      {
        question: "Hva er forskjellen på leie og lisens?",
        answer:
          "Begrepene brukes overlappende, men teknisk: en lisens gir bruksrett til navnet i bestemte sammenhenger (f.eks. som varemerke), uten DNS-tilgang. En leieavtale gir teknisk kontroll - å peke domenet mot din nettside og e-post. I praksis brukes ord som «domain lease» eller «domain rental» for det vi her kaller utleie. Lisensiering er mer relevant når domenet er sterkt knyttet til et registrert varemerke som lisensieres separat.",
      },
    ],

    summary: [
      "Domeneutleie lar leietaker bruke et domene mens eieren beholder den juridiske registreringen.",
      "Lease-to-own er en populær variant der månedlige innbetalinger teller mot et endelig kjøp.",
      "Leietaker bør sikre seg mot manglende fornying, DNS-endringer og eieroverdragelse gjennom kontraktklausuler.",
      "Utleier bør beskytte seg mot misbruk og uventet goodwill-claim gjennom bruksbegrensninger og klare oppsigelsesvilkår.",
      "Skattemessige forhold er ikke trivielle - kontrakten bør gjennomgås av advokat og regnskapsfører før signering.",
    ],

    relatedTerms: ["registrant", "norid", "auth-kode"],
    relatedGuides: ["domene-og-seo"],
    relatedTools: [],
  },

  {
    slug: "domeneinvestering-grunnleggende",
    title: "Domeneinvestering - slik fungerer markedet, og er det noe for deg?",
    description:
      "Domener som investering: hva premium-domener er, hvordan auksjoner fungerer, risikoer, og hva som skal til for å lykkes som domeneinvestor.",
    category: "domeneinvestering",
    difficulty: "viderekommen",
    readingTime: 13,
    updatedAt: "2026-05-05",

    shortAnswer:
      "Domeneinvestering kan være lønnsomt, men markedet er illikvid og verdivurdering er subjektiv. De fleste som prøver, taper penger fordi de overvurderer hvor lett det er å selge domener. Realistisk investering krever tålmodighet (2-7 års holdetid), kapital til å absorbere tap, og kunnskap om hvilke navn som faktisk har sluttbrukere som vil betale. Anbefales ikke som hovedinntekt - egner seg bedre som kompetanse-aktivitet ved siden av annen virksomhet.",

    sections: [
      {
        heading: "Hvordan markedet faktisk fungerer",
        paragraphs: ["Det er ikke ett domenemarked, men flere segmenter med svært ulik dynamikk. (1) Premium-segmentet: korte, generiske ord på .com (cars.com, voice.com) som handles mellom store aktører for 6-8 sifrede beløp - sjelden tilgjengelig for nybegynnere. (2) Brandable-segmentet: konstruerte navn som høres som mulige merkevarer (Stripo, Notion, Zendesk-typen) - typiske priser 1 000-50 000 USD. (3) Geo-segmentet: by + bransje-kombinasjoner (oslohotell.no, bergenadvokat.no) - 5 000-100 000 kr i nordisk marked. (4) Massevolum: hundretusener av spekulative registreringer som omsettes på drop-catching og auksjoner for under 1 000 kr - der de fleste nybegynnere taper penger. Forstå hvilket segment du opererer i før du kjøper."],
      },
      {
        heading: "Hva driver verdi i et domene?",
        paragraphs: ["Fem faktorer som faktisk teller, sortert etter betydning. (1) Søkbarhet og minneverdi - kan navnet sies på telefonen, skrives uten feil, huskes? (2) Sluttbrukerrelevans - finnes det faktiske bedrifter som vil betale for å bruke det? Et fancy ord uten bransje-tilknytning er verdt mindre enn et middels ord med tydelig kjøper. (3) TLD - .com har fortsatt premie-status globalt, .no for norsk marked, andre TLD-er handles til lavere priser. (4) Kortlengde - hvert tegn under 8 øker verdien betydelig, særlig under 5. (5) Renomme - navn med historikk, eldre registrering, og uten brente lenker har høyere likviditet. Det som ikke driver verdi i 2026, til tross for myter: nøkkelordtetthet for SEO, antall søkeresultater på Google for navnet, eller estimater fra automatiske verdsettingsverktøy."],
      },
      {
        heading: "Realistisk avkastning og holdetid",
        paragraphs: ["Et velkjent tall fra domeneindustrien: under 2 % av spekulativt registrerte domener selges hvert år. Det betyr at hvis du eier 1 000 domener, selger du kanskje 20 i året. For at modellen skal være lønnsom, må de 20 som selger dekke fornying av alle 1 000 pluss gi avkastning. Med fornying på 100-300 kr per domene per år, er driftsbudsjettet på 100 000-300 000 kr i året - bare for å beholde porteføljen. De som tjener penger har enten små, kuraterte porteføljer av høykvalitetsnavn (5-50 stykker) eller massive volumer (5 000+) med automatisering. Den klassiske «kjøp 100 og bli rik»-tilnærmingen ender oftest i tap."],
      },
      {
        heading: "Tre realistiske strategier for nybegynnere",
        paragraphs: ["(1) Brand-kuratering: Bruk 6-12 måneder på å lære deg hva som er en god brandable. Bygg en mikroportefølje på 10-30 domener du har vurdert nøye. Forvent 1-3 års holdetid før noen selges. Mål: 3-5x avkastning på de som selger, med tap på dem som ikke selger. (2) Hand-registration på utløpende navn: Følg drop-lister hos Norid og store registrar-er. Ved norske kontekst, registrer .no-domener som tidligere har vært brukt og slippes tilbake - se om de har eksisterende lenker eller historikk. Krever tålmodighet og daglig følging. (3) Geo-spesialisering: Lær én by eller region grundig. Registrer kombinasjoner (bydel + bransje, område + tjeneste) der du har lokal innsikt i hvilke virksomheter kan ha behov. Selg lokalt, gjerne direkte til virksomhetene. Mest realistisk for norske nybegynnere."],
      },
      {
        heading: "Hvor selger du faktisk domener?",
        paragraphs: ["Største plattformer: Sedo, Dan.com (eid av GoDaddy), Afternic (også GoDaddy), og Atom (tidligere Squadhelp) for brandables. Alle krever gebyr - typisk 10-20 % på solgt sum. Norske aktører som Domeneshop tilbyr egne markedsplasser i mindre skala. Direkte salg til sluttbruker gir høyest pris, men krever proaktivt salg - du må identifisere mulige kjøpere og kontakte dem. Auksjon ved utløp via NameJet, GoDaddy Auctions eller DropCatch fungerer for noen typer navn. Den vanlige feilen for nybegynnere er å parkere domener på en automatisk salgsside og vente - det fungerer sjelden uten at du driver noe trafikk dit."],
      },
      {
        heading: "Cybersquatting: linjen du ikke skal krysse",
        paragraphs: ["Det er stor forskjell på lovlig domeneinvestering og cybersquatting. Lovlig: kjøpe generiske ord, by-bransje-kombinasjoner, brandables, eller utløpte domener uten tilknytning til eksisterende merkevarer. Ulovlig: registrere navn som ligner registrerte varemerker med hensikt å selge tilbake til varemerkeinnehaveren. Eksempel: registrere applewatchpro.no like etter at Apple lanserer en ny modell. Det er klart UDRP-territorium og kan medføre overføring uten kompensasjon, advokatkostnader, og ansvarssøksmål. En enkel test: hvis du planlegger å selge til en spesifikk navngitt aktør, vurder om navnet ditt har egen bruksverdi - hvis ikke, er du sannsynligvis i ond tro."],
      },
      {
        heading: "Skatt og bokføring",
        paragraphs: ["I Norge er gevinst fra salg av domener skattepliktig som kapitalinntekt eller næringsinntekt, avhengig av aktivitetsnivået. Hvis du registrerer noen få domener i året som privatperson og av og til selger ett, behandles det som kapitalinntekt. Hvis aktiviteten er omfattende - hundrevis av domener, regelmessige salg, system og rutiner - vil Skatteetaten kunne klassifisere det som næringsvirksomhet, med tilhørende krav til regnskap og merverdiavgift. Domener som eies regnes ikke som aktivitet i seg selv - det er kjøp og salg som teller. Føres alltid kjøps- og salgspris med kvitteringer; differansen er gevinst eller tap."],
      },
    ],

    faq: [
      {
        question: "Hvor mye trenger jeg å starte med?",
        answer:
          "Som hobby-investor: 5 000-15 000 kr i året i registreringskostnader for en mikroportefølje på 10-30 domener gjør det realistisk å lære faget uten å ta stor risiko. For å gjøre det som ekte småbusiness trenger du minst 50 000 kr i året i 2-3 år før du sannsynligvis ser nettoavkastning. Som hovedinntekt: budsjett på 200 000+ kr i året, med forventning om at de første 1-2 årene er underskuddsår.",
      },
      {
        question: "Bør jeg satse på .no eller .com?",
        answer:
          "Som norsk basert investor med begrensede ressurser: .no er mer realistisk. Markedet er mindre, du kan bygge lokal innsikt, og du konkurrerer ikke med globale spekulanter. .com er mer likvid og verdiene er høyere, men også konkurransen - du må kjenne markedet utenom Norge for å lykkes. De fleste norske domeneinvestorer har en miks: kjerne-aktiva på .no, eksperimentering på .com.",
      },
      {
        question: "Er automatiske verdsettingsverktøy som EstiBot pålitelige?",
        answer:
          "Bare som grovestimat. Verktøyene bruker statistikk fra historiske salg, men selve markedet er så illikvid at to lignende domener kan selges for 5 000 USD og 50 000 USD. Bruk verktøyene til å unngå åpenbare overprisinger, ikke til å fastsette prisen din. Erfarne investorer baserer seg på sammenlignbare salg fra tilsvarende segmenter, ikke på algoritmiske estimater.",
      },
      {
        question: "Kan jeg «catche» et domene som slippes?",
        answer:
          "Ja, men det er konkurranseutsatt. Drop-catching er praksisen med å være først til å registrere et domene som slippes tilbake etter at en eier ikke fornyer. For populære navn er det automatiserte tjenester (DropCatch, NameJet, SnapNames) som konkurrerer på millisekund-nivå. For mindre attraktive navn kan du gjøre det manuelt via en vanlig registrar - men sjansen er lav at de virkelig verdifulle slipper gjennom.",
      },
      {
        question: "Hvordan vet jeg om et domene jeg vurderer å kjøpe har problematisk historikk?",
        answer:
          "Sjekk fire kilder. (1) Wayback Machine (archive.org) for å se hva som har ligget på domenet historisk. (2) Verktøy som ahrefs eller semrush for lenkeprofil - er det mange spam-lenker? (3) Google Search Console hvis du eier en lignende side du kan sammenligne mot. (4) Manuelle Google-søk på domenenavnet for å se om det har vært involvert i svindel eller tvister. Et domene med problematisk historikk kan bli «brent» - Google indekserer det dårlig selv etter eierskifte.",
      },
    ],

    summary: [
      "Domeneinvestering har reelt potensial, men er illikvid - under 2 % av spekulative registreringer selges hvert år.",
      "Verdi drives av søkbarhet, sluttbrukerrelevans, TLD, kortlengde, og renomme - ikke nøkkelordtetthet eller automatiske estimater.",
      "Tre realistiske startstrategier: brand-kuratering, hand-registration på utløpende navn, eller geo-spesialisering.",
      "Skill mellom lovlig investering og cybersquatting - varemerkebrudd kan koste deg domenet og skape rettslige problemer.",
      "I Norge skattes salg som kapital- eller næringsinntekt avhengig av aktivitetsnivå. Før alltid kjøp- og salgsdokumentasjon.",
    ],

    relatedTerms: ["domeneinvestering", "drop-catching", "redemption-period", "domeneparkering", "cybersquatting"],
    relatedGuides: ["varemerke-og-domene", "domeneutleie-guide"],
    relatedTools: [],
  },
];

export const findGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesByCategory = (categorySlug: string) =>
  guides.filter((g) => g.category === categorySlug);
