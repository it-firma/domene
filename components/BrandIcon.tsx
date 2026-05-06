import Image from "next/image";

/**
 * Brand-konsistente PNG-ikoner med transparent bakgrunn.
 * Bruker /public/icons/{name}.png — samme ikoner brukt for kategorier,
 * vinner-badges og metode-illustrasjoner.
 *
 * Eksempel:
 *   <BrandIcon name="dns" size={48} />
 *   <BrandIcon name="badge-bedrifter" size={32} />
 */
export type BrandIconName =
  // Kategori/konsept-ikoner
  | "dns"
  | "server"
  | "ssl"
  | "whois"
  | "padlock"
  | "envelope"
  | "support"
  | "invoice"
  // Vinner-badges på sammenligninger
  | "badge-bedrifter"
  | "badge-mange-domener"
  | "badge-laveste-forstepris"
  | "badge-laveste-5ar"
  // Metodologi-ikoner
  | "check-quality"
  | "price-update"
  | "mass-admin"
  | "nordic-tlds";

export function BrandIcon({
  name,
  size = 48,
  className = "",
  alt = "",
}: {
  name: BrandIconName;
  size?: number;
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src={`/icons/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={className}
      aria-hidden={alt ? undefined : true}
    />
  );
}
