import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { SITE } from "@/config/site";

const QuoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(30),
  email: z.union([z.string().trim().email().max(200), z.literal("")]),
  suburb: z.string().trim().min(2).max(100),
  service: z.string().trim().min(2).max(120),
  windowCount: z.string().trim().max(30),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
  website: z.string().max(0),
  sourcePath: z.string().trim().max(200),
}).refine((data) => Boolean(data.phone || data.email), { message: "A phone number or email is required." });

const attempts = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 4;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character] || character);
}

function isRateLimited(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > LIMIT;
}

async function handleQuote(request: Request) {
  if (isRateLimited(request)) {
    return Response.json({ ok: false, error: "Please wait before trying again." }, { status: 429 });
  }
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return Response.json({ ok: false, error: "JSON content type required." }, { status: 415 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.QUOTE_FROM_EMAIL?.trim();
  const to = process.env.QUOTE_TO_EMAIL?.trim();
  if (!apiKey || !from || !to) {
    return Response.json(
      { ok: false, error: `Online delivery is unavailable. Call ${SITE.phoneDisplay} or email ${SITE.email}.` },
      { status: 503 },
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  const parsed = QuoteSchema.safeParse(input);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "Please check the required fields." }, { status: 400 });
  }

  const data = parsed.data;
  const rows = [
    ["Name", data.name], ["Phone", data.phone || "Not provided"], ["Email", data.email || "Not provided"],
    ["Suburb", data.suburb], ["Service", data.service], ["Approximate windows", data.windowCount || "Not provided"],
    ["Source page", data.sourcePath], ["Project details", data.message],
  ];
  const html = `<h1>Brisbane curtain enquiry</h1>${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join("")}`;
  const providerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email || undefined,
      subject: `Curtain enquiry - ${data.suburb}`,
      html,
    }),
  });
  if (!providerResponse.ok) {
    return Response.json({ ok: false, error: "Delivery provider did not accept the enquiry." }, { status: 502 });
  }
  return Response.json({ ok: true }, { status: 202 });
}

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      POST: ({ request }) => handleQuote(request),
      GET: async () => new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } }),
    },
  },
});
