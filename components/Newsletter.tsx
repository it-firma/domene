"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return setStatus("error");
    // Wire to backend here. For now, optimistic.
    setStatus("ok");
    setEmail("");
  };

  return (
    <section className="rounded-2xl border border-line bg-white p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-[22px] md:text-[24px] font-medium tracking-[-0.015em] text-ink m-0 mb-2">
            Hold deg oppdatert
          </h2>
          <p className="font-display text-[14px] leading-[1.6] text-muted m-0 max-w-[480px]">
            Få de viktigste domeneoppdateringene rett i innboksen. Ingen spam,
            kun relevant innhold.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex w-full md:w-auto items-center gap-2 rounded-full border border-line bg-surface-100 p-1.5 min-w-[320px]"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            E-postadresse
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din e-postadresse"
            required
            className="flex-1 bg-transparent px-3 py-2 font-display text-[13.5px] text-ink placeholder:text-muted-light focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-5 py-2.5 font-display text-[13px] font-medium text-white transition hover:bg-brand-dark"
          >
            {status === "ok" ? "Takk!" : "Abonner"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p
          role="alert"
          className="mt-3 font-display text-[12.5px] text-red-500"
        >
          Skriv inn en gyldig e-postadresse.
        </p>
      )}
      <p className="mt-4 font-display text-[12px] text-muted-light">
        Vi respekterer ditt personvern. Du kan melde deg av når som helst.
      </p>
    </section>
  );
}
