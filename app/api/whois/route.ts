import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * RDAP-based "whois" lookup. RDAP is the modern replacement for WHOIS and is
 * served over HTTPS by registries and registrars. We rely on rdap.org as a
 * neutral aggregator that proxies to the correct registry server.
 */
const DOMAIN_REGEX = /^(?!-)(?:[a-zA-Z0-9æøåÆØÅ-]{1,63}\.)+[a-zA-Z]{2,63}$/u;

interface RdapEvent {
  eventAction?: string;
  eventDate?: string;
}
interface RdapNameserver {
  ldhName?: string;
}
interface RdapEntity {
  roles?: string[];
  vcardArray?: unknown;
  handle?: string;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const domain = (url.searchParams.get("domain") || "").trim().toLowerCase();

  if (!domain || !DOMAIN_REGEX.test(domain)) {
    return NextResponse.json(
      { error: "Ugyldig domenenavn." },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(`https://rdap.org/domain/${encodeURIComponent(domain)}`, {
      headers: { accept: "application/rdap+json" },
      cache: "no-store",
    });
    if (upstream.status === 404) {
      return NextResponse.json({
        domain,
        registered: false,
      });
    }
    if (!upstream.ok) {
      return NextResponse.json(
        { error: `RDAP-oppslag feilet (${upstream.status}).` },
        { status: 502 },
      );
    }
    const data = await upstream.json();

    const events: { action: string; date: string }[] = (data.events || [])
      .filter((e: RdapEvent) => e.eventAction && e.eventDate)
      .map((e: RdapEvent) => ({ action: e.eventAction!, date: e.eventDate! }));

    const nameservers: string[] = (data.nameservers || [])
      .map((n: RdapNameserver) => (n.ldhName || "").toLowerCase())
      .filter(Boolean);

    const status: string[] = data.status || [];

    // Best-effort registrar from entities[role=registrar]
    let registrar: string | null = null;
    const entities: RdapEntity[] = data.entities || [];
    for (const e of entities) {
      if (e.roles?.includes("registrar") && Array.isArray(e.vcardArray)) {
        const v = e.vcardArray as unknown[][];
        if (Array.isArray(v[1])) {
          for (const item of v[1]) {
            if (Array.isArray(item) && item[0] === "fn" && typeof item[3] === "string") {
              registrar = item[3];
            }
          }
        }
      }
    }

    return NextResponse.json({
      domain,
      registered: true,
      registrar,
      status,
      nameservers,
      events,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Kunne ikke nå RDAP-tjeneren akkurat nå." },
      { status: 502 },
    );
  }
}
