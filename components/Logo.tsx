import Link from "next/link";
import Image from "next/image";

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
 * DN icon — uses PNG file from /public/dn-mark.png with transparent background.
 * Works on both light and dark backgrounds.
 */
export function DNMark({ size = 34 }: { size?: number }) {
  return (
    <Image
      src="/dn-mark.png"
      alt=""
      width={size}
      height={size}
      priority
      aria-hidden="true"
    />
  );
}
