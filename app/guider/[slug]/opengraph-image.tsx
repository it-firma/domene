/**
 * Dynamic Open Graph image for guides.
 *
 * Plassering: app/guider/[slug]/opengraph-image.tsx
 *
 * Genererer per-guide OG-bilde som inkluderer guidens tittel, kategori
 * og lesetid. Next.js cacher resultatet automatisk.
 *
 * Tilsvarende fil bør lages for sammenligninger og ordlistebegreper:
 *   app/sammenligninger/[slug]/opengraph-image.tsx
 *   app/ordliste/[slug]/opengraph-image.tsx
 *
 * Endre import-stien for `getGuideBySlug` til den faktiske data-tilgangen
 * i ditt prosjekt.
 */

import { ImageResponse } from "next/og";
import { findGuide } from "@/data/guides"; // Tilpass import

export const runtime = "edge";
export const alt = "Guide fra domene.io";
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
};

// Etiketter per kategori — kan utvides
const CATEGORY_LABELS: Record<string, string> = {
  "domene-grunnleggende": "Grunnleggende",
  "dns-og-teknisk": "DNS & teknisk",
  "seo-og-synlighet": "SEO & synlighet",
  "juridisk-og-varemerke": "Juridisk",
  "domeneinvestering": "Investering",
};

export default async function OGGuide({
  params,
}: {
  params: { slug: string };
}) {
  const guide = findGuide(params.slug);

  // Fallback hvis guiden ikke finnes
  const title = guide?.title ?? "Domene-guide";
  const category = guide?.category
    ? CATEGORY_LABELS[guide.category] ?? guide.category
    : "Guide";
  const readingTime = guide?.readingTime
    ? `${guide.readingTime} min lesetid`
    : null;

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
        {/* Dekorativ sirkel */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.brand}33 0%, transparent 70%)`,
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

        {/* TOPP - Logo + kategori-pille */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 14 }}
          >
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

          {/* Kategori-pille */}
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
            <div
              style={{
                width: 6,
                height: 6,
                background: COLORS.brandLight,
                borderRadius: "50%",
                display: "flex",
              }}
            />
            <span style={{ display: "flex" }}>Guide - {category}</span>
          </div>
        </div>

        {/* MIDT - Tittel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            zIndex: 1,
            marginTop: 40,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 56 : title.length > 40 ? 64 : 72,
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

        {/* BUNN - Lesetid + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
            paddingTop: 28,
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 18,
              color: COLORS.textMuted,
            }}
          >
            {readingTime && (
              <>
                <div style={{ display: "flex" }}>{readingTime}</div>
                <div
                  style={{
                    width: 4,
                    height: 4,
                    background: COLORS.textDim,
                    borderRadius: "50%",
                    display: "flex",
                  }}
                />
              </>
            )}
            <div style={{ display: "flex" }}>Lest med tillit i Norden</div>
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: COLORS.textDim,
              display: "flex",
            }}
          >
            domene.io/guider/{params.slug}
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
