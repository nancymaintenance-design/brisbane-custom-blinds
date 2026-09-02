import { createFileRoute } from "@tanstack/react-router";

import { ChineseSiteLayout } from "@/components/chinese-site-layout";
import { SITE, absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import workshop from "@/assets/about-workshop.jpg";
import realCurtain from "@/assets/example-curtain-installation-wide.jpg";
import realBlind from "@/assets/example-dual-roller-blind-installation.jpg";

export const Route = createFileRoute("/zh-hans/about")({
  head: () => ({
    meta: [
      { title: "关于 Brisbane Curtains Online | 布里斯班窗帘与窗饰" },
      {
        name: "description",
        content:
          "了解 Brisbane Curtains Online 如何帮助布里斯班住宅客户比较定制窗帘、百叶帘、电动窗饰和维修选择。",
      },
      { property: "og:title", content: "关于 Brisbane Curtains Online" },
      { property: "og:description", content: "从房间需求到窗饰选择的清晰沟通过程。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/about") },
    ],
    links: languageLinks("/about", "/zh-hans/about", "/zh-hans/about"),
  }),
  component: ChineseAbout,
});

function ChineseAbout() {
  return (
    <ChineseSiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="eyebrow text-gold">关于我们 · 布里斯班</div>
            <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
              从房间需求出发，选择合适的窗帘与窗饰。
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">
              {SITE.brand} 由 {SITE.legalName}{" "}
              运营，帮助布里斯班住宅客户了解定制窗帘、卷帘、百叶帘、电动窗饰和维修选择，并就下一步取得联系。
            </p>
            <p className="mt-5 leading-relaxed text-foreground/75">
              我们重视清晰的房间和窗户信息：采光、隐私、遮光、操作方式与现有现场条件，都会影响产品和项目选择。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/zh-hans/contact" className="btn-gold">
                联系我们
              </a>
              <a href="/zh-hans/curtains" className="btn-outline-gold">
                查看定制窗帘
              </a>
            </div>
          </div>
          <img
            src={workshop}
            alt="窗帘与窗饰工作空间示意图"
            width={1400}
            height={900}
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[oklch(0.955_0.014_82)] py-20">
        <div className="container-luxe grid gap-8 md:grid-cols-3">
          {[
            ["从房间开始", "说明房间用途、窗户尺寸、隐私和采光目标，以及希望呈现的整体风格。"],
            ["分享现场信息", "窗户全景和细节照片有助于理解轨道、窗框、操作空间及现有窗饰。"],
            ["比较下一步", "根据产品选择和项目条件，进一步确认测量、报价及相关安排。"],
          ].map(([title, description]) => (
            <div key={title} className="border border-border/60 bg-background p-7">
              <h2 className="font-serif text-2xl text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe grid gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden border border-border">
            <img
              src={realCurtain}
              alt="Example Services 住宅窗帘项目实拍"
              width={1707}
              height={1280}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-6">
              <h2 className="font-serif text-2xl text-ink">定制窗帘</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                按房间采光、隐私、遮光和风格选择面料、褶型与轨道。
              </p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden border border-border">
            <img
              src={realBlind}
              alt="Example Services 双层卷帘项目实拍"
              width={1080}
              height={1920}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-6">
              <h2 className="font-serif text-2xl text-ink">卷帘与百叶帘</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                比较筛光、遮光、隐私、清洁和操作方式，找到适合日常生活的组合。
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </ChineseSiteLayout>
  );
}
