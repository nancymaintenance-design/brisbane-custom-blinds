import { createFileRoute } from "@tanstack/react-router";

import { ChineseServicePage } from "@/components/chinese-service-page";
import { absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";
import curtainIllustration from "@/assets/curtains-service.jpg";
import heroIllustration from "@/assets/hero-curtains.jpg";
import installerMotorised from "@/assets/motorised-service.jpg";

export const Route = createFileRoute("/zh-hans/motorised-curtains")({
  head: () => ({
    meta: [
      { title: "布里斯班电动窗帘与电动卷帘 | 智能窗饰" },
      {
        name: "description",
        content:
          "了解布里斯班电动窗帘轨道、电动卷帘、遥控和智能家居控制选择。按窗户尺寸、供电与操作需求比较方案。",
      },
      { property: "og:title", content: "布里斯班电动窗帘与电动卷帘" },
      { property: "og:description", content: "比较电动轨道、卷帘、遥控和智能控制方案。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/motorised-curtains") },
    ],
    links: languageLinks(
      "/motorised-curtains",
      "/zh-hans/motorised-curtains",
      "/zh-hans/motorised-curtains",
    ),
  }),
  component: () => (
    <ChineseServicePage
      eyebrow="布里斯班电动窗饰"
      title="让窗帘和卷帘更方便地开合与定时。"
      intro="电动窗帘适合高窗、大幅窗户、难以触及的位置，也能通过遥控或兼容系统简化日常操作。方案选择需结合尺寸、重量、安装空间、供电和控制需求。"
      heroImage={installerMotorised}
      heroAlt="客厅全高窗饰场景示意图"
      optionsTitle="从单个遥控到多扇窗联动，按使用场景选择控制方式。"
      guideTitle="先确定如何使用，再核对电机、供电和系统兼容性。"
      faqTitle="关于电动窗帘的常见问题"
      cards={[
        {
          title: "电动窗帘轨道",
          description: "适合大幅窗帘、高窗或希望通过遥控简化开合的空间。",
          checklist: "窗宽、窗帘类型和重量、安装位置、电源位置及开合方向。",
          image: installerMotorised,
          imageAlt: "客厅全高窗饰场景示意图",
          evidence: "illustrative",
        },
        {
          title: "电动卷帘",
          description: "可减少手动拉链操作，并支持单扇或多扇窗户的控制组合。",
          checklist: "窗框尺寸、窗户数量、安装空间、供电偏好和日常操作方式。",
          image: heroIllustration,
          imageAlt: "电动卷帘住宅场景示意图",
          evidence: "illustrative",
        },
        {
          title: "遥控与智能控制",
          description: "可按产品系统选择遥控、定时、应用程序或兼容的智能家居控制。",
          checklist: "现有智能家居平台、期望的控制方式、网络和电源情况。",
          image: curtainIllustration,
          imageAlt: "窗帘自动化控制场景示意图",
          evidence: "illustrative",
        },
      ]}
      faqs={[
        {
          question: "现有窗帘可以改成电动的吗？",
          answer:
            "部分窗帘可能通过更换轨道实现电动开合，但要核对褶型、重量、尺寸、安装空间和供电条件。",
        },
        {
          question: "电动窗帘一定需要预留电线吗？",
          answer:
            "不同系统可能采用充电、电池或固定供电。涉及固定供电的电气工作时，应由具备相应资格的服务方确认和执行。",
        },
        {
          question: "能连接现有智能家居系统吗？",
          answer:
            "兼容性取决于电机、网关和控制平台。提供正在使用的平台名称后，才能核对具体产品的支持情况。",
        },
        {
          question: "电动窗帘适合哪些窗户？",
          answer:
            "高窗、大幅窗户、难以触及的窗户或需要定时控制的房间通常更值得考虑。最终仍要根据尺寸、重量和安装位置判断。",
        },
      ]}
      guidance={
        <div className="space-y-4">
          <p>
            先决定是需要简单遥控、定时开合，还是希望接入现有智能家居系统。控制目标越清楚，越容易筛选合适的电机与配件。
          </p>
          <p>
            对于正在装修的房屋，可较早考虑窗帘轨道、窗帘盒和电源位置；已有住宅则要结合现有结构比较电池、充电或固定供电方案。
          </p>
        </div>
      }
    />
  ),
});
