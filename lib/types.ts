// Shared content types — all data files conform to these shapes.

export type Difficulty = "nybegynner" | "viderekommen" | "avansert";

export interface Faq {
  question: string;
  answer: string;
}

export interface Category {
  slug: string;
  name: string;
  /** H1: "Alt om {name}" — kept here for full SEO control */
  h1: string;
  /** 1-line summary used on cards and meta description */
  shortDescription: string;
  /** Long intro shown at top of category page (1-3 paragraphs) */
  intro: string;
  /** Featured-snippet-friendly answer box. 40-70 words. */
  shortAnswer: string;
  /** SVG name from /lib/icons.tsx */
  icon: string;
  /** "Start here" guide slug for category landing */
  startHere?: string;
  /** Slugs of guides in this category */
  guides: string[];
  /** Slugs of related glossary terms */
  terms: string[];
  /** Slugs of related tools */
  tools: string[];
  /** FAQs specific to category */
  faq: Faq[];
  /** 3-6 bullet summary at bottom (LLM-optimized) */
  summary: string[];
  updatedAt: string; // ISO date
}

export interface Guide {
  slug: string;
  title: string;
  /** 40-70 word answer box, comes after H1 */
  shortAnswer: string;
  /** Used for meta description and cards */
  description: string;
  category: string; // category slug
  difficulty: Difficulty;
  readingTime: number; // minutes
  updatedAt: string;
  author?: string;
  /** Article body as ordered sections */
  sections: GuideSection[];
  /** Common pitfalls */
  pitfalls?: string[];
  /** Step-by-step where applicable */
  steps?: { title: string; text: string }[];
  /** Quick checklist */
  checklist?: string[];
  faq: Faq[];
  /** 3-6 bullet TLDR */
  summary: string[];
  relatedGuides: string[];
  relatedTerms: string[];
  relatedTools: string[];
  /** Single CTA shown after FAQ */
  nextStep?: { label: string; href: string };
}

export interface GuideSection {
  /** H2 heading */
  heading: string;
  /** Paragraphs (rendered as <p>). Plain markdown-ish — bold via **x** */
  paragraphs: string[];
  /** Optional H3 subsections */
  subsections?: { heading: string; paragraphs: string[] }[];
  /** Optional bullet list */
  bullets?: string[];
  /** Optional example block */
  example?: string;
}

export interface GlossaryTerm {
  slug: string;
  /** "Hva er X?" form for the H1 */
  term: string;
  /** Short answer (40-60 words) */
  shortDefinition: string;
  /** Plain-language extended explanation */
  simpleExplanation: string;
  /** Technical detail */
  technicalExplanation: string;
  example?: string;
  /** Why it matters in 1-3 sentences */
  importance: string;
  category: string; // category slug
  /** Other glossary slugs */
  relatedTerms: string[];
  /** Guide slugs */
  relatedGuides: string[];
  faq: Faq[];
  updatedAt: string;
}

export interface Tool {
  slug: string;
  name: string;
  /** What it does, 1 sentence */
  description: string;
  /** Longer explanation for tool detail page */
  longDescription?: string;
  /** Lucide-style icon key */
  icon: string;
  category: string; // category slug
  faq?: Faq[];
  relatedTerms?: string[];
  relatedGuides?: string[];
  /** Whether this is a real working tool or coming soon */
  status: "live" | "coming-soon";
}

export interface ComparisonProvider {
  /** Provider name */
  name: string;
  /** Optional href to provider site (no aff link) */
  href?: string;
  /** Per-column values keyed by column key */
  values: Record<string, string>;
  /** Optional 1-line note shown below the row */
  note?: string;
  /** Optional badges (winner / category recognition) */
  badges?: ProviderBadge[];
  /** Optional volume-tier rows (for bulk discount providers like Domeneshop) */
  volumeTiers?: VolumeTier[];
  /** Optional conglomerate code for visual fingerprint */
  conglomerate?: ConglomerateCode;
  /** Optional structured "included" features */
  features?: ProviderFeature[];
}

export type ConglomerateCode =
  | "norsk-uavhengig"
  | "miss-group"
  | "one-com-group"
  | "team-blue";

export type ProviderFeature =
  | "dns"
  | "epost-videresending"
  | "ssl"
  | "dnssec"
  | "registry-lock"
  | "rest-api"
  | "ptr-reverse-dns"
  | "certbot-plugin"
  | "dynamic-dns"
  | "epost-pakke"
  | "antispam-antivirus"
  | "support-norsk"
  | "volumrabatt";

export type ProviderBadge =
  | "laveste-forstepris"
  | "laveste-3ar-no"
  | "laveste-3ar-com"
  | "laveste-fornyelse"
  | "bedrifter"
  | "mange-domener"
  | "norsk-uavhengig";

export interface VolumeTier {
  /** Number of domains, e.g. "5-24", "100-499", "500+" */
  range: string;
  /** Per-column values for this tier */
  values: Record<string, string>;
}

export interface ComparisonColumn {
  /** Stable key, used in values */
  key: string;
  /** Visible header label */
  label: string;
}

export interface ComparisonRecommendation {
  /** Persona / use-case label */
  persona: string;
  /** Recommended provider name */
  recommended: string;
  /** Why — 1-2 sentences */
  reason: string;
}

/**
 * One stat in the hero stat-strip (4 total).
 */
export interface HeroStat {
  label: string;
  value: string;
  /** Optional small unit suffix (e.g., "kr", "av 8") */
  unit?: string;
}

/**
 * One winner card in the "Vinnere" podium (typically 3).
 */
export interface ComparisonHighlight {
  /** Badge label, e.g., "Best 3-år .no", "Mest kontroll" */
  badge: string;
  /** Big number/value shown in card */
  value: string;
  /** Unit displayed next to value, e.g., "kr", "kr/år", "vol.rabatt" */
  unit?: string;
  /** Provider name */
  name: string;
  /** Subtitle, e.g., "Norsk uavhengig · Bergen" */
  sub: string;
  /** Whether to show as filled (primary) or outlined (secondary) badge */
  variant?: "primary" | "outline";
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  intro: string;
  /** Optional 40-70 word direct answer for AEO/AI snippets — placed right after H1 */
  answerBox?: string;
  /** Methodology block */
  methodology: string;
  /** Optional column definitions for table */
  columns?: ComparisonColumn[];
  /** Optional provider rows */
  providers?: ComparisonProvider[];
  /** Optional "viktig å vite" bullets — overrides defaults */
  importantNotes?: string[];
  /** Optional related comparison links — for internal linking */
  relatedSlugs?: string[];
  /** Optional persona-based recommendations */
  recommendations?: ComparisonRecommendation[];
  /** Optional hero stat-strip — 4 stats shown in dark hero band */
  heroStats?: HeroStat[];
  /** Optional 3 winner cards shown above the table */
  highlights?: ComparisonHighlight[];
  /** Optional editorial title with italic emphasis (overrides default H1) */
  editorialTitle?: { lead: string; emphasis: string; tail?: string };
  /** Optional short tagline shown above H1 (e.g., "Domenepriser · Norge · 2026") */
  tagline?: string;
  faq: Faq[];
  updatedAt: string;
}
