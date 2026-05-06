# domene.io

Norges kunnskapsbase om domener - bygget med Next.js 14, TypeScript og Tailwind CSS.

## Stack

- **Next.js 14** med App Router og React Server Components
- **TypeScript** strict mode
- **Tailwind CSS** med tilpassede design-tokens
- **DM Sans** og **Fraunces** via Google Fonts CDN (preconnect + preload for rask LCP)
- Ingen runtime-database - alt innhold lever i `data/`-mappen som typescript-objekter

## Filstruktur

```
domene-io-v2/
├── app/
│   ├── layout.tsx              # Root layout: fonts, header, footer, JSON-LD
│   ├── page.tsx                # Forside
│   ├── globals.css             # Tailwind + global stiler
│   ├── robots.ts               # robots.txt generator
│   ├── sitemap.ts              # sitemap.xml generator
│   ├── kunnskapsbase/
│   │   ├── page.tsx            # Kunnskapsbase oversikt
│   │   └── [slug]/page.tsx     # Dynamisk kategoriside
│   ├── guider/
│   │   ├── page.tsx            # Guider oversikt
│   │   └── [slug]/page.tsx     # Artikkelside
│   ├── ordliste/
│   │   ├── page.tsx            # Ordliste oversikt
│   │   └── [slug]/page.tsx     # Begrep-side
│   ├── verktoy/
│   │   ├── page.tsx            # Verktøy oversikt
│   │   └── [slug]/page.tsx     # Verktøy-detaljside
│   ├── sammenligninger/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── eksperthjelp/page.tsx   # Lead-skjema
│   ├── om-oss/page.tsx
│   └── kontakt/page.tsx
├── components/                 # React-komponenter
├── data/                       # Innhold som TypeScript-objekter
│   ├── categories.ts
│   ├── guides.ts
│   ├── glossary.ts
│   ├── tools.ts
│   └── comparisons.ts
├── lib/                        # Helpers
│   ├── site.ts                 # Global site-config
│   ├── seo.ts                  # Metadata + JSON-LD
│   ├── icons.tsx               # Inline SVG icon-set
│   └── types.ts                # TypeScript-typer
└── public/
    ├── hero-banner.jpg         # Hero-bilde
    └── llms.txt                # AI crawler-manifest
```

## Komme i gang lokalt

```bash
npm install
npm run dev
```

Åpne <http://localhost:3000>.

```bash
npm run build   # produksjonsbygg
npm start       # kjør produksjonsbygg lokalt
npm run lint    # lint
```

## SEO, AEO, GEO og LLM-optimalisering

- **Per side**: title, description, canonical, Open Graph og Twitter via `lib/seo.ts → buildMetadata()`.
- **Strukturert data (JSON-LD)** på hver side: Organization, WebSite+SearchAction, BreadcrumbList, Article, FAQPage, HowTo, DefinedTerm, CollectionPage og SoftwareApplication.
- **AEO**: Hver viktig side har en kort svarboks (40-70 ord) rett etter H1.
- **LLM-vennlig**: Konsistente mønstre - Hva, Hvorfor, Hvordan, Vanlige feil, Sjekkliste, FAQ, Oppsummering - og en `Summary`-komponent med 3-6 punkter nederst.
- **robots.ts** tillater eksplisitt Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended og Applebot-Extended.
- **public/llms.txt** beskriver siden for AI-crawlere.
- **sitemap.ts** genererer komplett sitemap med alle dynamiske ruter.

## Endre innhold

Innhold lever i `data/`. Legg til nye kategorier, guider, ordlistebegreper, verktøy eller sammenligninger ved å redigere disse filene. Strukturen er typesikret via `lib/types.ts`.

For å legge til en ny guide:

1. Åpne `data/guides.ts`
2. Legg til et nytt `Guide`-objekt i `guides`-arrayet
3. Slug må være unikt og bruke kun små bokstaver, bindestrek
4. Pek til en eksisterende `category`
5. Sett opp `relatedGuides`, `relatedTerms` og `relatedTools` for intern lenking

Siden bygges på nytt automatisk på Vercel ved hver push.

## Push til GitHub

```bash
# Initialiser git
git init
git add .
git commit -m "Initial commit: domene.io kunnskapsbase"

# Opprett repo på github.com (uten README)
# Legg til remote og push
git remote add origin git@github.com:DITT-BRUKERNAVN/domene-io.git
git branch -M main
git push -u origin main
```

## Deploy til Vercel

1. Logg inn på <https://vercel.com>.
2. Klikk **Add New** → **Project**.
3. Importer GitHub-repoet `domene-io`.
4. Vercel detekterer Next.js automatisk - ingen ekstra konfigurasjon trengs.
5. Klikk **Deploy**.
6. Når deployet er ferdig, gå til **Settings → Domains** og legg til `domene.io`.
7. Følg DNS-instruksjonene - pek hoveddomenet til Vercel sine servere via A-peker eller CNAME (avhengig av oppsett).
8. Aktiver automatisk HTTPS - Vercel håndterer Let's Encrypt-sertifikat automatisk.
9. Husk å oppdatere `lib/site.ts` med riktig `url` før første produksjonsdeploy hvis det er endringer.

### Miljøvariabler

Foreløpig trenger ikke prosjektet noen miljøvariabler. Når du kobler skjemaet til en backend (f.eks. Resend, Formspree eller egen API-endpoint), legg til riktig variabel i Vercel under **Settings → Environment Variables**.

## Tilgjengelighet og ytelse

- Semantisk HTML overalt - `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`.
- Skip-link øverst for tastaturnavigasjon.
- Alle skjemaer har eksplisitte `<label>`-tagger.
- Hero-bildet bruker `next/image` med `priority` for rask LCP.
- Fontene lastes inline gjennom `next/font` (ingen CLS).
- Tailwind purger ubrukt CSS automatisk - sluttbundlen er liten.

## Lisens

Privat. © 2026 DomainNordic Advisory Group.
