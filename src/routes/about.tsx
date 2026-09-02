import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { SalesTeamSection } from "@/components/sales-team";
import { SITE, absoluteUrl } from "@/config/site";
import workshop from "@/assets/about-workshop.jpg";
import { languageLinks } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Learn how Brisbane Curtains Online handles curtain and blind enquiries, and find direct Brisbane sales team contact details.",
      },
      { property: "og:title", content: "About Brisbane Curtains Online" },
      {
        property: "og:description",
        content: "A clear enquiry process for Brisbane curtain and blind projects.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: languageLinks("/about", "/zh-hans/about", "/about"),
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow text-gold">About · Brisbane</div>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-ink leading-[1.05]">
              A focused way to discuss custom window furnishings.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              {SITE.brand} is an enquiry website operated by {SITE.legalName}. It helps Brisbane
              homeowners describe their windows, compare relevant curtain or blind options and make
              contact about the next step.
            </p>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Product suitability, availability, measurement, installation requirements and pricing
              are confirmed for each property. We do not publish unsupported fixed prices, response
              promises or product guarantees.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Send an enquiry
              </Link>
              <Link to="/curtains" className="btn-outline-gold">
                Explore curtains
              </Link>
            </div>
          </div>
          <img
            src={workshop}
            alt="Illustrative window furnishing workspace"
            width={1400}
            height={900}
            className="w-full object-cover aspect-[5/4]"
          />
        </div>
      </section>

      <SalesTeamSection />

      <section className="py-20 bg-[oklch(0.955_0.014_82)]">
        <div className="container-luxe grid md:grid-cols-3 gap-8">
          {[
            [
              "Start with the room",
              "Tell us the window size, room use, privacy needs and preferred finish.",
            ],
            [
              "Share photos",
              "A full-window photo and close-ups help explain access, tracks and existing furnishings.",
            ],
            [
              "Confirm the next step",
              "Availability, product options and any measurement or installation step are confirmed for the enquiry.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="bg-background p-7 border border-border/60">
              <h2 className="font-serif text-2xl text-ink">{title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
