/**
 * Site-wide Open Graph image generator.
 *
 * Plassering: app/opengraph-image.tsx
 *
 * Genererer 1200×630 OG-bilde for hele nettstedet (forsiden og som fallback).
 * Bruker Next 14 ImageResponse fra next/og.
 *
 * Filen rendres ved build-tid og caches automatisk av Next.js.
 *
 * For dynamiske OG-bilder per side (f.eks. per guide/sammenligning),
 * lag tilsvarende `opengraph-image.tsx` i de respektive route-mappene.
 *
 * Ved bruk: Next.js plukker den opp automatisk og legger til
 *   <meta property="og:image" content="..." />
 * i sidens metadata.
 *
 * Tilsvarende fil for Twitter cards: `twitter-image.tsx` (samme struktur).
 */

import { ImageResponse } from "next/og";

// Krav fra Next.js: route segment configuration
export const runtime = "edge";
export const alt =
  "domene.io — Norges kunnskapsbase om domener, registrarer, DNS og webhosting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand-tokens — speiler tailwind.config.ts
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

export default async function OGImage() {
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
        {/* Dekorativ blå "stråle" bak til høyre — gir dybde */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.brand}33 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Subtilt rutenett */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.4,
            display: "flex",
          }}
        />

        {/* TOP — Logo + DomainNordic-merking */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          {/* Logo "domene.io" */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            {/* Logo-mark — sirkel med diamantformet detalj */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: COLORS.brand,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  background: COLORS.white,
                  transform: "rotate(45deg)",
                  display: "flex",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: COLORS.white,
                letterSpacing: "-0.02em",
                display: "flex",
              }}
            >
              domene.io
            </div>
          </div>

          {/* Høyre: "FRA DOMAINNORDIC" */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: COLORS.textDim,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              fra
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.white,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              DomainNordic
            </div>
          </div>
        </div>

        {/* MIDT — Hovedtittel */}
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
          {/* Eyebrow */}
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
              Norges kunnskapsbase om domener
            </div>
          </div>

          {/* Hovedtittel — DM Sans-stilen ved bruk av system-fontvekt */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              color: COLORS.white,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Alt om domener,</span>
            <span style={{ display: "flex" }}>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: COLORS.brandLight,
                  marginRight: 16,
                  display: "flex",
                }}
              >
                forklart
              </span>
              <span style={{ display: "flex" }}>på norsk.</span>
            </span>
          </div>

          {/* Beskrivelse */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: COLORS.textMuted,
              lineHeight: 1.5,
              marginTop: 28,
              maxWidth: 880,
              display: "flex",
            }}
          >
            Guider, sammenligninger og verktøy for deg som vil eie, flytte
            eller forstå et domene.
          </div>
        </div>

        {/* BUNN — Statistikk-bånd */}
        <div
          style={{
            display: "flex",
            gap: 24,
            zIndex: 1,
            marginTop: 24,
          }}
        >
          <StatBox label="Begreper" value="50+" />
          <StatBox label="Guider" value="20+" />
          <StatBox label="Registrarer" value="6" />
          <StatBox label="TLD-er sammenlignet" value="7" />
        </div>
      </div>
    ),
    {
      ...size,
      // Cache i 1 år — Next håndterer cache-invalidering ved deploy
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "20px 28px",
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 14,
        flex: 1,
      }}
    >
      <div
        style={{
          fontSize: 32,
          fontWeight: 600,
          color: COLORS.white,
          letterSpacing: "-0.02em",
          display: "flex",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: COLORS.textMuted,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          display: "flex",
        }}
      >
        {label}
      </div>
    </div>
  );
}
