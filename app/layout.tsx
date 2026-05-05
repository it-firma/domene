import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import {
  CookieConsentProvider,
  CookieConsentBanner,
  CookieConsentPreferences,
} from "@/components/CookieConsent";
import { ldOrganization, ldWebsite, canonical } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Norges ultimate kunnskapsbase om domener`,
    template: `%s | ${site.name}`,
  },
  description:
    "Lær alt om domener fra A til Å. Guider, verktøy, sammenligninger og eksperttips for norske domeneeier, bedrifter og prosjekter.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  generator: "Next.js",
  keywords: [
    "domene",
    ".no domene",
    "DNS",
    "DNSSEC",
    "WHOIS",
    "e-post",
    "webhotell",
    "domeneflytting",
    "domenesikkerhet",
    "norske domener",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Norges ultimate kunnskapsbase om domener`,
    description:
      "Lær alt om domener fra A til Å. Guider, verktøy, sammenligninger og eksperttips.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Norges kunnskapsbase om domener`,
    description: "Guider, verktøy og sammenligninger om domener.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: canonical("/") },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={site.language}>
      <head>
        {/* Preconnect to Google Fonts for fast font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DM Sans (display) + Fraunces italic (accent) */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&display=swap"
          rel="stylesheet"
        />
        {/*
          Google Consent Mode v2 — initialiser FØR analytics-script lastes.
          Setter alle samtykke-kategorier til "denied" som utgangspunkt;
          CookieConsentProvider oppdaterer dette når brukeren gir samtykke.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <body className="font-display">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Hopp til innhold
        </a>
        <CookieConsentProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CookieConsentBanner />
          <CookieConsentPreferences />
        </CookieConsentProvider>
        <StructuredData data={[ldOrganization(), ldWebsite()]} />
      </body>
    </html>
  );
}
