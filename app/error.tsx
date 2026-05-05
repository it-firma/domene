"use client";

import { useEffect } from "react";
import Link from "next/link";

const RefreshIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logg til konsoll i produksjon — kan kobles til feilrapportering senere
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-console
      console.error("Application error:", error);
    }
  }, [error]);

  return (
    <div className="bg-white pt-32 pb-24 min-h-[70vh]">
      <div className="container-prose max-w-[860px]">
        <div className="font-serif italic text-muted text-[14px] mb-2">
          Noe gikk galt
        </div>
        <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
          Vi traff en uventet feil
        </h1>
        <p className="prose-body mt-6 max-w-[640px]">
          Sannsynligvis et midlertidig problem med en bakomliggende tjeneste.
          Prøv igjen, eller gå til forsiden og let deg frem på nytt.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-[14px] font-medium text-white transition hover:bg-brand-dark"
          >
            <RefreshIcon size={14} /> Prøv igjen
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 font-display text-[14px] font-medium text-ink transition hover:border-brand/40"
          >
            Gå til forsiden
          </Link>
        </div>

        {error.digest && (
          <div className="mt-12 border-t border-line pt-6">
            <p className="font-display text-[12px] text-muted-light m-0">
              Feilreferanse:{" "}
              <code className="font-mono text-[11.5px] text-muted">
                {error.digest}
              </code>
            </p>
            <p className="font-display text-[13px] text-muted mt-3 m-0">
              Hvis problemet vedvarer, kan du{" "}
              <Link href="/kontakt" className="text-brand hover:underline">
                sende oss en beskjed
              </Link>{" "}
              med denne referansen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
