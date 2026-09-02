const fallbackSiteUrl = "https://example.com";

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();

export const SITE = {
  brand: "Brisbane Curtains Online",
  legalName: "EXAMPLE SERVICES PTY LTD",
  abn: "96 645 821 745",
  siteUrl: (configuredSiteUrl || fallbackSiteUrl).replace(/\/$/, ""),
  phoneDisplay: "+61 400 000 000",
  phoneHref: "tel:+61 400 000 000",
  email: "contact@example.com",
  emailHref: "mailto:contact@example.com",
  city: "Brisbane",
  region: "QLD",
  country: "Australia",
  areaLabel: "Brisbane, Queensland",
  quoteFormEndpoint: import.meta.env.VITE_QUOTE_FORM_ENDPOINT?.trim() || "",
} as const;

export const SITE_INDEXABLE = import.meta.env.VITE_SITE_INDEXABLE === "true";

export const absoluteUrl = (path = "/") => new URL(path, `${SITE.siteUrl}/`).toString();
