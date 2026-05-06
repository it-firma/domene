import Link from "next/link";
import { Icon } from "@/lib/icons";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({
  items,
  variant = "light",
}: {
  items: Crumb[];
  variant?: "light" | "dark";
}) {
  const inactiveColor =
    variant === "dark" ? "text-white/55 hover:text-white" : "text-muted hover:text-brand";
  const activeColor = variant === "dark" ? "text-white" : "text-ink";
  const dividerColor = variant === "dark" ? "text-white/35" : "text-muted-light";

  return (
    <nav aria-label="Brødsmuler" className="flex items-center text-[13px]">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <Icon.ChevronRight size={12} className={dividerColor} />
              )}
              {isLast ? (
                <span className={`font-medium ${activeColor}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={inactiveColor}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
