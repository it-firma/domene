/**
 * Bullet-list summary placed at the bottom of important pages.
 * Optimized for LLM extraction (Perplexity, ChatGPT, Gemini).
 */
export function Summary({
  items,
  title = "Oppsummert",
  variant = "light",
}: {
  items: string[];
  title?: string;
  variant?: "light" | "dark";
}) {
  if (!items || items.length === 0) return null;
  const isDark = variant === "dark";
  return (
    <section
      className={`my-12 rounded-2xl p-7 ${
        isDark
          ? "border border-white/10 bg-white/[0.03] text-white"
          : "border border-line bg-surface-100 text-ink"
      }`}
      aria-label={title}
    >
      <h2
        className={`font-display text-[11px] font-medium uppercase tracking-[0.18em] mb-4 ${
          isDark ? "text-brand-light" : "text-brand"
        }`}
      >
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex gap-3 font-display text-[14.5px] leading-[1.6] ${
              isDark ? "text-white/85" : "text-ink/85"
            }`}
          >
            <span
              className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                isDark ? "bg-brand-light" : "bg-brand"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
