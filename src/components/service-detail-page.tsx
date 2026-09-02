import { Link } from "@tanstack/react-router";

import { SiteLayout } from "./site-layout";
import { SITE } from "@/config/site";
import { getRelatedServiceDetails, getServiceDepth, type ServiceDetail } from "@/data/service-details";

export function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  const related = getRelatedServiceDetails(detail);
  const depth = getServiceDepth(detail);

  return (
    <SiteLayout>
      <div>
        <section className="py-14 lg:py-20 border-b border-border">
          <div className="container-luxe">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to={detail.hubPath}>← {detail.category}</Link>
            </nav>
            <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="eyebrow text-gold">{detail.category} · Brisbane</div>
                <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.04] text-ink">{detail.title}</h1>
                <p className="mt-6 text-lg leading-relaxed text-foreground/75">{detail.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-gold">Send an enquiry</Link>
                  <a href={SITE.phoneHref} className="btn-outline-gold">Call {SITE.phoneDisplay}</a>
                </div>
              </div>
              <figure>
                <img src={detail.image} alt={detail.imageAlt} width={1200} height={900} className="w-full aspect-[4/3] object-cover rounded-sm" />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">{detail.evidence}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[oklch(0.955_0.014_82)]">
          <div className="container-luxe grid lg:grid-cols-2 gap-8">
            <InfoList title={detail.scopeTitle} items={detail.scope} />
            <InfoList title={detail.assessmentTitle} items={detail.assessment} />
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container-luxe">
            <div className="max-w-3xl">
              <div className="eyebrow text-gold">Selection and diagnosis</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-ink">{depth.decisionTitle}</h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/70">{depth.decisionIntro}</p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {depth.decisionCards.map((card) => (
                <article key={card.title} className="bg-card border border-border p-7">
                  <h3 className="font-serif text-2xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{card.summary}</p>
                  <p className="mt-5 pt-5 border-t border-border text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-ink">Check:</span> {card.check}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-[oklch(0.955_0.014_82)]">
          <div className="container-luxe">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
              <InfoList title={depth.fitTitle} items={depth.fitSignals} />
              <InfoList title="What shapes the written quote" items={depth.quoteFactors} />
            </div>
            <div className="mt-8 grid lg:grid-cols-2 gap-8">
              <InfoList title="What the enquiry process can include" items={depth.inclusions} />
              <InfoList title="Important limits to confirm" items={depth.boundaries} />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container-luxe">
            <div className="max-w-3xl">
              <div className="eyebrow text-gold">Evidence and verification</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-ink">{depth.evidenceTitle}</h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/70">{depth.evidenceIntro}</p>
            </div>
            {depth.evidenceImages.length > 0 ? (
              <div className="mt-10 grid md:grid-cols-3 gap-5">
                {depth.evidenceImages.map((item) => (
                  <figure key={item.image} className="bg-card border border-border overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <figcaption className="p-5 text-sm leading-relaxed text-muted-foreground">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-9 border-l-4 border-gold bg-card p-7 md:p-8 max-w-3xl">
                <h3 className="font-serif text-2xl text-ink">What to send for a useful first review</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Send one photo showing the full opening or product, one close-up of the relevant fitting or fault, and any visible brand or component label. This supports a grounded discussion without presenting an illustrative image as project evidence.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="container-luxe">
            <div className="eyebrow text-gold">How the enquiry works</div>
            <h2 className="mt-3 font-serif text-4xl text-ink">A clear path from photos to next steps.</h2>
            <div className="mt-9 grid md:grid-cols-3 gap-5">
              {detail.process.map((step, index) => (
                <div key={step.title} className="border border-border p-7">
                  <div className="text-gold text-sm font-semibold">0{index + 1}</div>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[oklch(0.955_0.014_82)]">
          <div className="container-luxe max-w-3xl">
            <div className="eyebrow text-gold">Frequently asked</div>
            <h2 className="mt-3 font-serif text-4xl text-ink">Questions about {detail.title.toLowerCase()}.</h2>
            <div className="mt-8 divide-y divide-border">
              {detail.faqs.map((faq) => (
                <details key={faq.q} className="py-5 group">
                  <summary className="flex justify-between gap-5 cursor-pointer list-none font-serif text-xl text-ink">
                    {faq.q}<span className="text-gold group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-luxe">
            <h2 className="font-serif text-3xl text-ink">Related {detail.category.toLowerCase()} enquiries</h2>
            <div className="mt-7 grid md:grid-cols-2 gap-5">
              {related.map((item) => (
                <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="group border border-border p-6 hover:border-gold transition-colors">
                  <div className="font-serif text-2xl text-ink group-hover:text-gold transition-colors">{item.title}</div>
                  <div className="mt-3 text-sm text-muted-foreground">View service details →</div>
                </Link>
              ))}
            </div>
            <div className="mt-10 bg-ink text-cream p-9 md:p-12 flex flex-col md:flex-row gap-7 md:items-center justify-between">
              <div>
                <h2 className="font-serif text-3xl">Have an opening or fault to discuss?</h2>
                <p className="mt-2 text-cream/70">Send photos and the Brisbane suburb so the enquiry can be reviewed.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/gallery" className="btn-outline-gold !border-cream !text-cream">View gallery</Link>
                <Link to="/contact" className="btn-gold">Send an enquiry</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-background p-8 border border-border/70">
      <h2 className="font-serif text-3xl text-ink">{title}</h2>
      <ul className="mt-6 space-y-3 text-sm text-foreground/75">
        {items.map((item) => <li key={item} className="flex gap-3"><span className="text-gold">•</span><span>{item}</span></li>)}
      </ul>
    </div>
  );
}
