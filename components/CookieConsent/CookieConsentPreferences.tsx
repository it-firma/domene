/**
 * Cookie Preferences Modal — granulær kontroll over hver kategori.
 *
 * Plassering: components/CookieConsent/CookieConsentPreferences.tsx
 *
 * Vises når brukeren klikker "Tilpass valg" i banneret, eller når
 * eksisterende samtykke skal endres via cookie-innstillinger-lenken.
 *
 * Hver kategori har:
 *   - Navn og beskrivelse på norsk
 *   - Toggle-bryter (eller "Alltid på" for nødvendige)
 *   - Liste over hvilke cookies som faktisk brukes
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";

export function CookieConsentPreferences() {
  const {
    showPreferences,
    consent,
    saveSelected,
    closePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();

  // Lokalt valg, initialisert fra eksisterende samtykke om det finnes
  const [preferences, setPreferences] = useState<boolean>(
    consent?.state.preferences ?? false,
  );
  const [analytics, setAnalytics] = useState<boolean>(
    consent?.state.analytics ?? false,
  );

  const dialogRef = useRef<HTMLDivElement>(null);

  // Sync lokalt valg med lagret samtykke når modalen åpnes
  useEffect(() => {
    if (showPreferences) {
      setPreferences(consent?.state.preferences ?? false);
      setAnalytics(consent?.state.analytics ?? false);
    }
  }, [showPreferences, consent]);

  // ESC for å lukke
  useEffect(() => {
    if (!showPreferences) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPreferences, closePreferences]);

  // Fokuser dialogen når den åpnes
  useEffect(() => {
    if (showPreferences && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [showPreferences]);

  if (!showPreferences) return null;

  const handleSave = () => {
    saveSelected({ preferences, analytics });
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => {
        // Lukk hvis bruker klikker utenfor selve dialogen
        if (e.target === e.currentTarget) closePreferences();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        tabIndex={-1}
        className="w-full max-w-2xl overflow-hidden rounded-t-3xl bg-[#0E1A33] shadow-2xl ring-1 ring-white/10 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 sm:px-8 sm:py-6">
          <div>
            <h2
              id="cookie-prefs-title"
              className="font-display text-lg font-semibold text-white sm:text-xl"
            >
              Innstillinger for informasjonskapsler
            </h2>
            <p className="mt-1.5 text-sm text-white/60">
              Du bestemmer hvilke kategorier som brukes. Avslå er like enkelt
              som godta.
            </p>
          </div>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Lukk innstillinger"
            className="ml-4 rounded-lg p-1.5 text-white/60 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5 sm:px-8 sm:py-6">
          <div className="space-y-4">
            <CategoryRow
              title="Strengt nødvendige"
              description="Holder nettstedet i drift — autentisering, sikkerhet, lasting av innhold. Disse kan ikke skrus av."
              alwaysOn
              cookies={[
                {
                  name: "domeneio_consent",
                  purpose: "Lagrer ditt samtykke til informasjonskapsler",
                  duration: "12 mnd",
                },
                {
                  name: "session",
                  purpose: "Sesjons-cookie for sikker innlogging og CSRF-beskyttelse",
                  duration: "Sesjon",
                },
              ]}
            />

            <CategoryRow
              title="Preferanser"
              description="Husker valg du gjør på siden — språk, visningsmodus, lukket bannere. Forbedrer opplevelsen, men er ikke påkrevet."
              checked={preferences}
              onChange={setPreferences}
              cookies={[
                {
                  name: "domeneio_theme",
                  purpose: "Lagrer foretrukket visningsmodus (lys/mørk)",
                  duration: "12 mnd",
                },
                {
                  name: "domeneio_dismiss",
                  purpose: "Husker hvilke meldinger du har lukket",
                  duration: "6 mnd",
                },
              ]}
            />

            <CategoryRow
              title="Analyse"
              description="Hjelper oss å forstå hvordan tjenesten brukes — hvilke guider som er populære, hvor folk faller av. Ingen profilering eller sporing på tvers av nettsteder."
              checked={analytics}
              onChange={setAnalytics}
              cookies={[
                {
                  name: "_ga, _ga_*",
                  purpose: "Google Analytics 4 — anonyme bruksdata",
                  duration: "13 mnd",
                  provider: "Google (USA)",
                },
              ]}
            />
          </div>

          {/* Lenkeseksjon */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-display text-sm font-semibold text-white">
              Vil du vite mer?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Vår{" "}
              <a
                href="/personvern"
                className="text-[#3B82F6] underline-offset-2 hover:underline"
              >
                personvernerklæring
              </a>{" "}
              forklarer hvilke data vi samler inn og hvorfor.{" "}
              <a
                href="/personvern#informasjonskapsler"
                className="text-[#3B82F6] underline-offset-2 hover:underline"
              >
                Cookie-policyen
              </a>{" "}
              gir full liste over alle informasjonskapsler. Spørsmål? Kontakt{" "}
              <a
                href="mailto:personvern@domene.io"
                className="text-[#3B82F6] underline-offset-2 hover:underline"
              >
                personvern@domene.io
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer med knapper */}
        <div className="border-t border-white/10 bg-[#060E20] px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-xl border border-white/15 bg-transparent px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
              >
                Kun nødvendige
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-xl border border-white/15 bg-transparent px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
              >
                Godta alle
              </button>
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-[#2563FF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4FCC] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#060E20]"
            >
              Lagre mine valg
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type CookieDef = {
  name: string;
  purpose: string;
  duration: string;
  provider?: string;
};

type CategoryRowProps = {
  title: string;
  description: string;
  cookies: CookieDef[];
} & (
  | { alwaysOn: true; checked?: never; onChange?: never }
  | { alwaysOn?: false; checked: boolean; onChange: (v: boolean) => void }
);

function CategoryRow(props: CategoryRowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-display text-base font-semibold text-white">
            {props.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-white/60">
            {props.description}
          </p>
        </div>

        {/* Toggle eller "Alltid på"-merkelapp */}
        <div className="flex-shrink-0 pt-0.5">
          {props.alwaysOn ? (
            <span className="rounded-full bg-[#2563FF]/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#3B82F6]">
              Alltid på
            </span>
          ) : (
            <Toggle
              checked={props.checked}
              onChange={props.onChange}
              label={`Skru ${props.title.toLowerCase()} ${props.checked ? "av" : "på"}`}
            />
          )}
        </div>
      </div>

      {/* Expandable cookie-detaljer */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 flex items-center gap-1.5 text-xs font-medium text-white/45 transition hover:text-white/75"
        aria-expanded={expanded}
      >
        {expanded ? "Skjul" : "Vis"} hvilke cookies som brukes
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 200ms",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-3 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.03]">
              <tr className="text-white/50">
                <th className="px-3 py-2 font-medium">Navn</th>
                <th className="px-3 py-2 font-medium">Formål</th>
                <th className="px-3 py-2 font-medium">Varighet</th>
              </tr>
            </thead>
            <tbody>
              {props.cookies.map((c) => (
                <tr
                  key={c.name}
                  className="border-t border-white/[0.06] text-white/75"
                >
                  <td className="px-3 py-2 font-mono text-[11px]">{c.name}</td>
                  <td className="px-3 py-2">
                    {c.purpose}
                    {c.provider && (
                      <span className="block text-[10px] text-white/40">
                        Leverandør: {c.provider}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0E1A33] ${
        checked ? "bg-[#2563FF]" : "bg-white/15"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
