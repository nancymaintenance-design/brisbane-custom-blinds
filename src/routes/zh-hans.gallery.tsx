import { createFileRoute } from "@tanstack/react-router";

import curtainDoorway from "@/assets/example-curtain-installation-doorway.jpg";
import curtainRoom from "@/assets/example-curtain-installation-room.jpg";
import curtainWide from "@/assets/example-curtain-installation-wide.jpg";
import dualRollerBlind from "@/assets/example-dual-roller-blind-installation.jpg";
import rollerBlindOne from "@/assets/example-roller-blind-installation-01.jpg";
import rollerBlindTwo from "@/assets/example-roller-blind-installation-02.jpg";
import { ChineseSiteLayout } from "@/components/chinese-site-layout";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";

export const Route = createFileRoute("/zh-hans/gallery")({
  head: () => ({
    meta: [
      { title: "窗帘与百叶帘项目图库 | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "查看 Example Services 窗帘、双层卷帘和住宅窗饰项目实拍，了解不同窗户与房间的安装效果。",
      },
      { property: "og:title", content: "窗帘与百叶帘项目图库" },
      { property: "og:description", content: "Example Services 窗帘与卷帘项目实拍。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/gallery") },
    ],
    links: languageLinks("/gallery", "/zh-hans/gallery", "/zh-hans/gallery"),
  }),
  component: ChineseGallery,
});

const items = [
  [
    curtainWide,
    "全宽窗帘安装",
    "落地窗帘覆盖较宽的起居室开口，形成完整而统一的视觉效果。",
    "Example Services 起居室全宽深色窗帘项目实拍",
  ],
  [
    dualRollerBlind,
    "双层卷帘安装",
    "筛光与遮光卷帘组合，便于在白天采光和夜间隐私之间切换。",
    "Example Services 宽窗双层卷帘项目实拍",
  ],
  [
    curtainRoom,
    "住宅窗帘安装",
    "窗帘围绕现有壁炉与窗户布局安装，展示房间整体效果。",
    "Example Services 壁炉旁住宅窗帘项目实拍",
  ],
  [
    rollerBlindOne,
    "高窗卷帘",
    "卷帘安装在较高的住宅窗户内，保持简洁的窗框线条。",
    "Example Services 住宅高窗卷帘项目实拍",
  ],
  [
    curtainDoorway,
    "玻璃开口窗帘",
    "从相邻房间观察窗帘对玻璃开口的覆盖效果。",
    "Example Services 玻璃开口深色窗帘项目实拍",
  ],
  [
    rollerBlindTwo,
    "浅色透光卷帘",
    "浅色卷帘为住宅窗户提供柔和的采光与简洁外观。",
    "Example Services 浅色住宅卷帘项目实拍",
  ],
] as const;

function ChineseGallery() {
  return (
    <ChineseSiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container-luxe">
          <div className="eyebrow text-gold">Example Services 项目实拍</div>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-ink md:text-6xl">
            窗帘与百叶帘安装案例。
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            这些真实项目照片展示窗帘、卷帘和双层卷帘在不同住宅空间中的效果。客户资料和项目地址未在此公开。
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-luxe grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([img, title, description, alt], index) => (
            <figure
              key={title}
              className={`overflow-hidden border border-border bg-background ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={img}
                alt={alt}
                loading={index < 2 ? "eager" : "lazy"}
                width={index === 0 ? 1707 : index === 2 || index === 4 ? 1920 : 1080}
                height={index === 0 ? 1280 : index === 2 || index === 4 ? 1080 : 1920}
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-6">
                <h2 className="font-serif text-xl text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="container-luxe mt-12 flex flex-wrap items-center gap-4">
          <a href="/zh-hans/contact" className="btn-gold">
            讨论您的窗户需求
          </a>
          <p className="text-sm text-muted-foreground">
            联系时可说明房间用途、近似尺寸和希望达到的效果。
          </p>
        </div>
      </section>
    </ChineseSiteLayout>
  );
}
