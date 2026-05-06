import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/**
 * Simple, dependency-free icon set. Add new icons here as needed.
 * All icons use 24×24 viewBox and currentColor stroke.
 */
export const Icon = {
  Globe: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
    </svg>
  ),
  Network: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3h12V9M12 12v3" />
    </svg>
  ),
  ShieldCheck: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Mail: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Server: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  Search: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  TrendingUp: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  Lock: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  Scale: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3v18M5 8h14M7 8 4 16h6L7 8ZM17 8l-3 8h6l-3-8Z" />
    </svg>
  ),
  Edit: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 20h4l10-10-4-4L4 16v4Z" />
      <path d="m14 6 4 4" />
    </svg>
  ),
  ArrowRightLeft: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 8h14m-3-3 3 3-3 3M20 16H6m3 3-3-3 3-3" />
    </svg>
  ),
  Info: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v.01M11 12h1v4h1" />
    </svg>
  ),
  Calculator: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h8M8 19h.01M12 19h.01M16 19h.01" />
    </svg>
  ),
  Tag: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m12 3 9 9-9 9-9-9V3h9Z" />
      <circle cx="8" cy="8" r="1.5" />
    </svg>
  ),
  ArrowRight: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  ),
  ArrowLeft: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M19 12H5m6 6-6-6 6-6" />
    </svg>
  ),
  ChevronRight: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  ),
  ChevronDown: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  ),
  Clock: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Linkedin: (p: IconProps) => (
    <svg {...base(p)} fill="currentColor" stroke="none">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  X: (p: IconProps) => (
    <svg {...base(p)} fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
  Menu: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  ),
  Key: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="8" cy="15" r="4" />
      <path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;

/**
 * Render an icon by string name (used for category/tool icons in data).
 * Falls back to Globe if the name is unknown.
 */
export function IconByName({
  name,
  ...props
}: { name: string } & IconProps) {
  const key = nameMap[name] ?? "Globe";
  const C = Icon[key];
  return <C {...props} />;
}

/**
 * Mapper kategori-ikon-navn til BrandIcon PNG-navn der vi har en bedre branded versjon.
 * Returns null hvis det ikke finnes en PNG-match (bruk SVG-fallback i så fall).
 */
export const categoryToBrandIcon: Record<string, string | undefined> = {
  network: "dns",
  "shield-check": "padlock",
  mail: "envelope",
  server: "server",
  search: "whois",
  lock: "padlock",
};

const nameMap: Record<string, IconName> = {
  globe: "Globe",
  network: "Network",
  "shield-check": "ShieldCheck",
  mail: "Mail",
  server: "Server",
  search: "Search",
  "trending-up": "TrendingUp",
  lock: "Lock",
  scale: "Scale",
  edit: "Edit",
  "arrow-right-left": "ArrowRightLeft",
  info: "Info",
  calculator: "Calculator",
  tag: "Tag",
  key: "Key",
};
