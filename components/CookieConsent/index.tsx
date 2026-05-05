/**
 * Cookie consent — barrel export.
 *
 * Plassering: components/CookieConsent/index.tsx
 *
 * Eksporterer alt cookie-relatert i én fil for renere imports.
 *
 * Bruk i `app/layout.tsx`:
 *
 *   import {
 *     CookieConsentProvider,
 *     CookieConsentBanner,
 *     CookieConsentPreferences,
 *   } from "@/components/CookieConsent";
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="nb">
 *         <body>
 *           <CookieConsentProvider>
 *             {children}
 *             <CookieConsentBanner />
 *             <CookieConsentPreferences />
 *           </CookieConsentProvider>
 *         </body>
 *       </html>
 *     );
 *   }
 *
 * Bruk i Footer for å la brukere åpne preferansene på nytt:
 *
 *   import { CookieSettingsLink } from "@/components/CookieConsent";
 *   <CookieSettingsLink />
 */

"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export {
  CookieConsentProvider,
  useCookieConsent,
  useConsentFor,
  CONSENT_VERSION,
} from "./CookieConsentProvider";
export type {
  ConsentCategory,
  ConsentState,
  ConsentRecord,
} from "./CookieConsentProvider";

export { CookieConsentBanner } from "./CookieConsentBanner";
export { CookieConsentPreferences } from "./CookieConsentPreferences";

/**
 * Lenke som åpner cookie-preferansene. Bruk i Footer eller i
 * personvernerklæringen.
 */
export function CookieSettingsLink({
  className,
  children = "Innstillinger for informasjonskapsler",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openPreferences } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={openPreferences}
      className={
        className ??
        "text-sm text-white/60 underline-offset-2 transition hover:text-white hover:underline"
      }
    >
      {children}
    </button>
  );
}
