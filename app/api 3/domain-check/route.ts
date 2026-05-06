import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Domain availability check. We test multiple TLDs at once by querying RDAP.
 * If RDAP returns 404, the domain is available; if 200, it is registered.
 *
 * Note: RDAP is faster and more accurate than DNS for availability since
 * registered domains may not have DNS records yet, and this avoids false
 * negatives. Some ccTLD registries don't expose RDAP — we fall back to
 * "ukjent" status for those.
 */

const DEFAULT_TLDS = ["no", "com", "net", "org", "io", "eu", "se", "dk"];
const LABEL_REGEX = /^(?!-)[a-z0-9æøå-]{1,63}(?<!-)$/u;

interface CheckResult {
  tld: string;
  status: "available" | "registered" | "unknown";
  registrar?: string;
}

async function checkOne(label: string, tld: string): Promise<CheckResult> {
  const fqdn = `${label}.${tld}`.toLowerCase();
  try {
    const r = await fetch(`https://rdap.org/domain/${encodeURIComponent(fqdn)}`, {
      headers: { accept: "application/rdap+json" },
      cache: "no-store",
    });
    if (r.status === 404) return { tld, status: "available" };
    if (r.ok) {
      const data = await r.json();
      let registrar: string | undefined;
      for (const e of data.entities || []) {
        if (e.roles?.includes("registrar") && Array.isArray(e.vcardArray?.[1])) {
          for (const item of e.vcardArray[1]) {
            if (Array.isArray(item) && item[0] === "fn" && typeof item[3] === "string") {
              registrar = item[3];
            }
          }
        }
      }
      return { tld, status: "registered", registrar };
    }
    return { tld, status: "unknown" };
  } catch {
    return { tld, status: "unknown" };
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const raw = (url.searchParams.get("name") || "").trim().toLowerCase();
  const tldsParam = url.searchParams.get("tlds");
  const tlds = tldsParam
    ? tldsParam.split(",").map((t) => t.trim().replace(/^\./, "")).filter(Boolean).slice(0, 12)
    : DEFAULT_TLDS;

  // Strip a possible TLD from input — we only want the label.
  const label = raw.split(".")[0];
  if (!label || !LABEL_REGEX.test(label)) {
    return NextResponse.json(
      { error: "Ugyldig domenenavn. Bruk a-z, 0-9, bindestrek og æøå (2-63 tegn)." },
      { status: 400 },
    );
  }

  const results = await Promise.all(tlds.map((t) => checkOne(label, t)));
  return NextResponse.json({ label, results });
}
