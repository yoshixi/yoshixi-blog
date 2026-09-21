import type { CollectionEntry } from "astro:content";

export const SUPPORTED_POST_LANGUAGES = ["ja", "en"] as const;
export type PostLanguage = (typeof SUPPORTED_POST_LANGUAGES)[number];

const BILINGUAL_ENFORCEMENT_FROM = new Date("2026-09-21T00:00:00Z");

const isSupportedLanguage = (value: string): value is PostLanguage =>
  SUPPORTED_POST_LANGUAGES.includes(value as PostLanguage);

const normalizeTranslationKey = (value?: string | null) => {
  const key = value?.trim();
  return key && key.length > 0 ? key : null;
};

export const getPostLanguage = (
  post: CollectionEntry<"blog">
): PostLanguage | null => {
  if (post.data.language && isSupportedLanguage(post.data.language)) {
    return post.data.language;
  }

  const [languageFromPath] = post.id.split("/");
  return isSupportedLanguage(languageFromPath) ? languageFromPath : null;
};

const isSubjectToBilingualRequirement = (post: CollectionEntry<"blog">) => {
  if (post.data.draft) return false;
  const publishedAt = new Date(post.data.pubDatetime).getTime();
  return publishedAt >= BILINGUAL_ENFORCEMENT_FROM.getTime();
};

export const assertBilingualPairs = (posts: CollectionEntry<"blog">[]) => {
  const targets = posts.filter(isSubjectToBilingualRequirement);
  if (targets.length === 0) return;

  const buckets = new Map<
    string,
    Record<PostLanguage, CollectionEntry<"blog">[]>
  >();
  const errors: string[] = [];

  for (const post of targets) {
    const language = getPostLanguage(post);
    const translationKey = normalizeTranslationKey(post.data.translationKey);

    if (!translationKey) {
      errors.push(`[${post.id}] is missing "translationKey".`);
      continue;
    }

    if (!language) {
      errors.push(
        `[${post.id}] has unsupported language. Use "ja" or "en" in frontmatter or directory name.`
      );
      continue;
    }

    if (!buckets.has(translationKey)) {
      buckets.set(translationKey, { ja: [], en: [] });
    }

    buckets.get(translationKey)?.[language].push(post);
  }

  for (const [translationKey, groupedPosts] of buckets) {
    for (const language of SUPPORTED_POST_LANGUAGES) {
      const entries = groupedPosts[language];

      if (entries.length === 0) {
        errors.push(
          `[translationKey="${translationKey}"] is missing ${language} article.`
        );
      } else if (entries.length > 1) {
        errors.push(
          `[translationKey="${translationKey}"] has ${entries.length} ${language} articles (${entries
            .map(entry => entry.id)
            .join(", ")}).`
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(
      [
        "Bilingual article validation failed.",
        `All published posts since ${BILINGUAL_ENFORCEMENT_FROM.toISOString()} must have exactly one ja/en pair by translationKey.`,
        ...errors.map(error => `- ${error}`),
      ].join("\n")
    );
  }
};

export const findTranslatedPost = (
  posts: CollectionEntry<"blog">[],
  post: CollectionEntry<"blog">
) => {
  const language = getPostLanguage(post);
  const translationKey = normalizeTranslationKey(post.data.translationKey);
  if (!language || !translationKey) return null;

  return (
    posts.find(candidate => {
      if (candidate.id === post.id || candidate.data.draft) return false;
      if (
        normalizeTranslationKey(candidate.data.translationKey) !==
        translationKey
      )
        return false;

      const candidateLanguage = getPostLanguage(candidate);
      return candidateLanguage !== null && candidateLanguage !== language;
    }) ?? null
  );
};
