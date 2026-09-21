import { getCollection, type CollectionEntry } from "astro:content";
import { assertBilingualPairs } from "./postTranslations";

let cachedPosts: CollectionEntry<"blog">[] | null = null;

export const getAllBlogPosts = async () => {
  if (cachedPosts) return cachedPosts;

  const posts = await getCollection("blog");
  assertBilingualPairs(posts);
  cachedPosts = posts;
  return posts;
};

export const getPublishedBlogPosts = async () =>
  (await getAllBlogPosts()).filter(({ data }) => !data.draft);
