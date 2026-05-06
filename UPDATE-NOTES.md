# domene.io - Oppdateringsnotater (5. mai 2026)

Komplett, kjørbart prosjekt med alle Phase 1-6 endringer flettet inn.

## Hva er endret/lagt til

### Patcher til eksisterende filer
- `package.json` → Next.js bumpet til 14.2.33 (sikkerhetspatch)
- `components/Footer.tsx` → Bedre håndtering av `"#"`-placeholder lenker
- `app/layout.tsx` → Cookie consent integrert + Google Consent Mode v2
- `app/om-oss/page.tsx` → Trygg rendring av "kommer snart"-portaler
- `app/kunnskapsbase/[slug]/page.tsx` → CrossLinkBox kategori↔ordliste
- `app/ordliste/[slug]/page.tsx` → CrossLinkBox kategori↔ordliste
- `data/glossary.ts` → 7 nye begreper, mx-pri renamet til mx-prioritet
- `data/guides.ts` → 5 flagship-guider (~14 000 ord)
- `data/comparisons.ts` → Sekskant-sammenligning av 6 registrarer

### Nye filer
- `app/personvern/page.tsx` → GDPR-personvernerklæring
- `app/vilkar/page.tsx` → Bruksvilkår (Oslo tingrett som verneting)
- `app/not-found.tsx` → Branded 404
- `app/error.tsx` → Klient-error-side
- `app/loading.tsx` → Skjelett-loader
- `app/opengraph-image.tsx` → Site-wide OG-bilde
- `app/guider/[slug]/opengraph-image.tsx` → Per-guide OG
- `app/sammenligninger/[slug]/opengraph-image.tsx` → Per-sammenligning OG
- `components/CrossLinkBox.tsx` → Kategori↔ordliste-bro
- `components/CookieConsent/CookieConsentProvider.tsx` → State + localStorage
- `components/CookieConsent/CookieConsentBanner.tsx` → Banner
- `components/CookieConsent/CookieConsentPreferences.tsx` → Modal
- `components/CookieConsent/index.tsx` → Barrel export

## Verifisert fungerer

✅ TypeScript-typecheck består uten feil  
✅ `next build` genererer 118 statiske sider uten feil  
✅ Alle 55 ordliste-begreper, 20 guider, 7 sammenligninger flettet  
✅ Alle relaterte begreper i nye guider eksisterer i ordlisten  

## Sjekkliste etter første deploy

- [ ] Kjør `npm install` (package-lock skal oppdateres automatisk)
- [ ] Test cookie-banneret i privat modus i nettleseren
- [ ] Verifiser `/personvern` og `/vilkar` viser riktig innhold
- [ ] Sjekk OG-bilder via `/opengraph-image` og `/guider/[slug]/opengraph-image`
- [ ] Sjekk at sammenligningen `/sammenligninger/norske-registrarer-fokus` viser alle 6 registrarer
- [ ] Legg til `<CookieSettingsLink>` i Footer (valgfritt - la brukerne endre samtykke senere)

## Sammenligning av registrarer (priser inkl. 25% mva, NOK fornying)

| TLD  | Domeneshop | Webhuset | Uniweb | One.com | ProISP | Simply | Vinner   |
|------|-----------|----------|--------|---------|--------|--------|----------|
| .no  | 199       | 124      | 300    | 286     | 275    | 175    | Webhuset |
| .se  | 275       | 311      | 320    | 306     | 320    | 251    | Simply   |
| .dk  | 220       | 249      | 320    | 188     | 320    | 192    | One.com  |
| .fi  | 220       | 474      | 450    | 344     | 249    | 283    | ProISP   |
| .com | 220       | 188      | 336    | 349     | 336    | 250    | Webhuset |
| .io  | 875       | 874      | 1036   | 1012    | 974    | 1165   | Webhuset |
| .ai  | 2750      | 3749     | 1624   | 2388    | 1624   | 1835   | Uniweb/ProISP |

**Konsernstruktur:** Group.One eier Uniweb, One.com og ProISP. Domeneshop, Webhuset og Simply.com er reelt uavhengige.
