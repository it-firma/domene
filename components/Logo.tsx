import Link from "next/link";

export function Logo({
  variant = "light",
  size = "default",
}: {
  /** light = white text on dark bg, dark = dark text on light bg */
  variant?: "light" | "dark";
  size?: "default" | "footer";
}) {
  const dim = size === "footer" ? 44 : 34;
  const nameSize = size === "footer" ? "text-[22px]" : "text-[18px]";
  const subSize = size === "footer" ? "text-[11px]" : "text-[9.5px]";

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="domene.io – til forsiden"
    >
      <DNMark size={dim} />
      <span className="leading-[1.05]">
        <span
          className={`block font-display font-semibold tracking-[-0.01em] ${nameSize} ${
            variant === "light" ? "text-white" : "text-ink"
          }`}
        >
          domene.io
        </span>
        <span
          className={`block font-display font-normal uppercase tracking-[0.18em] mt-0.5 ${subSize} ${
            variant === "light" ? "text-[#8DA9CC]" : "text-muted-light"
          }`}
        >
          FRA DOMAINNORDIC
        </span>
      </span>
    </Link>
  );
}

/**
 * DN icon as inline SVG. Brand blue with subtle inner overlap.
 * Inline so it scales without raster artifacts.
 */
export function DNMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 22h28a18 18 0 0 1 0 36H22V22Zm0 18v18h28a9 9 0 0 0 0-18h-9"
        fill="#2563FF"
      />
      <path d="M62 22v54L40 22h22Z" fill="#1E4FD9" />
      <path d="M62 22v54L40 22h22Z" fill="#2563FF" fillOpacity="0.85" />
    </svg>
  );
}
