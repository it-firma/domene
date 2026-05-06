import type { Metadata } from "next";
import { site } from "./site";
import type { Category, Faq, Guide, GlossaryTerm, Tool } from "./types";

/**
 * Build absolute canonical URL.
 */
export const canonical = (path = "") =>
  `${site.url.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Build a Next.js Metadata object with consistent OG, Twitter and canonical.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  updatedAt?: string;
}): Metadata {
  const url = canonical(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: opts.type ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders                                                    */
/* ------------------------------------------------------------------ */

export function ldOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: ["domene.io", "Domene", "Domene.io"],
    url: site.url,
    legalName: site.legalName,
    description:
      "Norges uavhengige kunnskapsbase om domener: .no-domener, DNS, e-post, sikkerhet og webhotell.",
    parentOrganization: { "@type": "Organization", name: site.parentBrand },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: site.email,
        contactType: "customer support",
        availableLanguage: ["Norwegian", "English"],
      },
    ],
    sameAs: [site.social.linkedin, site.social.x].filter((u) => u && u !== "#"),
  };
}

export function ldWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: site.language,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/kunnskapsbase?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function ldBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.url),
    })),
  };
}

export function ldFaq(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function ldArticle(g: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    inLanguage: site.language,
    datePublished: g.updatedAt,
    dateModified: g.updatedAt,
    author: { "@type": "Organization", name: g.author ?? site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: canonical(`/guider/${g.slug}`),
  };
}

export function ldHowTo(g: Guide) {
  if (!g.steps || g.steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: g.title,
    description: g.description,
    inLanguage: site.language,
    totalTime: `PT${g.readingTime}M`,
    step: g.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}

export function ldDefinedTerm(t: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.shortDefinition,
    inDefinedTermSet: canonical("/ordliste"),
    url: canonical(`/ordliste/${t.slug}`),
  };
}

export function ldCollectionPage(opts: {
  name: string;
  description: string;
  path: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: canonical(opts.path),
    inLanguage: site.language,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((i, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: i.name,
        url: canonical(i.url),
      })),
    },
  };
}

export function ldSoftwareApplication(t: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: t.name,
    description: t.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    inLanguage: site.language,
    url: canonical(`/verktoy/${t.slug}`),
    offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
  };
}
