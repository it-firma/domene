/**
 * AnswerBox renders a short featured-snippet-friendly answer right under H1.
 * Used on guides, glossary entries and category pages.
 *
 * Rules (from brief):
 *  - Comes immediately after H1
 *  - 40-70 words
 *  - Plain language
 *  - Stands alone without context
 */
export function AnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-line-strong bg-surface-100 p-6">
      <div className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-brand mb-3">
        Kort svar
      </div>
      <p className="font-display text-[16px] leading-[1.6] text-ink m-0">
        {children}
      </p>
    </div>
  );
}
