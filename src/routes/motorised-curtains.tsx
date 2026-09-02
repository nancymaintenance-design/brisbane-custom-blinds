import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, faqJsonLd } from "@/components/service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import curtainIllustration from "@/assets/curtains-service.jpg";
import heroIllustration from "@/assets/hero-curtains.jpg";
import installerMotorised from "@/assets/motorised-service.jpg";

const faqs = [
  {
    q: "How much do motorised curtains cost in Brisbane?",
    a: "Pricing depends on opening size, curtain weight, track length, power method, control requirements and installation access. A quote requires the specific project details.",
  },
  {
    q: "Can existing curtains be motorised?",
    a: "Some existing curtains may suit a replacement motorised track, but compatibility depends on the heading, dimensions, weight and available mounting space.",
  },
  {
    q: "Can motorised curtains connect to a smart-home system?",
    a: "Compatibility varies by the selected motor and control system. Tell us which platform you use so the appropriate next step can be assessed.",
  },
  {
    q: "Is wiring required?",
    a: "Some systems use rechargeable power while others require electrical work. Any regulated electrical work must be completed by an appropriately licensed provider.",
  },
];

export const Route = createFileRoute("/motorised-curtains")({
  head: () => ({
    meta: [
      { title: "Motorised Curtains and Blinds Brisbane | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Explore motorised curtain track, motorised blind and control option enquiries for Brisbane homes.",
      },
      { property: "og:title", content: "Motorised Curtains and Blinds Brisbane" },
      {
        property: "og:description",
        content: "Motorised window furnishing enquiries for Brisbane homes.",
      },
      { property: "og:url", content: absoluteUrl("/motorised-curtains") },
    ],
    links: languageLinks(
      "/motorised-curtains",
      "/zh-hans/motorised-curtains",
      "/motorised-curtains",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Motorised window furnishings · Brisbane"
      title="Motorised curtain and blind enquiries."
      intro="Explore separate information for motorised curtain tracks, motorised blinds and control options. Compatibility and any specialist work are confirmed for the individual property."
      heroImg={installerMotorised}
      heroAlt="Illustrative living room with full-height window furnishings"
      features={[
        {
          title: "Motorised curtain tracks",
          slug: "motorised-curtain-tracks-brisbane",
          desc: "Track length, curtain weight, mounting space and power requirements considered together.",
          image: installerMotorised,
          imageAlt: "Illustrative living room with full-height window furnishings",
          evidence: "illustrative",
        },
        {
          title: "Motorised blinds",
          slug: "motorised-blinds-brisbane",
          desc: "Automated blind enquiries for compatible windows, controls and product systems.",
          image: heroIllustration,
          imageAlt: "Illustrative automated window furnishing context",
          evidence: "illustrative",
        },
        {
          title: "Curtain control options",
          slug: "curtain-control-options-brisbane",
          desc: "Compare remote, app, timer and compatible smart-home control considerations.",
          image: curtainIllustration,
          imageAlt: "Illustrative curtain control and automation context",
          evidence: "illustrative",
        },
      ]}
      faqs={faqs}
    />
  ),
});
