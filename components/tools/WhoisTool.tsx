"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";

interface WhoisResult {
  domain: string;
  registered: boolean;
  registrar?: string | null;
  status?: string[];
  nameservers?: string[];
  events?: { action: string; date: string }[];
}

const ACTION_LABEL: Record<string, string> = {
  registration: "Registrert",
  expiration: "Utløper",
  "last changed": "Sist endret",
  "last update of rdap database": "Database-oppdatering",
  transfer: "Flyttet",
  reregistration: "Reregistrert",
};

export function WhoisTool() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<WhoisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function lookup(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setResult(null);
    const cleaned = domain
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .split("/")[0];
    if (!cleaned) {
      setError("Skriv inn et domenenavn.");
      return;
    }
    setLoading(true);
    try {
      const r = await fetch(`/api/whois?domain=${encodeURIComponent(cleaned)}`);
      const data = await r.json();
      if (!r.ok) {
        setError(data.error || "Noe gikk galt.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Kunne ikke kontakte RDAP-tjeneren akkurat nå.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8">
      <form
        onSubmit={lookup}
        className="flex flex-col sm:flex-row gap-3 max-w-[640px]"
      >
        <div className="flex-1 relative">
          <Icon.Info
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-light"
          />
          <input
            type="text"
            inputMode="url"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="domene.no"
            className="w-full pl-11 pr-4 py-3.5 rounded-full border border-line bg-white font-display text-[15px] text-ink placeholder:text-muted-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-colors"
            aria-label="Domenenavn"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-brand px-7 py-3.5 font-display text-[14px] font-semibold text-white hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          {loading ? "Søker…" : "Slå opp"}
        </button>
      </form>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-display text-[14px] text-red-800">
          {error}
        </div>
      )}

      {result && !result.registered && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <h3 className="font-display text-[16px] font-semibold text-emerald-900 m-0">
              «{result.domain}» er ikke registrert
            </h3>
          </div>
          <p className="mt-2 font-display text-[14px] text-emerald-900/80 m-0">
            Domenet ser ut til å være ledig — verifiser hos en registrar før du
            forsøker å registrere det.
          </p>
        </div>
      )}

      {result && result.registered && (
        <div className="mt-6 rounded-2xl border border-line bg-white p-6 space-y-5">
          <div>
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-1">
              Domene
            </div>
            <div className="font-display text-[18px] font-semibold text-ink">
              {result.domain}
            </div>
          </div>

          {result.registrar && (
            <div>
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-1">
                Registrar
              </div>
              <div className="font-display text-[15px] text-ink">
                {result.registrar}
              </div>
            </div>
          )}

          {result.status && result.status.length > 0 && (
            <div>
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                Status
              </div>
              <div className="flex flex-wrap gap-1.5">
                {result.status.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-surface-100 border border-line px-2.5 py-1 font-mono text-[11.5px] text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {result.nameservers && result.nameservers.length > 0 && (
            <div>
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                Navneservere
              </div>
              <ul className="font-mono text-[13.5px] text-ink space-y-1 list-none p-0 m-0">
                {result.nameservers.map((ns) => (
                  <li key={ns}>{ns}</li>
                ))}
              </ul>
            </div>
          )}

          {result.events && result.events.length > 0 && (
            <div>
              <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                Hendelser
              </div>
              <table className="font-display text-[13.5px] w-full text-left">
                <tbody>
                  {result.events.map((e, i) => (
                    <tr key={i} className="border-b border-line/60 last:border-0">
                      <td className="py-1.5 pr-4 text-muted capitalize">
                        {ACTION_LABEL[e.action] || e.action}
                      </td>
                      <td className="py-1.5 font-mono text-ink">
                        {new Date(e.date).toLocaleDateString("nb-NO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
