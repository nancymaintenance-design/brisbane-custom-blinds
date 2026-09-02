import { Link } from "@tanstack/react-router";

import { SiteLayout } from "./site-layout";
import { SITE } from "@/config/site";

export interface ServiceFAQ { q: string; a: string }
export interface ServiceFeature {
  title: string;
  desc: string;
  slug: string;
  image: string;
  imageAlt: string;
  evidence: "real" | "illustrative";
}

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  heroImg: string;
  heroAlt: string;
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  ctaCopy?: string;
}

export function ServicePage({ eyebrow, title, intro, heroImg, heroAlt, features, faqs, ctaCopy }: ServicePageProps) {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 py-14 lg:py-24 flex items-center">
            <div className="container-luxe lg:!pl-8 lg:!pr-14 max-w-none">
              <div className="eyebrow text-gold">{eyebrow}</div>
              <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] text-ink">{title}</h1>
              <p className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed">{intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gold">Send an enquiry</Link>
                <a href={SITE.phoneHref} className="btn-outline-gold">Call {SITE.phoneDisplay}</a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 min-h-[380px] lg:min-h-[640px] relative">
            <img src={heroImg} alt={heroAlt} width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.955_0.014_82)]">
        <div className="container-luxe">
          <div className="eyebrow text-gold">Explore this service</div>
          <h2 className="mt-3 font-serif text-4xl text-ink max-w-2xl">Choose the service page that best matches your enquiry.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.slug} to="/services/$slug" params={{ slug: feature.slug }} className="group bg-background border border-border/60 hover:border-gold transition-colors overflow-hidden">
                <img src={feature.image} alt={feature.imageAlt} width={900} height={650} className="w-full aspect-[4/3] object-cover" />
                <div className="p-7">
                  <div className="text-[0.68rem] uppercase tracking-[0.13em] text-muted-foreground">{feature.evidence === "real" ? "Example Services project photo" : "Illustrative service image"}</div>
                  <h3 className="mt-2 font-serif text-2xl text-ink group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  <div className="mt-5 text-sm font-semibold text-gold">View service details →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe max-w-3xl">
          <div className="eyebrow text-gold">Frequently asked</div>
          <h2 className="mt-3 font-serif text-4xl text-ink">Common questions from Brisbane homeowners.</h2>
          <div className="mt-10 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="py-5 group">
                <summary className="flex justify-between items-start cursor-pointer list-none">
                  <span className="font-serif text-xl text-ink pr-6">{faq.q}</span>
                  <span className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe">
          <div className="bg-ink text-cream p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-8 justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl max-w-xl">{ctaCopy ?? "Discuss your Brisbane window furnishing enquiry."}</h2>
              <p className="mt-3 text-cream/70">Contact us to confirm availability for your Brisbane property.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-outline-gold !border-cream !text-cream hover:!bg-cream hover:!text-ink">Call {SITE.phoneDisplay}</a>
              <Link to="/contact" className="btn-gold !bg-gold !border-gold !text-ink hover:!bg-cream hover:!border-cream">Send an enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function faqJsonLd(faqs: ServiceFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
