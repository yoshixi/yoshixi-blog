import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const {
    title,
    pubDatetime,
    modDatetime,
    description,
    language,
    translationKey,
  } = frontmatter;

  const resolvedLanguage = (() => {
    if (language === "ja" || language === "en") return language;
    if (!href) return "";

    const slug = href
      .replace(/^\/posts\//, "")
      .replace(/\/$/, "")
      .split("/")[0];
    const matched = slug.match(/^(ja|en)-/);
    return matched?.[1] ?? "";
  })();

  const resolvedTranslationKey = (() => {
    if (translationKey && translationKey.trim().length > 0) {
      return translationKey.trim();
    }
    if (!href) return "";

    const slug = href
      .replace(/^\/posts\//, "")
      .replace(/\/$/, "")
      .split("/")[0];

    return slug.replace(/^(ja|en)-/, "");
  })();

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li
      className="my-6"
      data-post-card="true"
      data-post-language={resolvedLanguage}
      data-translation-key={resolvedTranslationKey}
    >
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
    </li>
  );
}
