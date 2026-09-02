import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { SalesTeamTeaser } from "@/components/sales-team";
import { SITE, absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import curtainsServiceImg from "@/assets/curtains-service.jpg";
import motorisedServiceImg from "@/assets/motorised-service.jpg";
import repairsServiceImg from "@/assets/repairs-service.jpg";
import realCurtainWide from "@/assets/example-curtain-installation-wide.jpg";
import realCurtainRoom from "@/assets/example-curtain-installation-room.jpg";
import realRollerBlind from "@/assets/example-dual-roller-blind-installation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Curtains Brisbane | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Explore custom curtain options for Brisbane homes, including sheers, blockout curtains and related window furnishing enquiries. Call +61 400 000 000.",
      },
      { property: "og:title", content: "Custom Curtains Brisbane | Brisbane Curtains Online" },
      {
        property: "og:description",
        content: "Discuss custom curtain and window furnishing enquiries for your Brisbane home.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: languageLinks("/", "/zh-hans", "/"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.brand,
          legalName: SITE.legalName,
          identifier: `ABN ${SITE.abn}`,
          url: SITE.siteUrl,
          logo: absoluteUrl("/example-favicon-512.png"),
          telephone: "+61 482 602 558",
          email: SITE.email,
          areaServed: { "@type": "City", name: SITE.city },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+61 482 602 558",
            contactType: "customer enquiries",
            areaServed: "AU",
            availableLanguage: ["English", "Chinese"],
          },
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    to: "/curtains",
    img: curtainsServiceImg,
    alt: "Illustrative bedroom with sheer and blockout curtains",
    isReal: false,
    tag: "Custom curtains",
    title: "Sheer, S-fold and blockout curtain enquiries",
    desc: "Discuss privacy, light control, room style, fabric preferences and suitable curtain headings for your Brisbane home.",
  },
  {
    to: "/blinds",
    img: realRollerBlind,
    alt: "Example Services dual roller blind installation",
    isReal: true,
    tag: "Window furnishings",
    title: "Custom blinds for Brisbane homes",
    desc: "Compare roller, dual roller, Roman and Venetian blind options for privacy, shade and everyday light control.",
  },
  {
    to: "/motorised-curtains",
    img: motorisedServiceImg,
    alt: "Illustrative living room with full-height window furnishings",
    isReal: false,
    tag: "Motorisation",
    title: "Motorised curtain enquiries",
    desc: "Discuss access, power, controls and compatibility before choosing a motorised curtain or blind solution.",
  },
  {
    to: "/curtain-repairs",
    img: repairsServiceImg,
    alt: "Illustrative curtain and blind service scene",
    isReal: false,
    tag: "Repairs",
    title: "Curtain and blind repair enquiries",
    desc: "Describe the track, cord, heading, blind or curtain issue so availability and an appropriate next step can be confirmed.",
  },
] as const;

const outcomeLinks = [
  {
    to: "/curtains",
    eyebrow: "Privacy without losing daylight",
    title: "Sheer and layered curtain options",
    description: "Start with the room, privacy level and amount of natural light you want to keep.",
  },
  {
    to: "/curtains",
    eyebrow: "Darker bedrooms and media rooms",
    title: "Blockout curtain enquiries",
    description:
      "Discuss window coverage, lining, tracks and the level of light reduction you are seeking.",
  },
  {
    to: "/motorised-curtains",
    eyebrow: "High or wide openings",
    title: "Motorised operation",
    description:
      "Share opening dimensions, access and control preferences so compatibility can be assessed.",
  },
  {
    to: "/curtain-repairs",
    eyebrow: "Tracks, cords or fittings not working",
    title: "Repair and alteration enquiries",
    description:
      "Send clear photos of the affected component so repair feasibility and parts can be discussed.",
  },
] as const;

const projectExamples = [
  {
    img: realCurtainWide,
    title: "Full-width curtain installation",
    description: "Full-height curtains fitted across a wide residential opening.",
    alt: "Example Services full-width dark curtain installation in a living room",
    width: 1707,
    height: 1280,
  },
  {
    img: realCurtainRoom,
    title: "Curtain installation in progress",
    description: "A room-level view of curtain fitting around an existing window layout.",
    alt: "Example Services curtain installation in progress around a fireplace",
    width: 1920,
    height: 1080,
  },
  {
    img: realRollerBlind,
    title: "Dual roller blind installation",
    description: "Layered roller blinds fitted for screening and light control.",
    alt: "Example Services dual roller blind installation on a wide window",
    width: 1080,
    height: 1920,
  },
] as const;

function Home() {
  return (
    <SiteLayout>
      <section className="grid lg:grid-cols-12 items-stretch overflow-hidden">
        <div className="lg:col-span-6 order-2 lg:order-1 flex items-center py-14 lg:py-24">
          <div className="container-luxe lg:!pl-8 lg:!pr-14 max-w-none">
            <div className="eyebrow text-gold">Custom curtains · Brisbane</div>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-ink">
              Custom curtains for <em className="text-gold not-italic">Brisbane homes.</em>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed">
              Tell us about your windows, light-control needs and preferred look. Brisbane Curtains
              Online helps customers start a clear conversation about made-to-measure curtains and
              related window furnishings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Request a measure &amp; quote
              </Link>
              <a href={SITE.phoneHref} className="btn-outline-gold">
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-foreground/75">
              <div>Share window sizes and photos</div>
              <div>Discuss fabric and light control</div>
              <div>Confirm scope and availability</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 relative min-h-[420px] lg:min-h-[680px]">
          <img
            src={realCurtainRoom}
            alt="Example Services curtain installation in a residential room"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[oklch(0.955_0.014_82)]">
        <div className="container-luxe">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow text-gold">Curtain and window furnishing enquiries</div>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink">
              Start with the right option for each window.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The site focuses on custom curtains in Brisbane, with related window furnishing and
              repair enquiries available for discussion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group block bg-background border border-border/60 hover:border-gold transition-colors"
              >
                <div className="relative">
                  <img
                    src={service.img}
                    alt={service.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  {!service.isReal && (
                    <span className="absolute bottom-3 left-3 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-foreground/75">
                      Illustrative service image
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <div className="eyebrow text-gold">{service.tag}</div>
                  <h3 className="mt-2 font-serif text-2xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-5 text-xs tracking-[0.2em] uppercase text-ink group-hover:text-gold">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="eyebrow text-gold">Real project photography</div>
              <h2 className="mt-3 font-serif text-4xl text-ink lg:text-5xl">
                Example Services installation examples.
              </h2>
            </div>
            <p className="text-muted-foreground lg:justify-self-end">
              Genuine project images supplied by Example Services. Project locations and customer
              details are not published here.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projectExamples.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden border border-border bg-background"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-6">
                  <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/gallery" className="btn-outline-gold">
              View the project gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="eyebrow text-gold">Choose by outcome</div>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-ink">
                Match the window to the result you need.
              </h2>
            </div>
            <p className="max-w-2xl text-muted-foreground lg:justify-self-end">
              You do not need to know the product name before enquiring. Start with the room, the
              problem and the result you want, then follow the most relevant path.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {outcomeLinks.map((item) => (
              <Link
                key={`${item.to}-${item.eyebrow}`}
                to={item.to}
                className="group bg-background p-7 transition-colors hover:bg-[oklch(0.955_0.014_82)] md:p-9"
              >
                <div className="eyebrow text-gold">{item.eyebrow}</div>
                <h3 className="mt-3 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-5 text-xs uppercase tracking-[0.18em] text-ink group-hover:text-gold">
                  Explore this option →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[oklch(0.955_0.014_82)]">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow text-gold">A useful first enquiry</div>
            <h2 className="mt-3 font-serif text-4xl text-ink">What to send us</h2>
          </div>
          <ol className="grid sm:grid-cols-2 gap-5">
            {[
              "Your Brisbane suburb",
              "Approximate window sizes",
              "Photos of the room and windows",
              "Preferred style, privacy and light control",
            ].map((item, index) => (
              <li key={item} className="border border-border p-6">
                <span className="eyebrow text-gold">0{index + 1}</span>
                <p className="mt-2 text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-ink text-cream">
        <div className="container-luxe grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow text-gold">Brisbane service area</div>
            <h2 className="mt-3 font-serif text-4xl">
              Availability confirmed for your suburb and project.
            </h2>
          </div>
          <p className="text-cream/75">
            Send your suburb with the enquiry. We will confirm whether the requested curtain or
            window furnishing work is available for your location.
          </p>
        </div>
      </section>

      <SalesTeamTeaser />

      <section className="py-20">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow text-gold">Common questions</div>
          <h2 className="mt-3 font-serif text-4xl text-ink">Custom curtains in Brisbane</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {[
              [
                "What information helps with a curtain enquiry?",
                "Window photos, approximate measurements, your suburb and a short description of the privacy, light-control and style outcome you want are useful starting points.",
              ],
              [
                "Can I ask about sheers and blockout curtains?",
                "Yes. Describe the room and desired balance of daylight, privacy and darkness so suitable options can be discussed.",
              ],
              [
                "Do you publish fixed prices online?",
                "No. Pricing depends on dimensions, fabric, heading, track, access, installation and any related requirements. Contact us to discuss the scope.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="py-6">
                <h3 className="font-serif text-xl text-ink">{q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxe">
          <div className="border border-border p-10 md:p-14 bg-[oklch(0.955_0.014_82)] flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-ink">Ready to discuss your windows?</h2>
              <p className="mt-2 text-muted-foreground">
                Call or prepare an email with your project details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-outline-gold">
                Call {SITE.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-gold">
                Request a measure &amp; quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
