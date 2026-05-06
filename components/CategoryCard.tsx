import Link from "next/link";
import { IconByName, categoryToBrandIcon } from "@/lib/icons";
import { BrandIcon, type BrandIconName } from "@/components/BrandIcon";
import type { Category } from "@/lib/types";

export function CategoryCard({
  category,
  variant = "light",
}: {
  category: Category;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const brandIconName = categoryToBrandIcon[category.icon];
  return (
    <Link
      href={`/kunnskapsbase/${category.slug}`}
      className={`group block rounded-2xl p-6 transition ${
        isDark
          ? "border border-white/[0.08] bg-white/[0.03] hover:border-brand-light/30 hover:bg-white/[0.06]"
          : "border border-line bg-white hover:border-brand-light hover:shadow-card"
      }`}
    >
      {brandIconName ? (
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center">
          <BrandIcon name={brandIconName as BrandIconName} size={48} />
        </span>
      ) : (
        <span
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
            isDark ? "bg-brand/15 text-brand-light" : "bg-brand/10 text-brand"
          }`}
        >
          <IconByName name={category.icon} size={26} />
        </span>
      )}
      <h3
        className={`font-display text-[15px] font-medium leading-tight ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {category.name}
      </h3>
      <p
        className={`mt-2 font-display text-[12.5px] leading-[1.55] ${
          isDark ? "text-white/55" : "text-muted"
        }`}
      >
        {category.shortDescription}
      </p>
    </Link>
  );
}
