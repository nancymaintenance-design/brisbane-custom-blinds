import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, faqJsonLd } from "@/components/service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import curtainDoorway from "@/assets/example-curtain-installation-doorway.jpg";
import curtainRoom from "@/assets/example-curtain-installation-room.jpg";
import curtainWide from "@/assets/example-curtain-installation-wide.jpg";
import installerSheer from "@/assets/curtains-service.jpg";

const faqs = [
  {
    q: "How much do custom curtains cost in Brisbane?",
    a: "Pricing depends on window dimensions, fabric, lining, heading style, track requirements and access. Send your room details and photos so the scope can be discussed before a written quote is prepared.",
  },
  {
    q: "What is the difference between S-fold and pinch pleat curtains?",
    a: "S-fold curtains create a regular wave along a compatible track. Pleated headings create a more structured finish. The best option depends on the room, track position and preferred appearance.",
  },
  {
    q: "Can I enquire about sheer and blockout curtain layers?",
    a: "Yes. Layered sheer and blockout options can be discussed for privacy, light control and bedroom use.",
  },
  {
    q: "How long does the process take?",
    a: "Timing depends on measurement, material availability, manufacture and installation requirements. Availability is confirmed for each enquiry.",
  },
];

export const Route = createFileRoute("/curtains")({
  head: () => ({
    meta: [
      { title: "Custom Curtains Brisbane | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Explore made-to-measure S-fold, sheer, blockout, curtain track and heading enquiries for Brisbane homes.",
      },
      { property: "og:title", content: "Custom Curtains Brisbane | Brisbane Curtains Online" },
      {
        property: "og:description",
        content: "Made-to-measure curtain enquiries for Brisbane homes.",
      },
      { property: "og:url", content: absoluteUrl("/curtains") },
    ],
    links: languageLinks("/curtains", "/zh-hans/curtains", "/curtains"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Custom curtains · Brisbane"
      title="Custom curtains for Brisbane homes."
      intro="Explore three distinct curtain enquiry paths, each with its own scope, practical considerations, FAQ and related links. Final suitability, availability and pricing are confirmed after the project is reviewed."
      heroImg={installerSheer}
      heroAlt="Illustrative bedroom with sheer and blockout curtains"
      features={[
        {
          title: "S-fold curtains",
          slug: "s-fold-curtains-brisbane",
          desc: "Flowing contemporary curtains for compatible tracks and residential openings.",
          image: installerSheer,
          imageAlt: "Illustrative bedroom with sheer and blockout curtains",
          evidence: "illustrative",
        },
        {
          title: "Sheer and blockout curtains",
          slug: "sheer-blockout-curtains-brisbane",
          desc: "Layered window furnishings for privacy, softness and stronger light control.",
          image: curtainRoom,
          imageAlt: "Example Services layered curtain installation in a residential room",
          evidence: "real",
        },
        {
          title: "Curtain tracks and headings",
          slug: "curtain-tracks-headings-brisbane",
          desc: "Track position, heading style, dimensions and access considered together.",
          image: curtainDoorway,
          imageAlt: "Example Services curtain and track installation at a doorway",
          evidence: "real",
        },
      ]}
      faqs={faqs}
    />
  ),
});
