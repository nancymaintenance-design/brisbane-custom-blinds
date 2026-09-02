import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteLayout } from "@/components/site-layout";
import { SITE, absoluteUrl } from "@/config/site";
import { languageLinks } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Brisbane Curtains Online | Curtain Enquiries" },
      {
        name: "description",
        content: `Discuss a custom curtain or window furnishing enquiry in Brisbane. Call ${SITE.phoneDisplay} or email ${SITE.email}.`,
      },
      { property: "og:title", content: "Contact Brisbane Curtains Online" },
      { property: "og:description", content: "Send details about your Brisbane curtain enquiry." },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: languageLinks("/contact", "/zh-hans/contact", "/contact"),
  }),
  component: Contact,
});

function Contact() {
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
      setNotice("Please provide at least a phone number or email address so we can respond.");
      return;
    }

    const subject = `Brisbane curtain enquiry — ${String(data.get("suburb") || "suburb not supplied")}`;
    const body = [
      `Name: ${String(data.get("name") || "")}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Suburb: ${String(data.get("suburb") || "")}`,
      `Service: ${String(data.get("service") || "")}`,
      `Approximate number of windows: ${String(data.get("windowCount") || "Not supplied")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    const openEmailDraft = () => {
      window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setNotice(
        `Online delivery was unavailable. If no email window opened, email ${SITE.email} directly or call ${SITE.phoneDisplay}.`,
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
          suburb: String(data.get("suburb") || "").trim(),
          service: String(data.get("service") || "").trim(),
          windowCount: String(data.get("windowCount") || "").trim(),
          message: String(data.get("message") || "").trim(),
          consent: data.get("consent") === "on",
          website: "",
          sourcePath: window.location.pathname,
        }),
      });
      if (!response.ok) throw new Error("delivery unavailable");
      setNotice(
        "Thanks — your enquiry has been accepted for delivery to the Brisbane Curtains Online team.",
      );
      form.reset();
    } catch {
      openEmailDraft();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow text-gold">Contact Brisbane Curtains Online</div>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-ink leading-[1.05]">
              Tell us about your windows.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Send your suburb, window photos, approximate measurements and the outcome you want. We
              can then discuss scope, availability and the appropriate next step.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [
                  "Photos help",
                  "A full-room photo and a close view of each window make the enquiry clearer.",
                ],
                [
                  "Rough sizes help",
                  "Approximate window width and drop are enough to start the conversation.",
                ],
                [
                  "Tell us the priority",
                  "Privacy, light control, insulation, motorisation or a repair issue all help.",
                ],
              ].map(([title, copy]) => (
                <div key={title} className="border border-border/70 bg-[oklch(0.955_0.014_82)] p-4">
                  <div className="eyebrow text-gold">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-6 text-sm">
              <div>
                <div className="eyebrow text-gold">Phone</div>
                <a
                  href={SITE.phoneHref}
                  className="mt-1 block font-serif text-3xl text-ink hover:text-gold"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="eyebrow text-gold">Email</div>
                <a
                  href={SITE.emailHref}
                  className="mt-1 block font-serif text-xl text-ink hover:text-gold break-all"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <div className="eyebrow text-gold">Service area</div>
                <p className="mt-1 text-foreground/80">
                  Brisbane, Queensland — availability confirmed on enquiry.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="bg-[oklch(0.955_0.014_82)] border border-border p-8 md:p-10 space-y-5"
          >
            <h2 className="font-serif text-2xl text-ink">Send a curtain enquiry</h2>
            <p className="text-sm text-muted-foreground">
              {SITE.quoteFormEndpoint
                ? `The website sends these details securely to ${SITE.email}. Phone and email remain available if online delivery is interrupted.`
                : `This form prepares an email to ${SITE.email}. Your email application must open before you can review and send it.`}
            </p>
            <label
              className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            {[
              { name: "name", label: "Your name", type: "text", required: true },
              { name: "email", label: "Your email", type: "email", required: false },
              { name: "phone", label: "Phone", type: "tel", required: false },
              { name: "suburb", label: "Brisbane suburb", type: "text", required: true },
              {
                name: "windowCount",
                label: "Approximate number of windows",
                type: "number",
                required: false,
              },
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
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
                />
              </label>
            ))}
            <label className="block">
              <span className="eyebrow">Enquiry type</span>
              <select
                name="service"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm"
              >
                <option>Custom curtains</option>
                <option>Blinds or related window furnishings</option>
                <option>Motorised curtains</option>
                <option>Curtain or blind repairs</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="block">
              <span className="eyebrow">Project details</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm"
                placeholder="Rooms, approximate sizes, light and privacy needs, preferred style and timeframe"
              />
            </label>
            <label className="flex items-start gap-3 text-sm text-foreground/80">
              <input
                name="consent"
                type="checkbox"
                required
                className="mt-1 size-4 accent-[var(--color-ink)]"
              />
              <span>
                I agree that Example Services may use these details to respond to this enquiry.
              </span>
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full disabled:cursor-wait disabled:opacity-60"
            >
              {submitting
                ? "Sending..."
                : SITE.quoteFormEndpoint
                  ? "Send curtain enquiry"
                  : "Open email app to send"}
            </button>
            {notice && (
              <p role="status" className="text-sm text-foreground/80">
                {notice}
              </p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
