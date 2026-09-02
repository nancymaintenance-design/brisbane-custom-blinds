import { createFileRoute, notFound } from "@tanstack/react-router";

import { ServiceDetailPage } from "@/components/service-detail-page";
import { absoluteUrl, SITE } from "@/config/site";
import { getServiceDetail } from "@/data/service-details";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const detail = getServiceDetail(params.slug);
    if (!detail) throw notFound();
    return detail;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = absoluteUrl(`/services/${loaderData.slug}`);
    const schema = [
      {
        "@context": "https://schema.org", "@type": "Service", name: loaderData.title,
        serviceType: loaderData.title, areaServed: { "@type": "City", name: SITE.city },
        provider: { "@type": "Organization", name: SITE.brand, url: SITE.siteUrl }, url,
      },
      {
        "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: loaderData.category, item: absoluteUrl(loaderData.hubPath) },
          { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
        ],
      },
      {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: loaderData.faqs.map((faq) => ({
          "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ];
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
    };
  },
  component: DetailRoute,
  notFoundComponent: () => <main className="container-luxe py-24"><h1 className="font-serif text-5xl text-ink">Service page not found</h1></main>,
});

function DetailRoute() {
  const detail = Route.useLoaderData();
  return <ServiceDetailPage detail={detail} />;
}
