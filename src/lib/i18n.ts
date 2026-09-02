import { absoluteUrl } from "@/config/site";

export const LANGUAGE_PATHS = {
  "/": "/zh-hans",
  "/curtains": "/zh-hans/curtains",
  "/blinds": "/zh-hans/blinds",
  "/motorised-curtains": "/zh-hans/motorised-curtains",
  "/curtain-repairs": "/zh-hans/curtain-repairs",
  "/gallery": "/zh-hans/gallery",
  "/about": "/zh-hans/about",
  "/contact": "/zh-hans/contact",
} as const;

export type EnglishLanguagePath = keyof typeof LANGUAGE_PATHS;
export type ChineseLanguagePath = (typeof LANGUAGE_PATHS)[EnglishLanguagePath];

export function chinesePathFor(pathname: string) {
  return LANGUAGE_PATHS[pathname as EnglishLanguagePath];
}

export function englishPathFor(pathname: string) {
  const normalizedPathname = pathname === "/zh-hans/" ? "/zh-hans" : pathname;
  return (Object.entries(LANGUAGE_PATHS).find(
    ([, chinese]) => chinese === normalizedPathname,
  )?.[0] ?? undefined) as EnglishLanguagePath | undefined;
}

export function languageLinks(
  englishPath: EnglishLanguagePath,
  chinesePath: ChineseLanguagePath,
  canonicalPath: EnglishLanguagePath | ChineseLanguagePath,
) {
  return [
    { rel: "canonical", href: absoluteUrl(canonicalPath) },
    { rel: "alternate", href: absoluteUrl(englishPath), hreflang: "en-AU" },
    { rel: "alternate", href: absoluteUrl(chinesePath), hreflang: "zh-Hans" },
    { rel: "alternate", href: absoluteUrl(englishPath), hreflang: "x-default" },
  ];
}
