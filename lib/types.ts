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
}

export interface ComparisonColumn {
  /** Stable key, used in values */
  key: string;
  /** Visible header label */
  label: string;
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  intro: string;
  /** Methodology block */
  methodology: string;
  /** Optional column definitions for table */
  columns?: ComparisonColumn[];
  /** Optional provider rows */
  providers?: ComparisonProvider[];
  /** Optional "viktig å vite" bullets — overrides defaults */
  importantNotes?: string[];
  faq: Faq[];
  updatedAt: string;
}
