import { Link } from "@tanstack/react-router";

import memberPortrait from "@/assets/sales-team-ai-placeholders/team-member-02.webp";
import { SITE } from "@/config/site";

const SALES_TEAM = [
  {
    name: "Redacted Person",
    phoneDisplay: "+61 400 000 000",
    phoneHref: "tel:+61 400 000 000",
    email: "contact@example.com",
    portrait: memberPortrait,
  },
  {
    name: "Redacted Person",
    phoneDisplay: "+61 400 000 000",
    phoneHref: "tel:+61 400 000 000",
    email: SITE.email,
    portrait: memberPortrait,
  },
  {
    name: "Redacted Person",
    phoneDisplay: "+61 400 000 000",
    phoneHref: "tel:+61 400 000 000",
    email: "contact@example.com",
    portrait: memberPortrait,
  },
  {
    name: "Redacted Person",
    phoneDisplay: "+61 400 000 000",
    phoneHref: "tel:+61 400 000 000",
    email: "contact@example.com",
    portrait: memberPortrait,
  },
  {
    name: "Redacted Person",
    phoneDisplay: "+61 400 000 000",
    phoneHref: "tel:+61 400 000 000",
    email: "contact@example.com",
    portrait: memberPortrait,
  },
  {
    name: "Redacted Person",
    phoneDisplay: "+61 400 000 000",
    phoneHref: "tel:+61 400 000 000",
    email: "contact@example.com",
    portrait: memberPortrait,
  },
] as const;

export function SalesTeamSection() {
  return (
    <section id="sales-team" className="scroll-mt-28 py-20 lg:py-28">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <div className="eyebrow text-gold">Sales &amp; enquiries</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            Speak with our Brisbane enquiry team.
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Choose a team contact to discuss curtains, blinds, measurements, product options or the
            next step for your Brisbane property. Availability and project details are confirmed
            during the enquiry.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SALES_TEAM.map((person) => (
            <article
              key={person.name}
              className="group overflow-hidden border border-border/70 bg-background shadow-[0_12px_35px_rgba(37,31,24,0.06)]"
            >
              <img
                src={person.portrait}
                alt={`Illustrative profile portrait for ${person.name}`}
                width={720}
                height={720}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="p-6">
                <div className="eyebrow text-gold">Sales &amp; enquiries</div>
                <h3 className="mt-2 font-serif text-3xl text-ink">{person.name}</h3>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href={person.phoneHref}
                    className="block font-medium text-ink underline decoration-gold/40 underline-offset-4 hover:text-gold"
                    aria-label={`Call ${person.name} on ${person.phoneDisplay}`}
                  >
                    {person.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="block break-all text-muted-foreground underline decoration-gold/40 underline-offset-4 hover:text-gold"
                    aria-label={`Email ${person.name}`}
                  >
                    {person.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Profile portraits are AI-generated illustrations used for visual presentation and are not
          photographs of the named team members.
        </p>
      </div>
    </section>
  );
}

export function SalesTeamTeaser() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-luxe">
        <div className="grid items-center gap-10 border border-border bg-[oklch(0.955_0.014_82)] p-8 md:p-12 lg:grid-cols-[auto_1fr_auto]">
          <div className="flex -space-x-3" aria-hidden="true">
            {SALES_TEAM.slice(0, 4).map((person) => (
              <img
                key={person.name}
                src={person.portrait}
                alt=""
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
                className="size-16 rounded-full border-2 border-background object-cover md:size-20"
              />
            ))}
          </div>
          <div>
            <div className="eyebrow text-gold">A person to contact</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink">
              Meet our sales and enquiry contacts.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Find a direct phone number or email address for a member of the Brisbane enquiry team.
              Profile portraits are illustrative.
            </p>
          </div>
          <Link to="/about" hash="sales-team" className="btn-gold whitespace-nowrap">
            View team contacts
          </Link>
        </div>
      </div>
    </section>
  );
}
