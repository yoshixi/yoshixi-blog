import type { CollectionEntry } from "astro:content";

export const SUPPORTED_POST_LANGUAGES = ["ja", "en"] as const;
export type PostLanguage = (typeof SUPPORTED_POST_LANGUAGES)[number];

const isSupportedLanguage = (value: string): value is PostLanguage =>
  SUPPORTED_POST_LANGUAGES.includes(value as PostLanguage);

const normalizeTranslationKey = (value?: string | null) => {
  const key = value?.trim();
  return key && key.length > 0 ? key : null;
};

const getFallbackPairingKey = (post: CollectionEntry<"blog">) =>
  post.id.split("/").at(-1) ?? post.id;

const getPairingKey = (post: CollectionEntry<"blog">) =>
  normalizeTranslationKey(post.data.translationKey) ??
  getFallbackPairingKey(post);

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
  return !post.data.draft;
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
    const pairingKey = getPairingKey(post);

    if (!language) {
      errors.push(
        `[${post.id}] has unsupported language. Use "ja" or "en" in frontmatter or directory name.`
      );
      continue;
    }

    if (!buckets.has(pairingKey)) {
      buckets.set(pairingKey, { ja: [], en: [] });
    }

    buckets.get(pairingKey)?.[language].push(post);
  }

  for (const [pairingKey, groupedPosts] of buckets) {
    for (const language of SUPPORTED_POST_LANGUAGES) {
      const entries = groupedPosts[language];

      if (entries.length === 0) {
        errors.push(
          `[pairingKey="${pairingKey}"] is missing ${language} article.`
        );
      } else if (entries.length > 1) {
        errors.push(
          `[pairingKey="${pairingKey}"] has ${entries.length} ${language} articles (${entries
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
        "All published posts must have exactly one ja/en pair (by translationKey or filename).",
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
  const pairingKey = getPairingKey(post);
  if (!language) return null;

  return (
    posts.find(candidate => {
      if (candidate.id === post.id || candidate.data.draft) return false;
      if (getPairingKey(candidate) !== pairingKey) return false;

      const candidateLanguage = getPostLanguage(candidate);
      return candidateLanguage !== null && candidateLanguage !== language;
    }) ?? null
  );
};
