import { createFileRoute } from "@tanstack/react-router";

import { ChineseServicePage } from "@/components/chinese-service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import blindIllustration from "@/assets/blinds-service.jpg";
import curtainIllustration from "@/assets/curtains-service.jpg";
import installerRepairs from "@/assets/repairs-service.jpg";

export const Route = createFileRoute("/zh-hans/curtain-repairs")({
  head: () => ({
    meta: [
      { title: "布里斯班窗帘与百叶帘维修 | 轨道、链条与操作故障" },
      {
        name: "description",
        content:
          "了解布里斯班窗帘轨道、卷帘链条、百叶帘操作机构和窗帘修改等维修选择。发送故障照片以便初步判断。",
      },
      { property: "og:title", content: "布里斯班窗帘与百叶帘维修" },
      { property: "og:description", content: "窗帘轨道、卷帘链条、百叶帘机构和窗帘修改维修选择。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/curtain-repairs") },
    ],
    links: languageLinks(
      "/curtain-repairs",
      "/zh-hans/curtain-repairs",
      "/zh-hans/curtain-repairs",
    ),
  }),
  component: () => (
    <ChineseServicePage
      eyebrow="布里斯班窗帘与百叶帘维修"
      title="让卡顿、脱轨或损坏的窗饰恢复顺畅使用。"
      intro="窗帘轨道、支架、卷帘链条和百叶帘操作机构出现问题时，可先从故障位置、产品状态和零件可用性判断维修或更换方向。"
      heroImage={installerRepairs}
      heroAlt="窗帘与百叶帘服务场景示意图"
      optionsTitle="按故障位置区分轨道、操作机构和窗帘本身的问题。"
      guideTitle="清晰的全景与故障特写，有助于先判断维修价值。"
      faqTitle="关于窗帘与百叶帘维修的常见问题"
      cards={[
        {
          title: "窗帘轨道维修",
          description: "检查轨道卡顿、滑轮或挂钩脱落、支架松动和开合不顺等问题。",
          checklist: "整扇窗户照片、轨道与支架特写、故障位置和开合时的表现。",
          image: installerRepairs,
          imageAlt: "窗帘与百叶帘服务场景示意图",
          evidence: "illustrative",
        },
        {
          title: "百叶帘与卷帘机构",
          description: "链条、拉绳、支架或操作机构损坏时，先核对产品类型和兼容零件。",
          checklist: "产品全景、链条或机构特写、品牌或标签，以及是否仍能部分操作。",
          image: blindIllustration,
          imageAlt: "百叶帘操作机构维修场景示意图",
          evidence: "illustrative",
        },
        {
          title: "窗帘修改与护理",
          description: "窗帘过长、帘头或里衬需要调整时，可比较修改与更换的成本和效果。",
          checklist: "窗帘正反面、帘头和里衬照片、现有长度及希望达到的成品长度。",
          image: curtainIllustration,
          imageAlt: "窗帘修改与护理场景示意图",
          evidence: "illustrative",
        },
      ]}
      faqs={[
        {
          question: "其他商家提供的窗帘或百叶帘也能咨询维修吗？",
          answer:
            "可以先发送产品、故障位置和整扇窗户的照片。是否适合维修取决于产品状态、零件、现场条件和服务范围。",
        },
        {
          question: "窗帘或百叶帘维修大概多少钱？",
          answer:
            "费用取决于故障、产品、零件、现场操作空间，以及能否原位完成。需要先了解具体问题后再确定。",
        },
        {
          question: "断裂的链条或操作机构可以更换吗？",
          answer: "部分链条、拉绳和机构可以维修或更换。清晰的部件照片及产品信息有助于核对兼容性。",
        },
        {
          question: "窗帘太长可以改短吗？",
          answer: "能否修改取决于面料、里衬、帘头和需要达到的成品长度。请提供照片和尺寸以便判断。",
        },
      ]}
      guidance={
        <div className="space-y-4">
          <p>
            拍摄一张包含整扇窗户的照片，再补充轨道、支架、链条或破损位置的近照。若有品牌标签、零件编号或购买资料，也可以一并提供。
          </p>
          <p>
            当窗饰整体老化、零件停产或维修成本接近更换时，更换可能更合适；具体选择要结合状态和可用零件判断。
          </p>
        </div>
      }
    />
  ),
});
