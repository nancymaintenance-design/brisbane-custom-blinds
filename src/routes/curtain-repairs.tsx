import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, faqJsonLd } from "@/components/service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import blindIllustration from "@/assets/blinds-service.jpg";
import curtainIllustration from "@/assets/curtains-service.jpg";
import installerRepairs from "@/assets/repairs-service.jpg";

const faqs = [
  {
    q: "Can I enquire about curtains or blinds supplied elsewhere?",
    a: "Yes. Send photos of the product, the fault and the full window so repair feasibility can be assessed.",
  },
  {
    q: "How much does a curtain or blind repair cost?",
    a: "Cost depends on the fault, product, parts, access and whether work can be completed in place. No fixed amount is stated until the job is assessed.",
  },
  {
    q: "Can broken blind cords or mechanisms be repaired?",
    a: "Some cords, chains and mechanisms can be repaired or replaced. Clear photos and product details help determine the likely next step.",
  },
  {
    q: "Can curtains be shortened or altered?",
    a: "Alteration feasibility depends on the fabric, lining, heading and required finished length. Send measurements and photos for review.",
  },
];

export const Route = createFileRoute("/curtain-repairs")({
  head: () => ({
    meta: [
      { title: "Curtain & Blind Repairs Brisbane | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Need help with curtain tracks, blind mechanisms or curtain alterations? Explore repair options in Brisbane and send photos for an initial service-scope review.",
      },
      { property: "og:title", content: "Curtain and Blind Repairs Brisbane" },
      {
        property: "og:description",
        content: "Curtain and blind repair enquiries for Brisbane homes.",
      },
      { property: "og:url", content: absoluteUrl("/curtain-repairs") },
    ],
    links: languageLinks("/curtain-repairs", "/zh-hans/curtain-repairs", "/curtain-repairs"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Curtain and blind repairs · Brisbane"
      title="Curtain and blind repairs in Brisbane."
      intro="Explore separate repair and alteration paths for tracks, blind mechanisms and existing curtains. Feasibility, parts, access and availability are confirmed after review."
      heroImg={installerRepairs}
      heroAlt="Illustrative curtain and blind service scene"
      features={[
        {
          title: "Curtain track repairs",
          slug: "curtain-track-repairs-brisbane",
          desc: "Track, bracket, runner and mounting issues assessed from clear fault photos.",
          image: installerRepairs,
          imageAlt: "Illustrative curtain and blind service scene",
          evidence: "illustrative",
        },
        {
          title: "Blind mechanism repairs",
          slug: "blind-mechanism-repairs-brisbane",
          desc: "Cord, chain and operating faults reviewed for compatible parts and access.",
          image: blindIllustration,
          imageAlt: "Illustrative blind mechanism repair context",
          evidence: "illustrative",
        },
        {
          title: "Curtain alterations and care",
          slug: "curtain-alterations-care-brisbane",
          desc: "Hemming, lining, heading and care enquiries for existing curtains.",
          image: curtainIllustration,
          imageAlt: "Illustrative curtain alteration and care context",
          evidence: "illustrative",
        },
      ]}
      faqs={faqs}
    />
  ),
});
