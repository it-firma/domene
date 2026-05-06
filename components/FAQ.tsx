import type { Faq } from "@/lib/types";

/**
 * FAQ accordion using native <details>/<summary>.
 *
 * Why native details? Because answers MUST always be present in the HTML
 * for SEO, AEO (AI snippets), and accessibility — even when collapsed.
 * Google, ChatGPT, Perplexity, and others read the full HTML, not the
 * runtime-rendered DOM.
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
  const isDark = variant === "dark";

  if (!items || items.length === 0) return null;

  return (
    <section
      className={isDark ? "py-12" : "py-12"}
      aria-labelledby="faq-heading"
    >
      {title && (
        <h2
          id="faq-heading"
          className={`font-display text-2xl font-medium tracking-[-0.01em] mb-8 ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className={`rounded-2xl border transition ${
              isDark
                ? "border-white/10 bg-white/[0.03]"
                : "border-line bg-white"
            }`}
          >
            <details
              className="group"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary
                className={`flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left list-none [&::-webkit-details-marker]:hidden ${
                  isDark ? "text-white" : "text-ink"
                }`}
              >
                <span className="font-display text-[15px] font-medium">
                  {item.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 transition-transform group-open:rotate-180 ${
                    isDark ? "text-white/55" : "text-muted-light"
                  }`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div
                className={`px-6 pb-5 -mt-1 font-display text-[14.5px] leading-[1.7] ${
                  isDark ? "text-white/70" : "text-muted"
                }`}
              >
                {item.answer}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
