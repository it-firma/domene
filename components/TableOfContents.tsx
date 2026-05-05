"use client";

import { useEffect, useState } from "react";
import type { GuideSection } from "@/lib/types";
import { slugifyHeading } from "@/lib/slug";

/**
 * Renders a sticky table of contents for article sections.
 * Highlights the active section based on scroll position.
 */
export function TableOfContents({ sections }: { sections: GuideSection[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = sections.map((s) => slugifyHeading(s.heading));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <nav aria-label="Innholdsfortegnelse" className="sticky top-24">
      <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-muted mb-4">
        På denne siden
      </div>
      <ul className="flex flex-col gap-2 list-none m-0 p-0 border-l border-line">
        {sections.map((s) => {
          const id = slugifyHeading(s.heading);
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block -ml-px border-l-2 pl-4 py-1 font-display text-[13px] transition ${
                  isActive
                    ? "border-brand text-ink font-medium"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {s.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
