"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/lib/icons";
import { site } from "@/lib/site";

const helpCategories = [
  "Domeneregistrering",
  "Domeneflytting",
  "DNS-oppsett",
  "E-post-oppsett",
  "Domenesikkerhet",
  "Domeneportefølje",
  "Domenestrategi",
  "Sammenligning av leverandører",
  "Annet",
];

export default function ExpertHelpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    helpType: "",
    domain: "",
    message: "",
  });

  const onChange = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to backend / form service. For now just optimistic.
    setSubmitted(true);
  };

  const crumbs = [
    { label: "Hjem", href: "/" },
    { label: "Eksperthjelp", href: "/eksperthjelp" },
  ];

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container-prose">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_400px]">
          <div className="max-w-[640px]">
            <div className="font-serif italic text-muted text-[14px] mb-2">
              Eksperthjelp
            </div>
            <h1 className="font-display text-[36px] md:text-[48px] font-medium tracking-[-0.025em] leading-[1.05] text-ink m-0">
              Få hjelp med domener, DNS og domenestrategi
            </h1>
            <p className="mt-5 font-display text-[16px] leading-[1.65] text-muted">
              Snakk med våre rådgivere når du trenger personlig hjelp. Vi gir
              konkrete råd basert på din situasjon — ingen forpliktelser, ingen
              skjulte priser.
            </p>

            <section className="mt-10">
              <h2 className="font-display text-[20px] font-medium text-ink mb-4">
                Hva vi kan hjelpe deg med
              </h2>
              <ul className="grid gap-2.5 sm:grid-cols-2 list-none m-0 p-0">
                {helpCategories.slice(0, 8).map((c) => (
                  <li
                    key={c}
                    className="flex gap-2.5 font-display text-[14.5px] text-ink/85"
                  >
                    <Icon.Check size={18} className="mt-0.5 flex-shrink-0 text-brand" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 rounded-2xl border border-line bg-surface-100 p-7">
              <h2 className="font-display text-[16px] font-medium text-ink mb-2">
                Slik fungerer det
              </h2>
              <ol className="flex flex-col gap-3 m-0 p-0 list-none">
                {[
                  "Send oss en kort beskrivelse av hva du trenger hjelp med.",
                  "Vi svarer normalt innen én virkedag med en uforpliktende vurdering.",
                  "Vi avtaler videre samarbeid kun om det gir deg verdi.",
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-3 font-display text-[14px] leading-[1.6] text-ink/85"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-[12px] font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <Icon.Check size={36} className="mx-auto text-green-700" />
                <h2 className="mt-4 font-display text-[20px] font-medium text-ink">
                  Takk for henvendelsen
                </h2>
                <p className="mt-2 font-display text-[14px] text-muted m-0">
                  Vi har mottatt meldingen din og svarer normalt innen én
                  virkedag.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-line bg-white p-7 shadow-card"
                aria-label="Kontaktskjema for eksperthjelp"
              >
                <h2 className="font-display text-[18px] font-medium text-ink mb-1">
                  Be om eksperthjelp
                </h2>
                <p className="font-display text-[13px] text-muted m-0 mb-6">
                  Vi tar kontakt direkte på {site.email}.
                </p>

                <Field
                  id="name"
                  label="Navn"
                  required
                  value={form.name}
                  onChange={(v) => onChange("name", v)}
                />
                <Field
                  id="email"
                  type="email"
                  label="E-post"
                  required
                  value={form.email}
                  onChange={(v) => onChange("email", v)}
                />
                <Field
                  id="phone"
                  type="tel"
                  label="Telefon (valgfritt)"
                  value={form.phone}
                  onChange={(v) => onChange("phone", v)}
                />

                <div className="mb-4">
                  <label
                    htmlFor="helpType"
                    className="block font-display text-[12.5px] font-medium text-ink mb-1.5"
                  >
                    Hva trenger du hjelp med?
                  </label>
                  <select
                    id="helpType"
                    required
                    value={form.helpType}
                    onChange={(e) => onChange("helpType", e.target.value)}
                    className="w-full rounded-xl border border-line bg-white px-4 py-2.5 font-display text-[14px] text-ink focus:border-brand"
                  >
                    <option value="">Velg et område</option>
                    {helpCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <Field
                  id="domain"
                  label="Domenenavn (valgfritt)"
                  value={form.domain}
                  onChange={(v) => onChange("domain", v)}
                  placeholder="f.eks. firmaet-ditt.no"
                />

                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block font-display text-[12.5px] font-medium text-ink mb-1.5"
                  >
                    Melding
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Fortell kort hva du trenger hjelp med…"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 font-display text-[14px] text-ink focus:border-brand"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand px-5 py-3 font-display text-[14px] font-medium text-white transition hover:bg-brand-dark"
                >
                  Send henvendelse
                </button>

                <p className="mt-4 font-display text-[11.5px] text-muted-light">
                  Vi behandler henvendelsen din konfidensielt. Se vår
                  personvernerklæring for hvordan vi håndterer informasjonen.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block font-display text-[12.5px] font-medium text-ink mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-2.5 font-display text-[14px] text-ink placeholder:text-muted-light focus:border-brand"
      />
    </div>
  );
}
