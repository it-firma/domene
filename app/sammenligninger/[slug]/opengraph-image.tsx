/**
 * Dynamic Open Graph image for comparisons.
 *
 * Plassering: app/sammenligninger/[slug]/opengraph-image.tsx
 *
 * Genererer per-sammenligning OG-bilde som inkluderer tittelen og
 * antall sammenlignede aktører. Dette er domene.io's mest delbare
 * innhold — folk deler "X vs Y vs Z"-sammenligninger.
 *
 * Endre import-stien for `getComparisonBySlug` til den faktiske
 * data-tilgangen i ditt prosjekt.
 */

import { ImageResponse } from "next/og";
import { findComparison } from "@/data/comparisons"; // Tilpass import

export const runtime = "edge";
export const alt = "Sammenligning fra domene.io";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  navy: "#0E1A33",
  navyDeep: "#060E20",
  brand: "#2563FF",
  brandLight: "#3B82F6",
  white: "#FFFFFF",
  textMuted: "rgba(255, 255, 255, 0.65)",
  textDim: "rgba(255, 255, 255, 0.4)",
  border: "rgba(255, 255, 255, 0.08)",
  cardBg: "rgba(255, 255, 255, 0.04)",
};

export default async function OGComparison({
  params,
}: {
  params: { slug: string };
}) {
  const comparison = findComparison(params.slug);

  const title = comparison?.title ?? "Sammenligning";
  const providerCount = comparison?.providers?.length ?? 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${COLORS.navyDeep} 0%, ${COLORS.navy} 70%, #1A2D5C 100%)`,
          position: "relative",
          padding: "64px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Dekorative blå-gradient stråler */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.brand}33 0%, transparent 70%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.brand}1A 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Rutenett */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.3,
            display: "flex",
          }}
        />

        {/* TOPP — Logo + sammenligning-pille */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: COLORS.brand,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  background: COLORS.white,
                  transform: "rotate(45deg)",
                  display: "flex",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: COLORS.white,
                letterSpacing: "-0.02em",
                display: "flex",
              }}
            >
              domene.io
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              background: `${COLORS.brand}22`,
              border: `1px solid ${COLORS.brand}66`,
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              color: COLORS.brandLight,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "flex" }}>
              {providerCount > 0
                ? `Sammenligning · ${providerCount} aktører`
                : "Sammenligning"}
            </span>
          </div>
        </div>

        {/* MIDT — Tittel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            zIndex: 1,
            marginTop: 30,
          }}
        >
          {/* Eyebrow med blå strek */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 32,
                height: 2,
                background: COLORS.brand,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.brand,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              Pris og funksjon — side ved side
            </div>
          </div>

          {/* Tittel — krymper for lange titler */}
          <div
            style={{
              fontSize: title.length > 80 ? 48 : title.length > 60 ? 56 : 64,
              fontWeight: 600,
              color: COLORS.white,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              display: "flex",
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        {/* BUNN — Trust-bånd */}
        <div
          style={{
            display: "flex",
            gap: 16,
            zIndex: 1,
            marginTop: 24,
          }}
        >
          <Badge>Verifiserte priser</Badge>
          <Badge>Inkl. mva</Badge>
          <Badge>Oppdatert 2026</Badge>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              fontSize: 18,
              fontWeight: 500,
              color: COLORS.textDim,
            }}
          >
            domene.io/sammenligninger/{params.slug}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  );
}

function Badge({ children }: { children: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 18px",
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 500,
        color: COLORS.textMuted,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          background: COLORS.brand,
          borderRadius: "50%",
          display: "flex",
        }}
      />
      <span style={{ display: "flex" }}>{children}</span>
    </div>
  );
}
