"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";
import type { Faq } from "@/lib/types";

/**
 * FAQ accordion. Uses native <details>/<summary> initially for SSR + a11y,
 * but enhanced with state for smooth icon rotation.
 */
export function FAQ({
  items,
  title = "Ofte stilte spørsmål",
  variant = "light",
}: {
  items: Faq[];
  title?: string;
  variant?: "light" | "dark";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = variant === "dark";

  if (!items || items.length === 0) return null;

  return (
    <section
      className={isDark ? "py-12" : "py-12"}
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className={`font-display text-2xl font-medium tracking-[-0.01em] mb-8 ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <li
              key={i}
              className={`rounded-2xl border transition ${
                isDark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-line bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left ${
                  isDark ? "text-white" : "text-ink"
                }`}
              >
                <span className="font-display text-[15px] font-medium">
                  {item.question}
                </span>
                <Icon.ChevronDown
                  size={18}
                  className={`flex-shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  } ${isDark ? "text-white/55" : "text-muted-light"}`}
                />
              </button>
              {isOpen && (
                <div
                  className={`px-6 pb-5 -mt-1 font-display text-[14.5px] leading-[1.7] ${
                    isDark ? "text-white/70" : "text-muted"
                  }`}
                >
                  {item.answer}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
