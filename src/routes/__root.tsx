import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_INDEXABLE, absoluteUrl } from "../config/site";

function NotFoundComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isChinese = pathname.startsWith("/zh-hans");
  return (
    <>
      <title>
        {isChinese ? "页面未找到 | 布里斯班窗帘" : "Page Not Found | Brisbane Curtains Online"}
      </title>
      <meta
        name="description"
        content={
          isChinese
            ? "您访问的页面不存在，请返回布里斯班窗帘中文首页。"
            : "The requested page could not be found. Return to Brisbane Curtains Online."
        }
      />
      <meta name="robots" content="noindex,nofollow,noarchive" />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <div className="eyebrow text-gold">404</div>
          <h1 className="mt-3 font-serif text-4xl text-ink">
            {isChinese ? "找不到这个页面" : "Page not found"}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {isChinese
              ? "您访问的页面可能已移动、改名或不再存在。"
              : "The page you're looking for has been moved or no longer exists."}
          </p>
          <div className="mt-6">
            <a href={isChinese ? "/zh-hans" : "/"} className="btn-gold">
              {isChinese ? "返回首页" : "Back to home"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isChinese = pathname.startsWith("/zh-hans");
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-ink">
          {isChinese ? "页面暂时无法显示" : "Something went wrong"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isChinese ? "请刷新页面，或返回首页后重试。" : "Please refresh or head back home."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold"
          >
            {isChinese ? "重试" : "Try again"}
          </button>
          <a href={isChinese ? "/zh-hans" : "/"} className="btn-outline-gold">
            {isChinese ? "返回首页" : "Go home"}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Curtains, Blinds & Window Furnishings Brisbane | Brisbane Curtains Online" },
      {
        name: "description",
        content:
          "Explore curtains, blinds, motorised window furnishings and repair enquiries for Brisbane homes.",
      },
      {
        name: "robots",
        content: SITE_INDEXABLE ? "index,follow" : "noindex,nofollow,noarchive",
      },
      { name: "geo.region", content: "AU-QLD" },
      { name: "geo.placename", content: "Brisbane" },
      { property: "og:site_name", content: "Brisbane Curtains Online" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AU" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Curtains, Blinds & Window Furnishings Brisbane" },
      { name: "twitter:title", content: "Curtains, Blinds & Window Furnishings Brisbane" },
      {
        property: "og:description",
        content:
          "Compare curtains, blinds, motorised window furnishings and repair options for Brisbane homes.",
      },
      {
        name: "twitter:description",
        content:
          "Compare curtains, blinds, motorised window furnishings and repair options for Brisbane homes.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        href: "/example-favicon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        rel: "apple-touch-icon",
        href: "/example-favicon-512.png",
        sizes: "512x512",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const language = pathname.startsWith("/zh-hans") ? "zh-Hans" : "en-AU";

  return (
    <html lang={language}>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=window.location.hostname.toLowerCase();if(h!=='example.com'&&h!=='example.com')return;window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','G-XXXXXXXXXX');var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';document.head.appendChild(s);}());`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
