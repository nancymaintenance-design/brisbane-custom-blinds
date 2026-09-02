import { createFileRoute } from "@tanstack/react-router";

import { SITE_INDEXABLE, absoluteUrl } from "@/config/site";
import { SERVICE_DETAILS } from "@/data/service-details";

const publicPaths = [
  "/",
  "/curtains",
  "/blinds",
  "/motorised-curtains",
  "/curtain-repairs",
  "/gallery",
  "/about",
  "/contact",
  "/zh-hans",
  "/zh-hans/curtains",
  "/zh-hans/blinds",
  "/zh-hans/motorised-curtains",
  "/zh-hans/curtain-repairs",
  "/zh-hans/gallery",
  "/zh-hans/about",
  "/zh-hans/contact",
];

const sitemapPaths = [
  ...publicPaths,
  ...SERVICE_DETAILS.map((service) => `/services/${service.slug}`),
];

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        if (!SITE_INDEXABLE) {
          return new Response("Sitemap is unavailable while this deployment is in review mode.\n", {
            status: 404,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "public, max-age=0, must-revalidate",
              "X-Robots-Tag": "noindex, nofollow, noarchive",
            },
          });
        }

        const urls = sitemapPaths
          .map((path) => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`)
          .join("\n");

        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
          { headers: { "Content-Type": "application/xml; charset=utf-8" } },
        );
      },
    },
  },
});
