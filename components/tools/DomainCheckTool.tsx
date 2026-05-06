"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";

interface CheckResult {
  tld: string;
  status: "available" | "registered" | "unknown";
  registrar?: string;
}

const SUGGEST_TLDS = ["no", "com", "net", "org", "io", "eu", "se", "dk"];

export function DomainCheckTool() {
  const [name, setName] = useState("");
  const [results, setResults] = useState<CheckResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function check(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setResults(null);
    const trimmed = name.trim().toLowerCase();
    if (!trimmed) {
      setError("Skriv inn et domenenavn å sjekke.");
      return;
    }
    setLoading(true);
    try {
      const r = await fetch(
        `/api/domain-check?name=${encodeURIComponent(trimmed)}&tlds=${SUGGEST_TLDS.join(",")}`,
      );
      const data = await r.json();
      if (!r.ok) {
        setError(data.error || "Noe gikk galt.");
      } else {
        setResults(data.results);
      }
    } catch {
      setError("Kunne ikke kontakte sjekken akkurat nå. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8">
      <form
        onSubmit={check}
        className="flex flex-col sm:flex-row gap-3 max-w-[640px]"
      >
        <div className="flex-1 relative">
          <Icon.Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-light"
          />
          <input
            type="text"
            inputMode="url"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="mittfirma"
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
          {loading ? "Sjekker..." : "Sjekk tilgjengelighet"}
        </button>
      </form>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-display text-[14px] text-red-800">
          {error}
        </div>
      )}

      {results && (
        <div className="mt-6 rounded-2xl border border-line overflow-hidden">
          <table className="w-full text-left font-display text-[14px]">
            <thead className="bg-surface-100">
              <tr>
                <th className="px-5 py-3 font-semibold text-ink">Domene</th>
                <th className="px-5 py-3 font-semibold text-ink">Status</th>
                <th className="px-5 py-3 font-semibold text-ink hidden sm:table-cell">
                  Registrar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {results.map((r) => (
                <tr key={r.tld} className="bg-white">
                  <td className="px-5 py-3 font-mono text-ink">
                    {name.trim().toLowerCase().split(".")[0]}.{r.tld}
                  </td>
                  <td className="px-5 py-3">
                    {r.status === "available" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-[12.5px] font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        Ledig
                      </span>
                    )}
                    {r.status === "registered" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-[12.5px] font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                        Registrert
                      </span>
                    )}
                    {r.status === "unknown" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-[12.5px] font-semibold">
                        Ukjent
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-muted hidden sm:table-cell">
                    {r.registrar ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-surface-100 px-5 py-3 font-display text-[12px] text-muted-light">
            Statusen baseres på RDAP-oppslag. Noen ccTLD-er kan vise «Ukjent» hvis
            registry ikke eksponerer RDAP. Verifiser alltid hos en registrar før
            du forsøker å registrere.
          </div>
        </div>
      )}
    </div>
  );
}
