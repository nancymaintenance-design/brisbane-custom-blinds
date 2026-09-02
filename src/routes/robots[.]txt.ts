import { createFileRoute } from "@tanstack/react-router";

import { SITE_INDEXABLE, absoluteUrl } from "@/config/site";

const robotsBody = () =>
  SITE_INDEXABLE
    ? `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`
    : "User-agent: *\nDisallow: /\n";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(robotsBody(), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
            ...(!SITE_INDEXABLE ? { "X-Robots-Tag": "noindex, nofollow, noarchive" } : {}),
          },
        }),
    },
  },
});
