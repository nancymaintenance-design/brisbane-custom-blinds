import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SITE } from "@/config/site";
import RedactedLogo from "@/assets/example-services-logo.jpg";
import { chinesePathFor } from "@/lib/i18n";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/curtains", label: "Curtains" },
  { to: "/blinds", label: "Blinds" },
  { to: "/motorised-curtains", label: "Motorised" },
  { to: "/curtain-repairs", label: "Repairs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const chinesePath = chinesePathFor(pathname);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-luxe flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.brand} home`}>
          <img
            src={RedactedLogo}
            alt="Example Services logo"
            width={40}
            height={40}
            className="size-10 rounded-sm object-cover"
          />
          <span className="leading-tight">
            <span className="block font-serif text-xl leading-none text-ink sm:text-2xl">
              Brisbane Curtains
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.16em] text-gold">
              Online by Example Services
            </span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-5">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-wide text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
              aria-current={pathname === n.to ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {chinesePath && (
            <a
              href={chinesePath}
              lang="zh-Hans"
              hrefLang="zh-Hans"
              className="text-[13px] font-medium text-foreground/80 hover:text-gold"
            >
              中文
            </a>
          )}
          <a
            href={SITE.phoneHref}
            className="hidden md:inline text-[13px] text-foreground/80 hover:text-gold"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="btn-gold hidden sm:inline-flex !py-2 !px-4 !text-[11px]">
            Request a measure &amp; quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="xl:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-navigation" className="xl:hidden border-t border-border/60 bg-background">
          <div className="container-luxe py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                aria-current={pathname === n.to ? "page" : undefined}
                className="text-sm text-foreground/80 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            {chinesePath && (
              <a href={chinesePath} lang="zh-Hans" hrefLang="zh-Hans" className="text-sm text-gold">
                中文版
              </a>
            )}
            <a
              href={SITE.phoneHref}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gold"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-[oklch(0.94_0.018_82)]">
      <div className="container-luxe py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-ink">{SITE.brand}</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Curtain and window furnishing enquiries for Brisbane homes. Contact us to discuss your
            windows, preferred finish and next steps.
          </p>
          <div className="mt-5 text-sm space-y-1 text-foreground/80">
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
            <div>{SITE.areaLabel} — availability confirmed on enquiry</div>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/curtains" className="hover:text-gold">
                Custom Curtains
              </Link>
            </li>
            <li>
              <Link to="/blinds" className="hover:text-gold">
                Blinds &amp; Shutters
              </Link>
            </li>
            <li>
              <Link to="/motorised-curtains" className="hover:text-gold">
                Motorised Curtains
              </Link>
            </li>
            <li>
              <Link to="/curtain-repairs" className="hover:text-gold">
                Repairs &amp; Cleaning
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-luxe py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
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

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
