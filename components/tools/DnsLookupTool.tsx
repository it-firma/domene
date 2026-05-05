"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";

const TYPES = ["A", "AAAA", "MX", "TXT", "NS", "CNAME", "CAA", "SOA"] as const;

interface Answer {
  name: string;
  type: number;
  ttl: number;
  data: string;
}

const TYPE_LABEL: Record<number, string> = {
  1: "A",
  2: "NS",
  5: "CNAME",
  6: "SOA",
  15: "MX",
  16: "TXT",
  28: "AAAA",
  33: "SRV",
  43: "DS",
  48: "DNSKEY",
  257: "CAA",
};

export function DnsLookupTool() {
  const [domain, setDomain] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("A");
  const [answers, setAnswers] = useState<Answer[] | null>(null);
  const [authority, setAuthority] = useState<Answer[] | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function lookup(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setAnswers(null);
    setAuthority(null);
    setStatus(null);
    const cleaned = domain.trim().toLowerCase().replace(/^https?:\/\//, "").split("/")[0];
    if (!cleaned) {
      setError("Skriv inn et domenenavn.");
      return;
    }
    setLoading(true);
    try {
      const r = await fetch(
        `/api/dns?domain=${encodeURIComponent(cleaned)}&type=${type}`,
      );
      const data = await r.json();
      if (!r.ok) {
        setError(data.error || "Noe gikk galt.");
      } else {
        setAnswers(data.answers || []);
        setAuthority(data.authority || []);
        setStatus(data.status);
      }
    } catch {
      setError("Kunne ikke kontakte DNS-tjeneren akkurat nå.");
    } finally {
      setLoading(false);
    }
  }

  const noAnswers = answers !== null && answers.length === 0;

  return (
    <div className="mt-8">
      <form
        onSubmit={lookup}
        className="flex flex-col sm:flex-row gap-3 max-w-[680px]"
      >
        <div className="flex-1 relative">
          <Icon.Network
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
        <select
          value={type}
          onChange={(e) => setType(e.target.value as (typeof TYPES)[number])}
          className="rounded-full border border-line bg-white px-5 py-3.5 font-display text-[14px] text-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          aria-label="Posttype"
          disabled={loading}
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
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

      {noAnswers && !error && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-display text-[14px] text-amber-800">
          Ingen {type}-poster funnet for «{domain.trim().toLowerCase()}».
          {status === 3 && " (NXDOMAIN — domenet finnes ikke.)"}
        </div>
      )}

      {answers && answers.length > 0 && (
        <div className="mt-6 rounded-2xl border border-line overflow-hidden">
          <div className="bg-surface-100 px-5 py-3 font-display text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
            Svar ({answers.length})
          </div>
          <table className="w-full text-left font-display text-[13.5px]">
            <thead className="bg-white">
              <tr className="border-b border-line">
                <th className="px-5 py-2.5 font-semibold text-ink">Navn</th>
                <th className="px-5 py-2.5 font-semibold text-ink">Type</th>
                <th className="px-5 py-2.5 font-semibold text-ink">TTL</th>
                <th className="px-5 py-2.5 font-semibold text-ink">Verdi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {answers.map((a, i) => (
                <tr key={i} className="bg-white">
                  <td className="px-5 py-2.5 font-mono text-ink">{a.name}</td>
                  <td className="px-5 py-2.5 text-muted">
                    {TYPE_LABEL[a.type] || a.type}
                  </td>
                  <td className="px-5 py-2.5 text-muted">{a.ttl}</td>
                  <td className="px-5 py-2.5 font-mono text-ink break-all">
                    {a.data}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {authority && authority.length > 0 && (
        <details className="mt-4 rounded-2xl border border-line overflow-hidden">
          <summary className="cursor-pointer bg-surface-100 px-5 py-3 font-display text-[12px] font-medium uppercase tracking-[0.12em] text-muted hover:text-ink">
            Authority ({authority.length})
          </summary>
          <table className="w-full text-left font-display text-[13.5px]">
            <tbody className="divide-y divide-line">
              {authority.map((a, i) => (
                <tr key={i} className="bg-white">
                  <td className="px-5 py-2.5 font-mono text-ink">{a.name}</td>
                  <td className="px-5 py-2.5 text-muted">
                    {TYPE_LABEL[a.type] || a.type}
                  </td>
                  <td className="px-5 py-2.5 font-mono text-ink/70 break-all">
                    {a.data}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      )}
    </div>
  );
}
