import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { glossary } from "@/data/glossary";
import { tools } from "@/data/tools";
import { comparisons } from "@/data/comparisons";
import { providers } from "@/data/providers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const today = new Date().toISOString();

  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: "/kunnskapsbase",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    { url: "/guider", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/ordliste", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/verktoy", priority: 0.8, changeFrequency: "monthly" as const },
    {
      url: "/sammenligninger",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/leverandorer",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/eksperthjelp",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { url: "/om-oss", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/kontakt", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.url}`,
      lastModified: today,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...categories.map((c) => ({
      url: `${base}/kunnskapsbase/${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...guides.map((g) => ({
      url: `${base}/guider/${g.slug}`,
      lastModified: g.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...glossary.map((t) => ({
      url: `${base}/ordliste/${t.slug}`,
      lastModified: t.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...tools.map((t) => ({
      url: `${base}/verktoy/${t.slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...comparisons.map((c) => ({
      url: `${base}/sammenligninger/${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...providers.map((p) => ({
      url: `${base}/leverandorer/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
