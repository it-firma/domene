"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";

interface NSResult {
  domain: string;
  nameservers: string[];
  ttl: number | null;
}

export function NameserverTool() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<NSResult | null>(null);
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
      const r = await fetch(`/api/dns?domain=${encodeURIComponent(cleaned)}&type=NS`);
      const data = await r.json();
      if (!r.ok) {
        setError(data.error || "Noe gikk galt.");
      } else {
        const answers = data.answers || [];
        const nameservers = answers
          .map((a: { data: string }) => (a.data || "").replace(/\.$/, ""))
          .filter(Boolean);
        setResult({
          domain: cleaned,
          nameservers,
          ttl: answers.length > 0 ? answers[0].ttl : null,
        });
      }
    } catch {
      setError("Kunne ikke kontakte DNS-tjeneren akkurat nå.");
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
          <Icon.Server
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
          {loading ? "Søker..." : "Sjekk navneservere"}
        </button>
      </form>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-display text-[14px] text-red-800">
          {error}
        </div>
      )}

      {result && result.nameservers.length === 0 && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-display text-[14px] text-amber-800">
          Ingen NS-poster funnet for «{result.domain}».
        </div>
      )}

      {result && result.nameservers.length > 0 && (
        <div className="mt-6 rounded-2xl border border-line bg-white p-6">
          <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-3">
            Navneservere for {result.domain}
            {result.ttl !== null && (
              <span className="ml-3 text-muted-light normal-case tracking-normal">
                TTL: {result.ttl}s
              </span>
            )}
          </div>
          <ul className="font-mono text-[14.5px] text-ink space-y-1.5 list-none p-0 m-0">
            {result.nameservers.map((ns) => (
              <li key={ns} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {ns}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
