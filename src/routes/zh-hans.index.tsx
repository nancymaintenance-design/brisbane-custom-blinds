import { createFileRoute } from "@tanstack/react-router";

import { ChineseSiteLayout } from "@/components/chinese-site-layout";
import { SITE, absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import realCurtainRoom from "@/assets/example-curtain-installation-room.jpg";
import realCurtainWide from "@/assets/example-curtain-installation-wide.jpg";
import realRollerBlind from "@/assets/example-dual-roller-blind-installation.jpg";
import motorisedIllustration from "@/assets/motorised-service.jpg";
import repairsIllustration from "@/assets/repairs-service.jpg";

export const Route = createFileRoute("/zh-hans/")({
  head: () => ({
    meta: [
      { title: "布里斯班定制窗帘、百叶帘与电动窗饰 | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "布里斯班住宅定制窗帘、卷帘、百叶帘、电动窗饰和维修服务。比较采光、隐私、遮光与控制方案。",
      },
      { property: "og:title", content: "布里斯班定制窗帘、百叶帘与电动窗饰" },
      { property: "og:description", content: "按房间采光、隐私、遮光和操作需求选择窗帘与窗饰。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans") },
    ],
    links: languageLinks("/", "/zh-hans", "/zh-hans"),
  }),
  component: ChineseHome,
});

const chineseServices = [
  {
    href: "/zh-hans/curtains",
    tag: "定制窗帘",
    title: "纱帘、遮光帘与 S-fold 窗帘",
    description: "根据房间用途、采光、隐私和风格选择面料、褶型与轨道。",
    image: realCurtainWide,
    alt: "Example Services 全宽住宅窗帘项目实拍",
    evidence: "项目实拍",
  },
  {
    href: "/zh-hans/blinds",
    tag: "卷帘与百叶帘",
    title: "卷帘、双层卷帘与百叶帘",
    description: "在日间筛光、夜间隐私、遮光、清洁与操作之间找到平衡。",
    image: realRollerBlind,
    alt: "Example Services 双层卷帘项目实拍",
    evidence: "项目实拍",
  },
  {
    href: "/zh-hans/motorised-curtains",
    tag: "电动窗饰",
    title: "电动窗帘、卷帘与智能控制",
    description: "按窗户尺寸、安装空间、供电与日常操作方式比较电动方案。",
    image: motorisedIllustration,
    alt: "检查电动窗帘的服务场景示意图",
    evidence: "服务示意图",
  },
  {
    href: "/zh-hans/curtain-repairs",
    tag: "窗饰维修",
    title: "窗帘轨道、卷帘与百叶帘维修",
    description: "从卡顿、脱轨、链条和支架问题入手，判断维修或更换选择。",
    image: repairsIllustration,
    alt: "检查窗帘与百叶帘的服务场景示意图",
    evidence: "服务示意图",
  },
] as const;

function ChineseHome() {
  return (
    <ChineseSiteLayout>
      <section className="grid items-stretch overflow-hidden lg:grid-cols-12">
        <div className="order-2 flex items-center py-14 lg:order-1 lg:col-span-6 lg:py-24">
          <div className="container-luxe max-w-none lg:!pl-8 lg:!pr-14">
            <div className="eyebrow text-gold">布里斯班窗帘与窗饰</div>
            <h1 className="mt-5 font-serif text-5xl leading-[1.06] text-ink md:text-6xl lg:text-7xl">
              为家里的采光、隐私和风格，<em className="not-italic text-gold">选择合适窗饰。</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              从定制窗帘、卷帘和百叶帘，到电动控制与现有窗饰维修，我们根据房间用途、窗户条件和日常使用需求帮助您比较方案。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/zh-hans/contact" className="btn-gold">
                获取报价
              </a>
              <a href={SITE.phoneHref} className="btn-outline-gold">
                电话 {SITE.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-foreground/75 sm:grid-cols-3">
              <div>分享窗户照片和尺寸</div>
              <div>比较采光与隐私方案</div>
              <div>讨论产品与项目安排</div>
            </div>
          </div>
        </div>
        <div className="relative order-1 min-h-[420px] lg:order-2 lg:col-span-6 lg:min-h-[680px]">
          <img
            src={realCurtainRoom}
            alt="Example Services 住宅窗帘项目实拍"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[oklch(0.955_0.014_82)] py-20 lg:py-28">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <div className="eyebrow text-gold">产品与服务</div>
            <h2 className="mt-3 font-serif text-4xl text-ink lg:text-5xl">
              从房间用途和窗户问题开始选择。
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              卧室、客厅、高窗和推拉门的需求不同，合适的窗饰也会不同。
            </p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {chineseServices.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group overflow-hidden border border-border/60 bg-background transition-colors hover:border-gold"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/75">
                    {service.evidence}
                  </span>
                </div>
                <div className="p-7">
                  <div className="eyebrow text-gold">{service.tag}</div>
                  <h3 className="mt-2 font-serif text-2xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 text-sm font-semibold text-gold">查看详情 →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow text-gold">开始前准备</div>
            <h2 className="mt-3 font-serif text-4xl text-ink">四项信息，就能更快比较合适方案。</h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {[
              "所在郊区",
              "房间和窗户全景照片",
              "近似宽度、高度和数量",
              "隐私、采光、遮光、操作或维修目标",
            ].map((item, index) => (
              <li key={item} className="border border-border p-6">
                <span className="eyebrow text-gold">0{index + 1}</span>
                <p className="mt-2 text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="container-luxe grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow text-gold">按房间选择</div>
            <h2 className="mt-3 font-serif text-4xl">不同空间，需要不同的光线与隐私平衡。</h2>
          </div>
          <div className="space-y-4 text-cream/75">
            <p>客厅可兼顾自然光、视野与整体风格；卧室通常更重视夜间隐私和遮光。</p>
            <p>
              高窗、大幅窗户或难以触及的位置，可以比较电动控制；现有窗饰卡顿、脱轨或部件损坏时，可先判断维修价值。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow text-gold">常见问题</div>
          <h2 className="mt-3 font-serif text-4xl text-ink">选择窗帘与窗饰时常见的问题</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {[
              [
                "纱帘与遮光帘怎么搭配？",
                "纱帘适合柔化日光和增加日间隐私，遮光帘则更适合夜间隐私和卧室遮光。双层轨道可以让两者分别开合。",
              ],
              [
                "获取窗帘或百叶帘报价需要什么？",
                "建议提供窗户照片、近似尺寸、数量、所在郊区和主要使用目标。产品与项目范围确认后，才能形成更准确的报价。",
              ],
              [
                "现有窗帘或百叶帘值得维修吗？",
                "链条、支架、轨道或操作问题有时可以维修。部件可用性、窗饰状态和维修成本会影响维修或更换的选择。",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="py-6">
                <h3 className="font-serif text-xl text-ink">{question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ChineseSiteLayout>
  );
}
