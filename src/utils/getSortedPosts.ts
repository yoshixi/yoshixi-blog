import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import { resolvedSlugPath } from "./slugify";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .map(post => ({
      ...post,
      slug: resolvedSlugPath(post.id),
    }))
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;
