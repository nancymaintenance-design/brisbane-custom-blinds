import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, faqJsonLd } from "@/components/service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import dualRoller from "@/assets/example-dual-roller-blind-installation.jpg";
import rollerOne from "@/assets/example-roller-blind-installation-01.jpg";
import rollerTwo from "@/assets/example-roller-blind-installation-02.jpg";

const faqs = [
  {
    q: "How much do custom blinds cost in Brisbane?",
    a: "Pricing depends on the blind type, window size, fabric or finish, controls and installation access. Contact us with measurements or photos to discuss the scope.",
  },
  {
    q: "Which blind type should I consider?",
    a: "Roller, Roman, Venetian and layered blinds suit different privacy, light-control and design needs. The room and window layout help narrow the options.",
  },
  {
    q: "Can I ask about blockout and sunscreen blinds?",
    a: "Yes. Blockout, translucent and sunscreen options can be discussed according to the room and the level of privacy or light control required.",
  },
  {
    q: "How long does installation take?",
    a: "Lead time varies with product selection, measurement, manufacture and scheduling. A timeframe is confirmed after the job is assessed.",
  },
];

export const Route = createFileRoute("/blinds")({
  head: () => ({
    meta: [
      { title: "Custom Blinds Brisbane | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Explore custom blinds for Brisbane homes, including roller, dual roller, Roman and Venetian options for privacy, shade and light control.",
      },
      { property: "og:title", content: "Custom Blinds Brisbane | Brisbane Curtains Online" },
      { property: "og:description", content: "Custom blind enquiries for Brisbane homes." },
      { property: "og:url", content: absoluteUrl("/blinds") },
    ],
    links: languageLinks("/blinds", "/zh-hans/blinds", "/blinds"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Custom blinds · Brisbane"
      title="Custom blinds for Brisbane homes"
      intro="Compare roller, dual roller, Roman and Venetian blinds for privacy, shade and everyday light control. Start with the room, window dimensions and preferred finish to narrow the options."
      heroImg={rollerOne}
      heroAlt="Example Services roller blind installation in a residential window"
      features={[
        {
          title: "Roller blinds",
          slug: "roller-blinds-brisbane",
          desc: "A streamlined option for sunscreen, translucent or blockout coverage, with fit and control choices shaped by the window.",
          image: rollerOne,
          imageAlt: "Example Services roller blind installation",
          evidence: "real",
        },
        {
          title: "Dual roller blinds",
          slug: "dual-roller-blinds-brisbane",
          desc: "Pair two blind layers when daytime filtering and stronger evening privacy are both needed.",
          image: dualRoller,
          imageAlt: "Example Services dual roller blind installation",
          evidence: "real",
        },
        {
          title: "Roman and Venetian blinds",
          slug: "roman-venetian-blinds-brisbane",
          desc: "Compare soft fabric folds with adjustable slats to suit the room, cleaning preferences and desired light control.",
          image: rollerTwo,
          imageAlt: "Example Services fitted blind at a residential opening",
          evidence: "real",
        },
      ]}
      faqs={faqs}
    />
  ),
});
