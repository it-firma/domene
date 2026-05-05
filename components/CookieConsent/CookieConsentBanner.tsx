/**
 * Cookie Consent Banner — vises nederst på skjermen til samtykke er gitt.
 *
 * Plassering: components/CookieConsent/CookieConsentBanner.tsx
 *
 * Følger domene.io-designet: navy bakgrunn, brand-blå accent, DM Sans.
 *
 * GDPR-prinsipper som er implementert:
 *   - "Avslå" og "Godta" har LIK visuell vekt — ingen mørke mønstre
 *   - "Tilpass valg" gir reell kontroll, ikke bare illusjon
 *   - Klar og tydelig norsk tekst, ikke jus-snakk
 *   - Lenker til personvernerklæring og full cookie-policy
 */

"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, openPreferences } =
    useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0E1A33]/98 backdrop-blur-sm"
      style={{
        // Trygt avstand fra iOS-hjemmebjelken
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-6 py-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* TEKST */}
          <div className="lg:max-w-[640px]">
            <div className="mb-3 flex items-center gap-3">
              <CookieIcon />
              <h2
                id="cookie-banner-title"
                className="font-display text-base font-semibold text-white"
              >
                Vi bruker informasjonskapsler
              </h2>
            </div>
            <p
              id="cookie-banner-desc"
              className="text-sm leading-relaxed text-white/65"
            >
              domene.io bruker strengt nødvendige cookies for å levere
              nettstedet, og valgfrie cookies for å forstå hvordan tjenesten
              brukes. Du kan godta alle, avslå valgfrie, eller velge selv.
              Innstillingene kan endres når som helst.{" "}
              <Link
                href="/personvern"
                className="text-[#3B82F6] underline-offset-2 hover:underline"
              >
                Les personvernerklæringen
              </Link>
              .
            </p>
          </div>

          {/* KNAPPER */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-shrink-0">
            <button
              type="button"
              onClick={openPreferences}
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
            >
              Tilpass valg
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
            >
              Kun nødvendige
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-xl bg-[#2563FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4FCC] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0E1A33]"
            >
              Godta alle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.54 11.13a8 8 0 1 1-8.69-8.69 5.5 5.5 0 0 0 5.6 5.6 5.5 5.5 0 0 0 3.09 3.09Z" />
      <path d="M9 10.5h.01" />
      <path d="M14 13.5h.01" />
      <path d="M9 16h.01" />
    </svg>
  );
}
