import Link from "next/link";
import { Icon } from "@/lib/icons";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brødsmuler" className="flex items-center text-[13px]">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <Icon.ChevronRight size={12} className="text-muted-light" />
              )}
              {isLast ? (
                <span
                  className="font-medium text-ink"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-muted hover:text-brand">
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
