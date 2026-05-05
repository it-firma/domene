// Global site configuration. Edit URL when domain is live.
export const site = {
  name: "domene.io",
  url: "https://domene.io",
  legalName: "DomainNordic Advisory Group",
  parentBrand: "DomainNordic",
  email: "hei@domene.io",
  description:
    "Norges kunnskapsbase om domener. Lær alt om domeneregistrering, .no domener, DNS, e-post og webhotell.",
  locale: "nb_NO",
  language: "nb",
  social: {
    linkedin: "#",
    x: "#",
  },
  family: [
    { name: "domene.io", country: "Norge", url: "https://domene.io" },
    { name: "domän.io", country: "Sverige", url: "#" },
    { name: "domæne.io", country: "Danmark", url: "#" },
    { name: "verkkotunnus.io", country: "Finland", url: "#" },
  ],
} as const;
