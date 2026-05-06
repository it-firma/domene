/**
 * Generic loading skeleton shown automatically by Next during server component
 * data fetching. Mirrors the typical page rhythm (eyebrow → h1 → body → grid)
 * so the visual jump to the loaded page is minimal.
 */
export default function Loading() {
  return (
    <div className="bg-white pt-32 pb-20" aria-busy="true" aria-live="polite">
      <div className="container-prose max-w-[860px]">
        <div className="animate-pulse">
          {/* Breadcrumbs */}
          <div className="flex gap-2">
            <div className="h-3 w-12 rounded bg-[#E5E7EB]" />
            <div className="h-3 w-3 rounded bg-[#F3F4F6]" />
            <div className="h-3 w-24 rounded bg-[#E5E7EB]" />
          </div>

          {/* Eyebrow */}
          <div className="mt-8 h-3 w-20 rounded bg-[#E5E7EB]" />

          {/* H1 - two lines */}
          <div className="mt-3 h-9 w-[88%] rounded-md bg-[#D1D5DB]" />
          <div className="mt-3 h-9 w-[64%] rounded-md bg-[#D1D5DB]" />

          {/* Lede / intro */}
          <div className="mt-7 space-y-2.5">
            <div className="h-3.5 w-full rounded bg-[#E5E7EB]" />
            <div className="h-3.5 w-[94%] rounded bg-[#E5E7EB]" />
            <div className="h-3.5 w-[78%] rounded bg-[#E5E7EB]" />
          </div>

          {/* Answer box stand-in */}
          <div className="mt-10 rounded-2xl border border-line bg-surface-100 p-6">
            <div className="h-3 w-16 rounded bg-[#D1D5DB]" />
            <div className="mt-4 h-3.5 w-full rounded bg-[#E5E7EB]" />
            <div className="mt-2.5 h-3.5 w-[88%] rounded bg-[#E5E7EB]" />
            <div className="mt-2.5 h-3.5 w-[72%] rounded bg-[#E5E7EB]" />
          </div>

          {/* Section heading */}
          <div className="mt-14 h-5 w-44 rounded bg-[#D1D5DB]" />

          {/* Card grid */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-surface-100 p-6"
              >
                <div className="h-4 w-3/4 rounded bg-[#D1D5DB]" />
                <div className="mt-3 h-3 w-full rounded bg-[#E5E7EB]" />
                <div className="mt-2 h-3 w-[85%] rounded bg-[#E5E7EB]" />
              </div>
            ))}
          </div>
        </div>

        <span className="sr-only">Laster innhold</span>
      </div>
    </div>
  );
}
