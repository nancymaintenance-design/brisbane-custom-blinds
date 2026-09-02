import { createFileRoute } from "@tanstack/react-router";

import { ChineseServicePage } from "@/components/chinese-service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import curtainDoorway from "@/assets/example-curtain-installation-doorway.jpg";
import curtainRoom from "@/assets/example-curtain-installation-room.jpg";
import installerSheer from "@/assets/curtains-service.jpg";

export const Route = createFileRoute("/zh-hans/curtains")({
  head: () => ({
    meta: [
      { title: "布里斯班定制窗帘 | 纱帘、遮光帘与 S-fold 窗帘" },
      {
        name: "description",
        content:
          "了解布里斯班住宅纱帘、遮光帘、S-fold 窗帘、窗帘轨道及搭配方案。按采光、隐私和房间风格选择合适窗帘。",
      },
      { property: "og:title", content: "布里斯班定制窗帘" },
      { property: "og:description", content: "比较纱帘、遮光帘、S-fold 窗帘及轨道选择。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/curtains") },
    ],
    links: languageLinks("/curtains", "/zh-hans/curtains", "/zh-hans/curtains"),
  }),
  component: () => (
    <ChineseServicePage
      eyebrow="布里斯班定制窗帘"
      title="用窗帘平衡采光、隐私和房间风格。"
      intro="从轻柔透光的纱帘到卧室遮光帘和整齐的 S-fold 造型，可按房间用途、窗户尺寸与日常使用方式搭配。面料、轨道和最终报价需结合尺寸与现场条件确定。"
      heroImage={curtainRoom}
      heroAlt="Example Services 住宅定制窗帘项目实拍"
      optionsTitle="根据房间用途搭配面料、遮光程度和窗帘轨道。"
      guideTitle="先确定房间要解决的问题，再选择窗帘组合。"
      faqTitle="关于定制窗帘的常见问题"
      cards={[
        {
          title: "纱帘与 S-fold 窗帘",
          description: "柔化自然光、增加日间隐私，并用规则波浪营造简洁的室内线条。",
          checklist: "房间朝向、日间隐私、窗宽、轨道位置和希望呈现的垂坠效果。",
          image: installerSheer,
          imageAlt: "纱帘与遮光帘卧室场景示意图",
          evidence: "illustrative",
        },
        {
          title: "纱帘加遮光帘",
          description: "双层组合兼顾日间柔光和夜间遮光，适合卧室、起居室等需要灵活控制光线的空间。",
          checklist: "房间用途、朝向、夜间遮光目标、窗边空间和开合方向。",
          image: curtainRoom,
          imageAlt: "Example Services 双层住宅窗帘项目实拍",
          evidence: "real",
        },
        {
          title: "轨道与帘头",
          description: "顶装或墙装、褶型、轨道长度和开合方向会影响窗帘的外观与使用体验。",
          checklist: "窗顶与墙面条件、已有轨道、窗帘重量、开合方向和周边遮挡物。",
          image: curtainDoorway,
          imageAlt: "Example Services 窗帘轨道项目实拍",
          evidence: "real",
        },
      ]}
      faqs={[
        {
          question: "纱帘和遮光帘可以一起安装吗？",
          answer:
            "可以考虑双层轨道，让纱帘和遮光帘分别开合。实际所需空间、轨道和面料组合要根据窗户及安装位置确认。",
        },
        {
          question: "S-fold 窗帘适合哪些房间？",
          answer:
            "S-fold 适合希望获得整齐波浪和简洁视觉效果的空间。窗宽、轨道位置、窗帘重量和家具布局都会影响最终方案。",
        },
        {
          question: "定制窗帘报价需要哪些信息？",
          answer:
            "建议先提供所在郊区、窗户照片、近似宽高、数量、房间用途，以及对采光、隐私、遮光和款式的要求。",
        },
        {
          question: "定制窗帘多久可以完成？",
          answer:
            "时间取决于测量、面料与轨道选择、制作和项目安排。具体周期会在产品及项目范围确认后说明。",
        },
      ]}
      guidance={
        <div className="space-y-4">
          <p>
            客厅通常更重视自然光、视野和整体风格；卧室则更关注夜间隐私与遮光。先明确主要目标，有助于决定单层、双层及面料厚度。
          </p>
          <p>如果窗户靠近推拉门、空调出风口或大型家具，也应在选择轨道位置和开合方向时一并考虑。</p>
        </div>
      }
    />
  ),
});
