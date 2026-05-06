import type { Comparison } from "@/lib/types";

/**
 * Pricing data is researched manually from public price lists at the leverandør's
 * website. Always verify with the provider before purchase. Prices in NOK
 * incl. MVA where applicable. Last updated: see updatedAt per row.
 */

export const comparisons: Comparison[] = [
  {
    slug: "domenepriser",
    title: "Domenepriser 2026: Sammenlign 8 registrarer i Norge",
    description:
      "Verifisert oversikt over priser på .no- og .com-domener hos åtte registrarer som retter seg mot norske kunder. Med Domeneshops bulkrabatt-tabell. Alle priser inkl. mva. Oppdatert mai 2026.",
    answerBox:
      "Gigahost har laveste fornyelsespris på .no i Norge i mai 2026 med 106,25 kr inkl. mva — uten lokketilbud. Webhuset vinner totalt over 3 år (256,25 kr) takket være lavt førsteår. For bedrifter med mange domener faller Domeneshops fornyelsespris til 139 kr ved 500+ domener, og selskapet er fortsatt eneste ICANN-akkrediterte registrar i Norge med 45 % markedsandel. Av åtte leverandører er kun Webhuset og Gigahost reelt uavhengige norske.",
    intro:
      "Domeneprisene varierer mer enn mange tror — særlig fornyelsen er ofte langt høyere enn førsteårsprisen. Vi sammenligner åtte registrarer som retter seg mot norske kunder. Konsernstrukturen er viktig: seks av åtte er del av store internasjonale konserner. one.com Group AB (Malmö) eier One.com, Uniweb og ProISP. Miss Group eier Domeneshop og Domene.no. team.blue eier Simply.com. To er reelt uavhengige norske: Webhuset (Bergen) og Gigahost (Sandefjord). Alle priser i NOK inkludert 25 % mva.",
    methodology:
      "Priser er hentet manuelt fra leverandørenes prislister og bestillingsskjemaer, og verifisert i mai 2026 fra primærkilder. Domeneshop oppgir prisene inklusive mva; de øvrige syv oppgir eksklusive mva, og vi har konvertert ved å multiplisere med 1,25. Førsteårsprisen er det du betaler ved registrering (ofte rabattert som lokketilbud); fornyelsesprisen er det du betaler hvert år etter — og er det tallet som faktisk teller over tid. 3-års totalen viser den reelle kostnaden: førsteår + 2 år fornyelse. Domene.no er markert med ★ fordi prisene er pakkepriser som inkluderer 10 epostkontoer, antispam, antivirus og support — de andre tar dette separat. Domeneshops volumrabatt-trinn er hentet fra deres offentlige prisliste fra 2. september 2025.",
    columns: [
      { key: "no_first", label: ".no første år" },
      { key: "no_renew", label: ".no fornyelse" },
      { key: "no_3yr", label: ".no total 3 år" },
      { key: "com_first", label: ".com første år" },
      { key: "com_renew", label: ".com fornyelse" },
      { key: "included", label: "Inkludert" },
    ],
    providers: [
      {
        name: "Gigahost",
        href: "https://gigahost.no/domene",
        values: {
          no_first: "106,25 kr",
          no_renew: "106,25 kr",
          no_3yr: "318,75 kr",
          com_first: "211,25 kr",
          com_renew: "211,25 kr",
          included: "Gratis DNS-hosting, REST API, PTR/Reverse DNS, Certbot plugin, Dynamic DNS",
        },
        note: "Norsk uavhengig, Sandefjord-basert siden 2006. Eier tre egne datasentre. NORID-akkreditert. \"Norges rimeligste fornyelse\" på .no — samme pris ved registrering og fornyelse, ingen lokketilbud. Egen REST API gjør den til favoritt blant utviklere.",
        badges: ["laveste-fornyelse", "norsk-uavhengig"],
        conglomerate: "norsk-uavhengig",
        features: ["dns", "rest-api", "ptr-reverse-dns", "certbot-plugin", "dynamic-dns", "support-norsk"],
      },
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          no_first: "8,75 kr",
          no_renew: "123,75 kr",
          no_3yr: "256,25 kr",
          com_first: "187,50 kr",
          com_renew: "187,50 kr",
          included: "DNS, e-postvideresending",
        },
        note: "Norsk uavhengig, Bergensbasert siden 1998. Norid-akkreditert. Lavest .no-totalpris over 3 år takket være kraftig lokketilbud første år.",
        badges: ["laveste-3ar-no", "norsk-uavhengig"],
        conglomerate: "norsk-uavhengig",
        features: ["dns", "epost-videresending", "support-norsk"],
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          no_first: "8,74 kr",
          no_renew: "174,99 kr",
          no_3yr: "358,72 kr",
          com_first: "25,50 kr",
          com_renew: "249,98 kr",
          included: "DNS, e-postvideresending, SSL",
        },
        note: "Dansk leverandør i Skanderborg (tidligere UnoEuro frem til 2020). Del av team.blue — europeisk konsern med 60+ brands i 22 EU-land. Lavest .com-totalpris.",
        badges: ["laveste-3ar-com"],
        conglomerate: "team-blue",
        features: ["dns", "epost-videresending", "ssl"],
      },
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          no_first: "99 kr*",
          no_renew: "199 kr",
          no_3yr: "497 kr",
          com_first: "220 kr",
          com_renew: "220 kr",
          included: "DNS, e-postvideresending, gratis SSL og DNSSEC. Bulkrabatt fra 5 domener.",
        },
        note: "Norges desidert største .no-registrar med 45 % markedsandel, 25+ års erfaring og 650 000+ domener. Eneste ICANN-akkrediterte registrar i Norge. Eid av Miss Group siden august 2024. Volumrabatt automatisk fra 5 domener — se egen tabell under. * Tilbud — ordinær pris 199 kr.",
        badges: ["bedrifter", "mange-domener"],
        conglomerate: "miss-group",
        features: ["dns", "epost-videresending", "ssl", "dnssec", "registry-lock", "support-norsk", "volumrabatt"],
        volumeTiers: [
          {
            range: "1-4 domener",
            values: {
              no_first: "99 kr*",
              no_renew: "199 kr",
              no_3yr: "497 kr",
              com_first: "220 kr",
              com_renew: "220 kr",
              included: "Standardpris",
            },
          },
          {
            range: "5-24 domener",
            values: {
              no_first: "99 kr",
              no_renew: "189 kr",
              no_3yr: "477 kr",
              com_first: "210 kr",
              com_renew: "210 kr",
              included: "Volumrabatt aktivert",
            },
          },
          {
            range: "25-99 domener",
            values: {
              no_first: "99 kr",
              no_renew: "169 kr",
              no_3yr: "437 kr",
              com_first: "200 kr",
              com_renew: "200 kr",
              included: "+15 % mer rabatt på tjenester",
            },
          },
          {
            range: "100-499 domener",
            values: {
              no_first: "99 kr",
              no_renew: "159 kr",
              no_3yr: "417 kr",
              com_first: "195 kr",
              com_renew: "195 kr",
              included: "+30 % mer rabatt på tjenester",
            },
          },
          {
            range: "500+ domener",
            values: {
              no_first: "99 kr",
              no_renew: "139 kr",
              no_3yr: "377 kr",
              com_first: "190 kr",
              com_renew: "190 kr",
              included: "Maks rabatt — billigere fornyelse enn Gigahost",
            },
          },
        ],
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          no_first: "23,75 kr",
          no_renew: "275 kr",
          no_3yr: "573,75 kr",
          com_first: "336,25 kr",
          com_renew: "336,25 kr",
          included: "DNS, SSL, e-post i webhotell-pakker",
        },
        note: "Norsk leverandør etablert 2002. Siden september 2024 fusjonert med Uniweb i Group.One Norway AS — samme juridiske selskap, men opererer som separat merkevare. Eid av one.com Group AB.",
        conglomerate: "one-com-group",
        features: ["dns", "ssl", "support-norsk"],
      },
      {
        name: "One.com",
        href: "https://www.one.com/nb-no",
        values: {
          no_first: "123,75 kr",
          no_renew: "286,25 kr",
          no_3yr: "696,25 kr",
          com_first: "131,25 kr",
          com_renew: "348,75 kr",
          included: "DNS, e-post 1 GB, SSL",
        },
        note: "Dansk-grunnlagt (2002), nå med globalt hovedkontor i Malmö som one.com Group AB. Group.Ones flaggskip-merkevare. Aggressivt lokketilbud — fornyelse mer enn doblerer prisen. Beregn alltid totalkostnad over flere år.",
        conglomerate: "one-com-group",
        features: ["dns", "ssl", "epost-pakke"],
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          no_first: "84 kr",
          no_renew: "300 kr",
          no_3yr: "684 kr",
          com_first: "420 kr",
          com_renew: "420 kr",
          included: "DNS, SSL",
        },
        note: "Norsk merkevare under Group.One Norway AS — samme juridiske enhet som ProISP siden september 2024. Eid av one.com Group AB. Dyrere enn ProISP på .com (420 vs 336 kr) selv om det er samme selskap.",
        conglomerate: "one-com-group",
        features: ["dns", "ssl", "support-norsk"],
      },
      {
        name: "Domene.no ★",
        href: "https://www.domene.no",
        values: {
          no_first: "12,50 kr",
          no_renew: "517,50 kr",
          no_3yr: "1 047,50 kr",
          com_first: "236,25 kr",
          com_renew: "517,50 kr",
          included: "10 epostkontoer (5 GB), antispam, antivirus, DNS, SSL, support",
        },
        note: "★ Pakkepris-modell — inkluderer 10 epostkontoer som de andre tar separat. Domene AS (org.nr. 880478982) ble grunnlagt i 1998 og er eid av Miss Group. Norsk drevet, basert i Norge. Egen pakke gjør sammenligning vanskelig.",
        conglomerate: "miss-group",
        features: ["dns", "ssl", "epost-pakke", "antispam-antivirus", "support-norsk"],
      },
    ],
    importantNotes: [
      "Domeneshop oppgir prisene inkl. mva på sin prisliste. De syv andre oppgir eks. mva — vi har konvertert til inkl. mva (×1,25) for direkte sammenligning.",
      "Lokketilbud er normen i bransjen. Webhuset, Simply.com, One.com, ProISP og Domene.no har alle vesentlig høyere fornyelsespris enn førsteårspris. Bare Domeneshop, Gigahost og Uniweb har omtrent samme pris ved fornyelse.",
      "Domeneshops volumrabatt er den eneste automatiske bulkrabatten i markedet. Ved 500+ domener fornyer du .no for 139 kr — lavere enn Gigahost (106,25 kr) når du legger til epost og webhotell-rabatt.",
      "Domene.no er markert med ★ fordi prisene er pakkepriser inkludert 10 epostkontoer, antispam, antivirus og support. Ikke direkte sammenlignbar med ren domeneregistrering — bruk dem hvis du vil ha alt klart i én pakke.",
      "Uniweb og ProISP er samme selskap siden september 2024 (Group.One Norway AS, org.nr. 984106211). De opererer som to merkevarer men deler eierskap. Likevel har de ikke samme pris på .com (Uniweb 420 kr vs ProISP 336 kr).",
      "Av åtte leverandører er to reelt uavhengige norske: Webhuset (Bergen, 1998) og Gigahost (Sandefjord, 2006). Begge er NORID-akkrediterte med direkte registrering hos Norid.",
      "Domenepriser er bare en del av totalkostnaden. Mange leverandører tjener pengene sine på webhotell, epost og Microsoft 365 — sjekk priser på disse separat før du velger leverandør basert kun på domeneprisen.",
    ],
    faq: [
      {
        question: "Hvilken registrar har billigste .no-domene i Norge i 2026?",
        answer:
          "Webhuset har laveste totale .no-pris over 3 år med 256,25 kr inkl. mva (8,75 kr første år + 123,75 kr per år ved fornyelse). Gigahost har laveste fornyelsespris (106,25 kr) uten lokketilbud. For bedrifter med 500+ domener faller Domeneshops fornyelsespris til 139 kr inkl. mva — lavere enn Gigahost. Det avhenger altså av om du har ett eller mange domener, og om du planlegger å beholde domenet over tid eller bytte etter første år.",
      },
      {
        question: "Hva er forskjellen på Gigahost og Webhuset?",
        answer:
          "Begge er reelt uavhengige norske leverandører. Webhuset er Bergensbasert siden 1998 og bruker lokketilbud (8,75 kr første år, 123,75 kr ved fornyelse) — samlet 256,25 kr over 3 år. Gigahost er Sandefjord-basert siden 2006 med fast lav pris (106,25 kr både første år og ved fornyelse) — samlet 318,75 kr over 3 år. Webhuset er billigst over 3 år; Gigahost er billigst fra år 4 og fremover hvis du beholder domenet lenge. Gigahost har også eget REST API og gratis DNS-hosting som er attraktivt for utviklere.",
      },
      {
        question: "Får jeg automatisk rabatt på mange domener hos Domeneshop?",
        answer:
          "Ja. Domeneshop er eneste leverandør med automatisk volumrabatt — den aktiveres fra 5 domener på samme brukerkonto. Rabatten øker i fem trinn: 5-24 domener (10 kr lavere fornyelse), 25-99 (30 kr lavere), 100-499 (40 kr lavere), 500+ (60 kr lavere). I tillegg får du 20-50 % rabatt på epost og webhotell. For et byrå eller selskap med 500+ domener betaler du 139 kr per .no fornyelse — lavere enn de fleste konkurrentene.",
      },
      {
        question: "Inkluderer prisene moms?",
        answer:
          "Ja. Alle priser i tabellen er oppgitt inklusive 25 % mva for direkte sammenligning. Domeneshop er den eneste leverandøren som oppgir prisene slik på sin prisliste fra før — alle de syv andre oppgir eksklusive mva, og vi har konvertert ved å multiplisere med 1,25. Dette er viktig fordi forskjellen mellom 99 kr eks mva og 99 kr inkl mva er 25 kr.",
      },
      {
        question: "Er Uniweb og ProISP samme selskap?",
        answer:
          "Ja, formelt sett siden september 2024. Begge er nå Group.One Norway AS (org.nr. 984106211) som er del av one.com Group AB i Malmö. De opererer som to separate merkevarer med egne nettsider og kundeservice, men deler eierskap. Likevel har ProISP rimeligere .com-pris (336,25 kr vs Uniweb 420 kr). Hvis du fordeler domener mellom dem som risikospredning, oppnår du det ikke i praksis.",
      },
      {
        question: "Hvem eier Domeneshop og Domene.no?",
        answer:
          "Begge er eid av Miss Group, et svensk-basert digitalt konsern grunnlagt i 2014 med hovedkontor i Stockholm. Domeneshop AS er eneste ICANN-akkrediterte registrar i Norge med over 650 000 domener — del av Miss Group siden august 2024. Domene AS (domene.no) er en egen merkevare med pakkepriser som inkluderer epost. Begge driver fortsatt med norsk kundeservice og norske datasentre, men eierskapet er ikke lenger nasjonalt.",
      },
      {
        question: "Hvilke registrarer er reelt uavhengige norske?",
        answer:
          "Av de åtte leverandørene i sammenligningen er to reelt uavhengige norske: Webhuset (Webhuset Invest AS, Bergen, etablert 1998) og Gigahost (Gigahost AS, Sandefjord, etablert 2006). Begge er NORID-akkrediterte, eid av norske gründere, og driver fra Norge. Domeneshop og Domene.no drives fra Norge med norsk team, men eies av svenske Miss Group. ProISP og Uniweb drives fra Norge men eies av one.com Group AB i Malmö.",
      },
      {
        question: "Hvorfor tjener leverandørene pengene sine på webhotell, ikke domener?",
        answer:
          "Domener er en lokkevare — bruttofortjenesten er ofte under 50 kr per år etter at Norid-avgift er betalt. De virkelige inntektene kommer fra tilleggstjenester: webhotell (300-1 200 kr/år), epost (300-700 kr/år), Microsoft 365 (1 000-2 000 kr/år) og SSL-sertifikater. Gigahost selger nesten utelukkende på domenepris og lokker kunder til serverhosting; Domeneshop tjener mer på webhotell og epost-pakker; Domene.no pakker alt sammen. Dette er hvorfor du ofte ser \"gratis .no første år ved kjøp av webhotell\" — det er deres måte å selge tjenestene sine.",
      },
    ],
    relatedSlugs: ["eierskap-norske-registrarer", "no-domene", "com-domene", "norske-registrarer-fokus"],
    recommendations: [
      {
        persona: "Privatperson med ett .no-domene",
        recommended: "Webhuset",
        reason: "Lavest totalpris over 3 år (256,25 kr) for ren domeneregistrering. Norid-akkreditert siden 1998, uavhengig norsk. Nest beste alternativ er Gigahost hvis du planlegger å beholde domenet i 5+ år.",
      },
      {
        persona: "Tekniske brukere og utviklere",
        recommended: "Gigahost",
        reason: "Eneste norske registrar med komplett REST API, gratis DNS-hosting, Reverse DNS (PTR), Certbot plugin og Dynamic DNS. Fast pris uten lokketilbud (106,25 kr inkl. mva). Sandefjord-basert med tre egne datasentre.",
      },
      {
        persona: "Bedrift med 5+ domener",
        recommended: "Domeneshop",
        reason: "Eneste leverandør med automatisk volumrabatt — fra 5 domener får du både domeneprisen og tjenestene rabattert. Ved 100+ domener er Domeneshop billigere enn Gigahost totalt sett. Massadministrasjon og felles fakturering forenkler hverdagen.",
      },
      {
        persona: "Stor portefølje (500+ domener)",
        recommended: "Domeneshop",
        reason: "Med 500+ domener betaler du 139 kr per .no fornyelse (inkl. mva) — lavere enn Gigahost. Tjenester som epost faller fra 29 kr til 11 kr per måned. Forhandlervennlig og eneste ICANN-akkrediterte registrar i Norge.",
      },
      {
        persona: "Bedrift som vil ha sikkerhet og DNSSEC",
        recommended: "Domeneshop",
        reason: "Norges desidert største .no-registrar med 45 % markedsandel. Gratis DNSSEC, registry-lock for forretningskritiske domener, og 24-timers norsk kundeservice. Stabilt prisbilde uten lokketilbud.",
      },
      {
        persona: "Kun .com-domene over flere år",
        recommended: "Simply.com",
        reason: "Lavest totalpris på .com over 3 år (525,46 kr inkl. mva). 25,50 kr første år + 249,98 kr ved fornyelse. Webhuset er nest billigst på .com med 562,50 kr.",
      },
      {
        persona: "Bedrift som vil ha alt klart i én pakke",
        recommended: "Domene.no",
        reason: "Pakkepris (517,50 kr/år) inkluderer 10 epostkontoer, antispam, antivirus, SSL og support — perfekt hvis du ikke vil sette opp epost separat.",
      },
    ],
    updatedAt: "2026-05-06",
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

  // ── Eierskapsoversikt — konsernkart for det norske domenemarkedet ──
  {
    slug: "eierskap-norske-registrarer",
    title: "Hvem eier hvem? Konsernstruktur i norsk domenemarked 2026",
    description:
      "Komplett oversikt over hvilke konserner som eier de åtte registrarene som retter seg mot norske kunder. Verifisert mai 2026 fra primærkilder.",
    answerBox:
      "Av åtte domeneregistrarer som retter seg mot norske kunder i 2026, er to reelt uavhengige norske: Webhuset i Bergen og Gigahost i Sandefjord. De seks andre er fordelt på tre internasjonale konserner. one.com Group AB (Malmö) eier One.com, Uniweb og ProISP. Miss Group (Stockholm) eier Domeneshop og Domene.no. team.blue (Belgia) eier Simply.com. Uniweb og ProISP er samme juridiske selskap siden september 2024.",
    intro:
      "De fleste antar at en \"norsk\" registrar er norsk eid. I dag er det ikke lenger tilfelle for de fleste. Av åtte registrarer som retter seg mot norske kunder, er bare to reelt uavhengige norske: Webhuset i Bergen og Gigahost i Sandefjord. De seks andre er fordelt på tre store internasjonale konserner. Her er den komplette eierskapsoversikten — verifisert i mai 2026 fra leverandørenes egne om-sider.",
    methodology:
      "Eierskapsdata er hentet fra leverandørenes egne om-sider, konsernenes brands-sider, og offisielle selskapsregistre (Brønnøysundregisteret, Bolagsverket, det danske CVR-registeret). Hvor relevant, har vi inkludert organisasjonsnummer og dato for siste eierskaps-endring. Konsernstrukturen oppdateres jevnlig — leverandørene endrer eierskap relativt ofte i den europeiske hosting-bransjen.",
    columns: [
      { key: "konsern", label: "Konsern" },
      { key: "hovedkontor", label: "Hovedkontor" },
      { key: "juridisk", label: "Juridisk enhet" },
      { key: "fakta", label: "Nøkkelfakta" },
    ],
    providers: [
      {
        name: "Webhuset",
        href: "https://www.webhuset.no",
        values: {
          konsern: "Uavhengig norsk",
          hovedkontor: "Bergen, Norge",
          juridisk: "Webhuset Invest AS",
          fakta: "Stiftet 1998. 20 000+ kunder. Norid-akkreditert. En av to reelt uavhengige norske aktører.",
        },
        note: "Webhuset er per mai 2026 én av to registrarer i sammenligningen som ikke er del av et internasjonalt konsern.",
      },
      {
        name: "Gigahost",
        href: "https://gigahost.no",
        values: {
          konsern: "Uavhengig norsk",
          hovedkontor: "Sandefjord, Norge",
          juridisk: "Gigahost AS (org.nr. 933 452 549)",
          fakta: "Stiftet 2006 av gründerne. Tre egne datasentre i Sandefjord. Norid-akkreditert. Norges rimeligste fornyelse på .no.",
        },
        note: "Gigahost eies fortsatt av gründerne som startet selskapet i 2006. Eget datasenter, ingen konserneier.",
      },
      {
        name: "Domeneshop",
        href: "https://domene.shop",
        values: {
          konsern: "Miss Group",
          hovedkontor: "Stockholm, Sverige (eier) — Oslo (drift)",
          juridisk: "Domeneshop AS",
          fakta: "45 % markedsandel på .no. 25+ års erfaring. 650 000+ domener. Eneste ICANN-akkrediterte registrar i Norge. Eid av Miss Group siden august 2024.",
        },
        note: "Drives fortsatt fra Oslo med norsk team, men eierskapet ble overført til svenske Miss Group i 2024.",
      },
      {
        name: "Domene.no (Domene AS)",
        href: "https://www.domene.no",
        values: {
          konsern: "Miss Group",
          hovedkontor: "Stockholm, Sverige (eier) — Norge (drift)",
          juridisk: "Domene AS (org.nr. 880478982)",
          fakta: "Stiftet 1998. 20+ år erfaring. 20 000+ kunder. Pakkepris-modell med epost inkludert. Eid av Miss Group.",
        },
        note: "Egen merkevare under Miss Group, separat fra Domeneshop. Bruker pakkepriser (epost inkludert) som forretningsmodell.",
      },
      {
        name: "Simply.com",
        href: "https://www.simply.com/no",
        values: {
          konsern: "team.blue",
          hovedkontor: "Gent, Belgia (eier) — Skanderborg, Danmark (drift)",
          juridisk: "Simply.com A/S",
          fakta: "Tidligere UnoEuro frem til 2020. Del av team.blue — europeisk konsern med 60+ brands i 22 EU-land.",
        },
        note: "Del av team.blue Denmark A/S sammen med ScanNet, Curanet og DanDomain. team.blue eier også svenske Loopia.",
      },
      {
        name: "One.com",
        href: "https://www.one.com/nb-no",
        values: {
          konsern: "one.com Group AB",
          hovedkontor: "Malmö, Sverige",
          juridisk: "one.com Group AB",
          fakta: "Dansk-grunnlagt 2002. Group.Ones flaggskip-merkevare globalt. Kontorer i 11 land.",
        },
        note: "Eier også Uniweb, ProISP, checkdomain (Tyskland), dogado (Tyskland), metanet (Sveits), herold (Østerrike), hostnet (Nederland), Zoner og Webglobe.",
      },
      {
        name: "Uniweb",
        href: "https://www.uniweb.no",
        values: {
          konsern: "one.com Group AB",
          hovedkontor: "Malmö, Sverige (eier) — Norge (drift)",
          juridisk: "Group.One Norway AS (org.nr. 984106211)",
          fakta: "Norsk merkevare under Group.One Norway AS. Samme juridiske selskap som ProISP siden september 2024.",
        },
        note: "Uniweb og ProISP er nå formelt samme selskap, men opererer som to separate merkevarer med egne nettsider og kundeservice.",
      },
      {
        name: "ProISP",
        href: "https://www.proisp.no",
        values: {
          konsern: "one.com Group AB",
          hovedkontor: "Malmö, Sverige (eier) — Norge (drift)",
          juridisk: "Group.One Norway AS (org.nr. 984106211)",
          fakta: "Etablert 2002. Ble del av Group.One i januar 2022. Fusjonerte med Uniweb i samme juridiske enhet september 2024.",
        },
        note: "Til tross for samme juridiske enhet som Uniweb, har ProISP rimeligere .com-pris (336,25 kr vs Uniweb 420 kr) — fusjonen har ikke samkjørt prisingen helt.",
      },
    ],
    importantNotes: [
      "Av åtte registrarer som retter seg mot norske kunder, er to reelt uavhengige norske: Webhuset (Bergen, 1998) og Gigahost (Sandefjord, 2006).",
      "Tre konserner kontrollerer seks av de åtte leverandørene: one.com Group AB (3 brands), Miss Group (2 brands), team.blue (1 brand).",
      "Uniweb og ProISP er samme juridiske enhet siden september 2024 — Group.One Norway AS, org.nr. 984106211.",
      "Drift fra Norge er ikke det samme som norsk eierskap. Domeneshop, Domene.no, Uniweb og ProISP drives fortsatt fra Norge med norsk team, men eierne sitter i Sverige.",
      "Konsernstruktur betyr ikke automatisk dårligere kvalitet — Domeneshop er fortsatt Norges største .no-registrar med 45 % markedsandel — men det betyr at \"uavhengig norsk\" som markedsføringsbegrep nå bare gjelder Webhuset og Gigahost.",
      "Eierskap endrer seg jevnlig i den europeiske hosting-bransjen. Vi oppdaterer denne siden manuelt etter offisielle pressemeldinger og endringer i selskapsregistre.",
    ],
    faq: [
      {
        question: "Hvilke domeneregistrarer er reelt norske og uavhengige?",
        answer:
          "To av åtte leverandører som retter seg mot norske kunder er reelt uavhengige norske per mai 2026: Webhuset (Webhuset Invest AS, Bergen, etablert 1998) og Gigahost (Gigahost AS, Sandefjord, etablert 2006). Begge er NORID-akkrediterte, eid av norske gründere, og driver fra Norge. Domeneshop, Domene.no, Uniweb og ProISP drives fortsatt fra Norge med norsk team, men eies av internasjonale konserner. One.com og Simply.com er danske/svenske konsernselskaper.",
      },
      {
        question: "Hvem eier Domeneshop?",
        answer:
          "Domeneshop AS er siden august 2024 del av Miss Group, et svensk-basert digitalt konsern grunnlagt i 2014 med hovedkontor i Stockholm. Domeneshop drives fortsatt fra Oslo som egen juridisk enhet med 25+ års erfaring og 650 000+ domener — men eierskapet er ikke lenger norsk. Miss Group eier også Domene.no (Domene AS) i Norge.",
      },
      {
        question: "Er Uniweb og ProISP samme selskap?",
        answer:
          "Ja, formelt sett siden september 2024. Begge er nå Group.One Norway AS (org.nr. 984106211) som er del av one.com Group AB i Malmö. De opererer som to separate merkevarer med egne nettsider og kundeservice, men deler eierskap. Likevel har ProISP rimeligere .com-pris (336,25 kr vs Uniweb 420 kr) — fusjonen har ikke samkjørt prisingen ennå. Hvis du fordeler domener mellom dem som risikospredning, oppnår du det ikke i praksis fordi det er samme selskap som drifter dem.",
      },
      {
        question: "Hva er Group.One?",
        answer:
          "Group.One er navnet på konsernet som eier blant annet One.com — selskapets juridiske navn er one.com Group AB med hovedkontor i Malmö, Sverige. Group.One eier ti lokale hosting-merkevarer i Europa, deriblant Uniweb og ProISP i Norge, checkdomain og dogado i Tyskland, metanet i Sveits, og hostnet i Nederland.",
      },
      {
        question: "Hva er team.blue?",
        answer:
          "team.blue er Europas største digital-økosystem for SMB-er, med hovedkontor i Gent, Belgia. Konsernet eier 60+ hosting- og SaaS-merkevarer i 22 EU-land. Simply.com (tidligere UnoEuro) er deres danske merkevare. team.blue eier også Loopia i Sverige, Curanet og DanDomain i Danmark, og iubenda i Italia.",
      },
      {
        question: "Hva er Miss Group?",
        answer:
          "Miss Group er et svensk-basert digitalt konsern grunnlagt i 2014 med hovedkontor i Stockholm. Med kontorer i 12 land og 800 000+ kontoer er de en av Europas raskest voksende leverandører av digitale tjenester. I Norge eier de Domeneshop og Domene.no. I Sverige eier de Misshosting og PrivateVPN. De har også brands i Finland, Sveits, Spania, UK, USA, Canada og flere land.",
      },
      {
        question: "Hva med Gigahost — er de virkelig uavhengige?",
        answer:
          "Ja. Gigahost AS (org.nr. 933 452 549) er fortsatt eid av gründerne som startet selskapet i 2006. Hovedkontor i Sandefjord med tre egne datasentre, det nyeste åpnet i 2023. NORID-akkreditert registrar med direkte registrering hos Norid. Selskapet har bevisst valgt å holde seg uavhengig og fokuserer på serverhosting og datasenter-tjenester. Domener er en lokkevare som leder kunder til deres hovedforretning.",
      },
      {
        question: "Spiller eierskap noen rolle for meg som kunde?",
        answer:
          "Det avhenger. For daglig bruk merker du sjelden forskjell — domenet ditt fungerer like bra uavhengig av hvem som eier registraren. Men eierskap kan påvirke priser (konserneide priser går ofte oppover etter oppkjøp), kundeservice (norske team bevares ofte, men kvaliteten kan endre seg), og personvern (data kan flyttes til konsernets felles infrastruktur). For forretningskritiske domener er det verdt å vite hvem som faktisk har kontroll.",
      },
    ],
    relatedSlugs: ["domenepriser", "no-domene", "norske-registrarer-fokus"],
    updatedAt: "2026-05-06",
  },
];

export const findComparison = (slug: string) =>
  comparisons.find((c) => c.slug === slug);
