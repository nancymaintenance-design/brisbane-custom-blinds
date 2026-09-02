import { createFileRoute } from "@tanstack/react-router";

import { ChineseServicePage } from "@/components/chinese-service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import dualRoller from "@/assets/example-dual-roller-blind-installation.jpg";
import rollerOne from "@/assets/example-roller-blind-installation-01.jpg";
import rollerTwo from "@/assets/example-roller-blind-installation-02.jpg";

export const Route = createFileRoute("/zh-hans/blinds")({
  head: () => ({
    meta: [
      { title: "布里斯班卷帘与百叶帘 | 遮光、隐私与采光" },
      {
        name: "description",
        content:
          "比较布里斯班住宅卷帘、双层卷帘、罗马帘和百叶帘，按房间的遮光、隐私、采光和清洁需求选择窗饰。",
      },
      { property: "og:title", content: "布里斯班卷帘与百叶帘" },
      { property: "og:description", content: "根据遮光、隐私、采光和操作方式比较合适窗饰。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/blinds") },
    ],
    links: languageLinks("/blinds", "/zh-hans/blinds", "/zh-hans/blinds"),
  }),
  component: () => (
    <ChineseServicePage
      eyebrow="布里斯班卷帘与百叶帘"
      title="按隐私、遮光和操作方式选择窗饰。"
      intro="卷帘、双层卷帘、罗马帘和百叶帘各有不同的光线控制、清洁与视觉效果。结合房间用途、朝向和窗框条件，可更准确地比较选择。"
      heroImage={rollerOne}
      heroAlt="Example Services 住宅卷帘项目实拍"
      optionsTitle="从简洁卷帘到灵活调光的百叶帘，选择适合房间的方案。"
      guideTitle="把遮光、隐私和日常维护放在一起考虑。"
      faqTitle="关于卷帘与百叶帘的常见问题"
      cards={[
        {
          title: "卷帘",
          description: "线条简洁，可按遮光、透光或防晒需求选择面料，适合多种住宅空间。",
          checklist: "房间用途、窗户朝向、透光程度、窗框位置和希望的卷向。",
          image: rollerOne,
          imageAlt: "Example Services 卷帘安装项目实拍",
          evidence: "real",
        },
        {
          title: "双层卷帘",
          description: "将日间筛光与夜间遮光组合在同一窗户上，便于在不同时间切换。",
          checklist: "窗框顶部空间、开窗方式、白天采光和夜间隐私目标。",
          image: dualRoller,
          imageAlt: "Example Services 双层卷帘安装项目实拍",
          evidence: "real",
        },
        {
          title: "罗马帘与百叶帘",
          description: "罗马帘强调柔和层次，百叶帘便于调节光线；外观、清洁和操作方式各有特点。",
          checklist: "房间风格、清洁频率、潮湿程度、开窗方式和光线调节需求。",
          image: rollerTwo,
          imageAlt: "Example Services 住宅窗饰项目实拍",
          evidence: "real",
        },
      ]}
      faqs={[
        {
          question: "遮光卷帘和防晒卷帘怎么选？",
          answer:
            "卧室通常更重视遮光与夜间隐私，起居区则可能希望保留自然光和户外视野。房间用途与朝向是重要判断依据。",
        },
        {
          question: "双层卷帘需要更大的安装空间吗？",
          answer:
            "双层系统通常需要容纳两套帘布和卷管，实际空间要结合窗框顶部、安装方式和开窗结构确认。",
        },
        {
          question: "百叶帘和卷帘哪一种更容易清洁？",
          answer:
            "卷帘表面较完整，百叶帘有多片叶片。清洁难度还与材料、使用环境和灰尘或潮湿程度有关。",
        },
        {
          question: "现有卷帘或百叶帘可以维修吗？",
          answer:
            "部分链条、支架、轨道或操作问题可能适合维修。请提供故障位置和部件照片，以便先判断零件及维修可行性。",
        },
      ]}
      guidance={
        <div className="space-y-4">
          <p>
            卧室可以优先考虑遮光与夜间隐私；客厅和餐区则可在防眩光、自然光和户外视野之间寻找平衡。
          </p>
          <p>
            厨房、浴室等空间还应考虑清洁和潮湿环境。产品类型、材料与安装位置需要结合具体窗户确认。
          </p>
        </div>
      }
    />
  ),
});
