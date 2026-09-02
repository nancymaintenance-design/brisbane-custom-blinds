import type { ReactNode } from "react";

import { ChineseSiteLayout } from "./chinese-site-layout";
import { SITE } from "@/config/site";

export interface ChineseServiceCard {
  title: string;
  description: string;
  checklist: string;
  image: string;
  imageAlt: string;
  evidence: "real" | "illustrative";
}

export interface ChineseFAQ {
  question: string;
  answer: string;
}

export function ChineseServicePage({
  eyebrow,
  title,
  intro,
  heroImage,
  heroAlt,
  cards,
  faqs,
  guidance,
  optionsTitle,
  guideTitle,
  faqTitle,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  cards: ChineseServiceCard[];
  faqs: ChineseFAQ[];
  guidance: ReactNode;
  optionsTitle: string;
  guideTitle: string;
  faqTitle: string;
}) {
  return (
    <ChineseSiteLayout>
      <section className="relative">
        <div className="grid lg:grid-cols-12">
          <div className="flex items-center py-14 lg:col-span-6 lg:py-24">
            <div className="container-luxe max-w-none lg:!pl-8 lg:!pr-14">
              <div className="eyebrow text-gold">{eyebrow}</div>
              <h1 className="mt-5 font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">{intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/zh-hans/contact" className="btn-gold">
                  获取报价
                </a>
                <a href={SITE.phoneHref} className="btn-outline-gold">
                  电话 {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px] lg:col-span-6 lg:min-h-[640px]">
            <img
              src={heroImage}
              alt={heroAlt}
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.955_0.014_82)] py-20">
        <div className="container-luxe">
          <div className="eyebrow text-gold">产品选择</div>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-ink">{optionsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden border border-border/60 bg-background"
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    width={900}
                    height={650}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/75">
                    {card.evidence === "real" ? "Example Services 项目实拍" : "产品场景示意图"}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-sm text-foreground/75">
                    <strong className="text-ink">选择时可考虑：</strong>
                    {card.checklist}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow text-gold">选择指南</div>
            <h2 className="mt-3 font-serif text-4xl text-ink">{guideTitle}</h2>
          </div>
          <div className="text-base leading-relaxed text-foreground/75">{guidance}</div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe max-w-3xl">
          <div className="eyebrow text-gold">常见问题</div>
          <h2 className="mt-3 font-serif text-4xl text-ink">{faqTitle}</h2>
          <div className="mt-10 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between">
                  <span className="pr-6 font-serif text-xl text-ink">{faq.question}</span>
                  <span className="text-2xl leading-none text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxe">
          <div className="flex flex-col justify-between gap-8 bg-ink p-10 text-cream md:flex-row md:items-center md:p-16">
            <div>
              <h2 className="max-w-2xl font-serif text-3xl md:text-4xl">
                准备好改善家里的采光、隐私或窗饰操作方式了吗？
              </h2>
              <p className="mt-3 text-cream/70">
                告诉我们窗户所在房间、近似尺寸和希望改善的问题，我们会与您讨论合适选项。
              </p>
            </div>
            <a
              href="/zh-hans/contact"
              className="btn-gold !border-gold !bg-gold !text-ink hover:!border-cream hover:!bg-cream"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>
    </ChineseSiteLayout>
  );
}
