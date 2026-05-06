/**
 * Cookie Consent Context — håndterer samtykke på tvers av nettstedet.
 *
 * Plassering: components/CookieConsent/CookieConsentProvider.tsx
 *
 * GDPR/Datatilsynet-kompatibel implementasjon:
 *   - Strengt nødvendige cookies er ALLTID tillatt (ingen samtykke kreves)
 *   - Preferanse-cookies krever EKSPLISITT samtykke
 *   - Analyse-cookies krever EKSPLISITT samtykke
 *   - Avslå er like enkelt som godta — ingen mørke mønstre
 *   - Samtykke kan trekkes tilbake når som helst via cookie-innstillinger
 *
 * Samtykke lagres i localStorage med versjonskontroll, slik at vi kan
 * tvinge re-samtykke ved policy-endringer.
 */

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type ConsentCategory = "necessary" | "preferences" | "analytics";

export type ConsentState = {
  necessary: true; // Alltid true - kan ikke avslås
  preferences: boolean;
  analytics: boolean;
};

export type ConsentRecord = {
  state: ConsentState;
  timestamp: string; // ISO 8601
  version: string;
  /** "all" hvis brukeren godtok alt; "selected" ved valgte; "necessary" ved kun nødvendig */
  decision: "all" | "selected" | "necessary";
};

type CookieConsentContextValue = {
  /** Nåværende samtykke-tilstand. `null` betyr ikke gitt enda. */
  consent: ConsentRecord | null;
  /** True når banneret skal vises */
  showBanner: boolean;
  /** True når preferanse-modal skal vises */
  showPreferences: boolean;
  /** Godta alle kategorier */
  acceptAll: () => void;
  /** Avslå alt valgfritt — kun nødvendig */
  rejectAll: () => void;
  /** Lagre tilpasset samtykke fra preferanse-modal */
  saveSelected: (state: Pick<ConsentState, "preferences" | "analytics">) => void;
  /** Åpne preferanse-modal (også for å endre eksisterende samtykke) */
  openPreferences: () => void;
  /** Lukk preferanse-modal */
  closePreferences: () => void;
};

// Versjonsnummer for samtykke-policy. Øk dette ved meningsfulle endringer
// i hva som spores eller lagres.
export const CONSENT_VERSION = "2026.05.01";
const STORAGE_KEY = "domeneio_consent";

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

function loadStored(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    // Tvinger re-samtykke hvis policy er endret
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveStored(record: ConsentRecord) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage utilgjengelig (f.eks. inkognito) — ignorer
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Last lagret samtykke ved første montering
  useEffect(() => {
    const stored = loadStored();
    setConsent(stored);
    setShowBanner(stored === null);
    setHydrated(true);
  }, []);

  // Skriv samtykke til dataLayer når det endres — så Tag Manager / GA kan reagere
  useEffect(() => {
    if (!hydrated) return;
    if (typeof window === "undefined") return;
    if (!consent) return;

    // Standard "Consent Mode v2"-format for Google
    const w = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
    };
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({
      event: "consent_update",
      analytics_storage: consent.state.analytics ? "granted" : "denied",
      ad_storage: "denied", // Vi bruker ikke ads - alltid avslått
      functionality_storage: consent.state.preferences ? "granted" : "denied",
      personalization_storage: consent.state.preferences
        ? "granted"
        : "denied",
      security_storage: "granted", // Nødvendig
    });
  }, [consent, hydrated]);

  const persist = useCallback(
    (state: ConsentState, decision: ConsentRecord["decision"]) => {
      const record: ConsentRecord = {
        state,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
        decision,
      };
      saveStored(record);
      setConsent(record);
      setShowBanner(false);
      setShowPreferences(false);
    },
    [],
  );

  const acceptAll = useCallback(() => {
    persist(
      { necessary: true, preferences: true, analytics: true },
      "all",
    );
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist(
      { necessary: true, preferences: false, analytics: false },
      "necessary",
    );
  }, [persist]);

  const saveSelected = useCallback(
    (selection: Pick<ConsentState, "preferences" | "analytics">) => {
      persist(
        { necessary: true, ...selection },
        "selected",
      );
    },
    [persist],
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(false);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
    // Hvis vi ikke har samtykke ennå, vis banneret igjen
    if (!consent) setShowBanner(true);
  }, [consent]);

  const value: CookieConsentContextValue = {
    consent,
    showBanner: hydrated && showBanner,
    showPreferences,
    acceptAll,
    rejectAll,
    saveSelected,
    openPreferences,
    closePreferences,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent må brukes innenfor en CookieConsentProvider",
    );
  }
  return ctx;
}

/**
 * Hook for komponenter som vil sjekke om en kategori er samtykket.
 * Bruk dette før du laster eksterne scripts eller setter cookies.
 *
 * Eksempel:
 *   const allowed = useConsentFor("analytics");
 *   if (allowed) loadAnalytics();
 */
export function useConsentFor(category: ConsentCategory): boolean {
  const { consent } = useCookieConsent();
  if (category === "necessary") return true;
  return consent?.state[category] ?? false;
}
