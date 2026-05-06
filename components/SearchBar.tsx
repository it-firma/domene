"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/lib/icons";

export function SearchBar({
  variant = "hero",
  placeholder = "Søk i kunnskapsbasen - DNS, .no, e-post...",
}: {
  variant?: "hero" | "kb";
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/kunnskapsbase?q=${encodeURIComponent(q.trim())}`);
  };

  if (variant === "hero") {
    return (
      <form
        onSubmit={onSubmit}
        role="search"
        className="flex w-full max-w-[560px] items-center gap-2 rounded-full bg-white/[0.08] p-1.5 ring-1 ring-white/15 backdrop-blur-sm"
      >
        <span className="pl-4 text-white/55">
          <Icon.Search size={18} />
        </span>
        <label htmlFor="hero-search" className="sr-only">
          Søk i kunnskapsbasen
        </label>
        <input
          id="hero-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent py-2.5 font-display text-[14.5px] text-white placeholder:text-white/45 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-brand px-5 py-2.5 font-display text-[13px] font-medium text-white transition hover:bg-brand-dark"
        >
          Søk
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      className="flex w-full items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-2.5"
    >
      <Icon.Search size={16} className="text-muted-light" />
      <label htmlFor="kb-search" className="sr-only">
        Søk
      </label>
      <input
        id="kb-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent font-display text-[13.5px] text-ink placeholder:text-muted-light focus:outline-none"
      />
    </form>
  );
}
