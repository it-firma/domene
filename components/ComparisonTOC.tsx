"use client";

import { useEffect, useState } from "react";

/**
 * Sticky table of contents for comparison pages.
 * Highlights the active section based on scroll position.
 */
export function ComparisonTOC({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
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
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="Innholdsfortegnelse" className="sticky top-24">
      <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-muted mb-4">
        På denne siden
      </div>
      <ul className="flex flex-col gap-2 list-none m-0 p-0 border-l border-line">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block -ml-px border-l-2 pl-4 py-1 font-display text-[13px] transition ${
                  isActive
                    ? "border-brand text-ink font-medium"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
