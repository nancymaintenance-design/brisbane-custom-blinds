import { createFileRoute, Link } from "@tanstack/react-router";

import curtainDoorway from "@/assets/example-curtain-installation-doorway.jpg";
import curtainRoom from "@/assets/example-curtain-installation-room.jpg";
import curtainWide from "@/assets/example-curtain-installation-wide.jpg";
import dualRollerBlind from "@/assets/example-dual-roller-blind-installation.jpg";
import rollerBlindOne from "@/assets/example-roller-blind-installation-01.jpg";
import rollerBlindTwo from "@/assets/example-roller-blind-installation-02.jpg";
import { SiteLayout } from "@/components/site-layout";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Curtain and Blind Installation Gallery | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "View Example Services curtain and roller blind installation examples, then discuss your Brisbane window furnishing enquiry.",
      },
      { property: "og:title", content: "Curtain and Blind Installation Gallery" },
      {
        property: "og:description",
        content:
          "Real Example Services project photography showing curtain and roller blind installation examples.",
      },
      { property: "og:url", content: absoluteUrl("/gallery") },
    ],
    links: languageLinks("/gallery", "/zh-hans/gallery", "/gallery"),
  }),
  component: Gallery,
});

const items = [
  {
    img: curtainWide,
    title: "Full-width curtain installation",
    description: "Full-height curtains fitted across a wide living-room opening.",
    alt: "Example Services full-width dark curtain installation in a living room",
    width: 1707,
    height: 1280,
  },
  {
    img: dualRollerBlind,
    title: "Dual roller blind installation",
    description: "Layered roller blinds installed to support daytime screening and light control.",
    alt: "Example Services dual roller blind installation on a wide window",
    width: 1080,
    height: 1920,
  },
  {
    img: curtainRoom,
    title: "Curtain installation in progress",
    description:
      "A room-level view showing curtains fitted around an existing fireplace and window layout.",
    alt: "Example Services curtain installation in progress around a fireplace",
    width: 1920,
    height: 1080,
  },
  {
    img: rollerBlindOne,
    title: "Roller blind fitted to a tall window",
    description: "A roller blind installed within a tall window opening in a residential interior.",
    alt: "Example Services roller blind fitted to a tall residential window",
    width: 1080,
    height: 1920,
  },
  {
    img: curtainDoorway,
    title: "Curtains across a glazed opening",
    description: "Curtain coverage shown from the adjoining room after fitting.",
    alt: "Example Services dark curtains installed across a glazed opening",
    width: 1920,
    height: 1080,
  },
  {
    img: rollerBlindTwo,
    title: "Light-filtering roller blind",
    description: "A light-toned roller blind fitted to a residential window.",
    alt: "Example Services light-toned roller blind installation",
    width: 1080,
    height: 1920,
  },
] as const;

function Gallery() {
  return (
    <SiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container-luxe">
          <div className="eyebrow text-gold">Example Services project photography</div>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-ink md:text-6xl">
            Curtain and blind installation examples.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            These genuine Example Services project photos show examples of curtain and roller blind
            work. Project locations and customer details are not published here. Contact us to
            discuss what may suit your Brisbane home.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure
              key={item.title}
              className={`overflow-hidden border border-border bg-background ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={item.img}
                alt={item.alt}
                loading={index < 2 ? "eager" : "lazy"}
                width={item.width}
                height={item.height}
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-6">
                <h2 className="font-serif text-xl text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="container-luxe mt-12 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-gold">
            Discuss your windows
          </Link>
          <p className="text-sm text-muted-foreground">
            Share room photos and approximate window sizes with your enquiry.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
