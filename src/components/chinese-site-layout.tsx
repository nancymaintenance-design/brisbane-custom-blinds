import { useEffect, useState, type ReactNode } from "react";

import RedactedLogo from "@/assets/example-services-logo.jpg";
import { SITE } from "@/config/site";
import { englishPathFor } from "@/lib/i18n";
import { useRouterState } from "@tanstack/react-router";

const CHINESE_NAV = [
  { href: "/zh-hans", label: "首页" },
  { href: "/zh-hans/curtains", label: "定制窗帘" },
  { href: "/zh-hans/blinds", label: "百叶帘" },
  { href: "/zh-hans/motorised-curtains", label: "电动窗饰" },
  { href: "/zh-hans/curtain-repairs", label: "维修" },
  { href: "/zh-hans/gallery", label: "项目图库" },
  { href: "/zh-hans/about", label: "关于我们" },
  { href: "/zh-hans/contact", label: "联系我们" },
] as const;

export function ChineseSiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const englishPath = englishPathFor(pathname) ?? "/";

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-luxe flex items-center justify-between py-4">
        <a href="/zh-hans" className="flex items-center gap-3" aria-label="布里斯班窗帘首页">
          <img
            src={RedactedLogo}
            alt="Example Services 标志"
            width={40}
            height={40}
            className="size-10 rounded-sm object-cover"
          />
          <span className="leading-tight">
            <span className="block font-serif text-xl leading-none text-ink sm:text-2xl">
              布里斯班窗帘
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.12em] text-gold">
              Online by Example Services
            </span>
          </span>
        </a>
        <nav aria-label="中文主导航" className="hidden xl:flex items-center gap-4">
          {CHINESE_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href || (item.href === "/zh-hans" && pathname === "/zh-hans/")
                  ? "page"
                  : undefined
              }
              className="text-[13px] tracking-wide text-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={englishPath}
            lang="en-AU"
            hrefLang="en-AU"
            className="text-[13px] font-medium text-foreground/80 hover:text-gold"
          >
            English
          </a>
          <a
            href="/zh-hans/contact"
            className="btn-gold hidden sm:inline-flex !px-4 !py-2 !text-[11px]"
          >
            获取报价
          </a>
          <button
            type="button"
            aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={open}
            aria-controls="chinese-mobile-navigation"
            className="xl:hidden text-ink"
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          id="chinese-mobile-navigation"
          className="border-t border-border/60 bg-background xl:hidden"
        >
          <div className="container-luxe flex flex-col gap-3 py-4">
            {CHINESE_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href || (item.href === "/zh-hans" && pathname === "/zh-hans/")
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE.phoneHref}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gold"
            >
              电话 {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function ChineseSiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-[oklch(0.94_0.018_82)]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-ink">{SITE.brand}</div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            为布里斯班住宅客户提供定制窗帘、卷帘、百叶帘、电动窗饰及维修方案。
            查看产品选择和项目案例，或联系我们讨论您的窗户需求。
          </p>
          <div className="mt-5 space-y-1 text-sm text-foreground/80">
            <div>
              <a className="hover:text-gold" href={SITE.phoneHref}>
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <a className="hover:text-gold" href={SITE.emailHref}>
                {SITE.email}
              </a>
            </div>
            <div>服务地区：布里斯班；具体服务范围以项目确认为准。</div>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-4">产品与服务</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/zh-hans/curtains" className="hover:text-gold">
                定制窗帘
              </a>
            </li>
            <li>
              <a href="/zh-hans/blinds" className="hover:text-gold">
                百叶帘与卷帘
              </a>
            </li>
            <li>
              <a href="/zh-hans/motorised-curtains" className="hover:text-gold">
                电动窗饰
              </a>
            </li>
            <li>
              <a href="/zh-hans/curtain-repairs" className="hover:text-gold">
                窗帘与百叶帘维修
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">公司</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/zh-hans/gallery" className="hover:text-gold">
                项目图库
              </a>
            </li>
            <li>
              <a href="/zh-hans/about" className="hover:text-gold">
                关于我们
              </a>
            </li>
            <li>
              <a href="/zh-hans/contact" className="hover:text-gold">
                联系我们
              </a>
            </li>
            <li>
              <a href="/" lang="en-AU" className="hover:text-gold">
                English website
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-luxe flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {SITE.legalName} · ABN {SITE.abn}
          </span>
          <span>
            {SITE.city} · {SITE.region} · {SITE.country}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function ChineseSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ChineseSiteHeader />
      <main className="flex-1">{children}</main>
      <ChineseSiteFooter />
    </div>
  );
}
