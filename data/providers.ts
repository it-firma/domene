import type { Provider } from "@/lib/types";

/**
 * Provider profiles for /leverandorer/[slug].
 *
 * All facts are verified from primary sources (provider websites, public
 * price lists, Brønnøysund register, official documentation) as of mai 2026.
 * Profiles are NEUTRAL — they present facts without editorial judgment.
 *
 * When updating, always cross-reference data/comparisons.ts to keep prices
 * synchronized across the site.
 */
export const providers: Provider[] = [
  /* ──────────────────── 1. DOMENESHOP ──────────────────── */
  {
    slug: "domeneshop",
    name: "Domeneshop",
    tagline: "Norges største .no-registrar",
    editorialTitle: {
      lead: "Domeneshop",
      emphasis: "norges største",
      tail: "domeneregistrar.",
    },
    description:
      "Domeneshop er Norges største domeneregistrar med 45 % markedsandel på .no. Etablert 1996, basert i Oslo. Eid av Miss Group siden august 2024. Verifisert mai 2026.",
    answerBox:
      "Domeneshop AS er Norges største domeneregistrar med rundt 650 000 domener under forvaltning og 45 % markedsandel på .no. Selskapet ble etablert i 1996 og er basert i Oslo, men har siden august 2024 vært eid av svenske Miss Group. Domeneshop er den eneste registraren i Norge som er ICANN-akkreditert direkte, og tilbyr DNSSEC, registry-lock og 2FA i grunnpakken.",
    conglomerate: "miss-group",
    factBox: {
      konsern: "Miss Group (Stockholm, Sverige)",
      hovedkontor: "Oslo, Norge",
      juridisk: "Domeneshop AS",
      stiftet: "1996",
      orgnr: "980 814 154",
      norid: true,
      icann: true,
      markedsandel: "45 % av .no (650 000+ domener)",
      url: "https://domene.shop",
    },
    introduction: [
      "Domeneshop AS er en norsk domeneregistrar etablert i 1996 og basert i Oslo. Selskapet er Norges største registrar målt i antall .no-domener under forvaltning, med en markedsandel på rundt 45 %. Per mai 2026 forvalter selskapet over 650 000 domener for norske og internasjonale kunder.",
      "Frem til august 2024 var Domeneshop reelt uavhengig norsk eid. Eierskapet ble da overført til svenske Miss Group, en del av en større konsolidering i den nordiske domene- og hosting-bransjen. Driften foregår fortsatt fra Oslo med norsk team og norsk kundeservice.",
      "Domeneshop er Norid-akkreditert for .no og er den eneste registraren i Norge som også er ICANN-akkreditert direkte (uten å være reseller for en internasjonal partner). Dette betyr at transfer-prosesser for .com og andre internasjonale TLD-er går direkte gjennom selskapet uten mellomledd.",
      "Selskapet skiller seg ut ved å tilby fullt sikkerhets-stack i grunnpakken: DNSSEC, registry-lock og tofaktor-autentisering er inkludert uten ekstra kostnad. Volumrabatt aktiveres automatisk fra 5 domener på samme konto, og prisene synker trinnvis ned til 139 kr per .no-domene ved 500+ domener.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "99 kr (lokketilbud)",
        renewal: "199 kr",
        threeYearTotal: "497 kr",
      },
      {
        tld: ".com",
        firstYear: "220 kr",
        renewal: "220 kr",
        threeYearTotal: "660 kr",
      },
    ],
    included: [
      "dns",
      "epost-videresending",
      "ssl",
      "dnssec",
      "registry-lock",
      "support-norsk",
      "volumrabatt",
    ],
    pricingNote:
      "Domeneshop oppgir prisene inkludert mva. Volumrabatt: 1-4 domener = 199 kr, 5-24 = 189 kr, 25-99 = 169 kr, 100-499 = 159 kr, 500+ = 139 kr. Førsteårspris på 99 kr er et lokketilbud markert med stjerne.",
    relatedComparisons: [
      "domenepriser",
      "no-domene",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["webhuset", "gigahost", "domene-no"],
    faq: [
      {
        question: "Hvem eier Domeneshop?",
        answer:
          "Domeneshop AS ble eid av Telecom Liechtenstein frem til august 2024, da selskapet ble overført til Miss Group i Stockholm. Driften foregår fortsatt fra Oslo med norsk team. Den juridiske enheten Domeneshop AS er fremdeles registrert i Brønnøysund med org.nr. 980 814 154.",
      },
      {
        question: "Er Domeneshop fortsatt en norsk leverandør?",
        answer:
          "Domeneshop drives fortsatt fra Oslo med norsk kundeservice og norske ansatte, men eierskapet er nå svensk via Miss Group. Selskapet er fortsatt registrert som norsk juridisk enhet (Domeneshop AS) og er Norid-akkreditert.",
      },
      {
        question: "Hvor mange .no-domener forvalter Domeneshop?",
        answer:
          "Domeneshop forvalter rundt 650 000 .no-domener per mai 2026, noe som tilsvarer cirka 45 % av alle aktive .no-domener. Dette gjør selskapet til Norges desidert største domeneregistrar.",
      },
      {
        question: "Hva inkluderer Domeneshop i prisen?",
        answer:
          "Et .no-domene hos Domeneshop inkluderer DNS-hosting, e-postvideresending, gratis SSL-sertifikat (Let's Encrypt), DNSSEC, registry-lock og tofaktor-autentisering. Domeneshop er den eneste registraren i Norge som tilbyr alle disse sikkerhetstjenestene i grunnpakken.",
      },
      {
        question: "Når aktiveres volumrabatten hos Domeneshop?",
        answer:
          "Volumrabatten aktiveres automatisk på fakturatidspunktet fra og med det 5. domenet på samme brukerkonto. Prisen synker trinnvis: 1-4 domener koster 199 kr, 5-24 koster 189 kr, 25-99 koster 169 kr, 100-499 koster 159 kr, og 500+ domener koster 139 kr per .no-domene per år.",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 2. WEBHUSET ──────────────────── */
  {
    slug: "webhuset",
    name: "Webhuset",
    tagline: "Norsk uavhengig siden 1998",
    editorialTitle: {
      lead: "Webhuset",
      emphasis: "norsk uavhengig",
      tail: "siden 1998.",
    },
    description:
      "Webhuset er en norsk eid og uavhengig registrar etablert 1998 i Bergen. Norid-akkreditert med 20 000+ kunder. Lavest 3-års totalpris på .no. Verifisert mai 2026.",
    answerBox:
      "Webhuset Invest AS er en av to reelt uavhengige norske domeneregistrarer per mai 2026. Selskapet ble etablert i 1998 og er basert i Bergen, med over 20 000 aktive kunder og NORID-akkreditering for .no. Webhuset har laveste 3-års totalpris på .no i sammenligningen (256,25 kr) og er kjent for stabil kundeservice og norsk eierskap.",
    conglomerate: "norsk-uavhengig",
    factBox: {
      konsern: "Uavhengig norsk eid",
      hovedkontor: "Bergen, Norge",
      juridisk: "Webhuset Invest AS",
      stiftet: "1998",
      orgnr: "979 466 832",
      norid: true,
      icann: false,
      markedsandel: "20 000+ aktive kunder",
      url: "https://www.webhuset.no",
    },
    introduction: [
      "Webhuset Invest AS ble stiftet i 1998 og er en av Norges eldste domeneregistrarer. Selskapet er basert i Bergen og er en av kun to registrarer i sammenligningen som er reelt uavhengige norske, sammen med Gigahost.",
      "Webhuset har over 20 000 aktive kunder og er NORID-akkreditert for .no. Selskapet er ikke ICANN-akkreditert direkte, men opererer som reseller for internasjonale TLD-er som .com gjennom internasjonale partnere.",
      "Per mai 2026 har Webhuset laveste 3-års totalpris på .no i sammenligningen vår (256,25 kr inkl. mva), takket være en kombinasjon av lavt førsteår (8,75 kr) og moderat fornyelsespris (123,75 kr). For .com tilbyr selskapet 187,50 kr både første år og fornyelse.",
      "I grunnpakken inkluderer Webhuset DNS-hosting og e-postvideresending. Selskapet tilbyr også webhotell og e-post-pakker som tilleggsprodukter. Kundeservice er på norsk, og selskapet er kjent for raske svar og lav personalutskifting blant utviklerne sine.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "8,75 kr",
        renewal: "123,75 kr",
        threeYearTotal: "256,25 kr",
      },
      {
        tld: ".com",
        firstYear: "187,50 kr",
        renewal: "187,50 kr",
        threeYearTotal: "562,50 kr",
      },
    ],
    included: ["dns", "epost-videresending", "support-norsk"],
    pricingNote:
      "Webhuset oppgir prisene eksklusiv mva. Vi har konvertert ved å multiplisere med 1,25. Førsteårsprisen for .no på 8,75 kr er ordinær åpen pris, ikke et lokketilbud.",
    relatedComparisons: [
      "domenepriser",
      "no-domene",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["gigahost", "domeneshop", "simply-com"],
    faq: [
      {
        question: "Eier Webhuset seg selv?",
        answer:
          "Ja. Webhuset Invest AS er reelt uavhengig norsk eid per mai 2026. Selskapet er ikke del av et internasjonalt konsern og har samme team og strategiske retning som da det ble grunnlagt i 1998.",
      },
      {
        question: "Hvor lenge har Webhuset eksistert?",
        answer:
          "Webhuset ble grunnlagt i 1998, noe som gjør selskapet til en av Norges eldste fortsatt aktive domeneregistrarer. Webhuset Invest AS er registrert i Brønnøysund med org.nr. 979 466 832.",
      },
      {
        question: "Hvorfor er Webhuset så billig på .no?",
        answer:
          "Webhuset har en åpen førsteårspris på 8,75 kr og en moderat fornyelsespris på 123,75 kr (begge inkl. mva). Total 3-års kostnad blir 256,25 kr — lavest i sammenligningen vår. Forretningsmodellen baserer seg på at de fleste kunder kjøper webhotell eller e-post i tillegg.",
      },
      {
        question: "Hva er inkludert i Webhuset sin .no-pris?",
        answer:
          "Et .no-domene hos Webhuset inkluderer DNS-hosting og e-postvideresending. SSL-sertifikat, DNSSEC og webhotell tilbys som separate produkter. Norsk kundeservice er inkludert.",
      },
      {
        question: "Tilbyr Webhuset DNSSEC?",
        answer:
          "Webhuset tilbyr DNSSEC for .no-domener, men det er ikke inkludert som standard i grunnpakken og må aktiveres på forespørsel. For informasjon om hvilke registrarer som tilbyr DNSSEC i grunnpakken, se vår sammenligning av DNSSEC-leverandører.",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 3. GIGAHOST ──────────────────── */
  {
    slug: "gigahost",
    name: "Gigahost",
    tagline: "Norsk teknisk registrar fra Sandefjord",
    editorialTitle: {
      lead: "Gigahost",
      emphasis: "norsk teknisk",
      tail: "registrar fra Sandefjord.",
    },
    description:
      "Gigahost AS er en norsk uavhengig domeneregistrar fra Sandefjord, etablert 2006. Tre egne datasentre, REST API, gratis DNS. Lavest fornyelse på .no. Verifisert mai 2026.",
    answerBox:
      "Gigahost AS er en norsk uavhengig domeneregistrar etablert i 2006 og basert i Sandefjord. Selskapet er fortsatt eid av gründerne og driver tre egne datasentre i Norge. Per mai 2026 har Gigahost laveste fornyelsespris på .no i sammenligningen (106,25 kr inkl. mva) uten lokketilbud, og er kjent for sterk teknisk profil med REST API, Certbot-integrasjon og PTR/Reverse DNS i grunnpakken.",
    conglomerate: "norsk-uavhengig",
    factBox: {
      konsern: "Uavhengig norsk eid",
      hovedkontor: "Sandefjord, Norge",
      juridisk: "Gigahost AS",
      stiftet: "2006",
      orgnr: "933 452 549",
      norid: true,
      icann: false,
      markedsandel: "Tre egne datasentre i Norge",
      url: "https://gigahost.no",
    },
    introduction: [
      "Gigahost AS er en norsk domeneregistrar etablert i 2006 i Sandefjord. Selskapet er fortsatt eid av gründerne som startet det, og er en av kun to reelt uavhengige norske registrarer i sammenligningen vår, sammen med Webhuset.",
      "Gigahost driver tre egne datasentre i Norge og er NORID-akkreditert for .no. Selskapet har en sterk teknisk profil og retter seg særlig mot utviklere og bedrifter med tekniske krav.",
      "Per mai 2026 har Gigahost laveste fornyelsespris på .no i sammenligningen vår (106,25 kr inkl. mva) — uten lokketilbud. Førsteårsprisen er den samme som fornyelsen, noe som gir 318,75 kr i total 3-års kostnad. For .com tilbyr selskapet 211,25 kr både første år og fornyelse.",
      "Det som skiller Gigahost teknisk er innholdet i grunnpakken: REST API for masseadministrasjon, Certbot-plugin for automatisert SSL-fornyelse, Dynamic DNS-støtte, PTR/Reverse DNS-konfigurasjon og gratis DNS-hosting. Disse funksjonene er typisk ikke standard hos andre norske registrarer.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "106,25 kr",
        renewal: "106,25 kr",
        threeYearTotal: "318,75 kr",
      },
      {
        tld: ".com",
        firstYear: "211,25 kr",
        renewal: "211,25 kr",
        threeYearTotal: "633,75 kr",
      },
    ],
    included: [
      "dns",
      "rest-api",
      "ptr-reverse-dns",
      "certbot-plugin",
      "dynamic-dns",
      "support-norsk",
    ],
    pricingNote:
      "Gigahost oppgir prisene eksklusiv mva. Vi har konvertert ved å multiplisere med 1,25. Førsteårsprisen og fornyelsesprisen er identiske — selskapet bruker ikke lokketilbud.",
    relatedComparisons: [
      "domenepriser",
      "no-domene",
      "dnssec-leverandorer",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["webhuset", "domeneshop"],
    faq: [
      {
        question: "Eier Gigahost seg selv?",
        answer:
          "Ja. Gigahost AS er fortsatt eid av gründerne som startet selskapet i 2006. Selskapet er ikke del av et internasjonalt konsern og er en av to reelt uavhengige norske registrarer per mai 2026.",
      },
      {
        question: "Har Gigahost egne datasentre?",
        answer:
          "Ja. Gigahost driver tre egne datasentre i Norge. Dette gir selskapet full teknisk kontroll over infrastrukturen og betyr at norsk lovgivning gjelder for alle data de behandler.",
      },
      {
        question: "Hvorfor er Gigahost et godt valg for utviklere?",
        answer:
          "Gigahost har den tekniske grunnpakken som retter seg mot utviklere: REST API for masseadministrasjon av domener, Certbot-plugin for automatisert Let's Encrypt-fornyelse, Dynamic DNS for hjemmenettverk og servere med skiftende IP, og PTR/Reverse DNS-konfigurasjon. Disse er typisk ikke standard hos andre norske registrarer.",
      },
      {
        question: "Tilbyr Gigahost DNSSEC?",
        answer:
          "Gigahost tilbyr DNSSEC for .no-domener via manuell DS-record-konfigurasjon. Dette er aktivert for kunder som kjører egen autoritativ DNS og vil signere selv. For informasjon om DNSSEC-aktivering hos forskjellige registrarer, se vår sammenligning av DNSSEC-leverandører.",
      },
      {
        question: "Hva er forskjellen mellom Gigahost og Webhuset?",
        answer:
          "Begge er reelt uavhengige norske registrarer. Webhuset (Bergen, 1998) har lavere førsteår (8,75 kr) og lavere 3-års total (256 kr). Gigahost (Sandefjord, 2006) har lavest fornyelse uten lokketilbud (106 kr/år) og en mer teknisk profil med REST API og Certbot-integrasjon. Valg avhenger av om du verdsetter lavest totalpris eller teknisk fleksibilitet.",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 4. SIMPLY.COM ──────────────────── */
  {
    slug: "simply-com",
    name: "Simply.com",
    tagline: "Dansk del av team.blue",
    editorialTitle: {
      lead: "Simply.com",
      emphasis: "tidligere UnoEuro",
      tail: "frem til 2020.",
    },
    description:
      "Simply.com er en dansk domeneregistrar (tidligere UnoEuro) eid av team.blue. Tilbyr .no-trustee for danske kunder uten norsk org.nr. Verifisert mai 2026.",
    answerBox:
      "Simply.com A/S er en dansk domeneregistrar med hovedkontor i Skanderborg og base i Gent gjennom konsernet team.blue. Selskapet het UnoEuro frem til 2020 og er nå en del av team.blue-økosystemet med 60+ brands i 22 EU-land. Simply.com tilbyr .no-trustee-tjeneste for danske kunder uten norsk organisasjonsnummer, og har laveste 3-års totalpris på .com i sammenligningen.",
    conglomerate: "team-blue",
    factBox: {
      konsern: "team.blue (Gent, Belgia)",
      hovedkontor: "Skanderborg, Danmark",
      juridisk: "Simply.com A/S",
      stiftet: "2004 (som UnoEuro)",
      norid: true,
      icann: true,
      markedsandel: "team.blue: 60+ brands i 22 EU-land",
      url: "https://www.simply.com/no",
    },
    introduction: [
      "Simply.com A/S er en dansk domeneregistrar etablert i 2004 under navnet UnoEuro. Selskapet endret navn til Simply.com i 2020 og er nå del av team.blue, et belgisk-eid konsern som driver mer enn 60 hostingmerker i 22 EU-land.",
      "Hovedkontoret ligger i Skanderborg, Danmark, mens team.blue er basert i Gent, Belgia. Selskapet er NORID-akkreditert for .no og ICANN-akkreditert for internasjonale TLD-er.",
      "Per mai 2026 har Simply.com laveste 3-års totalpris på .com i sammenligningen vår (525,46 kr inkl. mva). For .no er prisen 8,74 kr første år og 174,99 kr fornyelse — samlet 358,72 kr over 3 år.",
      "En av Simply.com sine spesialfunksjoner er .no-trustee-tjenesten: danske og andre nordiske kunder uten norsk organisasjonsnummer kan registrere .no-domener gjennom Simply.com som juridisk innehaver. Dette er en lovlig tjeneste for selskaper som ønsker .no-domene uten å etablere norsk virksomhet.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "8,74 kr",
        renewal: "174,99 kr",
        threeYearTotal: "358,72 kr",
      },
      {
        tld: ".com",
        firstYear: "25,50 kr",
        renewal: "249,98 kr",
        threeYearTotal: "525,46 kr",
      },
    ],
    included: ["dns", "epost-videresending", "ssl"],
    pricingNote:
      "Simply.com oppgir prisene eksklusiv mva. Vi har konvertert ved å multiplisere med 1,25. Førsteårsprisene er lokketilbud — fornyelsen er vesentlig høyere.",
    relatedComparisons: [
      "domenepriser",
      "com-domene",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["webhuset", "one-com", "domeneshop"],
    faq: [
      {
        question: "Hvem eier Simply.com?",
        answer:
          "Simply.com A/S eies av team.blue, et belgisk-basert hostingkonsern med hovedkontor i Gent. team.blue eier også svenske Loopia, danske ScanNet, Curanet, DanDomain og over 60 andre hostingmerker i 22 EU-land. Konsernet er Europas største innen domener og hosting.",
      },
      {
        question: "Hva er .no-trustee og hva koster det?",
        answer:
          "Simply.com tilbyr en trustee-tjeneste der selskapet står som juridisk innehaver av et .no-domene på vegne av kunder som mangler norsk organisasjonsnummer (typisk danske bedrifter). Dette er lovlig under Norids regler. Kostnaden varierer; sjekk Simply.com sine egne sider for oppdatert pris.",
      },
      {
        question: "Hvorfor het Simply.com tidligere UnoEuro?",
        answer:
          "Selskapet ble grunnlagt i 2004 under navnet UnoEuro og var en av de største danske domeneregistrarene. I 2020 ble navnet endret til Simply.com som en rebranding-strategi etter oppkjøpet av team.blue. Den juridiske enheten Simply.com A/S er fortsatt den samme.",
      },
      {
        question: "Inkluderer Simply.com SSL-sertifikat?",
        answer:
          "Ja. Simply.com inkluderer gratis SSL-sertifikat (via Let's Encrypt) i grunnpakken for både .no og .com-domener. DNS-hosting og e-postvideresending er også inkludert.",
      },
      {
        question: "Er Simply.com et godt valg for nordmenn?",
        answer:
          "Simply.com har konkurransedyktige priser, særlig på .com (laveste 3-års total i sammenligningen vår), men kundeservicen foregår primært på dansk og engelsk. For norske bedrifter som verdsetter norsk kundeservice, kan en NORID-akkreditert norsk registrar være mer praktisk. Velg basert på prioritering mellom pris og lokal støtte.",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 5. PROISP ──────────────────── */
  {
    slug: "proisp",
    name: "ProISP",
    tagline: "Webhotell-fokusert registrar",
    editorialTitle: {
      lead: "ProISP",
      emphasis: "webhotell",
      tail: "med domener inkludert.",
    },
    description:
      "ProISP er en norsk domeneregistrar med webhotell-fokus, etablert 2002. Eid av one.com Group AB siden 2024. Norid-akkreditert. Verifisert mai 2026.",
    answerBox:
      "ProISP er en norsk domeneregistrar etablert i 2002, som siden september 2024 er en del av one.com Group AB i Malmö. Selskapet driver under den juridiske enheten Group.One Norway AS sammen med Uniweb. ProISP har en webhotell-fokusert profil med teknisk grunnpakke, og har samme priser som Uniweb på .com (336 kr) men lavere første år for .no (23,75 kr vs Uniweb 84 kr).",
    conglomerate: "one-com-group",
    factBox: {
      konsern: "one.com Group AB (Malmö, Sverige)",
      hovedkontor: "Norge",
      juridisk: "Group.One Norway AS (org.nr. 984 106 211)",
      stiftet: "2002",
      orgnr: "984 106 211",
      norid: true,
      icann: false,
      markedsandel: "Del av one.com Group (3 brands i Norge)",
      url: "https://www.proisp.no",
    },
    introduction: [
      "ProISP er en norsk domeneregistrar etablert i 2002. Selskapet ble del av one.com Group AB i september 2024 gjennom en konsolidering der Uniweb og ProISP ble slått sammen til samme juridiske enhet: Group.One Norway AS, registrert i Brønnøysund med org.nr. 984 106 211.",
      "Selv om Uniweb og ProISP nå er samme juridiske selskap, opererer de fortsatt som to separate merkevarer med egne nettsider, kundepaneler og kundeservice. Begge er Norid-akkreditert for .no.",
      "Per mai 2026 har ProISP førsteårspris på 23,75 kr for .no og fornyelse på 275 kr — samlet 573,75 kr over 3 år. For .com tilbyr selskapet 336,25 kr både første år og fornyelse, samme som Uniweb.",
      "ProISP har en webhotell-fokusert forretningsmodell der domenet ofte selges som del av en webhotell-pakke. SSL-sertifikat og e-post er typisk inkludert i webhotell-produktene, ikke i domene-grunnpakken alene. Selskapet har norsk kundeservice.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "23,75 kr",
        renewal: "275 kr",
        threeYearTotal: "573,75 kr",
      },
      {
        tld: ".com",
        firstYear: "336,25 kr",
        renewal: "336,25 kr",
        threeYearTotal: "1 008,75 kr",
      },
    ],
    included: ["dns", "ssl", "support-norsk"],
    pricingNote:
      "ProISP oppgir prisene eksklusiv mva. Vi har konvertert ved å multiplisere med 1,25. SSL og e-post er typisk inkludert i webhotell-pakker, ikke i domene-grunnpakken alene.",
    relatedComparisons: [
      "domenepriser",
      "webhotell",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["uniweb", "one-com", "domeneshop"],
    faq: [
      {
        question: "Eier one.com Group ProISP?",
        answer:
          "Ja. ProISP er en del av one.com Group AB, et svensk-eid konsern med hovedkontor i Malmö. Konsernet eier også One.com og Uniweb. Siden september 2024 er Uniweb og ProISP slått sammen til samme juridiske enhet, Group.One Norway AS.",
      },
      {
        question: "Er ProISP og Uniweb det samme selskapet?",
        answer:
          "Juridisk sett ja — siden september 2024 opererer Uniweb og ProISP under samme juridiske enhet, Group.One Norway AS (org.nr. 984 106 211). Som merkevarer er de fortsatt separate med egne nettsider, kundepaneler og kundeservice.",
      },
      {
        question: "Hvorfor er ProISP billigere enn Uniweb på .no første år?",
        answer:
          "Til tross for samme juridiske enhet har ProISP en lavere førsteårspris på .no (23,75 kr) enn Uniweb (84 kr). Fornyelsen er fortsatt forskjellig: ProISP 275 kr vs Uniweb 300 kr. Dette tyder på at fusjonen ikke har samkjørt prisingen helt — selskapet kan tilby ulike rabatter via de to merkevarene.",
      },
      {
        question: "Inkluderer ProISP webhotell i domenet?",
        answer:
          "Nei, et rent .no-domene hos ProISP inkluderer DNS, SSL og norsk kundeservice. Webhotell og e-post tilbys som separate produkter. ProISP retter seg særlig mot kunder som kjøper webhotell og domene i pakke.",
      },
      {
        question: "Tilbyr ProISP DNSSEC?",
        answer:
          "ProISP tilbyr DNSSEC for .no-domener. For mer detaljert informasjon om DNSSEC-støtte hos norske registrarer, se vår sammenligning av DNSSEC-leverandører.",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 6. ONE.COM ──────────────────── */
  {
    slug: "one-com",
    name: "One.com",
    tagline: "Konsernets internasjonale flaggskip",
    editorialTitle: {
      lead: "One.com",
      emphasis: "internasjonalt flaggskip",
      tail: "i Group.One.",
    },
    description:
      "One.com er hovedmerket i one.com Group AB, et svensk hostingkonsern. Etablert 2002 i Danmark. Norid-akkreditert via Group.One Norway AS. Verifisert mai 2026.",
    answerBox:
      "One.com er flaggskip-merkevaren i one.com Group AB, et svensk hostingkonsern med hovedkontor i Malmö. Selskapet ble grunnlagt i Danmark i 2002 og er nå konsernets internasjonale produkt med tilstedeværelse i 23 land. one.com Group AB eier også Uniweb og ProISP i Norge. Per mai 2026 har One.com lokketilbud-pris på .no første år (124 kr) men vesentlig høyere fornyelse (286 kr/år).",
    conglomerate: "one-com-group",
    factBox: {
      konsern: "one.com Group AB (Malmö, Sverige)",
      hovedkontor: "Malmö, Sverige",
      juridisk: "one.com Group AB",
      stiftet: "2002 (Danmark)",
      norid: true,
      icann: true,
      markedsandel: "Konsernets flaggskip i 23+ land",
      url: "https://www.one.com/no",
    },
    introduction: [
      "One.com er flaggskip-merkevaren til one.com Group AB, et svenskeid konsern med hovedkontor i Malmö. Selskapet ble grunnlagt i Danmark i 2002, men ble flyttet til svensk eierskap senere. Konsernet eier også Uniweb og ProISP i Norge, samt 9+ andre hostingmerker i Europa.",
      "I Norge opererer One.com gjennom NORID-akkreditering på lik linje med andre internasjonale registrarer som retter seg mot det norske markedet. Selskapet er også ICANN-akkreditert for internasjonale TLD-er.",
      "Per mai 2026 har One.com en aggressiv lokketilbud-strategi: .no koster 123,75 kr første år, men 286,25 kr ved fornyelse. Det betyr at total 3-års kostnad blir 696,25 kr — vesentlig høyere enn norske konkurrenter. For .com er førsteårsprisen 131,25 kr og fornyelsen 348,75 kr.",
      "I grunnpakken inkluderer One.com DNS, e-post med 1 GB lagring og SSL-sertifikat. Selskapet retter seg særlig mot kunder som vil ha alt-i-én-pakke med webhotell, e-post og domene samlet.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "123,75 kr",
        renewal: "286,25 kr",
        threeYearTotal: "696,25 kr",
      },
      {
        tld: ".com",
        firstYear: "131,25 kr",
        renewal: "348,75 kr",
        threeYearTotal: "828,75 kr",
      },
    ],
    included: ["dns", "ssl", "epost-pakke"],
    pricingNote:
      "One.com oppgir prisene eksklusiv mva. Vi har konvertert ved å multiplisere med 1,25. Førsteårsprisene er lokketilbud — fornyelsen er over dobbelt så høy. Beregn alltid totalkostnad over 3 år.",
    relatedComparisons: [
      "domenepriser",
      "webhotell",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["uniweb", "proisp", "domeneshop"],
    faq: [
      {
        question: "Hvem eier One.com?",
        answer:
          "One.com eies av one.com Group AB, et svenskeid konsern med hovedkontor i Malmö. Konsernet eier også Uniweb, ProISP, checkdomain (Tyskland), dogado (Tyskland), metanet (Sveits), herold (Østerrike), hostnet (Nederland), Zoner og Webglobe.",
      },
      {
        question: "Hvorfor stiger fornyelsen så mye hos One.com?",
        answer:
          "One.com bruker en aggressiv lokketilbud-strategi der førsteårsprisen er lav for å tiltrekke nye kunder, mens fornyelsesprisen er over dobbelt så høy. Dette er en vanlig modell internasjonalt, men kan overraske kunder som ikke leser de fullstendige prisbetingelsene. Beregn alltid totalkostnad over 3 år før du velger.",
      },
      {
        question: "Hvor er One.com hovedkontor?",
        answer:
          "Selv om One.com ble grunnlagt i Danmark i 2002, ligger hovedkontoret nå i Malmö, Sverige, gjennom morselskapet one.com Group AB. Selskapet har ansatte og kundeservice i flere europeiske land.",
      },
      {
        question: "Er One.com og Uniweb det samme selskapet?",
        answer:
          "De er del av samme konsern (one.com Group AB), men opererer som tre separate merkevarer i Norge: One.com, Uniweb og ProISP. Siden september 2024 er Uniweb og ProISP slått sammen til samme juridiske enhet (Group.One Norway AS), mens One.com fortsatt opererer separat.",
      },
      {
        question: "Inkluderer One.com gratis e-post?",
        answer:
          "Ja. One.com inkluderer e-post med 1 GB lagring per konto i grunnpakken. Selskapet tilbyr også oppgraderte e-post-pakker med mer lagring som tilleggsprodukter.",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 7. UNIWEB ──────────────────── */
  {
    slug: "uniweb",
    name: "Uniweb",
    tagline: "Norsk merkevare under one.com Group",
    editorialTitle: {
      lead: "Uniweb",
      emphasis: "norsk merkevare",
      tail: "i one.com Group.",
    },
    description:
      "Uniweb er en norsk domeneregistrar etablert 2000, nå del av one.com Group AB. Norid-akkreditert via Group.One Norway AS. 300+ TLD-er. Verifisert mai 2026.",
    answerBox:
      "Uniweb er en norsk domeneregistrar etablert i 2000, og er siden september 2024 del av one.com Group AB gjennom Group.One Norway AS. Selskapet er Norid-akkreditert og tilbyr 300+ toppnivådomener. Per mai 2026 har Uniweb høyere priser enn norske konkurrenter (84 kr/år første år, 300 kr fornyelse for .no), men inkluderer DNSSEC og SSL i grunnpakken.",
    conglomerate: "one-com-group",
    factBox: {
      konsern: "one.com Group AB (Malmö, Sverige)",
      hovedkontor: "Norge",
      juridisk: "Group.One Norway AS (org.nr. 984 106 211)",
      stiftet: "2000",
      orgnr: "984 106 211",
      norid: true,
      icann: false,
      markedsandel: "300+ TLD-er tilgjengelig",
      url: "https://www.uniweb.no",
    },
    introduction: [
      "Uniweb er en norsk domeneregistrar etablert i 2000. Selskapet ble del av one.com Group AB i september 2024 gjennom en konsolidering der Uniweb og ProISP ble slått sammen til samme juridiske enhet: Group.One Norway AS, registrert i Brønnøysund med org.nr. 984 106 211.",
      "Selv om Uniweb og ProISP nå er samme juridiske selskap, opererer de fortsatt som to separate merkevarer med egne nettsider, kundepaneler og kundeservice. Begge er NORID-akkreditert for .no.",
      "Per mai 2026 har Uniweb førsteårspris på 84 kr for .no og fornyelse på 300 kr — samlet 684 kr over 3 år. For .com tilbyr selskapet 420 kr både første år og fornyelse — høyeste i sammenligningen vår.",
      "Uniweb skiller seg fra ProISP ved å tilby DNSSEC, SSL og 300+ toppnivådomener i grunnpakken. Selskapet retter seg særlig mot bedrifter som ønsker bredere TLD-utvalg og NORID-akkreditering med inkluderte sikkerhetsfunksjoner.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "84 kr",
        renewal: "300 kr",
        threeYearTotal: "684 kr",
      },
      {
        tld: ".com",
        firstYear: "420 kr",
        renewal: "420 kr",
        threeYearTotal: "1 260 kr",
      },
    ],
    included: ["dns", "ssl", "dnssec", "support-norsk"],
    pricingNote:
      "Uniweb oppgir prisene eksklusiv mva. Vi har konvertert ved å multiplisere med 1,25. Førsteårsprisen er lokketilbud — fornyelsen på 300 kr er det som faktisk teller over tid.",
    relatedComparisons: [
      "domenepriser",
      "no-domene",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["proisp", "one-com", "domeneshop"],
    faq: [
      {
        question: "Eier one.com Group Uniweb?",
        answer:
          "Ja. Uniweb er en del av one.com Group AB, et svensk-eid konsern med hovedkontor i Malmö. Konsernet eier også One.com og ProISP. Siden september 2024 er Uniweb og ProISP slått sammen til samme juridiske enhet, Group.One Norway AS.",
      },
      {
        question: "Er Uniweb en norsk leverandør?",
        answer:
          "Uniweb opererer fortsatt fra Norge med norsk kundeservice og er registrert som norsk juridisk enhet (Group.One Norway AS, org.nr. 984 106 211). Eierskapet er imidlertid svensk via one.com Group AB. Selskapet har vært norsk-grunnlagt siden 2000.",
      },
      {
        question: "Tilbyr Uniweb DNSSEC?",
        answer:
          "Ja. DNSSEC er inkludert i grunnpakken hos Uniweb for .no-domener. Sammen med Anycast-navnetjenere og gratis SSL-sertifikat utgjør dette sikkerhetsdelen av grunnpakken.",
      },
      {
        question: "Hvor mange TLD-er tilbyr Uniweb?",
        answer:
          "Uniweb tilbyr over 300 toppnivådomener (TLD-er). Dette inkluderer klassiske som .no, .com, .net og .org, samt moderne som .shop, .tech, .online og .cloud. Dette gir bredere utvalg enn de fleste norske konkurrenter.",
      },
      {
        question: "Hva er forskjellen på Uniweb og ProISP?",
        answer:
          "Begge er del av one.com Group AB og samme juridiske enhet (Group.One Norway AS) siden september 2024. Som merkevarer skiller de seg: Uniweb tilbyr 300+ TLD-er og DNSSEC i grunnpakken (84 kr første år, 300 kr fornyelse for .no), mens ProISP er mer webhotell-fokusert (23,75 kr første år, 275 kr fornyelse for .no).",
      },
    ],
    updatedAt: "2026-05-05",
  },

  /* ──────────────────── 8. DOMENE.NO ──────────────────── */
  {
    slug: "domene-no",
    name: "Domene.no",
    tagline: "Pakkepris med epost inkludert",
    editorialTitle: {
      lead: "Domene.no",
      emphasis: "pakkepris",
      tail: "med epost inkludert.",
    },
    description:
      "Domene.no er en norsk domeneregistrar med pakkepris-modell, eid av Miss Group. Etablert 1998, registrert i Brønnøysund. Verifisert mai 2026.",
    answerBox:
      "Domene.no (juridisk Domene AS, org.nr. 880 478 982) er en norsk domeneregistrar etablert i 1998 og eid av Miss Group siden 2024 — samme konsern som Domeneshop. Selskapet bruker en pakkepris-modell der prisen for et .no-domene inkluderer 10 epostkontoer (5 GB), antispam, antivirus, DNS, SSL og support — totalt 1 047,50 kr over 3 år.",
    conglomerate: "miss-group",
    factBox: {
      konsern: "Miss Group (Stockholm, Sverige)",
      hovedkontor: "Norge",
      juridisk: "Domene AS",
      stiftet: "1998",
      orgnr: "880 478 982",
      norid: true,
      icann: false,
      markedsandel: "20 000+ års erfaring (estimat)",
      url: "https://www.domene.no",
    },
    introduction: [
      "Domene.no er en norsk domeneregistrar med juridisk navn Domene AS, registrert i Brønnøysund med org.nr. 880 478 982. Selskapet ble etablert i 1998 og har vært en del av norsk domenebransje i over 25 år.",
      "Siden 2024 har Domene.no vært eid av svenske Miss Group — samme konsern som eier Domeneshop. De to merkevarene drives som separate selskaper med egne nettsider, kundepaneler og prisstrategier, til tross for felles eierskap.",
      "Per mai 2026 bruker Domene.no en distinktiv pakkepris-modell. Førsteårsprisen er 12,50 kr for .no, men fornyelsen er 517,50 kr — samlet 1 047,50 kr over 3 år. Dette er høyeste fornyelse i sammenligningen vår, men prisen inkluderer mer enn rene domener-tjenester.",
      "I pakken inkluderer Domene.no 10 epostkontoer med totalt 5 GB lagring, antispam, antivirus, DNS-hosting, SSL-sertifikat og support. For kunder som ellers ville kjøpt e-post-pakker separat, kan totalkostnaden være konkurransedyktig — men hvis du bare trenger et rent domene uten e-post, er det rimeligere alternativer i markedet.",
    ],
    pricing: [
      {
        tld: ".no",
        firstYear: "12,50 kr",
        renewal: "517,50 kr",
        threeYearTotal: "1 047,50 kr",
      },
      {
        tld: ".com",
        firstYear: "236,25 kr",
        renewal: "517,50 kr",
        threeYearTotal: "1 271,25 kr",
      },
    ],
    included: [
      "dns",
      "ssl",
      "epost-pakke",
      "antispam-antivirus",
      "support-norsk",
    ],
    pricingNote:
      "Domene.no oppgir prisene inkludert mva. Pakkeprisen inkluderer 10 epostkontoer (5 GB total), antispam, antivirus, DNS og SSL. For kunder som bare trenger rent domene uten e-post, er prisen vesentlig høyere enn alternativer.",
    relatedComparisons: [
      "domenepriser",
      "epost",
      "eierskap-norske-registrarer",
    ],
    relatedProviders: ["domeneshop", "webhuset"],
    faq: [
      {
        question: "Eier Miss Group både Domeneshop og Domene.no?",
        answer:
          "Ja. Siden 2024 har svenske Miss Group eid både Domeneshop og Domene.no. De to merkevarene drives som separate selskaper med egne nettsider og kundepaneler, men eierskapet er felles. Begge har norsk juridisk enhet og norsk drift.",
      },
      {
        question: "Hva inkluderer Domene.no sin pakkepris?",
        answer:
          "Pakkeprisen for et .no-domene hos Domene.no inkluderer 10 epostkontoer med totalt 5 GB lagring, antispam, antivirus, DNS-hosting, SSL-sertifikat og support. Dette er en bundling av tjenester som typisk koster ekstra hos andre registrarer.",
      },
      {
        question: "Hvorfor er fornyelsen så mye dyrere hos Domene.no?",
        answer:
          "Domene.no bruker en pakkepris-modell der prisen ikke bare dekker selve domenet, men også 10 epostkontoer, antispam, antivirus, SSL og support. For kunder som vil ha alt i én pakke, kan totalprisen være konkurransedyktig. For rene domener uten e-post er det vesentlig dyrere enn alternativer som Webhuset (124 kr/år) eller Gigahost (106 kr/år).",
      },
      {
        question: "Er Domene.no en del av Domeneshop?",
        answer:
          "Nei. Domene.no og Domeneshop er to separate merkevarer med felles eier (Miss Group). De har egne nettsider, kundepaneler, prisstrategier og forretningsmodeller. Domene AS (Domene.no) og Domeneshop AS er to ulike juridiske enheter registrert i Brønnøysund.",
      },
      {
        question: "Hvor lenge har Domene.no eksistert?",
        answer:
          "Domene.no ble etablert i 1998, samme år som Webhuset, og er en av Norges eldste fortsatt aktive domeneregistrarer. Den juridiske enheten Domene AS er registrert i Brønnøysund med org.nr. 880 478 982.",
      },
    ],
    updatedAt: "2026-05-05",
  },
];

/**
 * Helper to find a provider by slug.
 */
export function findProvider(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}
