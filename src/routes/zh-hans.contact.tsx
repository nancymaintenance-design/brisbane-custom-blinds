import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { ChineseSiteLayout } from "@/components/chinese-site-layout";
import { SITE, absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";

export const Route = createFileRoute("/zh-hans/contact")({
  head: () => ({
    meta: [
      { title: "联系 Brisbane Curtains Online | 布里斯班窗帘与百叶帘" },
      {
        name: "description",
        content: `联系 Brisbane Curtains Online，讨论布里斯班窗帘、卷帘、百叶帘、电动窗饰或维修需求。也可致电 ${SITE.phoneDisplay}。`,
      },
      { property: "og:title", content: "联系 Brisbane Curtains Online" },
      { property: "og:description", content: "告诉我们所在郊区、窗户情况和希望改善的问题。" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: absoluteUrl("/zh-hans/contact") },
    ],
    links: languageLinks("/contact", "/zh-hans/contact", "/zh-hans/contact"),
  }),
  component: ChineseContact,
});

function ChineseContact() {
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim()) return;

    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!phone && !email) {
      setNotice("请至少填写电话号码或邮箱，以便客服回复。");
      return;
    }

    const suburb = String(data.get("suburb") || "未填写郊区");
    const subject = `布里斯班窗帘需求 - ${suburb}`;
    const body = [
      `姓名 / Name: ${String(data.get("name") || "")}`,
      `电话 / Phone: ${phone}`,
      `邮箱 / Email: ${email}`,
      `郊区 / Suburb: ${suburb}`,
      `咨询类型 / Service: ${String(data.get("service") || "")}`,
      `窗户数量 / Approximate windows: ${String(data.get("windowCount") || "未填写")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    const openEmailDraft = () => {
      window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setNotice(
        `在线发送暂不可用。如未打开邮件应用，请直接发送至 ${SITE.email} 或致电 ${SITE.phoneDisplay}。`,
      );
    };

    if (!SITE.quoteFormEndpoint) {
      openEmailDraft();
      return;
    }

    setNotice("");
    setSubmitting(true);
    try {
      const response = await fetch(SITE.quoteFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          phone,
          email,
          suburb: suburb.trim(),
          service: String(data.get("service") || "").trim(),
          windowCount: String(data.get("windowCount") || "").trim(),
          message: String(data.get("message") || "").trim(),
          consent: data.get("consent") === "on",
          website: "",
          sourcePath: window.location.pathname,
          language: "zh-Hans",
        }),
      });
      if (!response.ok) throw new Error("delivery unavailable");
      setNotice("谢谢，您的窗帘需求已被网站接收并转交客服。正式报价及项目安排会另行确认。");
      form.reset();
    } catch {
      openEmailDraft();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <ChineseSiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container-luxe grid gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow text-gold">联系 Brisbane Curtains Online</div>
            <h1 className="mt-3 font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
              告诉我们您的窗户需求。
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">
              请提供所在郊区、窗户近似尺寸、房间用途，以及希望改善的采光、隐私、遮光、操作或维修问题。我们会根据这些信息与您讨论合适的下一步。
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["拍摄全景", "房间全景和窗户近照能帮助理解现场条件。"],
                ["提供近似尺寸", "先填写宽度、高度和窗户数量即可开始沟通。"],
                ["说明主要目标", "隐私、采光、遮光、操作、智能控制或维修问题。"],
              ].map(([title, copy]) => (
                <div key={title} className="border border-border/70 bg-[oklch(0.955_0.014_82)] p-4">
                  <div className="eyebrow text-gold">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-6 text-sm">
              <div>
                <div className="eyebrow text-gold">电话</div>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 block font-serif text-3xl text-ink hover:text-gold"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="eyebrow text-gold">邮箱</div>
                <a
                  href={SITE.emailHref}
                  className="mt-1 block break-all font-serif text-xl text-ink hover:text-gold"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <div className="eyebrow text-gold">服务地区</div>
                <p className="mt-1 text-foreground/80">
                  布里斯班，昆士兰州；具体服务范围以项目确认为准。
                </p>
              </div>
            </div>
            <div className="mt-10 border-l-2 border-gold bg-[oklch(0.955_0.014_82)] p-5 text-sm leading-relaxed text-foreground/75">
              产品、测量、安装、价格和保修以正式报价及项目确认为准。
            </div>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="space-y-5 border border-border bg-[oklch(0.955_0.014_82)] p-8 md:p-10"
          >
            <h2 className="font-serif text-2xl text-ink">提交窗帘需求</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE.quoteFormEndpoint
                ? `网站将这些资料发送给 ${SITE.email}。如在线发送中断，仍可使用电话或邮箱。`
                : `本表单会准备一封发送至 ${SITE.email} 的邮件；需在邮件应用中检查并自行发送。`}
            </p>
            <label
              className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            {[
              { name: "name", label: "姓名", type: "text", required: true },
              {
                name: "email",
                label: "邮箱（电话或邮箱至少填一项）",
                type: "email",
                required: false,
              },
              {
                name: "phone",
                label: "电话号码（电话或邮箱至少填一项）",
                type: "tel",
                required: false,
              },
              { name: "suburb", label: "布里斯班所在郊区", type: "text", required: true },
              { name: "windowCount", label: "近似窗户数量", type: "number", required: false },
            ].map((field) => (
              <label key={field.name} className="block">
                <span className="eyebrow">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  min={field.name === "windowCount" ? 1 : undefined}
                  step={field.name === "windowCount" ? 1 : undefined}
                  inputMode={field.name === "windowCount" ? "numeric" : undefined}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                />
              </label>
            ))}
            <label className="block">
              <span className="eyebrow">咨询类型</span>
              <select
                name="service"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm"
              >
                <option value="Custom curtains">定制窗帘</option>
                <option value="Blinds or related window furnishings">卷帘、百叶帘或其他窗饰</option>
                <option value="Motorised curtains">电动窗帘或电动卷帘</option>
                <option value="Curtain or blind repairs">窗帘或百叶帘维修咨询</option>
                <option value="Not sure yet">暂不确定</option>
              </select>
            </label>
            <label className="block">
              <span className="eyebrow">项目说明</span>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm"
                placeholder="房间用途、近似尺寸、隐私和采光需求、希望的款式、操作或维修问题"
              />
            </label>
            <label className="flex items-start gap-3 text-sm text-foreground/80">
              <input
                name="consent"
                type="checkbox"
                required
                className="mt-1 size-4 accent-[var(--color-ink)]"
              />
              <span>我同意 Example Services 使用这些资料联系我并回复本次需求。</span>
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? "正在发送……" : SITE.quoteFormEndpoint ? "发送需求" : "打开邮件应用发送"}
            </button>
            {notice && (
              <p role="status" className="text-sm text-foreground/80">
                {notice}
              </p>
            )}
          </form>
        </div>
      </section>
    </ChineseSiteLayout>
  );
}
