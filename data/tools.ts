import type { Tool } from "@/lib/types";

export const tools: Tool[] = [
  {
    slug: "domenesjekk",
    name: "Domenesjekk",
    description: "Sjekk om et domene er ledig på .no, .com og andre toppdomener.",
    longDescription:
      "Med domenesjekk kan du raskt se om navnet du ønsker er ledig, og hvilke toppdomener som fortsatt er tilgjengelige. Vi viser også relaterte forslag hvis ditt førstevalg er tatt.",
    icon: "search",
    category: "domeneregistrering",
    status: "live",
    relatedTerms: ["tld", "registrar"],
    relatedGuides: ["hvordan-velge-domenenavn", "hvordan-registrere-no-domene"],
    faq: [
      {
        question: "Er sjekken oppdatert i sanntid?",
        answer: "Ja. Vi gjør oppslag direkte mot registry og registrar-API.",
      },
    ],
  },
  {
    slug: "whois-oppslag",
    name: "WHOIS-oppslag",
    description: "Slå opp eierinformasjon, registrar og dato på et hvilket som helst domene.",
    longDescription:
      "WHOIS-verktøyet viser registreringsdetaljer for et domene, inkludert eier (registrant), leverandør (registrar), registrerings- og fornyelsesdato, samt navneservere.",
    icon: "info",
    category: "whois",
    status: "live",
    relatedTerms: ["whois", "registrar", "registrant"],
    relatedGuides: ["hvordan-flytte-domene"],
    faq: [],
  },
  {
    slug: "dns-sjekk",
    name: "DNS-sjekk",
    description: "Test DNS-oppsettet ditt for A, MX, TXT og DNSSEC.",
    longDescription:
      "DNS-sjekken kjører oppslag mot flere globale resolvere og viser hva de returnerer. Dette gjør det enkelt å oppdage feil propagering og inkonsistente svar.",
    icon: "network",
    category: "dns",
    status: "live",
    relatedTerms: ["dns", "a-peker", "mx-peker", "dnssec"],
    relatedGuides: ["hvordan-sette-opp-dns", "hvordan-sikre-domenet"],
    faq: [],
  },
  {
    slug: "navneserver-sjekk",
    name: "Navneserver-sjekk",
    description: "Sjekk hvilke navneservere domenet bruker og om de svarer.",
    icon: "server",
    category: "dns",
    status: "live",
    relatedTerms: ["navneserver", "dns"],
    relatedGuides: ["hvordan-sette-opp-dns"],
    faq: [],
  },
  {
    slug: "domenekalkulator",
    name: "Domenekalkulator",
    description: "Beregn totalkostnaden for domener over tid på tvers av leverandører.",
    icon: "calculator",
    category: "domeneregistrering",
    status: "coming-soon",
    relatedTerms: ["registrar"],
    relatedGuides: ["hvordan-registrere-no-domene"],
    faq: [],
  },
  {
    slug: "sammenlign-domenepriser",
    name: "Sammenlign domenepriser",
    description: "Sammenlign priser for registrering, fornyelse og flytting på tvers av norske registrarer.",
    icon: "tag",
    category: "domeneregistrering",
    status: "coming-soon",
    relatedTerms: ["registrar", "tld"],
    relatedGuides: ["hvordan-velge-domenenavn"],
    faq: [],
  },
];

export const findTool = (slug: string) => tools.find((t) => t.slug === slug);
