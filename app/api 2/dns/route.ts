import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Lightweight DNS lookup proxy using Cloudflare DNS-over-HTTPS.
 * Accepts a domain and a record type, returns the parsed result.
 */
const ALLOWED_TYPES = new Set([
  "A", "AAAA", "MX", "TXT", "NS", "SOA", "CNAME", "CAA", "SRV", "DNSKEY", "DS",
]);

const DOMAIN_REGEX = /^(?!-)(?:[a-zA-Z0-9æøåÆØÅ-]{1,63}\.)+[a-zA-Z]{2,63}$/u;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const domain = (url.searchParams.get("domain") || "").trim().toLowerCase();
  const type = (url.searchParams.get("type") || "A").toUpperCase();

  if (!domain || !DOMAIN_REGEX.test(domain)) {
    return NextResponse.json(
      { error: "Ugyldig domenenavn." },
      { status: 400 },
    );
  }
  if (!ALLOWED_TYPES.has(type)) {
    return NextResponse.json(
      { error: `Posttype ikke støttet. Velg én av: ${Array.from(ALLOWED_TYPES).join(", ")}.` },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=${type}`,
      {
        headers: { accept: "application/dns-json" },
        cache: "no-store",
      },
    );
    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Oppslag feilet (${upstream.status}).` },
        { status: 502 },
      );
    }
    const data = await upstream.json();
    return NextResponse.json({
      domain,
      type,
      status: data.Status,
      answers: (data.Answer || []).map((a: { name: string; type: number; TTL: number; data: string }) => ({
        name: a.name,
        type: a.type,
        ttl: a.TTL,
        data: a.data,
      })),
      authority: (data.Authority || []).map((a: { name: string; type: number; TTL: number; data: string }) => ({
        name: a.name,
        type: a.type,
        ttl: a.TTL,
        data: a.data,
      })),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Kunne ikke nå DNS-tjeneren akkurat nå." },
      { status: 502 },
    );
  }
}
